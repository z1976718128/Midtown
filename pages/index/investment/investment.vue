<template>
	<view>
		<view class="selets">
			<industryItem></industryItem>
			<industryField></industryField>
		</view>
		<newItem></newItem>
	</view>
</template>

<script>
	import industryItem from "../../../components/industryItem.vue"
	import industryField from "../../../components/industryField.vue"
	import newItem from "../../../components/newItem.vue"
	export default {
		components:{
			industryItem,
			industryField,
			newItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.selets{
	display: flex;
	justify-content: space-around;
	margin:34upx 0 57upx 0;
}

</style>
