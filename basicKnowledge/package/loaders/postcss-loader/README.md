一、postcss-loader简介：
    PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。
    它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。
    插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，
    或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。从这个角度来说，
    PostCSS 的强大之处在于其不断发展的插件体系。目前 PostCSS 已经有 200 多个功能各异的插件。开发人员也可以根据项目的需要，
    开发出自己的 PostCSS 插件。
        PostCSS 从其诞生之时就带来了社区对其类别划分的争议。这主要是由于其名称中的 post，很容易让人联想到 PostCSS 
    是用来做 CSS 后处理（post-processor）的，从而与已有的 CSS 预处理（pre-processor）语言，如 SASS 和 LESS 等进行类比。
    实际上，PostCSS 的主要功能只有两个：第一个就是前面提到的把 CSS 解析成 JavaScript 可以操作的 AST，第二个就是调用插件来处理 AST 并得到结果。
    因此，不能简单的把 PostCSS 归类成 CSS 预处理或后处理工具。PostCSS 所能执行的任务非常多，同时涵盖了传统意义上的预处理和后处理。
    PostCSS 是一个全新的工具，给前端开发人员带来了不一样的处理 CSS 的方式。
二、用途
    1、为css样式自动加入浏览器前缀，使用postcss-loader加载器的autoprefixer插件。

三、安装：
    npm i -D postcss-loader
    npm i -D autoprefixer      #安装自动加入浏览器前缀插件
四、配置：
    1、安装在项目根目录添加配置文件postcss.config.js。
        //postcss.config.js
        module.exports = {
        plugins: [
            require('autoprefixer')({   
                browsers: ['last 5 versions']
                    })
                ]
        };
    2、配置webpack.config.js
        //webpack.config.js
        ...
        module:{
                rules:[
                    {
                        test: /\.(css|less)$/,
                        use: [
                          { loader: "vue-style-loader" },
                          { 
                            loader: MiniCssExtractPlugin.loader,  //提取.css文件
                          },
                          { loader: "css-loader" },     // translates CSS into CommonJS
                          { loader: "postcss-loader" }, // 为css样式自动加入浏览器前缀
                          { loader: "less-loader" },    // compiles Less to CSS
                        ]
                    },
                    ...

=====================================================配置详细介绍==============================================================
postcss.config.js 文件的数据格式问题
在我配置vue项目时，需要用vue-loader配合postcss-loader做配置时，发现了本项目存在的一个问题：

我在postcss.config.js中配置了parser:'postcss-scss'，这里在未配置vue-loader之前，只有css,scss,less的rule有引用该配置，而且是通过options.config.path的方式，找到该文件进行引用，在当时来说，样式能正常加载，页面能正常访问，一切都是正常的，哪怕后来的viewport适配也能正常编译及显示。但是它本质上还是有错误的

问题
postcss.config.js是公用的配置，postcss-loader官网示例，只要你配置了postcss-loader，它就会默认加载项目根目录下的postcss.config.js文件，所以如果postcss.config.js名字不变，路径位置不变，是可以不必再在配置中写入它的路径参数的，本项目目前为止，即使删除样式的rule中配置的postcss-loader的options.config.path，所有样式也依然可以正常被编译。
在不删除配置的options.config.path的情况下，因为在postcss.config.js中配置了parser:'postcss-scss'但实际上，该配置在项目中并不是只有scss的rule有引用，css和less的rule也都有引用，这本身也是个错误的配置。
在配置vue-loader时，它对postcss-loader的解析器parser的配置参数位置和rule的样式对postcss-loader的解析器parser的配置参数位置也有不同之处，如果将parser写在postcss.config.js文件中，这里就会有冲突。
postcss.config.js文件中plugins的数据书写格式问题，这个问题困扰我很久… 因为我曾修改过该文件，通过require的方式引入该文件，却因书写的数据格式错误而无法让插件起作用，一直未找到原因，在仔细阅读官网参数配置规则时，才恍然大悟~
答疑
第一个问题，如果想简单点，那就按照官网的来，固定的名字，固定的位置即可，vue-loader配置postcss-loader同样能默认加载名为postcss.config.js的文件配置，而且还支持：.postcssrc.js这个名字，同时还支持在package.json中配置的postcss,当然样式配置的postcss-loader也支持这两种方式。如果想要改变位置，或者想更加方便控制自己的项目，还是更推荐引入的方式。

postcss对不同的预处理器有不同的解析器插件,scss的解析器插件是postcss-scss,less的解析器插件是postcss-less,css不需要解析器插件。这就存在着解析器的差异化，最好将该配置从postcss.config.js文件中删除，这里不仅是三种样式的解析器参数值的差异化，还包括后期添加vue-loader配置postcss-loader时parser的配置位置的差异化，所以postcss.config.js文件，最好只存在公用的插件配置。

添加vue-loader配置postcss-loader时parser的配置位置与三种样式的postcss-loader配置parser位置也是存在差异化的

在本项目中，我是以对象的数据格式写的postcss.config.js文件的配置，在我声明一个变量接收这些配置将其暴露出来，并在webpack配置文件中require引入，在postcss-loader的options中调用时，这些插件却都不再起作用，起初完全不知道哪里出了问题，在仔细阅读官方参数配置规则后，发现，在postcss-loader的options中配置plugins，只接收array以及function格式的数据，它并不能接收object格式的数据。

说了这么多长篇大论，下面是代码部分：

本项目目前的postcss.config.js文件配置：

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'autoprefixer':{},
    "postcss-aspect-ratio-mini": {}, // 主要用来处理元素容器宽高比
    "postcss-write-svg": { utf8: false }, // 用来画1像素线
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
      mediaQuery: false // 允许在媒体查询中转换`px`
    }
  }
}

样式的配置：

{
    test: /\.css$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader',
            options: {
            sourceMap: true,
            config: {
                path: 'postcss.config.js'
            }
            }
        }
    ]
},
{
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: 'postcss.config.js'
                }
            }
        },
        {
            loader: 'sass-loader', 
            options: { sourceMap: true }
        }
    ],
    exclude: /node_modules/
},{// 编译less
    test: /\.less$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
            options: {
                importLoaders: 1,
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: 'postcss.config.js'
                }
            }
        },
        {
            loader: 'less-loader', 
            options: { 
                sourceMap: true,
            }
        }
    ]
},

以及后期会加入的vue-loader的配置：

{
    test: /\.vue$/,
    use:[
        {
            loader: 'vue-loader',
            options:{
                // 去除模板中的空格
                preserveWhitespace: false,
                // postcss配置,把vue文件中的样式部分,做后续处理
                postcss:{
                    // plugins: [...], // 插件列表
                    options:{parser: 'postcss-scss'}
                },
                loaders:{
                    css: ['vue-style-loader', 'css-loader'],
                    scss: ['vue-style-loader', 'css-loader', 'scss-loader'],
                }
            }
        }
    ],
},

在列一下官方postcss-loader的配置格式：

{
  test: /\.style.js$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'postcss-loader', 
        options: { 
            parser: 'sugarss', 
            config:{
                path:''
            },
            plugins:[],// 类型只能为array或者function 默认是array
            sourceMap:true
        } 
    }
  ]
}

从官方配置看，本项目用的是options.config.path，但是因为解析器的差异化原因，这里用这个方式就不太合适了，而且结合后期要添加的vue-loader的配置来说，最合适的配置方式如下：

{
  test: /\.style.js$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'postcss-loader', 
        options: { 
            parser: 'sugarss', 
            plugins:[],// 类型只能为array或者function 默认是array
            sourceMap:true
        } 
    }
  ]
}

使用options.parser以及options.plugins的结合，能实现配置差异化的parser也能实现调用公共的plugins，而且也实现了后期vue-loader的配置需求。

那么接下来就是要修改postcss.config.js文件了，我出错的修改方式如下：

const postcssPlugins = {
  plugins: {
    'autoprefixer':{},
    "postcss-aspect-ratio-mini": {}, // 主要用来处理元素容器宽高比
    "postcss-write-svg": { utf8: false }, // 用来画1像素线
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
      mediaQuery: false // 允许在媒体查询中转换`px`
    }
  }
}
module.exports = postcssPlugins;

在webpack.dev.conf.js文件中是这样配置的：

// 头部引用
const postcss = require('./postcss.config');

// rules中调用
{
    test: /\.css$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader',
            options: {
            postcss,
            sourceMap: true,
            }
        }
    ]
},
{
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
        },
        {
            loader: 'postcss-loader',
            options: {
                postcss,
                parser: 'postcss-scss',
                sourceMap: true,
            }
        },
        {
            loader: 'sass-loader', 
            options: { sourceMap: true }
        }
    ],
    exclude: /node_modules/
},{// 编译less
    test: /\.less$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
            options: {
                importLoaders: 1,
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                postcss,
                parser: 'postcss-less',
                sourceMap: true,
            }
        },
        {
            loader: 'less-loader', 
            options: { 
                sourceMap: true,
            }
        }
    ]
},

这样的配置在运行后，终端提示未设置任何parser,plugins, or stringifier. Right now, PostCSS does nothing，postcss未做任何事情，这里`postcss.config.js`以及`webpack.dev.conf.js`都配置错误了。首先`options.plugins`接收的数据类型我配置错误，其次也不能直接就把`postcss`这个变量就扔在那就行了

正确配置如下：

// postcss.config.js
const postcssPlugins = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-aspect-ratio-mini')(),
        require('postcss-write-svg')({ utf8: false }),
        require('postcss-px-to-viewport')({
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
            selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
            mediaQuery: false // 允许在媒体查询中转换`px`
        }),
    ]
}
module.exports = postcssPlugins;

// webpack.dev.conf.js
// 头部引用
const postcss = require('./postcss.config');

// rules中调用
{
    test: /\.css$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader',
            options: {
            plugins:postcss.plugins,
            sourceMap: true,
            }
        }
    ]
},
{
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins:postcss.plugins,
                parser: 'postcss-scss',
                sourceMap: true,
            }
        },
        {
            loader: 'sass-loader', 
            options: { sourceMap: true }
        }
    ],
    exclude: /node_modules/
},{// 编译less
    test: /\.less$/,
    use: [
        {
            loader: 'style-loader', 
        },
        {
            loader: 'css-loader', 
            options: {
                importLoaders: 1,
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins:postcss.plugins,
                parser: 'postcss-less',
                sourceMap: true,
            }
        },
        {
            loader: 'less-loader', 
            options: { 
                sourceMap: true,
            }
        }
    ]
},

这里又加入了一个插件postcss-less，所以先下载该插件：

yarn add postcss-less -D
1
然后执行yarn start 页面能正常显示，而且postcss插件也都起作用了。

最后同步修改webpack.test.conf.js以及webpack.prod.conf.js文件。
