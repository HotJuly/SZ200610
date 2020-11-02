const mongoose = require('mongoose');

/*
    第一步:连接数据库
    第一个参数->mongodb数据库的地址
    第二个参数->配置对象
        useNewUrlParser->由于当前的url字符串解析器在未来版本即将被废除,所以需要使用新的解析器
        useUnifiedTopology->由于当前的监听器在未来版本即将被废除,所以需要使用新的监听器
*/
mongoose.connect("mongodb://localhost:27017/stars",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("数据库连接成功");
    }
});

// 监听数据库连接情况
// mongoose.connection.on("open",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("数据库连接成功");
//     }
// })

/*
    第二步:创建约束对象(对当前集合的字段进行约束)
*/
const starsSchema = new mongoose.Schema({
    name:{
        type:String,    //数据类型必须是字符串
        required:true,  //当前数据必传
        unique:true,    //当前数据必须是唯一的,不可重复
    },
    age:Number,
    sex:{
        type:String,
        default:"未知"  //当前字段如果不传数据,默认值为未知
    },
    roles:[String],      //当前字段数据类型必须是数组,内部数据类型必须是字符串,
    info:mongoose.Schema.Types.Mixed    //当前字段的属性值可以为任意值
})

/*
    第三步:创建模型对象(集合实例对象)
    const starsModel = mongoose.model(集合名称,约束对象)
    官方声明集合名称可以是单数也可以是复数,但是->经过实测写单数会出问题,会自动添加s
*/
const starsModel = mongoose.model('stars',starsSchema);

/*
    第四步:通过模型对象进行CRUD
*/

starsModel.update({name:"彭于晏"},{
    name:"彭于晏",
    age:27.99,
    sex:"猛男",
    roles:["唐钰小宝"],
    info:"舔狗不得好死"
},{upsert:true})
.then((msg)=>{
    console.log(msg)
})

