module.exports = {
	name: 'kick',
	description: 'kick a user in a server',
	args: true,
	execute(message, args) {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("You must have the permmison `kick members` to access this command");
    }
    else{
        
        if(!member)
            //you have to type !kick then @username#1234 as an example
            return message.channel.send("Please Mention someone to for me to kick");
        if(!member.kickable) 
            return message.channel.send("I cannot kick them because i do not have a higher role then them");

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "No reason provided";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} | Reason: ${reason}`);
    }
 }
}
