const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {

		const embed = new MessageEmbed()
		.setTitle('Help:')
		.setColor('RANDOM')
		.addField('Fun Plugin:', '`<fun`', true)
		.addField('Info Plugin:', '`<info`', true)
		.addField('Other Plugin:', '`<other`', true)
		.addField('Moderation Plugin:', '`<moderation`')
		message.channel.send(embed);
	}

	module.exports.help = {
        name: "help",
        aliases: ["h"],
        description: "",
        usage: "",
        category: "info",
    };
