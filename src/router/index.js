import VueRouter from "vue-router"
import Home from "../views/Home"
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'Home',
        component: Home
    },
    {
        path:'/goods',
        component:()=>import('../views/Goods.vue')
    },
    {
        path:'/order',
        component:()=>import('../views/Order.vue')
    },
    {
        path:'/user',
        component:()=>import('../views/User.vue')
    },
    {
        path:'/free',
        component:()=>import('../views/Free.vue')
    },{
        path:'/detalis',
        component:()=>import("../views/Detail.vue")
    }
 
]

const router = new VueRouter({
    mode:'history',
    routes
})

// ⽅案1、vue-router降级处理(但不推荐)
// npm i vue-router@3.0.7

// ⽅案2、直接在push⽅法最后添加异常捕获，例如：
{/* <van-search v-model="SearchVal" shape="round" placeholder="请输⼊搜索关键词"
disabled @click="$router.push('/home/searchPopup').catch(err=>{})"/> */}


// 把这段代码直接粘贴到router/index.js中的Vue.use(VueRouter)之前
// 三：重复点击路由的报错解决方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
 return originalPush.call(this, location).catch(err => {})
};

export default router