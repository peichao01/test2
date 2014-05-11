var Queue = require('./Queue');

var q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
q.enqueue('David');
q.enqueue('Alexander');

console.log(q.toString(), '\n');
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.toString(), '\n');

console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());
