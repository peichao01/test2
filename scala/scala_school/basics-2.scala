class Foo {}
object FooMaker  {
	def apply() = new Foo
}
val newFoo = FooMaker()

class Bar {
	def apply() = 0
}
val bar = new Bar
bar()

object Timer {
	var count = 0

	def currentCount(): Long = {
		count += 1
		count
	}
}

Timer.currentCount()

class Bar(foo: String)
object Bar {
	def apply(foo: String) = new Bar(foo)
}

object addOne extends Function1[Int, Int] {
	def apply(m: Int): Int = m + 1
}

addOne(1) //=> 2

class AddOne extends Function1[Int, Int] {
	def apply(m: Int): Int = m + 1
}

val plusOne = new AddOne()
plusOne(1) // => 2

class AddOne2 extends (Int => Int){
	// ...
}


