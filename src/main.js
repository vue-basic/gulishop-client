import App from '@/App'
// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  components:{
    App:App  //上面导入的App是定义组件所需的配置对象
  },
  template:'<App/>'
})




