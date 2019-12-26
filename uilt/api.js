import http from "./http.js"

export function geturl(data) {
//获取链接
  return  http.httpRequest({
    url: 'login/get_code_url',
    method: 'post',
    data
  })
}

export function getlogin(data) {
//登录
  return  http.httpRequest ({
    url: 'login/login',
    method: 'get',
    params: data
  })
}
export function getData(data) {
  // 首页接口
  return http.httpRequest({
    url: 'index/index',
    method: 'get',
    params: data
  })
}