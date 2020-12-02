const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/*
    代码分割
        一:多入口形式
            1.配置多入口文件(多文件都是用到的公共文件,每个模块中都会存在,代码冗余,增加了代码量)
            2.配置optimization
                optimization.splitChunks.chunks="all"   ->  将所有公共文件都单独提取成一个文件
                optimization.splitChunks.minSize=1   ->  需要拆分出来的公共文件,最小体积1B

        二.单入口形式(例如:vue项目index.js入口,但是路由组件想要单独拆分出来)
            需要webpack配合import函数
            使用import函数引入的代码,会自动被拆分出一个单独的文件
            如果想给这个文件命名,在引入的时候,添加注释webpackChunkName:"lodash"



            会想路由组件懒加载
            路由组件懒加载前:
            import Foo from '@/component/Foo/Foo.vue'
            new VueRouter({
                routes:[
                    {
                        path:"/foo",
                        component:Foo
                    }
                ]
            })

            路由组件懒加载后:
            new VueRouter({
                routes:[
                    {
                        path:"/foo",
                        component:import('@/component/Foo/Foo.vue')
                    }
                ]
            })


            React路由组件懒加载:
            import {Component,Suspense,lazy} from 'react'
            Suspense->组件 lazy->函数
            let Foo = lazy(()=>import('@/component/Foo/Foo.jsx'))
            <Suspense fallback={<Loading/>}>
                <Route path="/foo" component={Foo}/>
            </Suspense>
                
        
*/

module.exports={
    // entry:"./src/main.js",
    entry:{
        main:"./src/main.js",
        // home:"./src/home.js"
    },
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
        splitChunks:{
            chunks:"all",
            minSize:1
        }
    }
}