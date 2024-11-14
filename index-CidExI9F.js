import { c as o, A as c, z as a } from "./R5675YMU-BY7cX9Th.js";
function u(r, n) {
  const e = a(n);
  return [
    (t) => o(e.Provider, {
      value: r(t),
      get children() {
        return t.children;
      }
    }),
    () => c(e)
  ];
}
export {
  u as c
};
