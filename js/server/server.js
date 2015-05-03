var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs'),
	graphlib = require('graphlib');

var io = require('socket.io');

var mimeTypes = {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"jpg":  "image/jpeg",
	"png":  "image/png",
	"js":   "text/javascript",
	"css":  "text/css"
};

var app = http.createServer(function (req, res)
                            {
	                            var uri = url.parse(req.url).pathname;
	                            var filename = path.join(process.cwd(), uri);
	                            fs.exists(filename, function (exists)
	                            {
		                            if (!exists)
		                            {

			                            console.log("file does not exists: " + filename);
			                            res.writeHead(200, {'Content-Type': 'text/plain'});
			                            res.write('404 Not Found. Try another URL please, good Sir or Madam.\n');
			                            res.end();
			                            return; // <- Don't forget to return here !!
		                            }
		                            var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
		                            res.writeHead(200, {'Content-Type': mimeType});

		                            var fileStream = fs.createReadStream(filename);

		                            fileStream.pipe(
			                            res);

	                            }); //end path.exists
                            }).listen(1337);

//TESTS SOCKET.IO

io = io.listen(app);

//io.set('log level', 1);

/*
 socket.emit('sendReponseSQL_getall', {'rows':rows});//	SEULEMENT au sender
 socket.broadcast.to(data.cN).emit('allure', data); 	//	tous de ce channel SAUF sender
 io.sockets.in(data.cN).emit('pong');				//	tous de ce channel Y COMPRIS sender
 */

var num_clients = 0;

io.sockets.on('connection', function (socket)
{
	socket.on('ping', function (data)
	{
		console.log('recu : ping ! On envoie pong...');
		console.log('id client : ' + socket.id);

		io.sockets.emit('pong');

	});


	num_clients++;

	console.log('CLIENT ' + num_clients + ' HAS JUST CONNECTED :-) ');
	console.log('id client : ' + socket.id);

	socket.on('disconnect', function () //à l'interieur
	{
		console.log('CLIENT ' + num_clients + ' DISCONNECTED !!! ');
		console.log('id client : ' + socket.id);
		num_clients--;

	});

});

console.log('APP HAS STARTED ON http://localhost:1337/ ');

//test graphlib
/*
 var Graph = graphlib.Graph;
 var g = new Graph();
 g.setNode("a");
 g.hasNode("a");
 // => true

 // Add node "b" to the graph with a String label
 g.setNode("b", "b's value");

 // Get the label for node b
 g.node("b");
 // => "b's value"

 // Add node "c" to the graph with an Object label
 g.setNode("c", {k: 123});

 // What nodes are in the graph?
 g.nodes();
 // => `[ 'a', 'b', 'c' ]`

 // Add a directed edge from "a" to "b", but assign no label
 g.setEdge("a", "b");

 // Add a directed edge from "c" to "d" with an Object label.
 // Since "d" did not exist prior to this call it is automatically
 // created with an undefined label.
 g.setEdge("c", "d", {k: 456});

 // What edges are in the graph?
 g.edges();
 // => `[ { v: 'a', w: 'b' },
 //       { v: 'c', w: 'd' } ]`.

 // Which edges leave node "a"?
 g.outEdges("a");
 // => `[ { v: 'a', w: 'b' } ]`

 // Which edges enter and leave node "d"?
 g.nodeEdges("d");

 // => `[ { v: 'c', w: 'd' } ]`

 //fin test
 */