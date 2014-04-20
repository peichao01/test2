// -------------- 1
def plainOldSum(x: Int, y: Int) = x + y

println(plainOldSum(1, 2))


// -------------- 2
// def curriedSum(x: Int) = (y: Int)=> x + y
def curriedSum(x: Int) = x + (_: Int)

val r1 = curriedSum(1) // 返回了一个函数字面量，可以被赋值
val r2 = r1(2)
println(r2)

val resultCurried = curriedSum(1)(2)
println(resultCurried)



// -------------- 3
def curriedSum2(x: Int)(y: Int) = x + y

// val r3 = curriedSum2(1) // 报错，返回一个函数值，需要 _ 变为 apply 的形式才能被赋值
val r3 = curriedSum2(1) _
val r4 = r3(2)
println(r4)

val resultCurried2 = curriedSum2(1)(2)
println(resultCurried2)