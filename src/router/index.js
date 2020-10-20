// 1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)//声明使用

// 引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'


const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 把VueRouter原型上的push方法先保存起来 后期要用的


VueRouter.prototype.push = function(location,onResolved,onRejected){
    // 把它原来的push重新指向
    if(onResolved === undefined && onRejected === undefined){
        // 代表没有传递处理的回调无论是成功还是失败
        return originPush.call(this,location).catch(()=>{})
        // this代表VueRouter的实例化对象 ---- 路由对象  
        // originPush不.call的话是window在调
    }else{
        return originPush.call(this,location,onResolved,onRejected)
    }
}


VueRouter.prototype.replace = function(location,onResolved,onRejected){
    // 把它原来的push重新指向
    if(onResolved === undefined && onRejected === undefined){
        // 代表没有传递处理的回调无论是成功还是失败
        return originReplace.call(this,location).catch(()=>{})
        // this代表VueRouter的实例化对象 ---- 路由对象  
        // originPush不.call的话是window在调
    }else{
        return originReplace.call(this,location,onResolved,onRejected)
    }
}






// 2.必须往外暴露一个路由器对象
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search',
            // props:true
            // props这个属性用来配置传递参数的简便方式
            // 1.布尔值  如果写为true 代表路由对象把接收的params参数作为属性映射到要显示的路由组件当中

            // 2.对象写法  如果写为对象,目的是额外的往要显示的路由组件当中传递一些静态数据用的
            // props:{name:'zhaoliying'}// ---一般情况下没有任何意义

            // 3.函数写法
            props(route){
                // route是接受完参数的路由对象
                return {
                    // 自己映射
                    // 把路由对象接收到的参数,无论什么参数,自己手动映射为路由组件的属性
                    keyword:route.params.keyword, 
                    keyword2:route.query.keyword2
                }
            }
           
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