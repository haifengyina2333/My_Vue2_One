//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

import showLoginModal from './showLoginModal'
import isLoginedStatus from "./loginedStatus";
import isShowToast from "./showToast"
import UserInfo from './UserInfo';
//准备actions对象一响应组件中用户的动作
// const actions = { }
// //准备mutations对象一修改state中的数据
// const mutations = {}
// //准备state对象一保存具体的数据
// const state = {}
//创建并暴露store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    modules:{
        showLoginModal,isLoginedStatus,isShowToast,UserInfo
    }
})