const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjQ4Mjg3NTIzMjEwMjY0NTc2.XdsC3g.9k5R_iKGKP9baA_9EsrbR5m49rs);//BOT_TOKEN is the Client Secret
