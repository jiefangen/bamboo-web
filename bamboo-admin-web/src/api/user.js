import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/bamboo-admin/doLogin',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/bamboo-admin/logout',
    method: 'get'
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/bamboo-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
