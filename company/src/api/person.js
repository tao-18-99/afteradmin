import { http } from "../utils/axios";


export function workbench (parameter) {
  return http({
    url: '/personal_homepage/workbench',
    method: 'get'
  }, parameter)

}

export function news (parameter) {
  return http({
    url: '/personal_homepage/news',
    method: 'get'
  }, parameter)
}

export function readMsg (parameter) {
  return http({
    url: '/personal_homepage/public/read_msg',
    method: 'post'
  }, parameter)
}
//  用户信息-获取
export function userInfo (parameter = {}) {
  return http({
    url: '/personal_homepage/user_info',
    method: 'get',
  }, parameter)
}
// 用户信息-更新
export function userUpdate () {
  return http({
    url: '/personal_homepage/user_info',
    method: 'post',
  })
}
