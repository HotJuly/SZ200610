const Koa = require('koa');
const KoaRouter = require('koa-router');

const Fly = require('flyio/src/node/index.js');
const jwt = require('jsonwebtoken');

const fly = new Fly();

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


//用于返回首页分类数据
const indexCateListDatas = require('./datas/indexCateList.json');
router.get('/getindexCateList',async function(ctx,next){
    console.log('/getindexCateList get success')
	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(indexCateListDatas)
		},2000)
	})
	let result = await promise;
	ctx.body=result;
})


//用于返回商品详细信息
const goods = require('./datas/goods.json');
router.get('/getGoodDetail',function(ctx,next){
	console.log(ctx.query)
	let {goodId} = ctx.query;
	let good = goods.find((item)=>{
		return item.id===goodId*1
	})||[];
    console.log('/getGoodDetail get success')
    ctx.body=good
})


//用于返回用户自定义登录态TOKEN(由OpenId生成)
router.get('/getOpenId',async function(ctx,next){
	// console.log(ctx.query)
	//code是通过wx.login得到的用户临时凭证
	let {code} =ctx.query;
	
	let appid = 'wxe5931a68ea66cece';
	
	let appsecret = '50826ecfcb557365399d9671aba13abb';
	
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`;
	// console.log(code)
	
	let result = await fly.get(url);
	let {session_key,openid} = JSON.parse(result.data);
	// console.log(data)
	
	
	/*
		jwt->jsonwebtoken
		加密数据:sign函数返回值是token
			jwt.sign(需要加密的数据,盐,[options])->盐->提高强行破解的难度
			需要加密的数据->{data:数据}
			设置过期时长:
				options->expiresIn(单位:s)
		
		解密数据:verify函数返回值是加密前的数据
			jwt.verify(需要解密的token,盐)
			判断是否过期:
				
	*/
	let salt = 'atguigu';
	let token = jwt.sign({
		data:openid
	},salt,{
		expiresIn:5
	});
	// console.log(openid,token)
	jwt.verify(token,salt,function(err,data){
		console.log(err,data)
		console.log(new Date(data.iat*1000),new Date(data.exp*1000))
	});
	setTimeout(()=>{
		jwt.verify(token,salt,function(err,data){
			console.log(err.expiredAt,data)
			// console.log(new Date(data.iat*1000),new Date(data.exp*1000))
		});
	},6000);
	// console.log(openid,newOpenId)
    ctx.body=token
})

/*
    2.运行服务器实例,并监听端口
*/
app.listen('3000',function(error,msg){
    if(error)return ;
    console.log('服务器启动成功,启动于http://localhost:3000')
})