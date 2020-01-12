<script>
	export default {
		data(){
			return{
				hr:""
			}
		},	
		onShow() {
			
		},
		mounted() {
			// this.back();
		},
		onLaunch(){
			uni.getSystemInfo({
			    success(e){
			        /* 窗口宽度 大于420px且不在PC页面时，跳转至PC页面 */
			        if(e.windowWidth>420 && !window.top.isPC){
			            window.location.pathname = '/static/html/pc.html';
			        }
			    }
			})
		},
		
		beforeMount() {
			// #ifndef H5
			// #endif
			let _than = this;
			let huoqutoken = uni.getStorageSync("token");
			console.log('当前token', huoqutoken)
			if (!huoqutoken) {
				//如果URL中没有带code
				let url = window.location.href;
				if (window.location.href.indexOf("code") == 0 || window.location.href.indexOf("code") <= 0) {
					uni.request({
						url: 'http://zc.demo.yudw.com/api/login/get_code_url', //获取连接
						method: 'get',
						data: {
							baseUrl: url
						},
						dataType: 'json',
						success: (res) => {
							console.log(res)
							_than.hr =res.data.data
							// window.location.href = res.data.data;
						}
					})
				} else {
					//如果有带code
					let code = this.getQueryString("code");
					uni.request({
						url: 'http://zc.demo.yudw.com/api/login/login', //登录
						method: 'get',
						data: {
							code: code
						},
						dataType: 'json',
						success: (res) => {
							console.log(res, 7897894566)
							if (res.data.status == 1) {
								console.log("登录成功");
								console.log("token:", res.data.data.token);
								uni.setStorageSync("token", res.data.data.token)
							}
						},
						fail: (res) => { //请求失败后返回
							console.log(res);
						}
					})
				}
			
			}
		
				// uni.setStorageSync("token", 1)
		},
		methods: {
			pushHistory() {
			//写入空白历史路径
			  let state = {
			    title: 'title',
			    url: "#"
			  }
			  window.history.pushState(state, state.title, state.url)
			},
			back() {
			  this.pushHistory();
			  window.addEventListener("popstate", function (e) {
			    location.href = ''
			  }, false);
			},
			getQueryString(name) {
				let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null;
				}
			},
			pushHistory() {
			      var state1 = {
			        title: "title",
			        url: "#"
			      };
			      window.history.pushState(state1, "title", "#");
			    }
		}
	}
</script>

<style>
	.w_input{
		width:500upx !important;
	}
	page{
		min-height: 100vw;
	}
	/*每个页面公共css */
	.models {
		width: 486upx;
		height: 583upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		position: fixed;
		top: 50%;
		left: 50%;
		border-radius: 10upx;
		transform: translate(-50%, -50%);
		z-index: 60;
	}
	
	.info {
		width: 246upx;
		height: 70upx;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(68, 68, 68, 1);
		line-height: 40upx;
		text-align: center;
		margin: 40upx auto;
	}

	.ewm {
		width: 210upx;
		height: 210upx;
		margin: 12upx auto;
	}

	.email {
		/* width: 320upx; */
		height: 67upx;
		font-size: 30upx;
		font-weight: 400;
		color: rgba(68, 68, 68, 1);
		line-height: 40upx;
		margin: 60upx auto;
		text-align: center;
	}

	.yy {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 59;
	}

	.clones image {
		width: 52upx;
		height: 52upx;
		position: fixed;
		bottom: -100upx;
		z-index: 60;
		left: 50%;
		transform: translateX(-50%);
	}

	.uni-swiper-dots-horizontal {
		bottom: 66upx !important;
	}
	uni-tabbar .uni-tabbar__bd{
	  height: inherit;
	  justify-content:flex-start;
	 }
	uni-tabbar .uni-tabbar__label {
		position: relative;
		top: -10upx;
		font-size: 28upx !important;
	}

	page {
		background: #f8f8fa;
	}

	uni-tabbar,
	uni-tabbar .uni-tabbar {
		height: 132upx;
	}

	uni-tabbar .uni-tabbar__icon {
		width: auto;
		height: auto;
		transform: scale(.5);
	}

	.hd {
		font-size: 34upx;
		font-weight: bold;
		color: rgba(70, 79, 87, 1);
	}

	.user_xm_list {
		width: 327upx;
		height: 327upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 21upx 0upx rgba(141, 139, 139, 0.1);
		border-radius: 30upx;
		margin: 19upx;
	}

	.list_item {
		border-top: 2upx solid #F1F1F1;
		margin: 30upx;
	}

	.list_item view {
		width: 100%;
	}

	.name {
		display: inline-block;
		width: 91upx;
		height: 42upx;
		line-height: 42upx;
		background: rgba(254, 243, 220, 1);
		border-radius: 5upx;
		font-size: 22upx;
		color: rgba(243, 140, 55, 1);
		margin-right: 12upx;
		margin-bottom: 30upx;
		text-align: center;
	}

	.wy {
		font-size: 24upx;
		font-weight: 400;
		color: rgba(94, 94, 94, 1);
		line-height: 38upx;
		margin: 0 44upx 60upx 8upx;
	}

	.list_frist {
		margin-top: 29upx;
	}

	.list_nth {
		width: 690upx;
		/* background: red; */
		margin-top: 41upx;
		margin-bottom: 20upx;
	}

	.title {
		width: 576upx;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(82, 91, 99, 1);
		line-height: 65upx;
		color: #525B63;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
	}

	.pric {
		font-size: 40upx;
		font-weight: bold;
		color: rgba(243, 140, 55, 1);
		line-height: 38upx;
	}

	.type {
		display: inline-block;
		width: 120upx;
		height: 42upx;
		line-height: 30upx;
		background: #e2f5ff;
		border-radius: 5upx;
		text-align: center;
	}

	.type_size {
		font-size: 22upx;
		font-weight: 400;
		color: #0086ca
	}

	.time,
	.ll {
		font-size: 24upx;
		font-weight: 400;
		color: rgba(181, 181, 181, 1);
	}

	.list_item_last {
		display: flex;
		justify-content: space-between;
	}

	.head_fx {
		width: 750upx;
		height: 19upx;
		background: rgba(241, 241, 241, 1);
		position: fixed;
		z-index: 99;
		/* top: 86upx; */
	}

	.bule {
		display: inline-block;
		width: 112upx;
		height: 36upx;
		line-height: 36upx;
		background: rgba(23, 103, 231, 1);
		border: 1upx solid rgba(23, 103, 231, 1);
		border-radius: 18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 8upx;
		/* margin:80upx 0 0 59upx; */
	}

	.green {
		display: inline-block;
		width: 113upx;
		height: 36upx;
		background: rgba(159, 181, 52, 1);
		border: 1upx solid rgba(159, 181, 52, 1);
		border-radius: 18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 8upx;
	}

	.black {
		display: inline-block;
		width: 112upx;
		height: 35upx;
		background: rgba(73, 73, 73, 1);
		border-radius: 18upx;
		font-size: 22upx;
		color: #FFFFFF;
		font-weight: 400;
		text-align: center;
		float: right;
		margin-top: 8upx;
	}

	.shux {
		display: inline-block;
		width: 6upx;
		height: 35upx;
		background: rgba(222, 177, 86, 1);
		border-radius: 3upx;
		margin-right: 17upx;
		vertical-align: middle;
	}

	.button {
		width: 316upx;
		height: 65upx;
		line-height: 65upx;
		font-size: 32upx;
		background: rgba(222, 177, 86, 1);
		border-radius: 33upx;
		color: #fff;
		text-align: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 80upx;
	}

	.BP {}

	.company_logo_img {
		/* margin:0 28upx 0 30upx ; */
		padding: 38upx 0 48upx 0;
	}

	.company_logo {
		width: 149upx;
		height: 149upx;
		border-radius: 10upx;
	}

	.BP_hd {
		height: 390upx;
		border-bottom: 11upx solid #F1F1F1;
		border-top: 19upx solid #F1F1F1;
	}

	.BP_hd_frist {
		display: flex;
		justify-content: space-evenly;
	}

	.BP_hd_cont {
		margin-left: 20upx;
	}

	.company_name {
		width: 350upx;
		font-size: 32upx;
		font-weight: bold;
		color: rgba(68, 68, 68, 1);
		line-height: 65upx;
		margin: 40upx 0 22upx 0;
		/* text-overflow: ellipsis; */
		overflow: hidden;
		white-space: nowrap;
	}

	.company-desc {
		/* width:320upx; */
		height: 27upx;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(119, 119, 119, 1);
		line-height: 65upx;
	}

	.BP_hd_last {
		display: flex;
		/* margin-top: 36upx; */
		justify-content: space-around;
		text-align: left;
	}

	.BP_hd_last_item_name {
		font-size: 30upx;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}

	.BP_hd_last_item_js {
		font-size: 30upx;
		font-weight: bold;
		color: rgba(68, 68, 68, 1);
		margin-top: 20upx;
	}

	.gan {
		width: 2upx;
		height: 97upx;
		background: rgba(102, 102, 102, 1);
		border: 2upx solid rgba(241, 241, 241, 1);
		opacity: .2;
	}

	.find_title {
		margin: 30upx;
		padding-bottom: 28upx;
		border-bottom: 2upx solid rgba(241, 241, 241, 1);
	}

	.company {
		border-bottom: 11upx solid rgba(241, 241, 241, 1);
	}

	.company_content {
		margin: 0 30upx;
	}

	.company_qc {
		font-size: 30upx;
		font-weight: normal;
	}

	.company_title {
		font-size: 30upx;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
	}

	.company_jan {
		display: inline-block;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		vertical-align: top;
	}

	.company_item {
		margin-top: 75upx;
		padding-bottom: 61upx;
	}

	.company_nr {
		width: 528upx;
		font-size: 30upx;
		font-weight: 400;
		color: rgba(71, 71, 71, 1);
		line-height: 40upx;
		display: inline-block;
		position: relative;
		top: -8upx;
	}

	.financing {
		border-bottom: 11upx solid rgba(241, 241, 241, 1);
		padding-bottom: 35upx;
	}

	.financing_content {
		margin: 0 30upx;
	}

	.financing_text {
		font-size: 30upx;
		font-weight: 400;
		color: rgba(71, 71, 71, 1);
	}

	.financing_text:first-child {
		margin-bottom: 10upx;
	}

	.sy {
		margin: 30upx;
		padding-bottom: 28upx;
	}

	.business_wj {
		width: 283upx;
		height: 29upx;
		font-size: 26upx;
		font-weight: 400;
		text-decoration: underline;
		color: rgba(153, 153, 153, 1);
		margin-left: 320upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.projectBrief {
		padding-bottom: 30upx;
		border-bottom: 11upx solid rgba(241, 241, 241, 1);
	}

	.projectBrief_text {
		display: inline-block;
		width: 683upx;
		/* height:176upx; */
		font-size: 30upx;
		font-weight: 400;
		color: rgba(71, 71, 71, 1);
		line-height: 50upx;
		margin: 0 30upx;

	}

	.Investment,
	.field {
		margin: 0 30upx;
	}

	.Investment text {
		background: rgba(254, 243, 220, 1);
		border-radius: 5upx;
		font-size: 30upx;
		font-weight: 400;
		color: rgba(222, 163, 44, 1);
		margin: 0 10upx;
	}

	.field text {
		background: rgba(255, 243, 235, 1);
		border-radius: 5upx;
		font-size: 30upx;
		font-weight: 400;
		color: rgba(255, 156, 130, 1);
		margin: 0 22upx;
	}

	.tost {
		text-align: center;
		margin-bottom: 80upx;
		color: #444;
		font-size: 32upx;
	}
	.uni-body::-webkit-scrollbar {display:none}
	@media (min-width: 750px) {
		
	}
</style>
