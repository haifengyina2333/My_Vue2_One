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
    }
 
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router