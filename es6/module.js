module Counter{
	var n = 0;
	export function inc(){ return ++n; }
	export function dec(){ return --n; }
	export function cur(){ return n; }
}

console.log(Counter.n);
console.log(Counter.inc());
console.log(Counter.dec());
console.log(Counter.cur());
