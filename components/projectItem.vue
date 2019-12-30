<template>
	<view>
		<view class="list_item" v-for="(or,index) in projectArr" :key="index" @click="dilt(or.id)">
			<view class="list_frist">
				<text class="name">{{or.stage_name}}</text>
				<text class="title">{{or.title}}</text>
			</view>
			<view class="list_nth">
				<text ><text class="pric">{{or.capital_name}}</text><text class="wy"></text></text>
				<text class="type">
					<text class="type_size">{{or.field_name}}</text>
				</text>
				<text v-if="or.status === 0" class="bule">
					{{or.status_name}}
				</text>
				<text v-if="or.status === 1" class="green">
					{{or.status_name}}
				</text>
				<text v-if="or.status === 2" class="black">
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
				<text class="time">{{or.add_time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			projectArr: {
				type: Array,
				default () {
					return []
				}
			},
		},
		data() {
			return {
			}	
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



