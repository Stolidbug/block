import { o as pt, e as kt, f as Dt, x as It, w as nt, h as yt, k as Bt, B as _t, r as $, C as X, D as zt, b as Mt, g as Wt, E as vt, F as j, G as I, H as M, I as rt, J as $t } from "./environment-context-0t-z-DDy.js";
import { b as Ft, e as it, f as Ht } from "./R5675YMU-BY7cX9Th.js";
import { g as U, i as P, c as O, a as N, b as w, r as bt, d as A, s as Vt, f as Ut, e as Kt, h as Yt, j as L, k as W, l as Et, m as z, n as qt, o as R, p as K, q as B, t as G, u as F, v as Xt, w as wt, x as jt, y as Y, z as xt, A as Gt } from "./floating-ui.utils.dom-CT4HbYBq.js";
const ln = (t) => pt()(t, [
  "lazyMount",
  "onExitComplete",
  "present",
  "unmountOnExit"
]);
function Jt(t, e, n) {
  return {
    isPresent: t.matches("mounted", "unmountSuspended"),
    setNode(r) {
      r && e({ type: "NODE.SET", node: r });
    }
  };
}
var { and: Qt, or: Zt } = It;
function k(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function te(t) {
  const e = t.present ? "mounted" : "unmounted";
  return kt(
    {
      initial: e,
      watch: {
        present: ["raisePresenceChange", "setPrevPresent"]
      },
      context: {
        node: null,
        styles: null,
        prevAnimationName: "",
        present: !1,
        ...t
      },
      on: {
        "NODE.SET": {
          actions: ["setNode", "setStyles"]
        },
        "PRESENCE.CHANGED": [
          {
            guard: "isPresent",
            target: "mounted",
            actions: ["setPrevAnimationName"]
          },
          {
            guard: Zt("isAnimationNone", "isDisplayNone"),
            target: "unmounted",
            actions: ["invokeOnExitComplete"]
          },
          {
            guard: Qt("wasPresent", "isAnimating"),
            target: "unmountSuspended"
          },
          { target: "unmounted", actions: ["invokeOnExitComplete"] }
        ]
      },
      states: {
        mounted: {
          on: {
            UNMOUNT: "unmounted"
          }
        },
        unmountSuspended: {
          activities: ["trackAnimationEvents"],
          on: {
            MOUNT: {
              target: "mounted",
              actions: ["setPrevAnimationName"]
            },
            "ANIMATION.END": {
              target: "unmounted",
              actions: ["invokeOnExitComplete"]
            }
          }
        },
        unmounted: {
          entry: ["clearPrevAnimationName"],
          on: {
            MOUNT: "mounted"
          }
        }
      }
    },
    {
      guards: {
        isPresent: (n) => !!n.present,
        isAnimationNone: (n) => k(n.styles) === "none",
        isDisplayNone: (n) => {
          var r;
          return ((r = n.styles) == null ? void 0 : r.display) === "none";
        },
        wasPresent: (n) => !!n.prevPresent,
        isAnimating: (n) => n.prevAnimationName !== k(n.styles)
      },
      actions: {
        invokeOnExitComplete(n) {
          var r;
          (r = n.onExitComplete) == null || r.call(n);
        },
        setNode(n, r) {
          n.node = nt(r.node);
        },
        setStyles(n, r) {
          const i = r.node.ownerDocument.defaultView || window;
          n.styles = nt(i.getComputedStyle(r.node));
        },
        raisePresenceChange(n, r, { send: i }) {
          i("PRESENCE.CHANGED");
        },
        setPrevPresent(n) {
          n.prevPresent = n.present;
        },
        setPrevAnimationName(n) {
          requestAnimationFrame(() => {
            n.prevAnimationName = k(n.styles);
          });
        },
        clearPrevAnimationName(n) {
          n.prevAnimationName = "";
        }
      },
      activities: {
        trackAnimationEvents(n, r, { send: i }) {
          const o = n.node;
          if (!o)
            return;
          const a = (c) => {
            c.target === o && (n.prevAnimationName = k(n.styles));
          }, s = (c) => {
            const d = k(n.styles).includes(c.animationName);
            c.target === o && d && i("ANIMATION.END");
          };
          return o.addEventListener("animationstart", a), o.addEventListener("animationcancel", s), o.addEventListener("animationend", s), () => {
            o.removeEventListener("animationstart", a), o.removeEventListener("animationcancel", s), o.removeEventListener("animationend", s);
          };
        }
      }
    }
  );
}
Dt()(["onExitComplete", "present"]);
yt({
  hookName: "useRenderStrategyContext",
  providerName: "<RenderStrategyProvider />"
});
const ee = (t) => pt()(t, ["lazyMount", "unmountOnExit"]), un = (t) => {
  const [e, n] = ee(t), [r, i] = Ft(!1), [o, a] = Bt(te(n), {
    context: n
  }), s = it(() => Jt(o, a));
  return Ht(() => {
    s().isPresent && i(!0);
  }), it(() => ({
    isUnmounted: !s().isPresent && !r() && e.lazyMount || e.unmountOnExit && !s().isPresent && r(),
    isPresent: s().isPresent,
    presenceProps: {
      ref: s().setNode,
      hidden: !s().isPresent,
      "data-state": n.present ? "open" : "closed"
    }
  }));
}, [fn, dn] = yt({
  hookName: "usePresenceContext",
  providerName: "<PresenceProvider />"
});
var q = (t, e, n, r) => {
  const i = typeof t == "function" ? t() : t;
  return i == null || i.addEventListener(e, n, r), () => {
    i == null || i.removeEventListener(e, n, r);
  };
}, ne = (t) => t.button === 2 || re() && t.ctrlKey && t.button === 0, re = () => /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
function ot(t, e, n) {
  if (!t)
    return;
  const r = t.ownerDocument.defaultView || window, i = new r.CustomEvent(e, n);
  return t.dispatchEvent(i);
}
var ie = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
}, st = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
function hn(t, e = {}) {
  const { dir: n = "ltr", orientation: r = "horizontal" } = e;
  let { key: i } = t;
  return i = ie[i] ?? i, n === "rtl" && r === "horizontal" && i in st && (i = st[i]), i;
}
function Pt(t) {
  const e = w(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = L(t), o = i ? t.offsetWidth : n, a = i ? t.offsetHeight : r, s = W(n) !== o || W(r) !== a;
  return s && (n = o, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function J(t) {
  return P(t) ? t : t.contextElement;
}
function S(t) {
  const e = J(t);
  if (!L(e))
    return O(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Pt(e);
  let a = (o ? W(n.width) : n.width) / r, s = (o ? W(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const oe = /* @__PURE__ */ O(0);
function Ot(t) {
  const e = N(t);
  return !Et() || !e.visualViewport ? oe : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function se(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== N(t) ? !1 : e;
}
function T(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), o = J(t);
  let a = O(1);
  e && (r ? P(r) && (a = S(r)) : a = S(t));
  const s = se(o, n, r) ? Ot(o) : O(0);
  let c = (i.left + s.x) / a.x, l = (i.top + s.y) / a.y, d = i.width / a.x, h = i.height / a.y;
  if (o) {
    const f = N(o), g = r && P(r) ? N(r) : r;
    let p = f, u = p.frameElement;
    for (; u && r && g !== p; ) {
      const m = S(u), y = u.getBoundingClientRect(), v = w(u), E = y.left + (u.clientLeft + parseFloat(v.paddingLeft)) * m.x, C = y.top + (u.clientTop + parseFloat(v.paddingTop)) * m.y;
      c *= m.x, l *= m.y, d *= m.x, h *= m.y, c += E, l += C, p = N(u), u = p.frameElement;
    }
  }
  return bt({
    width: d,
    height: h,
    x: c,
    y: l
  });
}
const ae = [":popover-open", ":modal"];
function Lt(t) {
  return ae.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function ce(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: i
  } = t;
  const o = i === "fixed", a = A(r), s = e ? Lt(e.floating) : !1;
  if (r === a || s && o)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = O(1);
  const d = O(0), h = L(r);
  if ((h || !h && !o) && ((B(r) !== "body" || G(a)) && (c = F(r)), L(r))) {
    const f = T(r);
    l = S(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y
  };
}
function le(t) {
  return Array.from(t.getClientRects());
}
function At(t) {
  return T(A(t)).left + F(t).scrollLeft;
}
function ue(t) {
  const e = A(t), n = F(t), r = t.ownerDocument.body, i = R(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), o = R(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + At(t);
  const s = -n.scrollTop;
  return w(r).direction === "rtl" && (a += R(e.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function fe(t, e) {
  const n = N(t), r = A(t), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    const l = Et();
    (!l || l && e === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function de(t, e) {
  const n = T(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = L(t) ? S(t) : O(1), a = t.clientWidth * o.x, s = t.clientHeight * o.y, c = i * o.x, l = r * o.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function at(t, e, n) {
  let r;
  if (e === "viewport")
    r = fe(t, n);
  else if (e === "document")
    r = ue(A(t));
  else if (P(e))
    r = de(e, n);
  else {
    const i = Ot(t);
    r = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return bt(r);
}
function Nt(t, e) {
  const n = Y(t);
  return n === e || !P(n) || xt(n) ? !1 : w(n).position === "fixed" || Nt(n, e);
}
function he(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = U(t, [], !1).filter((s) => P(s) && B(s) !== "body"), i = null;
  const o = w(t).position === "fixed";
  let a = o ? Y(t) : t;
  for (; P(a) && !xt(a); ) {
    const s = w(a), c = wt(a);
    !c && s.position === "fixed" && (i = null), (o ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || G(a) && !c && Nt(t, a)) ? r = r.filter((d) => d !== a) : i = s, a = Y(a);
  }
  return e.set(t, r), r;
}
function me(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...n === "clippingAncestors" ? he(e, this._c) : [].concat(n), r], s = a[0], c = a.reduce((l, d) => {
    const h = at(e, d, i);
    return l.top = R(h.top, l.top), l.right = K(h.right, l.right), l.bottom = K(h.bottom, l.bottom), l.left = R(h.left, l.left), l;
  }, at(e, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ge(t) {
  const {
    width: e,
    height: n
  } = Pt(t);
  return {
    width: e,
    height: n
  };
}
function pe(t, e, n) {
  const r = L(e), i = A(e), o = n === "fixed", a = T(t, !0, o, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = O(0);
  if (r || !r && !o)
    if ((B(e) !== "body" || G(i)) && (s = F(e)), r) {
      const h = T(e, !0, o, e);
      c.x = h.x + e.clientLeft, c.y = h.y + e.clientTop;
    } else i && (c.x = At(i));
  const l = a.left + s.scrollLeft - c.x, d = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: d,
    width: a.width,
    height: a.height
  };
}
function ct(t, e) {
  return !L(t) || w(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Tt(t, e) {
  const n = N(t);
  if (!L(t) || Lt(t))
    return n;
  let r = ct(t, e);
  for (; r && Xt(r) && w(r).position === "static"; )
    r = ct(r, e);
  return r && (B(r) === "html" || B(r) === "body" && w(r).position === "static" && !wt(r)) ? n : r || jt(t) || n;
}
const ye = async function(t) {
  const e = this.getOffsetParent || Tt, n = this.getDimensions;
  return {
    reference: pe(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(t.floating)
    }
  };
};
function ve(t) {
  return w(t).direction === "rtl";
}
const be = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ce,
  getDocumentElement: A,
  getClippingRect: me,
  getOffsetParent: Tt,
  getElementRects: ye,
  getClientRects: le,
  getDimensions: ge,
  getScale: S,
  isElement: P,
  isRTL: ve
};
function Ee(t, e) {
  let n = null, r;
  const i = A(t);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), o();
    const {
      left: l,
      top: d,
      width: h,
      height: f
    } = t.getBoundingClientRect();
    if (s || e(), !h || !f)
      return;
    const g = z(d), p = z(i.clientWidth - (l + h)), u = z(i.clientHeight - (d + f)), m = z(l), v = {
      rootMargin: -g + "px " + -p + "px " + -u + "px " + -m + "px",
      threshold: R(0, K(1, c)) || 1
    };
    let E = !0;
    function C(et) {
      const H = et[0].intersectionRatio;
      if (H !== c) {
        if (!E)
          return a();
        H ? a(!1, H) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(t);
  }
  return a(!0), o;
}
function we(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = J(t), d = i || o ? [...l ? U(l) : [], ...U(e)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", n, {
      passive: !0
    }), o && y.addEventListener("resize", n);
  });
  const h = l && s ? Ee(l, n) : null;
  let f = -1, g = null;
  a && (g = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === l && g && (g.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var E;
      (E = g) == null || E.observe(e);
    })), n();
  }), l && !c && g.observe(l), g.observe(e));
  let p, u = c ? T(t) : null;
  c && m();
  function m() {
    const y = T(t);
    u && (y.x !== u.x || y.y !== u.y || y.width !== u.width || y.height !== u.height) && n(), u = y, p = requestAnimationFrame(m);
  }
  return n(), () => {
    var y;
    d.forEach((v) => {
      i && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n);
    }), h == null || h(), (y = g) == null || y.disconnect(), g = null, c && cancelAnimationFrame(p);
  };
}
const xe = Vt, Pe = Ut, Oe = Kt, Le = Yt, Ae = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: be,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return qt(t, e, {
    ...i,
    platform: o
  });
};
function lt(t = 0, e = 0, n = 0, r = 0) {
  if (typeof DOMRect == "function")
    return new DOMRect(t, e, n, r);
  const i = {
    x: t,
    y: e,
    width: n,
    height: r,
    top: e,
    right: t + n,
    bottom: e + r,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function Ne(t) {
  if (!t)
    return lt();
  const { x: e, y: n, width: r, height: i } = t;
  return lt(e, n, r, i);
}
function Te(t, e) {
  return {
    contextElement: X(t) ? t : void 0,
    getBoundingClientRect: () => {
      const n = t, r = e == null ? void 0 : e(n);
      return r || !n ? Ne(r) : n.getBoundingClientRect();
    }
  };
}
var D = (t) => ({ variable: t, reference: `var(${t})` }), x = {
  arrowSize: D("--arrow-size"),
  arrowSizeHalf: D("--arrow-size-half"),
  arrowBg: D("--arrow-background"),
  transformOrigin: D("--transform-origin"),
  arrowOffset: D("--arrow-offset")
}, Ce = (t) => ({
  top: "bottom center",
  "top-start": t ? `${t.x}px bottom` : "left bottom",
  "top-end": t ? `${t.x}px bottom` : "right bottom",
  bottom: "top center",
  "bottom-start": t ? `${t.x}px top` : "top left",
  "bottom-end": t ? `${t.x}px top` : "top right",
  left: "right center",
  "left-start": t ? `right ${t.y}px` : "right top",
  "left-end": t ? `right ${t.y}px` : "right bottom",
  right: "left center",
  "right-start": t ? `left ${t.y}px` : "left top",
  "right-end": t ? `left ${t.y}px` : "left bottom"
}), Re = {
  name: "transformOrigin",
  fn({ placement: t, elements: e, middlewareData: n }) {
    const { arrow: r } = n, i = Ce(r)[t], { floating: o } = e;
    return o.style.setProperty(x.transformOrigin.variable, i), {
      data: { transformOrigin: i }
    };
  }
}, Se = {
  name: "rects",
  fn({ rects: t }) {
    return {
      data: t
    };
  }
}, ke = (t) => {
  if (t)
    return {
      name: "shiftArrow",
      fn({ placement: e, middlewareData: n }) {
        if (!n.arrow)
          return {};
        const { x: r, y: i } = n.arrow, o = e.split("-")[0];
        return Object.assign(t.style, {
          left: r != null ? `${r}px` : "",
          top: i != null ? `${i}px` : "",
          [o]: `calc(100% + ${x.arrowOffset.reference})`
        }), {};
      }
    };
};
function De(t) {
  const [e, n] = t.split("-");
  return { side: e, align: n, hasAlign: n != null };
}
var Ie = {
  strategy: "absolute",
  placement: "bottom",
  listeners: !0,
  gutter: 8,
  flip: !0,
  slide: !0,
  overlap: !1,
  sameWidth: !1,
  fitViewport: !1,
  overflowPadding: 8,
  arrowPadding: 4
};
function ut(t, e) {
  const n = t.devicePixelRatio || 1;
  return Math.round(e * n) / n;
}
function Ct(t) {
  return Wt(t.boundary);
}
function Be(t, e) {
  if (t)
    return Le({
      element: t,
      padding: e.arrowPadding
    });
}
function _e(t, e) {
  if (!zt(e.offset ?? e.gutter))
    return Gt(({ placement: n }) => {
      var s;
      const r = ((t == null ? void 0 : t.clientHeight) || 0) / 2, i = ((s = e.offset) == null ? void 0 : s.mainAxis) ?? e.gutter, o = typeof i == "number" ? i + r : i ?? r, { hasAlign: a } = De(n);
      return Mt({
        crossAxis: a ? e.shift : void 0,
        mainAxis: o,
        alignmentAxis: e.shift
      });
    });
}
function ze(t) {
  if (t.flip)
    return Pe({
      boundary: Ct(t),
      padding: t.overflowPadding,
      fallbackPlacements: t.flip === !0 ? void 0 : t.flip
    });
}
function Me(t) {
  if (!(!t.slide && !t.overlap))
    return xe({
      boundary: Ct(t),
      mainAxis: t.slide,
      crossAxis: t.overlap,
      padding: t.overflowPadding
    });
}
function We(t) {
  return Oe({
    padding: t.overflowPadding,
    apply({ elements: e, rects: n, availableHeight: r, availableWidth: i }) {
      const o = e.floating, a = Math.round(n.reference.width);
      i = Math.floor(i), r = Math.floor(r), o.style.setProperty("--reference-width", `${a}px`), o.style.setProperty("--available-width", `${i}px`), o.style.setProperty("--available-height", `${r}px`);
    }
  });
}
function $e(t) {
  return t ? t === !0 ? { ancestorResize: !0, ancestorScroll: !0, elementResize: !0, layoutShift: !0 } : t : {};
}
function Fe(t, e, n = {}) {
  const r = Te(t, n.getAnchorRect);
  if (!e || !r)
    return;
  const i = Object.assign({}, Ie, n), o = e.querySelector("[data-part=arrow]"), a = [
    _e(o, i),
    ze(i),
    Me(i),
    Be(o, i),
    ke(o),
    Re,
    We(i),
    Se
  ], { placement: s, strategy: c, onComplete: l, onPositioned: d } = i, h = async () => {
    if (!r || !e)
      return;
    const u = await Ae(r, e, {
      placement: s,
      middleware: a,
      strategy: c
    });
    l == null || l(u), d == null || d({ placed: !0 });
    const m = vt(e), y = ut(m, u.x), v = ut(m, u.y);
    e.style.setProperty("--x", `${y}px`), e.style.setProperty("--y", `${v}px`);
    const E = e.firstElementChild;
    if (E) {
      const C = m.getComputedStyle(E).zIndex;
      e.style.setProperty("--z-index", C);
    }
  }, f = async () => {
    n.updatePosition ? (await n.updatePosition({ updatePosition: h }), d == null || d({ placed: !0 })) : await h();
  }, g = $e(i.listeners), p = i.listeners ? we(r, e, f, g) : _t;
  return f(), () => {
    p == null || p(), d == null || d({ placed: !1 });
  };
}
function mn(t, e, n = {}) {
  const { defer: r, ...i } = n, o = r ? $ : (s) => s(), a = [];
  return a.push(
    o(() => {
      const s = typeof t == "function" ? t() : t, c = typeof e == "function" ? e() : e;
      a.push(Fe(s, c, i));
    })
  ), () => {
    a.forEach((s) => s == null ? void 0 : s());
  };
}
var He = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function gn(t = {}) {
  const { placement: e, sameWidth: n, fitViewport: r, strategy: i = "absolute" } = t;
  return {
    arrow: {
      position: "absolute",
      width: x.arrowSize.reference,
      height: x.arrowSize.reference,
      [x.arrowSizeHalf.variable]: `calc(${x.arrowSize.reference} / 2)`,
      [x.arrowOffset.variable]: `calc(${x.arrowSizeHalf.reference} * -1)`
    },
    arrowTip: {
      transform: e ? He[e.split("-")[0]] : void 0,
      background: x.arrowBg.reference,
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: "inherit"
    },
    floating: {
      position: i,
      isolation: "isolate",
      minWidth: n ? void 0 : "max-content",
      width: n ? "var(--reference-width)" : void 0,
      maxWidth: r ? "var(--available-width)" : void 0,
      maxHeight: r ? "var(--available-height)" : void 0,
      top: "0px",
      left: "0px",
      // move off-screen if placement is not defined
      transform: e ? "translate3d(var(--x), var(--y), 0)" : "translate3d(0, -100vh, 0)",
      zIndex: "var(--z-index)"
    }
  };
}
var Q = (t) => typeof t == "object" && t !== null && t.nodeType === 1, Rt = (t) => Q(t) && t.tagName === "IFRAME";
function Ve(t) {
  return Q(t) ? t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0 : !1;
}
function Ue(t) {
  return parseInt(t.getAttribute("tabindex") || "0", 10) < 0;
}
var Z = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type", Ke = (t, e = !1) => {
  if (!t)
    return [];
  const n = Array.from(t.querySelectorAll(Z));
  (e == !0 || e == "if-empty" && n.length === 0) && Q(t) && _(t) && n.unshift(t);
  const i = n.filter(_);
  return i.forEach((o, a) => {
    if (Rt(o) && o.contentDocument) {
      const s = o.contentDocument.body;
      i.splice(a, 1, ...Ke(s));
    }
  }), i;
};
function _(t) {
  return !t || t.closest("[inert]") ? !1 : t.matches(Z) && Ve(t);
}
function tt(t, e) {
  if (!t)
    return [];
  const n = Array.from(t.querySelectorAll(Z)), r = n.filter(ft);
  return e && ft(t) && r.unshift(t), r.forEach((i, o) => {
    if (Rt(i) && i.contentDocument) {
      const a = i.contentDocument.body, s = tt(a);
      r.splice(o, 1, ...s);
    }
  }), !r.length && e ? n : r;
}
function ft(t) {
  return t != null && t.tabIndex > 0 ? !0 : _(t) && !Ue(t);
}
function Ye(t, e) {
  const n = tt(t, e), r = n[0] || null, i = n[n.length - 1] || null;
  return [r, i];
}
function qe(t, e) {
  const n = tt(t), r = (t == null ? void 0 : t.ownerDocument) || document, i = e ?? r.activeElement;
  if (!i)
    return null;
  const o = n.indexOf(i);
  return n[o + 1] || null;
}
function Xe(t, e = {}) {
  const { triggerElement: n, onFocus: r } = e, i = (t == null ? void 0 : t.ownerDocument) || document, o = i.body;
  function a(s) {
    if (s.key !== "Tab")
      return;
    let c = null;
    const [l, d] = Ye(t, !0), h = !l && !d;
    s.shiftKey && (i.activeElement === l || h) ? c = n : !s.shiftKey && i.activeElement === n ? c = l : !s.shiftKey && (i.activeElement === d || h) && (c = qe(o, n)), c && (s.preventDefault(), (r == null ? void 0 : r(c)) ?? c.focus());
  }
  return i == null || i.addEventListener("keydown", a, !0), () => {
    i == null || i.removeEventListener("keydown", a, !0);
  };
}
function pn(t, e) {
  const { defer: n, triggerElement: r, ...i } = e, o = n ? $ : (s) => s(), a = [];
  return a.push(
    o(() => {
      const s = typeof t == "function" ? t() : t, c = typeof r == "function" ? r() : r;
      a.push(Xe(s, { triggerElement: c, ...i }));
    })
  ), () => {
    a.forEach((s) => s == null ? void 0 : s());
  };
}
function je(t) {
  const e = {
    each(n) {
      var r;
      for (let i = 0; i < ((r = t.frames) == null ? void 0 : r.length); i += 1) {
        const o = t.frames[i];
        o && n(o);
      }
    },
    addEventListener(n, r, i) {
      return e.each((o) => {
        try {
          o.document.addEventListener(n, r, i);
        } catch {
        }
      }), () => {
        try {
          e.removeEventListener(n, r, i);
        } catch {
        }
      };
    },
    removeEventListener(n, r, i) {
      e.each((o) => {
        try {
          o.document.removeEventListener(n, r, i);
        } catch {
        }
      });
    }
  };
  return e;
}
var dt = "pointerdown.outside", ht = "focus.outside";
function Ge(t) {
  const e = t.composedPath() ?? [t.target];
  for (const n of e)
    if (X(n) && _(n))
      return !0;
  return !1;
}
var St = (t) => "clientY" in t;
function Je(t, e) {
  if (!St(e) || !t)
    return !1;
  const n = t.getBoundingClientRect();
  return n.width === 0 || n.height === 0 ? !1 : n.top <= e.clientY && e.clientY <= n.top + n.height && n.left <= e.clientX && e.clientX <= n.left + n.width;
}
function Qe(t) {
  const e = I(t);
  if (!e || !St(t))
    return !1;
  const r = e.scrollHeight > e.clientHeight && t.clientX > e.clientWidth, o = e.scrollWidth > e.clientWidth && t.clientY > e.clientHeight;
  return r || o;
}
function Ze(t, e) {
  const { exclude: n, onFocusOutside: r, onPointerDownOutside: i, onInteractOutside: o } = e;
  if (!t)
    return;
  const a = j(t), s = vt(t), c = je(s);
  function l(u) {
    const m = I(u);
    return !X(m) || M(t, m) || Je(t, u) || Qe(u) ? !1 : !(n != null && n(m));
  }
  let d;
  function h(u) {
    function m() {
      if (!(!t || !l(u))) {
        if (i || o) {
          const y = rt(i, o);
          t.addEventListener(dt, y, { once: !0 });
        }
        ot(t, dt, {
          bubbles: !1,
          cancelable: !0,
          detail: {
            originalEvent: u,
            contextmenu: ne(u),
            focusable: Ge(u)
          }
        });
      }
    }
    u.pointerType === "touch" ? (c.removeEventListener("click", m), a.removeEventListener("click", m), d = m, a.addEventListener("click", m, { once: !0 }), c.addEventListener("click", m, { once: !0 })) : m();
  }
  const f = /* @__PURE__ */ new Set(), g = setTimeout(() => {
    f.add(c.addEventListener("pointerdown", h, !0)), f.add(q(a, "pointerdown", h, !0));
  }, 0);
  function p(u) {
    if (!(!t || !l(u))) {
      if (r || o) {
        const m = rt(r, o);
        t.addEventListener(ht, m, { once: !0 });
      }
      ot(t, ht, {
        bubbles: !1,
        cancelable: !0,
        detail: {
          originalEvent: u,
          contextmenu: !1,
          focusable: _(I(u))
        }
      });
    }
  }
  return f.add(q(a, "focusin", p, !0)), f.add(c.addEventListener("focusin", p, !0)), () => {
    clearTimeout(g), d && (c.removeEventListener("click", d), a.removeEventListener("click", d)), f.forEach((u) => u());
  };
}
function tn(t, e) {
  const { defer: n } = e, r = n ? $ : (o) => o(), i = [];
  return i.push(
    r(() => {
      const o = typeof t == "function" ? t() : t;
      i.push(Ze(o, e));
    })
  ), () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
function en(t, e) {
  const n = (r) => {
    r.key === "Escape" && (e == null || e(r));
  };
  return q(j(t), "keydown", n);
}
var b = {
  layers: [],
  branches: [],
  count() {
    return this.layers.length;
  },
  pointerBlockingLayers() {
    return this.layers.filter((t) => t.pointerBlocking);
  },
  topMostPointerBlockingLayer() {
    return [...this.pointerBlockingLayers()].slice(-1)[0];
  },
  hasPointerBlockingLayer() {
    return this.pointerBlockingLayers().length > 0;
  },
  isBelowPointerBlockingLayer(t) {
    var r;
    const e = this.indexOf(t), n = this.topMostPointerBlockingLayer() ? this.indexOf((r = this.topMostPointerBlockingLayer()) == null ? void 0 : r.node) : -1;
    return e < n;
  },
  isTopMost(t) {
    const e = this.layers[this.count() - 1];
    return (e == null ? void 0 : e.node) === t;
  },
  getNestedLayers(t) {
    return Array.from(this.layers).slice(this.indexOf(t) + 1);
  },
  isInNestedLayer(t, e) {
    return this.getNestedLayers(t).some((n) => M(n.node, e));
  },
  isInBranch(t) {
    return Array.from(this.branches).some((e) => M(e, t));
  },
  add(t) {
    this.layers.push(t);
  },
  addBranch(t) {
    this.branches.push(t);
  },
  remove(t) {
    const e = this.indexOf(t);
    e < 0 || (e < this.count() - 1 && this.getNestedLayers(t).forEach((r) => r.dismiss()), this.layers.splice(e, 1));
  },
  removeBranch(t) {
    const e = this.branches.indexOf(t);
    e >= 0 && this.branches.splice(e, 1);
  },
  indexOf(t) {
    return this.layers.findIndex((e) => e.node === t);
  },
  dismiss(t) {
    var e;
    (e = this.layers[this.indexOf(t)]) == null || e.dismiss();
  },
  clear() {
    this.remove(this.layers[0].node);
  }
}, mt;
function gt() {
  b.layers.forEach(({ node: t }) => {
    t.style.pointerEvents = b.isBelowPointerBlockingLayer(t) ? "none" : "auto";
  });
}
function nn(t) {
  t.style.pointerEvents = "";
}
var V = "data-inert";
function rn(t) {
  const e = j(t);
  return b.hasPointerBlockingLayer() && !e.body.hasAttribute(V) && (mt = document.body.style.pointerEvents, e.body.style.pointerEvents = "none", e.body.setAttribute(V, "")), () => {
    b.hasPointerBlockingLayer() || (e.body.style.pointerEvents = mt, e.body.removeAttribute(V), e.body.style.length === 0 && e.body.removeAttribute("style"));
  };
}
function on(t, e) {
  if (!t) {
    $t("[@zag-js/dismissable] node is `null` or `undefined`");
    return;
  }
  const { onDismiss: n, pointerBlocking: r, exclude: i, debug: o } = e, a = { dismiss: n, node: t, pointerBlocking: r };
  b.add(a), gt();
  function s(f) {
    var p, u;
    const g = I(f.detail.originalEvent);
    b.isBelowPointerBlockingLayer(t) || b.isInBranch(g) || ((p = e.onPointerDownOutside) == null || p.call(e, f), (u = e.onInteractOutside) == null || u.call(e, f), !f.defaultPrevented && (o && console.log("onPointerDownOutside:", f.detail.originalEvent), n == null || n()));
  }
  function c(f) {
    var p, u;
    const g = I(f.detail.originalEvent);
    b.isInBranch(g) || ((p = e.onFocusOutside) == null || p.call(e, f), (u = e.onInteractOutside) == null || u.call(e, f), !f.defaultPrevented && (o && console.log("onFocusOutside:", f.detail.originalEvent), n == null || n()));
  }
  function l(f) {
    var g;
    b.isTopMost(t) && ((g = e.onEscapeKeyDown) == null || g.call(e, f), !f.defaultPrevented && n && (f.preventDefault(), n()));
  }
  function d(f) {
    if (!t)
      return !1;
    const g = typeof i == "function" ? i() : i;
    return (Array.isArray(g) ? g : [g]).some((u) => M(u, f)) || b.isInNestedLayer(t, f);
  }
  const h = [
    r ? rn(t) : void 0,
    en(t, l),
    tn(t, { exclude: d, onFocusOutside: c, onPointerDownOutside: s })
  ];
  return () => {
    b.remove(t), gt(), nn(t), h.forEach((f) => f == null ? void 0 : f());
  };
}
function yn(t, e) {
  const { defer: n } = e, r = n ? $ : (o) => o(), i = [];
  return i.push(
    r(() => {
      const o = typeof t == "function" ? t() : t;
      i.push(on(o, e));
    })
  ), () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
export {
  fn as P,
  Ke as a,
  mn as b,
  un as c,
  hn as d,
  gn as g,
  pn as p,
  ln as s,
  yn as t,
  dn as u
};
