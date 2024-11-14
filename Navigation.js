import { c as Q, d as X, i as f, u as M, t as z, s as A, g as Y } from "./utils-DyI0jAV8.js";
import { z as Z } from "./theme.store-v2--qJ2X.js";
import { c as nn } from "./createChildrenObserver-DrEtg4wT.js";
import { f as H, i as en, j as tn, k as an, l as on, h as U, b as y, o as V, e as _, g as B, c as F, a as I, F as rn } from "./R5675YMU-BY7cX9Th.js";
import { m as sn } from "./index-D6kvt-oB.js";
import { c as ln, a as cn } from "./breakpoints.store-_NAidOcb.js";
import { c as un } from "./createReactiveFocusTrap-BEt_kQNB.js";
import { T as j } from "./Transition-DZKvjkBn.js";
const dn = ".navigation{position:relative;background-color:var(--color-white);box-shadow:3px 0 22.9px #00000014;font-family:var(--font-family-inter)}.navigation-burger-btn{padding:var(--spacing-2);border:none;background:none;color:var(--color-gray-900);font-size:var(--spacing-8);cursor:pointer}@media (min-width: 1024px){.navigation-burger-btn{display:none}}:host(.dark) .navigation-burger-btn{color:var(--color-white)}.navigation-inner{display:flex;align-items:center;padding-block:var(--spacing-4);gap:var(--spacing-8)}.logo-container{width:100%;max-width:var(--spacing-20)}.navigation-list{display:flex;flex-direction:column;margin:0;padding:0;gap:var(--spacing-4);list-style:none}@media (min-width: 1024px){.navigation-list{flex-direction:row;align-items:center}}.menu-panel{display:none;z-index:1000;position:fixed;top:var(--navigation-height);right:0;bottom:0;flex-direction:column;width:17.1875rem;padding-inline:var(--spacing-4);padding-block:var(--spacing-4);overflow-y:auto;gap:var(--spacing-4);transform:translate(100%);background-color:var(--color-white)}@media (min-width: 1024px){.menu-panel{display:block}}@media (min-width: 1024px){.menu-panel{display:block;position:static;width:initial;padding-inline:0;padding-block:0;transform:translate(0);background-color:transparent}}:host(.dark) .menu-panel{background-color:var(--color-gray-900)}.menu-panel-close-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:0;overflow:hidden;border:none;background-color:transparent;text-align:center;text-decoration:underline;opacity:0;pointer-events:none}@media (min-width: 1024px){.menu-panel-close-btn{display:none}}.menu-panel-close-btn:focus-visible{position:static;flex-shrink:0;height:initial;opacity:1;pointer-events:auto}@media (min-width: 1024px){.menu-panel-close-btn:focus-visible{display:none}}.navigation-overlay{display:none;z-index:999;position:fixed;top:var(--navigation-height);right:0;bottom:0;left:0;background-color:#00000080;opacity:0}.navigation-options{display:flex;align-items:center;margin-left:auto;gap:var(--spacing-2)}.mobile-panel{display:flex;flex-direction:column;margin:auto 0 0;padding:0;gap:var(--spacing-2);list-style:none}@media (min-width: 1024px){.mobile-panel{display:none}}:host(.dark) .mobile-panel ::slotted(*){color:var(--color-white)}:host(.dark) .navigation{background-color:var(--color-gray-900);color:var(--color-white)}:host(.dark) .navigation-item a{color:var(--color-white)}:host(.dark) .navigation-item a[data-active]{background-color:var(--color-blue-900);color:var(--color-blue-400)}:host(.dark) .navigation-item a:not([data-active]):hover,:host(.dark) .navigation-item a:not([data-active]):focus{background-color:var(--color-gray-800)}:host(.dark) .navigation-item a:not([data-active]):active{background-color:var(--color-gray-700)}.panel-enter-from{display:flex}.panel-enter-to,.panel-leave-from{display:flex;transform:translate(0);transition:transform .3s ease-in-out}.panel-leave-to{transform:translate(100%)}.overlay-enter-from{display:block}.overlay-enter-to,.overlay-leave-from{display:block;opacity:1;transition:opacity .3s ease-in-out}.overlay-leave-to{opacity:0}";
function pn(a, i) {
  const o = new ResizeObserver(a);
  return U(o.disconnect.bind(o)), {
    observe: (u) => o.observe(u, i),
    unobserve: o.unobserve.bind(o)
  };
}
function gn(a, i, o) {
  const u = /* @__PURE__ */ new WeakMap(), { observe: g, unobserve: w } = pn((t) => {
    for (const r of t) {
      const { contentRect: m, target: c } = r, d = Math.round(m.width), v = Math.round(m.height), b = u.get(c);
      (!b || b.width !== d || b.height !== v) && (i(m, c, r), u.set(c, { width: d, height: v }));
    }
  }, o);
  H((t) => {
    const r = en(tn(an(a)));
    return on(r, t, g, w), r;
  }, []);
}
var mn = {
  top: null,
  left: null,
  bottom: null,
  right: null,
  width: null,
  height: null
};
function q(a) {
  if (!a)
    return { ...mn };
  const i = a.getBoundingClientRect();
  return {
    top: i.top,
    left: i.left,
    bottom: i.bottom,
    right: i.right,
    width: i.width,
    height: i.height
  };
}
function vn(a, { trackMutation: i = !0, trackResize: o = !0, trackScroll: u = !0 } = {}) {
  const g = typeof a == "function", [w, t] = y(void 0, { equals: !1 });
  let r;
  g ? (r = () => q(a()), V(t)) : r = () => q(a);
  const m = ln(() => (w(), r()));
  if (o && gn(
    g ? () => a() || [] : a,
    typeof o == "function" ? o(t) : t
  ), u) {
    const c = g ? (d) => {
      const v = a();
      v && d.target instanceof Node && d.target.contains(v) && t();
    } : (d) => d.target instanceof Node && d.target.contains(a) && t();
    sn(
      window,
      "scroll",
      typeof u == "function" ? u(c) : c,
      { capture: !0 }
    );
  }
  if (i) {
    const c = new MutationObserver(
      typeof i == "function" ? i(t) : t
    );
    c.observe(document.body, {
      attributeFilter: ["style", "class"],
      subtree: !0,
      childList: !0
    }), U(() => c.disconnect());
  }
  return m;
}
var G = /* @__PURE__ */ z("<style>"), bn = /* @__PURE__ */ z("<div class=menu-panel><button class=menu-panel-close-btn><span>Fermer</span></button><ul class=navigation-list></ul><ul class=mobile-panel>"), hn = /* @__PURE__ */ z("<div class=navigation-overlay>"), fn = /* @__PURE__ */ z('<nav class=navigation role=navigation><div class="navigation-inner container-max"><div class=logo-container><slot name=logo></slot></div><div class=navigation-options><slot name=options></slot><button class=navigation-burger-btn><solid-icon>', !0, !1), yn = /* @__PURE__ */ z("<li class=navigation-item>");
const wn = "solid-navigation";
Q(wn, Z.object({}), () => {
  const a = Y(), i = nn(a), o = _(() => i().filter((n) => n.matches("template"))), u = _(() => {
    var n, l, p;
    return (p = (l = (n = o()) == null ? void 0 : n.find((x) => x.getAttribute("slot") === null)) == null ? void 0 : l.content) == null ? void 0 : p.cloneNode(!0);
  }), g = _(() => {
    var n, l, p;
    return (p = (l = (n = o()) == null ? void 0 : n.find((x) => x.getAttribute("slot") === "mobile-panel")) == null ? void 0 : l.content) == null ? void 0 : p.cloneNode(!0);
  }), w = _(() => {
    var n;
    return Array.from(((n = u()) == null ? void 0 : n.children) ?? []);
  }), [t, r] = y(!1), [m, c] = y(), [d, v] = y(), [b, W] = y(), [J, K] = y(!1), S = vn(m), T = un(() => d(), {
    onDeactivate: () => {
      r(!1);
    },
    escapeDeactivates: !0,
    // permet de fermer le panel si on clique sur le bouton burger en dehors du panel
    allowOutsideClick: (n) => b() ? n.composedPath().includes(b()) : !1
  });
  H(() => {
    var n;
    t() ? queueMicrotask(() => {
      var l;
      (l = T()) == null || l.activate();
    }) : (n = T()) == null || n.deactivate();
  }), V(() => {
    K(!0);
  });
  const C = () => !cn.lg;
  return [(() => {
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
.px{padding-left:1rem;padding-right:1rem;}

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
    var n = G();
    return f(n, dn), n;
  })(), (() => {
    var n = fn(), l = n.firstChild, p = l.firstChild, x = p.firstChild, E = p.nextSibling, D = E.firstChild, N = D.nextSibling, P = N.firstChild;
    return M((e) => c(e), n), x._$owner = B(), f(l, F(j, {
      trigger: () => t(),
      name: "panel",
      get children() {
        var e = bn(), h = e.firstChild, k = h.nextSibling, O = k.nextSibling;
        return M((s) => v(s), e), h.$$click = () => {
          r(!1);
        }, f(k, F(rn, {
          get each() {
            return w();
          },
          children: (s) => (() => {
            var $ = yn();
            return f($, s), $;
          })()
        })), f(O, (() => {
          var s = _(() => !!J());
          return () => s() && g();
        })()), I((s) => {
          var $ = C(), L = C() ? "dialog" : void 0, R = C() ? "Panneau de navigation" : "";
          return $ !== s.e && A(e, "aria-modal", s.e = $), L !== s.t && A(e, "role", s.t = L), R !== s.a && A(e, "aria-label", s.a = R), s;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        }), e;
      }
    }), E), f(l, F(j, {
      trigger: () => C() && t(),
      name: "overlay",
      get children() {
        return hn();
      }
    }), E), D._$owner = B(), M((e) => W(e), N), N.$$click = () => {
      r((e) => !e);
    }, P._$owner = B(), I((e) => {
      var h = S.height ? `${S.height}px` : "0px", k = t() ? "Fermer le menu" : "Ouvrir le menu", O = t() ? "mingcute-close-line" : "mingcute-menu-line";
      return h !== e.e && ((e.e = h) != null ? n.style.setProperty("--navigation-height", h) : n.style.removeProperty("--navigation-height")), k !== e.t && A(N, "aria-label", e.t = k), O !== e.a && (P.icon = e.a = O), e;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), n;
  })()];
});
X(["click"]);
export {
  wn as NAVIGATION_TAG
};
