var mineflayer = require('mineflayer');

var options = {
    host: 'mc.mineberry.net',
    username: 'iceplant',
    version: "1.8.9",
}
var options1 = {
    host: 'mc.mineberry.net',
    username: 'andre2dolars',
    version: "1.8.9",
}
var options2 = {
    host: 'mc.mineberry.net',
    username: 'Xaniity',
    version: "1.8.9",
}
var options3 = {
    host: 'mc.mineberry.net',
    username: 'GhostGirl_',
    version: "1.8.9",
}
var options4 = {
    host: 'mc.mineberry.net',
    username: 'Abyys_',
    version: "1.8.9",
}
var options5 = {
    host: 'mc.mineberry.net',
    username: 'GhostGirl_',
    version: "1.8.9",
}

var bot = mineflayer.createBot(options);
bindEvents(bot);
function bindEvents(bot) {
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

