import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken } from './cookie'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/',
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    let message = error.message || '抱歉,发生了一个错误!'
    // 超时错误
    if (message.indexOf('timeout') >= 0) {
      message = '请求超时,请重试'
    }

    // 使用 接口返回错误
    if (error?.response) {
      const { response } = error
      message = response?.data?.msg ? response.data.msg : '抱歉,发生了一个意料之外的错误'
    }

    return Promise.reject(new Error(message))
  }
)

export default instance
