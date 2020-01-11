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
	import industryItem from "@/components/industryItem.vue"
	import industryField from "@/components/industryField.vue"
	import newItem from "@/components/newItem.vue"
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
				loadingText:'上拉加载更多数据',
				oldArr:[],
				tempArr:[]
			}
		},
		onShow() {
			this.getnewList()
		},
		mounted() {
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
				uni.request({
					url: 'http://zc.demo.yudw.com/api/investor/index', //请求接口
					method:'GET',
					data:{
						page:this.page,
						num:this.num
					},
					dataType:'json',
					success: (res) => {
						
						datas = res.data.date
						this.tempArr = datas
						if(this.tempArr.length < this.num){
							this.loadingText = '没有更多数据了'
						}
						if(bool){
							this.oldArr = JSON.parse(JSON.stringify(this.itenArr))
							this.oldArr.push(...datas)
							this.itenArr = this.oldArr
						}else{
							this.itenArr = datas
						}
					},
					fail:(res) =>{//请求失败后返回
						console.log(res);
					}
				})
				
			}
		},
		
	}
</script>

<style scoped>
.selets{
	display: flex;
	justify-content: space-around;
	margin:34upx 0 57upx 0;
}
@media (min-width: 750px){
	
}
</style>
