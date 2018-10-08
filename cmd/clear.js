exports.run = (bot, msg, params) => {

    let messagecount = parseInt(params[0]);
  
    if(isNaN(messagecount)) return msg.channel.send(":x: " + "| Please Enter A Numeric Value!");
  
    if(messagecount > 100){
      msg.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")
    }else if(messagecount < 2 ) {
      msg.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")
    } else {
  
    }{
      msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purge', 'delete'],
  permLevel: 3
};

exports.help = {
  name: "clear",
  description: "Deletes a specified amount of messages from a channel",
  usage: "clear [NUMBER]"
};
