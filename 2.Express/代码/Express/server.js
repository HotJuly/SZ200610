const { response } = require('express');
const express = require('express');

// 1.创建服务器应用实例
const app = express();  //  app ->  application

//jsonp实现原理
// app.get('/test',function(request,response,next){
    // console.log(request.query)
    // const {callback} = request.query;
    // const data=1233333333;
    // response.send(`${callback}(${data})`);//getData(1233333333)
// })

app.use(function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if(req.method==="OPTIONS"){
        res.end();
    }else{
        next();
    }
})

//cors实现原理
app.post('/test2',function(request,response,next){
    console.log('/test get success')
    response.end("123")
})




//2.将服务器应用实例挂载到某个端口上,并监听
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器成功启动于:http://localhost:3000')
    }
})