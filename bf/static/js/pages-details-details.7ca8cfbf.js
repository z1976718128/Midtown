(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details"],{"1b82":function(t,a,i){"use strict";var n=i("e40e"),e=i.n(n);e.a},"2c1f":function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"BP"},[i("v-uni-view",{staticClass:"head_fx"}),i("v-uni-view",{},[i("v-uni-view",{staticClass:"BP_hd_frist"},[i("v-uni-view",{},[i("v-uni-image",{staticClass:"company_logo",attrs:{src:t.arr.logo,mode:""}})],1),i("v-uni-view",{staticClass:"BP_hd_cont"},[i("v-uni-view",{staticClass:"company_name"},[t._v(t._s(t.arr.title))]),i("v-uni-view",{staticClass:"company-desc"},[t._v("康复类医疗器械生产销售商")])],1)],1),i("v-uni-view",{staticClass:"BP_hd_last"},[i("v-uni-view",{staticClass:"BP_hd_last_item"},[i("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("当前轮次及融资需求")]),i("v-uni-view",{staticClass:"BP_hd_last_item_js"},[t._v(t._s(t.arr.stage_name)+"︱"+t._s(t.arr.capital_name))])],1),i("v-uni-view",{staticClass:"gan"}),i("v-uni-view",{staticClass:"BP_hd_last_item br"},[i("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("所属领域")]),t._l(t.arr.field_name,function(a,n){return i("v-uni-view",{key:n,staticClass:"BP_hd_last_item_js"},[t._v(t._s(a))])})],2),i("v-uni-view",{staticClass:"gan"}),i("v-uni-view",{staticClass:"BP_hd_last_item"},[i("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("所属地")]),i("v-uni-view",{staticClass:"BP_hd_last_item_js"},[t._v(t._s(t.arr.city))])],1)],1)],1),i("v-uni-view",{staticClass:"projectBrief"},[i("v-uni-view",{staticClass:"find_title"},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("项目简介：")])],1),i("v-uni-text",{staticClass:"projectBrief_text"},[t._v(t._s(t.arr.desc))])],1),i("v-uni-view",{staticClass:"company"},[i("v-uni-view",{staticClass:"find_title"},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("公司信息：")])],1),i("v-uni-view",{staticClass:"company_content"},[i("v-uni-view",{},[i("v-uni-text",{staticClass:"company_title"},[t._v("公司全称："+t._s(t.arr.company_name))])],1),i("v-uni-view",{staticClass:"company_item"},[i("v-uni-text",{staticClass:"company_jan"},[t._v("公司简介：")]),i("v-uni-text",{staticClass:"company_nr"},[t._v(t._s(t.arr.company_desc))])],1)],1)],1),i("v-uni-view",{staticClass:"financing"},[i("v-uni-view",{staticClass:"find_title"},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("融资经历：")])],1),i("v-uni-view",{staticClass:"financing_content"},[i("v-uni-view",{staticClass:"financing_text"},[t._v(t._s(t.arr.financing))])],1)],1),i("v-uni-view",{staticClass:"business"},[i("v-uni-view",{staticClass:"sy"},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("商业计划书：")]),i("v-uni-text",{staticClass:"business_wj",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.down.apply(void 0,arguments)}}},[t._v(t._s(t.arr.file_name))])],1)],1),t.showMod?i("v-uni-view",{staticClass:"models"},[i("v-uni-view",{staticClass:"info"},[t._v("请添加平台负责人 获取更多信息~")]),i("v-uni-view",{staticClass:"ewm"},[i("v-uni-image",{staticClass:"ewm",attrs:{src:"../../static/img/m1.png",mode:""}})],1),i("v-uni-view",{staticClass:"email",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gp.apply(void 0,arguments)}}},[i("v-uni-view",{},[t._v("电话/微信：13543250693")]),i("v-uni-view",{},[t._v("邮箱：zhangc@unspace.cn")])],1),i("v-uni-view",{staticClass:"clones",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideMol.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../static/img/clone.png",mode:""}})],1)],1):t._e(),t.showMod?i("v-uni-view",{staticClass:"yy",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideMol.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModel.apply(void 0,arguments)}}},[t._v("下载BP")])],1)},e=[];i.d(a,"a",function(){return n}),i.d(a,"b",function(){return e})},4718:function(t,a,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e,s=n(i("bd86"));i("386d"),i("4917"),i("3b2b");var o={components:{},data:function(){return{showMod:!1,id:"",arr:[],type:"advert",value:!1,mData:{src:"../../static/img/company_logo.png",width:"600upx",height:"350upx"}}},onLoad:function(t){this.id=t.did},mounted:function(){var a=this;this.back(),uni.request({url:"http://zc.demo.yudw.com/api/bp/info",method:"get",data:{id:this.id},dataType:"json",success:function(i){t.log(i),a.arr=i.data.date}})},onBackPress:function(t){return"backbutton"!=t.from&&"navigateBack"!=t.from&&(this.back(),!0)},methods:(e={pushHistory:function(){var t={title:"title",url:"#"};window.history.pushState(t,t.title,t.url)},back:function(){this.pushHistory(),window.addEventListener("popstate",function(t){location.href=""},!1)}},(0,s.default)(e,"back",function(){uni.reLaunch({url:"/pages/index/home/home"})}),(0,s.default)(e,"down",function(){}),(0,s.default)(e,"hideMol",function(){this.showMod=!1}),(0,s.default)(e,"showModel",function(){var a=this,i=uni.getStorageSync("token"),n=this;uni.request({url:"http://zc.demo.yudw.com/api/user/checkRegist",method:"GET",data:{token:i},dataType:"json",success:function(i){if(t.log(i),403==i.data.status){var e=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:e},dataType:"json",success:function(a){t.log(a),n.hr=a.data.data,window.location.href=a.data.data}});else{var s=a.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:s},dataType:"json",success:function(a){t.log(a,7897894566),1==a.data.status&&(t.log("登录成功"),t.log("token:",a.data.data.token),uni.setStorageSync("token",a.data.data.token))},fail:function(a){t.log(a)}})}}if(0==i.data.data)uni.showModal({showCancel:!1,title:"请先注册",success:function(a){a.confirm&&(t.log(1),uni.navigateTo({url:"/pages/register/register"}))}});else{a.showMod=!0;var o=uni.getStorageSync("token"),c=a;uni.request({url:"http://zc.demo.yudw.com/api/bp/bpDownload",method:"GET",data:{token:o,bp_id:a.id},dataType:"json",success:function(i){if(403==i.data.status){var n=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:n},dataType:"json",success:function(a){t.log(a),c.hr=a.data.data,window.location.href=a.data.data}});else{var e=a.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:e},dataType:"json",success:function(a){t.log(a,7897894566),1==a.data.status&&(t.log("登录成功"),t.log("token:",a.data.data.token),uni.setStorageSync("token",a.data.data.token))},fail:function(a){t.log(a)}})}}t.log(i)}})}},fail:function(a){t.log(a)}})}),(0,s.default)(e,"onConfirm",function(){this.value=!1}),(0,s.default)(e,"cancel",function(){this.value=!1}),(0,s.default)(e,"gp",function(){uni.makePhoneCall({phoneNumber:"13543250693",success:function(a){t.log(a)},fail:function(a){t.log(a)}})}),(0,s.default)(e,"getQueryString",function(t){var a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(a);return null!=i?unescape(i[2]):null}),e)};a.default=o}).call(this,i("5a52")["default"])},"64c9":function(t,a,i){"use strict";i.r(a);var n=i("2c1f"),e=i("c0cd");for(var s in e)"default"!==s&&function(t){i.d(a,t,function(){return e[t]})}(s);i("1b82");var o=i("2877"),c=Object(o["a"])(e["default"],n["a"],n["b"],!1,null,"00df8e54",null);a["default"]=c.exports},c0cd:function(t,a,i){"use strict";i.r(a);var n=i("4718"),e=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(a,t,function(){return n[t]})}(s);a["default"]=e.a},e40e:function(t,a,i){var n=i("fc70");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("373cf258",n,!0,{sourceMap:!1,shadowMode:!1})},fc70:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".BP[data-v-00df8e54]{padding-bottom:%?250?%}.BP_hd_frist[data-v-00df8e54]{margin-bottom:%?54?%}.company_name[data-v-00df8e54]{width:auto}.button[data-v-00df8e54]{margin:%?68?% 0 %?300?% 0}.company_logo[data-v-00df8e54]{margin-top:%?46?%}.BP_hd_frist[data-v-00df8e54]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-left:%?30?%}.company_nr[data-v-00df8e54]{top:0}",""])}}]);