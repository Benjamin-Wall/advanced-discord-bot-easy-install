var settings  = '../settingsConfig/settings.json';
var file = require(settings)
var fs  = require('fs')

exports.run = (bot, msg, params) => {

    if(!params[0]){
      return msg.channel.send(":x: " + "| Please Enter a prefix ¯\\_(ツ)_/¯")
    }

    var prefix_val = params[0];
    file.prefix[msg.guild.id] = prefix_val;

    fs.writeFile(settings, JSON.stringify(file, null, 2), function (err) {

      msg.channel.send(":white_check_mark: " + "| The NEW Prefix for this bot is: " + prefix_val);
    });

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 3
};

exports.help = {
  name: "prefix",
  description: "Change the server prefix",
  usage: "prefix [NEW PREFIX]"
};
