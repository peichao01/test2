for(
	file <- (new java.io.File(".")).listFiles
	if file.isFile;
	if file.getName.endsWith(".scala")
)
	println(file)
