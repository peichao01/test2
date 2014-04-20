abstract class Term
case class Var(name: String) extends Term
case class Fun(arg: String, body: Term) extends Term
case class App2(f: Term, v: Term) extends Term

/*
val x = Var("x")
println(x.name)

val x1 = Var("x")
val x2 = Var("x")
val y1 = Var("y")
println("" + x1 + " == " + x2 + " => " + (x1 == x2))
println("" + x1 + " == " + y1 + " => " + (x1 == y1))
*/

object TermTest extends App {
	def printTerm(term: Term) {
		term match {
			case Var(n) =>
				print(n)
			case Fun(x, b) =>
				print("^" + x + ".")
				printTerm(b)
			case App2(f, v) =>
				print("(")
				printTerm(f)
				print(" ")
				printTerm(v)
				print(")")
		}
	}
	
	def isIdentityFun(term: Term): Boolean = term match {
		case Fun(x, Var(y)) if x == y => true
		case _ => false
	}
}
val id = Fun("x", Var("x"))
val t = Fun("x", Fun("y", App2(Var("x"), Var("y"))))
println(TermTest.isIdentityFun(id))
println(TermTest.isIdentityFun(t))


