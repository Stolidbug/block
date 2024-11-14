import { c as y, i, t, g as k } from "./utils-DyI0jAV8.js";
import { z as l } from "./theme.store-v2--qJ2X.js";
import { c as _ } from "./createChildrenObserver-DrEtg4wT.js";
import { e as u, b as $, c as e, g as c, F as m, d as z } from "./R5675YMU-BY7cX9Th.js";
import { P as C, a as P, b as O, c as T, d as E, e as I } from "./popover-trigger-B_A19BSZ.js";
const R = "[data-part=content]{width:100vw;max-width:18.75rem;padding:var(--spacing-3);border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 8px 8px -4px #10182808,0 20px 24px -8px #10182814}.anchor{display:flex;justify-content:flex-start}[data-part=trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent;font-weight:var(--font-weight-normal);pointer-events:none}[data-part=trigger] *{pointer-events:initial}[data-part=close-trigger]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:none;background-color:transparent}:host(.dark) [data-part=content]{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}::slotted(*){pointer-events:none}.menu-header{display:flex;align-items:center;justify-content:flex-end;padding-bottom:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}:host(.dark) .menu-header{border-color:var(--color-gray-600)}.menu-list{display:flex;flex-direction:column;gap:var(--spacing-2)}.menu-list:not(:first-child){padding-top:var(--spacing-2)}.menu-list:not(:last-child){padding-bottom:var(--spacing-2);border-bottom:1px solid var(--color-gray-300)}:host(.dark) .menu-list{border-color:var(--color-gray-600)}";
var h = /* @__PURE__ */ t("<style>"), S = /* @__PURE__ */ t("<solid-button as=span variant=ghost><solid-icon icon=mingcute-close-line>", !0, !1), j = /* @__PURE__ */ t("<div class=menu-header>"), A = /* @__PURE__ */ t("<span class=sr-only><slot name=title>"), N = /* @__PURE__ */ t("<div class=menu-list role=list>"), F = /* @__PURE__ */ t("<div class=menu-item role=listitem>");
const M = "solid-menu", Y = l.object({
  offsetY: l.number().optional(),
  placement: l.string().transform((o) => o).optional()
});
y(M, Y, (o) => {
  const s = k(), b = _(s), d = u(() => b().filter((n) => n.matches("template"))), f = u(() => d().filter((n) => n.matches('[slot="items"]')).map((n) => n.content.cloneNode(!0))), v = u(() => {
    var r;
    const n = (r = d().find((a) => a.matches('[slot="trigger"]'))) == null ? void 0 : r.content.cloneNode(!0);
    return (n == null ? void 0 : n.firstElementChild) ?? void 0;
  }), [x, p] = $(!1), w = z();
  return [(() => {
    var n = h();
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
    var n = h();
    return i(n, R), n;
  })(), e(I, {
    id: w,
    get open() {
      return x();
    },
    getRootNode: () => s.shadowRoot,
    onInteractOutside: (n) => {
      n.detail.originalEvent.composedPath().includes(s.shadowRoot) || p(!1);
    },
    closeOnInteractOutside: !1,
    onOpenChange: (n) => {
      p(n.open);
    },
    get positioning() {
      return {
        offset: {
          mainAxis: o.offsetY
        },
        placement: o.placement
      };
    },
    get children() {
      return [e(C, {
        get children() {
          return v();
        }
      }), e(P, {
        get children() {
          return e(O, {
            get children() {
              return [(() => {
                var n = j();
                return i(n, e(T, {
                  "aria-label": "fermer",
                  get children() {
                    var r = S(), a = r.firstChild;
                    return r.icononly = !0, r._$owner = c(), a._$owner = c(), r;
                  }
                })), n;
              })(), e(E, {
                get children() {
                  var n = A(), r = n.firstChild;
                  return r._$owner = c(), n;
                }
              }), e(m, {
                get each() {
                  return f();
                },
                children: (n) => (() => {
                  var r = N();
                  return i(r, e(m, {
                    get each() {
                      return Array.from(n.children);
                    },
                    children: (a) => (() => {
                      var g = F();
                      return i(g, a), g;
                    })()
                  })), r;
                })()
              })];
            }
          });
        }
      })];
    }
  })];
});
export {
  M as TAG
};
