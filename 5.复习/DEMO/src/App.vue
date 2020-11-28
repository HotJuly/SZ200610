<template>
  <div id="app">
    <img ref="img" @click="state.count+=1;" alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld  :value="msg" @input="(value)=>{msg=value}" /> -->
    <HelloWorld name="2333" val="3334" ref="HelloWorld" class="active" v-model="msg" @input="handleInput" />
  </div>
  <!-- "<div id='app'>......</div>" -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {msg:"hello"}
  },
  components: {
    HelloWorld
  },
  comments:false,
  provide:{
    str:"123abc"
  },
  _my_option:3,
  mounted(){
    // console.log(this.msg)
    // console.log('App',this.$options._my_option)
    // console.log(c)
    // this.$children[0].value="helloworld111"
    console.log(this.$refs)
  },
  methods:{
    handleInput(){
      console.log('input success')
    }
  }
}
</script>

<style>
</style>
