def isEqual(x: Int, y: Int) = x == y
isEqual(421, 421)

def isEqual(x: Any, y: Any) = x == y
isEqual(412, 412)
isEqual(new String("ab"), new String("ab"))

val xx = "abcd".substring(2)
val xy = "abcd".substring(2)
println(x == y)

val x1 = new String("abc")
val x2 = new String("abc")
println(x == y) // true
println(x eq y) // false
println(x ne y) // true

def divide(x: Int, y: Int): Int = 
	if(y != 0) x / y
	// error 返回 Nothing 类型，Nothing是所有类型的子类
	else error("can't divide by zero")
