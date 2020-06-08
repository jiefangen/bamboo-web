import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'system/user/add',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/user/del',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/user/edit',
    method: 'put',
    data
  })
}

export function updatePass(data) {
  return request({
    url: 'system/user/updatePass',
    method: 'post',
    data
  })
}

export function getList(data) {
  return request({
    // url: 'system/user/list' + '?pageNo=' + data.pageNo + '&pageSize=' + data.pageSize,
    url: 'system/user/list?pageNo=1&pageSize=10',
    method: 'get'
  })
}

export default { add, edit, del, getList, updatePass }

