import{b as K,E as Nn,h as kn,q as Pe,k as N,i as an,O as Ln,s as ee,f as V,Q as T,y as te,S as $,a as U,o as L,D as w,u as W,F as De,g as y,T as $n,r as Le,t as Re,v as Ae,z as Ge,W as Me,w as G,R as dn,l as je,K as fn,U as Q,d as Be,I as re,c as ae,A as He,B as _e}from"./hoisted.umGVjoe0.js";import{d as Fn,h as oe,Z as ie,N as se,a9 as Ke,aa as le,i as ce,D as j,_ as Y,a as Sn,l as qe,T as ue,u as Ue,f as Ve,n as de,M as pe,F as ge,g as Ye,V as rn,O as he,L as ve,$ as be,j as Rn,y as Xe,p as We,ab as Ze,G as bn,ac as Je,m as Qe,R as nt,e as et,ad as tt,A as rt}from"./index-n_s8SVLn.BNSbFT9d.js";import{d as at}from"./index-D2ZAnnK5.Ddz27_ns.js";import{f as fe}from"./useSlots-Ccq-HAZO.0F0gLq16.js";/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var me=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],mn=me.join(","),we=typeof Element>"u",J=we?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,wn=!we&&Element.prototype.getRootNode?function(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}:function(n){return n?.ownerDocument},yn=function n(e,t){var r;t===void 0&&(t=!0);var o=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),a=o===""||o==="true",l=a||t&&e&&n(e.parentNode);return l},ot=function(n){var e,t=n==null||(e=n.getAttribute)===null||e===void 0?void 0:e.call(n,"contenteditable");return t===""||t==="true"},ye=function(n,e,t){if(yn(n))return[];var r=Array.prototype.slice.apply(n.querySelectorAll(mn));return e&&J.call(n,mn)&&r.unshift(n),r=r.filter(t),r},xe=function n(e,t,r){for(var o=[],a=Array.from(e);a.length;){var l=a.shift();if(!yn(l,!1))if(l.tagName==="SLOT"){var s=l.assignedElements(),g=s.length?s:l.children,u=n(g,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:l,candidates:u})}else{var h=J.call(l,mn);h&&r.filter(l)&&(t||!e.includes(l))&&o.push(l);var c=l.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(l),b=!yn(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(c&&b){var p=n(c===!0?l.children:c.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:l,candidates:p})}else a.unshift.apply(a,l.children)}}return o},ke=function(n){return!isNaN(parseInt(n.getAttribute("tabindex"),10))},Z=function(n){if(!n)throw new Error("No node provided");return n.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||ot(n))&&!ke(n)?0:n.tabIndex},it=function(n,e){var t=Z(n);return t<0&&e&&!ke(n)?0:t},st=function(n,e){return n.tabIndex===e.tabIndex?n.documentOrder-e.documentOrder:n.tabIndex-e.tabIndex},Ee=function(n){return n.tagName==="INPUT"},lt=function(n){return Ee(n)&&n.type==="hidden"},ct=function(n){var e=n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(t){return t.tagName==="SUMMARY"});return e},ut=function(n,e){for(var t=0;t<n.length;t++)if(n[t].checked&&n[t].form===e)return n[t]},dt=function(n){if(!n.name)return!0;var e=n.form||wn(n),t=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=t(window.CSS.escape(n.name));else try{r=t(n.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var o=ut(r,n.form);return!o||o===n},pt=function(n){return Ee(n)&&n.type==="radio"},gt=function(n){return pt(n)&&!dt(n)},ht=function(n){var e,t=n&&wn(n),r=(e=t)===null||e===void 0?void 0:e.host,o=!1;if(t&&t!==n){var a,l,s;for(o=!!((a=r)!==null&&a!==void 0&&(l=a.ownerDocument)!==null&&l!==void 0&&l.contains(r)||n!=null&&(s=n.ownerDocument)!==null&&s!==void 0&&s.contains(n));!o&&r;){var g,u,h;t=wn(r),r=(g=t)===null||g===void 0?void 0:g.host,o=!!((u=r)!==null&&u!==void 0&&(h=u.ownerDocument)!==null&&h!==void 0&&h.contains(r))}}return o},An=function(n){var e=n.getBoundingClientRect(),t=e.width,r=e.height;return t===0&&r===0},vt=function(n,e){var t=e.displayCheck,r=e.getShadowRoot;if(getComputedStyle(n).visibility==="hidden")return!0;var o=J.call(n,"details>summary:first-of-type"),a=o?n.parentElement:n;if(J.call(a,"details:not([open]) *"))return!0;if(!t||t==="full"||t==="legacy-full"){if(typeof r=="function"){for(var l=n;n;){var s=n.parentElement,g=wn(n);if(s&&!s.shadowRoot&&r(s)===!0)return An(n);n.assignedSlot?n=n.assignedSlot:!s&&g!==n.ownerDocument?n=g.host:n=s}n=l}if(ht(n))return!n.getClientRects().length;if(t!=="legacy-full")return!0}else if(t==="non-zero-area")return An(n);return!1},bt=function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var e=n.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var t=0;t<e.children.length;t++){var r=e.children.item(t);if(r.tagName==="LEGEND")return J.call(e,"fieldset[disabled] *")?!0:!r.contains(n)}return!0}e=e.parentElement}return!1},xn=function(n,e){return!(e.disabled||yn(e)||lt(e)||vt(e,n)||ct(e)||bt(e))},zn=function(n,e){return!(gt(e)||Z(e)<0||!xn(n,e))},ft=function(n){var e=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},mt=function n(e){var t=[],r=[];return e.forEach(function(o,a){var l=!!o.scopeParent,s=l?o.scopeParent:o,g=it(s,l),u=l?n(o.candidates):s;g===0?l?t.push.apply(t,u):t.push(s):r.push({documentOrder:a,tabIndex:g,item:o,isScope:l,content:u})}),r.sort(st).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(t)},wt=function(n,e){e=e||{};var t;return e.getShadowRoot?t=xe([n],e.includeContainer,{filter:zn.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:ft}):t=ye(n,e.includeContainer,zn.bind(null,e)),mt(t)},yt=function(n,e){e=e||{};var t;return e.getShadowRoot?t=xe([n],e.includeContainer,{filter:xn.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):t=ye(n,e.includeContainer,xn.bind(null,e)),t},tn=function(n,e){if(e=e||{},!n)throw new Error("No node provided");return J.call(n,mn)===!1?!1:zn(e,n)},xt=me.concat("iframe").join(","),Tn=function(n,e){if(e=e||{},!n)throw new Error("No node provided");return J.call(n,xt)===!1?!1:xn(e,n)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Gn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Mn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gn(Object(t),!0).forEach(function(r){kt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Gn(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function kt(n,e,t){return e=Ct(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Et(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ct(n){var e=Et(n,"string");return typeof e=="symbol"?e:String(e)}var jn={activateTrap:function(n,e){if(n.length>0){var t=n[n.length-1];t!==e&&t.pause()}var r=n.indexOf(e);r===-1||n.splice(r,1),n.push(e)},deactivateTrap:function(n,e){var t=n.indexOf(e);t!==-1&&n.splice(t,1),n.length>0&&n[n.length-1].unpause()}},Tt=function(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select=="function"},Ot=function(n){return n?.key==="Escape"||n?.key==="Esc"||n?.keyCode===27},un=function(n){return n?.key==="Tab"||n?.keyCode===9},$t=function(n){return un(n)&&!n.shiftKey},zt=function(n){return un(n)&&n.shiftKey},Bn=function(n){return setTimeout(n,0)},Hn=function(n,e){var t=-1;return n.every(function(r,o){return e(r)?(t=o,!1):!0}),t},ln=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return typeof n=="function"?n.apply(void 0,t):n},gn=function(n){return n.target.shadowRoot&&typeof n.composedPath=="function"?n.composedPath()[0]:n.target},It=[],Ce=function(n,e){var t=e?.document||document,r=e?.trapStack||It,o=Mn({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:$t,isKeyBackward:zt},e),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},l,s=function(d,i,v){return d&&d[i]!==void 0?d[i]:o[v||i]},g=function(d,i){var v=typeof i?.composedPath=="function"?i.composedPath():void 0;return a.containerGroups.findIndex(function(O){var C=O.container,E=O.tabbableNodes;return C.contains(d)||v?.includes(C)||E.find(function(I){return I===d})})},u=function(d){var i=o[d];if(typeof i=="function"){for(var v=arguments.length,O=new Array(v>1?v-1:0),C=1;C<v;C++)O[C-1]=arguments[C];i=i.apply(void 0,O)}if(i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error("`".concat(d,"` was specified but was not a node, or did not return a node"))}var E=i;if(typeof i=="string"&&(E=t.querySelector(i),!E))throw new Error("`".concat(d,"` as selector refers to no known node"));return E},h=function(){var d=u("initialFocus");if(d===!1)return!1;if(d===void 0||!Tn(d,o.tabbableOptions))if(g(t.activeElement)>=0)d=t.activeElement;else{var i=a.tabbableGroups[0],v=i&&i.firstTabbableNode;d=v||u("fallbackFocus")}if(!d)throw new Error("Your focus-trap needs to have at least one focusable element");return d},c=function(){if(a.containerGroups=a.containers.map(function(d){var i=wt(d,o.tabbableOptions),v=yt(d,o.tabbableOptions),O=i.length>0?i[0]:void 0,C=i.length>0?i[i.length-1]:void 0,E=v.find(function(S){return tn(S)}),I=v.slice().reverse().find(function(S){return tn(S)}),R=!!i.find(function(S){return Z(S)>0});return{container:d,tabbableNodes:i,focusableNodes:v,posTabIndexesFound:R,firstTabbableNode:O,lastTabbableNode:C,firstDomTabbableNode:E,lastDomTabbableNode:I,nextTabbableNode:function(S){var en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,sn=i.indexOf(S);return sn<0?en?v.slice(v.indexOf(S)+1).find(function(q){return tn(q)}):v.slice(0,v.indexOf(S)).reverse().find(function(q){return tn(q)}):i[sn+(en?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(d){return d.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(d){return d.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function d(i){var v=i.activeElement;if(v)return v.shadowRoot&&v.shadowRoot.activeElement!==null?d(v.shadowRoot):v},p=function d(i){if(i!==!1&&i!==b(document)){if(!i||!i.focus){d(h());return}i.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=i,Tt(i)&&i.select()}},m=function(d){var i=u("setReturnFocus",d);return i||(i===!1?!1:d)},x=function(d){var i=d.target,v=d.event,O=d.isBackward,C=O===void 0?!1:O;i=i||gn(v),c();var E=null;if(a.tabbableGroups.length>0){var I=g(i,v),R=I>=0?a.containerGroups[I]:void 0;if(I<0)C?E=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:E=a.tabbableGroups[0].firstTabbableNode;else if(C){var S=Hn(a.tabbableGroups,function(En){var Cn=En.firstTabbableNode;return i===Cn});if(S<0&&(R.container===i||Tn(i,o.tabbableOptions)&&!tn(i,o.tabbableOptions)&&!R.nextTabbableNode(i,!1))&&(S=I),S>=0){var en=S===0?a.tabbableGroups.length-1:S-1,sn=a.tabbableGroups[en];E=Z(i)>=0?sn.lastTabbableNode:sn.lastDomTabbableNode}else un(v)||(E=R.nextTabbableNode(i,!1))}else{var q=Hn(a.tabbableGroups,function(En){var Cn=En.lastTabbableNode;return i===Cn});if(q<0&&(R.container===i||Tn(i,o.tabbableOptions)&&!tn(i,o.tabbableOptions)&&!R.nextTabbableNode(i))&&(q=I),q>=0){var Se=q===a.tabbableGroups.length-1?0:q+1,Dn=a.tabbableGroups[Se];E=Z(i)>=0?Dn.firstTabbableNode:Dn.firstDomTabbableNode}else un(v)||(E=R.nextTabbableNode(i))}}else E=u("fallbackFocus");return E},z=function(d){var i=gn(d);if(!(g(i,d)>=0)){if(ln(o.clickOutsideDeactivates,d)){l.deactivate({returnFocus:o.returnFocusOnDeactivate});return}ln(o.allowOutsideClick,d)||d.preventDefault()}},F=function(d){var i=gn(d),v=g(i,d)>=0;if(v||i instanceof Document)v&&(a.mostRecentlyFocusedNode=i);else{d.stopImmediatePropagation();var O,C=!0;if(a.mostRecentlyFocusedNode)if(Z(a.mostRecentlyFocusedNode)>0){var E=g(a.mostRecentlyFocusedNode),I=a.containerGroups[E].tabbableNodes;if(I.length>0){var R=I.findIndex(function(S){return S===a.mostRecentlyFocusedNode});R>=0&&(o.isKeyForward(a.recentNavEvent)?R+1<I.length&&(O=I[R+1],C=!1):R-1>=0&&(O=I[R-1],C=!1))}}else a.containerGroups.some(function(S){return S.tabbableNodes.some(function(en){return Z(en)>0})})||(C=!1);else C=!1;C&&(O=x({target:a.mostRecentlyFocusedNode,isBackward:o.isKeyBackward(a.recentNavEvent)})),p(O||a.mostRecentlyFocusedNode||h())}a.recentNavEvent=void 0},P=function(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=d;var v=x({event:d,isBackward:i});v&&(un(d)&&d.preventDefault(),p(v))},k=function(d){if(Ot(d)&&ln(o.escapeDeactivates,d)!==!1){d.preventDefault(),l.deactivate();return}(o.isKeyForward(d)||o.isKeyBackward(d))&&P(d,o.isKeyBackward(d))},D=function(d){var i=gn(d);g(i,d)>=0||ln(o.clickOutsideDeactivates,d)||ln(o.allowOutsideClick,d)||(d.preventDefault(),d.stopImmediatePropagation())},B=function(){if(a.active)return jn.activateTrap(r,l),a.delayInitialFocusTimer=o.delayInitialFocus?Bn(function(){p(h())}):p(h()),t.addEventListener("focusin",F,!0),t.addEventListener("mousedown",z,{capture:!0,passive:!1}),t.addEventListener("touchstart",z,{capture:!0,passive:!1}),t.addEventListener("click",D,{capture:!0,passive:!1}),t.addEventListener("keydown",k,{capture:!0,passive:!1}),l},X=function(){if(a.active)return t.removeEventListener("focusin",F,!0),t.removeEventListener("mousedown",z,!0),t.removeEventListener("touchstart",z,!0),t.removeEventListener("click",D,!0),t.removeEventListener("keydown",k,!0),l},on=function(d){var i=d.some(function(v){var O=Array.from(v.removedNodes);return O.some(function(C){return C===a.mostRecentlyFocusedNode})});i&&p(h())},nn=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(on):void 0,H=function(){nn&&(nn.disconnect(),a.active&&!a.paused&&a.containers.map(function(d){nn.observe(d,{subtree:!0,childList:!0})}))};return l={get active(){return a.active},get paused(){return a.paused},activate:function(d){if(a.active)return this;var i=s(d,"onActivate"),v=s(d,"onPostActivate"),O=s(d,"checkCanFocusTrap");O||c(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=t.activeElement,i?.();var C=function(){O&&c(),B(),H(),v?.()};return O?(O(a.containers.concat()).then(C,C),this):(C(),this)},deactivate:function(d){if(!a.active)return this;var i=Mn({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},d);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,X(),a.active=!1,a.paused=!1,H(),jn.deactivateTrap(r,l);var v=s(i,"onDeactivate"),O=s(i,"onPostDeactivate"),C=s(i,"checkCanReturnFocus"),E=s(i,"returnFocus","returnFocusOnDeactivate");v?.();var I=function(){Bn(function(){E&&p(m(a.nodeFocusedBeforeActivation)),O?.()})};return E&&C?(C(m(a.nodeFocusedBeforeActivation)).then(I,I),this):(I(),this)},pause:function(d){if(a.paused||!a.active)return this;var i=s(d,"onPause"),v=s(d,"onPostPause");return a.paused=!0,i?.(),X(),H(),v?.(),this},unpause:function(d){if(!a.paused||!a.active)return this;var i=s(d,"onUnpause"),v=s(d,"onPostUnpause");return a.paused=!1,i?.(),c(),B(),H(),v?.(),this},updateContainerElements:function(d){var i=[].concat(d).filter(Boolean);return a.containers=i.map(function(v){return typeof v=="string"?t.querySelector(v):v}),a.active&&c(),H(),this}},l.updateContainerElements(n),l};function Te(n,e){const[t,r]=K();function o(){r(Ce(n(),{...e,tabbableOptions:{...e?.tabbableOptions,getShadowRoot:!0}}))}return n()?o():Nn(()=>{if(!n())throw new Error("Element is not available");o()}),kn(()=>{var a;(a=t())==null||a.deactivate(),r(void 0)}),t}const In=n=>{const e=Pe(()=>n.children),t=N(()=>e.toArray().find(s=>s instanceof HTMLElement)),r=N(()=>n.trigger()?t():void 0),o=()=>({enterFrom:`${n.name}-enter-from`,enterTo:`${n.name}-enter-to`,leaveFrom:`${n.name}-leave-from`,leaveTo:`${n.name}-leave-to`});an(Ln(()=>n.name,()=>{const s=Object.values(o());kn(()=>{var g;(g=t())==null||g.classList.remove(...s)})}));function a(){var s,g;const{leaveFrom:u,leaveTo:h,enterFrom:c,enterTo:b}=o();(s=t())==null||s.classList.remove(u,h),(g=t())==null||g.classList.add(c),setTimeout(()=>{var p;(p=t())==null||p.classList.add(b)},0)}function l(){var s;const{leaveFrom:g,leaveTo:u,enterFrom:h,enterTo:c}=o(),b=(s=t())==null?void 0:s.classList;if(b?.add(g,u),b?.remove(c,h),t()){const p=ee(t(),"transitionend",()=>{p(),b?.remove(g,u)})}}return an(Ln(r,(s,g)=>{s?a():g&&l()})),N(t)},Nt=".navigation{position:relative;background-color:var(--color-white);box-shadow:3px 0 22.9px #00000014;font-family:var(--font-family-inter)}.navigation-burger-btn{padding:var(--spacing-2);border:none;background:none;color:var(--color-gray-900);font-size:var(--spacing-8);cursor:pointer}@media (min-width: 1024px){.navigation-burger-btn{display:none}}:host(.dark) .navigation-burger-btn{color:var(--color-white)}.navigation-inner{display:flex;align-items:center;padding-block:var(--spacing-4);gap:var(--spacing-8)}.logo-container{width:100%;max-width:var(--spacing-20)}.navigation-list{display:flex;flex-direction:column;margin:0;padding:0;gap:var(--spacing-4);list-style:none}@media (min-width: 1024px){.navigation-list{flex-direction:row;align-items:center}}.menu-panel{display:none;z-index:1000;position:fixed;top:var(--navigation-height);right:0;bottom:0;flex-direction:column;width:17.1875rem;padding-inline:var(--spacing-4);padding-block:var(--spacing-4);overflow-y:auto;gap:var(--spacing-4);transform:translate(100%);background-color:var(--color-white)}@media (min-width: 1024px){.menu-panel{display:block}}@media (min-width: 1024px){.menu-panel{display:block;position:static;width:initial;padding-inline:0;padding-block:0;transform:translate(0);background-color:transparent}}:host(.dark) .menu-panel{background-color:var(--color-gray-900)}.menu-panel-close-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:0;overflow:hidden;border:none;background-color:transparent;text-align:center;text-decoration:underline;opacity:0;pointer-events:none}@media (min-width: 1024px){.menu-panel-close-btn{display:none}}.menu-panel-close-btn:focus-visible{position:static;flex-shrink:0;height:initial;opacity:1;pointer-events:auto}@media (min-width: 1024px){.menu-panel-close-btn:focus-visible{display:none}}.navigation-overlay{display:none;z-index:999;position:fixed;top:var(--navigation-height);right:0;bottom:0;left:0;background-color:#00000080;opacity:0}.navigation-options{display:flex;align-items:center;margin-left:auto;gap:var(--spacing-2)}.mobile-panel{display:flex;flex-direction:column;margin:auto 0 0;padding:0;gap:var(--spacing-2);list-style:none}@media (min-width: 1024px){.mobile-panel{display:none}}:host(.dark) .mobile-panel ::slotted(*){color:var(--color-white)}:host(.dark) .navigation{background-color:var(--color-gray-900);color:var(--color-white)}:host(.dark) .navigation-item a{color:var(--color-white)}:host(.dark) .navigation-item a[data-active]{background-color:var(--color-blue-900);color:var(--color-blue-400)}:host(.dark) .navigation-item a:not([data-active]):hover,:host(.dark) .navigation-item a:not([data-active]):focus{background-color:var(--color-gray-800)}:host(.dark) .navigation-item a:not([data-active]):active{background-color:var(--color-gray-700)}.panel-enter-from{display:flex}.panel-enter-to,.panel-leave-from{display:flex;transform:translate(0);transition:transform .3s ease-in-out}.panel-leave-to{transform:translate(100%)}.overlay-enter-from{display:block}.overlay-enter-to,.overlay-leave-from{display:block;opacity:1;transition:opacity .3s ease-in-out}.overlay-leave-to{opacity:0}";function Ft(n,e){const t=new ResizeObserver(n);return kn(t.disconnect.bind(t)),{observe:r=>t.observe(r,e),unobserve:t.unobserve.bind(t)}}function St(n,e,t){const r=new WeakMap,{observe:o,unobserve:a}=Ft(l=>{for(const s of l){const{contentRect:g,target:u}=s,h=Math.round(g.width),c=Math.round(g.height),b=r.get(u);(!b||b.width!==h||b.height!==c)&&(e(g,u,s),r.set(u,{width:h,height:c}))}},t);an(l=>{const s=Le(Re(Ae(n)));return Ge(s,l,o,a),s},[])}var Pt={top:null,left:null,bottom:null,right:null,width:null,height:null};function _n(n){if(!n)return{...Pt};const e=n.getBoundingClientRect();return{top:e.top,left:e.left,bottom:e.bottom,right:e.right,width:e.width,height:e.height}}function Dt(n,{trackMutation:e=!0,trackResize:t=!0,trackScroll:r=!0}={}){const o=typeof n=="function",[a,l]=K(void 0,{equals:!1});let s;o?(s=()=>_n(n()),Nn(l)):s=()=>_n(n);const g=De(()=>(a(),s()));if(t&&St(o?()=>n()||[]:n,typeof t=="function"?t(l):l),r){const u=o?h=>{const c=n();c&&h.target instanceof Node&&h.target.contains(c)&&l()}:h=>h.target instanceof Node&&h.target.contains(n)&&l();ee(window,"scroll",typeof r=="function"?r(u):u,{capture:!0})}if(e){const u=new MutationObserver(typeof e=="function"?e(l):l);u.observe(document.body,{attributeFilter:["style","class"],subtree:!0,childList:!0}),kn(()=>u.disconnect())}return g}var Kn=y("<style>"),Lt=y("<div class=menu-panel><button class=menu-panel-close-btn><span>Fermer</span></button><ul class=navigation-list></ul><ul class=mobile-panel>"),Rt=y("<div class=navigation-overlay>"),At=y('<nav class=navigation role=navigation><div class="navigation-inner container-max"><div class=logo-container><slot name=logo></slot></div><div class=navigation-options><slot name=options></slot><button class=navigation-burger-btn><solid-icon>',!0,!1),Gt=y("<li class=navigation-item>");const Mt="solid-navigation";V(Mt,T.object({}),()=>{const n=dn(),e=Fn(n),t=N(()=>e().filter(k=>k.matches("template"))),r=N(()=>{var k,D,B;return(B=(D=(k=t())==null?void 0:k.find(X=>X.getAttribute("slot")===null))==null?void 0:D.content)==null?void 0:B.cloneNode(!0)}),o=N(()=>{var k,D,B;return(B=(D=(k=t())==null?void 0:k.find(X=>X.getAttribute("slot")==="mobile-panel"))==null?void 0:D.content)==null?void 0:B.cloneNode(!0)}),a=N(()=>{var k;return Array.from(((k=r())==null?void 0:k.children)??[])}),[l,s]=K(!1),[g,u]=K(),[h,c]=K(),[b,p]=K(),[m,x]=K(!1),z=Dt(g),F=Te(()=>h(),{onDeactivate:()=>{s(!1)},escapeDeactivates:!0,allowOutsideClick:k=>b()?k.composedPath().includes(b()):!1});an(()=>{var k;l()?queueMicrotask(()=>{var D;(D=F())==null||D.activate()}):(k=F())==null||k.deactivate()}),Nn(()=>{x(!0)});const P=()=>!Me.lg;return[(()=>{var k=Kn();return k.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}
.px{padding-left:1rem;padding-right:1rem;}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,k})(),(()=>{var k=Kn();return $(k,Nt),k})(),(()=>{var k=At(),D=k.firstChild,B=D.firstChild,X=B.firstChild,on=B.nextSibling,nn=on.firstChild,H=nn.nextSibling,d=H.firstChild;return U(i=>u(i),k),X._$owner=L(),$(D,w(In,{trigger:()=>l(),name:"panel",get children(){var i=Lt(),v=i.firstChild,O=v.nextSibling,C=O.nextSibling;return U(E=>c(E),i),v.$$click=()=>{s(!1)},$(O,w($n,{get each(){return a()},children:E=>(()=>{var I=Gt();return $(I,E),I})()})),$(C,(()=>{var E=N(()=>!!m());return()=>E()&&o()})()),W(E=>{var I=P(),R=P()?"dialog":void 0,S=P()?"Panneau de navigation":"";return I!==E.e&&G(i,"aria-modal",E.e=I),R!==E.t&&G(i,"role",E.t=R),S!==E.a&&G(i,"aria-label",E.a=S),E},{e:void 0,t:void 0,a:void 0}),i}}),on),$(D,w(In,{trigger:()=>P()&&l(),name:"overlay",get children(){return Rt()}}),on),nn._$owner=L(),U(i=>p(i),H),H.$$click=()=>{s(i=>!i)},d._$owner=L(),W(i=>{var v=z.height?`${z.height}px`:"0px",O=l()?"Fermer le menu":"Ouvrir le menu",C=l()?"mingcute-close-line":"mingcute-menu-line";return v!==i.e&&((i.e=v)!=null?k.style.setProperty("--navigation-height",v):k.style.removeProperty("--navigation-height")),O!==i.t&&G(H,"aria-label",i.t=O),C!==i.a&&(d.icon=i.a=C),i},{e:void 0,t:void 0,a:void 0}),k})()]});te(["click"]);const jt=".navigation-item{display:flex;align-items:center;max-width:max-content;padding-inline:var(--spacing-3);padding-block:var(--spacing-2);gap:var(--spacing-1);border:none;border-radius:var(--radius-sm);background-color:transparent;color:var(--color-gray-900);font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5);line-height:var(--line-height-5);font-family:var(--font-family-inter);text-decoration:none}.navigation-item:not(.navigation-item-static){cursor:pointer}.navigation-item.navigation-item-active{background-color:var(--color-blue-100);color:var(--color-blue-700);font-weight:var(--font-weight-semibold)}.navigation-item:not(.navigation-item-active):not(.navigation-item-static):hover,.navigation-item:not(.navigation-item-active):not(.navigation-item-static):focus{background-color:var(--color-gray-100)}.navigation-item:not(.navigation-item-active):not(.navigation-item-static):active{background-color:var(--color-gray-200)}.navigation-item ::slotted(:where(solid-icon)){font-size:var(--font-size-5)}:host(.dark) .navigation-item{color:var(--color-white)}:host(.dark) .navigation-item.navigation-item-active{background-color:var(--color-blue-900);color:var(--color-blue-400)}:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):hover,:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):focus{background-color:var(--color-gray-800)}:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):active{background-color:var(--color-gray-700)}";var qn=y("<style>"),Bt=y("<slot>");const Ht="solid-navigation-item";V(Ht,T.object({as:T.enum(["button","a","span"]).optional().default("a"),href:T.string().optional(),target:T.string().optional(),active:T.boolean().optional().default(!1),arialabel:T.string().optional(),ariacurrent:T.string().optional().transform(n=>n)}),n=>[(()=>{var e=qn();return e.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,e})(),(()=>{var e=qn();return $(e,jt),e})(),w(je,{get component(){return n.as},class:"navigation-item",get classList(){return{"navigation-item-active":n.active,"navigation-item-static":n.as==="span"}},get href(){return n.href},get target(){return n.target},get"aria-label"(){return n.arialabel},get"aria-current"(){return n.ariacurrent},get children(){var e=Bt();return e._$owner=L(),e}})]);const _t=".avatar-container{width:7.625rem;height:7.625rem;border-radius:50%}.avatar-container-sm{width:var(--spacing-10);height:var(--spacing-10)}.avatar-container-md{width:var(--spacing-20);height:var(--spacing-20)}.avatar-container .avatar{width:100%;height:100%;object-fit:cover;border-radius:50%}";var Un=y("<style>"),Kt=y('<img class=avatar alt="">'),qt=y('<svg class=avatar viewBox="0 0 80 80"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path opacity=0.3 d="M40 8.66667C22.6884 8.66667 8.6667 22.6883 8.6667 40C8.6667 47.6375 11.4084 54.6092 15.9517 60.0533C22.8122 54.6707 31.2801 51.7453 40 51.7453C48.72 51.7453 57.1879 54.6707 64.0484 60.0533C68.7604 54.4342 71.34 47.3334 71.3334 40C71.3334 22.6883 57.3117 8.66667 40 8.66667ZM40 43.9167C32.4409 43.9167 26.2917 37.7675 26.2917 30.2083C26.2917 22.6492 32.4409 16.5 40 16.5C47.5592 16.5 53.7084 22.6492 53.7084 30.2083C53.7084 37.7675 47.5592 43.9167 40 43.9167Z"fill=#007AAD></path><path d="M40 0.833326C18.38 0.833326 0.833298 18.38 0.833298 40C0.833298 61.62 18.38 79.1667 40 79.1667C61.62 79.1667 79.1666 61.62 79.1666 40C79.1666 18.38 61.62 0.833326 40 0.833326ZM40 71.3333C33.185 71.3333 26.9183 69.14 21.7875 65.4583C26.9183 61.7767 33.185 59.5833 40 59.5833C46.815 59.5833 53.0816 61.7767 58.2125 65.4583C53.0816 69.14 46.815 71.3333 40 71.3333ZM64.0483 60.0533C57.1878 54.6707 48.72 51.7453 40 51.7453C31.28 51.7453 22.8121 54.6707 15.9516 60.0533C11.2396 54.4342 8.65997 47.3334 8.66663 40C8.66663 22.6883 22.6883 8.66666 40 8.66666C57.3116 8.66666 71.3333 22.6883 71.3333 40C71.3333 47.6375 68.5916 54.6092 64.0483 60.0533Z"fill=#007AAD></path><path d="M40 16.2258C32.4409 16.2258 26.2917 22.375 26.2917 29.9342C26.2917 37.4933 32.4409 43.6425 40 43.6425C47.5592 43.6425 53.7084 37.4933 53.7084 29.9342C53.7084 22.375 47.5592 16.2258 40 16.2258ZM40 35.8092C36.7492 35.8092 34.125 33.185 34.125 29.9342C34.125 26.6833 36.7492 24.0592 40 24.0592C43.2509 24.0592 45.875 26.6833 45.875 29.9342C45.875 33.185 43.2509 35.8092 40 35.8092Z"fill=#007AAD>'),Ut=y("<div class=avatar-container>");const Vt="solid-avatar";V(Vt,T.object({src:T.string().optional(),sm:T.boolean().optional().default(!1),md:T.boolean().optional().default(!1)}),n=>[(()=>{var e=Un();return e.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,e})(),(()=>{var e=Un();return $(e,_t),e})(),(()=>{var e=Ut();return $(e,w(fn,{get when(){return n.src},get children(){var t=Kt();return W(()=>G(t,"src",n.src)),t}}),null),$(e,w(fn,{get when(){return!n.src},get children(){return qt()}}),null),W(t=>{var r=!!(n.sm&&!n.md),o=!!n.md;return r!==t.e&&e.classList.toggle("avatar-container-sm",t.e=r),o!==t.t&&e.classList.toggle("avatar-container-md",t.t=o),t},{e:void 0,t:void 0}),e})()]);const Yt=".profile-container{display:flex;align-items:flex-start;gap:var(--spacing-3);color:var(--color-gray-900);font-family:var(--font-family-inter)}:host(.dark) .profile-container{color:var(--color-white)}.profile-avatar{flex-shrink:0}.profile-name{margin:0;font-weight:var(--font-weight-medium);font-size:var(--font-size-3-5);line-height:var(--line-height-5)}.profile-email{margin:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3);line-height:var(--line-height-4)}";var Vn=y("<style>"),Xt=y("<div class=profile-container><div class=profile-avatar><slot name=avatar></slot></div><div class=profile-info><p class=profile-name><slot name=name></slot></p><p class=profile-email><slot name=email>");const Wt="solid-profile";V(Wt,T.object({}),()=>[(()=>{var n=Vn();return n.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,n})(),(()=>{var n=Vn();return $(n,Yt),n})(),(()=>{var n=Xt(),e=n.firstChild,t=e.firstChild,r=e.nextSibling,o=r.firstChild,a=o.firstChild,l=o.nextSibling,s=l.firstChild;return t._$owner=L(),a._$owner=L(),s._$owner=L(),n})()]);var cn=new WeakMap,M=[];function Zt(n,e={}){const{rootEl:t}=e,r=n.filter(Boolean);if(r.length===0)return;const o=r[0].ownerDocument||document,a=o.defaultView??window,l=new Set(r),s=new Set,g=t??o.body;let u=p=>{for(let F of p.querySelectorAll("[data-live-announcer], [data-zag-top-layer]"))l.add(F);let m=F=>{if(l.has(F)||s.has(F.parentElement)&&F.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let P of l)if(F.contains(P))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},x=o.createTreeWalker(p,NodeFilter.SHOW_ELEMENT,{acceptNode:m}),z=m(p);if(z===NodeFilter.FILTER_ACCEPT&&h(p),z!==NodeFilter.FILTER_REJECT){let F=x.nextNode();for(;F!=null;)h(F),F=x.nextNode()}},h=p=>{let m=cn.get(p)??0;p.getAttribute("aria-hidden")==="true"&&m===0||(m===0&&p.setAttribute("aria-hidden","true"),s.add(p),cn.set(p,m+1))};M.length&&M[M.length-1].disconnect(),u(g);const c=new a.MutationObserver(p=>{for(let m of p)if(!(m.type!=="childList"||m.addedNodes.length===0)&&![...l,...s].some(x=>x.contains(m.target))){for(let x of m.removedNodes)x instanceof a.Element&&(l.delete(x),s.delete(x));for(let x of m.addedNodes)(x instanceof a.HTMLElement||x instanceof a.SVGElement)&&(x.dataset.liveAnnouncer==="true"||x.dataset.zagTopLayer==="true")?l.add(x):x instanceof a.Element&&u(x)}});c.observe(g,{childList:!0,subtree:!0});let b={observe(){c.observe(g,{childList:!0,subtree:!0})},disconnect(){c.disconnect()}};return M.push(b),()=>{c.disconnect();for(let p of s){let m=cn.get(p);m===1?(p.removeAttribute("aria-hidden"),cn.delete(p)):cn.set(p,m-1)}b===M[M.length-1]?(M.pop(),M.length&&M[M.length-1].observe()):M.splice(M.indexOf(b),1)}}function Jt(n,e={}){const{defer:t}=e,r=t?bn:a=>a(),o=[];return o.push(r(()=>{const a=typeof n=="function"?n():n;o.push(Zt(a,e))})),()=>{o.forEach(a=>a?.())}}var On="data-zag-scroll-lock";function Yn(n,e){if(!n)return;const t=n.style.cssText;return Object.assign(n.style,e),()=>{n.style.cssText=t}}function Qt(n,e,t){if(!n)return;const r=n.style.getPropertyValue(e);return n.style.setProperty(e,t),()=>{r?n.style.setProperty(e,r):n.style.removeProperty(e)}}function nr(n){const e=n.getBoundingClientRect().left;return Math.round(e)+n.scrollLeft?"paddingLeft":"paddingRight"}function er(n){const e=n??document,t=e.defaultView??window,{documentElement:r,body:o}=e;if(o.hasAttribute(On))return;o.setAttribute(On,"");const a=t.innerWidth-r.clientWidth,l=()=>Qt(r,"--scrollbar-width",`${a}px`),s=nr(r),g=()=>Yn(o,{overflow:"hidden",[s]:`${a}px`}),u=()=>{const{scrollX:c,scrollY:b,visualViewport:p}=t,m=p?.offsetLeft??0,x=p?.offsetTop??0,z=Yn(o,{position:"fixed",overflow:"hidden",top:`${-(b-Math.floor(x))}px`,left:`${-(c-Math.floor(m))}px`,right:"0",[s]:`${a}px`});return()=>{z?.(),t.scrollTo({left:c,top:b,behavior:"instant"})}},h=[l(),Je()?u():g()];return()=>{h.forEach(c=>c?.()),o.removeAttribute(On)}}var tr=oe("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger"),_=tr.build(),f=ie({getActiveEl:n=>f.getDoc(n).activeElement,getAnchorId:n=>{var e;return((e=n.ids)==null?void 0:e.anchor)??`popover:${n.id}:anchor`},getTriggerId:n=>{var e;return((e=n.ids)==null?void 0:e.trigger)??`popover:${n.id}:trigger`},getContentId:n=>{var e;return((e=n.ids)==null?void 0:e.content)??`popover:${n.id}:content`},getPositionerId:n=>{var e;return((e=n.ids)==null?void 0:e.positioner)??`popover:${n.id}:popper`},getArrowId:n=>{var e;return((e=n.ids)==null?void 0:e.arrow)??`popover:${n.id}:arrow`},getTitleId:n=>{var e;return((e=n.ids)==null?void 0:e.title)??`popover:${n.id}:title`},getDescriptionId:n=>{var e;return((e=n.ids)==null?void 0:e.description)??`popover:${n.id}:desc`},getCloseTriggerId:n=>{var e;return((e=n.ids)==null?void 0:e.closeTrigger)??`popover:${n.id}:close`},getAnchorEl:n=>f.getById(n,f.getAnchorId(n)),getTriggerEl:n=>f.getById(n,f.getTriggerId(n)),getContentEl:n=>f.getById(n,f.getContentId(n)),getPositionerEl:n=>f.getById(n,f.getPositionerId(n)),getTitleEl:n=>f.getById(n,f.getTitleId(n)),getDescriptionEl:n=>f.getById(n,f.getDescriptionId(n)),getFocusableEls:n=>Ke(f.getContentEl(n)),getFirstFocusableEl:n=>f.getFocusableEls(n)[0],getInitialFocusEl:n=>{let e=le(n.initialFocusEl);return!e&&n.autoFocus&&(e=f.getFirstFocusableEl(n)),e||(e=f.getContentEl(n)),e}});function rr(n,e,t){const r=n.matches("open"),o=n.context.currentPlacement,a=n.context.currentPortalled,l=n.context.renderedElements,s=Ye({...n.context.positioning,placement:o});return{portalled:a,isOpen:r,open(){e("OPEN")},close(){e("CLOSE")},reposition(g={}){e({type:"POSITIONING.SET",options:g})},arrowProps:t.element({id:f.getArrowId(n.context),..._.arrow.attrs,dir:n.context.dir,style:s.arrow}),arrowTipProps:t.element({..._.arrowTip.attrs,dir:n.context.dir,style:s.arrowTip}),anchorProps:t.element({..._.anchor.attrs,dir:n.context.dir,id:f.getAnchorId(n.context)}),triggerProps:t.button({..._.trigger.attrs,dir:n.context.dir,type:"button","data-placement":o,id:f.getTriggerId(n.context),"aria-haspopup":"dialog","aria-expanded":r,"data-state":r?"open":"closed","aria-controls":f.getContentId(n.context),onClick(){e("TOGGLE")},onBlur(g){e({type:"TRIGGER_BLUR",target:g.relatedTarget})}}),indicatorProps:t.element({..._.indicator.attrs,dir:n.context.dir,"data-state":r?"open":"closed"}),positionerProps:t.element({id:f.getPositionerId(n.context),..._.positioner.attrs,dir:n.context.dir,style:s.floating}),contentProps:t.element({..._.content.attrs,dir:n.context.dir,id:f.getContentId(n.context),tabIndex:-1,role:"dialog",hidden:!r,"data-state":r?"open":"closed","data-expanded":rn(r),"aria-labelledby":l.title?f.getTitleId(n.context):void 0,"aria-describedby":l.description?f.getDescriptionId(n.context):void 0,"data-placement":o}),titleProps:t.element({..._.title.attrs,id:f.getTitleId(n.context),dir:n.context.dir}),descriptionProps:t.element({..._.description.attrs,id:f.getDescriptionId(n.context),dir:n.context.dir}),closeTriggerProps:t.button({..._.closeTrigger.attrs,dir:n.context.dir,id:f.getCloseTriggerId(n.context),type:"button","aria-label":"close",onClick(){e("CLOSE")}})}}function ar(n){const e=he(n);return ve({id:"popover",initial:e.open?"open":"closed",context:{closeOnInteractOutside:!0,closeOnEsc:!0,autoFocus:!0,modal:!1,portalled:!0,positioning:{placement:"bottom",...e.positioning},currentPlacement:void 0,...e,renderedElements:{title:!0,description:!0}},computed:{currentPortalled:t=>!!t.modal||!!t.portalled},watch:{open:["toggleVisibility"]},entry:["checkRenderedElements"],states:{closed:{on:{"CONTROLLED.OPEN":{target:"open",actions:["setInitialFocus"]},TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}]}},open:{activities:["trapFocus","preventScroll","hideContentBelow","trackPositioning","trackDismissableElement","proxyTabFocus"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["restoreFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","restoreFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"POSITIONING.SET":{actions:"reposition"}}}}},{guards:{isOpenControlled:t=>!!t["open.controlled"]},activities:{trackPositioning(t){t.currentPlacement=t.positioning.placement;const r=f.getAnchorEl(t)??f.getTriggerEl(t);return Rn(r,()=>f.getPositionerEl(t),{...t.positioning,defer:!0,onComplete(o){t.currentPlacement=o.placement}})},trackDismissableElement(t,r,{send:o}){const a=()=>f.getContentEl(t);let l=!0;return Xe(a,{pointerBlocking:t.modal,exclude:f.getTriggerEl(t),defer:!0,onEscapeKeyDown(s){var g;(g=t.onEscapeKeyDown)==null||g.call(t,s),!t.closeOnEsc&&s.preventDefault()},onInteractOutside(s){var g;(g=t.onInteractOutside)==null||g.call(t,s),!s.defaultPrevented&&(l=!(s.detail.focusable||s.detail.contextmenu),t.closeOnInteractOutside||s.preventDefault())},onPointerDownOutside:t.onPointerDownOutside,onFocusOutside:t.onFocusOutside,onDismiss(){o({type:"CLOSE",src:"interact-outside",restoreFocus:l})}})},proxyTabFocus(t){return t.modal||!t.portalled?void 0:We(()=>f.getContentEl(t),{triggerElement:f.getTriggerEl(t),defer:!0,onFocus(r){r.focus({preventScroll:!0})}})},hideContentBelow(t){return t.modal?Jt(()=>[f.getContentEl(t),f.getTriggerEl(t)],{defer:!0}):void 0},preventScroll(t){if(t.modal)return er(f.getDoc(t))},trapFocus(t){if(!t.modal)return;let r;return Ze(()=>{const o=f.getContentEl(t);if(o){r=Ce(o,{escapeDeactivates:!1,allowOutsideClick:!0,preventScroll:!0,returnFocusOnDeactivate:!0,document:f.getDoc(t),fallbackFocus:o,initialFocus:le(t.initialFocusEl)});try{r.activate()}catch{}}}),()=>r?.deactivate()}},actions:{reposition(t,r){const o=f.getAnchorEl(t)??f.getTriggerEl(t);Rn(o,()=>f.getPositionerEl(t),{...t.positioning,...r.options,defer:!0,listeners:!1,onComplete(a){t.currentPlacement=a.placement}})},checkRenderedElements(t){bn(()=>{Object.assign(t.renderedElements,{title:!!f.getTitleEl(t),description:!!f.getDescriptionEl(t)})})},setInitialFocus(t){bn(()=>{var r;(r=f.getInitialFocusEl(t))==null||r.focus({preventScroll:!0})})},restoreFocus(t,r){r.restoreFocus&&bn(()=>{var o;(o=f.getTriggerEl(t))==null||o.focus({preventScroll:!0})})},invokeOnOpen(t){var r;(r=t.onOpenChange)==null||r.call(t,{open:!0})},invokeOnClose(t){var r;(r=t.onOpenChange)==null||r.call(t,{open:!1})},toggleVisibility(t,r,{send:o}){o({type:t.open?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:r})}}})}se()(["autoFocus","closeOnEsc","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open.controlled","open","portalled","positioning"]);const[or,pn]=ce({hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),Oe=n=>{const e=pn(),t=j(()=>e().closeTriggerProps,n);return w(Y.button,t)},$e=n=>{const e=pn(),t=Sn(),r=j(()=>e().contentProps,()=>t().presenceProps,n);return w(fn,{get when(){return!t().isUnmounted},get children(){return w(Y.div,r)}})},ze=n=>{const e=pn(),t=Sn(),r=j(()=>e().positionerProps,n);return w(fn,{get when(){return!t().isUnmounted},get children(){return w(Y.div,r)}})},ir=n=>{const e=de(),t=j({id:Q(),getRootNode:e},n),[r,o]=pe(ar(t),{context:t});return N(()=>rr(r,o,be))},Ie=n=>{const[e,t]=qe(n),[r,o]=ue()(t,["autoFocus","closeOnEsc","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open","portalled","positioning"]),a=ir(r),l=Ue(j(e,()=>({present:a().isOpen}))),s=()=>ge(o.children,a);return w(or,{value:a,get children(){return w(Ve,{value:l,get children(){return s()}})}})},Ne=n=>{const e=pn(),t=j(()=>e().titleProps,n);return w(Y.div,t)},Fe=n=>{const e=pn(),t=Sn(),r=j(()=>e().triggerProps,()=>({"aria-controls":t().isUnmounted&&null}),n);return w(Y.button,r)},sr="[data-part=content]{width:100vw;max-width:18.75rem;padding:var(--spacing-3);border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 8px 8px -4px #10182808,0 20px 24px -8px #10182814}.anchor{display:flex;justify-content:flex-start}[data-part=trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent;font-weight:var(--font-weight-normal);pointer-events:none}[data-part=trigger] *{pointer-events:initial}[data-part=close-trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent}:host(.dark) [data-part=content]{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}::slotted(*){pointer-events:none}.menu-header{display:flex;align-items:center;justify-content:flex-end;padding-bottom:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}:host(.dark) .menu-header{border-color:var(--color-gray-600)}.menu-list{display:flex;flex-direction:column;gap:var(--spacing-2)}.menu-list:not(:first-child){padding-top:var(--spacing-2)}.menu-list:not(:last-child){padding-bottom:var(--spacing-2);border-bottom:1px solid var(--color-gray-300)}:host(.dark) .menu-list{border-color:var(--color-gray-600)}";var Xn=y("<style>"),lr=y("<solid-button as=span variant=ghost><solid-icon icon=mingcute-close-line>",!0,!1),cr=y("<div class=menu-header>"),ur=y("<span class=sr-only><slot name=title>"),dr=y("<div class=menu-list role=list>"),pr=y("<div class=menu-item role=listitem>");const gr="solid-menu",hr=T.object({offsetY:T.number().optional(),placement:T.string().transform(n=>n).optional()});V(gr,hr,n=>{const e=dn(),t=Fn(e),r=N(()=>t().filter(u=>u.matches("template"))),o=N(()=>r().filter(u=>u.matches('[slot="items"]')).map(u=>u.content.cloneNode(!0))),a=N(()=>{var u;const h=(u=r().find(c=>c.matches('[slot="trigger"]')))==null?void 0:u.content.cloneNode(!0);return h?.firstElementChild??void 0}),[l,s]=K(!1),g=Q();return[(()=>{var u=Xn();return u.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,u})(),(()=>{var u=Xn();return $(u,sr),u})(),w(Ie,{id:g,get open(){return l()},getRootNode:()=>e.shadowRoot,onInteractOutside:u=>{u.detail.originalEvent.composedPath().includes(e.shadowRoot)||s(!1)},closeOnInteractOutside:!1,onOpenChange:u=>{s(u.open)},get positioning(){return{offset:{mainAxis:n.offsetY},placement:n.placement}},get children(){return[w(Fe,{get children(){return a()}}),w(ze,{get children(){return w($e,{get children(){return[(()=>{var u=cr();return $(u,w(Oe,{"aria-label":"fermer",get children(){var h=lr(),c=h.firstChild;return h.icononly=!0,h._$owner=L(),c._$owner=L(),h}})),u})(),w(Ne,{get children(){var u=ur(),h=u.firstChild;return h._$owner=L(),u}}),w($n,{get each(){return o()},children:u=>(()=>{var h=dr();return $(h,w($n,{get each(){return Array.from(u.children)},children:c=>(()=>{var b=pr();return $(b,c),b})()})),h})()})]}})}})]}})]});var vr=oe("switch").parts("root","label","control","thumb"),hn=vr.build(),A=ie({getRootId:n=>{var e;return((e=n.ids)==null?void 0:e.root)??`switch:${n.id}`},getLabelId:n=>{var e;return((e=n.ids)==null?void 0:e.label)??`switch:${n.id}:label`},getThumbId:n=>{var e;return((e=n.ids)==null?void 0:e.thumb)??`switch:${n.id}:thumb`},getControlId:n=>{var e;return((e=n.ids)==null?void 0:e.control)??`switch:${n.id}:control`},getHiddenInputId:n=>{var e;return((e=n.ids)==null?void 0:e.input)??`switch:${n.id}:input`},getHiddenInputEl:n=>A.getById(n,A.getHiddenInputId(n))});function br(n,e,t){const r=n.context.isDisabled,o=!r&&n.context.focused,a=n.context.checked,l={"data-active":rn(n.context.active),"data-focus":rn(o),"data-hover":rn(n.context.hovered),"data-disabled":rn(r),"data-state":n.context.checked?"checked":"unchecked","data-invalid":rn(n.context.invalid)};return{isChecked:a,isDisabled:r,isFocused:o,setChecked(s){e({type:"CHECKED.SET",checked:s,isTrusted:!1})},toggleChecked(){e({type:"CHECKED.TOGGLE",checked:a,isTrusted:!1})},rootProps:t.label({...hn.root.attrs,...l,dir:n.context.dir,id:A.getRootId(n.context),htmlFor:A.getHiddenInputId(n.context),onPointerMove(){r||e({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){r||e({type:"CONTEXT.SET",context:{hovered:!1}})},onPointerDown(s){r||(o&&s.preventDefault(),e({type:"CONTEXT.SET",context:{active:!0}}))},onPointerUp(){r||e({type:"CONTEXT.SET",context:{active:!1}})},onClick(s){s.target===A.getHiddenInputEl(n.context)&&s.stopPropagation()}}),labelProps:t.element({...hn.label.attrs,...l,dir:n.context.dir,id:A.getLabelId(n.context)}),thumbProps:t.element({...hn.thumb.attrs,...l,dir:n.context.dir,id:A.getThumbId(n.context),"aria-hidden":!0}),controlProps:t.element({...hn.control.attrs,...l,dir:n.context.dir,id:A.getControlId(n.context),"aria-hidden":!0}),hiddenInputProps:t.input({id:A.getHiddenInputId(n.context),type:"checkbox",required:n.context.required,defaultChecked:a,disabled:r,"aria-labelledby":A.getLabelId(n.context),"aria-invalid":n.context.invalid,name:n.context.name,form:n.context.form,value:n.context.value,style:Qe,onChange(s){const g=s.currentTarget.checked;e({type:"CHECKED.SET",checked:g,isTrusted:!0})},onBlur(){e({type:"CONTEXT.SET",context:{focused:!1}})},onFocus(){e({type:"CONTEXT.SET",context:{focused:!0}})},onKeyDown(s){s.key===" "&&e({type:"CONTEXT.SET",context:{active:!0}})},onKeyUp(s){s.key===" "&&e({type:"CONTEXT.SET",context:{active:!1}})}})}}var{not:Wn}=nt;function fr(n){const e=he(n);return ve({id:"switch",initial:"ready",context:{checked:!1,label:"switch",value:"on",disabled:!1,...e,fieldsetDisabled:!1},computed:{isDisabled:t=>t.disabled||t.fieldsetDisabled},watch:{disabled:"removeFocusIfNeeded",checked:"syncInputElement"},activities:["trackFormControlState"],on:{"CHECKED.TOGGLE":[{guard:Wn("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:Wn("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}}},{guards:{isTrusted:(t,r)=>!!r.isTrusted},activities:{trackFormControlState(t,r,{send:o,initialContext:a}){return et(A.getHiddenInputEl(t),{onFieldsetDisabledChange(l){t.fieldsetDisabled=l},onFormReset(){o({type:"CHECKED.SET",checked:!!a.checked,src:"form-reset"})}})}},actions:{setContext(t,r){Object.assign(t,r.context)},syncInputElement(t){const r=A.getHiddenInputEl(t);r&&(r.checked=!!t.checked)},removeFocusIfNeeded(t){t.disabled&&t.focused&&(t.focused=!1)},setChecked(t,r){Zn.checked(t,r.checked)},toggleChecked(t,r){Zn.checked(t,!t.checked)},dispatchChangeEvent(t){const r=A.getHiddenInputEl(t);tt(r,{checked:t.checked})}}})}var mr={change:n=>{var e;(e=n.onCheckedChange)==null||e.call(n,{checked:n.checked})}},Zn={checked:(n,e)=>{rt(n.checked,e)||(n.checked=e,mr.change(n))}};se()(["checked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","required","value"]);const[wr,Pn]=ce({hookName:"useSwitchContext",providerName:"<SwitchProvider />"});var yr=y("<input>");const xr=n=>{const e=Pn(),t=j(()=>e().controlProps,n);return[w(Y.span,t),(()=>{var r=yr();return Be(r,re(()=>e().hiddenInputProps),!1,!1),r})()]},kr=n=>{const e=Pn(),t=j(()=>e().labelProps,n);return w(Y.span,t)},Er=n=>{const e=de(),t=j({id:Q(),getRootNode:e},n),[r,o]=pe(fr(t),{context:t});return N(()=>br(r,o,be))},Cr=n=>{const[e,t]=ue()(n,["checked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","required","value"]),r=Er(e),o=j(()=>r().rootProps,t),a=()=>ge(n.children,r);return w(wr,{value:r,get children(){return w(Y.label,re(o,{get children(){return a()}}))}})},Tr=n=>{const e=Pn(),t=j(()=>e().thumbProps,n);return w(Y.span,t)},Or=".switch-component{--switch-width: var(--spacing-11);font-family:var(--font-family-inter)}.switch-component.switch-component-checked:not(.switch-component-disabled) .switch-label{color:var(--color-blue-700)}.switch-component.switch-component-disabled :where(.switch-label,.text-hint,.text-error){color:var(--color-gray-400)}:host(.dark) .switch-component.switch-component-checked:not(.switch-component-disabled) .switch-label{color:var(--color-blue-400)}:host(.dark) .switch-component.switch-component-disabled :where(label,.text-hint,.text-error,.switch-title){color:var(--color-gray-400)}.switch-component-error:not(.switch-component-disabled) :where(.switch-label,.switch-title),.switch-component-error:not(.switch-component-disabled):has(:focus,:active) .switch-label{color:var(--color-red-400)}.switch-component-error:not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-red-400)}:host(.dark) .switch-component-error:not(.switch-component-disabled) :where(.switch-label,.switch-title),:host(.dark) .switch-component-error:not(.switch-component-disabled):has(:focus,:active) .switch-label{color:var(--color-red-300)}:host(.dark) .switch-component-error:not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-red-300)}[data-part=root]{display:flex;align-items:flex-start;gap:var(--spacing-3)}.switch-component-reverse [data-part=root]{flex-direction:row-reverse;justify-content:flex-end}.switch-title{display:block;margin:0;margin-bottom:var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter)}.switch-label{color:var(--color-gray-800);font-weight:var(--font-weight-normal);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);cursor:pointer}.switch-component-sm .switch-label{font-size:var(--font-size-3-5);line-height:var(--font-size-5)}.text-hint,.text-error{margin-top:var(--spacing-3);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) .text-error{color:var(--color-red-300)}.switch{display:block;position:relative;width:var(--switch-width);height:var(--spacing-6);margin:0;margin-top:var(--spacing-0-5);border:0;border-radius:var(--radius-full);background-color:var(--color-gray-200);box-shadow:0 0 0 1px inset var(--color-gray-500);cursor:pointer;opacity:1}.switch[data-state=checked]{background-color:var(--color-blue-500);box-shadow:0 0 0 1px transparent}.switch-component-disabled .switch{background-color:var(--color-gray-100);box-shadow:0 0 0 1px transparent;cursor:not-allowed}.switch-thumb{display:block;position:absolute;top:50%;left:0;padding:var(--spacing-0-5);transform:translateY(-50%) translate(var(--spacing-1));border-radius:var(--radius-full);background-color:var(--color-white);box-shadow:0 1px 2px #1018280f,0 1px 3px #1018281a;color:var(--color-gray-800);font-size:var(--spacing-4);transition:transform .15s ease-in-out}.switch-thumb>*{opacity:0;transition:opacity .25s ease-in-out}.switch-component-checked .switch-thumb{transform:translateY(-50%) translate(calc(var(--switch-width) - var(--spacing-1) - 100%))}.switch-component-checked .switch-thumb>*{opacity:1}.switch-component:has(:where(:focus,:active)):not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-gray-900),0 0 0 1px var(--color-gray-900)}:host(.dark) .switch{background-color:var(--color-gray-400);box-shadow:0 0 0 1px inset var(--color-gray-300)}:host(.dark) .switch[data-state=checked]{background-color:var(--color-blue-400);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .switch-thumb{background-color:var(--color-gray-800);color:var(--color-white)}:host(.dark) .switch-component-disabled .switch{background-color:var(--color-gray-600);box-shadow:0 0 0 1px inset var(--color-gray-600)}:host(.dark) .switch-title{color:var(--color-white)}:host(.dark) .switch-component-disabled .switch-title{color:var(--color-gray-400)}:host(.dark) .switch-label{color:var(--color-white)}:host(.dark) .switch-component:has(:where(:focus,:active)):not(.switch-component-disabled) .switch{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color;box-shadow:0 0 0 1px inset var(--color-gray-50)}:host(.dark) .switch-component:has(:where(:focus,:active)) .switch-label{color:var(--color-blue-400)}";var Jn=y("<style>"),$r=y("<solid-icon icon=mingcute-check-line>",!0,!1),zr=y("<div class=switch-component>"),Ir=y("<p class=switch-title><slot name=title>"),Nr=y("<slot name=label>"),Fr=y("<p class=text-error><slot name=error>"),Sr=y("<p class=text-hint><slot name=hint>");const Pr="solid-switch";V(Pr,T.object({id:T.string().optional(),name:T.string(),required:T.boolean().optional(),disabled:T.boolean().optional(),error:T.boolean().optional(),value:T.boolean().optional(),reverse:T.boolean().optional().default(!1),sm:T.boolean().optional().default(!1)}),(n,{emit:e})=>{let t;const r=dn(),o=fe(r),a=r.attachInternals(),l=Q(),[s,g]=at(()=>n.value),u=()=>n.error&&o.has("error"),h=()=>!n.error&&o.has("hint");return an(()=>{a.setFormValue(s()?"on":null),e("change",s(),{bubbles:!1,composed:!1})}),[(()=>{var c=Jn();return c.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,c})(),(()=>{var c=Jn();return $(c,Or),c})(),(()=>{var c=zr(),b=t;return typeof b=="function"?U(b,c):t=c,$(c,(()=>{var p=N(()=>!!o.has("title"));return()=>p()&&(()=>{var m=Ir(),x=m.firstChild;return x._$owner=L(),m})()})(),null),$(c,w(Cr,{get checked(){return s()},onCheckedChange:p=>g(p.checked),get disabled(){return n.disabled},get required(){return n.required},get name(){return n.name},id:l,get children(){return[w(xr,{class:"switch",get children(){return w(Tr,{class:"switch-thumb",get children(){var p=$r();return p._$owner=L(),p}})}}),N(()=>N(()=>!!o.has("label"))()&&w(kr,{class:"switch-label",get children(){var p=Nr();return p._$owner=L(),p}}))]}}),null),$(c,(()=>{var p=N(()=>!!u());return()=>p()&&(()=>{var m=Fr(),x=m.firstChild;return G(m,"id",`error-message-${l}`),x._$owner=L(),m})()})(),null),$(c,(()=>{var p=N(()=>!!h());return()=>p()&&(()=>{var m=Sr(),x=m.firstChild;return G(m,"id",`hint-message-${l}`),x._$owner=L(),m})()})(),null),W(p=>{var m=!!u(),x=!!s(),z=!!n.disabled,F=!!n.reverse,P=!!n.sm;return m!==p.e&&c.classList.toggle("switch-component-error",p.e=m),x!==p.t&&c.classList.toggle("switch-component-checked",p.t=x),z!==p.a&&c.classList.toggle("switch-component-disabled",p.a=z),F!==p.o&&c.classList.toggle("switch-component-reverse",p.o=F),P!==p.i&&c.classList.toggle("switch-component-sm",p.i=P),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()]},{formAssociated:!0});const Dr="solid-popover .popover-inner{display:flex;flex-direction:column;width:100vw;max-width:31.25rem;max-height:31.25rem;padding:var(--spacing-3);overflow:hidden;border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 8px 8px -4px #10182808,0 20px 24px -8px #10182814;font-family:var(--font-family-inter)}solid-popover [data-part=trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent;font-weight:var(--font-weight-normal);pointer-events:none}solid-popover [data-part=trigger] *{pointer-events:initial}solid-popover [data-part=close-trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent}solid-popover .popover-header{display:flex;align-items:center;justify-content:flex-end;padding-bottom:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}solid-popover .popover-subheader{display:flex;align-items:center;justify-content:space-between;padding-top:var(--spacing-3)}solid-popover [data-part=title]{font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5)}solid-popover [data-part=title] *{margin:0;font-weight:inherit;font-size:inherit;line-height:inherit}solid-popover .popover-content:not(:empty){margin-top:var(--spacing-3);overflow-y:auto}.dark solid-popover .popover-header{border-color:var(--color-gray-600)}.dark solid-popover .popover-inner{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}";function vn(n,e){W(()=>{const t=e();n.innerHTML="",t&&[t].flat().forEach(r=>{r&&n.appendChild(r)})})}var Lr=y("<style>"),Qn=y("<span>"),Rr=y("<solid-button as=span variant=ghost><solid-icon icon=mingcute-close-line>",!0,!1),Ar=y("<div class=popover-inner><div class=popover-header></div><div class=popover-subheader><div></div></div><div class=popover-content>");ae.setOrUpdateStyles("popover-styles",Dr);const Gr="solid-popover",Mr=T.object({offsetY:T.number().optional(),arialabel:T.string().optional(),placement:T.string().transform(n=>n).optional()});V(Gr,Mr,n=>{He();const e=dn(),t=Fn(e),r=N(()=>t().filter(c=>c.matches("template"))),o=N(()=>{var c;return(c=r().find(b=>b.matches('[slot="content"]')))==null?void 0:c.content.cloneNode(!0)}),a=N(()=>{var c;return(c=r().find(b=>b.matches('[slot="subheader"]')))==null?void 0:c.content.cloneNode(!0)}),l=N(()=>{var c;return(c=r().find(b=>b.matches('[slot="title"]')))==null?void 0:c.content.cloneNode(!0)}),s=N(()=>{var c;const b=(c=r().find(p=>p.matches('[slot="trigger"]')))==null?void 0:c.content.cloneNode(!0);return b?.firstElementChild??void 0}),[g,u]=K(!1),h=Q();return[(()=>{var c=Lr();return c.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,c})(),w(Ie,{id:h,get open(){return g()},getRootNode:()=>e.shadowRoot,onInteractOutside:c=>{c.detail.originalEvent.composedPath().includes(e)||u(!1)},closeOnInteractOutside:!1,onOpenChange:c=>{u(c.open)},get positioning(){return{offset:{mainAxis:n.offsetY},placement:n.placement}},get children(){return[w(Fe,{get"aria-label"(){return n.arialabel},get children(){var c=Qn();return U(vn,c,()=>s()),c}}),w(ze,{get children(){return w($e,{get children(){var c=Ar(),b=c.firstChild,p=b.nextSibling,m=p.firstChild,x=p.nextSibling;return $(b,w(Oe,{"aria-label":"fermer",get children(){var z=Rr(),F=z.firstChild;return z.icononly=!0,z._$owner=L(),F._$owner=L(),z}})),$(p,w(Ne,{get children(){var z=Qn();return U(vn,z,()=>l()),z}}),m),U(vn,m,()=>a()),U(vn,x,()=>o()),c}})}})]}})]});const jr=".solid-panel .panel-inner{display:none;z-index:1000;position:fixed;top:0;right:0;bottom:0;flex-direction:column;width:100%;max-width:var(--spacing-100);padding-inline:var(--spacing-3);padding-bottom:var(--spacing-4);transform:translate(100%);border:1px solid var(--color-gray-300);background-color:var(--color-white);font-family:var(--font-family-inter)}.solid-panel.panel-open .panel-inner{transform:translate(0)}.solid-panel .panel-header{display:flex;align-items:center;justify-content:flex-end;padding-block:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}.solid-panel .panel-sub-header{display:flex;flex-direction:column;padding-block:var(--spacing-3);gap:var(--spacing-3);border-bottom:1px solid var(--color-gray-300)}.solid-panel .panel-title :is(h1,h2,h3,h4,h5,h6,p){margin:0;font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5);text-align:center}.solid-panel .panel-content{margin-top:var(--spacing-3);overflow-y:auto}.solid-panel .panel-footer{display:flex;flex-direction:column;margin-top:var(--spacing-8);gap:var(--spacing-3)}.solid-panel .side-panel-enter-from{display:flex}.solid-panel .side-panel-enter-to,.solid-panel .side-panel-leave-from{display:flex;transform:translate(0);transition:transform .3s ease-in-out}.solid-panel .side-panel-leave-to{transform:translate(100%)}.dark .solid-panel .panel-inner{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}.dark .solid-panel .panel-header,.dark .solid-panel .panel-sub-header{border-bottom-color:var(--color-gray-600)}";var Br=y("<style>"),Hr=y("<div class=panel-inner><div class=panel-header><solid-button class=panel-close-btn variant=ghost aria-label=Fermer><solid-icon icon=mingcute-close-line iconsize=var(--spacing-6)></solid-icon></solid-button></div><div class=panel-sub-header><div class=panel-title></div></div><div class=panel-content>",!0,!1),_r=y('<div role=dialog class="solid-panel panel">'),Kr=y("<div>"),qr=y("<div class=panel-footer>");ae.setOrUpdateStyles("panel-styles",jr);const Ur="solid-panel";V(Ur,T.object({}),(n,{emit:e})=>{const t=dn(),[r,o]=K(!1),a=fe(t),l=Q();let s;const g=Te(()=>s,{escapeDeactivates:!0,clickOutsideDeactivates:!1,onDeactivate:()=>{o(!1)}});return Object.assign(t,{open(){o(!0)},close(){o(!1)},state(){return r()}}),an(()=>{var u,h,c;if(r()&&!((u=g())!=null&&u.active)){queueMicrotask(()=>{var b;(b=g())==null||b.activate(),e("open",void 0,{bubbles:!1,composed:!1})});return}if((h=g())!=null&&h.active){(c=g())==null||c.deactivate(),e("close",void 0,{bubbles:!1,composed:!1});return}}),[(()=>{var u=Br();return u.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,u})(),w(_e,{get mount(){return document.body},get children(){var u=_r();return G(u,"aria-modal",!1),G(u,"aria-labelledby",`panel-title-${l}`),$(u,w(In,{name:"side-panel",trigger:()=>r(),get children(){var h=Hr(),c=h.firstChild,b=c.firstChild,p=b.firstChild,m=c.nextSibling,x=m.firstChild,z=m.nextSibling,F=s;return typeof F=="function"?U(F,h):s=h,b.$$click=()=>{o(!1)},b.icononly=!0,b._$owner=L(),p._$owner=L(),G(x,"id",`panel-title-${l}`),$(x,()=>{var P;return(P=a.get("title"))==null?void 0:P.content}),$(m,(()=>{var P=N(()=>!!a.has("sub-header"));return()=>P()&&(()=>{var k=Kr();return $(k,()=>{var D;return(D=a.get("sub-header"))==null?void 0:D.content}),k})()})(),null),$(z,()=>{var P;return(P=a.get("content"))==null?void 0:P.content}),$(h,(()=>{var P=N(()=>!!a.has("footer"));return()=>P()&&(()=>{var k=qr();return $(k,()=>{var D;return(D=a.get("footer"))==null?void 0:D.content}),k})()})(),null),h}})),W(()=>G(u,"aria-hidden",!r())),u}})]});te(["click"]);const Vr=".search-component{font-family:var(--font-family-inter)}.search-container{display:grid;grid-template-columns:1fr var(--spacing-10) auto}.search-container .search-input{grid-row:1;grid-column:1 / 3}.search-container .search-btn{grid-row:1;grid-column:2 / 4}.search-input{--anim-duration: .3s;--anim-timing: ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;max-width:100%;padding-inline:var(--spacing-3) var(--spacing-10);padding-block:var(--spacing-3);border:0;border-radius:var(--radius-full);outline:0;background-color:transparent;box-shadow:0 0 0 1px inset var(--color-gray-500);color:inherit;font-size:var(--font-size-4);line-height:inherit;font-family:inherit;letter-spacing:inherit;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.search-input::placeholder{font-style:italic}.search-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}.search-input:disabled{outline:0;background-color:var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400)}.search-input.sm{padding:var(--spacing-2)}:host(.dark) .search-input{background-color:var(--color-gray-900);box-shadow:0 0 0 1px inset var(--color-gray-300);color:var(--color-white)}:host(.dark) .search-input::placeholder{color:var(--color-white)}:host(.dark) .search-input:where(:hover){box-shadow:0 0 0 1px inset var(--color-gray-400)}:host(.dark) .search-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .search-input:disabled{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-gray-500)}";var ne=y("<style>"),Yr=y('<form class=search-component role=search><div class=search-container><label class="search-label visually-hidden">Recherche</label><input class=search-input placeholder=Rechercher type=search name=search-input><solid-button class=search-btn variant=primary><solid-icon class=search-icon icon=mingcute-search-line iconsize=var(--spacing-6)></solid-icon><span class=search-btn-content>Rechercher',!0,!1);const Xr="solid-search";V(Xr,T.object({sm:T.boolean().optional().default(!1)}),n=>{const e=Q();return[(()=>{var t=ne();return t.innerHTML=`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
/* layer: default */

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            min-width: 0;
          }

          svg {
            display: block;
            max-width: 100%;
            vertical-align: middle;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}
.dark .dark\\:fill-white{--un-fill-opacity:1;fill:rgb(255 255 255 / var(--un-fill-opacity));}

        :where(.container-max) {
          --padding-inline: var(--spacing-5);

          @media (width >= 768px) {
            --padding-inline: var(--spacing-10);
          }

          @media (width >= 1280px) {
            --padding-inline: var(--spacing-20);
          }

          max-width: var(--spacing-max);
          margin-inline: auto;
          padding-inline: var(--padding-inline);

          &.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `,t})(),(()=>{var t=ne();return $(t,Vr),t})(),(()=>{var t=Yr(),r=t.firstChild,o=r.firstChild,a=o.nextSibling,l=a.nextSibling,s=l.firstChild,g=s.nextSibling;return G(o,"for",`search-input-${e}`),G(a,"id",`search-input-${e}`),l._$owner=L(),s._$owner=L(),W(u=>{var h=!!n.sm,c=n.sm,b=!!n.sm;return h!==u.e&&a.classList.toggle("sm",u.e=h),c!==u.t&&(l.sm=u.t=c),b!==u.a&&g.classList.toggle("sr-only",u.a=b),u},{e:void 0,t:void 0,a:void 0}),t})()]});export{Te as l};
