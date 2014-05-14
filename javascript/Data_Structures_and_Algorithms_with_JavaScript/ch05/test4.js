var PriorityQueue = require('./PriorityQueue');

function Patient(name, code){
	this.name = name;
	this.code = code;
}

function queueToString(queue){
	var retStr = '';
	queue.each(function(el){
		retStr += el.name + ' code: ' + el.code + '\n';
	});
	return retStr;
}

var p = new Patient("Smith",5);
var ed = new PriorityQueue();
ed.enqueue(p);
p = new Patient("Jones", 2);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 2);
ed.enqueue(p);
console.log(queueToString(ed));

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(queueToString(ed));

// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(queueToString(ed));

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(queueToString(ed));

