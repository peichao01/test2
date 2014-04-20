var assertionsEnabled = true

def myAssert(predicate: ()=>Boolean) =
	if(assertionsEnabled && !predicate())
		throw new AssertionError
	
myAssert(()=> 5 > 3)


def myAssert2(predicate: => Boolean) =
	if(assertionsEnabled && !predicate())
		throw new AssertionError

// 先评估 predicate: => Boolean 函数，在评估断言表达式，
// 如果断言被禁用，就不会去执行表达式，即便有错误，也不会理会
myAssert2(5 > 3) 



def boolAssert(predicate: Boolean) =
	if(assertionsEnabled && !predicate)
		throw new AssertionError

// 先评估布尔值表达式
// 即便断言被禁用了，如果表达式有错误，也会被暴露出来
boolAssert(5 > 3)