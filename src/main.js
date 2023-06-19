import "./assets/css/global.css"
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router  from './router/index'
import store from './store/index'
// 验证码
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(SlideVerify)
// 图片地址
// 所有Vue组件都可以使用，this.imgBaseUrl 都可以访问
// 一般不会在组件内部修改，即使是修改了，也不会影响其他组件内部的该属性
Vue.prototype.imgBaseUrl = "https://sc.wolfcode.cn"


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
