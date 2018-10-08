const Discord = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, msg, params) => {

  if (msg.mentions.users.size === 0){
    return msg.reply(":x: " + "| Please Mention A User To Kick Next Time");
  }

  let kickmember = msg.guild.member(msg.mentions.users.first());
  if(!kickmember){
    msg.reply(":x: " + "| That User Does Not Seem Valid!");
  }

  if(!msg.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return msg.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }

  let VOTE_TEXT = await msg.channel.send("Vote now! (10 Seconds)");
  await VOTE_TEXT.react(agree);
  await VOTE_TEXT.react(disagree);

  const reactions = await VOTE_TEXT.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  VOTE_TEXT.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Votes needed to kick (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await msg.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      msg.reply(`${member.user.username} was succesfully kicked`)
    })
  }else{

    msg.channel.send("\n" + "SAFE..... FOR NOW");
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vkick'],
  permLevel: 0
};

exports.help = {
  name: "votekick",
  description: "You dont need to be an admin to kick people",
  usage: "votekick [@MENTION]"
};
