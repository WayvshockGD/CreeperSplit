module.exports.run = (bot, message, args) => {
   
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send("You must have the permision `kick members` to access this command");
    }

    if(!message.guild.me.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(`I need \`Kick\` permissions to kick members!`)
    }
        
        if (!member)
            //you have to type !kick then @username#1234 as an example
            return message.channel.send("Please Mention someone to for me to kick");
        if (!member.kickable) 
            return message.channel.send(`I cannot kick ${member.user.tag}! Please make sure I have a higher role than them!`);

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "No reason provided";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} | Reason: ${reason}`);
    }

 module.exports.help = {
    name: "kick",
    aliases: ["kicky"],
    description: "",
    usage: "<kick @user",
    category: "moderation",
};
  