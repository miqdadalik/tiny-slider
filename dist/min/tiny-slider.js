!function(){"use strict";var n,t,e,i,r=window,o=document,a=Object,c=null,d=!0,u=!1,l=" ",s="Element",f="create"+s,v="DOMTokenList",h="__defineGetter__",m="defineProperty",p="class",g="List",y=p+g,b="rel",w=b+g,E="div",x="length",L="contains",M="apply",A="HTML",C=("item "+L+" add remove toggle toString toLocaleString").split(l),T=C[2],N=C[3],S=C[4],P="prototype",k=m in a||h in a[P]||c,D=function(n,t,e,i){a[m]?a[m](n,t,{configurable:u===k?d:!!i,get:e}):n[h](t,e)},O=function(t,e){var i=this,r=[],o={},c=0,s=0,f=function(){if(c>=s)for(;s<c;++s)(function(n){D(i,n,function(){return v(),r[n]},u)})(s)},v=function(){var n,i,a=arguments,u=/\s+/;if(a[x])for(i=0;i<a[x];++i)if(u.test(a[i]))throw n=new SyntaxError('String "'+a[i]+'" '+L+" an invalid character"),n.code=5,n.name="InvalidCharacterError",n;for(r=(""+t[e]).replace(/^\s+|\s+$/g,"").split(u),""===r[0]&&(r=[]),o={},i=0;i<r[x];++i)o[r[i]]=d;c=r[x],f()};return v(),D(i,x,function(){return v(),c}),i[C[6]]=i[C[5]]=function(){return v(),r.join(l)},i.item=function(n){return v(),r[n]},i[L]=function(n){return v(),!!o[n]},i[T]=function(){v[M](i,n=arguments);for(var n,a,u=0,s=n[x];u<s;++u)a=n[u],o[a]||(r.push(a),o[a]=d);c!==r[x]&&(c=r[x]>>>0,t[e]=r.join(l),f())},i[N]=function(){v[M](i,n=arguments);for(var n,a={},u=0,s=[];u<n[x];++u)a[n[u]]=d,delete o[n[u]];for(u=0;u<r[x];++u)a[r[u]]||s.push(r[u]);r=s,c=s[x]>>>0,t[e]=r.join(l),f()},i[S]=function(t,e){return v[M](i,[t]),n!==e?e?(i[T](t),d):(i[N](t),u):o[t]?(i[N](t),u):(i[T](t),d)},function(n,t){if(t)for(var e=0;e<7;++e)t(n,C[e],{enumerable:u})}(i,a[m]),i},W=function(n,t,e){D(n[P],t,function(){var n,i=this,r=h+m+t;if(i[r])return n;if(i[r]=d,u===k){for(var a,c=W.mirror=W.mirror||o[f](E),l=c.childNodes,s=l[x],v=0;v<s;++v)if(l[v]._R===i){a=l[v];break}a||(a=c.appendChild(o[f](E))),n=O.call(a,i,e)}else n=new O(i,e);return D(i,t,function(){return n}),delete i[r],n},d)};if(r[v])t=o[f](E)[y],P=r[v][P],t[T][M](t,C),2>t[x]&&(e=P[T],i=P[N],P[T]=function(){for(var n=0,t=arguments;n<t[x];++n)e.call(this,t[n])},P[N]=function(){for(var n=0,t=arguments;n<t[x];++n)i.call(this,t[n])}),t[S](g,u)&&(P[S]=function(t,e){var i=this;return i[(e=n===e?!i[L](t):e)?T:N](t),!!e});else{if(k)try{D({},"support")}catch(n){k=u}O.polyfill=d,r[v]=O,W(r[s],y,p+"Name"),W(r[A+"Link"+s],w,b),W(r[A+"Anchor"+s],w,b),W(r[A+"Area"+s],w,b)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t){var e=n[t];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(n){var t=Date.now(),e=Math.max(i+16,t);return setTimeout(function(){n(i=e)},e-t)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(n){return n}(window.gn||{});gn.extend=function(){for(var n,t,e,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(n=arguments[r]))for(t in n)e=n[t],i!==e&&void 0!==e&&(i[t]=e);return i},gn.isInViewport=function(n){var t=n.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)},gn.indexOf=function(n,t){for(var e=0;e<n.length;e++)if(n[e]===t)return e;return-1},gn.getSupportedProp=function(n){for(var t=document.documentElement,e=0;e<n.length;e++)if(n[e]in t.style)return n[e]},gn.ready=function(n){if("function"==typeof n)return"complete"===document.readyState?n():void document.addEventListener("DOMContentLoaded",n,!1)},gn.isNodeList=function(n){return"undefined"!=typeof n.item},gn.append=function(n,t){var e,i=gn.isNodeList(n)?n:[n];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(e=i.length;e--;)i[e].appendChild(t);else if("string"==typeof t)for(e=i.length;e--;)i[e].insertAdjacentHTML("beforeend",t);else if(gn.isNodeList(t)){var r=document.createDocumentFragment();for(e=t.length;e--;)r.insertBefore(t[e],r.firstChild);for(var o=i.length;o--;)i[o].appendChild(r)}},gn.wrap=function(n,t){for(var e=gn.isNodeList(n)?n:[n],i=e.length;i--;){var r=i>0?t.cloneNode(!0):t,o=e[i],a=o.parentNode,c=o.nextSibling;r.appendChild(o),c?a.insertBefore(r,c):a.appendChild(r)}},gn.unwrap=function(n){for(var t=gn.isNodeList(n)?n:[n],e=t.length;e--;){for(var i=t[e],r=i.parentNode;i.firstChild;)r.insertBefore(i.firstChild,i);r.removeChild(i)}};var tinySlider=function(){"use strict";function n(n){function m(){wn.className="tiny-slider",gn.wrap(bn,wn)}function p(){yn=ft(),un=vt(),vn=ht(),_n=Un||"page"===n.slideBy?yn:n.slideBy}function g(){bn.classList.add("tiny-content",pn),bn.style.cssText="width: "+(un+1)*Yn+"px; margin-left: "+-(Vn*un+An)+"px; padding-left: "+Cn+"px"}function y(){navigator.msMaxTouchPoints&&(wn.classList.add("ms-touch"),wn.addEventListener("scroll",tn,!1))}function b(){""===bn.id?bn.id=dn=t():dn=bn.id;for(var n=0;n<xn;n++)En[n].id=dn+"item"+n}function w(){if(zn||Cn){for(var n=document.createDocumentFragment(),t=document.createDocumentFragment(),e=Vn;e--;){var i=En[e].cloneNode(!0),r=En[xn-1-e].cloneNode(!0);c(i,"id"),c(r,"id"),n.insertBefore(i,n.firstChild),t.appendChild(r)}bn.appendChild(n),bn.insertBefore(t,bn.firstChild),En=bn.children}a(En,{style:"width: "+(un-Ln)+"px; "+Mn+": "+Ln+"px","aria-hidden":"true"})}function E(){Sn&&(n.controlsContainer||(gn.append(wn,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+dn+'" type="button">'+Pn[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+dn+'" type="button">'+Pn[1]+"</button></div>"),kn=wn.querySelector(".tiny-controls")),ln=kn.querySelector('[data-controls="prev"]'),sn=kn.querySelector('[data-controls="next"]'),r(kn,"tabindex")||(a(kn,{"aria-label":"Carousel Navigation"}),a(kn.children,{"aria-controls":dn,tabindex:"-1"})))}function x(){if(Dn){if(!n.navContainer){for(var t="",e=0;e<xn;e++)t+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+dn+"item"+e+'" type="button"></button>';qn&&(t+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bn[0]+"</button>"),t='<div class="tiny-nav" aria-label="Carousel Pagination">'+t+"</div>",gn.append(wn,t),On=wn.querySelector(".tiny-nav")}if(fn=On.querySelectorAll("[data-slide]"),!r(On,"aria-label")){a(On,{"aria-label":"Carousel Pagination"});for(var i=0;i<xn;i++)a(fn[i],{tabindex:"-1","aria-selected":"false","aria-controls":dn+"item"+i})}for(var o=vn;o<xn;o++)a(fn[o],{hidden:""});$n=vn}}function L(){qn&&(On||(gn.append(wn,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bn[0]+"</button></div>"),On=wn.querySelector(".tiny-nav")),rt=On.querySelector("[data-action]"),K())}function M(){hn=mt();for(var n=hn;n<hn+yn;n++)a(En[n],{"aria-hidden":"false"});Sn&&a(sn,{tabindex:"0"}),Dn&&a(fn[0],{tabindex:"0","aria-selected":"true"})}function A(){if(Kn&&(bn.addEventListener("touchstart",en,!1),bn.addEventListener("touchmove",rn,!1),bn.addEventListener("touchend",on,!1),bn.addEventListener("touchcancel",on,!1)),Dn)for(var n=0;n<xn;n++)fn[n].addEventListener("click",X,!1),fn[n].addEventListener("keydown",nn,!1);if(Sn&&(ln.addEventListener("click",U,!1),sn.addEventListener("click",_,!1),ln.addEventListener("keydown",Z,!1),sn.addEventListener("keydown",Z,!1)),qn&&(rt.addEventListener("click",Y,!1),Sn&&(ln.addEventListener("click",$,!1),sn.addEventListener("click",$,!1)),Dn))for(var t=0;t<xn;t++)fn[t].addEventListener("click",$,!1);Wn&&document.addEventListener("keydown",J,!1),window.addEventListener("resize",an,!1),window.addEventListener("scroll",cn,!1)}function C(){if(Xn&&gn.isInViewport(bn)){for(var n=[],t=nt+Vn,e=t-1;e<t+yn+1;e++){for(var i=En[e].querySelectorAll(".tiny-lazy"),r=i.length;r--;n.unshift(i[r]));n.unshift()}for(var a=n.length;a--;){var c=n[a];c.classList.contains("loaded")||(c.src=o(c,"data-src"),c.classList.add("loaded"))}}}function T(){if(Gn){var n=[];hn=mt();for(var t=hn-1;t<hn+yn;t++)for(var e=En[t].querySelectorAll("img"),i=e.length;i--;)n.push(e[i]);0===n.length?D():N(n)}}function N(n){for(var t=n.length;t--;)s(n[t])&&n.splice(t,1);0===n.length?D():setTimeout(function(){N(n)},16)}function S(){m(),p(),g(),y(),b(),w(),E(),x(),L(),M(),A(),P(),C(),T()}function P(){xn<=yn?(Dn=Sn=qn=zn=jn=!1,nt=0,On&&u(On),kn&&u(kn),rt&&u(rt)):(Dn=n.nav,Sn=n.controls,qn=n.autoplay,zn=!n.rewind&&n.loop,jn=n.rewind,Dn&&l(On),Sn&&l(kn),qn&&l(rt))}function k(){if(!Nn){bn.style.width=(un+1)*Yn+"px",bn.style.marginLeft=-(Vn*un+An)+"px";for(var n=Yn;n--;)En[n].style.width=un-Ln+"px"}if(Nn){var t=wn.clientWidth;bn.style.paddingLeft=(t-un*Math.floor(t/un)+Ln)/2+"px"}}function D(){var n,t=[];hn=mt();for(var e=hn-Tn;e<hn+yn;e++)t.push(En[e].offsetHeight);n=Math.max.apply(null,t),pt(1),bn.style.height=n+"px",tt=!0,setTimeout(function(){tt=!1},Fn)}function O(){wn.style.msScrollSnapPointsX="snapInterval(0%, "+un+")"}function W(){var n,t,e,i,r=hn;hn=mt(),hn!==r&&(hn>r?(n=r,t=Math.min(r+yn,hn),e=Math.max(r+yn,hn),i=hn+yn):(n=Math.max(hn+yn,r),t=r+yn,e=hn,i=Math.min(hn+yn,r))),_n%1!==0&&(n=Math.round(n),t=Math.round(t),e=Math.round(e),i=Math.round(i));for(var o=n;o<t;o++)a(En[o],{"aria-hidden":"true"});for(var c=e;c<i;c++)a(En[c],{"aria-hidden":"false"})}function F(){if(vn!==$n)if(vn>$n)for(var n=$n;n<vn;n++)c(fn[n],"hidden");else for(var t=vn;t<$n;t++)a(fn[t],{hidden:""});$n=vn}function q(){var t;if(Jn===-1){var e=nt<0?nt+xn:nt>=xn?nt-xn:nt;t=n.navContainer?e:Math.floor(e/yn),zn||n.navContainer||xn%yn===0||nt!==xn-yn||(t+=1)}else t=Jn,Jn=-1;return t}function I(){Dn&&(Qn=q(),Qn!==Zn&&(a(fn[Zn],{tabindex:"-1","aria-selected":"false"}),a(fn[Qn],{tabindex:"0","aria-selected":"true"}),Zn=Qn))}function H(){if(Sn&&!zn)if(0===nt||!jn&&nt===xn-yn){var n=0===nt?ln:sn,t=0===nt?sn:ln;Q(n,t),n.disabled=!0,a(n,{tabindex:"-1"}),t.disabled=!1,a(t,{tabindex:"0"})}else ln.disabled=!1,sn.disabled=!1}function B(){p(),P(),k(),F(),navigator.msMaxTouchPoints&&O(),pt(0),gt(),G()}function j(){var n=_n-Vn+Tn,t=xn+Vn-yn-_n-1;(nt<n||nt>t)&&(nt-xn>=n&&nt-xn<=t?nt-=xn:nt+=xn,tt=!0,pt(0),gt(),tt=!1)}function z(n){bn.setAttribute("aria-busy","true"),tt=!0,pt(n),gt(),setTimeout(function(){zn&&j(),G(),tt=!1,bn.setAttribute("aria-busy","false")},Fn*n)}function G(){W(),I(),H(),C(),T()}function R(n){if(!tt){var t=nt+n*_n,e=Math.abs(n*_n);nt=zn?t:Math.max(0,Math.min(t,xn-yn)),z(e)}}function U(){R(-1)}function _(){R(jn&&nt===xn-yn?(yn-xn)/_n:1)}function X(t){if(!tt){for(var e,i=t.target||t.srcElement;gn.indexOf(fn,i)===-1;)i=i.parentNode;Jn=e=Number(o(i,"data-slide"));var r,a;r=n.navContainer?e:e*yn,r=zn?r:Math.min(r,xn-yn),a=Math.abs(r-nt),nt=r,z(a)}}function K(){it=setInterval(function(){R(Hn)},In),rt.setAttribute("data-action","stop"),rt.innerHTML="<span hidden>Stop Animation</span>"+Bn[1],ot=!0}function V(){clearInterval(it),rt.setAttribute("data-action","start"),rt.innerHTML="<span hidden>Stop Animation</span>"+Bn[0],ot=!1}function Y(){ot?V():K()}function $(){ot&&V()}function J(n){n=n||window.event,n.keyCode===h.LEFT?R(-1):n.keyCode===h.RIGHT&&R(jn&&nt===xn-yn?(yn-xn)/_n:1)}function Q(n,t){"object"==typeof n&&"object"==typeof t&&n===document.activeElement&&(n.blur(),t.focus())}function Z(n){n=n||window.event;var t=n.keyCode,e=document.activeElement;switch(t){case h.LEFT:case h.UP:case h.HOME:case h.PAGEUP:e!==ln&&ln.disabled!==!0&&Q(e,ln);break;case h.RIGHT:case h.DOWN:case h.END:case h.PAGEDOWN:e!==sn&&sn.disabled!==!0&&Q(e,sn);break;case h.ENTER:case h.SPACE:e===sn?_():U()}}function nn(n){n=n||window.event;var t=n.keyCode,e=document.activeElement,i=o(e,"data-slide");switch(t){case h.LEFT:case h.PAGEUP:i>0&&Q(e,e.previousElementSibling);break;case h.UP:case h.HOME:0!==i&&Q(e,fn[0]);break;case h.RIGHT:case h.PAGEDOWN:i<vn-1&&Q(e,e.nextElementSibling);break;case h.DOWN:case h.END:i<vn-1&&Q(e,fn[vn-1]);break;case h.ENTER:case h.SPACE:X(n)}}function tn(){pt(0),gt(bn.scrollLeft())}function en(n){var t=n.changedTouches[0];at=parseInt(t.clientX),ct=parseInt(t.clientY)}function rn(n){var t=n.changedTouches[0];ut=parseInt(t.clientX)-at,lt=parseInt(t.clientY)-ct;var r=i(e(lt,ut),15);if("horizontal"===r&&tt===!1&&(st=!0),st){var o=zn?-(xn+Vn-yn)*un:-(xn-yn)*un,a=zn?Vn*un:0;!zn&&Nn&&(o=-(xn*un-wn.clientWidth)),dt=-nt*un+ut,dt=Math.max(o,Math.min(dt,a)),pt(0),gt(dt),n.preventDefault()}}function on(n){var t=n.changedTouches[0];if(ut=parseInt(t.clientX)-at,st&&0!==ut){n.preventDefault(),st=!1,dt=-nt*un+ut;var e,i=zn?-Vn:0,r=zn?xn+Vn-yn:xn-yn;e=-(dt/un),e=ut<0?Math.ceil(e):Math.floor(e),e=Math.max(i,Math.min(e,r)),nt=e,z(1)}}function an(){clearTimeout(mn),mn=setTimeout(function(){B()},100)}function cn(){et||window.requestAnimationFrame(function(){C(),et=!1}),et=!0}if(n=gn.extend({container:document.querySelector(".slider"),transform:"horizontal",items:1,gutter:0,gutterPosition:"right",edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},n||{}),"object"!=typeof n.container||null===n.container)return{init:function(){},destory:function(){}};var dn,un,ln,sn,fn,vn,hn,mn,pn=n.transform,yn=n.items,bn=n.container,wn=document.createElement("div"),En=bn.children,xn=En.length,Ln=n.gutter,Mn="right"===n.gutterPosition?"margin-right":"margin-left",An="left"===n.gutterPosition?Ln:0,Cn=n.edgePadding,Tn=Cn?1:0,Nn=n.fixedWidth,Sn=n.controls,Pn=n.controlsText,kn=!!n.controlsContainer&&n.controlsContainer,Dn=n.nav,On=!!n.navContainer&&n.navContainer,Wn=n.arrowKeys,Fn=f?n.speed:0,qn=n.autoplay,In=n.autoplayTimeout,Hn="forward"===n.autoplayDirection?1:-1,Bn=n.autoplayText,jn=n.rewind,zn=!n.rewind&&n.loop,Gn=n.autoHeight,Rn=!Nn&&n.responsive,Un=n.slideByPage,_n=Un||"page"===n.slideBy?yn:n.slideBy,Xn=n.lazyload,Kn=n.touch,Vn=zn?xn:Cn?1:0,Yn=xn+2*Vn,$n=xn,Jn=-1,Qn=0,Zn=0,nt=0,tt=!1,et=!1;if(qn)var it,rt,ot=!1;if(Kn)var at=0,ct=0,dt=0,ut=0,lt=0,st=!1;var ft=function(){return Nn?function(){return Math.max(1,Math.min(xn,Math.floor(wn.clientWidth/Nn)))}:function(){var t=n.items,e=document.documentElement.clientWidth,i="object"==typeof Rn&&Object.keys(Rn);if(i)for(var r=0;r<i.length;r++)e>=i[r]&&(t=Rn[i[r]]);return Math.max(1,Math.min(xn,t))}}(),vt=function(){return Nn?function(){return Nn+Ln}:function(){return(wn.clientWidth+Ln-2*Cn)/yn}}(),ht=function(){return n.navContainer?function(){return xn}:function(){return Math.ceil(xn/yn)}}(),mt=function(){return Vn+nt},pt=function(){return f?function(n){bn.style[f]=Fn*n/1e3+"s"}:function(){}}(),gt=function(){return v?function(n){var t=n||-un*nt;bn.style[v]="translate3d("+t+"px, 0, 0)"}:function(n){var t=n||-un*nt;bn.style.left=t+"px"}}();return{init:S,destory:function(){if(gn.unwrap(wn),wn=null,bn.classList.remove("tiny-content",pn),c(bn,["id","style"]),zn)for(var t=Vn;t--;)En[0].remove(),En[En.length-1].remove();c(En,["id","style","aria-hidden"]),dn=xn=null,Sn&&(n.controlsContainer?(c(kn,["aria-label"]),c(kn.children,["aria-controls","tabindex"]),d(kn)):(kn.remove(),kn=ln=sn=null)),Dn&&(n.navContainer?(c(On,["aria-label"]),c(fn,["aria-selected","aria-controls","tabindex"]),d(On)):(On.remove(),On=null),fn=null),qn&&(n.navContainer||null===On?d(rt):(On.remove(),On=null)),Kn&&d(bn),Wn&&document.removeEventListener("keydown",Wn,!1),window.removeEventListener("resize",an,!1),window.removeEventListener("scroll",cn,!1)},hasAttr:r,getAttr:o,setAttrs:a,removeAttrs:c,removeEvents:d,getSliderId:t,toDegree:e,getPanDirection:i,hideElement:u,showElement:l,nextButton:function(){return sn},index:function(){return nt}}}function t(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function e(n,t){return Math.atan2(n,t)*(180/Math.PI)}function i(n,t){return Math.abs(90-Math.abs(n))>=90-t?"horizontal":Math.abs(90-Math.abs(n))<=t&&"vertical"}function r(n,t){return n.hasAttribute(t)}function o(n,t){return n.getAttribute(t)}function a(n,t){if(n=gn.isNodeList(n)||n instanceof Array?n:[n],"[object Object]"===Object.prototype.toString.call(t))for(var e=n.length;e--;)for(var i in t)n[e].setAttribute(i,t[i])}function c(n,t){n=gn.isNodeList(n)||n instanceof Array?n:[n],t=t instanceof Array?t:[t];for(var e=t.length,i=n.length;i--;)for(var r=e;r--;)n[i].removeAttribute(t[r])}function d(n){var t=n.cloneNode(!0),e=n.parentNode;e.insertBefore(t,n),n.remove(),n=null}function u(n){r(n,"hidden")||a(n,{hidden:""})}function l(n){r(n,"hidden")&&c(n,"hidden")}function s(n){return"boolean"==typeof n.complete?n.complete:"number"==typeof n.naturalWidth?0!==n.naturalWidth:void 0}var f=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),v=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),h={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return n}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
