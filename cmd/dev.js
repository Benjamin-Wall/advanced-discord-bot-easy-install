exports.run = (bot, msg, params) => {

    msg.channel.send("I am ALIVE!!");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['status'],
  permLevel: 4
};

exports.help = {
  name: "dev",
  description: "A quick test to see if the bot is working",
  usage: "dev"
};
