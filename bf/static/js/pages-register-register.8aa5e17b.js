(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0e26":function(t,e,a){"use strict";a.r(e);var i=a("9d7d"),n=a("d7b6");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("1723");var s=a("2877"),u=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"831cd652",null);e["default"]=u.exports},1063:function(t,e,a){"use strict";(function(t){var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("386d"),a("4917"),a("3b2b");var n=i(a("75fe")),o=i(a("b0e9")),s={components:{cityPicker:o.default,simpleAddress:n.default},data:function(){return{cityPickerValueDefault:[0,0,1],pickerText:"",tempArray:[],array:[[{label:"请选择"}],[{label:"请选择"}]],index:[0,0],userArr:[],indicatorStyle:"",visible:!0,countdown:"获取验证码",disabled:!1,timestatus:!1,clear:"",form:{city_name:"请选择>",nickname:"",phone:"",email:"",company_name:"",position:"",city:"",desc:"",avatar:"",code:""},picked:{labels:["请选择您的所在城市>"]}}},onBackPress:function(t){return"backbutton"!=t.from&&"navigateBack"!=t.from&&(this.back(),!0)},mounted:function(){var e=this,a=uni.getStorageSync("token"),i=this;uni.request({url:"http://zc.demo.yudw.com/api/config/getRegion",method:"GET",dataType:"json",success:function(a){e.tempArray=a.data.data,e.array=[e.tempArray.map(function(t){return{label:t.label,value:t.value}}),e.tempArray[0].children.map(function(t){return{label:t.label,value:t.value}})],t.log(e.array)}}),uni.request({url:"http://zc.demo.yudw.com/api/user/checkRegist",method:"GET",data:{token:a},dataType:"json",success:function(n){if(403==n.data.status){var o=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:o},dataType:"json",success:function(e){t.log(e),i.hr=e.data.data,window.location.href=e.data.data}});else{var s=e.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:s},dataType:"json",success:function(e){t.log(e,7897894566),1==e.data.status&&(t.log("登录成功"),t.log("token:",e.data.data.token),uni.setStorageSync("token",e.data.data.token))},fail:function(e){t.log(e)}})}}t.log(n),e.check=n.data.data,1==n.data.data&&uni.request({url:"http://zc.demo.yudw.com/api/user/getUser",method:"GET",data:{token:a},dataType:"json",success:function(a){if(403==a.data.status){uni.setStorageSync("token");uni.getStorageSync("url")}t.log(a.data.date),e.form=a.data.date},fail:function(e){t.log(e)}})},fail:function(e){t.log(e)}})},methods:{openAddres:function(){this.$refs.simpleAddress.open()},onConfirm:function(e){t.log(e),this.form.city_name=e.label,t.log(e.cityCode),this.form.city=e.cityCode},back:function(){uni.reLaunch({url:"/pages/index/home/home"})},formate:function(t){var e=[];for(var a in t)e.push({value:a,label:t[a]});return e},save:function(){var e=this,a=uni.getStorageSync("token"),i=this;uni.request({url:"http://zc.demo.yudw.com/api/user/edit",method:"get",data:{token:a,nickname:this.form.nickname,phone:this.form.phone,email:this.form.email,company_name:this.form.company_name,position:this.form.position,city:this.form.city,code:this.form.code,desc:this.form.desc,city_name:this.form.city_name},dataType:"json",success:function(a){if(403==a.data.status){var n=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:n},dataType:"json",success:function(e){t.log(e),i.hr=e.data.data,window.location.href=e.data.data}});else{var o=e.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:o},dataType:"json",success:function(e){t.log(e,7897894566),1==e.data.status&&(t.log("登录成功"),t.log("token:",e.data.data.token),uni.setStorageSync("token",e.data.data.token))},fail:function(e){t.log(e)}})}}1===a.data.status?(t.log(a.data.msg),uni.showToast({title:a.data.msg,icon:"success",success:function(){uni.redirectTo({url:"/pages/index/my/my"})}})):uni.showToast({title:a.data.msg,icon:"none"})}})},getCode:function(){var e=this,a=this;if(""==a.form.phone)uni.showToast({title:"请输入手机号码",icon:"none"});else{t.log(111);var i=uni.getStorageSync("token"),n=this;a.disabled=!0,uni.request({url:"http://zc.demo.yudw.com/api/user/sendSms",method:"GET",data:{token:i,mobile:this.form.phone},dataType:"json",success:function(i){if(403==i.data.status){var o=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:o},dataType:"json",success:function(e){t.log(e),n.hr=e.data.data,window.location.href=e.data.data}});else{var s=e.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:s},dataType:"json",success:function(e){t.log(e,7897894566),1==e.data.status&&(t.log("登录成功"),t.log("token:",e.data.data.token),uni.setStorageSync("token",e.data.data.token))},fail:function(e){t.log(e)}})}}1==i.data.status?(uni.showToast({title:i.data.msg,icon:"none"}),a.countdown=60,t.log(a.countdown),a.timestatus=!0,a.clear=setInterval(a.countDown,1e3)):(uni.showToast({title:i.data.msg,icon:"none"}),a.disabled=!1)},fail:function(e){t.log(e)}})}},countDown:function(){var t=this;t.countdown?--t.countdown:(t.disabled=!1,t.timestatus=!1,t.countdown="获取验证码",clearInterval(t.clear))},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e);return null!=a?unescape(a[2]):null}}};e.default=s}).call(this,a("5a52")["default"])},1723:function(t,e,a){"use strict";var i=a("42bd"),n=a.n(i);n.a},"42bd":function(t,e,a){var i=a("5105");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("067c73c3",i,!0,{sourceMap:!1,shadowMode:!1})},5105:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-common-mt[data-v-831cd652]{margin:0 %?30?%;padding-bottom:%?250?%}.uni-form-item[data-v-831cd652]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?34?% 0;border-bottom:%?2?% solid #f1f1f1;position:relative}uni-label[data-v-831cd652]{font-size:%?30?%;font-weight:400;color:#464f57}.cists[data-v-831cd652],uni-input[data-v-831cd652]{font-size:%?26?%;font-weight:400;color:#a9a9a9;text-align:right;position:absolute;right:0}.req[data-v-831cd652]{color:red}.smscode[data-v-831cd652]{position:relative}.yjh[data-v-831cd652]{width:%?688?%;height:%?171?%;background:#f1f1f1;border-radius:%?5?%;font-size:%?26?%;font-weight:400;color:#919191;text-indent:%?23?%}.get_vcode[data-v-831cd652]{width:%?177?%;height:%?51?%;line-height:%?50?%;border:%?2?% solid #b6000e;border-radius:%?26?%;font-size:%?26?%;color:#b6000e!important;background:#fff}.but_text[data-v-831cd652]{font-size:%?26?%;font-weight:400;color:#b6000e!important}.button[data-v-831cd652]{margin:%?50?% 0}.buus[data-v-831cd652]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?50?% 0 %?100?% 0}.cacle[data-v-831cd652]{width:%?260?%;height:%?66?%;background:#999;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.baocun[data-v-831cd652]{width:%?260?%;height:%?66?%;background:#deb156;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.buus uni-view[data-v-831cd652]{text-align:center;margin:0 %?25?%}",""])},"9d7d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("姓名"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-input",{attrs:{type:"text","adjust-position":!1},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("手机号码"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-input",{attrs:{type:"number","adjust-position":!1},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("工作邮箱"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-input",{attrs:{type:"text","adjust-position":!1},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("公司名称"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-input",{attrs:{type:"text","adjust-position":!1},model:{value:t.form.company_name,callback:function(e){t.$set(t.form,"company_name",e)},expression:"form.company_name"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("职位"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-input",{attrs:{type:"text","adjust-position":!1},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("所在城市"),a("v-uni-text",{staticClass:"req"},[t._v("*")])],1),a("v-uni-view",{staticClass:"cists",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openAddres.apply(void 0,arguments)}}},[t._v(t._s(null==t.form.city_name?"请选择":t.form.city_name))]),a("v-uni-view",{staticClass:"content"},[a("simple-address",{ref:"simpleAddress",attrs:{pickerValueDefault:t.cityPickerValueDefault,themeColor:"#007AFF"},on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("公司简介")],1)],1),a("v-uni-view",{},[a("v-uni-textarea",{staticClass:"yjh",model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),a("v-uni-view",{staticClass:"uni-form-item uni-row"},[a("v-uni-label",[a("v-uni-text",{staticClass:"shux"}),t._v("短信验证码")],1),a("v-uni-input",{staticClass:"smscode",attrs:{type:"number","adjust-position":!1,value:"请输入您的短信验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),a("v-uni-button",{staticClass:"get_vcode",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.countdown)),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.timestatus,expression:"timestatus"}],staticClass:"but_text"},[t._v("秒重获")])],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},d7b6:function(t,e,a){"use strict";a.r(e);var i=a("1063"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}}]);