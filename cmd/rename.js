exports.run = (bot, msg, params) => {

    if(!params){
      return msg.channel.send(":x: " + "| Please enter a new name for the bot");
    }
    msg.guild.member(bot.user).setNickname(params.join(" ")).then(user => msg.channel.send("My New NickName is " + params.join(" ") + "!")).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['name'],
  permLevel: 3
};

exports.help = {
  name: "rename",
  description: "Rename the bot to anything",
  usage: "rename [NAME]"
};
