一、简介：
    把一个模块导出并付给一个全局变量。
    注意: 模块必须在你的 bundle 中被 require() 过，否则他们将不会被暴露。

二、安装：
    npm i expose-loader --save

三、使用：
    require("expose-loader?libraryName!./file.js");
    // 通过属性名 "libraryName" 暴露 file.js 的 exports 到全局上下文。
    // 在浏览器中，就将可以使用 window.libraryName 访问。


    //例如，假设你要将 jQuery 暴露至全局并称为 $  然后，window.$ 就可以在浏览器控制台中使用。
    require("expose-loader?$!jquery");

    

    //==============webpack可以通过配置文件webpack.config.js进行设置：
    //方法1、
        ...
        module: {
          loaders: [
            { test: require.resolve("jquery"), loader: "expose-loader?$" }
          ]
        }
        ...
    
    //方法2、
        ...
        module: {
          rules: [{
            test: require.resolve('jquery'),
            use: [{
              loader: 'expose-loader',
              options: '$'
            }]
          }]
        } 
        ...
    
    //除了暴露为 window. $ 之外，假设你还想把它暴露为 window.jQuery。 对于多个暴露，你可以在 loader 字符串中使用 !：
    //方法1、
        ...
        module: {
          loaders: [
            { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" },
          ]
        }
        ...
    //方法2、
        ...
        module: {
          rules: [{
                  test: require.resolve('jquery'),
                  use: [{
                      loader: 'expose-loader',
                      options: 'jQuery'
                  },{
                      loader: 'expose-loader',
                      options: '$'
                  }]
              }]
        }        
        ...

（附：
    require.resolve 是一个 node.js 调用（与 webpack 处理流程中的 require.resolve 无关）。require.resolve 
    用来获取模块的绝对路径（"/.../app/node_modules/react/react.js"）。所以这里的暴露只会作用于 React 模块。
    并且只在 bundle 中使用到它时，才进行暴露。
)