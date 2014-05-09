var List = require('./List');

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());

names.remove("Raymond");
console.log(names.toString());
