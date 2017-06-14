/* http://localhost:8000/ */

var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8000);

/*
var fs = require('fs');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response)
{
//	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.writeHead(200, {'Content-Type': 'text/html'});
/*	response.write('Hello World');
	response.write(module1.myString);
	response.write(module2.myVariable);
	module1.myFunction();
	module2.myFunction();
	fs.readFile('./index.html', null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found !');
		} else {
			response.write(data);
		}
		response.end();
	});
}

http.createServer(onRequest).listen(8000);*/
