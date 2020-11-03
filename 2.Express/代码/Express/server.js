const express = require('express');

// 1.创建服务器应用实例
const app = express();  //  app ->  application


/*
    3.创建接口(路由,API)
    接口:
        1.请求方式
        2.请求路径
    接口文档:
        method  GET 
        path    /test
    回调函数接收两个参数:
        1.request   ->  请求报文对象(存放着所有跟请求相关的数据)
        2.response  ->  响应报文对象(存放着所有跟响应相关的数据)
    注意:
        1.每个路由路径都可以被不同的请求方式重复注册
        2.浏览器地址栏只能发送GET请求
        3.想要成功请求一个接口,请求方式和请求路径都必须匹配(精准匹配)
        4.可以通过response.set设置响应头,告知浏览器编码格式

    面试题:什么是路由
        1.路由可以理解为是一个键值对key-value
        2.key->请求路径
        3.value->返回的数据

    面试题:路由的分类
        1.前端路由
            1)前端路由的解析是有对应的js库进行解析(Vue-Router,React-Router-DOM)
            2)前端路由不走网络传输层(通过监视路径的变化,来显示不同的组件)
            3)前端路由路径匹配时,返回的是"组件"

            总结:前端路由就是路由路径和路由组件的映射关系

            routes:[
                {
                    path:"/home",
                    component:Home
                }
            ]

        2.后端路由
            1)后端路由的解析是由服务器进行解析
            2)后端路由需要前端发送请求触发
            3)后端路由路径匹配时,返回的一般是数据

            总结:后端路由就是路由路径,请求方式与回调函数的映射关系

    路由传参:
            1.GET
                1)query     /test?key1=value1
                2)params    /test/:id   ->  /test/1   ->占位符需要在注册路由的时候提前声明好
            2.POST
                1)query     /test?key1=value1
                  接收方式:req.query

                2)params    /test/:id   ->  /test/1   ->占位符需要在注册路由的时候提前声明好
                  接收方式:req.params

                3)body(请求体)
                    优点:
                        1.相对query和params,body是以密文进行传递数据(安全性好)
                        2.url是有长度限制的 ->  数据量不够大
                            body传参没有长度先知->数据量较大
                  接收方式:req.body
                  原生接收方式:
                    request.on('data',function(data){
                            console.log('body',data.toString())
                        })

*/
app.get('/test/:id',function(request,response){
    console.log("query",request.query);
    console.log("params",request.params);

    console.log('/test get success')

    //response.set()用于设置响应头配置
    response.set('content-type','text/html;charset=utf-8');
    //response.end(需要返回的数据)
    response.end('haha哈哈')
})

app.post('/test/:id',function(request,response){
    console.log("query",request.query);
    console.log("params",request.params);
    request.on('data',function(data){
        console.log('body',data.toString())
    })
    // console.log('body',request.body)
    console.log('/test post success')

    //response.end(需要返回的数据)
    response.end('xixi')
})

//2.将服务器应用实例挂载到某个端口上,并监听
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器成功启动于:http://localhost:3000')
    }
})