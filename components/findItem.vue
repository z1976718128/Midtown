<template>
	<view>
		<view class="new" v-for="(item,index) in itenArr" :key="index" @click="gotoDetails(item)">
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
			itenArr:{
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
			gotoDetails(item) {
				console.log(item)
				if(item.href == ""){
					uni.redirectTo({
						url: "/pages/findDetails/findDetails?id=" +item.id
					})
				}else{
					// window.location.href=item.href
					// window.parent.frames.location.href = item.href;
					window.open(item.href,"_blank")
					// window.location.replace(item.href)
					console.log(item.href)
					uni.request({
						url:'http://zc.demo.yudw.com/api/news/newInc', //请求接口
						method:'GET',
						data:{
							id:item.id
						},
						dataType:'json',
						success: (res) => {
							console.log(res)
						},
						fail:(res) =>{//请求失败后返回
							console.log(res);
						}
					})
				}
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
		border-bottom: 2upx solid #F1F1F1;
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
		height:80upx;
		font-size:30upx;
		font-weight:bold;
		color:rgba(82,91,99,1);
		line-height:40upx;
		text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
		  margin-bottom: 50upx;
	}

	.new_time {
		width:400upx;
		height:30upx;
		font-size:25upx;
		font-weight:400;
		color:rgba(181,181,181,1);
		line-height:30upx;
	}
</style>
