var express = require("express"),
	app = express();

app.use('/', express.static(__dirname));

var port = 8000;
var host = "0.0.0.0";
app.listen(port, host, function () {
	console.log("Listening on host: " + host + " port: " + port);
});

