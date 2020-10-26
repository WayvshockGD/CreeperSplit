const { MessageEmbed } = require('discord.js');

module.exports.run = (bot, message, args) => {
       
        const embed = new MessageEmbed()
        .setTitle('Rainboooooow!')
        .setImage('https://i.imgur.com/W6yT5gq.jpg')
        message.channel.send(embed);
    }

    module.exports.help = {
        name: "rainbow",
        aliases: ["rainbow anime"],
        description: "",
        usage: "",
        category: "other",
    };