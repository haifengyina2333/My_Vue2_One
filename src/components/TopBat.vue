<template>
  
  <div class="top-bar">
    <div class="wrap top-bar-wrap">
      <div class="l">
        欢迎来到世界最高塘 —— 理塘积分商城
      </div>
      <div class="r">
        <ul>
          <li>
            <img width="26px" src="../assets/img/logo.jpg" alt="" @click="asynnChanIsShowToast({
              msg:`test！`,
              type:`waring`
              // danger  waring success
            })">
          </li>
          <li >我的鸡腿:--</li>
          <li>获取积分</li>
          <li>个人主页</li>
          <li v-show="!isLogined" class="login-btn" @click="toLogin">登录</li>
          <li v-show="isLogined" class="gwc-btn">
            <img src="../assets/img/gwc.png" alt="">
            <span>购物车</span>
            <b>{{ sum }}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState,mapActions } from 'vuex';
export default {
  data(){
    return{
      sum:0
    }
  },
  computed:{
    ...mapState({
      isLogined:state=>state.isLoginedStatus.isLogined,
      isShowToast:state=>state.isShowToast.isShowToast
    })
  },
  methods:{
    ...mapMutations({
      // 显示登录窗口
      chanIsShowLoginModal:"showLoginModal/chanIsShowLoginModal"}),
      // 导入提示框
    ...mapActions({
      asynnChanIsShowToast:"isShowToast/asynnChanIsShowToast"
    }),
    toLogin(){
      this.chanIsShowLoginModal(true)// 修改Vuex的中的值
    }
  }
}
</script>

<style lang="less" scoped>
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
.gwc-btn{
  background-color: #4774dc;
  img{
    margin-left: 20px;
    height: 28px;
  }
  span{

  }
  b{
    margin-left: 4px;
    height: 20px;
    width: 20px;
    line-height: 20px;
    background-color: #f40;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>