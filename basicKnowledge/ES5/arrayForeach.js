//==================js数组遍历方法总结

//1.for循环：使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。
var arr = ["Saab", "Volvo", "BMW"];
for(i = 0,len=arr.length; i < len; i++) {
    console.log(arr[i]);
}


//2.foreach循环：遍历数组中的每一项，没有返回值，对原数组没有影响，不支持IE
var ages=[16,30,50,40];
ages.forEach((item,index,array)=>{
    console.log(item);
    console.log(index);
    console.log(array);
});

//3.map循环：有返回值，可以return出来。map的回调函数中支持return返回值；return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；
var ary = [12,23,24,42,1]; 
var res = ary.map(function (item,index,ary ) { 
    return item*10; 
}) 
console.log(res);//-->[120,230,240,420,10];  原数组拷贝了一份，并进行了修改
console.log(ary);//-->[12,23,24,42,1]；  原数组并未发生变化


//4.forof遍历：可以正确响应break、continue和return语句
var myArray = ['a','b','c','d','e']; 
for (var value of myArray) {
    console.log(value);
};

//5.filter遍历：不会改变原始数组,返回新数组
var arr = [
  { id: 1, text: 'aa', done: true },
  { id: 2, text: 'bb', done: false }
]
var arrfilter=arr.filter(item => item.done);
console.log(arrfilter);


//6.every遍历：对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true。
var ages=[16,30,50,40];
function checkAdult(age){   //检测是否成年人（回调函数）
    return age>=18;
}
var isAdult=ages.every(checkAdult);  //=> false             使用every()检测数组元素的每个元素是否都符合条件
console.log(isAdult);


//7.some遍历：some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true。
var arr = [ 1, 2, 3, 4, 5, 6 ];   
var arrsome=arr.some( function( item, index, array ){ 
    return item > 3; 
}) 
console.log(arrsome);  //=> true

//8.reduce：reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。
//reduce接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引，数组
var arrReduce = [ 1, 2, 3, 4, 5, 6 ];   
var total = arrReduce.reduce((a, b)=>a + b); //=> 21
arrReduce.reduce(function(previousValue, currentValue, index, array){  //ES5语法模式
    return previousValue + currentValue;
});
console.log(total);


//9.reduceRight：功能和reduce()功能是一样的，不同的是reduceRight()从数组的末尾向前将数组中的数组项做累加。
var arrReduceRight = [ 11, 21, 31, 41, 51, 61 ];   
var total = arrReduceRight.reduceRight((a, b)=>a + b); //=> 216
console.log(total);

//10.find：返回数组中符合测试函数条件的第一个元素。否则返回undefined 
var stu = [
    { name: '张三', gender: '男', age: 20 },
    { name: '王小毛', gender: '男',age: 20},
    { name: '李四', gender: '男',age: 20  }
];
function getStu(element){
   return element.name == '李四'
};
var obj=stu.find(getStu);   //=>  { name: '李四', gender: '男', age: 20 }
console.log(obj);

//11.findIndex：对于数组中的每个元素，findIndex 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 true。
//只要有一个元素返回 true，findIndex 立即返回该返回 true 的元素的索引值。如果数组中没有任何元素返回 true，则 findIndex 返回 -1。
//findIndex 不会改变数组对象。
var arrfindIndex = [ 11, 21, 31, 41, 51, 61 ];  
var index=arrfindIndex.findIndex(function(x){return x==41;});   //=> 3
console.log(index);

//12.keys，values，entries
//ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，
//可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"







