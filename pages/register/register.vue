<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>姓名<text class="req">*</text></label>
			<input v-model="form.nickname" type="text"  :adjust-position="false"   />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>手机号码<text class="req">*</text></label>
			<input v-model="form.phone" type="number"   :adjust-position="false"  />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>工作邮箱<text class="req">*</text></label>
			<input v-model="form.email" type="text"  :adjust-position="false" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>公司名称<text class="req">*</text></label>
			<input v-model="form.company_name" type="text"  :adjust-position="false"  />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>职位<text class="req">*</text></label>
			<input v-model="form.position" type="text"  :adjust-position="false"  />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>所在城市<text class="req">*</text></label>
			<!-- <cityPicker :pickerList="array" @confirm='endCity' :defaultValue="array" columnNum='2'>
				<view class="cists">
					{{picked.labels.join('-')}}
				</view>
			</cityPicker> -->
			<picker mode="multiSelector" :range="array" range-key='label' @columnchange="columnchanges" :value="index" @change="bindTimeChange">
				<view class="cists">
					{{city_name}}
				</view>
			</picker>
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>公司简介</label>
		</view>
		<view class="">
			<textarea v-model="form.desc" class="yjh" />
			</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>短信验证码</label>
			<input v-model="form.code" type="number" class="smscode"  :adjust-position="false" value="请输入您的短信验证码"/>
			<button   @tap="getCode" :disabled="disabled" class="get_vcode">
				{{countdown}} <text class="but_text" v-show="timestatus">秒重获</text>
			</button>
		</view>
			<view class="button" @tap="save">保存</view>
		<!-- <view class="buus">
			<view class="cacle" @tap="cacle">取消</view>
		</view> -->
	</view>
</template>

<script>
	import cityPicker from 'components/cityPicker';
	export default {
		components:{cityPicker},
		data() {
			return {
				city_name:'请选择>',
				tempArray:[],
				array:[[{label:"请选择"}],[{label:'请选择'}]],
				index: [0,0],
				userArr:[],
				indicatorStyle:"",
				visible: true,
                countdown:'获取验证码',
                disabled:false,
                timestatus:false,
                clear:'',
				form:{
					nickname:"",
					phone:"",
					email:"",
					company_name:"",
					position:"",
					city:"",
					desc:"",
					avatar:"",
					code:'',
				},
				picked:{
					labels:[
						"请选择您的所在城市>"
					]
				}
			}
		},
		onBackPress(event){
			console.log(event)
			uni.switchTab({
				url: '/pages/index/home/home'
			});
		},
		mounted() {
			const token=uni.getStorageSync("token");
			uni.request({
				url: 'http://zc.demo.yudw.com/api/config/getRegion', //请求接口
				method:'GET',
				dataType:'json',
				success: (res) => {
					this.tempArray = res.data.data
					this.array = [
						this.tempArray.map(item=>{return {label:item.label,value:item.value}}),
						this.tempArray[0].children.map(item=>{return {label:item.label,value:item.value}})
						]
					console.log(this.array)	
				}
			})
			uni.request({
				url: 'http://zc.demo.yudw.com/api/user/checkRegist', //请求接口
				method:'GET',
				data:{
					token:token
				},
				dataType:'json',
				success: (res) => {
					console.log(res)
					this.check = res.data.data
					if(res.data.data == 1){
						uni.request({
							url: 'http://zc.demo.yudw.com/api/user/getUser', //请求接口
							method:'GET',
							data:{
								token:token
							},
							dataType:'json',
							success: (res) => {
								console.log(res)
								this.form = res.data.date
							},
							fail:(res) =>{//请求失败后返回
								console.log(res);
							}
						})
					}
				},
				fail:(res) =>{//请求失败后返回
					console.log(res);
				}
			})
			
			
		},
		methods: {
			// cacle(){
			// 	uni.navigateBack({
			// 		delta:1
			// 	})
			// },
			bindTimeChange(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
				this.form.city = this.array[1][this.index[1]].value
				this.city_name = this.array[0][this.index[0]].label + this.array[1][this.index[1]].label
			},
			columnchanges(event){
				console.log('picker发送选择改变，携带值为', event.detail)
				this.array[1] = this.tempArray[event.detail.value].children.map(item=>{return {label:item.label,value:item.value}})
			},
			endCity(picked){
				this.city = picked.value
				console.log(picked.value)
				this.picked = picked
			},
			// 处理数据
			formate(datas){
				let arr = []
				for(let key in datas){
				 arr.push({value:key,label:datas[key]})
				}
				return arr
			},
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
			save(){
				const token=uni.getStorageSync("token");
				uni.request({
					url: 'http://zc.demo.yudw.com/api/user/edit', //请求接口
					method:'get',
					data:{
						token:token,
						nickname:this.form.nickname,
						phone:this.form.phone,
						email:this.form.email,
						company_name:this.form.company_name,
						position:this.form.position,
						city:this.form.city,
						code:this.form.code,
						desc:this.form.desc,
					},
					dataType:'json',
					success: (res) => {
						if(res.data.status === 1){
							console.log(res.data.msg)
							uni.showToast({
								title: res.data.msg,
								icon: 'success',
								success() {
									setTimeout(function(){
										uni.switchTab ({
											url:"../index/my/my",
										})
									},2000)
								}
								
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				})
			},
			   // 获取验证码
			            getCode(){
			                var that = this;
			                if(that.form.phone==''){
			                    uni.showToast({
			                        title: '请输入手机号码',
			                        icon: 'none'
			                    });
			                }else{
								console.log(111)
								// const token = localStorage.getItem("token");
								const token=uni.getStorageSync("token");
			                    that.disabled = true;//禁用点击
								uni.request({
									url: 'http://zc.demo.yudw.com/api/user/sendSms', //请求接口
									method:'GET',
									data:{
										token,
										mobile:this.form.phone,
									},
									dataType:'json',
									success: (res) => {
										if(res.data.status==1){
			                                uni.showToast({
			                                    title: res.data.msg,
			                                    icon: 'none'
			                                });
			                                that.countdown = 60;
											console.log( that.countdown)
			                                that.timestatus = true;
			                                that.clear = setInterval(that.countDown,1000);
			                            }else{
												uni.showToast({
				                                    title: res.data.msg,
				                                    icon: 'none'
				                                });
			                                that.disabled = false; //获取失败开启点击
			                            }
									},
									fail:(res) =>{//请求失败后返回
										console.log(res);
									}
								})
			                }                
			            },
			            // 倒计时
			            countDown(){
			                var that = this;
			                if(!that.countdown){                    
			                    that.disabled = false;
			                    that.timestatus = false;
			                    that.countdown = '获取验证码';
			                    clearInterval(that.clear);
			                }else{
			                    --that.countdown;
			                }
			            },
		}
	}
</script>

<style scoped>
.uni-common-mt{
	margin:0 30upx;
	padding-bottom:250upx;
}
.uni-form-item{
	display: flex;
	padding:34upx 0;
	border-bottom:2upx solid #F1F1F1;
	position: relative;
}
label{
	font-size:30upx;
	font-weight:400;
	color:rgba(70,79,87,1);
}
input,.cists{
	font-size:26upx;
	font-weight:400;
	color:rgba(169,169,169,1);
    text-align: right;
	position: absolute;
	right: 0;
}
.req{
	color: red;
}
.smscode{
	position: relative;
}
.yjh{
	width:688upx;
	height:171upx;
	background:rgba(241,241,241,1);
	border-radius:5upx;
	font-size:26upx;
	font-weight:400;
	color:rgba(145,145,145,1);
	text-indent: 23upx;
}
.get_vcode{
	width:177upx;
	height:51upx;
	line-height: 50upx;
	border:2upx solid rgba(182,0,14,1);
	border-radius:26upx;
	font-size:26upx;
	color:rgba(182,0,14,1) !important;
	background: #fff;
}
.but_text{
	font-size:26upx;
	font-weight:400;
	color:rgba(182,0,14,1) !important;
}
.button {
	margin:50upx 0;
}
.buus{
	display: flex;
	justify-content: center;
	padding:50upx 0 100upx 0;
}
.cacle{
	width:260upx;
	height:66upx;
	background:rgba(153,153,153,1);
	border-radius:33upx;
	color: #fff;
	font-size: 28upx;
	line-height: 66upx;
}
.baocun{
	width:260upx;
	height:66upx;
	background:#DEB156;
	border-radius:33upx;
	color: #fff;
	font-size: 28upx;
	line-height: 66upx;
}
.buus view{
	text-align: center;
	margin:0 25upx;
}
</style>
