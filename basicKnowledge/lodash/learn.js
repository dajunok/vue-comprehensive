var path = require('path');
var _ = require('lodash');


var options=null; 
const userOptions = options || {title:"html-webpack-plugin",age:50};
console.log(userOptions);








let arry=[1,'zhangSan','liSi','wangWu','2'];   //创建数组
console.log(arry);

//1、过滤数组中的假值：_.compact(array)：创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
console.log("_.compact(array)========================");
let arry1=_.compact([0, 1, false, 2, '', 3]);   //返回过滤掉假值的新数组。
console.log(arry1);   // => [1, 2, 3]

//2、拆分数组：_.chunk(array, [size=1])：将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
console.log("_.chunk(array, [size=1])========================");
var arry2=_.chunk(['a', 'b', 'c', 'd'], 2);   //返回一个包含拆分区块的新数组（相当于一个二维数组）。
console.log(arry2);     // => [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(arry2[0]);  //=>  [ 'a', 'b' ]
arry2=_.chunk(['a', 'b', 'c', 'd'], 3);
console.log(arry2);     //=>  [ [ 'a', 'b', 'c' ], [ 'd' ] ]

//3、连接数组与值：_.concat(array, [values]：创建一个新数组，将array与任何数组 或 值连接在一起，返回连接后的新数组。
console.log("_.concat(array, [values])========================");
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);  //将array与任何数组 或 值连接在一起
console.log(other);   // => [1, 2, 3, [4]] 
console.log(array);   // => [1]

//4、排除数组中的值：_.difference(array, [values])： 返回一个过滤值后的新数组。
console.log("_.difference(array, [values])========================");
let arry4=_.difference([3, 2, 1], [4, 2]);
console.log(arry4);   // => [3, 1]

//5、排除数组中的值（使用迭代器）：_.differenceBy(array, [values], [iteratee=_.identity])：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值
console.log("_.differenceBy(array, [values], [iteratee=_.identity])========================");
let arry5=_.differenceBy([3.1, 2.2, 1.3, 4.8], [4.4, 2.5], Math.floor);    //Math.floor() 返回小于或等于一个给定数字的最大整数。
console.log(arry5); // => [3.1, 1.3]
arry5=_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');  //使用对象中的键值进行迭代排除
console.log(arry5); // => [{ 'x': 2 }]
arry5=_.differenceBy([{ 'x': 2,'name':'zhangsan' }, { 'x': 1,'name':'wangwu' }], [{ 'x': 1 ,'name':'zhaoliu'}], 'x'); //使用对象中的键值进行迭代排除
console.log(arry5); // => [ { x: 2, name: 'zhangsan' } ]

//6、排除数组中的值（使用比较器）：_.differenceWith(array, [values], [comparator])：接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
console.log("_.differenceWith(array, [values], [comparator])========================");
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },{'x': 1, 'y': 3}]; 
let arry6=_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);   //_.isEqual：比较两个对象是否相等
console.log(arry6);  // => [ { x: 2, y: 1 }, { x: 1, y: 3 } ]


//7、去除array中从 predicate 返回假值开始到尾部的部分：_.dropRightWhile(array, [predicate=_.identity])
/*
    从尾端查询数组array，第一个不满足predicate条件(即函数返回false)的元素开始截取数组。
  参数predicate提供的是一个属性名称，就通过提供的参数使用_.property方法返回一个回调函数。
  参数predicate提供的是一个对象，就用_.matches方法匹配相同的元素，相同返回true，不同返回false。
  参数predicate也可以提供一个函数，该函数有三个参数value, index, array
  _.dropRightWhile这个函数还牵扯到另外两个函数，_.property和_.matches。
*/
console.log("_.dropRightWhile(array, [predicate=_.identity])========================");
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false },
];
let arry7=_.dropRightWhile(users, function(o) { return !o.active; });
console.log(arry7);  // => objects for ['barney']
arry7=_.dropRightWhile(users,function(o) {
    if (o.user=='pebbles') { return false;}
    return true;
});
console.log(arry7); 
arry7=_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });  
console.log(arry7);   // => objects for ['barney', 'fred']
arry7=_.dropRightWhile(users, ['active',false]);  
console.log(arry7);   // => objects for ['barney']
arry7=_.dropRightWhile(users, 'active');
console.log(arry7); // => objects for ['barney', 'fred', 'pebbles']



















