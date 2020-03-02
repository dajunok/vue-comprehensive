一、简介：
    使用clean-webpack-plugin插件，默认会删除output指定的输出目录
二、安装：
    npm i clean-webpack-plugin -D
三、使用：
    1、在JS模块中引入
        const CleanWebpackPlugin = require('clean-webpack-plugin')
        module.exports = {
            plugins: [
                new CleanWebpackPlugin(['dist'], { 
                      root: path.resolve(__dirname, '..'),
                      dry: false // 启用删除文件
                    }),
            ]
        }
    2、官网：https://www.npmjs.com/package/clean-webpack-plugin
