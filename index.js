var mineflayer = require('mineflayer');

var options = {
    host: 'mc.mineberry.net',
    username: 'iceplant',
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

var options1 = {
    host: 'mc.mineberry.net',
    username: 'andre2dolars',
    version: "1.8.9",
};

var bot1 = mineflayer.createBot(options1);
bindEvents(bot1);

function bindEvents(bot1) {

    bot1.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot1.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options1);
        bindEvents(bot);
    }
}

