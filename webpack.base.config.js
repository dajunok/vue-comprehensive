const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');  //用于优化、压缩CSS文件的webpack插件。
const webpack =require('webpack');


const rm = require('rimraf');  //引入rimraf包，用于每次构建时先删除dist目录。

//先删除dist目录再构建
rm(path.join(__dirname, './dist'), (err) => {
    if (err) throw err;
});

module.exports={

    devtool:'source-map',      //源代码映射，'source-map'方便开发环境调试。 none 用于生产环境
    context:path.resolve(__dirname,'src'),   //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    mode:"development", // production：生产模式； development：开发模式  
    entry:{      //JavaScript执行入口文件
        main:'./main.js',        
    },
    output:{   
      path:path.resolve(__dirname,'./dist'),   //将输出文件都放到dist目录下 
      filename:"js/[name].[hash:8].js",   //决定了每个入口(entry) 输出 bundle 的名称。
      chunkFilename: 'js/[name].[chunkhash:8].js', //决定了非入口(non-entry) chunk 文件的名称。
      library:'myLibrary',    //library规定了组件库返回值的名字，也就是对外暴露的模块名称
      libraryTarget: 'umd',   //libraryTarget就是配置webpack打包内容的模块方式的参数：umd: 将你的library暴露为所有的模块定义下都可运行的方式。
      publicPath:'/myvue/',
    },
    module:{
        rules:[
            {
                test: /\.(css|less|sass|scss)$/,
                use: [
                  { loader: "vue-style-loader" },
                  { 
                    loader: MiniCssExtractPlugin.loader,  //提取.css文件
                    options:{
                        publicPath:'/myvue/',  //给提取后的目标.css文件中的url路径最前面添加../（解决css文件构建后图片路径url引用错误问题。url路径由加载器url-loader设置决定）
                    },
                  },
                  { loader: "css-loader" },     // translates CSS into CommonJS
                  { loader: "postcss-loader" }, // 为css样式自动加入浏览器前缀
                  { loader: "less-loader" },    // compiles Less to CSS
                  {
                    loader: "sass-loader", 
                    options: {  sourceMap: false },
                  },
                ]
            },
            //Vue-Loader是一个webpack的加载器，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            //配置babel-loader，Babel 是一个 JavaScript 编译器，可以把ES6的语法转为兼容浏览器的ES5语法
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {  
                    presets: [['@babel/preset-env',{
                      useBuiltIns:'usage',  //解决360浏览器、IE浏览器不兼容问题（需安装"babel-polyfill"插件,）
                    }]],
                    cacheDirectory:true,   //可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。 这会将转译的结果缓存到文件系统中。
                    //"sourceMaps": "inline",   //"inline"：生成内联源码映射表（inline source maps）。
                    plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties','@babel/transform-arrow-functions'],  //babel引入 babel runtime 作为一个独立模块，来避免重复引入。
                }
              }
            },            
            //配置文件加载器url-loader
            {
                //url-loader加载器处理图片文件
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    esModule: false,    //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,       // 小于10kb将会转换成base64
                    name: 'img/[name].[hash:8].[ext]',   // 大于10kb的资源输出地址，[name]是名字，[ext]后缀  
                    fallback: 'file-loader'    // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置      
                }
            },
            {   //url-loader加载器处理视频文件
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,  //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,
                    name: 'media/[name].[hash:8].[ext]',
                    fallback: 'file-loader' // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置
                }
            },
        ]
    },
    resolve: {
        // 设置别名
        alias:{
            '@': path.resolve(__dirname,'src')
        }  
    },
    //优化-----------------------
    optimization:{
        splitChunks: {
           cacheGroups: { // 缓存组（webpack使用cacheGroups选项实现静态拆分打包）
                vendors: {  // split `node_modules`目录下被打包的代码到 `js/vendor.js`没找到可打包文件的话，则没有。
                    test: /[\\/]node_modules[\\/]/,  //控制此缓存组选择的模块。忽略它将选择所有模块。它可以是正则表达式（RegExp）、字符串或函数。
                    name:'chunk-vendors',  //打包后的路径与名称
                    priority: -10,     //设置优先级别
                    chunks: 'initial'
                },
                common: {  
                  name: 'chunk-common',
                  minChunks: 2,
                  priority: -20,
                  chunks: 'initial',
                  reuseExistingChunk: true
                },              
            } 
        },
        runtimeChunk:{ name: 'runtime' },  // 为每个入口提取出webpack runtime模块
        minimize: true,    //生产环境默认压缩，不需要进行配（开发环境需要配置）
        minimizer:[  //使用插件对相关文件进行压缩
            new OptimizeCssAssetsPlugin(), //用于优化、压缩CSS文件的webpack插件。
        ]
    }, 
    //配置插件---------------
    plugins: [
        new VueLoaderPlugin(),  //创建Vue-Loader实例
        new HtmlWebpackPlugin({
            templateParameters: (compilation, assets, assetTags, options) => {
                return {
                  'BASE_URL': './',  //覆盖模板中使用的对应参数（即对模板中使用的BASE_URL参数进行赋值）
                  'author':"vue-webpack",
                };
            },
            //favicon:'../public/favicon.ico',
            title: 'webpack-ok',            
            filename: 'index.html', // 生成的html文件名，该文件将被放置在输出目录 
            chunks: ['main','chunk-vendors','chunk-common','runtime'],        
            template: path.join(__dirname, './public/index.ejs'),   // 模板源html或ejs文件路径
            minify:{  //代码压缩
                    removeRedundantAttributes:true, // 删除多余的属性
                    collapseWhitespace:true, // 折叠空白区域
                    removeAttributeQuotes: true, // 移除属性的引号
                    removeComments: true, // 移除注释
                    collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
        //配置MiniCssExtractPlugin插件：提取与压缩.css文件。
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',    //指定提取的CSS文件路径与名称
          chunkFilename: 'css/[id].css',
        }),

        //new InlineManifestWebpackPlugin('vendor01'),   // 将运行代码直接插入html文件中，因为这段代码非常少且时常改动，这样做可以避免一次请求的开销
    ],
    

};
