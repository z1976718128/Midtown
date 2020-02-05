<template>
	<view class="BP">
		<view class="head_fx"></view>
		<view class="">
			<view class="BP_hd_frist">
				<view class="company_logo_img">
					<image class="company_logo"  :style="{backgroundImage:'url('+detailsArr.logo+')'}"></image>
					<!-- <image class="company_logo" :src="detailsArr.logo" mode=""></image> -->
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">{{detailsArr.company_name}}</view>
					 <view class="company-desc">{{detailsArr.city}}</view>
				</view>
			</view>
		</view>
		<view class="projectBrief">
			<view class="find_title"><text class="shux"></text><text class="hd">机构简介：</text></view>
			<text class="projectBrief_text">
					{{detailsArr.company_desc}}							
			</text>
		</view>
		<view class="find_title"><text class="shux"></text><text class="hd">投资偏好：</text></view>
		<text class="projectBrief_text">
			{{detailsArr.stage_desc}}
		</text>
		<!-- <view class="company">
			<view class="find_title"><text class="shux"></text><text class="hd">投资阶段：</text></view>
			<view class="Investment">
				<text>{{detailsArr.stage_name}}</text>
			</view>
			<view class="find_title"><text class="shux"></text><text class="hd">投资领域：</text></view>
			<view class="field">
				<text>{{detailsArr.field_name}}</text>
			</view>
			<view class="find_title"><text class="shux"></text><text class="hd">机构简介：</text></view>
			<text class="projectBrief_text">
				{{detailsArr.stage_desc}}
			</text>
		</view> -->
		 <view class="content">
		  </view>
		  <view class="models" v-if="showMod">
		  	<view class="info">请添加平台负责人 获取更多信息~</view>
		  	<view class="ewm">
		  		<image class="ewm" src="../../static/img/m1.png" mode=""></image>
		  	</view>
		  	<view class="email" @tap="gp">
		  		<view class="">电话/微信：13543250693</view>
		  		<view class="">邮箱：zhangc@unspace.cn</view>
		  	</view>
		  	<view @tap="hideMol" class="clones"><image src="../../static/img/clone.png" mode=""></image></view>
		  </view>
		  	<view @tap="hideMol" v-if="showMod" class="yy"></view>
		<view class="button" @tap="showModel">联系平台</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					showMod:false,
				type:"advert",
				value:false,
				mData:{src:'../../static/img/company_logo.png',width:'600upx',height:'350upx'},
				id:"",
				detailsArr:[],
			}
		},
		onLoad(id){
			this.id = id.id
		},
		mounted() {
			uni.request({
				url: 'http://zc.demo.yudw.com/api/investor/info', //请求接口
				method:'GET',
				data:{
					id:this.id
				},
				dataType:'json',
				success: (res) => {
					this.detailsArr = res.data.date
				}
			})
		},
		onBackPress(event){
			if(event.from == "backbutton" ||event.from == "navigateBack"){
				return false;
			}
			 this.back();  
			return true;  
		},
		methods: {
			back() {
				uni.reLaunch({
					url:"/pages/index/investment/investment"
				})
			}, 
			gp(){
				uni.makePhoneCall({
					phoneNumber: '13543250693',
					success(res) {
						console.log(res)
					},
					fail(res) {
						console.log(res)
					}
				})
			},
			hideMol(){
				this.showMod = false
			},
			showModel(){
				const token=uni.getStorageSync("token");
				let _than =this;
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
						console.log(res)
						if(res.data.data == 0){
							uni.showModal({
								showCancel:false,
								title:"请先注册",
								success(res) {
									if(res.confirm){
										console.log(1)
										uni.navigateTo({
											url:"/pages/register/register"
										})
									}
								}
								
							})
						}else{
							this.showMod = true
							const token=uni.getStorageSync("token");
							uni.request({
								url: 'http://zc.demo.yudw.com/api/bp/bpDownload', //请求接口
								method:'GET',
								data:{
									token:token,
									bp_id:this.id
								},
								dataType:'json',
								success: (res) => {
									console.log(res)
								}
							})
						}
					},
					fail:(res) =>{//请求失败后返回
						console.log(res);
					}
				})
			},
			onConfirm(){
				this.value = false
			},
			cancel(){
				this.value = false
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
		},
	
	}
</script>

<style scoped>
.BP{
	padding-bottom: 250upx;
}	
.BP_hd{
	height: auto;
}	
.company{
	border: none;
	margin-bottom:114upx ;
}	
.button{
	margin:68upx 0 160upx 0;
}
.BP_hd_frist{
	justify-content: flex-start;
	margin-left:30upx ;
}	
.company_logo_img {
	width: 149upx;
	height: 149upx;
    padding: 46upx 0 0upx 0;
	  
}
.company_logo{
	width: 149upx;
	height: 149upx;
	background-repeat: no-repeat;
	background-size: contain;
	vertical-align: middle;
	background-position:center;
	/* transform: scale(.8); */
	/* background-position-x: 10upx; */
}
.company_name {
    margin: 56upx 0 6upx 0;
}
/* @media (min-width:750px) {
	.projectBrief_text{
		width: 630px;
	}
	.button{
		width: 211px !important;
		height: 53px !important;
		font-size: 20px;
		line-height: 60px !important;
		margin-bottom: 0;
	}
	.company_logo{
		width: 150px;
	}
	.company_logo_img{
		padding: 0;
	}
	.company-desc{
		line-height: 0;
	}
	.company_name{
		 margin:50px 0 11px 0;
	}
	.models{
		top: -30% !important;
		left: 17% !important;
		transform: scale(.2);
	}
} */
</style>
