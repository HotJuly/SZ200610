<template>
  <div class="hello">
    <h1 @click="changeMsg" v-once>{{ msg }}</h1>
    <h2>{{state.count}}</h2>
    <h3 @click="$emit('update:name','xixixix')">{{name}}</h3>
    <!-- <keep-alive exclude="B">
      <component  v-if="currentComponent==='A'" :is="currentComponent" />
    </keep-alive> -->
    <!-- <A {...$attrs}/> -->
    <slot name="header" :a="a" :c="c"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script>
import A from './A.vue'
export default {
  name: 'HelloWorld',
  data(){
    return {
      a:"ms",
      c:"g"
    }
  },
  props: {
    msg: String,
    value:String,
    name:String,
    currentComponent:String
  },
  model:{
    prop:"msg",
    event:"inputhaha"
  },
  inject:["str"],
  _my_option:2,
  methods:{
    changeMsg(){
      let value = this.msg + "1";
      this.$emit('inputhaha',value)
      // console.log(this.$parent)
      // this.$parent.msg="hello111111"
      // this.$root.msg="hello222"
      // console.log(this.$attrs)
      // console.log(this.$listeners);
      // this.$destroy();
      // console.log("destroy")
    }
  },
  mounted(){
    // console.log('HelloWorld',this.$options._my_option)
    console.log(this.str)
    /*
    vm.$watch(
      function(){
        return this.a + this.c  =>  msg
      },
      function(){
        watch的回调函数->数据发生变化会执行的回调函数
      }
    )
    */
  },
  components:{
    A
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
