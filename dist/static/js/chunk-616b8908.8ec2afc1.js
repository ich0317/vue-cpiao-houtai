(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-616b8908"],{"0d8d":function(e,t,i){"use strict";var n=i("e143"),s=i.n(n);s.a},"53f4":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"plan"},on:{mousemove:function(t){return e.drapMove(t)}}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"pan-box"},[i("div",{staticClass:"pan-name"},[e._v("查询条件")]),e._v(" "),i("div",{staticClass:"pan-form"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"80px"}},[i("el-autocomplete",{staticStyle:{width:"220px"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容",disabled:e.isAdd},on:{select:e.handleSelect},model:{value:e.searchInfo.film_name,callback:function(t){e.$set(e.searchInfo,"film_name",t)},expression:"searchInfo.film_name"}}),e._v(" "),i("el-form-item",{attrs:{label:"选择语言"}},[i("el-select",{attrs:{disabled:e.isAdd},model:{value:e.searchInfo.language,callback:function(t){e.$set(e.searchInfo,"language",t)},expression:"searchInfo.language"}},e._l(e.searchInfo.languageArr,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选择版本"}},[i("el-select",{attrs:{disabled:e.isAdd},model:{value:e.searchInfo.film_version,callback:function(t){e.$set(e.searchInfo,"film_version",t)},expression:"searchInfo.film_version"}},e._l(e.searchInfo.film_versionArr,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"影片价格"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{disabled:e.isAdd},model:{value:e.searchInfo.sell_price,callback:function(t){e.$set(e.searchInfo,"sell_price",t)},expression:"searchInfo.sell_price"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.addFilm}},[e._v(e._s(e.isAdd?"取消添加":"添加影片"))])],1)],1)],1)])])],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"content-box",attrs:{"element-loading-text":"Loading"}},[i("div",{staticClass:"time-box"},[i("div",{staticClass:"select-date"},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:e.getSelectData},model:{value:e.nowDate,callback:function(t){e.nowDate=t},expression:"nowDate"}})],1),e._v(" "),i("div",{staticClass:"time-line"},[i("ul",e._l(e.effectiveTimeLong,function(t,n){return i("li",{key:n},[e._v(e._s(t)+":00")])}),0)])]),e._v(" "),i("div",{ref:"screenbox",staticClass:"screen-box"},[e._l(e.screenList,function(t,n){return i("div",{key:n,staticClass:"screen-bar clearfix"},[i("div",{staticClass:"screen-name"},[e._v(e._s(t.screen_name))]),e._v(" "),i("div",{ref:"lines",refInFor:!0,staticClass:"lines",attrs:{"data-screenid":t._id}},[i("ul",{staticClass:"time-item clearfix"},e._l(2*e.effectiveTimeLong.length,function(e,t){return i("li",{key:t})}),0),e._v(" "),i("div",{staticClass:"time-progress"}),e._v(" "),e._l(t.children,function(t,s){return i("div",{key:"a"+s,staticClass:"drag-film",class:"flimStatus"+t.status,style:{left:t._start_time+"px",width:t.film_long+"px"},attrs:{id:t._id},on:{contextmenu:function(t){return t.stopPropagation(),e.setRightClick(t,n,s)},click:function(i){return i.stopPropagation(),e.tapSelect(t.screen_id,t._id,t.status)}}},[i("dl",{staticClass:"drag-film-content"},[i("dt",[e._v(e._s(t.film_name))]),e._v(" "),i("dd",[e._v(e._s(e._f("getHm")(t.start_datetime))+"-"+e._s(e._f("getHm")(t.end_datetime)))]),e._v(" "),i("dd",[e._v(e._s(t.film_version)+" "+e._s(t.language))]),e._v(" "),i("dd",[e._v(e._s(t.sell_price)+"元")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t._isSetShow,expression:"item._isSetShow"}],staticClass:"setbox"},[i("p",{on:{click:function(i){return i.stopPropagation(),e.delPlan(t.screen_id,t._id)}}},[e._v("删除")])])])})],2)])}),e._v(" "),i("div",{ref:"drag",staticClass:"drag-film flimStatus0",style:{left:e.filmPos.pointXCenter+"px",top:e.filmPos.pointYCenter+"px",width:e.dragFilm.film_long+"px"},on:{click:e.downFilm}},[i("dl",{staticClass:"drag-film-content"},[i("dt",[e._v(e._s(e.dragFilm.film_name))]),e._v(" "),i("dd",[e._v(e._s(e.dragFilm.start_time)+"-"+e._s(e.dragFilm.end_time))]),e._v(" "),i("dd",[e._v(e._s(e.dragFilm.film_version)+" "+e._s(e.dragFilm.language))]),e._v(" "),i("dd",[e._v(e._s(e.dragFilm.sell_price)+"元")])])]),e._v(" "),i("div",{staticClass:"mark-line",style:{left:e.filmPos.pointXCenter+"px",top:0,height:81*e.filmPos.pointYCenter+"px"}})],2)]),e._v(" "),i("div",{staticClass:"plan-page-btns"},[i("goBack"),e._v(" "),0!=e.saveFilm.length?i("el-button",{attrs:{type:"warning",size:"medium"},on:{click:e.agree}},[e._v("审核影片")]):e._e()],1)],1)},s=[],a=(i("2338"),i("fb37"),i("34a3"),i("a506")),r=(i("f763"),i("7bc1"),i("63ff"),i("e71e")),c=i("b775");function o(e){return Object(c["a"])({url:"/api/searchFilm",method:"post",data:e})}function l(e){return Object(c["a"])({url:"/api/addSession",method:"post",data:e})}function d(e){return Object(c["a"])({url:"/api/getScreenSession",method:"get",params:e})}function f(e){return Object(c["a"])({url:"/api/delSession",method:"post",data:e})}function m(e){return Object(c["a"])({url:"/api/agreeSession",method:"post",data:e})}var u=i("ed08"),h=i("a3ba");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(i,!0).forEach(function(t){Object(a["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var p={components:{goBack:h["a"]},data:function(){return{listLoading:!0,effectiveTimeLong:[],filmPos:{},nowDate:new Date,initConfig:{startPoint:6,endPoint:23,screenNameW:170,startPointStamp:""},dragFilm:{},defaultStopTime:0,searchInfo:{film_name:"",language:"",languageArr:[],film_version:"",film_versionArr:[],sell_price:""},isAdd:!1,saveFilm:[],screenList:[],cinema_id:null,agreeFilm:[]}},mounted:function(){this.cinema_id=this.$route.query.cinema_id,this.initConfig.startPointStamp=Object(u["c"])("".concat(Object(u["b"])(this.nowDate,"YMD")," ").concat(this.initConfig.startPoint,":0:0"))/1e3,this.initTable(this.initConfig),this.getScreenList()},computed:{},methods:{initTable:function(e){for(var t=e.startPoint,i=e.endPoint,n=t;n<=i;n++)this.effectiveTimeLong.push(n);this.defaultStopTime=3600*this.initConfig.startPoint},getScreenList:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.listLoading=!0,d({cinema_id:this.cinema_id,selectDate:"".concat(Object(u["b"])(this.nowDate,"YMD"))}).then(function(e){var i=e.data,n=(e.code,e.msg),s=i.screen;0==s.length&&t.$message({message:n,type:"error"});for(var a=i.session,r=0;r<s.length;r++){s[r].children=[];for(var c=0;c<a.length;c++)s[r]._id==a[c].screen_id&&(a[c]._start_time=parseInt((Object(u["c"])(a[c].start_datetime)/1e3-t.initConfig.startPointStamp)/60),a[c]._isSetShow=!1,s[r].children.push(a[c]))}t.saveFilm=a,t.screenList=s,t.listLoading=!1});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),drapMove:function(e){if(this.isAdd){var t=e.pageX,i=e.pageY,n=this.$refs.screenbox,s=this.$refs.drag,a=this.$refs.lines[0],r=n.offsetHeight,c=162*this.effectiveTimeLong.length,o=this.getPos(n),l=o.top,d=(o.left,this.getPos(a).left);if(t<d||t>d+c||i<=l||i>=l+r)this.filmPos={pointXCenter:-9999,pointYCenter:0};else{var f=t-d,m=i-l,h=null;h=f-s.offsetWidth/2;h<=0&&(h=0),h>=60*this.effectiveTimeLong.length-this.dragFilm.film_long&&(h=60*this.effectiveTimeLong.length-this.dragFilm.film_long),this.filmPos.pointXCenter=h+170;var g=this.initConfig.startPointStamp+60*h;this.dragFilm.start_time=Object(u["b"])(g,"hm"),this.dragFilm.end_time=Object(u["b"])(60*this.dragFilm.film_long+g,"hm"),this.dragFilm._start_time=parseInt(h);var _=parseInt(m/81),p=81*_;this.screenList[_]&&(this.dragFilm.screen_id=this.screenList[_]._id,this.dragFilm.screen_name=this.screenList[_].screen_name),this.filmPos.pointYCenter=p,this.dragFilm._t=p}}},handleSelect:function(e){this.searchInfo.language="",this.searchInfo.film_version="",this.searchInfo.languageArr=e.language.split("/"),this.searchInfo.film_versionArr=e.film_version.split("/"),this.dragFilm=e,this.dragFilm.film_id=e._id,delete this.dragFilm._id,delete this.dragFilm.__v},querySearchAsync:function(e,t){""!=e&&o({film_name:e}).then(function(e){var i=e.data;i.forEach(function(e){e.value=e.film_name}),t(i)})},addFilm:function(){this.dragFilm.language=this.searchInfo.language,this.dragFilm.film_version=this.searchInfo.film_version,this.dragFilm.sell_price=this.searchInfo.sell_price,this.isAdd?(this.$message({message:"影片已取消",type:"success"}),this.isAdd=!1):(this.$message({message:"影片已添加，请将鼠标拖动至时间轴",type:"success"}),this.isAdd=!0)},downFilm:function(){var e=this;if(0==this.filmRepeat(this.saveFilm,_({},this.dragFilm))){var t=_({},this.dragFilm);t.cinema_id=this.cinema_id,t.status=0,t.start_datetime="".concat(Object(u["b"])(this.nowDate,"YMD")," ").concat(t.start_time),t.end_datetime="".concat(Object(u["b"])(this.nowDate,"YMD")," ").concat(t.end_time),this.saveFilm._isSetShow=!1,this.saveFilm.push(t),l(t).then(function(i){var n=i.data,s=_({},t,{},n);e.screenList.forEach(function(e){e._id==s.screen_id&&e.children.push(s)})})}},filmRepeat:function(e,t){var i=0;return e.forEach(function(e){var n=1*e._start_time,s=n+e.film_long,a=1*t._start_time,r=a+e.film_long;e.screen_id==t.screen_id&&(a>=n&&a<=s||r>=n&&r<=s)&&i++}),i},setRightClick:function(e,t,i){e.preventDefault();var n=this.screenList[t].children[i];n._isSetShow=!n._isSetShow},delPlan:function(e,t){var i=this;this.$confirm("群定要删除该排期吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){f({_id:t}).then(function(n){i.$message({message:n.msg,type:"success"}),i.saveFilm.forEach(function(e,n){e._id==t&&i.saveFilm.splice(n,1)}),i.screenList.forEach(function(i){i._id==e&&i.children.forEach(function(e,n){e._id==t&&i.children.splice(n,1)})})})})},agree:function(){var e=this;if(0!=this.agreeFilm.length){var t=this.agreeFilm.map(function(e){return e._id});m(t).then(function(t){e.$message({message:t.msg,type:"success"}),e.agreeFilm=[],e.getScreenList()})}else this.$message({message:"请先选择影片",type:"error"})},tapSelect:function(e,t,i){if(0==i){var n=Object(u["a"])(this.agreeFilm,"_id",{screen_id:e,_id:t}),s=document.querySelectorAll(".drag-film");if(n)for(var a=0;a<s.length;a++)s[a].getAttribute("id")==n[0]._id&&(s[a].className=s[a].className.replace(/\sbd/g,""));else{this.agreeFilm.push({screen_id:e,_id:t});for(var r=0;r<s.length;r++)s[r].getAttribute("id")==t&&(s[r].className=s[r].className+" bd")}}},getSelectData:function(e){this.initConfig.startPointStamp=Object(u["c"])("".concat(Object(u["b"])(this.nowDate,"YMD")," ").concat(this.initConfig.startPoint,":0:0"))/1e3,this.getScreenList()},getPos:function(e){var t=0,i=0;while(e)t+=e.offsetTop,i+=e.offsetLeft,e=e.offsetParent;return{left:i,top:t}}},filters:{getHm:function(e){return Object(u["b"])(e,"hm")}}},v=p,b=(i("0d8d"),i("6691")),w=Object(b["a"])(v,n,s,!1,null,null,null);t["default"]=w.exports},a3ba:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-button",{attrs:{size:"medium"},on:{click:e.goBack}},[e._v("返回")])},s=[],a={data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}},r=a,c=i("6691"),o=Object(c["a"])(r,n,s,!1,null,"6d81d39c",null);t["a"]=o.exports},e143:function(e,t,i){},ed08:function(e,t,i){"use strict";i.d(t,"b",function(){return s}),i.d(t,"c",function(){return a}),i.d(t,"a",function(){return r});i("f763"),i("3b54"),i("df36"),i("7bc1"),i("34a3"),i("0857"),i("9090");function n(e){return 1*e<10?"0"+e:e}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YMDhms",i=null;i="[object Date]"==Object.prototype.toString.call(e)?e:e/1e10<1?1e3*e:e;var s=new Date(i),a=s.getFullYear(),r=n(s.getMonth()+1),c=n(s.getDate()),o=n(s.getHours()),l=n(s.getMinutes()),d=n(s.getSeconds()),f=new Map([["Y",a],["M",r],["D",c],["h",o],["hm","".concat(o,":").concat(l)],["hms","".concat(o,":").concat(l,":").concat(d)],["YM","".concat(a,"-").concat(r)],["YMD","".concat(a,"-").concat(r,"-").concat(c)],["YMDhms","".concat(a,"-").concat(r,"-").concat(c," ").concat(o,":").concat(l,":").concat(d)],["YMDhm","".concat(a,"-").concat(r,"-").concat(c," ").concat(o,":").concat(l)]]);return f.get(t)},a=function(e){var t=e.replace(/-/g,"/");return new Date(t).getTime()},r=function(e,t,i){var n=i[t]?i[t]:i,s="";return e.forEach(function(i,a){i[t]==n&&(s=e.splice(a,1))}),s}}}]);