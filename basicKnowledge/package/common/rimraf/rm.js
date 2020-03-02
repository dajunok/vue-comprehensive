//可以利用以下方式加入到webpack.config.js配置文件最上面，用于删除dist目录。
const path=require('path');
const rimraf = require('rimraf'); 


rimraf(path.resolve(__dirname,'./test.txt'), function (err) { // 删除当前目录下的 test.txt
  console.log(err);
});

