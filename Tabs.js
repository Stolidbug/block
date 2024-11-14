import { e as y, t as g, c as b, i as k, g as f } from "./utils-DyI0jAV8.js";
import { z as u } from "./theme.store-v2--qJ2X.js";
import { c as w } from "./index-BZKcI3Xu.js";
import { c as _ } from "./index-CidExI9F.js";
import { m as p } from "./index-D6kvt-oB.js";
import { y as T, f as A, h as V, c as z, o as $, g as v, a as C, d as E } from "./R5675YMU-BY7cX9Th.js";
import { $ as L } from "./index-4ydbDoOj.js";
var S = /* @__PURE__ */ g("<span>");
function m(a, e) {
  let r = (() => {
    var l = S();
    return y(l, T(e), !1, !1), l;
  })();
  A((l) => (Object.entries(e()).forEach(([t, d]) => {
    var i, o;
    if (d === void 0 || // La clé n'est pas dans les nouveaux attributs mais l'était dans les anciens
    t in l && !(t in e())) {
      (i = a()) == null || i.removeAttribute(t);
      return;
    }
    (o = a()) == null || o.setAttribute(t, (r == null ? void 0 : r.getAttribute(t)) ?? "");
  }), e()), e()), V(() => {
    r = void 0;
  });
}
const j = ".tabs-trigger{--anim-duration: .3s;--anim-timing: ease-in-out;display:inline-flex;align-items:center;padding:var(--spacing-3) var(--spacing-4);gap:var(--spacing-1);translate:0 1px;border:0;border-radius:var(--radius-lg) var(--radius-lg) 0 0;outline-offset:var(--spacing-1);background:none;background-image:linear-gradient(to top,var(--color-gray-500),var(--color-gray-500));background-position:bottom center;background-size:100% 1px;background-repeat:no-repeat;font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);text-decoration:none;white-space:nowrap;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,background-size}.tabs-trigger:not(.disabled){cursor:pointer}.tabs-trigger.disabled{background-color:var(--color-gray-200);color:var(--color-gray-400)}.tabs-trigger.selected{background-image:linear-gradient(to top,var(--color-blue-700),var(--color-blue-700));background-size:100% 2px;background-color:var(--color-blue-100)}:host{border-radius:var(--radius-lg) var(--radius-lg) 0 0}:host(:where(:hover,:focus,:active)){background-color:var(--color-gray-100)}:host(.dark) .tabs-trigger{color:var(--color-white)}:host(.dark) .tabs-trigger.disabled{background-color:var(--color-gray-400);color:var(--color-gray-700)}:host(.dark) .tabs-trigger.selected{background-image:linear-gradient(to top,var(--color-blue-400),var(--color-blue-400));background-size:100% 2px;background-color:var(--color-blue-700)}:host(.dark:where(:hover,:focus,:active)){background-color:var(--color-gray-800)}.tabs-trigger.sm{font-size:var(--font-size-3-5);line-height:var(--line-height-5)}";
var R = /* @__PURE__ */ g("<slot>"), q = /* @__PURE__ */ g(`<style>
          .tabs-list {
            display: flex;
            align-items: center;
          }
        `), O = /* @__PURE__ */ g("<div class=tabs-list><slot>"), I = /* @__PURE__ */ g("<style>"), P = /* @__PURE__ */ g("<span class=tabs-trigger><slot>"), M = /* @__PURE__ */ g("<div><slot>");
const [B, h] = _((a) => {
  const [e, r] = w(() => a.defaultValue), l = E();
  return {
    value: e,
    setValue: r,
    uid: l
  };
}), N = b("solid-tabs", u.object({
  value: u.string().optional()
}), (a) => z(B, {
  get defaultValue() {
    return a.value;
  },
  get children() {
    var e = R();
    return e._$owner = v(), e;
  }
})), Q = b("solid-tabs-list", u.object({}), () => {
  const a = f(), e = h(), r = () => Array.from(a.querySelectorAll("solid-tabs-trigger")), l = () => a.querySelector(`#tab-${e == null ? void 0 : e.uid}-${e == null ? void 0 : e.value()}`), t = () => {
    var s, n;
    const o = r().indexOf(l());
    return o === r.length - 1 ? (s = r()[0]) == null ? void 0 : s.getAttribute("value") : (n = r()[o + 1]) == null ? void 0 : n.getAttribute("value");
  }, d = () => {
    var s, n;
    const o = r().indexOf(l());
    return o === 0 ? (s = r()[r().length - 1]) == null ? void 0 : s.getAttribute("value") : (n = r()[o - 1]) == null ? void 0 : n.getAttribute("value");
  }, i = (o) => {
    const s = a.querySelector(`#tab-${e == null ? void 0 : e.uid}-${o}`);
    s == null || s.focus();
  };
  return m(() => a, () => ({
    role: "tablist",
    "aria-orientation": "horizontal"
  })), $(() => {
    p(a.shadowRoot, "keydown", (o) => {
      L(o).with({
        key: "ArrowRight"
      }, () => {
        t() && (e == null || e.setValue(t()), i((e == null ? void 0 : e.value()) ?? ""));
      }).with({
        key: "ArrowLeft"
      }, () => {
        d() && (e == null || e.setValue(d()), i((e == null ? void 0 : e.value()) ?? ""));
      }).with({
        key: "Home"
      }, () => {
        var c;
        const n = (c = r()[0]) == null ? void 0 : c.getAttribute("value");
        n && (e == null || e.setValue(n), i((e == null ? void 0 : e.value()) ?? ""));
      }).with({
        key: "End"
      }, () => {
        var c;
        const n = (c = r()[r().length - 1]) == null ? void 0 : c.getAttribute("value");
        n && (e == null || e.setValue(n), i((e == null ? void 0 : e.value()) ?? ""));
      });
    });
  }), [q(), (() => {
    var o = O(), s = o.firstChild;
    return s._$owner = v(), o;
  })()];
}), W = b("solid-tabs-trigger", u.object({
  value: u.string(),
  disabled: u.boolean().optional().default(!1),
  sm: u.boolean().optional().default(!1)
}), (a) => {
  const e = f(), r = h(), l = () => (r == null ? void 0 : r.value()) === a.value;
  return $(() => {
    p(e.shadowRoot, "click", () => {
      a.disabled || r == null || r.setValue(a.value);
    });
  }), m(() => e, () => ({
    role: "tab",
    id: `tab-${r == null ? void 0 : r.uid}-${a.value}`,
    "aria-selected": l(),
    "aria-controls": `tabpanel-${r == null ? void 0 : r.uid}-${a.value}`,
    tabindex: l() ? "0" : "-1"
  })), [(() => {
    var t = I();
    return k(t, j), t;
  })(), (() => {
    var t = P(), d = t.firstChild;
    return d._$owner = v(), C((i) => {
      var o = !!l(), s = !!a.disabled, n = !!a.sm;
      return o !== i.e && t.classList.toggle("selected", i.e = o), s !== i.t && t.classList.toggle("disabled", i.t = s), n !== i.a && t.classList.toggle("sm", i.a = n), i;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), t;
  })()];
}), X = b("solid-tabs-content", u.object({
  value: u.string()
}), (a) => {
  const e = f(), r = h(), l = () => (r == null ? void 0 : r.value()) === a.value;
  return m(() => e, () => ({
    id: `tabpanel-${r == null ? void 0 : r.uid}-${a.value}`,
    role: "tabpanel",
    tabindex: "0",
    "aria-labelledby": `tab-${r == null ? void 0 : r.uid}-${a.value}`,
    style: {
      display: l() ? "initial" : "none"
    }
  })), (() => {
    var t = M(), d = t.firstChild;
    return d._$owner = v(), t;
  })();
});
export {
  X as TabsContent,
  Q as TabsList,
  N as TabsRoot,
  W as TabsTrigger
};
