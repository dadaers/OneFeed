(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5Ozd":function(e,t,n){"use strict";n.r(t);n("IzEo");var a=n("bx4M"),r=(n("Mwp2"),n("VXEj")),c=n("q1tI"),o=n.n(c),l=n("Tm+p"),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zm-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}},{tag:"path",attrs:{d:"M894 345a343.92 343.92 0 00-189-130v.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4a31.95 31.95 0 0040.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102zm505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1A367.31 367.31 0 00729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"}},{tag:"path",attrs:{d:"M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}}]},name:"comment",theme:"outlined"},s=i,u=n("6VBw"),m=function(e,t){return c["createElement"](u["a"],Object.assign({},e,{ref:t,icon:s}))};m.displayName="CommentOutlined";var f=c["forwardRef"](m),p=n("9kvl"),d=n("706U"),b=n.n(d),y=n("Hx5s"),v=function(e){var t=e.dispatch,n=e.hackernews.list,i=e.loading;Object(c["useEffect"])((function(){t({type:"hackernews/fetch",payload:{}})}),[]);var s=function(e){var t=e.type,n=e.text;switch(t){case"star-o":return o.a.createElement("span",null,o.a.createElement(l["a"],{style:{marginRight:3}}),n);case"comment-o":return o.a.createElement("span",null,o.a.createElement(f,{style:{marginRight:3}}),n);default:return null}};return o.a.createElement(y["a"],null,o.a.createElement(a["a"],{style:{marginTop:24},bordered:!1,bodyStyle:{padding:"8px 32px 32px 32px"}},o.a.createElement(r["b"],{size:"large",loading:0===n.length&&i,rowKey:"id",itemLayout:"vertical",dataSource:n,renderItem:function(e){return o.a.createElement(r["b"].Item,null,o.a.createElement(r["b"].Item.Meta,{title:o.a.createElement("a",{className:b.a.listItemMetaTitle,href:e.link},e.title)}),o.a.createElement(s,{key:"star",type:"star-o",text:e.points}),o.a.createElement(s,{key:"comments",type:"comment-o",text:e.comments}))}})))};t["default"]=Object(p["a"])((function(e){var t=e.hackernews,n=e.loading;return{hackernews:t,loading:n.models.hackernews}}))(v)},"706U":function(e,t,n){e.exports={listItemMetaTitle:"listItemMetaTitle___2zWRN",listItemExtra:"listItemExtra___2o-PF",selfTrigger:"selfTrigger___10hac"}},IzEo:function(e,t,n){"use strict";n("cIOH"),n("lnY3"),n("Znn+"),n("1GLa")},"Tm+p":function(e,t,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},c=r,o=n("6VBw"),l=function(e,t){return a["createElement"](o["a"],Object.assign({},e,{ref:t,icon:c}))};l.displayName="StarOutlined";t["a"]=a["forwardRef"](l)},bx4M:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var a=n("q1tI"),r=n("TSYQ"),c=n.n(r),o=n("BGR+"),l=n("H84U");function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=function(e){return a["createElement"](l["a"],null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.hoverable,m=void 0===l||l,f=u(e,["prefixCls","className","hoverable"]),p=n("card",r),d=c()("".concat(p,"-grid"),o,s({},"".concat(p,"-grid-hoverable"),m));return a["createElement"]("div",i({},f,{className:d}))}))},f=m;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=function(e){return a["createElement"](l["a"],null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.avatar,i=e.title,s=e.description,u=d(e,["prefixCls","className","avatar","title","description"]),m=n("card",r),f=c()("".concat(m,"-meta"),o),b=l?a["createElement"]("div",{className:"".concat(m,"-meta-avatar")},l):null,y=i?a["createElement"]("div",{className:"".concat(m,"-meta-title")},i):null,v=s?a["createElement"]("div",{className:"".concat(m,"-meta-description")},s):null,g=y||v?a["createElement"]("div",{className:"".concat(m,"-meta-detail")},y,v):null;return a["createElement"]("div",p({},u,{className:f}),b,g)}))},y=b,v=n("ZTPi"),g=n("qrJ5"),h=g["a"],E=n("/kpp"),O=E["a"],w=n("3Nzz");function x(e){return x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function T(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function z(e){var t=M();return function(){var n,a=R(e);if(t){var r=R(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var L=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function B(e){var t=e.map((function(t,n){return a["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a["createElement"]("span",null,t))}));return t}var K=function(e){T(n,e);var t=z(n);function n(){var e;return k(this,n),e=t.apply(this,arguments),e.onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,r,l=t.getPrefixCls,i=t.direction,s=e.props,u=s.prefixCls,m=s.className,f=s.extra,p=s.headStyle,d=void 0===p?{}:p,b=s.bodyStyle,y=void 0===b?{}:b,g=s.title,E=s.loading,x=s.bordered,k=void 0===x||x,P=s.size,C=s.type,T=s.cover,S=s.actions,z=s.tabList,I=s.children,_=s.activeTabKey,M=s.defaultActiveTabKey,R=s.tabBarExtraContent,K=s.hoverable,G=s.tabProps,q=void 0===G?{}:G,A=L(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=l("card",u),H=0===y.padding||"0px"===y.padding?{padding:24}:void 0,J=a["createElement"]("div",{className:"".concat(V,"-loading-content"),style:H},a["createElement"](h,{gutter:8},a["createElement"](O,{span:22},a["createElement"]("div",{className:"".concat(V,"-loading-block")}))),a["createElement"](h,{gutter:8},a["createElement"](O,{span:8},a["createElement"]("div",{className:"".concat(V,"-loading-block")})),a["createElement"](O,{span:15},a["createElement"]("div",{className:"".concat(V,"-loading-block")}))),a["createElement"](h,{gutter:8},a["createElement"](O,{span:6},a["createElement"]("div",{className:"".concat(V,"-loading-block")})),a["createElement"](O,{span:18},a["createElement"]("div",{className:"".concat(V,"-loading-block")}))),a["createElement"](h,{gutter:8},a["createElement"](O,{span:13},a["createElement"]("div",{className:"".concat(V,"-loading-block")})),a["createElement"](O,{span:9},a["createElement"]("div",{className:"".concat(V,"-loading-block")}))),a["createElement"](h,{gutter:8},a["createElement"](O,{span:4},a["createElement"]("div",{className:"".concat(V,"-loading-block")})),a["createElement"](O,{span:3},a["createElement"]("div",{className:"".concat(V,"-loading-block")})),a["createElement"](O,{span:16},a["createElement"]("div",{className:"".concat(V,"-loading-block")})))),U=void 0!==_,Y=j(j({},q),(n={},N(n,U?"activeKey":"defaultActiveKey",U?_:M),N(n,"tabBarExtraContent",R),n)),D=z&&z.length?a["createElement"](v["a"],j({size:"large"},Y,{className:"".concat(V,"-head-tabs"),onChange:e.onTabChange}),z.map((function(e){return a["createElement"](v["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(g||f||D)&&(r=a["createElement"]("div",{className:"".concat(V,"-head"),style:d},a["createElement"]("div",{className:"".concat(V,"-head-wrapper")},g&&a["createElement"]("div",{className:"".concat(V,"-head-title")},g),f&&a["createElement"]("div",{className:"".concat(V,"-extra")},f)),D));var Z=T?a["createElement"]("div",{className:"".concat(V,"-cover")},T):null,F=a["createElement"]("div",{className:"".concat(V,"-body"),style:y},E?J:I),Q=S&&S.length?a["createElement"]("ul",{className:"".concat(V,"-actions")},B(S)):null,W=Object(o["a"])(A,["onTabChange"]);return a["createElement"](w["b"].Consumer,null,(function(t){var n,o=P||t,l=c()(V,m,(n={},N(n,"".concat(V,"-loading"),E),N(n,"".concat(V,"-bordered"),k),N(n,"".concat(V,"-hoverable"),K),N(n,"".concat(V,"-contain-grid"),e.isContainGrid()),N(n,"".concat(V,"-contain-tabs"),z&&z.length),N(n,"".concat(V,"-").concat(o),o),N(n,"".concat(V,"-type-").concat(C),!!C),N(n,"".concat(V,"-rtl"),"rtl"===i),n));return a["createElement"]("div",j({},W,{className:l}),r,Z,F,Q)}))},e}return C(n,[{key:"isContainGrid",value:function(){var e;return a["Children"].forEach(this.props.children,(function(t){t&&t.type&&t.type===f&&(e=!0)})),e}},{key:"render",value:function(){return a["createElement"](l["a"],null,this.renderCard)}}]),n}(a["Component"]);K.Grid=f,K.Meta=y},lnY3:function(e,t,n){}}]);