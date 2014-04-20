//package.com.peichao01.example

object colorHolder {
	val BLUE = "Blue"
	val RED = "Red"
}

val times = 1
times match {
	case 1 => "one"
	case 2 => "two"
	case _ => "some other number"
}

times match {
	case i if i == 1 => "one"
	case i if i == 2 => "two"
	case _ => "some other number"
}

def bigger(o: Any): Any = {
	o match {
		case i: Int if i < 0 => i - 1
		case i: Int => i + 1
		case d: Double if d < 0.0 => d - 0.1
		case d: Double => d + 0.1
		case text: String => text + "s"
	}
}

def calcType(calc: Calculator) = calc match {
	case _ if calc.brand == "hp" && calc.model == "20B" => "financial"
	case _ if calc.brand == "hp" && calc.model == "48G" => "scientific"
	case _ if calc.brand == "hp" && calc.model == "30B" => "business"
	case _ => "unknown"
}

// 样本类
case class Calculator(brand: String, model: String)
val hp20b = Calculator("hp", "20b")
val hp20B = Calculator("hp", "20b")
val hp30b = Calculator("hp", "30b")
println(hp20b == hp20B)

def calcType2(calc: Calculator) = calc match {
	case Calculator("hp", "20b") => "financial"
	case Calculator("hp", "48g") => "scientific"
	case Calculator("hp", "30b") => "business"
	//case Calculator(ourBrand, ourModel) => "Calculator: %s %s is of unknown type".format(ourBrand, ourModel)
	case Calculator(_, _) => "Calculator of unknown type"
	//case _ => "Calculator of unknown type"
	//case c@Calculator(_, _) => "Calculator: %s of unknown type".format(c)
}
println(calcType2(hp20b))
println(calcType2(hp30b))
println(calcType2(Calculator("hp", "48g")))
println(calcType2(Calculator("hp", "49g")))


/*
val result: Int = try {
	remoteCalculatorService.add(1, 2)
} catch {
	case e: ServerIsDownException => {
		log.error(e, "the remote calculator service is unavailable.")
		0
	}	
} finally {
	remoteCalculatorService.close()
}
*/
