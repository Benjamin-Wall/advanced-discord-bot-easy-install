var settings = '../settingsConfig/settings.json';
var file = require(settings)
var memes = require('dankmemes');

exports.run = (bot, msg, params) => {

  memes('all', 100, function(err, data) {
    var rand = Math.floor(Math.random() * 100);
    var test = data[rand];
    msg.channel.send(test);
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['meme', 'dank'],
  permLevel: 0
};

exports.help = {
  name: "memes",
  description: "Get a random meme from reddit",
  usage: "memes"
};
