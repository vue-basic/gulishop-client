import axios from 'axios'
import NProgress from 'nprogress' //相当于导入了js <script src='nprogress.js'></script>
import 'nprogress/nprogress.css' //引入css

/**
        1.配置基础路径和超时限制

		2.添加进度条信息  nprogress

		3.返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据

		4.统一处理请求错误, 具体请求也可以选择处理或不处理
  
 */

// 1.配置基础路径和超时限制
const instance = axios.create({
    baseURL: '/api',//配公共路径  请求路径当中公共的路径
    timeout: 20000,
  });

// 2.添加进度条信息  nprogress
/**
 * 用到请求拦截器和响应拦截器
 * 
 * 请求拦截器:
 *          1.可以在请求时候添加功能
 *          2.我们可以对请求报文进行处理
 * 
 * 响应拦截器:
 *          1.可以添加功能
 *          2.可以处理响应报文信息
 * 
 * 找到Interceptors
 * 只需要把axios换成instance
 * create创建出来的其实就相当于一个新的axios
 * 
 * 用到一个插件 nprogress
 * 
 * 1.用到 nprogress 中的js和css
 * <script src='nprogress.js'></script>
 * <link rel='stylesheet' href='nprogress.css'/>
 * 
 * 2.安装 nprogress
 * 安装 $ npm install --save nprogress
 * 
 * 3.最终要用的
 * NProgress.start();  请求拦截器中开始
 * NProgress.done();   响应拦截器中结束
 * 
 * 
 * 
 */

//  在请求拦截器中不需要写失败的回调---发请求失败了没意义
instance.interceptors.request.use( config => {
    // config就是你的请求报文对象,可以这么理解
    /**
     *  1.可以在请求时候添加功能
     *  2.我们可以对请求报文进行处理
     */
    NProgress.start();//添加进度条功能

    return config;//一定要把config返回去
  })


//   3.返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据

instance.interceptors.response.use(
    response => {
        NProgress.done();
        return response.data;
  }, 
    error => {
        NProgress.done();
    //   4.统一处理请求错误, 具体请求也可以选择处理或不处理
    alert('发送ajax请求失败'+error.message || '未知错误')
    // 错误了之后可以选择今后可以继续处理这个错误,也可以选择今后不能处理这个错误

    //  return Promise.reject(error);//返回的是失败的promise,是可以让后续继续处理这个错误的
    //  如果不想让他处理  中断Promise链 返回一个pending状态的promise
    return new Promise(()=>{})
  }
)

// 暴露出去
export default instance