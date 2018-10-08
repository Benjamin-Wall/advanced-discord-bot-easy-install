exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + " I Have Noticed You, Feel Proud!");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['senpai'],
  permLevel: 0
};

exports.help = {
  name: "notice",
  description: "Be noticed by the bot",
  usage: "notice"
};
