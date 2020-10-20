const { inspect } = require("util")
const emote = require('../json/emotes.json')
const { MessageEmbed } = require('discord.js')

module.exports.run = (bot, message, args) => {

    if (!bot.config.owners.includes(message.author.id)) return;

    try {
        let toEval = args.join(" ")
        
        if (!toEval) {
            return message.channel.send(`Error while evaluating: \`air\``);
        } else {
            const embed = new MessageEmbed()
            .setDescription('yeah no')
                   

            if(toEval.includes(`bot.config.token`)) return message.channel.send(embed)
            let hrStart = process.hrtime()
            let hrDiff;
             let evaluated = inspect(eval(toEval, { depth: 0 }));
            hrDiff = process.hrtime(hrStart);
            return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
        }
        
    } catch (e) {
        return message.channel.send(`Error while evaluating: \`${e.message}\``);
    }
}

module.exports.help = {
	name: "eval",
	aliases: [],
	description: "",
	usage: "",
	category: "Developer",
};