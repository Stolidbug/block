import { r as F, i as R, c as B, a as $, d as M, b as G, e as _, f as W, g as N, n as K, h as U, m as v, j as C, u as H, k as V, l as j, o as X, p as q } from "./environment-context-0t-z-DDy.js";
import { c as m, S as D, d as J, e as Y } from "./R5675YMU-BY7cX9Th.js";
import { g as Q, a as Z, b as L, t as z, p as x, u as S, s as ee, c as te, P as oe } from "./index-yNlxUwnF.js";
import { c as ne } from "./focus-trap.esm-XjrVDimQ.js";
var h = /* @__PURE__ */ new WeakMap(), E = [];
function re(e, o = {}) {
  const { rootEl: t } = o, n = e.filter(Boolean);
  if (n.length === 0)
    return;
  const i = n[0].ownerDocument || document, s = i.defaultView ?? window, a = new Set(n), l = /* @__PURE__ */ new Set(), u = t ?? i.body;
  let I = (d) => {
    for (let g of d.querySelectorAll("[data-live-announcer], [data-zag-top-layer]"))
      a.add(g);
    let c = (g) => {
      if (a.has(g) || l.has(g.parentElement) && g.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let A of a)
        if (g.contains(A))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, p = i.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, { acceptNode: c }), y = c(d);
    if (y === NodeFilter.FILTER_ACCEPT && b(d), y !== NodeFilter.FILTER_REJECT) {
      let g = p.nextNode();
      for (; g != null; )
        b(g), g = p.nextNode();
    }
  }, b = (d) => {
    let c = h.get(d) ?? 0;
    d.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && d.setAttribute("aria-hidden", "true"), l.add(d), h.set(d, c + 1));
  };
  E.length && E[E.length - 1].disconnect(), I(u);
  const O = new s.MutationObserver((d) => {
    for (let c of d)
      if (!(c.type !== "childList" || c.addedNodes.length === 0) && ![...a, ...l].some((p) => p.contains(c.target))) {
        for (let p of c.removedNodes)
          p instanceof s.Element && (a.delete(p), l.delete(p));
        for (let p of c.addedNodes)
          (p instanceof s.HTMLElement || p instanceof s.SVGElement) && (p.dataset.liveAnnouncer === "true" || p.dataset.zagTopLayer === "true") ? a.add(p) : p instanceof s.Element && I(p);
      }
  });
  O.observe(u, { childList: !0, subtree: !0 });
  let f = {
    observe() {
      O.observe(u, { childList: !0, subtree: !0 });
    },
    disconnect() {
      O.disconnect();
    }
  };
  return E.push(f), () => {
    O.disconnect();
    for (let d of l) {
      let c = h.get(d);
      c === 1 ? (d.removeAttribute("aria-hidden"), h.delete(d)) : h.set(d, c - 1);
    }
    f === E[E.length - 1] ? (E.pop(), E.length && E[E.length - 1].observe()) : E.splice(E.indexOf(f), 1);
  };
}
function ie(e, o = {}) {
  const { defer: t } = o, n = t ? F : (s) => s(), i = [];
  return i.push(
    n(() => {
      const s = typeof e == "function" ? e() : e;
      i.push(re(s, o));
    })
  ), () => {
    i.forEach((s) => s == null ? void 0 : s());
  };
}
var w = "data-zag-scroll-lock";
function k(e, o) {
  if (!e)
    return;
  const t = e.style.cssText;
  return Object.assign(e.style, o), () => {
    e.style.cssText = t;
  };
}
function se(e, o, t) {
  if (!e)
    return;
  const n = e.style.getPropertyValue(o);
  return e.style.setProperty(o, t), () => {
    n ? e.style.setProperty(o, n) : e.style.removeProperty(o);
  };
}
function le(e) {
  const o = e.getBoundingClientRect().left;
  return Math.round(o) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ce(e) {
  const o = e ?? document, t = o.defaultView ?? window, { documentElement: n, body: i } = o;
  if (i.hasAttribute(w))
    return;
  i.setAttribute(w, "");
  const a = t.innerWidth - n.clientWidth, l = () => se(n, "--scrollbar-width", `${a}px`), u = le(n), I = () => k(i, {
    overflow: "hidden",
    [u]: `${a}px`
  }), b = () => {
    const { scrollX: f, scrollY: d, visualViewport: c } = t, p = (c == null ? void 0 : c.offsetLeft) ?? 0, y = (c == null ? void 0 : c.offsetTop) ?? 0, g = k(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(d - Math.floor(y))}px`,
      left: `${-(f - Math.floor(p))}px`,
      right: "0",
      [u]: `${a}px`
    });
    return () => {
      g == null || g(), t.scrollTo({ left: f, top: d, behavior: "instant" });
    };
  }, O = [l(), R() ? b() : I()];
  return () => {
    O.forEach((f) => f == null ? void 0 : f()), i.removeAttribute(w);
  };
}
var ae = B("popover").parts(
  "arrow",
  "arrowTip",
  "anchor",
  "trigger",
  "indicator",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger"
), P = ae.build(), r = $({
  getActiveEl: (e) => r.getDoc(e).activeElement,
  getAnchorId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.anchor) ?? `popover:${e.id}:anchor`;
  },
  getTriggerId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.trigger) ?? `popover:${e.id}:trigger`;
  },
  getContentId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.content) ?? `popover:${e.id}:content`;
  },
  getPositionerId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.positioner) ?? `popover:${e.id}:popper`;
  },
  getArrowId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.arrow) ?? `popover:${e.id}:arrow`;
  },
  getTitleId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.title) ?? `popover:${e.id}:title`;
  },
  getDescriptionId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.description) ?? `popover:${e.id}:desc`;
  },
  getCloseTriggerId: (e) => {
    var o;
    return ((o = e.ids) == null ? void 0 : o.closeTrigger) ?? `popover:${e.id}:close`;
  },
  getAnchorEl: (e) => r.getById(e, r.getAnchorId(e)),
  getTriggerEl: (e) => r.getById(e, r.getTriggerId(e)),
  getContentEl: (e) => r.getById(e, r.getContentId(e)),
  getPositionerEl: (e) => r.getById(e, r.getPositionerId(e)),
  getTitleEl: (e) => r.getById(e, r.getTitleId(e)),
  getDescriptionEl: (e) => r.getById(e, r.getDescriptionId(e)),
  getFocusableEls: (e) => Z(r.getContentEl(e)),
  getFirstFocusableEl: (e) => r.getFocusableEls(e)[0],
  getInitialFocusEl: (e) => {
    let o = N(e.initialFocusEl);
    return !o && e.autoFocus && (o = r.getFirstFocusableEl(e)), o || (o = r.getContentEl(e)), o;
  }
});
function de(e, o, t) {
  const n = e.matches("open"), i = e.context.currentPlacement, s = e.context.currentPortalled, a = e.context.renderedElements, l = Q({
    ...e.context.positioning,
    placement: i
  });
  return {
    portalled: s,
    isOpen: n,
    open() {
      o("OPEN");
    },
    close() {
      o("CLOSE");
    },
    reposition(u = {}) {
      o({ type: "POSITIONING.SET", options: u });
    },
    arrowProps: t.element({
      id: r.getArrowId(e.context),
      ...P.arrow.attrs,
      dir: e.context.dir,
      style: l.arrow
    }),
    arrowTipProps: t.element({
      ...P.arrowTip.attrs,
      dir: e.context.dir,
      style: l.arrowTip
    }),
    anchorProps: t.element({
      ...P.anchor.attrs,
      dir: e.context.dir,
      id: r.getAnchorId(e.context)
    }),
    triggerProps: t.button({
      ...P.trigger.attrs,
      dir: e.context.dir,
      type: "button",
      "data-placement": i,
      id: r.getTriggerId(e.context),
      "aria-haspopup": "dialog",
      "aria-expanded": n,
      "data-state": n ? "open" : "closed",
      "aria-controls": r.getContentId(e.context),
      onClick() {
        o("TOGGLE");
      },
      onBlur(u) {
        o({ type: "TRIGGER_BLUR", target: u.relatedTarget });
      }
    }),
    indicatorProps: t.element({
      ...P.indicator.attrs,
      dir: e.context.dir,
      "data-state": n ? "open" : "closed"
    }),
    positionerProps: t.element({
      id: r.getPositionerId(e.context),
      ...P.positioner.attrs,
      dir: e.context.dir,
      style: l.floating
    }),
    contentProps: t.element({
      ...P.content.attrs,
      dir: e.context.dir,
      id: r.getContentId(e.context),
      tabIndex: -1,
      role: "dialog",
      hidden: !n,
      "data-state": n ? "open" : "closed",
      "data-expanded": M(n),
      "aria-labelledby": a.title ? r.getTitleId(e.context) : void 0,
      "aria-describedby": a.description ? r.getDescriptionId(e.context) : void 0,
      "data-placement": i
    }),
    titleProps: t.element({
      ...P.title.attrs,
      id: r.getTitleId(e.context),
      dir: e.context.dir
    }),
    descriptionProps: t.element({
      ...P.description.attrs,
      id: r.getDescriptionId(e.context),
      dir: e.context.dir
    }),
    closeTriggerProps: t.button({
      ...P.closeTrigger.attrs,
      dir: e.context.dir,
      id: r.getCloseTriggerId(e.context),
      type: "button",
      "aria-label": "close",
      onClick() {
        o("CLOSE");
      }
    })
  };
}
function pe(e) {
  const o = G(e);
  return _(
    {
      id: "popover",
      initial: o.open ? "open" : "closed",
      context: {
        closeOnInteractOutside: !0,
        closeOnEsc: !0,
        autoFocus: !0,
        modal: !1,
        portalled: !0,
        positioning: {
          placement: "bottom",
          ...o.positioning
        },
        currentPlacement: void 0,
        ...o,
        renderedElements: {
          title: !0,
          description: !0
        }
      },
      computed: {
        currentPortalled: (t) => !!t.modal || !!t.portalled
      },
      watch: {
        open: ["toggleVisibility"]
      },
      entry: ["checkRenderedElements"],
      states: {
        closed: {
          on: {
            "CONTROLLED.OPEN": {
              target: "open",
              actions: ["setInitialFocus"]
            },
            TOGGLE: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "setInitialFocus"]
              }
            ],
            OPEN: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "setInitialFocus"]
              }
            ]
          }
        },
        open: {
          activities: [
            "trapFocus",
            "preventScroll",
            "hideContentBelow",
            "trackPositioning",
            "trackDismissableElement",
            "proxyTabFocus"
          ],
          on: {
            "CONTROLLED.CLOSE": {
              target: "closed",
              actions: ["restoreFocus"]
            },
            CLOSE: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
              },
              {
                target: "closed",
                actions: ["invokeOnClose", "restoreFocus"]
              }
            ],
            TOGGLE: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
              },
              {
                target: "closed",
                actions: ["invokeOnClose"]
              }
            ],
            "POSITIONING.SET": {
              actions: "reposition"
            }
          }
        }
      }
    },
    {
      guards: {
        isOpenControlled: (t) => !!t["open.controlled"]
      },
      activities: {
        trackPositioning(t) {
          t.currentPlacement = t.positioning.placement;
          const n = r.getAnchorEl(t) ?? r.getTriggerEl(t);
          return L(n, () => r.getPositionerEl(t), {
            ...t.positioning,
            defer: !0,
            onComplete(s) {
              t.currentPlacement = s.placement;
            }
          });
        },
        trackDismissableElement(t, n, { send: i }) {
          const s = () => r.getContentEl(t);
          let a = !0;
          return z(s, {
            pointerBlocking: t.modal,
            exclude: r.getTriggerEl(t),
            defer: !0,
            onEscapeKeyDown(l) {
              var u;
              (u = t.onEscapeKeyDown) == null || u.call(t, l), !t.closeOnEsc && l.preventDefault();
            },
            onInteractOutside(l) {
              var u;
              (u = t.onInteractOutside) == null || u.call(t, l), !l.defaultPrevented && (a = !(l.detail.focusable || l.detail.contextmenu), t.closeOnInteractOutside || l.preventDefault());
            },
            onPointerDownOutside: t.onPointerDownOutside,
            onFocusOutside: t.onFocusOutside,
            onDismiss() {
              i({ type: "CLOSE", src: "interact-outside", restoreFocus: a });
            }
          });
        },
        proxyTabFocus(t) {
          return t.modal || !t.portalled ? void 0 : x(() => r.getContentEl(t), {
            triggerElement: r.getTriggerEl(t),
            defer: !0,
            onFocus(i) {
              i.focus({ preventScroll: !0 });
            }
          });
        },
        hideContentBelow(t) {
          return t.modal ? ie(() => [r.getContentEl(t), r.getTriggerEl(t)], { defer: !0 }) : void 0;
        },
        preventScroll(t) {
          if (t.modal)
            return ce(r.getDoc(t));
        },
        trapFocus(t) {
          if (!t.modal)
            return;
          let n;
          return K(() => {
            const i = r.getContentEl(t);
            if (i) {
              n = ne(i, {
                escapeDeactivates: !1,
                allowOutsideClick: !0,
                preventScroll: !0,
                returnFocusOnDeactivate: !0,
                document: r.getDoc(t),
                fallbackFocus: i,
                initialFocus: N(t.initialFocusEl)
              });
              try {
                n.activate();
              } catch {
              }
            }
          }), () => n == null ? void 0 : n.deactivate();
        }
      },
      actions: {
        reposition(t, n) {
          const i = r.getAnchorEl(t) ?? r.getTriggerEl(t);
          L(i, () => r.getPositionerEl(t), {
            ...t.positioning,
            ...n.options,
            defer: !0,
            listeners: !1,
            onComplete(a) {
              t.currentPlacement = a.placement;
            }
          });
        },
        checkRenderedElements(t) {
          F(() => {
            Object.assign(t.renderedElements, {
              title: !!r.getTitleEl(t),
              description: !!r.getDescriptionEl(t)
            });
          });
        },
        setInitialFocus(t) {
          F(() => {
            var n;
            (n = r.getInitialFocusEl(t)) == null || n.focus({ preventScroll: !0 });
          });
        },
        restoreFocus(t, n) {
          n.restoreFocus && F(() => {
            var i;
            (i = r.getTriggerEl(t)) == null || i.focus({ preventScroll: !0 });
          });
        },
        invokeOnOpen(t) {
          var n;
          (n = t.onOpenChange) == null || n.call(t, { open: !0 });
        },
        invokeOnClose(t) {
          var n;
          (n = t.onOpenChange) == null || n.call(t, { open: !1 });
        },
        toggleVisibility(t, n, { send: i }) {
          i({ type: t.open ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: n });
        }
      }
    }
  );
}
W()([
  "autoFocus",
  "closeOnEsc",
  "closeOnInteractOutside",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "initialFocusEl",
  "modal",
  "onEscapeKeyDown",
  "onFocusOutside",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "open.controlled",
  "open",
  "portalled",
  "positioning"
]);
const [ue, T] = U({
  hookName: "usePopoverContext",
  providerName: "<PopoverProvider />"
}), ve = (e) => {
  const o = T(), t = v(() => o().closeTriggerProps, e);
  return m(C.button, t);
}, Oe = (e) => {
  const o = T(), t = S(), n = v(() => o().contentProps, () => t().presenceProps, e);
  return m(D, {
    get when() {
      return !t().isUnmounted;
    },
    get children() {
      return m(C.div, n);
    }
  });
}, he = (e) => {
  const o = T(), t = S(), n = v(() => o().positionerProps, e);
  return m(D, {
    get when() {
      return !t().isUnmounted;
    },
    get children() {
      return m(C.div, n);
    }
  });
}, ge = (e) => {
  const o = H(), t = v({ id: J(), getRootNode: o }, e), [n, i] = V(pe(t), { context: t });
  return Y(() => de(n, i, j));
}, Ce = (e) => {
  const [o, t] = ee(e), [n, i] = X()(t, ["autoFocus", "closeOnEsc", "closeOnInteractOutside", "dir", "getRootNode", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "open", "portalled", "positioning"]), s = ge(n), a = te(v(o, () => ({
    present: s().isOpen
  }))), l = () => q(i.children, s);
  return m(ue, {
    value: s,
    get children() {
      return m(oe, {
        value: a,
        get children() {
          return l();
        }
      });
    }
  });
}, Te = (e) => {
  const o = T(), t = v(() => o().titleProps, e);
  return m(C.div, t);
}, Ie = (e) => {
  const o = T(), t = S(), n = v(() => o().triggerProps, () => ({
    "aria-controls": t().isUnmounted && null
  }), e);
  return m(C.button, n);
};
export {
  Ie as P,
  he as a,
  Oe as b,
  ve as c,
  Te as d,
  Ce as e
};
