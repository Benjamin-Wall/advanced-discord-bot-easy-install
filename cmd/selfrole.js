exports.run = (msg, params, prefix) => {

  if(params[0] == "roles"){
    return msg.channel.send("```" + 
                            "----- All of the available self-roles (Case-Sensitive) -----" + "\n" + 
                            "DJ" + "\n" + 
                            "Fortnite Players" + "```")

  }

  let role = msg.guild.roles.find("name", params.join(" "));
  if (!role) return msg.channel.send(`There is no such role try using "${prefix}self roles" to see all the available self-roles`);
  let target = msg.member;


  function RoleChecker(SELF_ROLE){

    var notAllowed = ["Owner", "ADMIN BOT", "BOTS", "Higher-up Members", "Rythm", "MusicDOOOD", "Now Live", "Mee6",  "PatchBot", "fnbr.co"]

    for(var currentStatIndex = 0; currentStatIndex < notAllowed.length; currentStatIndex++) {
      if(SELF_ROLE == notAllowed[currentStatIndex]){
        return msg.reply("You are not allowed to self assign the role: " + role.name)
      }else{
        return target.addRole(role.id).then(() => {
          msg.channel.send(`You have been given the: "${role.name}" role!`)
        })
      }
    }
  }

RoleChecker(role.name)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['role', 'self'],
  permLevel: 0
};

exports.help = {
  name: "selfrole",
  description: "Add a role to yourself",
  usage: "selfrole [@ROLE]"
};
