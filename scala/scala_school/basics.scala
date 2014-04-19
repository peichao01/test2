1 + 1

val two = 1 + 1

var name = "steve"
name = "marius"

def addOne(m: Int): Int = m + 1
val three = addOne(2)

def four() = 1 + 2
four()
four

(x: Int) => x + 1

val addTwo = (x: Int) => x + 2
addTwo(1)

def timesTwo(i: Int): Int = {
	println("hello world")
	i * 2
}

{
	i: Int =>
	println("hello world")
	i * 2
}
// 等同于
(i: Int) => {
	println("hello world")
	i * 2
}
// 部分应用(partial application)
def adder(m: Int, n: Int) = m + n
val add2 = adder(2, _: Int)
val add3 = (x: Int) => adder(2, x)

// curring
def multiply(m: Int)(n: Int): Int = m * n
multiply(2)(3)

val timesThree = (x: Int) => multiply(2)(x)
val timesFour = multiply(2)(_: Int)
val timesFive = multiply(2)(_)
val timesTwo = multiply(2) _

def capitalizeAll(args: String*) = {
	args.map {
		_.capitalize
	}
}
