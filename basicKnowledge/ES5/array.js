/*Array 对象方法
-----------------------------------------------------------------------------------------
方法                                描述
-----------------------------------------------------------------------------------------
concat()          连接两个或更多的数组，并返回结果。
every()           检测数组元素的每个元素是否都符合条件。
filter()          检测数组元素，并返回符合条件所有元素的数组。
indexOf()         搜索数组中的元素，并返回它所在的位置。
join()            把数组的所有元素放入一个字符串。
lastIndexOf()     返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
map()             通过指定函数处理数组的每个元素，并返回处理后的数组。
pop()             删除数组的最后一个元素并返回删除的元素。
push()            向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()         反转数组的元素顺序。
shift()           删除数组的第一个元素。
slice()           选取数组的的一部分，并返回一个新数组。
some()            检测数组元素中是否有元素符合指定条件。
sort()            对数组的元素进行排序。
splice()          从数组中添加或删除元素。
toString()        把数组转换为字符串，并返回结果。
unshift()         向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()         返回数组对象的原始值。
-----------------------------------------------------------------------------------------
console.log();
*/




var cars = ["Saab", "Volvo", "BMW"];
var arry= [
      { message: 'Foo' },
      { message: 'Bar' }
    ];

//使用中括号[]将变量作为一个对象的Key
var a='message',b='Cbo';
var obj={[a]:b};   //=>  { message: 'Cbo' }
arry.push(obj);    //=>  [ { message: 'Foo' }, { message: 'Bar' }, { message: 'Cbo' } ]

//使用concat()合并三个数组的值：
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale,kai); //=> [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]

//使用every()检测数组元素的每个元素是否都符合条件。
var ages=[16,30,50,40];
function checkAdult(age){   //检测是否成年人（回调函数）
    return age>=18;
}
var isAdult=ages.every(checkAdult);  //=> false             使用every()检测数组元素的每个元素是否都符合条件
var adult=ages.filter(checkAdult);   //=> [ 30, 50, 40 ]    filter检测数组元素，并返回符合条件所有元素的数组。
var index=ages.indexOf(16);   //=>  0             indexOf搜索数组中的元素，并返回它所在的位置。
var index=ages.indexOf(40);   //=>  3             indexOf搜索数组中的元素，并返回它所在的位置。
var str=ages.join(',');       //=>  16,30,50,40   join把数组的所有元素放入一个字符串。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var str1=fruits.join(' and ');  //=>  Banana and Orange and Apple and Mango
var index=fruits.lastIndexOf("Apple");  //=>  2   
var numbers = [4, 9, 16, 25];
var mapnumbers=numbers.map(Math.sqrt);  //=>  [ 2, 3, 4, 5 ]   map处理数组的每个元素，并返回处理后的数组。
function addone(num){
  return ++num;
}
var mapnumbers=numbers.map(addone);  //=> [ 5, 10, 17, 26 ]   map处理数组的每个元素，并返回处理后的数组。
var fruits = ["Banana", "Orange", "Apple", "Mango",true];
var v=fruits.pop();   //=> true   pop()删除数组的最后一个元素并返回删除的元素。
var v=fruits.push(false);  //=> 5  push()向数组的末尾添加一个或更多元素，并返回数组的新长度。
var revArray=fruits.reverse();   //=> [ false, 'Mango', 'Apple', 'Orange', 'Banana' ]   reverse()方法用于颠倒数组中元素的顺序。
var fruits = ["Banana", "Orange", "Apple", "Mango",true];
var v=fruits.shift();    //=> Banana   shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
/*slice() 方法
  slice() 方法可从已有的数组中返回选定的元素。
  slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
  注意： slice() 方法不会改变原始数组。
  ------------------------------------------------------------------------------------------
  参数                                        描述
  -------------------------------------------------------------------------------------------  
  start                     必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
                            也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
  -------------------------------------------------------------------------------------------                            
  end                       可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
                            如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
                            如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
  -------------------------------------------------------------------------------------------  
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);  //=> [ 'Orange', 'Lemon' ]   

var lenArr = [3, 10, 18, 20];
function checklength(len) {
    return len >= 18;
}
var isHave=lenArr.some(checklength);   //=> true  some()检测数组元素中是否有元素符合指定条件。

//sort()方法。请注意，数组在原数组上进行排序，不生成副本。
var points = [40,100,1,5,25,10];
var sortpoints=points.sort(function(a,b){return a-b});  //=> [ 1, 5, 10, 25, 40, 100 ]    数字排序（数字和升序）：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        //=> [ 'Apple', 'Banana', 'Mango', 'Orange' ]       字母和降序
fruits.reverse();     //=>  [ 'Orange', 'Mango', 'Banana', 'Apple' ]

/*splice() 方法用于插入、删除或替换数组的元素。
  语法：array.splice(index,howmany,item1,.....,itemX)
  ========================================================================
  参数                          描述
  ------------------------------------------------------------------------
  index                必需。规定从何处添加/删除元素。
                       该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
  ------------------------------------------------------------------------                      
  howmany              必需。规定应该删除多少元素。必须是数字，但可以是 "0"。
                       如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
  ------------------------------------------------------------------------
  item1, ..., itemX    可选。要添加到数组的新元素
  =========================================================================
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi");  //=> [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwi");  //=> [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

//toString() 方法可把数组转换为字符串，并返回结果。注意： 数组中的元素之间用逗号分隔。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var str=fruits.toString();  //=>  Banana,Orange,Apple,Mango

//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var len=fruits.unshift("Lemon","Pineapple"); //=> 6

//valueOf() 方法返回 Array 对象的原始值。valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v=fruits.valueOf();  //=> [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(v);

fruits[0]='new';
console.log(fruits);




//深入理解数组函数的参数和回调参数，
/*
  参数                描述
----------------------------------------------------------------
currentValue      必须。当前元素的值
index             可选。当期元素的索引值
arr               可选。当期元素属于的数组对象
-----------------------------------------------------------------
thisValue         可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
--------------------------------------------------------------------------------------------------------
*/
function check(age,index,arr){
  console.log(index);
  console.log(this);
  console.log(arr[0]);
  return age>=18;
}
console.log("===========深入理解数组函数的参数和回调参数============")
var isAdult=ages.every(check,obj);  
//console.log(isAdult);
/*输出=>0
    { message: 'Cbo' }
    16
    false
*/




