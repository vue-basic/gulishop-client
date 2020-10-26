// 这个文件才是正儿八经的去把数据模拟接口去获取
// 模拟接口使用一个包 mock.js

import Mock from 'mockjs'
import banner from '@/mock/banner' 
import floor from '@/mock/floor'

// Mock 是一个对象 它有一个方法 mock  
Mock.mock('/mock/banner',{code:200,data:banner}) //就是用来 把数据和路径注册为接口
Mock.mock('/mock/floor',{code:200,data:floor})

// mock  数据
// 1.准备数据
// 2.准备路径
// 3.把数据和路径注册成为一个接口
// 4.安装mockjs
// 5.导入数据后 用的是Mock下的mock()去注册的
// 6.切记在main.js当中运行这个接口