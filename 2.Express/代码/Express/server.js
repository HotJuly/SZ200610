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
*/
app.get('/test',function(request,response){
    console.log('/test get success')

    //response.end(需要返回的数据)
    response.end('haha')
})

app.post('/test',function(request,response){
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