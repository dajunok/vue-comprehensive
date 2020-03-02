/*
    dotenv：npm库，从文件加载环境变量
    简介：
        我们经常需要Node.js程序运行时加载不同的配置，比如开发环境和生产环境的数据数据库配置就可能不一样，使用 process.env.DB_HOST 环境变量，
        可以在Node.js程序内部方便获取参数信息。但是，程序启动时，怎样将环境变量传递给程序，这可能会是一个相对麻烦的事情，
        因为这关系到操作系统层的配置问题。今天我们要了解的dotenv就是一个可以使得Node.js从文件中加载环境变量的库，使用dotenv，
        我们只需要将程序的环境变量配置写在.env文件中。
            # .env file
            DB_HOST=localhost
            DB_USER=root
            DB_PASS=s1mpl3
    官网： http://npm.taobao.org/package/dotenv
    安装： npm install dotenv
    引入： require('dotenv').config()
*/
//===========================================================================================================================

require('dotenv').config()  //引入.env文件中的环境变量。
const db={
    host: process.env.DB_HOST,          //使用Node.js模块：process.env 属性返回包含用户环境的对象。   
    username: process.env.DB_USER,
    password: process.env.DB_PASS
};
console.log(db);



