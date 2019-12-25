<template>
	<view>
		<banner :banner-list="bannerList" :tabs="tabs" :swiper-config="swiperConfig"></banner>
		<view class="newsiwper">
			<view class="">喜讯</view>
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper"  :autoplay="autoplay"  :duration="duration" :vertical="vertical" :circular="circular">
							<swiper-item>
								<view class="swiper-item uni-bg-red">云帐房完成8500万美元A轮融资</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">云帐房完成9500万美元B轮融资</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">云帐房完成1500万美元C轮融资</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
	
		<tabs
		ref="tabs"
		:tabs="tabs" 
		animationMode="line3" 
		:current="current" 
		@change="change"
		activeColor="#adadad"
		lineColor="#f1505c"
		swiperWidth="750">
		</tabs>
		
		<navigator url="../../submitBP/submitBP" open-type="navigate"> 	
			<botton class="sbmit">提交BP</botton>
		</navigator>
	</view>
</template>

<script>
	import banner from "../../../components/banner.vue"
	import tabs from "../../../components/tabs.vue"
	export default {
		components:{
			banner,
			tabs,
		},
		data() {
		    return {
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				tabs:[
					{
						name:'全部',
						asd:"111111"
						
					},
					{
						name:'生物医药'
					},
					{
						name:'电子信息'
					},
				],
		        bannerList: [{
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
		            path: ''
		        }],
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
				vertical:true,
				circular:true
		    }
		},
		methods: {
			change(val){
				this.swiperCurrent = val;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({detail: { current }}) {
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

<style>
.sbmit{
	display: block;
	width: 10rem;
	height: 2rem;
	line-height: 2rem;
	text-align: center;
	position: fixed;
	bottom: 4rem;
	left: 50%;
	transform: translateX(-50%);
	background:orange;
	border-radius: 1rem;
	color: #fff;
}
.newsiwper{
	/* display: flex; */
}
</style>
