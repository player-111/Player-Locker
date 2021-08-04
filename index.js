var mineflayer = require('mineflayer');
const ice = require('./iceplant.js');
const sting = require('./sting.js');
const lucy = require('./lucy.js');
const zak = require('./zak.js');
const tim = require('./tim.js');
const dxtr = require('./dxtr.js');
const xanity = require('./xanity.js');
const jfree = require('./jfree.js');
const abyys = require('./abyys.js');
const daddy = require('./daddy.js');
const egg = require('./eggplant.js');
const hauntear = require('./hauntear.js');
var options = {
    host: 'mc.mineberry.net',
    username: 'andre2dolars',
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
