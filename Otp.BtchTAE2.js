import{f as U,Q as f,y as _,R as E,b as Q,i as F,S as b,o as z,D as P,k as m,w as x,u as $,g as p,a as B,T as G,U as H}from"./hoisted.umGVjoe0.js";import{f as I}from"./useSlots-Ccq-HAZO.0F0gLq16.js";import"./solid.B71tQSd1.js";const J=".otp{margin:0;padding:0;border:0;font-family:var(--font-family-inter)}.otp legend{width:100%;padding:0;color:var(--color-gray-900);font-weight:var(--font-weight-semibold);font-size:var(--font-size-3-5)}.otp-error legend{color:var(--color-red-400)}:host(.dark) .otp legend{color:var(--color-white)}:host(.dark) .otp-error legend{color:var(--color-red-300)}.otp-fields{display:flex;justify-content:space-between;margin-block:var(--spacing-2);gap:var(--spacing-2)}.otp-input{width:var(--spacing-10);height:var(--spacing-10);padding:var(--spacing-2);border:0;border-radius:var(--radius-lg);outline:0;background-color:transparent;box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-blue-500);font-weight:var(--font-weight-semibold);font-size:var(--font-size-9);text-align:center;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}@media (width >= 768px){.otp-input{width:var(--spacing-14);height:var(--spacing-14)}}.otp-error .otp-input{box-shadow:0 0 0 1px inset var(--color-red-400);color:var(--color-red-400)}.otp-error .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-red-100);box-shadow:0 0 0 1px inset var(--color-red-400)}.otp .separator{align-self:center;width:var(--spacing-2);border:2px solid;border-radius:var(--radius-lg)}@media (width >= 768px){.otp .separator{width:var(--spacing-10);border:var(--spacing-1) solid var(--color-gray-300)}}:host(.dark) .otp .otp-input{color:var(--color-blue-400)}:host(.dark) .otp .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-500)}:host(.dark) .otp-error .otp-input{box-shadow:0 0 0 1px inset var(--color-red-300);color:var(--color-red-300)}:host(.dark) .otp-error .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-red-700);box-shadow:0 0 0 1px inset var(--color-red-300)}:host(.dark) .otp .separator{border-color:var(--color-gray-500)}.otp .text-hint,.otp .text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.otp .text-hint{color:var(--color-gray-500)}.otp .text-error{color:var(--color-red-700)}:host(.dark) .otp .text-hint{color:var(--color-gray-100)}:host(.dark) .otp-error .text-error{color:var(--color-red-300)}";var R=p("<style>"),K=p("<fieldset class=otp><legend><slot name=legend></slot></legend><div class=otp-fields>"),M=p("<input type=text class=otp-input maxlength=1 min=0 max=9>"),N=p("<div class=separator>"),O=p("<p class=text-hint><slot name=hint>"),W=p("<p class=text-error><slot name=error>");const q="solid-otp";U(q,f.object({name:f.string(),sm:f.boolean().optional().default(!1),error:f.boolean().optional().default(!1)}),(S,{emit:C})=>{const T=E().attachInternals(),g=H(),L=6,d=Array.from({length:L}).map(()=>{const[r,v]=Q(""),[c,y]=Q();return{value:r,setValue:a=>{v(a),c()&&(c().value=r())},ref:c,setRef:y}}),w=()=>d.map(r=>r.value()).join("");F(()=>{T.setFormValue(w()),C("change",w())});const D=I(E()),j=()=>D.has("hint"),h=()=>D.has("error"),A=/^\d$/;return[(()=>{var r=R();return r.innerHTML=`/* layer: preflights */
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
      `,r})(),(()=>{var r=R();return b(r,J),r})(),(()=>{var r=K(),v=r.firstChild,c=v.firstChild,y=v.nextSibling;return c._$owner=z(),b(y,P(G,{each:d,children:({value:a,setValue:o,setRef:e},i)=>[(()=>{var s=M();return s.$$keyup=t=>{var l,u;t.key==="Backspace"&&(o(""),(u=(l=d[i()-1])==null?void 0:l.ref())==null||u.focus())},s.addEventListener("paste",t=>{var l;t.preventDefault();const u=(l=t.clipboardData)==null?void 0:l.getData("text/plain"),n=u?.split("");n&&n.length>d.length||n!=null&&n.every(k=>A.test(k))&&d.forEach((k,V)=>{k.setValue(n?.[V]||"")})}),s.$$input=t=>{var l,u;t.stopPropagation();const n=t.target;if(!A.test(n.value)){o(a()||"");return}o(n.value),n.value.length===1&&((u=(l=d[i()+1])==null?void 0:l.ref())==null||u.focus()),i()===d.length-1&&C("last-input",w())},s.addEventListener("change",t=>t.stopPropagation()),B(t=>e(t),s),$(()=>x(s,"aria-label",`Chiffre ${i()+1}`)),$(()=>s.value=a()),s})(),m(()=>m(()=>i()===L/2-1)()&&N())]})),b(r,(()=>{var a=m(()=>!!(j()&&!h()));return()=>a()&&(()=>{var o=O(),e=o.firstChild;return x(o,"id",`hint-message-${g}`),e._$owner=z(),o})()})(),null),b(r,(()=>{var a=m(()=>!!h());return()=>a()&&(()=>{var o=W(),e=o.firstChild;return x(o,"id",`error-message-${g}`),e._$owner=z(),o})()})(),null),$(a=>{var o=!!S.sm,e=!!h(),i=h()?`error-message-${g}`:j()?`hint-message-${g}`:void 0;return o!==a.e&&r.classList.toggle("otp-sm",a.e=o),e!==a.t&&r.classList.toggle("otp-error",a.t=e),i!==a.a&&x(r,"aria-describedby",a.a=i),a},{e:void 0,t:void 0,a:void 0}),r})()]},{formAssociated:!0});_(["input","keyup"]);export{q as TAG};
