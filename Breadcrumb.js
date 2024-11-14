import { c as v, i, t as o, s as m } from "./utils-DyI0jAV8.js";
import { z as a } from "./theme.store-v2--qJ2X.js";
import { c as k, a as p, e as y, g as w, F as x } from "./R5675YMU-BY7cX9Th.js";
const z = ".breadcrumb-component{font-family:var(--font-family-inter)}.breadcrumb-list{display:flex;flex-wrap:wrap;align-items:center;margin:0;padding:0;list-style:none}.breadcrumb-arrow{color:var(--color-gray-500);font-size:var(--spacing-6)}:host(.dark) .breadcrumb-arrow{color:var(--color-gray-300)}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-link{color:var(--color-gray-500);font-size:var(--font-size-3-5);line-height:var(--line-height-5);text-decoration:underline}.breadcrumb-link:hover,.breadcrumb-link:focus{color:var(--color-blue-700)}.breadcrumb-link:active{color:var(--color-blue-500)}.breadcrumb-link-current{color:var(--color-gray-800);text-decoration:none}:host(.dark) .breadcrumb-link{color:var(--color-gray-300)}:host(.dark) .breadcrumb-link:hover,:host(.dark) .breadcrumb-link:focus{color:var(--color-blue-400)}:host(.dark) .breadcrumb-link:active{color:var(--color-blue-300)}:host(.dark) .breadcrumb-link-current{color:var(--color-white)}.breadcrumb-component-sm .breadcrumb-link{font-size:var(--font-size-3);line-height:var(--line-height-4)}";
var g = /* @__PURE__ */ o("<style>"), _ = /* @__PURE__ */ o('<nav role=navigation class=breadcrumb-component aria-label="Fil d’Ariane"><ol class=breadcrumb-list>'), $ = /* @__PURE__ */ o("<li class=breadcrumb-item><a class=breadcrumb-link>"), L = /* @__PURE__ */ o("<solid-icon class=breadcrumb-arrow icon=mingcute-right-small-line aria-hidden=true>", !0, !1);
const A = "solid-breadcrumb";
v(A, a.object({
  sm: a.boolean().optional(),
  items: a.array(a.object({
    label: a.string(),
    href: a.string()
  }))
}), (u) => [(() => {
  var n = g();
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
  var n = g();
  return i(n, z), n;
})(), (() => {
  var n = _(), h = n.firstChild;
  return i(h, k(x, {
    get each() {
      return u.items;
    },
    children: (c, f) => {
      const s = () => f() === u.items.length - 1;
      return (() => {
        var l = $(), t = l.firstChild;
        return i(t, () => c.label), i(l, (() => {
          var r = y(() => !s());
          return () => r() && (() => {
            var e = L();
            return e._$owner = w(), e;
          })();
        })(), null), p((r) => {
          var e = !!s(), d = c.href, b = s() ? "page" : void 0;
          return e !== r.e && t.classList.toggle("breadcrumb-link-current", r.e = e), d !== r.t && m(t, "href", r.t = d), b !== r.a && m(t, "aria-current", r.a = b), r;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        }), l;
      })();
    }
  })), p(() => n.classList.toggle("breadcrumb-component-sm", !!u.sm)), n;
})()]);
export {
  A as TAG
};
