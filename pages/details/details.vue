<template>
	<view>
		详情{{id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:""
			}
		},
		methods: {
			
		},
		onLoad(id) {
			console.log(id)
			this.id = id.did;
		}
	}
</script>

<style>

</style>
