<template>
	<view  class="userP">
		<view class="user">
			<view class="user_img"><image :src="user.avatar" mode=""></image></view>
			<view class="">
				<view ><text class="user_name">{{user.nickname}}</text> <text  class="user_type">{{check==1?"已注册":"未注册"}}</text></view>
				<view class="user_id">ID:1254321</view>
				<navigator url="../../register/register">
					<view class="xg" v-if="check==1">修改<text>></text></view>
				</navigator>
			</view>
		</view>
		<view class="user_xm">
			<navigator url="/pages/project/project">
				<view class="user_xm_list">
					<view class="ic"><image class="icfon" src="../../../static/img/xm.png" mode=""></image></view>
					<view class="icont_text"><text class="shux"></text><text class="hd">我的项目</text></view>
				</view>
			</navigator>
			<view class="user_xm_list">
				<view class="ic"><image class="icfon" src="../../../static/img/gy.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">关于我们</text></view>
			</view>
			<view class="user_xm_list">
				<view class="ic"><image class="icfon" src="../../../static/img/lx.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">联系中城</text></view>
			</view>
			<view class="user_xm_list">
				<view class="ic"><image  class="icfon" src="../../../static/img/fx.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">邀请好友</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getUser,checkRegist} from "../../../uilt/api.js"
	export default {
		data() {
			return {
				user:[],
				check:[]
			}
		},
		mounted() {
			const token= localStorage.getItem("token");
			getUser({token:token}).then((res)=>{
				this.user = res.data.date
			})
			checkRegist({token:token}).then(res=>{
				console.log(res.data.data)
				this.check = res.data.data
				if(res.data.data != 1){
					uni.showModal({
						title:"请先注册",
						success(res) {
							if(res.confirm){
								console.log(1)
								uni.navigateTo({
									url:"/pages/register/register"
								})
							}else if(res.cancel){
								console.log(2)
							}
						}
						
					})
				}
			})
			
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
	position: relative;
}	
.user_img{
	width:100upx;
	height:100upx;
	background:rgba(255,249,240,1);
	border:2upx solid rgba(232,203,161,1);
	border-radius:50%;
	margin-right: 19upx;
}	
.user_img image{
	width:100upx;
	height:100upx;
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
.xg{
	font-size:26upx;
	font-weight:400;
	color:rgba(222,177,86,1);
	line-height:65upx;
	margin-right: 14upx;
	position: absolute;
	right:40upx;
	top: 33%;
}
.ic{
}
.icfon{
	width:100upx;
	height:50upx;
	margin:27upx 0 180upx 28upx;
}
.icont_text{
	margin-left: 29upx;
}
</style>
