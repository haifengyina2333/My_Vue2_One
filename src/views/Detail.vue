<template>
  <div>
    详情页
  </div>
</template>

<script>
import {GoodsDetailsAPI} from "@/request/api"
export default {
    async created(){
        let id = this.$route.query.id;
        let res = await GoodsDetailsAPI(id);
        console.log("商品详细页面","id="+ id,res);
    }
}
</script>

<style>

</style>