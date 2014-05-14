var todos = ['eat', 'code', 'code', 'sleep'];

Array.observe(todos, function(changes){
	console.log(changes);
});

console.log(todos.pop());

console.log(todos.push('sleep'));

var obj = {};
Object.observe(obj, function(changes){
	console.log(changes);
});
obj.name = 'hemanth';
