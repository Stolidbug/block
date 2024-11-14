import { c as L, i as l, t as c, g as y, D as M, s as m, u as T } from "./utils-DyI0jAV8.js";
import { z as I, f as P, c as k, e as u, g as d, a as $, y as S, d as D } from "./R5675YMU-BY7cX9Th.js";
import { u as H } from "./useSlots-DRPN5bzQ.js";
import { c as V } from "./index-BZKcI3Xu.js";
import { z as o } from "./theme.store-v2--qJ2X.js";
import "./Button.js";
const j = ".text-input-component{font-family:var(--font-family-inter)}.text-input-component:has(:focus,:active):not(:has(:disabled)) label{color:var(--color-blue-700)}.text-input-component:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-400)}:host(.dark) .text-input-component:has(:focus,:active):not(:has(:disabled)) label{color:var(--color-blue-400)}:host(.dark) .text-input-component:has(:disabled) :where(label,.text-hint,.text-error){color:var(--color-gray-500)}:host(.dark) .text-input-component{color:var(--color-white)}:host(.dark) .text-input-component:has(:disabled){color:var(--color-gray-500)}.text-input-component-error:not(:has(:disabled)) :where(label,.text-input),.text-input-component-error:not(:has(:disabled)):has(:focus,:active) label,.text-input-component-error:not(:has(:disabled)) :where(.icon-left,.icon-right){color:var(--color-red-400)}.text-input-component-error:not(:has(:disabled)):has(:focus,:active) .text-input{outline:var(--spacing-1) solid var(--color-red-100);box-shadow:0 0 0 1px inset var(--color-red-400)}:host(.dark) .text-input-component-error:not(:has(:disabled)) :where(label,.text-input),:host(.dark) .text-input-component-error:not(:has(:disabled)):has(:focus,:active) label,:host(.dark) .text-input-component-error:not(:has(:disabled)) :where(.icon-left,.icon-right){color:var(--color-red-300)}:host(.dark) .text-input-component-error:not(:has(:disabled)) .text-input{box-shadow:0 0 0 1px inset var(--color-red-300)}:host(.dark) .text-input-component-error:not(:has(:disabled)):has(:focus,:active) .text-input{outline:var(--spacing-1) solid var(--color-red-700);color:var(--color-red-300)}.text-input-container:where(.has-icon-left,.has-icon-right){position:relative;font-size:var(--spacing-5)}.text-input-container:where(.has-icon-left,.has-icon-right) :where(.icon-left,.icon-right){position:absolute;top:var(--spacing-3)}.text-input-container:where(.has-icon-left,.has-icon-right) .icon-left{left:var(--spacing-3)}.text-input-container:where(.has-icon-left,.has-icon-right) .icon-right{right:var(--spacing-3)}.text-input-label{display:block;margin-bottom:var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);transition:var(--anim-duration) var(--anim-timing);transition-property:color}.text-hint,.text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-input-label{color:var(--color-white)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) .text-error{color:var(--color-red-300)}.text-input{--anim-duration: .3s;--anim-timing: ease-in-out;width:100%;max-width:100%;padding:var(--spacing-3);border:0;border-radius:var(--radius-lg);outline:0;background-color:var(--color-white);box-shadow:0 0 0 1px inset var(--color-gray-500);color:inherit;font-size:var(--font-size-4);line-height:inherit;font-family:inherit;letter-spacing:inherit;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.has-icon-left>.text-input{padding-left:var(--spacing-10)}.has-icon-right>.text-input{padding-right:var(--spacing-10)}.text-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}.text-input:disabled{outline:0;background-color:var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400)}.text-input.is-textarea{padding-inline:var(--spacing-3);resize:none}:host(.dark) .text-input{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-white)}:host(.dark) .text-input:where(:hover){box-shadow:0 0 0 1px inset var(--color-gray-500)}:host(.dark) .text-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .text-input:disabled{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-gray-500)}";
var _ = /* @__PURE__ */ c("<style>"), q = /* @__PURE__ */ c("<div class=text-input-component><div class=text-input-container>"), F = /* @__PURE__ */ c("<label class=text-input-label><slot name=label>"), G = /* @__PURE__ */ c("<span class=icon-left><slot name=icon-left>"), N = /* @__PURE__ */ c("<span class=icon-right><slot name=icon-right>"), O = /* @__PURE__ */ c("<p class=text-error><slot name=error>"), R = /* @__PURE__ */ c("<p class=text-hint><slot name=hint>");
const U = I({
  error: () => !1
}), W = "solid-text-input";
L(W, o.object({
  value: o.union([o.string(), o.number()]).transform((n) => String(n)).default(""),
  disabled: o.boolean().optional(),
  placeholder: o.string().optional(),
  id: o.string(),
  error: o.boolean().optional().default(!1),
  type: o.enum(["email", "text", "password", "number", "tel", "url", "textarea"]),
  name: o.string()
}).catchall(o.unknown()), (n) => {
  const g = y(), z = g.getAttributeNames().reduce((e, i) => (i in n || (e[i] = g.getAttribute(i)), e), {}), C = g.attachInternals();
  let x;
  const [b, A] = V(() => n.value || ""), s = H(y()), h = D(), p = () => n.error && s.has("error"), v = () => !n.error && s.has("hint");
  P(() => {
    C.setFormValue(b());
  });
  const E = () => n.type === "textarea" ? "textarea" : "input";
  return [(() => {
    var e = _();
    return e.innerHTML = `/* layer: preflights */
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
      `, e;
  })(), (() => {
    var e = _();
    return l(e, j), e;
  })(), k(U.Provider, {
    value: {
      error: () => n.error
    },
    get children() {
      var e = q(), i = e.firstChild, f = x;
      return typeof f == "function" ? T(f, e) : x = e, l(e, (() => {
        var r = u(() => !!(n.id && s.has("label")));
        return () => r() && (() => {
          var t = F(), a = t.firstChild;
          return a._$owner = d(), $(() => m(t, "for", n.id)), t;
        })();
      })(), i), l(i, (() => {
        var r = u(() => !!(s.has("icon-left") && n.type !== "textarea"));
        return () => r() && (() => {
          var t = G(), a = t.firstChild;
          return a._$owner = d(), t;
        })();
      })(), null), l(i, k(M, S({
        get component() {
          return E();
        },
        get type() {
          return n.type === "textarea" ? void 0 : n.type;
        },
        get id() {
          return n.id;
        },
        class: "text-input",
        get classList() {
          return {
            "is-textarea": n.type === "textarea"
          };
        },
        get value() {
          return b();
        },
        get name() {
          return n.name;
        },
        onInput: (r) => A(r.currentTarget.value),
        get disabled() {
          return n.disabled;
        },
        get placeholder() {
          return n.placeholder;
        },
        get "aria-describedby"() {
          return u(() => !!v())() ? `hint-message-${h}` : p() ? `error-message-${h}` : void 0;
        },
        get "aria-invalid"() {
          return p();
        }
      }, z)), null), l(i, (() => {
        var r = u(() => !!(s.has("icon-right") && n.type !== "textarea"));
        return () => r() && (() => {
          var t = N(), a = t.firstChild;
          return a._$owner = d(), t;
        })();
      })(), null), l(e, (() => {
        var r = u(() => !!p());
        return () => r() && (() => {
          var t = O(), a = t.firstChild;
          return m(t, "id", `error-message-${h}`), a._$owner = d(), t;
        })();
      })(), null), l(e, (() => {
        var r = u(() => !!v());
        return () => r() && (() => {
          var t = R(), a = t.firstChild;
          return m(t, "id", `hint-message-${h}`), a._$owner = d(), t;
        })();
      })(), null), $((r) => {
        var t = !!p(), a = !!s.has("icon-left"), w = !!s.has("icon-right");
        return t !== r.e && e.classList.toggle("text-input-component-error", r.e = t), a !== r.t && i.classList.toggle("has-icon-left", r.t = a), w !== r.a && i.classList.toggle("has-icon-right", r.a = w), r;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      }), e;
    }
  })];
}, {
  formAssociated: !0
});
export {
  W as TAG,
  U as TextInputContext
};
