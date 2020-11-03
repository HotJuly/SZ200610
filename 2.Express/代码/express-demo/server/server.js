const fs = require('fs');
const { resolve } = require('path');
const express = require('express');
const formidable=require('express-formidable')

// 1.创建服务器应用实例
const app = express();  //  app ->  application


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

app.use(express.static(resolve(__dirname,"./public")))

app.post('/upload',formidable(),function(req,res,next){
    // console.log(req.files)
    const image = req.files.file;
    const readStream = fs.createReadStream(image.path);
    const writeStream = fs.createWriteStream('./public/'+image.name);
    readStream.pipe(writeStream);
    res.end("/"+image.name)
})




//2.将服务器应用实例挂载到某个端口上,并监听
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器成功启动于:http://localhost:3000')
    }
})