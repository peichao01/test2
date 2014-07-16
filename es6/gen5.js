'use strict';

let delegatedIterator = (function*(){
	yield 'Hello!';
	yield 'Bye!';
})();

let delegatingIterator = (function*(){
	yield 'Greeting!';
	yield* delegatedIterator;
	yield 'Ok, bye.';
})();

for(let value of delegatingIterator){
	console.log(value);
}
