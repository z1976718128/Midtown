<template>
	<view class="findeta">
		<view class="findeta_num">
			<text></text>
			<text>浏览量:{{arr.volume_num}}</text>
		</view>
		<view class="find_titles">
			<text>{{arr.title}}</text>
		</view>
		<view class="findeta_img">
			<image :src="arr.img" mode=""></image>
		</view>
		<view class="findeta_cont">
			<text>{{arr.content}}</text>
		</view>
		<view class="button" @tap="back">返回</view>
	</view>
</template>

<script>
	import {newsInfo} from "@/uilt/api.js"
	export default {
		data() {
			return {
				id:"",
				arr:[]
			}
		},
		onLoad(id) {
			this.id = id.id
		},
		mounted() {
			newsInfo({id:this.id}).then(res=>{
				console.log(res)
				this.arr = res.data.data
			})
		},
		methods:{
			back(){
				uni.navigateBack()
			},
		}
	}
</script>

<style scoped>
.findeta{
	margin:30upx;
}
.findeta_num{
	height:20upx;
	font-size:20upx;
	font-weight:400;
	color:rgba(181,181,181,1);
	line-height:26upx;
}
.find_titles{
	height:69upx;
	font-size:28upx;
	font-weight:bold;
	color:rgba(82,91,99,1);
	line-height:40upx;
	margin:57upx 0 61upx 0;
}
.findeta_cont{
	font-size:26upx;
	font-weight:400;
	color:rgba(71,71,71,1);
	line-height:50upx;
}
.button{
	margin-top:50upx ;
}
.findeta_img image{
	width:688upx;
	height:410upx;
	border-radius:10upx;
}
</style>
