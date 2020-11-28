<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <!-- "<div id='app'>......</div>" -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  _my_option:3,
  mounted(){
    // console.log('App',this.$options._my_option)
    console.log(c)
  }
}
</script>

<style>
</style>
