const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = (bot, message, args) => {

  if (!bot.config.owners.includes(message.author.id)) return;

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have `MANAGE_ROLES` permissions.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("Are you retarted? Why do you wanna mute yourself?")
  if(!tomute) return message.channel.send("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, "Muted");

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#fc6400")
  .addField("User", tomute.user.tag)
  .addField("Moderator",message.author.tag)
  .addField("Reason", `${reason ? reason : "None."}`)
  .setTimestamp();
 message.channel.send(":thumbsup: **| That user has been muted.**")
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("Please create a mod-log channel!")
  channel.send(Embed)
};
 
  module.exports.help = {
    name: "mute",
    aliases: [],
    description: "",
    usage: ",mute @user",
    category: "moderation",
};