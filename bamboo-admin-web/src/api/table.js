import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/bamboo-admin-web/table/list',
    method: 'get',
    params
  })
}
