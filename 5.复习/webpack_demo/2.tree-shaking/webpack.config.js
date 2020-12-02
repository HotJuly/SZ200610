const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,'./build')
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
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    mode:"production",
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
    }
}