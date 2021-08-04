var mineflayer = require('mineflayer');

var options = {
    host: 'mc.mineberry.net',
    username: 'andre2dolars',
    version: "1.8.9",
};
var options1 = {
    host: 'mc.mineberry.net',
    username: 'LucyLazy',
    version: "1.8.9",
};
var options2 = {
    host: 'mc.mineberry.net',
    username: 'Hauntear',
    version: "1.8.9",
};
//lucy
var lucy = mineflayer.createBot(options1);
bindEvents(lucy);
function bindEvents(lucy) {

    lucy.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    lucy.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options);
        bindEvents(lucy );
    }
}
//andre
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
//hauntear