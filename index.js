var options = {
  host: "mc.mineberry.net",
  username: "andre2dolars",
};

var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {
    bot.on('login', function() {
      console.log("I logged in.");
      console.log("settings", bot.settings);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options);
      bindEvents(bot);
    });
}
