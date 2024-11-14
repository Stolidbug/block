import{f as L,Q as a,S as o,D as y,u as k,g as l,k as w,o as x,l as j,T as C}from"./hoisted.umGVjoe0.js";import"./solid.B71tQSd1.js";const $='.step-group{display:flex;flex-direction:column;margin:0;padding:0;gap:var(--spacing-1);font-family:var(--font-family-inter);list-style:none}.step{display:flex;position:relative;gap:var(--spacing-3);isolation:isolate}.step:before{position:absolute;top:var(--spacing-9);left:calc(var(--spacing-9) / 2);width:var(--spacing-0-5);height:calc(100% - var(--spacing-9) - var(--spacing-1));margin-top:var(--spacing-1);transform:translate(-50%);border-radius:var(--radius-sm);content:""}.step-count{margin:0;color:var(--color-gray-600);font-weight:var(--font-weight-semibold);font-size:var(--font-size-3);line-height:var(--line-height-4)}.step-title{margin:0;color:var(--color-gray-900);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5)}.step-content{padding-top:var(--spacing-0-5);padding-bottom:var(--spacing-6)}.step-description{margin:0;padding:0;color:var(--color-gray-800);font-size:var(--font-size-3-5);line-height:var(--line-height-5)}.step-icon-container{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:var(--spacing-9);height:var(--spacing-9);border-radius:50%;color:var(--color-white);font-size:var(--spacing-5)}.step:last-child:before{display:none}.step-valid .step-icon-container,.step-valid:before{background-color:var(--color-blue-500)}.step-active .step-icon-container,.step-active:before{background-color:var(--color-blue-700)}.step-active .step-title{color:var(--color-blue-700)}.step-disabled .step-icon-container,.step-disabled:before{background-color:var(--color-gray-300)}.step-disabled .step-count,.step-disabled .step-title,.step-disabled .step-description{color:var(--color-gray-300)}.step-group-sm{display:flex;position:relative;flex-direction:row;padding-bottom:var(--spacing-8);gap:0}.step-group-sm .step{position:static}.step-group-sm .step:before{display:none}.step-group-sm .step:where(:not(:last-child)){flex-grow:1;gap:0}.step-group-sm .step:where(:not(:last-child)):after{z-index:-1;flex-grow:1;align-self:center;scale:1.02 1;border-bottom:var(--spacing-2) solid;border-color:transparent;content:""}.step-group-sm .step-count,.step-group-sm .step-title{color:var(--color-gray-600);font-size:var(--spacing-3)}.step-group-sm .step-count:after{content:" : "}.step-group-sm .step-title{font-weight:var(--font-weight-normal)}.step-group-sm .step-valid:after{border-color:var(--color-blue-500)}.step-group-sm .step-active:after{border-color:var(--color-blue-700)}.step-group-sm .step-disabled:after{border-color:var(--color-gray-300)}.step-group-sm .step-active .step-content{display:flex;position:absolute;bottom:0;left:0;align-items:center;padding:0;gap:var(--spacing-1)}:host(.dark) :where(.step-count,.step-title,.step-description){color:var(--color-white)}:host(.dark) .step-valid .step-icon-container{background-color:var(--color-blue-200);color:var(--color-gray-900)}:host(.dark) .step-valid:before{background-color:var(--color-blue-200)}:host(.dark) .step-valid:after{border-color:var(--color-blue-200)}:host(.dark) .step-active .step-icon-container{background-color:var(--color-blue-400);color:var(--color-gray-900)}:host(.dark) .step-active:before{background-color:var(--color-blue-400)}:host(.dark) .step-active:after{border-color:var(--color-blue-400)}:host(.dark) .step-active .step-title{color:var(--color-blue-400)}:host(.dark) .step-group-sm .step-active .step-title{color:var(--color-white)}:host(.dark) .step-disabled .step-icon-container{background-color:var(--color-gray-600);color:var(--color-gray-900)}:host(.dark) .step-disabled:before{background-color:var(--color-gray-700)}:host(.dark) .step-disabled:after{border-color:var(--color-gray-600)}:host(.dark) .step-disabled .step-count,:host(.dark) .step-disabled .step-title,:host(.dark) .step-disabled .step-description{color:var(--color-gray-600)}';var z=l("<style>"),D=l("<ol class=step-group>"),M=l("<li class=step><div class=step-icon-container><span class=sr-only></span></div><div class=step-content><p class=step-count>Étape&nbsp;<!>&#8239;/&#8239;</p><p class=step-description>"),Q=l("<solid-icon icon=mingcute-check-circle-line>",!0,!1),_=l("<solid-icon icon=mingcute-round-fill>",!0,!1);const A="solid-progress-step";L(A,a.object({steps:a.array(a.object({title:a.string(),description:a.string(),accessibleText:a.string(),status:a.enum(["valid","active","disabled"])})),titleTag:a.string().optional().default("p"),sm:a.boolean().optional().default(!1)}),s=>[(()=>{var e=z();return e.innerHTML=`/* layer: preflights */
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
      `,e})(),(()=>{var e=z();return o(e,$),e})(),(()=>{var e=D();return o(e,y(C,{get each(){return s.steps},children:(r,S)=>(()=>{var i=M(),c=i.firstChild,d=c.firstChild,u=c.nextSibling,p=u.firstChild,T=p.firstChild,b=T.nextSibling;b.nextSibling;var g=p.nextSibling;return o(c,(()=>{var t=w(()=>r.status==="valid");return()=>t()&&(()=>{var n=Q();return n._$owner=x(),n})()})(),d),o(c,(()=>{var t=w(()=>r.status==="active"||r.status==="disabled");return()=>t()&&(()=>{var n=_();return n._$owner=x(),n})()})(),d),o(d,()=>r.accessibleText),o(p,()=>S()+1,b),o(p,()=>s.steps.length,null),o(u,y(j,{class:"step-title",get component(){return s.titleTag},get children(){return r.title}}),g),o(g,()=>r.description),k(t=>{var n=r.status==="active",v=r.status==="valid",h=r.status==="disabled",f=!!(s.sm&&r.status!=="active"),m=!!s.sm;return n!==t.e&&i.classList.toggle("step-active",t.e=n),v!==t.t&&i.classList.toggle("step-valid",t.t=v),h!==t.a&&i.classList.toggle("step-disabled",t.a=h),f!==t.o&&u.classList.toggle("sr-only",t.o=f),m!==t.i&&g.classList.toggle("sr-only",t.i=m),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),i})()})),k(()=>e.classList.toggle("step-group-sm",!!s.sm)),e})()]);export{A as TAG};
