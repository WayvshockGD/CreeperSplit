const { MessageEmbed } = require('discord.js');

module.exports.run = (bot, message, args) => {

        const embed = new MessageEmbed()
       .setTitle('Bot Info:')
       .addField('<:logosquare:745406062869610646>  discord.js version:  |', '`v12.3.1`', true)
       .addField('<:nodejs:745402596352852152> node version:  |', '`v14.5.0`', true)
       .addField('<:creeper:745406088102281336> bot version:', '`v1.5`', true)
        message.channel.send(embed);
    }

    module.exports.help = {
        name: "bot",
        aliases: ["botinfo"],
        description: "",
        usage: "",
        category: "info",
    };