var ni = Object.defineProperty;
var ii = (r, e, t) => e in r ? ni(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var hr = (r, e, t) => ii(r, typeof e != "symbol" ? e + "" : e, t);
const si = {
  context: void 0,
  registry: void 0
}, ai = (r, e) => r === e, oi = Symbol("solid-track"), Bt = {
  equals: ai
};
let bn = xn;
const Ge = 1, Gt = 2, wn = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Z = null;
let mr = null, li = null, W = null, re = null, Ce = null, dr = 0;
function qe(r, e) {
  const t = W, n = Z, i = r.length === 0, s = e === void 0 ? n : e, a = i ? wn : {
    owned: null,
    cleanups: null,
    context: s ? s.context : null,
    owner: s
  }, o = i ? r : () => r(() => ce(() => cr(a)));
  Z = a, W = null;
  try {
    return ut(o, !0);
  } finally {
    W = t, Z = n;
  }
}
function X(r, e) {
  e = e ? Object.assign({}, Bt, e) : Bt;
  const t = {
    value: r,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (i) => (typeof i == "function" && (i = i(t.value)), _n(t, i));
  return [Sn.bind(t), n];
}
function ne(r, e, t) {
  const n = zr(r, e, !1, Ge);
  Lt(n);
}
function Pe(r, e, t) {
  bn = vi;
  const n = zr(r, e, !1, Ge);
  (!t || !t.render) && (n.user = !0), Ce ? Ce.push(n) : Lt(n);
}
function oe(r, e, t) {
  t = t ? Object.assign({}, Bt, t) : Bt;
  const n = zr(r, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = t.equals || void 0, Lt(n), Sn.bind(n);
}
function ce(r) {
  if (W === null) return r();
  const e = W;
  W = null;
  try {
    return r();
  } finally {
    W = e;
  }
}
function di(r, e, t) {
  const n = Array.isArray(r);
  let i, s = t && t.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(r.length);
      for (let c = 0; c < r.length; c++) o[c] = r[c]();
    } else o = r();
    if (s)
      return s = !1, a;
    const l = ce(() => e(o, i, a));
    return i = o, l;
  };
}
function ct(r) {
  Pe(() => ce(r));
}
function Ke(r) {
  return Z === null || (Z.cleanups === null ? Z.cleanups = [r] : Z.cleanups.push(r)), r;
}
function Q() {
  return Z;
}
function ci(r, e) {
  const t = Z, n = W;
  Z = r, W = null;
  try {
    return ut(e, !0);
  } catch (i) {
    Vr(i);
  } finally {
    Z = t, W = n;
  }
}
function ui(r, e) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: yi(t),
    defaultValue: r
  };
}
function fi(r) {
  return Z && Z.context && Z.context[r.id] !== void 0 ? Z.context[r.id] : r.defaultValue;
}
function pi(r) {
  const e = oe(r), t = oe(() => Er(e()));
  return t.toArray = () => {
    const n = t();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, t;
}
function Sn() {
  if (this.sources && this.state)
    if (this.state === Ge) Lt(this);
    else {
      const r = re;
      re = null, ut(() => Ut(this), !1), re = r;
    }
  if (W) {
    const r = this.observers ? this.observers.length : 0;
    W.sources ? (W.sources.push(this), W.sourceSlots.push(r)) : (W.sources = [this], W.sourceSlots = [r]), this.observers ? (this.observers.push(W), this.observerSlots.push(W.sources.length - 1)) : (this.observers = [W], this.observerSlots = [W.sources.length - 1]);
  }
  return this.value;
}
function _n(r, e, t) {
  let n = r.value;
  return (!r.comparator || !r.comparator(n, e)) && (r.value = e, r.observers && r.observers.length && ut(() => {
    for (let i = 0; i < r.observers.length; i += 1) {
      const s = r.observers[i], a = mr && mr.running;
      a && mr.disposed.has(s), (a ? !s.tState : !s.state) && (s.pure ? re.push(s) : Ce.push(s), s.observers && Tn(s)), a || (s.state = Ge);
    }
    if (re.length > 1e6)
      throw re = [], new Error();
  }, !1)), e;
}
function Lt(r) {
  if (!r.fn) return;
  cr(r);
  const e = dr;
  hi(
    r,
    r.value,
    e
  );
}
function hi(r, e, t) {
  let n;
  const i = Z, s = W;
  W = Z = r;
  try {
    n = r.fn(e);
  } catch (a) {
    return r.pure && (r.state = Ge, r.owned && r.owned.forEach(cr), r.owned = null), r.updatedAt = t + 1, Vr(a);
  } finally {
    W = s, Z = i;
  }
  (!r.updatedAt || r.updatedAt <= t) && (r.updatedAt != null && "observers" in r ? _n(r, n) : r.value = n, r.updatedAt = t);
}
function zr(r, e, t, n = Ge, i) {
  const s = {
    fn: r,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: Z,
    context: Z ? Z.context : null,
    pure: t
  };
  return Z === null || Z !== wn && (Z.owned ? Z.owned.push(s) : Z.owned = [s]), s;
}
function Wt(r) {
  if (r.state === 0) return;
  if (r.state === Gt) return Ut(r);
  if (r.suspense && ce(r.suspense.inFallback)) return r.suspense.effects.push(r);
  const e = [r];
  for (; (r = r.owner) && (!r.updatedAt || r.updatedAt < dr); )
    r.state && e.push(r);
  for (let t = e.length - 1; t >= 0; t--)
    if (r = e[t], r.state === Ge)
      Lt(r);
    else if (r.state === Gt) {
      const n = re;
      re = null, ut(() => Ut(r, e[0]), !1), re = n;
    }
}
function ut(r, e) {
  if (re) return r();
  let t = !1;
  e || (re = []), Ce ? t = !0 : Ce = [], dr++;
  try {
    const n = r();
    return mi(t), n;
  } catch (n) {
    t || (Ce = null), re = null, Vr(n);
  }
}
function mi(r) {
  if (re && (xn(re), re = null), r) return;
  const e = Ce;
  Ce = null, e.length && ut(() => bn(e), !1);
}
function xn(r) {
  for (let e = 0; e < r.length; e++) Wt(r[e]);
}
function vi(r) {
  let e, t = 0;
  for (e = 0; e < r.length; e++) {
    const n = r[e];
    n.user ? r[t++] = n : Wt(n);
  }
  for (e = 0; e < t; e++) Wt(r[e]);
}
function Ut(r, e) {
  r.state = 0;
  for (let t = 0; t < r.sources.length; t += 1) {
    const n = r.sources[t];
    if (n.sources) {
      const i = n.state;
      i === Ge ? n !== e && (!n.updatedAt || n.updatedAt < dr) && Wt(n) : i === Gt && Ut(n, e);
    }
  }
}
function Tn(r) {
  for (let e = 0; e < r.observers.length; e += 1) {
    const t = r.observers[e];
    t.state || (t.state = Gt, t.pure ? re.push(t) : Ce.push(t), t.observers && Tn(t));
  }
}
function cr(r) {
  let e;
  if (r.sources)
    for (; r.sources.length; ) {
      const t = r.sources.pop(), n = r.sourceSlots.pop(), i = t.observers;
      if (i && i.length) {
        const s = i.pop(), a = t.observerSlots.pop();
        n < i.length && (s.sourceSlots[a] = n, i[n] = s, t.observerSlots[n] = a);
      }
    }
  if (r.owned) {
    for (e = r.owned.length - 1; e >= 0; e--) cr(r.owned[e]);
    r.owned = null;
  }
  if (r.cleanups) {
    for (e = r.cleanups.length - 1; e >= 0; e--) r.cleanups[e]();
    r.cleanups = null;
  }
  r.state = 0;
}
function gi(r) {
  return r instanceof Error ? r : new Error(typeof r == "string" ? r : "Unknown error", {
    cause: r
  });
}
function Vr(r, e = Z) {
  throw gi(r);
}
function Er(r) {
  if (typeof r == "function" && !r.length) return Er(r());
  if (Array.isArray(r)) {
    const e = [];
    for (let t = 0; t < r.length; t++) {
      const n = Er(r[t]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return r;
}
function yi(r, e) {
  return function(n) {
    let i;
    return ne(
      () => i = ce(() => (Z.context = {
        ...Z.context,
        [r]: n.value
      }, pi(() => n.children))),
      void 0
    ), i;
  };
}
const bi = Symbol("fallback");
function Yr(r) {
  for (let e = 0; e < r.length; e++) r[e]();
}
function wi(r, e, t = {}) {
  let n = [], i = [], s = [], a = 0, o = e.length > 1 ? [] : null;
  return Ke(() => Yr(s)), () => {
    let l = r() || [], c, d;
    return l[oi], ce(() => {
      let p = l.length, f, m, g, T, w, b, y, _, x;
      if (p === 0)
        a !== 0 && (Yr(s), s = [], n = [], i = [], a = 0, o && (o = [])), t.fallback && (n = [bi], i[0] = qe((A) => (s[0] = A, t.fallback())), a = 1);
      else if (a === 0) {
        for (i = new Array(p), d = 0; d < p; d++)
          n[d] = l[d], i[d] = qe(u);
        a = p;
      } else {
        for (g = new Array(p), T = new Array(p), o && (w = new Array(p)), b = 0, y = Math.min(a, p); b < y && n[b] === l[b]; b++) ;
        for (y = a - 1, _ = p - 1; y >= b && _ >= b && n[y] === l[_]; y--, _--)
          g[_] = i[y], T[_] = s[y], o && (w[_] = o[y]);
        for (f = /* @__PURE__ */ new Map(), m = new Array(_ + 1), d = _; d >= b; d--)
          x = l[d], c = f.get(x), m[d] = c === void 0 ? -1 : c, f.set(x, d);
        for (c = b; c <= y; c++)
          x = n[c], d = f.get(x), d !== void 0 && d !== -1 ? (g[d] = i[c], T[d] = s[c], o && (w[d] = o[c]), d = m[d], f.set(x, d)) : s[c]();
        for (d = b; d < p; d++)
          d in g ? (i[d] = g[d], s[d] = T[d], o && (o[d] = w[d], o[d](d))) : i[d] = qe(u);
        i = i.slice(0, a = p), n = l.slice(0);
      }
      return i;
    });
    function u(p) {
      if (s[d] = p, o) {
        const [f, m] = X(d);
        return o[d] = m, e(l[d], f);
      }
      return e(l[d]);
    }
  };
}
function pe(r, e) {
  return ce(() => r(e || {}));
}
let Si = 0;
function Zr() {
  return `cl-${Si++}`;
}
const _i = (r) => `Stale read from <${r}>.`;
function bt(r) {
  const e = "fallback" in r && {
    fallback: () => r.fallback
  };
  return oe(wi(() => r.each, r.children, e || void 0));
}
function kr(r) {
  const e = r.keyed, t = oe(() => r.when, void 0, {
    equals: (n, i) => e ? n === i : !n == !i
  });
  return oe(
    () => {
      const n = t();
      if (n) {
        const i = r.children;
        return typeof i == "function" && i.length > 0 ? ce(
          () => i(
            e ? n : () => {
              if (!ce(t)) throw _i("Show");
              return r.when;
            }
          )
        ) : i;
      }
      return r.fallback;
    },
    void 0,
    void 0
  );
}
function xi(r, e, t) {
  let n = t.length, i = e.length, s = n, a = 0, o = 0, l = e[i - 1].nextSibling, c = null;
  for (; a < i || o < s; ) {
    if (e[a] === t[o]) {
      a++, o++;
      continue;
    }
    for (; e[i - 1] === t[s - 1]; )
      i--, s--;
    if (i === a) {
      const d = s < n ? o ? t[o - 1].nextSibling : t[s - o] : l;
      for (; o < s; ) r.insertBefore(t[o++], d);
    } else if (s === o)
      for (; a < i; )
        (!c || !c.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === t[s - 1] && t[o] === e[i - 1]) {
      const d = e[--i].nextSibling;
      r.insertBefore(t[o++], e[a++].nextSibling), r.insertBefore(t[--s], d), e[i] = t[s];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let u = o;
        for (; u < s; ) c.set(t[u], u++);
      }
      const d = c.get(e[a]);
      if (d != null)
        if (o < d && d < s) {
          let u = a, p = 1, f;
          for (; ++u < i && u < s && !((f = c.get(e[u])) == null || f !== d + p); )
            p++;
          if (p > d - o) {
            const m = e[a];
            for (; o < d; ) r.insertBefore(t[o++], m);
          } else r.replaceChild(t[o++], e[a++]);
        } else a++;
      else e[a++].remove();
    }
  }
}
const Kr = "_$DX_DELEGATE";
function Ti(r, e, t, n = {}) {
  let i;
  return qe((s) => {
    i = s, e === document ? r() : q(e, r(), e.firstChild ? null : void 0, t);
  }, n.owner), () => {
    i(), e.textContent = "";
  };
}
function se(r, e, t) {
  let n;
  const i = () => {
    const a = document.createElement("template");
    return a.innerHTML = r, t ? a.content.firstChild.firstChild : a.content.firstChild;
  }, s = e ? () => ce(() => document.importNode(n || (n = i()), !0)) : () => (n || (n = i())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function Fr(r, e = window.document) {
  const t = e[Kr] || (e[Kr] = /* @__PURE__ */ new Set());
  for (let n = 0, i = r.length; n < i; n++) {
    const s = r[n];
    t.has(s) || (t.add(s), e.addEventListener(s, Ei));
  }
}
function te(r, e, t) {
  t == null ? r.removeAttribute(e) : r.setAttribute(e, t);
}
function je(r, e, t) {
  return ce(() => r(e, t));
}
function q(r, e, t, n) {
  if (t !== void 0 && !n && (n = []), typeof e != "function") return Ht(r, e, n, t);
  ne((i) => Ht(r, e(), i, t), n);
}
function Ei(r) {
  const e = `$$${r.type}`;
  let t = r.composedPath && r.composedPath()[0] || r.target;
  for (r.target !== t && Object.defineProperty(r, "target", {
    configurable: !0,
    value: t
  }), Object.defineProperty(r, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }); t; ) {
    const n = t[e];
    if (n && !t.disabled) {
      const i = t[`${e}Data`];
      if (i !== void 0 ? n.call(t, i, r) : n.call(t, r), r.cancelBubble) return;
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function Ht(r, e, t, n, i) {
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const s = typeof e, a = n !== void 0;
  if (r = a && t[0] && t[0].parentNode || r, s === "string" || s === "number")
    if (s === "number" && (e = e.toString()), a) {
      let o = t[0];
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), t = tt(r, t, n, o);
    } else
      t !== "" && typeof t == "string" ? t = r.firstChild.data = e : t = r.textContent = e;
  else if (e == null || s === "boolean")
    t = tt(r, t, n);
  else {
    if (s === "function")
      return ne(() => {
        let o = e();
        for (; typeof o == "function"; ) o = o();
        t = Ht(r, o, t, n);
      }), () => t;
    if (Array.isArray(e)) {
      const o = [], l = t && Array.isArray(t);
      if (Cr(o, e, t, i))
        return ne(() => t = Ht(r, o, t, n, !0)), () => t;
      if (o.length === 0) {
        if (t = tt(r, t, n), a) return t;
      } else l ? t.length === 0 ? Xr(r, o, n) : xi(r, t, o) : (t && tt(r), Xr(r, o));
      t = o;
    } else if (e.nodeType) {
      if (Array.isArray(t)) {
        if (a) return t = tt(r, t, n, e);
        tt(r, t, null, e);
      } else t == null || t === "" || !r.firstChild ? r.appendChild(e) : r.replaceChild(e, r.firstChild);
      t = e;
    }
  }
  return t;
}
function Cr(r, e, t, n) {
  let i = !1;
  for (let s = 0, a = e.length; s < a; s++) {
    let o = e[s], l = t && t[r.length], c;
    if (!(o == null || o === !0 || o === !1)) if ((c = typeof o) == "object" && o.nodeType)
      r.push(o);
    else if (Array.isArray(o))
      i = Cr(r, o, l) || i;
    else if (c === "function")
      if (n) {
        for (; typeof o == "function"; ) o = o();
        i = Cr(
          r,
          Array.isArray(o) ? o : [o],
          Array.isArray(l) ? l : [l]
        ) || i;
      } else
        r.push(o), i = !0;
    else {
      const d = String(o);
      l && l.nodeType === 3 && l.data === d ? r.push(l) : r.push(document.createTextNode(d));
    }
  }
  return i;
}
function Xr(r, e, t = null) {
  for (let n = 0, i = e.length; n < i; n++) r.insertBefore(e[n], t);
}
function tt(r, e, t, n) {
  if (t === void 0) return r.textContent = "";
  const i = n || document.createTextNode("");
  if (e.length) {
    let s = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (i !== o) {
        const l = o.parentNode === r;
        !s && !a ? l ? r.replaceChild(i, o) : r.insertBefore(i, t) : l && o.remove();
      } else s = !0;
    }
  } else r.insertBefore(i, t);
  return [i];
}
const ki = "http://www.w3.org/2000/svg";
function Ci(r, e = !1) {
  return e ? document.createElementNS(ki, r) : document.createElement(r);
}
function En(r) {
  const { useShadow: e } = r, t = document.createTextNode(""), n = () => r.mount || document.body, i = Q();
  let s, a = !!si.context;
  return Pe(
    () => {
      s || (s = ci(i, () => oe(() => r.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [l, c] = X(!1), d = () => c(!0);
        qe((u) => q(o, () => l() ? u() : s(), null)), Ke(d);
      } else {
        const l = Ci(r.isSVG ? "g" : "div", r.isSVG), c = e && l.attachShadow ? l.attachShadow({
          mode: "open"
        }) : l;
        Object.defineProperty(l, "_$host", {
          get() {
            return t.parentNode;
          },
          configurable: !0
        }), q(c, s), o.appendChild(l), r.ref && r.ref(l), Ke(() => o.removeChild(l));
      }
    },
    void 0,
    {
      render: !a
    }
  ), t;
}
var z;
(function(r) {
  r.assertEqual = (i) => i;
  function e(i) {
  }
  r.assertIs = e;
  function t(i) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (i) => {
    const s = {};
    for (const a of i)
      s[a] = a;
    return s;
  }, r.getValidEnumValues = (i) => {
    const s = r.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of s)
      a[o] = i[o];
    return r.objectValues(a);
  }, r.objectValues = (i) => r.objectKeys(i).map(function(s) {
    return i[s];
  }), r.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
    return s;
  }, r.find = (i, s) => {
    for (const a of i)
      if (s(a))
        return a;
  }, r.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  r.joinValues = n, r.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(z || (z = {}));
var Pr;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Pr || (Pr = {}));
const C = z.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Re = (r) => {
  switch (typeof r) {
    case "undefined":
      return C.undefined;
    case "string":
      return C.string;
    case "number":
      return isNaN(r) ? C.nan : C.number;
    case "boolean":
      return C.boolean;
    case "function":
      return C.function;
    case "bigint":
      return C.bigint;
    case "symbol":
      return C.symbol;
    case "object":
      return Array.isArray(r) ? C.array : r === null ? C.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? C.promise : typeof Map < "u" && r instanceof Map ? C.map : typeof Set < "u" && r instanceof Set ? C.set : typeof Date < "u" && r instanceof Date ? C.date : C.object;
    default:
      return C.unknown;
  }
}, S = z.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Pi = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class de extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(s) {
      return s.message;
    }, n = { _errors: [] }, i = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(t(a));
        else {
          let o = n, l = 0;
          for (; l < a.path.length; ) {
            const c = a.path[l];
            l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof de))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, z.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const i of this.issues)
      i.path.length > 0 ? (t[i.path[0]] = t[i.path[0]] || [], t[i.path[0]].push(e(i))) : n.push(e(i));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
de.create = (r) => new de(r);
const ot = (r, e) => {
  let t;
  switch (r.code) {
    case S.invalid_type:
      r.received === C.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case S.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, z.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${z.joinValues(r.keys, ", ")}`;
      break;
    case S.invalid_union:
      t = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${z.joinValues(r.options)}`;
      break;
    case S.invalid_enum_value:
      t = `Invalid enum value. Expected ${z.joinValues(r.options)}, received '${r.received}'`;
      break;
    case S.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      t = "Invalid function return type";
      break;
    case S.invalid_date:
      t = "Invalid date";
      break;
    case S.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : z.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case S.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case S.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case S.custom:
      t = "Invalid input";
      break;
    case S.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case S.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, z.assertNever(r);
  }
  return { message: t };
};
let kn = ot;
function Ii(r) {
  kn = r;
}
function qt() {
  return kn;
}
const Yt = (r) => {
  const { data: e, path: t, errorMaps: n, issueData: i } = r, s = [...t, ...i.path || []], a = {
    ...i,
    path: s
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: s,
      message: i.message
    };
  let o = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: o
  };
}, Oi = [];
function k(r, e) {
  const t = qt(), n = Yt({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      t,
      t === ot ? void 0 : ot
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class ie {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const i of t) {
      if (i.status === "aborted")
        return N;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const i of t) {
      const s = await i.key, a = await i.value;
      n.push({
        key: s,
        value: a
      });
    }
    return ie.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return N;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const N = Object.freeze({
  status: "aborted"
}), it = (r) => ({ status: "dirty", value: r }), ae = (r) => ({ status: "valid", value: r }), Ir = (r) => r.status === "aborted", Or = (r) => r.status === "dirty", wt = (r) => r.status === "valid", St = (r) => typeof Promise < "u" && r instanceof Promise;
function Kt(r, e, t, n) {
  if (typeof e == "function" ? r !== e || !n : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(r);
}
function Cn(r, e, t, n, i) {
  if (typeof e == "function" ? r !== e || !i : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(r, t), t;
}
var O;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(O || (O = {}));
var vt, gt;
class _e {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Jr = (r, e) => {
  if (wt(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new de(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function R(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: i } = r;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => {
    var l, c;
    const { message: d } = r;
    return a.code === "invalid_enum_value" ? { message: d ?? o.defaultError } : typeof o.data > "u" ? { message: (l = d ?? n) !== null && l !== void 0 ? l : o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = d ?? t) !== null && c !== void 0 ? c : o.defaultError };
  }, description: i };
}
class D {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Re(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: Re(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ie(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Re(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (St(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    var n;
    const i = {
      common: {
        issues: [],
        async: (n = t == null ? void 0 : t.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Re(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return Jr(i, s);
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Re(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (St(i) ? i : Promise.resolve(i));
    return Jr(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: S.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new ge({
      schema: this,
      typeName: M.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Se.create(this, this._def);
  }
  nullable() {
    return Fe.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ve.create(this, this._def);
  }
  promise() {
    return dt.create(this, this._def);
  }
  or(e) {
    return Et.create([this, e], this._def);
  }
  and(e) {
    return kt.create(this, e, this._def);
  }
  transform(e) {
    return new ge({
      ...R(this._def),
      schema: this,
      typeName: M.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new At({
      ...R(this._def),
      innerType: this,
      defaultValue: t,
      typeName: M.ZodDefault
    });
  }
  brand() {
    return new Br({
      typeName: M.ZodBranded,
      type: this,
      ...R(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Mt({
      ...R(this._def),
      innerType: this,
      catchValue: t,
      typeName: M.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Rt.create(this, e);
  }
  readonly() {
    return Nt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ai = /^c[^\s-]{8,}$/i, Mi = /^[0-9a-z]+$/, Ni = /^[0-9A-HJKMNP-TV-Z]{26}$/, $i = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Li = /^[a-z0-9_-]{21}$/i, Ri = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Di = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let vr;
const zi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Vi = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Zi = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Pn = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Fi = new RegExp(`^${Pn}$`);
function In(r) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Bi(r) {
  return new RegExp(`^${In(r)}$`);
}
function On(r) {
  let e = `${Pn}T${In(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Gi(r, e) {
  return !!((e === "v4" || !e) && zi.test(r) || (e === "v6" || !e) && Vi.test(r));
}
class me extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== C.string) {
      const s = this._getOrReturnCtx(e);
      return k(s, {
        code: S.invalid_type,
        expected: C.string,
        received: s.parsedType
      }), N;
    }
    const n = new ie();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), k(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), k(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? k(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && k(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Di.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "email",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        vr || (vr = new RegExp(ji, "u")), vr.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "emoji",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        $i.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "uuid",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Li.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "nanoid",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Ai.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "cuid",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Mi.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "cuid2",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Ni.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
          validation: "ulid",
          code: S.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), k(i, {
            validation: "url",
            code: S.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        validation: "regex",
        code: S.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? On(s).test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Fi.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Bi(s).test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Ri.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        validation: "duration",
        code: S.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Gi(e.data, s.version) || (i = this._getOrReturnCtx(e, i), k(i, {
        validation: "ip",
        code: S.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Zi.test(e.data) || (i = this._getOrReturnCtx(e, i), k(i, {
        validation: "base64",
        code: S.invalid_string,
        message: s.message
      }), n.dirty()) : z.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: S.invalid_string,
      ...O.errToObj(n)
    });
  }
  _addCheck(e) {
    return new me({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...O.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...O.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...O.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...O.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...O.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...O.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...O.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...O.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...O.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...O.errToObj(e) });
  }
  datetime(e) {
    var t, n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
      ...O.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...O.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...O.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...O.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...O.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...O.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...O.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...O.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...O.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...O.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, O.errToObj(e));
  }
  trim() {
    return new me({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new me({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new me({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
me.create = (r) => {
  var e;
  return new me({
    checks: [],
    typeName: M.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...R(r)
  });
};
function Wi(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = parseInt(r.toFixed(i).replace(".", "")), a = parseInt(e.toFixed(i).replace(".", ""));
  return s % a / Math.pow(10, i);
}
class ze extends D {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== C.number) {
      const s = this._getOrReturnCtx(e);
      return k(s, {
        code: S.invalid_type,
        expected: C.number,
        received: s.parsedType
      }), N;
    }
    let n;
    const i = new ie();
    for (const s of this._def.checks)
      s.kind === "int" ? z.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Wi(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.not_finite,
        message: s.message
      }), i.dirty()) : z.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, O.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, O.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, O.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, O.toString(t));
  }
  setLimit(e, t, n, i) {
    return new ze({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: O.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ze({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: O.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: O.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: O.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: O.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: O.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: O.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: O.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: O.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: O.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && z.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ze.create = (r) => new ze({
  checks: [],
  typeName: M.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...R(r)
});
class Ve extends D {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== C.bigint) {
      const s = this._getOrReturnCtx(e);
      return k(s, {
        code: S.invalid_type,
        expected: C.bigint,
        received: s.parsedType
      }), N;
    }
    let n;
    const i = new ie();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), k(n, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : z.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, O.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, O.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, O.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, O.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Ve({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: O.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: O.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: O.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: O.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: O.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: O.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Ve.create = (r) => {
  var e;
  return new Ve({
    checks: [],
    typeName: M.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...R(r)
  });
};
class _t extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== C.boolean) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.boolean,
        received: n.parsedType
      }), N;
    }
    return ae(e.data);
  }
}
_t.create = (r) => new _t({
  typeName: M.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...R(r)
});
class Xe extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== C.date) {
      const s = this._getOrReturnCtx(e);
      return k(s, {
        code: S.invalid_type,
        expected: C.date,
        received: s.parsedType
      }), N;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return k(s, {
        code: S.invalid_date
      }), N;
    }
    const n = new ie();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), k(i, {
        code: S.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : z.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Xe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: O.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: O.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Xe.create = (r) => new Xe({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: M.ZodDate,
  ...R(r)
});
class Xt extends D {
  _parse(e) {
    if (this._getType(e) !== C.symbol) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.symbol,
        received: n.parsedType
      }), N;
    }
    return ae(e.data);
  }
}
Xt.create = (r) => new Xt({
  typeName: M.ZodSymbol,
  ...R(r)
});
class xt extends D {
  _parse(e) {
    if (this._getType(e) !== C.undefined) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.undefined,
        received: n.parsedType
      }), N;
    }
    return ae(e.data);
  }
}
xt.create = (r) => new xt({
  typeName: M.ZodUndefined,
  ...R(r)
});
class Tt extends D {
  _parse(e) {
    if (this._getType(e) !== C.null) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.null,
        received: n.parsedType
      }), N;
    }
    return ae(e.data);
  }
}
Tt.create = (r) => new Tt({
  typeName: M.ZodNull,
  ...R(r)
});
class lt extends D {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ae(e.data);
  }
}
lt.create = (r) => new lt({
  typeName: M.ZodAny,
  ...R(r)
});
class Ye extends D {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ae(e.data);
  }
}
Ye.create = (r) => new Ye({
  typeName: M.ZodUnknown,
  ...R(r)
});
class Ie extends D {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return k(t, {
      code: S.invalid_type,
      expected: C.never,
      received: t.parsedType
    }), N;
  }
}
Ie.create = (r) => new Ie({
  typeName: M.ZodNever,
  ...R(r)
});
class Jt extends D {
  _parse(e) {
    if (this._getType(e) !== C.undefined) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.void,
        received: n.parsedType
      }), N;
    }
    return ae(e.data);
  }
}
Jt.create = (r) => new Jt({
  typeName: M.ZodVoid,
  ...R(r)
});
class ve extends D {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== C.array)
      return k(t, {
        code: S.invalid_type,
        expected: C.array,
        received: t.parsedType
      }), N;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (k(t, {
        code: a ? S.too_big : S.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (k(t, {
      code: S.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (k(t, {
      code: S.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new _e(t, a, t.path, o)))).then((a) => ie.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new _e(t, a, t.path, o)));
    return ie.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new ve({
      ...this._def,
      minLength: { value: e, message: O.toString(t) }
    });
  }
  max(e, t) {
    return new ve({
      ...this._def,
      maxLength: { value: e, message: O.toString(t) }
    });
  }
  length(e, t) {
    return new ve({
      ...this._def,
      exactLength: { value: e, message: O.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ve.create = (r, e) => new ve({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: M.ZodArray,
  ...R(e)
});
function nt(r) {
  if (r instanceof U) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = Se.create(nt(n));
    }
    return new U({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof ve ? new ve({
    ...r._def,
    type: nt(r.element)
  }) : r instanceof Se ? Se.create(nt(r.unwrap())) : r instanceof Fe ? Fe.create(nt(r.unwrap())) : r instanceof xe ? xe.create(r.items.map((e) => nt(e))) : r;
}
class U extends D {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = z.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== C.object) {
      const c = this._getOrReturnCtx(e);
      return k(c, {
        code: S.invalid_type,
        expected: C.object,
        received: c.parsedType
      }), N;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Ie && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new _e(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof Ie) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        o.length > 0 && (k(i, {
          code: S.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of o) {
        const u = i.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new _e(i, u, i.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of l) {
        const u = await d.key, p = await d.value;
        c.push({
          key: u,
          value: p,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => ie.mergeObjectSync(n, c)) : ie.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return O.errToObj, new U({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          var i, s, a, o;
          const l = (a = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, t, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = O.errToObj(e).message) !== null && o !== void 0 ? o : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new U({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new U({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new U({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new U({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: M.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new U({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return z.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    }), new U({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return z.objectKeys(this.shape).forEach((n) => {
      e[n] || (t[n] = this.shape[n]);
    }), new U({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return nt(this);
  }
  partial(e) {
    const t = {};
    return z.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }), new U({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return z.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Se; )
          s = s._def.innerType;
        t[n] = s;
      }
    }), new U({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return An(z.objectKeys(this.shape));
  }
}
U.create = (r, e) => new U({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Ie.create(),
  typeName: M.ZodObject,
  ...R(e)
});
U.strictCreate = (r, e) => new U({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Ie.create(),
  typeName: M.ZodObject,
  ...R(e)
});
U.lazycreate = (r, e) => new U({
  shape: r,
  unknownKeys: "strip",
  catchall: Ie.create(),
  typeName: M.ZodObject,
  ...R(e)
});
class Et extends D {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new de(o.ctx.common.issues));
      return k(t, {
        code: S.invalid_union,
        unionErrors: a
      }), N;
    }
    if (t.common.async)
      return Promise.all(n.map(async (s) => {
        const a = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: t.data,
            path: t.path,
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let s;
      const a = [];
      for (const l of n) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((l) => new de(l));
      return k(t, {
        code: S.invalid_union,
        unionErrors: o
      }), N;
    }
  }
  get options() {
    return this._def.options;
  }
}
Et.create = (r, e) => new Et({
  options: r,
  typeName: M.ZodUnion,
  ...R(e)
});
const Ee = (r) => r instanceof Pt ? Ee(r.schema) : r instanceof ge ? Ee(r.innerType()) : r instanceof It ? [r.value] : r instanceof Ze ? r.options : r instanceof Ot ? z.objectValues(r.enum) : r instanceof At ? Ee(r._def.innerType) : r instanceof xt ? [void 0] : r instanceof Tt ? [null] : r instanceof Se ? [void 0, ...Ee(r.unwrap())] : r instanceof Fe ? [null, ...Ee(r.unwrap())] : r instanceof Br || r instanceof Nt ? Ee(r.unwrap()) : r instanceof Mt ? Ee(r._def.innerType) : [];
class ur extends D {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== C.object)
      return k(t, {
        code: S.invalid_type,
        expected: C.object,
        received: t.parsedType
      }), N;
    const n = this.discriminator, i = t.data[n], s = this.optionsMap.get(i);
    return s ? t.common.async ? s._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : s._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (k(t, {
      code: S.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), N);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, n) {
    const i = /* @__PURE__ */ new Map();
    for (const s of t) {
      const a = Ee(s.shape[e]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new ur({
      typeName: M.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: i,
      ...R(n)
    });
  }
}
function Ar(r, e) {
  const t = Re(r), n = Re(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === C.object && n === C.object) {
    const i = z.objectKeys(e), s = z.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = Ar(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === C.array && n === C.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = Ar(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === C.date && n === C.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class kt extends D {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Ir(s) || Ir(a))
        return N;
      const o = Ar(s.value, a.value);
      return o.valid ? ((Or(s) || Or(a)) && t.dirty(), { status: t.value, value: o.data }) : (k(n, {
        code: S.invalid_intersection_types
      }), N);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, a]) => i(s, a)) : i(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
kt.create = (r, e, t) => new kt({
  left: r,
  right: e,
  typeName: M.ZodIntersection,
  ...R(t)
});
class xe extends D {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.array)
      return k(n, {
        code: S.invalid_type,
        expected: C.array,
        received: n.parsedType
      }), N;
    if (n.data.length < this._def.items.length)
      return k(n, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), N;
    !this._def.rest && n.data.length > this._def.items.length && (k(n, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new _e(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => ie.mergeArray(t, a)) : ie.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new xe({
      ...this._def,
      rest: e
    });
  }
}
xe.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xe({
    items: r,
    typeName: M.ZodTuple,
    rest: null,
    ...R(e)
  });
};
class Ct extends D {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.object)
      return k(n, {
        code: S.invalid_type,
        expected: C.object,
        received: n.parsedType
      }), N;
    const i = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: s._parse(new _e(n, o, n.path, o)),
        value: a._parse(new _e(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data
      });
    return n.common.async ? ie.mergeObjectAsync(t, i) : ie.mergeObjectSync(t, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, n) {
    return t instanceof D ? new Ct({
      keyType: e,
      valueType: t,
      typeName: M.ZodRecord,
      ...R(n)
    }) : new Ct({
      keyType: me.create(),
      valueType: e,
      typeName: M.ZodRecord,
      ...R(t)
    });
  }
}
class Qt extends D {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.map)
      return k(n, {
        code: S.invalid_type,
        expected: C.map,
        received: n.parsedType
      }), N;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], c) => ({
      key: i._parse(new _e(n, o, n.path, [c, "key"])),
      value: s._parse(new _e(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return N;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return N;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Qt.create = (r, e, t) => new Qt({
  valueType: e,
  keyType: r,
  typeName: M.ZodMap,
  ...R(t)
});
class Je extends D {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.set)
      return k(n, {
        code: S.invalid_type,
        expected: C.set,
        received: n.parsedType
      }), N;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (k(n, {
      code: S.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (k(n, {
      code: S.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return N;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...n.data.values()].map((l, c) => s._parse(new _e(n, l, n.path, c)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Je({
      ...this._def,
      minSize: { value: e, message: O.toString(t) }
    });
  }
  max(e, t) {
    return new Je({
      ...this._def,
      maxSize: { value: e, message: O.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Je.create = (r, e) => new Je({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: M.ZodSet,
  ...R(e)
});
class st extends D {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== C.function)
      return k(t, {
        code: S.invalid_type,
        expected: C.function,
        received: t.parsedType
      }), N;
    function n(o, l) {
      return Yt({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          qt(),
          ot
        ].filter((c) => !!c),
        issueData: {
          code: S.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(o, l) {
      return Yt({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          qt(),
          ot
        ].filter((c) => !!c),
        issueData: {
          code: S.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: t.common.contextualErrorMap }, a = t.data;
    if (this._def.returns instanceof dt) {
      const o = this;
      return ae(async function(...l) {
        const c = new de([]), d = await o._def.args.parseAsync(l, s).catch((f) => {
          throw c.addIssue(n(l, f)), c;
        }), u = await Reflect.apply(a, this, d);
        return await o._def.returns._def.type.parseAsync(u, s).catch((f) => {
          throw c.addIssue(i(u, f)), c;
        });
      });
    } else {
      const o = this;
      return ae(function(...l) {
        const c = o._def.args.safeParse(l, s);
        if (!c.success)
          throw new de([n(l, c.error)]);
        const d = Reflect.apply(a, this, c.data), u = o._def.returns.safeParse(d, s);
        if (!u.success)
          throw new de([i(d, u.error)]);
        return u.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new st({
      ...this._def,
      args: xe.create(e).rest(Ye.create())
    });
  }
  returns(e) {
    return new st({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, n) {
    return new st({
      args: e || xe.create([]).rest(Ye.create()),
      returns: t || Ye.create(),
      typeName: M.ZodFunction,
      ...R(n)
    });
  }
}
class Pt extends D {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Pt.create = (r, e) => new Pt({
  getter: r,
  typeName: M.ZodLazy,
  ...R(e)
});
class It extends D {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return k(t, {
        received: t.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), N;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
It.create = (r, e) => new It({
  value: r,
  typeName: M.ZodLiteral,
  ...R(e)
});
function An(r, e) {
  return new Ze({
    values: r,
    typeName: M.ZodEnum,
    ...R(e)
  });
}
class Ze extends D {
  constructor() {
    super(...arguments), vt.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return k(t, {
        expected: z.joinValues(n),
        received: t.parsedType,
        code: S.invalid_type
      }), N;
    }
    if (Kt(this, vt) || Cn(this, vt, new Set(this._def.values)), !Kt(this, vt).has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return k(t, {
        received: t.data,
        code: S.invalid_enum_value,
        options: n
      }), N;
    }
    return ae(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return Ze.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return Ze.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
vt = /* @__PURE__ */ new WeakMap();
Ze.create = An;
class Ot extends D {
  constructor() {
    super(...arguments), gt.set(this, void 0);
  }
  _parse(e) {
    const t = z.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== C.string && n.parsedType !== C.number) {
      const i = z.objectValues(t);
      return k(n, {
        expected: z.joinValues(i),
        received: n.parsedType,
        code: S.invalid_type
      }), N;
    }
    if (Kt(this, gt) || Cn(this, gt, new Set(z.getValidEnumValues(this._def.values))), !Kt(this, gt).has(e.data)) {
      const i = z.objectValues(t);
      return k(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: i
      }), N;
    }
    return ae(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
gt = /* @__PURE__ */ new WeakMap();
Ot.create = (r, e) => new Ot({
  values: r,
  typeName: M.ZodNativeEnum,
  ...R(e)
});
class dt extends D {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== C.promise && t.common.async === !1)
      return k(t, {
        code: S.invalid_type,
        expected: C.promise,
        received: t.parsedType
      }), N;
    const n = t.parsedType === C.promise ? t.data : Promise.resolve(t.data);
    return ae(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
dt.create = (r, e) => new dt({
  type: r,
  typeName: M.ZodPromise,
  ...R(e)
});
class ge extends D {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === M.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        k(n, a), a.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const a = i.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (t.value === "aborted")
            return N;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? N : l.status === "dirty" || t.value === "dirty" ? it(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return N;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? N : o.status === "dirty" || t.value === "dirty" ? it(o.value) : o;
      }
    }
    if (i.type === "refinement") {
      const a = (o) => {
        const l = i.refinement(o, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? N : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? N : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!wt(a))
          return a;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => wt(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({ status: t.value, value: o })) : a);
    z.assertNever(i);
  }
}
ge.create = (r, e, t) => new ge({
  schema: r,
  typeName: M.ZodEffects,
  effect: e,
  ...R(t)
});
ge.createWithPreprocess = (r, e, t) => new ge({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: M.ZodEffects,
  ...R(t)
});
class Se extends D {
  _parse(e) {
    return this._getType(e) === C.undefined ? ae(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Se.create = (r, e) => new Se({
  innerType: r,
  typeName: M.ZodOptional,
  ...R(e)
});
class Fe extends D {
  _parse(e) {
    return this._getType(e) === C.null ? ae(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fe.create = (r, e) => new Fe({
  innerType: r,
  typeName: M.ZodNullable,
  ...R(e)
});
class At extends D {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === C.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
At.create = (r, e) => new At({
  innerType: r,
  typeName: M.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...R(e)
});
class Mt extends D {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return St(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new de(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new de(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Mt.create = (r, e) => new Mt({
  innerType: r,
  typeName: M.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...R(e)
});
class er extends D {
  _parse(e) {
    if (this._getType(e) !== C.nan) {
      const n = this._getOrReturnCtx(e);
      return k(n, {
        code: S.invalid_type,
        expected: C.nan,
        received: n.parsedType
      }), N;
    }
    return { status: "valid", value: e.data };
  }
}
er.create = (r) => new er({
  typeName: M.ZodNaN,
  ...R(r)
});
const Ui = Symbol("zod_brand");
class Br extends D {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Rt extends D {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? N : s.status === "dirty" ? (t.dirty(), it(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return i.status === "aborted" ? N : i.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, t) {
    return new Rt({
      in: e,
      out: t,
      typeName: M.ZodPipeline
    });
  }
}
class Nt extends D {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (wt(i) && (i.value = Object.freeze(i.value)), i);
    return St(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nt.create = (r, e) => new Nt({
  innerType: r,
  typeName: M.ZodReadonly,
  ...R(e)
});
function Mn(r, e = {}, t) {
  return r ? lt.create().superRefine((n, i) => {
    var s, a;
    if (!r(n)) {
      const o = typeof e == "function" ? e(n) : typeof e == "string" ? { message: e } : e, l = (a = (s = o.fatal) !== null && s !== void 0 ? s : t) !== null && a !== void 0 ? a : !0, c = typeof o == "string" ? { message: o } : o;
      i.addIssue({ code: "custom", ...c, fatal: l });
    }
  }) : lt.create();
}
const Hi = {
  object: U.lazycreate
};
var M;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(M || (M = {}));
const qi = (r, e = {
  message: `Input not instance of ${r.name}`
}) => Mn((t) => t instanceof r, e), Nn = me.create, $n = ze.create, Yi = er.create, Ki = Ve.create, Ln = _t.create, Xi = Xe.create, Ji = Xt.create, Qi = xt.create, es = Tt.create, ts = lt.create, rs = Ye.create, ns = Ie.create, is = Jt.create, ss = ve.create, as = U.create, os = U.strictCreate, ls = Et.create, ds = ur.create, cs = kt.create, us = xe.create, fs = Ct.create, ps = Qt.create, hs = Je.create, ms = st.create, vs = Pt.create, gs = It.create, ys = Ze.create, bs = Ot.create, ws = dt.create, Qr = ge.create, Ss = Se.create, _s = Fe.create, xs = ge.createWithPreprocess, Ts = Rt.create, Es = () => Nn().optional(), ks = () => $n().optional(), Cs = () => Ln().optional(), Ps = {
  string: (r) => me.create({ ...r, coerce: !0 }),
  number: (r) => ze.create({ ...r, coerce: !0 }),
  boolean: (r) => _t.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => Ve.create({ ...r, coerce: !0 }),
  date: (r) => Xe.create({ ...r, coerce: !0 })
}, Is = N;
var Y = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ot,
  setErrorMap: Ii,
  getErrorMap: qt,
  makeIssue: Yt,
  EMPTY_PATH: Oi,
  addIssueToContext: k,
  ParseStatus: ie,
  INVALID: N,
  DIRTY: it,
  OK: ae,
  isAborted: Ir,
  isDirty: Or,
  isValid: wt,
  isAsync: St,
  get util() {
    return z;
  },
  get objectUtil() {
    return Pr;
  },
  ZodParsedType: C,
  getParsedType: Re,
  ZodType: D,
  datetimeRegex: On,
  ZodString: me,
  ZodNumber: ze,
  ZodBigInt: Ve,
  ZodBoolean: _t,
  ZodDate: Xe,
  ZodSymbol: Xt,
  ZodUndefined: xt,
  ZodNull: Tt,
  ZodAny: lt,
  ZodUnknown: Ye,
  ZodNever: Ie,
  ZodVoid: Jt,
  ZodArray: ve,
  ZodObject: U,
  ZodUnion: Et,
  ZodDiscriminatedUnion: ur,
  ZodIntersection: kt,
  ZodTuple: xe,
  ZodRecord: Ct,
  ZodMap: Qt,
  ZodSet: Je,
  ZodFunction: st,
  ZodLazy: Pt,
  ZodLiteral: It,
  ZodEnum: Ze,
  ZodNativeEnum: Ot,
  ZodPromise: dt,
  ZodEffects: ge,
  ZodTransformer: ge,
  ZodOptional: Se,
  ZodNullable: Fe,
  ZodDefault: At,
  ZodCatch: Mt,
  ZodNaN: er,
  BRAND: Ui,
  ZodBranded: Br,
  ZodPipeline: Rt,
  ZodReadonly: Nt,
  custom: Mn,
  Schema: D,
  ZodSchema: D,
  late: Hi,
  get ZodFirstPartyTypeKind() {
    return M;
  },
  coerce: Ps,
  any: ts,
  array: ss,
  bigint: Ki,
  boolean: Ln,
  date: Xi,
  discriminatedUnion: ds,
  effect: Qr,
  enum: ys,
  function: ms,
  instanceof: qi,
  intersection: cs,
  lazy: vs,
  literal: gs,
  map: ps,
  nan: Yi,
  nativeEnum: bs,
  never: ns,
  null: es,
  nullable: _s,
  number: $n,
  object: as,
  oboolean: Cs,
  onumber: ks,
  optional: Ss,
  ostring: Es,
  pipeline: Ts,
  preprocess: xs,
  promise: ws,
  record: fs,
  set: hs,
  strictObject: os,
  string: Nn,
  symbol: Ji,
  transformer: Qr,
  tuple: us,
  undefined: Qi,
  union: ls,
  unknown: rs,
  void: is,
  NEVER: Is,
  ZodIssueCode: S,
  quotelessJson: Pi,
  ZodError: de
});
function Os(r) {
  return Object.keys(r).reduce((t, n) => {
    const i = r[n];
    return t[n] = Object.assign({}, i), Dn(i.value) && !Ls(i.value) && !Array.isArray(i.value) && (t[n].value = Object.assign({}, i.value)), Array.isArray(i.value) && (t[n].value = i.value.slice(0)), t;
  }, {});
}
function As(r) {
  return r ? Object.keys(r).reduce((t, n) => {
    const i = r[n];
    return t[n] = Dn(i) && "value" in i ? i : {
      value: i
    }, t[n].attribute || (t[n].attribute = $s(n)), t[n].parse = "parse" in t[n] ? t[n].parse : typeof t[n].value != "string", t;
  }, {}) : {};
}
function Ms(r) {
  return Object.keys(r).reduce((t, n) => (t[n] = r[n].value, t), {});
}
function Ns(r, e) {
  const t = Os(e);
  return Object.keys(e).forEach((i) => {
    const s = t[i], a = r.getAttribute(s.attribute), o = r[i];
    a && (s.value = s.parse ? Rn(a) : a), o != null && (s.value = Array.isArray(o) ? o.slice(0) : o), s.reflect && en(r, s.attribute, s.value), Object.defineProperty(r, i, {
      get() {
        return s.value;
      },
      set(l) {
        const c = s.value;
        s.value = l, s.reflect && en(this, s.attribute, s.value);
        for (let d = 0, u = this.__propertyChangedCallbacks.length; d < u; d++)
          this.__propertyChangedCallbacks[d](i, l, c);
      },
      enumerable: !0,
      configurable: !0
    });
  }), t;
}
function Rn(r) {
  if (r)
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
}
function en(r, e, t) {
  if (t == null || t === !1) return r.removeAttribute(e);
  let n = JSON.stringify(t);
  r.__updating[e] = !0, n === "true" && (n = ""), r.setAttribute(e, n), Promise.resolve().then(() => delete r.__updating[e]);
}
function $s(r) {
  return r.replace(/\.?([A-Z]+)/g, (e, t) => "-" + t.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function Dn(r) {
  return r != null && (typeof r == "object" || typeof r == "function");
}
function Ls(r) {
  return Object.prototype.toString.call(r) === "[object Function]";
}
function Rs(r) {
  return typeof r == "function" && r.toString().indexOf("class") === 0;
}
let at;
function et() {
  return at;
}
function ft() {
  Object.defineProperty(at, "renderRoot", {
    value: at
  });
}
function Ds(r, e) {
  const t = Object.keys(e);
  return class extends r {
    static get observedAttributes() {
      return t.map((i) => e[i].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = Ns(this, e);
      const i = Ms(this.props), s = this.Component, a = at;
      try {
        at = this, this.__initialized = !0, Rs(s) ? new s(i, {
          element: this
        }) : s(i, {
          element: this
        });
      } finally {
        at = a;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let i = null;
      for (; i = this.__releaseCallbacks.pop(); ) i(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(i, s, a) {
      if (this.__initialized && !this.__updating[i] && (i = this.lookupProp(i), i in e)) {
        if (a == null && !this[i]) return;
        this[i] = e[i].parse ? Rn(a) : a;
      }
    }
    lookupProp(i) {
      if (e)
        return t.find((s) => i === s || i === e[s].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(i) {
      this.__releaseCallbacks.push(i);
    }
    addPropertyChangedCallback(i) {
      this.__propertyChangedCallbacks.push(i);
    }
  };
}
function js(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function zs(r, e = {}, t = {}) {
  const {
    BaseElement: n = HTMLElement,
    extension: i
  } = t;
  return (s) => {
    if (!r) throw new Error("tag is required to register a Component");
    let a = customElements.get(r);
    return a ? (a.prototype.Component = s, a) : (a = Ds(n, As(e)), a.prototype.Component = s, a.prototype.registeredTag = r, customElements.define(r, a, i), a);
  };
}
function Vs(r) {
  const e = Object.keys(r), t = {};
  for (let n = 0; n < e.length; n++) {
    const [i, s] = X(r[e[n]]);
    Object.defineProperty(t, e[n], {
      get: i,
      set(a) {
        s(() => a);
      }
    });
  }
  return t;
}
function Zs(r) {
  if (r.assignedSlot && r.assignedSlot._$owner) return r.assignedSlot._$owner;
  let e = r.parentNode;
  for (; e && !e._$owner && !(e.assignedSlot && e.assignedSlot._$owner); )
    e = e.parentNode;
  return e && e.assignedSlot ? e.assignedSlot._$owner : r._$owner;
}
function Fs(r) {
  return (e, t) => {
    const { element: n } = t;
    return qe((i) => {
      const s = Vs(e);
      n.addPropertyChangedCallback((o, l) => s[o] = l), n.addReleaseCallback(() => {
        n.renderRoot.textContent = "", i();
      });
      const a = r(s, t);
      return q(n.renderRoot, a);
    }, Zs(n));
  };
}
function Gr(r) {
  return r instanceof Error && r.name === "ZodError" && "issues" in r && Array.isArray(r.issues);
}
var Mr = class extends Error {
  constructor(e, t) {
    super(e, t);
    hr(this, "name");
    hr(this, "details");
    this.name = "ZodValidationError", this.details = Bs(t);
  }
  toString() {
    return this.message;
  }
};
function Bs(r) {
  if (r) {
    const e = r.cause;
    if (Gr(e))
      return e.issues;
  }
  return [];
}
var Gs = "; ", Ws = 99, jn = "Validation error", Us = ": ", Hs = ", or ";
function qs(r, e, t) {
  return e !== null ? r.length > 0 ? [e, r].join(t) : e : r.length > 0 ? r : jn;
}
var Ys = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
function Ks(r) {
  return r.length === 1 ? r[0].toString() : r.reduce((e, t) => {
    if (typeof t == "number")
      return e + "[" + t.toString() + "]";
    if (t.includes('"'))
      return e + '["' + Xs(t) + '"]';
    if (!Ys.test(t))
      return e + '["' + t + '"]';
    const n = e.length === 0 ? "" : ".";
    return e + n + t;
  }, "");
}
function Xs(r) {
  return r.replace(/"/g, '\\"');
}
function Js(r) {
  return r.length !== 0;
}
function Vt(r) {
  const { issue: e, issueSeparator: t, unionSeparator: n, includePath: i } = r;
  if (e.code === "invalid_union")
    return e.unionErrors.reduce((s, a) => {
      const o = a.issues.map(
        (l) => Vt({
          issue: l,
          issueSeparator: t,
          unionSeparator: n,
          includePath: i
        })
      ).join(t);
      return s.includes(o) || s.push(o), s;
    }, []).join(n);
  if (e.code === "invalid_arguments")
    return [
      e.message,
      ...e.argumentsError.issues.map(
        (s) => Vt({
          issue: s,
          issueSeparator: t,
          unionSeparator: n,
          includePath: i
        })
      )
    ].join(t);
  if (e.code === "invalid_return_type")
    return [
      e.message,
      ...e.returnTypeError.issues.map(
        (s) => Vt({
          issue: s,
          issueSeparator: t,
          unionSeparator: n,
          includePath: i
        })
      )
    ].join(t);
  if (i && Js(e.path)) {
    if (e.path.length === 1) {
      const s = e.path[0];
      if (typeof s == "number")
        return `${e.message} at index ${s}`;
    }
    return `${e.message} at "${Ks(e.path)}"`;
  }
  return e.message;
}
function Qs(r, e = {}) {
  if (!Gr(r))
    throw new TypeError(
      `Invalid zodError param; expected instance of ZodError. Did you mean to use the "${ta.name}" method instead?`
    );
  return zn(r, e);
}
function zn(r, e = {}) {
  const {
    maxIssuesInMessage: t = Ws,
    issueSeparator: n = Gs,
    unionSeparator: i = Hs,
    prefixSeparator: s = Us,
    prefix: a = jn,
    includePath: o = !0
  } = e, l = r.errors, c = l.length === 0 ? r.message : l.slice(0, t).map(
    (u) => Vt({
      issue: u,
      issueSeparator: n,
      unionSeparator: i,
      includePath: o
    })
  ).join(n), d = qs(c, a, s);
  return new Mr(d, { cause: r });
}
var ea = (r = {}) => (e) => Gr(e) ? zn(e, r) : e instanceof Error ? new Mr(e.message, { cause: e }) : new Mr("Unknown error");
function ta(r, e = {}) {
  return ea(e)(r);
}
var ra = /* @__PURE__ */ se("<style>");
const Hr = class Hr extends HTMLElement {
  constructor() {
    super();
  }
};
Hr.formAssociated = !0;
let tn = Hr;
const We = (r, e, t, n) => {
  const i = e instanceof Y.ZodObject, s = i ? Object.fromEntries(Object.keys(e.shape).map((o) => [o, void 0])) : e, a = (o, l) => {
    const c = et(), d = {
      ...l,
      emit: (p, f, m) => {
        const g = new CustomEvent(p, {
          composed: !0,
          bubbles: !0,
          ...m,
          detail: f
        });
        return c.dispatchEvent(g), g;
      }
    };
    if (ct(() => {
      d.emit("mount", {
        element: c
      }, {
        composed: !1
      });
    }), Pe(() => {
      if (i) {
        const p = e.safeParse(o);
        if (!p.success)
          throw Qs(p.error, {
            issueSeparator: `
---
`,
            prefix: `[${r}]`,
            includePath: !0
          }).toString();
      }
    }), !i) return t(o, d);
    const u = new Proxy(o, {
      get: (p, f) => {
        var m, g, T;
        return typeof f == "string" && p[f] === void 0 ? ((T = (g = (m = e.shape[f]) == null ? void 0 : m._def) == null ? void 0 : g.defaultValue) == null ? void 0 : T.call(g)) ?? Reflect.get(p, f) : Reflect.get(p, f);
      },
      set: (p, f, m) => Reflect.set(p, f, m)
    });
    return t(u, d);
  };
  return js(zs(r, s, {
    BaseElement: HTMLElement
  }), Fs)(a);
};
function na() {
  const r = document.createElement("div");
  document.body.insertBefore(r, document.body.firstChild);
  const [e, t] = X({});
  return Ti(() => pe(bt, {
    get each() {
      return Object.entries(e());
    },
    children: ([n, i]) => (() => {
      var s = ra();
      return te(s, "id", n), s.innerHTML = i, s;
    })()
  }), r), {
    element: r,
    styles: e,
    setOrUpdateStyles(n, i) {
      t((s) => ({
        ...s,
        [n]: i
      }));
    }
  };
}
na();
function ia(r, e) {
  const t = ui(e);
  return [
    (n) => pe(t.Provider, {
      value: r(n),
      get children() {
        return n.children;
      }
    }),
    () => fi(t)
  ];
}
var sa = { equals: !1 }, rn = (r) => typeof r == "function" && !r.length ? r() : r, aa = (r) => Array.isArray(r) ? r : r ? [r] : [], oa = Ke;
function la(r, e, t) {
  return X(e(), t);
}
function da(r, e, t, n) {
  return r.addEventListener(e, t, n), oa(r.removeEventListener.bind(r, e, t, n));
}
function ca(r, e = Q()) {
  let t = 0, n, i;
  return () => (t++, Ke(() => {
    t--, queueMicrotask(() => {
      !t && i && (i(), i = n = void 0);
    });
  }), i || qe((s) => n = r(i = s), e), n);
}
function ua(r) {
  const e = Q(), t = ca(r, e);
  return () => t();
}
function Vn(r, e = !1) {
  const t = window.matchMedia(r), [n, i] = la(e, () => t.matches);
  return da(t, "change", () => i(t.matches)), n;
}
function fa(r) {
  return Vn("(prefers-color-scheme: dark)", r);
}
fa.bind(void 0, !1);
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Zn = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], tr = /* @__PURE__ */ Zn.join(","), Fn = typeof Element > "u", Qe = Fn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, rr = !Fn && Element.prototype.getRootNode ? function(r) {
  var e;
  return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
} : function(r) {
  return r == null ? void 0 : r.ownerDocument;
}, nr = function r(e, t) {
  var n;
  t === void 0 && (t = !0);
  var i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), s = i === "" || i === "true", a = s || t && e && r(e.parentNode);
  return a;
}, pa = function(e) {
  var t, n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return n === "" || n === "true";
}, Bn = function(e, t, n) {
  if (nr(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(tr));
  return t && Qe.call(e, tr) && i.unshift(e), i = i.filter(n), i;
}, Gn = function r(e, t, n) {
  for (var i = [], s = Array.from(e); s.length; ) {
    var a = s.shift();
    if (!nr(a, !1))
      if (a.tagName === "SLOT") {
        var o = a.assignedElements(), l = o.length ? o : a.children, c = r(l, !0, n);
        n.flatten ? i.push.apply(i, c) : i.push({
          scopeParent: a,
          candidates: c
        });
      } else {
        var d = Qe.call(a, tr);
        d && n.filter(a) && (t || !e.includes(a)) && i.push(a);
        var u = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), p = !nr(u, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (u && p) {
          var f = r(u === !0 ? a.children : u.children, !0, n);
          n.flatten ? i.push.apply(i, f) : i.push({
            scopeParent: a,
            candidates: f
          });
        } else
          s.unshift.apply(s, a.children);
      }
  }
  return i;
}, Wn = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, He = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || pa(e)) && !Wn(e) ? 0 : e.tabIndex;
}, ha = function(e, t) {
  var n = He(e);
  return n < 0 && t && !Wn(e) ? 0 : n;
}, ma = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Un = function(e) {
  return e.tagName === "INPUT";
}, va = function(e) {
  return Un(e) && e.type === "hidden";
}, ga = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return t;
}, ya = function(e, t) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === t)
      return e[n];
}, ba = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || rr(e), n = function(o) {
    return t.querySelectorAll('input[type="radio"][name="' + o + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = n(window.CSS.escape(e.name));
  else
    try {
      i = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var s = ya(i, e.form);
  return !s || s === e;
}, wa = function(e) {
  return Un(e) && e.type === "radio";
}, Sa = function(e) {
  return wa(e) && !ba(e);
}, _a = function(e) {
  var t, n = e && rr(e), i = (t = n) === null || t === void 0 ? void 0 : t.host, s = !1;
  if (n && n !== e) {
    var a, o, l;
    for (s = !!((a = i) !== null && a !== void 0 && (o = a.ownerDocument) !== null && o !== void 0 && o.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !s && i; ) {
      var c, d, u;
      n = rr(i), i = (c = n) === null || c === void 0 ? void 0 : c.host, s = !!((d = i) !== null && d !== void 0 && (u = d.ownerDocument) !== null && u !== void 0 && u.contains(i));
    }
  }
  return s;
}, nn = function(e) {
  var t = e.getBoundingClientRect(), n = t.width, i = t.height;
  return n === 0 && i === 0;
}, xa = function(e, t) {
  var n = t.displayCheck, i = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = Qe.call(e, "details>summary:first-of-type"), a = s ? e.parentElement : e;
  if (Qe.call(a, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof i == "function") {
      for (var o = e; e; ) {
        var l = e.parentElement, c = rr(e);
        if (l && !l.shadowRoot && i(l) === !0)
          return nn(e);
        e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l;
      }
      e = o;
    }
    if (_a(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return nn(e);
  return !1;
}, Ta = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var n = 0; n < t.children.length; n++) {
          var i = t.children.item(n);
          if (i.tagName === "LEGEND")
            return Qe.call(t, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, ir = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  nr(t) || va(t) || xa(t, e) || // For a details element with a summary, the summary element gets the focus
  ga(t) || Ta(t));
}, Nr = function(e, t) {
  return !(Sa(t) || He(t) < 0 || !ir(e, t));
}, Ea = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, ka = function r(e) {
  var t = [], n = [];
  return e.forEach(function(i, s) {
    var a = !!i.scopeParent, o = a ? i.scopeParent : i, l = ha(o, a), c = a ? r(i.candidates) : o;
    l === 0 ? a ? t.push.apply(t, c) : t.push(o) : n.push({
      documentOrder: s,
      tabIndex: l,
      item: i,
      isScope: a,
      content: c
    });
  }), n.sort(ma).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(t);
}, Ca = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = Gn([e], t.includeContainer, {
    filter: Nr.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: Ea
  }) : n = Bn(e, t.includeContainer, Nr.bind(null, t)), ka(n);
}, Pa = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = Gn([e], t.includeContainer, {
    filter: ir.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : n = Bn(e, t.includeContainer, ir.bind(null, t)), n;
}, rt = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return Qe.call(e, tr) === !1 ? !1 : Nr(t, e);
}, Ia = /* @__PURE__ */ Zn.concat("iframe").join(","), gr = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return Qe.call(e, Ia) === !1 ? !1 : ir(t, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function sn(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function an(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sn(Object(t), !0).forEach(function(n) {
      Oa(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : sn(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Oa(r, e, t) {
  return e = Ma(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Aa(r, e) {
  if (typeof r != "object" || r === null) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Ma(r) {
  var e = Aa(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
var on = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var n = e[e.length - 1];
      n !== t && n.pause();
    }
    var i = e.indexOf(t);
    i === -1 || e.splice(i, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var n = e.indexOf(t);
    n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Na = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, $a = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, yt = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, La = function(e) {
  return yt(e) && !e.shiftKey;
}, Ra = function(e) {
  return yt(e) && e.shiftKey;
}, ln = function(e) {
  return setTimeout(e, 0);
}, dn = function(e, t) {
  var n = -1;
  return e.every(function(i, s) {
    return t(i) ? (n = s, !1) : !0;
  }), n;
}, mt = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, Dt = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Da = [], Hn = function(e, t) {
  var n = (t == null ? void 0 : t.document) || document, i = (t == null ? void 0 : t.trapStack) || Da, s = an({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: La,
    isKeyBackward: Ra
  }, t), a = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, o, l = function(v, h, E) {
    return v && v[h] !== void 0 ? v[h] : s[E || h];
  }, c = function(v, h) {
    var E = typeof (h == null ? void 0 : h.composedPath) == "function" ? h.composedPath() : void 0;
    return a.containerGroups.findIndex(function(L) {
      var j = L.container, B = L.tabbableNodes;
      return j.contains(v) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (E == null ? void 0 : E.includes(j)) || B.find(function(H) {
        return H === v;
      });
    });
  }, d = function(v) {
    var h = s[v];
    if (typeof h == "function") {
      for (var E = arguments.length, L = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
        L[j - 1] = arguments[j];
      h = h.apply(void 0, L);
    }
    if (h === !0 && (h = void 0), !h) {
      if (h === void 0 || h === !1)
        return h;
      throw new Error("`".concat(v, "` was specified but was not a node, or did not return a node"));
    }
    var B = h;
    if (typeof h == "string" && (B = n.querySelector(h), !B))
      throw new Error("`".concat(v, "` as selector refers to no known node"));
    return B;
  }, u = function() {
    var v = d("initialFocus");
    if (v === !1)
      return !1;
    if (v === void 0 || !gr(v, s.tabbableOptions))
      if (c(n.activeElement) >= 0)
        v = n.activeElement;
      else {
        var h = a.tabbableGroups[0], E = h && h.firstTabbableNode;
        v = E || d("fallbackFocus");
      }
    if (!v)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return v;
  }, p = function() {
    if (a.containerGroups = a.containers.map(function(v) {
      var h = Ca(v, s.tabbableOptions), E = Pa(v, s.tabbableOptions), L = h.length > 0 ? h[0] : void 0, j = h.length > 0 ? h[h.length - 1] : void 0, B = E.find(function(K) {
        return rt(K);
      }), H = E.slice().reverse().find(function(K) {
        return rt(K);
      }), J = !!h.find(function(K) {
        return He(K) > 0;
      });
      return {
        container: v,
        tabbableNodes: h,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: J,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: L,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: j,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: B,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: H,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Te) {
          var Ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ae = h.indexOf(Te);
          return Ae < 0 ? Ue ? E.slice(E.indexOf(Te) + 1).find(function(ht) {
            return rt(ht);
          }) : E.slice(0, E.indexOf(Te)).reverse().find(function(ht) {
            return rt(ht);
          }) : h[Ae + (Ue ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(v) {
      return v.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(v) {
      return v.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, f = function I(v) {
    var h = v.activeElement;
    if (h)
      return h.shadowRoot && h.shadowRoot.activeElement !== null ? I(h.shadowRoot) : h;
  }, m = function I(v) {
    if (v !== !1 && v !== f(document)) {
      if (!v || !v.focus) {
        I(u());
        return;
      }
      v.focus({
        preventScroll: !!s.preventScroll
      }), a.mostRecentlyFocusedNode = v, Na(v) && v.select();
    }
  }, g = function(v) {
    var h = d("setReturnFocus", v);
    return h || (h === !1 ? !1 : v);
  }, T = function(v) {
    var h = v.target, E = v.event, L = v.isBackward, j = L === void 0 ? !1 : L;
    h = h || Dt(E), p();
    var B = null;
    if (a.tabbableGroups.length > 0) {
      var H = c(h, E), J = H >= 0 ? a.containerGroups[H] : void 0;
      if (H < 0)
        j ? B = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : B = a.tabbableGroups[0].firstTabbableNode;
      else if (j) {
        var K = dn(a.tabbableGroups, function(fr) {
          var pr = fr.firstTabbableNode;
          return h === pr;
        });
        if (K < 0 && (J.container === h || gr(h, s.tabbableOptions) && !rt(h, s.tabbableOptions) && !J.nextTabbableNode(h, !1)) && (K = H), K >= 0) {
          var Te = K === 0 ? a.tabbableGroups.length - 1 : K - 1, Ue = a.tabbableGroups[Te];
          B = He(h) >= 0 ? Ue.lastTabbableNode : Ue.lastDomTabbableNode;
        } else yt(E) || (B = J.nextTabbableNode(h, !1));
      } else {
        var Ae = dn(a.tabbableGroups, function(fr) {
          var pr = fr.lastTabbableNode;
          return h === pr;
        });
        if (Ae < 0 && (J.container === h || gr(h, s.tabbableOptions) && !rt(h, s.tabbableOptions) && !J.nextTabbableNode(h)) && (Ae = H), Ae >= 0) {
          var ht = Ae === a.tabbableGroups.length - 1 ? 0 : Ae + 1, qr = a.tabbableGroups[ht];
          B = He(h) >= 0 ? qr.firstTabbableNode : qr.firstDomTabbableNode;
        } else yt(E) || (B = J.nextTabbableNode(h));
      }
    } else
      B = d("fallbackFocus");
    return B;
  }, w = function(v) {
    var h = Dt(v);
    if (!(c(h, v) >= 0)) {
      if (mt(s.clickOutsideDeactivates, v)) {
        o.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      mt(s.allowOutsideClick, v) || v.preventDefault();
    }
  }, b = function(v) {
    var h = Dt(v), E = c(h, v) >= 0;
    if (E || h instanceof Document)
      E && (a.mostRecentlyFocusedNode = h);
    else {
      v.stopImmediatePropagation();
      var L, j = !0;
      if (a.mostRecentlyFocusedNode)
        if (He(a.mostRecentlyFocusedNode) > 0) {
          var B = c(a.mostRecentlyFocusedNode), H = a.containerGroups[B].tabbableNodes;
          if (H.length > 0) {
            var J = H.findIndex(function(K) {
              return K === a.mostRecentlyFocusedNode;
            });
            J >= 0 && (s.isKeyForward(a.recentNavEvent) ? J + 1 < H.length && (L = H[J + 1], j = !1) : J - 1 >= 0 && (L = H[J - 1], j = !1));
          }
        } else
          a.containerGroups.some(function(K) {
            return K.tabbableNodes.some(function(Te) {
              return He(Te) > 0;
            });
          }) || (j = !1);
      else
        j = !1;
      j && (L = T({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(a.recentNavEvent)
      })), m(L || a.mostRecentlyFocusedNode || u());
    }
    a.recentNavEvent = void 0;
  }, y = function(v) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = v;
    var E = T({
      event: v,
      isBackward: h
    });
    E && (yt(v) && v.preventDefault(), m(E));
  }, _ = function(v) {
    if ($a(v) && mt(s.escapeDeactivates, v) !== !1) {
      v.preventDefault(), o.deactivate();
      return;
    }
    (s.isKeyForward(v) || s.isKeyBackward(v)) && y(v, s.isKeyBackward(v));
  }, x = function(v) {
    var h = Dt(v);
    c(h, v) >= 0 || mt(s.clickOutsideDeactivates, v) || mt(s.allowOutsideClick, v) || (v.preventDefault(), v.stopImmediatePropagation());
  }, A = function() {
    if (a.active)
      return on.activateTrap(i, o), a.delayInitialFocusTimer = s.delayInitialFocus ? ln(function() {
        m(u());
      }) : m(u()), n.addEventListener("focusin", b, !0), n.addEventListener("mousedown", w, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", w, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", x, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", _, {
        capture: !0,
        passive: !1
      }), o;
  }, F = function() {
    if (a.active)
      return n.removeEventListener("focusin", b, !0), n.removeEventListener("mousedown", w, !0), n.removeEventListener("touchstart", w, !0), n.removeEventListener("click", x, !0), n.removeEventListener("keydown", _, !0), o;
  }, $ = function(v) {
    var h = v.some(function(E) {
      var L = Array.from(E.removedNodes);
      return L.some(function(j) {
        return j === a.mostRecentlyFocusedNode;
      });
    });
    h && m(u());
  }, ee = typeof window < "u" && "MutationObserver" in window ? new MutationObserver($) : void 0, P = function() {
    ee && (ee.disconnect(), a.active && !a.paused && a.containers.map(function(v) {
      ee.observe(v, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return o = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(v) {
      if (a.active)
        return this;
      var h = l(v, "onActivate"), E = l(v, "onPostActivate"), L = l(v, "checkCanFocusTrap");
      L || p(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = n.activeElement, h == null || h();
      var j = function() {
        L && p(), A(), P(), E == null || E();
      };
      return L ? (L(a.containers.concat()).then(j, j), this) : (j(), this);
    },
    deactivate: function(v) {
      if (!a.active)
        return this;
      var h = an({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, v);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, F(), a.active = !1, a.paused = !1, P(), on.deactivateTrap(i, o);
      var E = l(h, "onDeactivate"), L = l(h, "onPostDeactivate"), j = l(h, "checkCanReturnFocus"), B = l(h, "returnFocus", "returnFocusOnDeactivate");
      E == null || E();
      var H = function() {
        ln(function() {
          B && m(g(a.nodeFocusedBeforeActivation)), L == null || L();
        });
      };
      return B && j ? (j(g(a.nodeFocusedBeforeActivation)).then(H, H), this) : (H(), this);
    },
    pause: function(v) {
      if (a.paused || !a.active)
        return this;
      var h = l(v, "onPause"), E = l(v, "onPostPause");
      return a.paused = !0, h == null || h(), F(), P(), E == null || E(), this;
    },
    unpause: function(v) {
      if (!a.paused || !a.active)
        return this;
      var h = l(v, "onUnpause"), E = l(v, "onPostUnpause");
      return a.paused = !1, h == null || h(), p(), A(), P(), E == null || E(), this;
    },
    updateContainerElements: function(v) {
      var h = [].concat(v).filter(Boolean);
      return a.containers = h.map(function(E) {
        return typeof E == "string" ? n.querySelector(E) : E;
      }), a.active && p(), P(), this;
    }
  }, o.updateContainerElements(e), o;
}, ja = /* @__PURE__ */ se("<slot>"), za = /* @__PURE__ */ se("<div><slot>"), Va = /* @__PURE__ */ se("<solid-button variant=primary class=filters-button><solid-icon iconsize=var(--spacing-6)>", !0, !1), Za = /* @__PURE__ */ se("<button class=filters-modal-close-btn><span class=sr-only>fermer</span><solid-icon icon=mingcute-close-line>", !0, !1), Fa = /* @__PURE__ */ se("<h1 class=filters-modal-title>"), Ba = /* @__PURE__ */ se("<div><div><ul class=filters-choices>"), Ga = /* @__PURE__ */ se("<li><solid-button variant=secondary as=button>", !0, !1);
const [Wa, qn] = ia((r) => {
  const e = () => r.element.querySelector("[data-buttons]"), [t, n] = X(), [i, s] = X({}), a = Vn("(min-width: 768px)");
  return {
    buttonsContainer: e,
    currentUid: t,
    setCurrentUid: n,
    selectedOptions: i,
    setSelectedOptions: s,
    isDekstop: a
  };
}), $l = We("cfc-filters-context", Y.object({}), () => {
  const r = et();
  return pe(Wa, {
    element: r,
    get children() {
      var e = ja();
      return e._$owner = Q(), e;
    }
  });
});
We("cfc-filters-content", Y.object({
  when: Y.tuple([Y.string(), Y.string()])
}), (r) => {
  const e = qn(), t = () => {
    const n = (e == null ? void 0 : e.selectedOptions()) ?? {}, i = Object.values(n);
    return i.length === 2 && i.includes(r.when[0]) && i.includes(r.when[1]);
  };
  return pe(kr, {
    get when() {
      return t();
    },
    get children() {
      var n = za(), i = n.firstChild;
      return n.style.setProperty("margin-top", "var(--spacing-8)"), i._$owner = Q(), n;
    }
  });
});
const Ll = Y.object({});
We("cfc-filters-button", Y.object({
  options: Y.array(Y.string()),
  modalTitle: Y.string()
}), (r) => {
  ft();
  const e = qn(), t = Zr();
  let n, i, s;
  const a = () => t === (e == null ? void 0 : e.currentUid()), o = () => !(e != null && e.isDekstop()), [l, c] = X(), d = () => o() && a() && i;
  Pe(() => {
    var f;
    d() && (c(Hn(i, {
      escapeDeactivates: !0,
      onDeactivate: () => {
        e == null || e.setCurrentUid(void 0);
      },
      tabbableOptions: {
        // Active les éléments focusables dans le shadow DOM
        getShadowRoot: !0
      }
    })), (f = l()) == null || f.activate());
  }), Pe(() => {
    var f;
    d() || ((f = l()) == null || f.deactivate(), c(void 0));
  });
  const u = () => o() && document.body || (e == null ? void 0 : e.buttonsContainer());
  function p(f) {
    var m, g, T;
    !o() && f.key === "Escape" && (e == null || e.setCurrentUid(void 0), (T = (g = (m = n == null ? void 0 : n.shadowRoot) == null ? void 0 : m.querySelector(`#button-${t}`)) == null ? void 0 : g.focus) == null || T.call(g));
  }
  return [(() => {
    var f = Va(), m = f.firstChild;
    f.$$keyup = p, f.$$click = () => {
      var T, w, b, y;
      a() ? e == null || e.setCurrentUid(void 0) : (e == null || e.setCurrentUid(t), o() || (y = (b = (w = (T = s == null ? void 0 : s.querySelector("solid-button")) == null ? void 0 : T.shadowRoot) == null ? void 0 : w.querySelector("button")) == null ? void 0 : b.focus) == null || y.call(b));
    };
    var g = n;
    return typeof g == "function" ? je(g, f) : n = f, f._$owner = Q(), q(f, () => (e == null ? void 0 : e.selectedOptions()[t]) ?? r.modalTitle, m), m._$owner = Q(), ne((T) => {
      var w = {
        "aria-expanded": o() ? void 0 : a(),
        "aria-controls": o() ? void 0 : t,
        id: `button-${t}`
      }, b = a() ? "mingcute-up-line" : "mingcute-down-line";
      return w !== T.e && (f.buttonAttributes = T.e = w), b !== T.t && (m.icon = T.t = b), T;
    }, {
      e: void 0,
      t: void 0
    }), f;
  })(), pe(kr, {
    get when() {
      return oe(() => !!u())() && a();
    },
    get children() {
      return pe(En, {
        get mount() {
          return u();
        },
        get children() {
          var f = Ba(), m = f.firstChild, g = m.firstChild;
          f.$$keyup = p, te(f, "id", t);
          var T = i;
          typeof T == "function" ? je(T, m) : i = m, q(m, pe(kr, {
            get when() {
              return o();
            },
            get children() {
              return [(() => {
                var b = Za(), y = b.firstChild, _ = y.nextSibling;
                return b.$$click = () => {
                  e == null || e.setCurrentUid(void 0);
                }, _._$owner = Q(), b;
              })(), (() => {
                var b = Fa();
                return q(b, () => r.modalTitle), b;
              })()];
            }
          }), g);
          var w = s;
          return typeof w == "function" ? je(w, g) : s = g, q(g, pe(bt, {
            get each() {
              return r.options;
            },
            children: (b) => (() => {
              var y = Ga(), _ = y.firstChild;
              return _.$$click = () => {
                e == null || e.setSelectedOptions((x) => ({
                  ...x,
                  [t]: b
                })), e == null || e.setCurrentUid(void 0);
              }, _._$owner = Q(), q(_, b), ne(() => _.sm = o()), y;
            })()
          })), ne((b) => {
            var y = o(), _ = o() ? "dialog" : void 0, x = !!o(), A = !!o();
            return y !== b.e && te(f, "aria-modal", b.e = y), _ !== b.t && te(f, "role", b.t = _), x !== b.a && f.classList.toggle("filters-modal", b.a = x), A !== b.o && m.classList.toggle("filters-modal-inner", b.o = A), b;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
          }), f;
        }
      });
    }
  })];
});
Fr(["click", "keyup"]);
function Ua(r, e, t) {
  let n, i;
  const s = typeof window < "u" && "MutationObserver" in window;
  typeof e == "function" ? (n = {}, i = e) : (n = e, i = t);
  const a = s ? new MutationObserver(i) : void 0, o = (d, u) => a == null ? void 0 : a.observe(d, rn(u) ?? n), l = () => {
    aa(rn(r)).forEach((d) => {
      d instanceof Node ? o(d, n) : o(d[0], d[1]);
    });
  }, c = () => a == null ? void 0 : a.disconnect();
  return ct(l), Ke(c), [
    o,
    {
      start: l,
      stop: c,
      instance: a,
      isSupported: s
    }
  ];
}
function Wr(r) {
  const [e, t] = X([]);
  function n() {
    t(Array.from((r == null ? void 0 : r.children) ?? []));
  }
  return Ua(
    () => r,
    {
      attributes: !1,
      subtree: !1,
      childList: !0
    },
    (i) => n()
  ), ct(() => {
    n();
  }), n(), e;
}
var Ha = (r, e) => r.length > 0 ? () => r(ce(e)) : r;
function qa(r, e) {
  let t = 0;
  const n = r.map(
    (i, s) => oe(
      () => (t = s, i()),
      void 0,
      sa
    )
  );
  return oe(() => n.map((i) => i())[t], void 0, e);
}
function Ya(r, e, t) {
  let n = () => e;
  const [i, s] = X(e), a = oe(
    Ha(r, () => n()),
    e
  );
  return [
    n = qa([i, a], t),
    (o) => s(
      () => typeof o == "function" ? o(ce(n)) : o
    )
  ];
}
function cn(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object;
}
function Ur(r, e) {
  r === void 0 && (r = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
    typeof r[t] > "u" ? r[t] = e[t] : cn(e[t]) && cn(r[t]) && Object.keys(e[t]).length > 0 && Ur(r[t], e[t]);
  });
}
const Yn = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function pt() {
  const r = typeof document < "u" ? document : {};
  return Ur(r, Yn), r;
}
const Ka = {
  document: Yn,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  }
};
function ue() {
  const r = typeof window < "u" ? window : {};
  return Ur(r, Ka), r;
}
function Xa(r) {
  return r === void 0 && (r = ""), r.trim().split(" ").filter((e) => !!e.trim());
}
function Ja(r) {
  const e = r;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function $r(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e);
}
function sr() {
  return Date.now();
}
function Qa(r) {
  const e = ue();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(r, null)), !t && r.currentStyle && (t = r.currentStyle), t || (t = r.style), t;
}
function eo(r, e) {
  e === void 0 && (e = "x");
  const t = ue();
  let n, i, s;
  const a = Qa(r);
  return t.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((o) => o.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? i = s.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), e === "y" && (t.WebKitCSSMatrix ? i = s.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function jt(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object";
}
function to(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11);
}
function le() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n != null && !to(n)) {
      const i = Object.keys(Object(n)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, a = i.length; s < a; s += 1) {
        const o = i[s], l = Object.getOwnPropertyDescriptor(n, o);
        l !== void 0 && l.enumerable && (jt(r[o]) && jt(n[o]) ? n[o].__swiper__ ? r[o] = n[o] : le(r[o], n[o]) : !jt(r[o]) && jt(n[o]) ? (r[o] = {}, n[o].__swiper__ ? r[o] = n[o] : le(r[o], n[o])) : r[o] = n[o]);
      }
    }
  }
  return r;
}
function zt(r, e, t) {
  r.style.setProperty(e, t);
}
function Kn(r) {
  let {
    swiper: e,
    targetPosition: t,
    side: n
  } = r;
  const i = ue(), s = -e.translate;
  let a = null, o;
  const l = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > s ? "next" : "prev", d = (p, f) => c === "next" && p >= f || c === "prev" && p <= f, u = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), a === null && (a = o);
    const p = Math.max(Math.min((o - a) / l, 1), 0), f = 0.5 - Math.cos(p * Math.PI) / 2;
    let m = s + f * (t - s);
    if (d(m, t) && (m = t), e.wrapperEl.scrollTo({
      [n]: m
    }), d(m, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [n]: m
        });
      }), i.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = i.requestAnimationFrame(u);
  };
  u();
}
function ke(r, e) {
  return e === void 0 && (e = ""), [...r.children].filter((t) => t.matches(e));
}
function ar(r) {
  try {
    console.warn(r);
    return;
  } catch {
  }
}
function Lr(r, e) {
  e === void 0 && (e = []);
  const t = document.createElement(r);
  return t.classList.add(...Array.isArray(e) ? e : Xa(e)), t;
}
function ro(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const n = r.previousElementSibling;
    e ? n.matches(e) && t.push(n) : t.push(n), r = n;
  }
  return t;
}
function no(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const n = r.nextElementSibling;
    e ? n.matches(e) && t.push(n) : t.push(n), r = n;
  }
  return t;
}
function De(r, e) {
  return ue().getComputedStyle(r, null).getPropertyValue(e);
}
function un(r) {
  let e = r, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function io(r, e) {
  const t = [];
  let n = r.parentElement;
  for (; n; )
    t.push(n), n = n.parentElement;
  return t;
}
function fn(r, e, t) {
  const n = ue();
  return r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
let yr;
function so() {
  const r = ue(), e = pt();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch)
  };
}
function Xn() {
  return yr || (yr = so()), yr;
}
let br;
function ao(r) {
  let {
    userAgent: e
  } = r === void 0 ? {} : r;
  const t = Xn(), n = ue(), i = n.navigator.platform, s = e || n.navigator.userAgent, a = {
    ios: !1,
    android: !1
  }, o = n.screen.width, l = n.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = s.match(/(iPad).*OS\s([\d_]+)/);
  const u = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = i === "Win32";
  let m = i === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && m && t.touch && g.indexOf(`${o}x${l}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), c && !f && (a.os = "android", a.android = !0), (d || p || u) && (a.os = "ios", a.ios = !0), a;
}
function Jn(r) {
  return r === void 0 && (r = {}), br || (br = ao(r)), br;
}
let wr;
function oo() {
  const r = ue(), e = Jn();
  let t = !1;
  function n() {
    const o = r.navigator.userAgent.toLowerCase();
    return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0;
  }
  if (n()) {
    const o = String(r.navigator.userAgent);
    if (o.includes("Version/")) {
      const [l, c] = o.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = l < 16 || l === 16 && c < 2;
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent), s = n(), a = s || i && e.ios;
  return {
    isSafari: t || s,
    needPerspectiveFix: t,
    need3dFix: a,
    isWebView: i
  };
}
function lo() {
  return wr || (wr = oo()), wr;
}
function co(r) {
  let {
    swiper: e,
    on: t,
    emit: n
  } = r;
  const i = ue();
  let s = null, a = null;
  const o = () => {
    !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
  }, l = () => {
    !e || e.destroyed || !e.initialized || (s = new ResizeObserver((u) => {
      a = i.requestAnimationFrame(() => {
        const {
          width: p,
          height: f
        } = e;
        let m = p, g = f;
        u.forEach((T) => {
          let {
            contentBoxSize: w,
            contentRect: b,
            target: y
          } = T;
          y && y !== e.el || (m = b ? b.width : (w[0] || w).inlineSize, g = b ? b.height : (w[0] || w).blockSize);
        }), (m !== p || g !== f) && o();
      });
    }), s.observe(e.el));
  }, c = () => {
    a && i.cancelAnimationFrame(a), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || n("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    c(), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
  });
}
function uo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: n,
    emit: i
  } = r;
  const s = [], a = ue(), o = function(d, u) {
    u === void 0 && (u = {});
    const p = a.MutationObserver || a.WebkitMutationObserver, f = new p((m) => {
      if (e.__preventObserver__) return;
      if (m.length === 1) {
        i("observerUpdate", m[0]);
        return;
      }
      const g = function() {
        i("observerUpdate", m[0]);
      };
      a.requestAnimationFrame ? a.requestAnimationFrame(g) : a.setTimeout(g, 0);
    });
    f.observe(d, {
      attributes: typeof u.attributes > "u" ? !0 : u.attributes,
      childList: typeof u.childList > "u" ? !0 : u.childList,
      characterData: typeof u.characterData > "u" ? !0 : u.characterData
    }), s.push(f);
  }, l = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = io(e.hostEl);
        for (let u = 0; u < d.length; u += 1)
          o(d[u]);
      }
      o(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), o(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    s.forEach((d) => {
      d.disconnect();
    }), s.splice(0, s.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), n("init", l), n("destroy", c);
}
var fo = {
  on(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return r.split(" ").forEach((s) => {
      n.eventsListeners[s] || (n.eventsListeners[s] = []), n.eventsListeners[s][i](e);
    }), n;
  },
  once(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    function i() {
      n.off(r, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++)
        a[o] = arguments[o];
      e.apply(n, a);
    }
    return i.__emitterProxy = e, n.on(r, i, t);
  },
  onAny(r, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof r != "function") return t;
    const n = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[n](r), t;
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(r);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(r, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach((n) => {
      typeof e > "u" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach((i, s) => {
        (i === e || i.__emitterProxy && i.__emitterProxy === e) && t.eventsListeners[n].splice(s, 1);
      });
    }), t;
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let e, t, n;
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = r) : (e = s[0].events, t = s[0].data, n = s[0].context || r), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
      r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((c) => {
        c.apply(n, [l, ...t]);
      }), r.eventsListeners && r.eventsListeners[l] && r.eventsListeners[l].forEach((c) => {
        c.apply(n, t);
      });
    }), r;
  }
};
function po() {
  const r = this;
  let e, t;
  const n = r.el;
  typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = n.clientWidth, typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = n.clientHeight, !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(De(n, "padding-left") || 0, 10) - parseInt(De(n, "padding-right") || 0, 10), t = t - parseInt(De(n, "padding-top") || 0, 10) - parseInt(De(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
    width: e,
    height: t,
    size: r.isHorizontal() ? e : t
  }));
}
function ho() {
  const r = this;
  function e(P, I) {
    return parseFloat(P.getPropertyValue(r.getDirectionLabel(I)) || 0);
  }
  const t = r.params, {
    wrapperEl: n,
    slidesEl: i,
    size: s,
    rtlTranslate: a,
    wrongRTL: o
  } = r, l = r.virtual && t.virtual.enabled, c = l ? r.virtual.slides.length : r.slides.length, d = ke(i, `.${r.params.slideClass}, swiper-slide`), u = l ? r.virtual.slides.length : d.length;
  let p = [];
  const f = [], m = [];
  let g = t.slidesOffsetBefore;
  typeof g == "function" && (g = t.slidesOffsetBefore.call(r));
  let T = t.slidesOffsetAfter;
  typeof T == "function" && (T = t.slidesOffsetAfter.call(r));
  const w = r.snapGrid.length, b = r.slidesGrid.length;
  let y = t.spaceBetween, _ = -g, x = 0, A = 0;
  if (typeof s > "u")
    return;
  typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * s : typeof y == "string" && (y = parseFloat(y)), r.virtualSize = -y, d.forEach((P) => {
    a ? P.style.marginLeft = "" : P.style.marginRight = "", P.style.marginBottom = "", P.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (zt(n, "--swiper-centered-offset-before", ""), zt(n, "--swiper-centered-offset-after", ""));
  const F = t.grid && t.grid.rows > 1 && r.grid;
  F ? r.grid.initSlides(d) : r.grid && r.grid.unsetSlides();
  let $;
  const ee = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((P) => typeof t.breakpoints[P].slidesPerView < "u").length > 0;
  for (let P = 0; P < u; P += 1) {
    $ = 0;
    let I;
    if (d[P] && (I = d[P]), F && r.grid.updateSlide(P, I, d), !(d[P] && De(I, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        ee && (d[P].style[r.getDirectionLabel("width")] = "");
        const v = getComputedStyle(I), h = I.style.transform, E = I.style.webkitTransform;
        if (h && (I.style.transform = "none"), E && (I.style.webkitTransform = "none"), t.roundLengths)
          $ = r.isHorizontal() ? fn(I, "width") : fn(I, "height");
        else {
          const L = e(v, "width"), j = e(v, "padding-left"), B = e(v, "padding-right"), H = e(v, "margin-left"), J = e(v, "margin-right"), K = v.getPropertyValue("box-sizing");
          if (K && K === "border-box")
            $ = L + H + J;
          else {
            const {
              clientWidth: Te,
              offsetWidth: Ue
            } = I;
            $ = L + j + B + H + J + (Ue - Te);
          }
        }
        h && (I.style.transform = h), E && (I.style.webkitTransform = E), t.roundLengths && ($ = Math.floor($));
      } else
        $ = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && ($ = Math.floor($)), d[P] && (d[P].style[r.getDirectionLabel("width")] = `${$}px`);
      d[P] && (d[P].swiperSlideSize = $), m.push($), t.centeredSlides ? (_ = _ + $ / 2 + x / 2 + y, x === 0 && P !== 0 && (_ = _ - s / 2 - y), P === 0 && (_ = _ - s / 2 - y), Math.abs(_) < 1 / 1e3 && (_ = 0), t.roundLengths && (_ = Math.floor(_)), A % t.slidesPerGroup === 0 && p.push(_), f.push(_)) : (t.roundLengths && (_ = Math.floor(_)), (A - Math.min(r.params.slidesPerGroupSkip, A)) % r.params.slidesPerGroup === 0 && p.push(_), f.push(_), _ = _ + $ + y), r.virtualSize += $ + y, x = $, A += 1;
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, s) + T, a && o && (t.effect === "slide" || t.effect === "coverflow") && (n.style.width = `${r.virtualSize + y}px`), t.setWrapperSize && (n.style[r.getDirectionLabel("width")] = `${r.virtualSize + y}px`), F && r.grid.updateWrapperSize($, p), !t.centeredSlides) {
    const P = [];
    for (let I = 0; I < p.length; I += 1) {
      let v = p[I];
      t.roundLengths && (v = Math.floor(v)), p[I] <= r.virtualSize - s && P.push(v);
    }
    p = P, Math.floor(r.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(r.virtualSize - s);
  }
  if (l && t.loop) {
    const P = m[0] + y;
    if (t.slidesPerGroup > 1) {
      const I = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup), v = P * t.slidesPerGroup;
      for (let h = 0; h < I; h += 1)
        p.push(p[p.length - 1] + v);
    }
    for (let I = 0; I < r.virtual.slidesBefore + r.virtual.slidesAfter; I += 1)
      t.slidesPerGroup === 1 && p.push(p[p.length - 1] + P), f.push(f[f.length - 1] + P), r.virtualSize += P;
  }
  if (p.length === 0 && (p = [0]), y !== 0) {
    const P = r.isHorizontal() && a ? "marginLeft" : r.getDirectionLabel("marginRight");
    d.filter((I, v) => !t.cssMode || t.loop ? !0 : v !== d.length - 1).forEach((I) => {
      I.style[P] = `${y}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let P = 0;
    m.forEach((v) => {
      P += v + (y || 0);
    }), P -= y;
    const I = P - s;
    p = p.map((v) => v <= 0 ? -g : v > I ? I + T : v);
  }
  if (t.centerInsufficientSlides) {
    let P = 0;
    m.forEach((v) => {
      P += v + (y || 0);
    }), P -= y;
    const I = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (P + I < s) {
      const v = (s - P - I) / 2;
      p.forEach((h, E) => {
        p[E] = h - v;
      }), f.forEach((h, E) => {
        f[E] = h + v;
      });
    }
  }
  if (Object.assign(r, {
    slides: d,
    snapGrid: p,
    slidesGrid: f,
    slidesSizesGrid: m
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    zt(n, "--swiper-centered-offset-before", `${-p[0]}px`), zt(n, "--swiper-centered-offset-after", `${r.size / 2 - m[m.length - 1] / 2}px`);
    const P = -r.snapGrid[0], I = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map((v) => v + P), r.slidesGrid = r.slidesGrid.map((v) => v + I);
  }
  if (u !== c && r.emit("slidesLengthChange"), p.length !== w && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), f.length !== b && r.emit("slidesGridLengthChange"), t.watchSlidesProgress && r.updateSlidesOffset(), r.emit("slidesUpdated"), !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const P = `${t.containerModifierClass}backface-hidden`, I = r.el.classList.contains(P);
    u <= t.maxBackfaceHiddenSlides ? I || r.el.classList.add(P) : I && r.el.classList.remove(P);
  }
}
function mo(r) {
  const e = this, t = [], n = e.virtual && e.params.virtual.enabled;
  let i = 0, s;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const a = (o) => n ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((o) => {
        t.push(o);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const o = e.activeIndex + s;
        if (o > e.slides.length && !n) break;
        t.push(a(o));
      }
  else
    t.push(a(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const o = t[s].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function vo() {
  const r = this, e = r.slides, t = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
  for (let n = 0; n < e.length; n += 1)
    e[n].swiperSlideOffset = (r.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - t - r.cssOverflowAdjustment();
}
const pn = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function go(r) {
  r === void 0 && (r = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: s
  } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let a = -r;
  i && (a = r), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let o = t.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
  for (let l = 0; l < n.length; l += 1) {
    const c = n[l];
    let d = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= n[0].swiperSlideOffset);
    const u = (a + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o), p = (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o), f = -(a - d), m = f + e.slidesSizesGrid[l], g = f >= 0 && f <= e.size - e.slidesSizesGrid[l], T = f >= 0 && f < e.size - 1 || m > 1 && m <= e.size || f <= 0 && m >= e.size;
    T && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)), pn(c, T, t.slideVisibleClass), pn(c, g, t.slideFullyVisibleClass), c.progress = i ? -u : u, c.originalProgress = i ? -p : p;
  }
}
function yo(r) {
  const e = this;
  if (typeof r > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, n = e.maxTranslate() - e.minTranslate();
  let {
    progress: i,
    isBeginning: s,
    isEnd: a,
    progressLoop: o
  } = e;
  const l = s, c = a;
  if (n === 0)
    i = 0, s = !0, a = !0;
  else {
    i = (r - e.minTranslate()) / n;
    const d = Math.abs(r - e.minTranslate()) < 1, u = Math.abs(r - e.maxTranslate()) < 1;
    s = d || i <= 0, a = u || i >= 1, d && (i = 0), u && (i = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), p = e.slidesGrid[d], f = e.slidesGrid[u], m = e.slidesGrid[e.slidesGrid.length - 1], g = Math.abs(r);
    g >= p ? o = (g - p) / m : o = (g + m - f) / m, o > 1 && (o -= 1);
  }
  Object.assign(e, {
    progress: i,
    progressLoop: o,
    isBeginning: s,
    isEnd: a
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r), s && !l && e.emit("reachBeginning toEdge"), a && !c && e.emit("reachEnd toEdge"), (l && !s || c && !a) && e.emit("fromEdge"), e.emit("progress", i);
}
const Sr = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function bo() {
  const r = this, {
    slides: e,
    params: t,
    slidesEl: n,
    activeIndex: i
  } = r, s = r.virtual && t.virtual.enabled, a = r.grid && t.grid && t.grid.rows > 1, o = (u) => ke(n, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
  let l, c, d;
  if (s)
    if (t.loop) {
      let u = i - r.virtual.slidesBefore;
      u < 0 && (u = r.virtual.slides.length + u), u >= r.virtual.slides.length && (u -= r.virtual.slides.length), l = o(`[data-swiper-slide-index="${u}"]`);
    } else
      l = o(`[data-swiper-slide-index="${i}"]`);
  else
    a ? (l = e.filter((u) => u.column === i)[0], d = e.filter((u) => u.column === i + 1)[0], c = e.filter((u) => u.column === i - 1)[0]) : l = e[i];
  l && (a || (d = no(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = ro(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((u) => {
    Sr(u, u === l, t.slideActiveClass), Sr(u, u === d, t.slideNextClass), Sr(u, u === c, t.slidePrevClass);
  }), r.emitSlidesClasses();
}
const Zt = (r, e) => {
  if (!r || r.destroyed || !r.params) return;
  const t = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`, n = e.closest(t());
  if (n) {
    let i = n.querySelector(`.${r.params.lazyPreloaderClass}`);
    !i && r.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      n.shadowRoot && (i = n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`), i && i.remove());
    })), i && i.remove();
  }
}, _r = (r, e) => {
  if (!r.slides[e]) return;
  const t = r.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, Rr = (r) => {
  if (!r || r.destroyed || !r.params) return;
  let e = r.params.lazyPreloadPrevNext;
  const t = r.slides.length;
  if (!t || !e || e < 0) return;
  e = Math.min(e, t);
  const n = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView), i = r.activeIndex;
  if (r.params.grid && r.params.grid.rows > 1) {
    const a = i, o = [a - e];
    o.push(...Array.from({
      length: e
    }).map((l, c) => a + n + c)), r.slides.forEach((l, c) => {
      o.includes(l.column) && _r(r, c);
    });
    return;
  }
  const s = i + n - 1;
  if (r.params.rewind || r.params.loop)
    for (let a = i - e; a <= s + e; a += 1) {
      const o = (a % t + t) % t;
      (o < i || o > s) && _r(r, o);
    }
  else
    for (let a = Math.max(i - e, 0); a <= Math.min(s + e, t - 1); a += 1)
      a !== i && (a > s || a < i) && _r(r, a);
};
function wo(r) {
  const {
    slidesGrid: e,
    params: t
  } = r, n = r.rtlTranslate ? r.translate : -r.translate;
  let i;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u" ? n >= e[s] && n < e[s + 1] - (e[s + 1] - e[s]) / 2 ? i = s : n >= e[s] && n < e[s + 1] && (i = s + 1) : n >= e[s] && (i = s);
  return t.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function So(r) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: n,
    params: i,
    activeIndex: s,
    realIndex: a,
    snapIndex: o
  } = e;
  let l = r, c;
  const d = (f) => {
    let m = f - e.virtual.slidesBefore;
    return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
  };
  if (typeof l > "u" && (l = wo(e)), n.indexOf(t) >= 0)
    c = n.indexOf(t);
  else {
    const f = Math.min(i.slidesPerGroupSkip, l);
    c = f + Math.floor((l - f) / i.slidesPerGroup);
  }
  if (c >= n.length && (c = n.length - 1), l === s && !e.params.loop) {
    c !== o && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(l);
    return;
  }
  const u = e.grid && i.grid && i.grid.rows > 1;
  let p;
  if (e.virtual && i.virtual.enabled && i.loop)
    p = d(l);
  else if (u) {
    const f = e.slides.filter((g) => g.column === l)[0];
    let m = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(e.slides.indexOf(f), 0)), p = Math.floor(m / i.grid.rows);
  } else if (e.slides[l]) {
    const f = e.slides[l].getAttribute("data-swiper-slide-index");
    f ? p = parseInt(f, 10) : p = l;
  } else
    p = l;
  Object.assign(e, {
    previousSnapIndex: o,
    snapIndex: c,
    previousRealIndex: a,
    realIndex: p,
    previousIndex: s,
    activeIndex: l
  }), e.initialized && Rr(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== p && e.emit("realIndexChange"), e.emit("slideChange"));
}
function _o(r, e) {
  const t = this, n = t.params;
  let i = r.closest(`.${n.slideClass}, swiper-slide`);
  !i && t.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach((o) => {
    !i && o.matches && o.matches(`.${n.slideClass}, swiper-slide`) && (i = o);
  });
  let s = !1, a;
  if (i) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === i) {
        s = !0, a = o;
        break;
      }
  }
  if (i && s)
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var xo = {
  updateSize: po,
  updateSlides: ho,
  updateAutoHeight: mo,
  updateSlidesOffset: vo,
  updateSlidesProgress: go,
  updateProgress: yo,
  updateSlidesClasses: bo,
  updateActiveIndex: So,
  updateClickedSlide: _o
};
function To(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: n,
    translate: i,
    wrapperEl: s
  } = e;
  if (t.virtualTranslate)
    return n ? -i : i;
  if (t.cssMode)
    return i;
  let a = eo(s, r);
  return a += e.cssOverflowAdjustment(), n && (a = -a), a || 0;
}
function Eo(r, e) {
  const t = this, {
    rtlTranslate: n,
    params: i,
    wrapperEl: s,
    progress: a
  } = t;
  let o = 0, l = 0;
  const c = 0;
  t.isHorizontal() ? o = n ? -r : r : l = r, i.roundLengths && (o = Math.floor(o), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? o : l, i.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : i.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`);
  let d;
  const u = t.maxTranslate() - t.minTranslate();
  u === 0 ? d = 0 : d = (r - t.minTranslate()) / u, d !== a && t.updateProgress(r), t.emit("setTranslate", t.translate, e);
}
function ko() {
  return -this.snapGrid[0];
}
function Co() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Po(r, e, t, n, i) {
  r === void 0 && (r = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), n === void 0 && (n = !0);
  const s = this, {
    params: a,
    wrapperEl: o
  } = s;
  if (s.animating && a.preventInteractionOnTransition)
    return !1;
  const l = s.minTranslate(), c = s.maxTranslate();
  let d;
  if (n && r > l ? d = l : n && r < c ? d = c : d = r, s.updateProgress(d), a.cssMode) {
    const u = s.isHorizontal();
    if (e === 0)
      o[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!s.support.smoothScroll)
        return Kn({
          swiper: s,
          targetPosition: -d,
          side: u ? "left" : "top"
        }), !0;
      o.scrollTo({
        [u ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (s.setTransition(0), s.setTranslate(d), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(d), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(p) {
    !s || s.destroyed || p.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, t && s.emit("transitionEnd"));
  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
}
var Io = {
  getTranslate: To,
  setTranslate: Eo,
  minTranslate: ko,
  maxTranslate: Co,
  translateTo: Po
};
function Oo(r, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${r}ms`, t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""), t.emit("setTransition", r, e);
}
function Qn(r) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: n,
    step: i
  } = r;
  const {
    activeIndex: s,
    previousIndex: a
  } = e;
  let o = n;
  if (o || (s > a ? o = "next" : s < a ? o = "prev" : o = "reset"), e.emit(`transition${i}`), t && s !== a) {
    if (o === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`), o === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
  }
}
function Ao(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: n
  } = t;
  n.cssMode || (n.autoHeight && t.updateAutoHeight(), Qn({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }));
}
function Mo(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: n
  } = t;
  t.animating = !1, !n.cssMode && (t.setTransition(0), Qn({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "End"
  }));
}
var No = {
  setTransition: Oo,
  transitionStart: Ao,
  transitionEnd: Mo
};
function $o(r, e, t, n, i) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const s = this;
  let a = r;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: p,
    wrapperEl: f,
    enabled: m
  } = s;
  if (!m && !n && !i || s.destroyed || s.animating && o.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const g = Math.min(s.params.slidesPerGroupSkip, a);
  let T = g + Math.floor((a - g) / s.params.slidesPerGroup);
  T >= l.length && (T = l.length - 1);
  const w = -l[T];
  if (o.normalizeSlideIndex)
    for (let y = 0; y < c.length; y += 1) {
      const _ = -Math.floor(w * 100), x = Math.floor(c[y] * 100), A = Math.floor(c[y + 1] * 100);
      typeof c[y + 1] < "u" ? _ >= x && _ < A - (A - x) / 2 ? a = y : _ >= x && _ < A && (a = y + 1) : _ >= x && (a = y);
    }
  if (s.initialized && a !== u && (!s.allowSlideNext && (p ? w > s.translate && w > s.minTranslate() : w < s.translate && w < s.minTranslate()) || !s.allowSlidePrev && w > s.translate && w > s.maxTranslate() && (u || 0) !== a))
    return !1;
  a !== (d || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(w);
  let b;
  if (a > u ? b = "next" : a < u ? b = "prev" : b = "reset", p && -w === s.translate || !p && w === s.translate)
    return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), o.effect !== "slide" && s.setTranslate(w), b !== "reset" && (s.transitionStart(t, b), s.transitionEnd(t, b)), !1;
  if (o.cssMode) {
    const y = s.isHorizontal(), _ = p ? w : -w;
    if (e === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        f[y ? "scrollLeft" : "scrollTop"] = _;
      })) : f[y ? "scrollLeft" : "scrollTop"] = _, x && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
      });
    } else {
      if (!s.support.smoothScroll)
        return Kn({
          swiper: s,
          targetPosition: _,
          side: y ? "left" : "top"
        }), !0;
      f.scrollTo({
        [y ? "left" : "top"]: _,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return s.setTransition(e), s.setTranslate(w), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(t, b), e === 0 ? s.transitionEnd(t, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(_) {
    !s || s.destroyed || _.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, b));
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
}
function Lo(r, e, t, n) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let a = r;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled)
      a = a + i.virtual.slidesBefore;
    else {
      let o;
      if (s) {
        const p = a * i.params.grid.rows;
        o = i.slides.filter((f) => f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        o = i.getSlideIndexByData(a);
      const l = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {
        centeredSlides: c
      } = i.params;
      let d = i.params.slidesPerView;
      d === "auto" ? d = i.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(i.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
      let u = l - o < d;
      if (c && (u = u || o < Math.ceil(d / 2)), n && c && i.params.slidesPerView !== "auto" && !s && (u = !1), u) {
        const p = c ? o < i.activeIndex ? "prev" : "next" : o - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? o + 1 : o - l + 1,
          slideRealIndex: p === "next" ? i.realIndex : void 0
        });
      }
      if (s) {
        const p = a * i.params.grid.rows;
        a = i.slides.filter((f) => f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        a = i.getSlideIndexByData(a);
    }
  return requestAnimationFrame(() => {
    i.slideTo(a, e, t, n);
  }), i;
}
function Ro(r, e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    enabled: i,
    params: s,
    animating: a
  } = n;
  if (!i || n.destroyed) return n;
  typeof r > "u" && (r = n.params.speed);
  let o = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o, c = n.virtual && s.virtual.enabled;
  if (s.loop) {
    if (a && !c && s.loopPreventsSliding) return !1;
    if (n.loopFix({
      direction: "next"
    }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(n.activeIndex + l, r, e, t);
      }), !0;
  }
  return s.rewind && n.isEnd ? n.slideTo(0, r, e, t) : n.slideTo(n.activeIndex + l, r, e, t);
}
function Do(r, e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    params: i,
    snapGrid: s,
    slidesGrid: a,
    rtlTranslate: o,
    enabled: l,
    animating: c
  } = n;
  if (!l || n.destroyed) return n;
  typeof r > "u" && (r = n.params.speed);
  const d = n.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !d && i.loopPreventsSliding) return !1;
    n.loopFix({
      direction: "prev"
    }), n._clientLeft = n.wrapperEl.clientLeft;
  }
  const u = o ? n.translate : -n.translate;
  function p(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const f = p(u), m = s.map((w) => p(w));
  let g = s[m.indexOf(f) - 1];
  if (typeof g > "u" && i.cssMode) {
    let w;
    s.forEach((b, y) => {
      f >= b && (w = y);
    }), typeof w < "u" && (g = s[w > 0 ? w - 1 : w]);
  }
  let T = 0;
  if (typeof g < "u" && (T = a.indexOf(g), T < 0 && (T = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (T = T - n.slidesPerViewDynamic("previous", !0) + 1, T = Math.max(T, 0))), i.rewind && n.isBeginning) {
    const w = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(w, r, e, t);
  } else if (i.loop && n.activeIndex === 0 && i.cssMode)
    return requestAnimationFrame(() => {
      n.slideTo(T, r, e, t);
    }), !0;
  return n.slideTo(T, r, e, t);
}
function jo(r, e, t) {
  e === void 0 && (e = !0);
  const n = this;
  if (!n.destroyed)
    return typeof r > "u" && (r = n.params.speed), n.slideTo(n.activeIndex, r, e, t);
}
function zo(r, e, t, n) {
  e === void 0 && (e = !0), n === void 0 && (n = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof r > "u" && (r = i.params.speed);
  let s = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, s), o = a + Math.floor((s - a) / i.params.slidesPerGroup), l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[o]) {
    const c = i.snapGrid[o], d = i.snapGrid[o + 1];
    l - c > (d - c) * n && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[o - 1], d = i.snapGrid[o];
    l - c <= (d - c) * n && (s -= i.params.slidesPerGroup);
  }
  return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, r, e, t);
}
function Vo() {
  const r = this;
  if (r.destroyed) return;
  const {
    params: e,
    slidesEl: t
  } = r, n = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let i = r.clickedIndex, s;
  const a = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (r.animating) return;
    s = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? i < r.loopedSlides - n / 2 || i > r.slides.length - r.loopedSlides + n / 2 ? (r.loopFix(), i = r.getSlideIndex(ke(t, `${a}[data-swiper-slide-index="${s}"]`)[0]), $r(() => {
      r.slideTo(i);
    })) : r.slideTo(i) : i > r.slides.length - n ? (r.loopFix(), i = r.getSlideIndex(ke(t, `${a}[data-swiper-slide-index="${s}"]`)[0]), $r(() => {
      r.slideTo(i);
    })) : r.slideTo(i);
  } else
    r.slideTo(i);
}
var Zo = {
  slideTo: $o,
  slideToLoop: Lo,
  slideNext: Ro,
  slidePrev: Do,
  slideReset: jo,
  slideToClosest: zo,
  slideToClickedSlide: Vo
};
function Fo(r) {
  const e = this, {
    params: t,
    slidesEl: n
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const i = () => {
    ke(n, `.${t.slideClass}, swiper-slide`).forEach((u, p) => {
      u.setAttribute("data-swiper-slide-index", p);
    });
  }, s = e.grid && t.grid && t.grid.rows > 1, a = t.slidesPerGroup * (s ? t.grid.rows : 1), o = e.slides.length % a !== 0, l = s && e.slides.length % t.grid.rows !== 0, c = (d) => {
    for (let u = 0; u < d; u += 1) {
      const p = e.isElement ? Lr("swiper-slide", [t.slideBlankClass]) : Lr("div", [t.slideClass, t.slideBlankClass]);
      e.slidesEl.append(p);
    }
  };
  if (o) {
    if (t.loopAddBlankSlides) {
      const d = a - e.slides.length % a;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      ar("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else if (l) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - e.slides.length % t.grid.rows;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      ar("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    i();
  } else
    i();
  e.loopFix({
    slideRealIndex: r,
    direction: t.centeredSlides ? void 0 : "next"
  });
}
function Bo(r) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: n,
    setTranslate: i,
    activeSlideIndex: s,
    byController: a,
    byMousewheel: o
  } = r === void 0 ? {} : r;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: u,
    slidesEl: p,
    params: f
  } = l, {
    centeredSlides: m
  } = f;
  if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) {
    t && (!f.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = u, l.emit("loopFix");
    return;
  }
  let g = f.slidesPerView;
  g === "auto" ? g = l.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 === 0 && (g = g + 1));
  const T = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
  let w = T;
  w % T !== 0 && (w += T - w % T), w += f.loopAdditionalSlides, l.loopedSlides = w;
  const b = l.grid && f.grid && f.grid.rows > 1;
  c.length < g + w ? ar("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && f.grid.fill === "row" && ar("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const y = [], _ = [];
  let x = l.activeIndex;
  typeof s > "u" ? s = l.getSlideIndex(c.filter((h) => h.classList.contains(f.slideActiveClass))[0]) : x = s;
  const A = n === "next" || !n, F = n === "prev" || !n;
  let $ = 0, ee = 0;
  const P = b ? Math.ceil(c.length / f.grid.rows) : c.length, v = (b ? c[s].column : s) + (m && typeof i > "u" ? -g / 2 + 0.5 : 0);
  if (v < w) {
    $ = Math.max(w - v, T);
    for (let h = 0; h < w - v; h += 1) {
      const E = h - Math.floor(h / P) * P;
      if (b) {
        const L = P - E - 1;
        for (let j = c.length - 1; j >= 0; j -= 1)
          c[j].column === L && y.push(j);
      } else
        y.push(P - E - 1);
    }
  } else if (v + g > P - w) {
    ee = Math.max(v - (P - w * 2), T);
    for (let h = 0; h < ee; h += 1) {
      const E = h - Math.floor(h / P) * P;
      b ? c.forEach((L, j) => {
        L.column === E && _.push(j);
      }) : _.push(E);
    }
  }
  if (l.__preventObserver__ = !0, requestAnimationFrame(() => {
    l.__preventObserver__ = !1;
  }), F && y.forEach((h) => {
    c[h].swiperLoopMoveDOM = !0, p.prepend(c[h]), c[h].swiperLoopMoveDOM = !1;
  }), A && _.forEach((h) => {
    c[h].swiperLoopMoveDOM = !0, p.append(c[h]), c[h].swiperLoopMoveDOM = !1;
  }), l.recalcSlides(), f.slidesPerView === "auto" ? l.updateSlides() : b && (y.length > 0 && F || _.length > 0 && A) && l.slides.forEach((h, E) => {
    l.grid.updateSlide(E, h, l.slides);
  }), f.watchSlidesProgress && l.updateSlidesOffset(), t) {
    if (y.length > 0 && F) {
      if (typeof e > "u") {
        const h = l.slidesGrid[x], L = l.slidesGrid[x + $] - h;
        o ? l.setTranslate(l.translate - L) : (l.slideTo(x + Math.ceil($), 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L));
      } else if (i) {
        const h = b ? y.length / f.grid.rows : y.length;
        l.slideTo(l.activeIndex + h, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate;
      }
    } else if (_.length > 0 && A)
      if (typeof e > "u") {
        const h = l.slidesGrid[x], L = l.slidesGrid[x - ee] - h;
        o ? l.setTranslate(l.translate - L) : (l.slideTo(x - ee, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L));
      } else {
        const h = b ? _.length / f.grid.rows : _.length;
        l.slideTo(l.activeIndex - h, 0, !1, !0);
      }
  }
  if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !a) {
    const h = {
      slideRealIndex: e,
      direction: n,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0
    };
    Array.isArray(l.controller.control) ? l.controller.control.forEach((E) => {
      !E.destroyed && E.params.loop && E.loopFix({
        ...h,
        slideTo: E.params.slidesPerView === f.slidesPerView ? t : !1
      });
    }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
      ...h,
      slideTo: l.controller.control.params.slidesPerView === f.slidesPerView ? t : !1
    });
  }
  l.emit("loopFix");
}
function Go() {
  const r = this, {
    params: e,
    slidesEl: t
  } = r;
  if (!e.loop || r.virtual && r.params.virtual.enabled) return;
  r.recalcSlides();
  const n = [];
  r.slides.forEach((i) => {
    const s = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    n[s] = i;
  }), r.slides.forEach((i) => {
    i.removeAttribute("data-swiper-slide-index");
  }), n.forEach((i) => {
    t.append(i);
  }), r.recalcSlides(), r.slideTo(r.realIndex, 0);
}
var Wo = {
  loopCreate: Fo,
  loopFix: Bo,
  loopDestroy: Go
};
function Uo(r) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = r ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Ho() {
  const r = this;
  r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0), r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", r.isElement && requestAnimationFrame(() => {
    r.__preventObserver__ = !1;
  }));
}
var qo = {
  setGrabCursor: Uo,
  unsetGrabCursor: Ho
};
function Yo(r, e) {
  e === void 0 && (e = this);
  function t(n) {
    if (!n || n === pt() || n === ue()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(r);
    return !i && !n.getRootNode ? null : i || t(n.getRootNode().host);
  }
  return t(e);
}
function hn(r, e, t) {
  const n = ue(), {
    params: i
  } = r, s = i.edgeSwipeDetection, a = i.edgeSwipeThreshold;
  return s && (t <= a || t >= n.innerWidth - a) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function Ko(r) {
  const e = this, t = pt();
  let n = r;
  n.originalEvent && (n = n.originalEvent);
  const i = e.touchEventsData;
  if (n.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== n.pointerId)
      return;
    i.pointerId = n.pointerId;
  } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    hn(e, n, n.targetTouches[0].pageX);
    return;
  }
  const {
    params: s,
    touches: a,
    enabled: o
  } = e;
  if (!o || !s.simulateTouch && n.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = n.target;
  if (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "", d = n.composedPath ? n.composedPath() : n.path;
  c && n.target && n.target.shadowRoot && d && (l = d[0]);
  const u = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, p = !!(n.target && n.target.shadowRoot);
  if (s.noSwiping && (p ? Yo(u, l) : l.closest(u))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler))
    return;
  a.currentX = n.pageX, a.currentY = n.pageY;
  const f = a.currentX, m = a.currentY;
  if (!hn(e, n, f))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), a.startX = f, a.startY = m, i.touchStartTime = sr(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
  let g = !0;
  l.matches(i.focusableElements) && (g = !1, l.nodeName === "SELECT" && (i.isTouched = !1)), t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== l && t.activeElement.blur();
  const T = g && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || T) && !l.isContentEditable && n.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", n);
}
function Xo(r) {
  const e = pt(), t = this, n = t.touchEventsData, {
    params: i,
    touches: s,
    rtlTranslate: a,
    enabled: o
  } = t;
  if (!o || !i.simulateTouch && r.pointerType === "mouse") return;
  let l = r;
  if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (n.touchId !== null || l.pointerId !== n.pointerId))
    return;
  let c;
  if (l.type === "touchmove") {
    if (c = [...l.changedTouches].filter((A) => A.identifier === n.touchId)[0], !c || c.identifier !== n.touchId) return;
  } else
    c = l;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  const d = c.pageX, u = c.pageY;
  if (l.preventedByNestedSwiper) {
    s.startX = d, s.startY = u;
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(n.focusableElements) || (t.allowClick = !1), n.isTouched && (Object.assign(s, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u
    }), n.touchStartTime = sr());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (t.isVertical()) {
      if (u < s.startY && t.translate <= t.maxTranslate() || u > s.startY && t.translate >= t.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else if (d < s.startX && t.translate <= t.maxTranslate() || d > s.startX && t.translate >= t.minTranslate())
      return;
  }
  if (e.activeElement && l.target === e.activeElement && l.target.matches(n.focusableElements)) {
    n.isMoved = !0, t.allowClick = !1;
    return;
  }
  n.allowTouchCallbacks && t.emit("touchMove", l), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = d, s.currentY = u;
  const p = s.currentX - s.startX, f = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let A;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : p * p + f * f >= 25 && (A = Math.atan2(Math.abs(f), Math.abs(p)) * 180 / Math.PI, n.isScrolling = t.isHorizontal() ? A > i.touchAngle : 90 - A > i.touchAngle);
  }
  if (n.isScrolling && t.emit("touchMoveOpposite", l), typeof n.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (n.startMoving = !0), n.isScrolling || l.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  t.allowClick = !1, !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let m = t.isHorizontal() ? p : f, g = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), s.diff = m, m *= i.touchRatio, a && (m = -m, g = -g);
  const T = t.touchesDirection;
  t.swipeDirection = m > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const w = t.params.loop && !i.cssMode, b = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!n.isMoved) {
    if (w && b && t.loopFix({
      direction: t.swipeDirection
    }), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const A = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(A);
    }
    n.allowMomentumBounce = !1, i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l);
  }
  let y;
  if ((/* @__PURE__ */ new Date()).getTime(), n.isMoved && n.allowThresholdMove && T !== t.touchesDirection && w && b && Math.abs(m) >= 1) {
    Object.assign(s, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
    return;
  }
  t.emit("sliderMove", l), n.isMoved = !0, n.currentTranslate = m + n.startTranslate;
  let _ = !0, x = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (x = 0), m > 0 ? (w && b && !y && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), n.currentTranslate > t.minTranslate() && (_ = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + m) ** x))) : m < 0 && (w && b && !y && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (i.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
  }), n.currentTranslate < t.maxTranslate() && (_ = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - m) ** x))), _ && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(m) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && t.freeMode || i.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate));
}
function Jo(r) {
  const e = this, t = e.touchEventsData;
  let n = r;
  n.originalEvent && (n = n.originalEvent);
  let i;
  if (n.type === "touchend" || n.type === "touchcancel") {
    if (i = [...n.changedTouches].filter((x) => x.identifier === t.touchId)[0], !i || i.identifier !== t.touchId) return;
  } else {
    if (t.touchId !== null || n.pointerId !== t.pointerId) return;
    i = n;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: a,
    touches: o,
    rtlTranslate: l,
    slidesGrid: c,
    enabled: d
  } = e;
  if (!d || !a.simulateTouch && n.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", n), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const u = sr(), p = u - t.touchStartTime;
  if (e.allowClick) {
    const x = n.path || n.composedPath && n.composedPath();
    e.updateClickedSlide(x && x[0] || n.target, x), e.emit("tap click", n), p < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", n);
  }
  if (t.lastClickTime = sr(), $r(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let f;
  if (a.followFinger ? f = l ? e.translate : -e.translate : f = -t.currentTranslate, a.cssMode)
    return;
  if (a.freeMode && a.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: f
    });
    return;
  }
  const m = f >= -e.maxTranslate() && !e.params.loop;
  let g = 0, T = e.slidesSizesGrid[0];
  for (let x = 0; x < c.length; x += x < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const A = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof c[x + A] < "u" ? (m || f >= c[x] && f < c[x + A]) && (g = x, T = c[x + A] - c[x]) : (m || f >= c[x]) && (g = x, T = c[c.length - 1] - c[c.length - 2]);
  }
  let w = null, b = null;
  a.rewind && (e.isBeginning ? b = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (w = 0));
  const y = (f - c[g]) / T, _ = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (p > a.longSwipesMs) {
    if (!a.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (y >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? w : g + _) : e.slideTo(g)), e.swipeDirection === "prev" && (y > 1 - a.longSwipesRatio ? e.slideTo(g + _) : b !== null && y < 0 && Math.abs(y) > a.longSwipesRatio ? e.slideTo(b) : e.slideTo(g));
  } else {
    if (!a.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (n.target === e.navigation.nextEl || n.target === e.navigation.prevEl) ? n.target === e.navigation.nextEl ? e.slideTo(g + _) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : g + _), e.swipeDirection === "prev" && e.slideTo(b !== null ? b : g));
  }
}
function mn() {
  const r = this, {
    params: e,
    el: t
  } = r;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: n,
    allowSlidePrev: i,
    snapGrid: s
  } = r, a = r.virtual && r.params.virtual.enabled;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses();
  const o = a && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !o ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !a ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout), r.autoplay.resizeTimeout = setTimeout(() => {
    r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume();
  }, 500)), r.allowSlidePrev = i, r.allowSlideNext = n, r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
}
function Qo(r) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation())));
}
function el() {
  const r = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: n
  } = r;
  if (!n) return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let i;
  const s = r.maxTranslate() - r.minTranslate();
  s === 0 ? i = 0 : i = (r.translate - r.minTranslate()) / s, i !== r.progress && r.updateProgress(t ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1);
}
function tl(r) {
  const e = this;
  Zt(e, r.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function rl() {
  const r = this;
  r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0, r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const ei = (r, e) => {
  const t = pt(), {
    params: n,
    el: i,
    wrapperEl: s,
    device: a
  } = r, o = !!n.nested, l = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  !i || typeof i == "string" || (t[l]("touchstart", r.onDocumentTouchStart, {
    passive: !1,
    capture: o
  }), i[l]("touchstart", r.onTouchStart, {
    passive: !1
  }), i[l]("pointerdown", r.onTouchStart, {
    passive: !1
  }), t[l]("touchmove", r.onTouchMove, {
    passive: !1,
    capture: o
  }), t[l]("pointermove", r.onTouchMove, {
    passive: !1,
    capture: o
  }), t[l]("touchend", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerup", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointercancel", r.onTouchEnd, {
    passive: !0
  }), t[l]("touchcancel", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerout", r.onTouchEnd, {
    passive: !0
  }), t[l]("pointerleave", r.onTouchEnd, {
    passive: !0
  }), t[l]("contextmenu", r.onTouchEnd, {
    passive: !0
  }), (n.preventClicks || n.preventClicksPropagation) && i[l]("click", r.onClick, !0), n.cssMode && s[l]("scroll", r.onScroll), n.updateOnWindowResize ? r[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", mn, !0) : r[c]("observerUpdate", mn, !0), i[l]("load", r.onLoad, {
    capture: !0
  }));
};
function nl() {
  const r = this, {
    params: e
  } = r;
  r.onTouchStart = Ko.bind(r), r.onTouchMove = Xo.bind(r), r.onTouchEnd = Jo.bind(r), r.onDocumentTouchStart = rl.bind(r), e.cssMode && (r.onScroll = el.bind(r)), r.onClick = Qo.bind(r), r.onLoad = tl.bind(r), ei(r, "on");
}
function il() {
  ei(this, "off");
}
var sl = {
  attachEvents: nl,
  detachEvents: il
};
const vn = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function al() {
  const r = this, {
    realIndex: e,
    initialized: t,
    params: n,
    el: i
  } = r, s = n.breakpoints;
  if (!s || s && Object.keys(s).length === 0) return;
  const a = r.getBreakpoint(s, r.params.breakpointsBase, r.el);
  if (!a || r.currentBreakpoint === a) return;
  const l = (a in s ? s[a] : void 0) || r.originalParams, c = vn(r, n), d = vn(r, l), u = r.params.grabCursor, p = l.grabCursor, f = n.enabled;
  c && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), r.emitContainerClasses()) : !c && d && (i.classList.add(`${n.containerModifierClass}grid`), (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), r.emitContainerClasses()), u && !p ? r.unsetGrabCursor() : !u && p && r.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((y) => {
    if (typeof l[y] > "u") return;
    const _ = n[y] && n[y].enabled, x = l[y] && l[y].enabled;
    _ && !x && r[y].disable(), !_ && x && r[y].enable();
  });
  const m = l.direction && l.direction !== n.direction, g = n.loop && (l.slidesPerView !== n.slidesPerView || m), T = n.loop;
  m && t && r.changeDirection(), le(r.params, l);
  const w = r.params.enabled, b = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), f && !w ? r.disable() : !f && w && r.enable(), r.currentBreakpoint = a, r.emit("_beforeBreakpoint", l), t && (g ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides()) : !T && b ? (r.loopCreate(e), r.updateSlides()) : T && !b && r.loopDestroy()), r.emit("breakpoint", l);
}
function ol(r, e, t) {
  if (e === void 0 && (e = "window"), !r || e === "container" && !t) return;
  let n = !1;
  const i = ue(), s = e === "window" ? i.innerHeight : t.clientHeight, a = Object.keys(r).map((o) => {
    if (typeof o == "string" && o.indexOf("@") === 0) {
      const l = parseFloat(o.substr(1));
      return {
        value: s * l,
        point: o
      };
    }
    return {
      value: o,
      point: o
    };
  });
  a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
  for (let o = 0; o < a.length; o += 1) {
    const {
      point: l,
      value: c
    } = a[o];
    e === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (n = l) : c <= t.clientWidth && (n = l);
  }
  return n || "max";
}
var ll = {
  setBreakpoint: al,
  getBreakpoint: ol
};
function dl(r, e) {
  const t = [];
  return r.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && t.push(e + i);
    }) : typeof n == "string" && t.push(e + n);
  }), t;
}
function cl() {
  const r = this, {
    classNames: e,
    params: t,
    rtl: n,
    el: i,
    device: s
  } = r, a = dl(["initialized", t.direction, {
    "free-mode": r.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: n
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: s.android
  }, {
    ios: s.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...a), i.classList.add(...e), r.emitContainerClasses();
}
function ul() {
  const r = this, {
    el: e,
    classNames: t
  } = r;
  !e || typeof e == "string" || (e.classList.remove(...t), r.emitContainerClasses());
}
var fl = {
  addClasses: cl,
  removeClasses: ul
};
function pl() {
  const r = this, {
    isLocked: e,
    params: t
  } = r, {
    slidesOffsetBefore: n
  } = t;
  if (n) {
    const i = r.slides.length - 1, s = r.slidesGrid[i] + r.slidesSizesGrid[i] + n * 2;
    r.isLocked = r.size > s;
  } else
    r.isLocked = r.snapGrid.length === 1;
  t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
var hl = {
  checkOverflow: pl
}, gn = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function ml(r, e) {
  return function(n) {
    n === void 0 && (n = {});
    const i = Object.keys(n)[0], s = n[i];
    if (typeof s != "object" || s === null) {
      le(e, n);
      return;
    }
    if (r[i] === !0 && (r[i] = {
      enabled: !0
    }), i === "navigation" && r[i] && r[i].enabled && !r[i].prevEl && !r[i].nextEl && (r[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && r[i] && r[i].enabled && !r[i].el && (r[i].auto = !0), !(i in r && "enabled" in s)) {
      le(e, n);
      return;
    }
    typeof r[i] == "object" && !("enabled" in r[i]) && (r[i].enabled = !0), r[i] || (r[i] = {
      enabled: !1
    }), le(e, n);
  };
}
const xr = {
  eventsEmitter: fo,
  update: xo,
  translate: Io,
  transition: No,
  slide: Zo,
  loop: Wo,
  grabCursor: qo,
  events: sl,
  breakpoints: ll,
  checkOverflow: hl,
  classes: fl
}, Tr = {};
class fe {
  constructor() {
    let e, t;
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? t = i[0] : [e, t] = i, t || (t = {}), t = le({}, t), e && !t.el && (t.el = e);
    const a = pt();
    if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
      const d = [];
      return a.querySelectorAll(t.el).forEach((u) => {
        const p = le({}, t, {
          el: u
        });
        d.push(new fe(p));
      }), d;
    }
    const o = this;
    o.__swiper__ = !0, o.support = Xn(), o.device = Jn({
      userAgent: t.userAgent
    }), o.browser = lo(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
    const l = {};
    o.modules.forEach((d) => {
      d({
        params: t,
        swiper: o,
        extendParams: ml(t, l),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o)
      });
    });
    const c = le({}, gn, l);
    return o.params = le({}, c, Tr, t), o.originalParams = le({}, o.params), o.passedParams = le({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((d) => {
      o.on(d, o.params.on[d]);
    }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
      enabled: o.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return o.params.direction === "horizontal";
      },
      isVertical() {
        return o.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: o.params.allowSlideNext,
      allowSlidePrev: o.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: o.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: o.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), o.emit("_swiper"), o.params.init && o.init(), o;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: t,
      params: n
    } = this, i = ke(t, `.${n.slideClass}, swiper-slide`), s = un(i[0]);
    return un(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: n
    } = e;
    e.slides = ke(t, `.${n.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = n.minTranslate(), a = (n.maxTranslate() - i) * e + i;
    n.translateTo(a, typeof t > "u" ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((n) => {
      const i = e.getSlideClasses(n);
      t.push({
        slideEl: n,
        classNames: i
      }), e.emit("_slideClass", n, i);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const n = this, {
      params: i,
      slides: s,
      slidesGrid: a,
      slidesSizesGrid: o,
      size: l,
      activeIndex: c
    } = n;
    let d = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let u = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0, p;
      for (let f = c + 1; f < s.length; f += 1)
        s[f] && !p && (u += Math.ceil(s[f].swiperSlideSize), d += 1, u > l && (p = !0));
      for (let f = c - 1; f >= 0; f -= 1)
        s[f] && !p && (u += s[f].swiperSlideSize, d += 1, u > l && (p = !0));
    } else if (e === "current")
      for (let u = c + 1; u < s.length; u += 1)
        (t ? a[u] + o[u] - a[c] < l : a[u] - a[c] < l) && (d += 1);
    else
      for (let u = c - 1; u >= 0; u -= 1)
        a[c] - a[u] < l && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: n
    } = e;
    n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
      a.complete && Zt(e, a);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function i() {
      const a = e.rtlTranslate ? e.translate * -1 : e.translate, o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      i(), n.autoHeight && e.updateAutoHeight();
    else {
      if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
        const a = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(a.length - 1, 0, !1, !0);
      } else
        s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || i();
    }
    n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const n = this, i = n.params.direction;
    return e || (e = i === "horizontal" ? "vertical" : "horizontal"), e === i || e !== "horizontal" && e !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((s) => {
      e === "vertical" ? s.style.width = "" : s.style.height = "";
    }), n.emit("changeDirection"), t && n.update()), n;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let n = e || t.params.el;
    if (typeof n == "string" && (n = document.querySelector(n)), !n)
      return !1;
    n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : ke(n, i())[0];
    return !a && t.params.createElements && (a = Lr("div", t.params.wrapperClass), n.append(a), ke(n, `.${t.params.slideClass}`).forEach((o) => {
      a.append(o);
    })), Object.assign(t, {
      el: n,
      wrapperEl: a,
      slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
      hostEl: t.isElement ? n.parentNode.host : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || De(n, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || De(n, "direction") === "rtl"),
      wrongRTL: De(a, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const i = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((s) => {
      s.complete ? Zt(t, s) : s.addEventListener("load", (a) => {
        Zt(t, a.target);
      });
    }), Rr(t), t.initialized = !0, Rr(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const n = this, {
      params: i,
      el: s,
      wrapperEl: a,
      slides: o
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s && typeof s != "string" && s.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach((l) => {
      l.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((l) => {
      n.off(l);
    }), e !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), Ja(n)), n.destroyed = !0), null;
  }
  static extendDefaults(e) {
    le(Tr, e);
  }
  static get extendedDefaults() {
    return Tr;
  }
  static get defaults() {
    return gn;
  }
  static installModule(e) {
    fe.prototype.__modules__ || (fe.prototype.__modules__ = []);
    const t = fe.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => fe.installModule(t)), fe) : (fe.installModule(e), fe);
  }
}
Object.keys(xr).forEach((r) => {
  Object.keys(xr[r]).forEach((e) => {
    fe.prototype[e] = xr[r][e];
  });
});
fe.use([co, uo]);
function ti(r, e) {
  const [t, n] = X(!1), [i, s] = X(!1), [a, o] = X(), l = () => {
    var f;
    return (f = a()) == null ? void 0 : f.swiper;
  }, [c, d] = Ya(
    () => {
      var f;
      return ((f = l()) == null ? void 0 : f.activeIndex) ?? 0;
    }
  ), u = () => {
    var f;
    return {
      ...e == null ? void 0 : e(),
      on: {
        ...(f = e == null ? void 0 : e()) == null ? void 0 : f.on,
        reachEnd: () => s(!0),
        reachBeginning: () => n(!0),
        fromEdge: () => {
          n(!1), s(!1);
        },
        afterInit: (m) => {
          n(m.isBeginning), s(m.isEnd);
        },
        slideChange(m) {
          var g, T, w;
          (w = (T = (g = e == null ? void 0 : e()) == null ? void 0 : g.on) == null ? void 0 : T.slideChange) == null || w.call(T, m), d(m.activeIndex);
        }
      }
    };
  }, p = Wr(r);
  return Pe(() => {
    var f;
    l() && (Object.assign(l(), u()), (f = l()) == null || f.update());
  }), ct(() => {
    a() && new fe(a(), u());
  }), {
    isPrevBtnDisabled: t,
    isNextBtnDisabled: i,
    children: p,
    swiper: l,
    setSwiperContainer: o,
    activeIndex: c
  };
}
function ri(r, e) {
  const [t, n] = X();
  function i() {
    n(
      Hn(r(), {
        ...e,
        tabbableOptions: {
          ...e == null ? void 0 : e.tabbableOptions,
          getShadowRoot: !0
        }
      })
    );
  }
  return r() ? i() : ct(() => {
    if (!r())
      throw new Error("Element is not available");
    i();
  }), Ke(() => {
    var s;
    (s = t()) == null || s.deactivate(), n(void 0);
  }), t;
}
function vl() {
  const [r, e] = X(!1);
  return ct(() => {
    e(!0);
  }), r;
}
var gl = /* @__PURE__ */ se("<div class=media-viewer role=dialog aria-modal=true><div class=media-viewer-inner><solid-button class=media-viewer-close variant=ghost aria-label=Fermer><solid-icon icon=mingcute-close-line>", !0, !1), yl = /* @__PURE__ */ se("<div role=group aria-roledescription=carrousel class=media-viewer-swiper-container><div class=swiper aria-live=polite><div class=swiper-wrapper>"), bl = /* @__PURE__ */ se('<div class=media-viewer-slide-controls><solid-button variant=ghost aria-label=Précédent class="media-viewer-control media-viewer-btn"><solid-icon icon=mingcute-left-line></solid-icon></solid-button><solid-button variant=ghost aria-label=Suivant class="media-viewer-control media-viewer-btn"><solid-icon icon=mingcute-right-line></solid-icon></solid-button><p aria-hidden=true> / </p><p class=sr-only>Vidéo <!> sur ', !0, !1), wl = /* @__PURE__ */ se("<div class=swiper-slide><div class=media-viewer-slide-inner><div>");
const Sl = Y.object({
  arialabel: Y.string()
}), _l = Y.object({
  arialabel: Y.string()
});
We("cfc-mediaviewer-modal", Sl, (r) => {
  ft();
  const e = et(), [t, n] = X(!1), [i, s] = X(), a = Wr(e), o = vl(), l = ri(() => i(), {
    escapeDeactivates: !0,
    onDeactivate: () => n(!1)
  }), c = oe(() => {
    var d;
    return (d = a()) == null ? void 0 : d.filter((u) => u.matches("template")).map((u) => u.content.cloneNode(!0));
  });
  return Pe(() => {
    var d, u;
    t() ? (document.body.style.overflow = "hidden", (d = l()) == null || d.activate()) : (document.body.style.overflow = "initial", (u = l()) == null || u.deactivate());
  }), Object.assign(e, {
    open() {
      n(!0);
    },
    close() {
      n(!1);
    },
    state() {
      return t();
    }
  }), pe(En, {
    get mount() {
      return document.body;
    },
    get children() {
      var d = gl(), u = d.firstChild, p = u.firstChild, f = p.firstChild;
      return je((m) => s(m), d), p.$$click = () => n(!1), p.icononly = !0, p._$owner = Q(), f._$owner = Q(), q(u, (() => {
        var m = oe(() => !!o());
        return () => m() && c();
      })(), null), ne((m) => {
        var g = r.arialabel, T = !!t();
        return g !== m.e && te(d, "aria-label", m.e = g), T !== m.t && d.classList.toggle("show", m.t = T), m;
      }, {
        e: void 0,
        t: void 0
      }), d;
    }
  });
});
We("cfc-mediaviewer-carousel", _l, (r) => {
  const e = et(), t = Zr();
  ft();
  const {
    setSwiperContainer: n,
    isNextBtnDisabled: i,
    swiper: s,
    children: a,
    isPrevBtnDisabled: o,
    activeIndex: l
  } = ti(e, () => ({
    slidesPerView: 1
  })), c = oe(() => a().filter((d) => d.matches("template")).map((d) => d.content.cloneNode(!0)));
  return [(() => {
    var d = yl(), u = d.firstChild, p = u.firstChild;
    return je((f) => n(f), u), q(p, pe(bt, {
      get each() {
        return c();
      },
      children: (f, m) => (() => {
        var g = wl(), T = g.firstChild, w = T.firstChild;
        return q(w, f), ne((b) => {
          var y = `${t}-slide-${m()}`, _ = `${m() + 1} sur ${c().length}`;
          return y !== b.e && te(g, "id", b.e = y), _ !== b.t && te(g, "aria-label", b.t = _), b;
        }, {
          e: void 0,
          t: void 0
        }), g;
      })()
    })), ne(() => te(d, "aria-label", r.arialabel)), d;
  })(), (() => {
    var d = bl(), u = d.firstChild, p = u.firstChild, f = u.nextSibling, m = f.firstChild, g = f.nextSibling, T = g.firstChild, w = g.nextSibling, b = w.firstChild, y = b.nextSibling;
    return y.nextSibling, u.$$click = () => {
      var _;
      return (_ = s()) == null ? void 0 : _.slidePrev();
    }, u.icononly = !0, u._$owner = Q(), p._$owner = Q(), f.$$click = () => {
      var _;
      return (_ = s()) == null ? void 0 : _.slideNext();
    }, f.icononly = !0, f._$owner = Q(), m._$owner = Q(), q(g, () => l() + 1, T), q(g, () => c().length, null), q(w, () => l() + 1, y), q(w, () => c().length, null), ne((_) => {
      var x = o(), A = i();
      return x !== _.e && (u.disabled = _.e = x), A !== _.t && (f.disabled = _.t = A), _;
    }, {
      e: void 0,
      t: void 0
    }), d;
  })()];
});
Fr(["click"]);
const Oe = Symbol.for("@ts-pattern/matcher"), xl = Symbol.for("@ts-pattern/isVariadic"), or = "@ts-pattern/anonymous-select-key", Dr = (r) => !!(r && typeof r == "object"), Ft = (r) => r && !!r[Oe], we = (r, e, t) => {
  if (Ft(r)) {
    const n = r[Oe](), { matched: i, selections: s } = n.match(e);
    return i && s && Object.keys(s).forEach((a) => t(a, s[a])), i;
  }
  if (Dr(r)) {
    if (!Dr(e)) return !1;
    if (Array.isArray(r)) {
      if (!Array.isArray(e)) return !1;
      let n = [], i = [], s = [];
      for (const a of r.keys()) {
        const o = r[a];
        Ft(o) && o[xl] ? s.push(o) : s.length ? i.push(o) : n.push(o);
      }
      if (s.length) {
        if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (e.length < n.length + i.length) return !1;
        const a = e.slice(0, n.length), o = i.length === 0 ? [] : e.slice(-i.length), l = e.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
        return n.every((c, d) => we(c, a[d], t)) && i.every((c, d) => we(c, o[d], t)) && (s.length === 0 || we(s[0], l, t));
      }
      return r.length === e.length && r.every((a, o) => we(a, e[o], t));
    }
    return Object.keys(r).every((n) => {
      const i = r[n];
      return (n in e || Ft(s = i) && s[Oe]().matcherType === "optional") && we(i, e[n], t);
      var s;
    });
  }
  return Object.is(e, r);
}, Be = (r) => {
  var e, t, n;
  return Dr(r) ? Ft(r) ? (e = (t = (n = r[Oe]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? e : [] : Array.isArray(r) ? $t(r, Be) : $t(Object.values(r), Be) : [];
}, $t = (r, e) => r.reduce((t, n) => t.concat(e(n)), []);
function he(r) {
  return Object.assign(r, { optional: () => Tl(r), and: (e) => G(r, e), or: (e) => El(r, e), select: (e) => e === void 0 ? yn(r) : yn(e, r) });
}
function Tl(r) {
  return he({ [Oe]: () => ({ match: (e) => {
    let t = {};
    const n = (i, s) => {
      t[i] = s;
    };
    return e === void 0 ? (Be(r).forEach((i) => n(i, void 0)), { matched: !0, selections: t }) : { matched: we(r, e, n), selections: t };
  }, getSelectionKeys: () => Be(r), matcherType: "optional" }) });
}
function G(...r) {
  return he({ [Oe]: () => ({ match: (e) => {
    let t = {};
    const n = (i, s) => {
      t[i] = s;
    };
    return { matched: r.every((i) => we(i, e, n)), selections: t };
  }, getSelectionKeys: () => $t(r, Be), matcherType: "and" }) });
}
function El(...r) {
  return he({ [Oe]: () => ({ match: (e) => {
    let t = {};
    const n = (i, s) => {
      t[i] = s;
    };
    return $t(r, Be).forEach((i) => n(i, void 0)), { matched: r.some((i) => we(i, e, n)), selections: t };
  }, getSelectionKeys: () => $t(r, Be), matcherType: "or" }) });
}
function V(r) {
  return { [Oe]: () => ({ match: (e) => ({ matched: !!r(e) }) }) };
}
function yn(...r) {
  const e = typeof r[0] == "string" ? r[0] : void 0, t = r.length === 2 ? r[1] : typeof r[0] == "string" ? void 0 : r[0];
  return he({ [Oe]: () => ({ match: (n) => {
    let i = { [e ?? or]: n };
    return { matched: t === void 0 || we(t, n, (s, a) => {
      i[s] = a;
    }), selections: i };
  }, getSelectionKeys: () => [e ?? or].concat(t === void 0 ? [] : Be(t)) }) });
}
function ye(r) {
  return typeof r == "number";
}
function Me(r) {
  return typeof r == "string";
}
function Ne(r) {
  return typeof r == "bigint";
}
he(V(function(r) {
  return !0;
}));
const $e = (r) => Object.assign(he(r), { startsWith: (e) => {
  return $e(G(r, (t = e, V((n) => Me(n) && n.startsWith(t)))));
  var t;
}, endsWith: (e) => {
  return $e(G(r, (t = e, V((n) => Me(n) && n.endsWith(t)))));
  var t;
}, minLength: (e) => $e(G(r, ((t) => V((n) => Me(n) && n.length >= t))(e))), length: (e) => $e(G(r, ((t) => V((n) => Me(n) && n.length === t))(e))), maxLength: (e) => $e(G(r, ((t) => V((n) => Me(n) && n.length <= t))(e))), includes: (e) => {
  return $e(G(r, (t = e, V((n) => Me(n) && n.includes(t)))));
  var t;
}, regex: (e) => {
  return $e(G(r, (t = e, V((n) => Me(n) && !!n.match(t)))));
  var t;
} });
$e(V(Me));
const be = (r) => Object.assign(he(r), { between: (e, t) => be(G(r, ((n, i) => V((s) => ye(s) && n <= s && i >= s))(e, t))), lt: (e) => be(G(r, ((t) => V((n) => ye(n) && n < t))(e))), gt: (e) => be(G(r, ((t) => V((n) => ye(n) && n > t))(e))), lte: (e) => be(G(r, ((t) => V((n) => ye(n) && n <= t))(e))), gte: (e) => be(G(r, ((t) => V((n) => ye(n) && n >= t))(e))), int: () => be(G(r, V((e) => ye(e) && Number.isInteger(e)))), finite: () => be(G(r, V((e) => ye(e) && Number.isFinite(e)))), positive: () => be(G(r, V((e) => ye(e) && e > 0))), negative: () => be(G(r, V((e) => ye(e) && e < 0))) });
be(V(ye));
const Le = (r) => Object.assign(he(r), { between: (e, t) => Le(G(r, ((n, i) => V((s) => Ne(s) && n <= s && i >= s))(e, t))), lt: (e) => Le(G(r, ((t) => V((n) => Ne(n) && n < t))(e))), gt: (e) => Le(G(r, ((t) => V((n) => Ne(n) && n > t))(e))), lte: (e) => Le(G(r, ((t) => V((n) => Ne(n) && n <= t))(e))), gte: (e) => Le(G(r, ((t) => V((n) => Ne(n) && n >= t))(e))), positive: () => Le(G(r, V((e) => Ne(e) && e > 0))), negative: () => Le(G(r, V((e) => Ne(e) && e < 0))) });
Le(V(Ne));
he(V(function(r) {
  return typeof r == "boolean";
}));
he(V(function(r) {
  return typeof r == "symbol";
}));
he(V(function(r) {
  return r == null;
}));
he(V(function(r) {
  return r != null;
}));
const jr = { matched: !1, value: void 0 };
function kl(r) {
  return new lr(r, jr);
}
class lr {
  constructor(e, t) {
    this.input = void 0, this.state = void 0, this.input = e, this.state = t;
  }
  with(...e) {
    if (this.state.matched) return this;
    const t = e[e.length - 1], n = [e[0]];
    let i;
    e.length === 3 && typeof e[1] == "function" ? i = e[1] : e.length > 2 && n.push(...e.slice(1, e.length - 1));
    let s = !1, a = {};
    const o = (c, d) => {
      s = !0, a[c] = d;
    }, l = !n.some((c) => we(c, this.input, o)) || i && !i(this.input) ? jr : { matched: !0, value: t(s ? or in a ? a[or] : a : this.input, this.input) };
    return new lr(this.input, l);
  }
  when(e, t) {
    if (this.state.matched) return this;
    const n = !!e(this.input);
    return new lr(this.input, n ? { matched: !0, value: t(this.input, this.input) } : jr);
  }
  otherwise(e) {
    return this.state.matched ? this.state.value : e(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    let e;
    try {
      e = JSON.stringify(this.input);
    } catch {
      e = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${e}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
var Cl = /* @__PURE__ */ se('<div role=group aria-roledescription=carrousel><div class=carousel-controls><div class=carousel-tabs role=tablist></div><div class=carousel-btns><button aria-label=Précédent class="carousel-control carousel-btn"><solid-icon icon=mingcute-left-line></solid-icon></button><button aria-label=Suivant class="carousel-control carousel-btn"><solid-icon icon=mingcute-right-line></solid-icon></button></div></div><div class=swiper aria-live=polite><div class=swiper-wrapper>', !0, !1), Pl = /* @__PURE__ */ se('<button class="carousel-control carousel-tab"role=tab>'), Il = /* @__PURE__ */ se("<div class=swiper-slide aria-roledescription=onglet role=tabpanel>");
We("cfc-structure-carousel", Y.object({
  tabs: Y.string().array(),
  arialabel: Y.string()
}), (r) => {
  const e = et(), t = Zr();
  ft();
  const {
    setSwiperContainer: n,
    isNextBtnDisabled: i,
    swiper: s,
    children: a,
    isPrevBtnDisabled: o,
    activeIndex: l
  } = ti(e, () => ({
    slidesPerView: 1
  })), c = () => a().filter((u) => u.matches("template")).map((u) => u.content.cloneNode(!0));
  function d(u) {
    const p = c().length - 1;
    kl(u).with({
      key: "ArrowLeft"
    }, () => {
      var f, m, g;
      ((f = s()) == null ? void 0 : f.activeIndex) === 0 ? (m = s()) == null || m.slideTo(p) : (g = s()) == null || g.slidePrev();
    }).with({
      key: "ArrowRight"
    }, () => {
      var f, m, g;
      ((f = s()) == null ? void 0 : f.activeIndex) === p ? (m = s()) == null || m.slideTo(0) : (g = s()) == null || g.slideNext();
    }).with({
      key: "Home"
    }, () => {
      var f;
      (f = s()) == null || f.slideTo(0);
    }).with({
      key: "End"
    }, () => {
      var f;
      (f = s()) == null || f.slideTo(p);
    });
  }
  return (() => {
    var u = Cl(), p = u.firstChild, f = p.firstChild, m = f.nextSibling, g = m.firstChild, T = g.firstChild, w = g.nextSibling, b = w.firstChild, y = p.nextSibling, _ = y.firstChild;
    return f.$$keydown = d, q(f, pe(bt, {
      get each() {
        return r.tabs;
      },
      children: (x, A) => (() => {
        var F = Pl();
        return F.$$click = () => {
          var $;
          ($ = s()) == null || $.slideTo(A());
        }, q(F, x), ne(($) => {
          var ee = l() === A(), P = `${t}-slide-${A()}`, I = l() === A(), v = `${x} - Onglet ${A() + 1}`, h = l() === A() ? 0 : -1;
          return ee !== $.e && te(F, "aria-selected", $.e = ee), P !== $.t && te(F, "aria-controls", $.t = P), I !== $.a && F.classList.toggle("carousel-tab-active", $.a = I), v !== $.o && te(F, "aria-label", $.o = v), h !== $.i && te(F, "tabindex", $.i = h), $;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0
        }), F;
      })()
    })), g.$$click = () => {
      var x;
      return (x = s()) == null ? void 0 : x.slidePrev();
    }, T._$owner = Q(), w.$$click = () => {
      var x;
      return (x = s()) == null ? void 0 : x.slideNext();
    }, b._$owner = Q(), je((x) => n(x), y), q(_, pe(bt, {
      get each() {
        return c();
      },
      children: (x, A) => (() => {
        var F = Il();
        return q(F, x), ne(($) => {
          var ee = `${t}-slide-${A()}`, P = `${A() + 1} sur ${c().length}`;
          return ee !== $.e && te(F, "id", $.e = ee), P !== $.t && te(F, "aria-label", $.t = P), $;
        }, {
          e: void 0,
          t: void 0
        }), F;
      })()
    })), ne((x) => {
      var A = r.arialabel, F = o(), $ = i();
      return A !== x.e && te(u, "aria-label", x.e = A), F !== x.t && (g.disabled = x.t = F), $ !== x.a && (w.disabled = x.a = $), x;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), u;
  })();
});
Fr(["keydown", "click"]);
function Ol(r, e) {
  ne(() => {
    const t = e();
    r.innerHTML = "", t && [t].flat().forEach((n) => {
      n && r.appendChild(n);
    });
  });
}
var Al = /* @__PURE__ */ se('<div role=dialog class=navigation-submenu aria-label="Sous-menu de navigation">');
We("cfc-main-navigation", Y.object({}), () => {
  ft();
  const r = et();
  queueMicrotask(() => {
    const e = r.querySelector("[data-togglebtn]"), t = r.querySelector("cfc-navigation-modal"), n = t == null ? void 0 : t.querySelector("[data-closebtn]");
    e == null || e.addEventListener("click", () => {
      t != null && t.state() ? t == null || t.close() : t == null || t.open();
    }), n == null || n.addEventListener("click", () => {
      t == null || t.close();
    }), r.addEventListener("stateChange", (i) => {
      const s = i;
      e == null || e.setAttribute("arialabel", s.detail ? "Fermer" : "Menu");
    });
  });
});
We("cfc-navigation-modal", Y.object({}), (r, {
  emit: e
}) => {
  ft();
  const t = et(), n = Wr(t), [i, s] = X(!1), [a, o] = X(), l = ri(() => a(), {
    onDeactivate: () => {
      s(!1);
    },
    escapeDeactivates: !0,
    allowOutsideClick: !0
  });
  Pe(() => {
    var d;
    i() ? (document.body.style.overflow = "hidden", queueMicrotask(() => {
      var u;
      (u = l()) == null || u.activate();
    })) : (document.body.style.overflow = "initial", (d = l()) == null || d.deactivate());
  }), Pe(di(i, (d) => {
    e("stateChange", d);
  }, {
    defer: !0
  }));
  const c = oe(() => {
    var d;
    return (d = n()) == null ? void 0 : d.filter((u) => u.matches("template")).map((u) => u.content.cloneNode(!0));
  });
  return Object.assign(t, {
    open() {
      s(!0);
    },
    close() {
      s(!1);
    },
    state() {
      return i();
    }
  }), (() => {
    var d = Al();
    return je(Ol, d, () => c()), je((u) => o(u), d), te(d, "aria-modal", !0), ne(() => d.classList.toggle("open", !!i())), d;
  })();
});
export {
  Ll as cfcFiltersButtonProps,
  $l as cfcFiltersContext
};
