import { b as g, c as b, t as u, g as h } from "./utils-DyI0jAV8.js";
import { z as m } from "./theme.store-v2--qJ2X.js";
import { C as f } from "./checkbox.store-UetgM6K8.js";
import { b as w, f as y, c as x, g as v, x as k } from "./R5675YMU-BY7cX9Th.js";
const z = `solid-table {
  & table {
    width: 100%;
    max-width: 100%;
    color: var(--color-gray-900);
    font-family: var(--font-family-inter);
  }

  & .table-responsive {
    width: 100%;
    overflow-x: auto;
  }

  & tr {
    border-bottom: 1px solid var(--color-gray-300);
  }

  & table,
  & th,
  & td {
    border: 0;
    border-collapse: collapse;
  }

  & th,
  & td {
    padding-inline: var(--spacing-6);
    padding-block: var(--spacing-3);
    text-align: left;
  }

  & th {
    background-color: var(--color-gray-50);
    color: var(--color-gray-800);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-3-5);
    line-height: var(--line-height-5);
  }

  & td {
    background-color: var(--color-white);
    color: var(--color-gray-800);
  }

  & :where(th, td)[data-checkbox-container]:first-child {
    /* taille d'une checkbox */
    width: var(--spacing-6);
    padding-right: 0;
  }
}

/* Le dark mode */
.dark solid-table {
  & tr {
    border-bottom: 1px solid var(--color-gray-500);
  }
  & th {
    background-color: var(--color-gray-700);
    color: var(--color-white);
  }
  & td {
    background-color: var(--color-gray-800);
    color: var(--color-white);
  }
}
`;
var S = /* @__PURE__ */ u("<style>"), E = /* @__PURE__ */ u("<slot>");
g.setOrUpdateStyles("table-styles", z);
const _ = "selected-rows-change";
b("solid-table", m.object({}), (A, {
  emit: l
}) => {
  const c = h(), [i, a] = w([]), d = () => Array.from(c.querySelectorAll("tr[data-row-id]")).map((n) => ({
    el: n,
    id: n.getAttribute("data-row-id")
  }));
  return y(k(i, () => {
    l(_, {
      selectedRows: i()
    });
  }, {
    defer: !0
  })), [(() => {
    var n = S();
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
  })(), x(f, {
    onChange: ({
      element: n,
      isChecked: t,
      isController: s
    }) => {
      if (s() && t()) {
        a(d().map((r) => r.id));
        return;
      }
      if (s() && !t()) {
        a([]);
        return;
      }
      const o = n.closest("tr[data-row-id]"), e = o == null ? void 0 : o.getAttribute("data-row-id");
      if (t() && e) {
        a((r) => [...r, e]);
        return;
      }
      if (!t() && e) {
        a((r) => r.filter((p) => p !== e));
        return;
      }
    },
    get children() {
      var n = E();
      return n._$owner = v(), n;
    }
  })];
});
export {
  _ as SELECTED_ROWS_CHANGE_EVENT
};
