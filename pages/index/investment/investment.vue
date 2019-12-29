<template>
	<view>
		<view class="selets">
			<!-- <industryField></industryField>
			<industryItem></industryItem> -->
		</view>
		<newItem :itenArr="itenArr"></newItem>
		<view class="tost">
			{{loadingText}}
		</view>
	</view>
</template>

<script>
	import {investor} from "../../../uilt/api.js"
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
				itenArr:[],
				page:1,
				num:5,
				loadingText:'加载中...',
				oldArr:[],
				tempArr:[]
			}
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
				investor({page:this.page,num:this.num}).then((res)=>{
					datas = res.data.date
					this.tempArr = datas
					if(bool){
						this.oldArr = JSON.parse(JSON.stringify(this.itenArr))
						this.oldArr.push(...datas)
						this.itenArr = this.oldArr
					}else{
						this.itenArr = datas
					}
				})
				
				
			}
		},
		mounted() {
			this.getnewList()
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
