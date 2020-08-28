const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('other Plugin:')
    .setColor('GREEN')
    .setDescription('`lenny`, `poll`, `rainbow`')
    message.channel.send(embed);

};

module.exports.help = {
    name: "other",
    aliases: [],
    description: "",
    usage: "",
    category: "info",
};