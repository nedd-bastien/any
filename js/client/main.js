//Qui manipule les autres classes pour tests

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

//  test viteuf

function goSockets()
{

	socket.on(
		'connect',
		function ()
		{

			console.log('ON CONNECT (socket)');

			/*
			 //console.log('channel = '+channel);
			 console.log("getCookie('channel') = " + getCookie('channel'));

			 if (channel === "")
			 {
			 channelAbsent();
			 }

			 socket.emit(
			 'setChannel',
			 {
			 'cN':   '' + channel,
			 'type': 'desktop'
			 }
			 );
			 */

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


