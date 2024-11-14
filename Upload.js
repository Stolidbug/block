import { c as K, d as N, i as c, t as f, g as O, u as P, s as d } from "./utils-DyI0jAV8.js";
import { z as g } from "./theme.store-v2--qJ2X.js";
import { b as Q, o as W, e as S, g as p, c as R, a as E, F as X, S as Y, d as Z } from "./R5675YMU-BY7cX9Th.js";
import { u as nn } from "./useSlots-DRPN5bzQ.js";
const en = ".upload-component{--anim-duration: .3s;--anim-timing: ease-in-out;font-family:var(--font-family-inter)}.upload-title{margin-block:0 var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);transition:var(--anim-duration) var(--anim-timing);transition-property:color}.upload-component-error .upload-title{color:var(--color-red-400)}:host(.dark) .upload-title{color:var(--color-white)}:host(.dark) .upload-component-error .upload-title{color:var(--color-red-300)}.text-hint,.text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .text-hint{color:var(--color-white)}:host(.dark) .text-error{color:var(--color-red-300)}.upload-files{margin-top:var(--spacing-3)}.upload-files-list{display:flex;flex-wrap:wrap;align-items:center;margin:0;padding:0;gap:var(--spacing-2);list-style-type:none}";
var U = /* @__PURE__ */ f("<style>"), rn = /* @__PURE__ */ f("<div class=upload-files><span class=sr-only>Fichiers choisis</span><ul class=upload-files-list>"), tn = /* @__PURE__ */ f("<div class=upload-component tabindex=-1><div class=upload-container><solid-button as=label variant=primary><span>Choisir un fichier</span><solid-icon icon=mingcute-upload-2-line iconsize=var(--spacing-6)></solid-icon><input type=file class=sr-only>", !0, !1), an = /* @__PURE__ */ f("<p class=upload-title><slot name=title>"), on = /* @__PURE__ */ f("<li><solid-tag><span class=sr-only>Supprimer le fichier</span><solid-icon icon=mingcute-close-line>", !0, !1), ln = /* @__PURE__ */ f("<p class=text-error><slot name=error>"), sn = /* @__PURE__ */ f("<p class=text-hint><slot name=hint>");
const un = "solid-upload";
K(un, g.object({
  accept: g.string(),
  error: g.boolean().optional().default(!1),
  name: g.string(),
  required: g.boolean().optional().default(!1),
  multiple: g.boolean().optional().default(!1)
}), (u) => {
  const F = O(), A = F.attachInternals(), [m, $] = Q([]), k = Z(), w = () => `file-field-${k}`, I = () => `error-${k}`, q = () => `hint-${k}`, _ = nn(O()), z = () => _.has("error") && u.error, M = () => _.has("hint") && !u.error;
  let a, y;
  function V() {
    const e = new DataTransfer();
    m().forEach((t) => {
      e.items.add(t);
    }), a && (a.files = e.files);
    const i = new FormData();
    m().forEach((t) => {
      i.append(u.name, t);
    }), A.setFormValue(i);
  }
  function C() {
    a && y && A.setValidity(a.validity, a.validationMessage, y);
  }
  function B({
    target: e
  }) {
    const i = e.files ?? [];
    u.multiple ? $([...m(), ...Array.from(i)]) : $(Array.from(i)), V(), C();
  }
  function J(e) {
    $((i) => i.filter((t) => t !== e)), V(), C();
  }
  return W(() => {
    F.setAttribute("tabindex", "-1"), C();
  }), [(() => {
    var e = U();
    return e.innerHTML = `/* layer: preflights */
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
    var e = U();
    return c(e, en), e;
  })(), (() => {
    var e = tn(), i = e.firstChild, t = i.firstChild, D = t.firstChild, L = D.nextSibling, l = L.nextSibling, T = y;
    typeof T == "function" ? P(T, e) : y = e, c(i, (() => {
      var n = S(() => !!_.has("title"));
      return () => n() && (() => {
        var r = an(), o = r.firstChild;
        return o._$owner = p(), r;
      })();
    })(), t), t.$$click = (n) => {
      const [r] = n.composedPath();
      r != null && r.matches("input") || (n.preventDefault(), a == null || a.click());
    }, t._$owner = p(), L._$owner = p();
    var H = a;
    return typeof H == "function" ? P(H, l) : a = l, l.addEventListener("change", B), c(e, R(Y, {
      get when() {
        return m().length;
      },
      get children() {
        var n = rn(), r = n.firstChild, o = r.nextSibling;
        return c(o, R(X, {
          get each() {
            return m();
          },
          children: (h) => (() => {
            var v = on(), s = v.firstChild, x = s.firstChild, b = x.nextSibling;
            return s.$$click = () => J(h), s.interactive = !0, s._$owner = p(), c(s, () => h.name, b), b._$owner = p(), v;
          })()
        })), n;
      }
    }), null), c(e, (() => {
      var n = S(() => !!z());
      return () => n() && (() => {
        var r = ln(), o = r.firstChild;
        return o._$owner = p(), E(() => d(r, "id", I())), r;
      })();
    })(), null), c(e, (() => {
      var n = S(() => !!M());
      return () => n() && (() => {
        var r = sn(), o = r.firstChild;
        return o._$owner = p(), E(() => d(r, "id", q())), r;
      })();
    })(), null), E((n) => {
      var r = !!z(), o = w(), h = `label-${w()}`, v = w(), s = `label-${w()}`, x = u.accept, b = u.required, j = u.multiple, G = z() ? I() : M() ? q() : void 0;
      return r !== n.e && e.classList.toggle("upload-component-error", n.e = r), o !== n.t && (t.for = n.t = o), h !== n.a && d(D, "id", n.a = h), v !== n.o && d(l, "id", n.o = v), s !== n.i && d(l, "aria-labelledby", n.i = s), x !== n.n && d(l, "accept", n.n = x), b !== n.s && (l.required = n.s = b), j !== n.h && (l.multiple = n.h = j), G !== n.r && d(l, "aria-describedby", n.r = G), n;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0,
      r: void 0
    }), e;
  })()];
}, {
  formAssociated: !0
});
N(["click"]);
export {
  un as TAG
};
