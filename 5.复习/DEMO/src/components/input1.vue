<template>
    <ul class="inputConatiner">
        <li v-for="(item,index) in arr" :key="index">
            <span>{{item}}</span>
            <input type="text">
        </li>
        <li @click="arr.splice(1,0,4)">点击添加</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            arr:[1,2,3]
        };
    }
}
</script>

<style lang="stylus">

</style>