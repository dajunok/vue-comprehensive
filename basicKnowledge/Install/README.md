一、webpack常用安装包
------------------自身安装相关包
npm install --save-dev webpack webpack-cli


------------------Vue相关安装包：
npm install vue vue-router
npm install vuex --save
npm install -D vue-loader vue-template-compiler vue-style-loader


-----------------url相关文件、图片、CSS样式文件加载相关包
npm install --save-dev css-loader less-loader style-loader less sass-loader url-loader
npm i -D postcss-loader
npm install -g cnpm --registry=https://registry.npm.taobao.org   //这个采用淘宝镜像网站加快安装node-sass
cnpm install -D node-sass
npm i  -D autoprefixer

------------------babel文件转换(ES6转ES2005)相关包【webpack 4.x | babel-loader 8.x | babel 7.x】

npm install -D babel-loader @babel/core @babel/preset-env 
npm install --save @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime

-----------------其他
npm install rimraf --save-dev
npm install dotenv
npm install --save-dev mini-css-extract-plugin
npm i --save-dev html-webpack-plugin
npm install --save-dev optimize-css-assets-webpack-plugin
npm install terser-webpack-plugin --save-dev
npm install copy-webpack-plugin --save-dev
npm install --save-dev preload-webpack-plugin@^3.0.0-beta.4