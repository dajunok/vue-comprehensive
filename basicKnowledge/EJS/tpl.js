/***********************************本案例使用的是第三种形式。
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
    1、安装配置ejs-loader加载器。ejs-loader简单理解为解析参数，帮你拼接字符串，返回一个拼接好的字符串(style，attr，class这些标签属性都是可以通过你传入的变量来设置的)
        npm install ejs-loader
    2、在webpack.config.js中配置ejs-loader加载器
        {
            test: /\.(tpl|ejs)$/,
            loader: 'ejs-loader'
        },
    3、JS文件引入EJS语法编写的模板文件.ejs或tpl(后缀名在webpack.config.js文件中指定参见第2项说明)：
        import tpl from './tpl.ejs';
        注意：模板文件（.ejs或tpl）是以函数形式引入的,例如下面的案例：tpl(data)，函数返回的是data参数赋值替换后的字符串（即tpl(data)返回一个HTML格式的字符串）。
    4、ejs-loader工作原理：该加载器将.ejs或tpl文件内容转换为一个函数，函数将通过参数传入的数据替换掉对应的标签值（具体替换方式参见ejs模板语法标签<%=xx %>）。
    5、本JS文件合并数据后，对外引用与使用方式：
        import HeaderTpl from './tpl.js';
        const header = new HeaderTpl();    
*/
//===================================================================================================================================================
import tpl from './tpl.ejs';    //webpack中依赖ejs-loader加载器（EJS模板引擎），注意！目前该加载器不是完全支持EJS模板语法（标签只支持<% %>和<%=  %>）。


export default function HeaderTpl() {
    const data={
        name:"zhangSan",
        num:2,
        user:{name:"wangkun",age:22}
    };
    return {
        tpl: tpl(data)  //data对象作为参数传入。模板中的<%=xx %>中的xx会由data数据对象对应的xx键值替换，tpl(data)函数返回由data替换后一个html格式的字符串。
    };
}




