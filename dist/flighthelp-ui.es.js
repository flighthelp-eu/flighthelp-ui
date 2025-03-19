var io = Object.defineProperty, ao = Object.defineProperties;
var so = Object.getOwnPropertyDescriptors;
var Tt = Object.getOwnPropertySymbols;
var Mr = Object.prototype.hasOwnProperty, Ir = Object.prototype.propertyIsEnumerable;
var Le = Math.pow, tr = (e, t, r) => t in e ? io(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, S = (e, t) => {
  for (var r in t || (t = {}))
    Mr.call(t, r) && tr(e, r, t[r]);
  if (Tt)
    for (var r of Tt(t))
      Ir.call(t, r) && tr(e, r, t[r]);
  return e;
}, ne = (e, t) => ao(e, so(t));
var wt = (e) => typeof e == "symbol" ? e : e + "", fe = (e, t) => {
  var r = {};
  for (var n in e)
    Mr.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Tt)
    for (var n of Tt(e))
      t.indexOf(n) < 0 && Ir.call(e, n) && (r[n] = e[n]);
  return r;
};
var ut = (e, t, r) => tr(e, typeof t != "symbol" ? t + "" : t, r);
import * as V from "react";
import it, { isValidElement as At, cloneElement as Mt, Children as lo } from "react";
import co from "@emotion/styled";
import { keyframes as bt, css as $n } from "@emotion/react";
import { darken as uo } from "@mui/material";
import { makeStyles as fo } from "@mui/styles";
function po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ot = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function mo() {
  if (Nr) return ft;
  Nr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return ft.Fragment = t, ft.jsx = r, ft.jsxs = r, ft;
}
var dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function go() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === me ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case A:
          return "Fragment";
        case g:
          return "Portal";
        case X:
          return "Profiler";
        case N:
          return "StrictMode";
        case s:
          return "Suspense";
        case T:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case le:
            return (c.displayName || "Context") + ".Provider";
          case J:
            return (c._context.displayName || "Context") + ".Consumer";
          case Y:
            var _ = c.render;
            return c = c.displayName, c || (c = _.displayName || _.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case k:
            return _ = c.displayName || null, _ !== null ? _ : e(c.type) || "Memo";
          case M:
            _ = c._payload, c = c._init;
            try {
              return e(c(_));
            } catch (E) {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function r(c) {
      try {
        t(c);
        var _ = !1;
      } catch (Se) {
        _ = !0;
      }
      if (_) {
        _ = console;
        var E = _.error, ee = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), t(c);
      }
    }
    function n() {
    }
    function o() {
      if (D === 0) {
        U = console.log, z = console.info, L = console.warn, H = console.error, K = console.group, G = console.groupCollapsed, ye = console.groupEnd;
        var c = {
          configurable: !0,
          enumerable: !0,
          value: n,
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
      D++;
    }
    function i() {
      if (D--, D === 0) {
        var c = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: O({}, c, { value: U }),
          info: O({}, c, { value: z }),
          warn: O({}, c, { value: L }),
          error: O({}, c, { value: H }),
          group: O({}, c, { value: K }),
          groupCollapsed: O({}, c, { value: G }),
          groupEnd: O({}, c, { value: ye })
        });
      }
      0 > D && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(c) {
      if (R === void 0)
        try {
          throw Error();
        } catch (E) {
          var _ = E.stack.trim().match(/\n( *(at )?)/);
          R = _ && _[1] || "", xe = -1 < E.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < E.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + R + c + xe;
    }
    function l(c, _) {
      if (!c || Re) return "";
      var E = Fe.get(c);
      if (E !== void 0) return E;
      Re = !0, E = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var ee = null;
      ee = Z.H, Z.H = null, o();
      try {
        var Se = {
          DetermineComponentFrameRoot: function() {
            try {
              if (_) {
                var Ve = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ve.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ve, []);
                  } catch (Ie) {
                    var Ct = Ie;
                  }
                  Reflect.construct(c, [], Ve);
                } else {
                  try {
                    Ve.call();
                  } catch (Ie) {
                    Ct = Ie;
                  }
                  c.call(Ve.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Ie) {
                  Ct = Ie;
                }
                (Ve = c()) && typeof Ve.catch == "function" && Ve.catch(function() {
                });
              }
            } catch (Ie) {
              if (Ie && Ct && typeof Ie.stack == "string")
                return [Ie.stack, Ct.stack];
            }
            return [null, null];
          }
        };
        Se.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ue = Object.getOwnPropertyDescriptor(
          Se.DetermineComponentFrameRoot,
          "name"
        );
        ue && ue.configurable && Object.defineProperty(
          Se.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var W = Se.DetermineComponentFrameRoot(), Me = W[0], Qe = W[1];
        if (Me && Qe) {
          var Ce = Me.split(`
`), Ke = Qe.split(`
`);
          for (W = ue = 0; ue < Ce.length && !Ce[ue].includes(
            "DetermineComponentFrameRoot"
          ); )
            ue++;
          for (; W < Ke.length && !Ke[W].includes(
            "DetermineComponentFrameRoot"
          ); )
            W++;
          if (ue === Ce.length || W === Ke.length)
            for (ue = Ce.length - 1, W = Ke.length - 1; 1 <= ue && 0 <= W && Ce[ue] !== Ke[W]; )
              W--;
          for (; 1 <= ue && 0 <= W; ue--, W--)
            if (Ce[ue] !== Ke[W]) {
              if (ue !== 1 || W !== 1)
                do
                  if (ue--, W--, 0 > W || Ce[ue] !== Ke[W]) {
                    var ct = `
` + Ce[ue].replace(
                      " at new ",
                      " at "
                    );
                    return c.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", c.displayName)), typeof c == "function" && Fe.set(c, ct), ct;
                  }
                while (1 <= ue && 0 <= W);
              break;
            }
        }
      } finally {
        Re = !1, Z.H = ee, i(), Error.prepareStackTrace = E;
      }
      return Ce = (Ce = c ? c.displayName || c.name : "") ? a(Ce) : "", typeof c == "function" && Fe.set(c, Ce), Ce;
    }
    function f(c) {
      if (c == null) return "";
      if (typeof c == "function") {
        var _ = c.prototype;
        return l(
          c,
          !(!_ || !_.isReactComponent)
        );
      }
      if (typeof c == "string") return a(c);
      switch (c) {
        case s:
          return a("Suspense");
        case T:
          return a("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case Y:
            return c = l(c.render, !1), c;
          case k:
            return f(c.type);
          case M:
            _ = c._payload, c = c._init;
            try {
              return f(c(_));
            } catch (E) {
            }
        }
      return "";
    }
    function d() {
      var c = Z.A;
      return c === null ? null : c.getOwner();
    }
    function h(c) {
      if (C.call(c, "key")) {
        var _ = Object.getOwnPropertyDescriptor(c, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function y(c, _) {
      function E() {
        qe || (qe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: E,
        configurable: !0
      });
    }
    function b() {
      var c = e(this.type);
      return ze[c] || (ze[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function x(c, _, E, ee, Se, ue) {
      return E = ue.ref, c = {
        $$typeof: $,
        type: c,
        key: _,
        props: ue,
        _owner: Se
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function v(c, _, E, ee, Se, ue) {
      if (typeof c == "string" || typeof c == "function" || c === A || c === X || c === N || c === s || c === T || c === Q || typeof c == "object" && c !== null && (c.$$typeof === M || c.$$typeof === k || c.$$typeof === le || c.$$typeof === J || c.$$typeof === Y || c.$$typeof === j || c.getModuleId !== void 0)) {
        var W = _.children;
        if (W !== void 0)
          if (ee)
            if (F(W)) {
              for (ee = 0; ee < W.length; ee++)
                u(W[ee], c);
              Object.freeze && Object.freeze(W);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else u(W, c);
      } else
        W = "", (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), c === null ? ee = "null" : F(c) ? ee = "array" : c !== void 0 && c.$$typeof === $ ? (ee = "<" + (e(c.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof c, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          ee,
          W
        );
      if (C.call(_, "key")) {
        W = e(c);
        var Me = Object.keys(_).filter(function(Ce) {
          return Ce !== "key";
        });
        ee = 0 < Me.length ? "{key: someKey, " + Me.join(": ..., ") + ": ...}" : "{key: someKey}", xt[W + ee] || (Me = 0 < Me.length ? "{" + Me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          W,
          Me,
          W
        ), xt[W + ee] = !0);
      }
      if (W = null, E !== void 0 && (r(E), W = "" + E), h(_) && (r(_.key), W = "" + _.key), "key" in _) {
        E = {};
        for (var Qe in _)
          Qe !== "key" && (E[Qe] = _[Qe]);
      } else E = _;
      return W && y(
        E,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), x(c, W, ue, Se, d(), E);
    }
    function u(c, _) {
      if (typeof c == "object" && c && c.$$typeof !== er) {
        if (F(c))
          for (var E = 0; E < c.length; E++) {
            var ee = c[E];
            w(ee) && P(ee, _);
          }
        else if (w(c))
          c._store && (c._store.validated = 1);
        else if (c === null || typeof c != "object" ? E = null : (E = q && c[q] || c["@@iterator"], E = typeof E == "function" ? E : null), typeof E == "function" && E !== c.entries && (E = E.call(c), E !== c))
          for (; !(c = E.next()).done; )
            w(c.value) && P(c.value, _);
      }
    }
    function w(c) {
      return typeof c == "object" && c !== null && c.$$typeof === $;
    }
    function P(c, _) {
      if (c._store && !c._store.validated && c.key == null && (c._store.validated = 1, _ = I(_), !lt[_])) {
        lt[_] = !0;
        var E = "";
        c && c._owner != null && c._owner !== d() && (E = null, typeof c._owner.tag == "number" ? E = e(c._owner.type) : typeof c._owner.name == "string" && (E = c._owner.name), E = " It was passed a child from " + E + ".");
        var ee = Z.getCurrentStack;
        Z.getCurrentStack = function() {
          var Se = f(c.type);
          return ee && (Se += ee() || ""), Se;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          _,
          E
        ), Z.getCurrentStack = ee;
      }
    }
    function I(c) {
      var _ = "", E = d();
      return E && (E = e(E.type)) && (_ = `

Check the render method of \`` + E + "`."), _ || (c = e(c)) && (_ = `

Check the top-level render call using <` + c + ">."), _;
    }
    var B = it, $ = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), le = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), q = Symbol.iterator, me = Symbol.for("react.client.reference"), Z = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, O = Object.assign, j = Symbol.for("react.client.reference"), F = Array.isArray, D = 0, U, z, L, H, K, G, ye;
    n.__reactDisabledLog = !0;
    var R, xe, Re = !1, Fe = new (typeof WeakMap == "function" ? WeakMap : Map)(), er = Symbol.for("react.client.reference"), qe, ze = {}, xt = {}, lt = {};
    dt.Fragment = A, dt.jsx = function(c, _, E, ee, Se) {
      return v(c, _, E, !1, ee, Se);
    }, dt.jsxs = function(c, _, E, ee, Se) {
      return v(c, _, E, !0, ee, Se);
    };
  }()), dt;
}
var Dr;
function ho() {
  return Dr || (Dr = 1, process.env.NODE_ENV === "production" ? Ot.exports = mo() : Ot.exports = go()), Ot.exports;
}
var be = ho(), Rt = { exports: {} }, $t = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function yo() {
  if (jr) return te;
  jr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function B(g) {
    if (typeof g == "object" && g !== null) {
      var A = g.$$typeof;
      switch (A) {
        case t:
          switch (g = g.type, g) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case y:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case h:
                case v:
                case x:
                case a:
                  return g;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function $(g) {
    return B(g) === d;
  }
  return te.AsyncMode = f, te.ConcurrentMode = d, te.ContextConsumer = l, te.ContextProvider = a, te.Element = t, te.ForwardRef = h, te.Fragment = n, te.Lazy = v, te.Memo = x, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = y, te.isAsyncMode = function(g) {
    return $(g) || B(g) === f;
  }, te.isConcurrentMode = $, te.isContextConsumer = function(g) {
    return B(g) === l;
  }, te.isContextProvider = function(g) {
    return B(g) === a;
  }, te.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, te.isForwardRef = function(g) {
    return B(g) === h;
  }, te.isFragment = function(g) {
    return B(g) === n;
  }, te.isLazy = function(g) {
    return B(g) === v;
  }, te.isMemo = function(g) {
    return B(g) === x;
  }, te.isPortal = function(g) {
    return B(g) === r;
  }, te.isProfiler = function(g) {
    return B(g) === i;
  }, te.isStrictMode = function(g) {
    return B(g) === o;
  }, te.isSuspense = function(g) {
    return B(g) === y;
  }, te.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === d || g === i || g === o || g === y || g === b || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === x || g.$$typeof === a || g.$$typeof === l || g.$$typeof === h || g.$$typeof === w || g.$$typeof === P || g.$$typeof === I || g.$$typeof === u);
  }, te.typeOf = B, te;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function bo() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function B(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === d || R === i || R === o || R === y || R === b || typeof R == "object" && R !== null && (R.$$typeof === v || R.$$typeof === x || R.$$typeof === a || R.$$typeof === l || R.$$typeof === h || R.$$typeof === w || R.$$typeof === P || R.$$typeof === I || R.$$typeof === u);
    }
    function $(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case t:
            var Re = R.type;
            switch (Re) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case y:
                return Re;
              default:
                var Fe = Re && Re.$$typeof;
                switch (Fe) {
                  case l:
                  case h:
                  case v:
                  case x:
                  case a:
                    return Fe;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var g = f, A = d, N = l, X = a, J = t, le = h, Y = n, s = v, T = x, k = r, M = i, Q = o, q = y, me = !1;
    function Z(R) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(R) || $(R) === f;
    }
    function C(R) {
      return $(R) === d;
    }
    function O(R) {
      return $(R) === l;
    }
    function j(R) {
      return $(R) === a;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function D(R) {
      return $(R) === h;
    }
    function U(R) {
      return $(R) === n;
    }
    function z(R) {
      return $(R) === v;
    }
    function L(R) {
      return $(R) === x;
    }
    function H(R) {
      return $(R) === r;
    }
    function K(R) {
      return $(R) === i;
    }
    function G(R) {
      return $(R) === o;
    }
    function ye(R) {
      return $(R) === y;
    }
    re.AsyncMode = g, re.ConcurrentMode = A, re.ContextConsumer = N, re.ContextProvider = X, re.Element = J, re.ForwardRef = le, re.Fragment = Y, re.Lazy = s, re.Memo = T, re.Portal = k, re.Profiler = M, re.StrictMode = Q, re.Suspense = q, re.isAsyncMode = Z, re.isConcurrentMode = C, re.isContextConsumer = O, re.isContextProvider = j, re.isElement = F, re.isForwardRef = D, re.isFragment = U, re.isLazy = z, re.isMemo = L, re.isPortal = H, re.isProfiler = K, re.isStrictMode = G, re.isSuspense = ye, re.isValidElementType = B, re.typeOf = $;
  }()), re;
}
var zr;
function Pn() {
  return zr || (zr = 1, process.env.NODE_ENV === "production" ? $t.exports = yo() : $t.exports = bo()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rr, Vr;
function vo() {
  if (Vr) return rr;
  Vr = 1;
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
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        d[h] = h;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch (h) {
      return !1;
    }
  }
  return rr = o() ? Object.assign : function(i, a) {
    for (var l, f = n(i), d, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var y in l)
        t.call(l, y) && (f[y] = l[y]);
      if (e) {
        d = e(l);
        for (var b = 0; b < d.length; b++)
          r.call(l, d[b]) && (f[d[b]] = l[d[b]]);
      }
    }
    return f;
  }, rr;
}
var nr, Lr;
function Sr() {
  if (Lr) return nr;
  Lr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nr = e, nr;
}
var or, Wr;
function _n() {
  return Wr || (Wr = 1, or = Function.call.bind(Object.prototype.hasOwnProperty)), or;
}
var ir, Yr;
function So() {
  if (Yr) return ir;
  Yr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Sr(), r = {}, n = /* @__PURE__ */ _n();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console != "undefined" && console.error(a);
      try {
        throw new Error(a);
      } catch (l) {
      }
    };
  }
  function o(i, a, l, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var y;
          try {
            if (typeof i[h] != "function") {
              var b = Error(
                (f || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = i[h](a, h, f, l, null, t);
          } catch (v) {
            y = v;
          }
          if (y && !(y instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + l + " type: " + y.message + (x != null ? x : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ir = o, ir;
}
var ar, Ur;
function Eo() {
  if (Ur) return ar;
  Ur = 1;
  var e = Pn(), t = vo(), r = /* @__PURE__ */ Sr(), n = /* @__PURE__ */ _n(), o = /* @__PURE__ */ So(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var f = "Warning: " + l;
    typeof console != "undefined" && console.error(f);
    try {
      throw new Error(f);
    } catch (d) {
    }
  });
  function a() {
    return null;
  }
  return ar = function(l, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(C) {
      var O = C && (d && C[d] || C[h]);
      if (typeof O == "function")
        return O;
    }
    var b = "<<anonymous>>", x = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: I(),
      arrayOf: B,
      element: $(),
      elementType: g(),
      instanceOf: A,
      node: le(),
      objectOf: X,
      oneOf: N,
      oneOfType: J,
      shape: s,
      exact: T
    };
    function v(C, O) {
      return C === O ? C !== 0 || 1 / C === 1 / O : C !== C && O !== O;
    }
    function u(C, O) {
      this.message = C, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function w(C) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, j = 0;
      function F(U, z, L, H, K, G, ye) {
        if (H = H || b, G = G || L, ye !== r) {
          if (f) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var xe = H + ":" + L;
            !O[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[xe] = !0, j++);
          }
        }
        return z[L] == null ? U ? z[L] === null ? new u("The " + K + " `" + G + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new u("The " + K + " `" + G + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : C(z, L, H, K, G);
      }
      var D = F.bind(null, !1);
      return D.isRequired = F.bind(null, !0), D;
    }
    function P(C) {
      function O(j, F, D, U, z, L) {
        var H = j[F], K = Q(H);
        if (K !== C) {
          var G = q(H);
          return new u(
            "Invalid " + U + " `" + z + "` of type " + ("`" + G + "` supplied to `" + D + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return w(O);
    }
    function I() {
      return w(a);
    }
    function B(C) {
      function O(j, F, D, U, z) {
        if (typeof C != "function")
          return new u("Property `" + z + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var L = j[F];
        if (!Array.isArray(L)) {
          var H = Q(L);
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + H + "` supplied to `" + D + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var G = C(L, K, D, U, z + "[" + K + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return w(O);
    }
    function $() {
      function C(O, j, F, D, U) {
        var z = O[j];
        if (!l(z)) {
          var L = Q(z);
          return new u("Invalid " + D + " `" + U + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(C);
    }
    function g() {
      function C(O, j, F, D, U) {
        var z = O[j];
        if (!e.isValidElementType(z)) {
          var L = Q(z);
          return new u("Invalid " + D + " `" + U + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(C);
    }
    function A(C) {
      function O(j, F, D, U, z) {
        if (!(j[F] instanceof C)) {
          var L = C.name || b, H = Z(j[F]);
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + H + "` supplied to `" + D + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return w(O);
    }
    function N(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(j, F, D, U, z) {
        for (var L = j[F], H = 0; H < C.length; H++)
          if (v(L, C[H]))
            return null;
        var K = JSON.stringify(C, function(ye, R) {
          var xe = q(R);
          return xe === "symbol" ? String(R) : R;
        });
        return new u("Invalid " + U + " `" + z + "` of value `" + String(L) + "` " + ("supplied to `" + D + "`, expected one of " + K + "."));
      }
      return w(O);
    }
    function X(C) {
      function O(j, F, D, U, z) {
        if (typeof C != "function")
          return new u("Property `" + z + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var L = j[F], H = Q(L);
        if (H !== "object")
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + H + "` supplied to `" + D + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var G = C(L, K, D, U, z + "." + K, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return w(O);
    }
    function J(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < C.length; O++) {
        var j = C[O];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + me(j) + " at index " + O + "."
          ), a;
      }
      function F(D, U, z, L, H) {
        for (var K = [], G = 0; G < C.length; G++) {
          var ye = C[G], R = ye(D, U, z, L, H, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && K.push(R.data.expectedType);
        }
        var xe = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new u("Invalid " + L + " `" + H + "` supplied to " + ("`" + z + "`" + xe + "."));
      }
      return w(F);
    }
    function le() {
      function C(O, j, F, D, U) {
        return k(O[j]) ? null : new u("Invalid " + D + " `" + U + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return w(C);
    }
    function Y(C, O, j, F, D) {
      return new u(
        (C || "React class") + ": " + O + " type `" + j + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function s(C) {
      function O(j, F, D, U, z) {
        var L = j[F], H = Q(L);
        if (H !== "object")
          return new u("Invalid " + U + " `" + z + "` of type `" + H + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var K in C) {
          var G = C[K];
          if (typeof G != "function")
            return Y(D, U, z, K, q(G));
          var ye = G(L, K, D, U, z + "." + K, r);
          if (ye)
            return ye;
        }
        return null;
      }
      return w(O);
    }
    function T(C) {
      function O(j, F, D, U, z) {
        var L = j[F], H = Q(L);
        if (H !== "object")
          return new u("Invalid " + U + " `" + z + "` of type `" + H + "` " + ("supplied to `" + D + "`, expected `object`."));
        var K = t({}, j[F], C);
        for (var G in K) {
          var ye = C[G];
          if (n(C, G) && typeof ye != "function")
            return Y(D, U, z, G, q(ye));
          if (!ye)
            return new u(
              "Invalid " + U + " `" + z + "` key `" + G + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(j[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var R = ye(L, G, D, U, z + "." + G, r);
          if (R)
            return R;
        }
        return null;
      }
      return w(O);
    }
    function k(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(k);
          if (C === null || l(C))
            return !0;
          var O = y(C);
          if (O) {
            var j = O.call(C), F;
            if (O !== C.entries) {
              for (; !(F = j.next()).done; )
                if (!k(F.value))
                  return !1;
            } else
              for (; !(F = j.next()).done; ) {
                var D = F.value;
                if (D && !k(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(C, O) {
      return C === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function Q(C) {
      var O = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : M(O, C) ? "symbol" : O;
    }
    function q(C) {
      if (typeof C == "undefined" || C === null)
        return "" + C;
      var O = Q(C);
      if (O === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function me(C) {
      var O = q(C);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Z(C) {
      return !C.constructor || !C.constructor.name ? b : C.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, ar;
}
var sr, Hr;
function xo() {
  if (Hr) return sr;
  Hr = 1;
  var e = /* @__PURE__ */ Sr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, sr = function() {
    function n(a, l, f, d, h, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
  }, sr;
}
var Gr;
function Co() {
  if (Gr) return Rt.exports;
  if (Gr = 1, process.env.NODE_ENV !== "production") {
    var e = Pn(), t = !0;
    Rt.exports = /* @__PURE__ */ Eo()(e.isElement, t);
  } else
    Rt.exports = /* @__PURE__ */ xo()();
  return Rt.exports;
}
var To = /* @__PURE__ */ Co();
const p = /* @__PURE__ */ po(To);
function kn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = kn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Te() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = kn(e)) && (n && (n += " "), n += t);
  return n;
}
function Bt(e, t) {
  const r = S({}, t);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = S(S({}, e[o]), r[o]);
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = S({}, a);
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const f = l;
              r[o][f] = Bt(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Er(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", l = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (l === !0 ? "" : " ") + t(d), l = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function Ue(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function wo(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function xr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), wo(e, t, r);
}
function Oo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function He(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return He(Oo(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ue(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ue(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ro = (e) => {
  const t = He(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, mt = (e, t) => {
  try {
    return Ro(e);
  } catch (r) {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Vt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function An(e) {
  e = He(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, h = (d + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let l = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", f.push(t[3])), Vt({
    type: l,
    values: f
  });
}
function pr(e) {
  e = He(e);
  let t = e.type === "hsl" || e.type === "hsla" ? He(An(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : Le((r + 0.055) / 1.055, 2.4))), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function qr(e, t) {
  const r = pr(e), n = pr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ot(e, t) {
  return e = He(e), t = xr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vt(e);
}
function Pt(e, t, r) {
  try {
    return ot(e, t);
  } catch (n) {
    return e;
  }
}
function Cr(e, t) {
  if (e = He(e), t = xr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Vt(e);
}
function ae(e, t, r) {
  try {
    return Cr(e, t);
  } catch (n) {
    return e;
  }
}
function Tr(e, t) {
  if (e = He(e), t = xr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Vt(e);
}
function se(e, t, r) {
  try {
    return Tr(e, t);
  } catch (n) {
    return e;
  }
}
function $o(e, t = 0.15) {
  return pr(e) > 0.5 ? Cr(e, t) : Tr(e, t);
}
function _t(e, t, r) {
  try {
    return $o(e, t);
  } catch (n) {
    return e;
  }
}
function Mn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var kt = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Po() {
  if (Kr) return oe;
  Kr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function v(u) {
    if (typeof u == "object" && u !== null) {
      var w = u.$$typeof;
      switch (w) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case l:
                case y:
                case h:
                  return u;
                case i:
                  return u;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = a, oe.Element = e, oe.ForwardRef = l, oe.Fragment = r, oe.Lazy = y, oe.Memo = h, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = f, oe.SuspenseList = d, oe.isContextConsumer = function(u) {
    return v(u) === i;
  }, oe.isContextProvider = function(u) {
    return v(u) === a;
  }, oe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, oe.isForwardRef = function(u) {
    return v(u) === l;
  }, oe.isFragment = function(u) {
    return v(u) === r;
  }, oe.isLazy = function(u) {
    return v(u) === y;
  }, oe.isMemo = function(u) {
    return v(u) === h;
  }, oe.isPortal = function(u) {
    return v(u) === t;
  }, oe.isProfiler = function(u) {
    return v(u) === o;
  }, oe.isStrictMode = function(u) {
    return v(u) === n;
  }, oe.isSuspense = function(u) {
    return v(u) === f;
  }, oe.isSuspenseList = function(u) {
    return v(u) === d;
  }, oe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === f || u === d || u === b || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === h || u.$$typeof === a || u.$$typeof === i || u.$$typeof === l || u.$$typeof === x || u.getModuleId !== void 0);
  }, oe.typeOf = v, oe;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function _o() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var w = u.$$typeof;
        switch (w) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case d:
              case h:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case f:
                  case b:
                  case y:
                    return u;
                  case a:
                    return u;
                  default:
                    return w;
                }
            }
          case r:
            return w;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v = Symbol.for("react.client.reference");
    ie.ContextConsumer = a, ie.ContextProvider = l, ie.Element = t, ie.ForwardRef = f, ie.Fragment = n, ie.Lazy = b, ie.Memo = y, ie.Portal = r, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = d, ie.SuspenseList = h, ie.isContextConsumer = function(u) {
      return e(u) === a;
    }, ie.isContextProvider = function(u) {
      return e(u) === l;
    }, ie.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, ie.isForwardRef = function(u) {
      return e(u) === f;
    }, ie.isFragment = function(u) {
      return e(u) === n;
    }, ie.isLazy = function(u) {
      return e(u) === b;
    }, ie.isMemo = function(u) {
      return e(u) === y;
    }, ie.isPortal = function(u) {
      return e(u) === r;
    }, ie.isProfiler = function(u) {
      return e(u) === i;
    }, ie.isStrictMode = function(u) {
      return e(u) === o;
    }, ie.isSuspense = function(u) {
      return e(u) === d;
    }, ie.isSuspenseList = function(u) {
      return e(u) === h;
    }, ie.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === d || u === h || u === x || typeof u == "object" && u !== null && (u.$$typeof === b || u.$$typeof === y || u.$$typeof === l || u.$$typeof === a || u.$$typeof === f || u.$$typeof === v || u.getModuleId !== void 0);
    }, ie.typeOf = e;
  }()), ie;
}
var Jr;
function ko() {
  return Jr || (Jr = 1, process.env.NODE_ENV === "production" ? kt.exports = /* @__PURE__ */ Po() : kt.exports = /* @__PURE__ */ _o()), kt.exports;
}
var Dt = /* @__PURE__ */ ko();
function De(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function In(e) {
  if (/* @__PURE__ */ V.isValidElement(e) || Dt.isValidElementType(e) || !De(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = In(e[r]);
  }), t;
}
function Oe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? S({}, e) : e;
  return De(e) && De(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ V.isValidElement(t[o]) || Dt.isValidElementType(t[o]) ? n[o] = t[o] : De(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && De(e[o]) ? n[o] = Oe(e[o], t[o], r) : r.clone ? n[o] = De(t[o]) ? In(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Ao(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Mo(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window == "undefined")
    return null;
  let l;
  return typeof i == "function" && !Ao(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Io = Mn(p.elementType, Mo);
function Nn(e, t = "") {
  return e.displayName || e.name || t;
}
function Qr(e, t, r) {
  const n = Nn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function No(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Nn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Dt.ForwardRef:
          return Qr(e, e.render, "ForwardRef");
        case Dt.Memo:
          return Qr(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Bo = p.oneOfType([p.func, p.object]);
function ve(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ue(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Do(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const jo = typeof window != "undefined" ? V.useLayoutEffect : V.useEffect;
let Zr = 0;
function Fo(e) {
  const [t, r] = V.useState(e), n = e || t;
  return V.useEffect(() => {
    t == null && (Zr += 1, r(`mui-${Zr}`));
  }, [t]), n;
}
const zo = S({}, V), en = zo.useId;
function Vo(e) {
  if (en !== void 0) {
    const t = en();
    return e != null ? e : t;
  }
  return Fo(e);
}
function It(e) {
  const t = V.useRef(e);
  return jo(() => {
    t.current = e;
  }), V.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function tn(...e) {
  return V.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Do(r, t);
    });
  }, e);
}
const rn = {};
function Bn(e, t) {
  const r = V.useRef(rn);
  return r.current === rn && (r.current = e(t)), r;
}
const Lo = [];
function Wo(e) {
  V.useEffect(e, Lo);
}
class wr {
  constructor() {
    ut(this, "currentId", null);
    ut(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ut(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new wr();
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
function Yo() {
  const e = Bn(wr.create).current;
  return Wo(e.disposeEffect), e;
}
function nn(e) {
  try {
    return e.matches(":focus-visible");
  } catch (t) {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const on = (e) => e, Uo = () => {
  let e = on;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = on;
    }
  };
}, Ho = Uo(), Go = {
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
function vt(e, t, r = "Mui") {
  const n = Go[t];
  return n ? `${r}-${n}` : `${Ho.generate(e)}-${t}`;
}
function Lt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = vt(e, o, r);
  }), n;
}
function ht(e, t) {
  return t ? Oe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ge = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function qo(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, l;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((l = o.match(i)) == null ? void 0 : l[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, S({}, t)) : t;
}
function Ko(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Xo(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ue(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Jo(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...l) => t(e.breakpoints.up(...l), a), i.down = (...l) => t(e.breakpoints.down(...l), a), i.between = (...l) => t(e.breakpoints.between(...l), a), i.only = (...l) => t(e.breakpoints.only(...l), a), i.not = (...l) => {
      const f = t(e.breakpoints.not(...l), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), ne(S({}, e), {
    containerQueries: o
  });
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
}, an = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wt[e]}px)`
}, Qo = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Wt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function je(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || an;
    return t.reduce((a, l, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || an;
    return Object.keys(t).reduce((a, l) => {
      if (Ko(i.keys, l)) {
        const f = Xo(n.containerQueries ? n : Qo, l);
        f && (a[f] = r(t[l], l));
      } else if (Object.keys(i.values || Wt).includes(l)) {
        const f = i.up(l);
        a[f] = r(t[l], l);
      } else {
        const f = l;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Zo(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ei(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Yt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function jt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Yt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ge(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], f = a.theme, d = Yt(f, n) || {};
    return je(a, l, (y) => {
      let b = jt(d, o, y);
      return y === b && typeof y == "string" && (b = jt(d, o, `${t}${y === "default" ? "" : ve(y)}`, y)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ge
  } : {}, i.filterProps = [t], i;
}
function ti(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ri = {
  m: "margin",
  p: "padding"
}, ni = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, sn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, oi = ti((e) => {
  if (e.length > 2)
    if (sn[e])
      e = sn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ri[t], o = ni[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ut = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ht = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ii = [...Ut, ...Ht];
function St(e, t, r, n) {
  var i;
  const o = (i = Yt(e, t, !0)) != null ? i : r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const l = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(l) ? l > o.length - 1 && console.error([`MUI: The value provided (${l}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${l} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const f = o[l];
    return a >= 0 ? f : typeof f == "number" ? -f : `-${f}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Or(e) {
  return St(e, "spacing", 8, "spacing");
}
function Et(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ai(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Et(t, r), n), {});
}
function si(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = oi(r), i = ai(o, n), a = e[r];
  return je(e, a, i);
}
function Dn(e, t) {
  const r = Or(e.theme);
  return Object.keys(e).map((n) => si(e, t, n, r)).reduce(ht, {});
}
function de(e) {
  return Dn(e, Ut);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Ut.reduce((e, t) => (e[t] = Ge, e), {}) : {};
de.filterProps = Ut;
function pe(e) {
  return Dn(e, Ht);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? Ht.reduce((e, t) => (e[t] = Ge, e), {}) : {};
pe.filterProps = Ht;
process.env.NODE_ENV !== "production" && ii.reduce((e, t) => (e[t] = Ge, e), {});
function Gt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? ht(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Pe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function _e(e, t) {
  return ge({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const li = _e("border", Pe), ci = _e("borderTop", Pe), ui = _e("borderRight", Pe), fi = _e("borderBottom", Pe), di = _e("borderLeft", Pe), pi = _e("borderColor"), mi = _e("borderTopColor"), gi = _e("borderRightColor"), hi = _e("borderBottomColor"), yi = _e("borderLeftColor"), bi = _e("outline", Pe), vi = _e("outlineColor"), qt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = St(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Et(t, n)
    });
    return je(e, e.borderRadius, r);
  }
  return null;
};
qt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ge
} : {};
qt.filterProps = ["borderRadius"];
Gt(li, ci, ui, fi, di, pi, mi, gi, hi, yi, qt, bi, vi);
const Kt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = St(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Et(t, n)
    });
    return je(e, e.gap, r);
  }
  return null;
};
Kt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ge
} : {};
Kt.filterProps = ["gap"];
const Xt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = St(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Et(t, n)
    });
    return je(e, e.columnGap, r);
  }
  return null;
};
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ge
} : {};
Xt.filterProps = ["columnGap"];
const Jt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = St(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Et(t, n)
    });
    return je(e, e.rowGap, r);
  }
  return null;
};
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ge
} : {};
Jt.filterProps = ["rowGap"];
const Si = ge({
  prop: "gridColumn"
}), Ei = ge({
  prop: "gridRow"
}), xi = ge({
  prop: "gridAutoFlow"
}), Ci = ge({
  prop: "gridAutoColumns"
}), Ti = ge({
  prop: "gridAutoRows"
}), wi = ge({
  prop: "gridTemplateColumns"
}), Oi = ge({
  prop: "gridTemplateRows"
}), Ri = ge({
  prop: "gridTemplateAreas"
}), $i = ge({
  prop: "gridArea"
});
Gt(Kt, Xt, Jt, Si, Ei, xi, Ci, Ti, wi, Oi, Ri, $i);
function at(e, t) {
  return t === "grey" ? t : e;
}
const Pi = ge({
  prop: "color",
  themeKey: "palette",
  transform: at
}), _i = ge({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: at
}), ki = ge({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: at
});
Gt(Pi, _i, ki);
function we(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ai = ge({
  prop: "width",
  transform: we
}), Rr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, l, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Wt[r];
      return n ? ((f = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: we(r)
      };
    };
    return je(e, e.maxWidth, t);
  }
  return null;
};
Rr.filterProps = ["maxWidth"];
const Mi = ge({
  prop: "minWidth",
  transform: we
}), Ii = ge({
  prop: "height",
  transform: we
}), Ni = ge({
  prop: "maxHeight",
  transform: we
}), Bi = ge({
  prop: "minHeight",
  transform: we
});
ge({
  prop: "size",
  cssProperty: "width",
  transform: we
});
ge({
  prop: "size",
  cssProperty: "height",
  transform: we
});
const Di = ge({
  prop: "boxSizing"
});
Gt(Ai, Rr, Mi, Ii, Ni, Bi, Di);
const Qt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Pe
  },
  borderTop: {
    themeKey: "borders",
    transform: Pe
  },
  borderRight: {
    themeKey: "borders",
    transform: Pe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Pe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Pe
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
    transform: Pe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: at
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: at
  },
  backgroundColor: {
    themeKey: "palette",
    transform: at
  },
  // spacing
  p: {
    style: pe
  },
  pt: {
    style: pe
  },
  pr: {
    style: pe
  },
  pb: {
    style: pe
  },
  pl: {
    style: pe
  },
  px: {
    style: pe
  },
  py: {
    style: pe
  },
  padding: {
    style: pe
  },
  paddingTop: {
    style: pe
  },
  paddingRight: {
    style: pe
  },
  paddingBottom: {
    style: pe
  },
  paddingLeft: {
    style: pe
  },
  paddingX: {
    style: pe
  },
  paddingY: {
    style: pe
  },
  paddingInline: {
    style: pe
  },
  paddingInlineStart: {
    style: pe
  },
  paddingInlineEnd: {
    style: pe
  },
  paddingBlock: {
    style: pe
  },
  paddingBlockStart: {
    style: pe
  },
  paddingBlockEnd: {
    style: pe
  },
  m: {
    style: de
  },
  mt: {
    style: de
  },
  mr: {
    style: de
  },
  mb: {
    style: de
  },
  ml: {
    style: de
  },
  mx: {
    style: de
  },
  my: {
    style: de
  },
  margin: {
    style: de
  },
  marginTop: {
    style: de
  },
  marginRight: {
    style: de
  },
  marginBottom: {
    style: de
  },
  marginLeft: {
    style: de
  },
  marginX: {
    style: de
  },
  marginY: {
    style: de
  },
  marginInline: {
    style: de
  },
  marginInlineStart: {
    style: de
  },
  marginInlineEnd: {
    style: de
  },
  marginBlock: {
    style: de
  },
  marginBlockStart: {
    style: de
  },
  marginBlockEnd: {
    style: de
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
    style: Kt
  },
  rowGap: {
    style: Jt
  },
  columnGap: {
    style: Xt
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
    style: Rr
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
function ji(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Fi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zi() {
  function e(r, n, o, i) {
    const a = {
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
      style: y
    } = l;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = Yt(o, d) || {};
    return y ? y(a) : je(a, n, (v) => {
      let u = jt(b, h, v);
      return v === u && typeof v == "string" && (u = jt(b, h, `${r}${v === "default" ? "" : ve(v)}`, v)), f === !1 ? u : {
        [f]: u
      };
    });
  }
  function t(r) {
    var l;
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = (l = o.unstable_sxConfig) != null ? l : Qt;
    function a(f) {
      let d = f;
      if (typeof f == "function")
        d = f(o);
      else if (typeof f != "object")
        return f;
      if (!d)
        return null;
      const h = Zo(o.breakpoints), y = Object.keys(h);
      let b = h;
      return Object.keys(d).forEach((x) => {
        const v = Fi(d[x], o);
        if (v != null)
          if (typeof v == "object")
            if (i[x])
              b = ht(b, e(x, v, o, i));
            else {
              const u = je({
                theme: o
              }, v, (w) => ({
                [x]: w
              }));
              ji(u, v) ? b[x] = t({
                sx: v,
                theme: o
              }) : b = ht(b, u);
            }
          else
            b = ht(b, e(x, v, o, i));
      }), qo(o, ei(y, b));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const st = zi();
st.filterProps = ["sx"];
function Vi(e) {
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
var Li = {
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
function Wi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Yi = /[A-Z]|^ms/g, Ui = /_EMO_([^_]+?)_([^]*?)_EMO_/g, jn = function(t) {
  return t.charCodeAt(1) === 45;
}, ln = function(t) {
  return t != null && typeof t != "boolean";
}, lr = /* @__PURE__ */ Wi(function(e) {
  return jn(e) ? e : e.replace(Yi, "-$&").toLowerCase();
}), cn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ui, function(n, o, i) {
          return Ye = {
            name: o,
            styles: i,
            next: Ye
          }, o;
        });
  }
  return Li[t] !== 1 && !jn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ft(e, t, r) {
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
        return Ye = {
          name: o.name,
          styles: o.styles,
          next: Ye
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ye = {
              name: a.name,
              styles: a.styles,
              next: Ye
            }, a = a.next;
        var l = i.styles + ";";
        return l;
      }
      return Hi(e, t, r);
    }
  }
  var f = r;
  return f;
}
function Hi(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ft(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var l = a;
        ln(l) && (n += lr(i) + ":" + cn(i, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var f = 0; f < a.length; f++)
          ln(a[f]) && (n += lr(i) + ":" + cn(i, a[f]) + ";");
      else {
        var d = Ft(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += lr(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var un = /label:\s*([^\s;{]+)\s*(;|$)/g, Ye;
function Gi(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ye = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Ft(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Ft(r, t, e[l]), n) {
      var f = i;
      o += f[l];
    }
  un.lastIndex = 0;
  for (var d = "", h; (h = un.exec(o)) !== null; )
    d += "-" + h[1];
  var y = Vi(o) + d;
  return {
    name: y,
    styles: o,
    next: Ye
  };
}
/**
 * @mui/styled-engine v6.4.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qi(e, t) {
  const r = co(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ki(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const fn = [];
function dn(e) {
  return fn[0] = e, Gi(fn);
}
const Xi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ne(S({}, r), {
    [n.key]: n.val
  }), {});
};
function Ji(e) {
  const b = e, {
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
    step: n = 5
  } = b, o = fe(b, [
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    "values",
    "unit",
    "step"
  ]), i = Xi(t), a = Object.keys(i);
  function l(x) {
    return `@media (min-width:${typeof t[x] == "number" ? t[x] : x}${r})`;
  }
  function f(x) {
    return `@media (max-width:${(typeof t[x] == "number" ? t[x] : x) - n / 100}${r})`;
  }
  function d(x, v) {
    const u = a.indexOf(v);
    return `@media (min-width:${typeof t[x] == "number" ? t[x] : x}${r}) and (max-width:${(u !== -1 && typeof t[a[u]] == "number" ? t[a[u]] : v) - n / 100}${r})`;
  }
  function h(x) {
    return a.indexOf(x) + 1 < a.length ? d(x, a[a.indexOf(x) + 1]) : l(x);
  }
  function y(x) {
    const v = a.indexOf(x);
    return v === 0 ? l(a[1]) : v === a.length - 1 ? f(a[v]) : d(x, a[a.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return S({
    keys: a,
    values: i,
    up: l,
    down: f,
    between: d,
    only: h,
    not: y,
    unit: r
  }, o);
}
const Qi = {
  borderRadius: 4
};
function Fn(e = 8, t = Or({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Zi(e, t) {
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
function zn(e = {}, ...t) {
  const h = e, {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = h, a = fe(h, [
    "breakpoints",
    "palette",
    "spacing",
    "shape"
  ]), l = Ji(r), f = Fn(o);
  let d = Oe({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: S({
      mode: "light"
    }, n),
    spacing: f,
    shape: S(S({}, Qi), i)
  }, a);
  return d = Jo(d), d.applyStyles = Zi, d = t.reduce((y, b) => Oe(y, b), d), d.unstable_sxConfig = S(S({}, Qt), a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(b) {
    return st({
      sx: b,
      theme: this
    });
  }, d;
}
function Vn(e) {
  const o = e, {
    variants: t
  } = o, r = fe(o, [
    "variants"
  ]), n = {
    variants: t,
    style: dn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = dn(i.style));
  }), n;
}
const ea = zn();
function cr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ta(e) {
  return e ? (t, r) => r[e] : null;
}
function ra(e, t, r) {
  e.theme = aa(e.theme) ? r : e.theme[t] || e.theme;
}
function Nt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Nt(e, o));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = r.style;
    else {
      const n = r, {
        variants: i
      } = n;
      o = fe(n, [
        "variants"
      ]);
    }
    return Ln(e, r.variants, [o]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Ln(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n != null || (n = ne(S(S({}, e), e.ownerState), {
        ownerState: e.ownerState
      })), !a.props(n))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((o = e.ownerState) == null ? void 0 : o[l]) !== a.props[l])
          continue e;
    typeof a.style == "function" ? (n != null || (n = ne(S(S({}, e), e.ownerState), {
      ownerState: e.ownerState
    })), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function na(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ea,
    rootShouldForwardProp: n = cr,
    slotShouldForwardProp: o = cr
  } = e;
  function i(l) {
    ra(l, t, r);
  }
  return (l, f = {}) => {
    Ki(l, (A) => A.filter((N) => N !== st));
    const g = f, {
      name: d,
      slot: h,
      skipVariantsResolver: y,
      skipSx: b,
      overridesResolver: x = ta(Wn(h))
    } = g, v = fe(g, [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      "overridesResolver"
    ]), u = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), w = b || !1;
    let P = cr;
    h === "Root" || h === "root" ? P = n : h ? P = o : sa(l) && (P = void 0);
    const I = qi(l, S({
      shouldForwardProp: P,
      label: ia(d, h)
    }, v)), B = (A) => {
      if (typeof A == "function" && A.__emotion_real !== A)
        return function(X) {
          return Nt(X, A);
        };
      if (De(A)) {
        const N = Vn(A);
        return N.variants ? function(J) {
          return Nt(J, N);
        } : N.style;
      }
      return A;
    }, $ = (...A) => {
      const N = [], X = A.map(B), J = [];
      if (N.push(i), d && x && J.push(function(T) {
        var q, me;
        const M = (me = (q = T.theme.components) == null ? void 0 : q[d]) == null ? void 0 : me.styleOverrides;
        if (!M)
          return null;
        const Q = {};
        for (const Z in M)
          Q[Z] = Nt(T, M[Z]);
        return x(T, Q);
      }), d && !u && J.push(function(T) {
        var Q, q;
        const k = T.theme, M = (q = (Q = k == null ? void 0 : k.components) == null ? void 0 : Q[d]) == null ? void 0 : q.variants;
        return M ? Ln(T, M) : null;
      }), w || J.push(st), Array.isArray(X[0])) {
        const s = X.shift(), T = new Array(N.length).fill(""), k = new Array(J.length).fill("");
        let M;
        M = [...T, ...s, ...k], M.raw = [...T, ...s.raw, ...k], N.unshift(M);
      }
      const le = [...N, ...X, ...J], Y = I(...le);
      return l.muiName && (Y.muiName = l.muiName), process.env.NODE_ENV !== "production" && (Y.displayName = oa(d, h, l)), Y;
    };
    return I.withConfig && ($.withConfig = I.withConfig), $;
  };
}
function oa(e, t, r) {
  return e ? `${e}${ve(t || "")}` : `Styled(${No(r)})`;
}
function ia(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Wn(t || "Root")}`), r;
}
function aa(e) {
  for (const t in e)
    return !1;
  return !0;
}
function sa(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Wn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const la = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (p.node, p.object);
function ca(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Bt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Bt(o, n) : n;
}
function ua({
  props: e,
  name: t
}) {
  const r = V.useContext(la);
  return ca({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const pn = {
  theme: void 0
};
function fa(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (pn.theme = o.theme, i = Vn(e(pn)), t = i, r = o.theme), i;
  };
}
function da(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const mn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, pa = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([l, f]) => {
      (!r || r && !r([...i, l])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, l], Array.isArray(f) ? [...a, l] : a) : t([...i, l], f, a));
    });
  }
  n(e);
}, ma = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ur(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return pa(
    e,
    (l, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(l, f))) {
        const h = `--${r ? `${r}-` : ""}${l.join("-")}`, y = ma(l, f);
        Object.assign(o, {
          [h]: y
        }), mn(i, l, `var(${h})`, d), mn(a, l, `var(${h}, ${y})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function ga(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, B = e, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: l = "light"
  } = B, f = fe(B, [
    "colorSchemes",
    "components",
    "defaultColorScheme"
  ]), {
    vars: d,
    css: h,
    varsWithDefaults: y
  } = ur(f, t);
  let b = y;
  const x = {}, $ = i, {
    [l]: v
  } = $, u = fe($, [
    wt(l)
  ]);
  if (Object.entries(u || {}).forEach(([g, A]) => {
    const {
      vars: N,
      css: X,
      varsWithDefaults: J
    } = ur(A, t);
    b = Oe(b, J), x[g] = {
      css: X,
      vars: N
    };
  }), v) {
    const {
      css: g,
      vars: A,
      varsWithDefaults: N
    } = ur(v, t);
    b = Oe(b, N), x[l] = {
      css: g,
      vars: A
    };
  }
  function w(g, A) {
    var X, J;
    let N = o;
    if (o === "class" && (N = ".%s"), o === "data" && (N = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (N = `[${o}="%s"]`), g) {
      if (N === "media")
        return e.defaultColorScheme === g ? ":root" : {
          [`@media (prefers-color-scheme: ${((J = (X = i[g]) == null ? void 0 : X.palette) == null ? void 0 : J.mode) || g})`]: {
            ":root": A
          }
        };
      if (N)
        return e.defaultColorScheme === g ? `:root, ${N.replace("%s", String(g))}` : N.replace("%s", String(g));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let g = S({}, d);
      return Object.entries(x).forEach(([, {
        vars: A
      }]) => {
        g = Oe(g, A);
      }), g;
    },
    generateStyleSheets: () => {
      var Y, s;
      const g = [], A = e.defaultColorScheme || "light";
      function N(T, k) {
        Object.keys(k).length && g.push(typeof T == "string" ? {
          [T]: S({}, k)
        } : T);
      }
      N(r(void 0, S({}, h)), h);
      const le = x, {
        [A]: X
      } = le, J = fe(le, [
        wt(A)
      ]);
      if (X) {
        const {
          css: T
        } = X, k = (s = (Y = i[A]) == null ? void 0 : Y.palette) == null ? void 0 : s.mode, M = S(!n && k ? {
          colorScheme: k
        } : {}, T);
        N(r(A, S({}, M)), M);
      }
      return Object.entries(J).forEach(([T, {
        css: k
      }]) => {
        var q, me;
        const M = (me = (q = i[T]) == null ? void 0 : q.palette) == null ? void 0 : me.mode, Q = S(!n && M ? {
          colorScheme: M
        } : {}, k);
        N(r(T, S({}, Q)), Q);
      }), g;
    }
  };
}
function ha(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const yt = {
  black: "#000",
  white: "#fff"
}, ya = {
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
}, Ze = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, et = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, pt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, tt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, rt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, nt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Yn() {
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
      paper: yt.white,
      default: yt.white
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
const ba = Yn();
function Un() {
  return {
    text: {
      primary: yt.white,
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
      active: yt.white,
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
const gn = Un();
function hn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Tr(e.main, o) : t === "dark" && (e.dark = Cr(e.main, i)));
}
function va(e = "light") {
  return e === "dark" ? {
    main: tt[200],
    light: tt[50],
    dark: tt[400]
  } : {
    main: tt[700],
    light: tt[400],
    dark: tt[800]
  };
}
function Sa(e = "light") {
  return e === "dark" ? {
    main: Ze[200],
    light: Ze[50],
    dark: Ze[400]
  } : {
    main: Ze[500],
    light: Ze[300],
    dark: Ze[700]
  };
}
function Ea(e = "light") {
  return e === "dark" ? {
    main: et[500],
    light: et[300],
    dark: et[700]
  } : {
    main: et[700],
    light: et[400],
    dark: et[800]
  };
}
function xa(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: rt[700],
    light: rt[500],
    dark: rt[900]
  };
}
function Ca(e = "light") {
  return e === "dark" ? {
    main: nt[400],
    light: nt[300],
    dark: nt[700]
  } : {
    main: nt[800],
    light: nt[500],
    dark: nt[900]
  };
}
function Ta(e = "light") {
  return e === "dark" ? {
    main: pt[400],
    light: pt[300],
    dark: pt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: pt[500],
    dark: pt[900]
  };
}
function $r(e) {
  const u = e, {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = u, o = fe(u, [
    "mode",
    "contrastThreshold",
    "tonalOffset"
  ]), i = e.primary || va(t), a = e.secondary || Sa(t), l = e.error || Ea(t), f = e.info || xa(t), d = e.success || Ca(t), h = e.warning || Ta(t);
  function y(w) {
    const P = qr(w, gn.text.primary) >= r ? gn.text.primary : ba.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = qr(w, P);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${P} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return P;
  }
  const b = ({
    color: w,
    name: P,
    mainShade: I = 500,
    lightShade: B = 300,
    darkShade: $ = 700
  }) => {
    if (w = S({}, w), !w.main && w[I] && (w.main = w[I]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${P ? ` (${P})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : Ue(11, P ? ` (${P})` : "", I));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${P ? ` (${P})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ue(12, P ? ` (${P})` : "", JSON.stringify(w.main)));
    return hn(w, "light", B, n), hn(w, "dark", $, n), w.contrastText || (w.contrastText = y(w.main)), w;
  };
  let x;
  return t === "light" ? x = Yn() : t === "dark" && (x = Un()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Oe(S({
    // A collection of common colors.
    common: S({}, yt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: ya,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, x), o);
}
function wa(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Oa(e, t) {
  return S({
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
  }, t);
}
function Ra(e) {
  return Math.round(e * 1e5) / 1e5;
}
const yn = {
  textTransform: "uppercase"
}, bn = '"Roboto", "Helvetica", "Arial", sans-serif';
function $a(e, t) {
  const w = typeof t == "function" ? t(e) : t, {
    fontFamily: r = bn,
    fontSize: n = 14,
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    htmlFontSize: f = 16,
    allVariants: d,
    pxToRem: h
  } = w, y = fe(w, [
    "fontFamily",
    // The default font size of the Material Specification.
    "fontSize",
    // px
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    "htmlFontSize",
    // Apply the CSS properties to all the variants.
    "allVariants",
    "pxToRem"
  ]);
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, x = h || ((P) => `${P / f * b}rem`), v = (P, I, B, $, g) => S(S(S({
    fontFamily: r,
    fontWeight: P,
    fontSize: x(I),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: B
  }, r === bn ? {
    letterSpacing: `${Ra($ / I)}em`
  } : {}), g), d), u = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, yn),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, yn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Oe(S({
    htmlFontSize: f,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: l
  }, u), y, {
    clone: !1
    // No need to clone deep
  });
}
const Pa = 0.2, _a = 0.14, ka = 0.12;
function ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Pa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_a})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ka})`].join(",");
}
const Aa = ["none", ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ma = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ia = {
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
function vn(e) {
  return `${Math.round(e)}ms`;
}
function Na(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * Le(t, 0.25) + t / 5) * 10), 3e3);
}
function Ba(e) {
  const t = S(S({}, Ma), e.easing), r = S(S({}, Ia), e.duration);
  return ne(S({
    getAutoHeightDuration: Na,
    create: (o = ["all"], i = {}) => {
      const h = i, {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: f = 0
      } = h, d = fe(h, [
        "duration",
        "easing",
        "delay"
      ]);
      if (process.env.NODE_ENV !== "production") {
        const y = (x) => typeof x == "string", b = (x) => !Number.isNaN(parseFloat(x));
        !y(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !b(a) && !y(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), y(l) || console.error('MUI: Argument "easing" must be a string.'), !b(f) && !y(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((y) => `${y} ${typeof a == "string" ? a : vn(a)} ${l} ${typeof f == "string" ? f : vn(f)}`).join(",");
    }
  }, e), {
    easing: t,
    duration: r
  });
}
const Da = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ja(e) {
  return De(e) || typeof e == "undefined" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Hn(e = {}) {
  const t = S({}, e);
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, l] = o[i];
      !ja(l) || a.startsWith("unstable_") ? delete n[a] : De(l) && (n[a] = S({}, l), r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function mr(e = {}, ...t) {
  const x = e, {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: l = {},
    shape: f
  } = x, d = fe(x, [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape"
  ]);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ue(20));
  const h = $r(i), y = zn(e);
  let b = Oe(y, {
    mixins: Oa(y.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Aa.slice(),
    typography: $a(h, l),
    transitions: Ba(a),
    zIndex: S({}, Da)
  });
  if (b = Oe(b, d), b = t.reduce((v, u) => Oe(v, u), b), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (w, P) => {
      let I;
      for (I in w) {
        const B = w[I];
        if (v.includes(I) && Object.keys(B).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const $ = vt("", I);
            console.error([`MUI: The \`${P}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(w, null, 2), "", `Instead, you need to use the '&.${$}' syntax:`, JSON.stringify({
              root: {
                [`&.${$}`]: B
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          w[I] = {};
        }
      }
    };
    Object.keys(b.components).forEach((w) => {
      const P = b.components[w].styleOverrides;
      P && w.startsWith("Mui") && u(P, w);
    });
  }
  return b.unstable_sxConfig = S(S({}, Qt), d == null ? void 0 : d.unstable_sxConfig), b.unstable_sx = function(u) {
    return st({
      sx: u,
      theme: this
    });
  }, b.toRuntimeSource = Hn, b;
}
function Fa(e) {
  let t;
  return e < 1 ? t = 5.11916 * Le(e, 2) : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const za = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Fa(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Gn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function qn(e) {
  return e === "dark" ? za : [];
}
function Va(e) {
  const a = e, {
    palette: t = {
      mode: "light"
    },
    opacity: r,
    overlays: n
  } = a, o = fe(a, [
    "palette",
    // need to cast to avoid module augmentation test
    "opacity",
    "overlays"
  ]), i = $r(t);
  return S({
    palette: i,
    opacity: S(S({}, Gn(i.mode)), r),
    overlays: n || qn(i.mode)
  }, o);
}
function La(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Wa = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ya = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Wa(e.cssVarPrefix).forEach((l) => {
        a[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: S(S({}, r), a)
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
function Ua(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function m(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function gt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : An(e);
}
function Ne(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = mt(gt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ha(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ae = (e) => {
  try {
    return e();
  } catch (t) {
  }
}, Ga = (e = "mui") => da(e);
function fr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Va(ne(S({}, t), {
      palette: S({
        mode: o
      }, t == null ? void 0 : t.palette)
    }));
    return;
  }
  const l = mr(ne(S({}, r), {
    palette: S({
      mode: o
    }, t == null ? void 0 : t.palette)
  })), {
    palette: i
  } = l, a = fe(l, [
    "palette"
  ]);
  return e[n] = ne(S({}, t), {
    palette: i,
    opacity: S(S({}, Gn(o)), t == null ? void 0 : t.opacity),
    overlays: (t == null ? void 0 : t.overlays) || qn(o)
  }), a;
}
function qa(e = {}, ...t) {
  const J = e, {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = La,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root"
  } = J, d = fe(J, [
    "colorSchemes",
    "defaultColorScheme",
    "disableCssColorScheme",
    "cssVarPrefix",
    "shouldSkipGeneratingVar",
    "colorSchemeSelector",
    "rootSelector"
  ]), h = Object.keys(r)[0], y = n || (r.light && h !== "light" ? "light" : h), b = Ga(i), le = r, {
    [y]: x,
    light: v,
    dark: u
  } = le, w = fe(le, [
    wt(y),
    "light",
    "dark"
  ]), P = S({}, w);
  let I = x;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (I = !0), !I)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : Ue(21, y));
  const B = fr(P, I, d, y);
  v && !P.light && fr(P, v, void 0, "light"), u && !P.dark && fr(P, u, void 0, "dark");
  let $ = ne(S({
    defaultColorScheme: y
  }, B), {
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: f,
    getCssVar: b,
    colorSchemes: P,
    font: S(S({}, wa(B.typography)), B.font),
    spacing: Ha(d.spacing)
  });
  Object.keys($.colorSchemes).forEach((Y) => {
    const s = $.colorSchemes[Y].palette, T = (k) => {
      const M = k.split("-"), Q = M[1], q = M[2];
      return b(k, s[Q][q]);
    };
    if (s.mode === "light" && (m(s.common, "background", "#fff"), m(s.common, "onBackground", "#000")), s.mode === "dark" && (m(s.common, "background", "#000"), m(s.common, "onBackground", "#fff")), Ua(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      m(s.Alert, "errorColor", ae(s.error.light, 0.6)), m(s.Alert, "infoColor", ae(s.info.light, 0.6)), m(s.Alert, "successColor", ae(s.success.light, 0.6)), m(s.Alert, "warningColor", ae(s.warning.light, 0.6)), m(s.Alert, "errorFilledBg", T("palette-error-main")), m(s.Alert, "infoFilledBg", T("palette-info-main")), m(s.Alert, "successFilledBg", T("palette-success-main")), m(s.Alert, "warningFilledBg", T("palette-warning-main")), m(s.Alert, "errorFilledColor", Ae(() => s.getContrastText(s.error.main))), m(s.Alert, "infoFilledColor", Ae(() => s.getContrastText(s.info.main))), m(s.Alert, "successFilledColor", Ae(() => s.getContrastText(s.success.main))), m(s.Alert, "warningFilledColor", Ae(() => s.getContrastText(s.warning.main))), m(s.Alert, "errorStandardBg", se(s.error.light, 0.9)), m(s.Alert, "infoStandardBg", se(s.info.light, 0.9)), m(s.Alert, "successStandardBg", se(s.success.light, 0.9)), m(s.Alert, "warningStandardBg", se(s.warning.light, 0.9)), m(s.Alert, "errorIconColor", T("palette-error-main")), m(s.Alert, "infoIconColor", T("palette-info-main")), m(s.Alert, "successIconColor", T("palette-success-main")), m(s.Alert, "warningIconColor", T("palette-warning-main")), m(s.AppBar, "defaultBg", T("palette-grey-100")), m(s.Avatar, "defaultBg", T("palette-grey-400")), m(s.Button, "inheritContainedBg", T("palette-grey-300")), m(s.Button, "inheritContainedHoverBg", T("palette-grey-A100")), m(s.Chip, "defaultBorder", T("palette-grey-400")), m(s.Chip, "defaultAvatarColor", T("palette-grey-700")), m(s.Chip, "defaultIconColor", T("palette-grey-700")), m(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), m(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), m(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), m(s.LinearProgress, "primaryBg", se(s.primary.main, 0.62)), m(s.LinearProgress, "secondaryBg", se(s.secondary.main, 0.62)), m(s.LinearProgress, "errorBg", se(s.error.main, 0.62)), m(s.LinearProgress, "infoBg", se(s.info.main, 0.62)), m(s.LinearProgress, "successBg", se(s.success.main, 0.62)), m(s.LinearProgress, "warningBg", se(s.warning.main, 0.62)), m(s.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), m(s.Slider, "primaryTrack", se(s.primary.main, 0.62)), m(s.Slider, "secondaryTrack", se(s.secondary.main, 0.62)), m(s.Slider, "errorTrack", se(s.error.main, 0.62)), m(s.Slider, "infoTrack", se(s.info.main, 0.62)), m(s.Slider, "successTrack", se(s.success.main, 0.62)), m(s.Slider, "warningTrack", se(s.warning.main, 0.62));
      const k = _t(s.background.default, 0.8);
      m(s.SnackbarContent, "bg", k), m(s.SnackbarContent, "color", Ae(() => s.getContrastText(k))), m(s.SpeedDialAction, "fabHoverBg", _t(s.background.paper, 0.15)), m(s.StepConnector, "border", T("palette-grey-400")), m(s.StepContent, "border", T("palette-grey-400")), m(s.Switch, "defaultColor", T("palette-common-white")), m(s.Switch, "defaultDisabledColor", T("palette-grey-100")), m(s.Switch, "primaryDisabledColor", se(s.primary.main, 0.62)), m(s.Switch, "secondaryDisabledColor", se(s.secondary.main, 0.62)), m(s.Switch, "errorDisabledColor", se(s.error.main, 0.62)), m(s.Switch, "infoDisabledColor", se(s.info.main, 0.62)), m(s.Switch, "successDisabledColor", se(s.success.main, 0.62)), m(s.Switch, "warningDisabledColor", se(s.warning.main, 0.62)), m(s.TableCell, "border", se(Pt(s.divider, 1), 0.88)), m(s.Tooltip, "bg", Pt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      m(s.Alert, "errorColor", se(s.error.light, 0.6)), m(s.Alert, "infoColor", se(s.info.light, 0.6)), m(s.Alert, "successColor", se(s.success.light, 0.6)), m(s.Alert, "warningColor", se(s.warning.light, 0.6)), m(s.Alert, "errorFilledBg", T("palette-error-dark")), m(s.Alert, "infoFilledBg", T("palette-info-dark")), m(s.Alert, "successFilledBg", T("palette-success-dark")), m(s.Alert, "warningFilledBg", T("palette-warning-dark")), m(s.Alert, "errorFilledColor", Ae(() => s.getContrastText(s.error.dark))), m(s.Alert, "infoFilledColor", Ae(() => s.getContrastText(s.info.dark))), m(s.Alert, "successFilledColor", Ae(() => s.getContrastText(s.success.dark))), m(s.Alert, "warningFilledColor", Ae(() => s.getContrastText(s.warning.dark))), m(s.Alert, "errorStandardBg", ae(s.error.light, 0.9)), m(s.Alert, "infoStandardBg", ae(s.info.light, 0.9)), m(s.Alert, "successStandardBg", ae(s.success.light, 0.9)), m(s.Alert, "warningStandardBg", ae(s.warning.light, 0.9)), m(s.Alert, "errorIconColor", T("palette-error-main")), m(s.Alert, "infoIconColor", T("palette-info-main")), m(s.Alert, "successIconColor", T("palette-success-main")), m(s.Alert, "warningIconColor", T("palette-warning-main")), m(s.AppBar, "defaultBg", T("palette-grey-900")), m(s.AppBar, "darkBg", T("palette-background-paper")), m(s.AppBar, "darkColor", T("palette-text-primary")), m(s.Avatar, "defaultBg", T("palette-grey-600")), m(s.Button, "inheritContainedBg", T("palette-grey-800")), m(s.Button, "inheritContainedHoverBg", T("palette-grey-700")), m(s.Chip, "defaultBorder", T("palette-grey-700")), m(s.Chip, "defaultAvatarColor", T("palette-grey-300")), m(s.Chip, "defaultIconColor", T("palette-grey-300")), m(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), m(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), m(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), m(s.LinearProgress, "primaryBg", ae(s.primary.main, 0.5)), m(s.LinearProgress, "secondaryBg", ae(s.secondary.main, 0.5)), m(s.LinearProgress, "errorBg", ae(s.error.main, 0.5)), m(s.LinearProgress, "infoBg", ae(s.info.main, 0.5)), m(s.LinearProgress, "successBg", ae(s.success.main, 0.5)), m(s.LinearProgress, "warningBg", ae(s.warning.main, 0.5)), m(s.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), m(s.Slider, "primaryTrack", ae(s.primary.main, 0.5)), m(s.Slider, "secondaryTrack", ae(s.secondary.main, 0.5)), m(s.Slider, "errorTrack", ae(s.error.main, 0.5)), m(s.Slider, "infoTrack", ae(s.info.main, 0.5)), m(s.Slider, "successTrack", ae(s.success.main, 0.5)), m(s.Slider, "warningTrack", ae(s.warning.main, 0.5));
      const k = _t(s.background.default, 0.98);
      m(s.SnackbarContent, "bg", k), m(s.SnackbarContent, "color", Ae(() => s.getContrastText(k))), m(s.SpeedDialAction, "fabHoverBg", _t(s.background.paper, 0.15)), m(s.StepConnector, "border", T("palette-grey-600")), m(s.StepContent, "border", T("palette-grey-600")), m(s.Switch, "defaultColor", T("palette-grey-300")), m(s.Switch, "defaultDisabledColor", T("palette-grey-600")), m(s.Switch, "primaryDisabledColor", ae(s.primary.main, 0.55)), m(s.Switch, "secondaryDisabledColor", ae(s.secondary.main, 0.55)), m(s.Switch, "errorDisabledColor", ae(s.error.main, 0.55)), m(s.Switch, "infoDisabledColor", ae(s.info.main, 0.55)), m(s.Switch, "successDisabledColor", ae(s.success.main, 0.55)), m(s.Switch, "warningDisabledColor", ae(s.warning.main, 0.55)), m(s.TableCell, "border", ae(Pt(s.divider, 1), 0.68)), m(s.Tooltip, "bg", Pt(s.grey[700], 0.92));
    }
    Ne(s.background, "default"), Ne(s.background, "paper"), Ne(s.common, "background"), Ne(s.common, "onBackground"), Ne(s, "divider"), Object.keys(s).forEach((k) => {
      const M = s[k];
      k !== "tonalOffset" && M && typeof M == "object" && (M.main && m(s[k], "mainChannel", mt(gt(M.main))), M.light && m(s[k], "lightChannel", mt(gt(M.light))), M.dark && m(s[k], "darkChannel", mt(gt(M.dark))), M.contrastText && m(s[k], "contrastTextChannel", mt(gt(M.contrastText))), k === "text" && (Ne(s[k], "primary"), Ne(s[k], "secondary")), k === "action" && (M.active && Ne(s[k], "active"), M.selected && Ne(s[k], "selected")));
    });
  }), $ = t.reduce((Y, s) => Oe(Y, s), $);
  const g = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Ya($)
  }, {
    vars: A,
    generateThemeVars: N,
    generateStyleSheets: X
  } = ga($, g);
  return $.vars = A, Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([Y, s]) => {
    $[Y] = s;
  }), $.generateThemeVars = N, $.generateStyleSheets = X, $.generateSpacing = function() {
    return Fn(d.spacing, Or(this));
  }, $.getColorSchemeSelector = ha(l), $.spacing = $.generateSpacing(), $.shouldSkipGeneratingVar = a, $.unstable_sxConfig = S(S({}, Qt), d == null ? void 0 : d.unstable_sxConfig), $.unstable_sx = function(s) {
    return st({
      sx: s,
      theme: this
    });
  }, $.toRuntimeSource = Hn, $;
}
function Sn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = ne(S({}, r !== !0 && r), {
    palette: $r(ne(S({}, r === !0 ? {} : r.palette), {
      mode: t
    }))
    // cast type to skip module augmentation test
  }));
}
function Pr(e = {}, ...t) {
  const h = e, {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode
  } = h, a = fe(h, [
    "palette",
    "cssVariables",
    "colorSchemes",
    "defaultColorScheme"
  ]), l = i || "light", f = o == null ? void 0 : o[l], d = S(S({}, o), r ? {
    [l]: ne(S({}, typeof f != "boolean" && f), {
      palette: r
    })
  } : void 0);
  if (n === !1) {
    if (!("colorSchemes" in e))
      return mr(e, ...t);
    let y = r;
    "palette" in e || d[l] && (d[l] !== !0 ? y = d[l].palette : l === "dark" && (y = {
      mode: "dark"
    }));
    const b = mr(ne(S({}, e), {
      palette: y
    }), ...t);
    return b.defaultColorScheme = l, b.colorSchemes = d, b.palette.mode === "light" && (b.colorSchemes.light = ne(S({}, d.light !== !0 && d.light), {
      palette: b.palette
    }), Sn(b, "dark", d.dark)), b.palette.mode === "dark" && (b.colorSchemes.dark = ne(S({}, d.dark !== !0 && d.dark), {
      palette: b.palette
    }), Sn(b, "light", d.light)), b;
  }
  return !r && !("light" in d) && l === "light" && (d.light = !0), qa(S(ne(S({}, a), {
    colorSchemes: d,
    defaultColorScheme: l
  }), typeof n != "boolean" && n), ...t);
}
const Ka = Pr(), Xa = "$$material";
function Ja(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kn = (e) => Ja(e) && e !== "classes", ke = na({
  themeId: Xa,
  defaultTheme: Ka,
  rootShouldForwardProp: Kn
}), _r = fa;
process.env.NODE_ENV !== "production" && (p.node, p.object.isRequired);
function Zt(e) {
  return ua(e);
}
class zt {
  constructor() {
    ut(this, "mountEffect", () => {
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
    return new zt();
  }
  static use() {
    const t = Bn(zt.create).current, [r, n] = V.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, V.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Za(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Qa() {
  return zt.use();
}
function Za() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gr.apply(null, arguments);
}
function es(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function hr(e, t) {
  return hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, hr(e, t);
}
function ts(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, hr(e, t);
}
const En = it.createContext(null);
function rs(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kr(e, t) {
  var r = function(i) {
    return t && At(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && lo.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function ns(e, t) {
  e = e || {}, t = t || {};
  function r(h) {
    return h in t ? t[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, l = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        l[n[f][a]] = r(d);
      }
    l[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function Je(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function os(e, t) {
  return kr(e.children, function(r) {
    return Mt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Je(r, "appear", e),
      enter: Je(r, "enter", e),
      exit: Je(r, "exit", e)
    });
  });
}
function is(e, t, r) {
  var n = kr(e.children), o = ns(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (At(a)) {
      var l = i in t, f = i in n, d = t[i], h = At(d) && !d.props.in;
      f && (!l || h) ? o[i] = Mt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Je(a, "exit", e),
        enter: Je(a, "enter", e)
      }) : !f && l && !h ? o[i] = Mt(a, {
        in: !1
      }) : f && l && At(d) && (o[i] = Mt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: Je(a, "exit", e),
        enter: Je(a, "enter", e)
      }));
    }
  }), o;
}
var as = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ss = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ar = /* @__PURE__ */ function(e) {
  ts(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(rs(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
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
    var a = i.children, l = i.handleExited, f = i.firstRender;
    return {
      children: f ? os(o, l) : is(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = kr(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var f = gr({}, l.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, l = es(o, ["component", "childFactory"]), f = this.state.contextValue, d = as(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ it.createElement(En.Provider, {
      value: f
    }, d) : /* @__PURE__ */ it.createElement(En.Provider, {
      value: f
    }, /* @__PURE__ */ it.createElement(i, l, d));
  }, t;
}(it.Component);
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ar.defaultProps = ss;
function Xn(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: f,
    timeout: d
  } = e, [h, y] = V.useState(!1), b = Te(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = Te(r.child, h && r.childLeaving, n && r.childPulsate);
  return !l && !h && y(!0), V.useEffect(() => {
    if (!l && f != null) {
      const u = setTimeout(f, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [f, l, d]), /* @__PURE__ */ be.jsx("span", {
    className: b,
    style: x,
    children: /* @__PURE__ */ be.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Xn.propTypes = {
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
const $e = Lt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yr = 550, ls = 80, cs = bt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, us = bt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, fs = bt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ds = ke("span", {
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
}), ps = ke(Xn, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${$e.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${cs};
    animation-duration: ${yr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${$e.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${$e.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${$e.childLeaving} {
    opacity: 0;
    animation-name: ${us};
    animation-duration: ${yr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${$e.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${fs};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Jn = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const $ = Zt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = $, l = fe($, [
    "center",
    "classes",
    "className"
  ]), [f, d] = V.useState([]), h = V.useRef(0), y = V.useRef(null);
  V.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [f]);
  const b = V.useRef(!1), x = Yo(), v = V.useRef(null), u = V.useRef(null), w = V.useCallback((g) => {
    const {
      pulsate: A,
      rippleX: N,
      rippleY: X,
      rippleSize: J,
      cb: le
    } = g;
    d((Y) => [...Y, /* @__PURE__ */ be.jsx(ps, {
      classes: {
        ripple: Te(i.ripple, $e.ripple),
        rippleVisible: Te(i.rippleVisible, $e.rippleVisible),
        ripplePulsate: Te(i.ripplePulsate, $e.ripplePulsate),
        child: Te(i.child, $e.child),
        childLeaving: Te(i.childLeaving, $e.childLeaving),
        childPulsate: Te(i.childPulsate, $e.childPulsate)
      },
      timeout: yr,
      pulsate: A,
      rippleX: N,
      rippleY: X,
      rippleSize: J
    }, h.current)]), h.current += 1, y.current = le;
  }, [i]), P = V.useCallback((g = {}, A = {}, N = () => {
  }) => {
    const {
      pulsate: X = !1,
      center: J = o || A.pulsate,
      fakeElement: le = !1
      // For test purposes
    } = A;
    if ((g == null ? void 0 : g.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (b.current = !0);
    const Y = le ? null : u.current, s = Y ? Y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let T, k, M;
    if (J || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      T = Math.round(s.width / 2), k = Math.round(s.height / 2);
    else {
      const {
        clientX: Q,
        clientY: q
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      T = Math.round(Q - s.left), k = Math.round(q - s.top);
    }
    if (J)
      M = Math.sqrt((2 * Le(s.width, 2) + Le(s.height, 2)) / 3), M % 2 === 0 && (M += 1);
    else {
      const Q = Math.max(Math.abs((Y ? Y.clientWidth : 0) - T), T) * 2 + 2, q = Math.max(Math.abs((Y ? Y.clientHeight : 0) - k), k) * 2 + 2;
      M = Math.sqrt(Le(Q, 2) + Le(q, 2));
    }
    g != null && g.touches ? v.current === null && (v.current = () => {
      w({
        pulsate: X,
        rippleX: T,
        rippleY: k,
        rippleSize: M,
        cb: N
      });
    }, x.start(ls, () => {
      v.current && (v.current(), v.current = null);
    })) : w({
      pulsate: X,
      rippleX: T,
      rippleY: k,
      rippleSize: M,
      cb: N
    });
  }, [o, w, x]), I = V.useCallback(() => {
    P({}, {
      pulsate: !0
    });
  }, [P]), B = V.useCallback((g, A) => {
    if (x.clear(), (g == null ? void 0 : g.type) === "touchend" && v.current) {
      v.current(), v.current = null, x.start(0, () => {
        B(g, A);
      });
      return;
    }
    v.current = null, d((N) => N.length > 0 ? N.slice(1) : N), y.current = A;
  }, [x]);
  return V.useImperativeHandle(r, () => ({
    pulsate: I,
    start: P,
    stop: B
  }), [I, P, B]), /* @__PURE__ */ be.jsx(ds, ne(S({
    className: Te($e.root, i.root, a),
    ref: u
  }, l), {
    children: /* @__PURE__ */ be.jsx(Ar, {
      component: null,
      exit: !0,
      children: f
    })
  }));
});
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
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
function ms(e) {
  return vt("MuiButtonBase", e);
}
const gs = Lt("MuiButtonBase", ["root", "disabled", "focusVisible"]), hs = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Er({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, ms, o);
  return r && n && (a.root += ` ${n}`), a;
}, ys = ke("button", {
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
  [`&.${gs.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Qn = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = Zt({
    props: t,
    name: "MuiButtonBase"
  }), _ = n, {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: f = "button",
    disabled: d = !1,
    disableRipple: h = !1,
    disableTouchRipple: y = !1,
    focusRipple: b = !1,
    focusVisibleClassName: x,
    LinkComponent: v = "a",
    onBlur: u,
    onClick: w,
    onContextMenu: P,
    onDragLeave: I,
    onFocus: B,
    onFocusVisible: $,
    onKeyDown: g,
    onKeyUp: A,
    onMouseDown: N,
    onMouseLeave: X,
    onMouseUp: J,
    onTouchEnd: le,
    onTouchMove: Y,
    onTouchStart: s,
    tabIndex: T = 0,
    TouchRippleProps: k,
    touchRippleRef: M,
    type: Q
  } = _, q = fe(_, [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type"
  ]), me = V.useRef(null), Z = Qa(), C = tn(Z.ref, M), [O, j] = V.useState(!1);
  d && O && j(!1), V.useImperativeHandle(o, () => ({
    focusVisible: () => {
      j(!0), me.current.focus();
    }
  }), []);
  const F = Z.shouldMount && !h && !d;
  V.useEffect(() => {
    O && b && !h && Z.pulsate();
  }, [h, b, O, Z]);
  const D = Be(Z, "start", N, y), U = Be(Z, "stop", P, y), z = Be(Z, "stop", I, y), L = Be(Z, "stop", J, y), H = Be(Z, "stop", (E) => {
    O && E.preventDefault(), X && X(E);
  }, y), K = Be(Z, "start", s, y), G = Be(Z, "stop", le, y), ye = Be(Z, "stop", Y, y), R = Be(Z, "stop", (E) => {
    nn(E.target) || j(!1), u && u(E);
  }, !1), xe = It((E) => {
    me.current || (me.current = E.currentTarget), nn(E.target) && (j(!0), $ && $(E)), B && B(E);
  }), Re = () => {
    const E = me.current;
    return f && f !== "button" && !(E.tagName === "A" && E.href);
  }, Fe = It((E) => {
    b && !E.repeat && O && E.key === " " && Z.stop(E, () => {
      Z.start(E);
    }), E.target === E.currentTarget && Re() && E.key === " " && E.preventDefault(), g && g(E), E.target === E.currentTarget && Re() && E.key === "Enter" && !d && (E.preventDefault(), w && w(E));
  }), er = It((E) => {
    b && E.key === " " && O && !E.defaultPrevented && Z.stop(E, () => {
      Z.pulsate(E);
    }), A && A(E), w && E.target === E.currentTarget && Re() && E.key === " " && !E.defaultPrevented && w(E);
  });
  let qe = f;
  qe === "button" && (q.href || q.to) && (qe = v);
  const ze = {};
  qe === "button" ? (ze.type = Q === void 0 ? "button" : Q, ze.disabled = d) : (!q.href && !q.to && (ze.role = "button"), d && (ze["aria-disabled"] = d));
  const xt = tn(r, me), lt = ne(S({}, n), {
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: h,
    disableTouchRipple: y,
    focusRipple: b,
    tabIndex: T,
    focusVisible: O
  }), c = hs(lt);
  return /* @__PURE__ */ be.jsxs(ys, ne(S(S({
    as: qe,
    className: Te(c.root, l),
    ownerState: lt,
    onBlur: R,
    onClick: w,
    onContextMenu: U,
    onFocus: xe,
    onKeyDown: Fe,
    onKeyUp: er,
    onMouseDown: D,
    onMouseLeave: H,
    onMouseUp: L,
    onDragLeave: z,
    onTouchEnd: G,
    onTouchMove: ye,
    onTouchStart: K,
    ref: xt,
    tabIndex: d ? -1 : T,
    type: Q
  }, ze), q), {
    children: [a, F ? /* @__PURE__ */ be.jsx(Jn, S({
      ref: C,
      center: i
    }, k)) : null]
  }));
});
function Be(e, t, r, n = !1) {
  return It((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Bo,
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
  component: Io,
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
function bs(e) {
  return typeof e.main == "string";
}
function vs(e, t = []) {
  if (!bs(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Zn(e = []) {
  return ([, t]) => t && vs(t, e);
}
function Ss(e) {
  return vt("MuiCircularProgress", e);
}
Lt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const We = 44, br = bt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, vr = bt`
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
`, Es = typeof br != "string" ? $n`
        animation: ${br} 1.4s linear infinite;
      ` : null, xs = typeof vr != "string" ? $n`
        animation: ${vr} 1.4s ease-in-out infinite;
      ` : null, Cs = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ve(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ve(r)}`, o && "circleDisableShrink"]
  };
  return Er(i, Ss, t);
}, Ts = ke("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ve(r.color)}`]];
  }
})(_r(({
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
    style: Es || {
      animation: `${br} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Zn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), ws = ke("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Os = ke("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ve(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(_r(({
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
    style: xs || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${vr} 1.4s ease-in-out infinite`
    }
  }]
}))), eo = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = Zt({
    props: t,
    name: "MuiCircularProgress"
  }), I = n, {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: f,
    thickness: d = 3.6,
    value: h = 0,
    variant: y = "indeterminate"
  } = I, b = fe(I, [
    "className",
    "color",
    "disableShrink",
    "size",
    "style",
    "thickness",
    "value",
    "variant"
  ]), x = ne(S({}, n), {
    color: i,
    disableShrink: a,
    size: l,
    thickness: d,
    value: h,
    variant: y
  }), v = Cs(x), u = {}, w = {}, P = {};
  if (y === "determinate") {
    const B = 2 * Math.PI * ((We - d) / 2);
    u.strokeDasharray = B.toFixed(3), P["aria-valuenow"] = Math.round(h), u.strokeDashoffset = `${((100 - h) / 100 * B).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ be.jsx(Ts, ne(S(S({
    className: Te(v.root, o),
    style: S(S({
      width: l,
      height: l
    }, w), f),
    ownerState: x,
    ref: r,
    role: "progressbar"
  }, P), b), {
    children: /* @__PURE__ */ be.jsx(ws, {
      className: v.svg,
      ownerState: x,
      viewBox: `${We / 2} ${We / 2} ${We} ${We}`,
      children: /* @__PURE__ */ be.jsx(Os, {
        className: v.circle,
        style: u,
        ownerState: x,
        cx: We,
        cy: We,
        r: (We - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (eo.propTypes = {
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
  disableShrink: Mn(p.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function Rs(e) {
  return vt("MuiButton", e);
}
const Xe = Lt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), to = /* @__PURE__ */ V.createContext({});
process.env.NODE_ENV !== "production" && (to.displayName = "ButtonGroupContext");
const ro = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (ro.displayName = "ButtonGroupButtonContext");
const $s = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: l,
    classes: f
  } = e, d = {
    root: ["root", a && "loading", i, `${i}${ve(t)}`, `size${ve(o)}`, `${i}Size${ve(o)}`, `color${ve(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ve(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${ve(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ve(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, h = Er(d, Rs, f);
  return S(S({}, f), h);
}, no = [{
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
}], Ps = ke(Qn, {
  shouldForwardProp: (e) => Kn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ve(r.color)}`], t[`size${ve(r.size)}`], t[`${r.variant}Size${ve(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(_r(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return ne(S({}, e.typography.button), {
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
    [`&.${Xe.disabled}`]: {
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
        [`&.${Xe.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Xe.disabled}`]: {
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
        [`&.${Xe.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Zn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : ot(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Xe.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Xe.disabled}`]: {
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
        [`&.${Xe.loading}`]: {
          color: "transparent"
        }
      }
    }]
  });
})), _s = ke("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ve(r.size)}`]];
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
  }, ...no]
})), ks = ke("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ve(r.size)}`]];
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
  }, ...no]
})), As = ke("span", {
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
})), xn = ke("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), oo = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = V.useContext(to), o = V.useContext(ro), i = Bt(n, t), a = Zt({
    props: i,
    name: "MuiButton"
  }), me = a, {
    children: l,
    color: f = "primary",
    component: d = "button",
    className: h,
    disabled: y = !1,
    disableElevation: b = !1,
    disableFocusRipple: x = !1,
    endIcon: v,
    focusVisibleClassName: u,
    fullWidth: w = !1,
    id: P,
    loading: I = null,
    loadingIndicator: B,
    loadingPosition: $ = "center",
    size: g = "medium",
    startIcon: A,
    type: N,
    variant: X = "text"
  } = me, J = fe(me, [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "id",
    "loading",
    "loadingIndicator",
    "loadingPosition",
    "size",
    "startIcon",
    "type",
    "variant"
  ]), le = Vo(P), Y = B != null ? B : /* @__PURE__ */ be.jsx(eo, {
    "aria-labelledby": le,
    color: "inherit",
    size: 16
  }), s = ne(S({}, a), {
    color: f,
    component: d,
    disabled: y,
    disableElevation: b,
    disableFocusRipple: x,
    fullWidth: w,
    loading: I,
    loadingIndicator: Y,
    loadingPosition: $,
    size: g,
    type: N,
    variant: X
  }), T = $s(s), k = (A || I && $ === "start") && /* @__PURE__ */ be.jsx(_s, {
    className: T.startIcon,
    ownerState: s,
    children: A || /* @__PURE__ */ be.jsx(xn, {
      className: T.loadingIconPlaceholder,
      ownerState: s
    })
  }), M = (v || I && $ === "end") && /* @__PURE__ */ be.jsx(ks, {
    className: T.endIcon,
    ownerState: s,
    children: v || /* @__PURE__ */ be.jsx(xn, {
      className: T.loadingIconPlaceholder,
      ownerState: s
    })
  }), Q = o || "", q = typeof I == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ be.jsx("span", {
      className: T.loadingWrapper,
      style: {
        display: "contents"
      },
      children: I && /* @__PURE__ */ be.jsx(As, {
        className: T.loadingIndicator,
        ownerState: s,
        children: Y
      })
    })
  ) : null;
  return /* @__PURE__ */ be.jsxs(Ps, ne(S({
    ownerState: s,
    className: Te(n.className, T.root, h, Q),
    component: d,
    disabled: y || I,
    focusRipple: !x,
    focusVisibleClassName: Te(T.focusVisible, u),
    ref: r,
    type: N,
    id: I ? le : P
  }, J), {
    classes: T,
    children: [k, $ !== "end" && q, l, $ === "end" && q, M]
  }));
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
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
const nl = (e) => {
  const l = e, { variant: t = "primary", children: r } = l, n = fe(l, ["variant", "children"]);
  let o = "contained", i = "primary", a = "";
  switch (t) {
    case "primary":
      o = "contained", i = "primary";
      break;
    case "secondary":
      o = "contained", i = "secondary";
      break;
    case "system":
      o = "contained", a = "system-button";
      break;
    case "text":
      o = "text";
      break;
  }
  return /* @__PURE__ */ be.jsx(
    oo,
    ne(S({
      variant: o,
      color: i,
      className: a ? `${a} ${n.className || ""}` : n.className,
      disableElevation: !0
    }, n), {
      children: r
    })
  );
}, Ms = {
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
}, Ee = {
  values: {
    xs: 0,
    sm: 321,
    md: 768,
    lg: 1025,
    xl: 1420
  }
}, he = '"Lexend deca", sans-serif';
var Cn, Tn, wn, On, Rn;
const Is = {
  allVariants: {
    fontFamily: he
  },
  fontFamily: he,
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
    fontFamily: he,
    fontSize: "48px",
    lineHeight: "56px",
    [`@media screen and (max-width: ${(Cn = Ee == null ? void 0 : Ee.values) == null ? void 0 : Cn.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "700"
  },
  h1SemiBold: {
    fontFamily: he,
    fontSize: "48px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(Tn = Ee == null ? void 0 : Ee.values) == null ? void 0 : Tn.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    fontWeight: "600"
  },
  h1Medium: {
    fontFamily: he,
    fontSize: "48px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  // Used in homepage
  h2Bold: {
    fontFamily: he,
    fontSize: "40px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${(wn = Ee == null ? void 0 : Ee.values) == null ? void 0 : wn.md}px)`]: {
      fontSize: "24px",
      lineHeight: "30px"
    },
    fontWeight: "700"
  },
  h2Medium: {
    fontFamily: he,
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "60px"
  },
  h2Regular: {
    fontFamily: he,
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "60px"
  },
  // Used in homepage
  h3Bold: {
    fontFamily: he,
    fontSize: "28px",
    [`@media screen and (max-width: ${(On = Ee == null ? void 0 : Ee.values) == null ? void 0 : On.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "600",
    lineHeight: "40px"
  },
  h3Regular: {
    fontFamily: he,
    fontSize: "32px",
    [`@media screen and (max-width: ${(Rn = Ee == null ? void 0 : Ee.values) == null ? void 0 : Rn.md}px)`]: {
      fontSize: "24px"
    },
    fontWeight: "400",
    lineHeight: "40px"
  },
  mediumBold: {
    fontFamily: he,
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "16px"
  },
  mediumRegular: {
    fontFamily: he,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "150%"
  },
  // Used in file a claim
  smallRegular: {
    fontFamily: he,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px"
  },
  // Used in FormAppbar
  paragraphBold: {
    fontFamily: he,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "30px"
  },
  // Used in homepage
  paragraphMedium: {
    fontFamily: he,
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
    fontFamily: he
  },
  body2: void 0,
  button: {
    fontFamily: he,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px"
  },
  caption: {
    fontFamily: he,
    fontSize: "14px",
    fontWeight: "400"
  },
  overline: void 0
}, Ns = (e) => ({
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
}), Bs = (e) => ({
  defaultProps: {
    disableRipple: !0
  }
}), Ds = (e) => ({
  styleOverrides: {
    root: ne(S({}, e.typography.h1Medium), {
      backgroundColor: e.palette.backgrounds.system
    })
  }
}), js = (e) => ({
  styleOverrides: {
    root: {
      fontSize: "10px",
      margin: "3px 14px 0"
    }
  }
}), Fs = (e) => ({
  styleOverrides: {
    input: S({}, e.typography.regularRegular)
  }
}), zs = (e) => ({
  styleOverrides: {
    root: {
      "&.MuiFormLabel-root": S({}, e.typography.regularRegular)
    }
  }
}), Vs = (e) => ({
  defaultProps: {
    disableRipple: !0
  },
  styleOverrides: {
    root: S({}, e.typography.regularRegular)
  }
}), Ls = (e) => ({
  styleOverrides: {
    listbox: S({}, e.typography.regularRegular),
    noOptions: S({}, e.typography.regularRegular),
    loading: S({}, e.typography.regularRegular)
  }
}), Ws = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: he
    }
  }
}), Ys = (e) => ({
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        backgroundColor: `${e.palette.primary.main} !important`
      }
    }
  }
}), Us = (e) => ({
  styleOverrides: {
    root: {
      "&:focus": {
        backgroundColor: e.palette.buttons.iconButtonBackgroundFocus
      }
    }
  }
}), Hs = (e) => ({
  styleOverrides: {
    root: {
      fontFamily: he
    }
  }
}), Gs = (e) => ({
  styleOverrides: {
    expandIconWrapper: {
      color: e.palette.secondary.main
    }
  }
}), qs = (e) => ({
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
          backgroundColor: uo(e.palette.common.white, 0.1),
          "&.MuiListItemButton-root:hover .MuiListItemIcon-root": {
            color: e.palette.primary.main
          }
        }
      }
    }
  }
}), Ks = (e) => ({
  styleOverrides: {
    body: S({}, e.typography.smallRegular),
    head: S({}, e.typography.smallBold)
  }
}), Xs = (e) => ({
  MuiButton: Ns(e),
  MuiButtonBase: Bs(),
  MuiDialogTitle: Ds(e),
  MuiInputBase: Fs(e),
  MuiFormLabel: zs(e),
  MuiFormHelperText: js(),
  MuiMenuItem: Vs(e),
  MuiAutocomplete: Ls(e),
  MuiPickersCalendarHeader: Ws(),
  MuiPickersToolbar: Hs(),
  MuiPickersDay: Ys(e),
  MuiIconButton: Us(e),
  MuiAccordionSummary: Gs(e),
  MuiListItemButton: qs(e),
  MuiTableCell: Ks(e)
}), dr = Pr({
  typography: Is,
  spacing: 4,
  palette: Ms,
  breakpoints: Ee
}), ol = Pr(ne(S({}, dr), {
  components: S(S({}, dr.components), Xs(dr))
}));
fo({
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
  nl as Button,
  Ee as breakpoints,
  Ms as palette,
  ol as theme,
  Is as typography
};
//# sourceMappingURL=flighthelp-ui.es.js.map
