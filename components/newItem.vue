<template>
	<view>
		<view class="new" v-for="(item,index) in itenArr" :key="index" @click="gotoDetails(item.id)">
			<view class="new_img">
				<image class="new_imgs" :src="item.logo" mode=""></image>
			</view>
			<view class="content">
				<view class="new_title">{{item.company_name}}</view>
				<view class="new_deso">{{item.company_desc}}</view>
				<view class="new_time"><text>{{item.add_time}}</text><text class="fr">浏览量 : {{item.volume_num}}</text></view>
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
			}
		},
		methods:{
			gotoDetails(id){
				uni.navigateTo({
					url:"/pages/newDetails/newDetails?id="+id
				})
			}
		},
		
	}
</script>

<style scoped>
.fr{
	float: right;
}	
.new{
	display: flex;
	border-bottom: 1upx solid #F1F1F1;
	padding-bottom: 41upx;
	margin:30upx;
}	
.new_img{
	width:162upx;
	height:162upx;
	background:rgba(239,239,239,1);
	border-radius:10upx;
	margin-right: 27upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.new_imgs{
	width:95upx;
	height:95upx;
	
}
.new_title{
	/* width:84upx; */
	font-size:28upx;
	font-weight:bold;
	color:rgba(82,91,99,1);
}
.new_deso{
	width:496upx;
	height:56upx;
	font-size:22upx;
	font-weight:400;
	color:rgba(94,94,94,1);
	line-height:34upx;
	margin:26upx 0;
}
.new_time{
	width:495upx;
	height:20upx;
	font-size:20upx;
	font-weight:400;
	color:rgba(181,181,181,1);
	line-height:26upx;
}

</style>
