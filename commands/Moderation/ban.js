module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!message.member.hasPermission("BAN_MEMBERS")){
        return message.channel.send("You don't have the permissions to use this command!");
    }
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(`I don't have Ban permissions!`)
    }
    if (!member)
        return message.channel.send("Please mention a valid member of this server");
    if(!member.bannable) 
        return message.channel.send("I cannot ban this user! Please make sure my role is higher than them!");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";

    try {
        await member.ban(reason)
        message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} | reason: ${reason}`);
    }
    catch(error) {
        message.channel.send(`Sorry ${message.author} I couldn't ban the user`);
    }
}

    module.exports.help = {
        name: "ban",
        aliases: ["ban hammer"],
        description: "",
        usage: "<ban @user",
        category: "moderation",
    };