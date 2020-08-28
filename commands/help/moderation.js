const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('moderation Plugin:')
    .setColor('GREEN')
    .setDescription('`ban`, `kick`')
    message.channel.send(embed);

};

module.exports.help = {
    name: "moderation",
    aliases: [],
    description: "",
    usage: "",
    category: "info",
};