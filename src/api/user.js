import request from '../utils/request';

export function loginApi(data) {
  return request({
    url: '/employee/login',
    method: 'post',
    data,
  });
}

export function logoutApi() {
  return request({
    url: '/employee/logout',
    method: 'post',
  });
}

export function getMemberListApi(params) {
  return request({
    url: '/employee/page',
    method: 'get',
    params,
  });
}

export function dishPage(params) {
  return request({
    url: '/dish/page',
    method: 'get',
    params,
  });
}

export function addDishCount(params) {
  return request({
    url: '/dish/count',
    method: 'post',
    data: params,
  });
}

export function deleteDishCount(id) {
  return request({
    url: `/count?id=${id}`,
    method: 'delete',
  });
}

export function getDishCount(params) {
  return request({
    url: '/dish/countpage',
    method: 'get',
    params,
  });
}

export const getNoticeListApi = (params) => {
  return request({
    url: '/notice/page',
    method: 'get',
    params,
  });
};

export const getNoticeDetailApi = (params) => {
  return request({
    url: `/notice/${params}`,
    method: 'get',
  });
};
