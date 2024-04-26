import axios from 'axios'

const service = axios.create({
  baseURL: 'http://81.70.224.230:8080',
  timeout: 120000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const hastoken = localStorage.getItem('token')
    // 请求头添加token
    config.headers['token'] = hastoken
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service
