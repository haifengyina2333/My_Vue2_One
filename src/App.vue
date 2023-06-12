<template>
  <div id="app">
    <!-- 顶部直通车 -->
    <TopBat></TopBat>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>

    <!-- 登录窗口 -->
    <Login v-show="isShowLoginModal"></Login>
  </div>
</template>

<script>
import TopBat from "./components/TopBat"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import {mapState} from "vuex"


export default {
  name: 'App',
  components: {
    TopBat,Header,Footer,Login
  },
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
      isShowLoginModal:state => state.showLoginModal.isShowLoginModal
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
</style>
