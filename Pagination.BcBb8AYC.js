import{Q as u,f as G,S as e,o as r,D as J,u as Q,g as b,T as K}from"./hoisted.umGVjoe0.js";const N=".pagination{display:flex;align-items:center;margin:0;padding:0;gap:var(--spacing-4);list-style:none}.pagination-item{flex-shrink:0}.pagination-item-prev{margin-right:auto}.pagination-item-next{margin-left:auto}.pagination-item-prev-desktop,.pagination-item-next-desktop{display:none}@media (min-width: 768px){.pagination-item-prev-desktop,.pagination-item-next-desktop{display:block}}@media (min-width: 768px){.pagination-item-prev-mobile,.pagination-item-next-mobile{display:none}}.pagination-ellipsis{display:flex;align-items:center;justify-content:center;width:var(--spacing-10);height:var(--spacing-10)}:host(.dark) .pagination-item{color:var(--color-white)}";var A=b("<style>"),O=b('<ul class=pagination><li class="pagination-item pagination-item-prev pagination-item-prev-desktop"><solid-button as=a variant=link><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-left-line></solid-icon></solid-button></li><li class="pagination-item pagination-item-prev pagination-item-prev-mobile"><solid-button as=a variant=ghost><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-left-line></solid-icon><span class=sr-only></span></solid-button></li><li class="pagination-item pagination-item-next pagination-item-next-desktop"><solid-button as=a variant=link><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-right-line></solid-icon></solid-button></li><li class="pagination-item pagination-item-next pagination-item-next-mobile"><solid-button as=a variant=ghost><span class=sr-only></span><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-right-line>',!0,!1),P=b("<li class=pagination-item>"),U=b("<span class=pagination-ellipsis>"),V=b("<solid-button as=a variant=pagination><span class=sr-only>page",!0,!1);const D="solid-pagination",q=u.object({href:u.string(),active:u.boolean().optional()});G(D,u.object({pages:u.array(q).refine(a=>a.some(w=>w.active),{message:`[${D}] At least one page must be active`}),nextLabel:u.string().optional(),prevLabel:u.string().optional()}),a=>{const w=()=>a.pages.length>6,H=()=>{const i=a.pages.map((o,l)=>({...o,label:l+1}));return w()?[...i.slice(0,4),{label:"..."},i[i.length-1]]:i},f=()=>{const i=a.pages.findIndex(o=>o.active);if(i!==-1)return a.pages[i+1]},v=()=>{const i=a.pages.findIndex(o=>o.active);if(i!==-1)return a.pages[i-1]};return[(()=>{var i=A();return i.innerHTML=`/* layer: preflights */
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
      `,i})(),(()=>{var i=A();return e(i,N),i})(),(()=>{var i=O(),o=i.firstChild,l=o.firstChild,M=l.firstChild,k=o.nextSibling,p=k.firstChild,z=p.firstChild,B=z.nextSibling,y=k.nextSibling,d=y.firstChild,C=d.firstChild,E=y.nextSibling,c=E.firstChild,$=c.firstChild,F=$.nextSibling;return l._$owner=r(),M._$owner=r(),e(l,()=>a.prevLabel,null),p.icononly=!0,p._$owner=r(),z._$owner=r(),e(B,()=>a.prevLabel),e(i,J(K,{get each(){return H()},children:n=>{const x=n.label==="...";return(()=>{var g=P();return e(g,x?(()=>{var t=U();return e(t,()=>n.label),t})():(()=>{var t=V();return t.firstChild,t._$owner=r(),e(t,()=>n.label,null),Q(s=>{var h=n?.href,m=n.active?"page":void 0;return h!==s.e&&(t.href=s.e=h),m!==s.t&&(t.ariacurrent=s.t=m),s},{e:void 0,t:void 0}),t})()),g})()}}),y),d._$owner=r(),e(d,()=>a.nextLabel,C),C._$owner=r(),c.icononly=!0,c._$owner=r(),e($,()=>a.nextLabel),F._$owner=r(),Q(n=>{var x,g,t,s,h=(x=v())==null?void 0:x.href,m=!v(),_=(g=v())==null?void 0:g.href,L=!v(),S=(t=f())==null?void 0:t.href,T=!f(),j=(s=f())==null?void 0:s.href,I=!f();return h!==n.e&&(l.href=n.e=h),m!==n.t&&(l.disabled=n.t=m),_!==n.a&&(p.href=n.a=_),L!==n.o&&(p.disabled=n.o=L),S!==n.i&&(d.href=n.i=S),T!==n.n&&(d.disabled=n.n=T),j!==n.s&&(c.href=n.s=j),I!==n.h&&(c.disabled=n.h=I),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),i})()]});
