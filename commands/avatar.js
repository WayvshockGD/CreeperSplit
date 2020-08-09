module.exports = {
	name: 'avatar',
	description: 'Reloads a command',
	args: true,
	execute(message, args) {
        message.reply(message.author.displayAvatarURL());
      }
    }