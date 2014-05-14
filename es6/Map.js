console.log(Object.getOwnPropertyNames(Map.prototype));

var key1 = {};
var key2 = {};

var myMap = new Map();

myMap.set(NaN, 'not a number');
myMap.set(key1, 'key1');
myMap.set(key2, 'key2');

console.log(myMap.get(NaN));
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap);

var myObj = new Object();
myObj[NaN] = 'not a number';
myObj[key1] = 'key1';
myObj[key2] = 'key2';

console.log(myObj[NaN]);
console.log(myObj[key1]);
console.log(myObj[key2]);
console.log(myObj);
