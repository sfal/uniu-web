(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1mfm":function(e,t,n){},"2VrW":function(e,t,n){},"72Yz":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),a=Object(r.createContext)({});a.Consumer},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},N8DM:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0;var a=r(n("QL1J"));t.ThemeToggler=a.default},QL1J:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("PJYZ")),o=r(n("VbXa")),i=r(n("lSNA")),c=r(n("q1tI")),l=r(n("17x9")),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,i.default)((0,a.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);u.propTypes={children:l.default.func.isRequired};var s=u;t.default=s},Zttt:function(e,t,n){"use strict";n("sV4Q"),n("zlK1"),n("Jsvc"),n("rMck"),n("2VrW");var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=r.createElement("path",{d:"M3 0h14a3 3 0 013 3v8a3 3 0 01-3 3h-6.958l-6.444 4.808A1 1 0 012 18.006V14a2 2 0 01-2-2V3a3 3 0 013-3zm6.378 12H17a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v8a1 1 0 001 1 1 1 0 011 1v3.013L9.378 12zM13 9a2 2 0 110-4 2 2 0 010 4zM7 9a2 2 0 110-4 2 2 0 010 4z"});function c(e){return r.createElement("svg",o({viewBox:"-2 -2.5 24 24",width:24,height:24,preserveAspectRatio:"xMinYMin",className:"email_svg__icon__icon"},e),i)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=r.createElement("path",{d:"M14.017 0h-8.07A5.954 5.954 0 000 5.948v8.07a5.954 5.954 0 005.948 5.947h8.07a5.954 5.954 0 005.947-5.948v-8.07A5.954 5.954 0 0014.017 0zm3.94 14.017a3.94 3.94 0 01-3.94 3.94h-8.07a3.94 3.94 0 01-3.939-3.94v-8.07a3.94 3.94 0 013.94-3.939h8.07a3.94 3.94 0 013.939 3.94v8.07z"}),s=r.createElement("path",{d:"M9.982 4.819A5.17 5.17 0 004.82 9.982a5.17 5.17 0 005.163 5.164 5.17 5.17 0 005.164-5.164A5.17 5.17 0 009.982 4.82zm0 8.319a3.155 3.155 0 110-6.31 3.155 3.155 0 010 6.31z"}),f=r.createElement("circle",{cx:15.156,cy:4.858,r:1.237});function p(e){return r.createElement("svg",l({viewBox:"-2 -2 24 24",width:24,height:24,preserveAspectRatio:"xMinYMin",className:"instagram_svg__icon__icon"},e),u,s,f)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=r.createElement("path",{d:"M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"}),m=r.createElement("path",{d:"M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0-2h12a4 4 0 014 4v12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"});function y(e){return r.createElement("svg",d({viewBox:"-2 -2 24 24",width:24,height:24,preserveAspectRatio:"xMinYMin",className:"facebook_svg__icon__icon"},e),h,m)}var v=n("Wbzz"),g=function(){var e,t;return a.a.createElement("footer",null,a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"content__left"},a.a.createElement("h2",null,"UNIU"),a.a.createElement("p",null,"© Marco Tammaro - Serena Falchieri")),a.a.createElement("div",{className:"content__middle"},a.a.createElement("a",{href:"mailto:uniu.app@gmail.com"},a.a.createElement(c,null)),a.a.createElement("a",((e={target:"_blank",href:"https://www.instagram.com/uniu.app/"}).target="_blank",e),a.a.createElement(p,null)),a.a.createElement("a",((t={target:"_blank",href:"https://www.facebook.com/UniUapp"}).target="_blank",t),a.a.createElement(y,null))),a.a.createElement("div",{className:"content__right"},a.a.createElement(v.Link,{to:"/privacy_policy",activeStyle:{textDecoration:"none"}},"Termini e Condizioni"))))};n("k+Jz");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=r.createElement("defs",null,r.createElement("path",{d:"M2 0h12a2 2 0 012 2v16.747a2 2 0 01-3.493 1.33l-3.014-3.382a2 2 0 00-2.987 0l-3.013 3.383A2 2 0 010 18.748V2a2 2 0 012-2z",id:"logo_svg__a"})),E=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(2 1)"},r.createElement("path",{d:"M43.425 1.5H8.036a8 8 0 00-8 8v1a8 8 0 008 8h35.39",stroke:"#979797",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("rect",{fill:"#E24343",x:29,width:16,height:3,rx:1}),r.createElement("rect",{fill:"#E24343",x:29,y:17,width:16,height:3,rx:1})),r.createElement("g",{transform:"translate(51 2)"},r.createElement("path",{d:"M1.5 17.5v-11a6.5 6.5 0 0113 0v11h0",stroke:"#979797",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("rect",{fill:"#E42C2C",y:7,width:3,height:12,rx:1}),r.createElement("rect",{fill:"#E42C2C",x:13,y:7,width:3,height:12,rx:1})),r.createElement("rect",{transform:"rotate(90 35 46.5)",x:-6,y:7,width:16,height:3,rx:1,fill:"#E24343"}),r.createElement("circle",{cx:2,cy:2,r:2,transform:"translate(71 1)",fill:"#DF1E1E"}),r.createElement("g",{transform:"translate(2 25)"},r.createElement("path",{d:"M73.429 1.5H8a8 8 0 00-8 8v1a8 8 0 008 8h65.429",stroke:"#979797",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("rect",{fill:"#E24343",x:59,width:16,height:3,rx:1}),r.createElement("rect",{fill:"#E24343",x:59,y:17,width:16,height:3,rx:1})),r.createElement("g",{transform:"translate(15 34)"},r.createElement("mask",{id:"logo_svg__b",fill:"#fff"},r.createElement("use",{xlinkHref:"#logo_svg__a"})),r.createElement("path",{d:"M2 0h12a2 2 0 012 2v16.747a2 2 0 01-3.493 1.33l-3.014-3.382a2 2 0 00-2.987 0l-3.013 3.383A2 2 0 010 18.748V2a2 2 0 012-2z",fill:"#000",mask:"url(#logo_svg__b)"})),r.createElement("path",{d:"M17 34h12a2 2 0 012 2v16.681a2 2 0 01-3.47 1.356l-3.06-3.317a2 2 0 00-2.94 0l-3.06 3.317A2 2 0 0115 52.681V36a2 2 0 012-2z",fill:"currentColor"}));function T(e){return r.createElement("svg",b({width:77,height:55},e),w,E)}var O=function(){var e=Object(r.useState)(),t=e[0],n=e[1];Object(r.useEffect)((function(){n("undefined"!=typeof document&&document.querySelector(".banner"))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{style:{transition:"color 0.2s ease-out, background 0.2s ease-out"}},a.a.createElement("nav",null,a.a.createElement("a",{className:"logo",href:"/"},a.a.createElement(T,null)),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",{onClick:function(){t.scrollIntoView({behavior:"smooth"})},href:"/"},"Download"))))),a.a.createElement("div",{className:"fake-header"}))},A=(n("1mfm"),n("N8DM")),C=n("72Yz");function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=r.createElement("path",{d:"M10 15.565a5 5 0 110-10 5 5 0 010 10zm0-15a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm-9-7h2a1 1 0 110 2H1a1 1 0 010-2zm16 0h2a1 1 0 010 2h-2a1 1 0 010-2zm.071-6.071a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM5.757 14.808a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM4.343 3.494l1.414 1.414a1 1 0 01-1.414 1.414L2.93 4.908a1 1 0 011.414-1.414zm11.314 11.314l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 111.414-1.414z"});function k(e){return r.createElement("svg",_({viewBox:"-2 -1.5 24 24",width:24,height:24,preserveAspectRatio:"xMinYMin",className:"sun_svg__icon__icon"},e),S)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x=r.createElement("path",{d:"M12.253.335A10.086 10.086 0 008.768 8c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 019.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335z"});function M(e){return r.createElement("svg",j({viewBox:"-4 -2 24 24",width:24,height:24,preserveAspectRatio:"xMinYMin",className:"moon_svg__icon__icon"},e),x)}var P=function(){Object(r.useContext)(C.a);return a.a.createElement(A.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.a.createElement("div",{onClick:function(){n("light"===t?"dark":"light")},className:"toggle"},a.a.createElement(M,null),a.a.createElement(k,null),a.a.createElement("span",{style:{transform:"translateX("+("dark"===t?26:0)+"px)"},className:"toggle__handle"}))}))};t.a=function(e){var t=e.children;return Object(r.useEffect)((function(){var e="undefined"!=typeof document&&document.querySelector("footer"),t="undefined"!=typeof document&&document.querySelector(".toggle"),n=new IntersectionObserver((function(e){e[0].isIntersecting?(t.style.bottom=null,t.style.transform="translateY(300%)"):(t.style.bottom="2.5rem",t.style.transform="translateY(0%)")}),{root:null,rootMargin:"0px",threshold:.1});e&&n.observe(e)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null),a.a.createElement("div",{style:{margin:"0 auto",padding:"0",transition:"color 0.2s ease-out, background 0.2s ease-out"}},a.a.createElement("main",null,t),a.a.createElement(g,null)),a.a.createElement(P,null))}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},"k+Jz":function(e,t,n){},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("YVoz"),y=n.n(m),v="bodyAttributes",g="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",O="href",A="http-equiv",C="innerHTML",_="itemprop",S="name",k="property",j="rel",x="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",z="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,w.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},K=function(e){return $(e,N)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==_||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,a),ce(f,p);var d={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,s)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),l(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[h.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(g,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,u,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=s()((function(e){return{baseTag:X([O,M],e),bodyAttributes:Q(v,e),defer:$(e,I),encode:$(e,z),htmlAttributes:Q(g,e),linkTags:Z(w.LINK,[j,O],e),metaTags:Z(w.META,[S,E,A,k,_],e),noscriptTags:Z(w.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:Z(w.SCRIPT,[x,C],e),styleTags:Z(w.STYLE,[T],e),title:J(e),titleAttributes:Q(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return V(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return B({},a,((t={})[r.type]=i,t.titleAttributes=B({},o),t));case w.BODY:return B({},a,{bodyAttributes:B({},o)});case w.HTML:return B({},a,{htmlAttributes:B({},o)})}return B({},a,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},sV4Q:function(e,t,n){},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t,n,r=e.description,c=e.lang,l=e.meta,u=e.title,s=Object(i.useStaticQuery)("63159454").site,f=r||s.siteMetadata.description,p=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(o.a,{htmlAttributes:{lang:c},title:u,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-a5da1e3348de9446140c.js.map