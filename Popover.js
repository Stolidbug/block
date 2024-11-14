import { b as C, c as O, n as P, t as g, u as d, i as f, g as E } from "./utils-DyI0jAV8.js";
import { z as c } from "./theme.store-v2--qJ2X.js";
import { c as T } from "./createChildrenObserver-DrEtg4wT.js";
import { a as N, e as l, b as I, c as a, g as b, d as M } from "./R5675YMU-BY7cX9Th.js";
import { P as R, a as j, b as A, c as H, d as L, e as U } from "./popover-trigger-B_A19BSZ.js";
const Y = "solid-popover .popover-inner{display:flex;flex-direction:column;width:100vw;max-width:31.25rem;max-height:31.25rem;padding:var(--spacing-3);overflow:hidden;border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 8px 8px -4px #10182808,0 20px 24px -8px #10182814;font-family:var(--font-family-inter)}solid-popover [data-part=trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent;font-weight:var(--font-weight-normal);pointer-events:none}solid-popover [data-part=trigger] *{pointer-events:initial}solid-popover [data-part=close-trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent}solid-popover .popover-header{display:flex;align-items:center;justify-content:flex-end;padding-bottom:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}solid-popover .popover-subheader{display:flex;align-items:center;justify-content:space-between;padding-top:var(--spacing-3)}solid-popover [data-part=title]{font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5)}solid-popover [data-part=title] *{margin:0;font-weight:inherit;font-size:inherit;line-height:inherit}solid-popover .popover-content:not(:empty){margin-top:var(--spacing-3);overflow-y:auto}.dark solid-popover .popover-header{border-color:var(--color-gray-600)}.dark solid-popover .popover-inner{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}";
function u(r, i) {
  N(() => {
    const p = i();
    r.innerHTML = "", p && [p].flat().forEach((t) => {
      t && r.appendChild(t);
    });
  });
}
var q = /* @__PURE__ */ g("<style>"), v = /* @__PURE__ */ g("<span>"), D = /* @__PURE__ */ g("<solid-button as=span variant=ghost><solid-icon icon=mingcute-close-line>", !0, !1), G = /* @__PURE__ */ g("<div class=popover-inner><div class=popover-header></div><div class=popover-subheader><div></div></div><div class=popover-content>");
C.setOrUpdateStyles("popover-styles", Y);
const B = "solid-popover", F = c.object({
  offsetY: c.number().optional(),
  arialabel: c.string().optional(),
  placement: c.string().transform((r) => r).optional()
});
O(B, F, (r) => {
  P();
  const i = E(), p = T(i), t = l(() => p().filter((n) => n.matches("template"))), w = l(() => {
    var n;
    return (n = t().find((e) => e.matches('[slot="content"]'))) == null ? void 0 : n.content.cloneNode(!0);
  }), x = l(() => {
    var n;
    return (n = t().find((e) => e.matches('[slot="subheader"]'))) == null ? void 0 : n.content.cloneNode(!0);
  }), y = l(() => {
    var n;
    return (n = t().find((e) => e.matches('[slot="title"]'))) == null ? void 0 : n.content.cloneNode(!0);
  }), k = l(() => {
    var e;
    const n = (e = t().find((s) => s.matches('[slot="trigger"]'))) == null ? void 0 : e.content.cloneNode(!0);
    return (n == null ? void 0 : n.firstElementChild) ?? void 0;
  }), [z, h] = I(!1), _ = M();
  return [(() => {
    var n = q();
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
  })(), a(U, {
    id: _,
    get open() {
      return z();
    },
    getRootNode: () => i.shadowRoot,
    onInteractOutside: (n) => {
      n.detail.originalEvent.composedPath().includes(i) || h(!1);
    },
    closeOnInteractOutside: !1,
    onOpenChange: (n) => {
      h(n.open);
    },
    get positioning() {
      return {
        offset: {
          mainAxis: r.offsetY
        },
        placement: r.placement
      };
    },
    get children() {
      return [a(R, {
        get "aria-label"() {
          return r.arialabel;
        },
        get children() {
          var n = v();
          return d(u, n, () => k()), n;
        }
      }), a(j, {
        get children() {
          return a(A, {
            get children() {
              var n = G(), e = n.firstChild, s = e.nextSibling, m = s.firstChild, $ = s.nextSibling;
              return f(e, a(H, {
                "aria-label": "fermer",
                get children() {
                  var o = D(), S = o.firstChild;
                  return o.icononly = !0, o._$owner = b(), S._$owner = b(), o;
                }
              })), f(s, a(L, {
                get children() {
                  var o = v();
                  return d(u, o, () => y()), o;
                }
              }), m), d(u, m, () => x()), d(u, $, () => w()), n;
            }
          });
        }
      })];
    }
  })];
});
export {
  B as TAG
};
