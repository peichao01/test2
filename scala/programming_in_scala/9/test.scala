def containsNeg(nums: List[Int]): Boolean = {
	var exists = false
	for( num <- nums) {
		if(num < 0){
			exists = true
		}
	}
	exists
}

println(containsNeg(List(0, 1, 3, 65, 10, 4523, 122)))
println(containsNeg(List(4, 234, 53, 13, 64, -3)))

//def containsNeg2(nums: List[Int]) = nums.exists((num: Int)=>num<0)
//def containsNeg2(nums: List[Int]) = nums.exists((num)=>num<0)
def containsNeg2(nums: List[Int]) = nums.exists(_<0)
println(containsNeg2(List(0, 1, 2, 3,4)))
println(containsNeg2(List(-1, 2, 3, 4)))