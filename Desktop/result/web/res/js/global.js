define("global",["libs/touch"],function(e,n,i){e("libs/touch"),$.User={},$.CONFIG={BASE:"http://wx.gupiaoxianji.com/gzh/nxb/",WXAPI:"http://wx.gupiaoxianji.com/gzh/nxb/sign/",AJAX:"http://wx.gupiaoxianji.com/wxh5api/",CLUB:"http://wx.gupiaoxianji.com/auth/indexcallbackclub/",INDEX:"http://wx.gupiaoxianji.com/auth/indexcallbackfund/",BIND:"http://wx.gupiaoxianji.com/auth/indexcallbackbind/"},$.Func={TAP:"ontouchstart"in window?"tap":"click",getParam:function(e){for(var n=location.search.substring(1),i=n.split("&"),o=0,t=i.length;o<t;o++){var a=i[o].split("=");if(a[0]==e)return a[1]}},ajax:function(e,n){var i=$.CONFIG.AJAX;$.ajax({url:i,type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify(e),success:function(e){$.isFunction(n)&&n(e)},error:function(e){console.log(e)}})},pop:function(e,n){e&&($("#line").html(e),$("#layer").addClass("show"),$.isFunction(n)&&n())},showLayer:function(e){$(e).addClass("show")},hideLayer:function(e){$(e).removeClass("show")},formatDate:function(e,n){var i,o,t,a=new Date(e);if("Invalid Date"==a){var c=new RegExp(/(\d+)-(\d+)-(\d+)\s.+/),s=e.toString().match(c);i=+s[1],o=+s[2],t=+s[3]}else i=a.getFullYear(),o=a.getMonth()+1,t=a.getDate();return"year"===n?i-=1:"mon"===n&&(o<4?(i-=1,o=12+o-3):o-=3),i=i.toString(),o=o.toString(),t=t.toString(),1===o.length&&(o="0"+o),1===t.length&&(t="0"+t),i+o+t},getUserInfo:function(){$.User={wxapp:parseInt($.Func.cookie.getCookie("WXAppBind")),wxgzh:parseInt($.Func.cookie.getCookie("WXGzhBind")),openid:$.Func.cookie.getCookie("openid"),unionid:$.Func.cookie.getCookie("unionid"),userid:$.Func.cookie.getCookie("userid"),entrance:$.Func.cookie.getCookie("entrance")}},bindGZH:function(e,n,i){var o={jsonrpc:"2.0",method:"User.BindGzhNxb",id:54321,params:{openid:n,userid:e}};$.Func.ajax(o,function(e){$.isFunction(i)&&i(e)})},bindWeixin:function(e,n,i){var o={jsonrpc:"2.0",method:"User.BindWeixin",id:54321,params:{unionid:n,userid:e}};$.Func.ajax(o,function(e){$.isFunction(i)&&i(e)})},cookie:{setCookie:function(e,n){var i=30,o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),document.cookie=e+"="+escape(n)+";path=/;expires="+o.toGMTString()},getCookie:function(e){var n,i=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(i))?unescape(n[2]):null},delCookie:function(e){var n=new Date;n.setTime(n.getTime()-1);var i=getCookie(e);null!==i&&(document.cookie=e+"="+i+";expires="+n.toGMTString())}},getJSAPI:function(){var e=this,n=location.href.split("#")[0];$.ajax({url:$.CONFIG.WXAPI,contentType:"application/json",data:JSON.stringify({url:n}),type:"POST",success:function(n,i){"success"===i&&(wx.config({appId:n.appid,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone","hideMenuItems","chooseWXPay"]}),e.share())}})},share:function(){var e,n,i=$.Func.cookie.getCookie("entrance"),o=function(){},t=function(){};switch(i){case"wallet":e=$.CONFIG.CLUB,n={link:e,title:"股票先机-大数据庄家分析神器",desc:"这个很准！预测股市行情，捕捉庄家意图，埋伏优质个股~ ",imgUrl:"http://wx.gupiaoxianji.com/gzh/nxbtestdev/web/res/img/global/logo.png",success:o,cancel:t};break;default:e=$.CONFIG.INDEX,n={link:e,title:"股票先机-大数据庄家分析神器",desc:"【先机基金】免费体验，总收益率超60%了 ",imgUrl:"http://wx.gupiaoxianji.com/gzh/nxbtestdev/web/res/img/global/logo.png",success:o,cancel:t}}wx.ready(function(){wx.onMenuShareTimeline(n),wx.onMenuShareAppMessage(n),wx.onMenuShareQQ(n),wx.onMenuShareQZone(n),wx.hideMenuItems({menuList:["menuItem:copyUrl"]})})}},$.Func.getJSAPI()});