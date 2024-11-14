import { c as d } from "./index-CidExI9F.js";
const [k, b] = d((r) => {
  const c = {}, n = () => Object.values(c).filter(({ isController: e }) => !e()), o = () => Object.values(c).find(({ isController: e }) => e());
  function l() {
    n().forEach((e) => {
      e.setChecked(!0);
    });
  }
  function h() {
    n().forEach((e) => {
      e.setChecked(!1);
    });
  }
  function s() {
    var e;
    (e = o()) == null || e.setChecked(!1);
  }
  function u() {
    var t;
    n().every(
      ({ isChecked: i }) => i() === !0
    ) && ((t = o()) == null || t.setChecked(!0));
  }
  function C(e, t) {
    c[e] = t;
  }
  function a(e) {
    delete c[e];
  }
  return {
    uncheckAllSubjects: h,
    checkAllSubjects: l,
    uncheckController: s,
    maybeCheckController: u,
    attach: C,
    detach: a,
    onChange: r.onChange
  };
});
export {
  k as C,
  b as u
};
