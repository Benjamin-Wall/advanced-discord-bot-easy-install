const ms = require('ms')

exports.run = async (bot, msg, params) => {

  var get_message = await msg.channel.send("Generating avatar...");
  let target = msg.mentions.users.first() || msg.author;

  await msg.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});
  
  get_message.delete();

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pic', 'picture'],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "Gets the avatar of a mentioned user",
  usage: "avatar [@MENTION]"
};
