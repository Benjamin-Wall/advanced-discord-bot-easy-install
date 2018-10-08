var fortunes = [
  "yes",
  "no",
  "maybe",
  "dont know, try again"
];

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")
  }
  if (params[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
  else msg.channel.send(":x: " + "| I Wasnt Able To Read That :(");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ball'],
  permLevel: 0
};

exports.help = {
  name : "8ball",
  description: "Gives you an answer for those essential questions",
  usage: "8ball [question]"
};
