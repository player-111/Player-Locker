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
var options3 = {
    host: 'mc.mineberry.net',
    username: 'iceplant',
    version: "1.8.9",
};
var options4 = {
    host: 'mc.mineberry.net',
    username: 'Xaniity',
    version: "1.8.9",
};
//andre
var bot = mineflayer.createBot(options);
bot = mineflayer.createBot(options1)
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
        bot = mineflayer.createBot(options,options1);
        bindEvents(bot);
    }
}
