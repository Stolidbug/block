import { b as i, o as n, h as s } from "./R5675YMU-BY7cX9Th.js";
import { c as u } from "./focus-trap.esm-XjrVDimQ.js";
function l(r, a) {
  const [t, e] = i();
  function o() {
    e(
      u(r(), {
        ...a,
        tabbableOptions: {
          ...a == null ? void 0 : a.tabbableOptions,
          getShadowRoot: !0
        }
      })
    );
  }
  return r() ? o() : n(() => {
    if (!r())
      throw new Error("Element is not available");
    o();
  }), s(() => {
    var c;
    (c = t()) == null || c.deactivate(), e(void 0);
  }), t;
}
export {
  l as c
};
