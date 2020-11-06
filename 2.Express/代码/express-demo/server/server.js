const fs = require('fs');
const { resolve } = require('path');
const express = require('express');
const formidable=require('express-formidable');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-demo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

mongoose.connection.on('open',function(err){
    if(err) return;
    console.log('连接数据库成功')
})

//1.新建约束对象
    const usersSchema = new mongoose.Schema({
        username:{
            require:true,
            unique:true,
            type:String
        },
        password:String,
        avatarImg:String
    })

//2.新建模型对象
    const usersModel = mongoose.model('users',usersSchema);

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
    .use(express.json())

app.post('/upload',formidable(),function(req,res,next){
    // console.log(req.files)
    const image = req.files.file;
    const readStream = fs.createReadStream(image.path);
    const writeStream = fs.createWriteStream('./public/'+image.name);
    readStream.pipe(writeStream);
    res.end("/"+image.name)
})

app.post('/register',async function(req,res){
    //1.收集前端传递的数据
    const {username,password,avatarImg} = req.body;
    //2.后端表单验证
    //3.查询该用户名是否存在
    let findResult = await usersModel.find({username});
    if(findResult.length){
        res.send("该用户名已存在,请重新输入")
    }else{
        await usersModel.create({username,password,avatarImg});
        res.send("恭喜你,注册成功")
    }
})



//2.将服务器应用实例挂载到某个端口上,并监听
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器成功启动于:http://localhost:3000')
    }
})