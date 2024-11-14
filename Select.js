import { e as ae, i as L, t as y, c as Q, g as se, s as j } from "./utils-DyI0jAV8.js";
import { z as E } from "./theme.store-v2--qJ2X.js";
import { c as u, S as W, e as P, y as H, a as ce, I as de, d as X, g as A, f as ue, o as ge, F as he } from "./R5675YMU-BY7cX9Th.js";
import { u as pe } from "./useSlots-DRPN5bzQ.js";
import { c as me } from "./index-BZKcI3Xu.js";
import { c as ve } from "./createChildrenObserver-DrEtg4wT.js";
import { c as Ie, a as fe, d as m, q as U, s as be, t as Ee, v as Te, b as ye, e as Oe, f as D, w as Z, x as Ce, r as G, y as F, z as Se, A as Re, h as ee, m as f, j as T, o as B, p as te, u as ke, k as we, l as Pe } from "./environment-context-0t-z-DDy.js";
import { g as xe, d as q, p as Ve, t as Ae, b as Y, u as ne, s as Ge, c as Ne, P as Le } from "./index-yNlxUwnF.js";
import { v as _e, t as He, o as De, s as Fe } from "./index-n_s8SVLn.js";
var $e = Object.defineProperty, Me = (t, n, e) => n in t ? $e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, d = (t, n, e) => (Me(t, typeof n != "symbol" ? n + "" : n, e), e);
function Ue(t) {
  let n, e, r = 2166136261;
  for (n = 0, e = t.length; n < e; n++)
    r ^= t.charCodeAt(n), r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24);
  return `00000${(r >>> 0).toString(36)}`.slice(-6);
}
var $ = (t) => typeof t == "object" && t !== null && !Array.isArray(t), M = (t, n) => Object.prototype.hasOwnProperty.call(t, n), _ = {
  itemToValue(t) {
    return typeof t == "string" ? t : $(t) && M(t, "value") ? t.value : "";
  },
  itemToString(t) {
    return typeof t == "string" ? t : $(t) && M(t, "label") ? t.label : _.itemToValue(t);
  },
  itemToDisabled(t) {
    return $(t) && M(t, "disabled") ? !!t.disabled : !1;
  }
}, re = class {
  constructor(t) {
    this.options = t, d(this, "nodes", /* @__PURE__ */ new Map()), d(this, "disabledValues", /* @__PURE__ */ new Set()), d(this, "_firstValue", null), d(this, "_lastValue", null), d(this, "hash", ""), d(this, "isEqual", (n) => this.hash === n.hash), d(this, "iterate", () => {
      const { items: n } = this.options, e = /* @__PURE__ */ new Set();
      for (let r = 0; r < n.length; r++) {
        const o = n[r], s = this.itemToValue(o), c = this.itemToString(o), g = this.itemToDisabled(o);
        e.add(s);
        const v = {
          // freeze item to prevent mutation by frameworks like Solid.js
          item: Object.freeze(o),
          index: r,
          label: c,
          value: s,
          previousValue: this.itemToValue(n[r - 1]) ?? null,
          nextValue: this.itemToValue(n[r + 1]) ?? null
        };
        this.nodes.set(s, v), g && this.disabledValues.add(s), r === 0 && (this._firstValue = s), r === n.length - 1 && (this._lastValue = s);
      }
      return this.hash = Ue(Array.from(e).join("")), this;
    }), d(this, "setItems", (n) => (this.options.items = n, this.iterate())), d(this, "item", (n) => {
      var e;
      return n === null ? null : ((e = this.nodes.get(n)) == null ? void 0 : e.item) ?? null;
    }), d(this, "items", (n) => n.map((e) => this.item(e)).filter(Boolean)), d(this, "at", (n) => {
      for (const e of this.nodes.values())
        if (e.index === n)
          return e.item;
      return null;
    }), d(this, "sortFn", (n, e) => {
      const r = this.nodes.get(n), o = this.nodes.get(e);
      return ((r == null ? void 0 : r.index) ?? 0) - ((o == null ? void 0 : o.index) ?? 0);
    }), d(this, "sort", (n) => n.sort(this.sortFn)), d(this, "itemToValue", (n) => {
      var e, r;
      return n ? ((r = (e = this.options).itemToValue) == null ? void 0 : r.call(e, n)) ?? _.itemToValue(n) : "";
    }), d(this, "itemToString", (n) => {
      var e, r;
      return n ? ((r = (e = this.options).itemToString) == null ? void 0 : r.call(e, n)) ?? _.itemToString(n) : "";
    }), d(this, "itemToDisabled", (n) => {
      var e, r;
      return n ? ((r = (e = this.options).isItemDisabled) == null ? void 0 : r.call(e, n)) ?? _.itemToDisabled(n) : !1;
    }), d(this, "valueToString", (n) => {
      var e;
      return n == null ? "" : ((e = this.nodes.get(n)) == null ? void 0 : e.label) ?? "";
    }), d(this, "itemsToString", (n, e = ", ") => n.map((r) => this.itemToString(r)).filter(Boolean).join(e)), d(this, "has", (n) => n == null ? !1 : this.nodes.has(n)), d(this, "count", () => this.nodes.size), d(this, "first", () => {
      let n = this._firstValue;
      for (; n != null; ) {
        let e = this.nodes.get(n);
        if (e != null && !this.disabledValues.has(e.value))
          return n;
        n = (e == null ? void 0 : e.nextValue) ?? null;
      }
      return null;
    }), d(this, "last", () => {
      let n = this._lastValue;
      for (; n != null; ) {
        let e = this.nodes.get(n);
        if (e != null && !this.disabledValues.has(e.value))
          return n;
        n = (e == null ? void 0 : e.previousValue) ?? null;
      }
      return null;
    }), d(this, "next", (n) => {
      if (n == null)
        return null;
      const e = this.nodes.get(n);
      let r = (e == null ? void 0 : e.nextValue) ?? null;
      for (; r != null; ) {
        let o = this.nodes.get(r);
        if (o != null && !this.disabledValues.has(o.value))
          return r;
        r = (o == null ? void 0 : o.nextValue) ?? null;
      }
      return null;
    }), d(this, "prev", (n) => {
      if (n == null)
        return null;
      const e = this.nodes.get(n);
      let r = (e == null ? void 0 : e.previousValue) ?? null;
      for (; r != null; ) {
        let o = this.nodes.get(r);
        if (o != null && !this.disabledValues.has(o.value))
          return r;
        r = (o == null ? void 0 : o.previousValue) ?? null;
      }
      return null;
    }), d(this, "isItemDisabled", (n) => this.disabledValues.has(this.itemToValue(n))), d(this, "toArray", () => Array.from(this.nodes.values())), d(this, "indexOf", (n) => {
      var e;
      return n == null ? -1 : ((e = this.nodes.get(n)) == null ? void 0 : e.index) ?? -1;
    }), d(this, "getByText", (n, e) => {
      const r = this.indexOf(e);
      let o = e != null ? Be(this.toArray(), r) : this.toArray();
      return n.length === 1 && (o = o.filter((c) => c.value !== e)), o.find((c) => We(c.label, n));
    }), d(this, "search", (n, e) => {
      var C;
      const { state: r, currentValue: o, timeout: s = 350 } = e, c = r.keysSoFar + n, v = c.length > 1 && Array.from(c).every((S) => S === c[0]) ? c[0] : c, V = ((C = this.getByText(v, o)) == null ? void 0 : C.value) ?? null;
      function R() {
        clearTimeout(r.timer), r.timer = -1;
      }
      function k(S) {
        r.keysSoFar = S, R(), S !== "" && (r.timer = +setTimeout(() => {
          k(""), R();
        }, s));
      }
      return k(c), V;
    }), d(this, "toJSON", () => ({
      size: this.count(),
      first: this.first(),
      last: this.last()
    })), this.iterate();
  }
}, We = (t, n) => t.toLowerCase().startsWith(n.toLowerCase()), Be = (t, n) => t.map((e, r) => t[(Math.max(n, 0) + r) % t.length]), ie = Ie("select").parts(
  "label",
  "positioner",
  "trigger",
  "indicator",
  "clearTrigger",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "content",
  "root",
  "control"
), I = ie.build(), K = (t) => Z(new re(t));
K.empty = () => Z(new re({ items: [] }));
var l = fe({
  getRootId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.root) ?? `select:${t.id}`;
  },
  getContentId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.content) ?? `select:${t.id}:content`;
  },
  getTriggerId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.trigger) ?? `select:${t.id}:trigger`;
  },
  getClearTriggerId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.clearTrigger) ?? `select:${t.id}:clear-trigger`;
  },
  getLabelId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.label) ?? `select:${t.id}:label`;
  },
  getControlId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.control) ?? `select:${t.id}:control`;
  },
  getItemId: (t, n) => {
    var e, r;
    return ((r = (e = t.ids) == null ? void 0 : e.item) == null ? void 0 : r.call(e, n)) ?? `select:${t.id}:option:${n}`;
  },
  getHiddenSelectId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.hiddenSelect) ?? `select:${t.id}:select`;
  },
  getPositionerId: (t) => {
    var n;
    return ((n = t.ids) == null ? void 0 : n.positioner) ?? `select:${t.id}:positioner`;
  },
  getItemGroupId: (t, n) => {
    var e, r;
    return ((r = (e = t.ids) == null ? void 0 : e.itemGroup) == null ? void 0 : r.call(e, n)) ?? `select:${t.id}:optgroup:${n}`;
  },
  getItemGroupLabelId: (t, n) => {
    var e, r;
    return ((r = (e = t.ids) == null ? void 0 : e.itemGroupLabel) == null ? void 0 : r.call(e, n)) ?? `select:${t.id}:optgroup-label:${n}`;
  },
  getHiddenSelectEl: (t) => l.getById(t, l.getHiddenSelectId(t)),
  getContentEl: (t) => l.getById(t, l.getContentId(t)),
  getControlEl: (t) => l.getById(t, l.getControlId(t)),
  getTriggerEl: (t) => l.getById(t, l.getTriggerId(t)),
  getClearTriggerEl: (t) => l.getById(t, l.getClearTriggerId(t)),
  getPositionerEl: (t) => l.getById(t, l.getPositionerId(t)),
  getHighlightedOptionEl(t) {
    return t.highlightedValue ? l.getById(t, l.getItemId(t, t.highlightedValue)) : null;
  }
});
function Ke(t, n, e) {
  const r = t.context.isDisabled, o = t.context.invalid, s = t.context.readOnly, c = t.context.isInteractive, g = t.hasTag("open"), v = t.matches("focused"), V = t.context.highlightedItem, R = t.context.selectedItems, k = t.context.isTypingAhead;
  function C(i) {
    const { item: a } = i, p = t.context.collection.isItemDisabled(a), b = t.context.collection.itemToValue(a);
    return {
      value: b,
      isDisabled: !!(p || r),
      isHighlighted: t.context.highlightedValue === b,
      isSelected: t.context.value.includes(b)
    };
  }
  const S = xe({
    ...t.context.positioning,
    placement: t.context.currentPlacement
  });
  return {
    isOpen: g,
    isFocused: v,
    isValueEmpty: t.context.value.length === 0,
    highlightedItem: V,
    highlightedValue: t.context.highlightedValue,
    selectedItems: R,
    hasSelectedItems: t.context.hasSelectedItems,
    value: t.context.value,
    valueAsString: t.context.valueAsString,
    collection: t.context.collection,
    setCollection(i) {
      n({ type: "COLLECTION.SET", value: i });
    },
    reposition(i = {}) {
      n({ type: "POSITIONING.SET", options: i });
    },
    focus() {
      var i;
      (i = l.getTriggerEl(t.context)) == null || i.focus({ preventScroll: !0 });
    },
    open() {
      n("OPEN");
    },
    close() {
      n("CLOSE");
    },
    selectValue(i) {
      n({ type: "ITEM.SELECT", value: i });
    },
    setValue(i) {
      n({ type: "VALUE.SET", value: i });
    },
    highlightValue(i) {
      n({ type: "HIGHLIGHTED_VALUE.SET", value: i });
    },
    clearValue(i) {
      n(i ? { type: "ITEM.CLEAR", value: i } : { type: "VALUE.CLEAR" });
    },
    getItemState: C,
    rootProps: e.element({
      ...I.root.attrs,
      dir: t.context.dir,
      id: l.getRootId(t.context),
      "data-invalid": m(o),
      "data-readonly": m(s)
    }),
    labelProps: e.label({
      dir: t.context.dir,
      id: l.getLabelId(t.context),
      ...I.label.attrs,
      "data-disabled": m(r),
      "data-invalid": m(o),
      "data-readonly": m(s),
      htmlFor: l.getHiddenSelectId(t.context),
      onClick() {
        var i;
        r || (i = l.getTriggerEl(t.context)) == null || i.focus({ preventScroll: !0 });
      }
    }),
    controlProps: e.element({
      ...I.control.attrs,
      dir: t.context.dir,
      id: l.getControlId(t.context),
      "data-state": g ? "open" : "closed",
      "data-focus": m(v),
      "data-disabled": m(r),
      "data-invalid": m(o)
    }),
    triggerProps: e.button({
      id: l.getTriggerId(t.context),
      disabled: r,
      dir: t.context.dir,
      type: "button",
      "aria-controls": l.getContentId(t.context),
      "aria-expanded": g,
      "data-state": g ? "open" : "closed",
      "aria-haspopup": "listbox",
      "aria-labelledby": l.getLabelId(t.context),
      ...I.trigger.attrs,
      "data-disabled": m(r),
      "data-invalid": m(o),
      "aria-invalid": o,
      "data-readonly": m(s),
      "data-placement": t.context.currentPlacement,
      "data-placeholder-shown": m(!t.context.hasSelectedItems),
      onPointerDown(i) {
        i.button || i.ctrlKey || !c || (i.currentTarget.dataset.pointerType = i.pointerType, !(r || i.pointerType === "touch") && n({ type: "TRIGGER.CLICK" }));
      },
      onClick(i) {
        !c || i.button || i.currentTarget.dataset.pointerType === "touch" && n({ type: "TRIGGER.CLICK" });
      },
      onFocus() {
        n("TRIGGER.FOCUS");
      },
      onBlur() {
        n("TRIGGER.BLUR");
      },
      onKeyDown(i) {
        if (!c)
          return;
        const p = {
          ArrowUp() {
            n({ type: "TRIGGER.ARROW_UP" });
          },
          ArrowDown(b) {
            n({ type: b.altKey ? "OPEN" : "TRIGGER.ARROW_DOWN" });
          },
          ArrowLeft() {
            n({ type: "TRIGGER.ARROW_LEFT" });
          },
          ArrowRight() {
            n({ type: "TRIGGER.ARROW_RIGHT" });
          },
          Home() {
            n({ type: "TRIGGER.HOME" });
          },
          End() {
            n({ type: "TRIGGER.END" });
          },
          Enter() {
            n({ type: "TRIGGER.ENTER" });
          },
          Space(b) {
            n(k ? { type: "TRIGGER.TYPEAHEAD", key: b.key } : { type: "TRIGGER.ENTER" });
          }
        }[q(i, t.context)];
        if (p) {
          p(i), i.preventDefault();
          return;
        }
        U.isValidEvent(i) && (n({ type: "TRIGGER.TYPEAHEAD", key: i.key }), i.preventDefault());
      }
    }),
    indicatorProps: e.element({
      ...I.indicator.attrs,
      dir: t.context.dir,
      "aria-hidden": !0,
      "data-state": g ? "open" : "closed",
      "data-disabled": m(r),
      "data-invalid": m(o),
      "data-readonly": m(s)
    }),
    getItemProps(i) {
      const a = C(i);
      return e.element({
        id: l.getItemId(t.context, a.value),
        role: "option",
        ...I.item.attrs,
        dir: t.context.dir,
        "data-value": a.value,
        "aria-selected": a.isSelected,
        "data-state": a.isSelected ? "checked" : "unchecked",
        "data-highlighted": m(a.isHighlighted),
        "data-disabled": m(a.isDisabled),
        "aria-disabled": be(a.isDisabled),
        onPointerMove(p) {
          a.isDisabled || p.pointerType !== "mouse" || a.value !== t.context.highlightedValue && n({ type: "ITEM.POINTER_MOVE", value: a.value });
        },
        onPointerUp() {
          a.isDisabled || n({ type: "ITEM.CLICK", src: "pointerup", value: a.value });
        },
        onPointerLeave(p) {
          const b = ["CONTENT.ARROW_UP", "CONTENT.ARROW_DOWN"].includes(t.event.type);
          a.isDisabled || p.pointerType !== "mouse" || b || n({ type: "ITEM.POINTER_LEAVE" });
        },
        onTouchEnd(p) {
          p.preventDefault(), p.stopPropagation();
        }
      });
    },
    getItemTextProps(i) {
      const a = C(i);
      return e.element({
        ...I.itemText.attrs,
        "data-disabled": m(a.isDisabled),
        "data-highlighted": m(a.isHighlighted)
      });
    },
    getItemIndicatorProps(i) {
      const a = C(i);
      return e.element({
        "aria-hidden": !0,
        ...I.itemIndicator.attrs,
        "data-state": a.isSelected ? "checked" : "unchecked",
        hidden: !a.isSelected
      });
    },
    getItemGroupLabelProps(i) {
      const { htmlFor: a } = i;
      return e.element({
        ...I.itemGroupLabel.attrs,
        id: l.getItemGroupLabelId(t.context, a),
        role: "group",
        dir: t.context.dir
      });
    },
    getItemGroupProps(i) {
      const { id: a } = i;
      return e.element({
        ...I.itemGroup.attrs,
        "data-disabled": m(r),
        id: l.getItemGroupId(t.context, a),
        "aria-labelledby": l.getItemGroupLabelId(t.context, a),
        dir: t.context.dir
      });
    },
    clearTriggerProps: e.button({
      ...I.clearTrigger.attrs,
      id: l.getClearTriggerId(t.context),
      type: "button",
      "aria-label": "Clear value",
      disabled: r,
      hidden: !t.context.hasSelectedItems,
      dir: t.context.dir,
      onClick() {
        n("VALUE.CLEAR");
      }
    }),
    hiddenSelectProps: e.select({
      name: t.context.name,
      form: t.context.form,
      disabled: !c,
      multiple: t.context.multiple,
      "aria-hidden": !0,
      id: l.getHiddenSelectId(t.context),
      // defaultValue: state.context.selectedOption?.value,
      style: _e,
      tabIndex: -1,
      // Some browser extensions will focus the hidden select.
      // Let's forward the focus to the trigger.
      onFocus() {
        var i;
        (i = l.getTriggerEl(t.context)) == null || i.focus({ preventScroll: !0 });
      },
      "aria-labelledby": l.getLabelId(t.context)
    }),
    positionerProps: e.element({
      ...I.positioner.attrs,
      dir: t.context.dir,
      id: l.getPositionerId(t.context),
      style: S.floating
    }),
    contentProps: e.element({
      hidden: !g,
      dir: t.context.dir,
      id: l.getContentId(t.context),
      role: "listbox",
      ...I.content.attrs,
      "data-state": g ? "open" : "closed",
      "aria-activedescendant": t.context.highlightedValue ? l.getItemId(t.context, t.context.highlightedValue) : void 0,
      "aria-multiselectable": t.context.multiple ? "true" : void 0,
      "aria-labelledby": l.getLabelId(t.context),
      tabIndex: 0,
      onKeyDown(i) {
        if (!c || !Ee(i))
          return;
        const a = {
          ArrowUp() {
            n({ type: "CONTENT.ARROW_UP" });
          },
          ArrowDown() {
            n({ type: "CONTENT.ARROW_DOWN" });
          },
          Home() {
            n({ type: "CONTENT.HOME" });
          },
          End() {
            n({ type: "CONTENT.END" });
          },
          Enter() {
            n({ type: "ITEM.CLICK", src: "keydown.enter" });
          },
          Space(b) {
            var z;
            k ? n({ type: "CONTENT.TYPEAHEAD", key: b.key }) : (z = a.Enter) == null || z.call(a, b);
          }
        }, p = a[q(i)];
        if (p) {
          p(i), i.preventDefault();
          return;
        }
        Te(i.target) || U.isValidEvent(i) && (n({ type: "CONTENT.TYPEAHEAD", key: i.key }), i.preventDefault());
      }
    })
  };
}
var { and: w, not: x, or: ze } = Ce;
function je(t) {
  const n = ye(t);
  return Oe(
    {
      id: "select",
      context: {
        value: [],
        highlightedValue: null,
        selectOnBlur: !1,
        loop: !1,
        closeOnSelect: !0,
        disabled: !1,
        ...n,
        collection: n.collection ?? K.empty(),
        typeahead: U.defaultOptions,
        fieldsetDisabled: !1,
        restoreFocus: !0,
        positioning: {
          placement: "bottom-start",
          gutter: 8,
          ...n.positioning
        }
      },
      computed: {
        hasSelectedItems: (e) => e.value.length > 0,
        isTypingAhead: (e) => e.typeahead.keysSoFar !== "",
        isDisabled: (e) => !!e.disabled || e.fieldsetDisabled,
        isInteractive: (e) => !(e.isDisabled || e.readOnly),
        selectedItems: (e) => e.collection.items(e.value),
        highlightedItem: (e) => e.collection.item(e.highlightedValue),
        valueAsString: (e) => e.collection.itemsToString(e.selectedItems)
      },
      initial: n.open ? "open" : "idle",
      watch: {
        open: ["toggleVisibility"],
        value: ["syncSelectElement"]
      },
      on: {
        "HIGHLIGHTED_VALUE.SET": {
          actions: ["setHighlightedItem"]
        },
        "ITEM.SELECT": {
          actions: ["selectItem"]
        },
        "ITEM.CLEAR": {
          actions: ["clearItem"]
        },
        "VALUE.SET": {
          actions: ["setSelectedItems"]
        },
        "VALUE.CLEAR": {
          actions: ["clearSelectedItems"]
        },
        "COLLECTION.SET": {
          actions: ["setCollection"]
        }
      },
      activities: ["trackFormControlState"],
      states: {
        idle: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": [
              {
                guard: "isTriggerClickEvent",
                target: "open",
                actions: ["highlightFirstSelectedItem"]
              },
              {
                target: "open"
              }
            ],
            "TRIGGER.CLICK": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "highlightFirstSelectedItem"]
              }
            ],
            "TRIGGER.FOCUS": {
              target: "focused"
            },
            OPEN: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen"]
              }
            ]
          }
        },
        focused: {
          tags: ["closed"],
          entry: ["focusTriggerEl"],
          on: {
            "CONTROLLED.OPEN": [
              {
                guard: "isTriggerClickEvent",
                target: "open",
                actions: ["highlightFirstSelectedItem"]
              },
              {
                guard: "isTriggerArrowUpEvent",
                target: "open",
                actions: ["highlightComputedLastItem"]
              },
              {
                guard: ze("isTriggerArrowDownEvent", "isTriggerEnterEvent"),
                target: "open",
                actions: ["highlightComputedFirstItem"]
              },
              {
                target: "open"
              }
            ],
            OPEN: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen"]
              }
            ],
            "TRIGGER.BLUR": {
              target: "idle"
            },
            "TRIGGER.CLICK": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "highlightFirstSelectedItem"]
              }
            ],
            "TRIGGER.ENTER": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "highlightComputedFirstItem"]
              }
            ],
            "TRIGGER.ARROW_UP": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "highlightComputedLastItem"]
              }
            ],
            "TRIGGER.ARROW_DOWN": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnOpen"]
              },
              {
                target: "open",
                actions: ["invokeOnOpen", "highlightComputedFirstItem"]
              }
            ],
            "TRIGGER.ARROW_LEFT": [
              {
                guard: w(x("multiple"), "hasSelectedItems"),
                actions: ["selectPreviousItem"]
              },
              {
                guard: x("multiple"),
                actions: ["selectLastItem"]
              }
            ],
            "TRIGGER.ARROW_RIGHT": [
              {
                guard: w(x("multiple"), "hasSelectedItems"),
                actions: ["selectNextItem"]
              },
              {
                guard: x("multiple"),
                actions: ["selectFirstItem"]
              }
            ],
            "TRIGGER.HOME": {
              guard: x("multiple"),
              actions: ["selectFirstItem"]
            },
            "TRIGGER.END": {
              guard: x("multiple"),
              actions: ["selectLastItem"]
            },
            "TRIGGER.TYPEAHEAD": {
              guard: x("multiple"),
              actions: ["selectMatchingItem"]
            }
          }
        },
        open: {
          tags: ["open"],
          entry: ["focusContentEl"],
          exit: ["scrollContentToTop"],
          activities: ["trackDismissableElement", "computePlacement", "scrollToHighlightedItem", "proxyTabFocus"],
          on: {
            "CONTROLLED.CLOSE": [
              {
                guard: "shouldRestoreFocus",
                target: "focused",
                actions: ["clearHighlightedItem"]
              },
              {
                target: "idle",
                actions: ["clearHighlightedItem"]
              }
            ],
            CLOSE: [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
              },
              {
                target: "focused",
                actions: ["invokeOnClose", "clearHighlightedItem"]
              }
            ],
            "TRIGGER.CLICK": [
              {
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
              },
              {
                target: "focused",
                actions: ["invokeOnClose", "clearHighlightedItem"]
              }
            ],
            "ITEM.CLICK": [
              {
                guard: w("closeOnSelect", "isOpenControlled"),
                actions: ["selectHighlightedItem", "invokeOnClose"]
              },
              {
                guard: "closeOnSelect",
                target: "focused",
                actions: ["selectHighlightedItem", "invokeOnClose", "clearHighlightedItem"]
              },
              {
                actions: ["selectHighlightedItem"]
              }
            ],
            "CONTENT.INTERACT_OUTSIDE": [
              // == group 1 ==
              {
                guard: w("selectOnBlur", "hasHighlightedItem", "isOpenControlled"),
                actions: ["selectHighlightedItem", "invokeOnClose"]
              },
              {
                guard: w("selectOnBlur", "hasHighlightedItem"),
                target: "idle",
                actions: ["selectHighlightedItem", "invokeOnClose", "clearHighlightedItem"]
              },
              // == group 2 ==
              {
                guard: w("shouldRestoreFocus", "isOpenControlled"),
                actions: ["invokeOnClose"]
              },
              {
                guard: "shouldRestoreFocus",
                target: "focused",
                actions: ["invokeOnClose", "clearHighlightedItem"]
              },
              // == group 3 ==
              {
                guard: "isOpenControlled",
                actions: ["invokeOnClose"]
              },
              {
                target: "idle",
                actions: ["invokeOnClose", "clearHighlightedItem"]
              }
            ],
            "CONTENT.HOME": {
              actions: ["highlightFirstItem"]
            },
            "CONTENT.END": {
              actions: ["highlightLastItem"]
            },
            "CONTENT.ARROW_DOWN": [
              {
                guard: w("hasHighlightedItem", "loop", "isLastItemHighlighted"),
                actions: ["highlightFirstItem"]
              },
              {
                guard: "hasHighlightedItem",
                actions: ["highlightNextItem"]
              },
              {
                actions: ["highlightFirstItem"]
              }
            ],
            "CONTENT.ARROW_UP": [
              {
                guard: w("hasHighlightedItem", "loop", "isFirstItemHighlighted"),
                actions: ["highlightLastItem"]
              },
              {
                guard: "hasHighlightedItem",
                actions: ["highlightPreviousItem"]
              },
              {
                actions: ["highlightLastItem"]
              }
            ],
            "CONTENT.TYPEAHEAD": {
              actions: ["highlightMatchingItem"]
            },
            "ITEM.POINTER_MOVE": {
              actions: ["highlightItem"]
            },
            "ITEM.POINTER_LEAVE": {
              actions: ["clearHighlightedItem"]
            },
            "POSITIONING.SET": {
              actions: ["reposition"]
            }
          }
        }
      }
    },
    {
      guards: {
        loop: (e) => !!e.loop,
        multiple: (e) => !!e.multiple,
        hasSelectedItems: (e) => !!e.hasSelectedItems,
        hasHighlightedItem: (e) => e.highlightedValue != null,
        isFirstItemHighlighted: (e) => e.highlightedValue === e.collection.first(),
        isLastItemHighlighted: (e) => e.highlightedValue === e.collection.last(),
        selectOnBlur: (e) => !!e.selectOnBlur,
        closeOnSelect: (e, r) => e.multiple ? !1 : !!(r.closeOnSelect ?? e.closeOnSelect),
        shouldRestoreFocus: (e) => !!e.restoreFocus,
        // guard assertions (for controlled mode)
        isOpenControlled: (e) => !!e["open.controlled"],
        isTriggerClickEvent: (e, r) => {
          var o;
          return ((o = r.previousEvent) == null ? void 0 : o.type) === "TRIGGER.CLICK";
        },
        isTriggerEnterEvent: (e, r) => {
          var o;
          return ((o = r.previousEvent) == null ? void 0 : o.type) === "TRIGGER.ENTER";
        },
        isTriggerArrowUpEvent: (e, r) => {
          var o;
          return ((o = r.previousEvent) == null ? void 0 : o.type) === "TRIGGER.ARROW_UP";
        },
        isTriggerArrowDownEvent: (e, r) => {
          var o;
          return ((o = r.previousEvent) == null ? void 0 : o.type) === "TRIGGER.ARROW_DOWN";
        }
      },
      activities: {
        proxyTabFocus(e) {
          return Ve(() => l.getContentEl(e), {
            defer: !0,
            triggerElement: l.getTriggerEl(e),
            onFocus(o) {
              G(() => o.focus({ preventScroll: !0 }));
            }
          });
        },
        trackFormControlState(e, r, { initialContext: o }) {
          return He(l.getHiddenSelectEl(e), {
            onFieldsetDisabledChange(s) {
              e.fieldsetDisabled = s;
            },
            onFormReset() {
              h.selectedItems(e, o.value);
            }
          });
        },
        trackDismissableElement(e, r, { send: o }) {
          return Ae(() => l.getContentEl(e), {
            defer: !0,
            exclude: [l.getTriggerEl(e), l.getClearTriggerEl(e)],
            onFocusOutside: e.onFocusOutside,
            onPointerDownOutside: e.onPointerDownOutside,
            onInteractOutside(c) {
              var g;
              (g = e.onInteractOutside) == null || g.call(e, c), e.restoreFocus = !c.detail.focusable;
            },
            onDismiss() {
              o({ type: "CONTENT.INTERACT_OUTSIDE" });
            }
          });
        },
        computePlacement(e) {
          return e.currentPlacement = e.positioning.placement, Y(() => l.getTriggerEl(e), () => l.getPositionerEl(e), {
            defer: !0,
            ...e.positioning,
            onComplete(s) {
              e.currentPlacement = s.placement;
            }
          });
        },
        scrollToHighlightedItem(e, r, { getState: o }) {
          const s = () => {
            if (o().event.type.startsWith("ITEM.POINTER"))
              return;
            const g = l.getHighlightedOptionEl(e), v = l.getContentEl(e);
            Re(g, { rootEl: v, block: "nearest" });
          };
          return G(() => s()), De(l.getContentEl(e), ["aria-activedescendant"], s);
        }
      },
      actions: {
        reposition(e, r) {
          const o = () => l.getPositionerEl(e);
          Y(l.getTriggerEl(e), o, {
            ...e.positioning,
            ...r.options,
            defer: !0,
            listeners: !1,
            onComplete(s) {
              e.currentPlacement = s.placement;
            }
          });
        },
        toggleVisibility(e, r, { send: o }) {
          o({ type: e.open ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: r });
        },
        highlightPreviousItem(e) {
          if (e.highlightedValue == null)
            return;
          const r = e.collection.prev(e.highlightedValue);
          h.highlightedItem(e, r);
        },
        highlightNextItem(e) {
          if (e.highlightedValue == null)
            return;
          const r = e.collection.next(e.highlightedValue);
          h.highlightedItem(e, r);
        },
        highlightFirstItem(e) {
          const r = e.collection.first();
          h.highlightedItem(e, r);
        },
        highlightLastItem(e) {
          const r = e.collection.last();
          h.highlightedItem(e, r);
        },
        focusContentEl(e) {
          G(() => {
            var r;
            (r = l.getContentEl(e)) == null || r.focus({ preventScroll: !0 });
          });
        },
        focusTriggerEl(e) {
          G(() => {
            var r;
            (r = l.getTriggerEl(e)) == null || r.focus({ preventScroll: !0 });
          });
        },
        selectHighlightedItem(e, r) {
          const o = r.value ?? e.highlightedValue;
          o != null && h.selectedItem(e, o);
        },
        highlightComputedFirstItem(e) {
          const r = e.hasSelectedItems ? e.collection.sort(e.value)[0] : e.collection.first();
          h.highlightedItem(e, r);
        },
        highlightComputedLastItem(e) {
          const r = e.hasSelectedItems ? e.collection.sort(e.value)[0] : e.collection.last();
          h.highlightedItem(e, r);
        },
        highlightFirstSelectedItem(e) {
          if (!e.hasSelectedItems)
            return;
          const [r] = e.collection.sort(e.value);
          h.highlightedItem(e, r);
        },
        highlightItem(e, r) {
          h.highlightedItem(e, r.value);
        },
        highlightMatchingItem(e, r) {
          const o = e.collection.search(r.key, {
            state: e.typeahead,
            currentValue: e.highlightedValue
          });
          o != null && h.highlightedItem(e, o);
        },
        setHighlightedItem(e, r) {
          h.highlightedItem(e, r.value);
        },
        clearHighlightedItem(e) {
          h.highlightedItem(e, null, !0);
        },
        selectItem(e, r) {
          h.selectedItem(e, r.value);
        },
        clearItem(e, r) {
          const o = e.value.filter((s) => s !== r.value);
          h.selectedItems(e, o);
        },
        setSelectedItems(e, r) {
          h.selectedItems(e, r.value);
        },
        clearSelectedItems(e) {
          h.selectedItems(e, []);
        },
        selectPreviousItem(e) {
          const r = e.collection.prev(e.value[0]);
          h.selectedItem(e, r);
        },
        selectNextItem(e) {
          const r = e.collection.next(e.value[0]);
          h.selectedItem(e, r);
        },
        selectFirstItem(e) {
          const r = e.collection.first();
          h.selectedItem(e, r);
        },
        selectLastItem(e) {
          const r = e.collection.last();
          h.selectedItem(e, r);
        },
        selectMatchingItem(e, r) {
          const o = e.collection.search(r.key, {
            state: e.typeahead,
            currentValue: e.value[0]
          });
          o != null && h.selectedItem(e, o);
        },
        scrollContentToTop(e) {
          var r;
          (r = l.getContentEl(e)) == null || r.scrollTo(0, 0);
        },
        invokeOnOpen(e) {
          var r;
          (r = e.onOpenChange) == null || r.call(e, { open: !0 });
        },
        invokeOnClose(e) {
          var r;
          (r = e.onOpenChange) == null || r.call(e, { open: !1 });
        },
        syncSelectElement(e) {
          const r = l.getHiddenSelectEl(e);
          if (r) {
            for (const o of r.options)
              o.selected = e.value.includes(o.value);
            Fe(r, e.value.join(","), { type: "HTMLSelectElement" });
          }
        },
        setCollection(e, r) {
          e.collection = r.value;
        }
      }
    }
  );
}
function qe(t) {
  const n = l.getHiddenSelectEl(t);
  if (!n)
    return;
  const e = l.getWin(t), r = new e.Event("change", { bubbles: !0 });
  n.dispatchEvent(r);
}
var N = {
  change: (t) => {
    var n;
    (n = t.onValueChange) == null || n.call(t, {
      value: Array.from(t.value),
      items: t.selectedItems
    }), qe(t);
  },
  highlightChange: (t) => {
    var n;
    (n = t.onHighlightChange) == null || n.call(t, {
      highlightedValue: t.highlightedValue,
      highlightedItem: t.highlightedItem
    });
  }
}, h = {
  selectedItem: (t, n, e = !1) => {
    if (F(t.value, n) || n == null && !e)
      return;
    if (n == null && e) {
      t.value = [], N.change(t);
      return;
    }
    const r = t.multiple ? Se(t.value, n) : [n];
    t.value = r, N.change(t);
  },
  selectedItems: (t, n) => {
    F(t.value, n) || (t.value = n, N.change(t));
  },
  highlightedItem: (t, n, e = !1) => {
    F(t.highlightedValue, n) || n == null && !e || (t.highlightedValue = n ?? null, N.highlightChange(t));
  }
};
D()([
  "closeOnSelect",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "highlightedValue",
  "id",
  "ids",
  "invalid",
  "collection",
  "loop",
  "multiple",
  "name",
  "onFocusOutside",
  "onHighlightChange",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "onValueChange",
  "open",
  "open.controlled",
  "positioning",
  "readOnly",
  "selectOnBlur",
  "value"
]);
D()(["item"]);
D()(["id"]);
D()(["htmlFor"]);
const Ye = ie.extendWith("valueText"), [Je, O] = ee({
  hookName: "useSelectContext",
  providerName: "<SelectProvider />"
}), Qe = (t) => {
  const n = O(), e = ne(), r = f(() => n().contentProps, () => e().presenceProps, t);
  return u(W, {
    get when() {
      return !e().isUnmounted;
    },
    get children() {
      return u(T.div, r);
    }
  });
};
var Xe = /* @__PURE__ */ y('<option value="">'), Ze = /* @__PURE__ */ y("<select>"), et = /* @__PURE__ */ y("<option>");
const tt = (t) => {
  const n = O(), e = f(() => n().controlProps, t), r = P(() => n().value.length === 0);
  return [u(T.div, e), (() => {
    var o = Ze();
    return ae(o, H(() => n().hiddenSelectProps), !1, !0), L(o, u(W, {
      get when() {
        return r();
      },
      get children() {
        return Xe();
      }
    }), null), L(o, u(de, {
      get each() {
        return n().collection.toArray();
      },
      children: (s) => (() => {
        var c = et();
        return L(c, () => s().label), ce(() => c.value = s().value), c;
      })()
    }), null), o;
  })()];
}, nt = (t) => {
  const n = O(), e = f(() => n().indicatorProps, t);
  return u(T.div, e);
}, [rt, oe] = ee({
  hookName: "useSelectItemContext",
  providerName: "<SelectItemProvider />"
}), it = (t) => {
  const [n, e] = B()(t, ["item"]), r = O(), o = f(() => r().getItemProps(n), e), s = () => te(e.children, () => r().getItemState(n));
  return u(rt, {
    value: n,
    get children() {
      return u(T.div, H(o, {
        get children() {
          return s();
        }
      }));
    }
  });
}, ot = (t) => {
  const n = O(), e = oe(), r = f(() => n().getItemIndicatorProps(e), t);
  return u(T.div, r);
}, lt = (t) => {
  const n = O(), e = oe(), r = f(() => n().getItemTextProps(e), t);
  return u(T.span, r);
}, at = (t) => {
  const n = O(), e = f(() => n().labelProps, t);
  return u(T.label, e);
}, st = (t) => {
  const n = O(), e = ne(), r = f(() => n().positionerProps, t);
  return u(W, {
    get when() {
      return !e().isUnmounted;
    },
    get children() {
      return u(T.div, r);
    }
  });
}, ct = (t) => {
  const [n, e] = B()(t, [
    "isItemDisabled",
    "itemToValue",
    "itemToString",
    "items"
  ]), r = () => K(n), o = ke(), s = () => f({
    id: X(),
    getRootNode: o,
    collection: r()
  }, e), [c, g] = we(je(s()), {
    context: s
  });
  return P(() => Ke(c, g, Pe));
}, dt = (t) => {
  const [n, e] = Ge(t), [r, o] = B()(e, ["closeOnSelect", "dir", "disabled", "form", "getRootNode", "highlightedValue", "id", "ids", "invalid", "isItemDisabled", "items", "itemToString", "itemToValue", "loop", "multiple", "name", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onValueChange", "open", "positioning", "readOnly", "selectOnBlur", "value"]), s = ct(r), c = Ne(f(() => ({
    present: s().isOpen
  }), n)), g = f(() => s().rootProps, o), v = () => te(o.children, s);
  return u(Je, {
    value: s,
    get children() {
      return u(Le, {
        value: c,
        get children() {
          return u(T.div, H(g, {
            get children() {
              return v();
            }
          }));
        }
      });
    }
  });
}, ut = (t) => {
  const n = O(), e = f(() => n().triggerProps, t);
  return u(T.button, e);
}, gt = (t) => {
  const n = O(), e = f(() => Ye.build().valueText.attrs, t);
  return u(T.span, H(e, {
    get children() {
      return n().valueAsString || t.placeholder;
    }
  }));
}, ht = ".select-component{font-family:var(--font-family-inter)}.select-component-error:not(:has(:disabled)) :where(label),.select-component-error:not(:has(:disabled)):has(:focus,:active) label{color:var(--color-red-400)}.select-component-error:not(:has(:disabled)):has(:focus,:active) .select-box{outline:var(--spacing-1) solid var(--color-red-100);box-shadow:0 0 0 1px inset var(--color-red-400)}:host(.dark) .select-component-error:not(:has(:disabled)) :where(label),:host(.dark) .select-component-error:not(:has(:disabled)):has(:focus,:active) label{color:var(--color-red-300)}:host(.dark) .select-component-error:not(:has(:disabled)) :where(.select-box){box-shadow:0 0 0 1px inset var(--color-red-300)}:host(.dark) .select-component-error:not(:has(:disabled)):has(:focus,:active) .select-box{outline:var(--spacing-1) solid var(--color-red-900)}.select{--anim-duration: .3s;--anim-timing: ease-in-out;position:relative}.select-label{display:block;margin-bottom:var(--spacing-2);color:var(--color-gray-800);font-weight:var(--font-weight-semibold);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);transition:var(--anim-duration) var(--anim-timing);transition-property:color}.select-label:has(~*>.select-box:focus){color:var(--color-blue-500)}.text-hint,.text-error{margin-top:var(--spacing-1);margin-bottom:0;font-weight:var(--font-weight-normal);font-size:var(--font-size-3-5)}.text-hint{color:var(--color-gray-500)}.text-error{color:var(--color-red-700)}:host(.dark) .select-label{color:var(--color-white)}:host(.dark) .select-label[data-disabled]{color:var(--color-gray-400)}:host(.dark) .text-hint{color:var(--color-gray-300)}:host(.dark) div[data-disabled]~.text-hint{color:var(--color-gray-400)}:host(.dark) .text-error{color:var(--color-red-300)}.select-box{display:flex;align-items:center;width:100%;padding:var(--spacing-3);gap:var(--spacing-2);border:0;border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 0 0 1px inset var(--color-gray-500);font-size:var(--font-size-4);line-height:var(--line-height-5-5);font-family:var(--font-family-inter);text-align:left;cursor:pointer;transition:var(--anim-duration) var(--anim-timing);transition-property:color,box-shadow,background,outline-width}.select-box:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-blue-500)}.select-box[aria-disabled=true]{outline:0;background-color:var(--color-blue-100);box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400);cursor:not-allowed}:host(.dark) .select-box{background-color:var(--color-gray-700);box-shadow:0 0 0 1px inset var(--color-gray-500);color:var(--color-white)}:host(.dark) .select-box:where(:focus,:active){outline:var(--spacing-1) solid var(--color-blue-900);box-shadow:0 0 0 1px inset var(--color-blue-400)}:host(.dark) .select-box:where(:disabled){box-shadow:0 0 0 1px inset var(--color-gray-400);color:var(--color-gray-400)}.select-box-icon{margin-left:auto;font-size:var(--spacing-6);pointer-events:none}.select-list{width:100%;max-height:var(--spacing-80);margin:0;margin-top:var(--spacing-1);padding:0;overflow-x:hidden;overflow-y:auto;border:1px solid var(--color-gray-100);border-radius:var(--radius-lg);background-color:var(--color-white);box-shadow:0 4px 6px -2px #10182808,0 12px 16px -4px #10182814;list-style:none}:host(.dark) .select-list{border:none;background-color:var(--color-gray-800);color:var(--color-white)}.select-positioner{width:var(--reference-width)}.select-item{display:flex;align-items:center;padding-inline:var(--spacing-3);padding-block:var(--spacing-2);gap:var(--spacing-1);cursor:default}.select-item[data-highlighted]{background-color:var(--color-blue-100)}.select-item:active,.select-item[data-state=checked]{background-color:var(--color-blue-100);color:var(--color-blue-700)}.select-item-icon{margin-left:auto;font-size:var(--spacing-5)}:host(.dark) .select-item[data-highlighted]{background-color:var(--color-gray-700)}:host(.dark) .select-item:active{background-color:var(--color-gray-700);color:var(--color-blue-200)}:host(.dark) .select-item[data-state=checked]{background-color:var(--color-gray-700);color:var(--color-blue-300)}";
var pt = /* @__PURE__ */ y("<slot>"), J = /* @__PURE__ */ y("<style>"), mt = /* @__PURE__ */ y("<slot name=label>"), vt = /* @__PURE__ */ y("<solid-icon icon=mingcute-down-line>", !0, !1), It = /* @__PURE__ */ y("<solid-icon icon=mingcute-check-line>", !0, !1), ft = /* @__PURE__ */ y("<p class=text-error><slot name=error>"), bt = /* @__PURE__ */ y("<p class=text-hint><slot name=hint>");
const Et = "solid-select", le = "select-option";
Q(le, E.object({
  value: E.string().optional().default("")
}), () => (() => {
  var t = pt();
  return t._$owner = A(), t;
})());
Q(Et, E.object({
  value: E.union([E.string(), E.string().array()]).optional(),
  name: E.string(),
  disabled: E.boolean().optional(),
  error: E.boolean().optional(),
  multiple: E.boolean().optional().default(!1),
  required: E.boolean().optional().default(!1)
}), (t, {
  emit: n
}) => {
  const e = se(), r = e.attachInternals(), [o, s] = me(() => t.value);
  let c;
  const g = P(() => {
    if (t.multiple) {
      const i = new FormData(), a = [o()].flat().filter((p) => !!p);
      return a.length === 0 ? null : (a.forEach((p) => {
        i.append(t.name, p);
      }), i);
    }
    return o() ?? null;
  }), v = X();
  ue(() => {
    if (!g() && t.required && c) {
      const i = c.querySelector("select");
      i == null || i.setAttribute("required", "");
      const a = i == null ? void 0 : i.validity, p = i == null ? void 0 : i.validationMessage;
      a && p && r.setValidity(a, p, c), i == null || i.removeAttribute("required");
    } else
      r.setValidity({});
    r.setFormValue(g()), Object.assign(e, {
      setSelectValue(i) {
        (typeof i == "string" || Array.isArray(i)) && s(i);
      }
    }), n("value-change", o(), {
      bubbles: !1,
      composed: !1
    });
  });
  const V = pe(e), R = () => t.error && V.has("error"), k = () => !t.error && V.has("hint"), C = ve(e), S = () => C().filter((i) => i.matches(le)).map((i) => ({
    value: i.getAttribute("value"),
    label: i.textContent
  }));
  return ge(() => {
    e.setAttribute("tabindex", "-1");
  }), [(() => {
    var i = J();
    return i.innerHTML = `/* layer: preflights */
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
      `, i;
  })(), (() => {
    var i = J();
    return L(i, ht), i;
  })(), u(dt, {
    getRootNode: () => e.shadowRoot,
    get disabled() {
      return t.disabled;
    },
    get invalid() {
      return t.error;
    },
    get items() {
      return S();
    },
    class: "select-component",
    get classList() {
      return {
        "select-component-error": R()
      };
    },
    get value() {
      return [o()].filter((i) => !!i).flat();
    },
    onValueChange: (i) => {
      if (t.multiple) {
        s(i.value);
        return;
      }
      s(i.value[0]);
    },
    get multiple() {
      return t.multiple;
    },
    ref(i) {
      var a = c;
      typeof a == "function" ? a(i) : c = i;
    },
    tabindex: -1,
    get children() {
      return [u(at, {
        class: "select-label",
        get children() {
          var i = mt();
          return i._$owner = A(), i;
        }
      }), u(tt, {
        get children() {
          return u(ut, {
            class: "select-box",
            get "aria-describedby"() {
              return P(() => !!k())() ? `hint-message-${v}` : R() ? `error-message-${v}` : void 0;
            },
            get children() {
              return [u(gt, {}), u(nt, {
                class: "select-box-icon",
                get children() {
                  var i = vt();
                  return i._$owner = A(), i;
                }
              })];
            }
          });
        }
      }), u(st, {
        class: "select-positioner",
        style: {
          "--zindex": "1000",
          "z-index": "var(--zindex, var(--z-index))"
        },
        get children() {
          return u(Qe, {
            class: "select-list",
            get children() {
              return u(he, {
                get each() {
                  return S();
                },
                children: (i) => u(it, {
                  item: i,
                  class: "select-item",
                  get children() {
                    return [u(lt, {
                      get children() {
                        return i.label;
                      }
                    }), u(ot, {
                      class: "select-item-icon",
                      get children() {
                        var a = It();
                        return a._$owner = A(), a;
                      }
                    })];
                  }
                })
              });
            }
          });
        }
      }), P(() => P(() => !!R())() && (() => {
        var i = ft(), a = i.firstChild;
        return j(i, "id", `error-message-${v}`), a._$owner = A(), i;
      })()), P(() => P(() => !!k())() && (() => {
        var i = bt(), a = i.firstChild;
        return j(i, "id", `hint-message-${v}`), a._$owner = A(), i;
      })())];
    }
  })];
}, {
  formAssociated: !0
});
export {
  le as SELECT_OPTION_TAG,
  Et as SELECT_TAG
};
