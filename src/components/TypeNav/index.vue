<template>
     <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">

                <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
                    <h2 class="all">全部商品分类</h2>
                    <transition name="show">
                             <div class="sort" v-show="isShow">
                            <div class="all-sort-list2" @click="toSearch">
                        <!-- 
                            添加类
                            强制添加类：
                             1.变量(如果现在不知道要表示哪个类) 
                             2.对象(类名固定,但是它显示不显示不知道)  类名生效不生效看数据 true:生效 false:不生效
                             3.数组(一个标签同时有多个类都生效)
                          
                         -->
                         <!-- 
                             设计数据:
                             移入哪一个一级分类就把哪一个下标赋值给 currentIndex  那么移入的这个下标一定适合currentIndex相等,其余不等
                          -->
                        <div class="item" v-for="(c1,index) in categoryList" 
                        :key="c1.categoryId" 
                        :class="{item_on:currentIndex === index}"
                        @mouseenter="moveIn(index)">
                            <h3>
                                <!-- 使用声明式导航牵扯到使用组件标签,使用组件标签如果多了  组件对象非常多,就会造成效率低下(内存占用厉害) 因此我们不能使用声明式导航 采用编程式导航 -->
                                <!-- 带参数  使用对象形式 '代表解析js的区域'  -->
                                <!-- 1.字符串 -->
                                <!-- <router-link :to="'/search/?categoryName='+c1.categoryName + '&category1Id=' + c1.categoryId" ></router-link> -->
                                <!-- 2.``拼接符 -->
                                <!-- <router-link :to="`/search/?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`"></router-link> -->
                                <!-- 3.对象 -->
                                <!-- <router-link :to="{name:'search',query:{categoryName:c1.categoryName,categoryId:c1.categoryId}}">{{c1.categoryName}}</router-link> -->
                                <!-- <a href="">{{c1.categoryName}}</a> -->

                                <!-- 使用编程式导航 -->
                                <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c1.categoryName,categoryId:c1.categoryId}})">{{c1.categoryName}}</a> -->
                                <!-- 每个a标签都添加事件效率仍然底下,采用事件委派更妥当 -->
                                <!-- 1.点击的是不是a?  2. 2.就算你点的是a,你点的是几级的a？ 因为它们带的参数不一样 -->
                                <a href="javascript:;" :data-categoryName="c1.categoryName" :data-categoryId="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dt>
                                            <!-- <a href="">{{c2.categoryName}}</a> -->
                             <!-- <router-link :to="{name:'search',query:{categoryName:c2.categoryName,categoryId:c2.categoryId}}">{{c2.categoryName}}</router-link> -->

                                <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c2.categoryName,categoryId:c2.categoryId}})">{{c2.categoryName}}</a> -->
                                    <a href="javascript:;" :data-categoryName="c2.categoryName" :data-categoryId="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <!-- <a href="">{{c3.categoryName}}</a> -->
                            <!-- <router-link :to="{name:'search',query:{categoryName:c3.categoryName,categoryId:c3.categoryId}}">{{c3.categoryName}}</router-link> -->
                                <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c3.categoryName,categoryId:c3.categoryId}})">{{c3.categoryName}}</a> -->
                                            <a href="javascript:;" :data-categoryName="c3.categoryName" :data-categoryId="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </transition>
                 
                </div>
                
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
              
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
// import _ from 'lodash' //体积过大
import throttle from 'lodash/throttle'
export default {
    name:"TypeNav",
    data() {
        return {
            currentIndex:-1,
            isShow:true
        }
    },
    mounted(){
        // 挂载完成后(模板挂载完成后,模板变成真正的dom后)

        // 为了判断TypeNav组件是在home页还是在search页  如果是search页那么我们要首先隐藏三级分类列表  
        if(this.$route.path !== '/home'){
            this.isShow = false
        }

        // this.getCategoryList()  //放在这里会发送多次请求 而请求的数据是一样的 (home和search都会发)  挪到App当中发请求  同时把发请求的函数拿过去
    },
    methods:{
        // getCategoryList(){
        //     // 用户在触发相应的actions去发请求拿数据
        //     this.$store.dispatch('getCategoryList') //名字刚好和函数名一样
        //     // dispatch触发actions 
            
        // },

        // 这里面可以获取Vuex当中的mutations和actions方法

        // 需要节流的函数
        // moveIn(index){
        //     console.log(index)
        //     this.currentIndex = index
        // },

        // moveIn:function(index){
        //     console.log(index)
        //     this.currentIndex = index
        // },

         moveIn:throttle(function(index){
            console.log(index)
            this.currentIndex = index
        }, 100,{'trailing': false}),

        // 移入到全部商品分类外部的div  显示三级分类列表
        moveInDiv(){
            this.isShow = true
        },

        // 移出全部商品分类的div , 隐藏search三级分类列表,home当中隐藏二三级分类
        moveOutDiv(){
            // 隐藏二三级分类
            this.currentIndex = -1 
            
           // 为了判断TypeNav组件是在home页还是在search页  如果是search页那么我们要首先隐藏三级分类列表
            if(this.$route.path !== '/home'){
                this.isShow = false//隐藏search的全部三级分类
            }
        },

        toSearch(event){
            // event：事件对象  写了形参就拿到了事件对象  没写就相当于没接收 并不是说没传
            // 事件源  事件目标元素
            // 回调函数: 1.我定义的 2.我没调用 3.它执行了   浏览器/系统执行的

            let target = event.target//代表目标元素 目标元素有可能是a 也有可能不是a
            let data = target.dataset  
            //dataset 拿的就是元素身上以data-开头的所有的值和属性组成的一个对象
            // 但是它自作主张把属性  大写改成了小写  categoryid  categoryname
            console.log(data)

            let {categoryname,category1id,category2id,category3id} = data
            if(categoryname){
                // 代表点的一定是a
                // 如果categoryName是存在的 代表点的一定是a
                // 既然点的是a 那么一定会跳转 所以我们创建跳转的对象
                let location = {
                    name:'search',
                }
                
                // 创建query参数的对象  来收集整理query参数
                let query = {
                    categoryName:categoryname
                }

                if(category1id){
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else{
                    query.category3Id = category3id
                }

                // 把query参数放到location当中
                location.query = query

                // 判断当前路由当中是不是有params参数 , 有就带上   有的话说明先点击的类别 后点击的搜索按钮
                let {params} = this.$route  
                if(params){
                    location.params = params
                }

                this.$router.push(location)
            }
        }
    },
    computed:{
     
        // 原理
        // categoryList(){
        //     // return this.$store.categoryList  //直接从store当中的state中获取这个数据就可以简写为数据

        //     // 用模块化开发
        //     return this.$store.state.home.categoryList  //如果采用了模块化开发,数据不是在总的store的state当中,没法用数组
        //     // categoryList:Array[17] 数据就拿回来了
        // }

         // 可以去拿Vuex当中的state数据及getters当中的数据
        // ...mapState(['categoryList'])
        // 如果说用数组条件  1.要获取的名字和state当中的名字一致  2.最终拿的是总的store当中的state中的这个数据
        // 如果想要用...mapState要用对象的形式
        // ...mapState({
        //     categoryList: state => state.home.categoryList
        //     // categoryList:Array[17]  数据拿到了
        // })

        // 总结:用模块化开发的时候   要用...mapState从state当中拿数据不能用数组的形式,只能用对象的形式
        // 用数组的形式是拿不动数据的

        //模块化开发有利有弊       用模块化开发  ...mapState()获取数据的时候  不能用数组  只能用对象
        // 不用模块化开发   数组太臃肿

        //   state当中需要写对象,其它的几个核心都可以用数组
        // 只有state当中才有home user search 那些对象


    // 假设我们目前没有使用vuex模块化开发
      /***
         * categoryList 存在总的store的state当中
         * 拿数据的时候: this.$store.state.categoryList 
         * 这样拿数据比较复杂
         * 
         * 提供了一个函数 mapState()
         * 
         */

    /*
    // 1.没有使用vuex模块化开发  本质写法
    categoryList(){
        return this.$store.state.categoryList  //直接从store当中的state中获取这个数据就可以简写为数组
    },
    count(){
        return this.$store.state.categoryList
    },
    */

    // 简化写法  ... 
    // ...mapState(['categoryList','count'])
    /**
     * mapState 是一个方法
     * mapState() 调用函数
     * ...mapState()  在解包
     * ...在解包mapState()这个返回值
     * 
     * 在对象里边用... 返回的必然是对象
     * 
     */

    // mapState(['categoryList','count'])
    // 返回的对象就是上面的本质写法
    //  {
    //      categoryList(){
    //         return this.$store.state.categoryList
    //     },
    //     count(){
    //          return this.$store.state.categoryList
    //      },
    // }

    // ... 扩展运算符 拆包和打包(放在函数的形参当中)


    // mapState如果用到数组要求名称必须和state当中的名称一致才能正确映射,否则不行
    // 如果想要用自己随意起的名字,那么就要用对象写法


    // 对象写法  名字如果不同 就用对象写法   没有使用模块化开发
    // ...mapState({
    //     // categoryList(){
    //     //     return this.$store.state.categoryList
    //     // },

    //     categoryList: state => state.categoryList
    //     // 在mapState当中,它允许categoryList这个属性直接拿到它(mapState)内部的一个参数 state
    //     // state是从mapState它的内部来的
    //     // 这个state可以让你直接获取到你的store当中的state
    //     // 拿的是总的store当中的state
    // })

    // 如果vuex使用了模块化开发,就没办法获取state数组使用数组,必须使用对象
    ...mapState({
         categoryList: state => state.home.categoryList 
    })
    }
}
</script>

<style lang="less" scoped>
     .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: skyblue;
                z-index: 999;

                 &.show-enter{
                    opacity: 0;
                    height: 0;
                }

                &.show-enter-active{
                    transition: all 3s;
                }

                &.show-enter-to{
                    opacity: 1;
                    height: 461px;
                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 615px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on{
                            background-color: hotpink;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>