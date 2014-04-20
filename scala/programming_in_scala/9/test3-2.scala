def a(x: Int) = x * x
def b(x: Int) = { x * x }

// 函数返回值为 Unit 的时候，可以不写等号，并加上花括号
def c(x: Int) { println(x * x) }

def d(x: Int): Unit = println(x * x)

println(a(2))
println(b(3))
c(4)
d(5)