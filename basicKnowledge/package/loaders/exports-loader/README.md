一、简介：
    通过向源文件中添加"exports[...] = ..."这样的语句从文件内部导出变量。
二、安装：
    npm i exports-loader --save
三、使用：
    require("exports-loader?file,parse=helpers.parse!./file.js"); 
    // 向文件源码添加如下代码：
    //  exports["file"] = file;
    //  exports["parse"] = helpers.parse;
    

    require("exports-loader?file!./file.js");
    // 向文件源码添加如下代码：
    //  module.exports = file;



