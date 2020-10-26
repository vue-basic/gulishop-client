import {reqCategoryList,reqBannerList,reqFloorList} from '@/api' //引入接口请求函数  并把main中测试的给删掉

// 存数据的地方,多个属性的对象
// 3.把数据存起来
const state = {
    categoryList:[] ,  //初始化存储的共享状态数据 
    bannerList:[],
    floorList:[]
}
// RECEIVECATEGORYLIST 这个函数一触发给state里边保存数据

// 直接修改数据的地方,是多个方法的一个对象   方法当中不能出现  if for 异步操作
// 2.提交给mutations修改数据
const mutations = {
    // mutations当中的函数名都是要大写的
    RECEIVECATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    // 有人commit的时候RECEIVECATEGORYLIST这个函数才会执行

    RECEIVEBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },

    RECEIVEFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}

// 和用户对接的地方,也是多个方法的一个对象  可以出现 if for 异步操作
// 1.发请求 用户dispatch
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        //调用这个函数相当于在调api中的这个函数 它会返回一个Ajax最后的调用结果 它的调用结果是一个Promise
        // 想要拿数据就.then 但是我们用async await

        if(result.code === 200){
            commit('RECEIVECATEGORYLIST',result.data)
            // 提交给响应的mutations去修改相应的数据
        }
    },

    async getBannerList({commit}){
        // context 是Vuex 的上下文对象  本质是store对象
        // 在context的内部除了有 commit还有state dispatch mutations actions
        const result = await reqBannerList()

        if(result.code === 200){
            commit('RECEIVEBANNERLIST',result.data)
        }
    },

    async getFloorList({commit}){
        const result = await reqFloorList()

        if(result.code === 200){
            commit('RECEIVEFLOORLIST',result.data)
        }
    }
}
// actions当中发请求拿数据commit
// 当用户一旦dispactch它 getCategoryList就发请求

// 通过state计算出来的属性数据(只有读没有写,只能使用state数据,不能修改state数据)
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}

// 三连环写完之后没有发请求 如果用户没有dispatch 它是不可能发请求的
//  一旦用户dispatch 三连环就被触发了  数据自然而然就存储到Vuex里边了  组件里边没有
// banner 和 floor 里边的数据在 home页中的 listContainer里边 和 floor里边用到了