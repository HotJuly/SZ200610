<template>
  <div id="app">
    <img ref="img" @click="state.count+=1;" alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld  :value="msg" @input="(value)=>{msg=value}" /> -->
    <!-- <HelloWorld  :name="msg" @update:name="(value)=>{msg=value}" /> -->
    <HelloWorld 
    :currentComponent="currentComponent" 
    :name.sync="msg" 
    val="3334" 
    ref="HelloWorld" 
    class="active" 
    v-model="msg" 
    @input="handleInput"
    >
      <template v-slot:default>
        <div>我是default</div>
      </template>

      <template v-slot:header="{a,c}">
        <div>我是header</div>
        <div>{{a}}</div>
        <div>{{c}}</div>
      </template>
    </HelloWorld>
  </div>
  <!-- "<div id='app'>......</div>" -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import A from './components/A.vue';

export default {
  name: 'App',
  data(){
    return {
      msg:"hello",
      currentComponent:"A"
    }
  },
  components: {
    HelloWorld,
    // A
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
    setTimeout(()=>{
      this.currentComponent="B"
    },3000)
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
