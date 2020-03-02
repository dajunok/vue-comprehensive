一、简介：
    rimraf 包的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除.
二、安装：
    npm install rimraf --save-dev
三、使用：
    1、在JS模块中引入
        //webpack.config.js
        const rm = require('rimraf');  //引入rimraf包，用于每次构建时先删除dist目录。
        rm(path.join(__dirname, './dist'), (err) => {
            if (err) throw err;
        });
    2、在package.json中的构建脚本中配置"scripts"，用于删除构建目录disk。
        //package.json
        "scripts": {
            ...
            "build": "rimraf dist && webpack --config webpack.config.js",
            ...
        },
