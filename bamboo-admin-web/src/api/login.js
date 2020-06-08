import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/doLogin',
    method: 'post',
    data
  })
}

export function getInfo(username) {
  return request({
    url: '/system/system/info',
    method: 'get',
    params: { username }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
