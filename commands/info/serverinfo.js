const { MessageEmbed } = require('discord.js');
const emote = require('../json/emotes.json')

module.exports.run = (bot, message, args) => {
     
        const embed = new MessageEmbed()
        .setDescription('Null = Nothing')
        .setColor('RANDOM')
        .setImage(message.guild.iconURL)
        .setTitle('<:discord:745401257937731734> ServerInfo:')
        .addField('Owner:', `${message.guild.owner}`, true)
        .addField('Number of users:', `\`${message.guild.memberCount}\``, true)
        .setFooter(`name: ${message.guild.name} | ${message.guild.nameAcronym} | id: ${message.guild.id}`)
        .addField('verification level:', `\`${message.guild.verificationLevel}\``, true)
        .addField('is large:', `\`${message.guild.large}\``, true)
        .addField(`${emote.verified} is verifed:`, `\`${message.guild.verified}\``, true)
        .addField('Region:', `\`${message.guild.region}\``, true)
        .addField(`${emote.vc} afk channel:`, `\`${message.guild.afkChannel}\` | **TimeOut:** \`${message.guild.afkTimeout}\``, true)
        .addField(`emote number:`, `\`${message.guild.emojis.cache.size}\``, true)
        .addField(`number of roles:`, `\`${message.guild.roles.cache.size}\``, true)
        message.channel.send(embed);
    }

    module.exports.help = {
        name: "serverinfo",
        aliases: ["server"],
        description: "",
        usage: "",
        category: "info",
    };