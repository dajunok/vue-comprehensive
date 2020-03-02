const path=require('path');
var _ = require('lodash');
var fs=require('fs');



var file=path.resolve('jsondata.json');  //指定json文件路径
var json=JSON.parse(fs.readFileSync(file)); //读取json文件
console.log(json.name);   //=>  webpack-demo
console.log(_.isMap(json));  //_.isMap()是lodash函数

//数组方式访问
console.log(json['requires']);  //=>  true


var jsonToStrData = JSON.stringify(json); //解释为字符串
//console.log(jsonToStrData);

for(var k in json ){  //遍历packJson 对象的每个key/value对,k为key
    console.log(k + " " + json[k]);
};


var text = '{ "name":"aaaa", "initDate":"2013-12-14", "site":"bbbbb"}';
var obj = JSON.parse(text, function (key, value) {
    if (key == "initDate") {
        return new Date(value);
    } else {
        return value;
}});