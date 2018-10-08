exports.run = (bot, msg, params) => {

  let min = parseInt(params[0]);
  let max = parseInt(params[1]);

  if(min > max){
      let temp = max;
      max = min;
      min = temp;
  }

  var Result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(isNaN(Result)){
      return msg.channel.send("Please enter a min and a max number")
  }else{
      msg.channel.send(Result);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['num'],
  permLevel: 0
};

exports.help = {
  name: "number",
  description: "get a random number between two values",
  usage: "number [MIN] [MAX]"
};
