<template>
  <div class="home">
    首页
  </div>
</template>

<script>
//1.  import request from '../request/request'
import { JingpinAPI } from '../request/api'

export default {
  name: 'Home',
  components: {
  },

  //2.  created() {
  //   // 1.  request.get("/products/recommend").then(res=>{
  //   //   console.log(res);
  //   // })

  //   JingpinAPI().then(res => {
  //     console.log(res);
  //   }
  //   )

  async created() {
     // await 后一般放Promise对象,对象里面异步操作
    // let res = await JingpinAPI();
    // console.log(res);

  }

}
</script>


<style>
.home {
  height: 200px;
  background-color: #cfc;
}
</style>