<template>
	<view class="BP">
		<view class="head_fx"></view>
		<view class="">
			<view class="BP_hd_frist">
				<view class="company_logo_img">
					<image class="company_logo" :src="bpArr.logo" mode=""></image>
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">{{bpArr.title}}</view>
					 <view class="company-desc">{{bpArr.one_desc}}</view>
				</view>
				<view class="">
					<text v-if="bpArr.status === 0" class="bule">
						{{bpArr.status_name}}
					</text>
					<text v-if="bpArr.status === 1" class="green">
						{{bpArr.status_name}}
					</text>
					<text v-if="bpArr.status === 2" class="black">
						{{bpArr.status_name}}
					</text>
					<text v-if="bpArr.status === 3" class="black">
						{{bpArr.status_name}}
					</text>
					<text v-if="bpArr.status === 4" class="black">
						{{bpArr.status_name}}
					</text>
				</view>
			</view>
			<view class="BP_hd_last">
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">当前轮次及融资需求</view>
					<view class="BP_hd_last_item_js">{{bpArr.stage_name}}︱{{bpArr.capital_name}}</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item br">
					<view class="BP_hd_last_item_name">所属领域</view>
					<view class="BP_hd_last_item_js">{{bpArr.field_name}}</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">所属地</view>
					<view class="BP_hd_last_item_js">{{bpArr.address}}</view>
				</view>
			</view>
		</view>
		<view class="company">
			<view class="find_title"><text class="shux"></text><text class="hd">公司信息：</text></view>
			<view class="company_content">
				<view class="">
					<text class="company_title">公司全称：<text class="company_qc">{{bpArr.company_name}}</text></text>
				</view>
				<view class="company_item">
					<text class="company_jan">公司简介：</text>
					<text class="company_nr">
						{{bpArr.company_desc}}
					</text>
				</view>
			</view>
		</view>
		<view class="financing">
			<view class="find_title"><text class="shux"></text><text class="hd">融资经历：</text></view>
			<view class="financing_content">
				<view class="financing_text">{{bpArr.financing}}</view>
			</view>
		</view>
		<view class="business">
			<view class="sy">
				<text class="shux"></text><text class="hd">商业计划书：</text>
				<text class="business_wj" @tap="down">{{bpArr.file_name}}</text>
			</view>
		</view>
		<!-- <view class="button" @tap="back">返回</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uid:"",
				bpArr:[]
			}
		},
		onLoad(id) {
			this.uid = id.id;
		},
		mounted() {
			const token=uni.getStorageSync("token");
			let _than =this
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/bpInfo', //请求接口
				method:'get',
				data:{
					id:this.uid,
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
					this.bpArr = res.data.data
				}
				
			})
		},
		methods:{
			// back(){
			// 	uni.navigateBack()
			// },
			down(){
				uni.downloadFile({
				    url: this.bpArr.file, //仅为示例，并非真实的资源
				    success: function (res) {
				        if (res.statusCode === 200) {
				            console.log('下载成功');
				        }
				    }
				});
				window.location.href =this.bpArr.file
			},
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

<style scoped>
.bule,.green,.black{
	margin-top: 92upx;
}
.BP_hd_last{
	margin:0 30upx;
}
</style>
