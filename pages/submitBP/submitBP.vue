<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-row">
			<label>项目名称<text class="req">*</text></label>
			<input type="text" value="" :adjust-position="false" placeholder="请填写项目名称"/>
		</view>
		<view class="uni-form-item uni-row">
			<label>公司全称<text class="req">*</text></label>
			<input type="text" value="" :adjust-position="false" placeholder="请填写公司全称"/>
		</view>
		<view class="uni-form-item uni-row">
			<label>上传LOGO<text class="req">*</text></label>
			<input type="text" value="" :adjust-position="false" placeholder="请填写项目名称"/>
		</view>
		<view class="">
			<label>一句话简介<text class="req">*</text></label>
			<textarea placeholder="请用一句话描述" class="yjh" />
		</view>
	</view>
</template>

<script>
	import field from "../../components/field.vue"
	import wPicker from "../../components/w-picker/w-picker.vue"
	export default {
		components:{
			field,
			wPicker
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
.uni-common-mt{
	margin:0 30upx;
}
.uni-form-item{
	display: flex;
	padding-bottom: 34upx;
	border-bottom:1upx solid #F1F1F1;
	background: red;
}
label{
	font-size:30upx;
	font-weight:400;
	color:rgba(70,79,87,1);
}
input{
	font-size:26upx;
	font-weight:400;
	color:rgba(169,169,169,1);
}
.req{
	color: red;
}
.yjh{
	width:689upx;
	height:82upx;
	background:rgba(241,241,241,1);
	border-radius:5upx;
	font-size:26upx;
	font-weight:400;
	color:rgba(145,145,145,1);
	text-indent: 23upx;
}
</style>
