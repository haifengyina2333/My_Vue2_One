<template>
  <div id="app">
    <!-- 顶部直通车 -->
    <!-- 重载 -->
    <TopBat :key="topBatkeyValue"></TopBat>
    <Header></Header>
    <router-view :fn="addtopBatkeyValue"></router-view>
    <Footer></Footer>

    <!-- 登录窗口 -->
    <Login v-show="isShowLoginModal"></Login>

    <transition name="fade">
      <Toast v-show="isShowToast"> </Toast>
    </transition>
  </div>
</template>

<script>
import TopBat from "./components/TopBat"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Toast from "./components/Toast"
import {mapState} from "vuex"


export default {
  name: 'App',
  components: {
    TopBat,Header,Footer,Login,Toast
  },
  data(){
    return{
      topBatkeyValue:1
    }
  },
  // 组件重载
  watch:{
    "$route.path":{
      handler(newVal,oldVal){
        if(newVal != oldVal){
          this.topBatkeyValue++;
        }
      }
    }
  },
  methods:{
    addtopBatkeyValue(){
      this.topBatkeyValue++
    }
    
  },
  computed:{
    ...mapState({
      isShowLoginModal:state => state.showLoginModal.isShowLoginModal,
      isShowToast:state=>state.isShowToast.isShowToast
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
/* 进场初始状态 */
.fade-enter,.fade-leave-to{
  opacity: 0;
}
/* 过渡属性 */
.fade-enter-active,.fade-leave-active{
  transition: all .4s linear;
}

/* 结束 */
.fade-enter-to,.fade-leave{
  opacity: 1;
}
</style>
