(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-submitBP-submitBP"],{"005c":function(t,e,i){var n=i("8f6a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5de4585d",n,!0,{sourceMap:!1,shadowMode:!1})},"070a":function(t,e,i){"use strict";var n=i("005c"),a=i.n(n);a.a},"0962":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-common-mt[data-v-a5659df2]{margin:0 %?30?%}.uni-form-item[data-v-a5659df2]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?34?% 0;border-bottom:%?1?% solid #f1f1f1;position:relative}uni-label[data-v-a5659df2]{font-size:%?30?%;font-weight:400;color:#464f57}.cists[data-v-a5659df2],uni-input[data-v-a5659df2]{font-size:%?26?%;font-weight:400;color:#a9a9a9;text-align:right;position:absolute;right:0}.req[data-v-a5659df2]{color:red}.smscode[data-v-a5659df2]{position:relative}.yjh[data-v-a5659df2]{width:%?688?%;height:%?171?%;background:#f1f1f1;border-radius:%?5?%;font-size:%?26?%;font-weight:400;color:#919191;text-indent:%?23?%}.get_vcode[data-v-a5659df2]{width:%?177?%;height:%?51?%;line-height:%?50?%;border:%?2?% solid #b6000e;border-radius:%?26?%;font-size:%?26?%;color:#b6000e!important;background:none}.but_text[data-v-a5659df2]{font-size:%?26?%;font-weight:400;color:#b6000e!important}",""])},2789:function(t,e,i){"use strict";i.r(e);var n=i("567b"),a=i("a3f2");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("349e");var s=i("2877"),l=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"a5659df2",null);e["default"]=l.exports},"2b58":function(t,e,i){"use strict";i.r(e);var n=i("3724"),a=i("a3ec");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("070a");var s=i("2877"),l=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"1044d432",null);e["default"]=l.exports},"349e":function(t,e,i){"use strict";var n=i("64fd"),a=i.n(n);a.a},3724:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPicker.apply(void 0,arguments)}}},[t._t("default")],2),i("div",{ref:"picker",staticClass:"picker-pop",on:{touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"picker-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}}),i("div",{staticClass:"picker-panel",class:{"picker-panel-translate":t.show}},[i("div",{staticClass:"picker-action"},[i("p",{staticClass:"cancel",style:t.customStyle.cancel,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),i("p",{staticClass:"confirm",style:t.customStyle.confirm,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])]),i("div",{staticClass:"picker-content"},t._l(t.columns,function(e,n){return i("div",{staticClass:"picker-column",style:t.customStyle.column[n],attrs:{"data-column":n},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)}}},[i("div",{staticClass:"scroll-wrapper"},[i("div",{staticClass:"top-cover"}),i("div",{staticClass:"bottom-cover"}),i("v-uni-view",{staticClass:"scroll-list",attrs:{animation:e.animationData}},t._l(e.pickerList,function(n,a){return i("div",{key:n.value},[i("div",{staticClass:"picker-item",style:t.pickerItemStyle(e.pickedIndex,a)},[t._v(t._s(n.label))])])}),0)],1)])}),0)])])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"567b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("姓名"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:"请输入您的姓名"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("手机号码"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"number",value:"","adjust-position":!1,placeholder:"请输入您的手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("工作邮箱"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:"请输入您的邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司名称"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:"请输入您的公司名称"},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("职位"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:"请输入您的职位"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("所在城市"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("cityPicker",{attrs:{pickerList:t.array,defaultValue:t.array,columnNum:"2"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.endCity.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cists"},[t._v(t._s(t.picked.labels.join("-")))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司简介")],1)],1),i("v-uni-view",{},[i("v-uni-textarea",{staticClass:"yjh",attrs:{placeholder:"介绍下您的公司吧…"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("短信验证码")],1),i("v-uni-input",{staticClass:"smscode",attrs:{type:"number",value:"","adjust-position":!1,placeholder:"请输入您的短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-button",{staticClass:"get_vcode",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.countdown)),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.timestatus,expression:"timestatus"}],staticClass:"but_text"},[t._v("秒重获")])],1)],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"58c6":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5d73"));i("c5f6");var o={props:{pickerList:{value:Array,require:!0,default:function(){return[]}},defaultValue:{value:Array,default:function(){return[]}},columnNum:{value:Number,default:0},itemRotateDeg:{value:Number,default:15},beforeSetColumn:{value:Function,default:null},customStyle:{value:Object,default:function(){return{cancel:{color:"#999"},confirm:{color:"#1CABEB"},column:[{flex:1},{flex:1},{flex:3}]}}}},data:function(){return{show:!1,columns:[],pickerItemHeight:Math.floor(68*screen.width/750),startScrollTop:0,lastPickedIndex:0,scrollingColumnIndex:0}},watch:{defaultValue:function(){this.init()}},mounted:function(){},methods:{init:function(){this.setColumn(0,this.pickerList)},showPicker:function(){var t=this;if(this.init(),this.inited)this.show=!0;else{var e=this.$refs.picker;document.body.appendChild(e),setTimeout(function(){t.show=!0},20),this.inited=!0}},confirm:function(){var t={index:[],value:[],label:[],indexes:[],values:[],labels:[]},e=!0,i=!1,n=void 0;try{for(var o,s=(0,a.default)(this.columns);!(e=(o=s.next()).done);e=!0){var l=o.value,c=this.columnPickedInfo(l);c?(t.index=c.index,t.value=c.value,t.label=c.label,t.indexes.push(c.index),t.values.push(c.value),t.labels.push(c.label)):(t.indexes.push(null),t.values.push(null),t.labels.push(null))}}catch(r){i=!0,n=r}finally{try{e||null==s.return||s.return()}finally{if(i)throw n}}this.$emit("confirm",t),this.hide()},cancel:function(){this.$emit("cancel"),this.hide()},hide:function(){this.show=!1},columnPickedInfo:function(t){return t.pickerList.length<1?null:{index:t.pickedIndex,value:t.pickerList[t.pickedIndex].value,label:t.pickerList[t.pickedIndex].label}},touchstart:function(t){this.scrollingColumnIndex=t.currentTarget.dataset.column,this.startScrollTop=t.changedTouches[0].clientY,this.lastPickedIndex=this.columns[this.scrollingColumnIndex].pickedIndex},touchmove:function(t){var e=this.startScrollTop-t.changedTouches[0].clientY,i=Math.round(e/this.pickerItemHeight),n=this.lastPickedIndex+i,a=this.columns[this.scrollingColumnIndex];a.pickedIndex!==n&&n>=0&&n<a.pickerList.length&&(a.pickedIndex=n,this.$emit("change",a.index,this.columnPickedInfo(a)),this.scrollColumn(a))},setColumn:function(t,e){if(!(5===t||this.columnNum>0&&t>=this.columnNum)){e=e||[];var i=e;if(this.beforeSetColumn&&(i=this.beforeSetColumn(t,i)),i.length<1){if(0===this.columnNum)return this.$delete(this.columns,t),void this.clearChildrenColumns(t,!0);if(!(t<this.columnNum))return;this.clearChildrenColumns(t)}var n=this.columns[t]||{},a={index:t,pickerList:i,pickedIndex:0};a.pickedIndex=Math.min(n.pickedIndex,a.pickerList.length-1)||0;var o=this.defaultValue&&this.defaultValue[t]||!1;void 0===n.pickedIndex&&!1!==o&&a.pickerList.map(function(t,e){t.value==o&&(a.pickedIndex=e)}),this.scrollColumn(a),this.$set(this.columns,t,a)}},scrollColumn:function(t){this.setColumn(t.index+1,t.pickerList[t.pickedIndex].children||[{value:"",label:""}]);var e=t.pickedIndex*this.pickerItemHeight;t.animationData=uni.createAnimation({duration:200,timingFunction:"linear"}).translateY(-e).step().export()},clearChildrenColumns:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i?this.columns.filter(function(e){return e.index<t}):this.columns.map(function(i){i.index>t&&e.setColumn(i.index,[])})},pickerItemStyle:function(t,e){var i=Math.abs(t-e);return i<=3?{transform:"rotateX("+i*this.itemRotateDeg+"deg)"}:{}}}};e.default=o},"5d73":function(t,e,i){t.exports=i("469f")},"64fd":function(t,e,i){var n=i("0962");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("66b76800",n,!0,{sourceMap:!1,shadowMode:!1})},7700:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("bd86")),o=i("196a"),s=n(i("2b58")),l={components:{cityPicker:s.default},data:function(){var t;return t={array:[],index:0,indicatorStyle:"",visible:!0,code:"",mobile:"",countdown:"获取验证码",disabled:!1,timestatus:!1,clear:"",nickname:"",phone:"",email:"",company_name:"",position:"",city:""},(0,a.default)(t,"code",""),(0,a.default)(t,"desc",""),(0,a.default)(t,"avatar",""),(0,a.default)(t,"picked",{labels:["请选择您的所在城市>"]}),t},mounted:function(){var t=this;(0,o.getRegion)().then(function(e){t.array=e.data.data})},methods:(0,a.default)({endCity:function(t){this.city=t.value,console.log(t.value),this.picked=t},formate:function(t){var e=[];for(var i in t)e.push({value:i,label:t[i]});return e},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},save:function(){var t=localStorage.getItem("token");console.log(this.city),(0,o.edit)({token:t,nickname:this.nickname,phone:this.phone,email:this.email,company_name:this.company_name,position:this.position,city:this.city,code:this.code,desc:this.desc}).then(function(t){console.log(t)})},getCode:function(){var t=this;if(""==t.phone)uni.showToast({title:"请输入手机号码",icon:"none"});else{console.log(111);var e=localStorage.getItem("token");t.disabled=!0,(0,o.sendSms)({token:e,mobile:this.phone}).then(function(e){1==e.data.status?(uni.showToast({title:e.data.msg,icon:"none"}),t.countdown=60,console.log(t.countdown),t.timestatus=!0,t.clear=setInterval(t.countDown,1e3)):(uni.showToast({title:e.data.msg,icon:"none"}),t.disabled=!1)})}},countDown:function(){var t=this;t.countdown?--t.countdown:(t.disabled=!1,t.timestatus=!1,t.countdown="获取验证码",clearInterval(t.clear))}},"bindPickerChange",function(t){console.log(t.target.value),this.index=t.target.value})};e.default=l},"7d7b":function(t,e,i){var n=i("e4ae"),a=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},"8f6a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.picker-pop .picker-mask[data-v-1044d432]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;width:100vw;height:100vh;background-color:rgba(0,0,0,.6)}.picker-pop .picker-panel[data-v-1044d432]{position:fixed;bottom:0;left:0;z-index:999;width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.picker-pop .picker-panel .picker-action[data-v-1044d432]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.picker-pop .picker-panel .picker-action[data-v-1044d432]:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-action p[data-v-1044d432]{color:#999;padding:%?30?%;line-height:%?32?%;height:%?32?%;font-size:%?32?%}.picker-pop .picker-panel .picker-action .confirm[data-v-1044d432]{color:#1cabeb}.picker-pop .picker-panel .picker-content[data-v-1044d432]{height:calc(%?68?% * 7);overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.picker-pop .picker-panel .picker-content .picker-column[data-v-1044d432]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;overflow:hidden}.picker-pop .picker-panel .picker-content .scroll-wrapper[data-v-1044d432]{position:relative;height:calc(%?68?% * 7)}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432],.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]{width:100%;position:absolute;z-index:1;-webkit-transform:translateZ(0);transform:translateZ(0);height:calc(%?68?% * 3);background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(0deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]:before,.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]{bottom:0;background:-webkit-linear-gradient(top,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(180deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]:before{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list[data-v-1044d432]{padding-top:calc(%?68?% * 3)}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list .picker-item[data-v-1044d432]{text-align:center;font-size:%?32?%;line-height:%?68?%;height:%?68?%;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.picker-pop .picker-panel-translate[data-v-1044d432]{-webkit-transform:translate(0);transform:translate(0)}',""])},a3ec:function(t,e,i){"use strict";i.r(e);var n=i("58c6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},a3f2:function(t,e,i){"use strict";i.r(e);var n=i("7700"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);