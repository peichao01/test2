'use strict'

function* fibonacci(){
	var [prev, curr] = [0, 1];
	for(;;){
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for(n of fibonacci()){
	if(n>1000) break;
	console.log(n);
}
