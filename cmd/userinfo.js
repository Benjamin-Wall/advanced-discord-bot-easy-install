const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let memberInfo = msg.mentions.members.first();

  if(!memberInfo){
    var userinfo = new Discord.RichEmbed()
        .addField("-----User info----- ",
                  "**Full Username: **" + `${msg.author.username}#${msg.author.discriminator}` + "\n" +
                  "**ID: **" + msg.author.id + "\n" +
                  "**Created At: **" + msg.author.createdAt, true)

        .setThumbnail(msg.author.avatarURL)

        msg.channel.send(userinfo);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .addField("-----User info----- ",
                  "**Full Username: **" + `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" +
                  "**ID: **" + memberInfo.id + "\n" +
                  "**Created At: **" + memberInfo.user.createdAt, true)

        .setThumbnail(memberInfo.user.avatarURL)

        msg.channel.send(userinfoo);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "userinfo",
  description: "Get the mentioned persons info",
  usage: "userinfo [@MENTION]"
};
