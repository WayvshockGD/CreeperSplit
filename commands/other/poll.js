module.exports.run = (bot, message, args) => {
	   
	message.react('👍')
        message.react('👎')

    }

    module.exports.help = {
        name: "poll",
        aliases: ["polll"],
        description: "",
        usage: "",
        category: "other",
    };