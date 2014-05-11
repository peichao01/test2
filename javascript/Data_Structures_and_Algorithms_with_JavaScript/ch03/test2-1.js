// node js
var List = require('./List');

var names = new List();
names.append("Cynthia");
names.append("Raymond");
//names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

//names.front();
//console.log(names.getElement());
//
//names.next();
//console.log(names.getElement());
//
//names.next();
//names.next();
//names.prev();
//console.log(names.getElement());

console.log("=====");
for(names.front(); names.realPos() <= names.length() - 1; names.next()){
	console.log(names.getElement());
}

console.log("=====");
for(names.end(); names.realPos() >= 0; names.prev()){
	console.log(names.getElement());
}
