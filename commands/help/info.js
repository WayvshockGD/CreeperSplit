const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('info Plugin:')
    .setColor('GREEN')
    .setDescription('`Help`, `Changelog`, `ping`, `serverinfo`, `botinfo`, `invite`')
    message.channel.send(embed);

};

module.exports.help = {
    name: "info",
    aliases: [],
    description: "",
    usage: "",
    category: "info",
};