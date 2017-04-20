var express = require('express');
var app = express();
var requests=0;
var startTime;
var host;
var version;

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/plain');
  response.status(200).send("Minds UP Kubernetes! | Running on: " + host + " | v=" + version + "\n");
  console.log("Running On:" ,host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:",new Date());
});

app.listen(3000, function () {
    startTime = new Date();
    host = process.env.HOSTNAME;
    version = process.argv[2] || 1;
    console.log("Server Minds UP Started At:",startTime, "| Running On: " ,host," | v=", version, "\n" );
});
