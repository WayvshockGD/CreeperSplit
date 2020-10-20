const { MessageEmbed } = require('discord.js');
module.exports.run = (bot, message, args) => {


		const embed = new MessageEmbed()
		.setTitle(`Help:`)
		.setDescription(`The prefix is: \`<\` \n \n \`<>\` are not required \n\`(disabled)\` means that command is disabled`)
		.addField(`:smiley: Fun:`, `\`among-us (disabled), clyde, dankmeme (disabled), meme (disabled), pp, sacrifice \``, false)
		.addField(`:exclamation: info:`, `\`botinfo, invite, changelog, serverinfo, ping\``)
		.addField(`:shield: Moderation:`, `\`Ban <mention> <reason>, Kick <mention> <reason>\``)
		.addField(`:regional_indicator_e: Other:`, `\`lenny, poll\``)

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