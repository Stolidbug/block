import { w as E, e as l, f as v, x as f, h as $ } from "./R5675YMU-BY7cX9Th.js";
import { m as h } from "./index-D6kvt-oB.js";
const L = (a) => {
  const T = E(() => a.children), o = l(() => T.toArray().find((n) => n instanceof HTMLElement)), d = l(() => a.trigger() ? o() : void 0), s = () => ({
    enterFrom: `${a.name}-enter-from`,
    enterTo: `${a.name}-enter-to`,
    leaveFrom: `${a.name}-leave-from`,
    leaveTo: `${a.name}-leave-to`
  });
  v(f(() => a.name, () => {
    const n = Object.values(s());
    $(() => {
      var t;
      (t = o()) == null || t.classList.remove(...n);
    });
  }));
  function u() {
    var e, r;
    const {
      leaveFrom: n,
      leaveTo: t,
      enterFrom: c,
      enterTo: i
    } = s();
    (e = o()) == null || e.classList.remove(n, t), (r = o()) == null || r.classList.add(c), setTimeout(() => {
      var m;
      (m = o()) == null || m.classList.add(i);
    }, 0);
  }
  function F() {
    var r;
    const {
      leaveFrom: n,
      leaveTo: t,
      enterFrom: c,
      enterTo: i
    } = s(), e = (r = o()) == null ? void 0 : r.classList;
    if (e == null || e.add(n, t), e == null || e.remove(i, c), o()) {
      const m = h(o(), "transitionend", () => {
        m(), e == null || e.remove(n, t);
      });
    }
  }
  return v(f(d, (n, t) => {
    n ? u() : t && F();
  })), l(o);
};
export {
  L as T
};
