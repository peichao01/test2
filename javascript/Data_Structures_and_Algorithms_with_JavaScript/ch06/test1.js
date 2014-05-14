//var Node = require('./Node');
var LList = require('./LList');

var llist = new LList();
llist.insert('a');
llist.insert('b');
llist.insert('c');
llist.insert('d');

console.log(llist.findPrevious('a') + '');
console.log(llist.findPrevious('d') + '');

console.log(llist.findPrevious2('a') + '');
console.log(llist.findPrevious2('d') + '');
console.log('');

llist.display();

console.log('');

llist.remove('c');
llist.display();
