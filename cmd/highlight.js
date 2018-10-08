exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send(":x: " + "| Please Enter Something For The Bot To Highligh With Syntax")
  }
  msg.channel.send("```" + params.join(" ") + "```");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hl'],
  permLevel: 0
};

exports.help = {
  name: "highlight",
  description: "Get the bot to use syntax highlighting",
  usage: "highlight [TEXT]"
};
