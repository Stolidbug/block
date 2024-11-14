import { c as w, d as x, i as s, t as l, s as f, D as k } from "./utils-DyI0jAV8.js";
import { z as i } from "./theme.store-v2--qJ2X.js";
import { c as b, a as p, g as d, S as m, b as $, d as _ } from "./R5675YMU-BY7cX9Th.js";
import { c as z } from "./index-CidExI9F.js";
const C = ".accordion-title-button{display:inline-flex;align-items:center;justify-content:space-between;width:100%;padding:var(--spacing-6);gap:var(--spacing-6);border:0;background-color:var(--color-white);box-shadow:0 -1px 0 0 inset var(--color-gray-400);font-size:var(--font-size-5);font-family:var(--font-family-inter);text-align:left}.accordion-title-button:hover,.accordion-title-button:focus{background-color:var(--color-gray-50)}.accordion-title-button[aria-expanded=true]{background-color:var(--color-gray-100)}.accordion-title-button[aria-expanded=true]>.accordion-badge{background-color:var(--color-gray-200)}.accordion-title-button:disabled{background-color:var(--color-gray-100);color:var(--color-gray-400)}:host(.dark) .accordion-title-button{background-color:var(--color-gray-900);box-shadow:0 -1px 0 0 inset var(--color-gray-500);color:var(--color-white)}:host(.dark) .accordion-title-button:hover,:host(.dark) .accordion-title-button:focus{background-color:var(--color-gray-800)}:host(.dark) .accordion-title-button[aria-expanded=true]{background-color:var(--color-gray-700)}:host(.dark) .accordion-title-button:disabled{background-color:var(--color-gray-800);color:var(--color-gray-500)}.accordion-title{margin:0}.accordion-badge{display:inline-flex;flex-shrink:0;align-items:center;padding:var(--spacing-2);gap:var(--spacing-1);border:0;border-radius:var(--radius-full);background-color:var(--color-gray-100);color:var(--color-gray-900);font-weight:var(--font-weight-semibold);font-size:var(--font-size-3);line-height:var(--line-height-4);font-family:Inter,system-ui,sans-serif;white-space:nowrap}.accordion-content{padding:var(--spacing-6);color:var(--color-gray-700);font-weight:var(--font-weight-normal);font-size:var(--font-size-4-5);line-height:var(--line-height-normal);font-family:var(--font-family-inter)}.accordion-content ::slotted(:where(p)){margin:0}:host(.dark) .accordion-content{color:var(--color-white)}.accordion-sm{width:100%}.accordion-sm .accordion-title-button,.accordion-sm .accordion-content{padding:var(--spacing-4)}";
var O = /* @__PURE__ */ l("<slot>"), v = /* @__PURE__ */ l("<style>"), T = /* @__PURE__ */ l("<span class=accordion-badge><span></span><solid-icon icon=mingcute-up-line aria-hidden=true class=badge-arrow>", !0, !1), I = /* @__PURE__ */ l("<button class=accordion-title-button><slot name=label>"), L = /* @__PURE__ */ l("<div class=accordion-content><slot name=content>"), S = /* @__PURE__ */ l("<div class=accordion-container>"), j = /* @__PURE__ */ l("<span class=accordion-badge><span></span><solid-icon icon=mingcute-down-line aria-hidden=true class=badge-arrow>", !0, !1);
const [B, D] = z(() => {
  const [t, n] = $();
  return {
    openId: t,
    setOpenId: n
  };
});
w("solid-accordion-group", i.object({}), (t) => b(B, {
  get children() {
    var n = O();
    return n._$owner = d(), n;
  }
}));
w("solid-accordion-item", i.object({
  sm: i.boolean().optional().default(!1),
  disabled: i.boolean().optional().default(!1),
  defaultOpen: i.boolean().optional().default(!1),
  titleLevel: i.number().min(1).max(6).optional().default(3),
  hideBtnText: i.boolean().optional().default(!1),
  btnOpenText: i.string().optional().default("Déployer"),
  btnCloseText: i.string().optional().default("Réduire")
}), (t) => {
  const n = D(), u = _(), g = () => (n == null ? void 0 : n.openId()) === u;
  function y() {
    var r, a;
    if (g()) {
      (r = n == null ? void 0 : n.setOpenId) == null || r.call(n, void 0);
      return;
    }
    (a = n == null ? void 0 : n.setOpenId) == null || a.call(n, u);
  }
  return [(() => {
    var r = v();
    return r.innerHTML = `/* layer: preflights */
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
      `, r;
  })(), (() => {
    var r = v();
    return s(r, C), r;
  })(), (() => {
    var r = S();
    return s(r, b(k, {
      get component() {
        return `h${t.titleLevel}`;
      },
      class: "accordion-title",
      get children() {
        var a = I(), h = a.firstChild;
        return a.$$click = () => y(), f(a, "aria-controls", u), h._$owner = d(), s(a, b(m, {
          get when() {
            return g();
          },
          get fallback() {
            return (() => {
              var e = j(), o = e.firstChild, c = o.nextSibling;
              return s(o, () => t.btnOpenText), c._$owner = d(), p(() => o.classList.toggle("visually-hidden", !!t.hideBtnText)), e;
            })();
          },
          get children() {
            var e = T(), o = e.firstChild, c = o.nextSibling;
            return s(o, () => t.btnCloseText), c._$owner = d(), p(() => o.classList.toggle("visually-hidden", !!t.hideBtnText)), e;
          }
        }), null), p((e) => {
          var o = g(), c = t.disabled;
          return o !== e.e && f(a, "aria-expanded", e.e = o), c !== e.t && (a.disabled = e.t = c), e;
        }, {
          e: void 0,
          t: void 0
        }), a;
      }
    }), null), s(r, b(m, {
      get when() {
        return g();
      },
      get children() {
        var a = L(), h = a.firstChild;
        return f(a, "id", u), h._$owner = d(), a;
      }
    }), null), p(() => r.classList.toggle("accordion-sm", !!t.sm)), r;
  })()];
});
x(["click"]);
