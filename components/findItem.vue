<template>
	<view>
		<view class="new" v-for="(item,index) in getNewsArr" :key="index" @click="gotoDetails(item.id)">
			<view class="content">
				<view class="new_deso">{{item.title}}</view>
				<view class="new_time"><text>{{item.add_time}}</text><text class="fr">浏览量 : {{item.volume_num}}</text></view>
			</view>
			<view class="new_img">
				<image class="new_imgs" :src="item.img" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			getNewsArr:{
				type:Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
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
		border-radius: 10upx;

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
