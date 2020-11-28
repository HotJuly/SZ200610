import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//使用频率相对较少,主要作用:修改组件配置
// Vue.config.optionMergeStrategies._my_option=function(parent,child,vm){
//   // console.log(parent,child,vm)
//   return child + 5;
// }



//window.onerror 没使用框架之前的项目,配合ajax收集用户错误
//errorHandler使用频率极高,主要作用:收集错误
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log(err,vm,info)
//   //将错误信息发送给服务器端,服务器端收集错误之后,交给前端解决
// }

/*
 let Profile = Vue.extend({
   template:"<div>{{msg}}</div>",
   // render:(createElement)=>{
   //   let div = createElement('div',data.msg)
   //   return div;
   // },
   data(){
     return {msg:123}
   }
 })

 let profileVM = new Profile();

 profileVM.$mount('#app');
 */

// let res = Vue.compile('<div><span>{{ msg }}</span></div>');
// console.log(res.render)

 /*当每个组件created的时候.打印当前实例对象this 
  Vue.mixin({
    created(){
      console.log('created',this)
    },
    mounted(){
      console.log('mounted',this.$data)
    }
  })
 
 */

Vue.prototype.state=Vue.observable( {
  count:0
} )

new Vue({
  // el:"#app"
  render: h => h(App),
}).$mount('#app')
