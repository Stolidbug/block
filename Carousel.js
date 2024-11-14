import { c as Ie, d as ze, i as N, u as Le, t as ne, s as ce, a as ke, g as Ge } from "./utils-DyI0jAV8.js";
import { z as j } from "./theme.store-v2--qJ2X.js";
import { b as X, f as Oe, o as Be, g as Y, c as De, a as ue, F as Ve } from "./R5675YMU-BY7cX9Th.js";
import { c as Fe } from "./createChildrenObserver-DrEtg4wT.js";
import { c as Ne } from "./index-BZKcI3Xu.js";
function fe(i) {
  return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
}
function ae(i, e) {
  i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
    typeof i[t] > "u" ? i[t] = e[t] : fe(e[t]) && fe(i[t]) && Object.keys(e[t]).length > 0 && ae(i[t], e[t]);
  });
}
const Se = {
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
function F() {
  const i = typeof document < "u" ? document : {};
  return ae(i, Se), i;
}
const Ye = {
  document: Se,
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
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  }
};
function L() {
  const i = typeof window < "u" ? window : {};
  return ae(i, Ye), i;
}
function Re(i) {
  return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
}
function _e(i) {
  const e = i;
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
function ie(i, e) {
  return e === void 0 && (e = 0), setTimeout(i, e);
}
function $() {
  return Date.now();
}
function He(i) {
  const e = L();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
}
function $e(i, e) {
  e === void 0 && (e = "x");
  const t = L();
  let s, n, r;
  const l = He(i);
  return t.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((o) => o.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
}
function R(i) {
  return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
}
function We(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
}
function z() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (s != null && !We(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, l = n.length; r < l; r += 1) {
        const o = n[r], a = Object.getOwnPropertyDescriptor(s, o);
        a !== void 0 && a.enumerable && (R(i[o]) && R(s[o]) ? s[o].__swiper__ ? i[o] = s[o] : z(i[o], s[o]) : !R(i[o]) && R(s[o]) ? (i[o] = {}, s[o].__swiper__ ? i[o] = s[o] : z(i[o], s[o])) : i[o] = s[o]);
      }
    }
  }
  return i;
}
function _(i, e, t) {
  i.style.setProperty(e, t);
}
function be(i) {
  let {
    swiper: e,
    targetPosition: t,
    side: s
  } = i;
  const n = L(), r = -e.translate;
  let l = null, o;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > r ? "next" : "prev", d = (p, f) => c === "next" && p >= f || c === "prev" && p <= f, u = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = o);
    const p = Math.max(Math.min((o - l) / a, 1), 0), f = 0.5 - Math.cos(p * Math.PI) / 2;
    let h = r + f * (t - r);
    if (d(h, t) && (h = t), e.wrapperEl.scrollTo({
      [s]: h
    }), d(h, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: h
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(u);
  };
  u();
}
function O(i, e) {
  return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
}
function W(i) {
  try {
    console.warn(i);
    return;
  } catch {
  }
}
function se(i, e) {
  e === void 0 && (e = []);
  const t = document.createElement(i);
  return t.classList.add(...Array.isArray(e) ? e : Re(e)), t;
}
function je(i, e) {
  const t = [];
  for (; i.previousElementSibling; ) {
    const s = i.previousElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s;
  }
  return t;
}
function Xe(i, e) {
  const t = [];
  for (; i.nextElementSibling; ) {
    const s = i.nextElementSibling;
    e ? s.matches(e) && t.push(s) : t.push(s), i = s;
  }
  return t;
}
function D(i, e) {
  return L().getComputedStyle(i, null).getPropertyValue(e);
}
function pe(i) {
  let e = i, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function qe(i, e) {
  const t = [];
  let s = i.parentElement;
  for (; s; )
    t.push(s), s = s.parentElement;
  return t;
}
function he(i, e, t) {
  const s = L();
  return i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
let q;
function Qe() {
  const i = L(), e = F();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
  };
}
function xe() {
  return q || (q = Qe()), q;
}
let Q;
function Ze(i) {
  let {
    userAgent: e
  } = i === void 0 ? {} : i;
  const t = xe(), s = L(), n = s.navigator.platform, r = e || s.navigator.userAgent, l = {
    ios: !1,
    android: !1
  }, o = s.screen.width, a = s.screen.height, c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/), p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = n === "Win32";
  let h = n === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && h && t.touch && g.indexOf(`${o}x${a}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), h = !1), c && !f && (l.os = "android", l.android = !0), (d || p || u) && (l.os = "ios", l.ios = !0), l;
}
function Te(i) {
  return i === void 0 && (i = {}), Q || (Q = Ze(i)), Q;
}
let Z;
function Ue() {
  const i = L(), e = Te();
  let t = !1;
  function s() {
    const o = i.navigator.userAgent.toLowerCase();
    return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0;
  }
  if (s()) {
    const o = String(i.navigator.userAgent);
    if (o.includes("Version/")) {
      const [a, c] = o.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = a < 16 || a === 16 && c < 2;
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), r = s(), l = r || n && e.ios;
  return {
    isSafari: t || r,
    needPerspectiveFix: t,
    need3dFix: l,
    isWebView: n
  };
}
function Ke() {
  return Z || (Z = Ue()), Z;
}
function Je(i) {
  let {
    swiper: e,
    on: t,
    emit: s
  } = i;
  const n = L();
  let r = null, l = null;
  const o = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, a = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((u) => {
      l = n.requestAnimationFrame(() => {
        const {
          width: p,
          height: f
        } = e;
        let h = p, g = f;
        u.forEach((x) => {
          let {
            contentBoxSize: w,
            contentRect: v,
            target: m
          } = x;
          m && m !== e.el || (h = v ? v.width : (w[0] || w).inlineSize, g = v ? v.height : (w[0] || w).blockSize);
        }), (h !== p || g !== f) && o();
      });
    }), r.observe(e.el));
  }, c = () => {
    l && n.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", o), n.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    c(), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", d);
  });
}
function et(i) {
  let {
    swiper: e,
    extendParams: t,
    on: s,
    emit: n
  } = i;
  const r = [], l = L(), o = function(d, u) {
    u === void 0 && (u = {});
    const p = l.MutationObserver || l.WebkitMutationObserver, f = new p((h) => {
      if (e.__preventObserver__) return;
      if (h.length === 1) {
        n("observerUpdate", h[0]);
        return;
      }
      const g = function() {
        n("observerUpdate", h[0]);
      };
      l.requestAnimationFrame ? l.requestAnimationFrame(g) : l.setTimeout(g, 0);
    });
    f.observe(d, {
      attributes: typeof u.attributes > "u" ? !0 : u.attributes,
      childList: typeof u.childList > "u" ? !0 : u.childList,
      characterData: typeof u.characterData > "u" ? !0 : u.characterData
    }), r.push(f);
  }, a = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = qe(e.hostEl);
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
    r.forEach((d) => {
      d.disconnect();
    }), r.splice(0, r.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", c);
}
var tt = {
  on(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = t ? "unshift" : "push";
    return i.split(" ").forEach((r) => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
    }), s;
  },
  once(i, e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function n() {
      s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
        l[o] = arguments[o];
      e.apply(s, l);
    }
    return n.__emitterProxy = e, s.on(i, n, t);
  },
  onAny(i, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
    const s = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach((s) => {
      typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1);
      });
    }), t;
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
    let e, t, s;
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), s = i) : (e = r[0].events, t = r[0].data, s = r[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
      i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((c) => {
        c.apply(s, [a, ...t]);
      }), i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach((c) => {
        c.apply(s, t);
      });
    }), i;
  }
};
function it() {
  const i = this;
  let e, t;
  const s = i.el;
  typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(D(s, "padding-left") || 0, 10) - parseInt(D(s, "padding-right") || 0, 10), t = t - parseInt(D(s, "padding-top") || 0, 10) - parseInt(D(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
    width: e,
    height: t,
    size: i.isHorizontal() ? e : t
  }));
}
function st() {
  const i = this;
  function e(b, y) {
    return parseFloat(b.getPropertyValue(i.getDirectionLabel(y)) || 0);
  }
  const t = i.params, {
    wrapperEl: s,
    slidesEl: n,
    size: r,
    rtlTranslate: l,
    wrongRTL: o
  } = i, a = i.virtual && t.virtual.enabled, c = a ? i.virtual.slides.length : i.slides.length, d = O(n, `.${i.params.slideClass}, swiper-slide`), u = a ? i.virtual.slides.length : d.length;
  let p = [];
  const f = [], h = [];
  let g = t.slidesOffsetBefore;
  typeof g == "function" && (g = t.slidesOffsetBefore.call(i));
  let x = t.slidesOffsetAfter;
  typeof x == "function" && (x = t.slidesOffsetAfter.call(i));
  const w = i.snapGrid.length, v = i.slidesGrid.length;
  let m = t.spaceBetween, A = -g, S = 0, M = 0;
  if (typeof r > "u")
    return;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * r : typeof m == "string" && (m = parseFloat(m)), i.virtualSize = -m, d.forEach((b) => {
    l ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (_(s, "--swiper-centered-offset-before", ""), _(s, "--swiper-centered-offset-after", ""));
  const G = t.grid && t.grid.rows > 1 && i.grid;
  G ? i.grid.initSlides(d) : i.grid && i.grid.unsetSlides();
  let C;
  const V = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((b) => typeof t.breakpoints[b].slidesPerView < "u").length > 0;
  for (let b = 0; b < u; b += 1) {
    C = 0;
    let y;
    if (d[b] && (y = d[b]), G && i.grid.updateSlide(b, y, d), !(d[b] && D(y, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        V && (d[b].style[i.getDirectionLabel("width")] = "");
        const E = getComputedStyle(y), T = y.style.transform, P = y.style.webkitTransform;
        if (T && (y.style.transform = "none"), P && (y.style.webkitTransform = "none"), t.roundLengths)
          C = i.isHorizontal() ? he(y, "width") : he(y, "height");
        else {
          const I = e(E, "width"), B = e(E, "padding-left"), Me = e(E, "padding-right"), oe = e(E, "margin-left"), le = e(E, "margin-right"), de = E.getPropertyValue("box-sizing");
          if (de && de === "border-box")
            C = I + oe + le;
          else {
            const {
              clientWidth: Pe,
              offsetWidth: Ce
            } = y;
            C = I + B + Me + oe + le + (Ce - Pe);
          }
        }
        T && (y.style.transform = T), P && (y.style.webkitTransform = P), t.roundLengths && (C = Math.floor(C));
      } else
        C = (r - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[b] && (d[b].style[i.getDirectionLabel("width")] = `${C}px`);
      d[b] && (d[b].swiperSlideSize = C), h.push(C), t.centeredSlides ? (A = A + C / 2 + S / 2 + m, S === 0 && b !== 0 && (A = A - r / 2 - m), b === 0 && (A = A - r / 2 - m), Math.abs(A) < 1 / 1e3 && (A = 0), t.roundLengths && (A = Math.floor(A)), M % t.slidesPerGroup === 0 && p.push(A), f.push(A)) : (t.roundLengths && (A = Math.floor(A)), (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup === 0 && p.push(A), f.push(A), A = A + C + m), i.virtualSize += C + m, S = C, M += 1;
    }
  }
  if (i.virtualSize = Math.max(i.virtualSize, r) + x, l && o && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + m}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + m}px`), G && i.grid.updateWrapperSize(C, p), !t.centeredSlides) {
    const b = [];
    for (let y = 0; y < p.length; y += 1) {
      let E = p[y];
      t.roundLengths && (E = Math.floor(E)), p[y] <= i.virtualSize - r && b.push(E);
    }
    p = b, Math.floor(i.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(i.virtualSize - r);
  }
  if (a && t.loop) {
    const b = h[0] + m;
    if (t.slidesPerGroup > 1) {
      const y = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), E = b * t.slidesPerGroup;
      for (let T = 0; T < y; T += 1)
        p.push(p[p.length - 1] + E);
    }
    for (let y = 0; y < i.virtual.slidesBefore + i.virtual.slidesAfter; y += 1)
      t.slidesPerGroup === 1 && p.push(p[p.length - 1] + b), f.push(f[f.length - 1] + b), i.virtualSize += b;
  }
  if (p.length === 0 && (p = [0]), m !== 0) {
    const b = i.isHorizontal() && l ? "marginLeft" : i.getDirectionLabel("marginRight");
    d.filter((y, E) => !t.cssMode || t.loop ? !0 : E !== d.length - 1).forEach((y) => {
      y.style[b] = `${m}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let b = 0;
    h.forEach((E) => {
      b += E + (m || 0);
    }), b -= m;
    const y = b - r;
    p = p.map((E) => E <= 0 ? -g : E > y ? y + x : E);
  }
  if (t.centerInsufficientSlides) {
    let b = 0;
    h.forEach((E) => {
      b += E + (m || 0);
    }), b -= m;
    const y = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (b + y < r) {
      const E = (r - b - y) / 2;
      p.forEach((T, P) => {
        p[P] = T - E;
      }), f.forEach((T, P) => {
        f[P] = T + E;
      });
    }
  }
  if (Object.assign(i, {
    slides: d,
    snapGrid: p,
    slidesGrid: f,
    slidesSizesGrid: h
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    _(s, "--swiper-centered-offset-before", `${-p[0]}px`), _(s, "--swiper-centered-offset-after", `${i.size / 2 - h[h.length - 1] / 2}px`);
    const b = -i.snapGrid[0], y = -i.slidesGrid[0];
    i.snapGrid = i.snapGrid.map((E) => E + b), i.slidesGrid = i.slidesGrid.map((E) => E + y);
  }
  if (u !== c && i.emit("slidesLengthChange"), p.length !== w && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), f.length !== v && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const b = `${t.containerModifierClass}backface-hidden`, y = i.el.classList.contains(b);
    u <= t.maxBackfaceHiddenSlides ? y || i.el.classList.add(b) : y && i.el.classList.remove(b);
  }
}
function rt(i) {
  const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
  let n = 0, r;
  typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
  const l = (o) => s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((o) => {
        t.push(o);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const o = e.activeIndex + r;
        if (o > e.slides.length && !s) break;
        t.push(l(o));
      }
  else
    t.push(l(e.activeIndex));
  for (r = 0; r < t.length; r += 1)
    if (typeof t[r] < "u") {
      const o = t[r].offsetHeight;
      n = o > n ? o : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function nt() {
  const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
}
const me = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function at(i) {
  i === void 0 && (i = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: s,
    rtlTranslate: n,
    snapGrid: r
  } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -i;
  n && (l = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let o = t.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a];
    let d = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= s[0].swiperSlideOffset);
    const u = (l + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o), p = (l - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o), f = -(l - d), h = f + e.slidesSizesGrid[a], g = f >= 0 && f <= e.size - e.slidesSizesGrid[a], x = f >= 0 && f < e.size - 1 || h > 1 && h <= e.size || f <= 0 && h >= e.size;
    x && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(a)), me(c, x, t.slideVisibleClass), me(c, g, t.slideFullyVisibleClass), c.progress = n ? -u : u, c.originalProgress = n ? -p : p;
  }
}
function ot(i) {
  const e = this;
  if (typeof i > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    i = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: l,
    progressLoop: o
  } = e;
  const a = r, c = l;
  if (s === 0)
    n = 0, r = !0, l = !0;
  else {
    n = (i - e.minTranslate()) / s;
    const d = Math.abs(i - e.minTranslate()) < 1, u = Math.abs(i - e.maxTranslate()) < 1;
    r = d || n <= 0, l = u || n >= 1, d && (n = 0), u && (n = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), p = e.slidesGrid[d], f = e.slidesGrid[u], h = e.slidesGrid[e.slidesGrid.length - 1], g = Math.abs(i);
    g >= p ? o = (g - p) / h : o = (g + h - f) / h, o > 1 && (o -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: o,
    isBeginning: r,
    isEnd: l
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), r && !a && e.emit("reachBeginning toEdge"), l && !c && e.emit("reachEnd toEdge"), (a && !r || c && !l) && e.emit("fromEdge"), e.emit("progress", n);
}
const U = (i, e, t) => {
  e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
};
function lt() {
  const i = this, {
    slides: e,
    params: t,
    slidesEl: s,
    activeIndex: n
  } = i, r = i.virtual && t.virtual.enabled, l = i.grid && t.grid && t.grid.rows > 1, o = (u) => O(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
  let a, c, d;
  if (r)
    if (t.loop) {
      let u = n - i.virtual.slidesBefore;
      u < 0 && (u = i.virtual.slides.length + u), u >= i.virtual.slides.length && (u -= i.virtual.slides.length), a = o(`[data-swiper-slide-index="${u}"]`);
    } else
      a = o(`[data-swiper-slide-index="${n}"]`);
  else
    l ? (a = e.filter((u) => u.column === n)[0], d = e.filter((u) => u.column === n + 1)[0], c = e.filter((u) => u.column === n - 1)[0]) : a = e[n];
  a && (l || (d = Xe(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = je(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((u) => {
    U(u, u === a, t.slideActiveClass), U(u, u === d, t.slideNextClass), U(u, u === c, t.slidePrevClass);
  }), i.emitSlidesClasses();
}
const H = (i, e) => {
  if (!i || i.destroyed || !i.params) return;
  const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
  if (s) {
    let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
    !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, K = (i, e) => {
  if (!i.slides[e]) return;
  const t = i.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, re = (i) => {
  if (!i || i.destroyed || !i.params) return;
  let e = i.params.lazyPreloadPrevNext;
  const t = i.slides.length;
  if (!t || !e || e < 0) return;
  e = Math.min(e, t);
  const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), n = i.activeIndex;
  if (i.params.grid && i.params.grid.rows > 1) {
    const l = n, o = [l - e];
    o.push(...Array.from({
      length: e
    }).map((a, c) => l + s + c)), i.slides.forEach((a, c) => {
      o.includes(a.column) && K(i, c);
    });
    return;
  }
  const r = n + s - 1;
  if (i.params.rewind || i.params.loop)
    for (let l = n - e; l <= r + e; l += 1) {
      const o = (l % t + t) % t;
      (o < n || o > r) && K(i, o);
    }
  else
    for (let l = Math.max(n - e, 0); l <= Math.min(r + e, t - 1); l += 1)
      l !== n && (l > r || l < n) && K(i, l);
};
function dt(i) {
  const {
    slidesGrid: e,
    params: t
  } = i, s = i.rtlTranslate ? i.translate : -i.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function ct(i) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: s,
    params: n,
    activeIndex: r,
    realIndex: l,
    snapIndex: o
  } = e;
  let a = i, c;
  const d = (f) => {
    let h = f - e.virtual.slidesBefore;
    return h < 0 && (h = e.virtual.slides.length + h), h >= e.virtual.slides.length && (h -= e.virtual.slides.length), h;
  };
  if (typeof a > "u" && (a = dt(e)), s.indexOf(t) >= 0)
    c = s.indexOf(t);
  else {
    const f = Math.min(n.slidesPerGroupSkip, a);
    c = f + Math.floor((a - f) / n.slidesPerGroup);
  }
  if (c >= s.length && (c = s.length - 1), a === r && !e.params.loop) {
    c !== o && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(a);
    return;
  }
  const u = e.grid && n.grid && n.grid.rows > 1;
  let p;
  if (e.virtual && n.virtual.enabled && n.loop)
    p = d(a);
  else if (u) {
    const f = e.slides.filter((g) => g.column === a)[0];
    let h = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(h) && (h = Math.max(e.slides.indexOf(f), 0)), p = Math.floor(h / n.grid.rows);
  } else if (e.slides[a]) {
    const f = e.slides[a].getAttribute("data-swiper-slide-index");
    f ? p = parseInt(f, 10) : p = a;
  } else
    p = a;
  Object.assign(e, {
    previousSnapIndex: o,
    snapIndex: c,
    previousRealIndex: l,
    realIndex: p,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && re(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== p && e.emit("realIndexChange"), e.emit("slideChange"));
}
function ut(i, e) {
  const t = this, s = t.params;
  let n = i.closest(`.${s.slideClass}, swiper-slide`);
  !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((o) => {
    !n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o);
  });
  let r = !1, l;
  if (n) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === n) {
        r = !0, l = o;
        break;
      }
  }
  if (n && r)
    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = l;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var ft = {
  updateSize: it,
  updateSlides: st,
  updateAutoHeight: rt,
  updateSlidesOffset: nt,
  updateSlidesProgress: at,
  updateProgress: ot,
  updateSlidesClasses: lt,
  updateActiveIndex: ct,
  updateClickedSlide: ut
};
function pt(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: s,
    translate: n,
    wrapperEl: r
  } = e;
  if (t.virtualTranslate)
    return s ? -n : n;
  if (t.cssMode)
    return n;
  let l = $e(r, i);
  return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0;
}
function ht(i, e) {
  const t = this, {
    rtlTranslate: s,
    params: n,
    wrapperEl: r,
    progress: l
  } = t;
  let o = 0, a = 0;
  const c = 0;
  t.isHorizontal() ? o = s ? -i : i : a = i, n.roundLengths && (o = Math.floor(o), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? o : a, n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -a : n.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${a}px, ${c}px)`);
  let d;
  const u = t.maxTranslate() - t.minTranslate();
  u === 0 ? d = 0 : d = (i - t.minTranslate()) / u, d !== l && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
}
function mt() {
  return -this.snapGrid[0];
}
function gt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function wt(i, e, t, s, n) {
  i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
  const r = this, {
    params: l,
    wrapperEl: o
  } = r;
  if (r.animating && l.preventInteractionOnTransition)
    return !1;
  const a = r.minTranslate(), c = r.maxTranslate();
  let d;
  if (s && i > a ? d = a : s && i < c ? d = c : d = i, r.updateProgress(d), l.cssMode) {
    const u = r.isHorizontal();
    if (e === 0)
      o[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!r.support.smoothScroll)
        return be({
          swiper: r,
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
  return e === 0 ? (r.setTransition(0), r.setTranslate(d), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
    !r || r.destroyed || p.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, t && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var vt = {
  getTranslate: pt,
  setTranslate: ht,
  minTranslate: mt,
  maxTranslate: gt,
  translateTo: wt
};
function At(i, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
}
function ye(i) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: s,
    step: n
  } = i;
  const {
    activeIndex: r,
    previousIndex: l
  } = e;
  let o = s;
  if (o || (r > l ? o = "next" : r < l ? o = "prev" : o = "reset"), e.emit(`transition${n}`), t && r !== l) {
    if (o === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`), o === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
  }
}
function St(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: s
  } = t;
  s.cssMode || (s.autoHeight && t.updateAutoHeight(), ye({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "Start"
  }));
}
function bt(i, e) {
  i === void 0 && (i = !0);
  const t = this, {
    params: s
  } = t;
  t.animating = !1, !s.cssMode && (t.setTransition(0), ye({
    swiper: t,
    runCallbacks: i,
    direction: e,
    step: "End"
  }));
}
var xt = {
  setTransition: At,
  transitionStart: St,
  transitionEnd: bt
};
function Tt(i, e, t, s, n) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const r = this;
  let l = i;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: p,
    wrapperEl: f,
    enabled: h
  } = r;
  if (!h && !s && !n || r.destroyed || r.animating && o.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = r.params.speed);
  const g = Math.min(r.params.slidesPerGroupSkip, l);
  let x = g + Math.floor((l - g) / r.params.slidesPerGroup);
  x >= a.length && (x = a.length - 1);
  const w = -a[x];
  if (o.normalizeSlideIndex)
    for (let m = 0; m < c.length; m += 1) {
      const A = -Math.floor(w * 100), S = Math.floor(c[m] * 100), M = Math.floor(c[m + 1] * 100);
      typeof c[m + 1] < "u" ? A >= S && A < M - (M - S) / 2 ? l = m : A >= S && A < M && (l = m + 1) : A >= S && (l = m);
    }
  if (r.initialized && l !== u && (!r.allowSlideNext && (p ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()) || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (u || 0) !== l))
    return !1;
  l !== (d || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
  let v;
  if (l > u ? v = "next" : l < u ? v = "prev" : v = "reset", p && -w === r.translate || !p && w === r.translate)
    return r.updateActiveIndex(l), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== "slide" && r.setTranslate(w), v !== "reset" && (r.transitionStart(t, v), r.transitionEnd(t, v)), !1;
  if (o.cssMode) {
    const m = r.isHorizontal(), A = p ? w : -w;
    if (e === 0) {
      const S = r.virtual && r.params.virtual.enabled;
      S && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), S && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        f[m ? "scrollLeft" : "scrollTop"] = A;
      })) : f[m ? "scrollLeft" : "scrollTop"] = A, S && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
      });
    } else {
      if (!r.support.smoothScroll)
        return be({
          swiper: r,
          targetPosition: A,
          side: m ? "left" : "top"
        }), !0;
      f.scrollTo({
        [m ? "left" : "top"]: A,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return r.setTransition(e), r.setTranslate(w), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(t, v), e === 0 ? r.transitionEnd(t, v) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(A) {
    !r || r.destroyed || A.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, v));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function yt(i, e, t, s) {
  i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let l = i;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled)
      l = l + n.virtual.slidesBefore;
    else {
      let o;
      if (r) {
        const p = l * n.params.grid.rows;
        o = n.slides.filter((f) => f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        o = n.getSlideIndexByData(l);
      const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: c
      } = n.params;
      let d = n.params.slidesPerView;
      d === "auto" ? d = n.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(n.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
      let u = a - o < d;
      if (c && (u = u || o < Math.ceil(d / 2)), s && c && n.params.slidesPerView !== "auto" && !r && (u = !1), u) {
        const p = c ? o < n.activeIndex ? "prev" : "next" : o - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? o + 1 : o - a + 1,
          slideRealIndex: p === "next" ? n.realIndex : void 0
        });
      }
      if (r) {
        const p = l * n.params.grid.rows;
        l = n.slides.filter((f) => f.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        l = n.getSlideIndexByData(l);
    }
  return requestAnimationFrame(() => {
    n.slideTo(l, e, t, s);
  }), n;
}
function Et(i, e, t) {
  e === void 0 && (e = !0);
  const s = this, {
    enabled: n,
    params: r,
    animating: l
  } = s;
  if (!n || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o, c = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !c && r.loopPreventsSliding) return !1;
    if (s.loopFix({
      direction: "next"
    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(s.activeIndex + a, i, e, t);
      }), !0;
  }
  return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t);
}
function Mt(i, e, t) {
  e === void 0 && (e = !0);
  const s = this, {
    params: n,
    snapGrid: r,
    slidesGrid: l,
    rtlTranslate: o,
    enabled: a,
    animating: c
  } = s;
  if (!a || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  const d = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (c && !d && n.loopPreventsSliding) return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const u = o ? s.translate : -s.translate;
  function p(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const f = p(u), h = r.map((w) => p(w));
  let g = r[h.indexOf(f) - 1];
  if (typeof g > "u" && n.cssMode) {
    let w;
    r.forEach((v, m) => {
      f >= v && (w = m);
    }), typeof w < "u" && (g = r[w > 0 ? w - 1 : w]);
  }
  let x = 0;
  if (typeof g < "u" && (x = l.indexOf(g), x < 0 && (x = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (x = x - s.slidesPerViewDynamic("previous", !0) + 1, x = Math.max(x, 0))), n.rewind && s.isBeginning) {
    const w = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(w, i, e, t);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      s.slideTo(x, i, e, t);
    }), !0;
  return s.slideTo(x, i, e, t);
}
function Pt(i, e, t) {
  e === void 0 && (e = !0);
  const s = this;
  if (!s.destroyed)
    return typeof i > "u" && (i = s.params.speed), s.slideTo(s.activeIndex, i, e, t);
}
function Ct(i, e, t, s) {
  e === void 0 && (e = !0), s === void 0 && (s = 0.5);
  const n = this;
  if (n.destroyed) return;
  typeof i > "u" && (i = n.params.speed);
  let r = n.activeIndex;
  const l = Math.min(n.params.slidesPerGroupSkip, r), o = l + Math.floor((r - l) / n.params.slidesPerGroup), a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[o]) {
    const c = n.snapGrid[o], d = n.snapGrid[o + 1];
    a - c > (d - c) * s && (r += n.params.slidesPerGroup);
  } else {
    const c = n.snapGrid[o - 1], d = n.snapGrid[o];
    a - c <= (d - c) * s && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, i, e, t);
}
function It() {
  const i = this;
  if (i.destroyed) return;
  const {
    params: e,
    slidesEl: t
  } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let n = i.clickedIndex, r;
  const l = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (i.animating) return;
    r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), n = i.getSlideIndex(O(t, `${l}[data-swiper-slide-index="${r}"]`)[0]), ie(() => {
      i.slideTo(n);
    })) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(), n = i.getSlideIndex(O(t, `${l}[data-swiper-slide-index="${r}"]`)[0]), ie(() => {
      i.slideTo(n);
    })) : i.slideTo(n);
  } else
    i.slideTo(n);
}
var zt = {
  slideTo: Tt,
  slideToLoop: yt,
  slideNext: Et,
  slidePrev: Mt,
  slideReset: Pt,
  slideToClosest: Ct,
  slideToClickedSlide: It
};
function Lt(i) {
  const e = this, {
    params: t,
    slidesEl: s
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const n = () => {
    O(s, `.${t.slideClass}, swiper-slide`).forEach((u, p) => {
      u.setAttribute("data-swiper-slide-index", p);
    });
  }, r = e.grid && t.grid && t.grid.rows > 1, l = t.slidesPerGroup * (r ? t.grid.rows : 1), o = e.slides.length % l !== 0, a = r && e.slides.length % t.grid.rows !== 0, c = (d) => {
    for (let u = 0; u < d; u += 1) {
      const p = e.isElement ? se("swiper-slide", [t.slideBlankClass]) : se("div", [t.slideClass, t.slideBlankClass]);
      e.slidesEl.append(p);
    }
  };
  if (o) {
    if (t.loopAddBlankSlides) {
      const d = l - e.slides.length % l;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      W("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n();
  } else if (a) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - e.slides.length % t.grid.rows;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      W("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n();
  } else
    n();
  e.loopFix({
    slideRealIndex: i,
    direction: t.centeredSlides ? void 0 : "next"
  });
}
function kt(i) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: o
  } = i === void 0 ? {} : i;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: u,
    slidesEl: p,
    params: f
  } = a, {
    centeredSlides: h
  } = f;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && f.virtual.enabled) {
    t && (!f.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : f.centeredSlides && a.snapIndex < f.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = u, a.emit("loopFix");
    return;
  }
  let g = f.slidesPerView;
  g === "auto" ? g = a.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), h && g % 2 === 0 && (g = g + 1));
  const x = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
  let w = x;
  w % x !== 0 && (w += x - w % x), w += f.loopAdditionalSlides, a.loopedSlides = w;
  const v = a.grid && f.grid && f.grid.rows > 1;
  c.length < g + w ? W("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && f.grid.fill === "row" && W("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const m = [], A = [];
  let S = a.activeIndex;
  typeof r > "u" ? r = a.getSlideIndex(c.filter((T) => T.classList.contains(f.slideActiveClass))[0]) : S = r;
  const M = s === "next" || !s, G = s === "prev" || !s;
  let C = 0, V = 0;
  const b = v ? Math.ceil(c.length / f.grid.rows) : c.length, E = (v ? c[r].column : r) + (h && typeof n > "u" ? -g / 2 + 0.5 : 0);
  if (E < w) {
    C = Math.max(w - E, x);
    for (let T = 0; T < w - E; T += 1) {
      const P = T - Math.floor(T / b) * b;
      if (v) {
        const I = b - P - 1;
        for (let B = c.length - 1; B >= 0; B -= 1)
          c[B].column === I && m.push(B);
      } else
        m.push(b - P - 1);
    }
  } else if (E + g > b - w) {
    V = Math.max(E - (b - w * 2), x);
    for (let T = 0; T < V; T += 1) {
      const P = T - Math.floor(T / b) * b;
      v ? c.forEach((I, B) => {
        I.column === P && A.push(B);
      }) : A.push(P);
    }
  }
  if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
    a.__preventObserver__ = !1;
  }), G && m.forEach((T) => {
    c[T].swiperLoopMoveDOM = !0, p.prepend(c[T]), c[T].swiperLoopMoveDOM = !1;
  }), M && A.forEach((T) => {
    c[T].swiperLoopMoveDOM = !0, p.append(c[T]), c[T].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), f.slidesPerView === "auto" ? a.updateSlides() : v && (m.length > 0 && G || A.length > 0 && M) && a.slides.forEach((T, P) => {
    a.grid.updateSlide(P, T, a.slides);
  }), f.watchSlidesProgress && a.updateSlidesOffset(), t) {
    if (m.length > 0 && G) {
      if (typeof e > "u") {
        const T = a.slidesGrid[S], I = a.slidesGrid[S + C] - T;
        o ? a.setTranslate(a.translate - I) : (a.slideTo(S + Math.ceil(C), 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
      } else if (n) {
        const T = v ? m.length / f.grid.rows : m.length;
        a.slideTo(a.activeIndex + T, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
      }
    } else if (A.length > 0 && M)
      if (typeof e > "u") {
        const T = a.slidesGrid[S], I = a.slidesGrid[S - V] - T;
        o ? a.setTranslate(a.translate - I) : (a.slideTo(S - V, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
      } else {
        const T = v ? A.length / f.grid.rows : A.length;
        a.slideTo(a.activeIndex - T, 0, !1, !0);
      }
  }
  if (a.allowSlidePrev = d, a.allowSlideNext = u, a.controller && a.controller.control && !l) {
    const T = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((P) => {
      !P.destroyed && P.params.loop && P.loopFix({
        ...T,
        slideTo: P.params.slidesPerView === f.slidesPerView ? t : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...T,
      slideTo: a.controller.control.params.slidesPerView === f.slidesPerView ? t : !1
    });
  }
  a.emit("loopFix");
}
function Gt() {
  const i = this, {
    params: e,
    slidesEl: t
  } = i;
  if (!e.loop || i.virtual && i.params.virtual.enabled) return;
  i.recalcSlides();
  const s = [];
  i.slides.forEach((n) => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n;
  }), i.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), s.forEach((n) => {
    t.append(n);
  }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
}
var Ot = {
  loopCreate: Lt,
  loopFix: kt,
  loopDestroy: Gt
};
function Bt(i) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Dt() {
  const i = this;
  i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1;
  }));
}
var Vt = {
  setGrabCursor: Bt,
  unsetGrabCursor: Dt
};
function Ft(i, e) {
  e === void 0 && (e = this);
  function t(s) {
    if (!s || s === F() || s === L()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(i);
    return !n && !s.getRootNode ? null : n || t(s.getRootNode().host);
  }
  return t(e);
}
function ge(i, e, t) {
  const s = L(), {
    params: n
  } = i, r = n.edgeSwipeDetection, l = n.edgeSwipeThreshold;
  return r && (t <= l || t >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function Nt(i) {
  const e = this, t = F();
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId)
      return;
    n.pointerId = s.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    ge(e, s, s.targetTouches[0].pageX);
    return;
  }
  const {
    params: r,
    touches: l,
    enabled: o
  } = e;
  if (!o || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
  const c = !!r.noSwipingClass && r.noSwipingClass !== "", d = s.composedPath ? s.composedPath() : s.path;
  c && s.target && s.target.shadowRoot && d && (a = d[0]);
  const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, p = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (p ? Ft(u, a) : a.closest(u))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler))
    return;
  l.currentX = s.pageX, l.currentY = s.pageY;
  const f = l.currentX, h = l.currentY;
  if (!ge(e, s, f))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = f, l.startY = h, n.touchStartTime = $(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let g = !0;
  a.matches(n.focusableElements) && (g = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
  const x = g && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || x) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
}
function Yt(i) {
  const e = F(), t = this, s = t.touchEventsData, {
    params: n,
    touches: r,
    rtlTranslate: l,
    enabled: o
  } = t;
  if (!o || !n.simulateTouch && i.pointerType === "mouse") return;
  let a = i;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
    return;
  let c;
  if (a.type === "touchmove") {
    if (c = [...a.changedTouches].filter((M) => M.identifier === s.touchId)[0], !c || c.identifier !== s.touchId) return;
  } else
    c = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
    return;
  }
  const d = c.pageX, u = c.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = d, r.startY = u;
    return;
  }
  if (!t.allowTouchMove) {
    a.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u
    }), s.touchStartTime = $());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (t.isVertical()) {
      if (u < r.startY && t.translate <= t.maxTranslate() || u > r.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else if (d < r.startX && t.translate <= t.maxTranslate() || d > r.startX && t.translate >= t.minTranslate())
      return;
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && t.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = d, r.currentY = u;
  const p = r.currentX - r.startX, f = r.currentY - r.startY;
  if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let M;
    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + f * f >= 25 && (M = Math.atan2(Math.abs(f), Math.abs(p)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? M > n.touchAngle : 90 - M > n.touchAngle);
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || a.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  t.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let h = t.isHorizontal() ? p : f, g = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (h = Math.abs(h) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), r.diff = h, h *= n.touchRatio, l && (h = -h, g = -g);
  const x = t.touchesDirection;
  t.swipeDirection = h > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
  const w = t.params.loop && !n.cssMode, v = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!s.isMoved) {
    if (w && v && t.loopFix({
      direction: t.swipeDirection
    }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const M = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(M);
    }
    s.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a);
  }
  let m;
  if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && x !== t.touchesDirection && w && v && Math.abs(h) >= 1) {
    Object.assign(r, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  t.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = h + s.startTranslate;
  let A = !0, S = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (S = 0), h > 0 ? (w && v && !m && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), s.currentTranslate > t.minTranslate() && (A = !1, n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + h) ** S))) : h < 0 && (w && v && !m && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), s.currentTranslate < t.maxTranslate() && (A = !1, n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - h) ** S))), A && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(h) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
}
function Rt(i) {
  const e = this, t = e.touchEventsData;
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (n = [...s.changedTouches].filter((S) => S.identifier === t.touchId)[0], !n || n.identifier !== t.touchId) return;
  } else {
    if (t.touchId !== null || s.pointerId !== t.pointerId) return;
    n = s;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: l,
    touches: o,
    rtlTranslate: a,
    slidesGrid: c,
    enabled: d
  } = e;
  if (!d || !l.simulateTouch && s.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && l.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  l.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const u = $(), p = u - t.touchStartTime;
  if (e.allowClick) {
    const S = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(S && S[0] || s.target, S), e.emit("tap click", s), p < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
  }
  if (t.lastClickTime = $(), ie(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let f;
  if (l.followFinger ? f = a ? e.translate : -e.translate : f = -t.currentTranslate, l.cssMode)
    return;
  if (l.freeMode && l.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: f
    });
    return;
  }
  const h = f >= -e.maxTranslate() && !e.params.loop;
  let g = 0, x = e.slidesSizesGrid[0];
  for (let S = 0; S < c.length; S += S < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const M = S < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof c[S + M] < "u" ? (h || f >= c[S] && f < c[S + M]) && (g = S, x = c[S + M] - c[S]) : (h || f >= c[S]) && (g = S, x = c[c.length - 1] - c[c.length - 2]);
  }
  let w = null, v = null;
  l.rewind && (e.isBeginning ? v = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (w = 0));
  const m = (f - c[g]) / x, A = g < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (p > l.longSwipesMs) {
    if (!l.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? w : g + A) : e.slideTo(g)), e.swipeDirection === "prev" && (m > 1 - l.longSwipesRatio ? e.slideTo(g + A) : v !== null && m < 0 && Math.abs(m) > l.longSwipesRatio ? e.slideTo(v) : e.slideTo(g));
  } else {
    if (!l.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(g + A) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : g + A), e.swipeDirection === "prev" && e.slideTo(v !== null ? v : g));
  }
}
function we() {
  const i = this, {
    params: e,
    el: t
  } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = i, l = i.virtual && i.params.virtual.enabled;
  i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
  const o = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !o ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !l ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
  }, 500)), i.allowSlidePrev = n, i.allowSlideNext = s, i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow();
}
function _t(i) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
}
function Ht() {
  const i = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: s
  } = i;
  if (!s) return;
  i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
  let n;
  const r = i.maxTranslate() - i.minTranslate();
  r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r, n !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
}
function $t(i) {
  const e = this;
  H(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Wt() {
  const i = this;
  i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const Ee = (i, e) => {
  const t = F(), {
    params: s,
    el: n,
    wrapperEl: r,
    device: l
  } = i, o = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  !n || typeof n == "string" || (t[a]("touchstart", i.onDocumentTouchStart, {
    passive: !1,
    capture: o
  }), n[a]("touchstart", i.onTouchStart, {
    passive: !1
  }), n[a]("pointerdown", i.onTouchStart, {
    passive: !1
  }), t[a]("touchmove", i.onTouchMove, {
    passive: !1,
    capture: o
  }), t[a]("pointermove", i.onTouchMove, {
    passive: !1,
    capture: o
  }), t[a]("touchend", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerup", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointercancel", i.onTouchEnd, {
    passive: !0
  }), t[a]("touchcancel", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerout", i.onTouchEnd, {
    passive: !0
  }), t[a]("pointerleave", i.onTouchEnd, {
    passive: !0
  }), t[a]("contextmenu", i.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0), s.cssMode && r[a]("scroll", i.onScroll), s.updateOnWindowResize ? i[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we, !0) : i[c]("observerUpdate", we, !0), n[a]("load", i.onLoad, {
    capture: !0
  }));
};
function jt() {
  const i = this, {
    params: e
  } = i;
  i.onTouchStart = Nt.bind(i), i.onTouchMove = Yt.bind(i), i.onTouchEnd = Rt.bind(i), i.onDocumentTouchStart = Wt.bind(i), e.cssMode && (i.onScroll = Ht.bind(i)), i.onClick = _t.bind(i), i.onLoad = $t.bind(i), Ee(i, "on");
}
function Xt() {
  Ee(this, "off");
}
var qt = {
  attachEvents: jt,
  detachEvents: Xt
};
const ve = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function Qt() {
  const i = this, {
    realIndex: e,
    initialized: t,
    params: s,
    el: n
  } = i, r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const l = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
  if (!l || i.currentBreakpoint === l) return;
  const a = (l in r ? r[l] : void 0) || i.originalParams, c = ve(i, s), d = ve(i, a), u = i.params.grabCursor, p = a.grabCursor, f = s.enabled;
  c && !d ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !c && d && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), u && !p ? i.unsetGrabCursor() : !u && p && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((m) => {
    if (typeof a[m] > "u") return;
    const A = s[m] && s[m].enabled, S = a[m] && a[m].enabled;
    A && !S && i[m].disable(), !A && S && i[m].enable();
  });
  const h = a.direction && a.direction !== s.direction, g = s.loop && (a.slidesPerView !== s.slidesPerView || h), x = s.loop;
  h && t && i.changeDirection(), z(i.params, a);
  const w = i.params.enabled, v = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev
  }), f && !w ? i.disable() : !f && w && i.enable(), i.currentBreakpoint = l, i.emit("_beforeBreakpoint", a), t && (g ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !x && v ? (i.loopCreate(e), i.updateSlides()) : x && !v && i.loopDestroy()), i.emit("breakpoint", a);
}
function Zt(i, e, t) {
  if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
  let s = !1;
  const n = L(), r = e === "window" ? n.innerHeight : t.clientHeight, l = Object.keys(i).map((o) => {
    if (typeof o == "string" && o.indexOf("@") === 0) {
      const a = parseFloat(o.substr(1));
      return {
        value: r * a,
        point: o
      };
    }
    return {
      value: o,
      point: o
    };
  });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const {
      point: a,
      value: c
    } = l[o];
    e === "window" ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = a) : c <= t.clientWidth && (s = a);
  }
  return s || "max";
}
var Ut = {
  setBreakpoint: Qt,
  getBreakpoint: Zt
};
function Kt(i, e) {
  const t = [];
  return i.forEach((s) => {
    typeof s == "object" ? Object.keys(s).forEach((n) => {
      s[n] && t.push(e + n);
    }) : typeof s == "string" && t.push(e + s);
  }), t;
}
function Jt() {
  const i = this, {
    classNames: e,
    params: t,
    rtl: s,
    el: n,
    device: r
  } = i, l = Kt(["initialized", t.direction, {
    "free-mode": i.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: s
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...l), n.classList.add(...e), i.emitContainerClasses();
}
function ei() {
  const i = this, {
    el: e,
    classNames: t
  } = i;
  !e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses());
}
var ti = {
  addClasses: Jt,
  removeClasses: ei
};
function ii() {
  const i = this, {
    isLocked: e,
    params: t
  } = i, {
    slidesOffsetBefore: s
  } = t;
  if (s) {
    const n = i.slides.length - 1, r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
    i.isLocked = i.size > r;
  } else
    i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var si = {
  checkOverflow: ii
}, Ae = {
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
function ri(i, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0], r = s[n];
    if (typeof r != "object" || r === null) {
      z(e, s);
      return;
    }
    if (i[n] === !0 && (i[n] = {
      enabled: !0
    }), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in r)) {
      z(e, s);
      return;
    }
    typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
      enabled: !1
    }), z(e, s);
  };
}
const J = {
  eventsEmitter: tt,
  update: ft,
  translate: vt,
  transition: xt,
  slide: zt,
  loop: Ot,
  grabCursor: Vt,
  events: qt,
  breakpoints: Ut,
  checkOverflow: si,
  classes: ti
}, ee = {};
class k {
  constructor() {
    let e, t;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e, t] = n, t || (t = {}), t = z({}, t), e && !t.el && (t.el = e);
    const l = F();
    if (t.el && typeof t.el == "string" && l.querySelectorAll(t.el).length > 1) {
      const d = [];
      return l.querySelectorAll(t.el).forEach((u) => {
        const p = z({}, t, {
          el: u
        });
        d.push(new k(p));
      }), d;
    }
    const o = this;
    o.__swiper__ = !0, o.support = xe(), o.device = Te({
      userAgent: t.userAgent
    }), o.browser = Ke(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
    const a = {};
    o.modules.forEach((d) => {
      d({
        params: t,
        swiper: o,
        extendParams: ri(t, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o)
      });
    });
    const c = z({}, Ae, a);
    return o.params = z({}, c, ee, t), o.originalParams = z({}, o.params), o.passedParams = z({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((d) => {
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
      params: s
    } = this, n = O(t, `.${s.slideClass}, swiper-slide`), r = pe(n[0]);
    return pe(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: s
    } = e;
    e.slides = O(t, `.${s.slideClass}, swiper-slide`);
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
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(), l = (s.maxTranslate() - n) * e + n;
    s.translateTo(l, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      t.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const s = this, {
      params: n,
      slides: r,
      slidesGrid: l,
      slidesSizesGrid: o,
      size: a,
      activeIndex: c
    } = s;
    let d = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let u = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0, p;
      for (let f = c + 1; f < r.length; f += 1)
        r[f] && !p && (u += Math.ceil(r[f].swiperSlideSize), d += 1, u > a && (p = !0));
      for (let f = c - 1; f >= 0; f -= 1)
        r[f] && !p && (u += r[f].swiperSlideSize, d += 1, u > a && (p = !0));
    } else if (e === "current")
      for (let u = c + 1; u < r.length; u += 1)
        (t ? l[u] + o[u] - l[c] < a : l[u] - l[c] < a) && (d += 1);
    else
      for (let u = c - 1; u >= 0; u -= 1)
        l[c] - l[u] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
      l.complete && H(e, l);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate, o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(l.length - 1, 0, !1, !0);
      } else
        r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const s = this, n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), s.emit("changeDirection"), t && s.update()), s;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s)
      return !1;
    s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const n = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : O(s, n())[0];
    return !l && t.params.createElements && (l = se("div", t.params.wrapperClass), s.append(l), O(s, `.${t.params.slideClass}`).forEach((o) => {
      l.append(o);
    })), Object.assign(t, {
      el: s,
      wrapperEl: l,
      slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
      hostEl: t.isElement ? s.parentNode.host : s,
      mounted: !0,
      // RTL
      rtl: s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl"),
      wrongRTL: D(l, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
      r.complete ? H(t, r) : r.addEventListener("load", (l) => {
        H(t, l.target);
      });
    }), re(t), t.initialized = !0, re(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const s = this, {
      params: n,
      el: r,
      wrapperEl: l,
      slides: o
    } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), l && l.removeAttribute("style"), o && o.length && o.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((a) => {
      s.off(a);
    }), e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null), _e(s)), s.destroyed = !0), null;
  }
  static extendDefaults(e) {
    z(ee, e);
  }
  static get extendedDefaults() {
    return ee;
  }
  static get defaults() {
    return Ae;
  }
  static installModule(e) {
    k.prototype.__modules__ || (k.prototype.__modules__ = []);
    const t = k.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => k.installModule(t)), k) : (k.installModule(e), k);
  }
}
Object.keys(J).forEach((i) => {
  Object.keys(J[i]).forEach((e) => {
    k.prototype[e] = J[i][e];
  });
});
k.use([Je, et]);
function ni(i, e) {
  const [t, s] = X(!1), [n, r] = X(!1), [l, o] = X(), a = () => {
    var f;
    return (f = l()) == null ? void 0 : f.swiper;
  }, [c, d] = Ne(
    () => {
      var f;
      return ((f = a()) == null ? void 0 : f.activeIndex) ?? 0;
    }
  ), u = () => {
    var f;
    return {
      ...e == null ? void 0 : e(),
      on: {
        ...(f = e == null ? void 0 : e()) == null ? void 0 : f.on,
        reachEnd: () => r(!0),
        reachBeginning: () => s(!0),
        fromEdge: () => {
          s(!1), r(!1);
        },
        afterInit: (h) => {
          s(h.isBeginning), r(h.isEnd);
        },
        slideChange(h) {
          var g, x, w;
          (w = (x = (g = e == null ? void 0 : e()) == null ? void 0 : g.on) == null ? void 0 : x.slideChange) == null || w.call(x, h), d(h.activeIndex);
        }
      }
    };
  }, p = Fe(i);
  return Oe(() => {
    var f;
    a() && (Object.assign(a(), u()), (f = a()) == null || f.update());
  }), Be(() => {
    l() && new k(l(), u());
  }), {
    isPrevBtnDisabled: t,
    isNextBtnDisabled: n,
    children: p,
    swiper: a,
    setSwiperContainer: o,
    activeIndex: c
  };
}
const ai = ".carousel-btn-group{display:flex;align-items:center;justify-content:flex-end;margin-bottom:var(--spacing-6);gap:var(--spacing-3)}.swiper-slide{width:var(--swiper-slide-width, 100%)}", oi = '@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}';
var te = /* @__PURE__ */ ne("<style>"), li = /* @__PURE__ */ ne("<div role=group aria-roledescription=carrousel><div class=carousel-btn-group><solid-button variant=primary><span class=sr-only>Précédent</span><solid-icon icon=mingcute-left-line></solid-icon></solid-button><solid-button variant=primary><span class=sr-only>Suivant</span><solid-icon icon=mingcute-right-line></solid-icon></solid-button></div><div class=swiper><div class=swiper-wrapper>", !0, !1), di = /* @__PURE__ */ ne("<div class=swiper-slide aria-roledescription=diapositive>");
const ci = "solid-carousel";
Ie(ci, j.object({
  sideOffset: j.number().optional().default(0),
  arialabel: j.string()
}), (i) => {
  const e = Ge(), {
    setSwiperContainer: t,
    isNextBtnDisabled: s,
    swiper: n,
    children: r,
    isPrevBtnDisabled: l
  } = ni(e, () => ({
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      360: {
        slidesPerView: "auto"
      }
    },
    slidesOffsetAfter: i.sideOffset,
    slidesOffsetBefore: i.sideOffset
  })), o = () => r().filter((a) => a.matches("template")).map((a) => ({
    node: a.content.cloneNode(!0),
    // Permet de récupérer les styles inline des éléments `<template>`
    style: a.getAttribute("style")
  }));
  return [(() => {
    var a = te();
    return a.innerHTML = `/* layer: preflights */
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
.inline{display:inline;}
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
      `, a;
  })(), (() => {
    var a = te();
    return N(a, oi), a;
  })(), (() => {
    var a = te();
    return N(a, ai), a;
  })(), (() => {
    var a = li(), c = a.firstChild, d = c.firstChild, u = d.firstChild, p = u.nextSibling, f = d.nextSibling, h = f.firstChild, g = h.nextSibling, x = c.nextSibling, w = x.firstChild;
    return d.$$click = () => {
      var v;
      return (v = n()) == null ? void 0 : v.slidePrev();
    }, d.icononly = !0, d._$owner = Y(), p._$owner = Y(), f.$$click = () => {
      var v;
      return (v = n()) == null ? void 0 : v.slideNext();
    }, f.icononly = !0, f._$owner = Y(), g._$owner = Y(), Le((v) => t(v), x), N(w, De(Ve, {
      get each() {
        return o();
      },
      children: (v, m) => (() => {
        var A = di();
        return N(A, () => v.node), ue((S) => {
          var M = `${m() + 1} sur ${o().length}`, G = v.style ?? void 0;
          return M !== S.e && ce(A, "aria-label", S.e = M), S.t = ke(A, G, S.t), S;
        }, {
          e: void 0,
          t: void 0
        }), A;
      })()
    })), ue((v) => {
      var m = i.arialabel, A = l(), S = s();
      return m !== v.e && ce(a, "aria-label", v.e = m), A !== v.t && (d.disabled = v.t = A), S !== v.a && (f.disabled = v.a = S), v;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), a;
  })()];
});
ze(["click"]);
export {
  ci as TAG
};
