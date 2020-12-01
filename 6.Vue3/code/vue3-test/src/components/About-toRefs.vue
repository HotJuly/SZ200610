<template>
  <div class="hello">
    <!-- <h1>{{ person.name }}</h1>
    <p v-for="item in person.like" :key="item">{{ item }}</p> -->

    <h1>{{ name }}</h1>
    <p v-for="item in like" :key="item">{{ item }}</p>

    <button @click="addLike">+1</button>
    <button @click="changeName">改名了</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , toRefs } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const person = reactive({
      name:"xiaoming",
      like:["打篮球","打羽毛球"]
    });
    console.log(person,person.like)

    /* 
    let data={
       name:"xiaoming",
       like:["打篮球","打羽毛球"]
     };
    
    new Proxy(data,{
      get(target,prop){
        return target[prop]
    	  return Reflect.get(target, prop)
      },
      set(target,prop,value){
        target[prop]=value
      }
     })
     */

    const addLike = () => {
      person.like.push('打豆豆');
    }
    
    const changeName = () => {
      person.name="xiaohong"
    }

    const personState = toRefs(person);

    return {
      // changeMsg,
      // ...person,
      ...personState,
      addLike,
      changeName
    }
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
