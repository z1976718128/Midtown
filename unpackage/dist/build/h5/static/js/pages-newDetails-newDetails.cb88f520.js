(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newDetails-newDetails"],{"1c3c":function(t,a,e){var i=e("74ba");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("48bf2467",i,!0,{sourceMap:!1,shadowMode:!1})},"4a83":function(t,a,e){"use strict";e.r(a);var i=e("ee56"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},6045:function(t,a,e){"use strict";e.r(a);var i=e("c4f4"),n=e("4a83");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("d9f4");var s=e("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"70f3eada",null);a["default"]=c.exports},"74ba":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".BP[data-v-70f3eada]{padding-bottom:%?250?%}.BP_hd[data-v-70f3eada]{height:auto}.company[data-v-70f3eada]{border:none;margin-bottom:%?114?%}.button[data-v-70f3eada]{margin:%?68?% 0 %?160?% 0}.BP_hd_frist[data-v-70f3eada]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-left:%?30?%}.company_logo_img[data-v-70f3eada]{width:%?149?%;height:%?149?%;padding:%?46?% 0 %?0?% 0}.company_logo[data-v-70f3eada]{width:%?149?%;height:%?149?%;background-repeat:no-repeat;background-size:contain;vertical-align:middle;background-position:50%\r\n\t/* transform: scale(.8); */\r\n\t/* background-position-x: 10upx; */}.company_name[data-v-70f3eada]{margin:%?56?% 0 %?6?% 0}",""])},c4f4:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"BP"},[e("v-uni-view",{staticClass:"head_fx"}),e("v-uni-view",{},[e("v-uni-view",{staticClass:"BP_hd_frist"},[e("v-uni-view",{staticClass:"company_logo_img"},[e("v-uni-image",{staticClass:"company_logo",style:{backgroundImage:"url("+t.detailsArr.logo+")"}})],1),e("v-uni-view",{staticClass:"BP_hd_cont"},[e("v-uni-view",{staticClass:"company_name"},[t._v(t._s(t.detailsArr.company_name))]),e("v-uni-view",{staticClass:"company-desc"},[t._v(t._s(t.detailsArr.city))])],1)],1)],1),e("v-uni-view",{staticClass:"projectBrief"},[e("v-uni-view",{staticClass:"find_title"},[e("v-uni-text",{staticClass:"shux"}),e("v-uni-text",{staticClass:"hd"},[t._v("机构简介：")])],1),e("v-uni-text",{staticClass:"projectBrief_text"},[t._v(t._s(t.detailsArr.company_desc))])],1),e("v-uni-view",{staticClass:"find_title"},[e("v-uni-text",{staticClass:"shux"}),e("v-uni-text",{staticClass:"hd"},[t._v("投资偏好：")])],1),e("v-uni-text",{staticClass:"projectBrief_text"},[t._v(t._s(t.detailsArr.stage_desc))]),e("v-uni-view",{staticClass:"content"}),t.showMod?e("v-uni-view",{staticClass:"models"},[e("v-uni-view",{staticClass:"info"},[t._v("请添加平台负责人 获取更多信息~")]),e("v-uni-view",{staticClass:"ewm"},[e("v-uni-image",{staticClass:"ewm",attrs:{src:"../../static/img/m1.png",mode:""}})],1),e("v-uni-view",{staticClass:"email",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gp.apply(void 0,arguments)}}},[e("v-uni-view",{},[t._v("电话/微信：13543250693")]),e("v-uni-view",{},[t._v("邮箱：zhangc@unspace.cn")])],1),e("v-uni-view",{staticClass:"clones",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideMol.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"../../static/img/clone.png",mode:""}})],1)],1):t._e(),t.showMod?e("v-uni-view",{staticClass:"yy",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideMol.apply(void 0,arguments)}}}):t._e(),e("v-uni-view",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModel.apply(void 0,arguments)}}},[t._v("联系平台")])],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},d9f4:function(t,a,e){"use strict";var i=e("1c3c"),n=e.n(i);n.a},ee56:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("386d"),e("4917"),e("3b2b");var i={data:function(){return{showMod:!1,type:"advert",value:!1,mData:{src:"../../static/img/company_logo.png",width:"600upx",height:"350upx"},id:"",detailsArr:[]}},onLoad:function(t){this.id=t.id},mounted:function(){var t=this;uni.request({url:"http://zc.demo.yudw.com/api/investor/info",method:"GET",data:{id:this.id},dataType:"json",success:function(a){t.detailsArr=a.data.date}})},onBackPress:function(t){return"backbutton"!=t.from&&"navigateBack"!=t.from&&(this.back(),!0)},methods:{back:function(){uni.reLaunch({url:"/pages/index/investment/investment"})},gp:function(){uni.makePhoneCall({phoneNumber:"13543250693",success:function(a){t.log(a)},fail:function(a){t.log(a)}})},hideMol:function(){this.showMod=!1},showModel:function(){var a=this,e=uni.getStorageSync("token"),i=this;uni.request({url:"http://zc.demo.yudw.com/api/user/checkRegist",method:"GET",data:{token:e},dataType:"json",success:function(e){if(403==e.data.status){var n=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:n},dataType:"json",success:function(a){t.log(a),i.hr=a.data.data,window.location.href=a.data.data}});else{var o=a.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:o},dataType:"json",success:function(a){t.log(a,7897894566),1==a.data.status&&(t.log("登录成功"),t.log("token:",a.data.data.token),uni.setStorageSync("token",a.data.data.token))},fail:function(a){t.log(a)}})}}if(t.log(e),0==e.data.data)uni.showModal({showCancel:!1,title:"请先注册",success:function(a){a.confirm&&(t.log(1),uni.navigateTo({url:"/pages/register/register"}))}});else{a.showMod=!0;var s=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/bp/bpDownload",method:"GET",data:{token:s,bp_id:a.id},dataType:"json",success:function(a){t.log(a)}})}},fail:function(a){t.log(a)}})},onConfirm:function(){this.value=!1},cancel:function(){this.value=!1},getQueryString:function(t){var a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(a);return null!=e?unescape(e[2]):null}}};a.default=i}).call(this,e("5a52")["default"])}}]);