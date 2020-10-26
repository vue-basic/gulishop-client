<template>
  <!--列表-->
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
           <SliderLoop :bannerList="bannerList"></SliderLoop>
          <!-- 
              组件间通信:父向子通信

           -->


        <!--banner轮播-->
        <!-- <div class="swiper-container" ref="bannerSwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(banner, index) in bannerList"
              :key="banner.id"
            >
              <img :src="banner.imgUrl" />
            </div>
          </div> -->
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->

          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> -->
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "ListContainer",
  mounted() {
    this.getBannerList();
    //异步请求获取banner数据
    // 当它开始调用  new Swiper就开始执行了
    // 它执行的时候就一定能保证结构形成了吗?  依赖于请求的数据形成的结构
    // 数据不一定回来

    // 1.实例化swiper写在mounted当中不能保证bannerList有数据,
    // 也就不能保证上面的轮播div结构形成
    // 2.即使数据能保证回来,放在mounted当中也不能保证结构形成
    // 因为上面div通过for循环创建,也需要时间

    // 虽然说延迟定时器可以解决这个问题但是不好
    /*
    setTimeout(() => {
      new Swiper(this.$refs.bannerSwiper, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }, 3000);
    */
  },
  methods: {
    // 定义这个函数
    getBannerList() {
      this.$store.dispatch("getBannerList");
    },
  },
  computed: {
    ...mapState({
      // 这里不能用数组 因为它不在总的store里边 而是在home的store里边  只有在总的store里边才能用数组
      bannerList: (state) => state.home.bannerList,
    }),
  },

  //   监视
  // 一般监视bannerList
//   watch: {
//     // 一般监视和深度监视
//     // 监视bannerList

//     // 只要这个对象里边只有一个配置项handler , 就可以简写为函数形式
//     // 函数形式是没有深度监视的写法的
//     // bannerList(){
//     //      new Swiper(this.$refs.bannerSwiper, {
//     //       loop: true, // 循环模式选项

//     //       // 如果需要分页器
//     //       pagination: {
//     //         el: ".swiper-pagination",
//     //       },

//     //       // 如果需要前进后退按钮
//     //       navigation: {
//     //         nextEl: ".swiper-button-next",
//     //         prevEl: ".swiper-button-prev",
//     //       },
//     //     });
//     // },

//     bannerList: {
//       // 配置对象
//         immediate:true,//添加这个东西没意义,只是让两边的代码保持一致
//       handler() {
//         // 监视哪个数据变化之后所执行的函数
//         // 现在监视的bannerList,一旦bannerList发生变化,它就会执行handler()这个回调
//         // 如果这个对象里边只写了handler,那它就是一般监视
//         // 发请求  0---4  这个变化

//         // 监视:有变化才执行
//         // watch:监视  有这个数据监视就可以了    有这个数据监视你来干其他的活
//         // 只要是用监视这个数据一定存在   只是它里边的值可能有变化
//         // 根据一个已有的数据,我们监视它来干其他的事情用watch
//         // watch:监视  这个数据一定存在,根据这个数干另外的事情
//         // 你的变化会导致另外一件事的发生

//         // computed:计算 没有这个数据你要用就要计算  没有这个值,要通过已有的数据做计算
//         // 根据一个已有的数据,计算出来一个要用的没有的数据
//         // 我的页面上需要这个数据,但是此时我没有
//         //  没有这个数据,但是我想用这个数据  那就要根据已有的数据计算出这个要用的数据

//         // 放在这里能保证bannerList内部一定有数据 , 但是还是不能保证结构完全形成
//         // new Swiper的时候能保证4张图片已经存在了

//         //  this.$nextTick() 等待页面最近一次的更新完成之后再去执行它内部的回调
//         // nextTick是一个回调  它里边又传了一个回调
//         // 当数据从0-4改变了之后执行 nextTick
//         // updated:不管第几次更新只要是有更新就执行
//         // nextTick:页面dom最近一次更新会执行  之后的更新就不会执行了

//         this.$nextTick(() => {
//             // 这个回调是nextTick的回调,nextTick会等待页面dom最近一次循环更新结束之后才会执行它内部传递的回调
//             // updated也可以实现,但是并不是最新一次更新,而是所有的更新都会执行这个钩子(updated)
//           new Swiper(this.$refs.bannerSwiper, {
//             loop: true, // 循环模式选项

//             // 如果需要分页器
//             pagination: {
//               el: ".swiper-pagination",
//             },

//             // 如果需要前进后退按钮
//             navigation: {
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             },
//           });
//         });
//       },
//     },
//   },

  // 深度监视bannerList
  // watch:{
  //     // 一般监视和深度监视
  //     // 监视bannerList
  //     // 深度监视就是在监视的对象里边写  deep:true,
  //     bannerList:{
  //         deep:true,
  //         // 配置对象
  //         handler(){
  //             // 监视哪个数据变化之后所执行的函数
  //             // 现在监视的bannerList,一旦bannerList发生变化,它就会执行handler()这个回调
  //             // 如果这个对象里边只写了handler,那它就是一般监视
  //         }
  //     }

  // }

  // 一般监视和深度监视的区别:
  // 现在bannerList里边是一个数组,假设数组里边有两个对象  [{a:'b'},{a:'c'}]
  // 一般监视监视的bannerList, 也就是说他监视的是整个数组
  // 往数组里边加一个对象  [{a:'b'},{a:'c'},{a:'d'}]  一般监视是可以监视到的 因为这个数组发生了变化
  // 或者说删除数组里边的一个对象,他也是能够监视到的[{a:'b'}]

  // 但是如果说  [{a:'b'},{a:'c'}]  把数组中第一个属性的值改成了e [{a:'e'},{a:'c'}]
  // 整个数组发生了变化  , 因为对象中的值发生了变化 , 代表数组中的值页发生了改变
  // 但是一般监视监视不到 监视不到内部的对象的属性值的改变
  // 一般监视监视不到数组当中对象的属性值发生变化,它只能监视数组有没有增加或减少
  // 或者说把数组中的对象换成了另外一个对象他也是能监视到的  [{c:'b'},{a:'c'}] 这样也是可以监视到的
  // 但是如果说数组当中对象的某一个属性值发生改变  一般监视监视不到

  // 一般监视:只能监视数组本身数据的改变,而不能监视数组内部对象内部属性的变化
  // 深度监视:用来解决一般监视解决不了的问题
  // 如果加了  deep:true
  // 即使是改数组当中对象中的每个属性的值 也是可以监视到的
};
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>