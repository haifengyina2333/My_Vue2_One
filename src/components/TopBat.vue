<template>
  
  <div class="top-bar">
    <div class="wrap top-bar-wrap">
      <div class="l">
        欢迎来到CC积分商城
      </div>
      <div class="r">
        <ul>
          <li>
            <img width="26px" src="../assets/img/logo.jpg" alt="">
          </li>
          <li>我的鸡腿:--</li>
          <li>获取积分</li>
          <li>个人主页</li>
          <li class="login-btn">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-bar{
  height: 40px;
  color: #fffefe;
  background-color: #242b39;
  line-height: 40px;
}


.top-bar .top-bar-wrap{
  display: flex;
  /* background-color: pink; */
  height: 40px;
  justify-content: space-between;
  font-family:300;
  font-size: 14px;

}
.r ul{
  display: flex;
}
.r ul li{
  cursor: pointer;
  /* 小手 */
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.r ul li img{
  border-radius: 50%;
  margin-right: 6px;
}
.r ul .login-btn{
  width: 128px;
  background-color: #4774dc;
  justify-content: center;
}
</style>