<template>
	<view>
		<view class="head_fx"></view>
		<projectItem :projectArr="projectArr"></projectItem>
	</view>
</template>

<script>
	import projectItem from "@/components/projectItem.vue"
	export default {
		components:{
			projectItem
		},
		data() {
			return {
				projectArr:[]
			}
		},
		mounted() {
			const token=uni.getStorageSync("token");
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/getUserBp', //请求接口
				method:'GET',
				data:{
					token:token
				},
				dataType:'json',
				success: (res) => {
					this.projectArr = res.data.date
				}
			})
		}
	}
</script>

