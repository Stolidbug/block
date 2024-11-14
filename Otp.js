import { c as H, d as I, i as v, s as m, t as c, g as M, u as P } from "./utils-DyI0jAV8.js";
import { z as b } from "./theme.store-v2--qJ2X.js";
import { b as S, f as R, g as $, c as T, e as w, a as _, F as q, d as B } from "./R5675YMU-BY7cX9Th.js";
import { u as G } from "./useSlots-DRPN5bzQ.js";
const O = ".otp{margin:0;padding:0;border:0;font-family:var(--font-family-inter)}.otp legend{width:100%;padding:0;color:var(--color-gray-900);font-weight:var(--font-weight-semibold);font-size:var(--font-size-3-5)}.otp-error legend{color:var(--color-red-400)}:host(.dark) .otp legend{color:var(--color-white)}:host(.dark) .otp-error legend{color:var(--color-red-300)}.otp-fields{display:flex;justify-content:space-between;margin-block:var(--spacing-2);gap:var(--spacing-2)}.otp-input{width:var(--spacing-10);height:var(--spacing-10);padding:var(--spacing-2);border:0;border-radius:var(--radius-lg);outline:0;background-color:transparent;box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-blue-500);font-weight:var(--font-weight-semibold);font-size:var(--font-size-9);text-align:center;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}@media (width >= 768px){.otp-input{width:var(--spacing-14);height:var(--spacing-14)}}.otp-error .otp-input{box-shadow:0 0 0 1px inset var(--color-red-400);color:var(--color-red-400)}.otp-error .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-red-100);box-shadow:0 0 0 1px inset var(--color-red-400)}.otp .separator{align-self:center;width:var(--spacing-2);border:2px solid;border-radius:var(--radius-lg)}@media (width >= 768px){.otp .separator{width:var(--spacing-10);border:var(--spacing-1) solid var(--color-gray-300)}}:host(.dark) .otp .otp-input{color:var(--color-blue-400)}:host(.dark) .otp .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-blue-500)}:host(.dark) .otp-error .otp-input{box-shadow:0 0 0 1px inset var(--color-red-300);color:var(--color-red-300)}:host(.dark) .otp-error .otp-input:where(:focus,:active){outline:var(--spacing-1) solid var(--color-red-700);box-shadow:0 0 0 1px inset var(--color-red-300)}:host(.dark) .otp .separator{border-color:var(--color-gray-500)}.otp .text-hint,.otp .text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.otp .text-hint{color:var(--color-gray-500)}.otp .text-error{color:var(--color-red-700)}:host(.dark) .otp .text-hint{color:var(--color-gray-100)}:host(.dark) .otp-error .text-error{color:var(--color-red-300)}";
var j = /* @__PURE__ */ c("<style>"), U = /* @__PURE__ */ c("<fieldset class=otp><legend><slot name=legend></slot></legend><div class=otp-fields>"), J = /* @__PURE__ */ c("<input type=text class=otp-input maxlength=1 min=0 max=9>"), K = /* @__PURE__ */ c("<div class=separator>"), N = /* @__PURE__ */ c("<p class=text-hint><slot name=hint>"), Q = /* @__PURE__ */ c("<p class=text-error><slot name=error>");
const W = "solid-otp";
H(W, b.object({
  // Pour quand le composant est utilisé dans un formulaire
  name: b.string(),
  sm: b.boolean().optional().default(!1),
  error: b.boolean().optional().default(!1)
}), (D, {
  emit: z
}) => {
  const F = M().attachInternals(), g = B(), E = 6, u = Array.from({
    length: E
  }).map(() => {
    const [r, f] = S(""), [p, y] = S();
    return {
      value: r,
      setValue: (n) => {
        f(n), p() && (p().value = r());
      },
      ref: p,
      setRef: y
    };
  }), x = () => u.map((r) => r.value()).join("");
  R(() => {
    F.setFormValue(x()), z("change", x());
  });
  const C = G(M()), L = () => C.has("hint"), h = () => C.has("error"), A = /^\d$/;
  return [(() => {
    var r = j();
    return r.innerHTML = `/* layer: preflights */
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
      `, r;
  })(), (() => {
    var r = j();
    return v(r, O), r;
  })(), (() => {
    var r = U(), f = r.firstChild, p = f.firstChild, y = f.nextSibling;
    return p._$owner = $(), v(y, T(q, {
      each: u,
      children: ({
        value: n,
        setValue: t,
        setRef: i
      }, s) => [(() => {
        var l = J();
        return l.$$keyup = (e) => {
          var o, a;
          e.key === "Backspace" && (t(""), (a = (o = u[s() - 1]) == null ? void 0 : o.ref()) == null || a.focus());
        }, l.addEventListener("paste", (e) => {
          var d;
          e.preventDefault();
          const o = (d = e.clipboardData) == null ? void 0 : d.getData("text/plain"), a = o == null ? void 0 : o.split("");
          a && a.length > u.length || a != null && a.every((k) => A.test(k)) && u.forEach((k, V) => {
            k.setValue((a == null ? void 0 : a[V]) || "");
          });
        }), l.$$input = (e) => {
          var a, d;
          e.stopPropagation();
          const o = e.target;
          if (!A.test(o.value)) {
            t(n() || "");
            return;
          }
          t(o.value), o.value.length === 1 && ((d = (a = u[s() + 1]) == null ? void 0 : a.ref()) == null || d.focus()), s() === u.length - 1 && z("last-input", x());
        }, l.addEventListener("change", (e) => e.stopPropagation()), P((e) => i(e), l), _(() => m(l, "aria-label", `Chiffre ${s() + 1}`)), _(() => l.value = n()), l;
      })(), w(() => w(() => s() === E / 2 - 1)() && K())]
    })), v(r, (() => {
      var n = w(() => !!(L() && !h()));
      return () => n() && (() => {
        var t = N(), i = t.firstChild;
        return m(t, "id", `hint-message-${g}`), i._$owner = $(), t;
      })();
    })(), null), v(r, (() => {
      var n = w(() => !!h());
      return () => n() && (() => {
        var t = Q(), i = t.firstChild;
        return m(t, "id", `error-message-${g}`), i._$owner = $(), t;
      })();
    })(), null), _((n) => {
      var t = !!D.sm, i = !!h(), s = h() ? `error-message-${g}` : L() ? `hint-message-${g}` : void 0;
      return t !== n.e && r.classList.toggle("otp-sm", n.e = t), i !== n.t && r.classList.toggle("otp-error", n.t = i), s !== n.a && m(r, "aria-describedby", n.a = s), n;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), r;
  })()];
}, {
  formAssociated: !0
});
I(["input", "keyup"]);
export {
  W as TAG
};
