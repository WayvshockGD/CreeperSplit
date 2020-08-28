const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('Fun Plugin:')
    .setColor('GREEN')
    .setDescription('`sacrifice`, `meme`, `dankmeme`')
    message.channel.send(embed);

};

module.exports.help = {
    name: "fun",
    aliases: [],
    description: "",
    usage: "",
    category: "info",
};