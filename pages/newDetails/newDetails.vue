<template>
	<view class="BP">
		<view class="BP_hd">
			<view class="BP_hd_frist">
				<view class="">
					<image class="company_logo" :src="detailsArr.logo" mode=""></image>
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">{{detailsArr.company_name}}</view>
					 <view class="company-desc"></view>
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
				<text>种子轮</text>
				<text>天使轮(14家，约1亿元)</text>
				<text>A轮(157家，约14亿元)</text>
			</view>
			<view class="find_title"><text class="shux"></text><text class="hd">投资领域：</text></view>
			<view class="field">
				<text>生物医药</text>
				<text>电子信息</text>
			</view>
			<view class="find_title"><text class="shux"></text><text class="hd">机构简介：</text></view>
			<text class="projectBrief_text">
				本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验。主要关注O2O、节能环保项目，要求体量大点的，中后期阶段为主；好的项目也可以做风投。欢迎有意者与我联系洽谈。
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
