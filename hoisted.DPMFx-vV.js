import"./hoisted.N8a5Dwc-.js";import"./Select.C3PYJo_F.js";import{TextInputContext as Dt}from"./TextInput.B2HYOq4u.js";import"./Alert.CNmsCE-S.js";import{f as wt,Q as z,b as Z,N as Ft,i as Ht,E as kt,S as E,a as K,o as R,u as X,g as F,w as S,U as zt,y as At,k as st,D as gt,R as ht,T as Vt,K as Wt}from"./hoisted.umGVjoe0.js";import{C as qt,o as Mt,S as Ot,r as Bt,P as It,w as B,x as _,s as W,t as q,B as tt,E as dt,I as ut,J as ot,Q as N,X as bt,Y as O,a0 as G,a1 as nt,a2 as Qt,a3 as $t,a4 as jt,a5 as D,a6 as Lt,a7 as Jt,a8 as Ct}from"./index-n_s8SVLn.BNSbFT9d.js";import{d as Ut}from"./index-D2ZAnnK5.Ddz27_ns.js";import{f as Kt}from"./useSlots-Ccq-HAZO.0F0gLq16.js";import"./Table.D-AWgIG_.js";import"./Tag.CIkxSeu9.js";import"./hoisted.DzDeB4Ob.js";import"./Search.tFtWf5pK.js";import"./solid.B71tQSd1.js";import"./checkbox.store-Bf4Y6MLs.B1wNZxGN.js";const Nt='.tooltip-component{position:relative}.tooltip{--x: 0;--y: 0;z-index:50;position:absolute;top:var(--y);left:var(--x);width:max-content;padding-inline:var(--spacing-3);padding-block:var(--spacing-2);border-radius:var(--radius-lg);background-color:transparent;box-shadow:0 4px 6px -2px #10182808,0 12px 16px -4px #10182814;font-size:var(--font-size-3);line-height:var(--line-height-4);font-family:var(--font-family-inter)}:host(.dark) .tooltip{background-color:var(--color-gray-800);color:var(--color-white)}.tooltip-arrow{--y: 0;--x: 0;position:absolute;top:var(--y);left:var(--x);width:var(--spacing-4);height:var(--spacing-2);background-color:var(--color-white);box-shadow:0 4px 6px -2px #10182808,0 12px 16px -4px #10182814;content:""}:host(.dark) .tooltip-arrow{background-color:var(--color-gray-800)}.tooltip-left .tooltip-arrow{right:initial;left:100%;clip-path:polygon(100% 50%,0 0,0 100%)}.tooltip-right .tooltip-arrow{right:100%;left:initial;clip-path:polygon(0 50%,100% 0,100% 100%)}.tooltip-bottom .tooltip-arrow{top:initial;bottom:100%;clip-path:polygon(50% 0%,0 100%,100% 100%)}.tooltip-top .tooltip-arrow{top:100%;bottom:initial;clip-path:polygon(50% 100%,0 0,100% 0)}.tooltip-btn{padding:var(--spacing-1);border:none;border-radius:var(--radius-full);background-color:transparent;color:var(--color-black);font-size:var(--spacing-8);cursor:pointer}.tooltip-btn:hover{background-color:var(--color-gray-100)}.tooltip-btn:active{background-color:var(--color-gray-200)}.tooltip-btn-error{color:var(--color-red-400)}.tooltip-btn-sm{font-size:var(--spacing-4)}.tooltip-btn:disabled{color:var(--color-gray-400);cursor:not-allowed}.tooltip-btn:disabled:hover,.tooltip-btn:disabled:active{background-color:transparent}:host(.dark) .tooltip-btn{color:var(--color-white)}:host(.dark) .tooltip-btn:hover{background-color:var(--color-gray-700)}:host(.dark) .tooltip-btn:active,:host(.dark) .tooltip-btn:focus-visible{background-color:var(--color-gray-500)}:host(.dark) .tooltip-btn-error{color:var(--color-red-300)}:host(.dark) .tooltip-btn:disabled{color:var(--color-gray-500)}:host(.dark) .tooltip-btn:disabled:hover,:host(.dark) .tooltip-btn:disabled:active{background-color:transparent}';function Tt(t){const n=D(t);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=W(t),s=i?t.offsetWidth:r,e=i?t.offsetHeight:o,l=tt(r)!==s||tt(o)!==e;return l&&(r=s,o=e),{width:r,height:o,$:l}}function Pt(t){return _(t)?t:t.contextElement}function I(t){const n=Pt(t);if(!W(n))return q(1);const r=n.getBoundingClientRect(),{width:o,height:i,$:s}=Tt(n);let e=(s?tt(r.width):r.width)/o,l=(s?tt(r.height):r.height)/i;return(!e||!Number.isFinite(e))&&(e=1),(!l||!Number.isFinite(l))&&(l=1),{x:e,y:l}}const Gt=q(0);function Et(t){const n=O(t);return!Ct()||!n.visualViewport?Gt:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function Yt(t,n,r){return n===void 0&&(n=!1),!r||n&&r!==O(t)?!1:n}function Y(t,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=Pt(t);let e=q(1);n&&(o?_(o)&&(e=I(o)):e=I(t));const l=Yt(s,r,o)?Et(s):q(0);let c=(i.left+l.x)/e.x,p=(i.top+l.y)/e.y,f=i.width/e.x,v=i.height/e.y;if(s){const y=O(s),T=o&&_(o)?O(o):o;let P=y,x=P.frameElement;for(;x&&o&&T!==P;){const $=I(x),h=x.getBoundingClientRect(),d=D(x),m=h.left+(x.clientLeft+parseFloat(d.paddingLeft))*$.x,b=h.top+(x.clientTop+parseFloat(d.paddingTop))*$.y;c*=$.x,p*=$.y,f*=$.x,v*=$.y,c+=m,p+=b,P=O(x),x=P.frameElement}}return Lt({width:f,height:v,x:c,y:p})}const Zt=[":popover-open",":modal"];function pt(t){return Zt.some(n=>{try{return t.matches(n)}catch{return!1}})}function Xt(t){let{elements:n,rect:r,offsetParent:o,strategy:i}=t;const s=i==="fixed",e=B(o),l=n?pt(n.floating):!1;if(o===e||l&&s)return r;let c={scrollLeft:0,scrollTop:0},p=q(1);const f=q(0),v=W(o);if((v||!v&&!s)&&((dt(o)!=="body"||ut(e))&&(c=ot(o)),W(o))){const y=Y(o);p=I(o),f.x=y.x+o.clientLeft,f.y=y.y+o.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+f.x,y:r.y*p.y-c.scrollTop*p.y+f.y}}function tn(t){return Array.from(t.getClientRects())}function Rt(t){return Y(B(t)).left+ot(t).scrollLeft}function nn(t){const n=B(t),r=ot(t),o=t.ownerDocument.body,i=N(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),s=N(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let e=-r.scrollLeft+Rt(t);const l=-r.scrollTop;return D(o).direction==="rtl"&&(e+=N(n.clientWidth,o.clientWidth)-i),{width:i,height:s,x:e,y:l}}function on(t,n){const r=O(t),o=B(t),i=r.visualViewport;let s=o.clientWidth,e=o.clientHeight,l=0,c=0;if(i){s=i.width,e=i.height;const p=Ct();(!p||p&&n==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:e,x:l,y:c}}function rn(t,n){const r=Y(t,!0,n==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,s=W(t)?I(t):q(1),e=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,p=o*s.y;return{width:e,height:l,x:c,y:p}}function mt(t,n,r){let o;if(n==="viewport")o=on(t,r);else if(n==="document")o=nn(B(t));else if(_(n))o=rn(n,r);else{const i=Et(t);o={...n,x:n.x-i.x,y:n.y-i.y}}return Lt(o)}function St(t,n){const r=G(t);return r===n||!_(r)||nt(r)?!1:D(r).position==="fixed"||St(r,n)}function en(t,n){const r=n.get(t);if(r)return r;let o=Jt(t,[],!1).filter(l=>_(l)&&dt(l)!=="body"),i=null;const s=D(t).position==="fixed";let e=s?G(t):t;for(;_(e)&&!nt(e);){const l=D(e),c=$t(e);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&i&&["absolute","fixed"].includes(i.position)||ut(e)&&!c&&St(t,e))?o=o.filter(p=>p!==e):i=l,e=G(e)}return n.set(t,o),o}function an(t){let{element:n,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?pt(n)?[]:en(n,this._c):[].concat(r),o],e=s[0],l=s.reduce((c,p)=>{const f=mt(n,p,i);return c.top=N(f.top,c.top),c.right=bt(f.right,c.right),c.bottom=bt(f.bottom,c.bottom),c.left=N(f.left,c.left),c},mt(n,e,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ln(t){const{width:n,height:r}=Tt(t);return{width:n,height:r}}function sn(t,n,r){const o=W(n),i=B(n),s=r==="fixed",e=Y(t,!0,s,n);let l={scrollLeft:0,scrollTop:0};const c=q(0);if(o||!o&&!s)if((dt(n)!=="body"||ut(i))&&(l=ot(n)),o){const v=Y(n,!0,s,n);c.x=v.x+n.clientLeft,c.y=v.y+n.clientTop}else i&&(c.x=Rt(i));const p=e.left+l.scrollLeft-c.x,f=e.top+l.scrollTop-c.y;return{x:p,y:f,width:e.width,height:e.height}}function ct(t){return D(t).position==="static"}function yt(t,n){return!W(t)||D(t).position==="fixed"?null:n?n(t):t.offsetParent}function _t(t,n){const r=O(t);if(pt(t))return r;if(!W(t)){let i=G(t);for(;i&&!nt(i);){if(_(i)&&!ct(i))return i;i=G(i)}return r}let o=yt(t,n);for(;o&&Qt(o)&&ct(o);)o=yt(o,n);return o&&nt(o)&&ct(o)&&!$t(o)?r:o||jt(t)||r}const cn=async function(t){const n=this.getOffsetParent||_t,r=this.getDimensions,o=await r(t.floating);return{reference:sn(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function dn(t){return D(t).direction==="rtl"}const un={convertOffsetParentRelativeRectToViewportRelativeRect:Xt,getDocumentElement:B,getClippingRect:an,getOffsetParent:_t,getElementRects:cn,getClientRects:tn,getDimensions:ln,getScale:I,isElement:_,isRTL:dn},pn=qt,fn=Mt,gn=Ot,hn=Bt,bn=(t,n,r)=>{const o=new Map,i={platform:un,...r},s={...i.platform,_c:o};return It(t,n,{...i,platform:s})};var vt=F("<style>"),mn=F("<div class=tooltip-component><button class=tooltip-btn><span class=sr-only></span><solid-icon icon=mingcute-question-line></solid-icon></button><div role=tooltip class=tooltip><div class=tooltip-arrow aria-hidden=true></div><slot>",!0,!1);const yn="solid-tooltip";wt(yn,z.object({options:z.object({placement:z.string().pipe(z.custom()).optional()}).optional().default({}),sm:z.boolean().optional().default(!1),disabled:z.boolean().optional().default(!1),error:z.boolean().optional().default(!1)}),t=>{const n="top",r=zt(),o=()=>`tooltip-${r}`,[i,s]=Z(!1),[e,l]=Ut(()=>{var h;return((h=t.options)==null?void 0:h.placement)??n});let c,p,f;const[v,y]=Z({x:0,y:0}),[T,P]=Z({x:"",y:""}),x=Ft(Dt);async function $(){var h;if(c&&p&&f){const{x:d,y:m,middlewareData:b}=await bn(c,p,{...t.options,middleware:[pn(12),gn(),fn(),hn({element:f})]});l(((h=b.offset)==null?void 0:h.placement)??n);const{x:g,y:w}=b.arrow??{};P({x:g!=null?`${g}px`:"",y:w!=null?`${w}px`:""}),y({x:d,y:m})}}return Ht(()=>{i()&&$()}),kt(()=>{$()}),[(()=>{var h=vt();return h.innerHTML=`/* layer: preflights */
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
.block{display:block;}
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
      `,h})(),(()=>{var h=vt();return E(h,Nt),h})(),(()=>{var h=mn(),d=h.firstChild,m=d.firstChild,b=m.nextSibling,g=d.nextSibling,w=g.firstChild,L=w.nextSibling,Q=c;typeof Q=="function"?K(Q,d):c=d,d.addEventListener("click",()=>s(a=>!a)),E(m,()=>i()?"Cacher l'aide":"Afficher l'aide"),b._$owner=R();var j=p;typeof j=="function"?K(j,g):p=g;var u=f;return typeof u=="function"?K(u,w):f=w,L._$owner=R(),X(a=>{var k=!!t.sm,H=!!(x.error()||t.error),A=t.disabled,C=o(),M=o(),V=e()==="top",J=e()==="right",U=e()==="bottom",ft=e()==="left",rt=`${v().x}px`,it=`${v().y}px`,et=i()?"block":"none",at=T().x,lt=T().y;return k!==a.e&&d.classList.toggle("tooltip-btn-sm",a.e=k),H!==a.t&&d.classList.toggle("tooltip-btn-error",a.t=H),A!==a.a&&(d.disabled=a.a=A),C!==a.o&&S(d,"aria-describedby",a.o=C),M!==a.i&&S(g,"id",a.i=M),V!==a.n&&g.classList.toggle("tooltip-top",a.n=V),J!==a.s&&g.classList.toggle("tooltip-right",a.s=J),U!==a.h&&g.classList.toggle("tooltip-bottom",a.h=U),ft!==a.r&&g.classList.toggle("tooltip-left",a.r=ft),rt!==a.d&&((a.d=rt)!=null?g.style.setProperty("--x",rt):g.style.removeProperty("--x")),it!==a.l&&((a.l=it)!=null?g.style.setProperty("--y",it):g.style.removeProperty("--y")),et!==a.u&&((a.u=et)!=null?g.style.setProperty("display",et):g.style.removeProperty("display")),at!==a.c&&((a.c=at)!=null?w.style.setProperty("--x",at):w.style.removeProperty("--x")),lt!==a.w&&((a.w=lt)!=null?w.style.setProperty("--y",lt):w.style.removeProperty("--y")),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),h})()]});const vn=".upload-component{--anim-duration: .3s;--anim-timing: ease-in-out;font-family:var(--font-family-inter)}.upload-title{margin-block:0 var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);transition:var(--anim-duration) var(--anim-timing);transition-property:color}.upload-component-error .upload-title{color:var(--color-red-400)}:host(.dark) .upload-title{color:var(--color-white)}:host(.dark) .upload-component-error .upload-title{color:var(--color-red-300)}.text-hint,.text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-hint{color:var(--color-white)}:host(.dark) .text-error{color:var(--color-red-300)}.upload-files{margin-top:var(--spacing-3)}.upload-files-list{display:flex;flex-wrap:wrap;align-items:center;margin:0;padding:0;gap:var(--spacing-2);list-style-type:none}";var xt=F("<style>"),xn=F("<div class=upload-files><span class=sr-only>Fichiers choisis</span><ul class=upload-files-list>"),wn=F("<div class=upload-component tabindex=-1><div class=upload-container><solid-button as=label variant=primary><span>Choisir un fichier</span><solid-icon icon=mingcute-upload-2-line iconsize=var(--spacing-6)></solid-icon><input type=file class=sr-only>",!0,!1),kn=F("<p class=upload-title><slot name=title>"),zn=F("<li><solid-tag><span class=sr-only>Supprimer le fichier</span><solid-icon icon=mingcute-close-line>",!0,!1),$n=F("<p class=text-error><slot name=error>"),Ln=F("<p class=text-hint><slot name=hint>");const Cn="solid-upload";wt(Cn,z.object({accept:z.string(),error:z.boolean().optional().default(!1),name:z.string(),required:z.boolean().optional().default(!1),multiple:z.boolean().optional().default(!1)}),t=>{const n=ht(),r=n.attachInternals(),[o,i]=Z([]),s=zt(),e=()=>`file-field-${s}`,l=()=>`error-${s}`,c=()=>`hint-${s}`,p=Kt(ht()),f=()=>p.has("error")&&t.error,v=()=>p.has("hint")&&!t.error;let y,T;function P(){const d=new DataTransfer;o().forEach(b=>{d.items.add(b)}),y&&(y.files=d.files);const m=new FormData;o().forEach(b=>{m.append(t.name,b)}),r.setFormValue(m)}function x(){y&&T&&r.setValidity(y.validity,y.validationMessage,T)}function $({target:d}){const m=d.files??[];t.multiple?i([...o(),...Array.from(m)]):i(Array.from(m)),P(),x()}function h(d){i(m=>m.filter(b=>b!==d)),P(),x()}return kt(()=>{n.setAttribute("tabindex","-1"),x()}),[(()=>{var d=xt();return d.innerHTML=`/* layer: preflights */
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
      `,d})(),(()=>{var d=xt();return E(d,vn),d})(),(()=>{var d=wn(),m=d.firstChild,b=m.firstChild,g=b.firstChild,w=g.nextSibling,L=w.nextSibling,Q=T;typeof Q=="function"?K(Q,d):T=d,E(m,(()=>{var u=st(()=>!!p.has("title"));return()=>u()&&(()=>{var a=kn(),k=a.firstChild;return k._$owner=R(),a})()})(),b),b.$$click=u=>{const[a]=u.composedPath();a!=null&&a.matches("input")||(u.preventDefault(),y?.click())},b._$owner=R(),w._$owner=R();var j=y;return typeof j=="function"?K(j,L):y=L,L.addEventListener("change",$),E(d,gt(Wt,{get when(){return o().length},get children(){var u=xn(),a=u.firstChild,k=a.nextSibling;return E(k,gt(Vt,{get each(){return o()},children:H=>(()=>{var A=zn(),C=A.firstChild,M=C.firstChild,V=M.nextSibling;return C.$$click=()=>h(H),C.interactive=!0,C._$owner=R(),E(C,()=>H.name,V),V._$owner=R(),A})()})),u}}),null),E(d,(()=>{var u=st(()=>!!f());return()=>u()&&(()=>{var a=$n(),k=a.firstChild;return k._$owner=R(),X(()=>S(a,"id",l())),a})()})(),null),E(d,(()=>{var u=st(()=>!!v());return()=>u()&&(()=>{var a=Ln(),k=a.firstChild;return k._$owner=R(),X(()=>S(a,"id",c())),a})()})(),null),X(u=>{var a=!!f(),k=e(),H=`label-${e()}`,A=e(),C=`label-${e()}`,M=t.accept,V=t.required,J=t.multiple,U=f()?l():v()?c():void 0;return a!==u.e&&d.classList.toggle("upload-component-error",u.e=a),k!==u.t&&(b.for=u.t=k),H!==u.a&&S(g,"id",u.a=H),A!==u.o&&S(L,"id",u.o=A),C!==u.i&&S(L,"aria-labelledby",u.i=C),M!==u.n&&S(L,"accept",u.n=M),V!==u.s&&(L.required=u.s=V),J!==u.h&&(L.multiple=u.h=J),U!==u.r&&S(L,"aria-describedby",u.r=U),u},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),d})()]},{formAssociated:!0});At(["click"]);
