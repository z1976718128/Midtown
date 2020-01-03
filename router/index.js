import Vue from 'vue'
import Router from './bobo-router'
import wx from "../wechat.js"

Vue.use(Router)

// 路由配置 页面中全部使用this.$Router来操作路由，以实现路由的全局管理
const router = new Router()

// 路由全局拦截器 在这里处理登录、授权等相关操作
router.beforeEach(function(to, from, next) {
			console.log(from)
			// 是否关注
			if(from.page == "/pages/index/home/home" || from.page == "/pages/index/investment/investment" ||
			 from.page == "/pages/index/find/find" || from.page == "/pages/index/my/my" 
			 ||  from.page == "/pages/details/details" || from.page == "/pages/findDetails/findDetails" 
			 || from.page == "/pages/newDetails/newDetails" || from.page == "/pages/submitBP/submitBP"
			 || from.page == "/pages/findDetails/findDetails" || from.page == "/pages/details/details"
			 || from.page == "/pages/bpDetails/bpDetails"
			  && !to.page){
				console.log(from.page)
				const token = uni.getStorageSync("token");
				let _than = this
				uni.request({
					url: 'http://zc.demo.yudw.com/api/config/subscribe', //是否关注
					method: 'get',
					data: {
						token: token
					},
					dataType: 'json',
					success: (res) => {
						if (res.data.status == 403) {
							let url = window.location.href;
							if (window.location.href.indexOf("code") == 0 || window.location.href.indexOf("code") <= 0) {
								uni.request({
									url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
									method: 'get',
									data: {
										baseUrl: url
									},
									dataType: 'json',
									success: (res) => {
										console.log(res)
										_than.hr = res.data.data
										window.location.href = res.data.data;
									}
								})
							} else {
								//如果有带code
								// getQueryString(name) {
				
								// }
								function getQueryString(name) {
									let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
									let r = window.location.search.substr(1).match(reg);
									if (r != null) {
										return unescape(r[2]);
									} else {
										return null;
									}
								}
								let code = getQueryString("code");
								console.log(code)
								uni.request({
									url: 'http://zc.demo.yudw.com/api/login/login', //登录
									method: 'get',
									data: {
										code: code
									},
									dataType: 'json',
									success: (res) => {
										console.log(res, 7897894566)
										if (res.data.status == 1) {
											console.log("登录成功");
											console.log("token:", res.data.data.token);
											uni.setStorageSync("token", res.data.data.token)
										}
									},
									fail: (res) => { //请求失败后返回
										console.log(res);
									}
								})
							}
						}
						// alert(res.data.data.subscribe)
						console.log(res.data.data.subscribe)
						if (res.data.data.subscribe == 0) {
							location.replace("https://mp.weixin.qq.com/s/e_kFlAUdtNv_6zEe3JxNWA")
							  // WeixinJSBridge.call('hideToolbar');   
							// history.pushState(null, null, document.URL); //禁止网页返回上一页
							//   window.addEventListener('popstate', function() { 
							// 	  WeixinJSBridge.call('closeWindow');//微信 
							//   });
							function pushHistory() {
							//写入空白历史路径
							  let state = {
							    title: 'title',
							    url: "#"
							  }
							  window.history.pushState(state, state.title, state.url)
							}
							function back() {
								pushHistory();
							  window.addEventListener("popstate", function (e) {
							    location.href = ''
							  }, false);
							}
							back()
						}
					},
					fail: (res) => { //请求失败后返回
						console.log(res);
					}
				})
			}
			if (from.page == '/pages/index/my/my') {
				const token=uni.getStorageSync("token");
				let _than = this;
				uni.request({
					url: 'http://zc.demo.yudw.com/api/user/checkRegist', //请求接口
					method:'GET',
					data:{
						token:token
					},
					dataType:'json',
					success: (res) => {
						if (res.data.status == 403){
							let url = window.location.href;
							if (window.location.href.indexOf("code") == 0 || window.location.href.indexOf("code") <= 0) {
								uni.request({
									url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
									method: 'get',
									data: {
										baseUrl: url
									},
									dataType: 'json',
									success: (res) => {
										console.log(res)
										_than.hr =res.data.data
										window.location.href = res.data.data;
									}
								})
							} else {
								//如果有带code
								let code = this.getQueryString("code");
								uni.request({
									url: 'http://zc.demo.yudw.com/api/login/login', //登录
									method: 'get',
									data: {
										code: code
									},
									dataType: 'json',
									success: (res) => {
										console.log(res, 7897894566)
										if (res.data.status == 1) {
											console.log("登录成功");
											console.log("token:", res.data.data.token);
											uni.setStorageSync("token", res.data.data.token)
										}
									},
									fail: (res) => { //请求失败后返回
										console.log(res);
									}
								})
							}
						}
						if(res.data.data == 0){
							uni.navigateTo({
								url:"/pages/register/register"
							})
						}
					},
					fail:(res) =>{//请求失败后返回
						console.log(res);
					}
				})
			}
})

		// 路由后置拦截器
		router.afterEach(function(to, from) {
			console.log('后置守卫')
		})

		// 路由跳转出错处理
		router.onError(function(e) {
			console.log('错误：', e.message || '路由跳转失败')
		})


		export default router
