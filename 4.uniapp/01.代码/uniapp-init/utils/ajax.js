import config from './config.js';
let baseURL;
// console.log(uni.getSystemInfoSync())

//获取当前运行环境信息
let systemInfo= uni.getSystemInfoSync().platform;

if(systemInfo==="devtools"){
	//systemInfo值为devtools,说明当前运行环境是小程序
	baseURL=config.mpHost
}else if((systemInfo==="ios"||systemInfo==="android")&&process.env.NODE_ENV==="development"){
	//systemInfo值为ios或者android,说明当前运行环境是h5
	baseURL=config.h5Host;
}

export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL + url,
			data,
			method,
			header:{
				token:uni.getStorageSync('token')
			},
			success(res){
				// console.log(res.data)
				resolve(res.data)
			},
			fail(){
				
			}
		})
	})
}