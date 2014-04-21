Function.prototype.curried = function(argsLength){
     var self = this, len = argsLength === undefined ? self.length : argsLength;
     if(len > 0){
          function curried (time, stack){
               return function(x){
                    stack[time] = x;
                    if(stack.length < len) {
                         return curried(time + 1, stack.concat());
                    } else {
                         return self.apply(self, stack);
                    }
               }
          }
          return curried(0, []);
     }
     else{
          return function(){
               return self.apply(self);
          }
     }
};
//(function(){
     var adder = function(x, y, z){ // 在 javascript 中使用函数定义，和将匿名函数赋值给变量基本上没有什么区别
         return x + y + z
     }
     var t = function(){}
     var p = function (a) {
          return a + 1
     }

     // var a = adder.curried();
     // var a1 = a(1)(2)(3);

     var aa = adder.curried();
     var aa1 = aa(1);
     var aa2 = aa1(2);
     var aa3 = aa2(3);
     console.log(aa3);
     console.log(aa1(-10)(23));

     var ab2 = aa1(5);
     var ab3 = ab2(6);
     console.log(ab3);

     console.log(aa(3)(5)(10));
     console.log(aa(25)(50)(12));
     console.log(aa1(-10)(23));

     var t1 = t.curried();

     var p1 = p.curried();
     var p2 = p1(2);

//})();