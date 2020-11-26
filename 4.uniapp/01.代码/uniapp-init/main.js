import Vue from 'vue'
import App from './App'

import store from './store/index.js';

//关闭Vue控制台警告
Vue.config.productionTip = false

//mpType	->	mp+Type	->mp mini program	Type声明类型	->声明App组件代表整个小程序
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
