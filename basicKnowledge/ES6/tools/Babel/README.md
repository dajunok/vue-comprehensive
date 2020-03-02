@babel/parser       将源代码解析成 AST。
@babel/generator    将AST解码生 js代码。
@babel/core         包括了整个babel工作流，也就是说在@babel/core里面我们会使用到@babel/parser、transformer[s]、以及@babel/generator。
@babel/code-frame   用于生成错误信息并且打印出错误原因和错误行数。（其实就是个console工具类）
@babel/helpers      也是工具类，提供了一些内置的函数实现，主要用于babel插件的开发。
@babel/runtime      也是工具类，但是是为了babel编译时提供一些基础工具库。作用于transformer[s]阶段，当然这是一个工具库，如果要使用这个工具库，还需要引入@babel/plugin-transform-runtime，它才是transformer[s]阶段里面的主角。
@babel/template     也是工具类，主要用途是为parser提供模板引擎，更加快速的转化成AST
@babel/traverse     也是工具类，主要用途是来便利AST树，也就是在@babel/generator过程中生效。
@babel/types        也是工具类，主要用途是在创建AST的过程中判断各种语法的类型。

一、功能介绍：
    1、Babel解析器（以前的Babylon）是一个用于Babel的JavaScript解析器。
        ● 默认启用的最新ECMAScript版本（ES2017）。
        ● 注释附件
        ● 支持JSX、Flow、Typescript。
        ● 支持实验性的语言提议（至少在stage-0阶段接受所有PRs（performance-related specifications ）性能相关规范）。

    2、AST（Abstract Syntax Tree）：抽象语法树。抽象语法树是源代码的抽象语法结构的树状表示，树上的每个节点都表示源代码中的一种结构，
      这所以说是抽象的，是因为抽象语法树并不会表示出真实语法出现的每一个细节，比如说，嵌套括号被隐含在树的结构中，
      并没有以节点的形式呈现。抽象语法树并不依赖于源语言的语法，也就是说语法分析阶段所采用的上下文无文文法，因为在写文法时，
      经常会对文法进行等价的转换（消除左递归，回溯，二义性等），这样会给文法分析引入一些多余的成分，对后续阶段造成不利影响，
      甚至会使合个阶段变得混乱。因些，很多编译器经常要独立地构造语法分析树，为前端，后端建立一个清晰的接口。
      抽象语法树在很多领域有广泛的应用，比如浏览器，智能编辑器，编译器。
    3、cli：  Babel 自带了一个内置的 CLI 命令行工具，可通过命令行编译文件。
      安装：npm install --save-dev @babel/core @babel/cli
      用法：
            npx babel script.js   //编译 script.js 文件并输出到标准输出设备（stdout）。

            //如果你希望 输出到文件 ，可以使用 --out-file 或 -o 参数。
            npx babel script.js --out-file  script-compiled.js   //编译 script.js 文件并输出到

            //每次文件修改后 编译该文件，请使用 --watch 或 -w 参数：
            npx babel .\src\es6.js  --watch --out-file .\lib\es6.js

            //希望输出源码映射表（source map）文件 ，你可以使用 --source-maps 或 -s 参数。
            npx babel .\src\es6.js --out-file  .\lib\es6.js --source-maps

            //编译整个目录，输出目录可以通过 --out-dir 或 -d 指定
            npx babel src --out-dir lib                     //编译整个 src 目录下的文件并输出到 lib 目录，输出目录可以通过 --out-dir 或 -d 指定。这不会覆盖 lib 目录下的任何其他文件或目录。
            npx babel src --out-file script-compiled.js     //编译整个 src 目录下的文件并将输出合并为一个script-compiled.js文件。 

            //忽略某些文件
            npx babel src --out-dir lib --ignore "src/**/main.js"   

            //拷贝不需要编译的文件
            npx babel src --out-dir lib --copy-files













