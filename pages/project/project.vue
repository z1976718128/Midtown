<template>
	<view>
		<view class="head_fx"></view>
		<projectItem :projectArr="projectArr"></projectItem>
	</view>
</template>

<script>
	import projectItem from "@/components/projectItem.vue"
	export default {
		components:{
			projectItem
		},
		data() {
			return {
				projectArr:[]
			}
		},
		mounted() {
			const token=uni.getStorageSync("token");
			let _than = this;
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/getUserBp', //请求接口
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
					this.projectArr = res.data.date
				}
			})
		},
		methods:{
			getQueryString(name) {
				let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null;
				}
			},
		}
	}
</script>

