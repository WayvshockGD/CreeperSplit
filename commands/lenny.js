module.exports = {
	name: 'lenny',
	description: 'its a lenney (lenny)',
	args: false,
	execute(message, args) {
        message.channel.send("Getting your lenny").then(msg => {
            msg.edit(`( ͡° ͜ʖ ͡°)`)
          });
  }
}