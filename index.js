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

var options2 = {
    host: 'mc.mineberry.net',
    username: 'Xaniity',
    version: "1.8.9",
};

var bot2 = mineflayer.createBot(options2);
bindEvents(bot2);

function bindEvents(bot2) {

    bot2.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot2.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options2);
        bindEvents(bot);
    }
}

var options3 = {
    host: 'mc.mineberry.net',
    username: 'StingEucliffe_',
    version: "1.8.9",
};

var bot3 = mineflayer.createBot(options3);
bindEvents(bot3);

function bindEvents(bot3) {

    bot3.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot3.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options3);
        bindEvents(bot);
    }
}

var options4 = {
    host: 'mc.mineberry.net',
    username: 'Zakreedanub',
    version: "1.8.9",
};

var bot4 = mineflayer.createBot(options4);
bindEvents(bot4);

function bindEvents(bot4) {

    bot4.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot4.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options4);
        bindEvents(bot);
    }
}

var options5 = {
    host: 'mc.mineberry.net',
    username: 'Hauntear',
    version: "1.8.9",
};

var bot5 = mineflayer.createBot(options5);
bindEvents(bot5);

function bindEvents(bot5) {

    bot5.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot5.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options5);
        bindEvents(bot);
    }
}

var options6 = {
    host: 'mc.mineberry.net',
    username: 'Jfreefortnite',
    version: "1.8.9",
};

var bot6 = mineflayer.createBot(options6);
bindEvents(bot6);

function bindEvents(bot6) {

    bot6.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot6.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options6);
        bindEvents(bot);
    }
}

var options7 = {
    host: 'mc.mineberry.net',
    username: '',
    version: "1.8.9",
};

var bot7 = mineflayer.createBot(options7);
bindEvents(bot7);

function bindEvents(bot7) {

    bot7.on('error', function(err) {
        console.log("Bot has encountered an error");
    });

    bot7.on('end', function() {
        console.log("Bot has ended");
        setTimeout(relog, 0);
    });

    function relog() {
        console.log("reconnecting");
        bot = mineflayer.createBot(options7);
        bindEvents(bot);
    }
}
