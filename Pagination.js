import { c as R, i as t, t as b } from "./utils-DyI0jAV8.js";
import { g as r, c as q, a as j, F as D } from "./R5675YMU-BY7cX9Th.js";
import { z as u } from "./theme.store-v2--qJ2X.js";
const J = ".pagination{display:flex;align-items:center;margin:0;padding:0;gap:var(--spacing-4);list-style:none}.pagination-item{flex-shrink:0}.pagination-item-prev{margin-right:auto}.pagination-item-next{margin-left:auto}.pagination-item-prev-desktop,.pagination-item-next-desktop{display:none}@media (min-width: 768px){.pagination-item-prev-desktop,.pagination-item-next-desktop{display:block}}@media (min-width: 768px){.pagination-item-prev-mobile,.pagination-item-next-mobile{display:none}}.pagination-ellipsis{display:flex;align-items:center;justify-content:center;width:var(--spacing-10);height:var(--spacing-10)}:host(.dark) .pagination-item{color:var(--color-white)}";
var B = /* @__PURE__ */ b("<style>"), K = /* @__PURE__ */ b('<ul class=pagination><li class="pagination-item pagination-item-prev pagination-item-prev-desktop"><solid-button as=a variant=link><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-left-line></solid-icon></solid-button></li><li class="pagination-item pagination-item-prev pagination-item-prev-mobile"><solid-button as=a variant=ghost><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-left-line></solid-icon><span class=sr-only></span></solid-button></li><li class="pagination-item pagination-item-next pagination-item-next-desktop"><solid-button as=a variant=link><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-right-line></solid-icon></solid-button></li><li class="pagination-item pagination-item-next pagination-item-next-mobile"><solid-button as=a variant=ghost><span class=sr-only></span><solid-icon iconsize=var(--spacing-6) icon=mingcute-arrow-right-line>', !0, !1), N = /* @__PURE__ */ b("<li class=pagination-item>"), Q = /* @__PURE__ */ b("<span class=pagination-ellipsis>"), U = /* @__PURE__ */ b("<solid-button as=a variant=pagination><span class=sr-only>page", !0, !1);
const E = "solid-pagination", V = u.object({
  href: u.string(),
  active: u.boolean().optional()
});
R(E, u.object({
  pages: u.array(V).refine((e) => e.some((y) => y.active), {
    message: `[${E}] At least one page must be active`
  }),
  nextLabel: u.string().optional(),
  prevLabel: u.string().optional()
}), (e) => {
  const A = () => e.pages.length > 6, F = () => {
    const i = e.pages.map((o, l) => ({
      ...o,
      label: l + 1
    }));
    return A() ? [...i.slice(0, 4), {
      label: "..."
    }, i[i.length - 1]] : i;
  }, f = () => {
    const i = e.pages.findIndex((o) => o.active);
    if (i !== -1)
      return e.pages[i + 1];
  }, v = () => {
    const i = e.pages.findIndex((o) => o.active);
    if (i !== -1)
      return e.pages[i - 1];
  };
  return [(() => {
    var i = B();
    return i.innerHTML = `/* layer: preflights */
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
      `, i;
  })(), (() => {
    var i = B();
    return t(i, J), i;
  })(), (() => {
    var i = K(), o = i.firstChild, l = o.firstChild, T = l.firstChild, k = o.nextSibling, d = k.firstChild, $ = d.firstChild, H = $.nextSibling, w = k.nextSibling, c = w.firstChild, _ = c.firstChild, M = w.nextSibling, p = M.firstChild, z = p.firstChild, O = z.nextSibling;
    return l._$owner = r(), T._$owner = r(), t(l, () => e.prevLabel, null), d.icononly = !0, d._$owner = r(), $._$owner = r(), t(H, () => e.prevLabel), t(i, q(D, {
      get each() {
        return F();
      },
      children: (n) => {
        const x = n.label === "...";
        return (() => {
          var g = N();
          return t(g, x ? (() => {
            var a = Q();
            return t(a, () => n.label), a;
          })() : (() => {
            var a = U();
            return a.firstChild, a._$owner = r(), t(a, () => n.label, null), j((s) => {
              var m = n == null ? void 0 : n.href, h = n.active ? "page" : void 0;
              return m !== s.e && (a.href = s.e = m), h !== s.t && (a.ariacurrent = s.t = h), s;
            }, {
              e: void 0,
              t: void 0
            }), a;
          })()), g;
        })();
      }
    }), w), c._$owner = r(), t(c, () => e.nextLabel, _), _._$owner = r(), p.icononly = !0, p._$owner = r(), t(z, () => e.nextLabel), O._$owner = r(), j((n) => {
      var S, G, P, I;
      var x = (S = v()) == null ? void 0 : S.href, g = !v(), a = (G = v()) == null ? void 0 : G.href, s = !v(), m = (P = f()) == null ? void 0 : P.href, h = !f(), C = (I = f()) == null ? void 0 : I.href, L = !f();
      return x !== n.e && (l.href = n.e = x), g !== n.t && (l.disabled = n.t = g), a !== n.a && (d.href = n.a = a), s !== n.o && (d.disabled = n.o = s), m !== n.i && (c.href = n.i = m), h !== n.n && (c.disabled = n.n = h), C !== n.s && (p.href = n.s = C), L !== n.h && (p.disabled = n.h = L), n;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0
    }), i;
  })()];
});
export {
  E as TAG
};
