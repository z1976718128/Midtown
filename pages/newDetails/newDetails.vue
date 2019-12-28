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
		<view class="company">
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
		</view>
		<view class="button">联系我们</view>
	</view>
</template>

<script>
	import {investorInfo} from "../../uilt/api.js"
	export default {
		data() {
			return {
				id:"",
				detailsArr:[]
			}
		},
		methods: {
			
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
.BP_hd{
	height: auto;
}	
.company{
	border: none;
	margin-bottom:114upx ;
}	

</style>
