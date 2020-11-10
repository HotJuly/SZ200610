// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    moveTransition:"",
    userInfo:{}
  },
  handleTouchStart(event){
    /*
      事件对象中记录手指位置的有两个属性
      event.touches         ->  记录的是屏幕上所有的手指
      event.changedTouches  ->  记录的是当前屏幕上正在发生变化的手指
     */
    // console.log('start',event.touches[0].clientY)
    this.startY = event.touches[0].clientY

    //手指按下时候,清空过渡效果
    this.setData({
      moveTransition:""
    })
  },

  handleTouchMove(event) {
    // console.log('move', event.touches[0].clientY)
    let moveY = event.touches[0].clientY;
    let moveDistance = moveY - this.startY;
    // console.log(moveDistance)

    //禁止元素往上移动
    if (moveDistance<=0)return;

    //元素超过80rpx,就禁止移动
    if (moveDistance > 80) return;

    this.setData({
      moveDistance
    })
  },

  handleTouchEnd(){
    // console.log('handleTouchEnd')
    this.setData({
      moveDistance:0,
      moveTransition:"transform 1s"
    })
  },

  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
    // wx.redirectTo({
    //   url: '/pages/login/login',
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //同步读取Storage中的用户信息userInfo
    // let userInfo = JSON.parse(wx.getStorageSync("userInfo")||"{}");
    // console.log('userInfo',userInfo)
    // this.setData({
    //   userInfo
    // })
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
    let userInfo = JSON.parse(wx.getStorageSync("userInfo") || "{}");
    console.log('userInfo', userInfo)
    this.setData({
      userInfo
    })
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