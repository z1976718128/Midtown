<template>
	<view>
		<view class="bans">
			<banner :banner-list="bannerList" :tabs="tabs" :swiper-config="swiperConfig"></banner>
			 <!-- <view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<view class="swiper-item uni-bg-red">A</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view> -->
		</view>
		
		<view class="newsiwper">
			<view class="xixun">喜讯</view>
			<text class="shux"></text>
			<view class="posi uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :autoplay="autoplay" :duration="duration" :vertical="vertical" :circular="circular">
							<swiper-item v-for="(item,index) in goods_news">
								<view class="swiper-item uni-bg-red">{{item.title}}</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>

		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in field" :key="index" class="nav-item">
				<text :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item}}</text>
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list_item" v-for="(or,index) in navList" :key="index" @click="dilt(or.id)">
			<view class="list_frist">
				<text class="name"><text>{{or.stage_name}}</text></text>
				<text class="title">{{or.title}}</text>
			</view>
			<view class="list_nth">
				<text ><text class="pric">{{or.capital_name}}</text><text class="wy"></text></text>
				<text class="type mr" v-for="(item,index) in or.field_name" :key="index">
					<text class="type_size " >{{item}}</text>
				</text>
			</view>
			<view class="list_item_last">
				<text class="time">{{or.add_time}}</text>
				<text class="ll">浏览量：{{or.volume_num}}</text>
			</view>
		</view>
		<view class="button" @tap="subP">提交BP</view>
		<view class="tost" v-if="show">
			{{loadingText}}
		</view>
	</view>
</template>

<script>
	let timer = null
	import {
		getData,
		bpIndex,
		checkRegist
	} from "../../../uilt/api.js"
	import banner from "../../../components/banner.vue"
	import tabs from "../../../components/tabs.vue"
	export default {
		components: {
			banner,
			tabs,
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500,
				show:false,
				oldArr:[],
				tempArr:[],
				loadingText: '上拉加载更多数据',
				tabCurrentIndex: 0,
				navList: [],
				page: 1,
				num:3,
				field: [],
				BP: [],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				tabs: [{
						name: '',
						asd: "111111"

					},
					{
						name: ''
					},
					{
						name: ''
					},
				],
				bannerList: [],
				goods_news: [],
				swiperConfig: {
					indicatorDots: true,
					indicatorColor: 'rgba(255, 255, 255, .4)',
					indicatorActiveColor: 'rgba(255, 255, 255, 1)',
					autoplay: false,
					interval: 3000,
					duration: 300,
					circular: true,
					previousMargin: '58rpx',
					nextMargin: '58rpx'
				},
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				vertical: true,
				circular: true
			}
		},
		mounted() {
			getData().then((res) => {
				this.bannerList = res.data.data.banner;
				this.goods_news = res.data.data.goods_news;
				this.field = res.data.data.field
				this.BP = res.data.data.bp
				console.log(this.BP)
			})
			// alert()
			let token2= localStorage.getItem("token");
			const token=uni.getStorageSync("token");
			// alert(token)
			this.getdatas()
		},
		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
		},
		onTabItemTap(){
			uni.navigateBack();  
		},	
		
		onReachBottom() {
			if(this.tempArr.length < this.num){
				this.show = true
				this.loadingText = '没有更多数据了'
				return
			}
			this.page++;
			this.getdatas(true)
		},
		methods: {
			subP(){
				const token=uni.getStorageSync("token");
				checkRegist({token:token}).then(res=>{
					console.log(res,13465)
					this.check = res.data.data
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
						uni.navigateTo({
							url:"/pages/submitBP/submitBP"
						})
					}
				})
			},
			getdatas(bool) {
				bpIndex({
					field_id: this.tabCurrentIndex,
					num: this.num,
					page: this.page
				}).then(rsp => {
					let datas= []
					datas = rsp.data.date
					this.tempArr = datas
					if(this.tempArr.length < this.num){
						this.loadingText = '没有更多数据了'
						return
					}
					if(bool){
						this.oldArr = JSON.parse(JSON.stringify(this.navList))
						this.oldArr.push(...datas)
						this.navList = this.oldArr
					}else{
						this.navList = datas
					}
				})
			},
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				bpIndex({
					field_id: index,
					num: 5,
					page: 1
				}).then(rsp => {
					this.navList = rsp.data.date;
					console.log(this.navList)
				})
			},
			dilt(id) {
				uni.navigateTo({
					url: "/pages/details/details?did=" + id
				})
			},
			getpull() {

			},
			change(val) {
				console.log(val, 8788)
				this.swiperCurrent = val;
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
			
		}
	
	}
</script>

<style scoped>
	.button {
		position: fixed;
		height: 72upx;
		line-height: 72upx;
		bottom:112upx;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 56;
		box-shadow:0upx 4upx 36upx 0px rgba(143,141,141,0.5);
		background: #E7B85A;
	}

	.newsiwper {
		display: flex;
		position: relative;
		width:700upx;
		height:90upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx 0upx 21upx 0upx rgba(141,139,139,0.1);
		border-radius:15upx;
		margin: 0 auto;
		overflow: hidden;
		line-height: 90upx;
	}
	.posi,.page-section{
		/* position: absolute; */
		width:550upx;
		height:80upx;
		margin-left:10upx;
	}
	.xixun{
		display: inline-block;
		/* width:59upx; */
		/* height:29upx; */
		font-size:35upx;
		font-weight:400;
		color:rgba(222,177,86,1);
		line-height:38upx;
		/* padding:29upx 29upx 32upx 38upx; */
		margin:13px 0 0  13px;
	}
	.shux{
		margin:13px 0 0  10px;
	}
	.swiper-item{
		font-size:28upx;
		font-weight:400;
		color:rgba(68,68,68,1);
		width:550upx ;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.navbar {
		display: flex;
	}
.list_frist{
	margin-top:6upx;
}
.list_nth{
		margin-top:0upx;
		margin-bottom: 20upx;
	}
	.navbar view {
		margin:0 50upx;
		text-align: center;
	}

	.nav-item text {
		color: #999;
		font-size: 30upx;
	}

	.current {
		color: #444 !important;
		font-size: 30upx;
		font-weight: bold;
		border-bottom: 8upx solid #DEB156;
		border-radius:2upx;
		padding-bottom: 10upx;
	}
	.navbar{
		border-top:13upx solid #F1F1F1;
		margin-top: 42upx;
		padding-top: 20upx;
	}
	.type{
		float: right;
	}
	.mr{
		margin-right:10upx;
	}
</style>
