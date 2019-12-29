<script>
	import {getlogin,geturl,getData} from "./uilt/api.js"
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		},
		mounted() {
			// getData().then((res)=>{
			// 	console.log(res)
			// })
			
		},
		beforeMount() {
			//  switch(uni.getSystemInfoSync().platform){
			// 
			//     case 'android':
			// 
			//        console.log('运行Android上')
			// 
			//        break;
			// 
			//     case 'ios':
			// 
			//        console.log('运行iOS上')
			// 
			//        break;
			// 
			//     default:
			// 
			//        console.log('运行在开发者工具上')
			// 
			//        break;
			// 
			// }
			// #ifdef H5
			var ua = navigator.userAgent.toLowerCase();
			//判断是不是微信环境
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
			  let url = window.location.href;
			  let huoqutoken = localStorage.getItem("token");
			
			  console.log('当前token',huoqutoken)
			
			  if ( huoqutoken === null || huoqutoken == "" ||	huoqutoken == null ||	huoqutoken == "null" ||	huoqutoken == undefined) {
			
			    //如果URL中没有带code
			    if(window.location.href.indexOf("code") == 0 ||	window.location.href.indexOf("code") <= 0){
					console.log(111)
			        geturl({
			          baseUrl: url
			        }).then((res) => {
						console.log(res)
			          window.location.href = res.data.data;
			        })
			
			    } else {
			        //如果有带code
				
			        let code = this.getQueryString("code");
			        getlogin({
			          code: code
			        }).then((res) => {
						console.log(res,7897894566)
			          //获取token,储存到本地
			          if (res.data.status == 1) {
			            if (!res.data.data.token || res.data.data.token == null) {
			              alert("token出错：" + res.data.data.token);
			            }
			            console.log("登录成功");
			            console.log("token:", res.data.data.token);
			            localStorage.setItem("token", res.data.data.token);
			
			          } else {
			            alert(res.data.msg);
			          }
			        })
			    }
			
			  }
			
			}else{
			  // console.log('不是微信环境，默认登录ID 2的用户')
			  //不是微信环境
			  // window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx14bd7709ff067c4f&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F%23%2F&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
			   localStorage.setItem("token", 1);
			   //模拟一个 假的token ，为  2
			  //到时候把这个删了，指引去微信
			}
			
			// #endif
			
			// #ifdef MP-WEIXIN
			// #endif
			
		},
		methods: {
		  getQueryString(name) {
		    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    let r = window.location.search.substr(1).match(reg);
		    if (r != null) {
		      return unescape(r[2]);
		    } else {
		      return null;
		    }
		  }
		}
			
	}
</script>

<style>
	/*每个页面公共css */
	page{
		background: #f8f8fa;
	}	
	.hd{
		font-size:32upx;
		font-weight:bold;
		color:rgba(70,79,87,1);
	}
	.user_xm_list{
		width:327upx;
		height:327upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx 0upx 21upx 0upx rgba(141,139,139,0.1);
		border-radius:30upx;
		margin:34upx 19upx;
	}
	.list_item{
		border-top: 1upx solid #F1F1F1;
		margin:30upx;
	}
	.list_item view{
		width: 100%;
	}
	.name{
		width:91upx;
		background:rgba(254,243,220,1);
		border-radius:5upx;
		font-size:22upx;
		color:rgba(222,163,44,1);
		margin-right: 12upx;
		margin-bottom: 30upx;
	}
	.wy{
		font-size:24upx;
		font-weight:400;
		color:rgba(94,94,94,1);
		line-height:38upx;
		margin:0 44upx 60upx 8upx;
	}
	.list_frist{
		margin-top: 29upx;
	}
	.list_nth{
		margin-top: 41upx;
		margin-bottom: 60upx;
	}
	.title{
		width:489upx;
		font-size:28upx;
		font-weight:bold;
		color:rgba(82,91,99,1);
		line-height:65upx;
		color: #525B63;
	}
	.pric{
		font-size:50upx;
		font-weight:bold;
		color:rgba(243,140,55,1);
		line-height:38upx;
	}
	.type{
		width:113upx;
		height:42upx;
		line-height: 42upx;
		background:rgba(255,243,235,1);
		border-radius:5upx;
	}
	.type_size{
		font-size:22upx;
		font-weight:400;
		color:rgba(255,156,130,1);
	}
	.time,.ll{
		font-size:20upx;
		font-weight:400;
		color:rgba(181,181,181,1);
	}
	.list_item_last{
		display: flex;
		justify-content:space-between;
	}
	.ll{
		
	}
	.bule{
		display: inline-block;
		width:112upx;
		height:36upx;
		background:rgba(23,103,231,1);
		border:1upx solid rgba(23,103,231,1);
		border-radius:18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 20upx;
	}
	.green{
		display: inline-block;
		width:113upx;
		height:36upx;
		background:rgba(159,181,52,1);
		border:1upx solid rgba(159,181,52,1);
		border-radius:18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 20upx;
	}
	.black{
		display: inline-block;
		width:112upx;
		height:35upx;
		background:rgba(73,73,73,1);
		border-radius:18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 20upx;
	}
	.shux{
		display: inline-block;
		width:6upx;
		height:35upx;
		background:rgba(222,177,86,1);
		border-radius:3upx;
		margin-right: 17upx;
		vertical-align: middle;
	}
	.button{
		width:316upx;
		height:65upx;
		line-height: 65upx;
		font-size: 32upx;
		background:rgba(222,177,86,1);
		border-radius:33upx;
		color: #fff;
		text-align: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 50upx;
	}
	.BP{
		
	}	
	.company_logo_img{
		margin:0 28upx 0 30upx ;
		padding:38upx 0 48upx 0;
	}
	.company_logo{
		width: 149upx;
		height: 149upx;
		border-radius: 10upx;
	}
	.BP_hd{
		height: 390upx;
		border-bottom:11upx solid #F1F1F1;
		border-top:19upx solid #F1F1F1;
	}
	.BP_hd_frist{
		display: flex;
	}
	.BP_hd_cont{
		margin-left: 20upx;
	}
	.company_name{
		/* width:131upx; */
		height:32upx;
		font-size:32upx;
		font-weight:bold;
		color:rgba(68,68,68,1);
		line-height:65upx;
		margin:40upx 0 22upx 0;
	}
	.company-desc{
		width:320upx;
		height:27upx;
		font-size:26upx;
		font-weight:bold;
		color:rgba(119,119,119,1);
		line-height:65upx;
	}
	.BP_hd_last{
		display: flex;
		/* margin-top: 36upx; */
		justify-content: space-around;
		text-align: left;
	}
	.bule{
		margin:80upx 0 0 59upx;
	}
	.BP_hd_last_item_name{
		font-size:20upx;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.BP_hd_last_item_js{
		font-size:22upx;
		font-weight:bold;
		color:rgba(68,68,68,1);
		margin-top: 41upx;
	}
	.gan{
		width:2upx;
		height:97upx;
		background:rgba(249,249,248,1);
		border:1upx solid rgba(241,241,241,1);
	}
	.find_title{
		margin:30upx;
		padding-bottom: 28upx;
		border-bottom:1upx solid rgba(241,241,241,1);
	}
	.company{
		border-bottom:11upx solid rgba(241,241,241,1);
	}
	.company_content{
		margin:0 30upx;
	}
	.company_title{
		font-size:26upx;
		font-weight:bold;
		color:rgba(71,71,71,1);
	}
	.company_jan{
		display: inline-block;
		font-size:26upx;
		font-weight:bold;
		color:rgba(71,71,71,1);
		vertical-align: top;
	}
	.company_item{
		margin-top: 75upx;
		padding-bottom: 61upx;
	}
	.company_nr{
		width:528upx;
		font-size:26upx;
		font-weight:400;
		color:rgba(71,71,71,1);
		line-height:40upx;
		display: inline-block;
	}
	.financing{
		border-bottom:11upx solid rgba(241,241,241,1);
		padding-bottom: 35upx;
	}
	.financing_content{
		margin:0 30upx;
	}
	.financing_text{
		font-size:26upx;
		font-weight:400;
		color:rgba(71,71,71,1);
	}
	.financing_text:first-child{
		margin-bottom: 10upx;
	}
	.sy{
		margin:30upx;
		padding-bottom: 28upx;
	}
	.business_wj{
		width:283upx;
		height:29upx;
		font-size:26upx;
		font-weight:400;
		text-decoration:underline;
		color:rgba(153,153,153,1);
		margin-left:180upx;
		overflow: hidden;
	}
	.projectBrief{
		padding-bottom: 61upx;
		border-bottom:11upx solid rgba(241,241,241,1);
	}
	.projectBrief_text{
		display: inline-block;
		width:683upx;
		height:176upx;
		font-size:26upx;
		font-weight:400;
		color:rgba(71,71,71,1);
		line-height:50upx;
		margin:0 30upx;
		
	}
	.Investment,.field{
		margin:0 30upx;
	}
	.Investment text{
		background:rgba(254,243,220,1);
		border-radius:5upx;
		font-size:22upx;
		font-weight:400;
		color:rgba(222,163,44,1);
		margin:0 10upx;
	}
	.field text{
		background:rgba(255,243,235,1);
		border-radius:5upx;
		font-size:22upx;
		font-weight:400;
		color:rgba(255,156,130,1);
		margin:0 22upx;
	}
	.tost{
		text-align: center;
		margin-bottom: 40upx;
		color: #444;
		font-size: 32upx;
	}
</style>
