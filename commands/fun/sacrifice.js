const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

var sacrify = [
    "Cthulu",
    "The Flying Spaghetti Monster",
    "the Illuminati",
    "Ben Brode",
    "a local school district",
    "a giant squid",
    "Herobrine",
    "the devil",
    "RNGesusJoe",
    "Bob",
    "get the iPhone X",
    "Santa Claus",
    "God-Emperor Trump",
    "cure cancer",
    "create a new meme",
    "Nyarlathotep",
    "Yogg-Saron",
    "N'Zoth; Y'Shaarj",
    "C'Thun",
    "McDonalds",
    "Dictator Advaith",
    "Slenderman",
    "your mom"
];

        
        const target = message.mentions.members.first() || args.join(" ")
        
         if (!target) {
            return message.channel.send("Please send who or what to sacrifice")
        }
        if (target) {
            return message.channel.send(`${message.author.tag} sacrificed **${target}** to **` + (sacrify[Math.floor(Math.random() * sacrify.length)]) + "**")
        }
    }
    module.exports.help = {
        name: "sacrifice",
        aliases: [""],
        description: "",
        usage: "",
        category: "fun",
    };