exports.run = (bot, msg, params) => {

    let member3 = msg.mentions.members.first();
    if(!member3) return msg.reply(":x: " + "| You need to mention a user/member!");
  
    let muteRole3 = msg.mentions.roles.first();
    if(!muteRole3) return msg.reply(":x: " + `| There is no such thing as a \"${muteRole3.name}\" role!`);
  
    member3.removeRole(muteRole3.id);
    msg.channel.send(member3 + ` you have lost the role: ` + muteRole3.name + `!`);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['remove'],
  permLevel: 3
};

exports.help = {
  name: "removerole",
  description: "Remove a role from a mentioned user",
  usage: "removerole [@MENTION] [@ROLE]"
};
