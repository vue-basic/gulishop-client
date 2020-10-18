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
  }
}
</script>

<style>
  
</style>