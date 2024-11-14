import { b as D, c as q, d as A, t as w, g as F, s as h, u as O, i as g, P as I } from "./utils-DyI0jAV8.js";
import { z as E } from "./theme.store-v2--qJ2X.js";
import { b as M, f as R, c as U, g as y, e as G, a as H, d as B } from "./R5675YMU-BY7cX9Th.js";
import { u as J } from "./useSlots-DRPN5bzQ.js";
import { c as K } from "./createReactiveFocusTrap-BEt_kQNB.js";
const N = ".solid-modal.modal{display:flex;position:fixed;align-items:center;justify-content:center;top:0;right:0;bottom:0;left:0;padding:var(--spacing-4);overflow:hidden;background-color:#11182733}.solid-modal .modal-inner{display:grid;position:relative;grid-template-rows:auto 1fr;grid-template-columns:1fr;width:100%;max-width:48rem;max-height:31.25rem;padding:var(--spacing-6);overflow:hidden;gap:var(--spacing-6);border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);background-color:var(--color-white);color:var(--color-gray-700);font-family:var(--font-family-inter)}@media (min-width: 768px){.solid-modal .modal-inner{grid-template-rows:1fr;grid-template-columns:min-content 1fr;padding-inline:var(--spacing-8);padding-block:var(--spacing-10)}}.solid-modal .modal-title{margin:0;color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4-5);line-height:var(--line-height-5-5)}.solid-modal .modal-content{margin:0;margin-top:var(--spacing-2)}.solid-modal .modal-content-wrapper{display:flex;flex-direction:column;height:100%;overflow-x:auto;overflow-y:hidden;gap:var(--spacing-4)}.solid-modal .modal-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:var(--spacing-3)}@media (min-width: 768px){.solid-modal .modal-actions{justify-content:flex-end}}.solid-modal .modal-close-btn{position:absolute;top:5px;right:5px;font-size:var(--spacing-6)}.solid-modal.modal-info .modal-icon{background-color:var(--color-blue-100);color:var(--color-blue-700)}.solid-modal.modal-error .modal-icon{background-color:var(--color-red-100);color:var(--color-red-500)}.solid-modal.modal-success .modal-icon{background-color:var(--color-green-100);color:var(--color-teal-700)}.solid-modal.modal-warning .modal-icon{background-color:var(--color-yellow-100);color:var(--color-orange-700)}.solid-modal .modal-icon{display:flex;align-items:center;justify-content:center;width:var(--spacing-10);height:var(--spacing-10);border-radius:50%;font-size:var(--spacing-6)}.solid-modal .modal-scroller{display:flex;flex-direction:column;overflow-y:auto}.dark .solid-modal.modal{background-color:#fff3}.dark .solid-modal .modal-inner{border-color:var(--color-gray-500);background-color:var(--color-gray-900);color:var(--color-gray-200)}.dark .solid-modal .modal-title{color:var(--color-white)}.dark .solid-modal.modal-info .modal-icon{background-color:var(--color-blue-700);color:var(--color-blue-200)}.dark .solid-modal.modal-error .modal-icon{background-color:var(--color-red-700);color:var(--color-red-100)}.dark .solid-modal.modal-success .modal-icon{background-color:var(--color-green-700);color:var(--color-green-100)}.dark .solid-modal.modal-warning .modal-icon{background-color:var(--color-yellow-300);color:var(--color-black)}";
var Q = /* @__PURE__ */ w("<style>"), V = /* @__PURE__ */ w('<div role=dialog class="solid-modal modal"><div class=modal-inner><solid-button class=modal-close-btn variant=ghost aria-label=Fermer><solid-icon icon=mingcute-close-line></solid-icon></solid-button><div class=modal-icon><solid-icon></solid-icon></div><div class=modal-content-wrapper><div class=modal-scroller><h1 class=modal-title></h1><p class=modal-content>', !0, !1), W = /* @__PURE__ */ w("<div class=modal-actions>");
D.setOrUpdateStyles("modal-styles", N);
const X = "solid-modal";
q(X, E.object({
  variant: E.enum(["info", "error", "success", "warning"]).optional().default("info")
}), (i) => {
  const x = F(), [p, s] = M(!1), d = J(x), k = B();
  let f, c;
  const u = K(() => c, {
    escapeDeactivates: !0,
    clickOutsideDeactivates: !0,
    onDeactivate: () => {
      s(!1);
    }
  }), L = () => {
    switch (i.variant) {
      case "info":
        return "mingcute-notification-line";
      case "error":
        return "mingcute-delete-2-line";
      case "success":
        return "mingcute-check-circle-line";
      case "warning":
        return "mingcute-question-line";
    }
  };
  return Object.assign(x, {
    open() {
      s(!0);
    },
    close() {
      s(!1);
    },
    state() {
      return p();
    },
    actions() {
      return f;
    },
    modal() {
      return c;
    }
  }), R(() => {
    var o, e, a, m;
    if (p() && !((o = u()) != null && o.active)) {
      (e = u()) == null || e.activate();
      return;
    }
    if ((a = u()) != null && a.active) {
      (m = u()) == null || m.deactivate();
      return;
    }
  }), [(() => {
    var o = Q();
    return o.innerHTML = `/* layer: preflights */
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
      `, o;
  })(), U(I, {
    get mount() {
      return document.body;
    },
    get children() {
      var o = V(), e = o.firstChild, a = e.firstChild, m = a.firstChild, $ = a.nextSibling, z = $.firstChild, _ = $.nextSibling, P = _.firstChild, v = P.firstChild, T = v.nextSibling;
      h(o, "aria-modal", !0), h(o, "aria-labelledby", `modal-title-${k}`);
      var S = c;
      return typeof S == "function" ? O(S, e) : c = e, a.$$click = () => {
        s(!1);
      }, a.icononly = !0, a._$owner = y(), m._$owner = y(), z._$owner = y(), h(v, "id", `modal-title-${k}`), g(v, () => {
        var n;
        return (n = d.get("title")) == null ? void 0 : n.content;
      }), g(T, () => {
        var n;
        return (n = d.get("content")) == null ? void 0 : n.content;
      }), g(_, (() => {
        var n = G(() => !!d.has("actions"));
        return () => n() && (() => {
          var r = W(), t = f;
          return typeof t == "function" ? O(t, r) : f = r, g(r, () => {
            var l;
            return (l = d.get("actions")) == null ? void 0 : l.content;
          }), r;
        })();
      })(), null), H((n) => {
        var r = i.variant === "info", t = i.variant === "error", l = i.variant === "success", C = i.variant === "warning", b = p() ? void 0 : "none", j = L();
        return r !== n.e && o.classList.toggle("modal-info", n.e = r), t !== n.t && o.classList.toggle("modal-error", n.t = t), l !== n.a && o.classList.toggle("modal-success", n.a = l), C !== n.o && o.classList.toggle("modal-warning", n.o = C), b !== n.i && ((n.i = b) != null ? o.style.setProperty("display", b) : o.style.removeProperty("display")), j !== n.n && (z.icon = n.n = j), n;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0,
        n: void 0
      }), o;
    }
  })];
});
A(["click"]);
export {
  X as TAG
};
