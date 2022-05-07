const K=function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function p(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(l){if(l.ep)return;l.ep=!0;const i=p(l);fetch(l.href,i)}};K();var q=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Q(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var R={};Object.defineProperty(R,"__esModule",{value:!0});var Z=function(){function v(){this.seperator=","}return v.prototype.correctFormat=function(m){var p=m.replace(".",","),e=null,l=null,i=null,u=null,t=p.split(","),n=t[0],a=t[1];u=this.fixed_str_digit(3,a);var s=n.split(":"),T=s[0],b=s[1],x=s[2];return e=this.fixed_str_digit(2,T,!1),l=this.fixed_str_digit(2,b,!1),i=this.fixed_str_digit(2,x,!1),e+":"+l+":"+i+","+u},v.prototype.fixed_str_digit=function(m,p,e){if(e===void 0&&(e=!0),p.length==m)return p;if(p.length>m)return p.slice(0,m);if(p.length<m)return e?p.padEnd(m,"0"):p.padStart(m,"0")},v.prototype.tryComma=function(m){m=m.replace(/\r/g,"");var p=/(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g,e=m.split(p);return e.shift(),e},v.prototype.tryDot=function(m){m=m.replace(/\r/g,"");var p=/(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g,e=m.split(p);return e.shift(),this.seperator=".",e},v.prototype.fromSrt=function(m){var p=m,e=this.tryComma(p);e.length==0&&(e=this.tryDot(p));for(var l=[],i=0;i<e.length;i+=4){var u={id:e[i].trim(),startTime:this.correctFormat(e[i+1].trim()),endTime:this.correctFormat(e[i+2].trim()),text:e[i+3].trim()};l.push(u)}return l},v.prototype.toSrt=function(m){for(var p="",e=0;e<m.length;e++){var l=m[e];p+=l.id+`\r
`,p+=l.startTime+" --> "+l.endTime+`\r
`,p+=l.text.replace(`
`,`\r
`)+`\r
\r
`}return p},v}(),tt=R.default=Z,j={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(v,m){(function(e,l){v.exports=l()})(q,function(){return function(){var p={686:function(i,u,t){t.d(u,{default:function(){return J}});var n=t(279),a=t.n(n),s=t(370),T=t.n(s),b=t(817),x=t.n(b);function g(d){try{return document.execCommand(d)}catch{return!1}}var S=function(o){var r=x()(o);return g("cut"),r},h=S;function _(d){var o=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px";var c=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(c,"px"),r.setAttribute("readonly",""),r.value=d,r}var P=function(o,r){var c=_(o);r.container.appendChild(c);var f=x()(c);return g("copy"),c.remove(),f},D=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},c="";return typeof o=="string"?c=P(o,r):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?c=P(o.value,r):(c=x()(o),g("copy")),c},L=D;function F(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(r){return typeof r}:F=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},F(d)}var I=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.action,c=r===void 0?"copy":r,f=o.container,y=o.target,E=o.text;if(c!=="copy"&&c!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&F(y)==="object"&&y.nodeType===1){if(c==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(c==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return L(E,{container:f});if(y)return c==="cut"?h(y):L(y,{container:f})},H=I;function A(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(r){return typeof r}:A=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(d)}function B(d,o){if(!(d instanceof o))throw new TypeError("Cannot call a class as a function")}function N(d,o){for(var r=0;r<o.length;r++){var c=o[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}function W(d,o,r){return o&&N(d.prototype,o),r&&N(d,r),d}function z(d,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(o&&o.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),o&&$(d,o)}function $(d,o){return $=Object.setPrototypeOf||function(c,f){return c.__proto__=f,c},$(d,o)}function Y(d){var o=X();return function(){var c=C(d),f;if(o){var y=C(this).constructor;f=Reflect.construct(c,arguments,y)}else f=c.apply(this,arguments);return U(this,f)}}function U(d,o){return o&&(A(o)==="object"||typeof o=="function")?o:V(d)}function V(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function X(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function C(d){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},C(d)}function M(d,o){var r="data-clipboard-".concat(d);if(!!o.hasAttribute(r))return o.getAttribute(r)}var G=function(d){z(r,d);var o=Y(r);function r(c,f){var y;return B(this,r),y=o.call(this),y.resolveOptions(f),y.listenClick(c),y}return W(r,[{key:"resolveOptions",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof f.action=="function"?f.action:this.defaultAction,this.target=typeof f.target=="function"?f.target:this.defaultTarget,this.text=typeof f.text=="function"?f.text:this.defaultText,this.container=A(f.container)==="object"?f.container:document.body}},{key:"listenClick",value:function(f){var y=this;this.listener=T()(f,"click",function(E){return y.onClick(E)})}},{key:"onClick",value:function(f){var y=f.delegateTarget||f.currentTarget,E=this.action(y)||"copy",O=H({action:E,container:this.container,target:this.target(y),text:this.text(y)});this.emit(O?"success":"error",{action:E,text:O,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(f){return M("action",f)}},{key:"defaultTarget",value:function(f){var y=M("target",f);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(f){return M("text",f)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(f,y)}},{key:"cut",value:function(f){return h(f)}},{key:"isSupported",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof f=="string"?[f]:f,E=!!document.queryCommandSupported;return y.forEach(function(O){E=E&&!!document.queryCommandSupported(O)}),E}}]),r}(a()),J=G},828:function(i){var u=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function n(a,s){for(;a&&a.nodeType!==u;){if(typeof a.matches=="function"&&a.matches(s))return a;a=a.parentNode}}i.exports=n},438:function(i,u,t){var n=t(828);function a(b,x,g,S,h){var _=T.apply(this,arguments);return b.addEventListener(g,_,h),{destroy:function(){b.removeEventListener(g,_,h)}}}function s(b,x,g,S,h){return typeof b.addEventListener=="function"?a.apply(null,arguments):typeof g=="function"?a.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(_){return a(_,x,g,S,h)}))}function T(b,x,g,S){return function(h){h.delegateTarget=n(h.target,x),h.delegateTarget&&S.call(b,h)}}i.exports=s},879:function(i,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var n=Object.prototype.toString.call(t);return t!==void 0&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var n=Object.prototype.toString.call(t);return n==="[object Function]"}},370:function(i,u,t){var n=t(879),a=t(438);function s(g,S,h){if(!g&&!S&&!h)throw new Error("Missing required arguments");if(!n.string(S))throw new TypeError("Second argument must be a String");if(!n.fn(h))throw new TypeError("Third argument must be a Function");if(n.node(g))return T(g,S,h);if(n.nodeList(g))return b(g,S,h);if(n.string(g))return x(g,S,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function T(g,S,h){return g.addEventListener(S,h),{destroy:function(){g.removeEventListener(S,h)}}}function b(g,S,h){return Array.prototype.forEach.call(g,function(_){_.addEventListener(S,h)}),{destroy:function(){Array.prototype.forEach.call(g,function(_){_.removeEventListener(S,h)})}}}function x(g,S,h){return a(document.body,g,S,h)}i.exports=s},817:function(i){function u(t){var n;if(t.nodeName==="SELECT")t.focus(),n=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),n=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),T=document.createRange();T.selectNodeContents(t),s.removeAllRanges(),s.addRange(T),n=s.toString()}return n}i.exports=u},279:function(i){function u(){}u.prototype={on:function(t,n,a){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:n,ctx:a}),this},once:function(t,n,a){var s=this;function T(){s.off(t,T),n.apply(a,arguments)}return T._=n,this.on(t,T,a)},emit:function(t){var n=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),s=0,T=a.length;for(s;s<T;s++)a[s].fn.apply(a[s].ctx,n);return this},off:function(t,n){var a=this.e||(this.e={}),s=a[t],T=[];if(s&&n)for(var b=0,x=s.length;b<x;b++)s[b].fn!==n&&s[b].fn._!==n&&T.push(s[b]);return T.length?a[t]=T:delete a[t],this}},i.exports=u,i.exports.TinyEmitter=u}},e={};function l(i){if(e[i])return e[i].exports;var u=e[i]={exports:{}};return p[i](u,u.exports,l),u.exports}return function(){l.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return l.d(u,{a:u}),u}}(),function(){l.d=function(i,u){for(var t in u)l.o(u,t)&&!l.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:u[t]})}}(),function(){l.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)}}(),l(686)}().default})})(j);var et=Q(j.exports);const nt=new tt,k=new et("#copy");k.on("success",function(v){w("\u590D\u5236\u6210\u529F")});k.on("error",function(v){w("\u590D\u5236\u5931\u8D25")});document.getElementById("go").addEventListener("click",()=>{let v=document.getElementById("srt").value,m=document.getElementById("style").value!==""?document.getElementById("style").value:"Top";if(v!==""){let p=rt(v,m);document.getElementById("ass").value=p}else w("\u8BF7\u586B\u5165 SRT \u5B57\u5E55\u6B63\u6587")});function w(v){document.getElementById("log").insertAdjacentHTML("afterbegin",v+"<br>"),console.log(v)}function rt(v,m){let p=nt.fromSrt(v),e=new Array;for(let t in p)if(p[t].text.includes(`
`)){let n=p[t].text.split(`
`);w(`[\u62C6\u5206\u591A\u884C][${t}] ${JSON.stringify(n)}`);for(let a in n){n[a].startsWith("-")&&w(`[\u62C6\u5206\u591A\u884C][${t}][${a}] ${n[a]} \u7684\u5F00\u5934\u662F -\uFF0C\u79FB\u9664...`);let s={startTime:p[t].startTime,endTime:p[t].endTime,text:n[a],style:"Default",comment:!1};e.push(s)}}else{let n={startTime:p[t].startTime,endTime:p[t].endTime,text:p[t].text,style:"Default",comment:!1};e.push(n)}for(let t in e)for(let n=0;n<e.length;n++)e[n].startTime==e[t].endTime&&e[n].text==e[t].text&&(w(`[\u5408\u5E76\u5206\u88C2\u884C][${t} ==> ${n}](${e[t].endTime} => ${e[n].endTime}) ${e[n].text}`),e[t].endTime=e[n].endTime,e.splice(n,1),n=n-1);for(let t in e)(e[t].text.startsWith("(")&&e[t].text.endsWith(")")||e[t].text.startsWith("\uFF08")&&e[t].text.endsWith("\uFF09"))&&(w(`[\u62EC\u53F7\u884C\u6837\u5F0F][\u884C ${t}] ${e[t].text} \u66F4\u6362\u4E3A ${m} \u6837\u5F0F`),e[t].style=m);for(let t in e){let n=e[t].text.split("-");if(n.length>=3&&n[0]==""&&n[1]!=""&&n[2]!=""){w(`[\u5355\u884C\u591A\u91CD\u5BF9\u8BDD][\u884C ${t}] ${e[t].text} \u53EF\u80FD\u4E3A\u591A\u91CD\u5BF9\u8BDD\uFF0C\u51C6\u5907\u62C6\u5206`),n.splice(0,1);for(let a in n){n[a]=n[a].trim(),w(`[\u5355\u884C\u591A\u91CD\u5BF9\u8BDD][\u884C ${t}] \u62C6\u5206\u5355\u884C(${a}): ${n[a]}`);let s={startTime:e[t].startTime,endTime:e[t].endTime,text:n[a],style:"Default",comment:!1};e.splice(parseInt(t)+1,0,s),e[t].comment=!0}}}console.log(e);let l=new Date,u=`[Script Info]
; Script generated by LavaAnimeSubTools
; Generate time: ${`${l.toLocaleString("zh-CN",{hour12:!1})} (${l.getTime()})`}
Title: New Subtitle
Original Script: LavaAnimeSubTools
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
PlayResX: 1920
PlayResY: 1080

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,\u963F\u91CC\u5DF4\u5DF4\u666E\u60E0\u4F53 M,81,&H00FFFFFF,&H00FFFFFF,&H002A2A2A,&HFF0E0807,0,0,0,0,99,100,1,0,1,3,0,2,135,135,32,1
Style: Top,\u963F\u91CC\u5DF4\u5DF4\u666E\u60E0\u4F53 B,64,&H00FFFFFF,&H00FFFFFF,&H000A0A0A,&HFF0E0807,0,0,0,0,100,100,1,0,1,3.1,0,8,135,135,20,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;for(let t in e){let n=e[t].startTime.slice(1,11).replace(",","."),a=e[t].endTime.slice(1,11).replace(",","."),s=`Dialogue: 0,${n},${a},${e[t].style},,0,0,0,,${e[t].text}`;e[t].comment==!0&&(s=s.replace("Dialogue:","Comment:")),u=u+s+`
`}return e.length==0?(w("\u6CA1\u6709\u53EF\u4EE5\u8F6C\u6362\u7684\u5B57\u5E55\uFF0C\u8BF7\u68C0\u67E5 SRT \u5185\u5BB9\uFF01"),""):u}