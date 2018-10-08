const Discord         = module.require('discord.js');
var jimp              = require("jimp");
var fs                = require('fs');

exports.run = (bot, msg, params) => {

  var fileName = './images/trump_original.png';
  var imageCaption = params.join(" ");
  var loadedImage;

  if(imageCaption.length > 140){
    return msg.channel.send("Oops looks like what you are trying to get trump to tweet is over 140 characters, try again")
  }

  function writeImage() {
    jimp.read(fileName)
      .then(function (image) {
          loadedImage = image;
          return jimp.loadFont(jimp.FONT_SANS_64_BLACK);
      })
      .then(function (font) {
          loadedImage.print(font, 45, 160, imageCaption, 1250)
                     .write("./images/trump_edited.png");
      })
      .catch(function (err) {
          console.error(err);
      });
    }

    function sendImage() {
        msg.channel.send({files: [
            {
              attachment: "./images/trump_edited.png",
              name: "trump.png"
            }
          ]});
    }

    writeImage();

    setTimeout(sendImage, 5000);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['trump'],
  permLevel: 0
};

exports.help = {
  name: "tweet",
  description: "Make donald trump tweet",
  usage: "tweet [TEXT]"
};
