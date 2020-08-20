module.exports = {
	name: 'help',
	description: 'Reloads a command',
	args: true,
   const embed = new MessageEmbed()
		.setTitle('Help:')
		.setColor('#FFFF00')
		.setThumbnail('https://i.imgur.com/AcwbDOF.png')
		.addField('🛡️ **moderation**:', '`<kick`, `<ban`', true)
		.addField('🤖 **bot:**','`<ping`, `<changelog or <news`, `<botinfo`', true)
		.addField('📜 **extra:**','`<poll`, `<serverinfo or <server`', true)
		.addField('fun:', '`<rainbow`, `<lenny`', true)
		message.channel.send(embed);
  }
};
