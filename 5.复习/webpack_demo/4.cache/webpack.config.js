const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
    缓存(cache):分为两种
        1.强缓存(太过于绝对,除非超时或者文件名称发生变化,或者用户手动清除,不然一直使用旧文件)
            响应头中会有maxAge(最大过期时间)
        2.协商缓存
            响应头中会有e-tag和last-modifined

    webpack打包方案:
        1.hash值(hash是每次构建项目的唯一标识)
            会导致一个文件发生变化,所有文件重新生成(缺点:明明有的文件内容没有发生变化,还被重新打包)
        
        2.chunkhash(chunkhash是每个入口文件和他之后的依赖文件打包的标识)
            一个入口内任意文件发生变化,该文件链中,所有的文件都会重新编译

        3.contenthash(contenthash是每个文件自己打包的标识)
            某个依赖文件发生变化,会导致引入他的文件也重新打包(由于依赖文件名称发生变化,contenthash也发生变化)
            解决:使用contenthash配合runtimeChunk
*/

module.exports={
    entry:"./src/main.js",
    output:{
        filename:"[name].[contenthash].js",
        path:resolve(__dirname,'./server/build')
    },
    /*
        loader和plugin的区别
        webpack他只认识js,无法打包其他类型代码
        借助loader的力量,编译无法识别的文件类型
        plugin不偏向于文件,主要的功能就是扩展功能(例如:HTMLWebpackPlugin可以将打包之后的js代码引入某个模版页面)
     */
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[contenthash].css"
          })
    ],
    mode:"development",
    // devServer:{
    //     port:8089,
    //     proxy:{
    //         "/api":{
    //             target:"http://atguigu.com",
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 "^/api":""
    //             }
    //         }
    //     },
    //     // 热模替换hot和hotOnly,hot会刷新页面,hotOnly不会
    //     // hot:true,
    //     hotOnly:true
    // },
    resolve:{
        alias:{
            "@":resolve(__dirname,'./src')
        },
        extensions:[".vue",'.js','.jsx','.json','.less']
    },
    optimization:{
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
          }
    }
}