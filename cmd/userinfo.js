const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let memberInfo = msg.mentions.members.first();

  if(!memberInfo){
    var userinfo = new Discord.EmbedBuilder()
        .addFields({ name:"-----User info----- ", value:
                  "**Full Username: **" + `${msg.author.username}#${msg.author.discriminator}` + "\n" +
                  "**ID: **" + msg.author.id + "\n" +
                  "**Created At: **" + msg.author.createdAt, inline: true })

        .setThumbnail(msg.author.avatarURL)

        msg.channel.send(userinfo);

  }else{

    var userinfoo = new Discord.EmbedBuilder()
        .addFields({ name: "-----User info----- ", value: 
                  "**Full Username: **" + `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" +
                  "**ID: **" + memberInfo.id + "\n" +
                  "**Created At: **" + memberInfo.user.createdAt, inline: true })

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
