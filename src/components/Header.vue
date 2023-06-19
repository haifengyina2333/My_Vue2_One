<template>
  <div class="header wrap">
    
      <img height="118px" src="../assets/img/logo.jpg" alt="">
    
    <div class="nav">
      <ul>
        <!-- 编程路由导航 -->
        <li @click="$router.push('/home')" :class="$route.path ==='/home' ? 'active':''">首页</li>
        <li @click="$router.push('/goods')" :class="$route.path ==='/goods' ? 'active':''">全部商品</li>
        <li @click="$router.push('/user')" :class="$route.path ==='/user/cart' ? 'active':''">个人中心</li>
        <li @click="$router.push('/order')" :class="$route.path ==='/order' ? 'active':''">我的订单</li>
        <li @click="$router.push('/free')" :class="$route.path ==='/free' ? 'active':''">专属福利</li>
      </ul>
    </div>
    <div class="search">
      <input type="text" v-model="userInputSearch" @keyup.13="toSearch" placeholder="请输要搜索的商品"> 
      <span @click="toSearch"><img width="28px" src="../assets/img/serch.png" alt=""></span>
    </div>
  </div>
</template>

<script>


export default {
data(){
  return{
    userInputSearch:""
  }
},
methods:{
  toSearch(){
    this.$router.push(`/goods?keyword=${this.userInputSearch}`);
    this.userInputSearch="";
  }
}
}

</script>

<style scoped>
.header{
  height: 118px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav ul{
  display: flex;
  width: 500px;
  justify-content: space-between;

}
.nav ul .active{
  color: #4774dc;
}
.search{
  display: flex;
}
.search input{
    width: 214px;
    height: 40px;
    border:1px solid #dedede;
    border-radius:20px 0px 0px 20px;
    text-indent:12px;
}
.search span{
    width: 50px;
    height: 40px;
    background-color:  #4774dc;
    border-radius:0px 20px 20px 0px;
    display: flex;
    align-items: center;  
    justify-content:center;
}
</style>