import{f as L,Q as o,m as S,R as w,i as T,S as s,D as y,g as l,k as u,o as d,u as k,l as I,w as g,U as R,a as j}from"./hoisted.umGVjoe0.js";import{f as A}from"./useSlots-Ccq-HAZO.0F0gLq16.js";import{d as D}from"./index-D2ZAnnK5.Ddz27_ns.js";import"./solid.B71tQSd1.js";const F=".text-input-component{font-family:var(--font-family-inter)}.text-input-component:has(:focus,:active):not(:has(:disabled)) label{color:var(--color-blue-700)}.text-input-component:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-400)}:host(.dark) .text-input-component:has(:focus,:active):not(:has(:disabled)) label{color:var(--color-blue-400)}:host(.dark) .text-input-component:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-500)}:host(.dark) .text-input-component{color:var(--color-white)}:host(.dark) .text-input-component:has(:disabled){color:var(--color-gray-500)}.text-input-component-error:not(:has(:disabled)) :where(label,.text-input),.text-input-component-error:not(:has(:disabled)):has(:focus,:active) label,.text-input-component-error:not(:has(:disabled)) :where(.icon-left,.icon-right){color:var(--color-red-400)}.text-input-component-error:not(:has(:disabled)):has(:focus,:active) .text-input{outline:var(--spacing-1) solid var(--color-red-100);box-shadow:0 0 0 1px inset var(--color-red-400)}:host(.dark) .text-input-component-error:not(:has(:disabled)) :where(label,.text-input),:host(.dark) .text-input-component-error:not(:has(:disabled)):has(:focus,:active) label,:host(.dark) .text-input-component-error:not(:has(:disabled)) :where(.icon-left,.icon-right){color:var(--color-red-300)}:host(.dark) .text-input-component-error:not(:has(:disabled)) .text-input{box-shadow:0 0 0 1px inset var(--color-red-300)}:host(.dark) .text-input-component-error:not(:has(:disabled)):has(:focus,:active) .text-input{outline:var(--spacing-1) solid var(--color-red-700);color:var(--color-red-300)}.text-input-container:where(.has-icon-left,.has-icon-right){position:relative;font-size:var(--spacing-5)}.text-input-container:where(.has-icon-left,.has-icon-right) :where(.icon-left,.icon-right){position:absolute;top:var(--spacing-3)}.text-input-container:where(.has-icon-left,.has-icon-right) .icon-left{left:var(--spacing-3)}.text-input-container:where(.has-icon-left,.has-icon-right) .icon-right{right:var(--spacing-3)}.text-input-label{display:block;margin-bottom:var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);transition:var(--anim-duration) var(--anim-timing);transition-property:color}.text-hint,.text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-input-label{color:var(--color-white)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) .text-error{color:var(--color-red-300)}.text-input{--anim-duration: .3s;--anim-timing: ease-in-out;width:100%;max-width:100%;padding:var(--spacing-3);border:0;border-radius:var(--radius-lg);outline:0;background-color:var(--color-white);box-shadow:0 0 0 1px inset var(--color-gray-500);color:inherit;font-size:var(--font-size-4);line-height:inherit;font-family:inherit;letter-spacing:inherit;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.has-icon-left>.text-input{padding-left:var(--spacing-10)}.has-icon-right>.text-input{padding-right:var(--spacing-10)}.text-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}.text-input:disabled{outline:0;background-color:var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400)}.text-input.is-textarea{padding-inline:var(--spacing-3);resize:none}:host(.dark) .text-input{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-white)}:host(.dark) .text-input:where(:hover){box-shadow:0 0 0 1px inset var(--color-gray-500)}:host(.dark) .text-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .text-input:disabled{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-gray-500)}";var z=l("<style>"),G=l("<div class=text-input-component><div class=text-input-container>"),H=l("<label class=text-input-label><slot name=label>"),P=l("<span class=icon-left><slot name=icon-left>"),Q=l("<span class=icon-right><slot name=icon-right>"),U=l("<p class=text-error><slot name=error>"),V=l("<p class=text-hint><slot name=hint>");const q=S({error:()=>!1}),M="solid-text-input";L(M,o.object({value:o.union([o.string(),o.number()]).transform(n=>String(n)).default(""),disabled:o.boolean().optional(),placeholder:o.string().optional(),id:o.string(),error:o.boolean().optional().default(!1),type:o.enum(["email","text","password","number","tel","url","textarea"]),name:o.string()}),n=>{const $=w().attachInternals();let x;const[b,C]=D(()=>n.value||""),i=A(w()),p=R(),h=()=>n.error&&i.has("error"),m=()=>!n.error&&i.has("hint");T(()=>{$.setFormValue(b())});const _=()=>n.type==="textarea"?"textarea":"input";return[(()=>{var a=z();return a.innerHTML=`/* layer: preflights */
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
      `,a})(),(()=>{var a=z();return s(a,F),a})(),y(q.Provider,{value:{error:()=>n.error},get children(){var a=G(),c=a.firstChild,v=x;return typeof v=="function"?j(v,a):x=a,s(a,(()=>{var r=u(()=>!!(n.id&&i.has("label")));return()=>r()&&(()=>{var t=H(),e=t.firstChild;return e._$owner=d(),k(()=>g(t,"for",n.id)),t})()})(),c),s(c,(()=>{var r=u(()=>!!(i.has("icon-left")&&n.type!=="textarea"));return()=>r()&&(()=>{var t=P(),e=t.firstChild;return e._$owner=d(),t})()})(),null),s(c,y(I,{get component(){return _()},get type(){return n.type==="textarea"?void 0:n.type},get id(){return n.id},class:"text-input",get classList(){return{"is-textarea":n.type==="textarea"}},get value(){return b()},get name(){return n.name},onInput:r=>C(r.currentTarget.value),get disabled(){return n.disabled},get placeholder(){return n.placeholder},get"aria-describedby"(){return u(()=>!!m())()?`hint-message-${p}`:h()?`error-message-${p}`:void 0},get"aria-invalid"(){return h()}}),null),s(c,(()=>{var r=u(()=>!!(i.has("icon-right")&&n.type!=="textarea"));return()=>r()&&(()=>{var t=Q(),e=t.firstChild;return e._$owner=d(),t})()})(),null),s(a,(()=>{var r=u(()=>!!h());return()=>r()&&(()=>{var t=U(),e=t.firstChild;return g(t,"id",`error-message-${p}`),e._$owner=d(),t})()})(),null),s(a,(()=>{var r=u(()=>!!m());return()=>r()&&(()=>{var t=V(),e=t.firstChild;return g(t,"id",`hint-message-${p}`),e._$owner=d(),t})()})(),null),k(r=>{var t=!!h(),e=!!i.has("icon-left"),f=!!i.has("icon-right");return t!==r.e&&a.classList.toggle("text-input-component-error",r.e=t),e!==r.t&&c.classList.toggle("has-icon-left",r.t=e),f!==r.a&&c.classList.toggle("has-icon-right",r.a=f),r},{e:void 0,t:void 0,a:void 0}),a}})]},{formAssociated:!0});export{M as TAG,q as TextInputContext};
