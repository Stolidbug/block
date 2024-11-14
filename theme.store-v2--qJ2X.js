import { o as Be, h as We, k as Oe, j as qe, s as Ye, b as He, f as Je } from "./R5675YMU-BY7cX9Th.js";
function Ge(r, e, t) {
  let s, n;
  const a = typeof window < "u" && "MutationObserver" in window;
  typeof e == "function" ? (s = {}, n = e) : (s = e, n = t);
  const i = a ? new MutationObserver(n) : void 0, o = (p, w) => i == null ? void 0 : i.observe(p, Oe(w) ?? s), u = () => {
    qe(Oe(r)).forEach((p) => {
      p instanceof Node ? o(p, s) : o(p[0], p[1]);
    });
  }, c = () => i == null ? void 0 : i.disconnect();
  return Be(u), We(c), [
    o,
    {
      start: u,
      stop: c,
      instance: i,
      isSupported: a
    }
  ];
}
var g;
(function(r) {
  r.assertEqual = (n) => n;
  function e(n) {
  }
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, r.getValidEnumValues = (n) => {
    const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of a)
      i[o] = n[o];
    return r.objectValues(i);
  }, r.objectValues = (n) => r.objectKeys(n).map(function(a) {
    return n[a];
  }), r.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, r.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(g || (g = {}));
var ke;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(ke || (ke = {}));
const f = g.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), A = (r) => {
  switch (typeof r) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return isNaN(r) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(r) ? f.array : r === null ? f.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? f.promise : typeof Map < "u" && r instanceof Map ? f.map : typeof Set < "u" && r instanceof Set ? f.set : typeof Date < "u" && r instanceof Date ? f.date : f.object;
    default:
      return f.unknown;
  }
}, d = g.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Xe = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class Z extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          s._errors.push(t(i));
        else {
          let o = s, u = 0;
          for (; u < i.path.length; ) {
            const c = i.path[u];
            u === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof Z))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, s = [];
    for (const n of this.issues)
      n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [], t[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Z.create = (r) => new Z(r);
const q = (r, e) => {
  let t;
  switch (r.code) {
    case d.invalid_type:
      r.received === f.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case d.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, g.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${g.joinValues(r.keys, ", ")}`;
      break;
    case d.invalid_union:
      t = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${g.joinValues(r.options)}`;
      break;
    case d.invalid_enum_value:
      t = `Invalid enum value. Expected ${g.joinValues(r.options)}, received '${r.received}'`;
      break;
    case d.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case d.invalid_return_type:
      t = "Invalid function return type";
      break;
    case d.invalid_date:
      t = "Invalid date";
      break;
    case d.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : g.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case d.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case d.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case d.custom:
      t = "Invalid input";
      break;
    case d.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case d.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, g.assertNever(r);
  }
  return { message: t };
};
let Ie = q;
function Ke(r) {
  Ie = r;
}
function le() {
  return Ie;
}
const fe = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  if (n.message !== void 0)
    return {
      ...n,
      path: a,
      message: n.message
    };
  let o = "";
  const u = s.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: o
  };
}, Qe = [];
function l(r, e) {
  const t = le(), s = fe({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      t,
      t === q ? void 0 : q
      // then global default map
    ].filter((n) => !!n)
  });
  r.common.issues.push(s);
}
class k {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted")
        return y;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) {
      const a = await n.key, i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return k.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return y;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const y = Object.freeze({
  status: "aborted"
}), B = (r) => ({ status: "dirty", value: r }), b = (r) => ({ status: "valid", value: r }), be = (r) => r.status === "aborted", we = (r) => r.status === "dirty", X = (r) => r.status === "valid", K = (r) => typeof Promise < "u" && r instanceof Promise;
function he(r, e, t, s) {
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(r);
}
function je(r, e, t, s, n) {
  if (typeof e == "function" ? r !== e || !n : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(r, t), t;
}
var h;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(h || (h = {}));
var J, G;
class N {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ce = (r, e) => {
  if (X(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Z(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function v(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => {
    var u, c;
    const { message: p } = r;
    return i.code === "invalid_enum_value" ? { message: p ?? o.defaultError } : typeof o.data > "u" ? { message: (u = p ?? s) !== null && u !== void 0 ? u : o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = p ?? t) !== null && c !== void 0 ? c : o.defaultError };
  }, description: n };
}
class _ {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return A(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: A(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new k(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: A(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (K(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const n = {
      common: {
        issues: [],
        async: (s = t == null ? void 0 : t.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: A(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return Ce(n, a);
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: A(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (K(n) ? n : Promise.resolve(n));
    return Ce(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: d.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new C({
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return E.create(this, this._def);
  }
  nullable() {
    return V.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return O.create(this, this._def);
  }
  promise() {
    return H.create(this, this._def);
  }
  or(e) {
    return te.create([this, e], this._def);
  }
  and(e) {
    return re.create(this, e, this._def);
  }
  transform(e) {
    return new C({
      ...v(this._def),
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new oe({
      ...v(this._def),
      innerType: this,
      defaultValue: t,
      typeName: m.ZodDefault
    });
  }
  brand() {
    return new Ze({
      typeName: m.ZodBranded,
      type: this,
      ...v(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new de({
      ...v(this._def),
      innerType: this,
      catchValue: t,
      typeName: m.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ue.create(this, e);
  }
  readonly() {
    return ce.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Fe = /^c[^\s-]{8,}$/i, et = /^[0-9a-z]+$/, tt = /^[0-9A-HJKMNP-TV-Z]{26}$/, rt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, st = /^[a-z0-9_-]{21}$/i, nt = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, at = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, it = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xe;
const ot = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, dt = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ct = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ae = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ut = new RegExp(`^${Ae}$`);
function Me(r) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function lt(r) {
  return new RegExp(`^${Me(r)}$`);
}
function $e(r) {
  let e = `${Ae}T${Me(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ft(r, e) {
  return !!((e === "v4" || !e) && ot.test(r) || (e === "v6" || !e) && dt.test(r));
}
class S extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.string,
        received: a.parsedType
      }), y;
    }
    const s = new k();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? l(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && l(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        at.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "email",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        xe || (xe = new RegExp(it, "u")), xe.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "emoji",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        rt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "uuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "nanoid")
        st.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "nanoid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        Fe.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        et.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid2",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        tt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "ulid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), l(n, {
            validation: "url",
            code: d.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "regex",
        code: d.invalid_string,
        message: a.message
      }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "datetime" ? $e(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "datetime",
        message: a.message
      }), s.dirty()) : a.kind === "date" ? ut.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "date",
        message: a.message
      }), s.dirty()) : a.kind === "time" ? lt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "time",
        message: a.message
      }), s.dirty()) : a.kind === "duration" ? nt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "duration",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "ip" ? ft(e.data, a.version) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "ip",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64" ? ct.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "base64",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : g.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), {
      validation: t,
      code: d.invalid_string,
      ...h.errToObj(s)
    });
  }
  _addCheck(e) {
    return new S({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...h.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...h.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...h.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
  }
  datetime(e) {
    var t, s;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : !1,
      ...h.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...h.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...h.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...h.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...h.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...h.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...h.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...h.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, h.errToObj(e));
  }
  trim() {
    return new S({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new S({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new S({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
S.create = (r) => {
  var e;
  return new S({
    checks: [],
    typeName: m.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...v(r)
  });
};
function ht(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = parseInt(r.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class M extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.number,
        received: a.parsedType
      }), y;
    }
    let s;
    const n = new k();
    for (const a of this._def.checks)
      a.kind === "int" ? g.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? ht(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_finite,
        message: a.message
      }), n.dirty()) : g.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new M({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: h.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new M({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: h.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: h.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: h.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: h.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && g.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
M.create = (r) => new M({
  checks: [],
  typeName: m.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class $ extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== f.bigint) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.bigint,
        received: a.parsedType
      }), y;
    }
    let s;
    const n = new k();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : g.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new $({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: h.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new $({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
$.create = (r) => {
  var e;
  return new $({
    checks: [],
    typeName: m.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...v(r)
  });
};
class Q extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.boolean,
        received: s.parsedType
      }), y;
    }
    return b(e.data);
  }
}
Q.create = (r) => new Q({
  typeName: m.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class D extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.date,
        received: a.parsedType
      }), y;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_date
      }), y;
    }
    const s = new k();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : g.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
D.create = (r) => new D({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: m.ZodDate,
  ...v(r)
});
class pe extends _ {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.symbol,
        received: s.parsedType
      }), y;
    }
    return b(e.data);
  }
}
pe.create = (r) => new pe({
  typeName: m.ZodSymbol,
  ...v(r)
});
class F extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.undefined,
        received: s.parsedType
      }), y;
    }
    return b(e.data);
  }
}
F.create = (r) => new F({
  typeName: m.ZodUndefined,
  ...v(r)
});
class ee extends _ {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.null,
        received: s.parsedType
      }), y;
    }
    return b(e.data);
  }
}
ee.create = (r) => new ee({
  typeName: m.ZodNull,
  ...v(r)
});
class Y extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return b(e.data);
  }
}
Y.create = (r) => new Y({
  typeName: m.ZodAny,
  ...v(r)
});
class L extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return b(e.data);
  }
}
L.create = (r) => new L({
  typeName: m.ZodUnknown,
  ...v(r)
});
class j extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return l(t, {
      code: d.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), y;
  }
}
j.create = (r) => new j({
  typeName: m.ZodNever,
  ...v(r)
});
class me extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.void,
        received: s.parsedType
      }), y;
    }
    return b(e.data);
  }
}
me.create = (r) => new me({
  typeName: m.ZodVoid,
  ...v(r)
});
class O extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== f.array)
      return l(t, {
        code: d.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), y;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (l(t, {
        code: i ? d.too_big : d.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (l(t, {
      code: d.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (l(t, {
      code: d.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new N(t, i, t.path, o)))).then((i) => k.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new N(t, i, t.path, o)));
    return k.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new O({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new O({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new O({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
O.create = (r, e) => new O({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: m.ZodArray,
  ...v(e)
});
function U(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = E.create(U(s));
    }
    return new x({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof O ? new O({
    ...r._def,
    type: U(r.element)
  }) : r instanceof E ? E.create(U(r.unwrap())) : r instanceof V ? V.create(U(r.unwrap())) : r instanceof R ? R.create(r.items.map((e) => U(e))) : r;
}
class x extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = g.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const c = this._getOrReturnCtx(e);
      return l(c, {
        code: d.invalid_type,
        expected: f.object,
        received: c.parsedType
      }), y;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || o.push(c);
    const u = [];
    for (const c of i) {
      const p = a[c], w = n.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: p._parse(new N(n, w, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof j) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const p of o)
          u.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: n.data[p] }
          });
      else if (c === "strict")
        o.length > 0 && (l(n, {
          code: d.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const p of o) {
        const w = n.data[p];
        u.push({
          key: { status: "valid", value: p },
          value: c._parse(
            new N(n, w, n.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const p of u) {
        const w = await p.key, Se = await p.value;
        c.push({
          key: w,
          value: Se,
          alwaysSet: p.alwaysSet
        });
      }
      return c;
    }).then((c) => k.mergeObjectSync(s, c)) : k.mergeObjectSync(s, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return h.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, s) => {
          var n, a, i, o;
          const u = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = h.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new x({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: m.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new x({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return g.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return U(this);
  }
  partial(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof E; )
          a = a._def.innerType;
        t[s] = a;
      }
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Pe(g.objectKeys(this.shape));
  }
}
x.create = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: m.ZodObject,
  ...v(e)
});
x.strictCreate = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strict",
  catchall: j.create(),
  typeName: m.ZodObject,
  ...v(e)
});
x.lazycreate = (r, e) => new x({
  shape: r,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: m.ZodObject,
  ...v(e)
});
class te extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new Z(o.ctx.common.issues));
      return l(t, {
        code: d.invalid_union,
        unionErrors: i
      }), y;
    }
    if (t.common.async)
      return Promise.all(s.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const u of s) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, p = u._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((u) => new Z(u));
      return l(t, {
        code: d.invalid_union,
        unionErrors: o
      }), y;
    }
  }
  get options() {
    return this._def.options;
  }
}
te.create = (r, e) => new te({
  options: r,
  typeName: m.ZodUnion,
  ...v(e)
});
const I = (r) => r instanceof ne ? I(r.schema) : r instanceof C ? I(r.innerType()) : r instanceof ae ? [r.value] : r instanceof P ? r.options : r instanceof ie ? g.objectValues(r.enum) : r instanceof oe ? I(r._def.innerType) : r instanceof F ? [void 0] : r instanceof ee ? [null] : r instanceof E ? [void 0, ...I(r.unwrap())] : r instanceof V ? [null, ...I(r.unwrap())] : r instanceof Ze || r instanceof ce ? I(r.unwrap()) : r instanceof de ? I(r._def.innerType) : [];
class _e extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.object)
      return l(t, {
        code: d.invalid_type,
        expected: f.object,
        received: t.parsedType
      }), y;
    const s = this.discriminator, n = t.data[s], a = this.optionsMap.get(n);
    return a ? t.common.async ? a._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : a._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (l(t, {
      code: d.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), y);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, s) {
    const n = /* @__PURE__ */ new Map();
    for (const a of t) {
      const i = I(a.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new _e({
      typeName: m.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...v(s)
    });
  }
}
function Te(r, e) {
  const t = A(r), s = A(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === f.object && s === f.object) {
    const n = g.objectKeys(e), a = g.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const u = Te(r[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && s === f.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], u = Te(i, o);
      if (!u.valid)
        return { valid: !1 };
      n.push(u.data);
    }
    return { valid: !0, data: n };
  } else return t === f.date && s === f.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class re extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (be(a) || be(i))
        return y;
      const o = Te(a.value, i.value);
      return o.valid ? ((we(a) || we(i)) && t.dirty(), { status: t.value, value: o.data }) : (l(s, {
        code: d.invalid_intersection_types
      }), y);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
re.create = (r, e, t) => new re({
  left: r,
  right: e,
  typeName: m.ZodIntersection,
  ...v(t)
});
class R extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.array)
      return l(s, {
        code: d.invalid_type,
        expected: f.array,
        received: s.parsedType
      }), y;
    if (s.data.length < this._def.items.length)
      return l(s, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), y;
    !this._def.rest && s.data.length > this._def.items.length && (l(s, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new N(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => k.mergeArray(t, i)) : k.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new R({
      ...this._def,
      rest: e
    });
  }
}
R.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new R({
    items: r,
    typeName: m.ZodTuple,
    rest: null,
    ...v(e)
  });
};
class se extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.object)
      return l(s, {
        code: d.invalid_type,
        expected: f.object,
        received: s.parsedType
      }), y;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new N(s, o, s.path, o)),
        value: i._parse(new N(s, s.data[o], s.path, o)),
        alwaysSet: o in s.data
      });
    return s.common.async ? k.mergeObjectAsync(t, n) : k.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof _ ? new se({
      keyType: e,
      valueType: t,
      typeName: m.ZodRecord,
      ...v(s)
    }) : new se({
      keyType: S.create(),
      valueType: e,
      typeName: m.ZodRecord,
      ...v(t)
    });
  }
}
class ye extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.map)
      return l(s, {
        code: d.invalid_type,
        expected: f.map,
        received: s.parsedType
      }), y;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, u], c) => ({
      key: n._parse(new N(s, o, s.path, [c, "key"])),
      value: a._parse(new N(s, u, s.path, [c, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const c = await u.key, p = await u.value;
          if (c.status === "aborted" || p.status === "aborted")
            return y;
          (c.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(c.value, p.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of i) {
        const c = u.key, p = u.value;
        if (c.status === "aborted" || p.status === "aborted")
          return y;
        (c.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(c.value, p.value);
      }
      return { status: t.value, value: o };
    }
  }
}
ye.create = (r, e, t) => new ye({
  valueType: e,
  keyType: r,
  typeName: m.ZodMap,
  ...v(t)
});
class z extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.set)
      return l(s, {
        code: d.invalid_type,
        expected: f.set,
        received: s.parsedType
      }), y;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (l(s, {
      code: d.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (l(s, {
      code: d.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(u) {
      const c = /* @__PURE__ */ new Set();
      for (const p of u) {
        if (p.status === "aborted")
          return y;
        p.status === "dirty" && t.dirty(), c.add(p.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...s.data.values()].map((u, c) => a._parse(new N(s, u, s.path, c)));
    return s.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, t) {
    return new z({
      ...this._def,
      minSize: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new z({
      ...this._def,
      maxSize: { value: e, message: h.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (r, e) => new z({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: m.ZodSet,
  ...v(e)
});
class W extends _ {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.function)
      return l(t, {
        code: d.invalid_type,
        expected: f.function,
        received: t.parsedType
      }), y;
    function s(o, u) {
      return fe({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          le(),
          q
        ].filter((c) => !!c),
        issueData: {
          code: d.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function n(o, u) {
      return fe({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          le(),
          q
        ].filter((c) => !!c),
        issueData: {
          code: d.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof H) {
      const o = this;
      return b(async function(...u) {
        const c = new Z([]), p = await o._def.args.parseAsync(u, a).catch((ge) => {
          throw c.addIssue(s(u, ge)), c;
        }), w = await Reflect.apply(i, this, p);
        return await o._def.returns._def.type.parseAsync(w, a).catch((ge) => {
          throw c.addIssue(n(w, ge)), c;
        });
      });
    } else {
      const o = this;
      return b(function(...u) {
        const c = o._def.args.safeParse(u, a);
        if (!c.success)
          throw new Z([s(u, c.error)]);
        const p = Reflect.apply(i, this, c.data), w = o._def.returns.safeParse(p, a);
        if (!w.success)
          throw new Z([n(p, w.error)]);
        return w.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new W({
      ...this._def,
      args: R.create(e).rest(L.create())
    });
  }
  returns(e) {
    return new W({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new W({
      args: e || R.create([]).rest(L.create()),
      returns: t || L.create(),
      typeName: m.ZodFunction,
      ...v(s)
    });
  }
}
class ne extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ne.create = (r, e) => new ne({
  getter: r,
  typeName: m.ZodLazy,
  ...v(e)
});
class ae extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return l(t, {
        received: t.data,
        code: d.invalid_literal,
        expected: this._def.value
      }), y;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ae.create = (r, e) => new ae({
  value: r,
  typeName: m.ZodLiteral,
  ...v(e)
});
function Pe(r, e) {
  return new P({
    values: r,
    typeName: m.ZodEnum,
    ...v(e)
  });
}
class P extends _ {
  constructor() {
    super(...arguments), J.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        expected: g.joinValues(s),
        received: t.parsedType,
        code: d.invalid_type
      }), y;
    }
    if (he(this, J) || je(this, J, new Set(this._def.values)), !he(this, J).has(e.data)) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        received: t.data,
        code: d.invalid_enum_value,
        options: s
      }), y;
    }
    return b(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return P.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return P.create(this.options.filter((s) => !e.includes(s)), {
      ...this._def,
      ...t
    });
  }
}
J = /* @__PURE__ */ new WeakMap();
P.create = Pe;
class ie extends _ {
  constructor() {
    super(...arguments), G.set(this, void 0);
  }
  _parse(e) {
    const t = g.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== f.string && s.parsedType !== f.number) {
      const n = g.objectValues(t);
      return l(s, {
        expected: g.joinValues(n),
        received: s.parsedType,
        code: d.invalid_type
      }), y;
    }
    if (he(this, G) || je(this, G, new Set(g.getValidEnumValues(this._def.values))), !he(this, G).has(e.data)) {
      const n = g.objectValues(t);
      return l(s, {
        received: s.data,
        code: d.invalid_enum_value,
        options: n
      }), y;
    }
    return b(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
G = /* @__PURE__ */ new WeakMap();
ie.create = (r, e) => new ie({
  values: r,
  typeName: m.ZodNativeEnum,
  ...v(e)
});
class H extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return l(t, {
        code: d.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), y;
    const s = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return b(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
H.create = (r, e) => new H({
  type: r,
  typeName: m.ZodPromise,
  ...v(e)
});
class C extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        l(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted")
            return y;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: s.path,
            parent: s
          });
          return u.status === "aborted" ? y : u.status === "dirty" || t.value === "dirty" ? B(u.value) : u;
        });
      {
        if (t.value === "aborted")
          return y;
        const o = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? y : o.status === "dirty" || t.value === "dirty" ? B(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const u = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!X(i))
          return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => X(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    g.assertNever(n);
  }
}
C.create = (r, e, t) => new C({
  schema: r,
  typeName: m.ZodEffects,
  effect: e,
  ...v(t)
});
C.createWithPreprocess = (r, e, t) => new C({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: m.ZodEffects,
  ...v(t)
});
class E extends _ {
  _parse(e) {
    return this._getType(e) === f.undefined ? b(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
E.create = (r, e) => new E({
  innerType: r,
  typeName: m.ZodOptional,
  ...v(e)
});
class V extends _ {
  _parse(e) {
    return this._getType(e) === f.null ? b(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
V.create = (r, e) => new V({
  innerType: r,
  typeName: m.ZodNullable,
  ...v(e)
});
class oe extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return t.parsedType === f.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
oe.create = (r, e) => new oe({
  innerType: r,
  typeName: m.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...v(e)
});
class de extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return K(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Z(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Z(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
de.create = (r, e) => new de({
  innerType: r,
  typeName: m.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...v(e)
});
class ve extends _ {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.nan,
        received: s.parsedType
      }), y;
    }
    return { status: "valid", value: e.data };
  }
}
ve.create = (r) => new ve({
  typeName: m.ZodNaN,
  ...v(r)
});
const pt = Symbol("zod_brand");
class Ze extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ue extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? y : a.status === "dirty" ? (t.dirty(), B(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return n.status === "aborted" ? y : n.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, t) {
    return new ue({
      in: e,
      out: t,
      typeName: m.ZodPipeline
    });
  }
}
class ce extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e), s = (n) => (X(n) && (n.value = Object.freeze(n.value)), n);
    return K(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ce.create = (r, e) => new ce({
  innerType: r,
  typeName: m.ZodReadonly,
  ...v(e)
});
function Ve(r, e = {}, t) {
  return r ? Y.create().superRefine((s, n) => {
    var a, i;
    if (!r(s)) {
      const o = typeof e == "function" ? e(s) : typeof e == "string" ? { message: e } : e, u = (i = (a = o.fatal) !== null && a !== void 0 ? a : t) !== null && i !== void 0 ? i : !0, c = typeof o == "string" ? { message: o } : o;
      n.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : Y.create();
}
const mt = {
  object: x.lazycreate
};
var m;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
const yt = (r, e = {
  message: `Input not instance of ${r.name}`
}) => Ve((t) => t instanceof r, e), Le = S.create, De = M.create, vt = ve.create, _t = $.create, ze = Q.create, gt = D.create, xt = pe.create, kt = F.create, bt = ee.create, wt = Y.create, Tt = L.create, Zt = j.create, St = me.create, Ot = O.create, Ct = x.create, Et = x.strictCreate, Nt = te.create, Rt = _e.create, It = re.create, jt = R.create, At = se.create, Mt = ye.create, $t = z.create, Pt = W.create, Vt = ne.create, Lt = ae.create, Dt = P.create, zt = ie.create, Ut = H.create, Ee = C.create, Bt = E.create, Wt = V.create, qt = C.createWithPreprocess, Yt = ue.create, Ht = () => Le().optional(), Jt = () => De().optional(), Gt = () => ze().optional(), Xt = {
  string: (r) => S.create({ ...r, coerce: !0 }),
  number: (r) => M.create({ ...r, coerce: !0 }),
  boolean: (r) => Q.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => $.create({ ...r, coerce: !0 }),
  date: (r) => D.create({ ...r, coerce: !0 })
}, Kt = y;
var Qt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: q,
  setErrorMap: Ke,
  getErrorMap: le,
  makeIssue: fe,
  EMPTY_PATH: Qe,
  addIssueToContext: l,
  ParseStatus: k,
  INVALID: y,
  DIRTY: B,
  OK: b,
  isAborted: be,
  isDirty: we,
  isValid: X,
  isAsync: K,
  get util() {
    return g;
  },
  get objectUtil() {
    return ke;
  },
  ZodParsedType: f,
  getParsedType: A,
  ZodType: _,
  datetimeRegex: $e,
  ZodString: S,
  ZodNumber: M,
  ZodBigInt: $,
  ZodBoolean: Q,
  ZodDate: D,
  ZodSymbol: pe,
  ZodUndefined: F,
  ZodNull: ee,
  ZodAny: Y,
  ZodUnknown: L,
  ZodNever: j,
  ZodVoid: me,
  ZodArray: O,
  ZodObject: x,
  ZodUnion: te,
  ZodDiscriminatedUnion: _e,
  ZodIntersection: re,
  ZodTuple: R,
  ZodRecord: se,
  ZodMap: ye,
  ZodSet: z,
  ZodFunction: W,
  ZodLazy: ne,
  ZodLiteral: ae,
  ZodEnum: P,
  ZodNativeEnum: ie,
  ZodPromise: H,
  ZodEffects: C,
  ZodTransformer: C,
  ZodOptional: E,
  ZodNullable: V,
  ZodDefault: oe,
  ZodCatch: de,
  ZodNaN: ve,
  BRAND: pt,
  ZodBranded: Ze,
  ZodPipeline: ue,
  ZodReadonly: ce,
  custom: Ve,
  Schema: _,
  ZodSchema: _,
  late: mt,
  get ZodFirstPartyTypeKind() {
    return m;
  },
  coerce: Xt,
  any: wt,
  array: Ot,
  bigint: _t,
  boolean: ze,
  date: gt,
  discriminatedUnion: Rt,
  effect: Ee,
  enum: Dt,
  function: Pt,
  instanceof: yt,
  intersection: It,
  lazy: Vt,
  literal: Lt,
  map: Mt,
  nan: vt,
  nativeEnum: zt,
  never: Zt,
  null: bt,
  nullable: Wt,
  number: De,
  object: Ct,
  oboolean: Gt,
  onumber: Jt,
  optional: Bt,
  ostring: Ht,
  pipeline: Yt,
  preprocess: qt,
  promise: Ut,
  record: At,
  set: $t,
  strictObject: Et,
  string: Le,
  symbol: xt,
  transformer: Ee,
  tuple: jt,
  undefined: kt,
  union: Nt,
  unknown: Tt,
  void: St,
  NEVER: Kt,
  ZodIssueCode: d,
  quotelessJson: Xe,
  ZodError: Z
});
const Ue = "theme", T = document.querySelector("html");
if (!T)
  throw new Error("No <html> element found");
const Ft = Qt.enum(["light", "dark", "auto"]), er = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", tr = () => Ft.catch("auto").parse(localStorage.getItem(Ue)), Ne = tr(), Re = Ne === "auto" ? er() : Ne, { themeObserver: sr, theme: nr, setTheme: ar } = Ye(() => {
  const [r, e] = He(Re);
  return T == null || T.classList.add(Re), Je(() => {
    localStorage.setItem(Ue, r()), T == null || T.classList.remove("light", "dark"), T == null || T.classList.add(r());
  }), {
    themeObserver: Ge(
      () => T,
      { attributes: !0, attributeFilter: ["class"] },
      (s) => {
        const n = (T == null ? void 0 : T.classList.contains("dark")) ?? !1;
        e(n ? "dark" : "light");
      }
    ),
    theme: r,
    setTheme: e
  };
});
export {
  Ue as T,
  tr as a,
  nr as b,
  Ge as c,
  er as g,
  ar as s,
  sr as t,
  Qt as z
};
