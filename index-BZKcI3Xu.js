import { b as l, e as r, u as m, G as p } from "./R5675YMU-BY7cX9Th.js";
var u = (e, t) => e.length > 0 ? () => e(m(t)) : e;
function S(e, t) {
  let n = 0;
  const a = e.map(
    (o, c) => r(
      () => (n = c, o()),
      void 0,
      p
    )
  );
  return r(() => a.map((o) => o())[n], void 0, t);
}
function d(e, t, n) {
  let a = () => t;
  const [o, c] = l(t), s = r(
    u(e, () => a()),
    t
  );
  return [
    a = S([o, s], n),
    (i) => c(
      () => typeof i == "function" ? i(m(a)) : i
    )
  ];
}
export {
  d as c
};
