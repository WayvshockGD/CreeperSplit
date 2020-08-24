const { MessageEmbed } = require('discord.js');

module.exports.run = (bot, message, args) => {
     
        const embed = new MessageEmbed()
        .setDescription('Null = Nothing')
        .setColor('RANDOM')
        .setTitle('<:discord:745401257937731734> ServerInfo:')
        .addField('Owner:', `${message.guild.owner}`, true)
        .addField('<a:aBlobdance:739851326544019468> Number of users:', `${message.guild.memberCount}`, true)
        .setFooter(`name: ${message.guild.name} | ${message.guild.nameAcronym} | id: ${message.guild.id}`)
        .addField('verification level:', `${message.guild.verificationLevel}`, true)
        .addField('is large:', `${message.guild.large}`, true)
        .addField(' <:verified_server:744941965505986581> is verifed:', `${message.guild.verified}`, true)
        .addField('<:Text_Channel:743227778153054301> Region:', `${message.guild.region}`, true)
        .addField('afk channel:', `${message.guild.afkChannel}`, true)
        message.channel.send(embed);
    }

    module.exports.help = {
        name: "serverinfo",
        aliases: ["server"],
        description: "",
        usage: "",
        category: "info",
    };