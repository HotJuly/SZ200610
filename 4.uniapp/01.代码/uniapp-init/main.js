import Vue from 'vue'
import App from './App'

//关闭Vue控制台警告
Vue.config.productionTip = false

//mpType	->	mp+Type	->mp mini program	Type声明类型	->声明App组件代表整个小程序
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
