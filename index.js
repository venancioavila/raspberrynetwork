const ping = require("ping");
var CronJob = require("cron").CronJob;

const hosts = ["google.com", "facebook.com", "yahoo.com"];

var line = 0;

const verify = () => {
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive) {
      var msg = isAlive
        ? "host " + host + " is alive"
        : "host " + host + " is dead";
      console.log(`${line} - `, msg, "-", new Date().toLocaleString("pt-BR"));
    });
  });
  line = line + 1;
};

var job = new CronJob("* * * * *", verify, null, true, "America/Los_Angeles");
job.start();
