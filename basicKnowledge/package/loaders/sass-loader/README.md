一、简介：
    1、Sass是一种预处理器脚本语言，可以解释或编译成层叠样式表（CSS）。
      Sass包含两种语法：较旧的语法使用缩进将代码块和换行符分隔为单独的规则；较新的语法SCSS使用像CSS这样的块格式。它使用大括号来表示代码块和分号来分隔块中的行。
      缩进语法和SCSS文件传统上分别给出扩展名.sass和.scss
        Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、
      导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）
      有助于更好地组织管理样式文件，以及更高效地开发项目。
    2、node-sass是一个库，它将Node.js绑定到LibSass（流行样式表预处理器Sass的C版本）。它允许用户以令人难以置信的速度将.scss文件本地编译为css，并通过连接中间件自动编译。
    3、sass-loader加载Sass/SCSS文件并将其编译为CSS。
    4、有sass-loader还需要node-sass吗？要的，因为 sass-loader 依赖于node-sass并且本身又没有单独安装node-sass库包。   
二、安装：
    npm install sass-loader node-sass --save-dev --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
三、配置：
    //webpack.config.js
    ...
    module:{
    rules:[
        {
            test: /\.(css|less|sass|scss)$/,
            use: [
              { loader: "vue-style-loader" },
              { 
                loader: MiniCssExtractPlugin.loader,  //提取.css文件
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
        ...






======================================整理 node-sass 安装失败的原因及解决办法========================================

声明：本文非原创，如有侵权请留言或发邮件告知，作者会立即停止侵权并删除本文。发布此文章主要是希望跟作者遇到同样问题的同学能解决node-sass 安装失败的问题。
npm install 时偶尔遇到报错：没有安装python或node-sass 安装失败的问题，百度之后发现是被墙了，但根据百度的方法换了淘宝镜像和用了vpn都安装失败，最后发现原来是因为没有卸载之前安装失败的包导致的。作者本人最后的解决方案是npm uninstall node-sass，然后使用VPN重新安装了一遍就成功了。不能翻墙的同学请看下文

node-sass 安装失败的原因
npm 安装 node-sass 依赖时，会从 github.com 上下载 .node 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。
这是使用 sass 的同学可能都会遇到的郁闷的问题。

解决方案就是使用其他源，或者使用工具下载，然后将安装源指定到本地。

解决方法一：使用淘宝镜像源（推荐）
设置变量 sass_binary_site，指向淘宝镜像地址。示例：

npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

// 也可以设置系统环境变量的方式。示例
// linux、mac 下
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass

// window 下
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ && npm install node-sass
或者设置全局镜像源：

npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
之后再涉及到 node-sass 的安装时就会从淘宝镜像下载。

解决方法二：使用 cnpm
使用 cnpm 安装 node-sass 会默认从淘宝镜像源下载，也是一个办法：

cnpm install node-sass
解决方法三：创建.npmrc文件
在项目根目录创建.npmrc文件，复制下面代码到该文件。

phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
保存后 删除之前安装失败的包(第一次安装请跳过此步)

npm uninstall node-sass
重新安装

npm install node-sass
作者后来另一个项目在没有使用VPN的情况下测试此方法，安装时报错 ERR! node-sass@3.8.0 postinstall: `node scripts/build.js 改用方法一成功。

解决方法四：下载 .node 到本地
到这里去根据版本号、系统环境，选择下载 .node 文件，然后安装时，指定变量 sass_binary_path，如：

npm i node-sass --sass_binary_path=/Users/lzwme/Downloads/darwin-x64-48_binding.node
安装失败后重新安装问题
之前安装失败，再安装就不去下载了，怎么办呢？那就先卸载再安装：

npm uninstall node-sass
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
相关错误提示
提示没有安装python、build失败等，如：

gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Users\zhuon\AppData\Local\Programs\Python\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (G:\Workspace\ManYan\manyan-nav\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (G:\Workspace\ManYan\manyan-nav\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at G:\Workspace\ManYan\manyan-nav\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:152:21)
gyp ERR! System Windows_NT 10.0.15063
gyp ERR! command "C:\\dev\\nodejs\\node.exe" "G:\\Workspace\\ManYan\\manyan-nav\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags="
"--libsass_library="
gyp ERR! cwd G:\Workspace\ManYan\manyan-nav\node_modules\node-sass
gyp ERR! node -v v8.4.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
Build failed
npm WARN co-mocha@1.2.0 requires a peer of mocha@>=1.18 <4 but none was installed.
npm WARN egg-restapi-module-tool@1.0.0 No repository field.
npm WARN egg-restapi-module-tool@1.0.0 scripts['server'] should probably be scripts['start'].

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@3.8.0 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@3.8.0 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     D:\nodejs\cache\_logs\2017-09-02T16_06_24_298Z-debug.log
主要转自：志文工作室
其它参考：
https://github.com/lmk123/blo...
https://segmentfault.com/q/10...
    
