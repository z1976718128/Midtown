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
			<chunLei-modal v-model="value" :mData="mData" :type="type" @onConfirm="onConfirm" @cancel="cancel" navMask>
			</chunLei-modal>
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
	import {investorInfo,checkRegist} from "../../uilt/api.js"
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
		methods: {
			hideMol(){
				this.showMod = false
			},
			showModel(){
				const token=uni.getStorageSync("token");
				checkRegist({token:token}).then(res=>{
					if(res.data.data != 1){
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
						bpDownload({token:token,bp_id:this.id}).then(res =>{
							console.log(res)
						})
					}
				})
			},
			onConfirm(){
				this.value = false
			},
			cancel(){
				this.value = false
			}
		},
		onLoad(id){
			this.id = id.id
		},
		mounted() {
			investorInfo({id:this.id}).then((res)=>{
				console.log(res,111)
				this.detailsArr = res.data.date
			})
		}
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
	/* transform: scale(.8); */
	/* background-position-x: 10upx; */
}
.company_name {
    margin: 56upx 0 6upx 0;
}

</style>
