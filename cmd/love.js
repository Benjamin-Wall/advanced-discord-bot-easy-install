var Responses = [
  "yes",
  "no",
  "maybe",
  "dont know, try again",
  "Of course no, try again maybe",
  "i mean, i guess so",
  "if you say so",
  "im not saying anything but you know the answer",
  "definately not",
  "its a possibility",
  "a huge chance",
  "a small chance",
  "you better hope so",
  "you better not hope so"
];

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.channel.send(":x: " + "| Please Enter A person/object")
}

if (params[0]) {
  msg.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "love",
  description: "Test your love with this command",
  usage: "love [MENTION]"
};
