const ping = require("ping");
var CronJob = require("cron").CronJob;

const hosts = ["google.com", "facebook.com", "yahoo.com"];

const verify = () => {
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive) {
      var msg = isAlive
        ? "host " + host + " is alive"
        : "host " + host + " is dead";
      console.log(msg, "-", new Date().toLocaleString("pt-BR"));
    });
  });
};

var job = new CronJob("* * * * *", verify, null, true, "America/Los_Angeles");
job.start();
