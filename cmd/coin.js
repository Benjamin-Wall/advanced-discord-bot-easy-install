var hd = [
  "Heads",
  "Tails"
];

exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flip'],
  permLevel: 0
};

exports.help = {
  name: "coin",
  description: "Flips a coin",
  usage: "coin"
};
