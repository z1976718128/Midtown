<template>
	<view>
		<view class="list_item" v-for="(or,index) in orderList" :key="index" @click="dilt(or.id)">
			<view>
				<text class="name">{{or.name}}</text>
				<text class="title">{{or.title}}</text>
			</view>
			<view class="">
				<text ><text class="pric">{{or.pric}}</text>万元以下</text>
				<text class="type">
					<text class="type_size">{{or.type}}</text>
				</text>
				<text v-if="or.status === 1" class="bule">
					{{or.status_name}}
				</text>
				<text v-if="or.status === 2" class="green">
					{{or.status_name}}
				</text>
				<text v-if="or.status === 3" class="black">
					{{or.status_name}}
				</text>
				<text v-if="or.status === 4" class="black">
					{{or.status_name}}
				</text>
			</view>
			<view class="list_item_last">
				<text class="time">{{or.time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [
					{
						id:1,
						name:"天使轮",
						title:"伟思医疗｜康复类医疗器械生产销售商",
						pric:500,
						type:"生物医药",
						time:"2019-12-23 16:18 ",
						status:1,
						status_name:"审查中",
						
						
					},
					{
						id:2,
						name:"天使轮",
						title:"伟思医疗｜康复类医疗器械生产销售商",
						pric:500,
						type:"生物医药",
						time:"2019-12-23 16:18 ",
						status:2,
						status_name:"洽谈中",
					},
					{
						id:3,
						name:"天使轮",
						title:"伟思医疗｜康复类医疗器械生产销售商",
						pric:500,
						type:"生物医药",
						time:"2019-12-23 16:18 ",
						status:3,
						status_name:"融资失败",
					},
					{
						id:4,
						name:"天使轮",
						title:"伟思医疗｜康复类医疗器械生产销售商",
						pric:500,
						type:"生物医药",
						time:"2019-12-23 16:18 ",
						status:4,
						status_name:"融资成功",
					},
				]
			};
		},
		methods:{
			dilt(id){
				uni.navigateTo({
					url:"/pages/bpDetails/bpDetails?id="+id
				})
			}
		}
	}
</script>

