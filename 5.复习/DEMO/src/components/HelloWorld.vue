<template>
  <div class="hello">
    <h1 @click="changeMsg">{{ msg }}</h1>
    <h2>{{state.count}}</h2>
    <!-- <A {...$attrs}/> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value:String,
    name:String
  },
  model:{
    prop:"msg",
    event:"inputhaha"
  },
  inject:["str"],
  _my_option:2,
  methods:{
    changeMsg(){
      // let value = this.msg + "1";
      // this.$emit('inputhaha',value)
      // console.log(this.$parent)
      // this.$parent.msg="hello111111"
      this.$root.msg="hello222"
      console.log(this.$attrs)
      console.log(this.$listeners)
    }
  },
  mounted(){
    // console.log('HelloWorld',this.$options._my_option)
    console.log(this.str)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
