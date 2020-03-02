一、简介：
   ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，
   常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，
   一般来说编译程序会内置检查工具。
        JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要
   在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。
   ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件
   并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则。
   ESLint 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。 
二、安装与初始化生成配置文件.eslintrc.js：
    npm install eslint --save-dev 
    .\node_modules\.bin\eslint --init
三、配置：


四、常用插件：
    这些都是eslint工具，请安装到当前目录按需安装--save-dev，方便不同的项目使用不同的方式！（服务器端支持nodejs，客户端是不支持nodejs的）。eslint语法解析常用插件：eslint-plugin-<plugin-name>
    eslint-plugin-react
    eslint-plugin-vue（支持vue规则）
    eslint-plugin-node（支持nodejs规则）
    eslint-plugin-import（import语句规则）
    eslint-plugin-promise
    eslint-plugin-html
    eslint-plugin-json
    eslint-plugin-es6
    eslint-plugin-es5
    
    插件搜索网站：https://www.npmjs.com