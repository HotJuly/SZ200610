const express = require('express');
const {resolve} = require('path');

const app =express();

app.use(
    express.static(resolve(__dirname,'./build'),{
        maxAge:3600000
    })
);


app.listen(3600,function(err){
    if(!err){
        console.log('服务器启动成功:http:localhost:3600');
    }
})