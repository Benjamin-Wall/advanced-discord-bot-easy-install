exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + " " + "Pong!");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Get a simple Pong response",
  usage: "ping"
};
