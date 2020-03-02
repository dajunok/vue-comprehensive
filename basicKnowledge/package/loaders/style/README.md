一、简介：
    常用样式文件加载器
二、安装：
  npm install --save-dev css-loader less-loader style-loader less sass-loader
  npm i -D postcss-loader
  npm install -g cnpm --registry=https://registry.npm.taobao.org   //这个采用淘宝镜像网站加快安装node-sass
  cnpm install -D node-sass
  npm i  -D autoprefixer
三、使用：
    1、在JS模块中引入
    //配置vue-loader
    {
        test: /\.(css|less|sass|scss)$/,
        use: [
          { loader: "vue-style-loader" },
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

    2、在项目根目录下添加postcss.config.js文件：
    module.exports = {
        plugins: {
            'autoprefixer':{
                options:{
                    browsers: ['last 5 versions']
                },
            },
        }
    };


