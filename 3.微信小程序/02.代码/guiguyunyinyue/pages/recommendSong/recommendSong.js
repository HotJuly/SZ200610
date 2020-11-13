// pages/recommendSong/recommendSong.js
import PubSub from 'pubsub-js'
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    month:"",
    day:"",
    currentIndex:null,
    recommendList:[]
  },

  toSong(event){
    // 跳转到song页面
    /*
      1.通过自定义属性,向事件回调函数中传递歌曲id
      2.通过路径拼接,将歌曲id传给song页面
     */
    let {id , index} = event.currentTarget.dataset;
    this.setData({
      currentIndex: index
    })
    // console.log(event.currentTarget.dataset.id, event.target.dataset.id)
    wx.navigateTo({
      url: '/pages/song/song?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(new Date().getDate())
    // console.log(new Date().getMonth()+1)
    //获取当前最新时间,并更新到状态中
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    let result = await  ajax('/recommend/songs');
    // console.log(result)
    this.setData({
      recommendList: result.recommend
    })

    PubSub.subscribe('switchType',(msg,data)=>{
      // console.log(msg, data)
      /*
        1.找到对应的歌曲id
          1)要先知道现在在播放的是哪首歌
            在跳转到song页面之前,现将点击的歌曲下标记录即可
          2)根据data找到对应的歌曲
        2.交给song页面
      */
      let currentIndex;
      if(data==="pre"){
        currentIndex = this.data.currentIndex - 1;
      } else {
        currentIndex = this.data.currentIndex + 1;
      }

      if (currentIndex<0){
        currentIndex = this.data.recommendList.length-1;
      }
      if (currentIndex >= this.data.recommendList.length){
        currentIndex = 0;
      }
      this.setData({
        currentIndex
      })

      //将数据交付给song页面
      PubSub.publish('sendSongId',this.data.recommendList[currentIndex].id);
      // console.log(this.data.currentIndex)
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