var http = require('http'), url = require('url'), path = require('path'), fs = require('fs'), graphlib = require('graphlib');

var io = require('socket.io');

var mimeTypes = {
	"html": "text/html", "jpeg": "image/jpeg", "jpg": "image/jpeg", "png": "image/png", "js": "text/javascript",
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

		                            fileStream.pipe(res);

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




//tests jsface server
//Qui manipule les autres classes pour tests

/*	npm install jsface	*/
var jsface = require("jsface"), Class = jsface.Class, extend = jsface.extend;

//	http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

//var fs = require('fs'); //deja fait

//url depuis la racine pour tests sur phpStorm
//working directory for node : /Users/bastien/Desktop/projet_jeu_git/any/
//server Js file : js/server/server.js

eval(fs.readFileSync('./js/server/Constants.js') + '');
eval(fs.readFileSync('./js/server/Element.js') + '');
eval(fs.readFileSync('./js/server/Creature.js') + '');
eval(fs.readFileSync('./js/server/Item.js') + '');


var p1 = new Creature(0, 'Bob');
var p2 = new Creature(1, 'Nestor');
var table = new Item(2, 'Table');

 console.log('HP '+p1.name+' => ' + p1.HP);
 console.log('HP '+p2.name+' => ' + p2.HP);
 console.log('HP Table => ' + table.HP);
console.log("");
/*
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), p2);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p2.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p2.dealDamageTo(Math.round(Math.random() * 30), p1);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
*/
var actionInterval = setInterval(randomAction, 1000);

function randomAction()
{
 var attacker;
 var target;
 
if(Math.random() < 0.5)
 attacker = p1;
else
 attacker = p2;
 
 if(attacker === p1)
 {
  if(Math.random() < 0.8)
   target = p2;
  else
  target = table;
  
 }
 
  if(attacker === p2)
 {
  if(Math.random() < 0.8)
   target = p1;
  else
  target = table;
  
 }
  
  
  var result = attacker.dealDamageTo(1+Math.round(Math.random() * 30), target);
  sendFightResultToClient(result);
  
  if(table.HP < 0 || p2.HP < 0 || p1.HP < 0)
   fightOver();
 
}

function sendFightResultToClient(result)
{
 if(result == -1)
  return;
 
 //target involved + its current HP
 
 console.log('# sending results : '+result.name+' new HP value => '+result.HP);
 console.log('');
 
}


function fightOver()
{
 clearInterval(actionInterval);
 
 
 console.log("");
 console.log("Fight is over.");
 console.log('HP '+p1.name+' => ' + p1.HP);
 console.log('HP '+p2.name+' => ' + p2.HP);
 console.log('HP Table => ' + table.HP);
 
 console.log('# sending FIGHT IS OVER.');
}

//  test viteuf, ceci va COTE CLIENT

/*

 function goSockets()
 {

 socket.on(
 'connect',
 function ()
 {
 console.log('ON CONNECT (socket)');

 console.log('Envoyé ping !');
 socket.emit('ping');

 }
 );

 socket.on('pong', function (data)
 {
 console.log('recu : pong !');

 });

 }


 socket = io.connect();
 goSockets();


 */