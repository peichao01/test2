trait Philosophical {
	def philosophize(){
		println("I consume menory, therefore I am!")
	}
}

class Frog extends Philosophical {
	override def toString = "green"
}

val frog = new Frog
frog.philosophize()
val phil: Philosophical = frog
phil.philosophize()

class Animal
trait HasLegs

class Frog2 extends Animal with Philosophical {
	override def toString = "green"
}

class Frog3 extends Animal with Philosophical with HasLegs{
	override def toString = "green"
	override def philosophize(){
		println("It ain't easy being " + toString + "!")
	}
}
val phrog: Philosophical = new Frog3
phrog.philosophize()