//Qui manipule les autres classes pour tests

/*	npm install jsface	*/
var jsface = require("jsface"),
    Class  = jsface.Class,
    extend = jsface.extend;

//	http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

var fs = require('fs');
eval(fs.readFileSync('./Constants.js')+'');
eval(fs.readFileSync('./Element.js')+'');
eval(fs.readFileSync('./Creature.js')+'');
eval(fs.readFileSync('./Item.js')+'');


var p1 = new Creature(0, 'Bob');
var p2 = new Creature(1, 'Nestor');
var table = new Item(2, 'Table');

console.log('HP Table => ' + table.HP);
console.log("");

p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);
p1.dealDamageTo(Math.round(Math.random() * 30), table);

console.log("");
console.log("");


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