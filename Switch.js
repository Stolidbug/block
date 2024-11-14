import { e as F, t as m, c as q, i as w, s as _, g as X, u as K } from "./utils-DyI0jAV8.js";
import { c as p, y as N, d as L, e as b, f as M, g as v, a as R } from "./R5675YMU-BY7cX9Th.js";
import { c as A } from "./index-BZKcI3Xu.js";
import { u as G } from "./useSlots-DRPN5bzQ.js";
import { z as u } from "./theme.store-v2--qJ2X.js";
import { c as j, a as U, d as f, b as B, e as Y, f as V, x as W, y as J, h as Q, m as k, j as y, u as Z, k as ee, l as te, o as ne, p as oe } from "./environment-context-0t-z-DDy.js";
import { v as re, t as ae, d as ie } from "./index-n_s8SVLn.js";
var ce = j("switch").parts("root", "label", "control", "thumb"), x = ce.build(), l = U({
  getRootId: (e) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.root) ?? `switch:${e.id}`;
  },
  getLabelId: (e) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.label) ?? `switch:${e.id}:label`;
  },
  getThumbId: (e) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.thumb) ?? `switch:${e.id}:thumb`;
  },
  getControlId: (e) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.control) ?? `switch:${e.id}:control`;
  },
  getHiddenInputId: (e) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.input) ?? `switch:${e.id}:input`;
  },
  getHiddenInputEl: (e) => l.getById(e, l.getHiddenInputId(e))
});
function se(e, t, n) {
  const o = e.context.isDisabled, c = !o && e.context.focused, h = e.context.checked, d = {
    "data-active": f(e.context.active),
    "data-focus": f(c),
    "data-hover": f(e.context.hovered),
    "data-disabled": f(o),
    "data-state": e.context.checked ? "checked" : "unchecked",
    "data-invalid": f(e.context.invalid)
  };
  return {
    isChecked: h,
    isDisabled: o,
    isFocused: c,
    setChecked(i) {
      t({ type: "CHECKED.SET", checked: i, isTrusted: !1 });
    },
    toggleChecked() {
      t({ type: "CHECKED.TOGGLE", checked: h, isTrusted: !1 });
    },
    rootProps: n.label({
      ...x.root.attrs,
      ...d,
      dir: e.context.dir,
      id: l.getRootId(e.context),
      htmlFor: l.getHiddenInputId(e.context),
      onPointerMove() {
        o || t({ type: "CONTEXT.SET", context: { hovered: !0 } });
      },
      onPointerLeave() {
        o || t({ type: "CONTEXT.SET", context: { hovered: !1 } });
      },
      onPointerDown(i) {
        o || (c && i.preventDefault(), t({ type: "CONTEXT.SET", context: { active: !0 } }));
      },
      onPointerUp() {
        o || t({ type: "CONTEXT.SET", context: { active: !1 } });
      },
      onClick(i) {
        i.target === l.getHiddenInputEl(e.context) && i.stopPropagation();
      }
    }),
    labelProps: n.element({
      ...x.label.attrs,
      ...d,
      dir: e.context.dir,
      id: l.getLabelId(e.context)
    }),
    thumbProps: n.element({
      ...x.thumb.attrs,
      ...d,
      dir: e.context.dir,
      id: l.getThumbId(e.context),
      "aria-hidden": !0
    }),
    controlProps: n.element({
      ...x.control.attrs,
      ...d,
      dir: e.context.dir,
      id: l.getControlId(e.context),
      "aria-hidden": !0
    }),
    hiddenInputProps: n.input({
      id: l.getHiddenInputId(e.context),
      type: "checkbox",
      required: e.context.required,
      defaultChecked: h,
      disabled: o,
      "aria-labelledby": l.getLabelId(e.context),
      "aria-invalid": e.context.invalid,
      name: e.context.name,
      form: e.context.form,
      value: e.context.value,
      style: re,
      onChange(i) {
        const C = i.currentTarget.checked;
        t({ type: "CHECKED.SET", checked: C, isTrusted: !0 });
      },
      onBlur() {
        t({ type: "CONTEXT.SET", context: { focused: !1 } });
      },
      onFocus() {
        t({ type: "CONTEXT.SET", context: { focused: !0 } });
      },
      onKeyDown(i) {
        i.key === " " && t({ type: "CONTEXT.SET", context: { active: !0 } });
      },
      onKeyUp(i) {
        i.key === " " && t({ type: "CONTEXT.SET", context: { active: !1 } });
      }
    })
  };
}
var { not: z } = W;
function le(e) {
  const t = B(e);
  return Y(
    {
      id: "switch",
      initial: "ready",
      context: {
        checked: !1,
        label: "switch",
        value: "on",
        disabled: !1,
        ...t,
        fieldsetDisabled: !1
      },
      computed: {
        isDisabled: (n) => n.disabled || n.fieldsetDisabled
      },
      watch: {
        disabled: "removeFocusIfNeeded",
        checked: "syncInputElement"
      },
      activities: ["trackFormControlState"],
      on: {
        "CHECKED.TOGGLE": [
          {
            guard: z("isTrusted"),
            actions: ["toggleChecked", "dispatchChangeEvent"]
          },
          {
            actions: ["toggleChecked"]
          }
        ],
        "CHECKED.SET": [
          {
            guard: z("isTrusted"),
            actions: ["setChecked", "dispatchChangeEvent"]
          },
          {
            actions: ["setChecked"]
          }
        ],
        "CONTEXT.SET": {
          actions: ["setContext"]
        }
      },
      states: {
        ready: {}
      }
    },
    {
      guards: {
        isTrusted: (n, o) => !!o.isTrusted
      },
      activities: {
        trackFormControlState(n, o, { send: c, initialContext: h }) {
          return ae(l.getHiddenInputEl(n), {
            onFieldsetDisabledChange(d) {
              n.fieldsetDisabled = d;
            },
            onFormReset() {
              c({ type: "CHECKED.SET", checked: !!h.checked, src: "form-reset" });
            }
          });
        }
      },
      actions: {
        setContext(n, o) {
          Object.assign(n, o.context);
        },
        syncInputElement(n) {
          const o = l.getHiddenInputEl(n);
          o && (o.checked = !!n.checked);
        },
        removeFocusIfNeeded(n) {
          n.disabled && n.focused && (n.focused = !1);
        },
        setChecked(n, o) {
          H.checked(n, o.checked);
        },
        toggleChecked(n, o) {
          H.checked(n, !n.checked);
        },
        dispatchChangeEvent(n) {
          const o = l.getHiddenInputEl(n);
          ie(o, { checked: n.checked });
        }
      }
    }
  );
}
var de = {
  change: (e) => {
    var t;
    (t = e.onCheckedChange) == null || t.call(e, { checked: e.checked });
  }
}, H = {
  checked: (e, t) => {
    J(e.checked, t) || (e.checked = t, de.change(e));
  }
};
V()([
  "checked",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "label",
  "name",
  "onCheckedChange",
  "required",
  "value"
]);
const [he, E] = Q({
  hookName: "useSwitchContext",
  providerName: "<SwitchProvider />"
});
var ue = /* @__PURE__ */ m("<input>");
const pe = (e) => {
  const t = E(), n = k(() => t().controlProps, e);
  return [p(y.span, n), (() => {
    var o = ue();
    return F(o, N(() => t().hiddenInputProps), !1, !1), o;
  })()];
}, ge = (e) => {
  const t = E(), n = k(() => t().labelProps, e);
  return p(y.span, n);
}, me = (e) => {
  const t = Z(), n = k({ id: L(), getRootNode: t }, e), [o, c] = ee(le(n), { context: n });
  return b(() => se(o, c, te));
}, be = (e) => {
  const [t, n] = ne()(e, ["checked", "dir", "disabled", "form", "getRootNode", "id", "ids", "invalid", "label", "name", "onCheckedChange", "required", "value"]), o = me(t), c = k(() => o().rootProps, n), h = () => oe(e.children, o);
  return p(he, {
    value: o,
    get children() {
      return p(y.label, N(c, {
        get children() {
          return h();
        }
      }));
    }
  });
}, we = (e) => {
  const t = E(), n = k(() => t().thumbProps, e);
  return p(y.span, n);
}, ve = ".switch-component{--switch-width: var(--spacing-11);font-family:var(--font-family-inter)}.switch-component.switch-component-checked:not(.switch-component-disabled) .switch-label{color:var(--color-blue-700)}.switch-component.switch-component-disabled :where(.switch-label,.text-hint,.text-error){color:var(--color-gray-400)}:host(.dark) .switch-component.switch-component-checked:not(.switch-component-disabled) .switch-label{color:var(--color-blue-400)}:host(.dark) .switch-component.switch-component-disabled :where(label,.text-hint,.text-error,.switch-title){color:var(--color-gray-400)}.switch-component-error:not(.switch-component-disabled) :where(.switch-label,.switch-title),.switch-component-error:not(.switch-component-disabled):has(:focus,:active) .switch-label{color:var(--color-red-400)}.switch-component-error:not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-red-400)}:host(.dark) .switch-component-error:not(.switch-component-disabled) :where(.switch-label,.switch-title),:host(.dark) .switch-component-error:not(.switch-component-disabled):has(:focus,:active) .switch-label{color:var(--color-red-300)}:host(.dark) .switch-component-error:not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-red-300)}[data-part=root]{display:flex;align-items:flex-start;gap:var(--spacing-3)}.switch-component-reverse [data-part=root]{flex-direction:row-reverse;justify-content:flex-end}.switch-title{display:block;margin:0;margin-bottom:var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter)}.switch-label{color:var(--color-gray-800);font-weight:var(--font-weight-normal);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);cursor:pointer}.switch-component-sm .switch-label{font-size:var(--font-size-3-5);line-height:var(--font-size-5)}.text-hint,.text-error{margin-top:var(--spacing-3);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) .text-error{color:var(--color-red-300)}.switch{display:block;position:relative;width:var(--switch-width);height:var(--spacing-6);margin:0;margin-top:var(--spacing-0-5);border:0;border-radius:var(--radius-full);background-color:var(--color-gray-200);box-shadow:0 0 0 1px inset var(--color-gray-500);cursor:pointer;opacity:1}.switch[data-state=checked]{background-color:var(--color-blue-500);box-shadow:0 0 0 1px transparent}.switch-component-disabled .switch{background-color:var(--color-gray-100);box-shadow:0 0 0 1px transparent;cursor:not-allowed}.switch-thumb{display:block;position:absolute;top:50%;left:0;padding:var(--spacing-0-5);transform:translateY(-50%) translate(var(--spacing-1));border-radius:var(--radius-full);background-color:var(--color-white);box-shadow:0 1px 2px #1018280f,0 1px 3px #1018281a;color:var(--color-gray-800);font-size:var(--spacing-4);transition:transform .15s ease-in-out}.switch-thumb>*{opacity:0;transition:opacity .25s ease-in-out}.switch-component-checked .switch-thumb{transform:translateY(-50%) translate(calc(var(--switch-width) - var(--spacing-1) - 100%))}.switch-component-checked .switch-thumb>*{opacity:1}.switch-component:has(:where(:focus,:active)):not(.switch-component-disabled) .switch{box-shadow:0 0 0 1px inset var(--color-gray-900),0 0 0 1px var(--color-gray-900)}:host(.dark) .switch{background-color:var(--color-gray-400);box-shadow:0 0 0 1px inset var(--color-gray-300)}:host(.dark) .switch[data-state=checked]{background-color:var(--color-blue-400);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .switch-thumb{background-color:var(--color-gray-800);color:var(--color-white)}:host(.dark) .switch-component-disabled .switch{background-color:var(--color-gray-600);box-shadow:0 0 0 1px inset var(--color-gray-600)}:host(.dark) .switch-title{color:var(--color-white)}:host(.dark) .switch-component-disabled .switch-title{color:var(--color-gray-400)}:host(.dark) .switch-label{color:var(--color-white)}:host(.dark) .switch-component:has(:where(:focus,:active)):not(.switch-component-disabled) .switch{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color;box-shadow:0 0 0 1px inset var(--color-gray-50)}:host(.dark) .switch-component:has(:where(:focus,:active)) .switch-label{color:var(--color-blue-400)}";
var D = /* @__PURE__ */ m("<style>"), fe = /* @__PURE__ */ m("<solid-icon icon=mingcute-check-line>", !0, !1), ke = /* @__PURE__ */ m("<div class=switch-component>"), xe = /* @__PURE__ */ m("<p class=switch-title><slot name=title>"), ye = /* @__PURE__ */ m("<slot name=label>"), Ce = /* @__PURE__ */ m("<p class=text-error><slot name=error>"), Ee = /* @__PURE__ */ m("<p class=text-hint><slot name=hint>");
const Te = "solid-switch";
q(Te, u.object({
  id: u.string().optional(),
  name: u.string(),
  required: u.boolean().optional(),
  disabled: u.boolean().optional(),
  error: u.boolean().optional(),
  /**
   * Valeur initiale du switch
   */
  value: u.boolean().optional(),
  reverse: u.boolean().optional().default(!1),
  sm: u.boolean().optional().default(!1)
}), (e, {
  emit: t
}) => {
  let n;
  const o = X(), c = G(o), h = o.attachInternals(), d = L(), [i, C] = A(() => e.value), T = () => e.error && c.has("error"), O = () => !e.error && c.has("hint");
  return M(() => {
    h.setFormValue(i() ? "on" : null), t("change", i(), {
      bubbles: !1,
      composed: !1
    });
  }), [(() => {
    var a = D();
    return a.innerHTML = `/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
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
    var a = D();
    return w(a, ve), a;
  })(), (() => {
    var a = ke(), I = n;
    return typeof I == "function" ? K(I, a) : n = a, w(a, (() => {
      var r = b(() => !!c.has("title"));
      return () => r() && (() => {
        var s = xe(), g = s.firstChild;
        return g._$owner = v(), s;
      })();
    })(), null), w(a, p(be, {
      get checked() {
        return i();
      },
      onCheckedChange: (r) => C(r.checked),
      get disabled() {
        return e.disabled;
      },
      get required() {
        return e.required;
      },
      get name() {
        return e.name;
      },
      id: d,
      get children() {
        return [p(pe, {
          class: "switch",
          get children() {
            return p(we, {
              class: "switch-thumb",
              get children() {
                var r = fe();
                return r._$owner = v(), r;
              }
            });
          }
        }), b(() => b(() => !!c.has("label"))() && p(ge, {
          class: "switch-label",
          get children() {
            var r = ye();
            return r._$owner = v(), r;
          }
        }))];
      }
    }), null), w(a, (() => {
      var r = b(() => !!T());
      return () => r() && (() => {
        var s = Ce(), g = s.firstChild;
        return _(s, "id", `error-message-${d}`), g._$owner = v(), s;
      })();
    })(), null), w(a, (() => {
      var r = b(() => !!O());
      return () => r() && (() => {
        var s = Ee(), g = s.firstChild;
        return _(s, "id", `hint-message-${d}`), g._$owner = v(), s;
      })();
    })(), null), R((r) => {
      var s = !!T(), g = !!i(), $ = !!e.disabled, S = !!e.reverse, P = !!e.sm;
      return s !== r.e && a.classList.toggle("switch-component-error", r.e = s), g !== r.t && a.classList.toggle("switch-component-checked", r.t = g), $ !== r.a && a.classList.toggle("switch-component-disabled", r.a = $), S !== r.o && a.classList.toggle("switch-component-reverse", r.o = S), P !== r.i && a.classList.toggle("switch-component-sm", r.i = P), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), a;
  })()];
}, {
  formAssociated: !0
});
export {
  Te as TAG
};
