<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHide"></Footer>
    <!-- <Footer v-show="!(this.$route.path === '/login' || this.$route.path === '/register')"></Footer> -->
    <!-- this.$route.path 从当前的路由对象中去找 拿到path 判断你的path是不是我要找的path -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name:"App",
  components:{
    Header,
    Footer
  },
  mounted() {
    this.getCategoryList() 
  },
  methods:{
    // 函数定义也要定义在这里

        getCategoryList(){
            // 用户在触发相应的actions去发请求拿数据
            this.$store.dispatch('getCategoryList') //名字刚好和函数名一样
            // dispatch触发actions 
            
        },
  }
}
</script>

<style>
  
</style>