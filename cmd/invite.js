const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.MessageEmbed()

          .addFields({ name: "__**" + "INVITE LINK: " + "**__", value: "https://discord.gg/TyM8AkG", inline: true })
          .addFields({ name: "__**" + "Bot Invite Link: " + "**__", value: "https://discordapp.com/oauth2/authorize?client_id=353154808078794752&scope=bot&permissions=2146958591", inline: false })


          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "Get the invite link for help server",
  usage: "invite"
};
