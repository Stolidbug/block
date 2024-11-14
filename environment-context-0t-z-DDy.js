import { z as Xt, A as Yt, $, B as At, q as lt, p as Qt, b as te, y as Ft, o as Vt, h as Wt, f as Ot, C as It, c as ee } from "./R5675YMU-BY7cX9Th.js";
import { D as ne } from "./utils-DyI0jAV8.js";
function se(t, e) {
  return `${t} returned \`undefined\`. Seems you forgot to wrap component within ${e}`;
}
function ie(t = {}) {
  const { strict: e = !0, hookName: n = "useContext", providerName: s = "Provider", errorMessage: r } = t, o = Xt(void 0);
  function f() {
    var g;
    const l = Yt(o);
    if (!l && e) {
      const i = new Error(r ?? se(n, s));
      throw i.name = "ContextError", (g = Error.captureStackTrace) == null || g.call(Error, i, f), i;
    }
    return l;
  }
  return [o.Provider, f, o];
}
function re(t) {
  return new Proxy({}, {
    get() {
      return t;
    }
  });
}
var Nn = () => (t) => Array.from(new Set(t)), oe = /[A-Z]/g, ce = /^ms-/, rt = {};
function ae(t) {
  return "-" + t.toLowerCase();
}
function fe(t) {
  if (rt.hasOwnProperty(t))
    return rt[t];
  var e = t.replace(oe, ae);
  return rt[t] = ce.test(e) ? "-" + e : e;
}
const dt = Symbol("store-raw"), W = Symbol("store-node"), P = Symbol("store-has"), zt = Symbol("store-self");
function Kt(t) {
  let e = t[$];
  if (!e && (Object.defineProperty(t, $, {
    value: e = new Proxy(t, le)
  }), !Array.isArray(t))) {
    const n = Object.keys(t), s = Object.getOwnPropertyDescriptors(t);
    for (let r = 0, o = n.length; r < o; r++) {
      const f = n[r];
      s[f].get && Object.defineProperty(t, f, {
        enumerable: s[f].enumerable,
        get: s[f].get.bind(e)
      });
    }
  }
  return e;
}
function M(t) {
  let e;
  return t != null && typeof t == "object" && (t[$] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t));
}
function I(t, e = /* @__PURE__ */ new Set()) {
  let n, s, r, o;
  if (n = t != null && t[dt]) return n;
  if (!M(t) || e.has(t)) return t;
  if (Array.isArray(t)) {
    Object.isFrozen(t) ? t = t.slice(0) : e.add(t);
    for (let f = 0, l = t.length; f < l; f++)
      r = t[f], (s = I(r, e)) !== r && (t[f] = s);
  } else {
    Object.isFrozen(t) ? t = Object.assign({}, t) : e.add(t);
    const f = Object.keys(t), l = Object.getOwnPropertyDescriptors(t);
    for (let g = 0, i = f.length; g < i; g++)
      o = f[g], !l[o].get && (r = t[o], (s = I(r, e)) !== r && (t[o] = s));
  }
  return t;
}
function X(t, e) {
  let n = t[e];
  return n || Object.defineProperty(t, e, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function G(t, e, n) {
  if (t[e]) return t[e];
  const [s, r] = te(n, {
    equals: !1,
    internal: !0
  });
  return s.$ = r, t[e] = s;
}
function ue(t, e) {
  const n = Reflect.getOwnPropertyDescriptor(t, e);
  return !n || n.get || !n.configurable || e === $ || e === W || (delete n.value, delete n.writable, n.get = () => t[$][e]), n;
}
function qt(t) {
  lt() && G(X(t, W), zt)();
}
function he(t) {
  return qt(t), Reflect.ownKeys(t);
}
const le = {
  get(t, e, n) {
    if (e === dt) return t;
    if (e === $) return n;
    if (e === At)
      return qt(t), n;
    const s = X(t, W), r = s[e];
    let o = r ? r() : t[e];
    if (e === W || e === P || e === "__proto__") return o;
    if (!r) {
      const f = Object.getOwnPropertyDescriptor(t, e);
      lt() && (typeof o != "function" || t.hasOwnProperty(e)) && !(f && f.get) && (o = G(s, e, o)());
    }
    return M(o) ? Kt(o) : o;
  },
  has(t, e) {
    return e === dt || e === $ || e === At || e === W || e === P || e === "__proto__" ? !0 : (lt() && G(X(t, P), e)(), e in t);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: he,
  getOwnPropertyDescriptor: ue
};
function A(t, e, n, s = !1) {
  if (!s && t[e] === n) return;
  const r = t[e], o = t.length;
  n === void 0 ? (delete t[e], t[P] && t[P][e] && r !== void 0 && t[P][e].$()) : (t[e] = n, t[P] && t[P][e] && r === void 0 && t[P][e].$());
  let f = X(t, W), l;
  if ((l = G(f, e, r)) && l.$(() => n), Array.isArray(t) && t.length !== o) {
    for (let g = t.length; g < o; g++) (l = f[g]) && l.$();
    (l = G(f, "length", o)) && l.$(t.length);
  }
  (l = f[zt]) && l.$();
}
function Bt(t, e) {
  const n = Object.keys(e);
  for (let s = 0; s < n.length; s += 1) {
    const r = n[s];
    A(t, r, e[r]);
  }
}
function de(t, e) {
  if (typeof e == "function" && (e = e(t)), e = I(e), Array.isArray(e)) {
    if (t === e) return;
    let n = 0, s = e.length;
    for (; n < s; n++) {
      const r = e[n];
      t[n] !== r && A(t, n, r);
    }
    A(t, "length", s);
  } else Bt(t, e);
}
function q(t, e, n = []) {
  let s, r = t;
  if (e.length > 1) {
    s = e.shift();
    const f = typeof s, l = Array.isArray(t);
    if (Array.isArray(s)) {
      for (let g = 0; g < s.length; g++)
        q(t, [s[g]].concat(e), n);
      return;
    } else if (l && f === "function") {
      for (let g = 0; g < t.length; g++)
        s(t[g], g) && q(t, [g].concat(e), n);
      return;
    } else if (l && f === "object") {
      const { from: g = 0, to: i = t.length - 1, by: c = 1 } = s;
      for (let a = g; a <= i; a += c)
        q(t, [a].concat(e), n);
      return;
    } else if (e.length > 1) {
      q(t[s], e, [s].concat(n));
      return;
    }
    r = t[s], n = [s].concat(n);
  }
  let o = e[0];
  typeof o == "function" && (o = o(r, n), o === r) || s === void 0 && o == null || (o = I(o), s === void 0 || M(r) && M(o) && !Array.isArray(o) ? Bt(r, o) : A(t, s, o));
}
function pe(...[t, e]) {
  const n = I(t || {}), s = Array.isArray(n), r = Kt(n);
  function o(...f) {
    Qt(() => {
      s && f.length === 1 ? de(n, f[0]) : q(n, f);
    });
  }
  return [r, o];
}
const pt = Symbol("store-root");
function L(t, e, n, s, r) {
  const o = e[n];
  if (t === o) return;
  const f = Array.isArray(t);
  if (n !== pt && (!M(t) || !M(o) || f !== Array.isArray(o) || r && t[r] !== o[r])) {
    A(e, n, t);
    return;
  }
  if (f) {
    if (t.length && o.length && (!s || r && t[0] && t[0][r] != null)) {
      let i, c, a, u, h, d, y, E;
      for (a = 0, u = Math.min(o.length, t.length); a < u && (o[a] === t[a] || r && o[a] && t[a] && o[a][r] === t[a][r]); a++)
        L(t[a], o, a, s, r);
      const S = new Array(t.length), O = /* @__PURE__ */ new Map();
      for (u = o.length - 1, h = t.length - 1; u >= a && h >= a && (o[u] === t[h] || r && o[a] && t[a] && o[u][r] === t[h][r]); u--, h--)
        S[h] = o[u];
      if (a > h || a > u) {
        for (c = a; c <= h; c++) A(o, c, t[c]);
        for (; c < t.length; c++)
          A(o, c, S[c]), L(t[c], o, c, s, r);
        o.length > t.length && A(o, "length", t.length);
        return;
      }
      for (y = new Array(h + 1), c = h; c >= a; c--)
        d = t[c], E = r && d ? d[r] : d, i = O.get(E), y[c] = i === void 0 ? -1 : i, O.set(E, c);
      for (i = a; i <= u; i++)
        d = o[i], E = r && d ? d[r] : d, c = O.get(E), c !== void 0 && c !== -1 && (S[c] = o[i], c = y[c], O.set(E, c));
      for (c = a; c < t.length; c++)
        c in S ? (A(o, c, S[c]), L(t[c], o, c, s, r)) : A(o, c, t[c]);
    } else
      for (let i = 0, c = t.length; i < c; i++)
        L(t[i], o, i, s, r);
    o.length > t.length && A(o, "length", t.length);
    return;
  }
  const l = Object.keys(t);
  for (let i = 0, c = l.length; i < c; i++)
    L(t[l[i]], o, l[i], s, r);
  const g = Object.keys(o);
  for (let i = 0, c = g.length; i < c; i++)
    t[g[i]] === void 0 && A(o, g[i], void 0);
}
function ye(t, e = {}) {
  const { merge: n, key: s = "id" } = e, r = I(t);
  return (o) => {
    if (!M(o) || !M(r)) return r;
    const f = L(
      r,
      {
        [pt]: o
      },
      pt,
      n,
      s
    );
    return f === void 0 ? o : f;
  };
}
function U() {
  return !0;
}
var ge = {
  get(t, e, n) {
    return e === $ ? n : t.get(e);
  },
  has(t, e) {
    return t.has(e);
  },
  set: U,
  deleteProperty: U,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: U,
      deleteProperty: U
    };
  },
  ownKeys(t) {
    return t.keys();
  }
}, yt = (t) => typeof t == "function" && !t.length ? t() : t;
function jt(t) {
  return (...e) => {
    for (const n of t)
      n && n(...e);
  };
}
var me = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function xt(t) {
  const e = {};
  let n;
  for (; n = me.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function ve(t, e) {
  if (typeof t == "object" && typeof e == "object")
    return { ...t, ...e };
  if (typeof t == "string" && typeof e == "string")
    return `${t};${e}`;
  const n = typeof t == "object" ? t : xt(t), s = typeof e == "object" ? e : xt(e);
  return { ...n, ...s };
}
var ot = (t, e, n) => {
  let s;
  for (const r of t) {
    const o = yt(r)[e];
    s ? o && (s = n(s, o)) : s = o;
  }
  return s;
};
function Dn(...t) {
  if (t.length === 1)
    return t[0];
  const e = {};
  for (const s of t) {
    const r = yt(s);
    for (const o in r)
      if (o[0] === "o" && o[1] === "n" && o[2]) {
        const f = r[o], l = o.toLowerCase(), g = typeof f == "function" ? f : (
          // jsx event handlers can be tuples of [callback, arg]
          Array.isArray(f) ? f.length === 1 ? f[0] : f[0].bind(void 0, f[1]) : void 0
        );
        g ? e[l] ? e[l].push(g) : e[l] = [g] : delete e[l];
      }
  }
  const n = Ft(...t);
  return new Proxy(
    {
      get(s) {
        if (typeof s != "string")
          return Reflect.get(n, s);
        if (s === "style")
          return ot(t, "style", ve);
        if (s === "ref") {
          const r = [];
          for (const o of t) {
            const f = yt(o)[s];
            typeof f == "function" && r.push(f);
          }
          return jt(r);
        }
        if (s[0] === "o" && s[1] === "n" && s[2]) {
          const r = e[s.toLowerCase()];
          return r ? jt(r) : Reflect.get(n, s);
        }
        return s === "class" || s === "className" ? ot(t, s, (r, o) => `${r} ${o}`) : s === "classList" ? ot(t, s, (r, o) => ({ ...r, ...o })) : Reflect.get(n, s);
      },
      has(s) {
        return Reflect.has(n, s);
      },
      keys() {
        return Object.keys(n);
      }
    },
    ge
  );
}
var we = (t) => Array.isArray(t), Ee = (t) => !(t == null || typeof t != "object" || we(t)), Se = (t) => typeof t == "number" && !Number.isNaN(t), kt = (t) => typeof t == "string", be = (t) => t.startsWith("--") ? t : fe(t);
function Ae(t) {
  let e = {};
  for (const n in t) {
    const s = t[n];
    !kt(s) && !Se(s) || (e[be(n)] = s);
  }
  return e;
}
var Pt = {
  onFocus: "onFocusIn",
  onBlur: "onFocusOut",
  onDoubleClick: "onDblClick",
  onChange: "onInput",
  defaultChecked: "checked",
  defaultValue: "value",
  htmlFor: "for",
  className: "class"
};
function Oe(t) {
  return t in Pt ? Pt[t] : t;
}
var $n = re((t) => {
  const e = {};
  for (const n in t) {
    const s = t[n];
    if (n === "style" && Ee(s)) {
      e.style = Ae(s);
      continue;
    }
    if (n === "children") {
      kt(s) && (e.textContent = s);
      continue;
    }
    e[Oe(n)] = s;
  }
  return e;
});
function je(t, e) {
  const { actions: n, context: s } = e ?? {}, [r, o] = pe(t.getState());
  return Vt(() => {
    const f = t.subscribe((l) => {
      o(ye(l));
    });
    Wt(() => {
      f();
    });
  }), Ot(() => {
    const f = typeof s == "function" ? s() : s;
    t.setContext(f);
  }), Ot(() => {
    t.setOptions({ actions: n });
  }), r;
}
function xe(t, e) {
  const { state: n, context: s } = e ?? {}, r = (() => {
    const o = typeof t == "function" ? t() : t, f = typeof s == "function" ? s() : s;
    return f && o.setContext(f), o;
  })();
  return Vt(() => {
    r.start(n), Wt(() => {
      r.stop();
    });
  }), r;
}
function Mn(t, e) {
  const n = xe(t, e);
  return [je(n, e), n.send, n];
}
const Tn = () => (t, e) => It(t, e), ct = (t) => (n) => {
  const [s, r] = It(n, ["as"]);
  return ee(ne, Ft({
    get component() {
      return s.as || t;
    }
  }, r));
};
function Pe() {
  const t = /* @__PURE__ */ new Map();
  return new Proxy(ct, {
    apply(e, n, s) {
      return ct(s[0]);
    },
    get(e, n) {
      const s = n;
      return t.has(s) || t.set(s, ct(s)), t.get(s);
    }
  });
}
const _n = Pe(), Ce = Symbol(), Ct = Object.getPrototypeOf, gt = /* @__PURE__ */ new WeakMap(), Ne = (t) => t && (gt.has(t) ? gt.get(t) : Ct(t) === Object.prototype || Ct(t) === Array.prototype), De = (t) => Ne(t) && t[Ce] || null, Nt = (t, e = !0) => {
  gt.set(t, e);
};
var Y = process.env.NODE_ENV !== "production", at = (t) => typeof t == "object" && t !== null, T = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), $e = (t = Object.is, e = (i, c) => new Proxy(i, c), n = (i) => at(i) && !B.has(i) && (Array.isArray(i) || !(Symbol.iterator in i)) && !(i instanceof WeakMap) && !(i instanceof WeakSet) && !(i instanceof Error) && !(i instanceof Number) && !(i instanceof Date) && !(i instanceof String) && !(i instanceof RegExp) && !(i instanceof ArrayBuffer), s = (i) => {
  switch (i.status) {
    case "fulfilled":
      return i.value;
    case "rejected":
      throw i.reason;
    default:
      throw i;
  }
}, r = /* @__PURE__ */ new WeakMap(), o = (i, c, a = s) => {
  const u = r.get(i);
  if ((u == null ? void 0 : u[0]) === c)
    return u[1];
  const h = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i));
  return Nt(h, !0), r.set(i, [c, h]), Reflect.ownKeys(i).forEach((d) => {
    const y = Reflect.get(i, d);
    B.has(y) ? (Nt(y, !1), h[d] = y) : y instanceof Promise ? Object.defineProperty(h, d, {
      get() {
        return a(y);
      }
    }) : T.has(y) ? h[d] = F(y, a) : h[d] = y;
  }), Object.freeze(h);
}, f = /* @__PURE__ */ new WeakMap(), l = [1, 1], g = (i) => {
  if (!at(i))
    throw new Error("object required");
  const c = f.get(i);
  if (c)
    return c;
  let a = l[0];
  const u = /* @__PURE__ */ new Set(), h = (w, v = ++l[0]) => {
    a !== v && (a = v, u.forEach((m) => m(w, v)));
  };
  let d = l[1];
  const y = (w = ++l[1]) => (d !== w && !u.size && (d = w, S.forEach(([v]) => {
    const m = v[1](w);
    m > a && (a = m);
  })), a), E = (w) => (v, m) => {
    const b = [...v];
    b[1] = [w, ...b[1]], h(b, m);
  }, S = /* @__PURE__ */ new Map(), O = (w, v) => {
    if (Y && S.has(w))
      throw new Error("prop listener already exists");
    if (u.size) {
      const m = v[3](E(w));
      S.set(w, [v, m]);
    } else
      S.set(w, [v]);
  }, st = (w) => {
    var m;
    const v = S.get(w);
    v && (S.delete(w), (m = v[1]) == null || m.call(v));
  }, St = (w) => (u.add(w), u.size === 1 && S.forEach(([m, b], _) => {
    if (Y && b)
      throw new Error("remove already exists");
    const z = m[3](E(_));
    S.set(_, [m, z]);
  }), () => {
    u.delete(w), u.size === 0 && S.forEach(([m, b], _) => {
      b && (b(), S.set(_, [m]));
    });
  }), it = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i)), Z = e(it, {
    deleteProperty(w, v) {
      const m = Reflect.get(w, v);
      st(v);
      const b = Reflect.deleteProperty(w, v);
      return b && h(["delete", [v], m]), b;
    },
    set(w, v, m, b) {
      var bt;
      const _ = Reflect.has(w, v), z = Reflect.get(w, v, b);
      if (_ && (t(z, m) || f.has(m) && t(z, f.get(m))))
        return !0;
      st(v), at(m) && (m = De(m) || m);
      let H = m;
      if (!((bt = Object.getOwnPropertyDescriptor(w, v)) != null && bt.set)) if (m instanceof Promise)
        m.then((N) => {
          m.status = "fulfilled", m.value = N, h(["resolve", [v], N]);
        }).catch((N) => {
          m.status = "rejected", m.reason = N, h(["reject", [v], N]);
        });
      else {
        !T.has(m) && n(m) && (H = mt(m));
        const N = !B.has(H) && T.get(H);
        N && O(v, N);
      }
      return Reflect.set(w, v, H, b), h(["set", [v], m, z]), !0;
    }
  });
  f.set(i, Z);
  const Jt = [it, y, o, St];
  return T.set(Z, Jt), Reflect.ownKeys(i).forEach((w) => {
    const v = Object.getOwnPropertyDescriptor(i, w);
    v.get || v.set ? Object.defineProperty(it, w, v) : Z[w] = i[w];
  }), Z;
}) => [
  // public functions
  g,
  // shared state
  T,
  B,
  // internal things
  t,
  e,
  n,
  s,
  r,
  o,
  f,
  l
], [Me] = $e();
function mt(t = {}) {
  return Me(t);
}
function Dt(t, e, n) {
  const s = T.get(t);
  Y && !s && console.warn("Please use proxy object");
  let r;
  const o = [], f = s[3];
  let l = !1;
  const i = f((c) => {
    if (o.push(c), n) {
      e(o.splice(0));
      return;
    }
    r || (r = Promise.resolve().then(() => {
      r = void 0, l && e(o.splice(0));
    }));
  });
  return l = !0, () => {
    l = !1, i();
  };
}
function F(t, e) {
  const n = T.get(t);
  Y && !n && console.warn("Please use proxy object");
  const [s, r, o] = n;
  return o(s, r(), e);
}
function $t(t) {
  return B.add(t), t;
}
function Te(t, e) {
  Object.keys(e).forEach((r) => {
    if (Object.getOwnPropertyDescriptor(t, r))
      throw new Error("object property already defined");
    const o = e[r], { get: f, set: l } = typeof o == "function" ? { get: o } : o, g = {};
    g.get = () => f(F(s)), l && (g.set = (i) => l(s, i)), Object.defineProperty(t, r, g);
  });
  const s = mt(t);
  return s;
}
function Mt(t, e, n) {
  typeof n.value == "object" && (n.value = V(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || e === "__proto__" ? Object.defineProperty(t, e, n) : t[e] = n.value;
}
function V(t) {
  if (typeof t != "object") return t;
  var e = 0, n, s, r, o = Object.prototype.toString.call(t);
  if (o === "[object Object]" ? r = Object.create(t.__proto__ || null) : o === "[object Array]" ? r = Array(t.length) : o === "[object Set]" ? (r = /* @__PURE__ */ new Set(), t.forEach(function(f) {
    r.add(V(f));
  })) : o === "[object Map]" ? (r = /* @__PURE__ */ new Map(), t.forEach(function(f, l) {
    r.set(V(l), V(f));
  })) : o === "[object Date]" ? r = /* @__PURE__ */ new Date(+t) : o === "[object RegExp]" ? r = new RegExp(t.source, t.flags) : o === "[object DataView]" ? r = new t.constructor(V(t.buffer)) : o === "[object ArrayBuffer]" ? r = t.slice(0) : o.slice(-6) === "Array]" && (r = new t.constructor(t)), r) {
    for (s = Object.getOwnPropertySymbols(t); e < s.length; e++)
      Mt(r, s[e], Object.getOwnPropertyDescriptor(t, s[e]));
    for (e = 0, s = Object.getOwnPropertyNames(t); e < s.length; e++)
      Object.hasOwnProperty.call(r, n = s[e]) && r[n] === t[n] || Mt(r, n, Object.getOwnPropertyDescriptor(t, n));
  }
  return r || t;
}
var _e = Object.defineProperty, Re = (t, e, n) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, p = (t, e, n) => (Re(t, typeof e != "symbol" ? e + "" : e, n), n);
function Le(t) {
  for (; t.length > 0; )
    t.pop();
  return t;
}
var Tt = (t, ...e) => (typeof t == "function" ? t(...e) : t) ?? void 0, C = (t) => t, Fe = () => {
}, _t = /* @__PURE__ */ (() => {
  let t = 0;
  return () => (t++, t.toString(36));
})(), Ve = () => process.env.NODE_ENV !== "production", Q = (t) => Array.isArray(t), k = (t) => !(t == null || typeof t != "object" || Q(t)), We = (t) => typeof t == "number" && !Number.isNaN(t), x = (t) => typeof t == "string", tt = (t) => typeof t == "function", Ie = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
function et(t) {
  if (!ze(t) || t === void 0)
    return t;
  const e = Reflect.ownKeys(t).filter((s) => typeof s == "string"), n = {};
  for (const s of e) {
    const r = t[s];
    r !== void 0 && (n[s] = et(r));
  }
  return n;
}
var ze = (t) => t && typeof t == "object" && t.constructor === Object;
function ft(...t) {
  const e = t.length === 1 ? t[0] : t[1];
  (t.length === 2 ? t[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(e);
}
function J(...t) {
  const e = t.length === 1 ? t[0] : t[1];
  if ((t.length === 2 ? t[0] : !0) && process.env.NODE_ENV !== "production")
    throw new Error(e);
}
function Gt(t, ...e) {
  for (const n of e) {
    const s = et(n);
    for (const r in s)
      k(n[r]) ? (t[r] || (t[r] = {}), Gt(t[r], n[r])) : t[r] = n[r];
  }
  return t;
}
function Rt(t) {
  return V(t);
}
function j(t) {
  return x(t) ? { type: t } : t;
}
function D(t) {
  return t ? Q(t) ? t.slice() : [t] : [];
}
function Zt(t) {
  return k(t) && t.predicate != null;
}
var Ke = () => !0;
function vt(t, e, n, s) {
  return (r) => {
    var o;
    return x(r) ? !!((o = t[r]) != null && o.call(t, e, n, s)) : tt(r) ? r(e, n, s) : r.predicate(t)(e, n, s);
  };
}
function qe(...t) {
  return {
    predicate: (e) => (n, s, r) => t.map(vt(e, n, s, r)).some(Boolean)
  };
}
function Be(...t) {
  return {
    predicate: (e) => (n, s, r) => t.map(vt(e, n, s, r)).every(Boolean)
  };
}
function ke(t) {
  return {
    predicate: (e) => (n, s, r) => !vt(e, n, s, r)(t)
  };
}
function Ge(...t) {
  return (e, n, s) => s.state.matches(...t);
}
var Rn = { or: qe, and: Be, not: ke, stateIn: Ge };
function Ht(t, e) {
  return t = t ?? Ke, (n, s, r) => {
    if (x(t)) {
      const o = e[t];
      return tt(o) ? o(n, s, r) : o;
    }
    return Zt(t) ? t.predicate(e)(n, s, r) : t == null ? void 0 : t(n, s, r);
  };
}
function ut(t, e) {
  return (n, s, r) => Zt(t) ? t.predicate(e)(n, s, r) : t;
}
function Ze(t) {
  var o, f;
  const e = t.computed ?? C({}), n = t.context ?? C({}), s = t.initial ? (f = (o = t.states) == null ? void 0 : o[t.initial]) == null ? void 0 : f.tags : [], r = mt({
    value: t.initial ?? "",
    previousValue: "",
    event: C({}),
    previousEvent: C({}),
    context: Te(n, e),
    done: !1,
    tags: s ?? [],
    hasTag(l) {
      return this.tags.includes(l);
    },
    matches(...l) {
      return l.includes(this.value);
    },
    can(l) {
      return C(this).nextEvents.includes(l);
    },
    get nextEvents() {
      var i, c;
      const l = ((c = (i = t.states) == null ? void 0 : i[this.value]) == null ? void 0 : c.on) ?? {}, g = (t == null ? void 0 : t.on) ?? {};
      return Object.keys({ ...l, ...g });
    },
    get changed() {
      return this.event.value === "machine.init" || !this.previousValue ? !1 : this.value !== this.previousValue;
    }
  });
  return C(r);
}
function K(t, e) {
  return (n, s) => {
    if (We(t))
      return t;
    if (tt(t))
      return t(n, s);
    if (x(t)) {
      const r = Number.parseFloat(t);
      if (!Number.isNaN(r))
        return r;
      if (e) {
        const o = e == null ? void 0 : e[t];
        return J(
          o == null,
          `[@zag-js/core > determine-delay] Cannot determine delay for \`${t}\`. It doesn't exist in \`options.delays\``
        ), tt(o) ? o(n, s) : o;
      }
    }
  };
}
function He(t) {
  return x(t) ? { target: t } : t;
}
function Ue(t, e) {
  return (n, s, r) => D(t).map(He).find((o) => Ht(o.guard, e)(n, s, r) ?? o.target ?? o.actions);
}
var Je = class {
  // Let's get started!
  constructor(t, e) {
    var s, r, o, f, l, g;
    p(
      this,
      "status",
      "Not Started"
      /* NotStarted */
    ), p(this, "state"), p(this, "initialState"), p(this, "initialContext"), p(this, "id"), p(
      this,
      "type",
      "machine"
      /* Machine */
    ), p(this, "activityEvents", /* @__PURE__ */ new Map()), p(this, "delayedEvents", /* @__PURE__ */ new Map()), p(this, "stateListeners", /* @__PURE__ */ new Set()), p(this, "doneListeners", /* @__PURE__ */ new Set()), p(this, "contextWatchers", /* @__PURE__ */ new Set()), p(this, "removeStateListener", Fe), p(this, "parent"), p(this, "children", /* @__PURE__ */ new Map()), p(this, "guardMap"), p(this, "actionMap"), p(this, "delayMap"), p(this, "activityMap"), p(this, "sync"), p(this, "options"), p(this, "config"), p(this, "start", (i) => {
      if (this.state.value = "", this.state.tags = [], this.status === "Running")
        return this;
      this.status = "Running", this.removeStateListener = Dt(
        this.state,
        () => {
          this.stateListeners.forEach((y) => {
            y(this.stateSnapshot);
          });
        },
        this.sync
      ), this.setupContextWatchers(), this.executeActivities(
        j(
          "machine.start"
          /* Start */
        ),
        D(this.config.activities),
        "machine.start"
        /* Start */
      ), this.executeActions(this.config.entry, j(
        "machine.start"
        /* Start */
      ));
      const c = j(
        "machine.init"
        /* Init */
      ), a = k(i) ? i.value : i, u = k(i) ? i.context : void 0;
      u && this.setContext(u);
      const h = {
        target: a ?? this.config.initial
      }, d = this.getNextStateInfo(h, c);
      return this.initialState = d, this.performStateChangeEffects(this.state.value, d, c), this;
    }), p(this, "setupContextWatchers", () => {
      const { watch: i } = this.config;
      if (!i)
        return;
      let c = F(this.state.context);
      const a = Dt(this.state.context, () => {
        var h;
        const u = F(this.state.context);
        for (const [d, y] of Object.entries(i))
          (((h = this.options.compareFns) == null ? void 0 : h[d]) ?? Object.is)(c[d], u[d]) || this.executeActions(y, this.state.event);
        c = u;
      });
      this.contextWatchers.add(a);
    }), p(this, "stop", () => {
      if (this.status !== "Stopped")
        return this.performExitEffects(this.state.value, j(
          "machine.stop"
          /* Stop */
        )), this.executeActions(this.config.exit, j(
          "machine.stop"
          /* Stop */
        )), this.setState(""), this.setEvent(
          "machine.stop"
          /* Stop */
        ), this.stopStateListeners(), this.stopChildren(), this.stopActivities(), this.stopDelayedEvents(), this.stopContextWatchers(), this.status = "Stopped", this;
    }), p(this, "stopStateListeners", () => {
      this.removeStateListener(), this.stateListeners.clear();
    }), p(this, "stopContextWatchers", () => {
      this.contextWatchers.forEach((i) => i()), this.contextWatchers.clear();
    }), p(this, "stopDelayedEvents", () => {
      this.delayedEvents.forEach((i) => {
        i.forEach((c) => c());
      }), this.delayedEvents.clear();
    }), p(this, "stopActivities", (i) => {
      var c, a;
      i ? ((c = this.activityEvents.get(i)) == null || c.forEach((u) => u()), (a = this.activityEvents.get(i)) == null || a.clear(), this.activityEvents.delete(i)) : (this.activityEvents.forEach((u) => {
        u.forEach((h) => h()), u.clear();
      }), this.activityEvents.clear());
    }), p(this, "sendChild", (i, c) => {
      const a = j(i), u = Tt(c, this.contextSnapshot), h = this.children.get(u);
      h || J(`[@zag-js/core] Cannot send '${a.type}' event to unknown child`), h.send(a);
    }), p(this, "stopChild", (i) => {
      this.children.has(i) || J(`[@zag-js/core > stop-child] Cannot stop unknown child ${i}`), this.children.get(i).stop(), this.children.delete(i);
    }), p(this, "removeChild", (i) => {
      this.children.delete(i);
    }), p(this, "stopChildren", () => {
      this.children.forEach((i) => i.stop()), this.children.clear();
    }), p(this, "setParent", (i) => {
      this.parent = i;
    }), p(this, "spawn", (i, c) => {
      const a = Tt(i);
      return c && (a.id = c), a.type = "machine.actor", a.setParent(this), this.children.set(a.id, C(a)), a.onDone(() => {
        this.removeChild(a.id);
      }).start(), C($t(a));
    }), p(this, "stopActivity", (i) => {
      var a;
      if (!this.state.value)
        return;
      const c = this.activityEvents.get(this.state.value);
      (a = c == null ? void 0 : c.get(i)) == null || a(), c == null || c.delete(i);
    }), p(this, "addActivityCleanup", (i, c, a) => {
      var u;
      i && (this.activityEvents.has(i) ? (u = this.activityEvents.get(i)) == null || u.set(c, a) : this.activityEvents.set(i, /* @__PURE__ */ new Map([[c, a]])));
    }), p(this, "setState", (i) => {
      this.state.previousValue = this.state.value, this.state.value = i;
      const c = this.getStateNode(i);
      i == null ? Le(this.state.tags) : this.state.tags = D(c == null ? void 0 : c.tags);
    }), p(this, "setContext", (i) => {
      i && Gt(this.state.context, et(i));
    }), p(this, "setOptions", (i) => {
      const c = et(i);
      this.actionMap = { ...this.actionMap, ...c.actions }, this.delayMap = { ...this.delayMap, ...c.delays }, this.activityMap = { ...this.activityMap, ...c.activities }, this.guardMap = { ...this.guardMap, ...c.guards };
    }), p(this, "getStateNode", (i) => {
      var c;
      if (i)
        return (c = this.config.states) == null ? void 0 : c[i];
    }), p(this, "getNextStateInfo", (i, c) => {
      const a = this.determineTransition(i, c), u = !(a != null && a.target), h = (a == null ? void 0 : a.target) ?? this.state.value, d = this.state.value !== h, y = this.getStateNode(h), S = {
        reenter: !u && !d && !(a != null && a.internal),
        transition: a,
        stateNode: y,
        target: h,
        changed: d
      };
      return this.log("NextState:", `[${c.type}]`, this.state.value, "---->", S.target), S;
    }), p(this, "getAfterActions", (i, c) => {
      let a;
      return {
        entry: () => {
          a = globalThis.setTimeout(() => {
            const u = this.getNextStateInfo(i, this.state.event);
            this.performStateChangeEffects(this.state.value, u, this.state.event);
          }, c);
        },
        exit: () => {
          globalThis.clearTimeout(a);
        }
      };
    }), p(this, "getDelayedEventActions", (i) => {
      const c = this.getStateNode(i), a = this.state.event;
      if (!c || !c.after)
        return;
      const u = [], h = [];
      if (Q(c.after)) {
        const d = this.determineTransition(c.after, a);
        if (!d)
          return;
        if (!Ie(d, "delay"))
          throw new Error(`[@zag-js/core > after] Delay is required for after transition: ${JSON.stringify(d)}`);
        const E = K(d.delay, this.delayMap)(this.contextSnapshot, a), S = this.getAfterActions(d, E);
        return u.push(S.entry), h.push(S.exit), { entries: u, exits: h };
      }
      if (k(c.after))
        for (const d in c.after) {
          const y = c.after[d], S = K(d, this.delayMap)(this.contextSnapshot, a), O = this.getAfterActions(y, S);
          u.push(O.entry), h.push(O.exit);
        }
      return { entries: u, exits: h };
    }), p(this, "executeActions", (i, c) => {
      var u;
      const a = ut(i, this.guardMap)(this.contextSnapshot, c, this.guardMeta);
      for (const h of D(a)) {
        const d = x(h) ? (u = this.actionMap) == null ? void 0 : u[h] : h;
        ft(
          x(h) && !d,
          `[@zag-js/core > execute-actions] No implementation found for action: \`${h}\``
        ), d == null || d(this.state.context, c, this.meta);
      }
    }), p(this, "executeActivities", (i, c, a) => {
      var u;
      for (const h of c) {
        const d = x(h) ? (u = this.activityMap) == null ? void 0 : u[h] : h;
        if (!d) {
          ft(`[@zag-js/core > execute-activity] No implementation found for activity: \`${h}\``);
          continue;
        }
        const y = d(this.state.context, i, this.meta);
        if (y) {
          const E = x(h) ? h : h.name || _t();
          this.addActivityCleanup(a ?? this.state.value, E, y);
        }
      }
    }), p(this, "createEveryActivities", (i, c) => {
      if (i)
        if (Q(i)) {
          const a = D(i).find((y) => {
            const E = y.delay, O = K(E, this.delayMap)(this.contextSnapshot, this.state.event);
            return Ht(y.guard, this.guardMap)(this.contextSnapshot, this.state.event, this.guardMeta) ?? O != null;
          });
          if (!a)
            return;
          const h = K(a.delay, this.delayMap)(this.contextSnapshot, this.state.event);
          c(() => {
            const y = globalThis.setInterval(() => {
              this.executeActions(a.actions, this.state.event);
            }, h);
            return () => {
              globalThis.clearInterval(y);
            };
          });
        } else
          for (const a in i) {
            const u = i == null ? void 0 : i[a], d = K(a, this.delayMap)(this.contextSnapshot, this.state.event);
            c(() => {
              const E = globalThis.setInterval(() => {
                this.executeActions(u, this.state.event);
              }, d);
              return () => {
                globalThis.clearInterval(E);
              };
            });
          }
    }), p(this, "setEvent", (i) => {
      this.state.previousEvent = this.state.event, this.state.event = $t(j(i));
    }), p(this, "performExitEffects", (i, c) => {
      const a = this.state.value;
      if (a === "")
        return;
      const u = i ? this.getStateNode(i) : void 0;
      this.stopActivities(a);
      const h = ut(u == null ? void 0 : u.exit, this.guardMap)(this.contextSnapshot, c, this.guardMeta), d = D(h), y = this.delayedEvents.get(a);
      y && d.push(...y), this.executeActions(d, c);
    }), p(this, "performEntryEffects", (i, c) => {
      const a = this.getStateNode(i), u = D(a == null ? void 0 : a.activities);
      this.createEveryActivities(a == null ? void 0 : a.every, (E) => {
        u.unshift(E);
      }), u.length > 0 && this.executeActivities(c, u);
      const h = ut(a == null ? void 0 : a.entry, this.guardMap)(
        this.contextSnapshot,
        c,
        this.guardMeta
      ), d = D(h), y = this.getDelayedEventActions(i);
      a != null && a.after && y && (this.delayedEvents.set(i, y == null ? void 0 : y.exits), d.push(...y.entries)), this.executeActions(d, c), (a == null ? void 0 : a.type) === "final" && (this.state.done = !0, this.doneListeners.forEach((E) => {
        E(this.stateSnapshot);
      }), this.stop());
    }), p(this, "performTransitionEffects", (i, c) => {
      const a = this.determineTransition(i, c);
      this.executeActions(a == null ? void 0 : a.actions, c);
    }), p(this, "performStateChangeEffects", (i, c, a) => {
      this.setEvent(a);
      const u = c.changed || c.reenter;
      u && this.performExitEffects(i, a), this.performTransitionEffects(c.transition, a), this.setState(c.target), u && this.performEntryEffects(c.target, a);
    }), p(this, "determineTransition", (i, c) => {
      const a = Ue(i, this.guardMap);
      return a == null ? void 0 : a(this.contextSnapshot, c, this.guardMeta);
    }), p(this, "sendParent", (i) => {
      var a;
      this.parent || J("[@zag-js/core > send-parent] Cannot send event to an unknown parent");
      const c = j(i);
      (a = this.parent) == null || a.send(c);
    }), p(this, "log", (...i) => {
      Ve() && this.options.debug && console.log(...i);
    }), p(this, "send", (i) => {
      const c = j(i);
      this.transition(this.state.value, c);
    }), p(this, "transition", (i, c) => {
      var y, E;
      const a = x(i) ? this.getStateNode(i) : i == null ? void 0 : i.stateNode, u = j(c);
      if (!a && !this.config.on) {
        const S = this.status === "Stopped" ? "[@zag-js/core > transition] Cannot transition a stopped machine" : `[@zag-js/core > transition] State does not have a definition for \`state\`: ${i}, \`event\`: ${u.type}`;
        ft(S);
        return;
      }
      const h = ((y = a == null ? void 0 : a.on) == null ? void 0 : y[u.type]) ?? ((E = this.config.on) == null ? void 0 : E[u.type]), d = this.getNextStateInfo(h, u);
      return this.performStateChangeEffects(this.state.value, d, u), d.stateNode;
    }), p(this, "subscribe", (i) => (this.stateListeners.add(i), this.status === "Running" && i(this.stateSnapshot), () => {
      this.stateListeners.delete(i);
    })), p(this, "onDone", (i) => (this.doneListeners.add(i), this)), p(this, "onTransition", (i) => (this.stateListeners.add(i), this.status === "Running" && i(this.stateSnapshot), this)), this.config = Rt(t), this.options = Rt(e ?? {}), this.id = this.config.id ?? `machine-${_t()}`, this.guardMap = ((s = this.options) == null ? void 0 : s.guards) ?? {}, this.actionMap = ((r = this.options) == null ? void 0 : r.actions) ?? {}, this.delayMap = ((o = this.options) == null ? void 0 : o.delays) ?? {}, this.activityMap = ((f = this.options) == null ? void 0 : f.activities) ?? {}, this.sync = ((l = this.options) == null ? void 0 : l.sync) ?? !1, this.state = Ze(this.config), this.initialContext = F(this.state.context);
    const n = j(
      "machine.created"
      /* Created */
    );
    this.executeActions((g = this.config) == null ? void 0 : g.created, n);
  }
  // immutable state value
  get stateSnapshot() {
    return C(F(this.state));
  }
  getState() {
    return this.stateSnapshot;
  }
  // immutable context value
  get contextSnapshot() {
    return this.stateSnapshot.context;
  }
  /**
   * A reference to the instance methods of the machine.
   * Useful when spawning child machines and managing the communication between them.
   */
  get self() {
    const t = this;
    return {
      id: this.id,
      send: this.send.bind(this),
      sendParent: this.sendParent.bind(this),
      sendChild: this.sendChild.bind(this),
      stop: this.stop.bind(this),
      stopChild: this.stopChild.bind(this),
      spawn: this.spawn.bind(this),
      stopActivity: this.stopActivity.bind(this),
      get state() {
        return t.stateSnapshot;
      },
      get initialContext() {
        return t.initialContext;
      },
      get initialState() {
        var e;
        return ((e = t.initialState) == null ? void 0 : e.target) ?? "";
      }
    };
  }
  get meta() {
    var t;
    return {
      state: this.stateSnapshot,
      guards: this.guardMap,
      send: this.send.bind(this),
      self: this.self,
      initialContext: this.initialContext,
      initialState: ((t = this.initialState) == null ? void 0 : t.target) ?? "",
      getState: () => this.stateSnapshot,
      getAction: (e) => this.actionMap[e],
      getGuard: (e) => this.guardMap[e]
    };
  }
  get guardMeta() {
    return {
      state: this.stateSnapshot
    };
  }
  get [Symbol.toStringTag]() {
    return "Machine";
  }
}, Ln = (t, e) => new Je(t, e);
const Xe = (t) => typeof t == "function", Fn = (t, ...e) => Xe(t) ? t(...e) : t;
var ht = (t, e = []) => ({
  parts: (...n) => {
    if (Ye(e))
      return ht(t, n);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...n) => ht(t, [...e, ...n]),
  rename: (n) => ht(n, e),
  keys: () => e,
  build: () => [...new Set(e)].reduce(
    (n, s) => Object.assign(n, {
      [s]: {
        selector: [
          `&[data-scope="${R(t)}"][data-part="${R(s)}"]`,
          `& [data-scope="${R(t)}"][data-part="${R(s)}"]`
        ].join(", "),
        attrs: { "data-scope": R(t), "data-part": R(s) }
      }
    }),
    {}
  )
}), R = (t) => t.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Ye = (t) => t.length === 0, Vn = (t) => t ? "" : void 0, Wn = (t) => t ? "true" : void 0, nt = (t) => typeof t == "object" && (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE && typeof (t == null ? void 0 : t.nodeName) == "string", Ut = (t) => t.nodeType === Node.DOCUMENT_NODE, Qe = (t) => t != null && t === t.window, tn = (t) => t.nodeType !== void 0, en = (t) => t && tn(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
function nn(t, e) {
  return !t || !e || !nt(t) || !nt(e) ? !1 : t === e || t.contains(e);
}
function sn(t) {
  return Ut(t) ? t : Qe(t) ? t.document : (t == null ? void 0 : t.ownerDocument) ?? document;
}
function wt(t) {
  var e;
  return en(t) ? wt(t.host) : Ut(t) ? t.defaultView ?? window : nt(t) ? ((e = t.ownerDocument) == null ? void 0 : e.defaultView) ?? window : window;
}
function In(t) {
  var e;
  return ((e = t.composedPath) == null ? void 0 : e.call(t)[0]) ?? t.target;
}
var zn = (t) => nn(t.currentTarget, t.target), Et = (t) => t.id;
function rn(t, e, n = Et) {
  return t.find((s) => n(s) === e);
}
function on(t, e, n = Et) {
  const s = rn(t, e, n);
  return s ? t.indexOf(s) : -1;
}
var cn = (t) => t.split("").map((e) => {
  const n = e.charCodeAt(0);
  return n > 0 && n < 128 ? e : n >= 128 && n <= 255 ? `/x${n.toString(16)}`.replace("/", "\\") : "";
}).join("").trim(), an = (t) => cn(t.dataset.valuetext ?? t.textContent ?? ""), fn = (t, e) => t.trim().toLowerCase().startsWith(e.toLowerCase()), un = (t, e) => t.map((n, s) => t[(Math.max(e, 0) + s) % t.length]);
function hn(t, e, n, s = Et) {
  const r = n ? on(t, n, s) : -1;
  let o = n ? un(t, r) : t;
  return e.length === 1 && (o = o.filter((l) => s(l) !== n)), o.find((l) => fn(an(l), e));
}
function ln(t, e) {
  const { state: n, activeId: s, key: r, timeout: o = 350, itemToId: f } = e, l = n.keysSoFar + r, i = l.length > 1 && Array.from(l).every((d) => d === l[0]) ? l[0] : l;
  let c = t.slice();
  const a = hn(c, i, s, f);
  function u() {
    clearTimeout(n.timer), n.timer = -1;
  }
  function h(d) {
    n.keysSoFar = d, u(), d !== "" && (n.timer = +setTimeout(() => {
      h(""), u();
    }, o));
  }
  return h(l), a;
}
var Kn = /* @__PURE__ */ Object.assign(ln, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: dn
});
function dn(t) {
  return t.key.length === 1 && !t.ctrlKey && !t.metaKey;
}
function qn(t) {
  if (t == null || !nt(t))
    return !1;
  try {
    const e = wt(t);
    return t instanceof e.HTMLInputElement && t.selectionStart != null || /(textarea|select)/.test(t.localName) || t.isContentEditable;
  } catch {
    return !1;
  }
}
var pn = /auto|scroll|overlay|hidden|clip/;
function yn(t) {
  const e = wt(t), { overflow: n, overflowX: s, overflowY: r, display: o } = e.getComputedStyle(t);
  return pn.test(n + r + s) && !["inline", "contents"].includes(o);
}
var gn = () => typeof document < "u";
function mn() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
var vn = (t) => gn() && t.test(mn()), Bn = () => vn(/iP(hone|ad|od)|iOS/);
function kn(t) {
  const e = /* @__PURE__ */ new Set();
  function n(s) {
    const r = globalThis.requestAnimationFrame(s);
    e.add(() => globalThis.cancelAnimationFrame(r));
  }
  return n(() => n(t)), function() {
    e.forEach((r) => r());
  };
}
function Gn(t) {
  const e = globalThis.requestAnimationFrame(t);
  return () => {
    globalThis.cancelAnimationFrame(e);
  };
}
function Zn(t) {
  const e = {
    getRootNode: (n) => {
      var s;
      return ((s = n.getRootNode) == null ? void 0 : s.call(n)) ?? document;
    },
    getDoc: (n) => sn(e.getRootNode(n)),
    getWin: (n) => e.getDoc(n).defaultView ?? window,
    getActiveElement: (n) => e.getDoc(n).activeElement,
    isActiveElement: (n, s) => s === e.getActiveElement(n),
    getById: (n, s) => e.getRootNode(n).getElementById(s),
    setValue: (n, s) => {
      if (n == null || s == null)
        return;
      const r = s.toString();
      n.value !== r && (n.value = s.toString());
    }
  };
  return { ...e, ...t };
}
function wn(t) {
  return t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth;
}
function Hn(t, e) {
  const { rootEl: n, ...s } = e || {};
  !t || !n || !yn(n) || !wn(n) || t.scrollIntoView(s);
}
var En = (t, e) => t.indexOf(e) !== -1, Sn = (t, ...e) => t.concat(e), bn = (t, e) => t.filter((n) => n !== e), Un = (t, e) => En(t, e) ? bn(t, e) : Sn(t, e), Lt = (t) => (t == null ? void 0 : t.constructor.name) === "Array", An = (t, e) => {
  if (Object.is(t, e))
    return !0;
  if (t == null && e != null || t != null && e == null)
    return !1;
  if (typeof (t == null ? void 0 : t.isEqual) == "function" && typeof (e == null ? void 0 : e.isEqual) == "function")
    return t.isEqual(e);
  if (typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  if (Lt(t) && Lt(e))
    return Array.from(t).toString() === Array.from(e).toString();
  if (typeof t != "object" || typeof e != "object")
    return !1;
  const n = Object.keys(e ?? /* @__PURE__ */ Object.create(null)), s = n.length;
  for (let r = 0; r < s; r++)
    if (!Reflect.has(t, n[r]))
      return !1;
  for (let r = 0; r < s; r++) {
    const o = n[r];
    if (!An(t[o], e[o]))
      return !1;
  }
  return !0;
}, Jn = (t, ...e) => (typeof t == "function" ? t(...e) : t) ?? void 0, Xn = () => {
}, Yn = (...t) => (...e) => {
  t.forEach(function(n) {
    n == null || n(...e);
  });
}, Qn = (t) => t == null;
function On(t) {
  if (!jn(t) || t === void 0)
    return t;
  const e = Reflect.ownKeys(t).filter((s) => typeof s == "string"), n = {};
  for (const s of e) {
    const r = t[s];
    r !== void 0 && (n[s] = On(r));
  }
  return n;
}
var jn = (t) => t && typeof t == "object" && t.constructor === Object;
function ts(...t) {
  const e = t.length === 1 ? t[0] : t[1];
  (t.length === 2 ? t[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(e);
}
const [es, ns] = ie({
  hookName: "useEnvironmentContext",
  providerName: "<EnvironmentProvider />",
  strict: !1
});
export {
  Hn as A,
  Xn as B,
  nt as C,
  Qn as D,
  wt as E,
  sn as F,
  In as G,
  nn as H,
  Yn as I,
  ts as J,
  Zn as a,
  On as b,
  ht as c,
  Vn as d,
  Ln as e,
  Nn as f,
  Jn as g,
  ie as h,
  Bn as i,
  _n as j,
  Mn as k,
  $n as l,
  Dn as m,
  kn as n,
  Tn as o,
  Fn as p,
  Kn as q,
  Gn as r,
  Wn as s,
  zn as t,
  ns as u,
  qn as v,
  $t as w,
  Rn as x,
  An as y,
  Un as z
};
