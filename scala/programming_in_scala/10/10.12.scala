object Element {
	private class ArrayElement(
		val contents: Array[String]
	) extends Element

	private class LineElement(s:String) extends Element {
		val contents = Array(s)
		override def width = s.length
		override def height = 1
	}

	private class UniformElement(
		ch: Char,
		override val width: Int,
		override val height: Int
	) extents Element(
		private val line = ch.toString * width
		def contents = Array.make(height, line)
	)

	def elem(contents: Array[String]): Element =
		new ArrayElement(contents)

	def elem(ch: Char, width: Int, height: Int): Element =
		new UniformElement(ch, width, height)
	
	def elem(line: String): Element =
		new LineElement(line)
}
