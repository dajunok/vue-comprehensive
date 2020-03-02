const a=require("./apply.js");  //引入Node模板apply.js
const object=require("./object.js"); 
const fun=require("./object.js"); 

process.env.NODE_ENV=JSON.stringify('production');  //=> "production"
console.log(process.env.NODE_ENV);
const devMode = process.env.NODE_ENV === JSON.stringify('production');  //=> true
const devMode = process.env.NODE_ENV === 'production';  //=> false

console.log(devMode);
console.log(a);
console.log(a.fun());
console.log(object);
console.log("===============函数形式导出");
console.log(fun);