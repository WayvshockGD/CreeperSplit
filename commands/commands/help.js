module.exports = {
	name: 'help',
	description: 'Reloads a command',
	args: true,
    execute(message, args) {
   message.channel.send("bot: `/ping`, `/reload`")
   message.channel.send(" **moderation:** `/ban <mention`, `/kick <mention>`")
   message.channel.send("**user**:") 
  }
};