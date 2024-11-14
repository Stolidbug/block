import { c as A, d as F, i as g, s as i, t as d, g as C } from "./utils-DyI0jAV8.js";
import { e as m, b as L, f as R, c as E, g as f, a as p, S as H, F as I, d as O } from "./R5675YMU-BY7cX9Th.js";
import { u as T } from "./useSlots-DRPN5bzQ.js";
import { z as t } from "./theme.store-v2--qJ2X.js";
const V = ".radio-component{display:grid;gap:var(--spacing-3)}.radio-component-inline{grid-template-columns:repeat(3,auto);justify-content:start}.radio-component-inline :where(.text-hint,.text-error){grid-column:1 / -1}.radio-component-error:not(:has(:disabled)) :where(label),.radio-component-error:not(:has(:disabled)):has(:focus,:active) label{color:var(--color-red-400)}.radio-component-error:not(:has(:disabled)) .radio{border-color:var(--color-red-400)}:host(.dark) .radio-component-error:not(:has(:disabled)) :where(label),:host(.dark) .radio-component-error:not(:has(:disabled)):has(:focus,:active) label{color:var(--color-red-300)}:host(.dark) .radio-component-error:not(:has(:disabled)) .radio{border-color:var(--color-red-300)}.radio-container{display:grid;grid-auto-flow:column;justify-content:start;gap:var(--spacing-2)}.radio-container:has(:checked):not(:has(:disabled)) label{color:var(--color-blue-700)}.radio-container:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-400)}:host(.dark) .radio-container:has(:checked):not(:has(:disabled)) label{color:var(--color-blue-400)}:host(.dark) .radio-container:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-400)}.radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:var(--spacing-6);height:var(--spacing-6);margin:0;border:1px solid var(--color-gray-500);border-radius:var(--radius-full);background-color:var(--color-white);cursor:pointer;transition:.2s;transition-property:box-shadow}.radio:hover{background-color:var(--color-blue-100)}.radio:is(:focus,:active,:checked){border-color:var(--color-blue-500);background-color:var(--color-blue-100)}.radio:checked{background-color:var(--color-blue-500);box-shadow:var(--color-blue-100) 0 0 0 var(--spacing-1) inset}.radio:disabled{border-color:var(--color-gray-300);background-color:var(--color-gray-100);color:var(--color-gray-300);cursor:not-allowed}.radio-component-title{margin:0;margin-bottom:var(--spacing-3);color:var(--color-gray-900);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter)}:host(.dark) .radio{border-color:var(--color-gray-300);background-color:var(--color-gray-900)}:host(.dark) .radio:hover{background-color:var(--color-gray-700)}:host(.dark) .radio:where(:focus,:active,:checked){border-color:var(--color-blue-400);background-color:var(--color-gray-700)}:host(.dark) .radio:checked{background-color:var(--color-blue-400);box-shadow:var(--color-gray-700) 0 0 0 var(--spacing-1) inset}:host(.dark) .radio:disabled{border-color:var(--color-gray-500);background-color:var(--color-gray-700);color:var(--color-gray-500)}:host(.dark) .radio:where(:focus,:active)+label{color:var(--color-blue-400)}:host(.dark) .radio-component-title{color:var(--color-white)}.radio-label{max-width:266px;color:var(--color-gray-800);font-weight:var(--font-weight-normal);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);cursor:pointer}.text-hint,.text-error{margin-top:0;margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5);font-family:var(--font-family-inter)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .radio-label{color:var(--color-white)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) .text-error{color:var(--color-red-300)}";
var S = /* @__PURE__ */ d("<style>"), q = /* @__PURE__ */ d("<p class=radio-component-title><slot name=title>"), G = /* @__PURE__ */ d("<div class=radio-component role=radiogroup>"), U = /* @__PURE__ */ d("<div class=radio-container><input type=radio class=radio><label class=radio-label>"), B = /* @__PURE__ */ d("<p class=text-error><slot name=error>"), D = /* @__PURE__ */ d("<p class=text-hint><slot name=hint>");
const J = "solid-radio-group";
A(J, t.object({
  name: t.string(),
  error: t.boolean().optional(),
  inline: t.boolean().optional().default(!1),
  radios: t.array(t.object({
    value: t.string(),
    label: t.string(),
    defaultChecked: t.boolean().optional().default(!1),
    disabled: t.boolean().optional().default(!1)
  }))
}), (s, {
  emit: j
}) => {
  const w = C(), M = w.attachInternals(), h = T(C()), l = O(), b = () => s.error && h.has("error"), y = () => !s.error && h.has("hint"), k = m(() => s.radios.find((o) => o.defaultChecked)), [v, x] = L(k() ? k().value : void 0);
  return Object.assign(w, {
    setRadio(o) {
      x(o);
    }
  }), R(() => {
    j("value-change", v(), {
      bubbles: !1,
      composed: !1
    }), v() !== void 0 && M.setFormValue(v());
  }), [(() => {
    var o = S();
    return o.innerHTML = `/* layer: preflights */
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
      `, o;
  })(), (() => {
    var o = S();
    return g(o, V), o;
  })(), E(H, {
    get when() {
      return h.has("title");
    },
    get children() {
      var o = q(), r = o.firstChild;
      return i(o, "id", `radio-component-title-${l}`), r._$owner = f(), o;
    }
  }), (() => {
    var o = G();
    return g(o, E(I, {
      get each() {
        return s.radios;
      },
      children: (r) => (() => {
        var n = U(), a = n.firstChild, c = a.nextSibling;
        return a.$$input = () => x(r.value), g(c, () => r.label), p((e) => {
          var u = `radio-${l}${r.value}`, $ = s.name, z = r.disabled, _ = `radio-${l}${r.value}`;
          return u !== e.e && i(a, "id", e.e = u), $ !== e.t && i(a, "name", e.t = $), z !== e.a && (a.disabled = e.a = z), _ !== e.o && i(c, "for", e.o = _), e;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        }), p(() => a.value = r.value), p(() => a.checked = v() === r.value), n;
      })()
    }), null), g(o, (() => {
      var r = m(() => !!b());
      return () => r() && (() => {
        var n = B(), a = n.firstChild;
        return i(n, "id", `error-message-${l}`), a._$owner = f(), n;
      })();
    })(), null), g(o, (() => {
      var r = m(() => !!y());
      return () => r() && (() => {
        var n = D(), a = n.firstChild;
        return i(n, "id", `hint-message-${l}`), a._$owner = f(), n;
      })();
    })(), null), p((r) => {
      var n = !!b(), a = !!s.inline, c = h.has("title") ? `radio-component-title-${l}` : void 0, e = y() ? `hint-message-${l}` : b() ? `error-message-${l}` : void 0, u = b();
      return n !== r.e && o.classList.toggle("radio-component-error", r.e = n), a !== r.t && o.classList.toggle("radio-component-inline", r.t = a), c !== r.a && i(o, "aria-labelledby", r.a = c), e !== r.o && i(o, "aria-describedby", r.o = e), u !== r.i && i(o, "aria-invalid", r.i = u), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), o;
  })()];
}, {
  formAssociated: !0
});
F(["input"]);
export {
  J as TAG
};
