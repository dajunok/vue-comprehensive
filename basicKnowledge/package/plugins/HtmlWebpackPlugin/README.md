一、简介：
    html-webpack-plugin简化HTML文件创建以提供捆绑包的插件。插件的基本作用就是生成html文件。
    这是一个webpack插件，它简化了HTML文件的创建，为您的webpack包提供服务。这对于在文件名中包含哈希值
    的webpack包尤其有用，该哈希值可以更改每次编译。您可以让插件为您生成一个HTML文件，
    使用lodash模板提供自己的模板，或者使用自己的加载程序。
二、安装：
    npm i --save-dev html-webpack-plugin
三、使用：
    1、在JS模块中引入
        const CleanWebpackPlugin = require('clean-webpack-plugin')
        module.exports = {
            plugins: [
                new HtmlWebpackPlugin({            
                    filename: 'demo.html', // 生成的html文件名，该文件将被放置在输出目录
                    chunks: ['demo','chunk-vendors','chunk-common','runtime'],            
                    template: path.join(__dirname, './public/demo.ejs'),    // 模板源html或ejs文件路径
                    minify:{  //代码压缩
                            removeRedundantAttributes:true, // 删除多余的属性
                            collapseWhitespace:true, // 折叠空白区域
                            removeAttributeQuotes: true, // 移除属性的引号
                            removeComments: true, // 移除注释
                            collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
                    },
                }),
            ]
        }
    2、官网：https://www.npmjs.com/package/clean-webpack-plugin
