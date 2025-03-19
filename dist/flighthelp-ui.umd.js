(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react"), require("@mui/material/Button"), require("@mui/material"), require("@mui/styles")) : typeof define === "function" && define.amd ? define(["exports", "react", "@mui/material/Button", "@mui/material", "@mui/styles"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.FlightHelpUI = {}, global.React, global.MaterialUIButton, global.MaterialUI, global.MaterialUIStyles));
})(this, function(exports2, React, MuiButton$1, material, styles) {
  "use strict";var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

  var _a, _b, _c, _d, _e;
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n) {
    if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f, arguments, this.constructor);
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var objectAssign;
  var hasRequiredObjectAssign;
  function requireObjectAssign() {
    if (hasRequiredObjectAssign) return objectAssign;
    hasRequiredObjectAssign = 1;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
    return objectAssign;
  }
  /** @license React v17.0.2
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    requireObjectAssign();
    var f = React, g = 60103;
    reactJsxRuntime_production_min.Fragment = 60107;
    if ("function" === typeof Symbol && Symbol.for) {
      var h = Symbol.for;
      g = h("react.element");
      reactJsxRuntime_production_min.Fragment = h("react.fragment");
    }
    var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, k) {
      var b, d = {}, e = null, l = null;
      void 0 !== k && (e = "" + k);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (l = a.ref);
      for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
    }
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var reactJsxRuntime_development = {};
  /** @license React v17.0.2
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    (function(exports3) {
      if (process.env.NODE_ENV !== "production") {
        (function() {
          var React$1 = React;
          var _assign = requireObjectAssign();
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports3.Fragment = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports3.Fragment = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            symbolFor("react.scope");
            symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === exports3.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case exports3.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values2, location, componentName, element) {
            {
              var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has2(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self2) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self2) ;
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self2) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self2);
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentName(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (Array.isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes2;
              if (typeof type === "function") {
                propTypes2 = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes2 = type.propTypes;
              } else {
                return;
              }
              if (propTypes2) {
                var name = getComponentName(type);
                checkPropTypes(propTypes2, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum();
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (Array.isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self2);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (Array.isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              if (type === exports3.Fragment) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx = jsxWithValidationDynamic;
          var jsxs = jsxWithValidationStatic;
          exports3.jsx = jsx;
          exports3.jsxs = jsxs;
        })();
      }
    })(reactJsxRuntime_development);
    return reactJsxRuntime_development;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    if (process.env.NODE_ENV === "production") {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    } else {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const Button = (props) => {
    const _a2 = props, { variant = "primary", children } = _a2, rest = __objRest(_a2, ["variant", "children"]);
    let muiVariant = "contained";
    let color2 = "primary";
    let className = "";
    switch (variant) {
      case "primary":
        muiVariant = "contained";
        color2 = "primary";
        break;
      case "secondary":
        muiVariant = "contained";
        color2 = "secondary";
        break;
      case "system":
        muiVariant = "contained";
        className = "system-button";
        break;
      case "text":
        muiVariant = "text";
        break;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MuiButton$1,
      __spreadProps(__spreadValues({
        variant: muiVariant,
        color: color2,
        className: className ? `${className} ${rest.className || ""}` : rest.className,
        disableElevation: true
      }, rest), {
        children
      })
    );
  };
  function formatMuiErrorMessage$1(code) {
    let url = "https://mui.com/production-error/?code=" + code;
    for (let i = 1; i < arguments.length; i += 1) {
      url += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
  }
  const formatMuiErrorMessage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: formatMuiErrorMessage$1
  }, Symbol.toStringTag, { value: "Module" }));
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  var propTypes = { exports: {} };
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min;
  function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min) return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    reactIs_production_min.AsyncMode = l;
    reactIs_production_min.ConcurrentMode = m;
    reactIs_production_min.ContextConsumer = k;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r;
    reactIs_production_min.Portal = d;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p;
    reactIs_production_min.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    reactIs_production_min.isConcurrentMode = A;
    reactIs_production_min.isContextConsumer = function(a) {
      return z(a) === k;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return z(a) === h;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return z(a) === n;
    };
    reactIs_production_min.isFragment = function(a) {
      return z(a) === e;
    };
    reactIs_production_min.isLazy = function(a) {
      return z(a) === t;
    };
    reactIs_production_min.isMemo = function(a) {
      return z(a) === r;
    };
    reactIs_production_min.isPortal = function(a) {
      return z(a) === d;
    };
    reactIs_production_min.isProfiler = function(a) {
      return z(a) === g;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return z(a) === f;
    };
    reactIs_production_min.isSuspense = function(a) {
      return z(a) === p;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    reactIs_production_min.typeOf = z;
    return reactIs_production_min;
  }
  var reactIs_development = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_development;
  function requireReactIs_development() {
    if (hasRequiredReactIs_development) return reactIs_development;
    hasRequiredReactIs_development = 1;
    if (process.env.NODE_ENV !== "production") {
      (function() {
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development.AsyncMode = AsyncMode;
        reactIs_development.ConcurrentMode = ConcurrentMode;
        reactIs_development.ContextConsumer = ContextConsumer;
        reactIs_development.ContextProvider = ContextProvider;
        reactIs_development.Element = Element;
        reactIs_development.ForwardRef = ForwardRef;
        reactIs_development.Fragment = Fragment;
        reactIs_development.Lazy = Lazy;
        reactIs_development.Memo = Memo;
        reactIs_development.Portal = Portal;
        reactIs_development.Profiler = Profiler;
        reactIs_development.StrictMode = StrictMode;
        reactIs_development.Suspense = Suspense;
        reactIs_development.isAsyncMode = isAsyncMode;
        reactIs_development.isConcurrentMode = isConcurrentMode;
        reactIs_development.isContextConsumer = isContextConsumer;
        reactIs_development.isContextProvider = isContextProvider;
        reactIs_development.isElement = isElement;
        reactIs_development.isForwardRef = isForwardRef;
        reactIs_development.isFragment = isFragment;
        reactIs_development.isLazy = isLazy;
        reactIs_development.isMemo = isMemo;
        reactIs_development.isPortal = isPortal;
        reactIs_development.isProfiler = isProfiler;
        reactIs_development.isStrictMode = isStrictMode;
        reactIs_development.isSuspense = isSuspense;
        reactIs_development.isValidElementType = isValidElementType;
        reactIs_development.typeOf = typeOf;
      })();
    }
    return reactIs_development;
  }
  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs) return reactIs.exports;
    hasRequiredReactIs = 1;
    if (process.env.NODE_ENV === "production") {
      reactIs.exports = requireReactIs_production_min();
    } else {
      reactIs.exports = requireReactIs_development();
    }
    return reactIs.exports;
  }
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }
  var has;
  var hasRequiredHas;
  function requireHas() {
    if (hasRequiredHas) return has;
    hasRequiredHas = 1;
    has = Function.call.bind(Object.prototype.hasOwnProperty);
    return has;
  }
  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;
  function requireCheckPropTypes() {
    if (hasRequiredCheckPropTypes) return checkPropTypes_1;
    hasRequiredCheckPropTypes = 1;
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
      var loggedTypeFailures = {};
      var has2 = /* @__PURE__ */ requireHas();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    checkPropTypes_1 = checkPropTypes;
    return checkPropTypes_1;
  }
  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;
  function requireFactoryWithTypeCheckers() {
    if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
    hasRequiredFactoryWithTypeCheckers = 1;
    var ReactIs = requireReactIs();
    var assign = requireObjectAssign();
    var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
    var has2 = /* @__PURE__ */ requireHas();
    var checkPropTypes = /* @__PURE__ */ requireCheckPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has2(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has2(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithTypeCheckers;
  }
  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;
  function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;
    var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithThrowingShims;
  }
  var hasRequiredPropTypes;
  function requirePropTypes() {
    if (hasRequiredPropTypes) return propTypes.exports;
    hasRequiredPropTypes = 1;
    if (process.env.NODE_ENV !== "production") {
      var ReactIs = requireReactIs();
      var throwOnDirectAccess = true;
      propTypes.exports = /* @__PURE__ */ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
    }
    return propTypes.exports;
  }
  var propTypesExports = /* @__PURE__ */ requirePropTypes();
  const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
  function isPlainObject(item) {
    if (typeof item !== "object" || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone(source) {
    if (/* @__PURE__ */ React__namespace.isValidElement(source) || !isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach((key) => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        if (/* @__PURE__ */ React__namespace.isValidElement(source[key])) {
          output[key] = source[key];
        } else if (isPlainObject(source[key]) && // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
          output[key] = deepmerge(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }
  const _excluded$5 = ["values", "unit", "step"];
  const sortBreakpointsValues = (values2) => {
    const breakpointsAsArray = Object.keys(values2).map((key) => ({
      key,
      val: values2[key]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };
  function createBreakpoints(breakpoints2) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values: values2 = {
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
      unit = "px",
      step = 5
    } = breakpoints2, other = _objectWithoutPropertiesLoose(breakpoints2, _excluded$5);
    const sortedValues = sortBreakpointsValues(values2);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
    }
    return _extends({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit
    }, other);
  }
  const shape = {
    borderRadius: 4
  };
  const responsivePropType = process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};
  function merge(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge(acc, item, {
      clone: false
      // No need to clone deep, it's way faster.
    });
  }
  const values = {
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
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (key) => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme2 = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === "object") {
      const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style2) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style2);
  }
  function capitalize(string) {
    if (typeof string !== "string") {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage$1(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== "string") {
      return null;
    }
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split(".").reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$1(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;
    const fn = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme2 = props.theme;
      const themeMapping = getPath(theme2, themeKey) || {};
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = process.env.NODE_ENV !== "production" ? {
      [prop]: responsivePropType
    } : {};
    fn.filterProps = [prop];
    return fn;
  }
  function memoize(fn) {
    const cache = {};
    return (arg) => {
      if (cache[arg] === void 0) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }
  const properties = {
    m: "margin",
    p: "padding"
  };
  const directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  const aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  const getCssProperties = memoize((prop) => {
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split("");
    const property = properties[a];
    const direction = directions[b] || "";
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
  });
  const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  const spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme2, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = getPath(theme2, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === "number") {
      return (abs) => {
        if (typeof abs === "string") {
          return abs;
        }
        if (process.env.NODE_ENV !== "production") {
          if (typeof abs !== "number") {
            console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
          }
        }
        return themeSpacing * abs;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (abs) => {
        if (typeof abs === "string") {
          return abs;
        }
        if (process.env.NODE_ENV !== "production") {
          if (!Number.isInteger(abs)) {
            console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
          } else if (abs > themeSpacing.length - 1) {
            console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
          }
        }
        return themeSpacing[abs];
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    if (process.env.NODE_ENV !== "production") {
      console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
    }
    return () => void 0;
  }
  function createUnarySpacing(theme2) {
    return createUnaryUnit(theme2, "spacing", 8, "spacing");
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    const abs = Math.abs(propValue);
    const transformed = transformer(abs);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === "number") {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }
  function margin(props) {
    return style(props, marginKeys);
  }
  margin.propTypes = process.env.NODE_ENV !== "production" ? marginKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style(props, paddingKeys);
  }
  padding.propTypes = process.env.NODE_ENV !== "production" ? paddingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};
  padding.filterProps = paddingKeys;
  process.env.NODE_ENV !== "production" ? spacingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};
  function createSpacing(spacingInput = 8) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const transform = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing = (...argsInput) => {
      if (process.env.NODE_ENV !== "production") {
        if (!(argsInput.length <= 4)) {
          console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
      }
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing.mui = true;
    return spacing;
  }
  function compose(...styles2) {
    const handlers = styles2.reduce((acc, style2) => {
      style2.filterProps.forEach((prop) => {
        acc[prop] = style2;
      });
      return acc;
    }, {});
    const fn = (props) => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = process.env.NODE_ENV !== "production" ? styles2.reduce((acc, style2) => Object.assign(acc, style2.propTypes), {}) : {};
    fn.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
    return fn;
  }
  function borderTransform(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style$1({
      prop,
      themeKey: "borders",
      transform
    });
  }
  const border = createBorderStyle("border", borderTransform);
  const borderTop = createBorderStyle("borderTop", borderTransform);
  const borderRight = createBorderStyle("borderRight", borderTransform);
  const borderBottom = createBorderStyle("borderBottom", borderTransform);
  const borderLeft = createBorderStyle("borderLeft", borderTransform);
  const borderColor = createBorderStyle("borderColor");
  const borderTopColor = createBorderStyle("borderTopColor");
  const borderRightColor = createBorderStyle("borderRightColor");
  const borderBottomColor = createBorderStyle("borderBottomColor");
  const borderLeftColor = createBorderStyle("borderLeftColor");
  const outline = createBorderStyle("outline", borderTransform);
  const outlineColor = createBorderStyle("outlineColor");
  const borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = process.env.NODE_ENV !== "production" ? {
    borderRadius: responsivePropType
  } : {};
  borderRadius.filterProps = ["borderRadius"];
  compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
  const gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
      const styleFromPropValue = (propValue) => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = process.env.NODE_ENV !== "production" ? {
    gap: responsivePropType
  } : {};
  gap.filterProps = ["gap"];
  const columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = process.env.NODE_ENV !== "production" ? {
    columnGap: responsivePropType
  } : {};
  columnGap.filterProps = ["columnGap"];
  const rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = process.env.NODE_ENV !== "production" ? {
    rowGap: responsivePropType
  } : {};
  rowGap.filterProps = ["rowGap"];
  const gridColumn = style$1({
    prop: "gridColumn"
  });
  const gridRow = style$1({
    prop: "gridRow"
  });
  const gridAutoFlow = style$1({
    prop: "gridAutoFlow"
  });
  const gridAutoColumns = style$1({
    prop: "gridAutoColumns"
  });
  const gridAutoRows = style$1({
    prop: "gridAutoRows"
  });
  const gridTemplateColumns = style$1({
    prop: "gridTemplateColumns"
  });
  const gridTemplateRows = style$1({
    prop: "gridTemplateRows"
  });
  const gridTemplateAreas = style$1({
    prop: "gridTemplateAreas"
  });
  const gridArea = style$1({
    prop: "gridArea"
  });
  compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
  function paletteTransform(value, userValue) {
    if (userValue === "grey") {
      return userValue;
    }
    return value;
  }
  const color = style$1({
    prop: "color",
    themeKey: "palette",
    transform: paletteTransform
  });
  const bgcolor = style$1({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  const backgroundColor = style$1({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  compose(color, bgcolor, backgroundColor);
  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$1({
    prop: "width",
    transform: sizingTransform
  });
  const maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        var _props$theme, _props$theme2;
        const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  const minWidth = style$1({
    prop: "minWidth",
    transform: sizingTransform
  });
  const height = style$1({
    prop: "height",
    transform: sizingTransform
  });
  const maxHeight = style$1({
    prop: "maxHeight",
    transform: sizingTransform
  });
  const minHeight = style$1({
    prop: "minHeight",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "width",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "height",
    transform: sizingTransform
  });
  const boxSizing = style$1({
    prop: "boxSizing"
  });
  compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
  const defaultSxConfig = {
    // borders
    border: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderTop: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderRight: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderBottom: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderLeft: {
      themeKey: "borders",
      transform: borderTransform
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
      transform: borderTransform
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: borderRadius
    },
    // palette
    color: {
      themeKey: "palette",
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: "palette",
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
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
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
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
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
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
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object) => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
  }
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme2, config) {
      const props = {
        [prop]: val,
        theme: theme2
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style: style2
      } = options;
      if (val == null) {
        return null;
      }
      if (themeKey === "typography" && val === "inherit") {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme2, themeKey) || {};
      if (style2) {
        return style2(props);
      }
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx2(props) {
      var _theme$unstable_sxCon;
      const {
        sx,
        theme: theme2 = {}
      } = props || {};
      if (!sx) {
        return null;
      }
      const config = (_theme$unstable_sxCon = theme2.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme2);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme2.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css = emptyBreakpoints;
        Object.keys(sxObject).forEach((styleKey) => {
          const value = callIfFn(sxObject[styleKey], theme2);
          if (value !== null && value !== void 0) {
            if (typeof value === "object") {
              if (config[styleKey]) {
                css = merge(css, getThemeValue(styleKey, value, theme2, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme: theme2
                }, value, (x) => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css[styleKey] = styleFunctionSx2({
                    sx: value,
                    theme: theme2
                  });
                } else {
                  css = merge(css, breakpointsValues);
                }
              }
            } else {
              css = merge(css, getThemeValue(styleKey, value, theme2, config));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx2;
  }
  const styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ["sx"];
  function applyStyles(key, styles2) {
    const theme2 = this;
    if (theme2.vars && typeof theme2.getColorSchemeSelector === "function") {
      const selector = theme2.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
      return {
        [selector]: styles2
      };
    }
    if (theme2.palette.mode === key) {
      return styles2;
    }
    return {};
  }
  const _excluded$4 = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme$1(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded$4);
    const breakpoints2 = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints: breakpoints2,
      direction: "ltr",
      components: {},
      // Inject component definitions.
      palette: _extends({
        mode: "light"
      }, paletteInput),
      spacing,
      shape: _extends({}, shape, shapeInput)
    }, other);
    muiTheme.applyStyles = applyStyles;
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  const defaultGenerator = (componentName) => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();
  const globalStateClasses = {
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
  function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
  }
  function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
  }
  const clamp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: clamp$1
  }, Symbol.toStringTag, { value: "Module" }));
  function createMixins(breakpoints2, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [breakpoints2.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [breakpoints2.up("sm")]: {
          minHeight: 64
        }
      }
    }, mixins);
  }
  var colorManipulator = {};
  var interopRequireDefault = { exports: {} };
  var hasRequiredInteropRequireDefault;
  function requireInteropRequireDefault() {
    if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
    hasRequiredInteropRequireDefault = 1;
    (function(module2) {
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }
      module2.exports = _interopRequireDefault, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    })(interopRequireDefault);
    return interopRequireDefault.exports;
  }
  const require$$1 = /* @__PURE__ */ getAugmentedNamespace(formatMuiErrorMessage);
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(clamp);
  var hasRequiredColorManipulator;
  function requireColorManipulator() {
    if (hasRequiredColorManipulator) return colorManipulator;
    hasRequiredColorManipulator = 1;
    var _interopRequireDefault = requireInteropRequireDefault();
    Object.defineProperty(colorManipulator, "__esModule", {
      value: true
    });
    colorManipulator.alpha = alpha;
    colorManipulator.blend = blend;
    colorManipulator.colorChannel = void 0;
    colorManipulator.darken = darken;
    colorManipulator.decomposeColor = decomposeColor;
    colorManipulator.emphasize = emphasize;
    colorManipulator.getContrastRatio = getContrastRatio;
    colorManipulator.getLuminance = getLuminance;
    colorManipulator.hexToRgb = hexToRgb;
    colorManipulator.hslToRgb = hslToRgb;
    colorManipulator.lighten = lighten;
    colorManipulator.private_safeAlpha = private_safeAlpha;
    colorManipulator.private_safeColorChannel = void 0;
    colorManipulator.private_safeDarken = private_safeDarken;
    colorManipulator.private_safeEmphasize = private_safeEmphasize;
    colorManipulator.private_safeLighten = private_safeLighten;
    colorManipulator.recomposeColor = recomposeColor;
    colorManipulator.rgbToHex = rgbToHex;
    var _formatMuiErrorMessage2 = _interopRequireDefault(require$$1);
    var _clamp = _interopRequireDefault(require$$2);
    function clampWrapper(value, min = 0, max = 1) {
      if (process.env.NODE_ENV !== "production") {
        if (value < min || value > max) {
          console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
        }
      }
      return (0, _clamp.default)(value, min, max);
    }
    function hexToRgb(color2) {
      color2 = color2.slice(1);
      const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
      let colors = color2.match(re);
      if (colors && colors[0].length === 1) {
        colors = colors.map((n) => n + n);
      }
      return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
        return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
      }).join(", ")})` : "";
    }
    function intToHex(int) {
      const hex = int.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    }
    function decomposeColor(color2) {
      if (color2.type) {
        return color2;
      }
      if (color2.charAt(0) === "#") {
        return decomposeColor(hexToRgb(color2));
      }
      const marker = color2.indexOf("(");
      const type = color2.substring(0, marker);
      if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, _formatMuiErrorMessage2.default)(9, color2));
      }
      let values2 = color2.substring(marker + 1, color2.length - 1);
      let colorSpace;
      if (type === "color") {
        values2 = values2.split(" ");
        colorSpace = values2.shift();
        if (values2.length === 4 && values2[3].charAt(0) === "/") {
          values2[3] = values2[3].slice(1);
        }
        if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
          throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
        }
      } else {
        values2 = values2.split(",");
      }
      values2 = values2.map((value) => parseFloat(value));
      return {
        type,
        values: values2,
        colorSpace
      };
    }
    const colorChannel = (color2) => {
      const decomposedColor = decomposeColor(color2);
      return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
    };
    colorManipulator.colorChannel = colorChannel;
    const private_safeColorChannel = (color2, warning) => {
      try {
        return colorChannel(color2);
      } catch (error) {
        if (warning && process.env.NODE_ENV !== "production") {
          console.warn(warning);
        }
        return color2;
      }
    };
    colorManipulator.private_safeColorChannel = private_safeColorChannel;
    function recomposeColor(color2) {
      const {
        type,
        colorSpace
      } = color2;
      let {
        values: values2
      } = color2;
      if (type.indexOf("rgb") !== -1) {
        values2 = values2.map((n, i) => i < 3 ? parseInt(n, 10) : n);
      } else if (type.indexOf("hsl") !== -1) {
        values2[1] = `${values2[1]}%`;
        values2[2] = `${values2[2]}%`;
      }
      if (type.indexOf("color") !== -1) {
        values2 = `${colorSpace} ${values2.join(" ")}`;
      } else {
        values2 = `${values2.join(", ")}`;
      }
      return `${type}(${values2})`;
    }
    function rgbToHex(color2) {
      if (color2.indexOf("#") === 0) {
        return color2;
      }
      const {
        values: values2
      } = decomposeColor(color2);
      return `#${values2.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join("")}`;
    }
    function hslToRgb(color2) {
      color2 = decomposeColor(color2);
      const {
        values: values2
      } = color2;
      const h = values2[0];
      const s = values2[1] / 100;
      const l = values2[2] / 100;
      const a = s * Math.min(l, 1 - l);
      const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      let type = "rgb";
      const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
      if (color2.type === "hsla") {
        type += "a";
        rgb.push(values2[3]);
      }
      return recomposeColor({
        type,
        values: rgb
      });
    }
    function getLuminance(color2) {
      color2 = decomposeColor(color2);
      let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
      rgb = rgb.map((val) => {
        if (color2.type !== "color") {
          val /= 255;
        }
        return val <= 0.03928 ? val / 12.92 : __pow((val + 0.055) / 1.055, 2.4);
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    function getContrastRatio(foreground, background) {
      const lumA = getLuminance(foreground);
      const lumB = getLuminance(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function alpha(color2, value) {
      color2 = decomposeColor(color2);
      value = clampWrapper(value);
      if (color2.type === "rgb" || color2.type === "hsl") {
        color2.type += "a";
      }
      if (color2.type === "color") {
        color2.values[3] = `/${value}`;
      } else {
        color2.values[3] = value;
      }
      return recomposeColor(color2);
    }
    function private_safeAlpha(color2, value, warning) {
      try {
        return alpha(color2, value);
      } catch (error) {
        if (warning && process.env.NODE_ENV !== "production") {
          console.warn(warning);
        }
        return color2;
      }
    }
    function darken(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clampWrapper(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] *= 1 - coefficient;
      } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] *= 1 - coefficient;
        }
      }
      return recomposeColor(color2);
    }
    function private_safeDarken(color2, coefficient, warning) {
      try {
        return darken(color2, coefficient);
      } catch (error) {
        if (warning && process.env.NODE_ENV !== "production") {
          console.warn(warning);
        }
        return color2;
      }
    }
    function lighten(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clampWrapper(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] += (100 - color2.values[2]) * coefficient;
      } else if (color2.type.indexOf("rgb") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (255 - color2.values[i]) * coefficient;
        }
      } else if (color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (1 - color2.values[i]) * coefficient;
        }
      }
      return recomposeColor(color2);
    }
    function private_safeLighten(color2, coefficient, warning) {
      try {
        return lighten(color2, coefficient);
      } catch (error) {
        if (warning && process.env.NODE_ENV !== "production") {
          console.warn(warning);
        }
        return color2;
      }
    }
    function emphasize(color2, coefficient = 0.15) {
      return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
    }
    function private_safeEmphasize(color2, coefficient, warning) {
      try {
        return emphasize(color2, coefficient);
      } catch (error) {
        if (warning && process.env.NODE_ENV !== "production") {
          console.warn(warning);
        }
        return color2;
      }
    }
    function blend(background, overlay, opacity, gamma = 1) {
      const blendChannel = (b, o) => Math.round(__pow(__pow(b, 1 / gamma) * (1 - opacity) + __pow(o, 1 / gamma) * opacity, gamma));
      const backgroundColor2 = decomposeColor(background);
      const overlayColor = decomposeColor(overlay);
      const rgb = [blendChannel(backgroundColor2.values[0], overlayColor.values[0]), blendChannel(backgroundColor2.values[1], overlayColor.values[1]), blendChannel(backgroundColor2.values[2], overlayColor.values[2])];
      return recomposeColor({
        type: "rgb",
        values: rgb
      });
    }
    return colorManipulator;
  }
  var colorManipulatorExports = /* @__PURE__ */ requireColorManipulator();
  const common = {
    black: "#000",
    white: "#fff"
  };
  const grey = {
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
  };
  const purple = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  };
  const red = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  };
  const orange = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  };
  const blue = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  };
  const lightBlue = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  };
  const green = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  };
  const _excluded$3 = ["mode", "contrastThreshold", "tonalOffset"];
  const light = {
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
      paper: common.white,
      default: common.white
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
  const dark = {
    text: {
      primary: common.white,
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
      active: common.white,
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
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = colorManipulatorExports.lighten(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = colorManipulatorExports.darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }
    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }
    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }
    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }
    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }
    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }
    return {
      main: "#ed6c02",
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }
  function createPalette(palette2) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded$3);
    const primary = palette2.primary || getDefaultPrimary(mode);
    const secondary = palette2.secondary || getDefaultSecondary(mode);
    const error = palette2.error || getDefaultError(mode);
    const info = palette2.info || getDefaultInfo(mode);
    const success = palette2.success || getDefaultSuccess(mode);
    const warning = palette2.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      const contrastText = colorManipulatorExports.getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      if (process.env.NODE_ENV !== "production") {
        const contrast = colorManipulatorExports.getContrastRatio(background, contrastText);
        if (contrast < 3) {
          console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
        }
      }
      return contrastText;
    }
    const augmentColor = ({
      color: color2,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color2 = _extends({}, color2);
      if (!color2.main && color2[mainShade]) {
        color2.main = color2[mainShade];
      }
      if (!color2.hasOwnProperty("main")) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage$1(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color2.main !== "string") {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage$1(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
      }
      addLightOrDark(color2, "light", lightShade, tonalOffset);
      addLightOrDark(color2, "dark", darkShade, tonalOffset);
      if (!color2.contrastText) {
        color2.contrastText = getContrastText(color2.main);
      }
      return color2;
    };
    const modes = {
      dark,
      light
    };
    if (process.env.NODE_ENV !== "production") {
      if (!modes[mode]) {
        console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
      }
    }
    const paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common: _extends({}, common),
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: "error"
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: "info"
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: "success"
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }
  const _excluded$2 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: "uppercase"
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette2, typography2) {
    const _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, {
      fontFamily: fontFamily2 = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$2);
    if (process.env.NODE_ENV !== "production") {
      if (typeof fontSize !== "number") {
        console.error("MUI: `fontSize` is required to be a number.");
      }
      if (typeof htmlFontSize !== "number") {
        console.error("MUI: `htmlFontSize` is required to be a number.");
      }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
      fontFamily: fontFamily2,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily2 === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return deepmerge(_extends({
      htmlFontSize,
      pxToRem,
      fontFamily: fontFamily2,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false
      // No need to clone deep
    });
  }
  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  const _excluded$1 = ["duration", "easing", "delay"];
  const easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  const duration = {
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
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends({}, easing, inputTransitions.easing);
    const mergedDuration = _extends({}, duration, inputTransitions.duration);
    const create = (props = ["all"], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded$1);
      if (process.env.NODE_ENV !== "production") {
        const isString = (value) => typeof value === "string";
        const isNumber = (value) => !isNaN(parseFloat(value));
        if (!isString(props) && !Array.isArray(props)) {
          console.error('MUI: Argument "props" must be a string or Array.');
        }
        if (!isNumber(durationOption) && !isString(durationOption)) {
          console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
        }
        if (!isString(easingOption)) {
          console.error('MUI: Argument "easing" must be a string.');
        }
        if (!isNumber(delay) && !isString(delay)) {
          console.error('MUI: Argument "delay" must be a number or a string.');
        }
        if (typeof options !== "object") {
          console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
        }
        if (Object.keys(other).length !== 0) {
          console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
        }
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    return _extends({
      getAutoHeightDuration,
      create
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }
  const zIndex = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  const _excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme(options = {}, ...args) {
    const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded);
    if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    options.generateCssVars === void 0) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage$1(18));
    }
    const palette2 = createPalette(paletteInput);
    const systemTheme = createTheme$1(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette: palette2,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette2, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends({}, zIndex)
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    if (process.env.NODE_ENV !== "production") {
      const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
      const traverse = (node, component) => {
        let key;
        for (key in node) {
          const child = node[key];
          if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
            if (process.env.NODE_ENV !== "production") {
              const stateClass = generateUtilityClass("", key);
              console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
                root: {
                  [`&.${stateClass}`]: child
                }
              }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
            }
            node[key] = {};
          }
        }
      };
      Object.keys(muiTheme.components).forEach((component) => {
        const styleOverrides = muiTheme.components[component].styleOverrides;
        if (styleOverrides && component.indexOf("Mui") === 0) {
          traverse(styleOverrides, component);
        }
      });
    }
    muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  const palette = {
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
      addInShadow: `-1px 1px 0px #D6DCE5, 0px 1px 0px #E0E4EB`
    }
  };
  const breakpoints = {
    values: {
      xs: 0,
      sm: 321,
      md: 768,
      lg: 1025,
      xl: 1420
    }
  };
  const fontFamily = '"Lexend deca", sans-serif';
  const typography = {
    allVariants: {
      fontFamily
    },
    fontFamily,
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
      fontFamily,
      fontSize: "48px",
      lineHeight: "56px",
      [`@media screen and (max-width: ${(_a = breakpoints == null ? void 0 : breakpoints.values) == null ? void 0 : _a.md}px)`]: {
        fontSize: "32px",
        lineHeight: "40px"
      },
      fontWeight: "700"
    },
    h1SemiBold: {
      fontFamily,
      fontSize: "48px",
      lineHeight: "60px",
      [`@media screen and (max-width: ${(_b = breakpoints == null ? void 0 : breakpoints.values) == null ? void 0 : _b.md}px)`]: {
        fontSize: "32px",
        lineHeight: "40px"
      },
      fontWeight: "600"
    },
    h1Medium: {
      fontFamily,
      fontSize: "48px",
      fontWeight: "500",
      lineHeight: "60px"
    },
    // Used in homepage
    h2Bold: {
      fontFamily,
      fontSize: "40px",
      lineHeight: "60px",
      [`@media screen and (max-width: ${(_c = breakpoints == null ? void 0 : breakpoints.values) == null ? void 0 : _c.md}px)`]: {
        fontSize: "24px",
        lineHeight: "30px"
      },
      fontWeight: "700"
    },
    h2Medium: {
      fontFamily,
      fontSize: "40px",
      fontWeight: "500",
      lineHeight: "60px"
    },
    h2Regular: {
      fontFamily,
      fontSize: "40px",
      fontWeight: "400",
      lineHeight: "60px"
    },
    // Used in homepage
    h3Bold: {
      fontFamily,
      fontSize: "28px",
      [`@media screen and (max-width: ${(_d = breakpoints == null ? void 0 : breakpoints.values) == null ? void 0 : _d.md}px)`]: {
        fontSize: "24px"
      },
      fontWeight: "600",
      lineHeight: "40px"
    },
    h3Regular: {
      fontFamily,
      fontSize: "32px",
      [`@media screen and (max-width: ${(_e = breakpoints == null ? void 0 : breakpoints.values) == null ? void 0 : _e.md}px)`]: {
        fontSize: "24px"
      },
      fontWeight: "400",
      lineHeight: "40px"
    },
    mediumBold: {
      fontFamily,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "16px"
    },
    mediumRegular: {
      fontFamily,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "150%"
    },
    // Used in file a claim
    smallRegular: {
      fontFamily,
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px"
    },
    // Used in FormAppbar
    paragraphBold: {
      fontFamily,
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "30px"
    },
    // Used in homepage
    paragraphMedium: {
      fontFamily,
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
      fontFamily
    },
    body2: void 0,
    button: {
      fontFamily,
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "20px"
    },
    caption: {
      fontFamily,
      fontSize: "14px",
      fontWeight: "400"
    },
    overline: void 0
  };
  const MuiButton = (theme2) => {
    const styleOverrides = {
      defaultProps: {
        disableRipple: true,
        variant: "primary"
      },
      styleOverrides: {
        root: {},
        contained: {
          color: theme2.palette.common.white,
          "&:hover": {
            color: theme2.palette.common.black
          }
        }
      }
    };
    return styleOverrides;
  };
  const MuiButtonBase = (theme2) => {
    const styleOverrides = {
      defaultProps: {
        disableRipple: true
      }
    };
    return styleOverrides;
  };
  const MuiDialogTitle = (theme2) => {
    const appBarStyleOverrides = {
      styleOverrides: {
        root: __spreadProps(__spreadValues({}, theme2.typography.h1Medium), {
          backgroundColor: theme2.palette.backgrounds.system
        })
      }
    };
    return appBarStyleOverrides;
  };
  const MuiFormHelperText = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        root: {
          fontSize: "10px",
          margin: "3px 14px 0"
        }
      }
    };
    return styleOverrides;
  };
  const MuiInputBase = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        input: __spreadValues({}, theme2.typography.regularRegular)
      }
    };
    return styleOverrides;
  };
  const MuiFormLabel = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        root: {
          "&.MuiFormLabel-root": __spreadValues({}, theme2.typography.regularRegular)
        }
      }
    };
    return styleOverrides;
  };
  const MuiMenuItem = (theme2) => {
    const styleOverrides = {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: __spreadValues({}, theme2.typography.regularRegular)
      }
    };
    return styleOverrides;
  };
  const MuiAutocomplete = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        listbox: __spreadValues({}, theme2.typography.regularRegular),
        noOptions: __spreadValues({}, theme2.typography.regularRegular),
        loading: __spreadValues({}, theme2.typography.regularRegular)
      }
    };
    return styleOverrides;
  };
  const MuiPickersCalendarHeader = (theme2) => {
    return {
      styleOverrides: {
        root: {
          fontFamily
        }
      }
    };
  };
  const MuiPickersDay = (theme2) => {
    return {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: `${theme2.palette.primary.main} !important`
          }
        }
      }
    };
  };
  const MuiIconButton = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        root: {
          "&:focus": {
            backgroundColor: theme2.palette.buttons.iconButtonBackgroundFocus
          }
        }
      }
    };
    return styleOverrides;
  };
  const MuiPickersToolbar = (theme2) => {
    return {
      styleOverrides: {
        root: {
          fontFamily
        }
      }
    };
  };
  const MuiAccordionSummary = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        expandIconWrapper: {
          color: theme2.palette.secondary.main
        }
      }
    };
    return styleOverrides;
  };
  const MuiListItemButton = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        root: {
          "&.nav-bar-item": {
            cursor: "pointer",
            borderRadius: "60px",
            color: theme2.palette.common.black,
            backgroundColor: "transparent",
            "&.MuiListItemButton-root-active": {
              backgroundColor: theme2.palette.common.white
            },
            "&.MuiListItemButton-root:hover": {
              color: "initial",
              backgroundColor: material.darken(theme2.palette.common.white, 0.1),
              "&.MuiListItemButton-root:hover .MuiListItemIcon-root": {
                color: theme2.palette.primary.main
              }
            }
          }
        }
      }
    };
    return styleOverrides;
  };
  const MuiTableCell = (theme2) => {
    const styleOverrides = {
      styleOverrides: {
        body: __spreadValues({}, theme2.typography.smallRegular),
        head: __spreadValues({}, theme2.typography.smallBold)
      }
    };
    return styleOverrides;
  };
  const overrides = (theme2) => {
    return {
      MuiButton: MuiButton(theme2),
      MuiButtonBase: MuiButtonBase(),
      MuiDialogTitle: MuiDialogTitle(theme2),
      MuiInputBase: MuiInputBase(theme2),
      MuiFormLabel: MuiFormLabel(theme2),
      MuiFormHelperText: MuiFormHelperText(),
      MuiMenuItem: MuiMenuItem(theme2),
      MuiAutocomplete: MuiAutocomplete(theme2),
      MuiPickersCalendarHeader: MuiPickersCalendarHeader(),
      MuiPickersToolbar: MuiPickersToolbar(),
      MuiPickersDay: MuiPickersDay(theme2),
      MuiIconButton: MuiIconButton(theme2),
      MuiAccordionSummary: MuiAccordionSummary(theme2),
      MuiListItemButton: MuiListItemButton(theme2),
      MuiTableCell: MuiTableCell(theme2)
    };
  };
  const baseTheme = createTheme({
    typography,
    spacing: 4,
    palette,
    breakpoints
  });
  const theme = createTheme(__spreadProps(__spreadValues({}, baseTheme), {
    components: __spreadValues(__spreadValues({}, baseTheme.components), overrides(baseTheme))
  }));
  styles.makeStyles({
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
  exports2.Button = Button;
  exports2.breakpoints = breakpoints;
  exports2.palette = palette;
  exports2.theme = theme;
  exports2.typography = typography;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=flighthelp-ui.umd.js.map
