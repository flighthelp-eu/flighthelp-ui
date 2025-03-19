var Xn = Object.defineProperty;
var Jn = (e, t, r) => t in e ? Xn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var at = (e, t, r) => Jn(e, typeof t != "symbol" ? t + "" : t, r);
import * as j from "react";
import tt, { isValidElement as Ot, cloneElement as Rt, Children as Qn } from "react";
import Zn from "@emotion/styled";
import { keyframes as mt, css as vn } from "@emotion/react";
import { darken as eo } from "@mui/material";
import { makeStyles as to } from "@mui/styles";
function ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var St = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function no() {
  if (Or) return st;
  Or = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return st.Fragment = t, st.jsx = r, st.jsxs = r, st;
}
var lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function oo() {
  return Rr || (Rr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === be ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case M:
          return "Fragment";
        case b:
          return "Portal";
        case K:
          return "Profiler";
        case G:
          return "StrictMode";
        case $:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case a:
            return (u.displayName || "Context") + ".Provider";
          case re:
            return (u._context.displayName || "Context") + ".Consumer";
          case w:
            var v = u.render;
            return u = u.displayName, u || (u = v.displayName || v.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case L:
            return v = u.displayName || null, v !== null ? v : e(u.type) || "Memo";
          case ie:
            v = u._payload, u = u._init;
            try {
              return e(u(v));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var k = v.error, q = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return k.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(u);
      }
    }
    function n() {
    }
    function o() {
      if (I === 0) {
        W = console.log, D = console.info, F = console.warn, Y = console.error, H = console.group, U = console.groupCollapsed, pe = console.groupEnd;
        var u = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: u,
          log: u,
          warn: u,
          error: u,
          group: u,
          groupCollapsed: u,
          groupEnd: u
        });
      }
      I++;
    }
    function i() {
      if (I--, I === 0) {
        var u = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: T({}, u, { value: W }),
          info: T({}, u, { value: D }),
          warn: T({}, u, { value: F }),
          error: T({}, u, { value: Y }),
          group: T({}, u, { value: H }),
          groupCollapsed: T({}, u, { value: U }),
          groupEnd: T({}, u, { value: pe })
        });
      }
      0 > I && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(u) {
      if (O === void 0)
        try {
          throw Error();
        } catch (k) {
          var v = k.stack.trim().match(/\n( *(at )?)/);
          O = v && v[1] || "", ve = -1 < k.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < k.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + O + u + ve;
    }
    function l(u, v) {
      if (!u || Te) return "";
      var k = Be.get(u);
      if (k !== void 0) return k;
      Te = !0, k = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var q = null;
      q = Q.H, Q.H = null, o();
      try {
        var he = {
          DetermineComponentFrameRoot: function() {
            try {
              if (v) {
                var je = function() {
                  throw Error();
                };
                if (Object.defineProperty(je.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(je, []);
                  } catch (ke) {
                    var vt = ke;
                  }
                  Reflect.construct(u, [], je);
                } else {
                  try {
                    je.call();
                  } catch (ke) {
                    vt = ke;
                  }
                  u.call(je.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ke) {
                  vt = ke;
                }
                (je = u()) && typeof je.catch == "function" && je.catch(function() {
                });
              }
            } catch (ke) {
              if (ke && vt && typeof ke.stack == "string")
                return [ke.stack, vt.stack];
            }
            return [null, null];
          }
        };
        he.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var se = Object.getOwnPropertyDescriptor(
          he.DetermineComponentFrameRoot,
          "name"
        );
        se && se.configurable && Object.defineProperty(
          he.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var z = he.DetermineComponentFrameRoot(), _e = z[0], qe = z[1];
        if (_e && qe) {
          var Se = _e.split(`
`), Ue = qe.split(`
`);
          for (z = se = 0; se < Se.length && !Se[se].includes(
            "DetermineComponentFrameRoot"
          ); )
            se++;
          for (; z < Ue.length && !Ue[z].includes(
            "DetermineComponentFrameRoot"
          ); )
            z++;
          if (se === Se.length || z === Ue.length)
            for (se = Se.length - 1, z = Ue.length - 1; 1 <= se && 0 <= z && Se[se] !== Ue[z]; )
              z--;
          for (; 1 <= se && 0 <= z; se--, z--)
            if (Se[se] !== Ue[z]) {
              if (se !== 1 || z !== 1)
                do
                  if (se--, z--, 0 > z || Se[se] !== Ue[z]) {
                    var it = `
` + Se[se].replace(
                      " at new ",
                      " at "
                    );
                    return u.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", u.displayName)), typeof u == "function" && Be.set(u, it), it;
                  }
                while (1 <= se && 0 <= z);
              break;
            }
        }
      } finally {
        Te = !1, Q.H = q, i(), Error.prepareStackTrace = k;
      }
      return Se = (Se = u ? u.displayName || u.name : "") ? s(Se) : "", typeof u == "function" && Be.set(u, Se), Se;
    }
    function f(u) {
      if (u == null) return "";
      if (typeof u == "function") {
        var v = u.prototype;
        return l(
          u,
          !(!v || !v.isReactComponent)
        );
      }
      if (typeof u == "string") return s(u);
      switch (u) {
        case $:
          return s("Suspense");
        case A:
          return s("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case w:
            return u = l(u.render, !1), u;
          case L:
            return f(u.type);
          case ie:
            v = u._payload, u = u._init;
            try {
              return f(u(v));
            } catch {
            }
        }
      return "";
    }
    function d() {
      var u = Q.A;
      return u === null ? null : u.getOwner();
    }
    function h(u) {
      if (x.call(u, "key")) {
        var v = Object.getOwnPropertyDescriptor(u, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function m(u, v) {
      function k() {
        Ye || (Ye = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: k,
        configurable: !0
      });
    }
    function y() {
      var u = e(this.type);
      return De[u] || (De[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function C(u, v, k, q, he, se) {
      return k = se.ref, u = {
        $$typeof: S,
        type: u,
        key: v,
        props: se,
        _owner: he
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function E(u, v, k, q, he, se) {
      if (typeof u == "string" || typeof u == "function" || u === M || u === K || u === G || u === $ || u === A || u === Z || typeof u == "object" && u !== null && (u.$$typeof === ie || u.$$typeof === L || u.$$typeof === a || u.$$typeof === re || u.$$typeof === w || u.$$typeof === N || u.getModuleId !== void 0)) {
        var z = v.children;
        if (z !== void 0)
          if (q)
            if (B(z)) {
              for (q = 0; q < z.length; q++)
                c(z[q], u);
              Object.freeze && Object.freeze(z);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(z, u);
      } else
        z = "", (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), u === null ? q = "null" : B(u) ? q = "array" : u !== void 0 && u.$$typeof === S ? (q = "<" + (e(u.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : q = typeof u, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          q,
          z
        );
      if (x.call(v, "key")) {
        z = e(u);
        var _e = Object.keys(v).filter(function(Se) {
          return Se !== "key";
        });
        q = 0 < _e.length ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}", bt[z + q] || (_e = 0 < _e.length ? "{" + _e.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          z,
          _e,
          z
        ), bt[z + q] = !0);
      }
      if (z = null, k !== void 0 && (r(k), z = "" + k), h(v) && (r(v.key), z = "" + v.key), "key" in v) {
        k = {};
        for (var qe in v)
          qe !== "key" && (k[qe] = v[qe]);
      } else k = v;
      return z && m(
        k,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), C(u, z, se, he, d(), k);
    }
    function c(u, v) {
      if (typeof u == "object" && u && u.$$typeof !== qt) {
        if (B(u))
          for (var k = 0; k < u.length; k++) {
            var q = u[k];
            R(q) && _(q, v);
          }
        else if (R(u))
          u._store && (u._store.validated = 1);
        else if (u === null || typeof u != "object" ? k = null : (k = le && u[le] || u["@@iterator"], k = typeof k == "function" ? k : null), typeof k == "function" && k !== u.entries && (k = k.call(u), k !== u))
          for (; !(u = k.next()).done; )
            R(u.value) && _(u.value, v);
      }
    }
    function R(u) {
      return typeof u == "object" && u !== null && u.$$typeof === S;
    }
    function _(u, v) {
      if (u._store && !u._store.validated && u.key == null && (u._store.validated = 1, v = V(v), !ot[v])) {
        ot[v] = !0;
        var k = "";
        u && u._owner != null && u._owner !== d() && (k = null, typeof u._owner.tag == "number" ? k = e(u._owner.type) : typeof u._owner.name == "string" && (k = u._owner.name), k = " It was passed a child from " + k + ".");
        var q = Q.getCurrentStack;
        Q.getCurrentStack = function() {
          var he = f(u.type);
          return q && (he += q() || ""), he;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          v,
          k
        ), Q.getCurrentStack = q;
      }
    }
    function V(u) {
      var v = "", k = d();
      return k && (k = e(k.type)) && (v = `

Check the render method of \`` + k + "`."), v || (u = e(u)) && (v = `

Check the top-level render call using <` + u + ">."), v;
    }
    var P = tt, S = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), a = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), le = Symbol.iterator, be = Symbol.for("react.client.reference"), Q = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, T = Object.assign, N = Symbol.for("react.client.reference"), B = Array.isArray, I = 0, W, D, F, Y, H, U, pe;
    n.__reactDisabledLog = !0;
    var O, ve, Te = !1, Be = new (typeof WeakMap == "function" ? WeakMap : Map)(), qt = Symbol.for("react.client.reference"), Ye, De = {}, bt = {}, ot = {};
    lt.Fragment = M, lt.jsx = function(u, v, k, q, he) {
      return E(u, v, k, !1, q, he);
    }, lt.jsxs = function(u, v, k, q, he) {
      return E(u, v, k, !0, q, he);
    };
  }()), lt;
}
var $r;
function io() {
  return $r || ($r = 1, process.env.NODE_ENV === "production" ? St.exports = no() : St.exports = oo()), St.exports;
}
var me = io(), Et = { exports: {} }, xt = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function ao() {
  if (Pr) return X;
  Pr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
  function P(b) {
    if (typeof b == "object" && b !== null) {
      var M = b.$$typeof;
      switch (M) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case m:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case h:
                case E:
                case C:
                case s:
                  return b;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function S(b) {
    return P(b) === d;
  }
  return X.AsyncMode = f, X.ConcurrentMode = d, X.ContextConsumer = l, X.ContextProvider = s, X.Element = t, X.ForwardRef = h, X.Fragment = n, X.Lazy = E, X.Memo = C, X.Portal = r, X.Profiler = i, X.StrictMode = o, X.Suspense = m, X.isAsyncMode = function(b) {
    return S(b) || P(b) === f;
  }, X.isConcurrentMode = S, X.isContextConsumer = function(b) {
    return P(b) === l;
  }, X.isContextProvider = function(b) {
    return P(b) === s;
  }, X.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, X.isForwardRef = function(b) {
    return P(b) === h;
  }, X.isFragment = function(b) {
    return P(b) === n;
  }, X.isLazy = function(b) {
    return P(b) === E;
  }, X.isMemo = function(b) {
    return P(b) === C;
  }, X.isPortal = function(b) {
    return P(b) === r;
  }, X.isProfiler = function(b) {
    return P(b) === i;
  }, X.isStrictMode = function(b) {
    return P(b) === o;
  }, X.isSuspense = function(b) {
    return P(b) === m;
  }, X.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === m || b === y || typeof b == "object" && b !== null && (b.$$typeof === E || b.$$typeof === C || b.$$typeof === s || b.$$typeof === l || b.$$typeof === h || b.$$typeof === R || b.$$typeof === _ || b.$$typeof === V || b.$$typeof === c);
  }, X.typeOf = P, X;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function so() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
    function P(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === d || O === i || O === o || O === m || O === y || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === C || O.$$typeof === s || O.$$typeof === l || O.$$typeof === h || O.$$typeof === R || O.$$typeof === _ || O.$$typeof === V || O.$$typeof === c);
    }
    function S(O) {
      if (typeof O == "object" && O !== null) {
        var ve = O.$$typeof;
        switch (ve) {
          case t:
            var Te = O.type;
            switch (Te) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case m:
                return Te;
              default:
                var Be = Te && Te.$$typeof;
                switch (Be) {
                  case l:
                  case h:
                  case E:
                  case C:
                  case s:
                    return Be;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var b = f, M = d, G = l, K = s, re = t, a = h, w = n, $ = E, A = C, L = r, ie = i, Z = o, le = m, be = !1;
    function Q(O) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(O) || S(O) === f;
    }
    function x(O) {
      return S(O) === d;
    }
    function T(O) {
      return S(O) === l;
    }
    function N(O) {
      return S(O) === s;
    }
    function B(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function I(O) {
      return S(O) === h;
    }
    function W(O) {
      return S(O) === n;
    }
    function D(O) {
      return S(O) === E;
    }
    function F(O) {
      return S(O) === C;
    }
    function Y(O) {
      return S(O) === r;
    }
    function H(O) {
      return S(O) === i;
    }
    function U(O) {
      return S(O) === o;
    }
    function pe(O) {
      return S(O) === m;
    }
    J.AsyncMode = b, J.ConcurrentMode = M, J.ContextConsumer = G, J.ContextProvider = K, J.Element = re, J.ForwardRef = a, J.Fragment = w, J.Lazy = $, J.Memo = A, J.Portal = L, J.Profiler = ie, J.StrictMode = Z, J.Suspense = le, J.isAsyncMode = Q, J.isConcurrentMode = x, J.isContextConsumer = T, J.isContextProvider = N, J.isElement = B, J.isForwardRef = I, J.isFragment = W, J.isLazy = D, J.isMemo = F, J.isPortal = Y, J.isProfiler = H, J.isStrictMode = U, J.isSuspense = pe, J.isValidElementType = P, J.typeOf = S;
  }()), J;
}
var kr;
function Sn() {
  return kr || (kr = 1, process.env.NODE_ENV === "production" ? xt.exports = ao() : xt.exports = so()), xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kt, Ar;
function lo() {
  if (Ar) return Kt;
  Ar = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
  return Kt = o() ? Object.assign : function(i, s) {
    for (var l, f = n(i), d, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var m in l)
        t.call(l, m) && (f[m] = l[m]);
      if (e) {
        d = e(l);
        for (var y = 0; y < d.length; y++)
          r.call(l, d[y]) && (f[d[y]] = l[d[y]]);
      }
    }
    return f;
  }, Kt;
}
var Xt, Mr;
function pr() {
  if (Mr) return Xt;
  Mr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xt = e, Xt;
}
var Jt, Ir;
function En() {
  return Ir || (Ir = 1, Jt = Function.call.bind(Object.prototype.hasOwnProperty)), Jt;
}
var Qt, Nr;
function co() {
  if (Nr) return Qt;
  Nr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pr(), r = {}, n = /* @__PURE__ */ En();
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
              var y = Error(
                (f || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = i[h](s, h, f, l, null, t);
          } catch (E) {
            m = E;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + l + " type: " + m.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Qt = o, Qt;
}
var Zt, Br;
function uo() {
  if (Br) return Zt;
  Br = 1;
  var e = Sn(), t = lo(), r = /* @__PURE__ */ pr(), n = /* @__PURE__ */ En(), o = /* @__PURE__ */ co(), i = function() {
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
  return Zt = function(l, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(x) {
      var T = x && (d && x[d] || x[h]);
      if (typeof T == "function")
        return T;
    }
    var y = "<<anonymous>>", C = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: V(),
      arrayOf: P,
      element: S(),
      elementType: b(),
      instanceOf: M,
      node: a(),
      objectOf: K,
      oneOf: G,
      oneOfType: re,
      shape: $,
      exact: A
    };
    function E(x, T) {
      return x === T ? x !== 0 || 1 / x === 1 / T : x !== x && T !== T;
    }
    function c(x, T) {
      this.message = x, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function R(x) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, N = 0;
      function B(W, D, F, Y, H, U, pe) {
        if (Y = Y || y, U = U || F, pe !== r) {
          if (f) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = Y + ":" + F;
            !T[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[ve] = !0, N++);
          }
        }
        return D[F] == null ? W ? D[F] === null ? new c("The " + H + " `" + U + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new c("The " + H + " `" + U + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : x(D, F, Y, H, U);
      }
      var I = B.bind(null, !1);
      return I.isRequired = B.bind(null, !0), I;
    }
    function _(x) {
      function T(N, B, I, W, D, F) {
        var Y = N[B], H = Z(Y);
        if (H !== x) {
          var U = le(Y);
          return new c(
            "Invalid " + W + " `" + D + "` of type " + ("`" + U + "` supplied to `" + I + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return R(T);
    }
    function V() {
      return R(s);
    }
    function P(x) {
      function T(N, B, I, W, D) {
        if (typeof x != "function")
          return new c("Property `" + D + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var F = N[B];
        if (!Array.isArray(F)) {
          var Y = Z(F);
          return new c("Invalid " + W + " `" + D + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected an array."));
        }
        for (var H = 0; H < F.length; H++) {
          var U = x(F, H, I, W, D + "[" + H + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return R(T);
    }
    function S() {
      function x(T, N, B, I, W) {
        var D = T[N];
        if (!l(D)) {
          var F = Z(D);
          return new c("Invalid " + I + " `" + W + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(x);
    }
    function b() {
      function x(T, N, B, I, W) {
        var D = T[N];
        if (!e.isValidElementType(D)) {
          var F = Z(D);
          return new c("Invalid " + I + " `" + W + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(x);
    }
    function M(x) {
      function T(N, B, I, W, D) {
        if (!(N[B] instanceof x)) {
          var F = x.name || y, Y = Q(N[B]);
          return new c("Invalid " + W + " `" + D + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return R(T);
    }
    function G(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(N, B, I, W, D) {
        for (var F = N[B], Y = 0; Y < x.length; Y++)
          if (E(F, x[Y]))
            return null;
        var H = JSON.stringify(x, function(pe, O) {
          var ve = le(O);
          return ve === "symbol" ? String(O) : O;
        });
        return new c("Invalid " + W + " `" + D + "` of value `" + String(F) + "` " + ("supplied to `" + I + "`, expected one of " + H + "."));
      }
      return R(T);
    }
    function K(x) {
      function T(N, B, I, W, D) {
        if (typeof x != "function")
          return new c("Property `" + D + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var F = N[B], Y = Z(F);
        if (Y !== "object")
          return new c("Invalid " + W + " `" + D + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected an object."));
        for (var H in F)
          if (n(F, H)) {
            var U = x(F, H, I, W, D + "." + H, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return R(T);
    }
    function re(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < x.length; T++) {
        var N = x[T];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(N) + " at index " + T + "."
          ), s;
      }
      function B(I, W, D, F, Y) {
        for (var H = [], U = 0; U < x.length; U++) {
          var pe = x[U], O = pe(I, W, D, F, Y, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && H.push(O.data.expectedType);
        }
        var ve = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new c("Invalid " + F + " `" + Y + "` supplied to " + ("`" + D + "`" + ve + "."));
      }
      return R(B);
    }
    function a() {
      function x(T, N, B, I, W) {
        return L(T[N]) ? null : new c("Invalid " + I + " `" + W + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return R(x);
    }
    function w(x, T, N, B, I) {
      return new c(
        (x || "React class") + ": " + T + " type `" + N + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function $(x) {
      function T(N, B, I, W, D) {
        var F = N[B], Y = Z(F);
        if (Y !== "object")
          return new c("Invalid " + W + " `" + D + "` of type `" + Y + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var H in x) {
          var U = x[H];
          if (typeof U != "function")
            return w(I, W, D, H, le(U));
          var pe = U(F, H, I, W, D + "." + H, r);
          if (pe)
            return pe;
        }
        return null;
      }
      return R(T);
    }
    function A(x) {
      function T(N, B, I, W, D) {
        var F = N[B], Y = Z(F);
        if (Y !== "object")
          return new c("Invalid " + W + " `" + D + "` of type `" + Y + "` " + ("supplied to `" + I + "`, expected `object`."));
        var H = t({}, N[B], x);
        for (var U in H) {
          var pe = x[U];
          if (n(x, U) && typeof pe != "function")
            return w(I, W, D, U, le(pe));
          if (!pe)
            return new c(
              "Invalid " + W + " `" + D + "` key `" + U + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(N[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var O = pe(F, U, I, W, D + "." + U, r);
          if (O)
            return O;
        }
        return null;
      }
      return R(T);
    }
    function L(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(L);
          if (x === null || l(x))
            return !0;
          var T = m(x);
          if (T) {
            var N = T.call(x), B;
            if (T !== x.entries) {
              for (; !(B = N.next()).done; )
                if (!L(B.value))
                  return !1;
            } else
              for (; !(B = N.next()).done; ) {
                var I = B.value;
                if (I && !L(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(x, T) {
      return x === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function Z(x) {
      var T = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : ie(T, x) ? "symbol" : T;
    }
    function le(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var T = Z(x);
      if (T === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function be(x) {
      var T = le(x);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function Q(x) {
      return !x.constructor || !x.constructor.name ? y : x.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, Zt;
}
var er, Dr;
function fo() {
  if (Dr) return er;
  Dr = 1;
  var e = /* @__PURE__ */ pr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, er = function() {
    function n(s, l, f, d, h, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, er;
}
var jr;
function po() {
  if (jr) return Et.exports;
  if (jr = 1, process.env.NODE_ENV !== "production") {
    var e = Sn(), t = !0;
    Et.exports = /* @__PURE__ */ uo()(e.isElement, t);
  } else
    Et.exports = /* @__PURE__ */ fo()();
  return Et.exports;
}
var mo = /* @__PURE__ */ po();
const p = /* @__PURE__ */ ro(mo);
function xn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = xn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ee() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = xn(e)) && (n && (n += " "), n += t);
  return n;
}
function _t(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const f = l;
              r[o][f] = _t(i[f], s[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function mr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, r && r[d] && (s += " " + r[d]));
    }
    n[o] = s;
  }
  return n;
}
function Ve(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function go(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function gr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), go(e, t, r);
}
function ho(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Le(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Le(ho(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ve(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ve(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const yo = (e) => {
  const t = Le(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, ut = (e, t) => {
  try {
    return yo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Nt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Cn(e) {
  e = Le(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (d, h = (d + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let l = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", f.push(t[3])), Nt({
    type: l,
    values: f
  });
}
function ar(e) {
  e = Le(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Le(Cn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Fr(e, t) {
  const r = ar(e), n = ar(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function et(e, t) {
  return e = Le(e), t = gr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Nt(e);
}
function Ct(e, t, r) {
  try {
    return et(e, t);
  } catch {
    return e;
  }
}
function hr(e, t) {
  if (e = Le(e), t = gr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Nt(e);
}
function ne(e, t, r) {
  try {
    return hr(e, t);
  } catch {
    return e;
  }
}
function yr(e, t) {
  if (e = Le(e), t = gr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Nt(e);
}
function oe(e, t, r) {
  try {
    return yr(e, t);
  } catch {
    return e;
  }
}
function bo(e, t = 0.15) {
  return ar(e) > 0.5 ? hr(e, t) : yr(e, t);
}
function Tt(e, t, r) {
  try {
    return bo(e, t);
  } catch {
    return e;
  }
}
function Tn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var wt = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function vo() {
  if (zr) return ee;
  zr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), C = Symbol.for("react.client.reference");
  function E(c) {
    if (typeof c == "object" && c !== null) {
      var R = c.$$typeof;
      switch (R) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case l:
                case m:
                case h:
                  return c;
                case i:
                  return c;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return ee.ContextConsumer = i, ee.ContextProvider = s, ee.Element = e, ee.ForwardRef = l, ee.Fragment = r, ee.Lazy = m, ee.Memo = h, ee.Portal = t, ee.Profiler = o, ee.StrictMode = n, ee.Suspense = f, ee.SuspenseList = d, ee.isContextConsumer = function(c) {
    return E(c) === i;
  }, ee.isContextProvider = function(c) {
    return E(c) === s;
  }, ee.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, ee.isForwardRef = function(c) {
    return E(c) === l;
  }, ee.isFragment = function(c) {
    return E(c) === r;
  }, ee.isLazy = function(c) {
    return E(c) === m;
  }, ee.isMemo = function(c) {
    return E(c) === h;
  }, ee.isPortal = function(c) {
    return E(c) === t;
  }, ee.isProfiler = function(c) {
    return E(c) === o;
  }, ee.isStrictMode = function(c) {
    return E(c) === n;
  }, ee.isSuspense = function(c) {
    return E(c) === f;
  }, ee.isSuspenseList = function(c) {
    return E(c) === d;
  }, ee.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === f || c === d || c === y || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === h || c.$$typeof === s || c.$$typeof === i || c.$$typeof === l || c.$$typeof === C || c.getModuleId !== void 0);
  }, ee.typeOf = E, ee;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function So() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var R = c.$$typeof;
        switch (R) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case d:
              case h:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case l:
                  case f:
                  case y:
                  case m:
                    return c;
                  case s:
                    return c;
                  default:
                    return R;
                }
            }
          case r:
            return R;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.for("react.client.reference");
    te.ContextConsumer = s, te.ContextProvider = l, te.Element = t, te.ForwardRef = f, te.Fragment = n, te.Lazy = y, te.Memo = m, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = d, te.SuspenseList = h, te.isContextConsumer = function(c) {
      return e(c) === s;
    }, te.isContextProvider = function(c) {
      return e(c) === l;
    }, te.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, te.isForwardRef = function(c) {
      return e(c) === f;
    }, te.isFragment = function(c) {
      return e(c) === n;
    }, te.isLazy = function(c) {
      return e(c) === y;
    }, te.isMemo = function(c) {
      return e(c) === m;
    }, te.isPortal = function(c) {
      return e(c) === r;
    }, te.isProfiler = function(c) {
      return e(c) === i;
    }, te.isStrictMode = function(c) {
      return e(c) === o;
    }, te.isSuspense = function(c) {
      return e(c) === d;
    }, te.isSuspenseList = function(c) {
      return e(c) === h;
    }, te.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === d || c === h || c === C || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === m || c.$$typeof === l || c.$$typeof === s || c.$$typeof === f || c.$$typeof === E || c.getModuleId !== void 0);
    }, te.typeOf = e;
  }()), te;
}
var Lr;
function Eo() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? wt.exports = /* @__PURE__ */ vo() : wt.exports = /* @__PURE__ */ So()), wt.exports;
}
var kt = /* @__PURE__ */ Eo();
function Ie(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function wn(e) {
  if (/* @__PURE__ */ j.isValidElement(e) || kt.isValidElementType(e) || !Ie(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = wn(e[r]);
  }), t;
}
function Ce(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ie(e) && Ie(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ j.isValidElement(t[o]) || kt.isValidElementType(t[o]) ? n[o] = t[o] : Ie(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ie(e[o]) ? n[o] = Ce(e[o], t[o], r) : r.clone ? n[o] = Ie(t[o]) ? wn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function xo(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Co(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !xo(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const To = Tn(p.elementType, Co);
function On(e, t = "") {
  return e.displayName || e.name || t;
}
function Wr(e, t, r) {
  const n = On(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function wo(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return On(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case kt.ForwardRef:
          return Wr(e, e.render, "ForwardRef");
        case kt.Memo:
          return Wr(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Oo = p.oneOfType([p.func, p.object]);
function ge(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ve(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ro(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const $o = typeof window < "u" ? j.useLayoutEffect : j.useEffect;
let Yr = 0;
function Po(e) {
  const [t, r] = j.useState(e), n = e || t;
  return j.useEffect(() => {
    t == null && (Yr += 1, r(`mui-${Yr}`));
  }, [t]), n;
}
const _o = {
  ...j
}, Ur = _o.useId;
function ko(e) {
  if (Ur !== void 0) {
    const t = Ur();
    return e ?? t;
  }
  return Po(e);
}
function $t(e) {
  const t = j.useRef(e);
  return $o(() => {
    t.current = e;
  }), j.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Hr(...e) {
  return j.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ro(r, t);
    });
  }, e);
}
const Gr = {};
function Rn(e, t) {
  const r = j.useRef(Gr);
  return r.current === Gr && (r.current = e(t)), r;
}
const Ao = [];
function Mo(e) {
  j.useEffect(e, Ao);
}
class br {
  constructor() {
    at(this, "currentId", null);
    at(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    at(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new br();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Io() {
  const e = Rn(br.create).current;
  return Mo(e.disposeEffect), e;
}
function qr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Kr = (e) => e, No = () => {
  let e = Kr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Kr;
    }
  };
}, Bo = No(), Do = {
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
function gt(e, t, r = "Mui") {
  const n = Do[t];
  return n ? `${r}-${n}` : `${Bo.generate(e)}-${t}`;
}
function Bt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = gt(e, o, r);
  }), n;
}
function dt(e, t) {
  return t ? Ce(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const We = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function jo(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, l;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((l = o.match(i)) == null ? void 0 : l[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Fo(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function zo(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ve(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Vo(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...l) => t(e.breakpoints.up(...l), s), i.down = (...l) => t(e.breakpoints.down(...l), s), i.between = (...l) => t(e.breakpoints.between(...l), s), i.only = (...l) => t(e.breakpoints.only(...l), s), i.not = (...l) => {
      const f = t(e.breakpoints.not(...l), s);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Dt = {
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
}, Xr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Dt[e]}px)`
}, Lo = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Dt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ne(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Xr;
    return t.reduce((s, l, f) => (s[i.up(i.keys[f])] = r(t[f]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Xr;
    return Object.keys(t).reduce((s, l) => {
      if (Fo(i.keys, l)) {
        const f = zo(n.containerQueries ? n : Lo, l);
        f && (s[f] = r(t[l], l));
      } else if (Object.keys(i.values || Dt).includes(l)) {
        const f = i.up(l);
        s[f] = r(t[l], l);
      } else {
        const f = l;
        s[f] = t[f];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Wo(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Yo(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function jt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function At(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = jt(e, r) || n, t && (o = t(o, n, e)), o;
}
function fe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], f = s.theme, d = jt(f, n) || {};
    return Ne(s, l, (m) => {
      let y = At(d, o, m);
      return m === y && typeof m == "string" && (y = At(d, o, `${t}${m === "default" ? "" : ge(m)}`, m)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: We
  } : {}, i.filterProps = [t], i;
}
function Uo(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ho = {
  m: "margin",
  p: "padding"
}, Go = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Jr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qo = Uo((e) => {
  if (e.length > 2)
    if (Jr[e])
      e = Jr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ho[t], o = Go[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ft = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ko = [...Ft, ...zt];
function ht(e, t, r, n) {
  const o = jt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function vr(e) {
  return ht(e, "spacing", 8, "spacing");
}
function yt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Xo(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = yt(t, r), n), {});
}
function Jo(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = qo(r), i = Xo(o, n), s = e[r];
  return Ne(e, s, i);
}
function $n(e, t) {
  const r = vr(e.theme);
  return Object.keys(e).map((n) => Jo(e, t, n, r)).reduce(dt, {});
}
function ce(e) {
  return $n(e, Ft);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? Ft.reduce((e, t) => (e[t] = We, e), {}) : {};
ce.filterProps = Ft;
function ue(e) {
  return $n(e, zt);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? zt.reduce((e, t) => (e[t] = We, e), {}) : {};
ue.filterProps = zt;
process.env.NODE_ENV !== "production" && Ko.reduce((e, t) => (e[t] = We, e), {});
function Vt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? dt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Re(e, t) {
  return fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qo = Re("border", Oe), Zo = Re("borderTop", Oe), ei = Re("borderRight", Oe), ti = Re("borderBottom", Oe), ri = Re("borderLeft", Oe), ni = Re("borderColor"), oi = Re("borderTopColor"), ii = Re("borderRightColor"), ai = Re("borderBottomColor"), si = Re("borderLeftColor"), li = Re("outline", Oe), ci = Re("outlineColor"), Lt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ht(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: yt(t, n)
    });
    return Ne(e, e.borderRadius, r);
  }
  return null;
};
Lt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: We
} : {};
Lt.filterProps = ["borderRadius"];
Vt(Qo, Zo, ei, ti, ri, ni, oi, ii, ai, si, Lt, li, ci);
const Wt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ht(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: yt(t, n)
    });
    return Ne(e, e.gap, r);
  }
  return null;
};
Wt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: We
} : {};
Wt.filterProps = ["gap"];
const Yt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ht(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: yt(t, n)
    });
    return Ne(e, e.columnGap, r);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: We
} : {};
Yt.filterProps = ["columnGap"];
const Ut = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ht(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: yt(t, n)
    });
    return Ne(e, e.rowGap, r);
  }
  return null;
};
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: We
} : {};
Ut.filterProps = ["rowGap"];
const ui = fe({
  prop: "gridColumn"
}), fi = fe({
  prop: "gridRow"
}), di = fe({
  prop: "gridAutoFlow"
}), pi = fe({
  prop: "gridAutoColumns"
}), mi = fe({
  prop: "gridAutoRows"
}), gi = fe({
  prop: "gridTemplateColumns"
}), hi = fe({
  prop: "gridTemplateRows"
}), yi = fe({
  prop: "gridTemplateAreas"
}), bi = fe({
  prop: "gridArea"
});
Vt(Wt, Yt, Ut, ui, fi, di, pi, mi, gi, hi, yi, bi);
function rt(e, t) {
  return t === "grey" ? t : e;
}
const vi = fe({
  prop: "color",
  themeKey: "palette",
  transform: rt
}), Si = fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rt
}), Ei = fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rt
});
Vt(vi, Si, Ei);
function xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xi = fe({
  prop: "width",
  transform: xe
}), Sr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, l, f;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Dt[r];
      return n ? ((f = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: xe(r)
      };
    };
    return Ne(e, e.maxWidth, t);
  }
  return null;
};
Sr.filterProps = ["maxWidth"];
const Ci = fe({
  prop: "minWidth",
  transform: xe
}), Ti = fe({
  prop: "height",
  transform: xe
}), wi = fe({
  prop: "maxHeight",
  transform: xe
}), Oi = fe({
  prop: "minHeight",
  transform: xe
});
fe({
  prop: "size",
  cssProperty: "width",
  transform: xe
});
fe({
  prop: "size",
  cssProperty: "height",
  transform: xe
});
const Ri = fe({
  prop: "boxSizing"
});
Vt(xi, Sr, Ci, Ti, wi, Oi, Ri);
const Ht = {
  // borders
  border: {
    themeKey: "borders",
    transform: Oe
  },
  borderTop: {
    themeKey: "borders",
    transform: Oe
  },
  borderRight: {
    themeKey: "borders",
    transform: Oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Oe
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
    transform: Oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Lt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rt
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: ce
  },
  mt: {
    style: ce
  },
  mr: {
    style: ce
  },
  mb: {
    style: ce
  },
  ml: {
    style: ce
  },
  mx: {
    style: ce
  },
  my: {
    style: ce
  },
  margin: {
    style: ce
  },
  marginTop: {
    style: ce
  },
  marginRight: {
    style: ce
  },
  marginBottom: {
    style: ce
  },
  marginLeft: {
    style: ce
  },
  marginX: {
    style: ce
  },
  marginY: {
    style: ce
  },
  marginInline: {
    style: ce
  },
  marginInlineStart: {
    style: ce
  },
  marginInlineEnd: {
    style: ce
  },
  marginBlock: {
    style: ce
  },
  marginBlockStart: {
    style: ce
  },
  marginBlockEnd: {
    style: ce
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
    style: Wt
  },
  rowGap: {
    style: Ut
  },
  columnGap: {
    style: Yt
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
    transform: xe
  },
  maxWidth: {
    style: Sr
  },
  minWidth: {
    transform: xe
  },
  height: {
    transform: xe
  },
  maxHeight: {
    transform: xe
  },
  minHeight: {
    transform: xe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
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
function $i(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Pi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _i() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: h,
      style: m
    } = l;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = jt(o, d) || {};
    return m ? m(s) : Ne(s, n, (E) => {
      let c = At(y, h, E);
      return E === c && typeof E == "string" && (c = At(y, h, `${r}${E === "default" ? "" : ge(E)}`, E)), f === !1 ? c : {
        [f]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Ht;
    function s(l) {
      let f = l;
      if (typeof l == "function")
        f = l(o);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const d = Wo(o.breakpoints), h = Object.keys(d);
      let m = d;
      return Object.keys(f).forEach((y) => {
        const C = Pi(f[y], o);
        if (C != null)
          if (typeof C == "object")
            if (i[y])
              m = dt(m, e(y, C, o, i));
            else {
              const E = Ne({
                theme: o
              }, C, (c) => ({
                [y]: c
              }));
              $i(E, C) ? m[y] = t({
                sx: C,
                theme: o
              }) : m = dt(m, E);
            }
          else
            m = dt(m, e(y, C, o, i));
      }), jo(o, Yo(h, m));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const nt = _i();
nt.filterProps = ["sx"];
function ki(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ai = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Mi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ii = /[A-Z]|^ms/g, Ni = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pn = function(t) {
  return t.charCodeAt(1) === 45;
}, Qr = function(t) {
  return t != null && typeof t != "boolean";
}, tr = /* @__PURE__ */ Mi(function(e) {
  return Pn(e) ? e : e.replace(Ii, "-$&").toLowerCase();
}), Zr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ni, function(n, o, i) {
          return ze = {
            name: o,
            styles: i,
            next: ze
          }, o;
        });
  }
  return Ai[t] !== 1 && !Pn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Mt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return ze = {
          name: o.name,
          styles: o.styles,
          next: ze
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ze = {
              name: s.name,
              styles: s.styles,
              next: ze
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Bi(e, t, r);
    }
  }
  var f = r;
  return f;
}
function Bi(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Mt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var l = s;
        Qr(l) && (n += tr(i) + ":" + Zr(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          Qr(s[f]) && (n += tr(i) + ":" + Zr(i, s[f]) + ";");
      else {
        var d = Mt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += tr(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var en = /label:\s*([^\s;{]+)\s*(;|$)/g, ze;
function Di(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  ze = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Mt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Mt(r, t, e[l]), n) {
      var f = i;
      o += f[l];
    }
  en.lastIndex = 0;
  for (var d = "", h; (h = en.exec(o)) !== null; )
    d += "-" + h[1];
  var m = ki(o) + d;
  return {
    name: m,
    styles: o,
    next: ze
  };
}
/**
 * @mui/styled-engine v6.4.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ji(e, t) {
  const r = Zn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Fi(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const tn = [];
function rn(e) {
  return tn[0] = e, Di(tn);
}
const zi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Vi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = zi(t), s = Object.keys(i);
  function l(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function f(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function d(y, C) {
    const E = s.indexOf(C);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(E !== -1 && typeof t[s[E]] == "number" ? t[s[E]] : C) - n / 100}${r})`;
  }
  function h(y) {
    return s.indexOf(y) + 1 < s.length ? d(y, s[s.indexOf(y) + 1]) : l(y);
  }
  function m(y) {
    const C = s.indexOf(y);
    return C === 0 ? l(s[1]) : C === s.length - 1 ? f(s[C]) : d(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: l,
    down: f,
    between: d,
    only: h,
    not: m,
    unit: r,
    ...o
  };
}
const Li = {
  borderRadius: 4
};
function _n(e = 8, t = vr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Wi(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function kn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = Vi(r), f = _n(o);
  let d = Ce({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Li,
      ...i
    }
  }, s);
  return d = Vo(d), d.applyStyles = Wi, d = t.reduce((h, m) => Ce(h, m), d), d.unstable_sxConfig = {
    ...Ht,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return nt({
      sx: m,
      theme: this
    });
  }, d;
}
function An(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: rn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = rn(o.style));
  }), n;
}
const Yi = kn();
function rr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ui(e) {
  return e ? (t, r) => r[e] : null;
}
function Hi(e, t, r) {
  e.theme = Xi(e.theme) ? r : e.theme[t] || e.theme;
}
function Pt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Pt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Mn(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Mn(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && ((o = e.ownerState) == null ? void 0 : o[l]) !== s.props[l])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function Gi(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Yi,
    rootShouldForwardProp: n = rr,
    slotShouldForwardProp: o = rr
  } = e;
  function i(l) {
    Hi(l, t, r);
  }
  return (l, f = {}) => {
    Fi(l, (b) => b.filter((M) => M !== nt));
    const {
      name: d,
      slot: h,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = Ui(In(h)),
      ...E
    } = f, c = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), R = y || !1;
    let _ = rr;
    h === "Root" || h === "root" ? _ = n : h ? _ = o : Ji(l) && (_ = void 0);
    const V = ji(l, {
      shouldForwardProp: _,
      label: Ki(d, h),
      ...E
    }), P = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(G) {
          return Pt(G, b);
        };
      if (Ie(b)) {
        const M = An(b);
        return M.variants ? function(K) {
          return Pt(K, M);
        } : M.style;
      }
      return b;
    }, S = (...b) => {
      const M = [], G = b.map(P), K = [];
      if (M.push(i), d && C && K.push(function($) {
        var Z, le;
        const L = (le = (Z = $.theme.components) == null ? void 0 : Z[d]) == null ? void 0 : le.styleOverrides;
        if (!L)
          return null;
        const ie = {};
        for (const be in L)
          ie[be] = Pt($, L[be]);
        return C($, ie);
      }), d && !c && K.push(function($) {
        var ie, Z;
        const A = $.theme, L = (Z = (ie = A == null ? void 0 : A.components) == null ? void 0 : ie[d]) == null ? void 0 : Z.variants;
        return L ? Mn($, L) : null;
      }), R || K.push(nt), Array.isArray(G[0])) {
        const w = G.shift(), $ = new Array(M.length).fill(""), A = new Array(K.length).fill("");
        let L;
        L = [...$, ...w, ...A], L.raw = [...$, ...w.raw, ...A], M.unshift(L);
      }
      const re = [...M, ...G, ...K], a = V(...re);
      return l.muiName && (a.muiName = l.muiName), process.env.NODE_ENV !== "production" && (a.displayName = qi(d, h, l)), a;
    };
    return V.withConfig && (S.withConfig = V.withConfig), S;
  };
}
function qi(e, t, r) {
  return e ? `${e}${ge(t || "")}` : `Styled(${wo(r)})`;
}
function Ki(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${In(t || "Root")}`), r;
}
function Xi(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ji(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function In(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Qi = /* @__PURE__ */ j.createContext(void 0);
process.env.NODE_ENV !== "production" && (p.node, p.object);
function Zi(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? _t(o.defaultProps, n) : !o.styleOverrides && !o.variants ? _t(o, n) : n;
}
function ea({
  props: e,
  name: t
}) {
  const r = j.useContext(Qi);
  return Zi({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const nn = {
  theme: void 0
};
function ta(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (nn.theme = o.theme, i = An(e(nn)), t = i, r = o.theme), i;
  };
}
function ra(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const on = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, na = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([l, f]) => {
      (!r || r && !r([...i, l])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, l], Array.isArray(f) ? [...s, l] : s) : t([...i, l], f, s));
    });
  }
  n(e);
}, oa = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function nr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return na(
    e,
    (l, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(l, f))) {
        const h = `--${r ? `${r}-` : ""}${l.join("-")}`, m = oa(l, f);
        Object.assign(o, {
          [h]: m
        }), on(i, l, `var(${h})`, d), on(s, l, `var(${h}, ${m})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function ia(e, t = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: l = "light",
    ...f
  } = e, {
    vars: d,
    css: h,
    varsWithDefaults: m
  } = nr(f, t);
  let y = m;
  const C = {}, {
    [l]: E,
    ...c
  } = i;
  if (Object.entries(c || {}).forEach(([P, S]) => {
    const {
      vars: b,
      css: M,
      varsWithDefaults: G
    } = nr(S, t);
    y = Ce(y, G), C[P] = {
      css: M,
      vars: b
    };
  }), E) {
    const {
      css: P,
      vars: S,
      varsWithDefaults: b
    } = nr(E, t);
    y = Ce(y, b), C[l] = {
      css: P,
      vars: S
    };
  }
  function R(P, S) {
    var M, G;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), P) {
      if (b === "media")
        return e.defaultColorScheme === P ? ":root" : {
          [`@media (prefers-color-scheme: ${((G = (M = i[P]) == null ? void 0 : M.palette) == null ? void 0 : G.mode) || P})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === P ? `:root, ${b.replace("%s", String(P))}` : b.replace("%s", String(P));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let P = {
        ...d
      };
      return Object.entries(C).forEach(([, {
        vars: S
      }]) => {
        P = Ce(P, S);
      }), P;
    },
    generateStyleSheets: () => {
      var K, re;
      const P = [], S = e.defaultColorScheme || "light";
      function b(a, w) {
        Object.keys(w).length && P.push(typeof a == "string" ? {
          [a]: {
            ...w
          }
        } : a);
      }
      b(r(void 0, {
        ...h
      }), h);
      const {
        [S]: M,
        ...G
      } = C;
      if (M) {
        const {
          css: a
        } = M, w = (re = (K = i[S]) == null ? void 0 : K.palette) == null ? void 0 : re.mode, $ = !n && w ? {
          colorScheme: w,
          ...a
        } : {
          ...a
        };
        b(r(S, {
          ...$
        }), $);
      }
      return Object.entries(G).forEach(([a, {
        css: w
      }]) => {
        var L, ie;
        const $ = (ie = (L = i[a]) == null ? void 0 : L.palette) == null ? void 0 : ie.mode, A = !n && $ ? {
          colorScheme: $,
          ...w
        } : {
          ...w
        };
        b(r(a, {
          ...A
        }), A);
      }), P;
    }
  };
}
function aa(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const pt = {
  black: "#000",
  white: "#fff"
}, sa = {
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
}, Ke = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Xe = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ct = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Je = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Qe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ze = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Nn() {
  return {
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
      paper: pt.white,
      default: pt.white
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
  };
}
const la = Nn();
function Bn() {
  return {
    text: {
      primary: pt.white,
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
      active: pt.white,
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
}
const an = Bn();
function sn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = yr(e.main, o) : t === "dark" && (e.dark = hr(e.main, i)));
}
function ca(e = "light") {
  return e === "dark" ? {
    main: Je[200],
    light: Je[50],
    dark: Je[400]
  } : {
    main: Je[700],
    light: Je[400],
    dark: Je[800]
  };
}
function ua(e = "light") {
  return e === "dark" ? {
    main: Ke[200],
    light: Ke[50],
    dark: Ke[400]
  } : {
    main: Ke[500],
    light: Ke[300],
    dark: Ke[700]
  };
}
function fa(e = "light") {
  return e === "dark" ? {
    main: Xe[500],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[700],
    light: Xe[400],
    dark: Xe[800]
  };
}
function da(e = "light") {
  return e === "dark" ? {
    main: Qe[400],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: Qe[700],
    light: Qe[500],
    dark: Qe[900]
  };
}
function pa(e = "light") {
  return e === "dark" ? {
    main: Ze[400],
    light: Ze[300],
    dark: Ze[700]
  } : {
    main: Ze[800],
    light: Ze[500],
    dark: Ze[900]
  };
}
function ma(e = "light") {
  return e === "dark" ? {
    main: ct[400],
    light: ct[300],
    dark: ct[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ct[500],
    dark: ct[900]
  };
}
function Er(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || ca(t), s = e.secondary || ua(t), l = e.error || fa(t), f = e.info || da(t), d = e.success || pa(t), h = e.warning || ma(t);
  function m(c) {
    const R = Fr(c, an.text.primary) >= r ? an.text.primary : la.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = Fr(c, R);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${R} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const y = ({
    color: c,
    name: R,
    mainShade: _ = 500,
    lightShade: V = 300,
    darkShade: P = 700
  }) => {
    if (c = {
      ...c
    }, !c.main && c[_] && (c.main = c[_]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : Ve(11, R ? ` (${R})` : "", _));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ve(12, R ? ` (${R})` : "", JSON.stringify(c.main)));
    return sn(c, "light", V, n), sn(c, "dark", P, n), c.contrastText || (c.contrastText = m(c.main)), c;
  };
  let C;
  return t === "light" ? C = Nn() : t === "dark" && (C = Bn()), process.env.NODE_ENV !== "production" && (C || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ce({
    // A collection of common colors.
    common: {
      ...pt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: sa,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...C
  }, o);
}
function ga(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function ha(e, t) {
  return {
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
    },
    ...t
  };
}
function ya(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ln = {
  textTransform: "uppercase"
}, cn = '"Roboto", "Helvetica", "Arial", sans-serif';
function ba(e, t) {
  const {
    fontFamily: r = cn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, C = h || ((R) => `${R / f * y}rem`), E = (R, _, V, P, S) => ({
    fontFamily: r,
    fontWeight: R,
    fontSize: C(_),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: V,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === cn ? {
      letterSpacing: `${ya(P / _)}em`
    } : {},
    ...S,
    ...d
  }), c = {
    h1: E(o, 96, 1.167, -1.5),
    h2: E(o, 60, 1.2, -0.5),
    h3: E(i, 48, 1.167, 0),
    h4: E(i, 34, 1.235, 0.25),
    h5: E(i, 24, 1.334, 0),
    h6: E(s, 20, 1.6, 0.15),
    subtitle1: E(i, 16, 1.75, 0.15),
    subtitle2: E(s, 14, 1.57, 0.1),
    body1: E(i, 16, 1.5, 0.15),
    body2: E(i, 14, 1.43, 0.15),
    button: E(s, 14, 1.75, 0.4, ln),
    caption: E(i, 12, 1.66, 0.4),
    overline: E(i, 12, 2.66, 1, ln),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ce({
    htmlFontSize: f,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...c
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const va = 0.2, Sa = 0.14, Ea = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${va})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sa})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ea})`].join(",");
}
const xa = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ca = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ta = {
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
function un(e) {
  return `${Math.round(e)}ms`;
}
function wa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Oa(e) {
  const t = {
    ...Ca,
    ...e.easing
  }, r = {
    ...Ta,
    ...e.duration
  };
  return {
    getAutoHeightDuration: wa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (y) => typeof y == "string", m = (y) => !Number.isNaN(parseFloat(y));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(l) || console.error('MUI: Argument "easing" must be a string.'), !m(f) && !h(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof s == "string" ? s : un(s)} ${l} ${typeof f == "string" ? f : un(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ra = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function $a(e) {
  return Ie(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Dn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !$a(l) || s.startsWith("unstable_") ? delete n[s] : Ie(l) && (n[s] = {
        ...l
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function sr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: f,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ve(20));
  const h = Er(i), m = kn(e);
  let y = Ce(m, {
    mixins: ha(m.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xa.slice(),
    typography: ba(h, l),
    transitions: Oa(s),
    zIndex: {
      ...Ra
    }
  });
  if (y = Ce(y, d), y = t.reduce((C, E) => Ce(C, E), y), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], E = (c, R) => {
      let _;
      for (_ in c) {
        const V = c[_];
        if (C.includes(_) && Object.keys(V).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const P = gt("", _);
            console.error([`MUI: The \`${R}\` component increases the CSS specificity of the \`${_}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${P}' syntax:`, JSON.stringify({
              root: {
                [`&.${P}`]: V
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[_] = {};
        }
      }
    };
    Object.keys(y.components).forEach((c) => {
      const R = y.components[c].styleOverrides;
      R && c.startsWith("Mui") && E(R, c);
    });
  }
  return y.unstable_sxConfig = {
    ...Ht,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(E) {
    return nt({
      sx: E,
      theme: this
    });
  }, y.toRuntimeSource = Dn, y;
}
function Pa(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const _a = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Pa(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function jn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Fn(e) {
  return e === "dark" ? _a : [];
}
function ka(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Er(t);
  return {
    palette: i,
    opacity: {
      ...jn(i.mode),
      ...r
    },
    overlays: n || Fn(i.mode),
    ...o
  };
}
function Aa(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ma = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ia = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ma(e.cssVarPrefix).forEach((l) => {
        s[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Na(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function g(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ft(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Cn(e);
}
function Ae(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ut(ft(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ba(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Pe = (e) => {
  try {
    return e();
  } catch {
  }
}, Da = (e = "mui") => ra(e);
function or(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ka({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = sr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...jn(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Fn(o)
  }, s;
}
function ja(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Aa,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, h = Object.keys(r)[0], m = n || (r.light && h !== "light" ? "light" : h), y = Da(i), {
    [m]: C,
    light: E,
    dark: c,
    ...R
  } = r, _ = {
    ...R
  };
  let V = C;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (V = !0), !V)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : Ve(21, m));
  const P = or(_, V, d, m);
  E && !_.light && or(_, E, void 0, "light"), c && !_.dark && or(_, c, void 0, "dark");
  let S = {
    defaultColorScheme: m,
    ...P,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: f,
    getCssVar: y,
    colorSchemes: _,
    font: {
      ...ga(P.typography),
      ...P.font
    },
    spacing: Ba(d.spacing)
  };
  Object.keys(S.colorSchemes).forEach((re) => {
    const a = S.colorSchemes[re].palette, w = ($) => {
      const A = $.split("-"), L = A[1], ie = A[2];
      return y($, a[L][ie]);
    };
    if (a.mode === "light" && (g(a.common, "background", "#fff"), g(a.common, "onBackground", "#000")), a.mode === "dark" && (g(a.common, "background", "#000"), g(a.common, "onBackground", "#fff")), Na(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      g(a.Alert, "errorColor", ne(a.error.light, 0.6)), g(a.Alert, "infoColor", ne(a.info.light, 0.6)), g(a.Alert, "successColor", ne(a.success.light, 0.6)), g(a.Alert, "warningColor", ne(a.warning.light, 0.6)), g(a.Alert, "errorFilledBg", w("palette-error-main")), g(a.Alert, "infoFilledBg", w("palette-info-main")), g(a.Alert, "successFilledBg", w("palette-success-main")), g(a.Alert, "warningFilledBg", w("palette-warning-main")), g(a.Alert, "errorFilledColor", Pe(() => a.getContrastText(a.error.main))), g(a.Alert, "infoFilledColor", Pe(() => a.getContrastText(a.info.main))), g(a.Alert, "successFilledColor", Pe(() => a.getContrastText(a.success.main))), g(a.Alert, "warningFilledColor", Pe(() => a.getContrastText(a.warning.main))), g(a.Alert, "errorStandardBg", oe(a.error.light, 0.9)), g(a.Alert, "infoStandardBg", oe(a.info.light, 0.9)), g(a.Alert, "successStandardBg", oe(a.success.light, 0.9)), g(a.Alert, "warningStandardBg", oe(a.warning.light, 0.9)), g(a.Alert, "errorIconColor", w("palette-error-main")), g(a.Alert, "infoIconColor", w("palette-info-main")), g(a.Alert, "successIconColor", w("palette-success-main")), g(a.Alert, "warningIconColor", w("palette-warning-main")), g(a.AppBar, "defaultBg", w("palette-grey-100")), g(a.Avatar, "defaultBg", w("palette-grey-400")), g(a.Button, "inheritContainedBg", w("palette-grey-300")), g(a.Button, "inheritContainedHoverBg", w("palette-grey-A100")), g(a.Chip, "defaultBorder", w("palette-grey-400")), g(a.Chip, "defaultAvatarColor", w("palette-grey-700")), g(a.Chip, "defaultIconColor", w("palette-grey-700")), g(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), g(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), g(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), g(a.LinearProgress, "primaryBg", oe(a.primary.main, 0.62)), g(a.LinearProgress, "secondaryBg", oe(a.secondary.main, 0.62)), g(a.LinearProgress, "errorBg", oe(a.error.main, 0.62)), g(a.LinearProgress, "infoBg", oe(a.info.main, 0.62)), g(a.LinearProgress, "successBg", oe(a.success.main, 0.62)), g(a.LinearProgress, "warningBg", oe(a.warning.main, 0.62)), g(a.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.11)`), g(a.Slider, "primaryTrack", oe(a.primary.main, 0.62)), g(a.Slider, "secondaryTrack", oe(a.secondary.main, 0.62)), g(a.Slider, "errorTrack", oe(a.error.main, 0.62)), g(a.Slider, "infoTrack", oe(a.info.main, 0.62)), g(a.Slider, "successTrack", oe(a.success.main, 0.62)), g(a.Slider, "warningTrack", oe(a.warning.main, 0.62));
      const $ = Tt(a.background.default, 0.8);
      g(a.SnackbarContent, "bg", $), g(a.SnackbarContent, "color", Pe(() => a.getContrastText($))), g(a.SpeedDialAction, "fabHoverBg", Tt(a.background.paper, 0.15)), g(a.StepConnector, "border", w("palette-grey-400")), g(a.StepContent, "border", w("palette-grey-400")), g(a.Switch, "defaultColor", w("palette-common-white")), g(a.Switch, "defaultDisabledColor", w("palette-grey-100")), g(a.Switch, "primaryDisabledColor", oe(a.primary.main, 0.62)), g(a.Switch, "secondaryDisabledColor", oe(a.secondary.main, 0.62)), g(a.Switch, "errorDisabledColor", oe(a.error.main, 0.62)), g(a.Switch, "infoDisabledColor", oe(a.info.main, 0.62)), g(a.Switch, "successDisabledColor", oe(a.success.main, 0.62)), g(a.Switch, "warningDisabledColor", oe(a.warning.main, 0.62)), g(a.TableCell, "border", oe(Ct(a.divider, 1), 0.88)), g(a.Tooltip, "bg", Ct(a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      g(a.Alert, "errorColor", oe(a.error.light, 0.6)), g(a.Alert, "infoColor", oe(a.info.light, 0.6)), g(a.Alert, "successColor", oe(a.success.light, 0.6)), g(a.Alert, "warningColor", oe(a.warning.light, 0.6)), g(a.Alert, "errorFilledBg", w("palette-error-dark")), g(a.Alert, "infoFilledBg", w("palette-info-dark")), g(a.Alert, "successFilledBg", w("palette-success-dark")), g(a.Alert, "warningFilledBg", w("palette-warning-dark")), g(a.Alert, "errorFilledColor", Pe(() => a.getContrastText(a.error.dark))), g(a.Alert, "infoFilledColor", Pe(() => a.getContrastText(a.info.dark))), g(a.Alert, "successFilledColor", Pe(() => a.getContrastText(a.success.dark))), g(a.Alert, "warningFilledColor", Pe(() => a.getContrastText(a.warning.dark))), g(a.Alert, "errorStandardBg", ne(a.error.light, 0.9)), g(a.Alert, "infoStandardBg", ne(a.info.light, 0.9)), g(a.Alert, "successStandardBg", ne(a.success.light, 0.9)), g(a.Alert, "warningStandardBg", ne(a.warning.light, 0.9)), g(a.Alert, "errorIconColor", w("palette-error-main")), g(a.Alert, "infoIconColor", w("palette-info-main")), g(a.Alert, "successIconColor", w("palette-success-main")), g(a.Alert, "warningIconColor", w("palette-warning-main")), g(a.AppBar, "defaultBg", w("palette-grey-900")), g(a.AppBar, "darkBg", w("palette-background-paper")), g(a.AppBar, "darkColor", w("palette-text-primary")), g(a.Avatar, "defaultBg", w("palette-grey-600")), g(a.Button, "inheritContainedBg", w("palette-grey-800")), g(a.Button, "inheritContainedHoverBg", w("palette-grey-700")), g(a.Chip, "defaultBorder", w("palette-grey-700")), g(a.Chip, "defaultAvatarColor", w("palette-grey-300")), g(a.Chip, "defaultIconColor", w("palette-grey-300")), g(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), g(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), g(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), g(a.LinearProgress, "primaryBg", ne(a.primary.main, 0.5)), g(a.LinearProgress, "secondaryBg", ne(a.secondary.main, 0.5)), g(a.LinearProgress, "errorBg", ne(a.error.main, 0.5)), g(a.LinearProgress, "infoBg", ne(a.info.main, 0.5)), g(a.LinearProgress, "successBg", ne(a.success.main, 0.5)), g(a.LinearProgress, "warningBg", ne(a.warning.main, 0.5)), g(a.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.13)`), g(a.Slider, "primaryTrack", ne(a.primary.main, 0.5)), g(a.Slider, "secondaryTrack", ne(a.secondary.main, 0.5)), g(a.Slider, "errorTrack", ne(a.error.main, 0.5)), g(a.Slider, "infoTrack", ne(a.info.main, 0.5)), g(a.Slider, "successTrack", ne(a.success.main, 0.5)), g(a.Slider, "warningTrack", ne(a.warning.main, 0.5));
      const $ = Tt(a.background.default, 0.98);
      g(a.SnackbarContent, "bg", $), g(a.SnackbarContent, "color", Pe(() => a.getContrastText($))), g(a.SpeedDialAction, "fabHoverBg", Tt(a.background.paper, 0.15)), g(a.StepConnector, "border", w("palette-grey-600")), g(a.StepContent, "border", w("palette-grey-600")), g(a.Switch, "defaultColor", w("palette-grey-300")), g(a.Switch, "defaultDisabledColor", w("palette-grey-600")), g(a.Switch, "primaryDisabledColor", ne(a.primary.main, 0.55)), g(a.Switch, "secondaryDisabledColor", ne(a.secondary.main, 0.55)), g(a.Switch, "errorDisabledColor", ne(a.error.main, 0.55)), g(a.Switch, "infoDisabledColor", ne(a.info.main, 0.55)), g(a.Switch, "successDisabledColor", ne(a.success.main, 0.55)), g(a.Switch, "warningDisabledColor", ne(a.warning.main, 0.55)), g(a.TableCell, "border", ne(Ct(a.divider, 1), 0.68)), g(a.Tooltip, "bg", Ct(a.grey[700], 0.92));
    }
    Ae(a.background, "default"), Ae(a.background, "paper"), Ae(a.common, "background"), Ae(a.common, "onBackground"), Ae(a, "divider"), Object.keys(a).forEach(($) => {
      const A = a[$];
      $ !== "tonalOffset" && A && typeof A == "object" && (A.main && g(a[$], "mainChannel", ut(ft(A.main))), A.light && g(a[$], "lightChannel", ut(ft(A.light))), A.dark && g(a[$], "darkChannel", ut(ft(A.dark))), A.contrastText && g(a[$], "contrastTextChannel", ut(ft(A.contrastText))), $ === "text" && (Ae(a[$], "primary"), Ae(a[$], "secondary")), $ === "action" && (A.active && Ae(a[$], "active"), A.selected && Ae(a[$], "selected")));
    });
  }), S = t.reduce((re, a) => Ce(re, a), S);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Ia(S)
  }, {
    vars: M,
    generateThemeVars: G,
    generateStyleSheets: K
  } = ia(S, b);
  return S.vars = M, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([re, a]) => {
    S[re] = a;
  }), S.generateThemeVars = G, S.generateStyleSheets = K, S.generateSpacing = function() {
    return _n(d.spacing, vr(this));
  }, S.getColorSchemeSelector = aa(l), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
    ...Ht,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, S.unstable_sx = function(a) {
    return nt({
      sx: a,
      theme: this
    });
  }, S.toRuntimeSource = Dn, S;
}
function fn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Er({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function xr(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, l = i || "light", f = o == null ? void 0 : o[l], d = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return sr(e, ...t);
    let h = r;
    "palette" in e || d[l] && (d[l] !== !0 ? h = d[l].palette : l === "dark" && (h = {
      mode: "dark"
    }));
    const m = sr({
      ...e,
      palette: h
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, fn(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, fn(m, "light", d.light)), m;
  }
  return !r && !("light" in d) && l === "light" && (d.light = !0), ja({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Fa = xr(), za = "$$material";
function Va(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zn = (e) => Va(e) && e !== "classes", $e = Gi({
  themeId: za,
  defaultTheme: Fa,
  rootShouldForwardProp: zn
}), Cr = ta;
process.env.NODE_ENV !== "production" && (p.node, p.object.isRequired);
function Gt(e) {
  return ea(e);
}
class It {
  constructor() {
    at(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new It();
  }
  static use() {
    const t = Rn(It.create).current, [r, n] = j.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, j.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Wa(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function La() {
  return It.use();
}
function Wa() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function lr() {
  return lr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lr.apply(null, arguments);
}
function Ya(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function cr(e, t) {
  return cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, cr(e, t);
}
function Ua(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, cr(e, t);
}
const dn = tt.createContext(null);
function Ha(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tr(e, t) {
  var r = function(i) {
    return t && Ot(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Qn.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Ga(e, t) {
  e = e || {}, t = t || {};
  function r(h) {
    return h in t ? t[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var f in t) {
    if (n[f])
      for (s = 0; s < n[f].length; s++) {
        var d = n[f][s];
        l[n[f][s]] = r(d);
      }
    l[f] = r(f);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = r(o[s]);
  return l;
}
function Ge(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function qa(e, t) {
  return Tr(e.children, function(r) {
    return Rt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ge(r, "appear", e),
      enter: Ge(r, "enter", e),
      exit: Ge(r, "exit", e)
    });
  });
}
function Ka(e, t, r) {
  var n = Tr(e.children), o = Ga(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Ot(s)) {
      var l = i in t, f = i in n, d = t[i], h = Ot(d) && !d.props.in;
      f && (!l || h) ? o[i] = Rt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ge(s, "exit", e),
        enter: Ge(s, "enter", e)
      }) : !f && l && !h ? o[i] = Rt(s, {
        in: !1
      }) : f && l && Ot(d) && (o[i] = Rt(s, {
        onExited: r.bind(null, s),
        in: d.props.in,
        exit: Ge(s, "exit", e),
        enter: Ge(s, "enter", e)
      }));
    }
  }), o;
}
var Xa = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ja = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, wr = /* @__PURE__ */ function(e) {
  Ua(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Ha(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, f = i.firstRender;
    return {
      children: f ? qa(o, l) : Ka(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Tr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var f = lr({}, l.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = Ya(o, ["component", "childFactory"]), f = this.state.contextValue, d = Xa(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ tt.createElement(dn.Provider, {
      value: f
    }, d) : /* @__PURE__ */ tt.createElement(dn.Provider, {
      value: f
    }, /* @__PURE__ */ tt.createElement(i, l, d));
  }, t;
}(tt.Component);
wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: p.any,
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
  children: p.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: p.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: p.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: p.bool,
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
  childFactory: p.func
} : {};
wr.defaultProps = Ja;
function Vn(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: f,
    timeout: d
  } = e, [h, m] = j.useState(!1), y = Ee(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, E = Ee(r.child, h && r.childLeaving, n && r.childPulsate);
  return !l && !h && m(!0), j.useEffect(() => {
    if (!l && f != null) {
      const c = setTimeout(f, d);
      return () => {
        clearTimeout(c);
      };
    }
  }, [f, l, d]), /* @__PURE__ */ me.jsx("span", {
    className: y,
    style: C,
    children: /* @__PURE__ */ me.jsx("span", {
      className: E
    })
  });
}
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object.isRequired,
  className: p.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: p.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: p.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: p.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: p.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: p.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: p.number,
  /**
   * exit delay
   */
  timeout: p.number.isRequired
});
const we = Bt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ur = 550, Qa = 80, Za = mt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, es = mt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ts = mt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, rs = $e("span", {
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
}), ns = $e(Vn, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${we.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Za};
    animation-duration: ${ur}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${we.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${we.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${we.childLeaving} {
    opacity: 0;
    animation-name: ${es};
    animation-duration: ${ur}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${we.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ts};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ln = /* @__PURE__ */ j.forwardRef(function(t, r) {
  const n = Gt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...l
  } = n, [f, d] = j.useState([]), h = j.useRef(0), m = j.useRef(null);
  j.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [f]);
  const y = j.useRef(!1), C = Io(), E = j.useRef(null), c = j.useRef(null), R = j.useCallback((S) => {
    const {
      pulsate: b,
      rippleX: M,
      rippleY: G,
      rippleSize: K,
      cb: re
    } = S;
    d((a) => [...a, /* @__PURE__ */ me.jsx(ns, {
      classes: {
        ripple: Ee(i.ripple, we.ripple),
        rippleVisible: Ee(i.rippleVisible, we.rippleVisible),
        ripplePulsate: Ee(i.ripplePulsate, we.ripplePulsate),
        child: Ee(i.child, we.child),
        childLeaving: Ee(i.childLeaving, we.childLeaving),
        childPulsate: Ee(i.childPulsate, we.childPulsate)
      },
      timeout: ur,
      pulsate: b,
      rippleX: M,
      rippleY: G,
      rippleSize: K
    }, h.current)]), h.current += 1, m.current = re;
  }, [i]), _ = j.useCallback((S = {}, b = {}, M = () => {
  }) => {
    const {
      pulsate: G = !1,
      center: K = o || b.pulsate,
      fakeElement: re = !1
      // For test purposes
    } = b;
    if ((S == null ? void 0 : S.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (y.current = !0);
    const a = re ? null : c.current, w = a ? a.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let $, A, L;
    if (K || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      $ = Math.round(w.width / 2), A = Math.round(w.height / 2);
    else {
      const {
        clientX: ie,
        clientY: Z
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      $ = Math.round(ie - w.left), A = Math.round(Z - w.top);
    }
    if (K)
      L = Math.sqrt((2 * w.width ** 2 + w.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const ie = Math.max(Math.abs((a ? a.clientWidth : 0) - $), $) * 2 + 2, Z = Math.max(Math.abs((a ? a.clientHeight : 0) - A), A) * 2 + 2;
      L = Math.sqrt(ie ** 2 + Z ** 2);
    }
    S != null && S.touches ? E.current === null && (E.current = () => {
      R({
        pulsate: G,
        rippleX: $,
        rippleY: A,
        rippleSize: L,
        cb: M
      });
    }, C.start(Qa, () => {
      E.current && (E.current(), E.current = null);
    })) : R({
      pulsate: G,
      rippleX: $,
      rippleY: A,
      rippleSize: L,
      cb: M
    });
  }, [o, R, C]), V = j.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), P = j.useCallback((S, b) => {
    if (C.clear(), (S == null ? void 0 : S.type) === "touchend" && E.current) {
      E.current(), E.current = null, C.start(0, () => {
        P(S, b);
      });
      return;
    }
    E.current = null, d((M) => M.length > 0 ? M.slice(1) : M), m.current = b;
  }, [C]);
  return j.useImperativeHandle(r, () => ({
    pulsate: V,
    start: _,
    stop: P
  }), [V, _, P]), /* @__PURE__ */ me.jsx(rs, {
    className: Ee(we.root, i.root, s),
    ref: c,
    ...l,
    children: /* @__PURE__ */ me.jsx(wr, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: p.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string
});
function os(e) {
  return gt("MuiButtonBase", e);
}
const is = Bt("MuiButtonBase", ["root", "disabled", "focusVisible"]), as = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = mr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, os, o);
  return r && n && (s.root += ` ${n}`), s;
}, ss = $e("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
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
  [`&.${is.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Wn = /* @__PURE__ */ j.forwardRef(function(t, r) {
  const n = Gt({
    props: t,
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
    focusRipple: y = !1,
    focusVisibleClassName: C,
    LinkComponent: E = "a",
    onBlur: c,
    onClick: R,
    onContextMenu: _,
    onDragLeave: V,
    onFocus: P,
    onFocusVisible: S,
    onKeyDown: b,
    onKeyUp: M,
    onMouseDown: G,
    onMouseLeave: K,
    onMouseUp: re,
    onTouchEnd: a,
    onTouchMove: w,
    onTouchStart: $,
    tabIndex: A = 0,
    TouchRippleProps: L,
    touchRippleRef: ie,
    type: Z,
    ...le
  } = n, be = j.useRef(null), Q = La(), x = Hr(Q.ref, ie), [T, N] = j.useState(!1);
  d && T && N(!1), j.useImperativeHandle(o, () => ({
    focusVisible: () => {
      N(!0), be.current.focus();
    }
  }), []);
  const B = Q.shouldMount && !h && !d;
  j.useEffect(() => {
    T && y && !h && Q.pulsate();
  }, [h, y, T, Q]);
  const I = Me(Q, "start", G, m), W = Me(Q, "stop", _, m), D = Me(Q, "stop", V, m), F = Me(Q, "stop", re, m), Y = Me(Q, "stop", (v) => {
    T && v.preventDefault(), K && K(v);
  }, m), H = Me(Q, "start", $, m), U = Me(Q, "stop", a, m), pe = Me(Q, "stop", w, m), O = Me(Q, "stop", (v) => {
    qr(v.target) || N(!1), c && c(v);
  }, !1), ve = $t((v) => {
    be.current || (be.current = v.currentTarget), qr(v.target) && (N(!0), S && S(v)), P && P(v);
  }), Te = () => {
    const v = be.current;
    return f && f !== "button" && !(v.tagName === "A" && v.href);
  }, Be = $t((v) => {
    y && !v.repeat && T && v.key === " " && Q.stop(v, () => {
      Q.start(v);
    }), v.target === v.currentTarget && Te() && v.key === " " && v.preventDefault(), b && b(v), v.target === v.currentTarget && Te() && v.key === "Enter" && !d && (v.preventDefault(), R && R(v));
  }), qt = $t((v) => {
    y && v.key === " " && T && !v.defaultPrevented && Q.stop(v, () => {
      Q.pulsate(v);
    }), M && M(v), R && v.target === v.currentTarget && Te() && v.key === " " && !v.defaultPrevented && R(v);
  });
  let Ye = f;
  Ye === "button" && (le.href || le.to) && (Ye = E);
  const De = {};
  Ye === "button" ? (De.type = Z === void 0 ? "button" : Z, De.disabled = d) : (!le.href && !le.to && (De.role = "button"), d && (De["aria-disabled"] = d));
  const bt = Hr(r, be), ot = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: y,
    tabIndex: A,
    focusVisible: T
  }, u = as(ot);
  return /* @__PURE__ */ me.jsxs(ss, {
    as: Ye,
    className: Ee(u.root, l),
    ownerState: ot,
    onBlur: O,
    onClick: R,
    onContextMenu: W,
    onFocus: ve,
    onKeyDown: Be,
    onKeyUp: qt,
    onMouseDown: I,
    onMouseLeave: Y,
    onMouseUp: F,
    onDragLeave: D,
    onTouchEnd: U,
    onTouchMove: pe,
    onTouchStart: H,
    ref: bt,
    tabIndex: d ? -1 : A,
    type: Z,
    ...De,
    ...le,
    children: [s, B ? /* @__PURE__ */ me.jsx(Ln, {
      ref: x,
      center: i,
      ...L
    }) : null]
  });
});
function Me(e, t, r, n = !1) {
  return $t((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Oo,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: p.bool,
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: To,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: p.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: p.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: p.string,
  /**
   * @ignore
   */
  href: p.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: p.elementType,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * @ignore
   */
  onContextMenu: p.func,
  /**
   * @ignore
   */
  onDragLeave: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * @ignore
   */
  onMouseDown: p.func,
  /**
   * @ignore
   */
  onMouseLeave: p.func,
  /**
   * @ignore
   */
  onMouseUp: p.func,
  /**
   * @ignore
   */
  onTouchEnd: p.func,
  /**
   * @ignore
   */
  onTouchMove: p.func,
  /**
   * @ignore
   */
  onTouchStart: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @default 0
   */
  tabIndex: p.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: p.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: p.oneOfType([p.func, p.shape({
    current: p.shape({
      pulsate: p.func.isRequired,
      start: p.func.isRequired,
      stop: p.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string])
});
function ls(e) {
  return typeof e.main == "string";
}
function cs(e, t = []) {
  if (!ls(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Yn(e = []) {
  return ([, t]) => t && cs(t, e);
}
function us(e) {
  return gt("MuiCircularProgress", e);
}
Bt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Fe = 44, fr = mt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, dr = mt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, fs = typeof fr != "string" ? vn`
        animation: ${fr} 1.4s linear infinite;
      ` : null, ds = typeof dr != "string" ? vn`
        animation: ${dr} 1.4s ease-in-out infinite;
      ` : null, ps = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ge(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ge(r)}`, o && "circleDisableShrink"]
  };
  return mr(i, us, t);
}, ms = $e("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ge(r.color)}`]];
  }
})(Cr(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: fs || {
      animation: `${fr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Yn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), gs = $e("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), hs = $e("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ge(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Cr(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: ds || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${dr} 1.4s ease-in-out infinite`
    }
  }]
}))), Un = /* @__PURE__ */ j.forwardRef(function(t, r) {
  const n = Gt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: f,
    thickness: d = 3.6,
    value: h = 0,
    variant: m = "indeterminate",
    ...y
  } = n, C = {
    ...n,
    color: i,
    disableShrink: s,
    size: l,
    thickness: d,
    value: h,
    variant: m
  }, E = ps(C), c = {}, R = {}, _ = {};
  if (m === "determinate") {
    const V = 2 * Math.PI * ((Fe - d) / 2);
    c.strokeDasharray = V.toFixed(3), _["aria-valuenow"] = Math.round(h), c.strokeDashoffset = `${((100 - h) / 100 * V).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ me.jsx(ms, {
    className: Ee(E.root, o),
    style: {
      width: l,
      height: l,
      ...R,
      ...f
    },
    ownerState: C,
    ref: r,
    role: "progressbar",
    ..._,
    ...y,
    children: /* @__PURE__ */ me.jsx(gs, {
      className: E.svg,
      ownerState: C,
      viewBox: `${Fe / 2} ${Fe / 2} ${Fe} ${Fe}`,
      children: /* @__PURE__ */ me.jsx(hs, {
        className: E.circle,
        style: c,
        ownerState: C,
        cx: Fe,
        cy: Fe,
        r: (Fe - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Tn(p.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: p.oneOfType([p.number, p.string]),
  /**
   * @ignore
   */
  style: p.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: p.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: p.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: p.oneOf(["determinate", "indeterminate"])
});
function ys(e) {
  return gt("MuiButton", e);
}
const He = Bt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Hn = /* @__PURE__ */ j.createContext({});
process.env.NODE_ENV !== "production" && (Hn.displayName = "ButtonGroupContext");
const Gn = /* @__PURE__ */ j.createContext(void 0);
process.env.NODE_ENV !== "production" && (Gn.displayName = "ButtonGroupButtonContext");
const bs = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: l,
    classes: f
  } = e, d = {
    root: ["root", s && "loading", i, `${i}${ge(t)}`, `size${ge(o)}`, `${i}Size${ge(o)}`, `color${ge(t)}`, r && "disableElevation", n && "fullWidth", s && `loadingPosition${ge(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${ge(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ge(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, h = mr(d, ys, f);
  return {
    ...f,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...h
  };
}, qn = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], vs = $e(Wn, {
  shouldForwardProp: (e) => zn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ge(r.color)}`], t[`size${ge(r.size)}`], t[`${r.variant}Size${ge(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Cr(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${He.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${He.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${He.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${He.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Yn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : et(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${He.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${He.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${He.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Ss = $e("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ge(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...qn]
})), Es = $e("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ge(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...qn]
})), xs = $e("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), pn = $e("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Kn = /* @__PURE__ */ j.forwardRef(function(t, r) {
  const n = j.useContext(Hn), o = j.useContext(Gn), i = _t(n, t), s = Gt({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: f = "primary",
    component: d = "button",
    className: h,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: C = !1,
    endIcon: E,
    focusVisibleClassName: c,
    fullWidth: R = !1,
    id: _,
    loading: V = null,
    loadingIndicator: P,
    loadingPosition: S = "center",
    size: b = "medium",
    startIcon: M,
    type: G,
    variant: K = "text",
    ...re
  } = s, a = ko(_), w = P ?? /* @__PURE__ */ me.jsx(Un, {
    "aria-labelledby": a,
    color: "inherit",
    size: 16
  }), $ = {
    ...s,
    color: f,
    component: d,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: C,
    fullWidth: R,
    loading: V,
    loadingIndicator: w,
    loadingPosition: S,
    size: b,
    type: G,
    variant: K
  }, A = bs($), L = (M || V && S === "start") && /* @__PURE__ */ me.jsx(Ss, {
    className: A.startIcon,
    ownerState: $,
    children: M || /* @__PURE__ */ me.jsx(pn, {
      className: A.loadingIconPlaceholder,
      ownerState: $
    })
  }), ie = (E || V && S === "end") && /* @__PURE__ */ me.jsx(Es, {
    className: A.endIcon,
    ownerState: $,
    children: E || /* @__PURE__ */ me.jsx(pn, {
      className: A.loadingIconPlaceholder,
      ownerState: $
    })
  }), Z = o || "", le = typeof V == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ me.jsx("span", {
      className: A.loadingWrapper,
      style: {
        display: "contents"
      },
      children: V && /* @__PURE__ */ me.jsx(xs, {
        className: A.loadingIndicator,
        ownerState: $,
        children: w
      })
    })
  ) : null;
  return /* @__PURE__ */ me.jsxs(vs, {
    ownerState: $,
    className: Ee(n.className, A.root, h, Z),
    component: d,
    disabled: m || V,
    focusRipple: !C,
    focusVisibleClassName: Ee(A.focusVisible, c),
    ref: r,
    type: G,
    id: V ? a : _,
    ...re,
    classes: A,
    children: [L, S !== "end" && le, l, S === "end" && le, ie]
  });
});
process.env.NODE_ENV !== "production" && (Kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * Element placed after the children.
   */
  endIcon: p.node,
  /**
   * @ignore
   */
  focusVisibleClassName: p.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: p.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: p.string,
  /**
   * @ignore
   */
  id: p.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: p.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: p.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: p.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * Element placed before the children.
   */
  startIcon: p.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: p.oneOfType([p.oneOf(["contained", "outlined", "text"]), p.string])
});
const Gs = (e) => {
  const { variant: t = "primary", children: r, ...n } = e;
  let o = "contained", i = "primary", s = "";
  switch (t) {
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
  return /* @__PURE__ */ me.jsx(
    Kn,
    {
      variant: o,
      color: i,
      className: s ? `${s} ${n.className || ""}` : n.className,
      disableElevation: !0,
      ...n,
      children: r
    }
  );
}, Cs = {
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
}, ye = {
  values: {
    xs: 0,
    sm: 321,
    md: 768,
    lg: 1025,
    xl: 1420
  }
}, de = '"Lexend deca", sans-serif';
var mn, gn, hn, yn, bn;
const Ts = {
  allVariants: {
    fontFamily: de
  },
  fontFamily: de,
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
    fontFamily: de,
    fontSize: "48px",
    lineHeight: "56px",
    [`@media screen and (max-width: ${(mn = ye == null ? void 0 : ye.values) == null ? void 0 : mn.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "700"
  },
  h1SemiBold: {
    fontFamily: de,
    fontSize: "48px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(gn = ye == null ? void 0 : ye.values) == null ? void 0 : gn.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "600"
  },
  h1Medium: {
    fontFamily: de,
    fontSize: "48px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  // Used in homepage
  h2Bold: {
    fontFamily: de,
    fontSize: "40px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(hn = ye == null ? void 0 : ye.values) == null ? void 0 : hn.md}px)`]: {
      fontSize: "24px",
      lineHeight: "30px"
    },
    fontWeight: "700"
  },
  h2Medium: {
    fontFamily: de,
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  h2Regular: {
    fontFamily: de,
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "60px"
  },
  // Used in homepage
  h3Bold: {
    fontFamily: de,
    fontSize: "28px",
    [`@media screen and (max-width: ${(yn = ye == null ? void 0 : ye.values) == null ? void 0 : yn.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "600",
    lineHeight: "40px"
  },
  h3Regular: {
    fontFamily: de,
    fontSize: "32px",
    [`@media screen and (max-width: ${(bn = ye == null ? void 0 : ye.values) == null ? void 0 : bn.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "400",
    lineHeight: "40px"
  },
  mediumBold: {
    fontFamily: de,
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "16px"
  },
  mediumRegular: {
    fontFamily: de,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "150%"
  },
  // Used in file a claim
  smallRegular: {
    fontFamily: de,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px"
  },
  // Used in FormAppbar
  paragraphBold: {
    fontFamily: de,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "30px"
  },
  // Used in homepage
  paragraphMedium: {
    fontFamily: de,
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
    fontFamily: de
  },
  body2: void 0,
  button: {
    fontFamily: de,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px"
  },
  caption: {
    fontFamily: de,
    fontSize: "14px",
    fontWeight: "400"
  },
  overline: void 0
}, ws = (e) => ({
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
}), Os = (e) => ({
  defaultProps: {
    disableRipple: !0
  }
}), Rs = (e) => ({
  styleOverrides: {
    root: {
      ...e.typography.h1Medium,
      backgroundColor: e.palette.backgrounds.system
    }
  }
}), $s = (e) => ({
  styleOverrides: {
    root: {
      fontSize: "10px",
      margin: "3px 14px 0"
    }
  }
}), Ps = (e) => ({
  styleOverrides: {
    input: {
      ...e.typography.regularRegular
    }
  }
}), _s = (e) => ({
  styleOverrides: {
    root: {
      "&.MuiFormLabel-root": {
        ...e.typography.regularRegular
      }
    }
  }
}), ks = (e) => ({
  defaultProps: {
    disableRipple: !0
  },
  styleOverrides: {
    root: {
      ...e.typography.regularRegular
    }
  }
}), As = (e) => ({
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
}), Ms = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: de
    }
  }
}), Is = (e) => ({
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        backgroundColor: `${e.palette.primary.main} !important`
      }
    }
  }
}), Ns = (e) => ({
  styleOverrides: {
    root: {
      "&:focus": {
        backgroundColor: e.palette.buttons.iconButtonBackgroundFocus
      }
    }
  }
}), Bs = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: de
    }
  }
}), Ds = (e) => ({
  styleOverrides: {
    expandIconWrapper: {
      color: e.palette.secondary.main
    }
  }
}), js = (e) => ({
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
          backgroundColor: eo(e.palette.common.white, 0.1),
          "&.MuiListItemButton-root:hover .MuiListItemIcon-root": {
            color: e.palette.primary.main
          }
        }
      }
    }
  }
}), Fs = (e) => ({
  styleOverrides: {
    body: {
      ...e.typography.smallRegular
    },
    head: {
      ...e.typography.smallBold
    }
  }
}), zs = (e) => ({
  MuiButton: ws(e),
  MuiButtonBase: Os(),
  MuiDialogTitle: Rs(e),
  MuiInputBase: Ps(e),
  MuiFormLabel: _s(e),
  MuiFormHelperText: $s(),
  MuiMenuItem: ks(e),
  MuiAutocomplete: As(e),
  MuiPickersCalendarHeader: Ms(),
  MuiPickersToolbar: Bs(),
  MuiPickersDay: Is(e),
  MuiIconButton: Ns(e),
  MuiAccordionSummary: Ds(e),
  MuiListItemButton: js(e),
  MuiTableCell: Fs(e)
}), ir = xr({
  typography: Ts,
  spacing: 4,
  palette: Cs,
  breakpoints: ye
}), qs = xr({
  ...ir,
  components: {
    ...ir.components,
    ...zs(ir)
  }
});
to({
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
  Gs as Button,
  ye as breakpoints,
  Cs as palette,
  qs as theme,
  Ts as typography
};
//# sourceMappingURL=flighthelp-ui.es.js.map
