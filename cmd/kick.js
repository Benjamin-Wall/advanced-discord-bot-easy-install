exports.run = (bot, msg, params) => {

  if (msg.mentions.users.size === 0){
    return msg.reply(":x: " + "| Please Mention A User To Kick Next Time").catch(console.error);
  }
  let kickmember = msg.guild.member(msg.mentions.users.first());
  if(!kickmember){
    msg.reply(":x: " + "| That User Does Not Seem Valid!");
  }
  if(!msg.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return msg.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }
  kickmember.kick().then(member => {
    msg.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
  }).catch(console.error)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 3
};

exports.help = {
  name: "kick",
  description: "Kick a mentioned person from the server",
  usage: "kick [MENTION]"
};
