
/////   test
def a(s:List[String], fn: List[String] => Unit){
	fn(s)
}
val list = List("Hi", "Alexander", "!")
a(
	list,
	(greatings: List[String]) => for( greating <- greatings) println(greating)
)

a(
	list,
	greatings => for(greating <- greatings) println(greating)
)

a(
	list,
	for(greating <- _) println(greating)
)

def b(s:List[String])(fn: List[String]=>Unit){
	fn(s)
}
b(list){
	for(greating <- _)
		println(greating)
}