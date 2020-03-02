/*
    JS扩展运算符(Spread Operator)：
        扩展运算符(...)又称为展开运算符，是Javascript ES6的一个新语法，也是开发者比较喜欢的一个语法，因为简洁高效，也被使用在很多应用中。
        附：
            1、`${}`   占位符用法
*/

//--1.复制数组
let arr=[1,2,3,4];
let duplicate=[...arr];    //与duplicate=arr引用赋值不一样，它是浅拷贝。duplicate===arr为false。
console.log(`copy is:${duplicate}`);   //=>copy is:1,2,3,4     ${}占位符用法（注意：这里不是单引号，是esc下面的点符号）


//--2.合并多个数组
{//块级作用域
    let arr1=['apple','peach','pear','banana','cherry'];
    let arr2=['bear','rabbit','sheep','dog','cat'];
    let mergeAry=[...arr1,...arr2];    //合并数组arr1和arr2
    console.log(`The mergeAry is ${mergeAry}`);  //=> The mergeAry is apple,peach,pear,banana,cherry,bear,rabbit,sheep,dog,cat
}

//--3、复制对象：复制原始对象的每个key-value对给一个完全新的对象，同样不是引用关系。
{//块级作用域
    let obj={a:1,b:2,c:3};
    let copyObj={...obj};   //复制对象
    console.log(`The copyObj is ${JSON.stringify(copyObj)}`);  //=> The copyObj is {"a":1,"b":2,"c":3}
}

//--4、合并对象：抽取每个对象中的key-value 键值对，然后按照顺序分别赋值给一个新的对象。如果对象中存在同样的key，后边对象中的key值会覆盖前边的对象中key值。
{//块级作用域
    let obj1={a:1,b:2,c:3};
    let obj2={d:4,e:5,f:6};
    let merge={...obj1,...obj2};
    console.log(`The merge object is ${JSON.stringify(merge)}`);  //=> The merge object is {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}
}


//--5、使用数组传递多个参数
{//块级作用域
    /*
        let args = [1, 2, 3];
        passArguments(...args);
    */
}

//--6、用于函数调用
{//块级作用域
    function add(x, y) {  return x + y; }
    let numbers = [4, 38];
    let num=add(...numbers);
    console.log(`add函数调用结果：${num}`);  //=> add函数调用结果：42
}

//--7、扩展运算符后跟函数调用进行对象合并
{//块级作用域
    let obj1={a:1,b:2};
    let obj2={c:3,d:4};
    function spread(){
        return {e:5,f:6};
    }

    let obj={
        ...obj1,
        ...obj2,
        ...spread(),  //用于函数调用后的返回结果的展开
    };
    console.log(`在对象中通过扩展符...调用函数合并数据结果：${JSON.stringify(obj)}`);  //=> 在对象中通过扩展符...调用函数合并数据结果：{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}
}

//--8、扩展运算符在函数形参与实参列表中的作用：将传递给函数的所有实参打包到一个数组中。注意 : 和在等号左边一样, 也只能写在形参列表的最后
{//块级作用域
    function getSum(...values) {  //扩展运算符用于形参列表
        let sum = 0;
        for (let i = 0; i < values.length; i++){
            let num = values[i];
            sum += num;
        }
        return sum;
    }
    let res = getSum(1, 2, 3, 4);   //(1, 2, 3, 4)这四个实参在函数体内将被打包成数组[1,2,3,4]。
    console.log(res);   //=> 10

    //扩展运算符与其他形参混用
    function sum(a, ...values) { 
        console.log(a);     //=> 1
        console.log(values);    //=> [2, 3]
    }
    sum(1, 2 , 3);

    //扩展运算符用于实参列表（一般情况下函数在定义时形参也运用了扩展运算符）
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1.push(...arr2);  //通过push函数，将一个数组添加到另一个数组的尾部
    console.log(`arr1在push推入后结果：${JSON.stringify(arr1)}`);  //=> arr1在push推入后结果：[0,1,2,3,4,5]
}

{
    function myfun(a){
        a();
    };
    myfun(()=>console.log("a()函数被调用了"));
}





















