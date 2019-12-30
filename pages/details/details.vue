<template>
	<view class="BP">
		<view class="head_fx"></view>
		<view class="">
			<view class="BP_hd_frist">
				<view class="">
					<image class="company_logo" :src="arr.logo" mode=""></image>
				</view>
				<view class="BP_hd_cont">
					 <view class="company_name">{{arr.title}}</view>
					 <view class="company-desc">康复类医疗器械生产销售商</view>
				</view>
			</view>
			<view class="BP_hd_last">
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">当前轮次及融资需求</view>
					<view class="BP_hd_last_item_js">{{arr.stage_name}}︱{{arr.capital_name}}</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item br">
					<view class="BP_hd_last_item_name">所属领域</view>
					<view class="BP_hd_last_item_js">{{arr.field_name}}</view>
				</view>
				<view class="gan"></view>
				<view class="BP_hd_last_item">
					<view class="BP_hd_last_item_name">所属地</view>
					<view class="BP_hd_last_item_js">{{arr.city}}</view>
				</view>
			</view>
		</view>
		<view class="projectBrief">
			<view class="find_title"><text class="shux"></text><text class="hd">项目简介：</text></view>
			<text class="projectBrief_text">
				{{arr.desc}}
			</text>
		</view>
		<view class="company">
			<view class="find_title"><text class="shux"></text><text class="hd">公司信息：</text></view>
			<view class="company_content">
				<view class="">
					<text class="company_title">公司全称：{{arr.company_name}}</text>
				</view>
				<view class="company_item">
					<text class="company_jan">公司简介：</text>
					<text class="company_nr">
						{{arr.company_desc}}
					</text>
				</view>
			</view>
		</view>
		<view class="financing">
			<view class="find_title"><text class="shux"></text><text class="hd">融资经历：</text></view>
			<view class="financing_content">
				<view class="financing_text">{{arr.financing}}</view>
			</view>
		</view>
		<view class="business">
			<view class="sy">
				<text class="shux"></text><text class="hd">商业计划书：</text>
				<text class="business_wj" @tap="down">{{arr.file_name}}</text>
			</view>
		</view>
		<!-- <view class="content">
			<chunLei-modal v-model="value" :mData="mData" :type="type" @onConfirm="onConfirm" @cancel="cancel" navMask>
			</chunLei-modal>
		 </view> -->
		<view class="models" v-if="showMod">
			<view class="info">请添加平台负责人 获取更多信息~</view>
			<view class="ewm">
				<image class="ewm" src="../../static/img/m1.png" mode=""></image>
			</view>
			<view class="email" @tap="gp">
				<view class="">电话/微信：13543250693</view>
				<view class="">邮箱：zhangc@unspace.cn</view>
			</view>
			<view @tap="hideMol" class="clones"><image src="../../static/img/clone.png" mode=""></image></view>
		</view>
		<view @tap="hideMol" v-if="showMod" class="yy"></view>
		<view class="button" @tap="showModel">下载BP</view>
	</view>
</template>

<script>
	import {bpItem,checkRegist,bpDownload} from "@/uilt/api.js"
	export default {
		components:{
		},
		data() {
			return {
				showMod:false,
				id:"",
				arr:[],
				type:"advert",
				value:false,
				mData:{src:'../../static/img/company_logo.png',width:'600upx',height:'350upx'},
			}
		},
		methods: {
			down(){
				// window.location.href =this.arr.file
			},
			hideMol(){
				this.showMod = false
			},
			showModel(){
				const token=uni.getStorageSync("token");
				checkRegist({token:token}).then(res=>{
					if(res.data.data != 1){
						uni.showModal({
							showCancel:false,
							title:"请先注册",
							success(res) {
								if(res.confirm){
									console.log(1)
									uni.navigateTo({
										url:"/pages/register/register"
									})
								}
							}
							
						})
					}else{
						this.showMod = true
						const token=uni.getStorageSync("token");
						bpDownload({token:token,bp_id:this.id}).then(res =>{
							console.log(res)
						})
					}
				})
			},
			onConfirm(){
				this.value = false
			},
			cancel(){
				this.value = false
			},
			gp(){
				uni.makePhoneCall({
					phoneNumber: '13543250693',
					success(res) {
						console.log(res)
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		},
		mounted() {
			bpItem({id:this.id}).then((res)=>{
				console.log(res.data.date)
				this.arr = res.data.date
			})
			
		},
		onLoad(id) {
			console.log(id)
			this.id = id.did;
		}
	}
</script>

<style scoped>
.BP{
	padding-bottom:250upx ;
}	
.BP_hd_frist{
	margin-bottom: 54upx;
}	
.company_name{
	width: auto;
}
.button{
	margin:68upx 0 300upx 0;
}
.company_logo{
	margin-top: 46upx;
}
.BP_hd_frist {
	justify-content: flex-start;
	margin-left: 30upx;
}
.company_nr{
	top: 0;
}
</style>
