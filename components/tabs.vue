<template>
	<view class="content">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in field" :key="index" class="nav-item" >
				<text :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item}}</text>
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
	import {bpItem} from "../uilt/api.js"
export default {
 	props:{
		field:{
			type:Array,
			default () {
				return []
			}
		}
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
		bpItem
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
	
</style>

