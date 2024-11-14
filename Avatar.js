import { c as p, i, t as e, s as g } from "./utils-DyI0jAV8.js";
import { z as t } from "./theme.store-v2--qJ2X.js";
import { c as s, a as c, S as d } from "./R5675YMU-BY7cX9Th.js";
const h = ".avatar-container{width:7.625rem;height:7.625rem;border-radius:50%}.avatar-container-sm{width:var(--spacing-10);height:var(--spacing-10)}.avatar-container-md{width:var(--spacing-20);height:var(--spacing-20)}.avatar-container .avatar{width:100%;height:100%;object-fit:cover;border-radius:50%}";
var l = /* @__PURE__ */ e("<style>"), m = /* @__PURE__ */ e('<img class=avatar alt="">'), b = /* @__PURE__ */ e('<svg class=avatar viewBox="0 0 80 80"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path opacity=0.3 d="M40 8.66667C22.6884 8.66667 8.6667 22.6883 8.6667 40C8.6667 47.6375 11.4084 54.6092 15.9517 60.0533C22.8122 54.6707 31.2801 51.7453 40 51.7453C48.72 51.7453 57.1879 54.6707 64.0484 60.0533C68.7604 54.4342 71.34 47.3334 71.3334 40C71.3334 22.6883 57.3117 8.66667 40 8.66667ZM40 43.9167C32.4409 43.9167 26.2917 37.7675 26.2917 30.2083C26.2917 22.6492 32.4409 16.5 40 16.5C47.5592 16.5 53.7084 22.6492 53.7084 30.2083C53.7084 37.7675 47.5592 43.9167 40 43.9167Z"fill=#007AAD></path><path d="M40 0.833326C18.38 0.833326 0.833298 18.38 0.833298 40C0.833298 61.62 18.38 79.1667 40 79.1667C61.62 79.1667 79.1666 61.62 79.1666 40C79.1666 18.38 61.62 0.833326 40 0.833326ZM40 71.3333C33.185 71.3333 26.9183 69.14 21.7875 65.4583C26.9183 61.7767 33.185 59.5833 40 59.5833C46.815 59.5833 53.0816 61.7767 58.2125 65.4583C53.0816 69.14 46.815 71.3333 40 71.3333ZM64.0483 60.0533C57.1878 54.6707 48.72 51.7453 40 51.7453C31.28 51.7453 22.8121 54.6707 15.9516 60.0533C11.2396 54.4342 8.65997 47.3334 8.66663 40C8.66663 22.6883 22.6883 8.66666 40 8.66666C57.3116 8.66666 71.3333 22.6883 71.3333 40C71.3333 47.6375 68.5916 54.6092 64.0483 60.0533Z"fill=#007AAD></path><path d="M40 16.2258C32.4409 16.2258 26.2917 22.375 26.2917 29.9342C26.2917 37.4933 32.4409 43.6425 40 43.6425C47.5592 43.6425 53.7084 37.4933 53.7084 29.9342C53.7084 22.375 47.5592 16.2258 40 16.2258ZM40 35.8092C36.7492 35.8092 34.125 33.185 34.125 29.9342C34.125 26.6833 36.7492 24.0592 40 24.0592C43.2509 24.0592 45.875 26.6833 45.875 29.9342C45.875 33.185 43.2509 35.8092 40 35.8092Z"fill=#007AAD>'), f = /* @__PURE__ */ e("<div class=avatar-container>");
const v = "solid-avatar";
p(v, t.object({
  src: t.string().optional(),
  sm: t.boolean().optional().default(!1),
  md: t.boolean().optional().default(!1)
}), (r) => [(() => {
  var n = l();
  return n.innerHTML = `/* layer: preflights */
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
      `, n;
})(), (() => {
  var n = l();
  return i(n, h), n;
})(), (() => {
  var n = f();
  return i(n, s(d, {
    get when() {
      return r.src;
    },
    get children() {
      var a = m();
      return c(() => g(a, "src", r.src)), a;
    }
  }), null), i(n, s(d, {
    get when() {
      return !r.src;
    },
    get children() {
      return b();
    }
  }), null), c((a) => {
    var o = !!(r.sm && !r.md), u = !!r.md;
    return o !== a.e && n.classList.toggle("avatar-container-sm", a.e = o), u !== a.t && n.classList.toggle("avatar-container-md", a.t = u), a;
  }, {
    e: void 0,
    t: void 0
  }), n;
})()]);
export {
  v as TAG
};
