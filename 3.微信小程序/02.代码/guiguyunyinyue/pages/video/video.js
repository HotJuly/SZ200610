// pages/video/video.js
import ajax from '../../utils/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentId: null,
    videoList:[],
    trigger:false,
    currentVideoId:null
  },

  //用于响应用户点击nav操作
  async changeId(event){
    // console.log(event.currentTarget)
    // id属性值数据类型是字符串,data-id属性值数据类型是原有类型
    // let id = event.currentTarget.id;
    let id = event.currentTarget.dataset.id;
    // console.log(id)
    this.setData({
      currentId:id*1,
      videoList:[]
    })
    wx.showLoading({
      title: '加载中,请稍等...'
    })
    await this.getVideoList();
    // console.log(2)
    wx.hideLoading();
  },

  //用于请求视频列表数据
  async getVideoList(){
    //请求视频列表数据
    let videoListData = await ajax('/video/group', {
      id: this.data.currentId
    });

    // console.log(1)

    let videoList = videoListData.datas.map((item) => {
      return item.data;
    });

    this.setData({
      videoList
    })
  },

  //用于下拉刷新videoList区域
  async handlePullDown(){
    // console.log('handlePullDown')
    wx.showLoading({
      title:"加载中,请稍等..."
    });
    await this.getVideoList();

    //更新trigger状态,隐藏下拉的C3动画
    this.setData({
      trigger:false
    })
    wx.hideLoading();
  },

  //用于上拉加载更多数据
  handleScrollToLower(){
    // console.log('handleScrollToLower')
    //发请求
    let data = this.data.videoList.slice(0,2);
    let {videoList} = this.data;
    videoList=videoList.concat(data);
    this.setData({
      videoList
    })
  },

  //监听视频播放状态
  handlePlay(event){
    // console.log('handlePlay');
    // console.log(this.oldVideoId);

    //获取当前正在播放视频的id
    let { id } = event.currentTarget;

    if (this.oldVideoId && this.oldVideoId !== id ) {
      //根据旧的视频id,创建上下文对象,停止旧的视频的播放
      let oldVideoContext = wx.createVideoContext(this.oldVideoId);

      oldVideoContext.pause();
    }

    //当前所有代码执行完毕之后,该视频就变成了下次的旧视频,所以需要记录他的id
    this.oldVideoId = id;
  },

  //专门用于测试video暂停功能
  testAPI(){
    let videoId = "A964ED1FEEEB9BDC38B855092AF76E9B";

    // wx.createVideoContext(video组件的id) 创建  视频上下文实例对象
    let videoContext = wx.createVideoContext(videoId);

    //暂停视频的API:videoContext.pause()
    videoContext.pause();
    console.log('视频暂停成功')
  },

  //监听用户点击图片,自动切换video组件进行播放
  switchVideo(event){
    // console.log('switchVideo')
    //当用户点击image组件的时候,将image组件的id设置为currentVideoId,从而控制视图更新
    // console.log(event.currentTarget.id)
    let currentVideoId = event.currentTarget.id;

    this.setData({
      currentVideoId
    })

    //获取到VideoContext实例对象
    let currentVideoContext = wx.createVideoContext(currentVideoId)

    //通过API让视频播放起来
    currentVideoContext.play();

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:async function () {
    let result = await ajax('/video/group/list');
    let navList = result.data.slice(0, 14);

    //设置默认值,让第一个标签高亮
    let currentId = navList[0].id;

    //slice(开始下标,结束下标)->  左闭右包(包括开始的下标元素,不包括结束的)  ->不会对旧数组产生影响,会产生新数组
    //splice(开始下标,切割数量,替换数据)  ->会对旧数组产生影响
    // console.log(navList.splice(0, 14,"123"), navList);

    this.setData({
      navList,
      currentId
    })

    this.getVideoList();
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
    /*
      下拉刷新
        需求:当用户下拉页面或者某块区域,刷新当前页面数据(重新请求)
        1.下拉页面进行刷新,触发onPullDownRefresh事件回调,发送请求获取最新数据
          1)开启下拉动作  ->  app.json->window->enablePullDownRefresh:true
          2)监听用户下拉操作  ->  触发onPullDownRefresh事件回调
          3)发送请求获取最新数据  ->  使用封装好的函数getVideoList

        2.下拉scroll-view组件进行刷新,触发bindrefresherrefresh事件回调,发送请求获取最新数据
          1)开启下拉动作  ->  refresher-enabled
          2)监听用户下拉操作  ->  触发bindrefresherrefresh事件回调
          3)发送请求获取最新数据  ->  使用封装好的函数getVideoList

          问题:数据已经回来,但是刷新的C3动画没有消失
          需求:当数据回来之后,隐藏C3动画
    */
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    /*
      上拉加载更多
      需求:当用户上拉触底之后,请求更多数据,并且保留旧数据
      拆解需求:
        1)当用户上拉触底之后
          页面触底  ->事件回调onReachBottom会被触发
          scroll-view触底 ->事件回调scrolltolower
        2)请求更多数据
          发请求  ->  目前没有接口  ->  模拟数据
        3)保留旧数据
          合并旧数据的数组和新数据的数组
     */
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})