var http = require("http");

http.createServer(function(request, response){
	response.write("test server");

	console.log("Server Starts...")
	response.end();
}).listen(8080);