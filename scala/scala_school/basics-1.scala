class Calculator {
	val brand: String = "HP"
	def add(m: Int, n: Int): Int = m + n
}

val calc = new Calculator
val r = calc.add(1, 2)
println(r)
println(calc.brand)


class Calculator2(brand: String) {
	/*
	 * A constructor
	 */
	val color:String = if(brand == "TI") 
							"blue"
						 else if(brand=="HP") 
							"black" 
						else 
							"white"

	// An instance method
	def add(m: Int, n: Int): Int = m + n
}
val calc2 = new Calculator2("HP")
println(calc2.color)

class C {
	var acc = 0
	def minc = { 
		acc += 1
		acc
	}
	val finc =  () => { 
		acc += 1 
		acc
	}
}
val c = new C
println(c.minc)
println(c.finc)
println(c.finc())

class ScientificCalculator(brand: String) extends Calculator2(brand) {
	def log(m: Double, base: Double) = math.log(m) / math.log(base)
}

class EvenMoreScientificCalculator(brand: String) extends ScientificCalculator(brand) {
	def log(m: Int): Double = log(m, math.exp(1))
}


abstract class Shape {
	def getArea(): Int
}

class Circle(r: Int) extends Shape {
	def getArea(): Int = { r * r * 3 }
}

//val s = new Shape
val cc = new Circle(2)


trait Car {
	val brand: String
}

trait Shiny {
	val shineRefraction: Int
}

class BMW extends Car {
	val brand = "BMW"
}

class BMW2 extends Car with Shiny {
	val brand = "BMW"
	val shineRefraction = 12
}
