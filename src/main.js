import App from '@/App'
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import router from '@/router'

// 加载api的inde.js 让其能够运行
// import '@/api'

/**
 * 测试接口能不能用
 * import {reqCategoryList} from '@/api'
 * reqCategoryList()
 */


import store from '@/store'

Vue.config.productionTip = false

// 全局注册的各种组件,因为很多地方用到 
// SPA 单页面应用  main.js 是首先要加载的入口

import TypeNav from '@/components/TypeNav'

Vue.component('TypeNav',TypeNav)//全局注册

new Vue({
  el:'#app',
  render: h => h(App),
  router,//router是配置对象的属性 不能改  
  // 配置对象是属性名固定,属性值不固定的对象
  // 让所有的组件当中都可以多两个对象  $router 和 $ route  
  // $router路由器对象  和  $route路由对象
  store,//让所有的组件当中都可以多一个对象  this.$store

  // components:{
  //   App:App  //上面导入的App是定义组件所需的配置对象
  // },
  // template:'<App/>'
})




