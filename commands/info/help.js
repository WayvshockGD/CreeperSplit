const { MessageEmbed } = require('discord.js');
const emotes = require("../json/emotes.json");
module.exports.run = (bot, message, args) => {

		const em = new MessageEmbed()
		.setAuthor(`${bot.user.username} help`, `${bot.user.displayAvatarURL({format:"png"})}`)
		.setDescription(`My prefix is \`<\`.\n\`<>\` - Optional\n\`[]\` - Required\n**Links**:\n[${emotes.github}GitHub](https://github.com/WayvshockGD/CreeperSplit) | [Invite](https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=470150391) | [Support Server](https://discord.gg/bN9PEde)`)
		.addField(`<:BF_DcStaff:747102891361304646> Moderation`, `\`kick [mention] <reason>\` - Kicks a member of the server. Requires Kick permissions.\n\`ban [mention] <reason>\` - Bans a user from the server. Requires Ban permissions.\n\`slowmode [time: Number]\` - Sets the slowmode of the channel. Requires Manage Channel permissions.`, false)
		.addField(`:joy: Fun`, `\`among-us (disabled)\` - Shows a random Among Us meme.\n\`clyde [message]\` - Generates a clyde image.\n\`dankmeme (disabled)\` - Shows a random meme from [r/dankmemes](https://reddit.com/r/dankmemes)\n\`meme (disabled)\` - Shows a random meme from [r/meme](https://reddit.com/r/meme)\n\`pp <mention>\` - Shows PP size of mentioned user/command author (SFW)\n\`sacrifice [who or what]\` - Sacrifices [who or what] to a random thing`)
		.addField(`:information_source: Info`, `\`botinfo\` - Provides information and statistics about the bot.\n\`invite\` - Provides an invite link for the bot.\n\`changelog\` - Provides bot's change log, new updates.\n\`serverinfo\` - Provides information on the current guild or server.\n\`ping\` - Provides the bot latency in milliseconds.\n\`privacy\` - Provides the bot's Privacy Policy.\n\`help\` - Provides a list of commands.`)
		.addField(`:eyes: Other`,`\`lenny\` - Generates a copy+paste Lenny.\n\`poll [content]\` - Creates a simple yes/no poll.\n\`rainbow\` - Generates a random rainbow image`)
		if (bot.config.owners.includes(message.author.id)) {
			em.addField(`:computer: Developer`, `\`eval [code]\` - Evaluates code.\n\`reload [command]\` - Reloads a command.`)
		}
		message.channel.send(em);
	}

	module.exports.help = {
        name: "help",
        aliases: ["h"],
        description: "Provides a full list of commands.",
        usage: "",
        category: "info",
    };
