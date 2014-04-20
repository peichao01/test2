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