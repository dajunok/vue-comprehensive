一、简介：
    起初，chunks(代码块)和导入他们中的模块通过webpack内部的父子关系图连接.在webpack3中，通过CommonsChunkPlugin来避免他们之间的依赖重复。
    而在webpack4中CommonsChunkPlugin被移除，取而代之的是 optimization.splitChunks 和 optimization.runtimeChunk 配置项。
    在默认情况下，SplitChunksPlugin 仅仅影响按需加载的代码块，因为更改初始块会影响HTML文件应包含的脚本标记以运行项目。
    webpack将根据以下条件自动拆分代码块：
        ● 会被共享的代码块或者 node_mudules 文件夹中的代码块
        ● 体积大于30KB的代码块（在gz压缩前）
        ● 按需加载代码块时的并行请求数量不超过5个
        ● 加载初始页面时的并行请求数量不超过3个   

二、安装：
    SplitChunksPlugin插件是webpack内置，无需安装，开箱即用。
三、使用：
    //webpack.config.js
    ...
    module:{
        ...
        //优化
        optimization:{
            //分割代码块
            splitChunks: {
                chunks: "async",        //chunks属性用来选择分割哪些代码块，可选值有：'all'（所有代码块），'async'（按需加载的代码块），'initial'（初始化代码块）。
                minSize: 30000,         // 模块的最小体积30kb
                minChunks: 1,           // 模块的最小被引用次数
                maxAsyncRequests: 5,    // 按需加载的最大并行请求数
                maxInitialRequests: 3,       // 一个入口最大并行请求数
                automaticNameDelimiter: '~', // 文件名的连接符
                name: true,             //使用name选项设置要控制分割块的块名称
                cacheGroups: { // 缓存组
                    //缓存组名称vendors，可以自定义。
                    vendors: {  // split `node_modules`目录下被打包的代码到 `js/vendor.js`没找到可打包文件的话，则没有。
                        test: /[\\/]node_modules[\\/]/,  //控制此缓存组选择的模块。忽略它将选择所有模块。它可以是正则表达式（RegExp）、字符串或函数。
                        name:'js/vendor',  //打包后的路径与名称
                        priority: -10,     //设置优先级别
                    },
                    //默认缓存组
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
        },
        //配置 runtimeChunk 会给每个入口添加一个只包含runtime的额外的代码块，其实就是单独分离出webpack的一些运行文件。name 的值也可以是字符串，不过这样就会给每个入口添加相同的 runtime，配置为函数时，返回当前的entry对象，即可分入口设置不同的runtime。
        runtimeChunk: {
          name: entrypoint => `manifest.${entrypoint.name}`
        },
    },
//==================================================================
附：runtimeChunk：作用是将包含chunks映射关系的list单独从main.js里提取出来，因为每一个chunk的id基本都是基于内容hash出来的，所以你每次改动都会影响它，如果不把它提取出来的话，等于main.js每次都会改变，缓存就失效了。
在使用 CommonsChunkPlugin的时候，我们也通常把webpack runtime 的基础函数提取出来，单独作为一个chunk,毕竟code splitting想把不变的代码单独抽离出来，方便浏览器缓存，提升加载速度。
其实就是单独分离出webpack的一些运行文件。


    
