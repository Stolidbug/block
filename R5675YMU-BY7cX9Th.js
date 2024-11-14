const ke = {
  context: void 0,
  registry: void 0
}, se = (e, t) => e === t, L = Symbol("solid-proxy"), X = Symbol("solid-track"), U = {
  equals: se
};
let Y = te;
const S = 1, T = 2, J = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var a = null;
let R = null, le = null, h = null, d = null, A = null, q = 0;
function P(e, t) {
  const r = h, n = a, s = e.length === 0, i = t === void 0 ? n : t, l = s ? J : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, u = s ? e : () => e(() => w(() => F(l)));
  a = l, h = null;
  try {
    return x(u, !0);
  } finally {
    h = r, a = n;
  }
}
function Q(e, t) {
  t = t ? Object.assign({}, U, t) : U;
  const r = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), ee(r, s));
  return [Z.bind(r), n];
}
function ue(e, t, r) {
  const n = z(e, t, !1, S);
  C(n);
}
function ie(e, t, r) {
  Y = he;
  const n = z(e, t, !1, S);
  (!r || !r.render) && (n.user = !0), A ? A.push(n) : C(n);
}
function k(e, t, r) {
  r = r ? Object.assign({}, U, r) : U;
  const n = z(e, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, C(n), Z.bind(n);
}
function xe(e) {
  return x(e, !1);
}
function w(e) {
  if (h === null) return e();
  const t = h;
  h = null;
  try {
    return e();
  } finally {
    h = t;
  }
}
function Oe(e, t, r) {
  const n = Array.isArray(e);
  let s, i = r && r.defer;
  return (l) => {
    let u;
    if (n) {
      u = Array(e.length);
      for (let f = 0; f < e.length; f++) u[f] = e[f]();
    } else u = e();
    if (i)
      return i = !1, l;
    const o = w(() => t(u, s, l));
    return s = u, o;
  };
}
function Ee(e) {
  ie(() => w(e));
}
function _(e) {
  return a === null || (a.cleanups === null ? a.cleanups = [e] : a.cleanups.push(e)), e;
}
function je() {
  return h;
}
function oe() {
  return a;
}
function Pe(e, t) {
  const r = a, n = h;
  a = e, h = null;
  try {
    return x(t, !0);
  } catch (s) {
    H(s);
  } finally {
    a = r, h = n;
  }
}
function Ce(e, t) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: de(r),
    defaultValue: e
  };
}
function Ne(e) {
  return a && a.context && a.context[e.id] !== void 0 ? a.context[e.id] : e.defaultValue;
}
function ce(e) {
  const t = k(e), r = k(() => W(t()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
function Z() {
  if (this.sources && this.state)
    if (this.state === S) C(this);
    else {
      const e = d;
      d = null, x(() => M(this), !1), d = e;
    }
  if (h) {
    const e = this.observers ? this.observers.length : 0;
    h.sources ? (h.sources.push(this), h.sourceSlots.push(e)) : (h.sources = [this], h.sourceSlots = [e]), this.observers ? (this.observers.push(h), this.observerSlots.push(h.sources.length - 1)) : (this.observers = [h], this.observerSlots = [h.sources.length - 1]);
  }
  return this.value;
}
function ee(e, t, r) {
  let n = e.value;
  return (!e.comparator || !e.comparator(n, t)) && (e.value = t, e.observers && e.observers.length && x(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const i = e.observers[s], l = R && R.running;
      l && R.disposed.has(i), (l ? !i.tState : !i.state) && (i.pure ? d.push(i) : A.push(i), i.observers && ne(i)), l || (i.state = S);
    }
    if (d.length > 1e6)
      throw d = [], new Error();
  }, !1)), t;
}
function C(e) {
  if (!e.fn) return;
  F(e);
  const t = q;
  fe(
    e,
    e.value,
    t
  );
}
function fe(e, t, r) {
  let n;
  const s = a, i = h;
  h = a = e;
  try {
    n = e.fn(t);
  } catch (l) {
    return e.pure && (e.state = S, e.owned && e.owned.forEach(F), e.owned = null), e.updatedAt = r + 1, H(l);
  } finally {
    h = i, a = s;
  }
  (!e.updatedAt || e.updatedAt <= r) && (e.updatedAt != null && "observers" in e ? ee(e, n) : e.value = n, e.updatedAt = r);
}
function z(e, t, r, n = S, s) {
  const i = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: a,
    context: a ? a.context : null,
    pure: r
  };
  return a === null || a !== J && (a.owned ? a.owned.push(i) : a.owned = [i]), i;
}
function K(e) {
  if (e.state === 0) return;
  if (e.state === T) return M(e);
  if (e.suspense && w(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < q); )
    e.state && t.push(e);
  for (let r = t.length - 1; r >= 0; r--)
    if (e = t[r], e.state === S)
      C(e);
    else if (e.state === T) {
      const n = d;
      d = null, x(() => M(e, t[0]), !1), d = n;
    }
}
function x(e, t) {
  if (d) return e();
  let r = !1;
  t || (d = []), A ? r = !0 : A = [], q++;
  try {
    const n = e();
    return ae(r), n;
  } catch (n) {
    r || (A = null), d = null, H(n);
  }
}
function ae(e) {
  if (d && (te(d), d = null), e) return;
  const t = A;
  A = null, t.length && x(() => Y(t), !1);
}
function te(e) {
  for (let t = 0; t < e.length; t++) K(e[t]);
}
function he(e) {
  let t, r = 0;
  for (t = 0; t < e.length; t++) {
    const n = e[t];
    n.user ? e[r++] = n : K(n);
  }
  for (t = 0; t < r; t++) K(e[t]);
}
function M(e, t) {
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const n = e.sources[r];
    if (n.sources) {
      const s = n.state;
      s === S ? n !== t && (!n.updatedAt || n.updatedAt < q) && K(n) : s === T && M(n, t);
    }
  }
}
function ne(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const r = e.observers[t];
    r.state || (r.state = T, r.pure ? d.push(r) : A.push(r), r.observers && ne(r));
  }
}
function F(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const r = e.sources.pop(), n = e.sourceSlots.pop(), s = r.observers;
      if (s && s.length) {
        const i = s.pop(), l = r.observerSlots.pop();
        n < s.length && (i.sourceSlots[l] = n, s[n] = i, r.observerSlots[n] = l);
      }
    }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) F(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function ge(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function H(e, t = a) {
  throw ge(e);
}
function W(e) {
  if (typeof e == "function" && !e.length) return W(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = W(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return e;
}
function de(e, t) {
  return function(n) {
    let s;
    return ue(
      () => s = w(() => (a.context = {
        ...a.context,
        [e]: n.value
      }, ce(() => n.children))),
      void 0
    ), s;
  };
}
const B = Symbol("fallback");
function $(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function be(e, t, r = {}) {
  let n = [], s = [], i = [], l = 0, u = t.length > 1 ? [] : null;
  return _(() => $(i)), () => {
    let o = e() || [], f, c;
    return o[X], w(() => {
      let g = o.length, m, E, j, N, D, p, y, v, O;
      if (g === 0)
        l !== 0 && ($(i), i = [], n = [], s = [], l = 0, u && (u = [])), r.fallback && (n = [B], s[0] = P((re) => (i[0] = re, r.fallback())), l = 1);
      else if (l === 0) {
        for (s = new Array(g), c = 0; c < g; c++)
          n[c] = o[c], s[c] = P(b);
        l = g;
      } else {
        for (j = new Array(g), N = new Array(g), u && (D = new Array(g)), p = 0, y = Math.min(l, g); p < y && n[p] === o[p]; p++) ;
        for (y = l - 1, v = g - 1; y >= p && v >= p && n[y] === o[v]; y--, v--)
          j[v] = s[y], N[v] = i[y], u && (D[v] = u[y]);
        for (m = /* @__PURE__ */ new Map(), E = new Array(v + 1), c = v; c >= p; c--)
          O = o[c], f = m.get(O), E[c] = f === void 0 ? -1 : f, m.set(O, c);
        for (f = p; f <= y; f++)
          O = n[f], c = m.get(O), c !== void 0 && c !== -1 ? (j[c] = s[f], N[c] = i[f], u && (D[c] = u[f]), c = E[c], m.set(O, c)) : i[f]();
        for (c = p; c < g; c++)
          c in j ? (s[c] = j[c], i[c] = N[c], u && (u[c] = D[c], u[c](c))) : s[c] = P(b);
        s = s.slice(0, l = g), n = o.slice(0);
      }
      return s;
    });
    function b(g) {
      if (i[c] = g, u) {
        const [m, E] = Q(c);
        return u[c] = E, t(o[c], m);
      }
      return t(o[c]);
    }
  };
}
function pe(e, t, r = {}) {
  let n = [], s = [], i = [], l = [], u = 0, o;
  return _(() => $(i)), () => {
    const f = e() || [];
    return f[X], w(() => {
      if (f.length === 0)
        return u !== 0 && ($(i), i = [], n = [], s = [], u = 0, l = []), r.fallback && (n = [B], s[0] = P((b) => (i[0] = b, r.fallback())), u = 1), s;
      for (n[0] === B && (i[0](), i = [], n = [], s = [], u = 0), o = 0; o < f.length; o++)
        o < n.length && n[o] !== f[o] ? l[o](() => f[o]) : o >= n.length && (s[o] = P(c));
      for (; o < n.length; o++)
        i[o]();
      return u = l.length = i.length = f.length, n = f.slice(0), s = s.slice(0, u);
    });
    function c(b) {
      i[o] = b;
      const [g, m] = Q(f[o]);
      return l[o] = m, t(g, o);
    }
  };
}
function De(e, t) {
  return w(() => e(t || {}));
}
function I() {
  return !0;
}
const G = {
  get(e, t, r) {
    return t === L ? r : e.get(t);
  },
  has(e, t) {
    return t === L ? !0 : e.has(t);
  },
  set: I,
  deleteProperty: I,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: I,
      deleteProperty: I
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function V(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function ye() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const r = this[e]();
    if (r !== void 0) return r;
  }
}
function Ie(...e) {
  let t = !1;
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    t = t || !!u && L in u, e[l] = typeof u == "function" ? (t = !0, k(u)) : u;
  }
  if (t)
    return new Proxy(
      {
        get(l) {
          for (let u = e.length - 1; u >= 0; u--) {
            const o = V(e[u])[l];
            if (o !== void 0) return o;
          }
        },
        has(l) {
          for (let u = e.length - 1; u >= 0; u--)
            if (l in V(e[u])) return !0;
          return !1;
        },
        keys() {
          const l = [];
          for (let u = 0; u < e.length; u++)
            l.push(...Object.keys(V(e[u])));
          return [...new Set(l)];
        }
      },
      G
    );
  const r = {}, n = /* @__PURE__ */ Object.create(null);
  for (let l = e.length - 1; l >= 0; l--) {
    const u = e[l];
    if (!u) continue;
    const o = Object.getOwnPropertyNames(u);
    for (let f = o.length - 1; f >= 0; f--) {
      const c = o[f];
      if (c === "__proto__" || c === "constructor") continue;
      const b = Object.getOwnPropertyDescriptor(u, c);
      if (!n[c])
        n[c] = b.get ? {
          enumerable: !0,
          configurable: !0,
          get: ye.bind(r[c] = [b.get.bind(u)])
        } : b.value !== void 0 ? b : void 0;
      else {
        const g = r[c];
        g && (b.get ? g.push(b.get.bind(u)) : b.value !== void 0 && g.push(() => b.value));
      }
    }
  }
  const s = {}, i = Object.keys(n);
  for (let l = i.length - 1; l >= 0; l--) {
    const u = i[l], o = n[u];
    o && o.get ? Object.defineProperty(s, u, o) : s[u] = o ? o.value : void 0;
  }
  return s;
}
function Le(e, ...t) {
  if (L in e) {
    const s = new Set(t.length > 1 ? t.flat() : t[0]), i = t.map((l) => new Proxy(
      {
        get(u) {
          return l.includes(u) ? e[u] : void 0;
        },
        has(u) {
          return l.includes(u) && u in e;
        },
        keys() {
          return l.filter((u) => u in e);
        }
      },
      G
    ));
    return i.push(
      new Proxy(
        {
          get(l) {
            return s.has(l) ? void 0 : e[l];
          },
          has(l) {
            return s.has(l) ? !1 : l in e;
          },
          keys() {
            return Object.keys(e).filter((l) => !s.has(l));
          }
        },
        G
      )
    ), i;
  }
  const r = {}, n = t.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(e)) {
    const i = Object.getOwnPropertyDescriptor(e, s), l = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let u = !1, o = 0;
    for (const f of t)
      f.includes(s) && (u = !0, l ? n[o][s] = i.value : Object.defineProperty(n[o], s, i)), ++o;
    u || (l ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
let we = 0;
function Ue() {
  return `cl-${we++}`;
}
const me = (e) => `Stale read from <${e}>.`;
function Te(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return k(be(() => e.each, e.children, t || void 0));
}
function _e(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return k(pe(() => e.each, e.children, t || void 0));
}
function Ke(e) {
  const t = e.keyed, r = k(() => e.when, void 0, {
    equals: (n, s) => t ? n === s : !n == !s
  });
  return k(
    () => {
      const n = r();
      if (n) {
        const s = e.children;
        return typeof s == "function" && s.length > 0 ? w(
          () => s(
            t ? n : () => {
              if (!w(r)) throw me("Show");
              return e.when;
            }
          )
        ) : s;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
const ve = void 0;
var Ae = !!ve, Me = { equals: !1 };
function $e(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
var Se = (e) => e != null, qe = (e) => e.filter(Se), Fe = (e) => typeof e == "function" && !e.length ? e() : e, Re = (e) => Array.isArray(e) ? e : e ? [e] : [];
function Ve(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var We = Object.entries, Be = Ae ? (e) => oe() ? _(e) : e : _;
function Ge(e, t, r) {
  return Q(t(), r);
}
function Qe(e, t, r, n) {
  const s = e.length, i = t.length;
  let l = 0;
  if (!i) {
    for (; l < s; l++)
      r(e[l]);
    return;
  }
  if (!s) {
    for (; l < i; l++)
      n(t[l]);
    return;
  }
  for (; l < i && t[l] === e[l]; l++)
    ;
  let u, o;
  t = t.slice(l), e = e.slice(l);
  for (u of t)
    e.includes(u) || n(u);
  for (o of e)
    t.includes(o) || r(o);
}
export {
  L as $,
  Ne as A,
  X as B,
  Le as C,
  Be as D,
  ke as E,
  Te as F,
  Me as G,
  _e as I,
  Ke as S,
  ue as a,
  Q as b,
  De as c,
  Ue as d,
  k as e,
  ie as f,
  oe as g,
  _ as h,
  qe as i,
  Re as j,
  Fe as k,
  Qe as l,
  $e as m,
  Ve as n,
  Ee as o,
  xe as p,
  je as q,
  Pe as r,
  P as s,
  We as t,
  w as u,
  Ge as v,
  ce as w,
  Oe as x,
  Ie as y,
  Ce as z
};
