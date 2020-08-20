const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'rainbow',
	description: 'gives a rainbow anime for some reason (shrug)',
	args: false,
	execute(message, args) {
       
        const embed = new MessageEmbed()
        .setTitle('Rainboooooow!')
        .setImage('https://i.imgur.com/W6yT5gq.jpg')
        message.channel.send(embed);
    }
}