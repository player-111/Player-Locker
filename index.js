var mineflayer = require('mineflayer');
var options = {
  host: "mc.mineberry.net",
  username: "iceplant",
};
var options1 = {
  host: "mc.mineberry.net",
  username: "andre2dolars",
};
var options2 = {
  host: "mc.mineberry.net",
  username: "Xaniity",
};
var options3 = {
  host: "mc.mineberry.net",
  username: "LucyLazy",
};
var options4 = {
  host: "mc.mineberry.net",
  username: "Fed9",
};
var options5 = {
  host: "mc.mineberry.net",
  username: "GhostGirl_",
};
var options6 = {
  host: "mc.mineberry.net",
  username: "Zakreedanub",
};
var options7 = {
  host: "mc.mineberry.net",
  username: "timm23",
};
var options8 = {
  host: "mc.mineberry.net",
  username: "Jfreefortnite",
};
var options9 = {
  host: "mc.mineberry.net",
  username: "Test123",
};
var options10 = {
  host: "mc.mineberry.net",
  username: "Hauntear",
};
var options11 = {
  host: "mc.mineberry.net",
  username: "Gryphinx",
};
var options12 = {
  host: "mc.mineberry.net",
  username: "Incognonymous",
};
var options13 = {
  host: "mc.mineberry.net",
  username: "Atio",
};
var options14 = {
  host: "mc.mineberry.net",
  username: "DaddySenour",
};
var bot = mineflayer.createBot(options);
var bot1 = mineflayer.createBot(options1);
var bot2 = mineflayer.createBot(options2);
var bot3 = mineflayer.createBot(options3);
var bot4 = mineflayer.createBot(options4);
var bot5 = mineflayer.createBot(options5);
var bot6 = mineflayer.createBot(options6);
var bot7 = mineflayer.createBot(options7);
var bot8 = mineflayer.createBot(options8);
var bot9 = mineflayer.createBot(options9);
var bot10 = mineflayer.createBot(options10);
var bot11 = mineflayer.createBot(options11);
var bot12 = mineflayer.createBot(options12);
var bot13 = mineflayer.createBot(options13);
var bot14 = mineflayer.createBot(options14);


bindEvents(bot);
bindEvents(bot1);
bindEvents(bot2);
bindEvents(bot3);
bindEvents(bot4);
bindEvents(bot5);
bindEvents(bot6);
bindEvents(bot7);
bindEvents(bot8);
bindEvents(bot9);
bindEvents(bot10);
bindEvents(bot11);
bindEvents(bot12);
bindEvents(bot13);
bindEvents(bot14);

function bindEvents(bot) {
    bot.on('login', function() {
      console.log(`loggged in as ${bot.username}`);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options);
      bindEvents(bot);
    });
}

function bindEvents(bot1) {
    bot1.on('login', function() {
      console.log("I logged in.");
    });

    bot1.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options1);
      bindEvents(bot);
    });
}

function bindEvents(bot2) {
    bot2.on('login', function() {
      console.log("I logged in.");
    });

    bot2.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options2);
      bindEvents(bot);
    });
}

function bindEvents(bot3) {
    bot3.on('login', function() {
      console.log("I logged in.");
    });

    bot3.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options3);
      bindEvents(bot);
    });
}

function bindEvents(bot4) {
    bot4.on('login', function() {
      console.log("I logged in.");
    });

    bot4.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options4);
      bindEvents(bot);
    });
}
function bindEvents(bot5) {
    bot5.on('login', function() {
      console.log("I logged in.");
    });

    bot5.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options5);
      bindEvents(bot);
    });
}

function bindEvents(bot6) {
    bot6.on('login', function() {
      console.log("I logged in.");
    });

    bot6.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options6);
      bindEvents(bot);
    });
}

function bindEvents(bot7) {
    bot7.on('login', function() {
      console.log("I logged in.");
    });

    bot7.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options7);
      bindEvents(bot);
    });
}

function bindEvents(bot8) {
    bot8.on('login', function() {
      console.log("I logged in.");
    });

    bot8.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options8);
      bindEvents(bot);
    });
}

function bindEvents(bot9) {
    bot9.on('login', function() {
      console.log("I logged in.");
    });

    bot9.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options9);
      bindEvents(bot);
    });
}

function bindEvents(bot10) {
    bot10.on('login', function() {
      console.log("I logged in.");
    });

    bot10.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options10);
      bindEvents(bot);
    });
}

function bindEvents(bot11) {
    bot11.on('login', function() {
      console.log("I logged in.");
    });

    bot11.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options11);
      bindEvents(bot);
    });
}
function bindEvents(bot12) {
    bot12.on('login', function() {
      console.log("I logged in.");
    });

    bot12.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options12);
      bindEvents(bot);
    });
}

function bindEvents(bot13) {
    bot13.on('login', function() {
      console.log("I logged in.");
    });

    bot13.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options13);
      bindEvents(bot);
    });
}

function bindEvents(bot14) {
    bot14.on('login', function() {
      console.log("I logged in.");
    });

    bot14.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options14);
      bindEvents(bot);
    });
}
