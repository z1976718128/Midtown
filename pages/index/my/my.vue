<template>
	<view  class="userP">
		<view class="user">
			<view class="user_img"><image :src="user.avatar" mode=""></image></view>
			<view class="">
				<view >
					<text class="user_name">{{user.nickname}}</text>
					<!-- <text v-if="check == 1"></text>
					<text v-else class="user_type">未注册</text> -->
				</view>
				<view class="user_id" v-if="check==1">{{user.phone}}</view>
				<view class="user_id" v-else>ID:{{user.id}}</view>
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
			<view class="user_xm_list" @tap="guanyu">
				<view class="ic"><image class="icfon" src="../../../static/img/gy.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">关于我们</text></view>
			</view>
			<view class="user_xm_list" @tap="lxzc">
				<view class="ic"><image class="icfon" src="../../../static/img/lx.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">联系中城</text></view>
			</view>
			<view class="user_xm_list" @tap="yaoqing">
				<view class="ic"><image  class="icfon" src="../../../static/img/fx.png" mode=""></image></view>
				<view class="icont_text"><text class="shux"></text><text class="hd">邀请好友</text></view>
			</view>
		</view>
		<view class="models" v-if="showMod">
			<view class="info">长按下方海报保存将海报分享给好友</view>
			<view class="haibao">
				<image class="haibao_img" src="../../../static/img/haibao.jpg" mode=""></image>
			</view>
			<view @tap="hideMol" class="clones"><image src="../../../static/img/clone.png" mode=""></image></view>
		</view>
		<view class="models" style="height: 583upx;" v-if="showMod2">
			<view class="info">请添加平台负责人 获取更多信息~</view>
			<view class="ewm">
				<image class="ewm" src="../../../static/img/m1.png" mode=""></image>
			</view>
			<view class="email" @tap="gp">
				<view class="">电话/微信：13543250693</view>
				<view class="">邮箱：zhangc@unspace.cn</view>
			</view>
			<view @tap="hideMol2" class="clones"><image src="../../../static/img/clone.png" mode=""></image></view>
		</view>
		<view @tap="hideMol" v-if="showMod" class="yy"></view>
		<view @tap="hideMol2" v-if="showMod2" class="yy"></view>
	</view>
</template>

<script>
	import {getUser,checkRegist} from "../../../uilt/api.js"
	export default {
		data() {
			return {
				user:[],
				check:[],
				showMod:false,
				showMod2:false
			}
		},
		onBackPress(event){
			console.log(event)
		},
		onLoad() {
			const token=uni.getStorageSync("token");
			checkRegist({token:token}).then(res=>{
				console.log(res)
				this.check = res.data.data
				if(res.data.data != 1){
					uni.navigateTo({
						url:"/pages/register/register"
					})
				}
			})
		},
		methods:{
			hideMol(){
				this.showMod = false
			},
			hideMol2(){
				this.showMod2 = false
			},
			yaoqing(){
				this.showMod = true
			},
			guanyu(){
				window.location.href= "https://mp.weixin.qq.com/s/-wqjwsU_q-ktkfOI_pQAhw"
			},
			lxzc(){
				this.showMod2 = true
			},
		},
		mounted() {
			const token=uni.getStorageSync("token");
			getUser({token:token}).then((res)=>{
				console.log(res)
				this.user = res.data.date
			})
			// checkRegist({token:token}).then(res=>{
			// 	console.log(res)
			// 	this.check = res.data.data
			// 	if(res.data.data != 1){
			// 		uni.showModal({
			// 			showCancel:false,
			// 			title:"请先注册",
			// 			success(res) {
			// 				if(res.confirm){
			// 					console.log(1)
			// 					uni.navigateTo({
			// 						url:"/pages/register/register"
			// 					})
			// 				}
			// 			}
						
			// 		})
			// 	}
			// })
			
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
	margin-top: 30upx;
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
	margin:27upx 0 160upx 0upx;
}
.icont_text{
	margin-left: 29upx;
}
.models{
	width:486upx;
	height:728upx;
	border-radius:10upx;
	top: 40%;
}
.haibao{
	text-align: center;
}
.haibao_img{
	width:409upx;
	height:546upx;
}
</style>
