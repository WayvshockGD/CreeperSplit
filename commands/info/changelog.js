const { MessageEmbed } = require('discord.js');
const colors = require('../json/embed colors.json');

module.exports.run = (bot, message, args) => {
        
        const embed = new MessageEmbed()
	    .setTitle('Creeper split v1.7')
		.setColor(colors.yellow)
		.setDescription('Whats new in Creepersplit v.1.7')
        .addField('1:', '<a:Yes:747064216619581450> Creeperpslit now has a new Command Handler', true)
        .addField('2:', '<a:Yes:747064216619581450> help menu has been changed to a more simple design', true)
        .addField('3:', '<a:Yes:747064216619581450> new meme commands say `<fun` to see them', true)
        .addField('4:', '<a:Yes:747064216619581450> reload can no longer be accessed by regular people i only selected a few people who can access this command though', true)
        message.channel.send(embed);
    }
	module.exports.help = {
        name: "changelog",
        aliases: ["change"],
        description: "",
        usage: "",
        category: "info",
    };