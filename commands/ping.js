module.exports = {
	name: 'ping',
	description: 'Reloads a command',
	args: true,
	execute(message, args) {
message.channel.send("Pong...").then(msg => {
    msg.edit(`**Pong!** ${Date.now() - message.createdTimestamp} ms`)
  });
  console.log(args)
  }
}