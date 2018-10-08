var getJSON = require('get-json');
var Discord = require('discord.js');

exports.run = (bot, msg, params) => {

  if(!params){
    return msg.channel.send(":x: " + "| Please enter an inspect link for your awesome skin/weapon");
  }else{
    getJSON("https://api.csgofloat.com:1738/?url=" + params, function(error, data){

      if(data == undefined){
        return msg.channel.send(":x: " + "| Please enter a valid inspect link for your awesome skin/weapon");
      }

    FLOAT_COLOR = "";
    FLOAT_NAME = "";

    if(data.iteminfo.floatvalue >= 0.44 && data.iteminfo.floatvalue < 1){
        FLOAT_COLOR = "0x#FF0000";
        FLOAT_NAME = "Battle-Scarred";
    }

    if(data.iteminfo.floatvalue >= 0.37 && data.iteminfo.floatvalue < 0.44){
        FLOAT_COLOR = "0x#8B0000";
        FLOAT_NAME = "Well-Worn";
    }

    if(data.iteminfo.floatvalue >= 0.15 && data.iteminfo.floatvalue < 0.37){
        FLOAT_COLOR = "0x#FF7F00";
        FLOAT_NAME = "Field-Tested";
    }

    if(data.iteminfo.floatvalue >= 0.07 && data.iteminfo.floatvalue < 0.15){
        FLOAT_COLOR = "0x#FFFF00";
        FLOAT_NAME = "Minimal Wear";
    }

    if(data.iteminfo.floatvalue >= 0.00 && data.iteminfo.floatvalue < 0.07){
        FLOAT_COLOR = "0x#00FF00";
        FLOAT_NAME = "Factory New";
    }

      var float = new Discord.RichEmbed()

      .addField("-----Weapon Stats----- ",
                "**Full Name: **" + data.iteminfo.weapon_type + " | " + data.iteminfo.item_name + ` (${FLOAT_NAME})` + "\n" +
                "**Weapon Name: **" + data.iteminfo.weapon_type + "\n" +
                "**Weapon Skin: **" + data.iteminfo.item_name + "\n" +
                "**Weapon Wear: **" + FLOAT_NAME + "\n" +
                "**Float Value: **" + data.iteminfo.floatvalue, true)

      .setThumbnail(data.iteminfo.imageurl)
      .setColor(FLOAT_COLOR)
      msg.channel.send(float);
    })
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "float",
  description: "Check the float of a CS:GO item",
  usage: "float [INSPECT LINK]"
};
