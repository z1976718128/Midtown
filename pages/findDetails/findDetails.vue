<template>
	<view class="pdr">
		<view class="head_fx"></view>
		<view class="findeta">
			<view class="findeta_num">
				<text>{{arr.add_time}}</text>
				<text>浏览量:{{arr.volume_num}}</text>
			</view>
			<view class="find_titles">
				<text class="find_titles_text">{{arr.title}}</text>
			</view>
			<view class="findeta_img">
				<image :src="arr.img" mode=""></image>
			</view>
			<view class="findeta_cont">
				<text v-html="arr.content">{{arr.content}}</text>
			</view>
			<!-- <view class="button" @tap="back">返回</view> -->
		</view>
	</view>
	
</template>


<script>
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
			uni.request({
				url: 'http://zc.demo.yudw.com/api/news/info', //请求接口
				method:'get',
				dataType:'json',
				data:{
					id:this.id
				},
				success: (res) => {
					this.arr = res.data.data
				}
			})
		},
		methods:{
			// back(){
			// 	uni.navigateBack()
			// },
		}
	}
</script>

<style scoped>
.pdr{
	padding-bottom: 100upx;
}
.findeta{
	margin:40upx 30upx;
}
.findeta_num{
	font-size:30upx;
	font-weight:400;
	color:rgba(181,181,181,1);
	display: flex;
	height: 40upx;
	justify-content: space-between;
}
.find_titles{
	height:69upx;
	line-height:40upx;
	margin:20upx 0 40upx 0;
}
.find_titles text{
	font-size:36upx;
	font-weight:bold;
	color:rgba(82,91,99,1);
}
.findeta_img{
	margin-bottom: 20upx;
}
.findeta_cont{
	width: 688upx;
	overflow: hidden;
	white-space:pre-wrap;
	font-size:30upx;
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
.head_fx{
	top: 80upx;
	margin-bottom: 30upx;
}
@media (min-width:750px) {
	.findeta_num{
		font-size: 20px;
	}
	.find_titles{
		font-size: 25px !important;
	}
	.findeta_img{
	}
	.findeta_cont text{
		font-size: 25px !important;
	}
	.head_fx{
		top: 45px;
		height:11px;
	}
	.findeta{
		margin:30px !important;
	}
	.findeta_img uni-image{
		width: 400px !important;
		height: 200px !important;
	}
	
}
</style>
