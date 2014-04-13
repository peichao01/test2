import ChecksumAccumulator.calculate

//object FallWinterSpringSummer extends Application {
object FallWinterSpringSummer extends App {
	for(season <- List("fall", "winter", "spring"))
		println(season + ": " + calculate(season))
}
