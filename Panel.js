import { b as S, c as C, d as O, t as d, g as T, s as g, i as t, u as E, P as j } from "./utils-DyI0jAV8.js";
import { z as D } from "./theme.store-v2--qJ2X.js";
import { b as M, f as q, c as w, g as k, e as $, a as A, d as F } from "./R5675YMU-BY7cX9Th.js";
import { u as I } from "./useSlots-DRPN5bzQ.js";
import { c as P } from "./createReactiveFocusTrap-BEt_kQNB.js";
import { T as R } from "./Transition-DZKvjkBn.js";
const U = ".solid-panel .panel-inner{display:none;z-index:1000;position:fixed;top:0;right:0;bottom:0;flex-direction:column;width:100%;max-width:var(--spacing-100);padding-inline:var(--spacing-3);padding-bottom:var(--spacing-4);transform:translate(100%);border:1px solid var(--color-gray-300);background-color:var(--color-white);font-family:var(--font-family-inter)}.solid-panel.panel-open .panel-inner{transform:translate(0)}.solid-panel .panel-header{display:flex;align-items:center;justify-content:flex-end;padding-block:var(--spacing-1);border-bottom:1px solid var(--color-gray-300)}.solid-panel .panel-sub-header{display:flex;flex-direction:column;padding-block:var(--spacing-3);gap:var(--spacing-3);border-bottom:1px solid var(--color-gray-300)}.solid-panel .panel-title :is(h1,h2,h3,h4,h5,h6,p){margin:0;font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5);text-align:center}.solid-panel .panel-content{margin-top:var(--spacing-3);overflow-y:auto}.solid-panel .panel-footer{display:flex;flex-direction:column;margin-top:var(--spacing-8);gap:var(--spacing-3)}.solid-panel .side-panel-enter-from{display:flex}.solid-panel .side-panel-enter-to,.solid-panel .side-panel-leave-from{display:flex;transform:translate(0);transition:transform .3s ease-in-out}.solid-panel .side-panel-leave-to{transform:translate(100%)}.dark .solid-panel .panel-inner{border-color:var(--color-gray-600);background-color:var(--color-gray-900);color:var(--color-white)}.dark .solid-panel .panel-header,.dark .solid-panel .panel-sub-header{border-bottom-color:var(--color-gray-600)}";
var G = /* @__PURE__ */ d("<style>"), H = /* @__PURE__ */ d("<div class=panel-inner><div class=panel-header><solid-button class=panel-close-btn variant=ghost aria-label=Fermer><solid-icon icon=mingcute-close-line iconsize=var(--spacing-6)></solid-icon></solid-button></div><div class=panel-sub-header><div class=panel-title></div></div><div class=panel-content>", !0, !1), L = /* @__PURE__ */ d('<div role=dialog class="solid-panel panel">'), B = /* @__PURE__ */ d("<div>"), J = /* @__PURE__ */ d("<div class=panel-footer>");
S.setOrUpdateStyles("panel-styles", U);
const K = "solid-panel";
C(K, D.object({}), (N, {
  emit: b
}) => {
  const h = T(), [c, u] = M(!1), i = I(h), v = F();
  let f;
  const p = P(() => f, {
    escapeDeactivates: !0,
    clickOutsideDeactivates: !1,
    onDeactivate: () => {
      u(!1);
    }
  });
  return Object.assign(h, {
    open() {
      u(!0);
    },
    close() {
      u(!1);
    },
    state() {
      return c();
    }
  }), q(() => {
    var n, a, o;
    if (c() && !((n = p()) != null && n.active)) {
      queueMicrotask(() => {
        var r;
        (r = p()) == null || r.activate(), b("open", void 0, {
          bubbles: !1,
          composed: !1
        });
      });
      return;
    }
    if ((a = p()) != null && a.active) {
      (o = p()) == null || o.deactivate(), b("close", void 0, {
        bubbles: !1,
        composed: !1
      });
      return;
    }
  }), [(() => {
    var n = G();
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
  })(), w(j, {
    get mount() {
      return document.body;
    },
    get children() {
      var n = L();
      return g(n, "aria-modal", !1), g(n, "aria-labelledby", `panel-title-${v}`), t(n, w(R, {
        name: "side-panel",
        trigger: () => c(),
        get children() {
          var a = H(), o = a.firstChild, r = o.firstChild, _ = r.firstChild, m = o.nextSibling, y = m.firstChild, z = m.nextSibling, x = f;
          return typeof x == "function" ? E(x, a) : f = a, r.$$click = () => {
            u(!1);
          }, r.icononly = !0, r._$owner = k(), _._$owner = k(), g(y, "id", `panel-title-${v}`), t(y, () => {
            var e;
            return (e = i.get("title")) == null ? void 0 : e.content;
          }), t(m, (() => {
            var e = $(() => !!i.has("sub-header"));
            return () => e() && (() => {
              var s = B();
              return t(s, () => {
                var l;
                return (l = i.get("sub-header")) == null ? void 0 : l.content;
              }), s;
            })();
          })(), null), t(z, () => {
            var e;
            return (e = i.get("content")) == null ? void 0 : e.content;
          }), t(a, (() => {
            var e = $(() => !!i.has("footer"));
            return () => e() && (() => {
              var s = J();
              return t(s, () => {
                var l;
                return (l = i.get("footer")) == null ? void 0 : l.content;
              }), s;
            })();
          })(), null), a;
        }
      })), A(() => g(n, "aria-hidden", !c())), n;
    }
  })];
});
O(["click"]);
export {
  K as TAG
};
