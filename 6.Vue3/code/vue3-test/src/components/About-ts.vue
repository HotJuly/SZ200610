<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h2>{{ double }}</h2>
    <h2>{{ three }}</h2>
    <button @click="changeCount">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref , computed, reactive  } from 'vue';

//接口  ->  名称:P  ->  看做是约束对象
interface P{
  name: string;
  age: number;
  like: any[];
  sex?: string;
}

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const count = ref(0);
    //  变量: 数据类型  ->  声明当前变量能够存放的数据类型,后期如果不符合会报错
    // let a: any=1;
    // a="str";

    const double = computed(()=>{
      return count.value * 2
    })

    const three = computed({
      get(){
        return count.value * 3;
      },
      set(newValue: number){
    //  形参: 数据类型  ->  声明当前形参能够接收的数据类型,后期如果不符合会报错
        console.log(newValue);
        count.value = newValue;
      }
    })
    // three=3;
    // count=3;

  
    const changeCount = () => {
      count.value++;
      setTimeout(()=>{
        three.value +=2;
      },2000)
    }

    const person: P ={
      name:"xiaoming",
      age:18,
      like:["打篮球","打游戏","打豆豆",18]
    }

    const person2:  P={
      name:"xiaoming",
      age:18,
      like:["打篮球","打游戏","打豆豆",18],
      sex:"男"
    }

    return {
      changeCount,
      count,
      double,
      three
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
