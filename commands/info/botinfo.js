const { MessageEmbed } = require('discord.js');
const colors = require('../json/embed colors.json');
const emote = require('../json/emotes.json')

module.exports.run = (bot, message, args) => {

        const embed = new MessageEmbed()
       .setTitle('Bot Info:')
       .setColor(colors.green)
       .addField(`${emote.djs} Discord.js version:  |`, '`v12.3.1`', true)
       .addField(`${emote.node} Node.JS version:  |`, '`v14.5.0`', true)
       .addField('bot version:', '`v1.7`', true)
       .addField(`Guilds: |`, `\`${bot.guilds.cache.size}\``, true)
       .addField(`Total Users: |`, `\`${bot.users.cache.size}\``, true)
       .addField('Links:', `[Github Repo](https://github.com/WayvshockGD/CreeperSplit) ${emote.github} | [Support Server](https://discord.gg/bN9PEde)`)
        message.channel.send(embed);
    }

    module.exports.help = {
        name: "bot",
        aliases: ["botinfo"],
        description: "",
        usage: "",
        category: "info",
    };
