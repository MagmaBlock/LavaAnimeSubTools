const q=function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function d(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerpolicy&&(i.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?i.credentials="include":c.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(c){if(c.ep)return;c.ep=!0;const i=d(c);fetch(c.href,i)}};q();var Q=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Z(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var k={};Object.defineProperty(k,"__esModule",{value:!0});var tt=function(){function v(){this.seperator=","}return v.prototype.correctFormat=function(y){var d=y.replace(".",","),n=null,c=null,i=null,u=null,t=d.split(","),e=t[0],a=t[1];u=this.fixed_str_digit(3,a);var p=e.split(":"),b=p[0],T=p[1],x=p[2];return n=this.fixed_str_digit(2,b,!1),c=this.fixed_str_digit(2,T,!1),i=this.fixed_str_digit(2,x,!1),n+":"+c+":"+i+","+u},v.prototype.fixed_str_digit=function(y,d,n){if(n===void 0&&(n=!0),d.length==y)return d;if(d.length>y)return d.slice(0,y);if(d.length<y)return n?d.padEnd(y,"0"):d.padStart(y,"0")},v.prototype.tryComma=function(y){y=y.replace(/\r/g,"");var d=/(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g,n=y.split(d);return n.shift(),n},v.prototype.tryDot=function(y){y=y.replace(/\r/g,"");var d=/(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g,n=y.split(d);return n.shift(),this.seperator=".",n},v.prototype.fromSrt=function(y){var d=y,n=this.tryComma(d);n.length==0&&(n=this.tryDot(d));for(var c=[],i=0;i<n.length;i+=4){var u={id:n[i].trim(),startTime:this.correctFormat(n[i+1].trim()),endTime:this.correctFormat(n[i+2].trim()),text:n[i+3].trim()};c.push(u)}return c},v.prototype.toSrt=function(y){for(var d="",n=0;n<y.length;n++){var c=y[n];d+=c.id+`\r
`,d+=c.startTime+" --> "+c.endTime+`\r
`,d+=c.text.replace(`
`,`\r
`)+`\r
\r
`}return d},v}(),et=k.default=tt,D={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(v,y){(function(n,c){v.exports=c()})(Q,function(){return function(){var d={686:function(i,u,t){t.d(u,{default:function(){return K}});var e=t(279),a=t.n(e),p=t(370),b=t.n(p),T=t(817),x=t.n(T);function g(f){try{return document.execCommand(f)}catch{return!1}}var S=function(o){var r=x()(o);return g("cut"),r},h=S;function _(f){var o=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(l,"px"),r.setAttribute("readonly",""),r.value=f,r}var R=function(o,r){var l=_(o);r.container.appendChild(l);var s=x()(l);return g("copy"),l.remove(),s},j=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof o=="string"?l=R(o,r):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?l=R(o.value,r):(l=x()(o),g("copy")),l},$=j;function F(f){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(r){return typeof r}:F=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},F(f)}var B=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.action,l=r===void 0?"copy":r,s=o.container,m=o.target,E=o.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&F(m)==="object"&&m.nodeType===1){if(l==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return $(E,{container:s});if(m)return l==="cut"?h(m):$(m,{container:s})},H=B;function A(f){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(r){return typeof r}:A=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(f)}function W(f,o){if(!(f instanceof o))throw new TypeError("Cannot call a class as a function")}function N(f,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}function z(f,o,r){return o&&N(f.prototype,o),r&&N(f,r),f}function Y(f,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(o&&o.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),o&&M(f,o)}function M(f,o){return M=Object.setPrototypeOf||function(l,s){return l.__proto__=s,l},M(f,o)}function U(f){var o=G();return function(){var l=L(f),s;if(o){var m=L(this).constructor;s=Reflect.construct(l,arguments,m)}else s=l.apply(this,arguments);return V(this,s)}}function V(f,o){return o&&(A(o)==="object"||typeof o=="function")?o:X(f)}function X(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function G(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(f){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},L(f)}function P(f,o){var r="data-clipboard-".concat(f);if(!!o.hasAttribute(r))return o.getAttribute(r)}var J=function(f){Y(r,f);var o=U(r);function r(l,s){var m;return W(this,r),m=o.call(this),m.resolveOptions(s),m.listenClick(l),m}return z(r,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=A(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var m=this;this.listener=b()(s,"click",function(E){return m.onClick(E)})}},{key:"onClick",value:function(s){var m=s.delegateTarget||s.currentTarget,E=this.action(m)||"copy",C=H({action:E,container:this.container,target:this.target(m),text:this.text(m)});this.emit(C?"success":"error",{action:E,text:C,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return P("action",s)}},{key:"defaultTarget",value:function(s){var m=P("target",s);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(s){return P("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return $(s,m)}},{key:"cut",value:function(s){return h(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof s=="string"?[s]:s,E=!!document.queryCommandSupported;return m.forEach(function(C){E=E&&!!document.queryCommandSupported(C)}),E}}]),r}(a()),K=J},828:function(i){var u=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function e(a,p){for(;a&&a.nodeType!==u;){if(typeof a.matches=="function"&&a.matches(p))return a;a=a.parentNode}}i.exports=e},438:function(i,u,t){var e=t(828);function a(T,x,g,S,h){var _=b.apply(this,arguments);return T.addEventListener(g,_,h),{destroy:function(){T.removeEventListener(g,_,h)}}}function p(T,x,g,S,h){return typeof T.addEventListener=="function"?a.apply(null,arguments):typeof g=="function"?a.bind(null,document).apply(null,arguments):(typeof T=="string"&&(T=document.querySelectorAll(T)),Array.prototype.map.call(T,function(_){return a(_,x,g,S,h)}))}function b(T,x,g,S){return function(h){h.delegateTarget=e(h.target,x),h.delegateTarget&&S.call(T,h)}}i.exports=p},879:function(i,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var e=Object.prototype.toString.call(t);return t!==void 0&&(e==="[object NodeList]"||e==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var e=Object.prototype.toString.call(t);return e==="[object Function]"}},370:function(i,u,t){var e=t(879),a=t(438);function p(g,S,h){if(!g&&!S&&!h)throw new Error("Missing required arguments");if(!e.string(S))throw new TypeError("Second argument must be a String");if(!e.fn(h))throw new TypeError("Third argument must be a Function");if(e.node(g))return b(g,S,h);if(e.nodeList(g))return T(g,S,h);if(e.string(g))return x(g,S,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(g,S,h){return g.addEventListener(S,h),{destroy:function(){g.removeEventListener(S,h)}}}function T(g,S,h){return Array.prototype.forEach.call(g,function(_){_.addEventListener(S,h)}),{destroy:function(){Array.prototype.forEach.call(g,function(_){_.removeEventListener(S,h)})}}}function x(g,S,h){return a(document.body,g,S,h)}i.exports=p},817:function(i){function u(t){var e;if(t.nodeName==="SELECT")t.focus(),e=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),b=document.createRange();b.selectNodeContents(t),p.removeAllRanges(),p.addRange(b),e=p.toString()}return e}i.exports=u},279:function(i){function u(){}u.prototype={on:function(t,e,a){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:e,ctx:a}),this},once:function(t,e,a){var p=this;function b(){p.off(t,b),e.apply(a,arguments)}return b._=e,this.on(t,b,a)},emit:function(t){var e=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),p=0,b=a.length;for(p;p<b;p++)a[p].fn.apply(a[p].ctx,e);return this},off:function(t,e){var a=this.e||(this.e={}),p=a[t],b=[];if(p&&e)for(var T=0,x=p.length;T<x;T++)p[T].fn!==e&&p[T].fn._!==e&&b.push(p[T]);return b.length?a[t]=b:delete a[t],this}},i.exports=u,i.exports.TinyEmitter=u}},n={};function c(i){if(n[i])return n[i].exports;var u=n[i]={exports:{}};return d[i](u,u.exports,c),u.exports}return function(){c.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return c.d(u,{a:u}),u}}(),function(){c.d=function(i,u){for(var t in u)c.o(u,t)&&!c.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:u[t]})}}(),function(){c.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)}}(),c(686)}().default})})(D);var nt=Z(D.exports);const rt=new et,I=new nt("#copy");I.on("success",function(v){w("\u590D\u5236\u7ED3\u679C\u6210\u529F")});I.on("error",function(v){w("\u590D\u5236\u7ED3\u679C\u5931\u8D25")});var O=document.getElementById("srt");document.ondrop=function(v){v.preventDefault()};document.ondragover=function(v){v.preventDefault()};O.ondragenter=function(){document.getElementById("srt-element-father").classList.add("mdui-textfield-focus")};O.ondragleave=function(){document.getElementById("srt-element-father").classList.remove("mdui-textfield-focus")};O.ondrop=function(v){var y=new FileReader;y.readAsText(v.dataTransfer.files[0]),y.onload=function(){O.value=y.result}};document.getElementById("go").addEventListener("click",()=>{let v=document.getElementById("srt").value,y=document.getElementById("style").value!==""?document.getElementById("style").value:"Top";if(v!==""){let d=ot(v,y);document.getElementById("ass").value=d}else w("\u8BF7\u586B\u5165 SRT \u5B57\u5E55\u6B63\u6587"),mdui.snackbar({message:"\u8BF7\u586B\u5165 SRT \u5B57\u5E55\u6B63\u6587"})});function w(v){document.getElementById("log").insertAdjacentHTML("afterbegin",v+"<br>"),console.log(v)}function ot(v,y){let d=rt.fromSrt(v),n=new Array;for(let t in d)if(d[t].text.includes(`
`)){let e=d[t].text.split(`
`);w(`[\u62C6\u5206\u591A\u884C][${t}] ${JSON.stringify(e)}`);for(let a in e){let p={startTime:d[t].startTime,endTime:d[t].endTime,text:e[a],style:"Default",comment:!1};n.push(p)}}else{let e={startTime:d[t].startTime,endTime:d[t].endTime,text:d[t].text,style:"Default",comment:!1};n.push(e)}for(let t in n){n[t].text.startsWith("-")&&n[t].text.split("-").length==2&&(w(`[\u5220\u9664\u6B8B\u7559\u6A2A\u6760][${t}] ${n[t].text} \u7684\u5F00\u5934\u662F - \u4E14\u662F\u4E00\u4E2A\u5355\u72EC\u5BF9\u8BDD\uFF0C\u79FB\u9664...`),n[t].text=n[t].text.replace(/^-/,""));let e=n[t].text.split("-");if(e.length>=3&&e[0]==""&&e[1]!=""&&e[2]!=""){w(`[\u5355\u884C\u591A\u91CD\u5BF9\u8BDD][\u884C ${t}] ${n[t].text} \u53EF\u80FD\u4E3A\u591A\u91CD\u5BF9\u8BDD\uFF0C\u51C6\u5907\u62C6\u5206`),e.splice(0,1);for(let a=0;a<e.length;a++){e[a]=e[a].trim(),w(`[\u5355\u884C\u591A\u91CD\u5BF9\u8BDD][\u884C ${t}] \u62C6\u5206\u5355\u884C(${a}): ${e[a]}`);let p={startTime:n[t].startTime,endTime:n[t].endTime,text:e[a],style:"Default",comment:!1};n.splice(parseInt(t)+1,0,p),n[t].comment=!0}}}for(let t in n)for(let e=0;e<n.length;e++)n[e].startTime==n[t].endTime&&n[e].text==n[t].text&&(w(`[\u5408\u5E76\u5206\u88C2\u884C][${t} ==> ${e}](${n[t].endTime} => ${n[e].endTime}) ${n[e].text}`),n[t].endTime=n[e].endTime,n.splice(e,1),e=e-1);for(let t in n){let e=n[t].text;(e.startsWith("(")&&e.endsWith(")")||e.startsWith("\uFF08")&&e.endsWith("\uFF09"))&&(w(`[\u62EC\u53F7\u884C\u6837\u5F0F][\u884C ${t}] ${e} \u66F4\u6362\u4E3A ${y} \u6837\u5F0F`),n[t].style=y)}console.log("\u4E0B\u65B9\u662F\u6700\u7EC8\u7684\u5B57\u5E55\u6570\u7EC4\uFF1A"),console.log(n);let c=new Date,u=`[Script Info]
; Script generated by LavaAnimeSubTools
; Generate time: ${`${c.toLocaleString("zh-CN",{hour12:!1})} (${c.getTime()})`}
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
`;for(let t in n){let e=n[t].startTime.slice(1,11).replace(",","."),a=n[t].endTime.slice(1,11).replace(",","."),b=`${n[t].comment?"Comment":"Dialogue"}: 0,${e},${a},${n[t].style},,0,0,0,,${n[t].text}
`;u=u.concat(b)}return n.length==0?(w("\u6CA1\u6709\u53EF\u4EE5\u8F6C\u6362\u7684\u5B57\u5E55\uFF0C\u8BF7\u68C0\u67E5 SRT \u5185\u5BB9\uFF01"),mdui.snackbar({message:"\u6CA1\u6709\u53EF\u4EE5\u8F6C\u6362\u7684\u5B57\u5E55\uFF0C\u8BF7\u68C0\u67E5 SRT \u5185\u5BB9\uFF01"}),""):u}