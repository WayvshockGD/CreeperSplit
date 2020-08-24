module.exports.run = (bot, message, args) => {
        message.channel.send("Getting your lenny").then(msg => {
            msg.edit(`( ͡° ͜ʖ ͡°)`)
          });
  }
  module.exports.help = {
        name: "lenny",
        aliases: ["len"],
        description: "",
        usage: "",
        category: "fun",
    };