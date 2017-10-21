const Discord = require('discord.js');

  exports.run = async(config, msg, bot, params = [] ) => {
    // bot.emojis.get("EMOJI ID").toString(); // is how you send and emoji e.g. in <:bulls:346431902221205514>, "346431902221205514" is the id
	  const embed = new Discord.RichEmbed()
	   .setTitle("<:NBA:348589283940237323> | All Star Game MVP Award")
	   .setThumbnail("https://i.imgur.com/t7H4NZK.png")
	   .setDescription("An annual award given to the player(s) voted best of the annual All-Star Game\n\nClick the reactions to view the list of the winners")
	   .setColor(0x006BB6)
	  const m = await msg.channel.send({ embed }); // update your discord.js with "npm update discord.js"
    await m.react("1⃣");
    await m.react("2⃣")
     const res = await m.awaitReactions((r, u) => (r.emoji.name === "1⃣" || r.emoji.name === "2⃣") && u.id === msg.author.id, {
      max: 1,
      maxEmojis: 1,
      maxUsers: 1
});
if(res.first().emoji.name === "1⃣") {
      const embed = new Discord.RichEmbed()
	  .setColor(0x006BB6)
	  .addField("2010s", "**2017** | Anthony Davis\n**2016** | Russell Westbrook (2)\n**2015**| Russell Westbrook\n**2014** | Kyrie Irving\n**2013** | Chris Paul\n**2012** | Kevin Durant\n**2011** | Kobe Bryant (4)\n**2010** | Dwyane Wade", true)
	  .addField("2000s", "**2009** | Kobe Bryant (3) & Shaquille O'Neal (3)\n**2008** | LeBron James (2)\n**2007** | Kobe Byrant (2)\n**2006** | LeBron James\n**2005** | Allen Iverson (2)\n**2004** | Shaquille O'Neal (2)\n**2003** | Kevin Garnett\n**2002** | Kobe Bryant\n**2001** | Allen Iverson\n**2000** | Shaquille O'Neal & Tim Duncan", true)
	  .addField("1990s", "**1999** | N/A (Lockout) \n**1998** | Michael Jordan (3)\n**1997** | Glen Rice\n**1996** | Michael Jordan (2)\n**1995** | Mitch Richmond\n**1994** | Scottie Pippen\n**1993** | John Stockton & Karl Malone (2)\n**1992** | Magic Johnson (2)\n**1991** | Charles Barkley\n**1990** | Magic Johnson", true)
	 msg.channel.send({embed})
    } else {
      const embed = new Discord.RichEmbed()
	  .setColor(0x006BB6)
	  .addField("1980s", "**1989** | Karl Malone\n**1988** | Michael Jordan\n**1987** | Tom Chambers\n**1986** | Isiah Thomas(2)\n**1985** | Ralph Sampson\n**1984** | Isiah Thomas\n**1983** | Julius Erving (2)\n**1982** | Larry Bird\n**1981** | Nate Archibald\n**1980** | George Gervin", true)
	  .addField("1970s", "**1979** | David Thompson\n**1978** | Randy Smith\n**1977** | Julius Erving\n**1976** | Dave Bing\n**1975** | Walt Frazier\n**1974** | Bob Lanier\n**1973** | Dave Cowens (2)\n**1972** | Jerry West\n**1971** | Lenny Wilkens\n**1970** | Willis Reed", true)
	  .addField("1960s", "**1969** | Oscar Robertson (3)\n**1968** | Hal Greer\n**1967** | Rick Barry\n**1966** | Adrian Smith\n**1965** | Jerry Lucas\n**1964** | Oscar Robertson (2)\n**1963** | Bill Russell\n**1962** | Bob Pettit (4)\n**1961** | Oscar Robertson\n**1960** | Wilt Chamberlain", true)
	  .addField("1950s", "**1959** | Elgin Baylor & Bob Pettit (3)\n**1958** | Bob Pettit (2)\n**1957** | Bob Cousy (2)\n**1956** | Bob Pettit\n**1955** | Bill Sharman\n**1954** | Bob Cousy\n**1953** | George Mikan\n**1952** | Paul Arizin\n**1951** | Ed Macauley", true)
	  msg.channel.send({embed})
    }
    
  };

exports.conf = {
  aliases: ['asgmvp'],
};

exports.help = {
  name : 'asmvp',
};
