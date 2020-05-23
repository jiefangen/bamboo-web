import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/bamboo-admin-web/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/bamboo-admin-web/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/bamboo-admin-web/user/logout',
    method: 'post'
  })
}
