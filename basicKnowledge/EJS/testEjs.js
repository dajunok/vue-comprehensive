/***********************************本案例使用的是第一种形式。
一、Node安装与使用EJS模板引擎
    1、安装EJS模板引擎：npm install ejs
    2、JS文件引入EJS模板：const ejs = require('ejs');
    3、命令提示符执行：node  .\xx.js
二、HTML页面引入EJS模板
    1、下载ejs.js或ejs.min.js文件。
    2、html文件引入：<script src="ejs.js"></script>
    3、然后在<script>标签使用：
        <script>
          let people = ['geddy', 'neil', 'alex'];
          let html = ejs.render('<%= people.join(", "); %>', {people: people});
        </script>
三、webpack引用EJS模板
    1、安装配置ejs-loader加载器
        npm install ejs-loader
    2、配置ejs-loader加载器(webpack.config.js)
        {
            test: /\.(tpl|ejs)$/,
            loader: 'ejs-loader'
        },
    3、JS文件引入EJS语法编写的模板文件.ejs或tpl(后缀名在webpack.config.js文件中指定参见第2项说明)：
        import tpl from './tpl.ejs';
        注意：模板文件（.ejs或tpl）是以函数形式引入的,例如下面的案例：tpl(data)，函数返回的是data参数赋值替换后的字符串（即tpl(data)返回一个HTML格式的字符串）。
    4、ejs-loader工作原理：该加载器将.ejs或tpl文件内容转换为一个函数，函数将通过参数传入的数据替换掉对应的标签值（具体替换方式参见ejs模板语法标签<%=xx %>）。

*/
//=============================================================================================================================================================
const ejs = require('ejs');     //引入EJS模板



let people = ['geddy', 'neil', 'alex','zhangSan'];    
let html = ejs.render('<%= people.join(", "); %>', {people: people});  //使用默认分隔符<% %>
console.log(html);

//自定义分隔符：可针对单个模板或全局使用自定义分隔符。
// 1、使用ejs.render()
let users = ['geddy', 'neil', 'alex'];
let html_1=ejs.render('<?= user.join(" | "); ?>', {user: users},{delimiter: '?'});  // 单个模板文件指定分隔符：{delimiter: '?'}
console.log(html_1);  // => 'geddy | neil | alex'
ejs.delimiter = '$';    // 全局指定分隔符'$'
html_1=ejs.render('<$= users.join(" - "); $>', {users: users});
console.log(html_1);  // => 'geddy | neil | alex'

//2、使用ejs.renderFile(filename, data, options, function(err, str){});
ejs.renderFile('./11.ejs',{
    user:{
        name:"wangkun",
        age:22,
    },
    num:2,
    name:"zhangSan"
},{rmWhitespace:true,delimiter: '?'},(err,data)=>{
    if(err) {
        console.error(err);
    }else {
        console.log(data);
    }
});










