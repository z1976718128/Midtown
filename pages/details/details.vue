<template>
	<view class="BP">
		<view class="BP_hd">
			<view class="BP_hd_frist">
				<view class="">
					<image class="company_logo" src="../../static/img/company_logo.png" mode=""></image>
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">伟思医疗</view>
					 <view class="company-desc">康复类医疗器械生产销售商</view>
				</view>
				<view class="">
					<text class="bule">审查中</text>
				</view>
			</view>
			<view class="BP_hd_last">
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">当前轮次及融资需求</view>
					<view class="BP_hd_last_item_js">天使轮︱500万元以下</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item br">
					<view class="BP_hd_last_item_name">所属领域</view>
					<view class="BP_hd_last_item_js">生物医药</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">所属地</view>
					<view class="BP_hd_last_item_js">深圳</view>
				</view>
			</view>
		</view>
		<view class="projectBrief">
			<view class="find_title"><text class="shux"></text><text class="hd">项目简介：</text></view>
			<text class="projectBrief_text">
				产销售商，集康复类医疗器械、配件及耗材的制造和销售为一体，同时致力于医疗电子产品的研发生产。以神经科、康复科、心身医学为主要发展领域，主要产品为产后康复系列产品、精神康复系列产品、神经康复系列产品、家庭健康系列。
			</text>
		</view>
		<view class="company">
			<view class="find_title"><text class="shux"></text><text class="hd">公司信息：</text></view>
			<view class="company_content">
				<view class="">
					<text class="company_title">公司全称：南京伟思医疗科技股份有限公司</text>
				</view>
				<view class="company_item">
					<text class="company_jan">公司简介：</text>
					<text class="company_nr">
						产销售商，集康复类医疗器械、配件及耗材的制造和销售为一体，同时致力于医疗电子产品的研发生产。以神经科、康复科、心身医学为主要发展领域，主要产品为产后康复系列产品、精神康复系列产品、神经康复系列产品、家庭健康系列。
					</text>
				</view>
			</view>
		</view>
		<view class="financing">
			<view class="find_title"><text class="shux"></text><text class="hd">融资经历：</text></view>
			<view class="financing_content">
				<view class="financing_text">2012年获东方富海资本投资200w元</view>
				<view class="financing_text">2012年获东方富海资本投资200w元</view>
			</view>
		</view>
		<view class="business">
			<view class="sy">
				<text class="shux"></text><text class="hd">商业计划书：</text>
				<text class="business_wj">康复类医疗器械生产.pdf</text>
			</view>
		</view>
		<view class="button">联系我们</view>
	</view>
</template>

<script>
	import {bpItem} from "../../uilt/api.js"
	export default {
		data() {
			return {
				id:""
			}
		},
		methods: {
			
		},
		mounted() {
			bpItem({id:this.id}).then((res)=>{
				console.log(res)
			})
		},
		onLoad(id) {
			console.log(id)
			this.id = id.did;
		}
	}
</script>

<style scoped>
</style>
