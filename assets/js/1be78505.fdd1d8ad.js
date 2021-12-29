"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[9514,8177],{38916:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ce}});var a=n(67294),r=n(3905),o=n(27401),l=n(64058),i=n(86010),c=n(21414),s=n(93301),u=n(32827),d=n(83117);var m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(97325),h=n(80102),b=n(83699),f=n(2735),y=n(38654),g="menuLinkText_1J2g",v="hasHref_2fq0",k=n(51048),E=["items"],N=["item"],Z=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],C=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,E);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,d.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,h.Z)(e,N);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,d.Z)({item:t},n)):a.createElement(I,(0,d.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,h.Z)(e,Z),u=n.items,m=n.label,f=n.collapsible,y=n.className,E=n.href,N=function(e){var t=(0,k.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),_=(0,c._F)(n,o),T=(0,c.uR)({initialState:function(){return!!f&&(!_&&n.collapsed)}}),S=T.collapsed,I=T.setCollapsed,L=T.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:_,collapsed:S,setCollapsed:I}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},y)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":f&&!E,"menu__link--active":_},t[g]=!f,t[v]=!!N,t)),onClick:f?function(e){null==r||r(n),E?I(!1):(e.preventDefault(),L())}:function(){null==r||r(n)},href:f?null!=N?N:"#":N},s),m),E&&f&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(C,{items:u,tabIndex:S?-1:0,onItemClick:r,activePath:o,level:l+1})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(0,h.Z)(e,_),s=t.href,u=t.label,m=t.className,p=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(s)?u:a.createElement("span",null,u,a.createElement(y.Z,null))))}var L="sidebar_15mo",A="sidebarWithHideableNavbar_267A",P="sidebarHidden_2kNb",M="sidebarLogo_3h0W",B="menu_Bmed",x="menuWithAnnouncementBar_2WvA",D="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R";function F(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",D),onClick:t},a.createElement(m,{className:w}))}function R(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(L,(t={},t[A]=p,t[P]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",B,(n={},n[x]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:o,activePath:r,level:1}))),h&&a.createElement(F,{onClick:l}))}var O=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function j(e){return a.createElement(c.Cv,{component:O,props:e})}var H=a.memo(R),W=a.memo(j);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(W,e))}var V=n(54384),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Y={Prism:n(87410).default,theme:U};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},J.apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},X=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=J({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=J({},n,{backgroundColor:null}),r};function $(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),q(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?X(e.theme,e.language):void 0;return t.themeDict=n})),q(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=J({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?J({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),q(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),q(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=J({},$(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?J({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),q(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=Q(u,d.type),d.alias&&(u=Q(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)G(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return G(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),te=ee;var ne={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(48002),re=function(){var e=(0,c.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||ne,a=e.darkTheme||n;return t?a:n},oe="codeBlockContainer_K1bP",le="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",ce="codeBlock_23N8",se="copyButton_Ue-o",ue="codeBlockLines_39YC";function de(e){var t,n=e.children,r=e.className,o=e.metastring,l=e.title,s=(0,c.LU)().prism,u=(0,a.useState)(!1),m=u[0],h=u[1],b=(0,a.useState)(!1),f=b[0],y=b[1];(0,a.useEffect)((function(){y(!0)}),[]);var g=(0,c.bc)(o)||l,v=re(),k=Array.isArray(n)?n.join(""):n,E=null!=(t=(0,c.Vo)(r))?t:s.defaultLanguage,N=(0,c.nZ)(k,o,E),Z=N.highlightLines,_=N.code,C=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(_),h(!0),setTimeout((function(){return h(!1)}),2e3)};return a.createElement(te,(0,d.Z)({},Y,{key:String(f),theme:v,code:_,language:E}),(function(e){var t=e.className,n=e.style,o=e.tokens,l=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,i.Z)(oe,r,c.kM.common.codeBlock)},g&&a.createElement("div",{style:n,className:ie},g),a.createElement("div",{className:(0,i.Z)(le,E)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,ce,"thin-scrollbar"),style:n},a.createElement("code",{className:ue},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,d.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(se,"clean-btn"),onClick:C},m?a.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var me=n(58032),pe="details_1VDD";function he(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,d.Z)({},t,{className:(0,i.Z)("alert alert--info",pe,t.className)}))}var be=["mdxType","originalType"];var fe={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,h.Z)(r,be));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(de,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(de,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(he,(0,d.Z)({},e,{summary:n}),r)},h1:(0,me.Z)("h1"),h2:(0,me.Z)("h2"),h3:(0,me.Z)("h3"),h4:(0,me.Z)("h4"),h5:(0,me.Z)("h5"),h6:(0,me.Z)("h6")},ye=n(48177),ge="backToTopButton_35hR",ve="backToTopButtonShow_18ls";function ke(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ee=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=ke(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,ge,(e={},e[ve]=n,e)),type:"button",onClick:function(){return s()}})},Ne=n(76775),Ze={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function _e(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,h=e.sidebarName,b=(0,c.Vq)(),f=u.pluginId,y=u.version,g=(0,a.useState)(!1),v=g[0],k=g[1],E=(0,a.useState)(!1),N=E[0],Z=E[1],_=(0,a.useCallback)((function(){N&&Z(!1),k((function(e){return!e}))}),[N]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:y,tag:(0,c.os)(f,y)}},a.createElement("div",{className:Ze.docPage},a.createElement(Ee,null),b&&a.createElement("aside",{className:(0,i.Z)(Ze.docSidebarContainer,(t={},t[Ze.docSidebarContainerHidden]=v,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ze.docSidebarContainer)&&v&&Z(!0)}},a.createElement(z,{key:h,sidebar:b,path:s.path,onCollapse:_,isHidden:N}),N&&a.createElement("div",{className:Ze.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(m,{className:Ze.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(Ze.docMainContainer,(n={},n[Ze.docMainContainerEnhanced]=v||!b,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ze.docItemWrapper,(o={},o[Ze.docItemWrapperEnhanced]=v,o))},a.createElement(r.Zo,{components:fe},d)))))}var Ce=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Ne.LX)(r.pathname,e)}));if(!l)return a.createElement(ye.default,null);var i=l.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement(_e,{currentDocRoute:l,versionMetadata:n,sidebarName:i},(0,o.Z)(t,{versionMetadata:n})))))}},58032:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(80102),r=n(83117),o=n(67294),l=n(86010),i=n(97325),c=n(21414),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,d),h=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=h,n[s]=!h,n)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},48177:function(e,t,n){n.r(t);var a=n(67294),r=n(64058),o=n(97325);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);