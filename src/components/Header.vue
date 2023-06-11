<template>
  <div class="header wrap">
    
      <img height="118px" src="../assets/img/logo.jpg" alt="">
    
    <div class="nav">
      <ul>
        <li>首页</li>
        <li>全部商品</li>
        <li>个人中心</li>
        <li>我的订单</li>
        <li>专属福利</li>
      </ul>
    </div>
    <div class="search">
      <input type="text">
      <span><img width="28px" src="../assets/img/serch.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {

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