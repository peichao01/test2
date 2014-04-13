def gcdLoop(x:Long, y:Long): Long = {
	var a = x
	var b = y
	while(a != 0){
		val tmp = a
		a = b % a
		b = tmp
	}
}
