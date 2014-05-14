var fs = require('fs');
var Queue = require('./Queue');

var maleDancers = new Queue();
var femaleDancers = new Queue();

function Dancer(name, sex){
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females){
	var names = fs.readFileSync('./dancers.txt').toString().split(/\s*\n\s*/);
	names.forEach(function(dancer){
		if(dancer == '') return;
		var dancer = dancer.match(/^([A-Z])\s+(.+?)\s*$/);
		var sex = dancer[1];
		var name = dancer[2];
		if(sex == 'F')
			femaleDancers.enqueue(new Dancer(name, sex));
		else
			maleDancers.enqueue(new Dancer(name, sex));
	});
}

function dance(males, females){
	console.log('The dance partners are: ');
	while(!females.empty() && !males.empty()){
		var female = females.dequeue();
		var male = males.dequeue();
		console.log('Female dancer is: ' + female.name + ' and the male dancer is: ' + male.name);
	}
	console.log('');
}

getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(!femaleDancers.empty()){
	//console.log(femaleDancers.front().name + ' is waiting to dance.');
	console.log('There are ' + femaleDancers.count() + ' female dancers waiting to dance.');
}
if(!maleDancers.empty()){
	//console.log(maleDancers.front().name + ' is waiting to dance.');
	console.log('There are ' + maleDancers.count() + ' male dancers waiting to dance.');
}
