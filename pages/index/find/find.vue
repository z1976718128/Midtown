<template>
	<view>
		<view class="find_title"><text class="shux"></text><text class="hd">热门活动</text></view>
		<view class="bans" >
			<banner :banner-list="bannerList"  :swiper-config="swiperConfig"></banner>
		</view>
		<view class="br">
			<view class="find_title "><text class="shux"></text><text class="hd">新闻资讯</text></view>
			<findItem :itenArr="itenArr"></findItem>
			<view class="tost">
				{{loadingText}}
			</view>
		</view>
	</view>
</template>

<script>
	import banner from "@/components/banner.vue"
	import findItem from "@/components/findItem.vue"
	export default {
		components:{
			banner,
			findItem,
		},
		data() {
			return {
				list: [],
				bannerList: [],
				swiperConfig: {
					indicatorDots: true,
					indicatorColor: 'rgba(255, 255, 255, .4)',
					indicatorActiveColor: 'rgba(255, 255, 255, 1)',
					autoplay: true,
					interval: 3000,
					duration: 300,
					circular: true,
					previousMargin: '58rpx',
					nextMargin: '58rpx'
				},
		
				itenArr:[],
				page:1,
				num:2,
				loadingText:'上拉加载更多数据',
				oldArr:[],
				tempArr:[],
				
			}
		},
		onShow() {
			uni.request({
				url: 'http://zc.demo.yudw.com/api/news/index', //请求接口
				method:'GET',
				dataType:'json',
				success: (res) => {
					console.log(res,"活动")
					this.bannerList = res.data.data
				},
				fail:(res) =>{//请求失败后返回
					console.log(res);
				}
			})
			
			this.getnewList()
		},
		
		onReachBottom() {
			if(this.tempArr.length < this.num){
				this.loadingText = '没有更多数据了'
				return
			}
			this.page++;
			this.getnewList(true)
		},
		methods:{
			getnewList(bool){
				let datas= []
				uni.request({
					url: 'http://zc.demo.yudw.com/api/news/getNews', //请求接口
					method:'get',
					data:{
						page:this.page,
						num:this.num
					},
					dataType:'json',
					success: (res) => {
						console.log(res,"新闻")
						datas = res.data.data
						this.tempArr = datas
						if(this.tempArr.length < this.num){
							this.loadingText = '没有更多数据了'
							return
						}
						if(bool){
							this.oldArr = JSON.parse(JSON.stringify(this.itenArr))
							this.oldArr.push(...datas)
							this.itenArr = this.oldArr
						}else{
							this.itenArr = datas
						}
					},
					fail:(res) =>{//请求失败后返回
						console.log(res);
					}
				})
				
			}
		},
		
		  
	}
</script>

<style>
	.br{
		border-top: 13upx solid #F1F1F1;
	}
.find_title{
	margin:35upx 30upx 0upx;
}	
.shux{
	display: inline-block;
	width:6upx;
	height:35upx;
	background:rgba(222,177,86,1);
	border-radius:3upx;
	margin-right: 17upx;
	vertical-align: middle;
}
.hd{
	font-size:34upx;
	font-weight:bold;
	color:rgba(70,79,87,1);
}
.fr {
		float: right;
	}

	.new {
		display: flex;
		border-bottom: 1upx solid #F1F1F1;
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
		height:130upx;
		font-size:28upx;
		font-weight:bold;
		color:rgba(82,91,99,1);
		line-height:40upx;
	}

	.new_time {
		width:400upx;
		height:20upx;
		font-size:20upx;
		font-weight:400;
		color:rgba(181,181,181,1);
		line-height:26upx;
	}
	@media (min-width: 750px) {
		.new_deso{
			width:400px !important ;
		}
		.new_time{
			width: auto !important;
		}
		.new_imgs{
			width: 245px;
			height: 163px;
		}
		.shux{
			vertical-align: initial;
		}
	}
</style>
