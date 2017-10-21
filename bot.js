const Discord = require('discord.js');
const bot = new Discord.Client();
const settings =require('./settings.json');
const prefix = settings.prefix;
const fs = require('fs');
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});

var config={
	prefix : settings.prefix,
	botInstance : false
};

var commands = new Enmap();
var aliases = new Enmap();

fs.readdir(`./cmds/`, (err, files) => { // Load commands from files
  if (err) console.error(err);
  console.log(`# of commands: ${files.length}`);
  files.map(f => {
    let props = require(`./cmds/${f}`);
    console.log(`Loading command: ${props.help.name}`);
    commands.set(props.help.name, props);
  });
});

fs.readdir(`./awards/`, (err, files) => { // Load commands from files
  if (err) console.error(err);
  console.log(`# of award commands: ${files.length}`);
  files.map(f => {
    let props = require(`./awards/${f}`);
    commands.set(props.help.name, props);
  });
});

fs.readdir(`./teams/`, (err, files) => { // Load commands from files
  if (err) console.error(err);
  console.log(`# of team commands: ${files.length}`);
  files.map(f => {
    let props = require(`./teams/${f}`);
    commands.set(props.help.name, props);
  });
});

bot.on('message', msg => {
bot.user.setGame('>help')

var input = msg.content.toLowerCase();

	if (msg.author === bot.user) return;
  if (!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(' ')[0].slice(prefix.length).toLowerCase();
  let args = msg.content.split(" ").slice(1);

  if (command != "") console.log(">" + command);

  if (commands.has(command)) {
    let cmd = commands.get(command);
    cmd.run(config, msg, args);
  }

});
bot.login(process.env.BOT_TOKEN);
