import { b as i, o as a } from "./R5675YMU-BY7cX9Th.js";
import { c as n } from "./theme.store-v2--qJ2X.js";
function f(o) {
  const [e, u] = i({});
  function s() {
    const t = Array.from(o.children).filter(
      (r) => r.slot !== ""
    );
    u(
      Object.fromEntries(t.map((r) => [r.slot, r]))
    );
  }
  return n(
    () => o,
    {
      attributes: !0,
      subtree: !0,
      childList: !0,
      attributeFilter: ["slot"]
    },
    (t) => s()
  ), a(() => {
    s();
  }), o && s(), {
    /**
     * Permet de tester si un slot existe
     */
    has(t) {
      return e()[t] !== void 0;
    },
    /**
     * Permet de récupérer l'élément d'un slot
     */
    get(t) {
      return e()[t];
    }
  };
}
export {
  f as u
};
