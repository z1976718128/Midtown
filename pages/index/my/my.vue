<template>
	<view  class="userP">
		<view class="user">
			<view class="user_img"></view>
			<view class="">
				<view ><text class="user_name">听说~</text> <text class="user_type">未注册</text></view>
				<view class="user_id">ID:1254321</view>
			</view>
		</view>
		<view class="user_xm">
			<navigator url="/pages/project/project">
				<view class="user_xm_list">
					<view class=""></view>
					<view class="find_title"><text class="shux"></text><text class="hd">我的项目</text></view>
				</view>
			</navigator>
			<view class="user_xm_list">
				<view class=""></view>
				<view class="find_title"><text class="shux"></text><text class="hd">关于我们</text></view>
			</view>
			<view class="user_xm_list">
				<view class=""></view>
				<view class="find_title"><text class="shux"></text><text class="hd">联系中城</text></view>
			</view>
			<view class="user_xm_list">
				<view class=""></view>
				<view class="find_title"><text class="shux"></text><text class="hd">邀请好友</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>

.user{
	display: flex;
	align-items: center;
	height: 204upx;
	padding-left: 30upx;
	border-bottom:16upx solid #F1F1F1;
}	
.user_img{
	width:100upx;
	height:100upx;
	background:rgba(255,249,240,1);
	border:2upx solid rgba(232,203,161,1);
	border-radius:50%;
	margin-right: 19upx;
}	
.user_name{
	font-size:32upx;
	font-weight:400;
	color:rgba(58,58,58,1);
}
.user_id{
	font-size:26upx;
	font-weight:400;
	color:rgba(222,165,50,1);
	margin-top: 23upx;
}
.user_type{
	display: inline-block;
	width:130upx;
	height:36upx;
	background:rgba(198,198,198,1);
	border-radius:18upx;
	font-size:26upx;
	font-weight:400;
	color:rgba(255,255,255,1);
	text-align: center;
	margin-left: 32upx;
}
.user_xm{
	margin-top: 59upx;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

</style>
