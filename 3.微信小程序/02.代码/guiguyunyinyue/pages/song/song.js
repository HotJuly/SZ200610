// pages/song/song.js
import ajax from '../../utils/ajax.js'
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songId:"",
    songObj:{},
    musicUrl:"",
    isplaying:false
  },

  //响应用户点击播放按钮的操作
  async handlePlay(){
    // console.log('handlePlay')
    /*
      1.请求音频地址
        this.getAudioUrl()
      2.播放音频
        wx.getBackgroundAudioManager()->得到BackgroundAudioManager(全局唯一的背景音频管理器实例) ->给实例对象添加src属性,就能自动播放音频
        注意:如果想要实现进入后台之后还能播放歌曲,需要在app.json中配置
      3.让页面进入播放状态

      出现问题:无法暂停音频
        如果当前页面正处于播放状态,再次点击播放按钮,应该暂停音频播放和页面动画
        如果当前页面正处于暂停状态,再次点击播放按钮,应该开始音频播放和页面动画
    */

    //  由于经常使用该实例,所以在onLoad的时候,直接获取该实例并保存在this身上
    // let backgroundAudioManager = wx.getBackgroundAudioManager();
    if (this.data.isplaying){
      //isplaying为true就代表页面处于播放
      this.backgroundAudioManager.pause();
      this.setData({
        isplaying: false
      })

      // appInstance.globalData.audioId = this.data.songId;
      appInstance.globalData.audioPlayState = false;
    } else {
      //isplaying为false就代表页面处于暂停

      // 1.请求音频地址
      await this.getAudioUrl();

      // 2.播放音频
      this.backgroundAudioManager.src = this.data.musicUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;

      //3.让页面进入播放状态->通过状态控制页面是否要增加isplaying类名,从而控制页面的动画
      this.setData({
        isplaying: true
      })

      appInstance.globalData.audioId = this.data.songId;
      appInstance.globalData.audioPlayState = true;
    }
    
  },

  //专门用于请求音频地址
  async getAudioUrl(){
    //发送请求,请求音频链接
    let audioDetailInfo = await ajax('/song/url', {
      id:this.data.songId
    });
    let { url } = audioDetailInfo.data[0];
    this.setData({
      musicUrl: url
    })
    // console.log('url', url)
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
    // console.log('options',options)
    let {id} = options;

    //请求歌曲详细信息(不包括音频链接)
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

    /*
      判断当前歌曲和上次正在播放的歌曲是否是同一首歌
     */
    let { audioId,audioPlayState } = appInstance.globalData;
    if (id === appInstance.globalData.audioId && audioPlayState){
      this.setData({
        isplaying:true
      })
    }

    /*
      监听背景音频的播放
        1.获取到背景音频管理器的实例
          通过wx.getBackgroundAudioManager()
        2.绑定Play事件
    */

    this.backgroundAudioManager = wx.getBackgroundAudioManager();

    //监听背景音频是否处于播放状态
    this.backgroundAudioManager.onPlay(() =>{
      // console.log('onPlay')
      this.setData({
        isplaying:true
      })

      appInstance.globalData.audioPlayState = true;
    })

    //监听背景音频是否处于暂停状态
    this.backgroundAudioManager.onPause(() =>{
      // console.log('onPause')
      this.setData({
        isplaying: false
      })

      appInstance.globalData.audioPlayState = false;
    })

    // console.log(appInstance)

    // 读取十分方便
    // console.log(appInstance)
     
    // console.log(appInstance.globalData.msg)

    // 修改也十分方便
    // appInstance.globalData.msg="我是修改之后的全局数据"

    // console.log(appInstance.globalData.msg)

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