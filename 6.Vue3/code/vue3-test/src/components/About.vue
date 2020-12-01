<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>clientX:{{x}}</span>
    <span>clientY:{{y}}</span>
    <button @click="changeMsg">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import useMousePosition from '../hooks/useMousePosition';

export default defineComponent({
  name: 'HelloWorld',
  setup(){

    const {x,y} =useMousePosition()

    const msg = ref(0);

    const changeMsg = () => {
      msg.value++;
    };


    onBeforeMount(()=>{
      console.log('onBeforeMount')
    });

    onMounted(()=>{
      console.log('onMounted')
    });

    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    });

    onUpdated(()=>{
      console.log('onUpdated')
    })


    return {
      changeMsg,
      msg,
      x,
      y
    }
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
   
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeUnmount(){
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
