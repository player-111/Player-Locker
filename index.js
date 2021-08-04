const mineflayer = require('mineflayer')
//1
const bot = mineflayer.createBot({
  host: 'eu.mineberry.net',
  username: 'andre2dolars'
})

bot.on('kicked', function(reason) {
    const bot = mineflayer.createBot({
  host: 'eu.mineberry.net',
  username: 'andre2dolars'
})
    });
bot.on('error', console.log)
