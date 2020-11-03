const { resolve } = require('path');
const express = require('express');

const multipart = require('connect-multiparty');

// 1.创建服务器应用实例
const app = express();  //  app ->  application

/*
    中间件
    数据类型:函数
    使用语法:
        全局使用:app.use(中间件函数)
        局部使用:app.post('/test',multipart(),路由中间件函数)
    作用:
        1.扩展一些功能
        2.设置修改请求头和响应头
        3.执行下一个中间件
    传入实参:
        1.req   ->  request
        2.res   ->  response
        3.next  ->  放行,执行下一个中间件
    特点:
        1.无论任何请求方式或者任何地址,都会触发中间件
        2.路由其实也是中间件
        3.每个中间件都可以去返回数据,但是比较靠前的中间件尽量不要返回数据,否则容易出现报错
        4.无论是路由还是中间件,谁在前面就先执行谁
        5.可以进行链式调用

    分类:
        1.内置中间件
            express.static(绝对路径(需要通过path.resolve进行拼接))    ->  静态资源映射
            express.json()  ->  application/json    ->  raw
            express.urlencoded()    ->  x-www-form-urlencoded 
        2.第三方中间件
            connect-multiparty  ->  form-data
        3.自定义中间件
        4.路由中间件

*/

// app.use(function(req,res,next){
//     console.log('中间件1号准备就绪');
//     res.send('234');
//     next();
// })

// app.use(function(req,res,next){
//     console.log('中间件1号弹射起飞,中间件2号准备就绪');
//     next();
// })

app.use(express.json())
.use(express.urlencoded())
.use(multipart());
// app.use(express.static(resolve(__dirname,"./public")))



app.get('/test',function(request,response,next){
    response.send('/test get success');
})

app.post('/test',multipart(),function(req,res,next){
    // console.log('body-json',req.body)
    // console.log('body-urlencoded',req.body)
    console.log('body-formdata',req.body)
    res.send('/test post success');
})


//2.将服务器应用实例挂载到某个端口上,并监听
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器成功启动于:http://localhost:3000')
    }
})