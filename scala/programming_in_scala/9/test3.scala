def withPrintWriter(file: File, op: PrintWriter => Unit) {
	val writer = new PrintWriter(file)
	try{
		op(writer)
	}
	finally {
		writer.close()
	}
}

withPrintWriter(
	new File("date.txt"),
	// writer => writer.println(new java.util.Date)
	_.println(new java.util.Date)
)

// curring，为了只有一个参数，然后使用花括号代替圆括号
// 		--在花括号里面写函数看起来更自然

// def withPrintWriter2(file: File) = (op: PrintWriter => Unit) => { ... }
// def withPrintWriter3(file: File)(op: PrintWriter => Unit): Unit = { ... }
def withPrintWriter4(file: File)(op: PrintWriter => Unit) {
	val writer = new PrintWriter(file)
	try{
		op(writer)
	}
	finally{
		writer.close()
	}
}
val file = new File("date.txt")
withPrintWriter4(file)(writer => writer.println(new java.util.Date))
withPrintWriter4(file)(_.println(new java.util.Date))
withPrintWriter4(file){writer => writer.println(new java.util.Date)}
withPrintWriter4(file){
	// writer => writer.println(new java.util.Date)
	_.println(new java.util.Date)
}