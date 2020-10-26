<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor  v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"></Floor>
        <!-- 
            组件间通信 在父组件当中通过属性传递给某一个子组件
            props组件间通信
                适用场合:父子之间
                如果父亲给儿子传的是非函数数据,那么本质是父亲在给儿子传数据,让儿子用的
                如果父亲给儿子传的是函数数据,其实本质是父亲在接收儿子给他的数据
                    它其实是让儿子调这个函数,儿子在调用这个函数的时候可以传实参
                    这个函数在父组件当中定义的,父组件当中可以接收到儿子传递过来的实参
                    
                    
         -->
        <!-- <Floor></Floor> -->
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
export default {
    name:'Home',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted(){
        this.getFloorList()
    },
    methods:{
        getFloorList(){
            this.$store.dispatch('getFloorList')
        }
    },
    computed:{
        ...mapState({
            floorList:state => state.home.floorList
        })
    }
}
</script>

<style lang="less" scoped>
    
</style>