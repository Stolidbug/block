import{f as w,Q as v,S as y,o as m,u as k,g as h}from"./hoisted.umGVjoe0.js";const x=".badge{display:inline-flex;align-items:center;padding:var(--spacing-2);gap:var(--spacing-1);border:0;border-radius:var(--radius-full);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);font-size:var(--font-size-3);line-height:var(--line-height-4);font-family:var(--font-family-inter);text-decoration:none;white-space:nowrap}.badge-default{background-color:var(--color-gray-100);color:var(--color-gray-900)}:host(.dark) .badge-default{background-color:var(--color-gray-800);color:var(--color-white)}.badge-lightblue{background-color:var(--color-blue-200);color:var(--color-gray-900)}.badge-blue{background-color:var(--color-blue-500);color:var(--color-white)}.badge-darkblue{background-color:var(--color-blue-700);color:var(--color-white)}.badge-teal{background-color:var(--color-teal-300);color:var(--color-gray-900)}.badge-green{background-color:var(--color-green-700);color:var(--color-white)}.badge-red{background-color:var(--color-red-300);color:var(--color-gray-900)}.badge-lightred{background-color:var(--color-red-100);color:var(--color-gray-900)}.badge-lavender{background-color:var(--color-violet-100);color:var(--color-gray-900)}.badge-purple{background-color:var(--color-violet-900);color:var(--color-white)}.badge-lightyellow{background-color:var(--color-yellow-100);color:var(--color-gray-900)}.badge-yellow{background-color:var(--color-yellow-300);color:var(--color-gray-900)}";var z=h(`<style>/* layer: preflights */
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

          &amp;.container-max-fluid {
            max-width: calc(var(--spacing-max) + var(--padding-inline) * 2);
          }
        }
      `),L=h("<div class=badge><slot>");const C="solid-badge";w(C,v.object({variant:v.enum(["default","lightblue","blue","darkblue","teal","green","red","lightred","lavender","purple","lightyellow","yellow"]).optional().default("default")}),o=>[(()=>{var a=z();return a.firstChild,y(a,x,null),a})(),(()=>{var a=L(),f=a.firstChild;return f._$owner=m(),k(r=>{var e=o.variant==="default",n=o.variant==="lightblue",i=o.variant==="blue",t=o.variant==="darkblue",l=o.variant==="teal",u=o.variant==="green",d=o.variant==="red",s=o.variant==="lightred",c=o.variant==="lavender",g=o.variant==="purple",b=o.variant==="lightyellow",p=o.variant==="yellow";return e!==r.e&&a.classList.toggle("badge-default",r.e=e),n!==r.t&&a.classList.toggle("badge-lightblue",r.t=n),i!==r.a&&a.classList.toggle("badge-blue",r.a=i),t!==r.o&&a.classList.toggle("badge-darkblue",r.o=t),l!==r.i&&a.classList.toggle("badge-teal",r.i=l),u!==r.n&&a.classList.toggle("badge-green",r.n=u),d!==r.s&&a.classList.toggle("badge-red",r.s=d),s!==r.h&&a.classList.toggle("badge-lightred",r.h=s),c!==r.r&&a.classList.toggle("badge-lavender",r.r=c),g!==r.d&&a.classList.toggle("badge-purple",r.d=g),b!==r.l&&a.classList.toggle("badge-lightyellow",r.l=b),p!==r.u&&a.classList.toggle("badge-yellow",r.u=p),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),a})()]);
