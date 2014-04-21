import scala.collection.mutable.ArrayBuffer

abstract class IntQueue {
	def get(): Int
	def put(x: Int)
}

class BasicIntQueue extends IntQueue {
	private val buf = new ArrayBuffer[Int]
	def get() = buf.remove(0)
	def put(x: Int) { buf += x }
}

// val queue = new BasicIntQueue
// queue.put(10)
// queue.put(20)
// queue.get()
// queue.get()

trait Doubling extends IntQueue {
	abstract override def put(x: Int) { super.put(2 * x) }
}

class MyQueue extends BasicIntQueue with Doubling
// val queue = new MyQueue
// queue.put(10)
// println(queue.get())
val queue = new BasicIntQueue with Doubling
// queue.put(10)
// println(queue.get())

trait Incrementing extends IntQueue {
	abstract override def put(x: Int) { super.put(x + 1) }
}

trait Filtering extends IntQueue {
	abstract override def put(x: Int) {
		if(x >= 0) super.put(x)
	}
}

val queue1 = new BasicIntQueue with Incrementing with Filtering
queue1.put(-1)
queue1.put(0)
queue1.put(1)
println(queue1.get())
println(queue1.get())