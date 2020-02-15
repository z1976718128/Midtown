<template>
	<view class="BP">
		<view class="head_fx"></view>
		<view class="">
			<view class="BP_hd_frist">
				<view class=""><image class="company_logo" :src="arr.logo" mode=""></image></view>
				<view class="BP_hd_cont">
					<view class="company_name">{{ arr.title }}</view>
					<view class="company-desc">康复类医疗器械生产销售商</view>
				</view>
			</view>
			<view class="BP_hd_last">
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">当前轮次及融资需求</view>
					<view class="BP_hd_last_item_js">{{ arr.stage_name }}︱{{ arr.capital_name }}</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item br">
					<view class="BP_hd_last_item_name">所属领域</view>
					<view class="BP_hd_last_item_js"  v-for="(item,index) in arr.field_name"  :key="index">
							{{item}}
					</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">所属地</view>
					<view class="BP_hd_last_item_js">{{ arr.city }}</view>
				</view>
			</view>
		</view>
		<view class="projectBrief">
			<view class="find_title">
				<text class="shux"></text>
				<text class="hd">项目简介：</text>
			</view>
			<text class="projectBrief_text">{{ arr.desc }}</text>
		</view>
		<view class="company">
			<view class="find_title">
				<text class="shux"></text>
				<text class="hd">公司信息：</text>
			</view>
			<view class="company_content">
				<view class="">
					<text class="company_title">公司全称：{{ arr.company_name }}</text>
				</view>
				<view class="company_item">
					<text class="company_jan">公司简介：</text>
					<text class="company_nr">{{ arr.company_desc }}</text>
				</view>
			</view>
		</view>
		<view class="financing">
			<view class="find_title">
				<text class="shux"></text>
				<text class="hd">融资经历：</text>
			</view>
			<view class="financing_content">
				<view class="financing_text">{{ arr.financing }}</view>
			</view>
		</view>
		<view class="business">
			<view class="sy">
				<text class="shux"></text>
				<text class="hd">商业计划书：</text>
				<text class="business_wj" @tap="down">{{ arr.file_name }}</text>
			</view>
		</view>
		<!-- <view class="content">
			<chunLei-modal v-model="value" :mData="mData" :type="type" @onConfirm="onConfirm" @cancel="cancel" navMask>
			</chunLei-modal>
		 </view> -->
		<view class="models" v-if="showMod">
			<view class="info">请添加平台负责人 获取更多信息~</view>
			<view class="ewm"><image class="ewm" src="../../static/img/m1.png" mode=""></image></view>
			<view class="email" @tap="gp">
				<view class="">电话/微信：13543250693</view>
				<view class="">邮箱：zhangc@unspace.cn</view>
			</view>
			<view @tap="hideMol" class="clones"><image src="../../static/img/clone.png" mode=""></image></view>
		</view>
		<view @tap="hideMol" v-if="showMod" class="yy"></view>
		<view class="button" @tap="showModel">下载BP</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			showMod: false,
			id: '',
			arr: [],
			type: 'advert',
			value: false,
			mData: { src: '../../static/img/company_logo.png', width: '600upx', height: '350upx' }
		};
	},
	onLoad(id) {
		this.id = id.did;
	},
	mounted() {
		uni.request({
			url: 'http://zc.demo.yudw.com/api/bp/info', //请求接口
			method: 'get',
			data: {
				id: this.id
			},
			dataType: 'json',
			success: res => {
				console.log(res)
				this.arr = res.data.date;
			}
		});
	},
	onBackPress(event) {
		if (event.from == 'backbutton' || event.from == 'navigateBack') {
			return false;
		}
		this.back();
		return true;
	},
	methods: {
		back() {
			uni.reLaunch({
				url: '/pages/index/home/home'
			});
		},
		down() {
			// window.location.href =this.arr.file
		},
		hideMol() {
			this.showMod = false;
		},
		showModel() {
			const token = uni.getStorageSync('token');
			let _than = this;
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/checkRegist', //请求接口
				method: 'GET',
				data: {
					token: token
				},
				dataType: 'json',
				success: res => {
					console.log(res);
					if (res.data.status == 403) {
						let url = window.location.href;
						if (window.location.href.indexOf('code') == 0 || window.location.href.indexOf('code') <= 0) {
							uni.request({
								url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
								method: 'get',
								data: {
									baseUrl: url
								},
								dataType: 'json',
								success: res => {
									console.log(res);
									_than.hr = res.data.data;
									window.location.href = res.data.data;
								}
							});
						} else {
							//如果有带code
							let code = this.getQueryString('code');
							uni.request({
								url: 'http://zc.demo.yudw.com/api/login/login', //登录
								method: 'get',
								data: {
									code: code
								},
								dataType: 'json',
								success: res => {
									console.log(res, 7897894566);
									if (res.data.status == 1) {
										console.log('登录成功');
										console.log('token:', res.data.data.token);
										uni.setStorageSync('token', res.data.data.token);
									}
								},
								fail: res => {
									//请求失败后返回
									console.log(res);
								}
							});
						}
					}
					if (res.data.data == 0) {
						uni.showModal({
							showCancel: false,
							title: '请先注册',
							success(res) {
								if (res.confirm) {
									console.log(1);
									uni.navigateTo({
										url: '/pages/register/register'
									});
								}
							}
						});
					} else {
						this.showMod = true;
						const token = uni.getStorageSync('token');
						let _than = this;
						uni.request({
							url: 'http://zc.demo.yudw.com/api/bp/bpDownload', //请求接口
							method: 'GET',
							data: {
								token: token,
								bp_id: this.id
							},
							dataType: 'json',
							success: res => {
								if (res.data.status == 403) {
									let url = window.location.href;
									if (window.location.href.indexOf('code') == 0 || window.location.href.indexOf('code') <= 0) {
										uni.request({
											url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
											method: 'get',
											data: {
												baseUrl: url
											},
											dataType: 'json',
											success: res => {
												console.log(res);
												_than.hr = res.data.data;
												window.location.href = res.data.data;
											}
										});
									} else {
										//如果有带code
										let code = this.getQueryString('code');
										uni.request({
											url: 'http://zc.demo.yudw.com/api/login/login', //登录
											method: 'get',
											data: {
												code: code
											},
											dataType: 'json',
											success: res => {
												console.log(res, 7897894566);
												if (res.data.status == 1) {
													console.log('登录成功');
													console.log('token:', res.data.data.token);
													uni.setStorageSync('token', res.data.data.token);
												}
											},
											fail: res => {
												//请求失败后返回
												console.log(res);
											}
										});
									}
								}
								console.log(res);
							}
						});
					}
				},
				fail: res => {
					//请求失败后返回
					console.log(res);
				}
			});
		},
		onConfirm() {
			this.value = false;
		},
		cancel() {
			this.value = false;
		},
		gp() {
			uni.makePhoneCall({
				phoneNumber: '13543250693',
				success(res) {
					console.log(res);
				},
				fail(res) {
					console.log(res);
				}
			});
		},
		getQueryString(name) {
			let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
			let r = window.location.search.substr(1).match(reg);
			if (r != null) {
				return unescape(r[2]);
			} else {
				return null;
			}
		}
	}
};
</script>

<style scoped>
.BP {
	padding-bottom: 250upx;
}
.BP_hd_frist {
	margin-bottom: 54upx;
}
.company_name {
	width: auto;
}
.button {
	margin: 68upx 0 300upx 0;
}
.company_logo {
	margin-top: 46upx;
}
.BP_hd_frist {
	justify-content: flex-start;
	margin-left: 30upx;
}
.company_nr {
	top: 0;
}
/* @media (min-width:750px) {
	.company_name{
		font-size: 25px;
	}
	.company-desc{
		font-size: 20px;
	}
	.BP_hd_last_item_name{
		font-size: 20px;
	}
	.BP_hd_last_item_js{
		font-size: 18px;
	}
	.gan{
		height: 80px;
	}
	.projectBrief_text,.company_title,.company_jan,.company_nr,.financing_text,.business_wj{
		font-size: 22px;
	}
	.business_wj{
		margin-left:300px;
	}
	.company_logo{
		width: 150px;
		height: 150px;
	}
	.company-desc{
		line-height:inherit !important;
	}
	.company_name{
		    margin: 70px 0 0px 0;
	}
	.button{
		width: 211px !important; 
		 height: 53px !important; 
		 font-size: 20px; 
		line-height: 60px !important; 
		margin-bottom:0 ;
	}
	.company_nr{
		width: 600px;
	}
	.models{
		top: -30% !important;
		left: 17% !important;
		transform: scale(.2);
	}
} */
 @media (min-width:750px) {
	 .find_title{
	 	margin-top: -35px;
	 	height: 20px;
	 }
	 .company_nr{
	     top: -22px;
	 }
	 .financing_text:first-child{
	 	margin-top: 52px;
	 }
 }
</style>
