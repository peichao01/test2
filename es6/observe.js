var todos = ['eat', 'code', 'code', 'sleep'];

Array.observe(todos, function(changes){
	console.log(changes);
});

todos.pop();

todos.push('sleep');

console.log('=========================');

var obj = {};
Object.observe(obj, function(changes){
	console.log(changes);
});
obj.name = 'hemanth';

console.log('=========================');

var o2 = {arr: [1,2], o: {}};
Object.observe(o2, function (changes) {
	console.log(changes);
});
Array.observe(o2.arr, function (changes) {
	console.log(changes);
});
o2.o.name = 'lk';
o2.o = {};
o2.arr[0] = 0;