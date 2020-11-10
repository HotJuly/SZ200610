// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"123",
    password:""
  },

  handlePhone(event){
    //获取用户输入内容 event.detail.value
    // console.log(event.detail.value)
    this.setData({
      phone: event.detail.value
    })
  },

  handlePassWord(event) {
    // console.log(event.detail.value)
    this.setData({
      password: event.detail.value
    })
  },

  handleChange(event) {
    //函数柯里化，但是小程序中无效
    // return function(event){
    //   console.log(type)
    // }

    //往事件回调函数内部传参的方式:通过自定义属性
    // console.log(event.target.dataset.type)
    let type = event.target.dataset.type;

    // {
    //   "type":"123"
    // }

    this.setData({
      [type]: event.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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