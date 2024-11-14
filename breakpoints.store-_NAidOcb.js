import { m as b } from "./index-D6kvt-oB.js";
import { e as m, u as h, m as w, n as d, p as y, q as p, r as M, g as l, b as O, h as j, s as g, t as S, v } from "./R5675YMU-BY7cX9Th.js";
function x(r) {
  const e = { ...r }, n = { ...r }, c = {}, s = (t) => {
    let a = c[t];
    if (!a) {
      if (!p())
        return e[t];
      c[t] = a = O(e[t], { internal: !0 }), delete e[t];
    }
    return a[0]();
  };
  for (const t in r)
    Object.defineProperty(n, t, { get: () => s(t), enumerable: !0 });
  const o = (t, a) => {
    const i = c[t];
    if (i)
      return i[1](a);
    t in e && (e[t] = d(a, [e[t]]));
  };
  return [
    n,
    (t, a) => {
      if (w(t)) {
        const i = h(
          () => Object.entries(d(t, n))
        );
        y(() => {
          for (const [f, u] of i)
            o(f, () => u);
        });
      } else
        o(t, a);
      return n;
    }
  ];
}
function P(r, e) {
  return x(e());
}
function F(r, e, n) {
  const c = l(), s = m(r, e, n), o = { ...h(s) }, t = {};
  for (const a in o)
    Object.defineProperty(o, a, {
      get() {
        let i = t[a];
        if (!i) {
          if (!p())
            return s()[a];
          M(c, () => t[a] = i = m(() => s()[a]));
        }
        return i();
      },
      enumerable: !0
    });
  return o;
}
function q(r, e = l()) {
  let n = 0, c, s;
  return () => (n++, j(() => {
    n--, queueMicrotask(() => {
      !n && s && (s(), s = c = void 0);
    });
  }), s || g((o) => c = r(s = o), e), c);
}
function R(r) {
  const e = l(), n = q(r, e);
  return () => n();
}
function V(r, e = !1) {
  const n = window.matchMedia(r), [c, s] = v(e, () => n.matches);
  return b(n, "change", () => s(n.matches)), c;
}
function E(r) {
  return V("(prefers-color-scheme: dark)", r);
}
E.bind(void 0, !1);
var H = (r) => S(r).reduce(
  (e, [n]) => (e[n] = !1, e),
  {}
);
function L(r, e = {}) {
  const n = Object.defineProperty(
    e.fallbackState ?? H(r),
    "key",
    { enumerable: !1, get: () => Object.keys(r).pop() }
  );
  if (!window.matchMedia)
    return n;
  const { mediaFeature: c = "min-width", watchChange: s = !0 } = e, [o, t] = P(n, () => {
    const a = {};
    return S(r).forEach(([i, f]) => {
      const u = window.matchMedia(`(${c}: ${f})`);
      a[i] = u.matches, s && b(
        u,
        "change",
        (k) => t(i, k.matches)
      );
    }), a;
  });
  return Object.defineProperty(o, "key", {
    enumerable: !1,
    get: () => Object.keys(o).findLast((a) => o[a])
  });
}
const B = {
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, W = g(() => L(B));
export {
  W as a,
  B as b,
  F as c
};
