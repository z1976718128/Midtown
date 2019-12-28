<template>
	<view>
		<projectItem :projectArr="projectArr"></projectItem>
	</view>
</template>

<script>
	import {getUserBp} from "../../uilt/api.js"
	import projectItem from "../../components/projectItem.vue"
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
			const token = localStorage.getItem("token");
			getUserBp({token}).then((res)=>{
				console.log(res)
				this.projectArr = res.data.date
			})
		}
	}
</script>

<style>

</style>
