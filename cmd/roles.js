const Discord = require('discord.js');

exports.run = (bot, msg, params) => {

  ROLEZZ = msg.guild.roles.array()
  
  var ROLES = "";

    ROLEZZ.forEach(function(element){
        ROLES += element.name + "\n"
    });
    
    msg.channel.send("```" + "\n" +
                         "---------------------------------" + "\n" +
                         "ALL SERVER ROLES" + "\n" +
                         "---------------------------------" + "\n" +
                         `${ROLES}` + "```");


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['role'],
  permLevel: 0
};

exports.help = {
  name: "roles",
  description: "Get all the roles of a server",
  usage: "roles"
};
