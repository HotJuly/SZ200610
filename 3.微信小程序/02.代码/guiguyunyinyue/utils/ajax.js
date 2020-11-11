import config from './config.js';
/*
  封装代码
  保留公共部分,提取动态传入部分
  封装函数
    1.保留的公共部分:重复出现的js代码
    2.提取动态传入部分:某些关键数据,通过形参传入
    3.谁调用谁传入
  封装组件
    1.保留的公共部分:组件的template和style,以及大部分的script
    2.提取动态传入部分:某些关键数据,通过标签属性传递给props
    3.谁调用谁传入
 */ 
export default function (url, data={}, method = "GET") {
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        cookie: JSON.parse(wx.getStorageSync('cookie')||"[]").toString()
      },
      success: (res) => {

        //需要去判断哪个cookie需要缓存
        //1.length
        //2.url
        //3.data
        if (data.isLogin) {
          let cookies = res.cookies;
          // cookies.splice(0,1);
          //将cookies存储到Storage中
          wx.setStorage({
            key: "cookie",
            data: JSON.stringify(cookies)
          });
        }

        resolve(res.data);
        // this.setData({
        //   banners: res.data.banners
        // })
      }
    })
  })
}