const { MessageEmbed } = require('discord.js')

module.exports.run = (bot, message, args) => {

    const PingEmbed = new MessageEmbed()
    .setTitle(`Pong!`)
    .setDescription(`Bot ping:\n\`\`\`js\n ${Date.now() - message.createdTimestamp} \n\`\`\``)
    .setColor(bot.config.embed_color)
    message.channel.send(PingEmbed)
  }

  module.exports.help = {
    name: "ping",
    aliases: ["pingbot"],
    description: "",
    usage: "",
    category: "info",
};