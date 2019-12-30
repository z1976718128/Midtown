import http from "./http.js"

export function geturl(data) {
//获取链接
console.log(data)
  return  http.httpRequest({
    url: '/login/get_code_url',
    method: 'post',
    data
  })
}
export function bpDownload(data) {
//bp下载
  return  http.httpRequest ({
    url: '/bp/bpDownload',
    method: 'post',
    data
  })
}

export function getlogin(data) {
//登录
  return  http.httpRequest ({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function checkRegist(data) {
  // 判断是否注册
  return http.httpRequest({
    url: '/user/checkRegist',
    method: 'post',
    data
  })
}

export function getUser(data) {
  // 获取个人信息
  return http.httpRequest({
    url: '/user/getUser',
    method: 'post',
    data
  })
}


export function edit(data) {
 //注册
  return http.httpRequest({
    url: '/user/edit',
    method: 'post',
    data
  })
}

export function postBp(data) {
    // 提交bp
  return http.httpRequest({
    url: '/user/postBp',
    method: 'post',
    data
  })
}

export function sendSms(data) {
  // 验证码
  return http.httpRequest({
    url: '/user/sendSms',
    method: 'post',
    data
  })
}

export function getData(data) {
  // 首页接口
  return http.httpRequest({
    url: '/index/index',
    method: 'get',
    params: data
  })
}

export function bpIndex(data) {
  // 获取BP项目列表
  return http.httpRequest({
    url: '/bp/index',
    method: 'post',
    data
  })
}

export function bpItem(data) {
  // 获取BP详情
  return http.httpRequest({
    url: '/bp/info',
    method: 'post',
    data
  })
}

export function bpInfo(data) {
  // 获取BP项目详情
  return http.httpRequest({
    url: '/bp/info',
    method: 'post',
    data
  })
}

export function getRegion(data) {
  // 获取省市
  return http.httpRequest({
    url: '/config/getRegion',
    method: 'POST',
     data
  })
}

export function getField(data) {
  // 领域列表
  return http.httpRequest({
    url: '/index/getField',
    method: 'get',
    params: data
  })
}
export function getStage(data) {
  // 行业列表
  return http.httpRequest({
    url: '/index/getStage',
    method: 'get',
    params: data
  })
}


export function investor(data) {
  // 投资方列表
  return http.httpRequest({
    url: '/investor/index',
    method: 'post',
     data
  })
}

export function investorInfo(data) {
  // 投资方详情
  return http.httpRequest({
    url: '/investor/info',
    method: 'post',
    data
  })
}

export function findList(data) {
  // 活动列表
  return http.httpRequest({
    url: '/news/index',
    method: 'post',
    data
  })
}

export function getNews(data) {
  // 活动
  return http.httpRequest({
    url: '/news/getNews',
    method: 'post',
    data
  })
}

export function getUserBp(data) {
  // 我的项目
  return http.httpRequest({
    url: '/user/getUserBp',
    method: 'post',
    data
  })
}

export function bpInfos(data) {
  // bp详情
  return http.httpRequest({
    url: '/user/bpInfo',
    method: 'post',
    data
  })
}

export function getCapital(data) {
  // 融资需求
  return http.httpRequest({
    url: '/index/getCapital',
    method: 'post',
    data
  })
}
export function upload(data) {
  // 上传文件
  return http.httpRequest({
    url: '/Upload/upload_file',
    method: 'post',
    data
  })
}

export function newsInfo(data) {
  // 发现详情
  return http.httpRequest({
    url: '/news/info',
    method: 'post',
    data
  })
}


