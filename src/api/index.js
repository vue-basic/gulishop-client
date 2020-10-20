// 用来书写所有的接口请求函数
// 15个接口,每一个接口我们都去封装一个函数来对应
// 以后哪里需要数据,那我就调哪一个相应的接口请求函数就ok
// 一旦写接口请求函数,必然要用到axios  用封装好的

import Ajax from '@/ajax/Ajax'

// 1.请求三级分类列表数据函数
/**
 * 请求地址:/api/product/getBaseCategoryList
 * 请求方式:GET
 * 参数:无
 */
// 相当于定义一个函数,把这个函数暴露出去,后期想用直接调就可以了
export const reqCategoryList = () => {
    return Ajax({
        // axios的函数用法
        // 配置对象:属性名固定,属性值不固定
        url:'/product/getBaseCategoryList' ,//api不用配了,因为刚才在公共的路径中已经配了
        method:'get',
    })
}

// 测试接口
// 1.直接调这个暴露出来的函数  需要在main.js中加载一下 因为模块不会自己运行
// reqCategoryList()
// 2.在main.js中调暴露出来的这个函数