function a(t, n, e) {
  if (!t)
    return;
  const o = t.ownerDocument.defaultView || window, r = new o.MutationObserver((s) => {
    for (const i of s)
      i.type === "attributes" && i.attributeName && n.includes(i.attributeName) && e(i);
  });
  return r.observe(t, { attributes: !0, attributeFilter: n }), () => r.disconnect();
}
var m = {
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}, c = (t) => t.ownerDocument.defaultView || window;
function u(t, n) {
  const { type: e = "HTMLInputElement", property: o = "value" } = n, r = c(t)[e].prototype;
  return Object.getOwnPropertyDescriptor(r, o) ?? {};
}
function v(t, n, e = {}) {
  var r;
  (r = u(t, e).set) == null || r.call(t, n);
}
function d(t, n) {
  var o;
  (o = u(t, { type: "HTMLInputElement", property: "checked" }).set) == null || o.call(t, n);
}
function h(t, n) {
  const { checked: e, bubbles: o = !0 } = n;
  if (!t)
    return;
  const r = c(t);
  t instanceof r.HTMLInputElement && (d(t, e), t.dispatchEvent(new r.Event("click", { bubbles: o })), t.dispatchEvent(new r.Event("change", { bubbles: o })));
}
function p(t) {
  return f(t) ? t.form : t.closest("form");
}
function f(t) {
  return t.matches("textarea, input, select, button");
}
function w(t, n) {
  if (!t)
    return;
  const e = p(t);
  return e == null || e.addEventListener("reset", n, { passive: !0 }), () => {
    e == null || e.removeEventListener("reset", n);
  };
}
function b(t, n) {
  const e = t == null ? void 0 : t.closest("fieldset");
  if (e)
    return n(e.disabled), a(e, ["disabled"], () => n(e.disabled));
}
function l(t, n) {
  if (!t)
    return;
  const { onFieldsetDisabledChange: e, onFormReset: o } = n, r = [w(t, o), b(t, e)];
  return () => {
    r.forEach((s) => s == null ? void 0 : s());
  };
}
export {
  h as d,
  a as o,
  v as s,
  l as t,
  m as v
};
