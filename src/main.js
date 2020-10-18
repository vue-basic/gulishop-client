import App from '@/App'
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,//router是配置对象的属性 不能改  
  // 配置对象是属性名固定,属性值不固定的对象
// 让所有的组件当中都可以多两个对象  $router 和 $ route  
// $router路由器对象  和  $route路由对象

  // components:{
  //   App:App  //上面导入的App是定义组件所需的配置对象
  // },
  // template:'<App/>'
})




