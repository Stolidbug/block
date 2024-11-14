import { c as v, i as w, s as d, t as b } from "./utils-DyI0jAV8.js";
import { z as p } from "./theme.store-v2--qJ2X.js";
import { g as h, a as x, d as y } from "./R5675YMU-BY7cX9Th.js";
const k = ".search-component{font-family:var(--font-family-inter)}.search-container{display:grid;grid-template-columns:1fr var(--spacing-10) auto}.search-container .search-input{grid-row:1;grid-column:1 / 3}.search-container .search-btn{grid-row:1;grid-column:2 / 4}.search-input{--anim-duration: .3s;--anim-timing: ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;max-width:100%;padding-inline:var(--spacing-3) var(--spacing-10);padding-block:var(--spacing-3);border:0;border-radius:var(--radius-full);outline:0;background-color:transparent;box-shadow:0 0 0 1px inset var(--color-gray-500);color:inherit;font-size:var(--font-size-4);line-height:inherit;font-family:inherit;letter-spacing:inherit;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.search-input::placeholder{font-style:italic}.search-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}.search-input:disabled{outline:0;background-color:var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400)}.search-input.sm{padding:var(--spacing-2)}:host(.dark) .search-input{background-color:var(--color-gray-900);box-shadow:0 0 0 1px inset var(--color-gray-300);color:var(--color-white)}:host(.dark) .search-input::placeholder{color:var(--color-white)}:host(.dark) .search-input:where(:hover){box-shadow:0 0 0 1px inset var(--color-gray-400)}:host(.dark) .search-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .search-input:disabled{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-gray-500)}";
var g = /* @__PURE__ */ b("<style>"), z = /* @__PURE__ */ b('<form class=search-component role=search><div class=search-container><label class="search-label visually-hidden">Recherche</label><input class=search-input placeholder=Rechercher type=search name=search-input><solid-button class=search-btn variant=primary><solid-icon class=search-icon icon=mingcute-search-line iconsize=var(--spacing-6)></solid-icon><span class=search-btn-content>Rechercher', !0, !1);
const $ = "solid-search";
v($, p.object({
  sm: p.boolean().optional().default(!1)
}), (r) => {
  const o = y();
  return [(() => {
    var n = g();
    return n.innerHTML = `/* layer: preflights */
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
      `, n;
  })(), (() => {
    var n = g();
    return w(n, k), n;
  })(), (() => {
    var n = z(), m = n.firstChild, t = m.firstChild, e = t.nextSibling, i = e.nextSibling, s = i.firstChild, f = s.nextSibling;
    return d(t, "for", `search-input-${o}`), d(e, "id", `search-input-${o}`), i._$owner = h(), s._$owner = h(), x((a) => {
      var c = !!r.sm, u = r.sm, l = !!r.sm;
      return c !== a.e && e.classList.toggle("sm", a.e = c), u !== a.t && (i.sm = a.t = u), l !== a.a && f.classList.toggle("sr-only", a.a = l), a;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), n;
  })()];
});
export {
  $ as TAG
};
