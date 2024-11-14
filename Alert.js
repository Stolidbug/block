import { c as $, i as _, t as v, s as L } from "./utils-DyI0jAV8.js";
import { z as e } from "./theme.store-v2--qJ2X.js";
import { $ as h } from "./index-4ydbDoOj.js";
import { g as t, a as C } from "./R5675YMU-BY7cX9Th.js";
const T = '.alert{display:flex;align-items:flex-start;width:100%;max-width:max-content;padding:var(--spacing-3);gap:var(--spacing-4);border-width:1px;border-left-width:var(--spacing-1);border-style:solid;border-radius:var(--radius-lg);background-color:var(--color-white);font-family:var(--font-family-inter)}.alert-fluid{max-width:100%}.alert-icon{flex-shrink:0}.alert-title{flex-shrink:0;margin:0;font-weight:var(--font-weight-semibold);font-size:var(--font-size-3-5);line-height:var(--line-height-5)}.alert-content{width:100%;margin:0;margin-top:var(--spacing-2);font-size:var(--font-size-3-5);line-height:var(--line-height-5)}.alert-icon{padding:var(--spacing-1);border-radius:var(--radius-full);font-size:var(--spacing-6)}.alert-success{border-color:var(--color-green-400)}.alert-success .alert-icon{background-color:var(--color-green-100);color:var(--color-green-700)}.alert-error{border-color:var(--color-red-400)}.alert-error .alert-icon{background-color:var(--color-red-100);color:var(--color-red-700)}.alert-info{border-color:var(--color-blue-500)}.alert-info .alert-icon{background-color:var(--color-blue-100);color:var(--color-blue-700)}:host(.dark) .alert{background-color:var(--color-gray-800);color:var(--color-white)}:host(.dark) .alert .alert-success .alert-icon{background-color:var(--color-green-700);color:var(--color-green-100)}:host(.dark) .alert .alert-error{border-color:var(--color-red-300)}:host(.dark) .alert .alert-error .alert-icon{background-color:var(--color-red-700);color:var(--color-red-100)}:host(.dark) .alert .alert-info{border-color:var(--color-blue-500)}:host(.dark) .alert .alert-info .alert-icon{background-color:var(--color-blue-700);color:var(--color-blue-100)}.alert.alert-sm{align-items:center}.alert.alert-sm .alert-title{display:inline}.alert.alert-sm .alert-title:after{content:" :"}.alert.alert-sm .alert-content{display:inline;margin-top:0}';
var b = /* @__PURE__ */ v("<style>"), S = /* @__PURE__ */ v("<div class=alert><div class=alert-icon><solid-icon></solid-icon></div><div class=alert-content-container><p class=alert-title><slot name=title></slot></p><p class=alert-content><slot>", !0, !1);
const A = "solid-alert";
$(A, e.object({
  sm: e.boolean().optional().default(!1),
  variant: e.enum(["info", "error", "success"]).optional().default("info"),
  fluid: e.boolean().optional().default(!1)
}), (a) => {
  const m = () => h(a.variant).returnType().with("info", () => "mingcute-information-line").with("success", () => "mingcute-check-circle-line").with("error", () => "mingcute-safe-alert-line").exhaustive(), w = () => h(a.variant).returnType().with("info", () => "status").with("success", () => "status").with("error", () => "alert").exhaustive();
  return [(() => {
    var n = b();
    return n.innerHTML = `/* layer: preflights */
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
      `, n;
  })(), (() => {
    var n = b();
    return _(n, T), n;
  })(), (() => {
    var n = S(), o = n.firstChild, i = o.firstChild, x = o.nextSibling, l = x.firstChild, k = l.firstChild, y = l.nextSibling, z = y.firstChild;
    return i._$owner = t(), k._$owner = t(), z._$owner = t(), C((r) => {
      var s = !!a.sm, c = !!a.fluid, u = a.variant === "info", d = a.variant === "success", g = a.variant === "error", f = w(), p = m();
      return s !== r.e && n.classList.toggle("alert-sm", r.e = s), c !== r.t && n.classList.toggle("alert-fluid", r.t = c), u !== r.a && n.classList.toggle("alert-info", r.a = u), d !== r.o && n.classList.toggle("alert-success", r.o = d), g !== r.i && n.classList.toggle("alert-error", r.i = g), f !== r.n && L(n, "role", r.n = f), p !== r.s && (i.icon = r.s = p), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0
    }), n;
  })()];
});
export {
  A as TAG
};
