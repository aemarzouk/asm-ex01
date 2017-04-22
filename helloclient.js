var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 8080);
var http = require('http');
var today = require('./today');

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var server = http.createServer( function(request, response) {
	var body = 'Good day, ' + today.dayOfWeek() + '.';
	response.writeHead( 200, {
		'Content-Length': body.length,
		'Content-Type': 'text/plain'
	});
	response.write(body);
	response.end();
});

server.listen( port, host);