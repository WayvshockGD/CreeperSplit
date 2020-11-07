module.exports.run = async(bot, message, args) => {
  const res = [
    'Getting your lenny...',
    'Lenny coming soon:tm:',
    'Why do you want this lenny tbh'
  ];
  const rand = Math.floor(Math.random() * res.length);

        const m = await message.channel.send(`${res[rand]}`);
        m.edit(`( ͡° ͜ʖ ͡°)`) 
  }
  module.exports.help = {
        name: "lenny",
        aliases: ["len"],
        description: "",
        usage: "",
        category: "fun",
    };