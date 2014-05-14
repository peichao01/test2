console.log(Object.getOwnPropertyNames(Set.prototype));

var mySet = new Set();
var todos = ['eat', 'code', 'sleep', 'code', 'drink', 'code'];
todos.forEach(function(t){
	mySet.add(t);
});
console.log(todos);
console.log(todos.length);
console.log(mySet);
console.log(mySet.size);
