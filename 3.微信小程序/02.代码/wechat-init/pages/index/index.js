Page({
  data:{
    /*
      数据流
      Vue ->单向  ->双向数据绑定v-model
        <input v-model="msg">
        两个过程:
          :value="msg"
          当input内容发生变化的时候,修改msg
            input||change
            onchange="event=>this.msg=event.target.value"
      React ->单向
      小程序  单向数据流
    
    
     */
    msg:"我是初始数据"
  },
  onLoad(){
    debugger
    /*
      读取和修改data数据
        Vue ->  this.msg  ->  数据代理
        React ->  this.state.msg
        小程序  ->  this.data.msg

      修改
        Vue ->  this.msg=msg  ->  数据劫持  ->dep.notify()通知视图更新
        React ->  this.setState({msg:msg})  ->  数据持久化
        面试题:
          setState执行是同步还是异步?
          解:setState执行是同步执行

          更新效果是同步还是异步?
          都有
          在生命周期,合成事件中,异步更新
            绑定事件时候,用的是驼峰命名法的就是合成事件
              ->合成事件是绑定在body身上,使用的是事件委托
            React自己创建了一个异步队列

          在定时器,原生事件中,同步更新
            绑定事件时候,用的是全小写的就是原生事件


        小程序  ->  this.setData({msg:msg})
          setData更新data的效果,是同步还是异步?
          同步修改内存中的data数据,但是会异步更新视图层(隔一段时间发一次)
     */
    // console.log('msg', this.msg)
    // console.log('this', this)
    // console.log('msg', this.data.msg)
    // console.log('msg1', this.data.msg)
    // this.setData({
    //   msg: "我是修改之后的数据1"
    // })
    // console.log('msg2', this.data.msg)

    console.log('-----------------onLoad--------------')

    // console.log('msg3', this.data.msg)
    //小程序中,全局对象不是window,是wx
    // console.log('window',window)
    // console.log('wx',wx)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('-----------------onReady--------------')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('-----------------onShow--------------')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('-----------------onHide--------------')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('-----------------onUnload--------------')
  },
  handleParent() {
    // console.log('handleParent')
  },
  handleChild() {
    // console.log('handleChild')
    /*
      wx.navigateTo(与push方法相似)
        注意:
          1.url写相对路径也可以使用,最好写绝对路径
          2.该API会保留当前页面,保留页面的实例对象,页面会隐藏(keep-alive)
          3.小程序页面栈最多保留十层(早期页面栈最多五层)
          4.会触发当前页面的onHide生命周期

      wx.redirectTo(与replace相似)
        注意:
          1.该API会关闭当前页面,当前页面会被卸载
          2.会触发当前页面的onUnload生命周期
     */


    this.setData({
      msg: "我是修改之后的数据2"
    })

    // wx.navigateTo({
    //   // url:"../log/log"
    //   url:"/pages/log/log"
    // })
    wx.redirectTo({
      url: '/pages/log/log',
    })
  }
})