/*==================变量的解构赋值==========================*/

//=1、数组的解构赋值：ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
let [a, b, c] = [1, 2, 3];
console.log(a,b,c);  //=> 1 2 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo,bar,baz);  //=> 1 2 3

let [ , , third] = ["foo", "bar", "baz"];  
console.log(third);  //=> baz

{ //let声明的变量支持块级作用域，var不支持。
  let [head, ...tail] = [1, 2, 3, 4]; 
  console.log(head);  //=> 1
  console.log(tail);  //=>  [2, 3, 4]
};

{ //以下两种情况都属于解构不成功，v1和v3的值都会等于undefined。
  let [foo] = [];
  console.log(foo); //=> undefined
};
{ //let声明的变量支持块级作用域
  let [bar, foo] = [1];
  console.log(foo); //=> undefined
  function f(){ console.log("块级函数执行OK");}  //块级函数定义
  f();  //块级函数执行
};


//另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功
let [x, y] = [1, 2, 3];
console.log(x); //=> 1
console.log(y); //=> 2