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
var bot1 = mineflayer.createBot(options1);
bindEvents(bot1);
var bot2 = mineflayer.createBot(options2);
bindEvents(bot2);
var bot3 = mineflayer.createBot(options3);
bindEvents(bot3);
var bot4 = mineflayer.createBot(options4);
bindEvents(bot4);
var bot5 = mineflayer.createBot(options5);
bindEvents(bot5);
