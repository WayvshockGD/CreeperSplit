const { MessageEmbed } = require('discord.js');

module.exports.run = (bot, message, args) => {
        
        const embed = new MessageEmbed()
	    .setTitle('Creeper split v1.5')
		.setColor('#0CFF00')
		.setDescription('<a:check:742730552096063628> Whats new:')
		.addField('1:', '<a:check:742730552096063628> added bot info : D, a new lenny and rainbow command(s)', true)
		.addField('2:', '<a:check:742730552096063628> ban and kick now require you to have the perms', true)
		.addField('3:', '<a:check:742730552096063628> a new user info command will be coming soon', true)
		.addField('4:', '<a:check:742730552096063628> `<help` now displays more commands', true)
		.setFooter('if you have any questions, suggestions or want to help code the bot please dm wayvshockGD#2237')
        message.channel.send(embed);
    }
	module.exports.help = {
        name: "changelog",
        aliases: ["change"],
        description: "",
        usage: "",
        category: "info",
    };