abstract class Element {
	def contents: Array[String]
	def height: Int = contents.length
	def width: Int = if(height == 0) 0 else contents(0).length
}

// class ArrayElements(conts: Array[String]) extends Element {
// 	def contents: Array[String] = conts
// }

class ArrayElement(val contents: Array[String]) extends Element{

}

class LineElement(s: String) extends ArrayElement(Array(s)) {
	override def width = s.length
	override def height = 1
}

class LineElement2(s: String) 

//////////////////////////////

class Cat{
	val dangerous = false
}

// class Tiger(param1: Boolean, param2: Boolean) extends Cat {
// 	override val dangerous = param1
// 	private var age = param2
// }

class Tiger (
	override val dangerous: Boolean,
	private var age: Int
) extends Cat

class UniformElement(
	ch: Char
	override val width: Int,
	override val height: Int
) extends Element(
	private val line = ch.toString * width
	def contents = Array.make(height, line)
)
