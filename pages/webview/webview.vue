<template>
	<view>
		<web-view src="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx14bd7709ff067c4f&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2F%23%2Fpages%2Findex%2Fmy%2Fmy&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(a) {
			console.log(a)
		}
	}
</script>

<style>

</style>
