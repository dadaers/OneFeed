(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5Ozd":function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("Mwp2"),a("VXEj")),i=a("q1tI"),c=a.n(i),l=a("9kvl"),o=a("HeI0"),s=a("IpYr"),u=a("706U"),p=a.n(u),m=function(e){var t=e.dispatch,a=e.hackernews.list,l=e.loading;return Object(i["useEffect"])((function(){t({type:"hackernews/fetch",payload:{}})}),[]),c.a.createElement(n["a"],{style:{marginTop:24,backgroundColor:"#f6f6ef"},bordered:!1,bodyStyle:{padding:"8px 32px 32px 32px"},extra:c.a.createElement(s["a"],null)},c.a.createElement(r["b"],{size:"large",loading:0===a.length&&l,rowKey:"id",itemLayout:"vertical",dataSource:a,renderItem:function(e){return c.a.createElement(r["b"].Item,{className:p.a.ListItem},c.a.createElement(r["b"].Item.Meta,{className:p.a.listItemMeta,title:c.a.createElement("span",null,c.a.createElement("a",{className:p.a.listItemMetaTitle,href:e.link,target:"_blank",rel:"noreferrer"},e.title),c.a.createElement("span",{style:{color:"#828282","font-size":12}}," (".concat(e.link.split("/")[2],")")," ",c.a.createElement(o["a"],{isFavorite:e.is_favorite,message_id:e.message_id})))}),c.a.createElement("span",{style:{color:"#828282","font-size":12}},"".concat(e.points," | ").concat(e.comments)))}}))};t["default"]=Object(l["a"])((function(e){var t=e.hackernews,a=e.loading;return{hackernews:t,loading:a.models.hackernews}}))(m)},"706U":function(e,t,a){e.exports={listItemMetaTitle:"listItemMetaTitle___2zWRN",listItemMeta:"listItemMeta___1IlEI",listItemExtra:"listItemExtra___2o-PF",ListItem:"ListItem___3ObIm",selfTrigger:"selfTrigger___10hac"}},IpYr:function(e,t,a){"use strict";a("+L6B");var n=a("2/Rp"),r=a("1OyB"),i=a("vuIU"),c=a("Ji7U"),l=a("LK+K"),o=a("q1tI"),s=a.n(o),u=a("o0o1"),p=a.n(u),m=a("HaE+"),d=a("t3Un");function f(){return I.apply(this,arguments)}function I(){return I=Object(m["a"])(p.a.mark((function e(){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d["a"])("/api/crawler/fetch",{method:"post"}));case 1:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var h=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(r["a"])(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),e.state={updating:!1},e.update=function(){e.setState((function(){return{updating:!0}})),f().then((function(){e.setState((function(){return{updating:!1}})),window.location.reload(!1)}))},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this,t=this.state.updating;return s.a.createElement(n["a"],{type:"primary",loading:t,onClick:function(){return e.update()}},"Feed Now!")}}]),a}(o["Component"]);t["a"]=h}}]);