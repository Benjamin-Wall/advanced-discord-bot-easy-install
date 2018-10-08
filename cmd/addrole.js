const ms = require('ms')

exports.run = (bot, msg, params) => {

  let member2 = msg.mentions.members.first();
  if (!member2) return msg.reply(":x: " + "| You need to mention a user/member!");

  let muteRole2 = msg.mentions.roles.first();
  if (!muteRole2) return msg.reply(":x: " + `| There is no such role!`);

  let time2 = params[2];
  if (!time2) {
    member2.addRole(muteRole2.id);
    msg.channel.send(member2 + ` you have been given the permanent role: ` + muteRole2.name);
  } else {
    member2.addRole(muteRole2.id);
    msg.channel.send(member2 + ` you have been given the role: ` + muteRole2.name + ` for: ${ms(ms(time2), { long: true })}`);

    setTimeout(function () {
      member2.removeRole(muteRole2.id);
      msg.channel.send(member2 + ` you role has been taken off of you your glory lasted: ${ms(ms(time2), { long: true })}`)

    }, ms(time2));

  };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['add', 'mute'],
  permLevel: 3
};

exports.help = {
  name: "addrole",
  description: "Add role to a certain user",
  usage: "addrole [@ROLE] [@MENTION] [TIME]"
};
