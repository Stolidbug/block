/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var oe = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], K = /* @__PURE__ */ oe.join(","), ue = typeof Element > "u", D = ue ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, j = !ue && Element.prototype.getRootNode ? function(o) {
  var e;
  return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o);
} : function(o) {
  return o == null ? void 0 : o.ownerDocument;
}, M = function o(e, t) {
  var r;
  t === void 0 && (t = !0);
  var u = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), c = u === "" || u === "true", a = c || t && e && o(e.parentNode);
  return a;
}, be = function(e) {
  var t, r = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return r === "" || r === "true";
}, se = function(e, t, r) {
  if (M(e))
    return [];
  var u = Array.prototype.slice.apply(e.querySelectorAll(K));
  return t && D.call(e, K) && u.unshift(e), u = u.filter(r), u;
}, ce = function o(e, t, r) {
  for (var u = [], c = Array.from(e); c.length; ) {
    var a = c.shift();
    if (!M(a, !1))
      if (a.tagName === "SLOT") {
        var v = a.assignedElements(), f = v.length ? v : a.children, p = o(f, !0, r);
        r.flatten ? u.push.apply(u, p) : u.push({
          scopeParent: a,
          candidates: p
        });
      } else {
        var N = D.call(a, K);
        N && r.filter(a) && (t || !e.includes(a)) && u.push(a);
        var w = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), F = !M(w, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (w && F) {
          var x = o(w === !0 ? a.children : w.children, !0, r);
          r.flatten ? u.push.apply(u, x) : u.push({
            scopeParent: a,
            candidates: x
          });
        } else
          c.unshift.apply(c, a.children);
      }
  }
  return u;
}, le = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, R = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || be(e)) && !le(e) ? 0 : e.tabIndex;
}, he = function(e, t) {
  var r = R(e);
  return r < 0 && t && !le(e) ? 0 : r;
}, pe = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, de = function(e) {
  return e.tagName === "INPUT";
}, ge = function(e) {
  return de(e) && e.type === "hidden";
}, ye = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return t;
}, me = function(e, t) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === t)
      return e[r];
}, we = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || j(e), r = function(v) {
    return t.querySelectorAll('input[type="radio"][name="' + v + '"]');
  }, u;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    u = r(window.CSS.escape(e.name));
  else
    try {
      u = r(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var c = me(u, e.form);
  return !c || c === e;
}, Ne = function(e) {
  return de(e) && e.type === "radio";
}, Te = function(e) {
  return Ne(e) && !we(e);
}, Fe = function(e) {
  var t, r = e && j(e), u = (t = r) === null || t === void 0 ? void 0 : t.host, c = !1;
  if (r && r !== e) {
    var a, v, f;
    for (c = !!((a = u) !== null && a !== void 0 && (v = a.ownerDocument) !== null && v !== void 0 && v.contains(u) || e != null && (f = e.ownerDocument) !== null && f !== void 0 && f.contains(e)); !c && u; ) {
      var p, N, w;
      r = j(u), u = (p = r) === null || p === void 0 ? void 0 : p.host, c = !!((N = u) !== null && N !== void 0 && (w = N.ownerDocument) !== null && w !== void 0 && w.contains(u));
    }
  }
  return c;
}, ee = function(e) {
  var t = e.getBoundingClientRect(), r = t.width, u = t.height;
  return r === 0 && u === 0;
}, Ee = function(e, t) {
  var r = t.displayCheck, u = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var c = D.call(e, "details>summary:first-of-type"), a = c ? e.parentElement : e;
  if (D.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof u == "function") {
      for (var v = e; e; ) {
        var f = e.parentElement, p = j(e);
        if (f && !f.shadowRoot && u(f) === !0)
          return ee(e);
        e.assignedSlot ? e = e.assignedSlot : !f && p !== e.ownerDocument ? e = p.host : e = f;
      }
      e = v;
    }
    if (Fe(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ee(e);
  return !1;
}, Se = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var r = 0; r < t.children.length; r++) {
          var u = t.children.item(r);
          if (u.tagName === "LEGEND")
            return D.call(t, "fieldset[disabled] *") ? !0 : !u.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, G = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  M(t) || ge(t) || Ee(t, e) || // For a details element with a summary, the summary element gets the focus
  ye(t) || Se(t));
}, W = function(e, t) {
  return !(Te(t) || R(t) < 0 || !G(e, t));
}, Re = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, De = function o(e) {
  var t = [], r = [];
  return e.forEach(function(u, c) {
    var a = !!u.scopeParent, v = a ? u.scopeParent : u, f = he(v, a), p = a ? o(u.candidates) : v;
    f === 0 ? a ? t.push.apply(t, p) : t.push(v) : r.push({
      documentOrder: c,
      tabIndex: f,
      item: u,
      isScope: a,
      content: p
    });
  }), r.sort(pe).reduce(function(u, c) {
    return c.isScope ? u.push.apply(u, c.content) : u.push(c.content), u;
  }, []).concat(t);
}, Pe = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = ce([e], t.includeContainer, {
    filter: W.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: Re
  }) : r = se(e, t.includeContainer, W.bind(null, t)), De(r);
}, ke = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = ce([e], t.includeContainer, {
    filter: G.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : r = se(e, t.includeContainer, G.bind(null, t)), r;
}, P = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return D.call(e, K) === !1 ? !1 : W(t, e);
}, Ie = /* @__PURE__ */ oe.concat("iframe").join(","), Y = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return D.call(e, Ie) === !1 ? !1 : G(t, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function te(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(o, u).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function re(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? te(Object(t), !0).forEach(function(r) {
      Ce(o, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : te(Object(t)).forEach(function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return o;
}
function Ce(o, e, t) {
  return e = Ae(e), e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
function Oe(o, e) {
  if (typeof o != "object" || o === null) return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(o, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Ae(o) {
  var e = Oe(o, "string");
  return typeof e == "symbol" ? e : String(e);
}
var ae = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== t && r.pause();
    }
    var u = e.indexOf(t);
    u === -1 || e.splice(u, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var r = e.indexOf(t);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, xe = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Le = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, A = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, Be = function(e) {
  return A(e) && !e.shiftKey;
}, Ke = function(e) {
  return A(e) && e.shiftKey;
}, ne = function(e) {
  return setTimeout(e, 0);
}, ie = function(e, t) {
  var r = -1;
  return e.every(function(u, c) {
    return t(u) ? (r = c, !1) : !0;
  }), r;
}, O = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
    r[u - 1] = arguments[u];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, B = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, je = [], Me = function(e, t) {
  var r = (t == null ? void 0 : t.document) || document, u = (t == null ? void 0 : t.trapStack) || je, c = re({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Be,
    isKeyBackward: Ke
  }, t), a = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, v, f = function(i, n, s) {
    return i && i[n] !== void 0 ? i[n] : c[s || n];
  }, p = function(i, n) {
    var s = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return a.containerGroups.findIndex(function(l) {
      var d = l.container, h = l.tabbableNodes;
      return d.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (s == null ? void 0 : s.includes(d)) || h.find(function(g) {
        return g === i;
      });
    });
  }, N = function(i) {
    var n = c[i];
    if (typeof n == "function") {
      for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
        l[d - 1] = arguments[d];
      n = n.apply(void 0, l);
    }
    if (n === !0 && (n = void 0), !n) {
      if (n === void 0 || n === !1)
        return n;
      throw new Error("`".concat(i, "` was specified but was not a node, or did not return a node"));
    }
    var h = n;
    if (typeof n == "string" && (h = r.querySelector(n), !h))
      throw new Error("`".concat(i, "` as selector refers to no known node"));
    return h;
  }, w = function() {
    var i = N("initialFocus");
    if (i === !1)
      return !1;
    if (i === void 0 || !Y(i, c.tabbableOptions))
      if (p(r.activeElement) >= 0)
        i = r.activeElement;
      else {
        var n = a.tabbableGroups[0], s = n && n.firstTabbableNode;
        i = s || N("fallbackFocus");
      }
    if (!i)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, F = function() {
    if (a.containerGroups = a.containers.map(function(i) {
      var n = Pe(i, c.tabbableOptions), s = ke(i, c.tabbableOptions), l = n.length > 0 ? n[0] : void 0, d = n.length > 0 ? n[n.length - 1] : void 0, h = s.find(function(y) {
        return P(y);
      }), g = s.slice().reverse().find(function(y) {
        return P(y);
      }), m = !!n.find(function(y) {
        return R(y) > 0;
      });
      return {
        container: i,
        tabbableNodes: n,
        focusableNodes: s,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: l,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: d,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: h,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: g,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(S) {
          var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, T = n.indexOf(S);
          return T < 0 ? I ? s.slice(s.indexOf(S) + 1).find(function(C) {
            return P(C);
          }) : s.slice(0, s.indexOf(S)).reverse().find(function(C) {
            return P(C);
          }) : n[T + (I ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !N("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, x = function b(i) {
    var n = i.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? b(n.shadowRoot) : n;
  }, E = function b(i) {
    if (i !== !1 && i !== x(document)) {
      if (!i || !i.focus) {
        b(w());
        return;
      }
      i.focus({
        preventScroll: !!c.preventScroll
      }), a.mostRecentlyFocusedNode = i, xe(i) && i.select();
    }
  }, Z = function(i) {
    var n = N("setReturnFocus", i);
    return n || (n === !1 ? !1 : i);
  }, z = function(i) {
    var n = i.target, s = i.event, l = i.isBackward, d = l === void 0 ? !1 : l;
    n = n || B(s), F();
    var h = null;
    if (a.tabbableGroups.length > 0) {
      var g = p(n, s), m = g >= 0 ? a.containerGroups[g] : void 0;
      if (g < 0)
        d ? h = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : h = a.tabbableGroups[0].firstTabbableNode;
      else if (d) {
        var y = ie(a.tabbableGroups, function(q) {
          var V = q.firstTabbableNode;
          return n === V;
        });
        if (y < 0 && (m.container === n || Y(n, c.tabbableOptions) && !P(n, c.tabbableOptions) && !m.nextTabbableNode(n, !1)) && (y = g), y >= 0) {
          var S = y === 0 ? a.tabbableGroups.length - 1 : y - 1, I = a.tabbableGroups[S];
          h = R(n) >= 0 ? I.lastTabbableNode : I.lastDomTabbableNode;
        } else A(s) || (h = m.nextTabbableNode(n, !1));
      } else {
        var T = ie(a.tabbableGroups, function(q) {
          var V = q.lastTabbableNode;
          return n === V;
        });
        if (T < 0 && (m.container === n || Y(n, c.tabbableOptions) && !P(n, c.tabbableOptions) && !m.nextTabbableNode(n)) && (T = g), T >= 0) {
          var C = T === a.tabbableGroups.length - 1 ? 0 : T + 1, _ = a.tabbableGroups[C];
          h = R(n) >= 0 ? _.firstTabbableNode : _.firstDomTabbableNode;
        } else A(s) || (h = m.nextTabbableNode(n));
      }
    } else
      h = N("fallbackFocus");
    return h;
  }, L = function(i) {
    var n = B(i);
    if (!(p(n, i) >= 0)) {
      if (O(c.clickOutsideDeactivates, i)) {
        v.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: c.returnFocusOnDeactivate
        });
        return;
      }
      O(c.allowOutsideClick, i) || i.preventDefault();
    }
  }, X = function(i) {
    var n = B(i), s = p(n, i) >= 0;
    if (s || n instanceof Document)
      s && (a.mostRecentlyFocusedNode = n);
    else {
      i.stopImmediatePropagation();
      var l, d = !0;
      if (a.mostRecentlyFocusedNode)
        if (R(a.mostRecentlyFocusedNode) > 0) {
          var h = p(a.mostRecentlyFocusedNode), g = a.containerGroups[h].tabbableNodes;
          if (g.length > 0) {
            var m = g.findIndex(function(y) {
              return y === a.mostRecentlyFocusedNode;
            });
            m >= 0 && (c.isKeyForward(a.recentNavEvent) ? m + 1 < g.length && (l = g[m + 1], d = !1) : m - 1 >= 0 && (l = g[m - 1], d = !1));
          }
        } else
          a.containerGroups.some(function(y) {
            return y.tabbableNodes.some(function(S) {
              return R(S) > 0;
            });
          }) || (d = !1);
      else
        d = !1;
      d && (l = z({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: c.isKeyBackward(a.recentNavEvent)
      })), E(l || a.mostRecentlyFocusedNode || w());
    }
    a.recentNavEvent = void 0;
  }, fe = function(i) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = i;
    var s = z({
      event: i,
      isBackward: n
    });
    s && (A(i) && i.preventDefault(), E(s));
  }, $ = function(i) {
    if (Le(i) && O(c.escapeDeactivates, i) !== !1) {
      i.preventDefault(), v.deactivate();
      return;
    }
    (c.isKeyForward(i) || c.isKeyBackward(i)) && fe(i, c.isKeyBackward(i));
  }, J = function(i) {
    var n = B(i);
    p(n, i) >= 0 || O(c.clickOutsideDeactivates, i) || O(c.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, Q = function() {
    if (a.active)
      return ae.activateTrap(u, v), a.delayInitialFocusTimer = c.delayInitialFocus ? ne(function() {
        E(w());
      }) : E(w()), r.addEventListener("focusin", X, !0), r.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", J, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), v;
  }, H = function() {
    if (a.active)
      return r.removeEventListener("focusin", X, !0), r.removeEventListener("mousedown", L, !0), r.removeEventListener("touchstart", L, !0), r.removeEventListener("click", J, !0), r.removeEventListener("keydown", $, !0), v;
  }, ve = function(i) {
    var n = i.some(function(s) {
      var l = Array.from(s.removedNodes);
      return l.some(function(d) {
        return d === a.mostRecentlyFocusedNode;
      });
    });
    n && E(w());
  }, U = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ve) : void 0, k = function() {
    U && (U.disconnect(), a.active && !a.paused && a.containers.map(function(i) {
      U.observe(i, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return v = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(i) {
      if (a.active)
        return this;
      var n = f(i, "onActivate"), s = f(i, "onPostActivate"), l = f(i, "checkCanFocusTrap");
      l || F(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = r.activeElement, n == null || n();
      var d = function() {
        l && F(), Q(), k(), s == null || s();
      };
      return l ? (l(a.containers.concat()).then(d, d), this) : (d(), this);
    },
    deactivate: function(i) {
      if (!a.active)
        return this;
      var n = re({
        onDeactivate: c.onDeactivate,
        onPostDeactivate: c.onPostDeactivate,
        checkCanReturnFocus: c.checkCanReturnFocus
      }, i);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, H(), a.active = !1, a.paused = !1, k(), ae.deactivateTrap(u, v);
      var s = f(n, "onDeactivate"), l = f(n, "onPostDeactivate"), d = f(n, "checkCanReturnFocus"), h = f(n, "returnFocus", "returnFocusOnDeactivate");
      s == null || s();
      var g = function() {
        ne(function() {
          h && E(Z(a.nodeFocusedBeforeActivation)), l == null || l();
        });
      };
      return h && d ? (d(Z(a.nodeFocusedBeforeActivation)).then(g, g), this) : (g(), this);
    },
    pause: function(i) {
      if (a.paused || !a.active)
        return this;
      var n = f(i, "onPause"), s = f(i, "onPostPause");
      return a.paused = !0, n == null || n(), H(), k(), s == null || s(), this;
    },
    unpause: function(i) {
      if (!a.paused || !a.active)
        return this;
      var n = f(i, "onUnpause"), s = f(i, "onPostUnpause");
      return a.paused = !1, n == null || n(), F(), Q(), k(), s == null || s(), this;
    },
    updateContainerElements: function(i) {
      var n = [].concat(i).filter(Boolean);
      return a.containers = n.map(function(s) {
        return typeof s == "string" ? r.querySelector(s) : s;
      }), a.active && F(), k(), this;
    }
  }, v.updateContainerElements(e), v;
};
export {
  Me as c
};
