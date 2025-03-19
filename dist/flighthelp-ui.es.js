import * as W from "react";
import tr, { isValidElement as Lr, cloneElement as Vr, Children as jo } from "react";
import No from "@emotion/styled";
import { CacheProvider as Fo, Global as Bo, ThemeContext as zo, css as Lo, keyframes as Gr } from "@emotion/react";
import { darken as Vo } from "@mui/material";
import { makeStyles as Wo } from "@mui/styles";
function Gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xe(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Ir = { exports: {} }, cr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bt, tn;
function Ft() {
  if (tn) return bt;
  tn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        d[h] = h;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bt = o() ? Object.assign : function(i, s) {
    for (var l, f = n(i), d, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var m in l)
        r.call(l, m) && (f[m] = l[m]);
      if (e) {
        d = e(l);
        for (var p = 0; p < d.length; p++)
          t.call(l, d[p]) && (f[d[p]] = l[d[p]]);
      }
    }
    return f;
  }, bt;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Yo() {
  if (nn) return cr;
  nn = 1, Ft();
  var e = tr, r = 60103;
  if (cr.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), cr.Fragment = t("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, f, d) {
    var h, m = {}, p = null, T = null;
    d !== void 0 && (p = "" + d), f.key !== void 0 && (p = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (h in f) o.call(f, h) && !i.hasOwnProperty(h) && (m[h] = f[h]);
    if (l && l.defaultProps) for (h in f = l.defaultProps, f) m[h] === void 0 && (m[h] = f[h]);
    return { $$typeof: r, type: l, key: p, ref: T, props: m, _owner: n.current };
  }
  return cr.jsx = s, cr.jsxs = s, cr;
}
var Et = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Uo() {
  return on || (on = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = tr, t = Ft(), n = 60103, o = 60106;
      e.Fragment = 60107;
      var i = 60108, s = 60114, l = 60109, f = 60110, d = 60112, h = 60113, m = 60120, p = 60115, T = 60116, b = 60121, a = 60122, O = 60117, w = 60129, N = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var C = Symbol.for;
        n = C("react.element"), o = C("react.portal"), e.Fragment = C("react.fragment"), i = C("react.strict_mode"), s = C("react.profiler"), l = C("react.provider"), f = C("react.context"), d = C("react.forward_ref"), h = C("react.suspense"), m = C("react.suspense_list"), p = C("react.memo"), T = C("react.lazy"), b = C("react.block"), a = C("react.server.block"), O = C("react.fundamental"), C("react.scope"), C("react.opaque.id"), w = C("react.debug_trace_mode"), C("react.offscreen"), N = C("react.legacy_hidden");
      }
      var M = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
      function G(c) {
        if (c === null || typeof c != "object")
          return null;
        var _ = M && c[M] || c[E];
        return typeof _ == "function" ? _ : null;
      }
      var u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function g(c) {
        {
          for (var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), F = 1; F < _; F++)
            $[F - 1] = arguments[F];
          v("error", c, $);
        }
      }
      function v(c, _, $) {
        {
          var F = u.ReactDebugCurrentFrame, ue = F.getStackAddendum();
          ue !== "" && (_ += "%s", $ = $.concat([ue]));
          var ce = $.map(function(ee) {
            return "" + ee;
          });
          ce.unshift("Warning: " + _), Function.prototype.apply.call(console[c], console, ce);
        }
      }
      var R = !1;
      function j(c) {
        return !!(typeof c == "string" || typeof c == "function" || c === e.Fragment || c === s || c === w || c === i || c === h || c === m || c === N || R || typeof c == "object" && c !== null && (c.$$typeof === T || c.$$typeof === p || c.$$typeof === l || c.$$typeof === f || c.$$typeof === d || c.$$typeof === O || c.$$typeof === b || c[0] === a));
      }
      function X(c, _, $) {
        var F = _.displayName || _.name || "";
        return c.displayName || (F !== "" ? $ + "(" + F + ")" : $);
      }
      function J(c) {
        return c.displayName || "Context";
      }
      function Z(c) {
        if (c == null)
          return null;
        if (typeof c.tag == "number" && g("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof c == "function")
          return c.displayName || c.name || null;
        if (typeof c == "string")
          return c;
        switch (c) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case s:
            return "Profiler";
          case i:
            return "StrictMode";
          case h:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case f:
              var _ = c;
              return J(_) + ".Consumer";
            case l:
              var $ = c;
              return J($._context) + ".Provider";
            case d:
              return X(c, c.render, "ForwardRef");
            case p:
              return Z(c.type);
            case b:
              return Z(c._render);
            case T: {
              var F = c, ue = F._payload, ce = F._init;
              try {
                return Z(ce(ue));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, K, se, me, Ne, x, P, U;
      function z() {
      }
      z.__reactDisabledLog = !0;
      function k() {
        {
          if (Y === 0) {
            K = console.log, se = console.info, me = console.warn, Ne = console.error, x = console.group, P = console.groupCollapsed, U = console.groupEnd;
            var c = {
              configurable: !0,
              enumerable: !0,
              value: z,
              writable: !0
            };
            Object.defineProperties(console, {
              info: c,
              log: c,
              warn: c,
              error: c,
              group: c,
              groupCollapsed: c,
              groupEnd: c
            });
          }
          Y++;
        }
      }
      function L() {
        {
          if (Y--, Y === 0) {
            var c = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, c, {
                value: K
              }),
              info: t({}, c, {
                value: se
              }),
              warn: t({}, c, {
                value: me
              }),
              error: t({}, c, {
                value: Ne
              }),
              group: t({}, c, {
                value: x
              }),
              groupCollapsed: t({}, c, {
                value: P
              }),
              groupEnd: t({}, c, {
                value: U
              })
            });
          }
          Y < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var D = u.ReactCurrentDispatcher, B;
      function A(c, _, $) {
        {
          if (B === void 0)
            try {
              throw Error();
            } catch (ue) {
              var F = ue.stack.trim().match(/\n( *(at )?)/);
              B = F && F[1] || "";
            }
          return `
` + B + c;
        }
      }
      var I = !1, V;
      {
        var le = typeof WeakMap == "function" ? WeakMap : Map;
        V = new le();
      }
      function S(c, _) {
        if (!c || I)
          return "";
        {
          var $ = V.get(c);
          if ($ !== void 0)
            return $;
        }
        var F;
        I = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ce;
        ce = D.current, D.current = null, k();
        try {
          if (_) {
            var ee = function() {
              throw Error();
            };
            if (Object.defineProperty(ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ee, []);
              } catch (Ue) {
                F = Ue;
              }
              Reflect.construct(c, [], ee);
            } else {
              try {
                ee.call();
              } catch (Ue) {
                F = Ue;
              }
              c.call(ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ue) {
              F = Ue;
            }
            c();
          }
        } catch (Ue) {
          if (Ue && F && typeof Ue.stack == "string") {
            for (var Q = Ue.stack.split(`
`), Ce = F.stack.split(`
`), ge = Q.length - 1, Ee = Ce.length - 1; ge >= 1 && Ee >= 0 && Q[ge] !== Ce[Ee]; )
              Ee--;
            for (; ge >= 1 && Ee >= 0; ge--, Ee--)
              if (Q[ge] !== Ce[Ee]) {
                if (ge !== 1 || Ee !== 1)
                  do
                    if (ge--, Ee--, Ee < 0 || Q[ge] !== Ce[Ee]) {
                      var Ye = `
` + Q[ge].replace(" at new ", " at ");
                      return typeof c == "function" && V.set(c, Ye), Ye;
                    }
                  while (ge >= 1 && Ee >= 0);
                break;
              }
          }
        } finally {
          I = !1, D.current = ce, L(), Error.prepareStackTrace = ue;
        }
        var sr = c ? c.displayName || c.name : "", rn = sr ? A(sr) : "";
        return typeof c == "function" && V.set(c, rn), rn;
      }
      function Te(c, _, $) {
        return S(c, !1);
      }
      function de(c) {
        var _ = c.prototype;
        return !!(_ && _.isReactComponent);
      }
      function be(c, _, $) {
        if (c == null)
          return "";
        if (typeof c == "function")
          return S(c, de(c));
        if (typeof c == "string")
          return A(c);
        switch (c) {
          case h:
            return A("Suspense");
          case m:
            return A("SuspenseList");
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case d:
              return Te(c.render);
            case p:
              return be(c.type, _, $);
            case b:
              return Te(c._render);
            case T: {
              var F = c, ue = F._payload, ce = F._init;
              try {
                return be(ce(ue), _, $);
              } catch {
              }
            }
          }
        return "";
      }
      var Be = {}, We = u.ReactDebugCurrentFrame;
      function Ke(c) {
        if (c) {
          var _ = c._owner, $ = be(c.type, c._source, _ ? _.type : null);
          We.setExtraStackFrame($);
        } else
          We.setExtraStackFrame(null);
      }
      function br(c, _, $, F, ue) {
        {
          var ce = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var ee in c)
            if (ce(c, ee)) {
              var Q = void 0;
              try {
                if (typeof c[ee] != "function") {
                  var Ce = Error((F || "React class") + ": " + $ + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ce.name = "Invariant Violation", Ce;
                }
                Q = c[ee](_, ee, F, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ge) {
                Q = ge;
              }
              Q && !(Q instanceof Error) && (Ke(ue), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", $, ee, typeof Q), Ke(null)), Q instanceof Error && !(Q.message in Be) && (Be[Q.message] = !0, Ke(ue), g("Failed %s type: %s", $, Q.message), Ke(null));
            }
        }
      }
      var or = u.ReactCurrentOwner, Ze = Object.prototype.hasOwnProperty, dt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Mr, Qe;
      function er(c) {
        if (Ze.call(c, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(c, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return c.ref !== void 0;
      }
      function pt(c) {
        if (Ze.call(c, "key")) {
          var _ = Object.getOwnPropertyDescriptor(c, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return c.key !== void 0;
      }
      function kr(c, _) {
        typeof c.ref == "string" && or.current;
      }
      function ht(c, _) {
        {
          var $ = function() {
            Mr || (Mr = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
          };
          $.isReactWarning = !0, Object.defineProperty(c, "key", {
            get: $,
            configurable: !0
          });
        }
      }
      function q(c, _) {
        {
          var $ = function() {
            Qe || (Qe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
          };
          $.isReactWarning = !0, Object.defineProperty(c, "ref", {
            get: $,
            configurable: !0
          });
        }
      }
      var Ar = function(c, _, $, F, ue, ce, ee) {
        var Q = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: c,
          key: _,
          ref: $,
          props: ee,
          // Record the component responsible for creating this element.
          _owner: ce
        };
        return Q._store = {}, Object.defineProperty(Q._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Q, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Q, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
      };
      function yt(c, _, $, F, ue) {
        {
          var ce, ee = {}, Q = null, Ce = null;
          $ !== void 0 && (Q = "" + $), pt(_) && (Q = "" + _.key), er(_) && (Ce = _.ref, kr(_, ue));
          for (ce in _)
            Ze.call(_, ce) && !dt.hasOwnProperty(ce) && (ee[ce] = _[ce]);
          if (c && c.defaultProps) {
            var ge = c.defaultProps;
            for (ce in ge)
              ee[ce] === void 0 && (ee[ce] = ge[ce]);
          }
          if (Q || Ce) {
            var Ee = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
            Q && ht(ee, Ee), Ce && q(ee, Ee);
          }
          return Ar(c, Q, Ce, ue, F, or.current, ee);
        }
      }
      var ir = u.ReactCurrentOwner, mt = u.ReactDebugCurrentFrame;
      function ar(c) {
        if (c) {
          var _ = c._owner, $ = be(c.type, c._source, _ ? _.type : null);
          mt.setExtraStackFrame($);
        } else
          mt.setExtraStackFrame(null);
      }
      var gt;
      gt = !1;
      function vt(c) {
        return typeof c == "object" && c !== null && c.$$typeof === n;
      }
      function Xt() {
        {
          if (ir.current) {
            var c = Z(ir.current.type);
            if (c)
              return `

Check the render method of \`` + c + "`.";
          }
          return "";
        }
      }
      function Po(c) {
        return "";
      }
      var Jt = {};
      function $o(c) {
        {
          var _ = Xt();
          if (!_) {
            var $ = typeof c == "string" ? c : c.displayName || c.name;
            $ && (_ = `

Check the top-level render call using <` + $ + ">.");
          }
          return _;
        }
      }
      function Zt(c, _) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var $ = $o(_);
          if (Jt[$])
            return;
          Jt[$] = !0;
          var F = "";
          c && c._owner && c._owner !== ir.current && (F = " It was passed a child from " + Z(c._owner.type) + "."), ar(c), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, F), ar(null);
        }
      }
      function Qt(c, _) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var $ = 0; $ < c.length; $++) {
              var F = c[$];
              vt(F) && Zt(F, _);
            }
          else if (vt(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var ue = G(c);
            if (typeof ue == "function" && ue !== c.entries)
              for (var ce = ue.call(c), ee; !(ee = ce.next()).done; )
                vt(ee.value) && Zt(ee.value, _);
          }
        }
      }
      function wo(c) {
        {
          var _ = c.type;
          if (_ == null || typeof _ == "string")
            return;
          var $;
          if (typeof _ == "function")
            $ = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === d || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === p))
            $ = _.propTypes;
          else
            return;
          if ($) {
            var F = Z(_);
            br($, c.props, "prop", F, c);
          } else if (_.PropTypes !== void 0 && !gt) {
            gt = !0;
            var ue = Z(_);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Mo(c) {
        {
          for (var _ = Object.keys(c.props), $ = 0; $ < _.length; $++) {
            var F = _[$];
            if (F !== "children" && F !== "key") {
              ar(c), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), ar(null);
              break;
            }
          }
          c.ref !== null && (ar(c), g("Invalid attribute `ref` supplied to `React.Fragment`."), ar(null));
        }
      }
      function en(c, _, $, F, ue, ce) {
        {
          var ee = j(c);
          if (!ee) {
            var Q = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Ce = Po();
            Ce ? Q += Ce : Q += Xt();
            var ge;
            c === null ? ge = "null" : Array.isArray(c) ? ge = "array" : c !== void 0 && c.$$typeof === n ? (ge = "<" + (Z(c.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof c, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, Q);
          }
          var Ee = yt(c, _, $, ue, ce);
          if (Ee == null)
            return Ee;
          if (ee) {
            var Ye = _.children;
            if (Ye !== void 0)
              if (F)
                if (Array.isArray(Ye)) {
                  for (var sr = 0; sr < Ye.length; sr++)
                    Qt(Ye[sr], c);
                  Object.freeze && Object.freeze(Ye);
                } else
                  g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Qt(Ye, c);
          }
          return c === e.Fragment ? Mo(Ee) : wo(Ee), Ee;
        }
      }
      function ko(c, _, $) {
        return en(c, _, $, !0);
      }
      function Ao(c, _, $) {
        return en(c, _, $, !1);
      }
      var Io = Ao, Do = ko;
      e.jsx = Io, e.jsxs = Do;
    }();
  }(Et)), Et;
}
var an;
function qo() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Ir.exports = Yo() : Ir.exports = Uo()), Ir.exports;
}
var Me = qo();
function Fe(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function H() {
  return H = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, H.apply(null, arguments);
}
var Dr = { exports: {} }, jr = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Ko() {
  if (sn) return ne;
  sn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, a = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var G = E.$$typeof;
      switch (G) {
        case r:
          switch (E = E.type, E) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case m:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case h:
                case b:
                case T:
                case s:
                  return E;
                default:
                  return G;
              }
          }
        case t:
          return G;
      }
    }
  }
  function M(E) {
    return C(E) === d;
  }
  return ne.AsyncMode = f, ne.ConcurrentMode = d, ne.ContextConsumer = l, ne.ContextProvider = s, ne.Element = r, ne.ForwardRef = h, ne.Fragment = n, ne.Lazy = b, ne.Memo = T, ne.Portal = t, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = m, ne.isAsyncMode = function(E) {
    return M(E) || C(E) === f;
  }, ne.isConcurrentMode = M, ne.isContextConsumer = function(E) {
    return C(E) === l;
  }, ne.isContextProvider = function(E) {
    return C(E) === s;
  }, ne.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }, ne.isForwardRef = function(E) {
    return C(E) === h;
  }, ne.isFragment = function(E) {
    return C(E) === n;
  }, ne.isLazy = function(E) {
    return C(E) === b;
  }, ne.isMemo = function(E) {
    return C(E) === T;
  }, ne.isPortal = function(E) {
    return C(E) === t;
  }, ne.isProfiler = function(E) {
    return C(E) === i;
  }, ne.isStrictMode = function(E) {
    return C(E) === o;
  }, ne.isSuspense = function(E) {
    return C(E) === m;
  }, ne.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === d || E === i || E === o || E === m || E === p || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === T || E.$$typeof === s || E.$$typeof === l || E.$$typeof === h || E.$$typeof === O || E.$$typeof === w || E.$$typeof === N || E.$$typeof === a);
  }, ne.typeOf = C, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Ho() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, a = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function C(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === i || S === o || S === m || S === p || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === T || S.$$typeof === s || S.$$typeof === l || S.$$typeof === h || S.$$typeof === O || S.$$typeof === w || S.$$typeof === N || S.$$typeof === a);
    }
    function M(S) {
      if (typeof S == "object" && S !== null) {
        var Te = S.$$typeof;
        switch (Te) {
          case r:
            var de = S.type;
            switch (de) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case m:
                return de;
              default:
                var be = de && de.$$typeof;
                switch (be) {
                  case l:
                  case h:
                  case b:
                  case T:
                  case s:
                    return be;
                  default:
                    return Te;
                }
            }
          case t:
            return Te;
        }
      }
    }
    var E = f, G = d, u = l, g = s, v = r, R = h, j = n, X = b, J = T, Z = t, Y = i, K = o, se = m, me = !1;
    function Ne(S) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(S) || M(S) === f;
    }
    function x(S) {
      return M(S) === d;
    }
    function P(S) {
      return M(S) === l;
    }
    function U(S) {
      return M(S) === s;
    }
    function z(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function k(S) {
      return M(S) === h;
    }
    function L(S) {
      return M(S) === n;
    }
    function D(S) {
      return M(S) === b;
    }
    function B(S) {
      return M(S) === T;
    }
    function A(S) {
      return M(S) === t;
    }
    function I(S) {
      return M(S) === i;
    }
    function V(S) {
      return M(S) === o;
    }
    function le(S) {
      return M(S) === m;
    }
    oe.AsyncMode = E, oe.ConcurrentMode = G, oe.ContextConsumer = u, oe.ContextProvider = g, oe.Element = v, oe.ForwardRef = R, oe.Fragment = j, oe.Lazy = X, oe.Memo = J, oe.Portal = Z, oe.Profiler = Y, oe.StrictMode = K, oe.Suspense = se, oe.isAsyncMode = Ne, oe.isConcurrentMode = x, oe.isContextConsumer = P, oe.isContextProvider = U, oe.isElement = z, oe.isForwardRef = k, oe.isFragment = L, oe.isLazy = D, oe.isMemo = B, oe.isPortal = A, oe.isProfiler = I, oe.isStrictMode = V, oe.isSuspense = le, oe.isValidElementType = C, oe.typeOf = M;
  }()), oe;
}
var un;
function Xn() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? jr.exports = Ko() : jr.exports = Ho()), jr.exports;
}
var xt, ln;
function Bt() {
  if (ln) return xt;
  ln = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xt = e, xt;
}
var _t, fn;
function Jn() {
  return fn || (fn = 1, _t = Function.call.bind(Object.prototype.hasOwnProperty)), _t;
}
var Tt, dn;
function Go() {
  if (dn) return Tt;
  dn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ Bt(), t = {}, n = /* @__PURE__ */ Jn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var m;
          try {
            if (typeof i[h] != "function") {
              var p = Error(
                (f || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[h](s, h, f, l, null, r);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var T = d ? d() : "";
            e(
              "Failed " + l + " type: " + m.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Tt = o, Tt;
}
var Rt, pn;
function Xo() {
  if (pn) return Rt;
  pn = 1;
  var e = Xn(), r = Ft(), t = /* @__PURE__ */ Bt(), n = /* @__PURE__ */ Jn(), o = /* @__PURE__ */ Go(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Rt = function(l, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(x) {
      var P = x && (d && x[d] || x[h]);
      if (typeof P == "function")
        return P;
    }
    var p = "<<anonymous>>", T = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: N(),
      arrayOf: C,
      element: M(),
      elementType: E(),
      instanceOf: G,
      node: R(),
      objectOf: g,
      oneOf: u,
      oneOfType: v,
      shape: X,
      exact: J
    };
    function b(x, P) {
      return x === P ? x !== 0 || 1 / x === 1 / P : x !== x && P !== P;
    }
    function a(x, P) {
      this.message = x, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    a.prototype = Error.prototype;
    function O(x) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, U = 0;
      function z(L, D, B, A, I, V, le) {
        if (A = A || p, V = V || B, le !== t) {
          if (f) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = A + ":" + B;
            !P[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Te] = !0, U++);
          }
        }
        return D[B] == null ? L ? D[B] === null ? new a("The " + I + " `" + V + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new a("The " + I + " `" + V + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : x(D, B, A, I, V);
      }
      var k = z.bind(null, !1);
      return k.isRequired = z.bind(null, !0), k;
    }
    function w(x) {
      function P(U, z, k, L, D, B) {
        var A = U[z], I = K(A);
        if (I !== x) {
          var V = se(A);
          return new a(
            "Invalid " + L + " `" + D + "` of type " + ("`" + V + "` supplied to `" + k + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return O(P);
    }
    function N() {
      return O(s);
    }
    function C(x) {
      function P(U, z, k, L, D) {
        if (typeof x != "function")
          return new a("Property `" + D + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var B = U[z];
        if (!Array.isArray(B)) {
          var A = K(B);
          return new a("Invalid " + L + " `" + D + "` of type " + ("`" + A + "` supplied to `" + k + "`, expected an array."));
        }
        for (var I = 0; I < B.length; I++) {
          var V = x(B, I, k, L, D + "[" + I + "]", t);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return O(P);
    }
    function M() {
      function x(P, U, z, k, L) {
        var D = P[U];
        if (!l(D)) {
          var B = K(D);
          return new a("Invalid " + k + " `" + L + "` of type " + ("`" + B + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(x);
    }
    function E() {
      function x(P, U, z, k, L) {
        var D = P[U];
        if (!e.isValidElementType(D)) {
          var B = K(D);
          return new a("Invalid " + k + " `" + L + "` of type " + ("`" + B + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(x);
    }
    function G(x) {
      function P(U, z, k, L, D) {
        if (!(U[z] instanceof x)) {
          var B = x.name || p, A = Ne(U[z]);
          return new a("Invalid " + L + " `" + D + "` of type " + ("`" + A + "` supplied to `" + k + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return O(P);
    }
    function u(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(U, z, k, L, D) {
        for (var B = U[z], A = 0; A < x.length; A++)
          if (b(B, x[A]))
            return null;
        var I = JSON.stringify(x, function(le, S) {
          var Te = se(S);
          return Te === "symbol" ? String(S) : S;
        });
        return new a("Invalid " + L + " `" + D + "` of value `" + String(B) + "` " + ("supplied to `" + k + "`, expected one of " + I + "."));
      }
      return O(P);
    }
    function g(x) {
      function P(U, z, k, L, D) {
        if (typeof x != "function")
          return new a("Property `" + D + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var B = U[z], A = K(B);
        if (A !== "object")
          return new a("Invalid " + L + " `" + D + "` of type " + ("`" + A + "` supplied to `" + k + "`, expected an object."));
        for (var I in B)
          if (n(B, I)) {
            var V = x(B, I, k, L, D + "." + I, t);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return O(P);
    }
    function v(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < x.length; P++) {
        var U = x[P];
        if (typeof U != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + me(U) + " at index " + P + "."
          ), s;
      }
      function z(k, L, D, B, A) {
        for (var I = [], V = 0; V < x.length; V++) {
          var le = x[V], S = le(k, L, D, B, A, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && I.push(S.data.expectedType);
        }
        var Te = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new a("Invalid " + B + " `" + A + "` supplied to " + ("`" + D + "`" + Te + "."));
      }
      return O(z);
    }
    function R() {
      function x(P, U, z, k, L) {
        return Z(P[U]) ? null : new a("Invalid " + k + " `" + L + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return O(x);
    }
    function j(x, P, U, z, k) {
      return new a(
        (x || "React class") + ": " + P + " type `" + U + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function X(x) {
      function P(U, z, k, L, D) {
        var B = U[z], A = K(B);
        if (A !== "object")
          return new a("Invalid " + L + " `" + D + "` of type `" + A + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var I in x) {
          var V = x[I];
          if (typeof V != "function")
            return j(k, L, D, I, se(V));
          var le = V(B, I, k, L, D + "." + I, t);
          if (le)
            return le;
        }
        return null;
      }
      return O(P);
    }
    function J(x) {
      function P(U, z, k, L, D) {
        var B = U[z], A = K(B);
        if (A !== "object")
          return new a("Invalid " + L + " `" + D + "` of type `" + A + "` " + ("supplied to `" + k + "`, expected `object`."));
        var I = r({}, U[z], x);
        for (var V in I) {
          var le = x[V];
          if (n(x, V) && typeof le != "function")
            return j(k, L, D, V, se(le));
          if (!le)
            return new a(
              "Invalid " + L + " `" + D + "` key `" + V + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(U[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var S = le(B, V, k, L, D + "." + V, t);
          if (S)
            return S;
        }
        return null;
      }
      return O(P);
    }
    function Z(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(Z);
          if (x === null || l(x))
            return !0;
          var P = m(x);
          if (P) {
            var U = P.call(x), z;
            if (P !== x.entries) {
              for (; !(z = U.next()).done; )
                if (!Z(z.value))
                  return !1;
            } else
              for (; !(z = U.next()).done; ) {
                var k = z.value;
                if (k && !Z(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(x, P) {
      return x === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function K(x) {
      var P = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Y(P, x) ? "symbol" : P;
    }
    function se(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var P = K(x);
      if (P === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function me(x) {
      var P = se(x);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Ne(x) {
      return !x.constructor || !x.constructor.name ? p : x.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, Rt;
}
var Ot, hn;
function Jo() {
  if (hn) return Ot;
  hn = 1;
  var e = /* @__PURE__ */ Bt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ot = function() {
    function n(s, l, f, d, h, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ot;
}
var yn;
function Zo() {
  if (yn) return Dr.exports;
  if (yn = 1, process.env.NODE_ENV !== "production") {
    var e = Xn(), r = !0;
    Dr.exports = /* @__PURE__ */ Xo()(e.isElement, r);
  } else
    Dr.exports = /* @__PURE__ */ Jo()();
  return Dr.exports;
}
var Qo = /* @__PURE__ */ Zo();
const y = /* @__PURE__ */ Gn(Qo);
function Zn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Zn(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ae() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Zn(e)) && (n && (n += " "), n += r);
  return n;
}
function qr(e, r) {
  const t = H({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = H({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = H({}, i), Object.keys(o).forEach((s) => {
        t[n][s] = qr(o[s], i[s]);
      }));
    } else t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Qn(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = r(s);
          l !== "" && i.push(l), t && t[s] && i.push(t[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
var pe = {}, St = { exports: {} }, mn;
function eo() {
  return mn || (mn = 1, function(e) {
    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(St)), St.exports;
}
function Tr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tr
}, Symbol.toStringTag, { value: "Module" })), ri = /* @__PURE__ */ Xe(ei);
function ti(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" })), oi = /* @__PURE__ */ Xe(ni);
var gn;
function ii() {
  if (gn) return pe;
  gn = 1;
  var e = eo();
  Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.alpha = b, pe.blend = G, pe.colorChannel = void 0, pe.darken = O, pe.decomposeColor = s, pe.emphasize = M, pe.getContrastRatio = T, pe.getLuminance = p, pe.hexToRgb = o, pe.hslToRgb = m, pe.lighten = N, pe.private_safeAlpha = a, pe.private_safeColorChannel = void 0, pe.private_safeDarken = w, pe.private_safeEmphasize = E, pe.private_safeLighten = C, pe.recomposeColor = d, pe.rgbToHex = h;
  var r = e(ri), t = e(oi);
  function n(u, g = 0, v = 1) {
    return process.env.NODE_ENV !== "production" && (u < g || u > v) && console.error(`MUI: The value provided ${u} is out of range [${g}, ${v}].`), (0, t.default)(u, g, v);
  }
  function o(u) {
    u = u.slice(1);
    const g = new RegExp(`.{1,${u.length >= 6 ? 2 : 1}}`, "g");
    let v = u.match(g);
    return v && v[0].length === 1 && (v = v.map((R) => R + R)), v ? `rgb${v.length === 4 ? "a" : ""}(${v.map((R, j) => j < 3 ? parseInt(R, 16) : Math.round(parseInt(R, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function i(u) {
    const g = u.toString(16);
    return g.length === 1 ? `0${g}` : g;
  }
  function s(u) {
    if (u.type)
      return u;
    if (u.charAt(0) === "#")
      return s(o(u));
    const g = u.indexOf("("), v = u.substring(0, g);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(v) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${u}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, r.default)(9, u));
    let R = u.substring(g + 1, u.length - 1), j;
    if (v === "color") {
      if (R = R.split(" "), j = R.shift(), R.length === 4 && R[3].charAt(0) === "/" && (R[3] = R[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(j) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${j}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, r.default)(10, j));
    } else
      R = R.split(",");
    return R = R.map((X) => parseFloat(X)), {
      type: v,
      values: R,
      colorSpace: j
    };
  }
  const l = (u) => {
    const g = s(u);
    return g.values.slice(0, 3).map((v, R) => g.type.indexOf("hsl") !== -1 && R !== 0 ? `${v}%` : v).join(" ");
  };
  pe.colorChannel = l;
  const f = (u, g) => {
    try {
      return l(u);
    } catch {
      return g && process.env.NODE_ENV !== "production" && console.warn(g), u;
    }
  };
  pe.private_safeColorChannel = f;
  function d(u) {
    const {
      type: g,
      colorSpace: v
    } = u;
    let {
      values: R
    } = u;
    return g.indexOf("rgb") !== -1 ? R = R.map((j, X) => X < 3 ? parseInt(j, 10) : j) : g.indexOf("hsl") !== -1 && (R[1] = `${R[1]}%`, R[2] = `${R[2]}%`), g.indexOf("color") !== -1 ? R = `${v} ${R.join(" ")}` : R = `${R.join(", ")}`, `${g}(${R})`;
  }
  function h(u) {
    if (u.indexOf("#") === 0)
      return u;
    const {
      values: g
    } = s(u);
    return `#${g.map((v, R) => i(R === 3 ? Math.round(255 * v) : v)).join("")}`;
  }
  function m(u) {
    u = s(u);
    const {
      values: g
    } = u, v = g[0], R = g[1] / 100, j = g[2] / 100, X = R * Math.min(j, 1 - j), J = (K, se = (K + v / 30) % 12) => j - X * Math.max(Math.min(se - 3, 9 - se, 1), -1);
    let Z = "rgb";
    const Y = [Math.round(J(0) * 255), Math.round(J(8) * 255), Math.round(J(4) * 255)];
    return u.type === "hsla" && (Z += "a", Y.push(g[3])), d({
      type: Z,
      values: Y
    });
  }
  function p(u) {
    u = s(u);
    let g = u.type === "hsl" || u.type === "hsla" ? s(m(u)).values : u.values;
    return g = g.map((v) => (u.type !== "color" && (v /= 255), v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)), Number((0.2126 * g[0] + 0.7152 * g[1] + 0.0722 * g[2]).toFixed(3));
  }
  function T(u, g) {
    const v = p(u), R = p(g);
    return (Math.max(v, R) + 0.05) / (Math.min(v, R) + 0.05);
  }
  function b(u, g) {
    return u = s(u), g = n(g), (u.type === "rgb" || u.type === "hsl") && (u.type += "a"), u.type === "color" ? u.values[3] = `/${g}` : u.values[3] = g, d(u);
  }
  function a(u, g, v) {
    try {
      return b(u, g);
    } catch {
      return v && process.env.NODE_ENV !== "production" && console.warn(v), u;
    }
  }
  function O(u, g) {
    if (u = s(u), g = n(g), u.type.indexOf("hsl") !== -1)
      u.values[2] *= 1 - g;
    else if (u.type.indexOf("rgb") !== -1 || u.type.indexOf("color") !== -1)
      for (let v = 0; v < 3; v += 1)
        u.values[v] *= 1 - g;
    return d(u);
  }
  function w(u, g, v) {
    try {
      return O(u, g);
    } catch {
      return v && process.env.NODE_ENV !== "production" && console.warn(v), u;
    }
  }
  function N(u, g) {
    if (u = s(u), g = n(g), u.type.indexOf("hsl") !== -1)
      u.values[2] += (100 - u.values[2]) * g;
    else if (u.type.indexOf("rgb") !== -1)
      for (let v = 0; v < 3; v += 1)
        u.values[v] += (255 - u.values[v]) * g;
    else if (u.type.indexOf("color") !== -1)
      for (let v = 0; v < 3; v += 1)
        u.values[v] += (1 - u.values[v]) * g;
    return d(u);
  }
  function C(u, g, v) {
    try {
      return N(u, g);
    } catch {
      return v && process.env.NODE_ENV !== "production" && console.warn(v), u;
    }
  }
  function M(u, g = 0.15) {
    return p(u) > 0.5 ? O(u, g) : N(u, g);
  }
  function E(u, g, v) {
    try {
      return M(u, g);
    } catch {
      return v && process.env.NODE_ENV !== "production" && console.warn(v), u;
    }
  }
  function G(u, g, v, R = 1) {
    const j = (Y, K) => Math.round((Y ** (1 / R) * (1 - v) + K ** (1 / R) * v) ** R), X = s(u), J = s(g), Z = [j(X.values[0], J.values[0]), j(X.values[1], J.values[1]), j(X.values[2], J.values[2])];
    return d({
      type: "rgb",
      values: Z
    });
  }
  return pe;
}
var Ge = /* @__PURE__ */ ii(), rr = {}, Ct = { exports: {} }, vn;
function ai() {
  return vn || (vn = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(null, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ct)), Ct.exports;
}
var Pt = { exports: {} }, bn;
function si() {
  return bn || (bn = 1, function(e) {
    function r(t, n) {
      if (t == null) return {};
      var o = {};
      for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
        if (n.indexOf(i) !== -1) continue;
        o[i] = t[i];
      }
      return o;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Pt)), Pt.exports;
}
function ci(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ui(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var li = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ui(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ci(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Oe = "-ms-", Kr = "-moz-", re = "-webkit-", ro = "comm", zt = "rule", Lt = "decl", fi = "@import", to = "@keyframes", di = "@layer", pi = Math.abs, Xr = String.fromCharCode, hi = Object.assign;
function yi(e, r) {
  return Re(e, 0) ^ 45 ? (((r << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0;
}
function no(e) {
  return e.trim();
}
function mi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function te(e, r, t) {
  return e.replace(r, t);
}
function kt(e, r) {
  return e.indexOf(r);
}
function Re(e, r) {
  return e.charCodeAt(r) | 0;
}
function Rr(e, r, t) {
  return e.slice(r, t);
}
function ze(e) {
  return e.length;
}
function Vt(e) {
  return e.length;
}
function Nr(e, r) {
  return r.push(e), e;
}
function gi(e, r) {
  return e.map(r).join("");
}
var Jr = 1, mr = 1, oo = 0, $e = 0, _e = 0, gr = "";
function Zr(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Jr, column: mr, length: s, return: "" };
}
function Er(e, r) {
  return hi(Zr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function vi() {
  return _e;
}
function bi() {
  return _e = $e > 0 ? Re(gr, --$e) : 0, mr--, _e === 10 && (mr = 1, Jr--), _e;
}
function ke() {
  return _e = $e < oo ? Re(gr, $e++) : 0, mr++, _e === 10 && (mr = 1, Jr++), _e;
}
function Le() {
  return Re(gr, $e);
}
function Wr() {
  return $e;
}
function Cr(e, r) {
  return Rr(gr, e, r);
}
function Or(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function io(e) {
  return Jr = mr = 1, oo = ze(gr = e), $e = 0, [];
}
function ao(e) {
  return gr = "", e;
}
function Yr(e) {
  return no(Cr($e - 1, At(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ei(e) {
  for (; (_e = Le()) && _e < 33; )
    ke();
  return Or(e) > 2 || Or(_e) > 3 ? "" : " ";
}
function xi(e, r) {
  for (; --r && ke() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97); )
    ;
  return Cr(e, Wr() + (r < 6 && Le() == 32 && ke() == 32));
}
function At(e) {
  for (; ke(); )
    switch (_e) {
      // ] ) " '
      case e:
        return $e;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && At(_e);
        break;
      // (
      case 40:
        e === 41 && At(e);
        break;
      // \
      case 92:
        ke();
        break;
    }
  return $e;
}
function _i(e, r) {
  for (; ke() && e + _e !== 57; )
    if (e + _e === 84 && Le() === 47)
      break;
  return "/*" + Cr(r, $e - 1) + "*" + Xr(e === 47 ? e : ke());
}
function Ti(e) {
  for (; !Or(Le()); )
    ke();
  return Cr(e, $e);
}
function Ri(e) {
  return ao(Ur("", null, null, null, [""], e = io(e), 0, [0], e));
}
function Ur(e, r, t, n, o, i, s, l, f) {
  for (var d = 0, h = 0, m = s, p = 0, T = 0, b = 0, a = 1, O = 1, w = 1, N = 0, C = "", M = o, E = i, G = n, u = C; O; )
    switch (b = N, N = ke()) {
      // (
      case 40:
        if (b != 108 && Re(u, m - 1) == 58) {
          kt(u += te(Yr(N), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        u += Yr(N);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        u += Ei(b);
        break;
      // \
      case 92:
        u += xi(Wr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Le()) {
          case 42:
          case 47:
            Nr(Oi(_i(ke(), Wr()), r, t), f);
            break;
          default:
            u += "/";
        }
        break;
      // {
      case 123 * a:
        l[d++] = ze(u) * w;
      // } ; \0
      case 125 * a:
      case 59:
      case 0:
        switch (N) {
          // \0 }
          case 0:
          case 125:
            O = 0;
          // ;
          case 59 + h:
            w == -1 && (u = te(u, /\f/g, "")), T > 0 && ze(u) - m && Nr(T > 32 ? xn(u + ";", n, t, m - 1) : xn(te(u, " ", "") + ";", n, t, m - 2), f);
            break;
          // @ ;
          case 59:
            u += ";";
          // { rule/at-rule
          default:
            if (Nr(G = En(u, r, t, d, h, o, l, C, M = [], E = [], m), i), N === 123)
              if (h === 0)
                Ur(u, r, G, G, M, i, m, l, E);
              else
                switch (p === 99 && Re(u, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ur(e, G, G, n && Nr(En(e, G, G, 0, 0, o, l, C, o, M = [], m), E), o, E, m, l, n ? M : E);
                    break;
                  default:
                    Ur(u, G, G, G, [""], E, 0, l, E);
                }
        }
        d = h = T = 0, a = w = 1, C = u = "", m = s;
        break;
      // :
      case 58:
        m = 1 + ze(u), T = b;
      default:
        if (a < 1) {
          if (N == 123)
            --a;
          else if (N == 125 && a++ == 0 && bi() == 125)
            continue;
        }
        switch (u += Xr(N), N * a) {
          // &
          case 38:
            w = h > 0 ? 1 : (u += "\f", -1);
            break;
          // ,
          case 44:
            l[d++] = (ze(u) - 1) * w, w = 1;
            break;
          // @
          case 64:
            Le() === 45 && (u += Yr(ke())), p = Le(), h = m = ze(C = u += Ti(Wr())), N++;
            break;
          // -
          case 45:
            b === 45 && ze(u) == 2 && (a = 0);
        }
    }
  return i;
}
function En(e, r, t, n, o, i, s, l, f, d, h) {
  for (var m = o - 1, p = o === 0 ? i : [""], T = Vt(p), b = 0, a = 0, O = 0; b < n; ++b)
    for (var w = 0, N = Rr(e, m + 1, m = pi(a = s[b])), C = e; w < T; ++w)
      (C = no(a > 0 ? p[w] + " " + N : te(N, /&\f/g, p[w]))) && (f[O++] = C);
  return Zr(e, r, t, o === 0 ? zt : l, f, d, h);
}
function Oi(e, r, t) {
  return Zr(e, r, t, ro, Xr(vi()), Rr(e, 2, -2), 0);
}
function xn(e, r, t, n) {
  return Zr(e, r, t, Lt, Rr(e, 0, n), Rr(e, n + 1, -1), n);
}
function hr(e, r) {
  for (var t = "", n = Vt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Si(e, r, t, n) {
  switch (e.type) {
    case di:
      if (e.children.length) break;
    case fi:
    case Lt:
      return e.return = e.return || e.value;
    case ro:
      return "";
    case to:
      return e.return = e.value + "{" + hr(e.children, n) + "}";
    case zt:
      e.value = e.props.join(",");
  }
  return ze(t = hr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ci(e) {
  var r = Vt(e);
  return function(t, n, o, i) {
    for (var s = "", l = 0; l < r; l++)
      s += e[l](t, n, o, i) || "";
    return s;
  };
}
function Pi(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var $i = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Le(), o === 38 && i === 12 && (t[n] = 1), !Or(i); )
    ke();
  return Cr(r, $e);
}, wi = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Or(o)) {
      case 0:
        o === 38 && Le() === 12 && (t[n] = 1), r[n] += $i($e - 1, t, n);
        break;
      case 2:
        r[n] += Yr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Le() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += Xr(o);
    }
  while (o = ke());
  return r;
}, Mi = function(r, t) {
  return ao(wi(io(r), t));
}, _n = /* @__PURE__ */ new WeakMap(), ki = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !_n.get(n)) && !o) {
      _n.set(r, !0);
      for (var i = [], s = Mi(t, i), l = n.props, f = 0, d = 0; f < s.length; f++)
        for (var h = 0; h < l.length; h++, d++)
          r.props[d] = i[f] ? s[f].replace(/&\f/g, l[h]) : l[h] + " " + s[f];
    }
  }
}, Ai = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function so(e, r) {
  switch (yi(e, r)) {
    // color-adjust
    case 5103:
      return re + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Kr + e + Oe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return re + e + Oe + e + e;
    // order
    case 6165:
      return re + e + Oe + "flex-" + e + e;
    // align-items
    case 5187:
      return re + e + te(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Oe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return re + e + Oe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return re + e + Oe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return re + e + Oe + te(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return re + e + Oe + te(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return re + "box-" + te(e, "-grow", "") + re + e + Oe + te(e, "grow", "positive") + e;
    // transition
    case 4554:
      return re + te(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    // cursor
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, re + "$1$`$1");
    // justify-content
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, re + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ze(e) - 1 - r > 6) switch (Re(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Re(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + Kr + (Re(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~kt(e, "stretch") ? so(te(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Re(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Re(e, ze(e) - 3 - (~kt(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return te(e, ":", ":" + re) + e;
        // (inline-)?fl(e)x
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Re(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return re + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return re + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return re + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Oe + e + e;
  }
  return e;
}
var Ii = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Lt:
      r.return = so(r.value, r.length);
      break;
    case to:
      return hr([Er(r, {
        value: te(r.value, "@", "@" + re)
      })], o);
    case zt:
      if (r.length) return gi(r.props, function(i) {
        switch (mi(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return hr([Er(r, {
              props: [te(i, /:(read-\w+)/, ":" + Kr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return hr([Er(r, {
              props: [te(i, /:(plac\w+)/, ":" + re + "input-$1")]
            }), Er(r, {
              props: [te(i, /:(plac\w+)/, ":" + Kr + "$1")]
            }), Er(r, {
              props: [te(i, /:(plac\w+)/, Oe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Di = [Ii], ji = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(a) {
      var O = a.getAttribute("data-emotion");
      O.indexOf(" ") !== -1 && (document.head.appendChild(a), a.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Di, i = {}, s, l = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(a) {
      for (var O = a.getAttribute("data-emotion").split(" "), w = 1; w < O.length; w++)
        i[O[w]] = !0;
      l.push(a);
    }
  );
  var f, d = [ki, Ai];
  {
    var h, m = [Si, Pi(function(a) {
      h.insert(a);
    })], p = Ci(d.concat(o, m)), T = function(O) {
      return hr(Ri(O), p);
    };
    f = function(O, w, N, C) {
      h = N, T(O ? O + "{" + w.styles + "}" : w.styles), C && (b.inserted[w.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new li({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return b.sheet.hydrate(l), b;
};
let It;
typeof document == "object" && (It = ji({
  key: "css",
  prepend: !0
}));
function co(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && It ? /* @__PURE__ */ Me.jsx(Fo, {
    value: It,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (co.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: y.bool
});
function Ni(e) {
  return e == null || Object.keys(e).length === 0;
}
function uo(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e, n = typeof r == "function" ? (o) => r(Ni(o) ? t : o) : r;
  return /* @__PURE__ */ Me.jsx(Bo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (uo.propTypes = {
  defaultTheme: y.object,
  styles: y.oneOfType([y.array, y.string, y.object, y.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Fi(e, r) {
  const t = No(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Bi = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: uo,
  StyledEngineProvider: co,
  ThemeContext: zo,
  css: Lo,
  default: Fi,
  internal_processStyles: Bi,
  keyframes: Gr
}, Symbol.toStringTag, { value: "Module" })), Li = /* @__PURE__ */ Xe(zi);
function He(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function lo(e) {
  if (/* @__PURE__ */ W.isValidElement(e) || !He(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = lo(e[t]);
  }), r;
}
function Ve(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? H({}, e) : e;
  return He(e) && He(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ W.isValidElement(r[o]) ? n[o] = r[o] : He(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && He(e[o]) ? n[o] = Ve(e[o], r[o], t) : t.clone ? n[o] = He(r[o]) ? lo(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve,
  isPlainObject: He
}, Symbol.toStringTag, { value: "Module" })), Wi = /* @__PURE__ */ Xe(Vi);
function Pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Tr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Ui = /* @__PURE__ */ Xe(Yi);
var Fr = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function qi() {
  if (Tn) return ie;
  Tn = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), T = Symbol.for("react.client.reference");
  function b(a) {
    if (typeof a == "object" && a !== null) {
      var O = a.$$typeof;
      switch (O) {
        case e:
          switch (a = a.type, a) {
            case t:
            case o:
            case n:
            case f:
            case d:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case s:
                case l:
                case m:
                case h:
                  return a;
                case i:
                  return a;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return ie.ContextConsumer = i, ie.ContextProvider = s, ie.Element = e, ie.ForwardRef = l, ie.Fragment = t, ie.Lazy = m, ie.Memo = h, ie.Portal = r, ie.Profiler = o, ie.StrictMode = n, ie.Suspense = f, ie.SuspenseList = d, ie.isContextConsumer = function(a) {
    return b(a) === i;
  }, ie.isContextProvider = function(a) {
    return b(a) === s;
  }, ie.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === e;
  }, ie.isForwardRef = function(a) {
    return b(a) === l;
  }, ie.isFragment = function(a) {
    return b(a) === t;
  }, ie.isLazy = function(a) {
    return b(a) === m;
  }, ie.isMemo = function(a) {
    return b(a) === h;
  }, ie.isPortal = function(a) {
    return b(a) === r;
  }, ie.isProfiler = function(a) {
    return b(a) === o;
  }, ie.isStrictMode = function(a) {
    return b(a) === n;
  }, ie.isSuspense = function(a) {
    return b(a) === f;
  }, ie.isSuspenseList = function(a) {
    return b(a) === d;
  }, ie.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === t || a === o || a === n || a === f || a === d || a === p || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === h || a.$$typeof === s || a.$$typeof === i || a.$$typeof === l || a.$$typeof === T || a.getModuleId !== void 0);
  }, ie.typeOf = b, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Ki() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (typeof a == "object" && a !== null) {
        var O = a.$$typeof;
        switch (O) {
          case r:
            switch (a = a.type, a) {
              case n:
              case i:
              case o:
              case d:
              case h:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case l:
                  case f:
                  case p:
                  case m:
                    return a;
                  case s:
                    return a;
                  default:
                    return O;
                }
            }
          case t:
            return O;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    ae.ContextConsumer = s, ae.ContextProvider = l, ae.Element = r, ae.ForwardRef = f, ae.Fragment = n, ae.Lazy = p, ae.Memo = m, ae.Portal = t, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = d, ae.SuspenseList = h, ae.isContextConsumer = function(a) {
      return e(a) === s;
    }, ae.isContextProvider = function(a) {
      return e(a) === l;
    }, ae.isElement = function(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }, ae.isForwardRef = function(a) {
      return e(a) === f;
    }, ae.isFragment = function(a) {
      return e(a) === n;
    }, ae.isLazy = function(a) {
      return e(a) === p;
    }, ae.isMemo = function(a) {
      return e(a) === m;
    }, ae.isPortal = function(a) {
      return e(a) === t;
    }, ae.isProfiler = function(a) {
      return e(a) === i;
    }, ae.isStrictMode = function(a) {
      return e(a) === o;
    }, ae.isSuspense = function(a) {
      return e(a) === d;
    }, ae.isSuspenseList = function(a) {
      return e(a) === h;
    }, ae.isValidElementType = function(a) {
      return typeof a == "string" || typeof a == "function" || a === n || a === i || a === o || a === d || a === h || a === T || typeof a == "object" && a !== null && (a.$$typeof === p || a.$$typeof === m || a.$$typeof === l || a.$$typeof === s || a.$$typeof === f || a.$$typeof === b || a.getModuleId !== void 0);
    }, ae.typeOf = e;
  }()), ae;
}
var On;
function Hi() {
  return On || (On = 1, process.env.NODE_ENV === "production" ? Fr.exports = /* @__PURE__ */ qi() : Fr.exports = /* @__PURE__ */ Ki()), Fr.exports;
}
var Sn = /* @__PURE__ */ Hi();
const Gi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function fo(e) {
  const r = `${e}`.match(Gi);
  return r && r[1] || "";
}
function po(e, r = "") {
  return e.displayName || e.name || fo(e) || r;
}
function Cn(e, r, t) {
  const n = po(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Xi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return po(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Sn.ForwardRef:
          return Cn(e, e.render, "ForwardRef");
        case Sn.Memo:
          return Cn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xi,
  getFunctionName: fo
}, Symbol.toStringTag, { value: "Module" })), Zi = /* @__PURE__ */ Xe(Ji), Qi = ["values", "unit", "step"], ea = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => H({}, t, {
    [n.key]: n.val
  }), {});
};
function ho(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Fe(e, Qi), i = ea(r), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t})`;
  }
  function f(p) {
    return `@media (max-width:${(typeof r[p] == "number" ? r[p] : p) - n / 100}${t})`;
  }
  function d(p, T) {
    const b = s.indexOf(T);
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t}) and (max-width:${(b !== -1 && typeof r[s[b]] == "number" ? r[s[b]] : T) - n / 100}${t})`;
  }
  function h(p) {
    return s.indexOf(p) + 1 < s.length ? d(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function m(p) {
    const T = s.indexOf(p);
    return T === 0 ? l(s[1]) : T === s.length - 1 ? f(s[T]) : d(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return H({
    keys: s,
    values: i,
    up: l,
    down: f,
    between: d,
    only: h,
    not: m,
    unit: t
  }, o);
}
const ra = {
  borderRadius: 4
}, Je = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function _r(e, r) {
  return r ? Ve(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Wt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Pn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wt[e]}px)`
};
function qe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Pn;
    return r.reduce((s, l, f) => (s[i.up(i.keys[f])] = t(r[f]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Pn;
    return Object.keys(r).reduce((s, l) => {
      if (Object.keys(i.values || Wt).indexOf(l) !== -1) {
        const f = i.up(l);
        s[f] = t(r[l], l);
      } else {
        const f = l;
        s[f] = r[f];
      }
      return s;
    }, {});
  }
  return t(r);
}
function ta(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function na(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Qr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Hr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Qr(e, t) || n, r && (o = r(o, n, e)), o;
}
function ve(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const l = s[r], f = s.theme, d = Qr(f, n) || {};
    return qe(s, l, (m) => {
      let p = Hr(d, o, m);
      return m === p && typeof m == "string" && (p = Hr(d, o, `${r}${m === "default" ? "" : Pe(m)}`, m)), t === !1 ? p : {
        [t]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Je
  } : {}, i.filterProps = [r], i;
}
function oa(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const ia = {
  m: "margin",
  p: "padding"
}, aa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $n = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, sa = oa((e) => {
  if (e.length > 2)
    if ($n[e])
      e = $n[e];
    else
      return [e];
  const [r, t] = e.split(""), n = ia[r], o = aa[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), et = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], rt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ca = [...et, ...rt];
function Pr(e, r, t, n) {
  var o;
  const i = (o = Qr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function yo(e) {
  return Pr(e, "spacing", 8, "spacing");
}
function $r(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ua(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = $r(r, t), n), {});
}
function la(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = sa(t), i = ua(o, n), s = e[t];
  return qe(e, s, i);
}
function mo(e, r) {
  const t = yo(e.theme);
  return Object.keys(e).map((n) => la(e, r, n, t)).reduce(_r, {});
}
function he(e) {
  return mo(e, et);
}
he.propTypes = process.env.NODE_ENV !== "production" ? et.reduce((e, r) => (e[r] = Je, e), {}) : {};
he.filterProps = et;
function ye(e) {
  return mo(e, rt);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? rt.reduce((e, r) => (e[r] = Je, e), {}) : {};
ye.filterProps = rt;
process.env.NODE_ENV !== "production" && ca.reduce((e, r) => (e[r] = Je, e), {});
function fa(e = 8) {
  if (e.mui)
    return e;
  const r = yo({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function tt(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? _r(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function De(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function je(e, r) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const da = je("border", De), pa = je("borderTop", De), ha = je("borderRight", De), ya = je("borderBottom", De), ma = je("borderLeft", De), ga = je("borderColor"), va = je("borderTopColor"), ba = je("borderRightColor"), Ea = je("borderBottomColor"), xa = je("borderLeftColor"), _a = je("outline", De), Ta = je("outlineColor"), nt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Pr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: $r(r, n)
    });
    return qe(e, e.borderRadius, t);
  }
  return null;
};
nt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
nt.filterProps = ["borderRadius"];
tt(da, pa, ha, ya, ma, ga, va, ba, Ea, xa, nt, _a, Ta);
const ot = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Pr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: $r(r, n)
    });
    return qe(e, e.gap, t);
  }
  return null;
};
ot.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
ot.filterProps = ["gap"];
const it = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Pr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: $r(r, n)
    });
    return qe(e, e.columnGap, t);
  }
  return null;
};
it.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
it.filterProps = ["columnGap"];
const at = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Pr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: $r(r, n)
    });
    return qe(e, e.rowGap, t);
  }
  return null;
};
at.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
at.filterProps = ["rowGap"];
const Ra = ve({
  prop: "gridColumn"
}), Oa = ve({
  prop: "gridRow"
}), Sa = ve({
  prop: "gridAutoFlow"
}), Ca = ve({
  prop: "gridAutoColumns"
}), Pa = ve({
  prop: "gridAutoRows"
}), $a = ve({
  prop: "gridTemplateColumns"
}), wa = ve({
  prop: "gridTemplateRows"
}), Ma = ve({
  prop: "gridTemplateAreas"
}), ka = ve({
  prop: "gridArea"
});
tt(ot, it, at, Ra, Oa, Sa, Ca, Pa, $a, wa, Ma, ka);
function yr(e, r) {
  return r === "grey" ? r : e;
}
const Aa = ve({
  prop: "color",
  themeKey: "palette",
  transform: yr
}), Ia = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yr
}), Da = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yr
});
tt(Aa, Ia, Da);
function we(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ja = ve({
  prop: "width",
  transform: we
}), Yt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Wt[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: we(t)
      };
    };
    return qe(e, e.maxWidth, r);
  }
  return null;
};
Yt.filterProps = ["maxWidth"];
const Na = ve({
  prop: "minWidth",
  transform: we
}), Fa = ve({
  prop: "height",
  transform: we
}), Ba = ve({
  prop: "maxHeight",
  transform: we
}), za = ve({
  prop: "minHeight",
  transform: we
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: we
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: we
});
const La = ve({
  prop: "boxSizing"
});
tt(ja, Yt, Na, Fa, Ba, za, La);
const wr = {
  // borders
  border: {
    themeKey: "borders",
    transform: De
  },
  borderTop: {
    themeKey: "borders",
    transform: De
  },
  borderRight: {
    themeKey: "borders",
    transform: De
  },
  borderBottom: {
    themeKey: "borders",
    transform: De
  },
  borderLeft: {
    themeKey: "borders",
    transform: De
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: De
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: nt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yr
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ot
  },
  rowGap: {
    style: at
  },
  columnGap: {
    style: it
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: we
  },
  maxWidth: {
    style: Yt
  },
  minWidth: {
    transform: we
  },
  height: {
    transform: we
  },
  maxHeight: {
    transform: we
  },
  minHeight: {
    transform: we
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Va(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Wa(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function go() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, l = i[t];
    if (!l)
      return {
        [t]: n
      };
    const {
      cssProperty: f = t,
      themeKey: d,
      transform: h,
      style: m
    } = l;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const p = Qr(o, d) || {};
    return m ? m(s) : qe(s, n, (b) => {
      let a = Hr(p, h, b);
      return b === a && typeof b == "string" && (a = Hr(p, h, `${t}${b === "default" ? "" : Pe(b)}`, b)), f === !1 ? a : {
        [f]: a
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : wr;
    function l(f) {
      let d = f;
      if (typeof f == "function")
        d = f(i);
      else if (typeof f != "object")
        return f;
      if (!d)
        return null;
      const h = ta(i.breakpoints), m = Object.keys(h);
      let p = h;
      return Object.keys(d).forEach((T) => {
        const b = Wa(d[T], i);
        if (b != null)
          if (typeof b == "object")
            if (s[T])
              p = _r(p, e(T, b, i, s));
            else {
              const a = qe({
                theme: i
              }, b, (O) => ({
                [T]: O
              }));
              Va(a, b) ? p[T] = r({
                sx: b,
                theme: i
              }) : p = _r(p, a);
            }
          else
            p = _r(p, e(T, b, i, s));
      }), na(m, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return r;
}
const st = go();
st.filterProps = ["sx"];
function vo(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const Ya = ["breakpoints", "palette", "spacing", "shape"];
function bo(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Fe(e, Ya), l = ho(t), f = fa(o);
  let d = Ve({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: H({
      mode: "light"
    }, n),
    spacing: f,
    shape: H({}, ra, i)
  }, s);
  return d.applyStyles = vo, d = r.reduce((h, m) => Ve(h, m), d), d.unstable_sxConfig = H({}, wr, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(m) {
    return st({
      sx: m,
      theme: this
    });
  }, d;
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo,
  private_createBreakpoints: ho,
  unstable_applyStyles: vo
}, Symbol.toStringTag, { value: "Module" })), qa = /* @__PURE__ */ Xe(Ua), Ka = ["sx"], Ha = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : wr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Ga(e) {
  const {
    sx: r
  } = e, t = Fe(e, Ka), {
    systemProps: n,
    otherProps: o
  } = Ha(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...s) => {
    const l = r(...s);
    return He(l) ? H({}, n, l) : n;
  } : i = H({}, n, r), H({}, o, {
    sx: i
  });
}
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st,
  extendSxProp: Ga,
  unstable_createStyleFunctionSx: go,
  unstable_defaultSxConfig: wr
}, Symbol.toStringTag, { value: "Module" })), Ja = /* @__PURE__ */ Xe(Xa);
var wn;
function Za() {
  if (wn) return rr;
  wn = 1;
  var e = eo();
  Object.defineProperty(rr, "__esModule", {
    value: !0
  }), rr.default = G, rr.shouldForwardProp = O, rr.systemDefaultTheme = void 0;
  var r = e(ai()), t = e(si()), n = T(Li), o = Wi, i = e(Ui), s = e(Zi), l = e(qa), f = e(Ja);
  const d = ["ownerState"], h = ["variants"], m = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function p(u) {
    if (typeof WeakMap != "function") return null;
    var g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (p = function(R) {
      return R ? v : g;
    })(u);
  }
  function T(u, g) {
    if (u && u.__esModule) return u;
    if (u === null || typeof u != "object" && typeof u != "function") return { default: u };
    var v = p(g);
    if (v && v.has(u)) return v.get(u);
    var R = { __proto__: null }, j = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var X in u) if (X !== "default" && Object.prototype.hasOwnProperty.call(u, X)) {
      var J = j ? Object.getOwnPropertyDescriptor(u, X) : null;
      J && (J.get || J.set) ? Object.defineProperty(R, X, J) : R[X] = u[X];
    }
    return R.default = u, v && v.set(u, R), R;
  }
  function b(u) {
    return Object.keys(u).length === 0;
  }
  function a(u) {
    return typeof u == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    u.charCodeAt(0) > 96;
  }
  function O(u) {
    return u !== "ownerState" && u !== "theme" && u !== "sx" && u !== "as";
  }
  const w = rr.systemDefaultTheme = (0, l.default)(), N = (u) => u && u.charAt(0).toLowerCase() + u.slice(1);
  function C({
    defaultTheme: u,
    theme: g,
    themeId: v
  }) {
    return b(g) ? u : g[v] || g;
  }
  function M(u) {
    return u ? (g, v) => v[u] : null;
  }
  function E(u, g) {
    let {
      ownerState: v
    } = g, R = (0, t.default)(g, d);
    const j = typeof u == "function" ? u((0, r.default)({
      ownerState: v
    }, R)) : u;
    if (Array.isArray(j))
      return j.flatMap((X) => E(X, (0, r.default)({
        ownerState: v
      }, R)));
    if (j && typeof j == "object" && Array.isArray(j.variants)) {
      const {
        variants: X = []
      } = j;
      let Z = (0, t.default)(j, h);
      return X.forEach((Y) => {
        let K = !0;
        typeof Y.props == "function" ? K = Y.props((0, r.default)({
          ownerState: v
        }, R, v)) : Object.keys(Y.props).forEach((se) => {
          (v == null ? void 0 : v[se]) !== Y.props[se] && R[se] !== Y.props[se] && (K = !1);
        }), K && (Array.isArray(Z) || (Z = [Z]), Z.push(typeof Y.style == "function" ? Y.style((0, r.default)({
          ownerState: v
        }, R, v)) : Y.style));
      }), Z;
    }
    return j;
  }
  function G(u = {}) {
    const {
      themeId: g,
      defaultTheme: v = w,
      rootShouldForwardProp: R = O,
      slotShouldForwardProp: j = O
    } = u, X = (J) => (0, f.default)((0, r.default)({}, J, {
      theme: C((0, r.default)({}, J, {
        defaultTheme: v,
        themeId: g
      }))
    }));
    return X.__mui_systemSx = !0, (J, Z = {}) => {
      (0, n.internal_processStyles)(J, (A) => A.filter((I) => !(I != null && I.__mui_systemSx)));
      const {
        name: Y,
        slot: K,
        skipVariantsResolver: se,
        skipSx: me,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: Ne = M(N(K))
      } = Z, x = (0, t.default)(Z, m), P = se !== void 0 ? se : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        K && K !== "Root" && K !== "root" || !1
      ), U = me || !1;
      let z;
      process.env.NODE_ENV !== "production" && Y && (z = `${Y}-${N(K || "Root")}`);
      let k = O;
      K === "Root" || K === "root" ? k = R : K ? k = j : a(J) && (k = void 0);
      const L = (0, n.default)(J, (0, r.default)({
        shouldForwardProp: k,
        label: z
      }, x)), D = (A) => typeof A == "function" && A.__emotion_real !== A || (0, o.isPlainObject)(A) ? (I) => E(A, (0, r.default)({}, I, {
        theme: C({
          theme: I.theme,
          defaultTheme: v,
          themeId: g
        })
      })) : A, B = (A, ...I) => {
        let V = D(A);
        const le = I ? I.map(D) : [];
        Y && Ne && le.push((de) => {
          const be = C((0, r.default)({}, de, {
            defaultTheme: v,
            themeId: g
          }));
          if (!be.components || !be.components[Y] || !be.components[Y].styleOverrides)
            return null;
          const Be = be.components[Y].styleOverrides, We = {};
          return Object.entries(Be).forEach(([Ke, br]) => {
            We[Ke] = E(br, (0, r.default)({}, de, {
              theme: be
            }));
          }), Ne(de, We);
        }), Y && !P && le.push((de) => {
          var be;
          const Be = C((0, r.default)({}, de, {
            defaultTheme: v,
            themeId: g
          })), We = Be == null || (be = Be.components) == null || (be = be[Y]) == null ? void 0 : be.variants;
          return E({
            variants: We
          }, (0, r.default)({}, de, {
            theme: Be
          }));
        }), U || le.push(X);
        const S = le.length - I.length;
        if (Array.isArray(A) && S > 0) {
          const de = new Array(S).fill("");
          V = [...A, ...de], V.raw = [...A.raw, ...de];
        }
        const Te = L(V, ...le);
        if (process.env.NODE_ENV !== "production") {
          let de;
          Y && (de = `${Y}${(0, i.default)(K || "")}`), de === void 0 && (de = `Styled(${(0, s.default)(J)})`), Te.displayName = de;
        }
        return J.muiName && (Te.muiName = J.muiName), Te;
      };
      return L.withConfig && (B.withConfig = L.withConfig), B;
    };
  }
  return rr;
}
var Qa = /* @__PURE__ */ Za();
const es = /* @__PURE__ */ Gn(Qa), Mn = (e) => e, rs = () => {
  let e = Mn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Mn;
    }
  };
}, ts = rs(), ns = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ct(e, r, t = "Mui") {
  const n = ns[r];
  return n ? `${t}-${n}` : `${ts.generate(e)}-${r}`;
}
function os(e, r) {
  return H({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Sr = {
  black: "#000",
  white: "#fff"
}, is = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ur = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, lr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, xr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, fr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, dr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, pr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, as = ["mode", "contrastThreshold", "tonalOffset"], kn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Sr.white,
    default: Sr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, $t = {
  text: {
    primary: Sr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Sr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function An(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Ge.lighten(e.main, o) : r === "dark" && (e.dark = Ge.darken(e.main, i)));
}
function ss(e = "light") {
  return e === "dark" ? {
    main: fr[200],
    light: fr[50],
    dark: fr[400]
  } : {
    main: fr[700],
    light: fr[400],
    dark: fr[800]
  };
}
function cs(e = "light") {
  return e === "dark" ? {
    main: ur[200],
    light: ur[50],
    dark: ur[400]
  } : {
    main: ur[500],
    light: ur[300],
    dark: ur[700]
  };
}
function us(e = "light") {
  return e === "dark" ? {
    main: lr[500],
    light: lr[300],
    dark: lr[700]
  } : {
    main: lr[700],
    light: lr[400],
    dark: lr[800]
  };
}
function ls(e = "light") {
  return e === "dark" ? {
    main: dr[400],
    light: dr[300],
    dark: dr[700]
  } : {
    main: dr[700],
    light: dr[500],
    dark: dr[900]
  };
}
function fs(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[800],
    light: pr[500],
    dark: pr[900]
  };
}
function ds(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: xr[500],
    dark: xr[900]
  };
}
function ps(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Fe(e, as), i = e.primary || ss(r), s = e.secondary || cs(r), l = e.error || us(r), f = e.info || ls(r), d = e.success || fs(r), h = e.warning || ds(r);
  function m(a) {
    const O = Ge.getContrastRatio(a, $t.text.primary) >= t ? $t.text.primary : kn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Ge.getContrastRatio(a, O);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${O} on ${a}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const p = ({
    color: a,
    name: O,
    mainShade: w = 500,
    lightShade: N = 300,
    darkShade: C = 700
  }) => {
    if (a = H({}, a), !a.main && a[w] && (a.main = a[w]), !a.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Tr(11, O ? ` (${O})` : "", w));
    if (typeof a.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(a.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Tr(12, O ? ` (${O})` : "", JSON.stringify(a.main)));
    return An(a, "light", N, n), An(a, "dark", C, n), a.contrastText || (a.contrastText = m(a.main)), a;
  }, T = {
    dark: $t,
    light: kn
  };
  return process.env.NODE_ENV !== "production" && (T[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Ve(H({
    // A collection of common colors.
    common: H({}, Sr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: is,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, T[r]), o);
}
const hs = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ys(e) {
  return Math.round(e * 1e5) / 1e5;
}
const In = {
  textTransform: "uppercase"
}, Dn = '"Roboto", "Helvetica", "Arial", sans-serif';
function ms(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Dn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: f = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: m
  } = t, p = Fe(t, hs);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = o / 14, b = m || ((w) => `${w / d * T}rem`), a = (w, N, C, M, E) => H({
    fontFamily: n,
    fontWeight: w,
    fontSize: b(N),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === Dn ? {
    letterSpacing: `${ys(M / N)}em`
  } : {}, E, h), O = {
    h1: a(i, 96, 1.167, -1.5),
    h2: a(i, 60, 1.2, -0.5),
    h3: a(s, 48, 1.167, 0),
    h4: a(s, 34, 1.235, 0.25),
    h5: a(s, 24, 1.334, 0),
    h6: a(l, 20, 1.6, 0.15),
    subtitle1: a(s, 16, 1.75, 0.15),
    subtitle2: a(l, 14, 1.57, 0.1),
    body1: a(s, 16, 1.5, 0.15),
    body2: a(s, 14, 1.43, 0.15),
    button: a(l, 14, 1.75, 0.4, In),
    caption: a(s, 12, 1.66, 0.4),
    overline: a(s, 12, 2.66, 1, In),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ve(H({
    htmlFontSize: d,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: f
  }, O), p, {
    clone: !1
    // No need to clone deep
  });
}
const gs = 0.2, vs = 0.14, bs = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${bs})`].join(",");
}
const Es = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xs = ["duration", "easing", "delay"], _s = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ts = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function jn(e) {
  return `${Math.round(e)}ms`;
}
function Rs(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Os(e) {
  const r = H({}, _s, e.easing), t = H({}, Ts, e.duration);
  return H({
    getAutoHeightDuration: Rs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: l = r.easeInOut,
        delay: f = 0
      } = i, d = Fe(i, xs);
      if (process.env.NODE_ENV !== "production") {
        const h = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(l) || console.error('MUI: Argument "easing" must be a string.'), !m(f) && !h(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof s == "string" ? s : jn(s)} ${l} ${typeof f == "string" ? f : jn(f)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Ss = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Cs = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ut(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Fe(e, Cs);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Tr(18));
  const l = ps(n), f = bo(e);
  let d = Ve(f, {
    mixins: os(f.breakpoints, t),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Es.slice(),
    typography: ms(l, i),
    transitions: Os(o),
    zIndex: H({}, Ss)
  });
  if (d = Ve(d, s), d = r.reduce((h, m) => Ve(h, m), d), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, T) => {
      let b;
      for (b in p) {
        const a = p[b];
        if (h.indexOf(b) !== -1 && Object.keys(a).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = ct("", b);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: a
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[b] = {};
        }
      }
    };
    Object.keys(d.components).forEach((p) => {
      const T = d.components[p].styleOverrides;
      T && p.indexOf("Mui") === 0 && m(T, p);
    });
  }
  return d.unstable_sxConfig = H({}, wr, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(m) {
    return st({
      sx: m,
      theme: this
    });
  }, d;
}
const Ps = Ut(), $s = "$$material";
function ws(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Eo = (e) => ws(e) && e !== "classes", vr = es({
  themeId: $s,
  defaultTheme: Ps,
  rootShouldForwardProp: Eo
}), Ms = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (y.node, y.object);
function ks(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? qr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? qr(o, n) : n;
}
function As({
  props: e,
  name: r
}) {
  const t = W.useContext(Ms);
  return ks({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function qt(e) {
  return As(e);
}
const Is = y.oneOfType([y.func, y.object]);
function Ds(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function js(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Ns(e, r, t, n, o) {
  const i = e[r], s = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !js(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Fs = Ds(y.elementType, Ns);
function Bs(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function Nn(...e) {
  return W.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Bs(t, r);
    });
  }, e);
}
const zs = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function Br(e) {
  const r = W.useRef(e);
  return zs(() => {
    r.current = e;
  }), W.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
const Fn = {};
function Ls(e, r) {
  const t = W.useRef(Fn);
  return t.current === Fn && (t.current = e(r)), t;
}
const Vs = [];
function Ws(e) {
  W.useEffect(e, Vs);
}
class ut {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new ut();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t();
    }, r);
  }
}
function Ys() {
  const e = Ls(ut.create).current;
  return Ws(e.disposeEffect), e;
}
let lt = !0, Dt = !1;
const Us = new ut(), qs = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ks(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && qs[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Hs(e) {
  e.metaKey || e.altKey || e.ctrlKey || (lt = !0);
}
function wt() {
  lt = !1;
}
function Gs() {
  this.visibilityState === "hidden" && Dt && (lt = !0);
}
function Xs(e) {
  e.addEventListener("keydown", Hs, !0), e.addEventListener("mousedown", wt, !0), e.addEventListener("pointerdown", wt, !0), e.addEventListener("touchstart", wt, !0), e.addEventListener("visibilitychange", Gs, !0);
}
function Js(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return lt || Ks(r);
}
function Zs() {
  const e = W.useCallback((o) => {
    o != null && Xs(o.ownerDocument);
  }, []), r = W.useRef(!1);
  function t() {
    return r.current ? (Dt = !0, Us.start(100, () => {
      Dt = !1;
    }), r.current = !1, !0) : !1;
  }
  function n(o) {
    return Js(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function jt(e, r) {
  return jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, jt(e, r);
}
function Qs(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, jt(e, r);
}
const Bn = tr.createContext(null);
function ec(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kt(e, r) {
  var t = function(i) {
    return r && Lr(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && jo.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function rc(e, r) {
  e = e || {}, r = r || {};
  function t(h) {
    return h in r ? r[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var f in r) {
    if (n[f])
      for (s = 0; s < n[f].length; s++) {
        var d = n[f][s];
        l[n[f][s]] = t(d);
      }
    l[f] = t(f);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = t(o[s]);
  return l;
}
function nr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function tc(e, r) {
  return Kt(e.children, function(t) {
    return Vr(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: nr(t, "appear", e),
      enter: nr(t, "enter", e),
      exit: nr(t, "exit", e)
    });
  });
}
function nc(e, r, t) {
  var n = Kt(e.children), o = rc(r, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Lr(s)) {
      var l = i in r, f = i in n, d = r[i], h = Lr(d) && !d.props.in;
      f && (!l || h) ? o[i] = Vr(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: nr(s, "exit", e),
        enter: nr(s, "enter", e)
      }) : !f && l && !h ? o[i] = Vr(s, {
        in: !1
      }) : f && l && Lr(d) && (o[i] = Vr(s, {
        onExited: t.bind(null, s),
        in: d.props.in,
        exit: nr(s, "exit", e),
        enter: nr(s, "enter", e)
      }));
    }
  }), o;
}
var oc = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, ic = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, Ht = /* @__PURE__ */ function(e) {
  Qs(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ec(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, f = i.firstRender;
    return {
      children: f ? tc(o, l) : nc(o, s, l),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var s = Kt(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var f = H({}, l.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = Fe(o, ["component", "childFactory"]), f = this.state.contextValue, d = oc(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ tr.createElement(Bn.Provider, {
      value: f
    }, d) : /* @__PURE__ */ tr.createElement(Bn.Provider, {
      value: f
    }, /* @__PURE__ */ tr.createElement(i, l, d));
  }, r;
}(tr.Component);
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: y.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: y.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: y.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: y.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: y.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: y.func
} : {};
Ht.defaultProps = ic;
function Gt(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = ct(e, o, t);
  }), n;
}
function xo(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: f,
    timeout: d
  } = e, [h, m] = W.useState(!1), p = Ae(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), T = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = Ae(t.child, h && t.childLeaving, n && t.childPulsate);
  return !l && !h && m(!0), W.useEffect(() => {
    if (!l && f != null) {
      const a = setTimeout(f, d);
      return () => {
        clearTimeout(a);
      };
    }
  }, [f, l, d]), /* @__PURE__ */ Me.jsx("span", {
    className: p,
    style: T,
    children: /* @__PURE__ */ Me.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object.isRequired,
  className: y.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: y.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: y.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: y.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: y.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: y.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: y.number,
  /**
   * exit delay
   */
  timeout: y.number.isRequired
});
const Ie = Gt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ac = ["center", "classes", "className"];
let ft = (e) => e, zn, Ln, Vn, Wn;
const Nt = 550, sc = 80, cc = Gr(zn || (zn = ft`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), uc = Gr(Ln || (Ln = ft`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), lc = Gr(Vn || (Vn = ft`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), fc = vr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), dc = vr(xo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Wn || (Wn = ft`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Ie.rippleVisible, cc, Nt, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ie.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ie.child, Ie.childLeaving, uc, Nt, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ie.childPulsate, lc, ({
  theme: e
}) => e.transitions.easing.easeInOut), _o = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = qt({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, l = Fe(n, ac), [f, d] = W.useState([]), h = W.useRef(0), m = W.useRef(null);
  W.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [f]);
  const p = W.useRef(!1), T = Ys(), b = W.useRef(null), a = W.useRef(null), O = W.useCallback((M) => {
    const {
      pulsate: E,
      rippleX: G,
      rippleY: u,
      rippleSize: g,
      cb: v
    } = M;
    d((R) => [...R, /* @__PURE__ */ Me.jsx(dc, {
      classes: {
        ripple: Ae(i.ripple, Ie.ripple),
        rippleVisible: Ae(i.rippleVisible, Ie.rippleVisible),
        ripplePulsate: Ae(i.ripplePulsate, Ie.ripplePulsate),
        child: Ae(i.child, Ie.child),
        childLeaving: Ae(i.childLeaving, Ie.childLeaving),
        childPulsate: Ae(i.childPulsate, Ie.childPulsate)
      },
      timeout: Nt,
      pulsate: E,
      rippleX: G,
      rippleY: u,
      rippleSize: g
    }, h.current)]), h.current += 1, m.current = v;
  }, [i]), w = W.useCallback((M = {}, E = {}, G = () => {
  }) => {
    const {
      pulsate: u = !1,
      center: g = o || E.pulsate,
      fakeElement: v = !1
      // For test purposes
    } = E;
    if ((M == null ? void 0 : M.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (p.current = !0);
    const R = v ? null : a.current, j = R ? R.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let X, J, Z;
    if (g || M === void 0 || M.clientX === 0 && M.clientY === 0 || !M.clientX && !M.touches)
      X = Math.round(j.width / 2), J = Math.round(j.height / 2);
    else {
      const {
        clientX: Y,
        clientY: K
      } = M.touches && M.touches.length > 0 ? M.touches[0] : M;
      X = Math.round(Y - j.left), J = Math.round(K - j.top);
    }
    if (g)
      Z = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), Z % 2 === 0 && (Z += 1);
    else {
      const Y = Math.max(Math.abs((R ? R.clientWidth : 0) - X), X) * 2 + 2, K = Math.max(Math.abs((R ? R.clientHeight : 0) - J), J) * 2 + 2;
      Z = Math.sqrt(Y ** 2 + K ** 2);
    }
    M != null && M.touches ? b.current === null && (b.current = () => {
      O({
        pulsate: u,
        rippleX: X,
        rippleY: J,
        rippleSize: Z,
        cb: G
      });
    }, T.start(sc, () => {
      b.current && (b.current(), b.current = null);
    })) : O({
      pulsate: u,
      rippleX: X,
      rippleY: J,
      rippleSize: Z,
      cb: G
    });
  }, [o, O, T]), N = W.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), C = W.useCallback((M, E) => {
    if (T.clear(), (M == null ? void 0 : M.type) === "touchend" && b.current) {
      b.current(), b.current = null, T.start(0, () => {
        C(M, E);
      });
      return;
    }
    b.current = null, d((G) => G.length > 0 ? G.slice(1) : G), m.current = E;
  }, [T]);
  return W.useImperativeHandle(t, () => ({
    pulsate: N,
    start: w,
    stop: C
  }), [N, w, C]), /* @__PURE__ */ Me.jsx(fc, H({
    className: Ae(Ie.root, i.root, s),
    ref: a
  }, l, {
    children: /* @__PURE__ */ Me.jsx(Ht, {
      component: null,
      exit: !0,
      children: f
    })
  }));
});
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: y.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string
});
function pc(e) {
  return ct("MuiButtonBase", e);
}
const hc = Gt("MuiButtonBase", ["root", "disabled", "focusVisible"]), yc = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], mc = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Qn({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, pc, o);
  return t && n && (s.root += ` ${n}`), s;
}, gc = vr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${hc.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), To = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = qt({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: f = "button",
    disabled: d = !1,
    disableRipple: h = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: T = "a",
    onBlur: b,
    onClick: a,
    onContextMenu: O,
    onDragLeave: w,
    onFocus: N,
    onFocusVisible: C,
    onKeyDown: M,
    onKeyUp: E,
    onMouseDown: G,
    onMouseLeave: u,
    onMouseUp: g,
    onTouchEnd: v,
    onTouchMove: R,
    onTouchStart: j,
    tabIndex: X = 0,
    TouchRippleProps: J,
    touchRippleRef: Z,
    type: Y
  } = n, K = Fe(n, yc), se = W.useRef(null), me = W.useRef(null), Ne = Nn(me, Z), {
    isFocusVisibleRef: x,
    onFocus: P,
    onBlur: U,
    ref: z
  } = Zs(), [k, L] = W.useState(!1);
  d && k && L(!1), W.useImperativeHandle(o, () => ({
    focusVisible: () => {
      L(!0), se.current.focus();
    }
  }), []);
  const [D, B] = W.useState(!1);
  W.useEffect(() => {
    B(!0);
  }, []);
  const A = D && !h && !d;
  W.useEffect(() => {
    k && p && !h && D && me.current.pulsate();
  }, [h, p, k, D]);
  function I(q, Ar, yt = m) {
    return Br((ir) => (Ar && Ar(ir), !yt && me.current && me.current[q](ir), !0));
  }
  const V = I("start", G), le = I("stop", O), S = I("stop", w), Te = I("stop", g), de = I("stop", (q) => {
    k && q.preventDefault(), u && u(q);
  }), be = I("start", j), Be = I("stop", v), We = I("stop", R), Ke = I("stop", (q) => {
    U(q), x.current === !1 && L(!1), b && b(q);
  }, !1), br = Br((q) => {
    se.current || (se.current = q.currentTarget), P(q), x.current === !0 && (L(!0), C && C(q)), N && N(q);
  }), or = () => {
    const q = se.current;
    return f && f !== "button" && !(q.tagName === "A" && q.href);
  }, Ze = W.useRef(!1), dt = Br((q) => {
    p && !Ze.current && k && me.current && q.key === " " && (Ze.current = !0, me.current.stop(q, () => {
      me.current.start(q);
    })), q.target === q.currentTarget && or() && q.key === " " && q.preventDefault(), M && M(q), q.target === q.currentTarget && or() && q.key === "Enter" && !d && (q.preventDefault(), a && a(q));
  }), Mr = Br((q) => {
    p && q.key === " " && me.current && k && !q.defaultPrevented && (Ze.current = !1, me.current.stop(q, () => {
      me.current.pulsate(q);
    })), E && E(q), a && q.target === q.currentTarget && or() && q.key === " " && !q.defaultPrevented && a(q);
  });
  let Qe = f;
  Qe === "button" && (K.href || K.to) && (Qe = T);
  const er = {};
  Qe === "button" ? (er.type = Y === void 0 ? "button" : Y, er.disabled = d) : (!K.href && !K.to && (er.role = "button"), d && (er["aria-disabled"] = d));
  const pt = Nn(t, z, se);
  process.env.NODE_ENV !== "production" && W.useEffect(() => {
    A && !me.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [A]);
  const kr = H({}, n, {
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: X,
    focusVisible: k
  }), ht = mc(kr);
  return /* @__PURE__ */ Me.jsxs(gc, H({
    as: Qe,
    className: Ae(ht.root, l),
    ownerState: kr,
    onBlur: Ke,
    onClick: a,
    onContextMenu: le,
    onFocus: br,
    onKeyDown: dt,
    onKeyUp: Mr,
    onMouseDown: V,
    onMouseLeave: de,
    onMouseUp: Te,
    onDragLeave: S,
    onTouchEnd: Be,
    onTouchMove: We,
    onTouchStart: be,
    ref: pt,
    tabIndex: d ? -1 : X,
    type: Y
  }, er, K, {
    children: [s, A ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Me.jsx(_o, H({
        ref: Ne,
        center: i
      }, J))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (To.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Is,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: y.bool,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Fs,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: y.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: y.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: y.string,
  /**
   * @ignore
   */
  href: y.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: y.elementType,
  /**
   * @ignore
   */
  onBlur: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * @ignore
   */
  onContextMenu: y.func,
  /**
   * @ignore
   */
  onDragLeave: y.func,
  /**
   * @ignore
   */
  onFocus: y.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: y.func,
  /**
   * @ignore
   */
  onKeyDown: y.func,
  /**
   * @ignore
   */
  onKeyUp: y.func,
  /**
   * @ignore
   */
  onMouseDown: y.func,
  /**
   * @ignore
   */
  onMouseLeave: y.func,
  /**
   * @ignore
   */
  onMouseUp: y.func,
  /**
   * @ignore
   */
  onTouchEnd: y.func,
  /**
   * @ignore
   */
  onTouchMove: y.func,
  /**
   * @ignore
   */
  onTouchStart: y.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @default 0
   */
  tabIndex: y.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: y.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: y.oneOfType([y.func, y.shape({
    current: y.shape({
      pulsate: y.func.isRequired,
      start: y.func.isRequired,
      stop: y.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string])
});
function vc(e) {
  return ct("MuiButton", e);
}
const zr = Gt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ro = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (Ro.displayName = "ButtonGroupContext");
const Oo = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (Oo.displayName = "ButtonGroupButtonContext");
const bc = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Ec = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, `${i}${Pe(r)}`, `size${Pe(o)}`, `${i}Size${Pe(o)}`, `color${Pe(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Pe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Pe(o)}`]
  }, f = Qn(l, vc, s);
  return H({}, s, f);
}, So = (e) => H({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), xc = vr(To, {
  shouldForwardProp: (e) => Eo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${Pe(t.color)}`], r[`size${Pe(t.size)}`], r[`${t.variant}Size${Pe(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return H({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": H({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "text" && r.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge.alpha(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "outlined" && r.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[r.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge.alpha(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, r.variant === "contained" && r.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[r.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[r.color].main
      }
    }),
    "&:active": H({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${zr.focusVisible}`]: H({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${zr.disabled}`]: H({
      color: (e.vars || e).palette.action.disabled
    }, r.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, r.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, r.variant === "text" && {
    padding: "6px 8px"
  }, r.variant === "text" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main
  }, r.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, r.variant === "outlined" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${Ge.alpha(e.palette[r.color].main, 0.5)}`
  }, r.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (t = (n = e.palette).getContrastText) == null ? void 0 : t.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, r.variant === "contained" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].contrastText,
    backgroundColor: (e.vars || e).palette[r.color].main
  }, r.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, r.size === "small" && r.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, r.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${zr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${zr.disabled}`]: {
    boxShadow: "none"
  }
}), _c = vr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${Pe(t.size)}`]];
  }
})(({
  ownerState: e
}) => H({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, So(e))), Tc = vr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${Pe(t.size)}`]];
  }
})(({
  ownerState: e
}) => H({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, So(e))), Co = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = W.useContext(Ro), o = W.useContext(Oo), i = qr(n, r), s = qt({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: f = "primary",
    component: d = "button",
    className: h,
    disabled: m = !1,
    disableElevation: p = !1,
    disableFocusRipple: T = !1,
    endIcon: b,
    focusVisibleClassName: a,
    fullWidth: O = !1,
    size: w = "medium",
    startIcon: N,
    type: C,
    variant: M = "text"
  } = s, E = Fe(s, bc), G = H({}, s, {
    color: f,
    component: d,
    disabled: m,
    disableElevation: p,
    disableFocusRipple: T,
    fullWidth: O,
    size: w,
    type: C,
    variant: M
  }), u = Ec(G), g = N && /* @__PURE__ */ Me.jsx(_c, {
    className: u.startIcon,
    ownerState: G,
    children: N
  }), v = b && /* @__PURE__ */ Me.jsx(Tc, {
    className: u.endIcon,
    ownerState: G,
    children: b
  }), R = o || "";
  return /* @__PURE__ */ Me.jsxs(xc, H({
    ownerState: G,
    className: Ae(n.className, u.root, h, R),
    component: d,
    disabled: m,
    focusRipple: !T,
    focusVisibleClassName: Ae(u.focusVisible, a),
    ref: t,
    type: C
  }, E, {
    classes: u,
    children: [g, l, v]
  }));
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: y.oneOfType([y.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: y.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * Element placed after the children.
   */
  endIcon: y.node,
  /**
   * @ignore
   */
  focusVisibleClassName: y.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: y.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: y.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: y.oneOfType([y.oneOf(["small", "medium", "large"]), y.string]),
  /**
   * Element placed before the children.
   */
  startIcon: y.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: y.oneOfType([y.oneOf(["contained", "outlined", "text"]), y.string])
});
const Kc = (e) => {
  const { variant: r = "primary", children: t, ...n } = e;
  let o = "contained", i = "primary", s = "";
  switch (r) {
    case "primary":
      o = "contained", i = "primary";
      break;
    case "secondary":
      o = "contained", i = "secondary";
      break;
    case "system":
      o = "contained", s = "system-button";
      break;
    case "text":
      o = "text";
      break;
  }
  return /* @__PURE__ */ Me.jsx(
    Co,
    {
      variant: o,
      color: i,
      className: s ? `${s} ${n.className || ""}` : n.className,
      disableElevation: !0,
      ...n,
      children: t
    }
  );
}, Rc = {
  mode: "light",
  common: {
    white: "#FFFFFF",
    black: "#000000"
  },
  primary: {
    light: "#EDEFF2",
    main: "#20ABAD",
    dark: "#E64722"
  },
  secondary: {
    light: "#EDEFF2",
    main: "#FE5B35",
    dark: "#EDEFF2"
  },
  typography: {
    light: "#EDEFF2",
    secondary: "#5F6677",
    primary: "#1F232D",
    disabled: "#B8B8B8",
    negativeDisabled: "#707070",
    tag: "#1773FD",
    termsAndCondition: "#5E5E5E"
  },
  backgrounds: {
    white: "#FFFFFF",
    system: "#F4F5F8",
    form: "#1e6779",
    login: "#FFFCF5",
    error: "#FCF6F6",
    border: "#D6DCE6",
    addInInfo: "#FFF7E1"
  },
  hart: {
    primary: "#FDE5F4",
    hover: "#FFCAEB",
    active: "#D93098"
  },
  systemHeader: {
    main: "#131720",
    secondary: "#2E2E2E",
    light: "#707070"
  },
  search: {
    background: "#edeff2",
    border: "#1773fd"
  },
  buttons: {
    backgroundLight: "#F6F7FA",
    backgroundDisable: "#E4E4E4",
    backgroundSecondary: "#383F50",
    backgroundDark: "#1F232D",
    backgroundSystem: "#F4F5F8",
    negativeDisabled: "#282828",
    grayHover: "#E2E8F0",
    grayPressed: "#CED5DF",
    form: "#EDEFF2",
    iconButtonBackgroundFocus: "#0000000a"
  },
  divider: "#c7c7c7",
  shadow: {
    main: "-1px 1px 0px #1F232D;",
    solid: "-1px 1px 0px #CED5DF",
    drop: "rgba(52, 54, 91, 0.08)",
    avatarBadge: "0px 4px 12px rgba(31, 35, 45, 0.12)",
    tooltip: "0px 5px 5px rgba(0, 0, 0, 0.1), -1px 1px 0px #1F232D, 0px 10px 14px rgba(52, 54, 91, 0.14)",
    disabled: " -1px 1px 0px #B8B8B8",
    addInShadow: "-1px 1px 0px #D6DCE5, 0px 1px 0px #E0E4EB"
  }
}, Se = {
  values: {
    xs: 0,
    sm: 321,
    md: 768,
    lg: 1025,
    xl: 1420
  }
}, xe = '"Lexend deca", sans-serif';
var Yn, Un, qn, Kn, Hn;
const Oc = {
  allVariants: {
    fontFamily: xe
  },
  fontFamily: xe,
  fontSize: 14,
  // Used in homepage
  h1Light: {},
  h1Regular: {},
  regularBold: {},
  regularRegular: {},
  smallBold: {},
  smallSemiBold: {},
  xsmallRegular: {},
  xsmallSemiBold: {},
  h1Bold: {
    fontFamily: xe,
    fontSize: "48px",
    lineHeight: "56px",
    [`@media screen and (max-width: ${(Yn = Se == null ? void 0 : Se.values) == null ? void 0 : Yn.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "700"
  },
  h1SemiBold: {
    fontFamily: xe,
    fontSize: "48px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(Un = Se == null ? void 0 : Se.values) == null ? void 0 : Un.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "600"
  },
  h1Medium: {
    fontFamily: xe,
    fontSize: "48px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  // Used in homepage
  h2Bold: {
    fontFamily: xe,
    fontSize: "40px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(qn = Se == null ? void 0 : Se.values) == null ? void 0 : qn.md}px)`]: {
      fontSize: "24px",
      lineHeight: "30px"
    },
    fontWeight: "700"
  },
  h2Medium: {
    fontFamily: xe,
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  h2Regular: {
    fontFamily: xe,
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "60px"
  },
  // Used in homepage
  h3Bold: {
    fontFamily: xe,
    fontSize: "28px",
    [`@media screen and (max-width: ${(Kn = Se == null ? void 0 : Se.values) == null ? void 0 : Kn.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "600",
    lineHeight: "40px"
  },
  h3Regular: {
    fontFamily: xe,
    fontSize: "32px",
    [`@media screen and (max-width: ${(Hn = Se == null ? void 0 : Se.values) == null ? void 0 : Hn.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "400",
    lineHeight: "40px"
  },
  mediumBold: {
    fontFamily: xe,
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "16px"
  },
  mediumRegular: {
    fontFamily: xe,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "150%"
  },
  // Used in file a claim
  smallRegular: {
    fontFamily: xe,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px"
  },
  // Used in FormAppbar
  paragraphBold: {
    fontFamily: xe,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "30px"
  },
  // Used in homepage
  paragraphMedium: {
    fontFamily: xe,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "30px"
  },
  h1: void 0,
  h2: void 0,
  h3: void 0,
  h4: void 0,
  h5: void 0,
  h6: void 0,
  subtitle1: void 0,
  subtitle2: void 0,
  body1: {
    fontFamily: xe
  },
  body2: void 0,
  button: {
    fontFamily: xe,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px"
  },
  caption: {
    fontFamily: xe,
    fontSize: "14px",
    fontWeight: "400"
  },
  overline: void 0
}, Sc = (e) => ({
  defaultProps: {
    disableRipple: !0,
    variant: "primary"
  },
  styleOverrides: {
    root: {},
    contained: {
      color: e.palette.common.white,
      "&:hover": {
        color: e.palette.common.black
      }
    }
  }
}), Cc = (e) => ({
  defaultProps: {
    disableRipple: !0
  }
}), Pc = (e) => ({
  styleOverrides: {
    root: {
      ...e.typography.h1Medium,
      backgroundColor: e.palette.backgrounds.system
    }
  }
}), $c = (e) => ({
  styleOverrides: {
    root: {
      fontSize: "10px",
      margin: "3px 14px 0"
    }
  }
}), wc = (e) => ({
  styleOverrides: {
    input: {
      ...e.typography.regularRegular
    }
  }
}), Mc = (e) => ({
  styleOverrides: {
    root: {
      "&.MuiFormLabel-root": {
        ...e.typography.regularRegular
      }
    }
  }
}), kc = (e) => ({
  defaultProps: {
    disableRipple: !0
  },
  styleOverrides: {
    root: {
      ...e.typography.regularRegular
    }
  }
}), Ac = (e) => ({
  styleOverrides: {
    listbox: {
      ...e.typography.regularRegular
    },
    noOptions: {
      ...e.typography.regularRegular
    },
    loading: {
      ...e.typography.regularRegular
    }
  }
}), Ic = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: xe
    }
  }
}), Dc = (e) => ({
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        backgroundColor: `${e.palette.primary.main} !important`
      }
    }
  }
}), jc = (e) => ({
  styleOverrides: {
    root: {
      "&:focus": {
        backgroundColor: e.palette.buttons.iconButtonBackgroundFocus
      }
    }
  }
}), Nc = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: xe
    }
  }
}), Fc = (e) => ({
  styleOverrides: {
    expandIconWrapper: {
      color: e.palette.secondary.main
    }
  }
}), Bc = (e) => ({
  styleOverrides: {
    root: {
      "&.nav-bar-item": {
        cursor: "pointer",
        borderRadius: "60px",
        color: e.palette.common.black,
        backgroundColor: "transparent",
        "&.MuiListItemButton-root-active": {
          backgroundColor: e.palette.common.white
        },
        "&.MuiListItemButton-root:hover": {
          color: "initial",
          backgroundColor: Vo(e.palette.common.white, 0.1),
          "&.MuiListItemButton-root:hover .MuiListItemIcon-root": {
            color: e.palette.primary.main
          }
        }
      }
    }
  }
}), zc = (e) => ({
  styleOverrides: {
    body: {
      ...e.typography.smallRegular
    },
    head: {
      ...e.typography.smallBold
    }
  }
}), Lc = (e) => ({
  MuiButton: Sc(e),
  MuiButtonBase: Cc(),
  MuiDialogTitle: Pc(e),
  MuiInputBase: wc(e),
  MuiFormLabel: Mc(e),
  MuiFormHelperText: $c(),
  MuiMenuItem: kc(e),
  MuiAutocomplete: Ac(e),
  MuiPickersCalendarHeader: Ic(),
  MuiPickersToolbar: Nc(),
  MuiPickersDay: Dc(e),
  MuiIconButton: jc(e),
  MuiAccordionSummary: Fc(e),
  MuiListItemButton: Bc(e),
  MuiTableCell: zc(e)
}), Mt = Ut({
  typography: Oc,
  spacing: 4,
  palette: Rc,
  breakpoints: Se
}), Hc = Ut({
  ...Mt,
  components: {
    ...Mt.components,
    ...Lc(Mt)
  }
});
Wo({
  "@global": {
    "*:focus": {
      outline: 0
    },
    ".hidden-scrollbar": {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        display: "none"
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        display: "none"
      }
    }
  }
});
export {
  Kc as Button,
  Se as breakpoints,
  Rc as palette,
  Hc as theme,
  Oc as typography
};
//# sourceMappingURL=flighthelp-ui.es.js.map
