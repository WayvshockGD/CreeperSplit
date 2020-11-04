const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {


		const embed = new MessageEmbed()
		.setTitle(`Help:`)
		.setDescription(`The prefix is: \`<\` \n \n \`<>\` - Not required \n\`(disabled)\` - Command has been disabled`)
		.addField(`:smiley: Fun:`, `\`among-us (disabled), clyde, dankmeme (disabled), meme (disabled), pp, sacrifice \``, false)
		.addField(`:exclamation: info:`, `\`botinfo, invite, changelog, serverinfo, ping, privacy\``)
		.addField(`:shield: Moderation:`, `\`Ban <mention> <reason>, Kick <mention> <reason>, slowmode <number>\``)
		.addField(`:regional_indicator_e: Other:`, `\`lenny, poll, rainbow\``)
		.addField(`:gear: Settings:`, `\`welcome <channel>\``)

		if(bot.config.owners.includes(message.author.id)) {
			embed.addField(`Developer:`, `\`eval, reload <command>\``)
		}
		message.channel.send(embed);
	}

	module.exports.help = {
        name: "help",
        aliases: ["h"],
        description: "",
        usage: "",
        category: "info",
    };
