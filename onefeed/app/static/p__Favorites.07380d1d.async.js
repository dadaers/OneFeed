(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Outh:function(e,t,a){"use strict";a.r(t);a("IzEo");var i=a("bx4M"),r=(a("Mwp2"),a("VXEj")),l=a("q1tI"),s=a.n(l),n=a("9kvl"),o=a("HeI0"),c=a("UHTa"),m=a.n(c),f=function(e){var t=e.dispatch,a=e.favorites.list,n=e.loading;return Object(l["useEffect"])((function(){t({type:"favorites/fetch",payload:{}})}),[]),s.a.createElement(i["a"],{style:{marginTop:24},bordered:!1,bodyStyle:{padding:"8px 32px 32px 32px"}},s.a.createElement(r["b"],{size:"large",loading:0===a.length&&n,rowKey:"id",itemLayout:"vertical",dataSource:a,renderItem:function(e){return s.a.createElement(r["b"].Item,{className:m.a.ListItem},s.a.createElement(r["b"].Item.Meta,{className:m.a.listItemMeta,title:s.a.createElement("span",null,s.a.createElement("a",{className:m.a.listItemMetaTitle,href:e.link,target:"_blank",rel:"noreferrer"},e.title),s.a.createElement(o["a"],{isFavorite:1,message_id:e.message_id}))}),s.a.createElement("span",{style:{color:"#828a92","font-size":"14px","font-weight":400}},e.source))}}))};t["default"]=Object(n["a"])((function(e){var t=e.favorites,a=e.loading;return{favorites:t,loading:a.models.favorites}}))(f)},UHTa:function(e,t,a){e.exports={listItemMetaTitle:"listItemMetaTitle___23DMD",listItemMeta:"listItemMeta___p2EyG",listItemExtra:"listItemExtra___1gvTX",ListItem:"ListItem___Y7kcF",selfTrigger:"selfTrigger___3Pzx-"}}}]);