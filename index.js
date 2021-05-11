//Joe Brantley
const chalk = require('chalk')

console.log(chalk.blue('hello world'))

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "?"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.');
  }
  else {
    let args = msg.content.substring(PREFIX.length).split(" ");
  console.log(args)

  switch(args[0]){
      case 'website':
      msg.channel.send("http//www.youtube.com/user/kir10s")
      case 'avatar':
      msg.reply(msg.author.displayAvatarURL())
      break
      case 'clear':
        if(!args[1]){
            return msg.reply("err define second parameter")
        } else
        {
            msg.channel.bulkDelete(args[1])
            break
        }
  }
  }

  
});


//client.on('message')

client.login('ODM5OTEzMTQyMTE2MDI0MzQx.YJQkEQ.-tdRmNY4FcJuw89ObN6h5tiInPk');