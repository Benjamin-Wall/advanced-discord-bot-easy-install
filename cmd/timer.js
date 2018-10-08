var ms = require('ms')

exports.run = (bot, msg, params) => {

  let Timer = params[0];

  if(!params[0]){
    return msg.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(params[0] <= 0){
    return msg.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  msg.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    msg.channel.send(msg.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "timer",
  description: "Set a timer for a certain ammount of time",
  usage: "timer [1s/1m/1h/1d]"
};
