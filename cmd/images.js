var settings = '../settingsConfig/settings.json';
var file = require(settings)
const GoogleImages = require('google-images');

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.channel.send("Please enter something to search for")
  }

  const client = new GoogleImages(file.CSE, file.API);
    var search = client.search(params.join(" ")).then(function(images) {
      msg.channel.send(images[Math.floor(Math.random() * images.length)].url);
      });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['google', 'image'],
  permLevel: 0
};

exports.help = {
  name: "images",
  description: "Get a random google image",
  usage: "images [QUERY]"
};
