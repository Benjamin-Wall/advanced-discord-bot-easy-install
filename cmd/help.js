exports.run = (bot, msg, params, perms, prefix) => {
    if (!params[0]) {
      msg.channel.send(`= Command List =\n\n[Use ${prefix}help <commandname> for details]\n\n${bot.commands.map(c=>`${c.help.name}:: ${c.help.description}`).join("\n")}`, {code: "asciidoc"});
  } else {
    let command = params[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      msg.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code: "asciidoc"});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "help",
  description: "Returns page details from root's awesome bot guide.",
  usage: "help [command]"
};
