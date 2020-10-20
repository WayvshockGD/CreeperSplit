module.exports.run = (bot, message, args) => {

message.channel.send(`${message.author.tag} here is my invite: https://discord.com/api/oauth2/authorize?client_id=701160098399256637&permissions=8&scope=bot`)

};

module.exports.help = {
    name: "invite",
    aliases: [],
    description: "",
    usage: "",
    category: "info",
};