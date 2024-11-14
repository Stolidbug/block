import { c as o, i as e, t as r, D as u } from "./utils-DyI0jAV8.js";
import { z as t } from "./theme.store-v2--qJ2X.js";
import { c as s, g as c } from "./R5675YMU-BY7cX9Th.js";
const l = ".navigation-item{display:flex;align-items:center;max-width:max-content;padding-inline:var(--spacing-3);padding-block:var(--spacing-2);gap:var(--spacing-1);border:none;border-radius:var(--radius-sm);background-color:transparent;color:var(--color-gray-900);font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5);line-height:var(--line-height-5);font-family:var(--font-family-inter);text-decoration:none}.navigation-item:not(.navigation-item-static){cursor:pointer}.navigation-item.navigation-item-active{background-color:var(--color-blue-100);color:var(--color-blue-700);font-weight:var(--font-weight-semibold)}.navigation-item:not(.navigation-item-active):not(.navigation-item-static):hover,.navigation-item:not(.navigation-item-active):not(.navigation-item-static):focus{background-color:var(--color-gray-100)}.navigation-item:not(.navigation-item-active):not(.navigation-item-static):active{background-color:var(--color-gray-200)}.navigation-item ::slotted(:where(solid-icon)){font-size:var(--font-size-5)}:host(.dark) .navigation-item{color:var(--color-white)}:host(.dark) .navigation-item.navigation-item-active{background-color:var(--color-blue-900);color:var(--color-blue-400)}:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):hover,:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):focus{background-color:var(--color-gray-800)}:host(.dark) .navigation-item:not(.navigation-item-active):not(.navigation-item-static):active{background-color:var(--color-gray-700)}";
var i = /* @__PURE__ */ r("<style>"), g = /* @__PURE__ */ r("<slot>");
const d = "solid-navigation-item";
o(d, t.object({
  /**
   * Si le composant est un bouton `button` ou un lien `a`
   */
  as: t.enum(["button", "a", "span"]).optional().default("a"),
  /**
   * URL de destination s'il s'agit d'un lien
   */
  href: t.string().optional(),
  target: t.string().optional(),
  active: t.boolean().optional().default(!1),
  arialabel: t.string().optional(),
  ariacurrent: t.string().optional().transform((n) => n)
}), (n) => [(() => {
  var a = i();
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
  var a = i();
  return e(a, l), a;
})(), s(u, {
  get component() {
    return n.as;
  },
  class: "navigation-item",
  get classList() {
    return {
      "navigation-item-active": n.active,
      // Pas d'effets de hover sur les éléments statiques
      "navigation-item-static": n.as === "span"
    };
  },
  get href() {
    return n.href;
  },
  get target() {
    return n.target;
  },
  get "aria-label"() {
    return n.arialabel;
  },
  get "aria-current"() {
    return n.ariacurrent;
  },
  get children() {
    var a = g();
    return a._$owner = c(), a;
  }
})]);
export {
  d as TAG
};
