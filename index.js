var mineflayer = require('mineflayer');
var options = {
  host: "mc.mineberry.net",
  username: "iceplant",
};

var bot = mineflayer.createBot(options);

    bot.on('login', function() {
      console.log(`I logged in as ${bot.username}`);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");
      bot = mineflayer.createBot(options);
});
