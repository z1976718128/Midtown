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
			</view>
		</view>
		<view class="projectBrief">
			<view class="find_title"><text class="shux"></text><text class="hd">机构简介：</text></view>
			<text class="projectBrief_text">
				深圳市东方富海投资管理股份有限公司（简称OFC或东方富海）是由数位在中国创业投资领域从业时间长、有丰富实战经验、优秀投资业绩、在业内有较大影响力的专业人士发起设立的专业性创业投资管理公司。
				东方富海致力于投资具有成长性和上市潜力的目标公司，并积极为被投资企业提供增值服务，提高企业的盈利能力，努力帮助企业通过 IPO上市等方式实现企业价值最大化，为投资人带来满意的资本增值回报。我们衷心期待成为您的诚挚朋友、可靠伙伴。
				东方富海成立于2006年，累计管理基金规模近80亿元人民币。目前已投资项目超过100个，10个项目成功上市。投资领域：信息技术、健康医疗、消费品、新能源新材料。
				                            
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
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(id){
			console.log(id)
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
