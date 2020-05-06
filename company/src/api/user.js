import { http } from "../utils/axios";


export function Login (parameter) {
  return http({
    url: '/login',
    method: 'post'
  }, parameter)
  // return ajax.get('http://api.test.company.shaoziketang.com/v1.0/login', parameter)
}

export function companyName (parameter) {
  return http({
    url: '/company_name',
    method: 'get'
  }, parameter)
}

export function randomCode (parameter) {
  return http({
    url: '/random_code',
    method: 'get'
  }, parameter)
}
// // 更新用户信息
export function updateUser (parameter = {}) {
  return http({
    url: '/sys/user/update',
    method: 'put',
  }, parameter)
}

// export function checkToken () {
//   return http({
//     url: '/pub/user/checkToken',
//     method: 'get',
//   })
// }
