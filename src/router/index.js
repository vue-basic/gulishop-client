// 1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)//声明使用

// 引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

// 2.必须往外暴露一个路由器对象
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                //meta：元 元设置项  --- 基础的、细微的设置
                isHide:true
            }
        },
        // 重定向路由
        {
            path:'/', //当你访问/的时候,重定向跳转到home页
            redirect:'/home'
        }
    ]
})

// 3.必须在vue当中去注入(使用)路由器对象---在main.js当中去做