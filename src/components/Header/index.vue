<template>
     <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <router-link :to="{path:'/login'}">登录</router-link>
                            <!-- <router-link to="/login">登录</router-link> -->
                            <!-- <a href="###">登录</a>
                            <a href="###" class="register">免费注册</a> -->
                            <router-link class="register" to="/register">免费注册</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        <!-- <a href="###">我的订单</a> -->
                        <router-link to="/search">我的订单</router-link>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                    <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a> -->
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        toSearch(){
            // this.$router.push('/search')//push(可以写字符串/对象)
            // 1.字符串写法
            // 2.对象写法

            // this.$router.push({path:'/search/',params:{keyword:this.keyword}})
            // this.$router.push({name:'search',params:{keyword:this.keyword}})

            // 当我一点击,它去push的时候,把keyword通过params参数带过去

            // params参数能不能和path配合?
            // 不能配合,如果要配合只能和name配合


            // 字符串形式
            // this.$router.push('/search/'+this.keyword)
            // 自己知道keyword是参数,需要在router里边接收

            // 如果只传query参数可以和path配合

            // 3.
            let location ={
                name:'search',
                params:{keyword:this.keyword || undefined},
                // query:{keyword2:this.keyword.toUpperCase()}
            };

            // 判断当前路由当中是不是有query参数 , 有就带上   有的话说明先点击的类别 后点击的搜索按钮
            let {query} = this.$route  
            if(query){
                location.query = query
            }

            // this.$router.push(location).catch(()=>{})
            // this.$router.push(location,()=>{},()=>{})
            this.$router.push(location)

        }
    }
}
</script>

<style lang="less" scoped>
     .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>