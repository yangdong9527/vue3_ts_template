import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { ResponseType, RequestParame } from '@/@types/index'

/**
 * @description 用户登录
 */
export function login(data: RequestParame): AxiosPromise<ResponseType> {
  return request({
    url: 'api/user/login',
    method: 'post',
    data
  })
}
