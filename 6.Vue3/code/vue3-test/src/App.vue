<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <About/>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref , reactive } from 'vue';
import About from './components/About.vue';


export default defineComponent({
  name: 'App',
  components: {
    About
  },
  // data(){},
  // created(){
  //   console.log(this)
  //   console.log('--------- created ---------')
  // },
  // beforeCreate(){
  //   console.log(this)
  //   console.log('--------- beforeCreate ---------')
  // },
  setup(){
    // console.log(this)
    // console.log('--------- setup ---------')
    //ref创建响应式数据,需要return出去,template中才能使用
    //template如果使用到响应式数据,会自动读取他的value值
    const msg = ref(0);

    const setMsg = ()=>{
      // console.log(msg)
      msg.value+=1;
    }

    const arr = reactive([
      "xixi",
      "haha"
    ]);

    const pushStr = ()=>{
      arr[2]="666"
    }

    // const person: Person  = reactive({
    //   name:'xiaoming'
    // })

    // const addAge = () => {
    //   if(person.age){
    //     person.age++;
    //   }else{
    //     //如果是Vue2.0,后期想要新增响应式属性,必须使用Vue.set,但是Vue3.0中自动监视后续新增属性
    //     person.age = 18;
    //   }
    // }


    return {
      msg,
      setMsg,
      arr,
      pushStr,
      // ...person,
      // addAge
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
