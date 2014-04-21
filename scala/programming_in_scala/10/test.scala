abstract class Element {
	def demo(){
		println("Element's implementation invoked")
	}
}

class ArrayElement extends Element {
	override def demo(){
		println("ArrayElement's implementation invoked")
	}
}

class ArrayElement2 extends Element {
	final override def demo(){
		println("ArrayElement's implementation invoked")
	}
}

final class ArrayElement3 extends Element {
	override def demo(){
		println("ArrayElement's implementation invoked")
	}
}

class LineElement extends ArrayElement {
	override def demo(){
		println("LineElement's implementation invoked")
	}
}

class UniformElement extends Element


def invokeDemo(e: Element){
	e.demo()
}

invokeDemo(new ArrayElement)
invokeDemo(new LineElement)
invokeDemo(new UniformElement)
