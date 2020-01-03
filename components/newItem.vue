<template>
	<view>
		<view class="new" v-for="(item,index) in itenArr" :key="index" @click="gotoDetails(item.id)">
			<view class="new_img" >
				<!-- <image class="new_imgs"  :src="item.logo"></image> -->
				<image class="new_imgs"  :style="{backgroundImage:'url('+item.logo+')'}"></image>
			</view>
			<view class="content">
				<view class="new_title">{{item.company_name}}</view>
				<view class="new_deso">{{item.company_desc}}</view>
				<!-- <view class="new_time"><text>{{item.add_time}}</text><text class="fr">浏览量 : {{item.volume_num}}</text></view> -->
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
	border-bottom: 2upx solid #F1F1F1;
	padding-bottom:20upx;
	margin:20upx 30upx;
}	
.new_img{
	width:162upx;
	height:162upx;
	border-radius:10upx;
	margin-right: 27upx;
/* 	display: flex;
	justify-content: center;
	align-items: center; */
	object-fit: cover;
	
}
.new_imgs{
	width: 100%;  
	height: 100%;  
	object-fit:cover; 
	background-repeat: no-repeat;
	background-size: contain;
	border-radius:10upx;
	background-color:#fff ;
	/* transform: scale(.8); */
	/* background-position-x: 10upx; */
	vertical-align: middle;
	background-position:center;

}
.new_title{
	/* width:84upx; */
	height: 29upx;
	font-size:30upx;
	font-weight:bold;
	margin:6upx 0 0 0;
	color:rgba(82,91,99,1);
}
.new_deso{
	width:496upx;
	height:80upx;
	font-size:26.5upx;
	font-weight:400;
	color:rgba(94,94,94,1);
	margin:40upx 0 0 0;
	line-height:40upx;
	text-overflow: -o-ellipsis-lastline;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  line-clamp: 2;
	  -webkit-box-orient: vertical;
}
.new_time{
	width:495upx;
	height:20upx;
	font-size:25upx;
	font-weight:400;
	color:rgba(181,181,181,1);
	line-height:40upx;
}
</style>
