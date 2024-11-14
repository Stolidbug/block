import { c as Tt, i as at, t as gt, u as _, s as lt } from "./utils-DyI0jAV8.js";
import { z as C } from "./theme.store-v2--qJ2X.js";
import { b as j, A as Et, f as Rt, o as zt, g as ct, a as Ot, d as Wt } from "./R5675YMU-BY7cX9Th.js";
import { A as Pt, s as $t, f as At, h as St, n as Bt, d as T, i as m, j as w, c as k, k as B, q as X, t as G, u as N, o as P, p as ut, a as L, y as $, z as D, v as Dt, w as ht, x as Nt, b as x, r as bt, g as Ft, l as yt } from "./floating-ui.utils.dom-CT4HbYBq.js";
import { c as Ht } from "./index-BZKcI3Xu.js";
import { TextInputContext as Vt } from "./TextInput.js";
const It = '.tooltip-component{position:relative}.tooltip{--x: 0;--y: 0;z-index:50;position:absolute;top:var(--y);left:var(--x);width:max-content;padding-inline:var(--spacing-3);padding-block:var(--spacing-2);border-radius:var(--radius-lg);background-color:transparent;box-shadow:0 4px 6px -2px #10182808,0 12px 16px -4px #10182814;font-size:var(--font-size-3);line-height:var(--line-height-4);font-family:var(--font-family-inter)}:host(.dark) .tooltip{background-color:var(--color-gray-800);color:var(--color-white)}.tooltip-arrow{--y: 0;--x: 0;position:absolute;top:var(--y);left:var(--x);width:var(--spacing-4);height:var(--spacing-2);background-color:var(--color-white);box-shadow:0 4px 6px -2px #10182808,0 12px 16px -4px #10182814;content:""}:host(.dark) .tooltip-arrow{background-color:var(--color-gray-800)}.tooltip-left .tooltip-arrow{right:initial;left:100%;clip-path:polygon(100% 50%,0 0,0 100%)}.tooltip-right .tooltip-arrow{right:100%;left:initial;clip-path:polygon(0 50%,100% 0,100% 100%)}.tooltip-bottom .tooltip-arrow{top:initial;bottom:100%;clip-path:polygon(50% 0%,0 100%,100% 100%)}.tooltip-top .tooltip-arrow{top:100%;bottom:initial;clip-path:polygon(50% 100%,0 0,100% 0)}.tooltip-btn{padding:var(--spacing-1);border:none;border-radius:var(--radius-full);background-color:transparent;color:var(--color-black);font-size:var(--spacing-8);cursor:pointer}.tooltip-btn:hover{background-color:var(--color-gray-100)}.tooltip-btn:active{background-color:var(--color-gray-200)}.tooltip-btn-error{color:var(--color-red-400)}.tooltip-btn-sm{font-size:var(--spacing-4)}.tooltip-btn:disabled{color:var(--color-gray-400);cursor:not-allowed}.tooltip-btn:disabled:hover,.tooltip-btn:disabled:active{background-color:transparent}:host(.dark) .tooltip-btn{color:var(--color-white)}:host(.dark) .tooltip-btn:hover{background-color:var(--color-gray-700)}:host(.dark) .tooltip-btn:active,:host(.dark) .tooltip-btn:focus-visible{background-color:var(--color-gray-500)}:host(.dark) .tooltip-btn-error{color:var(--color-red-300)}:host(.dark) .tooltip-btn:disabled{color:var(--color-gray-500)}:host(.dark) .tooltip-btn:disabled:hover,:host(.dark) .tooltip-btn:disabled:active{background-color:transparent}';
function vt(t) {
  const o = x(t);
  let e = parseFloat(o.width) || 0, n = parseFloat(o.height) || 0;
  const i = w(t), s = i ? t.offsetWidth : e, r = i ? t.offsetHeight : n, l = B(e) !== s || B(n) !== r;
  return l && (e = s, n = r), {
    width: e,
    height: n,
    $: l
  };
}
function mt(t) {
  return m(t) ? t : t.contextElement;
}
function W(t) {
  const o = mt(t);
  if (!w(o))
    return k(1);
  const e = o.getBoundingClientRect(), {
    width: n,
    height: i,
    $: s
  } = vt(o);
  let r = (s ? B(e.width) : e.width) / n, l = (s ? B(e.height) : e.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const Mt = /* @__PURE__ */ k(0);
function xt(t) {
  const o = L(t);
  return !yt() || !o.visualViewport ? Mt : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function _t(t, o, e) {
  return o === void 0 && (o = !1), !e || o && e !== L(t) ? !1 : o;
}
function A(t, o, e, n) {
  o === void 0 && (o = !1), e === void 0 && (e = !1);
  const i = t.getBoundingClientRect(), s = mt(t);
  let r = k(1);
  o && (n ? m(n) && (r = W(n)) : r = W(t));
  const l = _t(s, e, n) ? xt(s) : k(0);
  let a = (i.left + l.x) / r.x, c = (i.top + l.y) / r.y, d = i.width / r.x, g = i.height / r.y;
  if (s) {
    const E = L(s), S = n && m(n) ? L(n) : n;
    let R = E, y = R.frameElement;
    for (; y && n && S !== R; ) {
      const v = W(y), f = y.getBoundingClientRect(), h = x(y), z = f.left + (y.clientLeft + parseFloat(h.paddingLeft)) * v.x, O = f.top + (y.clientTop + parseFloat(h.paddingTop)) * v.y;
      a *= v.x, c *= v.y, d *= v.x, g *= v.y, a += z, c += O, R = L(y), y = R.frameElement;
    }
  }
  return bt({
    width: d,
    height: g,
    x: a,
    y: c
  });
}
const jt = [":popover-open", ":modal"];
function K(t) {
  return jt.some((o) => {
    try {
      return t.matches(o);
    } catch {
      return !1;
    }
  });
}
function qt(t) {
  let {
    elements: o,
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const s = i === "fixed", r = T(n), l = o ? K(o.floating) : !1;
  if (n === r || l && s)
    return e;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = k(1);
  const d = k(0), g = w(n);
  if ((g || !g && !s) && ((X(n) !== "body" || G(r)) && (a = N(n)), w(n))) {
    const E = A(n);
    c = W(n), d.x = E.x + n.clientLeft, d.y = E.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - a.scrollLeft * c.x + d.x,
    y: e.y * c.y - a.scrollTop * c.y + d.y
  };
}
function Xt(t) {
  return Array.from(t.getClientRects());
}
function wt(t) {
  return A(T(t)).left + N(t).scrollLeft;
}
function Gt(t) {
  const o = T(t), e = N(t), n = t.ownerDocument.body, i = P(o.scrollWidth, o.clientWidth, n.scrollWidth, n.clientWidth), s = P(o.scrollHeight, o.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + wt(t);
  const l = -e.scrollTop;
  return x(n).direction === "rtl" && (r += P(o.clientWidth, n.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function Kt(t, o) {
  const e = L(t), n = T(t), i = e.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, r = i.height;
    const c = yt();
    (!c || c && o === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: a
  };
}
function Ut(t, o) {
  const e = A(t, !0, o === "fixed"), n = e.top + t.clientTop, i = e.left + t.clientLeft, s = w(t) ? W(t) : k(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, a = i * s.x, c = n * s.y;
  return {
    width: r,
    height: l,
    x: a,
    y: c
  };
}
function dt(t, o, e) {
  let n;
  if (o === "viewport")
    n = Kt(t, e);
  else if (o === "document")
    n = Gt(T(t));
  else if (m(o))
    n = Ut(o, e);
  else {
    const i = xt(t);
    n = {
      ...o,
      x: o.x - i.x,
      y: o.y - i.y
    };
  }
  return bt(n);
}
function kt(t, o) {
  const e = $(t);
  return e === o || !m(e) || D(e) ? !1 : x(e).position === "fixed" || kt(e, o);
}
function Yt(t, o) {
  const e = o.get(t);
  if (e)
    return e;
  let n = Ft(t, [], !1).filter((l) => m(l) && X(l) !== "body"), i = null;
  const s = x(t).position === "fixed";
  let r = s ? $(t) : t;
  for (; m(r) && !D(r); ) {
    const l = x(r), a = ht(r);
    !a && l.position === "fixed" && (i = null), (s ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || G(r) && !a && kt(t, r)) ? n = n.filter((d) => d !== r) : i = l, r = $(r);
  }
  return o.set(t, n), n;
}
function Jt(t) {
  let {
    element: o,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = t;
  const r = [...e === "clippingAncestors" ? K(o) ? [] : Yt(o, this._c) : [].concat(e), n], l = r[0], a = r.reduce((c, d) => {
    const g = dt(o, d, i);
    return c.top = P(g.top, c.top), c.right = ut(g.right, c.right), c.bottom = ut(g.bottom, c.bottom), c.left = P(g.left, c.left), c;
  }, dt(o, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Qt(t) {
  const {
    width: o,
    height: e
  } = vt(t);
  return {
    width: o,
    height: e
  };
}
function Zt(t, o, e) {
  const n = w(o), i = T(o), s = e === "fixed", r = A(t, !0, s, o);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = k(0);
  if (n || !n && !s)
    if ((X(o) !== "body" || G(i)) && (l = N(o)), n) {
      const g = A(o, !0, s, o);
      a.x = g.x + o.clientLeft, a.y = g.y + o.clientTop;
    } else i && (a.x = wt(i));
  const c = r.left + l.scrollLeft - a.x, d = r.top + l.scrollTop - a.y;
  return {
    x: c,
    y: d,
    width: r.width,
    height: r.height
  };
}
function q(t) {
  return x(t).position === "static";
}
function pt(t, o) {
  return !w(t) || x(t).position === "fixed" ? null : o ? o(t) : t.offsetParent;
}
function Ct(t, o) {
  const e = L(t);
  if (K(t))
    return e;
  if (!w(t)) {
    let i = $(t);
    for (; i && !D(i); ) {
      if (m(i) && !q(i))
        return i;
      i = $(i);
    }
    return e;
  }
  let n = pt(t, o);
  for (; n && Dt(n) && q(n); )
    n = pt(n, o);
  return n && D(n) && q(n) && !ht(n) ? e : n || Nt(t) || e;
}
const to = async function(t) {
  const o = this.getOffsetParent || Ct, e = this.getDimensions, n = await e(t.floating);
  return {
    reference: Zt(t.reference, await o(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function oo(t) {
  return x(t).direction === "rtl";
}
const no = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qt,
  getDocumentElement: T,
  getClippingRect: Jt,
  getOffsetParent: Ct,
  getElementRects: to,
  getClientRects: Xt,
  getDimensions: Qt,
  getScale: W,
  isElement: m,
  isRTL: oo
}, eo = Pt, io = $t, ro = At, so = St, ao = (t, o, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: no,
    ...e
  }, s = {
    ...i.platform,
    _c: n
  };
  return Bt(t, o, {
    ...i,
    platform: s
  });
};
var ft = /* @__PURE__ */ gt("<style>"), lo = /* @__PURE__ */ gt("<div class=tooltip-component><button class=tooltip-btn><span class=sr-only></span><solid-icon icon=mingcute-question-line></solid-icon></button><div role=tooltip class=tooltip><div class=tooltip-arrow aria-hidden=true></div><slot>", !0, !1);
const co = "solid-tooltip";
Tt(co, C.object({
  options: C.object({
    placement: C.string().pipe(C.custom()).optional()
  }).optional().default({}),
  sm: C.boolean().optional().default(!1),
  disabled: C.boolean().optional().default(!1),
  error: C.boolean().optional().default(!1)
}), (t) => {
  const o = "top", e = Wt(), n = () => `tooltip-${e}`, [i, s] = j(!1), [r, l] = Ht(() => {
    var f;
    return ((f = t.options) == null ? void 0 : f.placement) ?? o;
  });
  let a, c, d;
  const [g, E] = j({
    x: 0,
    y: 0
  }), [S, R] = j({
    x: "",
    y: ""
  }), y = Et(Vt);
  async function v() {
    var f;
    if (a && c && d) {
      const {
        x: h,
        y: z,
        middlewareData: O
      } = await ao(a, c, {
        ...t.options,
        middleware: [eo(12), ro(), io(), so({
          element: d
        })]
      });
      l(((f = O.offset) == null ? void 0 : f.placement) ?? o);
      const {
        x: p,
        y: b
      } = O.arrow ?? {};
      R({
        x: p != null ? `${p}px` : "",
        y: b != null ? `${b}px` : ""
      }), E({
        x: h,
        y: z
      });
    }
  }
  return Rt(() => {
    i() && v();
  }), zt(() => {
    v();
  }), [(() => {
    var f = ft();
    return f.innerHTML = `/* layer: preflights */
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
.block{display:block;}
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
      `, f;
  })(), (() => {
    var f = ft();
    return at(f, It), f;
  })(), (() => {
    var f = lo(), h = f.firstChild, z = h.firstChild, O = z.nextSibling, p = h.nextSibling, b = p.firstChild, Lt = b.nextSibling, U = a;
    typeof U == "function" ? _(U, h) : a = h, h.addEventListener("click", () => s((u) => !u)), at(z, () => i() ? "Cacher l'aide" : "Afficher l'aide"), O._$owner = ct();
    var Y = c;
    typeof Y == "function" ? _(Y, p) : c = p;
    var J = d;
    return typeof J == "function" ? _(J, b) : d = b, Lt._$owner = ct(), Ot((u) => {
      var Q = !!t.sm, Z = !!(y.error() || t.error), tt = t.disabled, ot = n(), nt = n(), et = r() === "top", it = r() === "right", rt = r() === "bottom", st = r() === "left", F = `${g().x}px`, H = `${g().y}px`, V = i() ? "block" : "none", I = S().x, M = S().y;
      return Q !== u.e && h.classList.toggle("tooltip-btn-sm", u.e = Q), Z !== u.t && h.classList.toggle("tooltip-btn-error", u.t = Z), tt !== u.a && (h.disabled = u.a = tt), ot !== u.o && lt(h, "aria-describedby", u.o = ot), nt !== u.i && lt(p, "id", u.i = nt), et !== u.n && p.classList.toggle("tooltip-top", u.n = et), it !== u.s && p.classList.toggle("tooltip-right", u.s = it), rt !== u.h && p.classList.toggle("tooltip-bottom", u.h = rt), st !== u.r && p.classList.toggle("tooltip-left", u.r = st), F !== u.d && ((u.d = F) != null ? p.style.setProperty("--x", F) : p.style.removeProperty("--x")), H !== u.l && ((u.l = H) != null ? p.style.setProperty("--y", H) : p.style.removeProperty("--y")), V !== u.u && ((u.u = V) != null ? p.style.setProperty("display", V) : p.style.removeProperty("display")), I !== u.c && ((u.c = I) != null ? b.style.setProperty("--x", I) : b.style.removeProperty("--x")), M !== u.w && ((u.w = M) != null ? b.style.setProperty("--y", M) : b.style.removeProperty("--y")), u;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0,
      r: void 0,
      d: void 0,
      l: void 0,
      u: void 0,
      c: void 0,
      w: void 0
    }), f;
  })()];
});
export {
  co as TAG
};
