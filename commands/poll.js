module.exports = {
	name: 'poll',
	description: 'Reloads a command',
	args: true,
	execute(message, args) {
    
        message.react('👍')
        message.react('👎')

    }
}