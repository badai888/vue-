import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import router from '@/router'
import Vue from 'vue'
const bus = new Vue()
// 创建实例
const request = axios.create(
  {
    baseURL: '/commer'
    // timeout : 5000
  }
)
// 请求拦截
request.interceptors.request.use(function (config) {
  // console.log(config)
  if (config.method === 'post' && config.data) { // 讲post请求数据格式转换为query
    config.data = qs.stringify(config.data)
  }
  // 请求： 放在请求体中
  const textp = localStorage.getItem('textp')
  // console.log(config);
  if (textp) {
    config.headers.token = textp
  }

  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 响应判断
  if (response.data.code === 401) {
    Toast('已过期')
    bus.router.push('/login')
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default request
