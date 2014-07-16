function* helloworldGenerator(){
	yield 'hello';
	yield 'world';
	yield {v:'!'};
	return 'ending';
}

var hw = helloworldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
