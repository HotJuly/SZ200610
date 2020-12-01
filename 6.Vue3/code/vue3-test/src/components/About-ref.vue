<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const msg = ref(0);

    const changeMsg = () => {
      msg.value++;
    }

    return {
      changeMsg,
      msg
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
