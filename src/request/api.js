import axios from 'axios'  //引入axios
import { Toast } from 'vant'

let instance = axios.create({
    baseURL: 'https://www.privacys.club/api',
    headers: {
        'content-type': 'application/json; charset=utf-8'
    }
})

// http request 拦截器
instance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token')
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.authorization = token  //请求头加上token
        }
        return config
    },
    err => {
        return Promise.reject(err)
})

// http response 拦截器
instance.interceptors.response.use(
    response => {
      //拦截响应，做统一处理 
      if (!response.data.code || response.data.code !== 200) {
        Toast.fail(response.data.msg);
      }
      return response.data
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
      return Promise.reject(error.response.status) // 返回接口返回的错误信息
})

export default instance