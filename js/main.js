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

