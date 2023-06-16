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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
