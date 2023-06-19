<template>
  <div class="top-bar">
    <div class="wrap top-bar-wrap">
      <div class="l">
        欢迎来到世界最高塘 —— 理塘积分商城
      </div>
      <div class="r">
        <ul>
          <li>
            <img width="26px" :src="UserInfo.headImg" alt="" @click="asyncChanUserInfo()">
          </li>
          <li>我的鸡腿:{{ UserInfo.coin }}</li>
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
import { mapMutations, mapState, mapActions } from 'vuex';
import { wechanLoginAPI } from '@/request/api';
export default {
  data() {
    return {
      // sum: 0
    }
  },
  // 没有使用组件重载的代码
  // watch:{
  //   // 修复当token不存在时，路由切换时用户状态的变换
  //   "$route.path":{
  //     handler(newVal,oldVal){
  //       let token = localStorage.getItem("x-auth-token");
  //       // if(token){
  //       //   this.chanIsLogined(true);
  //       // }else{
  //       //   this.chanIsLogined(false);
  //       // }
  //       this.chanIsLogined(Boolean(token));
  //     }
  //   }
  // },


  // -------------------------------------
  // 组件重载.重载就可以引起created的执行 查看app.vue
  created() {
    this.$nextTick().then(async () => {
      let mycode = this.$route.query.code
      if (mycode) {
        let res = await wechanLoginAPI({ code: mycode });
        console.log("微信登录响应----",res);
        if (res.code == 0) {
          // 登陆成功
          this.asynnChanIsShowToast({
            msg: "登录成功！",
            type: "success"
          });
          // 3.保存token
          localStorage.setItem("x-auth-token", res["x-auth-token"])
          // 4.登录状态切换
          this.chanIsLogined(true);

          this.$router.push(this.$route.path)
          
          this.asyncChanUserInfo();

        } else if (res.code == 400) {

          this.asynnChanIsShowToast({
            type: "danger",
            msg: " 二维码已失效"
          });
          this.chanIsShowLoginModal(true);

        } else if (res.code == 407) {
          this.asynnChanIsShowToast({
            msg: "首次使用微信登录需用手机登录以获取手机号！",
            type: "warning"
          });
          // 临时保存uuid
          localStorage.setItem("uuid", res.uuid)
          this.chanIsShowLoginModal(true);
        }
      } else {
        // 组件重载: 用户没登录或者是已经登录的情况下
        let token = localStorage.getItem("x-auth-token");
        this.chanIsLogined(Boolean(token));
        if (token) {
          // 已经登录
          this.asyncChanUserInfo();
        } else {
          // 没有登录的情况下
          this.initUserInfo();
        }
      }
    }, 100)
  },
  computed: {
    ...mapState({
      isLogined: state => state.isLoginedStatus.isLogined,
      isShowToast: state => state.isShowToast.isShowToast,
      sum: state => state.UserInfo.cartTotal,
      UserInfo: state => state.UserInfo.userInfo
    })
  },
  methods: {
    ...mapMutations({
      // 显示登录窗口
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
      chanIsLogined: "isLoginedStatus/chanIsLogined",
      initUserInfo: "UserInfo/initUserInfo"
    }),
    // 导入提示框
    ...mapActions({
      asynnChanIsShowToast: "isShowToast/asynnChanIsShowToast",
      asyncChanUserInfo: "UserInfo/asyncChanUserInfo"
    }),
    toLogin() {
      this.chanIsShowLoginModal(true)// 修改Vuex的中的值
    }
  }
}
</script>

<style lang="less" scoped>
.top-bar {
  height: 40px;
  color: #fffefe;
  background-color: #242b39;
  line-height: 40px;
}


.top-bar .top-bar-wrap {
  display: flex;
  /* background-color: pink; */
  height: 40px;
  justify-content: space-between;
  font-family: 300;
  font-size: 14px;

}

.r ul {
  display: flex;
}

.r ul li {
  cursor: pointer;
  /* 小手 */
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.r ul li img {
  border-radius: 50%;
  margin-right: 6px;
}

.r ul .login-btn {
  width: 128px;
  background-color: #4774dc;
  justify-content: center;
}

.gwc-btn {
  background-color: #4774dc;

  img {
    margin-left: 20px;
    height: 28px;
  }

  span {}

  b {
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