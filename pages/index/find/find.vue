<template>
	<view>
		<view class="find_title"><text class="shux"></text><text class="hd">热门活动</text></view>
		<banner :banner-list="bannerList" :swiper-config="swiperConfig"></banner>
		<view class="find_title"><text class="shux"></text><text class="hd">新闻资讯</text></view>
		<findItem :getNewsArr="getNewsArr"></findItem>
	</view>
</template>

<script>
	import {findList,getNews} from "../../../uilt/api.js"
	import banner from "../../../components/banner.vue"
	import findItem from "../../../components/findItem.vue"
	export default {
		components:{
			banner,
			findItem
		},
		data() {
			return {
				bannerList: [],
				getNewsArr:[],
				swiperConfig: {
				    indicatorDots: true,
				    indicatorColor: 'rgba(255, 255, 255, .4)',
				    indicatorActiveColor: 'rgba(255, 255, 255, 1)',
				    autoplay: false,
				    interval: 3000,
				    duration: 300,
				    circular: true,
				    previousMargin: '58rpx',
				    nextMargin: '58rpx'
				},
			}
		},
		mounted() {
			findList().then((res)=>{
				this.bannerList = res.data.data
			})
			getNews().then((res)=>{
				console.log(res)
				this.getNewsArr = res.data.data
			})
		}
	}
</script>

<style scoped>
.find_title{
	margin:35upx 30upx 49upx;
}	
.shux{
	display: inline-block;
	width:6upx;
	height:35upx;
	background:rgba(222,177,86,1);
	border-radius:3upx;
	margin-right: 17upx;
	vertical-align: middle;
}
.hd{
	font-size:32upx;
	font-weight:bold;
	color:rgba(70,79,87,1);
}
</style>
