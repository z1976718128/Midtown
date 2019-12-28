<template>
	<view class="BP">
		<view class="BP_hd">
			<view class="BP_hd_frist">
				<view class="">
					<image class="company_logo" :src="bpArr.logo" mode=""></image>
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">{{bpArr.title}}</view>
					 <view class="company-desc">{{bpArr.company_desc}}</view>
				</view>
				<view class="">
					<text class="bule">{{bpArr.status_name}}</text>
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
					<text class="company_title">公司全称：{{bpArr.company_name}}</text>
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
				<view class="financing_text">2012年获东方富海资本投资200w元</view>
			</view>
		</view>
		<view class="business">
			<view class="sy">
				<text class="shux"></text><text class="hd">商业计划书：</text>
				<text class="business_wj">康复类医疗器械生产.pdf</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {bpInfos} from "../../uilt/api.js"
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
			const token = localStorage.getItem("token");
			bpInfos({id:this.uid,token}).then((res)=>{
				console.log(res)
				this.bpArr = res.data.data
			})
		}
	}
</script>

<style scoped>

</style>
