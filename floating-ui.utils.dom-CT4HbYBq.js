const F = Math.min, L = Math.max, bt = Math.round, vt = Math.floor, At = (t) => ({
  x: t,
  y: t
}), lt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, at = {
  start: "end",
  end: "start"
};
function _(t, e, n) {
  return L(t, F(e, n));
}
function M(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function T(t) {
  return t.split("-")[0];
}
function N(t) {
  return t.split("-")[1];
}
function I(t) {
  return t === "x" ? "y" : "x";
}
function X(t) {
  return t === "y" ? "height" : "width";
}
function W(t) {
  return ["top", "bottom"].includes(T(t)) ? "y" : "x";
}
function q(t) {
  return I(W(t));
}
function ft(t, e, n) {
  n === void 0 && (n = !1);
  const o = N(t), s = q(t), i = X(s);
  let r = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (r = Y(r)), [r, Y(r)];
}
function mt(t) {
  const e = Y(t);
  return [$(t), e, $(e)];
}
function $(t) {
  return t.replace(/start|end/g, (e) => at[e]);
}
function ut(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? i : r;
    default:
      return [];
  }
}
function dt(t, e, n, o) {
  const s = N(t);
  let i = ut(T(t), n === "start", o);
  return s && (i = i.map((r) => r + "-" + s), e && (i = i.concat(i.map($)))), i;
}
function Y(t) {
  return t.replace(/left|right|bottom|top/g, (e) => lt[e]);
}
function gt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function tt(t) {
  return typeof t != "number" ? gt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function J(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Q(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const i = W(e), r = q(e), m = X(r), l = T(e), g = i === "y", d = o.x + o.width / 2 - s.width / 2, f = o.y + o.height / 2 - s.height / 2, u = o[m] / 2 - s[m] / 2;
  let c;
  switch (l) {
    case "top":
      c = {
        x: d,
        y: o.y - s.height
      };
      break;
    case "bottom":
      c = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      c = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      c = {
        x: o.x - s.width,
        y: f
      };
      break;
    default:
      c = {
        x: o.x,
        y: o.y
      };
  }
  switch (N(e)) {
    case "start":
      c[r] -= u * (n && g ? -1 : 1);
      break;
    case "end":
      c[r] += u * (n && g ? -1 : 1);
      break;
  }
  return c;
}
const Pt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: r
  } = n, m = i.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let g = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: d,
    y: f
  } = Q(g, o, l), u = o, c = {}, a = 0;
  for (let p = 0; p < m.length; p++) {
    const {
      name: w,
      fn: h
    } = m[p], {
      x: y,
      y: x,
      data: A,
      reset: b
    } = await h({
      x: d,
      y: f,
      initialPlacement: o,
      placement: u,
      strategy: s,
      middlewareData: c,
      rects: g,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = y ?? d, f = x ?? f, c = {
      ...c,
      [w]: {
        ...c[w],
        ...A
      }
    }, b && a <= 50) {
      a++, typeof b == "object" && (b.placement && (u = b.placement), b.rects && (g = b.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : b.rects), {
        x: d,
        y: f
      } = Q(g, u, l)), p = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: u,
    strategy: s,
    middlewareData: c
  };
};
async function K(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: i,
    rects: r,
    elements: m,
    strategy: l
  } = t, {
    boundary: g = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: u = !1,
    padding: c = 0
  } = M(e, t), a = tt(c), w = m[u ? f === "floating" ? "reference" : "floating" : f], h = J(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(m.floating)),
    boundary: g,
    rootBoundary: d,
    strategy: l
  })), y = f === "floating" ? {
    ...r.floating,
    x: o,
    y: s
  } : r.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(m.floating)), A = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = J(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (h.top - b.top + a.top) / A.y,
    bottom: (b.bottom - h.bottom + a.bottom) / A.y,
    left: (h.left - b.left + a.left) / A.x,
    right: (b.right - h.right + a.right) / A.x
  };
}
const Ot = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: i,
      platform: r,
      elements: m,
      middlewareData: l
    } = e, {
      element: g,
      padding: d = 0
    } = M(t, e) || {};
    if (g == null)
      return {};
    const f = tt(d), u = {
      x: n,
      y: o
    }, c = q(s), a = X(c), p = await r.getDimensions(g), w = c === "y", h = w ? "top" : "left", y = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", A = i.reference[a] + i.reference[c] - u[c] - i.floating[a], b = u[c] - i.reference[c], v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(g));
    let P = v ? v[x] : 0;
    (!P || !await (r.isElement == null ? void 0 : r.isElement(v))) && (P = m.floating[x] || i.floating[a]);
    const C = A / 2 - b / 2, D = P / 2 - p[a] / 2 - 1, B = F(f[h], D), H = F(f[y], D), S = B, j = P - p[a] - H, O = P / 2 - p[a] / 2 + C, R = _(S, O, j), k = !l.arrow && N(s) != null && O != R && i.reference[a] / 2 - (O < S ? B : H) - p[a] / 2 < 0, E = k ? O < S ? O - S : O - j : 0;
    return {
      [c]: u[c] + E,
      data: {
        [c]: R,
        centerOffset: O - R - E,
        ...k && {
          alignmentOffset: E
        }
      },
      reset: k
    };
  }
}), St = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: s,
        middlewareData: i,
        rects: r,
        initialPlacement: m,
        platform: l,
        elements: g
      } = e, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: u,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: p = !0,
        ...w
      } = M(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = T(s), y = T(m) === m, x = await (l.isRTL == null ? void 0 : l.isRTL(g.floating)), A = u || (y || !p ? [Y(m)] : mt(m));
      !u && a !== "none" && A.push(...dt(m, p, a, x));
      const b = [m, ...A], v = await K(e, w), P = [];
      let C = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (d && P.push(v[h]), f) {
        const S = ft(s, r, x);
        P.push(v[S[0]], v[S[1]]);
      }
      if (C = [...C, {
        placement: s,
        overflows: P
      }], !P.every((S) => S <= 0)) {
        var D, B;
        const S = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, j = b[S];
        if (j)
          return {
            data: {
              index: S,
              overflows: C
            },
            reset: {
              placement: j
            }
          };
        let O = (B = C.filter((R) => R.overflows[0] <= 0).sort((R, k) => R.overflows[1] - k.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!O)
          switch (c) {
            case "bestFit": {
              var H;
              const R = (H = C.map((k) => [k.placement, k.overflows.filter((E) => E > 0).reduce((E, ct) => E + ct, 0)]).sort((k, E) => k[1] - E[1])[0]) == null ? void 0 : H[0];
              R && (O = R);
              break;
            }
            case "initialPlacement":
              O = m;
              break;
          }
        if (s !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
async function pt(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), r = T(n), m = N(n), l = W(n) === "y", g = ["left", "top"].includes(r) ? -1 : 1, d = i && l ? -1 : 1, f = M(e, t);
  let {
    mainAxis: u,
    crossAxis: c,
    alignmentAxis: a
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return m && typeof a == "number" && (c = m === "end" ? a * -1 : a), l ? {
    x: c * d,
    y: u * g
  } : {
    x: u * g,
    y: c * d
  };
}
const Ct = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: s,
        y: i,
        placement: r,
        middlewareData: m
      } = e, l = await pt(e, t);
      return r === ((n = m.offset) == null ? void 0 : n.placement) && (o = m.arrow) != null && o.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: r
        }
      };
    }
  };
}, Rt = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: s
      } = e, {
        mainAxis: i = !0,
        crossAxis: r = !1,
        limiter: m = {
          fn: (w) => {
            let {
              x: h,
              y
            } = w;
            return {
              x: h,
              y
            };
          }
        },
        ...l
      } = M(t, e), g = {
        x: n,
        y: o
      }, d = await K(e, l), f = W(T(s)), u = I(f);
      let c = g[u], a = g[f];
      if (i) {
        const w = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", y = c + d[w], x = c - d[h];
        c = _(y, c, x);
      }
      if (r) {
        const w = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", y = a + d[w], x = a - d[h];
        a = _(y, a, x);
      }
      const p = m.fn({
        ...e,
        [u]: c,
        [f]: a
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, kt = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: o,
        platform: s,
        elements: i
      } = e, {
        apply: r = () => {
        },
        ...m
      } = M(t, e), l = await K(e, m), g = T(n), d = N(n), f = W(n) === "y", {
        width: u,
        height: c
      } = o.floating;
      let a, p;
      g === "top" || g === "bottom" ? (a = g, p = d === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (p = g, a = d === "end" ? "top" : "bottom");
      const w = c - l[a], h = u - l[p], y = !e.middlewareData.shift;
      let x = w, A = h;
      if (f) {
        const v = u - l.left - l.right;
        A = d || y ? F(h, v) : v;
      } else {
        const v = c - l.top - l.bottom;
        x = d || y ? F(w, v) : v;
      }
      if (y && !d) {
        const v = L(l.left, 0), P = L(l.right, 0), C = L(l.top, 0), D = L(l.bottom, 0);
        f ? A = u - 2 * (v !== 0 || P !== 0 ? v + P : L(l.left, l.right)) : x = c - 2 * (C !== 0 || D !== 0 ? C + D : L(l.top, l.bottom));
      }
      await r({
        ...e,
        availableWidth: A,
        availableHeight: x
      });
      const b = await s.getDimensions(i.floating);
      return u !== b.width || c !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function G(t) {
  return et(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function V(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function wt(t) {
  var e;
  return (e = (et(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function et(t) {
  return t instanceof Node || t instanceof V(t).Node;
}
function xt(t) {
  return t instanceof Element || t instanceof V(t).Element;
}
function nt(t) {
  return t instanceof HTMLElement || t instanceof V(t).HTMLElement;
}
function U(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof V(t).ShadowRoot;
}
function ot(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = st(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Et(t) {
  return ["table", "td", "th"].includes(G(t));
}
function ht(t) {
  const e = yt(), n = st(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Dt(t) {
  let e = z(t);
  for (; nt(e) && !it(e); ) {
    if (ht(e))
      return e;
    e = z(e);
  }
  return null;
}
function yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function it(t) {
  return ["html", "body", "#document"].includes(G(t));
}
function st(t) {
  return V(t).getComputedStyle(t);
}
function Tt(t) {
  return xt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function z(t) {
  if (G(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    U(t) && t.host || // Fallback.
    wt(t)
  );
  return U(e) ? e.host : e;
}
function rt(t) {
  const e = z(t);
  return it(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : nt(e) && ot(e) ? e : rt(e);
}
function Z(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const s = rt(t), i = s === ((o = t.ownerDocument) == null ? void 0 : o.body), r = V(s);
  return i ? e.concat(r, r.visualViewport || [], ot(s) ? s : [], r.frameElement && n ? Z(r.frameElement) : []) : e.concat(s, Z(s, [], n));
}
export {
  Ct as A,
  V as a,
  st as b,
  At as c,
  wt as d,
  kt as e,
  St as f,
  Z as g,
  Ot as h,
  xt as i,
  nt as j,
  bt as k,
  yt as l,
  vt as m,
  Pt as n,
  L as o,
  F as p,
  G as q,
  J as r,
  Rt as s,
  ot as t,
  Tt as u,
  Et as v,
  ht as w,
  Dt as x,
  z as y,
  it as z
};
