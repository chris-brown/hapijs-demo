var Hapi = require('hapi');
var request = require("request");

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

		/*request.get("http://localhost:5984/firstdb/id_of_docuement",
		        function(err,res,data){
		      if(err) console.log(err);  
		     console.log(data);
		 });*/

        reply('hello world');
    }
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function (req, rep) {
	         request.get("http://localhost:5984/firstdb/_design/fruit/_view/_products",
	         	function(err,res,data){
	         		//if(err) console.log(err);
	         		rep(data);
	         	}
         	);
	}
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});