// pages/login/login.js
import ajax from '../../utils/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
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
    //{}==={} ->  语法糖->new Object() === new Object()

    //前台表单验证
    if (event.detail.value.trim()) {
      this.setData({
        [type]: event.detail.value
      })
    }else{
      //通过showToast弹窗提示用户
      wx.showToast({
        title:"帐号或密码有误,请重新输入",
        icon:'none'
      })
    }
  },

  async handleTap(){
    console.log('handleTap')
    //1.收集数据
    const {phone,password} = this.data

    //2.发送请求
    let result = await ajax('/login/cellphone',{
      phone,
      password
    })
    // console.log(result.profile)
    if (result.code === 200) {
      //登陆成功
      wx.showToast({
        title: '登录成功,即将跳转',
        icon: "none"
      })

      //将用户信息存储到Storage中
      wx.setStorage({
        key:"userInfo",
        data: JSON.stringify(result.profile)
      })

      //跳转回到个人中心页面
      //wx.switchTab用于跳转tabBar页面,关闭所有非tabBar页面
      wx.switchTab({
        url: '/pages/personal/personal'
      })
    } else {
      //登录失败
      wx.showToast({
        title: '登录失败,请确认帐号密码',
        icon: "none"
      })
    }
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