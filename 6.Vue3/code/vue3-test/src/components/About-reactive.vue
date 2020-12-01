<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const person = reactive({
      name:"xiaoming",
      like:[""]
    });

    // const changeMsg = () => {
    //   msg.value++;
    // }

    return {
      // changeMsg,
      person
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
