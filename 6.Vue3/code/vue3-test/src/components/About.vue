<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h2>{{ double }}</h2>
    <h2>{{ three }}</h2>
    <button @click="changeCount">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref , computed  } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const count = ref(0);

    const double = computed(()=>{
      return count.value * 2
    })

    const three = computed({
      get(){
        return count.value * 3;
      },
      set(newValue: number){
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
