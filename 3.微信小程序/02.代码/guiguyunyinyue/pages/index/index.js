// pages/index/index.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // debugger
    /*
      1.在哪发送ajax
        onLoad
      2.怎么发送ajax
        wx.request
      3.往哪发送ajax
        看接口文档,并测试
     */
    // wx.request({
    //   url:"http://localhost:3000/banner",
    //   data:{
    //     type:2
    //   },
    //   success:(res)=>{
    //     console.log('res',res.data.banners)
    //     this.setData({
    //       banners: res.data.banners
    //     })
    //   }
    // })
    //请求banner轮播图数据
    ajax('/banner', {type:2})
      .then((result) => {
        this.setData({
          banners: result.banners
        })
    })

    //请求推荐歌单数据
    ajax('/personalized', { limit: 10 })
      .then((recommendData) => {
        this.setData({
          recommendList: recommendData.result
        })
    })

    let arr = [1,5,6,10,20,22,23,25,28,30];
    let index=0;
    let topList = [];
    while (index < arr.length) {
      let res = await ajax('/top/list', { idx: arr[index++] })
      // .then((res)=>{
        //从请求会来的数据中解构出有用的数据
        const { name,tracks } = res.playlist;
        topList.push({
          name,
          tracks
        })

        //每次获取到新数据,就会更新到页面上
        this.setData({
          topList
        })
      // })
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})