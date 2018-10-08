const Discord = module.require('discord.js');

var Places = [
    "Junk Junction",
    "Haunted Hills",
    "Snobby Shores",
    "Greasy Grove",
    "Pleasant Park",
    "Tilted Towers",
    "Anarchy Acres",
    "Tomato Town",
    "Wailing Woods",
    "Dusty Divot",
    "Lonely Lodge",
    "Retail Row",
    "Shifty Shafts",
    "Salty Springs",
    "Fatal Fields",
    "Moisty Mire",
    "Flush Factory",
    "Lucky Landing",
    "Risky Reels"
];

exports.run = (bot, msg, params) => {

  msg.channel.send("Your chosen place for your fortnite match is: " + Places[Math.floor(Math.random() * Places.length)]);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['drop', 'landing', 'fr'],
  permLevel: 0
};

exports.help = {
  name: "froulette",
  description: "A random drop picker for fortnite",
  usage: "froulette"
};
