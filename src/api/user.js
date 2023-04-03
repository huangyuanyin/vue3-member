import request from '@/utils/request'

export function loginApi(data) {
  return request({
    url: '/employee/login',
    method: 'post',
    data
  })
}

export function logoutApi() {
  return request({
    url: '/employee/logout',
    method: 'post'
  })
}

export function getMemberListApi(params) {
  return request({
    url: '/employee/page',
    method: 'get',
    params
  })
}
