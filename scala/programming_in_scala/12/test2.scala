class Point(val x: Int, val y: Int)

trait Rectangular {
	def topLeft: Point
	def bottomRight: Point

	def left = topLeft.x
	def right = bottomRight.x
	def top = topLeft.y
	def bottom = bottomRight.y
	def width = right - left
	def height = bottom - top
	// ...
}

abstract class Component extends Rectangular {

}

class Rectangle(val topLeft: Point, val bottomRight: Point) 
	extends Rectangular{

}