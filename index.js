var mineflayer = require('mineflayer');

var options = {
    host: 'mc.mineberry.net',
    port: 25565,
    username: 'nameeeeee',
    version: "1.8.9",
};

var bot = mineflayer.createBot(options);
bindEvents(bot);

function bindEvents(bot) {

    bot.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options);
        bindEvents(bot);
    }
}
