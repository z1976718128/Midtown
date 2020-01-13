import "@/uilt/pc.js"
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
import MtaH5 from "mta-h5-analysis";
Vue.config.productionTip = false
App.mpType = 'app'
let wx = require('jweixin-module')
let url =window.location.href;

 MtaH5.init({
    sid: "500708274", //必填，统计用的appid
    // cid: "********", //如果开启自定义事件，此项目为必填，否则不填
    autoReport: 0, //是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
    senseHash: 1, //hash锚点是否进入url统计
    senseQuery: 1, //url参数是否进入url统计
    performanceMonitor: 1, //是否开启性能监控
    ignoreParams: ["token", "v", "from"] //开启url参数上报时，可忽略部分参数拼接上报
  });
uni.request({
	url:"http://zc.demo.yudw.com/api/index/getSignPackage",
	method: 'get',
	data: {
		url: url
	},
	dataType: 'json',
	success: res => {
		console.log(res,res.data.data.signature,1321123123132)
		wx.config({
			debug: false, // 开启调试模式
			appId:res.data.data.appId, // 必填，公众号的唯一标识
			timestamp:res.data.data.timestamp, // 必填，生成签名的时间戳
			nonceStr:res.data.data.nonceStr, // 必填，生成签名的随机串
			signature:res.data.data.signature, // 必填，签名，见附录1
			jsApiList: [
			  // 必填，需要使用的JS接口列表，见附录2
			  "onMenuShareTimeline",
			  "onMenuShareAppMessage",
			  "onMenuShareQQ",
			  "onMenuShareWeibo",
			  "onMenuShareQZone",
			  "chooseWXPay",
			  "getLocation",
			  "openLocation",
			  "scanQRCode",
			  "chooseImage",
			  "uploadImage",
			  "previewImage",
			  "getLocalImgData",
			  "startRecord",
			  "stopRecord",
			  "onVoiceRecordEnd",
			  "uploadVoice"
			]
		});
		wx.ready(()=>{
			// 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
			 wx.onMenuShareAppMessage({
				 title: "中城金服", // 分享标题    
				 desc: "供应链金融服务平台，精准投融资对接、上市扶持", // 分享描述
				 link: "http://zhongcheng.demo.c3w.com.cn", // 分享链接
				 imgUrl: "http://zhongcheng.demo.c3w.com.cn/static/img/logo.jpg", // 分享图标
				 success: function () {
					 // 用户确认分享后执行的回调函数
					 uni.showToast({
						title:"分享成功",
						icon: 'success',
						success() {
						}
					 });
				 },
				 cancel: function () {
					 // 用户取消分享后执行的回调函数
				 }
			});
			//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
			 wx.onMenuShareTimeline({
				 desc: "中城金服——供应链金融服务平台，精准投融资对接、上市扶持", // 分享描述
				 link: "http://zhongcheng.demo.c3w.com.cn", // 分享链接
				 imgUrl:"http://zhongcheng.demo.c3w.com.cn/static/img/logo.jpg" , // 分享图标
				 success: function () {
					 // 用户确认分享后执行的回调函数
					uni.showToast({
						title:"分享成功",
						icon: 'success',
						success() {
						}
					});
				 },
				 cancel: function () {
					 // 用户取消分享后执行的回调函数
				 }
			});
		})
	}
})

const app = new Vue({
    ...App
})
app.$mount()
