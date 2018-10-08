exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send(":x: " + "| Please Enter Something For The Bot To Say")
  }
  msg.channel.send(params.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['speak', 'say'],
  permLevel: 0
};

exports.help = {
  name: "speak",
  description: "Get the bot to say someting",
  usage: "speak [TEXT]"
};
