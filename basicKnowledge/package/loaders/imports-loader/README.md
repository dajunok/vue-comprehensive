一、简介：
    用于向一个模块的作用域内注入变量（Can be used to inject variables into the scope of a module.）,官方的文档总是言简意赅但是不太好懂。
二、安装：
    npm install imports-loader
三、使用：
        loader 查询值                          含义
        ============================================================
        angular                 var angular = require("angular");
        $=jquery                var $ = require("jquery");
        define=>false           var define = false;
        config=>{size:50}       var config = {size:50};
        this=>window            (function () { ... }).call(window);
        ===============================================================    
    //这将简单的把 var $ = require("jquery"); 前置插入到 example.js 中。
    require("imports-loader?$=jquery!./example.js"); 

    //使用逗号 , 来分隔和使用多个值：
    require("imports-loader?$=jquery,angular,config=>{size:50}!./file.js");  //config=>{size:50}表示var config = {size:50};





