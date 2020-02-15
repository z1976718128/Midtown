<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				项目名称
				<text class="req">*</text>
			</label>
			<input v-model="title" type="text" value="" :adjust-position="false" placeholder="请填写项目名称" class="w_input"/>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				公司全称
				<text class="req">*</text>
			</label>
			<input v-model="company_name" type="text" value="" :adjust-position="false" placeholder="请填写公司全称" class="w_input"/>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				上传LOGO
				<text class="req">*</text>
			</label>
			<view class="log" @tap="logoUp" >{{asv2&&asv2!=100?asv2+"%":logoFiles}}</view>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				一句话简介
				<text class="req">*</text>
			</label>
		</view>
		<view class=""><textarea v-model="one_desc" class="yjhs" placeholder="请用一句话描述~" /></view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				行业领域
				<text class="req">*</text>
			</label>
			<industryField class="filedsa" @fieldVal="fieldVal"></industryField>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				所在城市
				<text class="req">*</text>
			</label>
			<!-- 	<cityPicker :pickerList="array" @confirm='endCity' :defaultValue="array" columnNum='2'>
				<view class="cists">
					{{picked.labels.join('-')}}
				</view>
			</cityPicker> -->
			<!-- <picker mode="multiSelector" :range="array" range-key="label" @columnchange="columnchanges" :value="index" @change="bindTimeChange">
				<view class="cists">{{ city_name }}</view>
			</picker> -->
			<view class="cists" @tap="openAddres">{{city_name}}</view>
			<view class="content">
				<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
			</view>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				公司简介
				<text class="req">*</text>
			</label>
		</view>
		<view class=""><textarea v-model="company_desc" class="yjh" placeholder="请具体描述下您的公司哦~~" /></view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				融资需求
				<text class="req">*</text>
			</label>
			<financing class="filedsa" @findVal="findVal"></financing>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				在融阶段
				<text class="req">*</text>
			</label>
			<inFusion class="filedsa" @infudVal="infudVal"></inFusion>
		</view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				融资经历
				<text class="req">*</text>
			</label>
		</view>
		<view class=""><textarea v-model="financing" class="yjh" placeholder="请具体描述下您的融资经历哦~" /></view>
		<view class="uni-form-item uni-row">
			<label>
				<text class="shux"></text>
				商业计划书
				<text class="req">*</text>
			</label>
		</view>
		<view class="sc_item">
			<view class="sc" @tap="fileUp">{{asv&&asv!=100?asv+"%":files}}</view>
			<view class="scpdf">仅限上传PDF类型的文件（单个文件不超过20M）</view>
			
		</view>
		<view class="button" @tap="save">提交</view>
	</view>
</template>

<script>
import simpleAddress from "@/components/simple-address/simple-address.nvue"
import cityPicker from 'components/cityPicker';
import industryField from '@/components/industryField.vue';
import financing from '@/components/financing.vue';
import inFusion from '@/components/inFusion.vue';
export default {
	components: {
		cityPicker,
		industryField,
		financing,
		inFusion,
		 simpleAddress
	},
	data() {
		return {
			clor:"red",
			cityPickerValueDefault: [0, 0, 1],
			pickerText: '',
			city_name: '请选择>',
			tempArray: [],
			array: [[{ label: '请选择' }], [{ label: '请选择' }]],
			index: [0, 0],
			logos: '上传图片+',
			indicatorStyle: '',
			visible: true,
			code: '',
			mobile: '',
			countdown: '获取验证码',
			disabled: false,
			timestatus: false,
			clear: '',
			title: '',
			company_name: '',
			logo: '',
			logoFiles:"选择文件+",
			one_desc: '',
			field_id: '',
			city_id: '',
			company_desc: '',
			capital_id: '',
			stage_id: '',
			file: '',
			files:"选择文件+",
			financing: '',
			field_name: '',
			picked: {
				labels: ['选择>']
			},
			asv:"",
			asv2:""
		};
	},
	mounted() {
		uni.request({
			url: 'http://zc.demo.yudw.com/api/config/getRegion', //请求接口
			method: 'GET',
			dataType: 'json',
			success: res => {
				this.tempArray = res.data.data;
				this.array = [
					this.tempArray.map(item => {
						return { label: item.label, value: item.value };
					}),
					this.tempArray[0].children.map(item => {
						return { label: item.label, value: item.value };
					})
				];
				console.log(this.array);
			},
			fail: res => {
				//请求失败后返回
				console.log(res);
			}
		});
	},
	methods: {
		   openAddres() {
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				console.log(e)
				this.city_name = e.label
				this.city_id = e.cityCode
				
			},
		fieldVal(val) {
			this.field_id = val;
			console.log(this.field_id);
		},
		findVal(val) {
			this.capital_id = val;
		},
		infudVal(val) {
			this.stage_id = val;
		},
		logoUp() {
			let than = this;
			let time2 = null;
			than.asv2 = 0
			// than.logoFiles = "文件上传中";
			uni.chooseImage({
				success: function(chooseImageRes) {
					const tempFilePaths = chooseImageRes.tempFiles;
					let nar = tempFilePaths[0].name.split('.');
					let names = tempFilePaths[0].name
					const uploadTask =uni.uploadFile({
						url: 'http://zc.demo.yudw.com/api/Upload/upload_file',
						filePath: tempFilePaths[0].path,
						name: 'file',
						success: function(res) {
							let arr = res.data;
							than.logos = tempFilePaths[0].name;
							than.logo = JSON.parse(arr).data;
							clearInterval(time2)
							time2 = null;
							than.$nextTick(function(){
								than.logoFiles = "文件上传完成"
								
							})
						}
					});
					time2 = setInterval(()=>{
						console.log(111)
						uploadTask.onProgressUpdate(function (res) {
							than.asv2 =res.progress
						});
					},45)
				}
			});
		},
		fileUp() {
			let than = this;
			let time = null;
			than.asv = 0
			// than.files = "文件上传中";
			uni.chooseImage({
				fail:function(resa){
					console.log(2222)
				},
				success: function(chooseImageRes) {
					const tempFilePaths = chooseImageRes.tempFiles;
					let nar = tempFilePaths[0].name.split('.');
					console.log(tempFilePaths[0].name);
					let names = tempFilePaths[0].name
					const uploadTask = uni.uploadFile({
						url: 'http://zc.demo.yudw.com/api/Upload/upload_file',
						filePath: tempFilePaths[0].path,
						name: 'file',
						success: function(res) {
							let arr = res.data;
							than.file = JSON.parse(arr).data;
							clearInterval(time)
							time = null;
							than.$nextTick(function(){
								than.files = "文件上传完成"
								
							})
						}
					});
					// if(nar[1] == "pdf"){

					// }else{
					// 	uni.showToast({
					// 		title: "请上传pdf文件",
					// 		icon: 'none'
					// 	})
					// }
					time = setInterval(()=>{
						console.log(111)
						uploadTask.onProgressUpdate(function (res) {
							than.asv =res.progress
							// console.log('上传进度' + res.progress);
							// console.log('已经上传的数据长度' + res.totalBytesSent);
							// console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
									 
							// 测试条件，取消上传任务。
							// if (res.progress > 50) {
							// 	uploadTask.abort();
							// }
						});
					},45)
					
				}
			});
		},
		bindTimeChange(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
			this.city_id = this.array[1][this.index[1]].value;
			this.city_name = this.array[0][this.index[0]].label + this.array[1][this.index[1]].label;
		},
		columnchanges(event) {
			let tempArray = []
			console.log('picker发送选择改变，携带值为', event.detail);
			tempArray = this.tempArray[event.detail.value].children.map(item => {
				return { label: item.label, value: item.value };
			});
			this.$set(this.array,1,tempArray)
		},
		endCity(picked) {
			this.city_id = picked.value;
			this.picked = picked;
		},
		// 处理数据
		formate(datas) {
			let arr = [];
			for (let key in datas) {
				arr.push({ value: key, label: datas[key] });
			}
			return arr;
		},
		save() {
			const token = uni.getStorageSync('token');
			let _than = this;
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/postBp', //请求接口
				method: 'GET',
				data: {
					token: token,
					field_name: this.asv,
					title: this.title,
					company_name: this.company_name,
					logo: this.logo,
					one_desc: this.one_desc,
					field_id: this.field_id,
					city_id: this.city_id,
					company_desc: this.company_desc,
					capital_id: this.capital_id,
					stage_id: this.stage_id,
					file: this.file,
					stage_id: this.stage_id,
					financing: this.financing
				},
				dataType: 'json',
				success: res => {
					console.log(res);
					if (res.data.status == 403) {
						let url = window.location.href;
						if (window.location.href.indexOf('code') == 0 || window.location.href.indexOf('code') <= 0) {
							uni.request({
								url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
								method: 'get',
								data: {
									baseUrl: url
								},
								dataType: 'json',
								success: res => {
									console.log(res);
									_than.hr = res.data.data;
									window.location.href = res.data.data;
								}
							});
						} else {
							//如果有带code
							let code = this.getQueryString('code');
							uni.request({
								url: 'http://zc.demo.yudw.com/api/login/login', //登录
								method: 'get',
								data: {
									code: code
								},
								dataType: 'json',
								success: res => {
									console.log(res, 7897894566);
									if (res.data.status == 1) {
										console.log('登录成功');
										console.log('token:', res.data.data.token);
										uni.setStorageSync('token', res.data.data.token);
									}
								},
								fail: res => {
									//请求失败后返回
									console.log(res);
								}
							});
						}
					}
					if (res.data.status == 1) {
						uni.showToast({
							title: res.data.msg,
							icon: 'success',
							success() {
								setTimeout(function() {
									uni.switchTab({
										url: '../index/home/home'
									});
								}, 2000);
							}
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				},
				fail: res => {
					//请求失败后返回
					console.log(res);
				}
			});
		},
		getQueryString(name) {
			let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
			let r = window.location.search.substr(1).match(reg);
			if (r != null) {
				return unescape(r[2]);
			} else {
				return null;
			}
		}
	}
};
</script>

<style scoped>
.uni-common-mt {
	margin: 0 30upx;
}
.uni-form-item {
	display: flex;
	padding: 34upx 0;
	border-bottom: 1upx solid #f1f1f1;
	position: relative;
}
label {
	font-size: 30upx;
	font-weight: 400;
	color: rgba(70, 79, 87, 1);
}
.sc {
	width: 200upx;
	height: 63upx;
	line-height: 63upx;
	border: 1upx solid rgba(205, 205, 205, 1);
	border-radius: 5upx;
	margin-top: 30upx;
	font-size: 26upx;
	font-weight: 400;
	color: rgba(202, 202, 202, 1);
	text-align: center;
	padding:0 30upx;
}
.scpdf {
	height: 27upx;
	font-size: 26upx;
	font-weight: 400;
	color: rgba(166, 166, 166, 1);
	line-height: 65upx;
	padding: 30upx 0;
}
input{
	color: #000;
	font-size: 30upx;
	text-align: right;
	position: absolute;
	right: 0;
}
.cists {
	font-size: 26upx;
	font-weight: 400;
	color: rgba(169, 169, 169, 1);
	text-align: right;
	position: absolute;
	right: 0;
}
.req {
	color: red;
}
.smscode {
	position: relative;
}
.yjh {
	width: 688upx;
	height: 171upx;
	background: rgba(241, 241, 241, 1);
	border-radius: 5upx;
	font-size: 26upx;
	font-weight: 400;
	color: rgba(145, 145, 145, 1);
	text-indent: 23upx;
	padding-top: 10upx;
}
.get_vcode {
	width: 177upx;
	height: 51upx;
	line-height: 50upx;
	border: 2upx solid rgba(182, 0, 14, 1);
	border-radius: 26upx;
	font-size: 26upx;
	color: rgba(182, 0, 14, 1) !important;
	background: none;
}
.but_text {
	font-size: 26upx;
	font-weight: 400;
	color: rgba(182, 0, 14, 1) !important;
}
.sc_item {
	margin-bottom: 20upx;
}
.log {
	position: absolute;
	right: 0;
	top: 22upx;
	/* width: 162upx; */
	height: 63upx;
	border: 1upx solid rgba(205, 205, 205, 1);
	border-radius: 5upx;
	font-size: 26upx;
	font-weight: 400;
	color: rgba(202, 202, 202, 1);
	line-height: 63upx;
	padding:0 30upx;
	
}
.yjhs {
	width: 689upx;
	height: 82upx;
	background: rgba(241, 241, 241, 1);
	border-radius: 5upx;
	font-size: 26upx;
	font-weight: 400;
	color: rgba(145, 145, 145, 1);
	line-height: 82upx;
	text-indent: 20upx;
}
.filedsa {
	position: absolute;
	right: 0;
}
.uni-list {
	width: 331upx;
	height: 63upx;
	line-height: 63upx;
	background: none !important;
	border-radius: 15upx;
	text-align: center;
}
.cists {
	color: #deb156;
}
.button {
	margin: 68upx 0 200upx 0;
}
@media (min-width:750px) {
	.w_input,uni-label{
		font-size: 16px;
	}
	.log{
		font-size: 16px;
		height: 40px;
		line-height: 40px;
	}
	.yjhs{
		width: 350px;
		font-size: 16px;
	}
	.yjh{
		width: 350px;
		height: 120px;
		font-size: 16px;
	}
	.sc{
		font-size: 16px;
		height: 60px;
		line-height: 60px;
	}
	.scpdf{
		font-size: 16px;
	}
	.button{
		/* transform: translateX(-50%) scale(.4); */
	}
}
</style>
