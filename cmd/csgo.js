var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js')

function getStatData(location , $){
  
  var selector = $('.stats-stat .value').eq(location).text();

  var stat_array = $.parseHTML(selector);

  var stat = 0;

  if(stat_array == null || stat_array.lengh == 0){
    return -1;
    
  }else{
    stat = stat_array[0].data;
  }

  return stat;
}  

exports.run = (bot, msg, params) => {

  var UR_L = "http://csgo.tracker.network/profile/" + params[0];
  
          if(!params[0]){
            return msg.channel.send("Please Enter a valid STEAMID64 or custom url");
          }
  
          request(UR_L, function(err, resp, body){
  
              $ = cheerio.load(body);
  
              var KD = getStatData(0, $);
              if(KD == -1){
                msg.channel.send("Invalid, make sure your profile is not private and you have entered a valid STEAMID64 or Custom URL!");
                return;
              }

              var WIN = getStatData(1, $);
              var HS = getStatData(4, $);
              var MONEY = getStatData(5, $);
              var SCORE = getStatData(6, $);
              var KILLS = getStatData(7, $);
              var DEATHS = getStatData(8, $);
              var MVP = getStatData(9, $);
              var BS = getStatData(13, $);
              var BD = getStatData(14, $);
              var HR = getStatData(15, $);
  
              var STAT = new Discord.RichEmbed()
  
              .setTitle("__***CSGO Stats***__")
              .setURL(UR_L)
  
              .addField("------------------------------------",
                        "Total KD: " + "__**" + KD + "**__" + "\n" +
                        "Total Win%: " + "__**" + WIN + "**__" + "\n" +
                        "Total MVPs: " + "__**" + MVP + "**__" + "\n" +
                        "Total Score: " + "__**" + SCORE + "**__" + "\n" +
                        "Total Kills: " + "__**" + KILLS + "**__" + "\n" +
                        "Total Deaths: " + "__**" + DEATHS + "**__" + "\n" +
                        "Total Bombs Set: " + "__**" + BS + "**__" + "\n" +
                        "Total Bombs Defused: " + "__**" + BD + "**__" + "\n" +
                        "Total Headshots: " + "__**" + HS + "**__" + "\n" +
                        "Total Money Earned: " + "__**" + MONEY + "**__" + "\n" +
                        "Total Hostages Rescued: " + "__**" + HR + "**__" + "\n" +
                        "------------------------------------\n", true)
  
                .setColor("0x#FF0000")
              msg.channel.send(STAT);

  })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cs'],
  permLevel: 0
};

exports.help = {
  name: "csgo",
  description: "Get csgo stats",
  usage: "csgo [STEAMID64 / CUSTOM URL]"
};
