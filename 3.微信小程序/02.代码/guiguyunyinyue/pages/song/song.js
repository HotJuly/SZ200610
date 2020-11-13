// pages/song/song.js
import ajax from '../../utils/ajax.js'
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
    /* 
      1.需要请求歌曲的详细信息
        1)发送请求
          缺少歌曲id
        2)获取歌曲id
          通过路由query传参,传递给onLoad的形参options
     */
    console.log('options',options)
    let {id} = options;
    let songDetailInfo = await ajax('/song/detail',{
      ids:id
    });
    this.setData({
      songObj: songDetailInfo.songs[0],
      songId:id
    });

    // 通过js代码设置当前页面导航栏标题
    wx.setNavigationBarTitle({
      title: this.data.songObj.name
    })
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