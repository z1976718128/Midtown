<template>
	<view>
		<view class="new" v-for="(item,index) in arr" :key="index" @click="gotoDetails(item.id)">
			<view class="content">
				<view class="new_deso">{{item.deso}}</view>
				<view class="new_time"><text>{{item.time}}</text><text class="fr">浏览量 : {{item.ll}}</text></view>
			</view>
			<view class="new_img">
				<image class="new_imgs" :src="item.img" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
						id: 1,
						img: "../../../static/img/logo.png",
						deso: "量身打造线下微路演，直面投资大咖， 获取创业真经 ",
						time: "2019-12-23 16:18",
						ll: 121
					},
					{
						id: 2,
						img: "../../../static/img/logo.png",
						deso: "量身打造线下微路演， 直面投资大咖， 获取创业真经 ",
						time: "2019-12-23 16:18",
						ll: 121
					},
					{
						id: 3,
						img: "../../../static/img/logo.png",
						deso: "量身打造线下微路演， 直面投资大咖， 获取创业真经 ",
						time: "2019-12-23 16:18",
						ll: 121
					},
					{
						id: 4,
						img: "../../../static/img/logo.png",
						deso: "量身打造线下微路演， 直面投资大咖， 获取创业真经 ",
						time: "2019-12-23 16:18",
						ll: 121
					},
					{
						id: 5,
						img: "../../../static/img/logo.png",
						deso: "量身打造线下微路演， 直面投资大咖， 获取创业真经 ",
						time: "2019-12-23 16:18",
						ll: 121
					},
				]
			};
		},
		methods: {
			gotoDetails(id) {
				uni.navigateTo({
					url: "/pages/newDetails/newDetails?id=" + id
				})
			}
		}
	}
</script>

<style scoped>
	.fr {
		float: right;
	}

	.new {
		display: flex;
		border-bottom: 1upx solid #F1F1F1;
		padding-bottom: 41upx;
		margin: 30upx;
	}

	.new_img {
		width: 246upx;
		height: 164upx;
		background: rgba(239, 239, 239, 1);
		border-radius: 10upx;
		margin-left: 27upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.new_imgs {
		width: 246upx;
		height: 164upx;

	}

	.new_deso {
		width:402upx;
		height:130upx;
		font-size:28upx;
		font-weight:bold;
		color:rgba(82,91,99,1);
		line-height:40upx;
	}

	.new_time {
		width:400upx;
		height:20upx;
		font-size:20upx;
		font-weight:400;
		color:rgba(181,181,181,1);
		line-height:26upx;
	}
</style>
