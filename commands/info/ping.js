module.exports.run = (bot, message, args) => {

  message.channel.send("Pong...").then(msg => {
    msg.edit(`**Pong!** ${Date.now() - message.createdTimestamp} ms`)
  });
  console.log(args)
  }

  module.exports.help = {
    name: "ping",
    aliases: ["pingbot"],
    description: "",
    usage: "",
    category: "info",
};