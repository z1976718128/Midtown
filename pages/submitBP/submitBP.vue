<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>姓名<text class="req">*</text></label>
			<input v-model="nickname" type="text" value="" :adjust-position="false" placeholder="请输入您的姓名" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>手机号码<text class="req">*</text></label>
			<input v-model="phone" type="number" value="" :adjust-position="false" placeholder="请输入您的手机号码" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>工作邮箱<text class="req">*</text></label>
			<input v-model="email" type="text" value="" :adjust-position="false" placeholder="请输入您的邮箱" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>公司名称<text class="req">*</text></label>
			<input v-model="company_name" type="text" value="" :adjust-position="false" placeholder="请输入您的公司名称" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>职位<text class="req">*</text></label>
			<input v-model="position" type="text" value="" :adjust-position="false" placeholder="请输入您的职位" />
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>所在城市<text class="req">*</text></label>
			<cityPicker :pickerList="array" @confirm='endCity' :defaultValue="array" columnNum='2'>
				<view class="cists">
					{{picked.labels.join('-')}}
				</view>
			</cityPicker>
		</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>公司简介</label>
		</view>
		<view class="">
			<textarea v-model="desc" class="yjh" placeholder="介绍下您的公司吧…" />
			</view>
		<view class="uni-form-item uni-row">
			<label><text class="shux"></text>短信验证码</label>
			<input v-model="code" type="number" class="smscode" value="" :adjust-position="false" placeholder="请输入您的短信验证码"/>
			<button  type="primary" @tap="getCode" :disabled="disabled" class="get_vcode">
				{{countdown}} <text class="but_text" v-show="timestatus">秒重获</text>
			</button>
		</view>
		<view class="button" @tap="save">保存</view>
		
	</view>
</template>

<script>
	import {edit,sendSms,getRegion} from "../../uilt/api.js"
	import cityPicker from 'components/cityPicker';
	export default {
		components:{cityPicker},
		data() {
			return {
				array:[],
				 index: 0,
				indicatorStyle:"",
				visible: true,
				code:'',
                mobile:'',
                countdown:'获取验证码',
                disabled:false,
                timestatus:false,
                clear:'',
				nickname:"",
				phone:"",
				email:"",
				company_name:"",
				position:"",
				city:"",
				code:"",
				desc:"",
				avatar:"",
				picked:{
					labels:[
						"请选择您的所在城市>"
					]
				}
			}
		},
		mounted() {
			getRegion().then((res)=>{
				this.array = res.data.data
			})
		},
		methods: {
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
				const token = localStorage.getItem("token");
				console.log(this.city)
				edit({
					token,
					nickname:this.nickname,
					phone:this.phone,
					email:this.email,
					company_name:this.company_name,
					position:this.position,
					city:this.city,
					code:this.code,
					desc:this.desc,
				}).then((res)=>{
					console.log(res)
				})
			},
			   // 获取验证码
			            getCode(){
			                var that = this;
			                if(that.phone==''){
			                    uni.showToast({
			                        title: '请输入手机号码',
			                        icon: 'none'
			                    });
			                }else{
								console.log(111)
								const token = localStorage.getItem("token");
			                    that.disabled = true;//禁用点击
								sendSms({
									token,
									mobile:this.phone,
								
								}).then((res)=>{
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
			bindPickerChange: function(e) {
			    console.log(e.target.value)
			    this.index = e.target.value
			},
		}
	}
</script>

<style scoped>
.uni-common-mt{
	margin:0 30upx;
}
.uni-form-item{
	display: flex;
	padding:34upx 0;
	border-bottom:1upx solid #F1F1F1;
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
	background: none;
}
.but_text{
	font-size:26upx;
	font-weight:400;
	color:rgba(182,0,14,1) !important;
}
</style>
