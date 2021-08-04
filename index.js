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
        lucy = mineflayer.createBot(options);
        bindEvents(lucy);
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
var hauntear = mineflayer.createBot(options2);
bindEvents(hauntear);

function bindEvents(hauntear) {

    hauntear.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    hauntear.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        hauntear = mineflayer.createBot(options2);
        bindEvents(hauntear);
    }
}
//ice
var ice = mineflayer.createBot(options3);
bindEvents(ice);

function bindEvents(ice) {

    ice.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    ice.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        ice = mineflayer.createBot(options3);
        bindEvents(ice);
    }
}