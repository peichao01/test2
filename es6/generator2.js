function* generator(){
	console.log(1);
	yield setTimeout(function(){
		console.log(2);
	}, 1000);
	console.log(3);
}

var gen = generator();
//console.log(4);
console.log(gen.next());
//console.log(5);
//gen.next();
//console.log(6);

//setTimeout(function(){
//	gen.next();
//}, 1000);
