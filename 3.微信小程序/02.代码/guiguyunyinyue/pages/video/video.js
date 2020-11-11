// pages/video/video.js
import ajax from '../../utils/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentId: null,
    videoList:[]
  },

  async changeId(event){
    // console.log(event.currentTarget)
    // id属性值数据类型是字符串,data-id属性值数据类型是原有类型
    let id = event.currentTarget.id;
    // console.log(id)
    this.setData({
      currentId:id*1
    })
    wx.showLoading({
      title: '加载中,请稍等...'
    })
    await this.getVideoList();
    console.log(2)
    wx.hideLoading();
  },

  async getVideoList(){
    //请求视频列表数据
    let videoListData = await ajax('/video/group', {
      id: this.data.currentId
    });

    console.log(1)

    let videoList = videoListData.datas.map((item) => {
      return item.data;
    });

    this.setData({
      videoList
    })
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