// node js
var List = require('./List2');

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

console.log("=====");
for(names.front(); names.inRange(); names.next()){
	console.log(names.getElement());
}

console.log("=====");
for(names.end(); names.inRange(); names.prev()){
	console.log(names.getElement());
}
