const Koa = require('koa');
const KoaRouter = require('koa-router');

/*
    1.创建服务器应用实例
        express()
*/

const app = new Koa();

/*
    3.注册路由
        app.get(url,callback)
        3.1 创建路由器实例,并使用中间件
            1)第一个中间件 -> router.routes()   -> 注册使用所有的路由
            2)第二个中间件 -> router.allowedMethods() -> 允许使用koarouter的方法,并修改报错码
        3.2 注册路由
            express 
                req ->  请求报文对象
                res ->  响应报文对象    ->res.send(数据)
                next->  执行下一个中间件
            koa
                ctx ->  req+res ->  ctx.body=需要返回的数据
                next
*/

const router = new KoaRouter();

app.use(router.routes())
    .use(router.allowedMethods());

router.get('/test',function(){
    console.log('/test get success')
})

//用于返回首页数据
const indexDatas = require('./datas/index.json');
router.get('/getIndexDatas',function(ctx,next){
    console.log('/test get success')
    ctx.body=indexDatas
})


/*
    2.运行服务器实例,并监听端口
*/
app.listen('3000',function(error,msg){
    if(error)return ;
    console.log('服务器启动成功,启动于http://localhost:3000')
})