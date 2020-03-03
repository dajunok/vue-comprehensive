=====================================常见短路问题=====================================
一、Webpack安装配置方面。
    1、问题1：网页显示一片空白
        问题提交日期：2020-03-03
        问题情况描述：webpack打包一切正常，网页没有报404错误，但网页显示一片空白。
        问题排查：
            1、资源路径引用错误，首先通过浏览器开发人员工具查看资源引用路径，例如<script>标签对js文件的引用路径'src'属性配置是否正确
            （有一个小技巧是核对开发人员工具中的Network标签，我们经常在配置webpack.config.js时犯的一个错误就是把publicPath公共路径配错。
              在webpack.config.js中的output和一些插件经常需要配置publicPath公共路径，该路径对应相关服务器中的path参数）。

            2、在HtmlWebpackPlugin插件中忘记引入相关chunk块导致该问题发生。因为webpack在优化配置splitChunks、runtimeChunk、
               以及其他插件静态提取chunk块时忘记将对应的块名称添加到HtmlWebpackPlugin插件的chunks数组选项中。

            3、低版本浏览器兼容原因导致该问题。例如针对Vue项目时360和IE浏览器需要在网页<head>标签中添加以下三项：
                <meta http-equiv=X-UA-Compatible content="IE=edge">
                <meta name=renderer content=webkit>
                <meta name=viewport content="width=device-width,initial-scale=1">

        
