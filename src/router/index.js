import store from "@/store";
import VueRouter from "vue-router"
import Home from "../views/Home"
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/goods',
        component: () => import('../views/Goods.vue')
    },
    {
        path: '/order',
        component: () => import('../views/Order.vue')
    },
    {
        path: '/user',
        redirect: "/user/cart",
        component: () => import('../views/User.vue'),
        children: [
            {
                // path:'/user/cart'
                path: 'cart',
                name:"cart",
                component: () => import("../components/user/Cart.vue")
            },
        ]

    },
    {
        path: '/free',
        component: () => import('../views/Free.vue')
    }, {
        path: '/detalis',
        component: () => import("../views/Details.vue")
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

// ⽅案1、vue-router降级处理(但不推荐)
// npm i vue-router@3.0.7

// ⽅案2、直接在push⽅法最后添加异常捕获，例如：
{/* <van-search v-model="SearchVal" shape="round" placeholder="请输⼊搜索关键词"
disabled @click="$router.push('/home/searchPopup').catch(err=>{})"/> */}


// 把这段代码直接粘贴到router/index.js中的Vue.use(VueRouter)之前
// ⽅案3：重复点击路由的报错解决方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => { })
};


// 全局路由守护--前置 进入之前
// router.beforeEach((to,from,next)=>{
//     if(to.path == "/user"){
//         let token = localStorage.getItem("x-auth-token");
//         if(token){
//             next();
//         }else{
//             store.dispatch("isShowToast/asynnChanIsShowToast",{
//                 msg:"请先登录",
//                 type:"danger"
//             })
//             return 
//         }
//        return //写上,防止执行后面的代码出现问题
//     }
//     next();

// })
// 全局路由守护--后置 离开之后
router.afterEach((to, from) => {
    document.title = "一眼丁真";
})

router.beforeEach((to, from,next) => {
    if (to.path == "/free" || to.path == "/order") {
        store.dispatch("isShowToast/asynnChanIsShowToast", {
            msg: "没有该功能",
            type: "danger"
        })
        router.push(from.path) ;
        return
    }
    next()
    
})
export default router