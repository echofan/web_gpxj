define("club/wallet",["libs/subscribe","libs/template"],function(e,t,s){var n=e("libs/subscribe"),i=e("libs/template");i.helper("numToPercent",function(e){return(100*e).toFixed(2)}),i.helper("shortDate",function(e){return e.substring(4,6)+"."+e.substring(6)});var a={bindEvent:function(){$("body").delegate(".js-tap",$.Func.TAP,function(e){var t=$(this).data("handler");a[t]&&a[t].call(this)})},subscribe:function(){var e=$(this).data("productid");return!!e&&void($.User.wxgzh?location.href="../../pay/pay.html?productid="+e:$.Func.showLayer("#popBindAccount"))},addStock:function(){var e={jsonrpc:"2.0",method:"WeiPan.WeiPanStocks",id:54321,params:{userid:"186656397319",stockid:"000002.SH",seq:4,token:"da97b4ccb9fc02b66534f6ff31efc60e938da8ae"}};$.Func.ajax(e,function(e){var t=e.result;t&&$(this).addClass("on")})},closeLayer:function(){$(this).parent().parent().removeClass("show")},formatDate:function(e){var t="";return e&&(t=e.substring(0,4)+"年"+e.substring(4,6)+"月"+e.substring(6)+"日"),t},getWeipan:function(){var e={jsonrpc:"2.0",method:"WeiPan.WeiPanStocks",id:54321,params:{}};$.Func.ajax(e,function(e){var t=e.result;if(t){var s=t.data?t.data.length:0;if($("#date").html(t.date),$("#recommend").html(s),s){var n=i("li-template",t);$("#stockList").html(n)}else $("#subscribe").addClass("show-empty")}})},showSubscribe:function(e){$("#noSubscribe").removeClass("hide"),$("#noSubscribe img").each(function(e,t){var s=$(t).data("src");$(t).attr("src",s)})},init:function(){var e=this;if($.Func.getUserInfo(),$.User.wxgzh){var t=$.User.userid,s="weipan";n.vipService(t,function(t){~$.inArray(s,t)?(e.getWeipan(),$("#subscribe").removeClass("hide")):e.showSubscribe()})}else e.showSubscribe();this.bindEvent()}};s.exports=a});