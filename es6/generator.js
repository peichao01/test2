function *Counter(){
	var n = 0;
	while(n < 5){
		yield n++;
	}
	return n;
}

var CountIter = new Counter();

console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
console.log(CountIter.next());
