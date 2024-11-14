import{c as g,f as b,Q as h,b as f,i as m,D as w,g as s,o as y,O as v,R as x}from"./hoisted.umGVjoe0.js";import{k}from"./checkbox.store-Bf4Y6MLs.B1wNZxGN.js";const z=`solid-table {
  & table {
    width: 100%;
    max-width: 100%;
    color: var(--color-gray-900);
    font-family: var(--font-family-inter);
  }

  & .table-responsive {
    width: 100%;
    overflow-x: auto;
  }

  & tr {
    border-bottom: 1px solid var(--color-gray-300);
  }

  & table,
  & th,
  & td {
    border: 0;
    border-collapse: collapse;
  }

  & th,
  & td {
    padding-inline: var(--spacing-6);
    padding-block: var(--spacing-3);
    text-align: left;
  }

  & th {
    background-color: var(--color-gray-50);
    color: var(--color-gray-800);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-3-5);
    line-height: var(--line-height-5);
  }

  & td {
    background-color: var(--color-white);
    color: var(--color-gray-800);
  }

  & :where(th, td)[data-checkbox-container]:first-child {
    /* taille d'une checkbox */
    width: var(--spacing-6);
    padding-right: 0;
  }
}

/* Le dark mode */
.dark solid-table {
  & tr {
    border-bottom: 1px solid var(--color-gray-500);
  }
  & th {
    background-color: var(--color-gray-700);
    color: var(--color-white);
  }
  & td {
    background-color: var(--color-gray-800);
    color: var(--color-white);
  }
}
`;var A=s("<style>"),S=s("<slot>");g.setOrUpdateStyles("table-styles",z);const C="selected-rows-change";b("solid-table",h.object({}),(O,{emit:d})=>{const l=x(),[o,a]=f([]),c=()=>Array.from(l.querySelectorAll("tr[data-row-id]")).map(r=>({el:r,id:r.getAttribute("data-row-id")}));return m(v(o,()=>{d(C,{selectedRows:o()})},{defer:!0})),[(()=>{var r=A();return r.innerHTML=`/* layer: preflights */
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
      `,r})(),w(k,{onChange:({element:r,isChecked:t,isController:i})=>{if(i()&&t()){a(c().map(n=>n.id));return}if(i()&&!t()){a([]);return}const u=r.closest("tr[data-row-id]"),e=u?.getAttribute("data-row-id");if(t()&&e){a(n=>[...n,e]);return}if(!t()&&e){a(n=>n.filter(p=>p!==e));return}},get children(){var r=S();return r._$owner=y(),r}})]});
