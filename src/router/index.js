import VueRouter from "vue-router"
import Home from "../views/Home"
const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
 
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router