def twice(op: Double => Double, x: Double) = op(op(x))

// twice((x: Double)=>{
// 		x + 1
// 	}, 5)

// twice(x=> x+1, 5)

twice(_+1, 5)

/* // twice 的 javascript 版本
function twice(op, x){
	return op(op(x))
}

twice(function(x){
	return x + 1
}, 5)
*/
