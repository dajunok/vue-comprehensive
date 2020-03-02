一、简介：
    这个包允许使用Babel和webpack来转换JavaScript文件。
二、安装：
    版本搭配：【webpack 4.x | babel-loader 8.x | babel 7.x】

    npm install -D babel-loader @babel/core @babel/preset-env webpack
    npm install -D @babel/plugin-transform-runtime
三、使用：
    1、在JS模块中引入
       rules: [
          // the 'transform-runtime' plugin tells Babel to
          // require the runtime instead of inlining it.
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          }
        ]
    2、@babel/plugin-transform-runtime作用是可以要求将Babel运行时作为一个单独的模块，以避免重复。
    3、官网：https://www.npmjs.com/package/babel-loader
