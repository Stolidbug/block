import { c as k, i as o, t as a, g as $ } from "./utils-DyI0jAV8.js";
import { z as h } from "./theme.store-v2--qJ2X.js";
import { u as _ } from "./useSlots-DRPN5bzQ.js";
import { e as l, g as t, a as z } from "./R5675YMU-BY7cX9Th.js";
const C = ".card{--card-green-border-color: var(--color-teal-500);--card-purple-border-color: var(--color-violet-700);--card-lightpurple-border-color: var(--color-violet-300);--card-yellow-border-color: var(--color-yellow-300);--card-blue-border-color: var(--color-blue-500);--card-darkblue-border-color: var(--color-blue-700);--card-skyblue-border-color: var(--color-blue-200);--card-red-border-color: var(--color-red-500);--card-lightred-border-color: var(--color-red-300);display:flex;flex-direction:column;max-height:var(--spacing-133);border:1px solid var(--color-gray-300);border-bottom:var(--spacing-2) solid var(--card-border-color);border-radius:var(--radius-lg);background-color:var(--color-white);font-size:var(--font-size-3-5);line-height:var(--line-height-5);font-family:var(--font-family-inter)}:host(.dark) .card{border:1px solid var(--color-gray-600);border-bottom:var(--spacing-2) solid var(--card-border-color);background-color:var(--color-gray-900);color:var(--color-white)}.card-header{padding:var(--spacing-4);border-bottom:1px solid var(--color-gray-300)}:host(.dark) .card-header{border-color:var(--color-gray-400)}.card-header ::slotted(:where(h1,h2,h3,h4,h5,h6,p,span)){margin:0}.card-header-title{display:flex;align-items:center;gap:var(--spacing-1)}.card-header-icon{flex-shrink:0;font-size:var(--spacing-8)}.card-header-title ::slotted(:where(h1,h2,h3,h4,h5,h6,p,span)){margin:0;font-weight:var(--font-weight-bold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5)}.card-body{padding:var(--spacing-4);overflow-y:auto}.card-body ::slotted(:where(h1,h2,h3,h4,h5,h6,p,span)){margin:0}.card-footer{padding-inline:var(--spacing-4);padding-top:var(--spacing-2);padding-bottom:var(--spacing-4)}.header-description{margin-top:var(--spacing-1)}";
var g = /* @__PURE__ */ a("<style>"), E = /* @__PURE__ */ a("<div class=card><div class=card-body><slot></slot></div><div class=card-footer><slot name=footer>"), S = /* @__PURE__ */ a("<div class=card-header>"), M = /* @__PURE__ */ a("<div class=card-header-title><slot name=header-title>"), P = /* @__PURE__ */ a("<div class=card-header-icon><slot name=header-icon>"), T = /* @__PURE__ */ a("<div class=header-description><slot name=header-description>");
const j = "solid-card";
k(j, h.object({
  variant: h.enum(["green", "purple", "lightpurple", "yellow", "blue", "darkblue", "skyblue", "red", "lightred"])
}), (b) => {
  const m = $(), e = _(m);
  return [(() => {
    var r = g();
    return r.innerHTML = `/* layer: preflights */
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
      `, r;
  })(), (() => {
    var r = g();
    return o(r, C), r;
  })(), (() => {
    var r = E(), s = r.firstChild, v = s.firstChild, f = s.nextSibling, y = f.firstChild;
    return o(r, (() => {
      var i = l(() => !!(e.has("header-icon") || e.has("header-title")));
      return () => i() && (() => {
        var c = S();
        return o(c, (() => {
          var u = l(() => !!e.has("header-title"));
          return () => u() && (() => {
            var n = M(), d = n.firstChild;
            return o(n, (() => {
              var w = l(() => !!e.has("header-icon"));
              return () => w() && (() => {
                var p = P(), x = p.firstChild;
                return x._$owner = t(), p;
              })();
            })(), d), d._$owner = t(), n;
          })();
        })(), null), o(c, (() => {
          var u = l(() => !!e.has("header-description"));
          return () => u() && (() => {
            var n = T(), d = n.firstChild;
            return d._$owner = t(), n;
          })();
        })(), null), c;
      })();
    })(), s), v._$owner = t(), y._$owner = t(), z((i) => (i = `var(--card-${b.variant}-border-color)`) != null ? r.style.setProperty("--card-border-color", i) : r.style.removeProperty("--card-border-color")), r;
  })()];
});
export {
  j as TAG
};
