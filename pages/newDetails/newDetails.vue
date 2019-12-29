<template>
	<view class="BP">
		<view class="BP_hd">
			<view class="BP_hd_frist">
				<view class="company_logo_img">
					<image class="company_logo" :src="detailsArr.logo" mode=""></image>
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
		<view class="button" @tap="showModel">联系平台</view>
	</view>
</template>

<script>
	import {investorInfo,checkRegist} from "../../uilt/api.js"
	export default {
		data() {
			return {
				type:"advert",
				value:false,
				mData:{src:'../../static/img/company_logo.png',width:'600upx',height:'350upx'},
				id:"",
				detailsArr:[],
			}
		},
		methods: {
			showModel(){
				console.log(111)
				this.value = true
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
			const token=uni.getStorageSync("token");
			checkRegist({token:token}).then(res=>{
				console.log(res.data.data)
				this.check = res.data.data
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
				}
			})
		}
	}
</script>

<style scoped>
.BP_hd{
	height: auto;
}	
.company{
	border: none;
	margin-bottom:114upx ;
}	
</style>
