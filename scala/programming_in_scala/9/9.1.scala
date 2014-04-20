object FileMatcher {
	private def filesHere = (new java.io.File(".")).listFiles
/*
	def filesEnding(query: String) =
		for(file <- filesHere; if file.getName.endsWith(query))
			yield file

	def filesContaining(query: String) =
		for(file <- filesHere; if file.getName.contains(query))
			yield file

	def filesRegex(query: String) =
		for(file <- filesHere; if file.getName.matches(query))
			yield file
*/
	private def filesMatching(matcher: (String, String) => Boolean/*, query:String*/) = {
		for(file <- filesHere; if matcher(file.getName/*, query*/))
			yield file
	}

	//def filesEnding(query: String) = filesMatching(query, _.endsWith(_))
	def filesEnding(query: String) = {
		filesMatching(query, (fileName: String/*, query: String*/)=>{
			fileName.endsWith(query)
		})
	}
	def filesContaining(query: String) = filesMatching(query, _.contains(_))
	def filesRegex(query: String) = filesMatching(query, _.matches(_))
}
