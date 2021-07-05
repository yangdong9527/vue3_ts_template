/**
 * @description 请求返回数据
 */
export interface ResponseType<T = any> {
  code: number
  msg?: string
  data?: T
}
/**
 * @description 请求参数
 */
export interface RequestParame {
  [key: string]: any
}
