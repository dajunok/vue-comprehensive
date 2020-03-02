一、简介：
    将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
二、安装：
    npm install --save-dev mini-css-extract-plugin
三、使用：
    1、webpack配置：
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');

        module.exports = {
            plugins: [
                new MiniCssExtractPlugin({
                  filename: 'css/[name].css',    //指定提取的CSS文件路径与名称
                  chunkFilename: 'css/[id].css',
                }),
            ]
        }
    2、官网：https://www.npmjs.com/package/mini-css-extract-plugin
