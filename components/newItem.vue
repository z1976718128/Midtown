<template>
	<view>
		<view class="new" v-for="(item,index) in arr" :key="index" @click="gotoDetails(item.id)">
			<view class="new_img">
				<image class="new_imgs" :src="item.img" mode=""></image>
			</view>
			<view class="content">
				<view class="new_title">{{item.title}}</view>
				<view class="new_deso">{{item.deso}}</view>
				<view class="new_time"><text>{{item.time}}</text><text class="fr">浏览量 : {{item.ll}}</text></view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
					{
						id:1,
						img:"../../../static/img/logo.png",
						title:"极空间",
						deso:"本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验",
						time:"2019-12-23 16:18",
						ll:121
					},
					{
						id:2,
						img:"../../../static/img/logo.png",
						title:"极空间",
						deso:"本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验",
						time:"2019-12-23 16:18",
						ll:121
					},
					{
						id:3,
						img:"../../../static/img/logo.png",
						title:"极空间",
						deso:"本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验",
						time:"2019-12-23 16:18",
						ll:121
					},
					{
						id:4,
						img:"../../../static/img/logo.png",
						title:"极空间",
						deso:"本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验",
						time:"2019-12-23 16:18",
						ll:121
					},
					{
						id:5,
						img:"../../../static/img/logo.png",
						title:"极空间",
						deso:"本公司成立于2013年，核心投研团队拥有超过10年的资本市场投资管理经验",
						time:"2019-12-23 16:18",
						ll:121
					},
				]
			};
		},
		methods:{
			gotoDetails(id){
				uni.navigateTo({
					url:"/pages/newDetails/newDetails?id="+id
				})
			}
		}
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
	width:84upx;
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
