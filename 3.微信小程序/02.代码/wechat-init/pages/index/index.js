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
     */
    // console.log('msg', this.msg)
    // console.log('this', this)
    // console.log('msg', this.data.msg)
    this.setData({
      msg: "我是修改之后的数据"
    })
  }
})