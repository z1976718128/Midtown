<template>
	<view class="content">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" >
				<text :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</text>
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			<view class="list_item" v-for="(or,index) in item.orderList" :key="index" @click="dilt(or.id)">
				<view>
					<text class="name">{{or.name}}</text>
					<text class="title">{{or.title}}</text>
				</view>
				<view class="">
					<text ><text class="pric">{{or.pric}}</text>万元以下</text>
					<text class="type"><text class="type_size">{{or.type}}</text></text>
				</view>
				<view class="list_item_last">
					<text class="time">{{or.time}}</text>
					<text class="ll">浏览量：{{or.ll}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	components: {
		
	},
	data() {
		return {
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部',
					orderList: [
						{
							id:1,
							name:"天使轮",
							title:"伟思医疗｜康复类医疗器械生产销售商",
							pric:500,
							type:"生物医药",
							time:"2019-12-23 16:18 ",
							ll:121
						},
						{
							id:2,
							name:"天使轮",
							title:"伟思医疗｜康复类医疗器械生产销售商",
							pric:500,
							type:"生物医药",
							time:"2019-12-23 16:18 ",
							ll:121
						},
						{
							id:3,
							name:"天使轮",
							title:"伟思医疗｜康复类医疗器械生产销售商",
							pric:500,
							type:"生物医药",
							time:"2019-12-23 16:18 ",
							ll:121
						},
						{
							id:4,
							name:"天使轮",
							title:"伟思医疗｜康复类医疗器械生产销售商",
							pric:500,
							type:"生物医药",
							time:"2019-12-23 16:18 ",
							ll:121
						},
					]
				},
				{
					state: 1,
					text: '生物医药',
					orderList: []
				},
				{
					state: 2,
					text: '电子信息',
					orderList: []
				},
			]
		};
	},
	mounted() {
		console.log(this.navList[0].orderList)
	},
	onLoad(options) {
		// 页面显示是默认选中第一个
		this.tabCurrentIndex = 0;
	},

	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		//顶部tab点击
		tabClick(index) {
			this.tabCurrentIndex = index;
		},
		dilt(id){
			uni.navigateTo({
				url:"/pages/details/details?did="+id
			})
		}
	}
};
</script>

<style scoped>
	.navbar{
		display: flex;
	}
	.navbar view{
		flex: 1;
		text-align: center;
	}
	.nav-item text{
		color: #999;
		font-size: 30upx;
	}
	.current{
		color: #444;
		font-weight:bold;
		border-bottom: 1upx solid #DEB156;
	}
	.list_item{
		border-top: 1upx solid #F1F1F1;
		margin:30upx;
	}
	.list_item view{
		width: 100%;
	}
	.name{
		width:91upx;
		background:rgba(254,243,220,1);
		border-radius:5upx;
		font-size:22upx;
		color:rgba(222,163,44,1);
	}
	.title{
		width:489upx;
		font-size:28upx;
		font-weight:bold;
		color:rgba(82,91,99,1);
		line-height:65upx;
		color: #525B63;
	}
	.pric{
		font-size:50upx;
		font-weight:bold;
		color:rgba(243,140,55,1);
	}
	.type{
		width:113upx;
		height:42upx;
		line-height: 42upx;
		background:rgba(255,243,235,1);
		border-radius:5upx;
	}
	.type_size{
		font-size:22upx;
		font-weight:400;
		color:rgba(255,156,130,1);
	}
	.time,.ll{
		font-size:20upx;
		font-weight:400;
		color:rgba(181,181,181,1);
	}
	.list_item_last{
		display: flex;
		justify-content:space-between;
	}
	.ll{
		
	}
</style>

