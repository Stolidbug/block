var U = Object.defineProperty;
var X = (t, e, n) => e in t ? U(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var _ = (t, e, n) => X(t, typeof e != "symbol" ? e + "" : e, n);
import { s as T, u as $, a as p, C as q, e as A, f as j, r as z, b as N, h as I, g as J, E as W, c as Q, F as Y, o as ee } from "./R5675YMU-BY7cX9Th.js";
import { z as te, b as ne } from "./theme.store-v2--qJ2X.js";
const se = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], ie = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...se
]), re = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), oe = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), le = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function ae(t, e) {
  const n = le[t];
  return typeof n == "object" ? n[e] ? n.$ : void 0 : n;
}
const ce = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), ue = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), fe = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function de(t, e, n) {
  let i = n.length, s = e.length, r = i, l = 0, o = 0, a = e[s - 1].nextSibling, f = null;
  for (; l < s || o < r; ) {
    if (e[l] === n[o]) {
      l++, o++;
      continue;
    }
    for (; e[s - 1] === n[r - 1]; )
      s--, r--;
    if (s === l) {
      const u = r < i ? o ? n[o - 1].nextSibling : n[r - o] : a;
      for (; o < r; ) t.insertBefore(n[o++], u);
    } else if (r === o)
      for (; l < s; )
        (!f || !f.has(e[l])) && e[l].remove(), l++;
    else if (e[l] === n[r - 1] && n[o] === e[s - 1]) {
      const u = e[--s].nextSibling;
      t.insertBefore(n[o++], e[l++].nextSibling), t.insertBefore(n[--r], u), e[s] = n[r];
    } else {
      if (!f) {
        f = /* @__PURE__ */ new Map();
        let c = o;
        for (; c < r; ) f.set(n[c], c++);
      }
      const u = f.get(e[l]);
      if (u != null)
        if (o < u && u < r) {
          let c = l, d = 1, h;
          for (; ++c < s && c < r && !((h = f.get(e[c])) == null || h !== u + d); )
            d++;
          if (d > u - o) {
            const g = e[l];
            for (; o < u; ) t.insertBefore(n[o++], g);
          } else t.replaceChild(n[o++], e[l++]);
        } else l++;
      else e[l++].remove();
    }
  }
}
const k = "_$DX_DELEGATE";
function he(t, e, n, i = {}) {
  let s;
  return T((r) => {
    s = r, e === document ? t() : S(e, t(), e.firstChild ? null : void 0, n);
  }, i.owner), () => {
    s(), e.textContent = "";
  };
}
function ge(t, e, n) {
  let i;
  const s = () => {
    const l = document.createElement("template");
    return l.innerHTML = t, n ? l.content.firstChild.firstChild : l.content.firstChild;
  }, r = e ? () => $(() => document.importNode(i || (i = s()), !0)) : () => (i || (i = s())).cloneNode(!0);
  return r.cloneNode = r, r;
}
function ye(t, e = window.document) {
  const n = e[k] || (e[k] = /* @__PURE__ */ new Set());
  for (let i = 0, s = t.length; i < s; i++) {
    const r = t[i];
    n.has(r) || (n.add(r), e.addEventListener(r, Pe));
  }
}
function w(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function me(t, e, n, i) {
  i == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, i);
}
function pe(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function be(t, e, n, i) {
  if (i)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const s = n[0];
    t.addEventListener(e, n[0] = (r) => s.call(t, n[1], r));
  } else t.addEventListener(e, n);
}
function Ee(t, e, n = {}) {
  const i = Object.keys(e || {}), s = Object.keys(n);
  let r, l;
  for (r = 0, l = s.length; r < l; r++) {
    const o = s[r];
    !o || o === "undefined" || e[o] || (v(t, o, !1), delete n[o]);
  }
  for (r = 0, l = i.length; r < l; r++) {
    const o = i[r], a = !!e[o];
    !o || o === "undefined" || n[o] === a || !a || (v(t, o, !0), n[o] = a);
  }
  return n;
}
function Ce(t, e, n) {
  if (!e) return n ? w(t, "style") : e;
  const i = t.style;
  if (typeof e == "string") return i.cssText = e;
  typeof n == "string" && (i.cssText = n = void 0), n || (n = {}), e || (e = {});
  let s, r;
  for (r in n)
    e[r] == null && i.removeProperty(r), delete n[r];
  for (r in e)
    s = e[r], s !== n[r] && (i.setProperty(r, s), n[r] = s);
  return n;
}
function we(t, e = {}, n, i) {
  const s = {};
  return i || p(
    () => s.children = E(t, e.children, s.children)
  ), p(
    () => typeof e.ref == "function" ? Se(e.ref, t) : e.ref = t
  ), p(() => _e(t, e, n, !0, s, !0)), s;
}
function Se(t, e, n) {
  return $(() => t(e, n));
}
function S(t, e, n, i) {
  if (n !== void 0 && !i && (i = []), typeof e != "function") return E(t, e, i, n);
  p((s) => E(t, e(), s, n), i);
}
function _e(t, e, n, i, s = {}, r = !1) {
  e || (e = {});
  for (const l in s)
    if (!(l in e)) {
      if (l === "children") continue;
      s[l] = B(t, l, null, s[l], n, r);
    }
  for (const l in e) {
    if (l === "children")
      continue;
    const o = e[l];
    s[l] = B(t, l, o, s[l], n, r);
  }
}
function Ae(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function v(t, e, n) {
  const i = e.trim().split(/\s+/);
  for (let s = 0, r = i.length; s < r; s++)
    t.classList.toggle(i[s], n);
}
function B(t, e, n, i, s, r) {
  let l, o, a, f, u;
  if (e === "style") return Ce(t, n, i);
  if (e === "classList") return Ee(t, n, i);
  if (n === i) return i;
  if (e === "ref")
    r || n(t);
  else if (e.slice(0, 3) === "on:") {
    const c = e.slice(3);
    i && t.removeEventListener(c, i), n && t.addEventListener(c, n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const c = e.slice(10);
    i && t.removeEventListener(c, i, !0), n && t.addEventListener(c, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const c = e.slice(2).toLowerCase(), d = ce.has(c);
    if (!d && i) {
      const h = Array.isArray(i) ? i[0] : i;
      t.removeEventListener(c, h);
    }
    (d || n) && (be(t, c, n, d), d && ye([c]));
  } else if (e.slice(0, 5) === "attr:")
    w(t, e.slice(5), n);
  else if ((u = e.slice(0, 5) === "prop:") || (a = re.has(e)) || !s && ((f = ae(e, t.tagName)) || (o = ie.has(e))) || (l = t.nodeName.includes("-")))
    u && (e = e.slice(5), o = !0), e === "class" || e === "className" ? pe(t, n) : l && !o && !a ? t[Ae(e)] = n : t[f || e] = n;
  else {
    const c = s && e.indexOf(":") > -1 && fe[e.split(":")[0]];
    c ? me(t, c, e, n) : w(t, oe[e] || e, n);
  }
  return n;
}
function Pe(t) {
  const e = `$$${t.type}`;
  let n = t.composedPath && t.composedPath()[0] || t.target;
  for (t.target !== n && Object.defineProperty(t, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return n || document;
    }
  }); n; ) {
    const i = n[e];
    if (i && !n.disabled) {
      const s = n[`${e}Data`];
      if (s !== void 0 ? i.call(n, s, t) : i.call(n, t), t.cancelBubble) return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function E(t, e, n, i, s) {
  for (; typeof n == "function"; ) n = n();
  if (e === n) return n;
  const r = typeof e, l = i !== void 0;
  if (t = l && n[0] && n[0].parentNode || t, r === "string" || r === "number")
    if (r === "number" && (e = e.toString()), l) {
      let o = n[0];
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), n = m(t, n, i, o);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  else if (e == null || r === "boolean")
    n = m(t, n, i);
  else {
    if (r === "function")
      return p(() => {
        let o = e();
        for (; typeof o == "function"; ) o = o();
        n = E(t, o, n, i);
      }), () => n;
    if (Array.isArray(e)) {
      const o = [], a = n && Array.isArray(n);
      if (P(o, e, n, s))
        return p(() => n = E(t, o, n, i, !0)), () => n;
      if (o.length === 0) {
        if (n = m(t, n, i), l) return n;
      } else a ? n.length === 0 ? V(t, o, i) : de(t, n, o) : (n && m(t), V(t, o));
      n = o;
    } else if (e.nodeType) {
      if (Array.isArray(n)) {
        if (l) return n = m(t, n, i, e);
        m(t, n, null, e);
      } else n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function P(t, e, n, i) {
  let s = !1;
  for (let r = 0, l = e.length; r < l; r++) {
    let o = e[r], a = n && n[t.length], f;
    if (!(o == null || o === !0 || o === !1)) if ((f = typeof o) == "object" && o.nodeType)
      t.push(o);
    else if (Array.isArray(o))
      s = P(t, o, a) || s;
    else if (f === "function")
      if (i) {
        for (; typeof o == "function"; ) o = o();
        s = P(
          t,
          Array.isArray(o) ? o : [o],
          Array.isArray(a) ? a : [a]
        ) || s;
      } else
        t.push(o), s = !0;
    else {
      const u = String(o);
      a && a.nodeType === 3 && a.data === u ? t.push(a) : t.push(document.createTextNode(u));
    }
  }
  return s;
}
function V(t, e, n = null) {
  for (let i = 0, s = e.length; i < s; i++) t.insertBefore(e[i], n);
}
function m(t, e, n, i) {
  if (n === void 0) return t.textContent = "";
  const s = i || document.createTextNode("");
  if (e.length) {
    let r = !1;
    for (let l = e.length - 1; l >= 0; l--) {
      const o = e[l];
      if (s !== o) {
        const a = o.parentNode === t;
        !r && !l ? a ? t.replaceChild(s, o) : t.insertBefore(s, n) : a && o.remove();
      } else r = !0;
    }
  } else t.insertBefore(s, n);
  return [s];
}
const Oe = "http://www.w3.org/2000/svg";
function G(t, e = !1) {
  return e ? document.createElementNS(Oe, t) : document.createElement(t);
}
function ot(t) {
  const { useShadow: e } = t, n = document.createTextNode(""), i = () => t.mount || document.body, s = J();
  let r, l = !!W.context;
  return j(
    () => {
      r || (r = z(s, () => A(() => t.children)));
      const o = i();
      if (o instanceof HTMLHeadElement) {
        const [a, f] = N(!1), u = () => f(!0);
        T((c) => S(o, () => a() ? c() : r(), null)), I(u);
      } else {
        const a = G(t.isSVG ? "g" : "div", t.isSVG), f = e && a.attachShadow ? a.attachShadow({
          mode: "open"
        }) : a;
        Object.defineProperty(a, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), S(f, r), o.appendChild(a), t.ref && t.ref(a), I(() => o.removeChild(a));
      }
    },
    void 0,
    {
      render: !l
    }
  ), n;
}
function lt(t) {
  const [e, n] = q(t, ["component"]), i = A(() => e.component);
  return A(() => {
    const s = i();
    switch (typeof s) {
      case "function":
        return $(() => s(n));
      case "string":
        const r = ue.has(s), l = G(s, r);
        return we(l, n, r), l;
    }
  });
}
function xe(t) {
  return Object.keys(t).reduce((n, i) => {
    const s = t[i];
    return n[i] = Object.assign({}, s), K(s.value) && !Le(s.value) && !Array.isArray(s.value) && (n[i].value = Object.assign({}, s.value)), Array.isArray(s.value) && (n[i].value = s.value.slice(0)), n;
  }, {});
}
function Te(t) {
  return t ? Object.keys(t).reduce((n, i) => {
    const s = t[i];
    return n[i] = K(s) && "value" in s ? s : {
      value: s
    }, n[i].attribute || (n[i].attribute = Ne(i)), n[i].parse = "parse" in n[i] ? n[i].parse : typeof n[i].value != "string", n;
  }, {}) : {};
}
function $e(t) {
  return Object.keys(t).reduce((n, i) => (n[i] = t[i].value, n), {});
}
function je(t, e) {
  const n = xe(e);
  return Object.keys(e).forEach((s) => {
    const r = n[s], l = t.getAttribute(r.attribute), o = t[s];
    l && (r.value = r.parse ? F(l) : l), o != null && (r.value = Array.isArray(o) ? o.slice(0) : o), r.reflect && D(t, r.attribute, r.value), Object.defineProperty(t, s, {
      get() {
        return r.value;
      },
      set(a) {
        const f = r.value;
        r.value = a, r.reflect && D(this, r.attribute, r.value);
        for (let u = 0, c = this.__propertyChangedCallbacks.length; u < c; u++)
          this.__propertyChangedCallbacks[u](s, a, f);
      },
      enumerable: !0,
      configurable: !0
    });
  }), n;
}
function F(t) {
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
}
function D(t, e, n) {
  if (n == null || n === !1) return t.removeAttribute(e);
  let i = JSON.stringify(n);
  t.__updating[e] = !0, i === "true" && (i = ""), t.setAttribute(e, i), Promise.resolve().then(() => delete t.__updating[e]);
}
function Ne(t) {
  return t.replace(/\.?([A-Z]+)/g, (e, n) => "-" + n.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function K(t) {
  return t != null && (typeof t == "object" || typeof t == "function");
}
function Le(t) {
  return Object.prototype.toString.call(t) === "[object Function]";
}
function Me(t) {
  return typeof t == "function" && t.toString().indexOf("class") === 0;
}
let b;
function Re() {
  return b;
}
function at() {
  Object.defineProperty(b, "renderRoot", {
    value: b
  });
}
function Ie(t, e) {
  const n = Object.keys(e);
  return class extends t {
    static get observedAttributes() {
      return n.map((s) => e[s].attribute);
    }
    constructor() {
      super(), this.__initialized = !1, this.__released = !1, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = je(this, e);
      const s = $e(this.props), r = this.Component, l = b;
      try {
        b = this, this.__initialized = !0, Me(r) ? new r(s, {
          element: this
        }) : r(s, {
          element: this
        });
      } finally {
        b = l;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let s = null;
      for (; s = this.__releaseCallbacks.pop(); ) s(this);
      delete this.__initialized, this.__released = !0;
    }
    attributeChangedCallback(s, r, l) {
      if (this.__initialized && !this.__updating[s] && (s = this.lookupProp(s), s in e)) {
        if (l == null && !this[s]) return;
        this[s] = e[s].parse ? F(l) : l;
      }
    }
    lookupProp(s) {
      if (e)
        return n.find((r) => s === r || s === e[r].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({
        mode: "open"
      });
    }
    addReleaseCallback(s) {
      this.__releaseCallbacks.push(s);
    }
    addPropertyChangedCallback(s) {
      this.__propertyChangedCallbacks.push(s);
    }
  };
}
function ke(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...i) => e(n(...i)));
}
function ve(t, e = {}, n = {}) {
  const {
    BaseElement: i = HTMLElement,
    extension: s
  } = n;
  return (r) => {
    if (!t) throw new Error("tag is required to register a Component");
    let l = customElements.get(t);
    return l ? (l.prototype.Component = r, l) : (l = Ie(i, Te(e)), l.prototype.Component = r, l.prototype.registeredTag = t, customElements.define(t, l, s), l);
  };
}
function Be(t) {
  const e = Object.keys(t), n = {};
  for (let i = 0; i < e.length; i++) {
    const [s, r] = N(t[e[i]]);
    Object.defineProperty(n, e[i], {
      get: s,
      set(l) {
        r(() => l);
      }
    });
  }
  return n;
}
function Ve(t) {
  if (t.assignedSlot && t.assignedSlot._$owner) return t.assignedSlot._$owner;
  let e = t.parentNode;
  for (; e && !e._$owner && !(e.assignedSlot && e.assignedSlot._$owner); )
    e = e.parentNode;
  return e && e.assignedSlot ? e.assignedSlot._$owner : t._$owner;
}
function De(t) {
  return (e, n) => {
    const { element: i } = n;
    return T((s) => {
      const r = Be(e);
      i.addPropertyChangedCallback((o, a) => r[o] = a), i.addReleaseCallback(() => {
        i.renderRoot.textContent = "", s();
      });
      const l = t(r, n);
      return S(i.renderRoot, l);
    }, Ve(i));
  };
}
function L(t) {
  return t instanceof Error && t.name === "ZodError" && "issues" in t && Array.isArray(t.issues);
}
var O = class extends Error {
  constructor(e, n) {
    super(e, n);
    _(this, "name");
    _(this, "details");
    this.name = "ZodValidationError", this.details = Ge(n);
  }
  toString() {
    return this.message;
  }
};
function Ge(t) {
  if (t) {
    const e = t.cause;
    if (L(e))
      return e.issues;
  }
  return [];
}
var Fe = "; ", Ke = 99, Z = "Validation error", Ze = ": ", He = ", or ";
function Ue(t, e, n) {
  return e !== null ? t.length > 0 ? [e, t].join(n) : e : t.length > 0 ? t : Z;
}
var Xe = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
function qe(t) {
  return t.length === 1 ? t[0].toString() : t.reduce((e, n) => {
    if (typeof n == "number")
      return e + "[" + n.toString() + "]";
    if (n.includes('"'))
      return e + '["' + ze(n) + '"]';
    if (!Xe.test(n))
      return e + '["' + n + '"]';
    const i = e.length === 0 ? "" : ".";
    return e + i + n;
  }, "");
}
function ze(t) {
  return t.replace(/"/g, '\\"');
}
function Je(t) {
  return t.length !== 0;
}
function C(t) {
  const { issue: e, issueSeparator: n, unionSeparator: i, includePath: s } = t;
  if (e.code === "invalid_union")
    return e.unionErrors.reduce((r, l) => {
      const o = l.issues.map(
        (a) => C({
          issue: a,
          issueSeparator: n,
          unionSeparator: i,
          includePath: s
        })
      ).join(n);
      return r.includes(o) || r.push(o), r;
    }, []).join(i);
  if (e.code === "invalid_arguments")
    return [
      e.message,
      ...e.argumentsError.issues.map(
        (r) => C({
          issue: r,
          issueSeparator: n,
          unionSeparator: i,
          includePath: s
        })
      )
    ].join(n);
  if (e.code === "invalid_return_type")
    return [
      e.message,
      ...e.returnTypeError.issues.map(
        (r) => C({
          issue: r,
          issueSeparator: n,
          unionSeparator: i,
          includePath: s
        })
      )
    ].join(n);
  if (s && Je(e.path)) {
    if (e.path.length === 1) {
      const r = e.path[0];
      if (typeof r == "number")
        return `${e.message} at index ${r}`;
    }
    return `${e.message} at "${qe(e.path)}"`;
  }
  return e.message;
}
function We(t, e = {}) {
  if (!L(t))
    throw new TypeError(
      `Invalid zodError param; expected instance of ZodError. Did you mean to use the "${Ye.name}" method instead?`
    );
  return H(t, e);
}
function H(t, e = {}) {
  const {
    maxIssuesInMessage: n = Ke,
    issueSeparator: i = Fe,
    unionSeparator: s = He,
    prefixSeparator: r = Ze,
    prefix: l = Z,
    includePath: o = !0
  } = e, a = t.errors, f = a.length === 0 ? t.message : a.slice(0, n).map(
    (c) => C({
      issue: c,
      issueSeparator: i,
      unionSeparator: s,
      includePath: o
    })
  ).join(i), u = Ue(f, l, r);
  return new O(u, { cause: t });
}
var Qe = (t = {}) => (e) => L(e) ? H(e, t) : e instanceof Error ? new O(e.message, { cause: e }) : new O("Unknown error");
function Ye(t, e = {}) {
  return Qe(e)(t);
}
var et = /* @__PURE__ */ ge("<style>");
const M = class M extends HTMLElement {
  constructor() {
    super();
  }
};
M.formAssociated = !0;
let x = M;
const tt = (t, e, n, i) => {
  const s = e instanceof te.ZodObject, r = s ? Object.fromEntries(Object.keys(e.shape).map((o) => [o, void 0])) : e, l = (o, a) => {
    const f = Re(), u = {
      ...a,
      emit: (d, h, g) => {
        const y = new CustomEvent(d, {
          composed: !0,
          bubbles: !0,
          ...g,
          detail: h
        });
        return f.dispatchEvent(y), y;
      }
    };
    if (i != null && i.onDefined && i.onDefined(f), ee(() => {
      u.emit("mount", {
        element: f
      }, {
        composed: !1
      });
    }), j(() => {
      if (s) {
        const d = e.safeParse(o);
        if (!d.success)
          throw We(d.error, {
            issueSeparator: `
---
`,
            prefix: `[${t}]`,
            includePath: !0
          }).toString();
      }
    }), !s) return n(o, u);
    const c = new Proxy(o, {
      get: (d, h) => {
        var g, y, R;
        return typeof h == "string" && d[h] === void 0 ? ((R = (y = (g = e.shape[h]) == null ? void 0 : g._def) == null ? void 0 : y.defaultValue) == null ? void 0 : R.call(y)) ?? Reflect.get(d, h) : Reflect.get(d, h);
      },
      set: (d, h, g) => Reflect.set(d, h, g)
    });
    return n(c, u);
  };
  return ke(ve(t, r, {
    BaseElement: (i == null ? void 0 : i.formAssociated) === !0 ? x : HTMLElement
  }), De)(l);
};
function nt() {
  const t = document.createElement("div");
  document.body.insertBefore(t, document.body.firstChild);
  const [e, n] = N({});
  return he(() => Q(Y, {
    get each() {
      return Object.entries(e());
    },
    children: ([i, s]) => (() => {
      var r = et();
      return w(r, "id", i), r.innerHTML = s, r;
    })()
  }), t), {
    element: t,
    styles: e,
    setOrUpdateStyles(i, s) {
      n((r) => ({
        ...r,
        [i]: s
      }));
    }
  };
}
const ut = nt(), ft = (...t) => {
  const [e, n, i, s] = t;
  return tt(e, n, i, {
    ...s,
    onDefined: (r) => {
      j(() => {
        ne() === "dark" ? r.classList.add("dark") : r.classList.remove("dark");
      });
    }
  });
};
export {
  lt as D,
  ot as P,
  Ce as a,
  ut as b,
  ft as c,
  ye as d,
  we as e,
  Re as g,
  S as i,
  at as n,
  w as s,
  ge as t,
  Se as u
};
