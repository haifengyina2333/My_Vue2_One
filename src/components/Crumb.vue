<template>
  <div class="crumb">
    <span v-for="item,index in nav" :key="index">
        <span :style="{color:index == nav.length-1?'#333':'#999'}">{{ item.name }}</span>
        <i v-show="index!=nav.length-1">/</i>
    </span>
  </div>
</template>

<script>
export default {
    props:['nav'],
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
.crumb{
    // width: 400px;
    position: relative;
    right: 520px;
    margin-top: 10px;
    margin-bottom:15px;
    i{
        margin: 0 10px;
    }
}
</style>