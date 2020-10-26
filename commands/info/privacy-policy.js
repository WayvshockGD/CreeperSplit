const d = require('discord.js')
module.exports.run = async(bot, message, args) => {
    const embed = new d.MessageEmbed()
    .setTitle(`${bot.user.username}'s Privacy Policy`)
    .addFields(
        {
            name: "What data do we collect?", value: `${bot.user.username} does not collect any user information.`, inline: false,
        },
    )
    .setColor("GREEN")
    .setTimestamp()

    message.channel.send(embed)
};

module.exports.help = {
    name: "privacy",
    description: "",
    usage: "",
    category: "info"
}