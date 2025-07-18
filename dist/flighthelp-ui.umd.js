(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@mui/material/Button'), require('@mui/material'), require('@emotion/styled'), require('@emotion/react'), require('@mui/styles')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', '@mui/material/Button', '@mui/material', '@emotion/styled', '@emotion/react', '@mui/styles'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FlightHelpUI = {}, global.React, global.MaterialUIButton, global.MaterialUI, global.emotionStyled, global.emotionReact, global.MaterialUIStyles));
})(this, (function (exports, React, MuiButton$1, material, emStyled, react, styles) { 'use strict';

	const _interopDefault = e => e && e.__esModule ? e : { default: e };

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
		if (e) {
			for (const k in e) {
				if (k !== 'default') {
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

	const React__namespace = /*#__PURE__*/_interopNamespace(React);
	const MuiButton__default = /*#__PURE__*/_interopDefault(MuiButton$1);
	const emStyled__default = /*#__PURE__*/_interopDefault(emStyled);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	var objectAssign;
	var hasRequiredObjectAssign;

	function requireObjectAssign () {
		if (hasRequiredObjectAssign) return objectAssign;
		hasRequiredObjectAssign = 1;
		/* eslint-disable no-unused-vars */
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;

		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}

			return Object(val);
		}

		function shouldUseNative() {
			try {
				if (!Object.assign) {
					return false;
				}

				// Detect buggy property enumeration order in older V8 versions.

				// https://bugs.chromium.org/p/v8/issues/detail?id=4118
				var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
				test1[5] = 'de';
				if (Object.getOwnPropertyNames(test1)[0] === '5') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test2 = {};
				for (var i = 0; i < 10; i++) {
					test2['_' + String.fromCharCode(i)] = i;
				}
				var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
					return test2[n];
				});
				if (order2.join('') !== '0123456789') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test3 = {};
				'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join('') !==
						'abcdefghijklmnopqrst') {
					return false;
				}

				return true;
			} catch (err) {
				// We don't expect any of the above to throw, but better to be safe.
				return false;
			}
		}

		objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	requireObjectAssign();var f=React__namespace.default,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
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

	function requireReactJsxRuntime_development () {
		if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
		hasRequiredReactJsxRuntime_development = 1;
		(function (exports) {

			if (process.env.NODE_ENV !== "production") {
			  (function() {

			var React = React__namespace.default;
			var _assign = requireObjectAssign();

			// ATTENTION
			// When adding new symbols to this file,
			// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
			// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
			// nor polyfill, then a plain number is used for performance.
			var REACT_ELEMENT_TYPE = 0xeac7;
			var REACT_PORTAL_TYPE = 0xeaca;
			exports.Fragment = 0xeacb;
			var REACT_STRICT_MODE_TYPE = 0xeacc;
			var REACT_PROFILER_TYPE = 0xead2;
			var REACT_PROVIDER_TYPE = 0xeacd;
			var REACT_CONTEXT_TYPE = 0xeace;
			var REACT_FORWARD_REF_TYPE = 0xead0;
			var REACT_SUSPENSE_TYPE = 0xead1;
			var REACT_SUSPENSE_LIST_TYPE = 0xead8;
			var REACT_MEMO_TYPE = 0xead3;
			var REACT_LAZY_TYPE = 0xead4;
			var REACT_BLOCK_TYPE = 0xead9;
			var REACT_SERVER_BLOCK_TYPE = 0xeada;
			var REACT_FUNDAMENTAL_TYPE = 0xead5;
			var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
			var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

			if (typeof Symbol === 'function' && Symbol.for) {
			  var symbolFor = Symbol.for;
			  REACT_ELEMENT_TYPE = symbolFor('react.element');
			  REACT_PORTAL_TYPE = symbolFor('react.portal');
			  exports.Fragment = symbolFor('react.fragment');
			  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
			  REACT_PROFILER_TYPE = symbolFor('react.profiler');
			  REACT_PROVIDER_TYPE = symbolFor('react.provider');
			  REACT_CONTEXT_TYPE = symbolFor('react.context');
			  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
			  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
			  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
			  REACT_MEMO_TYPE = symbolFor('react.memo');
			  REACT_LAZY_TYPE = symbolFor('react.lazy');
			  REACT_BLOCK_TYPE = symbolFor('react.block');
			  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
			  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
			  symbolFor('react.scope');
			  symbolFor('react.opaque.id');
			  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
			  symbolFor('react.offscreen');
			  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
			}

			var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
			var FAUX_ITERATOR_SYMBOL = '@@iterator';
			function getIteratorFn(maybeIterable) {
			  if (maybeIterable === null || typeof maybeIterable !== 'object') {
			    return null;
			  }

			  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

			  if (typeof maybeIterator === 'function') {
			    return maybeIterator;
			  }

			  return null;
			}

			var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

			function error(format) {
			  {
			    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			      args[_key2 - 1] = arguments[_key2];
			    }

			    printWarning('error', format, args);
			  }
			}

			function printWarning(level, format, args) {
			  // When changing this logic, you might want to also
			  // update consoleWithStackDev.www.js as well.
			  {
			    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
			    var stack = ReactDebugCurrentFrame.getStackAddendum();

			    if (stack !== '') {
			      format += '%s';
			      args = args.concat([stack]);
			    }

			    var argsWithFormat = args.map(function (item) {
			      return '' + item;
			    }); // Careful: RN currently depends on this prefix

			    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
			    // breaks IE9: https://github.com/facebook/react/issues/13610
			    // eslint-disable-next-line react-internal/no-production-logging

			    Function.prototype.apply.call(console[level], console, argsWithFormat);
			  }
			}

			// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

			var enableScopeAPI = false; // Experimental Create Event Handle API.

			function isValidElementType(type) {
			  if (typeof type === 'string' || typeof type === 'function') {
			    return true;
			  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


			  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
			    return true;
			  }

			  if (typeof type === 'object' && type !== null) {
			    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
			      return true;
			    }
			  }

			  return false;
			}

			function getWrappedName(outerType, innerType, wrapperName) {
			  var functionName = innerType.displayName || innerType.name || '';
			  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
			}

			function getContextName(type) {
			  return type.displayName || 'Context';
			}

			function getComponentName(type) {
			  if (type == null) {
			    // Host root, text node or just invalid type.
			    return null;
			  }

			  {
			    if (typeof type.tag === 'number') {
			      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
			    }
			  }

			  if (typeof type === 'function') {
			    return type.displayName || type.name || null;
			  }

			  if (typeof type === 'string') {
			    return type;
			  }

			  switch (type) {
			    case exports.Fragment:
			      return 'Fragment';

			    case REACT_PORTAL_TYPE:
			      return 'Portal';

			    case REACT_PROFILER_TYPE:
			      return 'Profiler';

			    case REACT_STRICT_MODE_TYPE:
			      return 'StrictMode';

			    case REACT_SUSPENSE_TYPE:
			      return 'Suspense';

			    case REACT_SUSPENSE_LIST_TYPE:
			      return 'SuspenseList';
			  }

			  if (typeof type === 'object') {
			    switch (type.$$typeof) {
			      case REACT_CONTEXT_TYPE:
			        var context = type;
			        return getContextName(context) + '.Consumer';

			      case REACT_PROVIDER_TYPE:
			        var provider = type;
			        return getContextName(provider._context) + '.Provider';

			      case REACT_FORWARD_REF_TYPE:
			        return getWrappedName(type, type.render, 'ForwardRef');

			      case REACT_MEMO_TYPE:
			        return getComponentName(type.type);

			      case REACT_BLOCK_TYPE:
			        return getComponentName(type._render);

			      case REACT_LAZY_TYPE:
			        {
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

			// Helpers to patch console.logs to avoid logging during side-effect free
			// replaying on render function. This currently only patches the object
			// lazily which won't cover if the log function was extracted eagerly.
			// We could also eagerly patch the method.
			var disabledDepth = 0;
			var prevLog;
			var prevInfo;
			var prevWarn;
			var prevError;
			var prevGroup;
			var prevGroupCollapsed;
			var prevGroupEnd;

			function disabledLog() {}

			disabledLog.__reactDisabledLog = true;
			function disableLogs() {
			  {
			    if (disabledDepth === 0) {
			      /* eslint-disable react-internal/no-production-logging */
			      prevLog = console.log;
			      prevInfo = console.info;
			      prevWarn = console.warn;
			      prevError = console.error;
			      prevGroup = console.group;
			      prevGroupCollapsed = console.groupCollapsed;
			      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

			      var props = {
			        configurable: true,
			        enumerable: true,
			        value: disabledLog,
			        writable: true
			      }; // $FlowFixMe Flow thinks console is immutable.

			      Object.defineProperties(console, {
			        info: props,
			        log: props,
			        warn: props,
			        error: props,
			        group: props,
			        groupCollapsed: props,
			        groupEnd: props
			      });
			      /* eslint-enable react-internal/no-production-logging */
			    }

			    disabledDepth++;
			  }
			}
			function reenableLogs() {
			  {
			    disabledDepth--;

			    if (disabledDepth === 0) {
			      /* eslint-disable react-internal/no-production-logging */
			      var props = {
			        configurable: true,
			        enumerable: true,
			        writable: true
			      }; // $FlowFixMe Flow thinks console is immutable.

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
			      /* eslint-enable react-internal/no-production-logging */
			    }

			    if (disabledDepth < 0) {
			      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
			    }
			  }
			}

			var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
			var prefix;
			function describeBuiltInComponentFrame(name, source, ownerFn) {
			  {
			    if (prefix === undefined) {
			      // Extract the VM specific prefix used by each line.
			      try {
			        throw Error();
			      } catch (x) {
			        var match = x.stack.trim().match(/\n( *(at )?)/);
			        prefix = match && match[1] || '';
			      }
			    } // We use the prefix to ensure our stacks line up with native stack frames.


			    return '\n' + prefix + name;
			  }
			}
			var reentry = false;
			var componentFrameCache;

			{
			  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
			  componentFrameCache = new PossiblyWeakMap();
			}

			function describeNativeComponentFrame(fn, construct) {
			  // If something asked for a stack inside a fake render, it should get ignored.
			  if (!fn || reentry) {
			    return '';
			  }

			  {
			    var frame = componentFrameCache.get(fn);

			    if (frame !== undefined) {
			      return frame;
			    }
			  }

			  var control;
			  reentry = true;
			  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

			  Error.prepareStackTrace = undefined;
			  var previousDispatcher;

			  {
			    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
			    // for warnings.

			    ReactCurrentDispatcher.current = null;
			    disableLogs();
			  }

			  try {
			    // This should throw.
			    if (construct) {
			      // Something should be setting the props in the constructor.
			      var Fake = function () {
			        throw Error();
			      }; // $FlowFixMe


			      Object.defineProperty(Fake.prototype, 'props', {
			        set: function () {
			          // We use a throwing setter instead of frozen or non-writable props
			          // because that won't throw in a non-strict mode function.
			          throw Error();
			        }
			      });

			      if (typeof Reflect === 'object' && Reflect.construct) {
			        // We construct a different control for this case to include any extra
			        // frames added by the construct call.
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
			    // This is inlined manually because closure doesn't do it for us.
			    if (sample && control && typeof sample.stack === 'string') {
			      // This extracts the first frame from the sample that isn't also in the control.
			      // Skipping one frame that we assume is the frame that calls the two.
			      var sampleLines = sample.stack.split('\n');
			      var controlLines = control.stack.split('\n');
			      var s = sampleLines.length - 1;
			      var c = controlLines.length - 1;

			      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
			        // We expect at least one stack frame to be shared.
			        // Typically this will be the root most one. However, stack frames may be
			        // cut off due to maximum stack limits. In this case, one maybe cut off
			        // earlier than the other. We assume that the sample is longer or the same
			        // and there for cut off earlier. So we should find the root most frame in
			        // the sample somewhere in the control.
			        c--;
			      }

			      for (; s >= 1 && c >= 0; s--, c--) {
			        // Next we find the first one that isn't the same which should be the
			        // frame that called our sample function and the control.
			        if (sampleLines[s] !== controlLines[c]) {
			          // In V8, the first line is describing the message but other VMs don't.
			          // If we're about to return the first line, and the control is also on the same
			          // line, that's a pretty good indicator that our sample threw at same line as
			          // the control. I.e. before we entered the sample frame. So we ignore this result.
			          // This can happen if you passed a class to function component, or non-function.
			          if (s !== 1 || c !== 1) {
			            do {
			              s--;
			              c--; // We may still have similar intermediate frames from the construct call.
			              // The next one that isn't the same should be our match though.

			              if (c < 0 || sampleLines[s] !== controlLines[c]) {
			                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
			                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

			                {
			                  if (typeof fn === 'function') {
			                    componentFrameCache.set(fn, _frame);
			                  }
			                } // Return the line we found.


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
			  } // Fallback to just using the name if we couldn't make it throw.


			  var name = fn ? fn.displayName || fn.name : '';
			  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

			  {
			    if (typeof fn === 'function') {
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
			    return '';
			  }

			  if (typeof type === 'function') {
			    {
			      return describeNativeComponentFrame(type, shouldConstruct(type));
			    }
			  }

			  if (typeof type === 'string') {
			    return describeBuiltInComponentFrame(type);
			  }

			  switch (type) {
			    case REACT_SUSPENSE_TYPE:
			      return describeBuiltInComponentFrame('Suspense');

			    case REACT_SUSPENSE_LIST_TYPE:
			      return describeBuiltInComponentFrame('SuspenseList');
			  }

			  if (typeof type === 'object') {
			    switch (type.$$typeof) {
			      case REACT_FORWARD_REF_TYPE:
			        return describeFunctionComponentFrame(type.render);

			      case REACT_MEMO_TYPE:
			        // Memo may contain any component type so we recursively resolve it.
			        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

			      case REACT_BLOCK_TYPE:
			        return describeFunctionComponentFrame(type._render);

			      case REACT_LAZY_TYPE:
			        {
			          var lazyComponent = type;
			          var payload = lazyComponent._payload;
			          var init = lazyComponent._init;

			          try {
			            // Lazy may contain any component type so we recursively resolve it.
			            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
			          } catch (x) {}
			        }
			    }
			  }

			  return '';
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

			function checkPropTypes(typeSpecs, values, location, componentName, element) {
			  {
			    // $FlowFixMe This is okay but Flow doesn't know it.
			    var has = Function.call.bind(Object.prototype.hasOwnProperty);

			    for (var typeSpecName in typeSpecs) {
			      if (has(typeSpecs, typeSpecName)) {
			        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
			        // fail the render phase where it didn't fail before. So we log it.
			        // After these have been cleaned up, we'll let them throw.

			        try {
			          // This is intentionally an invariant that gets caught. It's the same
			          // behavior as without this statement except with a better message.
			          if (typeof typeSpecs[typeSpecName] !== 'function') {
			            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
			            err.name = 'Invariant Violation';
			            throw err;
			          }

			          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
			        } catch (ex) {
			          error$1 = ex;
			        }

			        if (error$1 && !(error$1 instanceof Error)) {
			          setCurrentlyValidatingElement(element);

			          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

			          setCurrentlyValidatingElement(null);
			        }

			        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
			          // Only monitor this failure once because there tends to be a lot of the
			          // same error.
			          loggedTypeFailures[error$1.message] = true;
			          setCurrentlyValidatingElement(element);

			          error('Failed %s type: %s', location, error$1.message);

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
			    if (hasOwnProperty.call(config, 'ref')) {
			      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

			      if (getter && getter.isReactWarning) {
			        return false;
			      }
			    }
			  }

			  return config.ref !== undefined;
			}

			function hasValidKey(config) {
			  {
			    if (hasOwnProperty.call(config, 'key')) {
			      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

			      if (getter && getter.isReactWarning) {
			        return false;
			      }
			    }
			  }

			  return config.key !== undefined;
			}

			function warnIfStringRefCannotBeAutoConverted(config, self) {
			  {
			    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
			  }
			}

			function defineKeyPropWarningGetter(props, displayName) {
			  {
			    var warnAboutAccessingKey = function () {
			      if (!specialPropKeyWarningShown) {
			        specialPropKeyWarningShown = true;

			        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			      }
			    };

			    warnAboutAccessingKey.isReactWarning = true;
			    Object.defineProperty(props, 'key', {
			      get: warnAboutAccessingKey,
			      configurable: true
			    });
			  }
			}

			function defineRefPropWarningGetter(props, displayName) {
			  {
			    var warnAboutAccessingRef = function () {
			      if (!specialPropRefWarningShown) {
			        specialPropRefWarningShown = true;

			        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
			      }
			    };

			    warnAboutAccessingRef.isReactWarning = true;
			    Object.defineProperty(props, 'ref', {
			      get: warnAboutAccessingRef,
			      configurable: true
			    });
			  }
			}
			/**
			 * Factory method to create a new React element. This no longer adheres to
			 * the class pattern, so do not use new to call it. Also, instanceof check
			 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
			 * if something is a React Element.
			 *
			 * @param {*} type
			 * @param {*} props
			 * @param {*} key
			 * @param {string|object} ref
			 * @param {*} owner
			 * @param {*} self A *temporary* helper to detect places where `this` is
			 * different from the `owner` when React.createElement is called, so that we
			 * can warn. We want to get rid of owner and replace string `ref`s with arrow
			 * functions, and as long as `this` and owner are the same, there will be no
			 * change in behavior.
			 * @param {*} source An annotation object (added by a transpiler or otherwise)
			 * indicating filename, line number, and/or other information.
			 * @internal
			 */


			var ReactElement = function (type, key, ref, self, source, owner, props) {
			  var element = {
			    // This tag allows us to uniquely identify this as a React Element
			    $$typeof: REACT_ELEMENT_TYPE,
			    // Built-in properties that belong on the element
			    type: type,
			    key: key,
			    ref: ref,
			    props: props,
			    // Record the component responsible for creating this element.
			    _owner: owner
			  };

			  {
			    // The validation flag is currently mutative. We put it on
			    // an external backing store so that we can freeze the whole object.
			    // This can be replaced with a WeakMap once they are implemented in
			    // commonly used development environments.
			    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
			    // the validation flag non-enumerable (where possible, which should
			    // include every environment we run tests in), so the test framework
			    // ignores it.

			    Object.defineProperty(element._store, 'validated', {
			      configurable: false,
			      enumerable: false,
			      writable: true,
			      value: false
			    }); // self and source are DEV only properties.

			    Object.defineProperty(element, '_self', {
			      configurable: false,
			      enumerable: false,
			      writable: false,
			      value: self
			    }); // Two elements created in two different places should be considered
			    // equal for testing purposes and therefore we hide it from enumeration.

			    Object.defineProperty(element, '_source', {
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
			/**
			 * https://github.com/reactjs/rfcs/pull/107
			 * @param {*} type
			 * @param {object} props
			 * @param {string} key
			 */

			function jsxDEV(type, config, maybeKey, source, self) {
			  {
			    var propName; // Reserved names are extracted

			    var props = {};
			    var key = null;
			    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
			    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
			    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
			    // but as an intermediary step, we will use jsxDEV for everything except
			    // <div {...props} key="Hi" />, because we aren't currently able to tell if
			    // key is explicitly declared to be undefined or not.

			    if (maybeKey !== undefined) {
			      key = '' + maybeKey;
			    }

			    if (hasValidKey(config)) {
			      key = '' + config.key;
			    }

			    if (hasValidRef(config)) {
			      ref = config.ref;
			      warnIfStringRefCannotBeAutoConverted(config, self);
			    } // Remaining properties are added to a new props object


			    for (propName in config) {
			      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
			        props[propName] = config[propName];
			      }
			    } // Resolve default props


			    if (type && type.defaultProps) {
			      var defaultProps = type.defaultProps;

			      for (propName in defaultProps) {
			        if (props[propName] === undefined) {
			          props[propName] = defaultProps[propName];
			        }
			      }
			    }

			    if (key || ref) {
			      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

			      if (key) {
			        defineKeyPropWarningGetter(props, displayName);
			      }

			      if (ref) {
			        defineRefPropWarningGetter(props, displayName);
			      }
			    }

			    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
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
			/**
			 * Verifies the object is a ReactElement.
			 * See https://reactjs.org/docs/react-api.html#isvalidelement
			 * @param {?object} object
			 * @return {boolean} True if `object` is a ReactElement.
			 * @final
			 */

			function isValidElement(object) {
			  {
			    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			  }
			}

			function getDeclarationErrorAddendum() {
			  {
			    if (ReactCurrentOwner$1.current) {
			      var name = getComponentName(ReactCurrentOwner$1.current.type);

			      if (name) {
			        return '\n\nCheck the render method of `' + name + '`.';
			      }
			    }

			    return '';
			  }
			}

			function getSourceInfoErrorAddendum(source) {
			  {

			    return '';
			  }
			}
			/**
			 * Warn if there's no key explicitly set on dynamic arrays of children or
			 * object keys are not valid. This allows us to keep track of children between
			 * updates.
			 */


			var ownerHasKeyUseWarning = {};

			function getCurrentComponentErrorInfo(parentType) {
			  {
			    var info = getDeclarationErrorAddendum();

			    if (!info) {
			      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

			      if (parentName) {
			        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
			      }
			    }

			    return info;
			  }
			}
			/**
			 * Warn if the element doesn't have an explicit key assigned to it.
			 * This element is in an array. The array could grow and shrink or be
			 * reordered. All children that haven't already been validated are required to
			 * have a "key" property assigned to it. Error statuses are cached so a warning
			 * will only be shown once.
			 *
			 * @internal
			 * @param {ReactElement} element Element that requires a key.
			 * @param {*} parentType element's parent's type.
			 */


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

			    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
			    // property, it may be the creator of the child that's responsible for
			    // assigning it a key.

			    var childOwner = '';

			    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
			      // Give the component that originally created this child.
			      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
			    }

			    setCurrentlyValidatingElement$1(element);

			    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

			    setCurrentlyValidatingElement$1(null);
			  }
			}
			/**
			 * Ensure that every element either is passed in a static location, in an
			 * array with an explicit keys property defined, or in an object literal
			 * with valid key property.
			 *
			 * @internal
			 * @param {ReactNode} node Statically passed child of any type.
			 * @param {*} parentType node's parent's type.
			 */


			function validateChildKeys(node, parentType) {
			  {
			    if (typeof node !== 'object') {
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
			      // This element was passed in a valid location.
			      if (node._store) {
			        node._store.validated = true;
			      }
			    } else if (node) {
			      var iteratorFn = getIteratorFn(node);

			      if (typeof iteratorFn === 'function') {
			        // Entry iterators used to provide implicit keys,
			        // but now we print a separate warning for them later.
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
			/**
			 * Given an element, validate that its props follow the propTypes definition,
			 * provided by the type.
			 *
			 * @param {ReactElement} element
			 */


			function validatePropTypes(element) {
			  {
			    var type = element.type;

			    if (type === null || type === undefined || typeof type === 'string') {
			      return;
			    }

			    var propTypes;

			    if (typeof type === 'function') {
			      propTypes = type.propTypes;
			    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
			    // Inner props are checked in the reconciler.
			    type.$$typeof === REACT_MEMO_TYPE)) {
			      propTypes = type.propTypes;
			    } else {
			      return;
			    }

			    if (propTypes) {
			      // Intentionally inside to avoid triggering lazy initializers:
			      var name = getComponentName(type);
			      checkPropTypes(propTypes, element.props, 'prop', name, element);
			    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
			      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

			      var _name = getComponentName(type);

			      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
			    }

			    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
			      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
			    }
			  }
			}
			/**
			 * Given a fragment, validate that it can only be provided with fragment props
			 * @param {ReactElement} fragment
			 */


			function validateFragmentProps(fragment) {
			  {
			    var keys = Object.keys(fragment.props);

			    for (var i = 0; i < keys.length; i++) {
			      var key = keys[i];

			      if (key !== 'children' && key !== 'key') {
			        setCurrentlyValidatingElement$1(fragment);

			        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

			        setCurrentlyValidatingElement$1(null);
			        break;
			      }
			    }

			    if (fragment.ref !== null) {
			      setCurrentlyValidatingElement$1(fragment);

			      error('Invalid attribute `ref` supplied to `React.Fragment`.');

			      setCurrentlyValidatingElement$1(null);
			    }
			  }
			}

			function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
			  {
			    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
			    // succeed and there will likely be errors in render.

			    if (!validType) {
			      var info = '';

			      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
			        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
			      }

			      var sourceInfo = getSourceInfoErrorAddendum();

			      if (sourceInfo) {
			        info += sourceInfo;
			      } else {
			        info += getDeclarationErrorAddendum();
			      }

			      var typeString;

			      if (type === null) {
			        typeString = 'null';
			      } else if (Array.isArray(type)) {
			        typeString = 'array';
			      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
			        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
			        info = ' Did you accidentally export a JSX literal instead of a component?';
			      } else {
			        typeString = typeof type;
			      }

			      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
			    }

			    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
			    // TODO: Drop this when these are no longer allowed as the type argument.

			    if (element == null) {
			      return element;
			    } // Skip key warning if the type isn't valid since our key validation logic
			    // doesn't expect a non-string/function type and can throw confusing errors.
			    // We don't want exception behavior to differ between dev and prod.
			    // (Rendering will throw with a helpful message and as soon as the type is
			    // fixed, the key warnings will appear.)


			    if (validType) {
			      var children = props.children;

			      if (children !== undefined) {
			        if (isStaticChildren) {
			          if (Array.isArray(children)) {
			            for (var i = 0; i < children.length; i++) {
			              validateChildKeys(children[i], type);
			            }

			            if (Object.freeze) {
			              Object.freeze(children);
			            }
			          } else {
			            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
			          }
			        } else {
			          validateChildKeys(children, type);
			        }
			      }
			    }

			    if (type === exports.Fragment) {
			      validateFragmentProps(element);
			    } else {
			      validatePropTypes(element);
			    }

			    return element;
			  }
			} // These two functions exist to still get child warnings in dev
			// even with the prod transform. This means that jsxDEV is purely
			// opt-in behavior for better messages but that we won't stop
			// giving you warnings if you use production apis.

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

			var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
			// for now we can ship identical prod functions

			var jsxs =  jsxWithValidationStatic ;

			exports.jsx = jsx;
			exports.jsxs = jsxs;
			  })();
			} 
		} (reactJsxRuntime_development));
		return reactJsxRuntime_development;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		if (process.env.NODE_ENV === 'production') {
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		} else {
		  jsxRuntime.exports = requireReactJsxRuntime_development();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	function Button(props) {
	  const { variant = "primary", children, className, color, ...rest } = props;
	  if (["secondaryOutlined", "primaryBlue", "secondaryOrange", "primaryOutline", "transparent", "primaryMain"].includes(variant)) {
	    return /* @__PURE__ */ jsxRuntimeExports.jsx(
	      MuiButton__default.default,
	      {
	        ...{
	          variant,
	          className,
	          disableElevation: true,
	          ...rest
	        },
	        children
	      }
	    );
	  }
	  let muiVariant = "contained";
	  let muiColor = "primary";
	  let buttonClassName = "";
	  switch (variant) {
	    case "primary":
	      muiVariant = "contained";
	      muiColor = "primary";
	      break;
	    case "secondary":
	      muiVariant = "contained";
	      muiColor = "secondary";
	      break;
	    case "system":
	      muiVariant = "contained";
	      buttonClassName = "system-button";
	      break;
	    case "text":
	      muiVariant = "text";
	      break;
	  }
	  return /* @__PURE__ */ jsxRuntimeExports.jsx(
	    MuiButton__default.default,
	    {
	      variant: muiVariant,
	      color: muiColor,
	      className: buttonClassName ? `${buttonClassName} ${className || ""}` : className,
	      disableElevation: true,
	      ...rest,
	      children
	    }
	  );
	}
	Button.displayName = "Button";

	const Title = material.styled(material.Typography)(() => ({
	  fontSize: "14px",
	  fontWeight: 600,
	  lineHeight: "22px",
	  letterSpacing: "-0.28px",
	  pb: 1,
	  position: "relative",
	  display: "flex"
	}));
	const TextFieldStyled = material.styled(material.TextField)(({ theme }) => ({
	  boxSizing: "border-box",
	  "& label.Mui-focused": { color: "#0F5C5D" },
	  "& .MuiOutlinedInput-root": {
	    lineHeight: "1.5",
	    backgroundColor: theme.palette.primary.hue,
	    "&.MuiInputBase-multiline": {
	      padding: 0,
	      "& .MuiInputBase-inputMultiline": {
	        padding: `12px 16px`
	      }
	    },
	    "& fieldset": {
	      borderColor: theme.palette.primary.main60,
	      borderWidth: "1px",
	      borderRadius: "8px"
	    },
	    "&.Mui-disabled": {
	      backgroundColor: "#D8DFE3",
	      borderColor: "#828282",
	      "& .MuiInputBase-input": {
	        color: "#828282",
	        WebkitTextFillColor: "#828282"
	      }
	    },
	    "&:hover fieldset": {
	      borderColor: "#0F5C5D"
	    },
	    "&.Mui-focused fieldset": {
	      borderColor: "#0F5C5D",
	      color: "#0F5C5D"
	    },
	    "& .MuiOutlinedInput-input": {
	      fontSize: "14px",
	      fontWeight: 400,
	      padding: "16px",
	      "&::placeholder": {
	        color: "#293747",
	        opacity: 1
	      }
	    }
	  }
	}));

	function _objectWithoutPropertiesLoose(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (-1 !== e.indexOf(n)) continue;
	    t[n] = r[n];
	  }
	  return t;
	}

	function _extends$1() {
	  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends$1.apply(null, arguments);
	}

	var propTypes = {exports: {}};

	var reactIs$1 = {exports: {}};

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

	function requireReactIs_production_min () {
		if (hasRequiredReactIs_production_min) return reactIs_production_min;
		hasRequiredReactIs_production_min = 1;
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
		Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
		function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
		reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
		reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
		reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
		return reactIs_production_min;
	}

	var reactIs_development$1 = {};

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_development$1;

	function requireReactIs_development$1 () {
		if (hasRequiredReactIs_development$1) return reactIs_development$1;
		hasRequiredReactIs_development$1 = 1;



		if (process.env.NODE_ENV !== "production") {
		  (function() {

		// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
		// nor polyfill, then a plain number is used for performance.
		var hasSymbol = typeof Symbol === 'function' && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
		// (unstable) APIs that have been removed. Can we remove the symbols?

		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

		function isValidElementType(type) {
		  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
		  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}

		function typeOf(object) {
		  if (typeof object === 'object' && object !== null) {
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

		  return undefined;
		} // AsyncMode is deprecated along with isAsyncMode

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
		var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

		function isAsyncMode(object) {
		  {
		    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
		      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

		      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

		reactIs_development$1.AsyncMode = AsyncMode;
		reactIs_development$1.ConcurrentMode = ConcurrentMode;
		reactIs_development$1.ContextConsumer = ContextConsumer;
		reactIs_development$1.ContextProvider = ContextProvider;
		reactIs_development$1.Element = Element;
		reactIs_development$1.ForwardRef = ForwardRef;
		reactIs_development$1.Fragment = Fragment;
		reactIs_development$1.Lazy = Lazy;
		reactIs_development$1.Memo = Memo;
		reactIs_development$1.Portal = Portal;
		reactIs_development$1.Profiler = Profiler;
		reactIs_development$1.StrictMode = StrictMode;
		reactIs_development$1.Suspense = Suspense;
		reactIs_development$1.isAsyncMode = isAsyncMode;
		reactIs_development$1.isConcurrentMode = isConcurrentMode;
		reactIs_development$1.isContextConsumer = isContextConsumer;
		reactIs_development$1.isContextProvider = isContextProvider;
		reactIs_development$1.isElement = isElement;
		reactIs_development$1.isForwardRef = isForwardRef;
		reactIs_development$1.isFragment = isFragment;
		reactIs_development$1.isLazy = isLazy;
		reactIs_development$1.isMemo = isMemo;
		reactIs_development$1.isPortal = isPortal;
		reactIs_development$1.isProfiler = isProfiler;
		reactIs_development$1.isStrictMode = isStrictMode;
		reactIs_development$1.isSuspense = isSuspense;
		reactIs_development$1.isValidElementType = isValidElementType;
		reactIs_development$1.typeOf = typeOf;
		  })();
		}
		return reactIs_development$1;
	}

	var hasRequiredReactIs$1;

	function requireReactIs$1 () {
		if (hasRequiredReactIs$1) return reactIs$1.exports;
		hasRequiredReactIs$1 = 1;

		if (process.env.NODE_ENV === 'production') {
		  reactIs$1.exports = requireReactIs_production_min();
		} else {
		  reactIs$1.exports = requireReactIs_development$1();
		}
		return reactIs$1.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;

	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	var has;
	var hasRequiredHas;

	function requireHas () {
		if (hasRequiredHas) return has;
		hasRequiredHas = 1;
		has = Function.call.bind(Object.prototype.hasOwnProperty);
		return has;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var checkPropTypes_1;
	var hasRequiredCheckPropTypes;

	function requireCheckPropTypes () {
		if (hasRequiredCheckPropTypes) return checkPropTypes_1;
		hasRequiredCheckPropTypes = 1;

		var printWarning = function() {};

		if (process.env.NODE_ENV !== 'production') {
		  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
		  var loggedTypeFailures = {};
		  var has = /*@__PURE__*/ requireHas();

		  printWarning = function(text) {
		    var message = 'Warning: ' + text;
		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }
		    try {
		      // --- Welcome to debugging React ---
		      // This error was thrown as a convenience so that you can use this stack
		      // to find the callsite that caused this warning to fire.
		      throw new Error(message);
		    } catch (x) { /**/ }
		  };
		}

		/**
		 * Assert that the values match with the type specs.
		 * Error messages are memorized and will only be shown once.
		 *
		 * @param {object} typeSpecs Map of name to a ReactPropType
		 * @param {object} values Runtime values that need to be type-checked
		 * @param {string} location e.g. "prop", "context", "child context"
		 * @param {string} componentName Name of the component for error messages.
		 * @param {?Function} getStack Returns the component stack.
		 * @private
		 */
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		  if (process.env.NODE_ENV !== 'production') {
		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error;
		        // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.
		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            var err = Error(
		              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
		              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
		              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
		            );
		            err.name = 'Invariant Violation';
		            throw err;
		          }
		          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
		        } catch (ex) {
		          error = ex;
		        }
		        if (error && !(error instanceof Error)) {
		          printWarning(
		            (componentName || 'React class') + ': type specification of ' +
		            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
		            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
		            'You may have forgotten to pass an argument to the type checker ' +
		            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
		            'shape all require an argument).'
		          );
		        }
		        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error.message] = true;

		          var stack = getStack ? getStack() : '';

		          printWarning(
		            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
		          );
		        }
		      }
		    }
		  }
		}

		/**
		 * Resets warning cache when testing.
		 *
		 * @private
		 */
		checkPropTypes.resetWarningCache = function() {
		  if (process.env.NODE_ENV !== 'production') {
		    loggedTypeFailures = {};
		  }
		};

		checkPropTypes_1 = checkPropTypes;
		return checkPropTypes_1;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithTypeCheckers;
	var hasRequiredFactoryWithTypeCheckers;

	function requireFactoryWithTypeCheckers () {
		if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
		hasRequiredFactoryWithTypeCheckers = 1;

		var ReactIs = requireReactIs$1();
		var assign = requireObjectAssign();

		var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
		var has = /*@__PURE__*/ requireHas();
		var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();

		var printWarning = function() {};

		if (process.env.NODE_ENV !== 'production') {
		  printWarning = function(text) {
		    var message = 'Warning: ' + text;
		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }
		    try {
		      // --- Welcome to debugging React ---
		      // This error was thrown as a convenience so that you can use this stack
		      // to find the callsite that caused this warning to fire.
		      throw new Error(message);
		    } catch (x) {}
		  };
		}

		function emptyFunctionThatReturnsNull() {
		  return null;
		}

		factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
		  /* global Symbol */
		  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
		  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

		  /**
		   * Returns the iterator method function contained on the iterable object.
		   *
		   * Be sure to invoke the function with the iterable as context:
		   *
		   *     var iteratorFn = getIteratorFn(myIterable);
		   *     if (iteratorFn) {
		   *       var iterator = iteratorFn.call(myIterable);
		   *       ...
		   *     }
		   *
		   * @param {?object} maybeIterable
		   * @return {?function}
		   */
		  function getIteratorFn(maybeIterable) {
		    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
		    if (typeof iteratorFn === 'function') {
		      return iteratorFn;
		    }
		  }

		  /**
		   * Collection of methods that allow declaration and validation of props that are
		   * supplied to React components. Example usage:
		   *
		   *   var Props = require('ReactPropTypes');
		   *   var MyArticle = React.createClass({
		   *     propTypes: {
		   *       // An optional string prop named "description".
		   *       description: Props.string,
		   *
		   *       // A required enum prop named "category".
		   *       category: Props.oneOf(['News','Photos']).isRequired,
		   *
		   *       // A prop named "dialog" that requires an instance of Dialog.
		   *       dialog: Props.instanceOf(Dialog).isRequired
		   *     },
		   *     render: function() { ... }
		   *   });
		   *
		   * A more formal specification of how these methods are used:
		   *
		   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		   *   decl := ReactPropTypes.{type}(.isRequired)?
		   *
		   * Each and every declaration produces a function with the same signature. This
		   * allows the creation of custom validation functions. For example:
		   *
		   *  var MyLink = React.createClass({
		   *    propTypes: {
		   *      // An optional string or URI prop named "href".
		   *      href: function(props, propName, componentName) {
		   *        var propValue = props[propName];
		   *        if (propValue != null && typeof propValue !== 'string' &&
		   *            !(propValue instanceof URI)) {
		   *          return new Error(
		   *            'Expected a string or an URI for ' + propName + ' in ' +
		   *            componentName
		   *          );
		   *        }
		   *      }
		   *    },
		   *    render: function() {...}
		   *  });
		   *
		   * @internal
		   */

		  var ANONYMOUS = '<<anonymous>>';

		  // Important!
		  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
		  var ReactPropTypes = {
		    array: createPrimitiveTypeChecker('array'),
		    bigint: createPrimitiveTypeChecker('bigint'),
		    bool: createPrimitiveTypeChecker('boolean'),
		    func: createPrimitiveTypeChecker('function'),
		    number: createPrimitiveTypeChecker('number'),
		    object: createPrimitiveTypeChecker('object'),
		    string: createPrimitiveTypeChecker('string'),
		    symbol: createPrimitiveTypeChecker('symbol'),

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
		    exact: createStrictShapeTypeChecker,
		  };

		  /**
		   * inlined Object.is polyfill to avoid requiring consumers ship their own
		   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		   */
		  /*eslint-disable no-self-compare*/
		  function is(x, y) {
		    // SameValue algorithm
		    if (x === y) {
		      // Steps 1-5, 7-10
		      // Steps 6.b-6.e: +0 != -0
		      return x !== 0 || 1 / x === 1 / y;
		    } else {
		      // Step 6.a: NaN == NaN
		      return x !== x && y !== y;
		    }
		  }
		  /*eslint-enable no-self-compare*/

		  /**
		   * We use an Error-like object for backward compatibility as people may call
		   * PropTypes directly and inspect their output. However, we don't use real
		   * Errors anymore. We don't inspect their stack anyway, and creating them
		   * is prohibitively expensive if they are created too often, such as what
		   * happens in oneOfType() for any type before the one that matched.
		   */
		  function PropTypeError(message, data) {
		    this.message = message;
		    this.data = data && typeof data === 'object' ? data: {};
		    this.stack = '';
		  }
		  // Make `instanceof Error` still work for returned errors.
		  PropTypeError.prototype = Error.prototype;

		  function createChainableTypeChecker(validate) {
		    if (process.env.NODE_ENV !== 'production') {
		      var manualPropTypeCallCache = {};
		      var manualPropTypeWarningCount = 0;
		    }
		    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
		      componentName = componentName || ANONYMOUS;
		      propFullName = propFullName || propName;

		      if (secret !== ReactPropTypesSecret) {
		        if (throwOnDirectAccess) {
		          // New behavior only for users of `prop-types` package
		          var err = new Error(
		            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		            'Use `PropTypes.checkPropTypes()` to call them. ' +
		            'Read more at http://fb.me/use-check-prop-types'
		          );
		          err.name = 'Invariant Violation';
		          throw err;
		        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
		          // Old behavior for people using React.PropTypes
		          var cacheKey = componentName + ':' + propName;
		          if (
		            !manualPropTypeCallCache[cacheKey] &&
		            // Avoid spamming the console because they are often not actionable except for lib authors
		            manualPropTypeWarningCount < 3
		          ) {
		            printWarning(
		              'You are manually calling a React.PropTypes validation ' +
		              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
		              'and will throw in the standalone `prop-types` package. ' +
		              'You may be seeing this warning due to a third-party PropTypes ' +
		              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
		            );
		            manualPropTypeCallCache[cacheKey] = true;
		            manualPropTypeWarningCount++;
		          }
		        }
		      }
		      if (props[propName] == null) {
		        if (isRequired) {
		          if (props[propName] === null) {
		            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
		          }
		          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
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
		        // `propValue` being instance of, say, date/regexp, pass the 'object'
		        // check, but we can offer a more precise error message here rather than
		        // 'of type `object`'.
		        var preciseType = getPreciseType(propValue);

		        return new PropTypeError(
		          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
		          {expectedType: expectedType}
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
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
		      }
		      var propValue = props[propName];
		      if (!Array.isArray(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
		      }
		      for (var i = 0; i < propValue.length; i++) {
		        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
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
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
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
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createEnumTypeChecker(expectedValues) {
		    if (!Array.isArray(expectedValues)) {
		      if (process.env.NODE_ENV !== 'production') {
		        if (arguments.length > 1) {
		          printWarning(
		            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
		            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
		          );
		        } else {
		          printWarning('Invalid argument supplied to oneOf, expected an array.');
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
		        if (type === 'symbol') {
		          return String(value);
		        }
		        return value;
		      });
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createObjectOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
		      }
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
		      }
		      for (var key in propValue) {
		        if (has(propValue, key)) {
		          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
		      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
		      return emptyFunctionThatReturnsNull;
		    }

		    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		      var checker = arrayOfTypeCheckers[i];
		      if (typeof checker !== 'function') {
		        printWarning(
		          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
		          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
		        );
		        return emptyFunctionThatReturnsNull;
		      }
		    }

		    function validate(props, propName, componentName, location, propFullName) {
		      var expectedTypes = [];
		      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		        var checker = arrayOfTypeCheckers[i];
		        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
		        if (checkerResult == null) {
		          return null;
		        }
		        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
		          expectedTypes.push(checkerResult.data.expectedType);
		        }
		      }
		      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createNodeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!isNode(props[propName])) {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function invalidValidatorError(componentName, location, propFullName, key, type) {
		    return new PropTypeError(
		      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
		      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
		    );
		  }

		  function createShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      for (var key in shapeTypes) {
		        var checker = shapeTypes[key];
		        if (typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      // We need to check all keys in case some are required but missing from props.
		      var allKeys = assign({}, props[propName], shapeTypes);
		      for (var key in allKeys) {
		        var checker = shapeTypes[key];
		        if (has(shapeTypes, key) && typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }
		        if (!checker) {
		          return new PropTypeError(
		            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
		            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
		            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
		          );
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
		      case 'number':
		      case 'string':
		      case 'undefined':
		        return true;
		      case 'boolean':
		        return !propValue;
		      case 'object':
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
		            // Iterator will provide entry [k,v] tuples rather than values.
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
		    // Native Symbol.
		    if (propType === 'symbol') {
		      return true;
		    }

		    // falsy value can't be a Symbol
		    if (!propValue) {
		      return false;
		    }

		    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
		    if (propValue['@@toStringTag'] === 'Symbol') {
		      return true;
		    }

		    // Fallback for non-spec compliant Symbols which are polyfilled.
		    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
		      return true;
		    }

		    return false;
		  }

		  // Equivalent of `typeof` but with special handling for array and regexp.
		  function getPropType(propValue) {
		    var propType = typeof propValue;
		    if (Array.isArray(propValue)) {
		      return 'array';
		    }
		    if (propValue instanceof RegExp) {
		      // Old webkits (at least until Android 4.0) return 'function' rather than
		      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
		      // passes PropTypes.object.
		      return 'object';
		    }
		    if (isSymbol(propType, propValue)) {
		      return 'symbol';
		    }
		    return propType;
		  }

		  // This handles more types than `getPropType`. Only used for error messages.
		  // See `createPrimitiveTypeChecker`.
		  function getPreciseType(propValue) {
		    if (typeof propValue === 'undefined' || propValue === null) {
		      return '' + propValue;
		    }
		    var propType = getPropType(propValue);
		    if (propType === 'object') {
		      if (propValue instanceof Date) {
		        return 'date';
		      } else if (propValue instanceof RegExp) {
		        return 'regexp';
		      }
		    }
		    return propType;
		  }

		  // Returns a string that is postfixed to a warning about an invalid type.
		  // For example, "undefined" or "of type array"
		  function getPostfixForTypeWarning(value) {
		    var type = getPreciseType(value);
		    switch (type) {
		      case 'array':
		      case 'object':
		        return 'an ' + type;
		      case 'boolean':
		      case 'date':
		      case 'regexp':
		        return 'a ' + type;
		      default:
		        return type;
		    }
		  }

		  // Returns class name of the object, if any.
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

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;

	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;

		var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();

		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;

		factoryWithThrowingShims = function() {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      // It is still safe when called from React.
		      return;
		    }
		    var err = new Error(
		      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		      'Use PropTypes.checkPropTypes() to call them. ' +
		      'Read more at http://fb.me/use-check-prop-types'
		    );
		    err.name = 'Invariant Violation';
		    throw err;
		  }	  shim.isRequired = shim;
		  function getShim() {
		    return shim;
		  }	  // Important!
		  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
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

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredPropTypes;

	function requirePropTypes () {
		if (hasRequiredPropTypes) return propTypes.exports;
		hasRequiredPropTypes = 1;
		if (process.env.NODE_ENV !== 'production') {
		  var ReactIs = requireReactIs$1();

		  // By explicitly using `prop-types` you are opting into new development behavior.
		  // http://fb.me/prop-types-in-prod
		  var throwOnDirectAccess = true;
		  propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
		} else {
		  // By explicitly using `prop-types` you are opting into new production behavior.
		  // http://fb.me/prop-types-in-prod
		  propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
		}
		return propTypes.exports;
	}

	var propTypesExports = /*@__PURE__*/ requirePropTypes();
	const PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

	function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

	function composeClasses(slots, getUtilityClass, classes = undefined) {
	  const output = {};
	  Object.keys(slots).forEach(
	  // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
	  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
	  slot => {
	    output[slot] = slots[slot].reduce((acc, key) => {
	      if (key) {
	        const utilityClass = getUtilityClass(key);
	        if (utilityClass !== '') {
	          acc.push(utilityClass);
	        }
	        if (classes && classes[key]) {
	          acc.push(classes[key]);
	        }
	      }
	      return acc;
	    }, []).join(' ');
	  });
	  return output;
	}

	/**
	 * WARNING: Don't import this directly.
	 * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
	 * @param {number} code
	 */
	function formatMuiErrorMessage$1(code) {
	  // Apply babel-plugin-transform-template-literals in loose mode
	  // loose mode is safe if we're concatenating primitives
	  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
	  /* eslint-disable prefer-template */
	  let url = 'https://mui.com/production-error/?code=' + code;
	  for (let i = 1; i < arguments.length; i += 1) {
	    // rest params over-transpile for this case
	    // eslint-disable-next-line prefer-rest-params
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }
	  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
	  /* eslint-enable prefer-template */
	}

	const formatMuiErrorMessage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: formatMuiErrorMessage$1
	}, Symbol.toStringTag, { value: 'Module' }));

	// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
	//
	// A strict capitalization should uppercase the first letter of each word in the sentence.
	// We only handle the first word.
	function capitalize$1(string) {
	  if (typeof string !== 'string') {
	    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage$1(7));
	  }
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const capitalize = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: capitalize$1
	}, Symbol.toStringTag, { value: 'Module' }));

	// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
	function isPlainObject(item) {
	  if (typeof item !== 'object' || item === null) {
	    return false;
	  }
	  const prototype = Object.getPrototypeOf(item);
	  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
	}
	function deepClone(source) {
	  if ( /*#__PURE__*/React__namespace.isValidElement(source) || !isPlainObject(source)) {
	    return source;
	  }
	  const output = {};
	  Object.keys(source).forEach(key => {
	    output[key] = deepClone(source[key]);
	  });
	  return output;
	}
	function deepmerge$1(target, source, options = {
	  clone: true
	}) {
	  const output = options.clone ? _extends$1({}, target) : target;
	  if (isPlainObject(target) && isPlainObject(source)) {
	    Object.keys(source).forEach(key => {
	      if ( /*#__PURE__*/React__namespace.isValidElement(source[key])) {
	        output[key] = source[key];
	      } else if (isPlainObject(source[key]) &&
	      // Avoid prototype pollution
	      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
	        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
	        output[key] = deepmerge$1(target[key], source[key], options);
	      } else if (options.clone) {
	        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
	      } else {
	        output[key] = source[key];
	      }
	    });
	  }
	  return output;
	}

	const deepmerge = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: deepmerge$1,
		isPlainObject
	}, Symbol.toStringTag, { value: 'Module' }));

	function merge(acc, item) {
	  if (!item) {
	    return acc;
	  }
	  return deepmerge$1(acc, item, {
	    clone: false // No need to clone deep, it's way faster.
	  });
	}

	const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

	// The breakpoint **start** at this value.
	// For instance with the first breakpoint xs: [xs, sm[.
	const values = {
	  xs: 0,
	  // phone
	  sm: 600,
	  // tablet
	  md: 900,
	  // small laptop
	  lg: 1200,
	  // desktop
	  xl: 1536 // large screen
	};
	const defaultBreakpoints = {
	  // Sorted ASC by size. That's important.
	  // It can't be configured as it's used statically for propTypes.
	  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	  up: key => `@media (min-width:${values[key]}px)`
	};
	function handleBreakpoints(props, propValue, styleFromPropValue) {
	  const theme = props.theme || {};
	  if (Array.isArray(propValue)) {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return propValue.reduce((acc, item, index) => {
	      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
	      return acc;
	    }, {});
	  }
	  if (typeof propValue === 'object') {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return Object.keys(propValue).reduce((acc, breakpoint) => {
	      // key is breakpoint
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
	function removeUnusedBreakpoints(breakpointKeys, style) {
	  return breakpointKeys.reduce((acc, key) => {
	    const breakpointOutput = acc[key];
	    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
	    if (isBreakpointUnused) {
	      delete acc[key];
	    }
	    return acc;
	  }, style);
	}

	function getPath(obj, path, checkVars = true) {
	  if (!path || typeof path !== 'string') {
	    return null;
	  }

	  // Check if CSS variables are used
	  if (obj && obj.vars && checkVars) {
	    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
	    if (val != null) {
	      return val;
	    }
	  }
	  return path.split('.').reduce((acc, item) => {
	    if (acc && acc[item] != null) {
	      return acc[item];
	    }
	    return null;
	  }, obj);
	}
	function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
	  let value;
	  if (typeof themeMapping === 'function') {
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

	  // false positive
	  // eslint-disable-next-line react/function-component-definition
	  const fn = props => {
	    if (props[prop] == null) {
	      return null;
	    }
	    const propValue = props[prop];
	    const theme = props.theme;
	    const themeMapping = getPath(theme, themeKey) || {};
	    const styleFromPropValue = propValueFinal => {
	      let value = getStyleValue(themeMapping, transform, propValueFinal);
	      if (propValueFinal === value && typeof propValueFinal === 'string') {
	        // Haven't found value
	        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
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
	  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
	    [prop]: responsivePropType
	  } : {};
	  fn.filterProps = [prop];
	  return fn;
	}

	function memoize(fn) {
	  const cache = {};
	  return arg => {
	    if (cache[arg] === undefined) {
	      cache[arg] = fn(arg);
	    }
	    return cache[arg];
	  };
	}

	const properties = {
	  m: 'margin',
	  p: 'padding'
	};
	const directions = {
	  t: 'Top',
	  r: 'Right',
	  b: 'Bottom',
	  l: 'Left',
	  x: ['Left', 'Right'],
	  y: ['Top', 'Bottom']
	};
	const aliases = {
	  marginX: 'mx',
	  marginY: 'my',
	  paddingX: 'px',
	  paddingY: 'py'
	};

	// memoize() impact:
	// From 300,000 ops/sec
	// To 350,000 ops/sec
	const getCssProperties = memoize(prop => {
	  // It's not a shorthand notation.
	  if (prop.length > 2) {
	    if (aliases[prop]) {
	      prop = aliases[prop];
	    } else {
	      return [prop];
	    }
	  }
	  const [a, b] = prop.split('');
	  const property = properties[a];
	  const direction = directions[b] || '';
	  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
	});
	const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
	const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
	const spacingKeys = [...marginKeys, ...paddingKeys];
	function createUnaryUnit(theme, themeKey, defaultValue, propName) {
	  var _getPath;
	  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
	  if (typeof themeSpacing === 'number') {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        if (typeof abs !== 'number') {
	          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
	        }
	      }
	      return themeSpacing * abs;
	    };
	  }
	  if (Array.isArray(themeSpacing)) {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        if (!Number.isInteger(abs)) {
	          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
	        } else if (abs > themeSpacing.length - 1) {
	          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
	        }
	      }
	      return themeSpacing[abs];
	    };
	  }
	  if (typeof themeSpacing === 'function') {
	    return themeSpacing;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
	  }
	  return () => undefined;
	}
	function createUnarySpacing(theme) {
	  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
	}
	function getValue(transformer, propValue) {
	  if (typeof propValue === 'string' || propValue == null) {
	    return propValue;
	  }
	  const abs = Math.abs(propValue);
	  const transformed = transformer(abs);
	  if (propValue >= 0) {
	    return transformed;
	  }
	  if (typeof transformed === 'number') {
	    return -transformed;
	  }
	  return `-${transformed}`;
	}
	function getStyleFromPropValue(cssProperties, transformer) {
	  return propValue => cssProperties.reduce((acc, cssProperty) => {
	    acc[cssProperty] = getValue(transformer, propValue);
	    return acc;
	  }, {});
	}
	function resolveCssProperty(props, keys, prop, transformer) {
	  // Using a hash computation over an array iteration could be faster, but with only 28 items,
	  // it's doesn't worth the bundle size.
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
	  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
	}
	function margin(props) {
	  return style(props, marginKeys);
	}
	margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
	  obj[key] = responsivePropType;
	  return obj;
	}, {}) : {};
	margin.filterProps = marginKeys;
	function padding(props) {
	  return style(props, paddingKeys);
	}
	padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
	  obj[key] = responsivePropType;
	  return obj;
	}, {}) : {};
	padding.filterProps = paddingKeys;
	process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
	  obj[key] = responsivePropType;
	  return obj;
	}, {}) : {};

	function compose(...styles) {
	  const handlers = styles.reduce((acc, style) => {
	    style.filterProps.forEach(prop => {
	      acc[prop] = style;
	    });
	    return acc;
	  }, {});

	  // false positive
	  // eslint-disable-next-line react/function-component-definition
	  const fn = props => {
	    return Object.keys(props).reduce((acc, prop) => {
	      if (handlers[prop]) {
	        return merge(acc, handlers[prop](props));
	      }
	      return acc;
	    }, {});
	  };
	  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
	  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
	  return fn;
	}

	function borderTransform(value) {
	  if (typeof value !== 'number') {
	    return value;
	  }
	  return `${value}px solid`;
	}
	function createBorderStyle(prop, transform) {
	  return style$1({
	    prop,
	    themeKey: 'borders',
	    transform
	  });
	}
	const border = createBorderStyle('border', borderTransform);
	const borderTop = createBorderStyle('borderTop', borderTransform);
	const borderRight = createBorderStyle('borderRight', borderTransform);
	const borderBottom = createBorderStyle('borderBottom', borderTransform);
	const borderLeft = createBorderStyle('borderLeft', borderTransform);
	const borderColor = createBorderStyle('borderColor');
	const borderTopColor = createBorderStyle('borderTopColor');
	const borderRightColor = createBorderStyle('borderRightColor');
	const borderBottomColor = createBorderStyle('borderBottomColor');
	const borderLeftColor = createBorderStyle('borderLeftColor');
	const outline = createBorderStyle('outline', borderTransform);
	const outlineColor = createBorderStyle('outlineColor');

	// false positive
	// eslint-disable-next-line react/function-component-definition
	const borderRadius = props => {
	  if (props.borderRadius !== undefined && props.borderRadius !== null) {
	    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
	    const styleFromPropValue = propValue => ({
	      borderRadius: getValue(transformer, propValue)
	    });
	    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
	  }
	  return null;
	};
	borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
	  borderRadius: responsivePropType
	} : {};
	borderRadius.filterProps = ['borderRadius'];
	compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

	// false positive
	// eslint-disable-next-line react/function-component-definition
	const gap = props => {
	  if (props.gap !== undefined && props.gap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
	    const styleFromPropValue = propValue => ({
	      gap: getValue(transformer, propValue)
	    });
	    return handleBreakpoints(props, props.gap, styleFromPropValue);
	  }
	  return null;
	};
	gap.propTypes = process.env.NODE_ENV !== 'production' ? {
	  gap: responsivePropType
	} : {};
	gap.filterProps = ['gap'];

	// false positive
	// eslint-disable-next-line react/function-component-definition
	const columnGap = props => {
	  if (props.columnGap !== undefined && props.columnGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
	    const styleFromPropValue = propValue => ({
	      columnGap: getValue(transformer, propValue)
	    });
	    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
	  }
	  return null;
	};
	columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
	  columnGap: responsivePropType
	} : {};
	columnGap.filterProps = ['columnGap'];

	// false positive
	// eslint-disable-next-line react/function-component-definition
	const rowGap = props => {
	  if (props.rowGap !== undefined && props.rowGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
	    const styleFromPropValue = propValue => ({
	      rowGap: getValue(transformer, propValue)
	    });
	    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
	  }
	  return null;
	};
	rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
	  rowGap: responsivePropType
	} : {};
	rowGap.filterProps = ['rowGap'];
	const gridColumn = style$1({
	  prop: 'gridColumn'
	});
	const gridRow = style$1({
	  prop: 'gridRow'
	});
	const gridAutoFlow = style$1({
	  prop: 'gridAutoFlow'
	});
	const gridAutoColumns = style$1({
	  prop: 'gridAutoColumns'
	});
	const gridAutoRows = style$1({
	  prop: 'gridAutoRows'
	});
	const gridTemplateColumns = style$1({
	  prop: 'gridTemplateColumns'
	});
	const gridTemplateRows = style$1({
	  prop: 'gridTemplateRows'
	});
	const gridTemplateAreas = style$1({
	  prop: 'gridTemplateAreas'
	});
	const gridArea = style$1({
	  prop: 'gridArea'
	});
	compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

	function paletteTransform(value, userValue) {
	  if (userValue === 'grey') {
	    return userValue;
	  }
	  return value;
	}
	const color = style$1({
	  prop: 'color',
	  themeKey: 'palette',
	  transform: paletteTransform
	});
	const bgcolor = style$1({
	  prop: 'bgcolor',
	  cssProperty: 'backgroundColor',
	  themeKey: 'palette',
	  transform: paletteTransform
	});
	const backgroundColor = style$1({
	  prop: 'backgroundColor',
	  themeKey: 'palette',
	  transform: paletteTransform
	});
	compose(color, bgcolor, backgroundColor);

	function sizingTransform(value) {
	  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
	}
	const width = style$1({
	  prop: 'width',
	  transform: sizingTransform
	});
	const maxWidth = props => {
	  if (props.maxWidth !== undefined && props.maxWidth !== null) {
	    const styleFromPropValue = propValue => {
	      var _props$theme, _props$theme2;
	      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
	      if (!breakpoint) {
	        return {
	          maxWidth: sizingTransform(propValue)
	        };
	      }
	      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
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
	maxWidth.filterProps = ['maxWidth'];
	const minWidth = style$1({
	  prop: 'minWidth',
	  transform: sizingTransform
	});
	const height = style$1({
	  prop: 'height',
	  transform: sizingTransform
	});
	const maxHeight = style$1({
	  prop: 'maxHeight',
	  transform: sizingTransform
	});
	const minHeight = style$1({
	  prop: 'minHeight',
	  transform: sizingTransform
	});
	style$1({
	  prop: 'size',
	  cssProperty: 'width',
	  transform: sizingTransform
	});
	style$1({
	  prop: 'size',
	  cssProperty: 'height',
	  transform: sizingTransform
	});
	const boxSizing = style$1({
	  prop: 'boxSizing'
	});
	compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

	const defaultSxConfig = {
	  // borders
	  border: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  borderTop: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  borderRight: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  borderBottom: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  borderLeft: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  borderColor: {
	    themeKey: 'palette'
	  },
	  borderTopColor: {
	    themeKey: 'palette'
	  },
	  borderRightColor: {
	    themeKey: 'palette'
	  },
	  borderBottomColor: {
	    themeKey: 'palette'
	  },
	  borderLeftColor: {
	    themeKey: 'palette'
	  },
	  outline: {
	    themeKey: 'borders',
	    transform: borderTransform
	  },
	  outlineColor: {
	    themeKey: 'palette'
	  },
	  borderRadius: {
	    themeKey: 'shape.borderRadius',
	    style: borderRadius
	  },
	  // palette
	  color: {
	    themeKey: 'palette',
	    transform: paletteTransform
	  },
	  bgcolor: {
	    themeKey: 'palette',
	    cssProperty: 'backgroundColor',
	    transform: paletteTransform
	  },
	  backgroundColor: {
	    themeKey: 'palette',
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
	    transform: value => ({
	      '@media print': {
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
	    themeKey: 'zIndex'
	  },
	  top: {},
	  right: {},
	  bottom: {},
	  left: {},
	  // shadows
	  boxShadow: {
	    themeKey: 'shadows'
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
	    themeKey: 'typography'
	  },
	  fontSize: {
	    themeKey: 'typography'
	  },
	  fontStyle: {
	    themeKey: 'typography'
	  },
	  fontWeight: {
	    themeKey: 'typography'
	  },
	  letterSpacing: {},
	  textTransform: {},
	  lineHeight: {},
	  textAlign: {},
	  typography: {
	    cssProperty: false,
	    themeKey: 'typography'
	  }
	};

	function objectsHaveSameKeys(...objects) {
	  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
	  const union = new Set(allKeys);
	  return objects.every(object => union.size === Object.keys(object).length);
	}
	function callIfFn(maybeFn, arg) {
	  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
	}

	// eslint-disable-next-line @typescript-eslint/naming-convention
	function unstable_createStyleFunctionSx() {
	  function getThemeValue(prop, val, theme, config) {
	    const props = {
	      [prop]: val,
	      theme
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
	      style
	    } = options;
	    if (val == null) {
	      return null;
	    }

	    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
	    if (themeKey === 'typography' && val === 'inherit') {
	      return {
	        [prop]: val
	      };
	    }
	    const themeMapping = getPath(theme, themeKey) || {};
	    if (style) {
	      return style(props);
	    }
	    const styleFromPropValue = propValueFinal => {
	      let value = getStyleValue(themeMapping, transform, propValueFinal);
	      if (propValueFinal === value && typeof propValueFinal === 'string') {
	        // Haven't found value
	        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
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
	  function styleFunctionSx(props) {
	    var _theme$unstable_sxCon;
	    const {
	      sx,
	      theme = {}
	    } = props || {};
	    if (!sx) {
	      return null; // Emotion & styled-components will neglect null
	    }
	    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;

	    /*
	     * Receive `sxInput` as object or callback
	     * and then recursively check keys & values to create media query object styles.
	     * (the result will be used in `styled`)
	     */
	    function traverse(sxInput) {
	      let sxObject = sxInput;
	      if (typeof sxInput === 'function') {
	        sxObject = sxInput(theme);
	      } else if (typeof sxInput !== 'object') {
	        // value
	        return sxInput;
	      }
	      if (!sxObject) {
	        return null;
	      }
	      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
	      const breakpointsKeys = Object.keys(emptyBreakpoints);
	      let css = emptyBreakpoints;
	      Object.keys(sxObject).forEach(styleKey => {
	        const value = callIfFn(sxObject[styleKey], theme);
	        if (value !== null && value !== undefined) {
	          if (typeof value === 'object') {
	            if (config[styleKey]) {
	              css = merge(css, getThemeValue(styleKey, value, theme, config));
	            } else {
	              const breakpointsValues = handleBreakpoints({
	                theme
	              }, value, x => ({
	                [styleKey]: x
	              }));
	              if (objectsHaveSameKeys(breakpointsValues, value)) {
	                css[styleKey] = styleFunctionSx({
	                  sx: value,
	                  theme
	                });
	              } else {
	                css = merge(css, breakpointsValues);
	              }
	            }
	          } else {
	            css = merge(css, getThemeValue(styleKey, value, theme, config));
	          }
	        }
	      });
	      return removeUnusedBreakpoints(breakpointsKeys, css);
	    }
	    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
	  }
	  return styleFunctionSx;
	}
	const styleFunctionSx$1 = unstable_createStyleFunctionSx();
	styleFunctionSx$1.filterProps = ['sx'];

	const _excluded$8 = ["sx"];
	const splitProps = props => {
	  var _props$theme$unstable, _props$theme;
	  const result = {
	    systemProps: {},
	    otherProps: {}
	  };
	  const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
	  Object.keys(props).forEach(prop => {
	    if (config[prop]) {
	      result.systemProps[prop] = props[prop];
	    } else {
	      result.otherProps[prop] = props[prop];
	    }
	  });
	  return result;
	};
	function extendSxProp(props) {
	  const {
	      sx: inSx
	    } = props,
	    other = _objectWithoutPropertiesLoose(props, _excluded$8);
	  const {
	    systemProps,
	    otherProps
	  } = splitProps(other);
	  let finalSx;
	  if (Array.isArray(inSx)) {
	    finalSx = [systemProps, ...inSx];
	  } else if (typeof inSx === 'function') {
	    finalSx = (...args) => {
	      const result = inSx(...args);
	      if (!isPlainObject(result)) {
	        return systemProps;
	      }
	      return _extends$1({}, systemProps, result);
	    };
	  } else {
	    finalSx = _extends$1({}, systemProps, inSx);
	  }
	  return _extends$1({}, otherProps, {
	    sx: finalSx
	  });
	}

	const styleFunctionSx = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: styleFunctionSx$1,
		extendSxProp,
		unstable_createStyleFunctionSx,
		unstable_defaultSxConfig: defaultSxConfig
	}, Symbol.toStringTag, { value: 'Module' }));

	var createStyled$1 = {};

	var interopRequireDefault = {exports: {}};

	var hasRequiredInteropRequireDefault;

	function requireInteropRequireDefault () {
		if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
		hasRequiredInteropRequireDefault = 1;
		(function (module) {
			function _interopRequireDefault(e) {
			  return e && e.__esModule ? e : {
			    "default": e
			  };
			}
			module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
		} (interopRequireDefault));
		return interopRequireDefault.exports;
	}

	var _extends = {exports: {}};

	var hasRequired_extends;

	function require_extends () {
		if (hasRequired_extends) return _extends.exports;
		hasRequired_extends = 1;
		(function (module) {
			function _extends() {
			  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
			    for (var e = 1; e < arguments.length; e++) {
			      var t = arguments[e];
			      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			    }
			    return n;
			  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
			}
			module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports; 
		} (_extends));
		return _extends.exports;
	}

	var objectWithoutPropertiesLoose = {exports: {}};

	var hasRequiredObjectWithoutPropertiesLoose;

	function requireObjectWithoutPropertiesLoose () {
		if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
		hasRequiredObjectWithoutPropertiesLoose = 1;
		(function (module) {
			function _objectWithoutPropertiesLoose(r, e) {
			  if (null == r) return {};
			  var t = {};
			  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			    if (-1 !== e.indexOf(n)) continue;
			    t[n] = r[n];
			  }
			  return t;
			}
			module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports; 
		} (objectWithoutPropertiesLoose));
		return objectWithoutPropertiesLoose.exports;
	}

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/

	function sheetForTag(tag) {
	  if (tag.sheet) {
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  } // this function should always return with a value
	  // TS can't understand it though so we make it stop complaining here


	  return undefined;
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}

	var StyleSheet = /*#__PURE__*/function () {
	  // Using Node instead of HTMLElement since container may be a ShadowRoot
	  function StyleSheet(options) {
	    var _this = this;

	    this._insertTag = function (tag) {
	      var before;

	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }

	      _this.container.insertBefore(tag, before);

	      _this.tags.push(tag);
	    };

	    this.isSpeedy = options.speedy === undefined ? true : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    this.tags.forEach(function (tag) {
	      var _tag$parentNode;

	      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	var MS = '-ms-';
	var MOZ = '-moz-';
	var WEBKIT = '-webkit-';

	var COMMENT = 'comm';
	var RULESET = 'rule';
	var DECLARATION = 'decl';
	var IMPORT = '@import';
	var KEYFRAMES = '@keyframes';
	var LAYER = '@layer';

	/**
	 * @param {number}
	 * @return {number}
	 */
	var abs = Math.abs;

	/**
	 * @param {number}
	 * @return {string}
	 */
	var from = String.fromCharCode;

	/**
	 * @param {object}
	 * @return {object}
	 */
	var assign = Object.assign;

	/**
	 * @param {string} value
	 * @param {number} length
	 * @return {number}
	 */
	function hash (value, length) {
		return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
	}

	/**
	 * @param {string} value
	 * @return {string}
	 */
	function trim (value) {
		return value.trim()
	}

	/**
	 * @param {string} value
	 * @param {RegExp} pattern
	 * @return {string?}
	 */
	function match (value, pattern) {
		return (value = pattern.exec(value)) ? value[0] : value
	}

	/**
	 * @param {string} value
	 * @param {(string|RegExp)} pattern
	 * @param {string} replacement
	 * @return {string}
	 */
	function replace (value, pattern, replacement) {
		return value.replace(pattern, replacement)
	}

	/**
	 * @param {string} value
	 * @param {string} search
	 * @return {number}
	 */
	function indexof (value, search) {
		return value.indexOf(search)
	}

	/**
	 * @param {string} value
	 * @param {number} index
	 * @return {number}
	 */
	function charat (value, index) {
		return value.charCodeAt(index) | 0
	}

	/**
	 * @param {string} value
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function substr (value, begin, end) {
		return value.slice(begin, end)
	}

	/**
	 * @param {string} value
	 * @return {number}
	 */
	function strlen (value) {
		return value.length
	}

	/**
	 * @param {any[]} value
	 * @return {number}
	 */
	function sizeof (value) {
		return value.length
	}

	/**
	 * @param {any} value
	 * @param {any[]} array
	 * @return {any}
	 */
	function append (value, array) {
		return array.push(value), value
	}

	/**
	 * @param {string[]} array
	 * @param {function} callback
	 * @return {string}
	 */
	function combine (array, callback) {
		return array.map(callback).join('')
	}

	var line = 1;
	var column = 1;
	var length = 0;
	var position = 0;
	var character = 0;
	var characters = '';

	/**
	 * @param {string} value
	 * @param {object | null} root
	 * @param {object | null} parent
	 * @param {string} type
	 * @param {string[] | string} props
	 * @param {object[] | string} children
	 * @param {number} length
	 */
	function node (value, root, parent, type, props, children, length) {
		return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
	}

	/**
	 * @param {object} root
	 * @param {object} props
	 * @return {object}
	 */
	function copy (root, props) {
		return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
	}

	/**
	 * @return {number}
	 */
	function char () {
		return character
	}

	/**
	 * @return {number}
	 */
	function prev () {
		character = position > 0 ? charat(characters, --position) : 0;

		if (column--, character === 10)
			column = 1, line--;

		return character
	}

	/**
	 * @return {number}
	 */
	function next () {
		character = position < length ? charat(characters, position++) : 0;

		if (column++, character === 10)
			column = 1, line++;

		return character
	}

	/**
	 * @return {number}
	 */
	function peek () {
		return charat(characters, position)
	}

	/**
	 * @return {number}
	 */
	function caret () {
		return position
	}

	/**
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function slice (begin, end) {
		return substr(characters, begin, end)
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function token (type) {
		switch (type) {
			// \0 \t \n \r \s whitespace token
			case 0: case 9: case 10: case 13: case 32:
				return 5
			// ! + , / > @ ~ isolate token
			case 33: case 43: case 44: case 47: case 62: case 64: case 126:
			// ; { } breakpoint token
			case 59: case 123: case 125:
				return 4
			// : accompanied token
			case 58:
				return 3
			// " ' ( [ opening delimit token
			case 34: case 39: case 40: case 91:
				return 2
			// ) ] closing delimit token
			case 41: case 93:
				return 1
		}

		return 0
	}

	/**
	 * @param {string} value
	 * @return {any[]}
	 */
	function alloc (value) {
		return line = column = 1, length = strlen(characters = value), position = 0, []
	}

	/**
	 * @param {any} value
	 * @return {any}
	 */
	function dealloc (value) {
		return characters = '', value
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function delimit (type) {
		return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function whitespace (type) {
		while (character = peek())
			if (character < 33)
				next();
			else
				break

		return token(type) > 2 || token(character) > 3 ? '' : ' '
	}

	/**
	 * @param {number} index
	 * @param {number} count
	 * @return {string}
	 */
	function escaping (index, count) {
		while (--count && next())
			// not 0-9 A-F a-f
			if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
				break

		return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function delimiter (type) {
		while (next())
			switch (character) {
				// ] ) " '
				case type:
					return position
				// " '
				case 34: case 39:
					if (type !== 34 && type !== 39)
						delimiter(character);
					break
				// (
				case 40:
					if (type === 41)
						delimiter(type);
					break
				// \
				case 92:
					next();
					break
			}

		return position
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @return {number}
	 */
	function commenter (type, index) {
		while (next())
			// //
			if (type + character === 47 + 10)
				break
			// /*
			else if (type + character === 42 + 42 && peek() === 47)
				break

		return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
	}

	/**
	 * @param {number} index
	 * @return {string}
	 */
	function identifier (index) {
		while (!token(peek()))
			next();

		return slice(index, position)
	}

	/**
	 * @param {string} value
	 * @return {object[]}
	 */
	function compile (value) {
		return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {string[]} rule
	 * @param {string[]} rules
	 * @param {string[]} rulesets
	 * @param {number[]} pseudo
	 * @param {number[]} points
	 * @param {string[]} declarations
	 * @return {object}
	 */
	function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
		var index = 0;
		var offset = 0;
		var length = pseudo;
		var atrule = 0;
		var property = 0;
		var previous = 0;
		var variable = 1;
		var scanning = 1;
		var ampersand = 1;
		var character = 0;
		var type = '';
		var props = rules;
		var children = rulesets;
		var reference = rule;
		var characters = type;

		while (scanning)
			switch (previous = character, character = next()) {
				// (
				case 40:
					if (previous != 108 && charat(characters, length - 1) == 58) {
						if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
							ampersand = -1;
						break
					}
				// " ' [
				case 34: case 39: case 91:
					characters += delimit(character);
					break
				// \t \n \r \s
				case 9: case 10: case 13: case 32:
					characters += whitespace(previous);
					break
				// \
				case 92:
					characters += escaping(caret() - 1, 7);
					continue
				// /
				case 47:
					switch (peek()) {
						case 42: case 47:
							append(comment(commenter(next(), caret()), root, parent), declarations);
							break
						default:
							characters += '/';
					}
					break
				// {
				case 123 * variable:
					points[index++] = strlen(characters) * ampersand;
				// } ; \0
				case 125 * variable: case 59: case 0:
					switch (character) {
						// \0 }
						case 0: case 125: scanning = 0;
						// ;
						case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
							if (property > 0 && (strlen(characters) - length))
								append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
							break
						// @ ;
						case 59: characters += ';';
						// { rule/at-rule
						default:
							append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

							if (character === 123)
								if (offset === 0)
									parse(characters, root, reference, reference, props, rulesets, length, points, children);
								else
									switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
										// d l m s
										case 100: case 108: case 109: case 115:
											parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
											break
										default:
											parse(characters, reference, reference, reference, [''], children, 0, points, children);
									}
					}

					index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
					break
				// :
				case 58:
					length = 1 + strlen(characters), property = previous;
				default:
					if (variable < 1)
						if (character == 123)
							--variable;
						else if (character == 125 && variable++ == 0 && prev() == 125)
							continue

					switch (characters += from(character), character * variable) {
						// &
						case 38:
							ampersand = offset > 0 ? 1 : (characters += '\f', -1);
							break
						// ,
						case 44:
							points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
							break
						// @
						case 64:
							// -
							if (peek() === 45)
								characters += delimit(next());

							atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
							break
						// -
						case 45:
							if (previous === 45 && strlen(characters) == 2)
								variable = 0;
					}
			}

		return rulesets
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} index
	 * @param {number} offset
	 * @param {string[]} rules
	 * @param {number[]} points
	 * @param {string} type
	 * @param {string[]} props
	 * @param {string[]} children
	 * @param {number} length
	 * @return {object}
	 */
	function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
		var post = offset - 1;
		var rule = offset === 0 ? rules : [''];
		var size = sizeof(rule);

		for (var i = 0, j = 0, k = 0; i < index; ++i)
			for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
				if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
					props[k++] = z;

		return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
	}

	/**
	 * @param {number} value
	 * @param {object} root
	 * @param {object?} parent
	 * @return {object}
	 */
	function comment (value, root, parent) {
		return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} length
	 * @return {object}
	 */
	function declaration (value, root, parent, length) {
		return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
	}

	/**
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function serialize (children, callback) {
		var output = '';
		var length = sizeof(children);

		for (var i = 0; i < length; i++)
			output += callback(children[i], i, children, callback) || '';

		return output
	}

	/**
	 * @param {object} element
	 * @param {number} index
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function stringify (element, index, children, callback) {
		switch (element.type) {
			case LAYER: if (element.children.length) break
			case IMPORT: case DECLARATION: return element.return = element.return || element.value
			case COMMENT: return ''
			case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
			case RULESET: element.value = element.props.join(',');
		}

		return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
	}

	/**
	 * @param {function[]} collection
	 * @return {function}
	 */
	function middleware (collection) {
		var length = sizeof(collection);

		return function (element, index, children, callback) {
			var output = '';

			for (var i = 0; i < length; i++)
				output += collection[i](element, index, children, callback) || '';

			return output
		}
	}

	/**
	 * @param {function} callback
	 * @return {function}
	 */
	function rulesheet (callback) {
		return function (element) {
			if (!element.root)
				if (element = element.return)
					callback(element);
		}
	}

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;

	  while (true) {
	    previous = character;
	    character = peek(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }

	    if (token(character)) {
	      break;
	    }

	    next();
	  }

	  return slice(begin, position);
	};

	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;

	  do {
	    switch (token(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && peek() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }

	        parsed[index] += identifierWithPointTracking(position - 1, points, index);
	        break;

	      case 2:
	        parsed[index] += delimit(character);
	        break;

	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = peek() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += from(character);
	    }
	  } while (character = next());

	  return parsed;
	};

	var getRules = function getRules(value, points) {
	  return dealloc(toRules(alloc(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


	var fixedElements = /* #__PURE__ */new WeakMap();
	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }

	  var value = element.value;
	  var parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;

	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case


	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */
	  && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


	  if (isImplicitRule) {
	    return;
	  }

	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;

	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};
	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	/* eslint-disable no-fallthrough */

	function prefix(value, length) {
	  switch (hash(value, length)) {
	    // color-adjust
	    case 5103:
	      return WEBKIT + 'print-' + value + value;
	    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return WEBKIT + value + value;
	    // appearance, user-select, transform, hyphens, text-size-adjust

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return WEBKIT + value + MOZ + value + MS + value + value;
	    // flex, flex-direction

	    case 6828:
	    case 4268:
	      return WEBKIT + value + MS + value + value;
	    // order

	    case 6165:
	      return WEBKIT + value + MS + 'flex-' + value + value;
	    // align-items

	    case 5187:
	      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
	    // align-self

	    case 5443:
	      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
	    // align-content

	    case 4675:
	      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
	    // flex-shrink

	    case 5548:
	      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
	    // flex-basis

	    case 5292:
	      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
	    // flex-grow

	    case 6060:
	      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
	    // transition

	    case 4554:
	      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
	    // cursor

	    case 6187:
	      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
	    // background, background-image

	    case 5495:
	    case 3959:
	      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
	    // justify-content

	    case 4968:
	      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
	    // (margin|padding)-inline-(start|end)

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
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
	      // stretch, max-content, min-content, fill-available
	      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
	        // (m)ax-content, (m)in-content
	        case 109:
	          // -
	          if (charat(value, length + 4) !== 45) break;
	        // (f)ill-available, (f)it-content

	        case 102:
	          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
	        // (s)tretch

	        case 115:
	          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
	      }
	      break;
	    // position: sticky

	    case 4949:
	      // (s)ticky?
	      if (charat(value, length + 1) !== 115) break;
	    // display: (flex|inline-flex)

	    case 6444:
	      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
	        // stic(k)y
	        case 107:
	          return replace(value, ':', ':' + WEBKIT) + value;
	        // (inline-)?fl(e)x

	        case 101:
	          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
	      }

	      break;
	    // writing-mode

	    case 5936:
	      switch (charat(value, length + 11)) {
	        // vertical-l(r)
	        case 114:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
	        // vertical-r(l)

	        case 108:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
	        // horizontal(-)tb

	        case 45:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
	      }

	      return WEBKIT + value + MS + value + value;
	  }

	  return value;
	}

	var prefixer = function prefixer(element, index, children, callback) {
	  if (element.length > -1) if (!element["return"]) switch (element.type) {
	    case DECLARATION:
	      element["return"] = prefix(element.value, element.length);
	      break;

	    case KEYFRAMES:
	      return serialize([copy(element, {
	        value: replace(element.value, '@', '@' + WEBKIT)
	      })], callback);

	    case RULESET:
	      if (element.length) return combine(element.props, function (value) {
	        switch (match(value, /(::plac\w+|:read-\w+)/)) {
	          // :read-(only|write)
	          case ':read-only':
	          case ':read-write':
	            return serialize([copy(element, {
	              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
	            })], callback);
	          // :placeholder

	          case '::placeholder':
	            return serialize([copy(element, {
	              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
	            }), copy(element, {
	              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
	            }), copy(element, {
	              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
	            })], callback);
	        }

	        return '';
	      });
	  }
	};

	var defaultStylisPlugins = [prefixer];

	var createCache = function createCache(options) {
	  var key = options.key;

	  if (key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');

	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }

	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }

	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

	  var inserted = {};
	  var container;
	  var nodesToHydrate = [];

	  {
	    container = options.container || document.head;
	    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' ');

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }

	      nodesToHydrate.push(node);
	    });
	  }

	  var _insert;

	  var omnipresentPlugins = [compat, removeLabel];

	  {
	    var currentSheet;
	    var finalizingPlugins = [stringify, rulesheet(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

	    var stylis = function stylis(styles) {
	      return serialize(compile(styles), serializer);
	    };

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;

	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	let cache;
	if (typeof document === 'object') {
	  cache = createCache({
	    key: 'css',
	    prepend: true
	  });
	}
	function StyledEngineProvider(props) {
	  const {
	    injectFirst,
	    children
	  } = props;
	  return injectFirst && cache ? /*#__PURE__*/jsxRuntimeExports.jsx(react.CacheProvider, {
	    value: cache,
	    children: children
	  }) : children;
	}
	process.env.NODE_ENV !== "production" ? StyledEngineProvider.propTypes = {
	  /**
	   * Your component tree.
	   */
	  children: PropTypes.node,
	  /**
	   * By default, the styles are injected last in the <head> element of the page.
	   * As a result, they gain more specificity than any other style sheet.
	   * If you want to override MUI's styles, set this prop.
	   */
	  injectFirst: PropTypes.bool
	} : void 0;

	function isEmpty(obj) {
	  return obj === undefined || obj === null || Object.keys(obj).length === 0;
	}
	function GlobalStyles(props) {
	  const {
	    styles,
	    defaultTheme = {}
	  } = props;
	  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
	  return /*#__PURE__*/jsxRuntimeExports.jsx(react.Global, {
	    styles: globalStyles
	  });
	}
	process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
	  defaultTheme: PropTypes.object,
	  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.func])
	} : void 0;

	/**
	 * @mui/styled-engine v5.16.14
	 *
	 * @license MIT
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function styled$1(tag, options) {
	  const stylesFactory = emStyled__default.default(tag, options);
	  if (process.env.NODE_ENV !== 'production') {
	    return (...styles) => {
	      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
	      if (styles.length === 0) {
	        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
	      } else if (styles.some(style => style === undefined)) {
	        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
	      }
	      return stylesFactory(...styles);
	    };
	  }
	  return stylesFactory;
	}

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const internal_processStyles = (tag, processor) => {
	  // Emotion attaches all the styles as `__emotion_styles`.
	  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
	  if (Array.isArray(tag.__emotion_styles)) {
	    tag.__emotion_styles = processor(tag.__emotion_styles);
	  }
	};

	const styledEngine = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		GlobalStyles,
		StyledEngineProvider,
		ThemeContext: react.ThemeContext,
		css: react.css,
		default: styled$1,
		internal_processStyles,
		keyframes: react.keyframes
	}, Symbol.toStringTag, { value: 'Module' }));

	const require$$3 = /*@__PURE__*/getAugmentedNamespace(styledEngine);

	const require$$4 = /*@__PURE__*/getAugmentedNamespace(deepmerge);

	const require$$5 = /*@__PURE__*/getAugmentedNamespace(capitalize);

	var reactIs = {exports: {}};

	var reactIs_production = {};

	/**
	 * @license React
	 * react-is.production.js
	 *
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_production;

	function requireReactIs_production () {
		if (hasRequiredReactIs_production) return reactIs_production;
		hasRequiredReactIs_production = 1;
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
		  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
		  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
		  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
		  REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
		  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
		  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
		  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
		  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
		  REACT_MEMO_TYPE = Symbol.for("react.memo"),
		  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
		  REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
		  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
		function typeOf(object) {
		  if ("object" === typeof object && null !== object) {
		    var $$typeof = object.$$typeof;
		    switch ($$typeof) {
		      case REACT_ELEMENT_TYPE:
		        switch (((object = object.type), object)) {
		          case REACT_FRAGMENT_TYPE:
		          case REACT_PROFILER_TYPE:
		          case REACT_STRICT_MODE_TYPE:
		          case REACT_SUSPENSE_TYPE:
		          case REACT_SUSPENSE_LIST_TYPE:
		            return object;
		          default:
		            switch (((object = object && object.$$typeof), object)) {
		              case REACT_CONTEXT_TYPE:
		              case REACT_FORWARD_REF_TYPE:
		              case REACT_LAZY_TYPE:
		              case REACT_MEMO_TYPE:
		                return object;
		              case REACT_CONSUMER_TYPE:
		                return object;
		              default:
		                return $$typeof;
		            }
		        }
		      case REACT_PORTAL_TYPE:
		        return $$typeof;
		    }
		  }
		}
		reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
		reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
		reactIs_production.Element = REACT_ELEMENT_TYPE;
		reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
		reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
		reactIs_production.Lazy = REACT_LAZY_TYPE;
		reactIs_production.Memo = REACT_MEMO_TYPE;
		reactIs_production.Portal = REACT_PORTAL_TYPE;
		reactIs_production.Profiler = REACT_PROFILER_TYPE;
		reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
		reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
		reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
		reactIs_production.isContextConsumer = function (object) {
		  return typeOf(object) === REACT_CONSUMER_TYPE;
		};
		reactIs_production.isContextProvider = function (object) {
		  return typeOf(object) === REACT_CONTEXT_TYPE;
		};
		reactIs_production.isElement = function (object) {
		  return (
		    "object" === typeof object &&
		    null !== object &&
		    object.$$typeof === REACT_ELEMENT_TYPE
		  );
		};
		reactIs_production.isForwardRef = function (object) {
		  return typeOf(object) === REACT_FORWARD_REF_TYPE;
		};
		reactIs_production.isFragment = function (object) {
		  return typeOf(object) === REACT_FRAGMENT_TYPE;
		};
		reactIs_production.isLazy = function (object) {
		  return typeOf(object) === REACT_LAZY_TYPE;
		};
		reactIs_production.isMemo = function (object) {
		  return typeOf(object) === REACT_MEMO_TYPE;
		};
		reactIs_production.isPortal = function (object) {
		  return typeOf(object) === REACT_PORTAL_TYPE;
		};
		reactIs_production.isProfiler = function (object) {
		  return typeOf(object) === REACT_PROFILER_TYPE;
		};
		reactIs_production.isStrictMode = function (object) {
		  return typeOf(object) === REACT_STRICT_MODE_TYPE;
		};
		reactIs_production.isSuspense = function (object) {
		  return typeOf(object) === REACT_SUSPENSE_TYPE;
		};
		reactIs_production.isSuspenseList = function (object) {
		  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
		};
		reactIs_production.isValidElementType = function (type) {
		  return "string" === typeof type ||
		    "function" === typeof type ||
		    type === REACT_FRAGMENT_TYPE ||
		    type === REACT_PROFILER_TYPE ||
		    type === REACT_STRICT_MODE_TYPE ||
		    type === REACT_SUSPENSE_TYPE ||
		    type === REACT_SUSPENSE_LIST_TYPE ||
		    type === REACT_OFFSCREEN_TYPE ||
		    ("object" === typeof type &&
		      null !== type &&
		      (type.$$typeof === REACT_LAZY_TYPE ||
		        type.$$typeof === REACT_MEMO_TYPE ||
		        type.$$typeof === REACT_CONTEXT_TYPE ||
		        type.$$typeof === REACT_CONSUMER_TYPE ||
		        type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        type.$$typeof === REACT_CLIENT_REFERENCE ||
		        void 0 !== type.getModuleId))
		    ? true
		    : false;
		};
		reactIs_production.typeOf = typeOf;
		return reactIs_production;
	}

	var reactIs_development = {};

	/**
	 * @license React
	 * react-is.development.js
	 *
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactIs_development;

	function requireReactIs_development () {
		if (hasRequiredReactIs_development) return reactIs_development;
		hasRequiredReactIs_development = 1;
		"production" !== process.env.NODE_ENV &&
		  (function () {
		    function typeOf(object) {
		      if ("object" === typeof object && null !== object) {
		        var $$typeof = object.$$typeof;
		        switch ($$typeof) {
		          case REACT_ELEMENT_TYPE:
		            switch (((object = object.type), object)) {
		              case REACT_FRAGMENT_TYPE:
		              case REACT_PROFILER_TYPE:
		              case REACT_STRICT_MODE_TYPE:
		              case REACT_SUSPENSE_TYPE:
		              case REACT_SUSPENSE_LIST_TYPE:
		                return object;
		              default:
		                switch (((object = object && object.$$typeof), object)) {
		                  case REACT_CONTEXT_TYPE:
		                  case REACT_FORWARD_REF_TYPE:
		                  case REACT_LAZY_TYPE:
		                  case REACT_MEMO_TYPE:
		                    return object;
		                  case REACT_CONSUMER_TYPE:
		                    return object;
		                  default:
		                    return $$typeof;
		                }
		            }
		          case REACT_PORTAL_TYPE:
		            return $$typeof;
		        }
		      }
		    }
		    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
		      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
		      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
		      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
		      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
		      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
		      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
		      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
		      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
		      REACT_MEMO_TYPE = Symbol.for("react.memo"),
		      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
		      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
		      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
		    reactIs_development.ContextConsumer = REACT_CONSUMER_TYPE;
		    reactIs_development.ContextProvider = REACT_CONTEXT_TYPE;
		    reactIs_development.Element = REACT_ELEMENT_TYPE;
		    reactIs_development.ForwardRef = REACT_FORWARD_REF_TYPE;
		    reactIs_development.Fragment = REACT_FRAGMENT_TYPE;
		    reactIs_development.Lazy = REACT_LAZY_TYPE;
		    reactIs_development.Memo = REACT_MEMO_TYPE;
		    reactIs_development.Portal = REACT_PORTAL_TYPE;
		    reactIs_development.Profiler = REACT_PROFILER_TYPE;
		    reactIs_development.StrictMode = REACT_STRICT_MODE_TYPE;
		    reactIs_development.Suspense = REACT_SUSPENSE_TYPE;
		    reactIs_development.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
		    reactIs_development.isContextConsumer = function (object) {
		      return typeOf(object) === REACT_CONSUMER_TYPE;
		    };
		    reactIs_development.isContextProvider = function (object) {
		      return typeOf(object) === REACT_CONTEXT_TYPE;
		    };
		    reactIs_development.isElement = function (object) {
		      return (
		        "object" === typeof object &&
		        null !== object &&
		        object.$$typeof === REACT_ELEMENT_TYPE
		      );
		    };
		    reactIs_development.isForwardRef = function (object) {
		      return typeOf(object) === REACT_FORWARD_REF_TYPE;
		    };
		    reactIs_development.isFragment = function (object) {
		      return typeOf(object) === REACT_FRAGMENT_TYPE;
		    };
		    reactIs_development.isLazy = function (object) {
		      return typeOf(object) === REACT_LAZY_TYPE;
		    };
		    reactIs_development.isMemo = function (object) {
		      return typeOf(object) === REACT_MEMO_TYPE;
		    };
		    reactIs_development.isPortal = function (object) {
		      return typeOf(object) === REACT_PORTAL_TYPE;
		    };
		    reactIs_development.isProfiler = function (object) {
		      return typeOf(object) === REACT_PROFILER_TYPE;
		    };
		    reactIs_development.isStrictMode = function (object) {
		      return typeOf(object) === REACT_STRICT_MODE_TYPE;
		    };
		    reactIs_development.isSuspense = function (object) {
		      return typeOf(object) === REACT_SUSPENSE_TYPE;
		    };
		    reactIs_development.isSuspenseList = function (object) {
		      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
		    };
		    reactIs_development.isValidElementType = function (type) {
		      return "string" === typeof type ||
		        "function" === typeof type ||
		        type === REACT_FRAGMENT_TYPE ||
		        type === REACT_PROFILER_TYPE ||
		        type === REACT_STRICT_MODE_TYPE ||
		        type === REACT_SUSPENSE_TYPE ||
		        type === REACT_SUSPENSE_LIST_TYPE ||
		        type === REACT_OFFSCREEN_TYPE ||
		        ("object" === typeof type &&
		          null !== type &&
		          (type.$$typeof === REACT_LAZY_TYPE ||
		            type.$$typeof === REACT_MEMO_TYPE ||
		            type.$$typeof === REACT_CONTEXT_TYPE ||
		            type.$$typeof === REACT_CONSUMER_TYPE ||
		            type.$$typeof === REACT_FORWARD_REF_TYPE ||
		            type.$$typeof === REACT_CLIENT_REFERENCE ||
		            void 0 !== type.getModuleId))
		        ? true
		        : false;
		    };
		    reactIs_development.typeOf = typeOf;
		  })();
		return reactIs_development;
	}

	var hasRequiredReactIs;

	function requireReactIs () {
		if (hasRequiredReactIs) return reactIs.exports;
		hasRequiredReactIs = 1;

		if (process.env.NODE_ENV === 'production') {
		  reactIs.exports = /*@__PURE__*/ requireReactIs_production();
		} else {
		  reactIs.exports = /*@__PURE__*/ requireReactIs_development();
		}
		return reactIs.exports;
	}

	var reactIsExports = /*@__PURE__*/ requireReactIs();

	// Simplified polyfill for IE11 support
	// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
	const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
	function getFunctionName(fn) {
	  const match = `${fn}`.match(fnNameMatchRegex);
	  const name = match && match[1];
	  return name || '';
	}
	function getFunctionComponentName(Component, fallback = '') {
	  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
	}
	function getWrappedName(outerType, innerType, wrapperName) {
	  const functionName = getFunctionComponentName(innerType);
	  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
	}

	/**
	 * cherry-pick from
	 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
	 * originally forked from recompose/getDisplayName with added IE11 support
	 */
	function getDisplayName$1(Component) {
	  if (Component == null) {
	    return undefined;
	  }
	  if (typeof Component === 'string') {
	    return Component;
	  }
	  if (typeof Component === 'function') {
	    return getFunctionComponentName(Component, 'Component');
	  }

	  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
	  if (typeof Component === 'object') {
	    switch (Component.$$typeof) {
	      case reactIsExports.ForwardRef:
	        return getWrappedName(Component, Component.render, 'ForwardRef');
	      case reactIsExports.Memo:
	        return getWrappedName(Component, Component.type, 'memo');
	      default:
	        return undefined;
	    }
	  }
	  return undefined;
	}

	const getDisplayName = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: getDisplayName$1,
		getFunctionName
	}, Symbol.toStringTag, { value: 'Module' }));

	const require$$6 = /*@__PURE__*/getAugmentedNamespace(getDisplayName);

	const _excluded$7 = ["values", "unit", "step"];
	const sortBreakpointsValues = values => {
	  const breakpointsAsArray = Object.keys(values).map(key => ({
	    key,
	    val: values[key]
	  })) || [];
	  // Sort in ascending order
	  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
	  return breakpointsAsArray.reduce((acc, obj) => {
	    return _extends$1({}, acc, {
	      [obj.key]: obj.val
	    });
	  }, {});
	};

	// Keep in mind that @media is inclusive by the CSS specification.
	function createBreakpoints(breakpoints) {
	  const {
	      // The breakpoint **start** at this value.
	      // For instance with the first breakpoint xs: [xs, sm).
	      values = {
	        xs: 0,
	        // phone
	        sm: 600,
	        // tablet
	        md: 900,
	        // small laptop
	        lg: 1200,
	        // desktop
	        xl: 1536 // large screen
	      },
	      unit = 'px',
	      step = 5
	    } = breakpoints,
	    other = _objectWithoutPropertiesLoose(breakpoints, _excluded$7);
	  const sortedValues = sortBreakpointsValues(values);
	  const keys = Object.keys(sortedValues);
	  function up(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return `@media (min-width:${value}${unit})`;
	  }
	  function down(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return `@media (max-width:${value - step / 100}${unit})`;
	  }
	  function between(start, end) {
	    const endIndex = keys.indexOf(end);
	    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
	  }
	  function only(key) {
	    if (keys.indexOf(key) + 1 < keys.length) {
	      return between(key, keys[keys.indexOf(key) + 1]);
	    }
	    return up(key);
	  }
	  function not(key) {
	    // handle first and last key separately, for better readability
	    const keyIndex = keys.indexOf(key);
	    if (keyIndex === 0) {
	      return up(keys[1]);
	    }
	    if (keyIndex === keys.length - 1) {
	      return down(keys[keyIndex]);
	    }
	    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
	  }
	  return _extends$1({
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

	// The different signatures imply different meaning for their arguments that can't be expressed structurally.
	// We express the difference with variable names.

	function createSpacing(spacingInput = 8) {
	  // Already transformed.
	  if (spacingInput.mui) {
	    return spacingInput;
	  }

	  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
	  // Smaller components, such as icons, can align to a 4dp grid.
	  // https://m2.material.io/design/layout/understanding-layout.html
	  const transform = createUnarySpacing({
	    spacing: spacingInput
	  });
	  const spacing = (...argsInput) => {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!(argsInput.length <= 4)) {
	        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
	      }
	    }
	    const args = argsInput.length === 0 ? [1] : argsInput;
	    return args.map(argument => {
	      const output = transform(argument);
	      return typeof output === 'number' ? `${output}px` : output;
	    }).join(' ');
	  };
	  spacing.mui = true;
	  return spacing;
	}

	/**
	 * A universal utility to style components with multiple color modes. Always use it from the theme object.
	 * It works with:
	 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
	 *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
	 *  - Zero-runtime engine
	 *
	 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
	 *
	 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
	 *
	 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
	 *
	 * @example
	 * 1. using with `styled`:
	 * ```jsx
	 *   const Component = styled('div')(({ theme }) => [
	 *     { background: '#e5e5e5' },
	 *     theme.applyStyles('dark', {
	 *       background: '#1c1c1c',
	 *       color: '#fff',
	 *     }),
	 *   ]);
	 * ```
	 *
	 * @example
	 * 2. using with `sx` prop:
	 * ```jsx
	 *   <Box sx={theme => [
	 *     { background: '#e5e5e5' },
	 *     theme.applyStyles('dark', {
	 *        background: '#1c1c1c',
	 *        color: '#fff',
	 *      }),
	 *     ]}
	 *   />
	 * ```
	 *
	 * @example
	 * 3. theming a component:
	 * ```jsx
	 *   extendTheme({
	 *     components: {
	 *       MuiButton: {
	 *         styleOverrides: {
	 *           root: ({ theme }) => [
	 *             { background: '#e5e5e5' },
	 *             theme.applyStyles('dark', {
	 *               background: '#1c1c1c',
	 *               color: '#fff',
	 *             }),
	 *           ],
	 *         },
	 *       }
	 *     }
	 *   })
	 *```
	 */
	function applyStyles(key, styles) {
	  // @ts-expect-error this is 'any' type
	  const theme = this;
	  if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
	    // If CssVarsProvider is used as a provider,
	    // returns '* :where([data-mui-color-scheme="light|dark"]) &'
	    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
	    return {
	      [selector]: styles
	    };
	  }
	  if (theme.palette.mode === key) {
	    return styles;
	  }
	  return {};
	}

	const _excluded$6 = ["breakpoints", "palette", "spacing", "shape"];
	function createTheme$2(options = {}, ...args) {
	  const {
	      breakpoints: breakpointsInput = {},
	      palette: paletteInput = {},
	      spacing: spacingInput,
	      shape: shapeInput = {}
	    } = options,
	    other = _objectWithoutPropertiesLoose(options, _excluded$6);
	  const breakpoints = createBreakpoints(breakpointsInput);
	  const spacing = createSpacing(spacingInput);
	  let muiTheme = deepmerge$1({
	    breakpoints,
	    direction: 'ltr',
	    components: {},
	    // Inject component definitions.
	    palette: _extends$1({
	      mode: 'light'
	    }, paletteInput),
	    spacing,
	    shape: _extends$1({}, shape, shapeInput)
	  }, other);
	  muiTheme.applyStyles = applyStyles;
	  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
	  muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
	  muiTheme.unstable_sx = function sx(props) {
	    return styleFunctionSx$1({
	      sx: props,
	      theme: this
	    });
	  };
	  return muiTheme;
	}

	const createTheme$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: createTheme$2,
		private_createBreakpoints: createBreakpoints,
		unstable_applyStyles: applyStyles
	}, Symbol.toStringTag, { value: 'Module' }));

	const require$$7 = /*@__PURE__*/getAugmentedNamespace(createTheme$1);

	const require$$8 = /*@__PURE__*/getAugmentedNamespace(styleFunctionSx);

	var hasRequiredCreateStyled;

	function requireCreateStyled () {
		if (hasRequiredCreateStyled) return createStyled$1;
		hasRequiredCreateStyled = 1;

		var _interopRequireDefault = requireInteropRequireDefault();
		Object.defineProperty(createStyled$1, "__esModule", {
		  value: true
		});
		createStyled$1.default = createStyled;
		createStyled$1.shouldForwardProp = shouldForwardProp;
		createStyled$1.systemDefaultTheme = void 0;
		var _extends2 = _interopRequireDefault(require_extends());
		var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
		var _styledEngine = _interopRequireWildcard(require$$3);
		var _deepmerge = require$$4;
		var _capitalize = _interopRequireDefault(require$$5);
		var _getDisplayName = _interopRequireDefault(require$$6);
		var _createTheme = _interopRequireDefault(require$$7);
		var _styleFunctionSx = _interopRequireDefault(require$$8);
		const _excluded = ["ownerState"],
		  _excluded2 = ["variants"],
		  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
		/* eslint-disable no-underscore-dangle */
		function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
		function _interopRequireWildcard(e, r) { if (e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
		function isEmpty(obj) {
		  return Object.keys(obj).length === 0;
		}

		// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
		function isStringTag(tag) {
		  return typeof tag === 'string' &&
		  // 96 is one less than the char code
		  // for "a" so this is checking that
		  // it's a lowercase character
		  tag.charCodeAt(0) > 96;
		}

		// Update /system/styled/#api in case if this changes
		function shouldForwardProp(prop) {
		  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
		}
		const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
		const lowercaseFirstLetter = string => {
		  if (!string) {
		    return string;
		  }
		  return string.charAt(0).toLowerCase() + string.slice(1);
		};
		function resolveTheme({
		  defaultTheme,
		  theme,
		  themeId
		}) {
		  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
		}
		function defaultOverridesResolver(slot) {
		  if (!slot) {
		    return null;
		  }
		  return (props, styles) => styles[slot];
		}
		function processStyleArg(callableStyle, _ref) {
		  let {
		      ownerState
		    } = _ref,
		    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
		  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0, _extends2.default)({
		    ownerState
		  }, props)) : callableStyle;
		  if (Array.isArray(resolvedStylesArg)) {
		    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0, _extends2.default)({
		      ownerState
		    }, props)));
		  }
		  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
		    const {
		        variants = []
		      } = resolvedStylesArg,
		      otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2);
		    let result = otherStyles;
		    variants.forEach(variant => {
		      let isMatch = true;
		      if (typeof variant.props === 'function') {
		        isMatch = variant.props((0, _extends2.default)({
		          ownerState
		        }, props, ownerState));
		      } else {
		        Object.keys(variant.props).forEach(key => {
		          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
		            isMatch = false;
		          }
		        });
		      }
		      if (isMatch) {
		        if (!Array.isArray(result)) {
		          result = [result];
		        }
		        result.push(typeof variant.style === 'function' ? variant.style((0, _extends2.default)({
		          ownerState
		        }, props, ownerState)) : variant.style);
		      }
		    });
		    return result;
		  }
		  return resolvedStylesArg;
		}
		function createStyled(input = {}) {
		  const {
		    themeId,
		    defaultTheme = systemDefaultTheme,
		    rootShouldForwardProp = shouldForwardProp,
		    slotShouldForwardProp = shouldForwardProp
		  } = input;
		  const systemSx = props => {
		    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
		      theme: resolveTheme((0, _extends2.default)({}, props, {
		        defaultTheme,
		        themeId
		      }))
		    }));
		  };
		  systemSx.__mui_systemSx = true;
		  return (tag, inputOptions = {}) => {
		    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
		    (0, _styledEngine.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
		    const {
		        name: componentName,
		        slot: componentSlot,
		        skipVariantsResolver: inputSkipVariantsResolver,
		        skipSx: inputSkipSx,
		        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
		        // For more details: https://github.com/mui/material-ui/pull/37908
		        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
		      } = inputOptions,
		      options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);

		    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
		    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
		    // TODO v6: remove `Root` in the next major release
		    // For more details: https://github.com/mui/material-ui/pull/37908
		    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
		    const skipSx = inputSkipSx || false;
		    let label;
		    if (process.env.NODE_ENV !== 'production') {
		      if (componentName) {
		        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
		        // For more details: https://github.com/mui/material-ui/pull/37908
		        label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
		      }
		    }
		    let shouldForwardPropOption = shouldForwardProp;

		    // TODO v6: remove `Root` in the next major release
		    // For more details: https://github.com/mui/material-ui/pull/37908
		    if (componentSlot === 'Root' || componentSlot === 'root') {
		      shouldForwardPropOption = rootShouldForwardProp;
		    } else if (componentSlot) {
		      // any other slot specified
		      shouldForwardPropOption = slotShouldForwardProp;
		    } else if (isStringTag(tag)) {
		      // for string (html) tag, preserve the behavior in emotion & styled-components.
		      shouldForwardPropOption = undefined;
		    }
		    const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
		      shouldForwardProp: shouldForwardPropOption,
		      label
		    }, options));
		    const transformStyleArg = stylesArg => {
		      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
		      // component stays as a function. This condition makes sure that we do not interpolate functions
		      // which are basically components used as a selectors.
		      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
		        return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
		          theme: resolveTheme({
		            theme: props.theme,
		            defaultTheme,
		            themeId
		          })
		        }));
		      }
		      return stylesArg;
		    };
		    const muiStyledResolver = (styleArg, ...expressions) => {
		      let transformedStyleArg = transformStyleArg(styleArg);
		      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
		      if (componentName && overridesResolver) {
		        expressionsWithDefaultTheme.push(props => {
		          const theme = resolveTheme((0, _extends2.default)({}, props, {
		            defaultTheme,
		            themeId
		          }));
		          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
		            return null;
		          }
		          const styleOverrides = theme.components[componentName].styleOverrides;
		          const resolvedStyleOverrides = {};
		          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
		          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
		            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
		              theme
		            }));
		          });
		          return overridesResolver(props, resolvedStyleOverrides);
		        });
		      }
		      if (componentName && !skipVariantsResolver) {
		        expressionsWithDefaultTheme.push(props => {
		          var _theme$components;
		          const theme = resolveTheme((0, _extends2.default)({}, props, {
		            defaultTheme,
		            themeId
		          }));
		          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
		          return processStyleArg({
		            variants: themeVariants
		          }, (0, _extends2.default)({}, props, {
		            theme
		          }));
		        });
		      }
		      if (!skipSx) {
		        expressionsWithDefaultTheme.push(systemSx);
		      }
		      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
		      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
		        const placeholders = new Array(numOfCustomFnsApplied).fill('');
		        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
		        transformedStyleArg = [...styleArg, ...placeholders];
		        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
		      }
		      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
		      if (process.env.NODE_ENV !== 'production') {
		        let displayName;
		        if (componentName) {
		          displayName = `${componentName}${(0, _capitalize.default)(componentSlot || '')}`;
		        }
		        if (displayName === undefined) {
		          displayName = `Styled(${(0, _getDisplayName.default)(tag)})`;
		        }
		        Component.displayName = displayName;
		      }
		      if (tag.muiName) {
		        Component.muiName = tag.muiName;
		      }
		      return Component;
		    };
		    if (defaultStyledResolver.withConfig) {
		      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
		    }
		    return muiStyledResolver;
		  };
		}
		return createStyled$1;
	}

	var createStyledExports = /*@__PURE__*/ requireCreateStyled();
	const createStyled = /*@__PURE__*/getDefaultExportFromCjs(createStyledExports);

	const defaultGenerator = componentName => componentName;
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
	  active: 'active',
	  checked: 'checked',
	  completed: 'completed',
	  disabled: 'disabled',
	  error: 'error',
	  expanded: 'expanded',
	  focused: 'focused',
	  focusVisible: 'focusVisible',
	  open: 'open',
	  readOnly: 'readOnly',
	  required: 'required',
	  selected: 'selected'
	};
	function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
	  const globalStateClass = globalStateClasses[slot];
	  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
	}

	function createMixins(breakpoints, mixins) {
	  return _extends$1({
	    toolbar: {
	      minHeight: 56,
	      [breakpoints.up('xs')]: {
	        '@media (orientation: landscape)': {
	          minHeight: 48
	        }
	      },
	      [breakpoints.up('sm')]: {
	        minHeight: 64
	      }
	    }
	  }, mixins);
	}

	var colorManipulator = {};

	const require$$1 = /*@__PURE__*/getAugmentedNamespace(formatMuiErrorMessage);

	function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
	  return Math.max(min, Math.min(val, max));
	}

	const clamp = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		default: clamp$1
	}, Symbol.toStringTag, { value: 'Module' }));

	const require$$2 = /*@__PURE__*/getAugmentedNamespace(clamp);

	var hasRequiredColorManipulator;

	function requireColorManipulator () {
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
		/* eslint-disable @typescript-eslint/naming-convention */

		/**
		 * Returns a number whose value is limited to the given range.
		 * @param {number} value The value to be clamped
		 * @param {number} min The lower boundary of the output range
		 * @param {number} max The upper boundary of the output range
		 * @returns {number} A number in the range [min, max]
		 */
		function clampWrapper(value, min = 0, max = 1) {
		  if (process.env.NODE_ENV !== 'production') {
		    if (value < min || value > max) {
		      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
		    }
		  }
		  return (0, _clamp.default)(value, min, max);
		}

		/**
		 * Converts a color from CSS hex format to CSS rgb format.
		 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
		 * @returns {string} A CSS rgb color string
		 */
		function hexToRgb(color) {
		  color = color.slice(1);
		  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
		  let colors = color.match(re);
		  if (colors && colors[0].length === 1) {
		    colors = colors.map(n => n + n);
		  }
		  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
	    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	  }).join(', ')})` : '';
		}
		function intToHex(int) {
		  const hex = int.toString(16);
		  return hex.length === 1 ? `0${hex}` : hex;
		}

		/**
		 * Returns an object with the type and values of a color.
		 *
		 * Note: Does not support rgb % values.
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @returns {object} - A MUI color object: {type: string, values: number[]}
		 */
		function decomposeColor(color) {
		  // Idempotent
		  if (color.type) {
		    return color;
		  }
		  if (color.charAt(0) === '#') {
		    return decomposeColor(hexToRgb(color));
		  }
		  const marker = color.indexOf('(');
		  const type = color.substring(0, marker);
		  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
		    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, _formatMuiErrorMessage2.default)(9, color));
		  }
		  let values = color.substring(marker + 1, color.length - 1);
		  let colorSpace;
		  if (type === 'color') {
		    values = values.split(' ');
		    colorSpace = values.shift();
		    if (values.length === 4 && values[3].charAt(0) === '/') {
		      values[3] = values[3].slice(1);
		    }
		    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
		      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
		    }
		  } else {
		    values = values.split(',');
		  }
		  values = values.map(value => parseFloat(value));
		  return {
		    type,
		    values,
		    colorSpace
		  };
		}

		/**
		 * Returns a channel created from the input color.
		 *
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
		 */
		const colorChannel = color => {
		  const decomposedColor = decomposeColor(color);
		  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
		};
		colorManipulator.colorChannel = colorChannel;
		const private_safeColorChannel = (color, warning) => {
		  try {
		    return colorChannel(color);
		  } catch (error) {
		    if (warning && process.env.NODE_ENV !== 'production') {
		      console.warn(warning);
		    }
		    return color;
		  }
		};

		/**
		 * Converts a color object with type and values to a string.
		 * @param {object} color - Decomposed color
		 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
		 * @param {array} color.values - [n,n,n] or [n,n,n,n]
		 * @returns {string} A CSS color string
		 */
		colorManipulator.private_safeColorChannel = private_safeColorChannel;
		function recomposeColor(color) {
		  const {
		    type,
		    colorSpace
		  } = color;
		  let {
		    values
		  } = color;
		  if (type.indexOf('rgb') !== -1) {
		    // Only convert the first 3 values to int (i.e. not alpha)
		    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
		  } else if (type.indexOf('hsl') !== -1) {
		    values[1] = `${values[1]}%`;
		    values[2] = `${values[2]}%`;
		  }
		  if (type.indexOf('color') !== -1) {
		    values = `${colorSpace} ${values.join(' ')}`;
		  } else {
		    values = `${values.join(', ')}`;
		  }
		  return `${type}(${values})`;
		}

		/**
		 * Converts a color from CSS rgb format to CSS hex format.
		 * @param {string} color - RGB color, i.e. rgb(n, n, n)
		 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
		 */
		function rgbToHex(color) {
		  // Idempotent
		  if (color.indexOf('#') === 0) {
		    return color;
		  }
		  const {
		    values
		  } = decomposeColor(color);
		  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
		}

		/**
		 * Converts a color from hsl format to rgb format.
		 * @param {string} color - HSL color values
		 * @returns {string} rgb color values
		 */
		function hslToRgb(color) {
		  color = decomposeColor(color);
		  const {
		    values
		  } = color;
		  const h = values[0];
		  const s = values[1] / 100;
		  const l = values[2] / 100;
		  const a = s * Math.min(l, 1 - l);
		  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		  let type = 'rgb';
		  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
		  if (color.type === 'hsla') {
		    type += 'a';
		    rgb.push(values[3]);
		  }
		  return recomposeColor({
		    type,
		    values: rgb
		  });
		}
		/**
		 * The relative brightness of any point in a color space,
		 * normalized to 0 for darkest black and 1 for lightest white.
		 *
		 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @returns {number} The relative brightness of the color in the range 0 - 1
		 */
		function getLuminance(color) {
		  color = decomposeColor(color);
		  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
		  rgb = rgb.map(val => {
		    if (color.type !== 'color') {
		      val /= 255; // normalized
		    }
		    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
		  });

		  // Truncate at 3 digits
		  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
		}

		/**
		 * Calculates the contrast ratio between two colors.
		 *
		 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
		 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
		 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
		 * @returns {number} A contrast ratio value in the range 0 - 21.
		 */
		function getContrastRatio(foreground, background) {
		  const lumA = getLuminance(foreground);
		  const lumB = getLuminance(background);
		  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
		}

		/**
		 * Sets the absolute transparency of a color.
		 * Any existing alpha values are overwritten.
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @param {number} value - value to set the alpha channel to in the range 0 - 1
		 * @returns {string} A CSS color string. Hex input values are returned as rgb
		 */
		function alpha(color, value) {
		  color = decomposeColor(color);
		  value = clampWrapper(value);
		  if (color.type === 'rgb' || color.type === 'hsl') {
		    color.type += 'a';
		  }
		  if (color.type === 'color') {
		    color.values[3] = `/${value}`;
		  } else {
		    color.values[3] = value;
		  }
		  return recomposeColor(color);
		}
		function private_safeAlpha(color, value, warning) {
		  try {
		    return alpha(color, value);
		  } catch (error) {
		    if (warning && process.env.NODE_ENV !== 'production') {
		      console.warn(warning);
		    }
		    return color;
		  }
		}

		/**
		 * Darkens a color.
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @param {number} coefficient - multiplier in the range 0 - 1
		 * @returns {string} A CSS color string. Hex input values are returned as rgb
		 */
		function darken(color, coefficient) {
		  color = decomposeColor(color);
		  coefficient = clampWrapper(coefficient);
		  if (color.type.indexOf('hsl') !== -1) {
		    color.values[2] *= 1 - coefficient;
		  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
		    for (let i = 0; i < 3; i += 1) {
		      color.values[i] *= 1 - coefficient;
		    }
		  }
		  return recomposeColor(color);
		}
		function private_safeDarken(color, coefficient, warning) {
		  try {
		    return darken(color, coefficient);
		  } catch (error) {
		    if (warning && process.env.NODE_ENV !== 'production') {
		      console.warn(warning);
		    }
		    return color;
		  }
		}

		/**
		 * Lightens a color.
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @param {number} coefficient - multiplier in the range 0 - 1
		 * @returns {string} A CSS color string. Hex input values are returned as rgb
		 */
		function lighten(color, coefficient) {
		  color = decomposeColor(color);
		  coefficient = clampWrapper(coefficient);
		  if (color.type.indexOf('hsl') !== -1) {
		    color.values[2] += (100 - color.values[2]) * coefficient;
		  } else if (color.type.indexOf('rgb') !== -1) {
		    for (let i = 0; i < 3; i += 1) {
		      color.values[i] += (255 - color.values[i]) * coefficient;
		    }
		  } else if (color.type.indexOf('color') !== -1) {
		    for (let i = 0; i < 3; i += 1) {
		      color.values[i] += (1 - color.values[i]) * coefficient;
		    }
		  }
		  return recomposeColor(color);
		}
		function private_safeLighten(color, coefficient, warning) {
		  try {
		    return lighten(color, coefficient);
		  } catch (error) {
		    if (warning && process.env.NODE_ENV !== 'production') {
		      console.warn(warning);
		    }
		    return color;
		  }
		}

		/**
		 * Darken or lighten a color, depending on its luminance.
		 * Light colors are darkened, dark colors are lightened.
		 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
		 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
		 * @returns {string} A CSS color string. Hex input values are returned as rgb
		 */
		function emphasize(color, coefficient = 0.15) {
		  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
		}
		function private_safeEmphasize(color, coefficient, warning) {
		  try {
		    return emphasize(color, coefficient);
		  } catch (error) {
		    if (warning && process.env.NODE_ENV !== 'production') {
		      console.warn(warning);
		    }
		    return color;
		  }
		}

		/**
		 * Blend a transparent overlay color with a background color, resulting in a single
		 * RGB color.
		 * @param {string} background - CSS color
		 * @param {string} overlay - CSS color
		 * @param {number} opacity - Opacity multiplier in the range 0 - 1
		 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
		 */
		function blend(background, overlay, opacity, gamma = 1.0) {
		  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
		  const backgroundColor = decomposeColor(background);
		  const overlayColor = decomposeColor(overlay);
		  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
		  return recomposeColor({
		    type: 'rgb',
		    values: rgb
		  });
		}
		return colorManipulator;
	}

	var colorManipulatorExports = /*@__PURE__*/ requireColorManipulator();

	const common = {
	  black: '#000',
	  white: '#fff'
	};

	const grey = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#f5f5f5',
	  A200: '#eeeeee',
	  A400: '#bdbdbd',
	  A700: '#616161'
	};

	const purple = {
	  50: '#f3e5f5',
	  200: '#ce93d8',
	  300: '#ba68c8',
	  400: '#ab47bc',
	  500: '#9c27b0',
	  700: '#7b1fa2'};

	const red = {
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  700: '#d32f2f',
	  800: '#c62828'};

	const orange = {
	  300: '#ffb74d',
	  400: '#ffa726',
	  500: '#ff9800',
	  700: '#f57c00',
	  900: '#e65100'};

	const blue = {
	  50: '#e3f2fd',
	  200: '#90caf9',
	  400: '#42a5f5',
	  700: '#1976d2',
	  800: '#1565c0'};

	const lightBlue = {
	  300: '#4fc3f7',
	  400: '#29b6f6',
	  500: '#03a9f4',
	  700: '#0288d1',
	  900: '#01579b'};

	const green = {
	  300: '#81c784',
	  400: '#66bb6a',
	  500: '#4caf50',
	  700: '#388e3c',
	  800: '#2e7d32',
	  900: '#1b5e20'};

	const _excluded$5 = ["mode", "contrastThreshold", "tonalOffset"];
	const light = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.6)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: common.white,
	    default: common.white
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.04)',
	    hoverOpacity: 0.04,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.08)',
	    selectedOpacity: 0.08,
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(0, 0, 0, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.12
	  }
	};
	const dark = {
	  text: {
	    primary: common.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: '#121212',
	    default: '#121212'
	  },
	  action: {
	    active: common.white,
	    hover: 'rgba(255, 255, 255, 0.08)',
	    hoverOpacity: 0.08,
	    selected: 'rgba(255, 255, 255, 0.16)',
	    selectedOpacity: 0.16,
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(255, 255, 255, 0.12)',
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
	    } else if (direction === 'light') {
	      intent.light = colorManipulatorExports.lighten(intent.main, tonalOffsetLight);
	    } else if (direction === 'dark') {
	      intent.dark = colorManipulatorExports.darken(intent.main, tonalOffsetDark);
	    }
	  }
	}
	function getDefaultPrimary(mode = 'light') {
	  if (mode === 'dark') {
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
	function getDefaultSecondary(mode = 'light') {
	  if (mode === 'dark') {
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
	function getDefaultError(mode = 'light') {
	  if (mode === 'dark') {
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
	function getDefaultInfo(mode = 'light') {
	  if (mode === 'dark') {
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
	function getDefaultSuccess(mode = 'light') {
	  if (mode === 'dark') {
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
	function getDefaultWarning(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: orange[400],
	      light: orange[300],
	      dark: orange[700]
	    };
	  }
	  return {
	    main: '#ed6c02',
	    // closest to orange[800] that pass 3:1.
	    light: orange[500],
	    dark: orange[900]
	  };
	}
	function createPalette(palette) {
	  const {
	      mode = 'light',
	      contrastThreshold = 3,
	      tonalOffset = 0.2
	    } = palette,
	    other = _objectWithoutPropertiesLoose(palette, _excluded$5);
	  const primary = palette.primary || getDefaultPrimary(mode);
	  const secondary = palette.secondary || getDefaultSecondary(mode);
	  const error = palette.error || getDefaultError(mode);
	  const info = palette.info || getDefaultInfo(mode);
	  const success = palette.success || getDefaultSuccess(mode);
	  const warning = palette.warning || getDefaultWarning(mode);

	  // Use the same logic as
	  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
	  function getContrastText(background) {
	    const contrastText = colorManipulatorExports.getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
	    if (process.env.NODE_ENV !== 'production') {
	      const contrast = colorManipulatorExports.getContrastRatio(background, contrastText);
	      if (contrast < 3) {
	        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
	      }
	    }
	    return contrastText;
	  }
	  const augmentColor = ({
	    color,
	    name,
	    mainShade = 500,
	    lightShade = 300,
	    darkShade = 700
	  }) => {
	    color = _extends$1({}, color);
	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }
	    if (!color.hasOwnProperty('main')) {
	      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage$1(11, name ? ` (${name})` : '', mainShade));
	    }
	    if (typeof color.main !== 'string') {
	      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage$1(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
	    }
	    addLightOrDark(color, 'light', lightShade, tonalOffset);
	    addLightOrDark(color, 'dark', darkShade, tonalOffset);
	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }
	    return color;
	  };
	  const modes = {
	    dark,
	    light
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    if (!modes[mode]) {
	      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
	    }
	  }
	  const paletteOutput = deepmerge$1(_extends$1({
	    // A collection of common colors.
	    common: _extends$1({}, common),
	    // prevent mutable object.
	    // The palette mode, can be light or dark.
	    mode,
	    // The colors used to represent primary interface elements for a user.
	    primary: augmentColor({
	      color: primary,
	      name: 'primary'
	    }),
	    // The colors used to represent secondary interface elements for a user.
	    secondary: augmentColor({
	      color: secondary,
	      name: 'secondary',
	      mainShade: 'A400',
	      lightShade: 'A200',
	      darkShade: 'A700'
	    }),
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: augmentColor({
	      color: error,
	      name: 'error'
	    }),
	    // The colors used to represent potentially dangerous actions or important messages.
	    warning: augmentColor({
	      color: warning,
	      name: 'warning'
	    }),
	    // The colors used to present information to the user that is neutral and not necessarily important.
	    info: augmentColor({
	      color: info,
	      name: 'info'
	    }),
	    // The colors used to indicate the successful completion of an action that user triggered.
	    success: augmentColor({
	      color: success,
	      name: 'success'
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

	const _excluded$4 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
	function round(value) {
	  return Math.round(value * 1e5) / 1e5;
	}
	const caseAllCaps = {
	  textTransform: 'uppercase'
	};
	const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

	/**
	 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
	 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
	 */
	function createTypography(palette, typography) {
	  const _ref = typeof typography === 'function' ? typography(palette) : typography,
	    {
	      fontFamily = defaultFontFamily,
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
	    } = _ref,
	    other = _objectWithoutPropertiesLoose(_ref, _excluded$4);
	  if (process.env.NODE_ENV !== 'production') {
	    if (typeof fontSize !== 'number') {
	      console.error('MUI: `fontSize` is required to be a number.');
	    }
	    if (typeof htmlFontSize !== 'number') {
	      console.error('MUI: `htmlFontSize` is required to be a number.');
	    }
	  }
	  const coef = fontSize / 14;
	  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
	  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
	    fontFamily,
	    fontWeight,
	    fontSize: pxToRem(size),
	    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
	    lineHeight
	  }, fontFamily === defaultFontFamily ? {
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
	      fontFamily: 'inherit',
	      fontWeight: 'inherit',
	      fontSize: 'inherit',
	      lineHeight: 'inherit',
	      letterSpacing: 'inherit'
	    }
	  };
	  return deepmerge$1(_extends$1({
	    htmlFontSize,
	    pxToRem,
	    fontFamily,
	    fontSize,
	    fontWeightLight,
	    fontWeightRegular,
	    fontWeightMedium,
	    fontWeightBold
	  }, variants), other, {
	    clone: false // No need to clone deep
	  });
	}

	const shadowKeyUmbraOpacity = 0.2;
	const shadowKeyPenumbraOpacity = 0.14;
	const shadowAmbientShadowOpacity = 0.12;
	function createShadow(...px) {
	  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
	}

	// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
	const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

	const _excluded$3 = ["duration", "easing", "delay"];
	// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
	// to learn the context in which each easing should be used.
	const easing = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	};

	// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing
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
	function getAutoHeightDuration(height) {
	  if (!height) {
	    return 0;
	  }
	  const constant = height / 36;

	  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
	  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
	}
	function createTransitions(inputTransitions) {
	  const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
	  const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
	  const create = (props = ['all'], options = {}) => {
	    const {
	        duration: durationOption = mergedDuration.standard,
	        easing: easingOption = mergedEasing.easeInOut,
	        delay = 0
	      } = options,
	      other = _objectWithoutPropertiesLoose(options, _excluded$3);
	    if (process.env.NODE_ENV !== 'production') {
	      const isString = value => typeof value === 'string';
	      // IE11 support, replace with Number.isNaN
	      // eslint-disable-next-line no-restricted-globals
	      const isNumber = value => !isNaN(parseFloat(value));
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
	      if (typeof options !== 'object') {
	        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
	      }
	      if (Object.keys(other).length !== 0) {
	        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
	      }
	    }
	    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
	  };
	  return _extends$1({
	    getAutoHeightDuration,
	    create
	  }, inputTransitions, {
	    easing: mergedEasing,
	    duration: mergedDuration
	  });
	}

	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	const zIndex = {
	  mobileStepper: 1000,
	  fab: 1050,
	  speedDial: 1050,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};

	const _excluded$2 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
	function createTheme(options = {}, ...args) {
	  const {
	      mixins: mixinsInput = {},
	      palette: paletteInput = {},
	      transitions: transitionsInput = {},
	      typography: typographyInput = {}
	    } = options,
	    other = _objectWithoutPropertiesLoose(options, _excluded$2);
	  if (options.vars &&
	  // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
	  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
	  options.generateCssVars === undefined) {
	    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage$1(18));
	  }
	  const palette = createPalette(paletteInput);
	  const systemTheme = createTheme$2(options);
	  let muiTheme = deepmerge$1(systemTheme, {
	    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
	    palette,
	    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
	    shadows: shadows.slice(),
	    typography: createTypography(palette, typographyInput),
	    transitions: createTransitions(transitionsInput),
	    zIndex: _extends$1({}, zIndex)
	  });
	  muiTheme = deepmerge$1(muiTheme, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
	  if (process.env.NODE_ENV !== 'production') {
	    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
	    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
	    const traverse = (node, component) => {
	      let key;

	      // eslint-disable-next-line guard-for-in, no-restricted-syntax
	      for (key in node) {
	        const child = node[key];
	        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
	          if (process.env.NODE_ENV !== 'production') {
	            const stateClass = generateUtilityClass('', key);
	            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
	              root: {
	                [`&.${stateClass}`]: child
	              }
	            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
	          }
	          // Remove the style to prevent global conflicts.
	          node[key] = {};
	        }
	      }
	    };
	    Object.keys(muiTheme.components).forEach(component => {
	      const styleOverrides = muiTheme.components[component].styleOverrides;
	      if (styleOverrides && component.indexOf('Mui') === 0) {
	        traverse(styleOverrides, component);
	      }
	    });
	  }
	  muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
	  muiTheme.unstable_sx = function sx(props) {
	    return styleFunctionSx$1({
	      sx: props,
	      theme: this
	    });
	  };
	  return muiTheme;
	}

	const defaultTheme = createTheme();

	const THEME_ID = '$$material';

	// copied from @mui/system/createStyled
	function slotShouldForwardProp(prop) {
	  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
	}

	const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';

	const styled = createStyled({
	  themeId: THEME_ID,
	  defaultTheme,
	  rootShouldForwardProp
	});

	/**
	 * Add keys, values of `defaultProps` that does not exist in `props`
	 * @param {object} defaultProps
	 * @param {object} props
	 * @returns {object} resolved props
	 */
	function resolveProps(defaultProps, props) {
	  const output = _extends$1({}, props);
	  Object.keys(defaultProps).forEach(propName => {
	    if (propName.toString().match(/^(components|slots)$/)) {
	      output[propName] = _extends$1({}, defaultProps[propName], output[propName]);
	    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
	      const defaultSlotProps = defaultProps[propName] || {};
	      const slotProps = props[propName];
	      output[propName] = {};
	      if (!slotProps || !Object.keys(slotProps)) {
	        // Reduce the iteration if the slot props is empty
	        output[propName] = defaultSlotProps;
	      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
	        // Reduce the iteration if the default slot props is empty
	        output[propName] = slotProps;
	      } else {
	        output[propName] = _extends$1({}, slotProps);
	        Object.keys(defaultSlotProps).forEach(slotPropName => {
	          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
	        });
	      }
	    } else if (output[propName] === undefined) {
	      output[propName] = defaultProps[propName];
	    }
	  });
	  return output;
	}

	const PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
	process.env.NODE_ENV !== "production" ? {
	  // ┌────────────────────────────── Warning ──────────────────────────────┐
	  // │ These PropTypes are generated from the TypeScript type definitions. │
	  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
	  // └─────────────────────────────────────────────────────────────────────┘
	  /**
	   * @ignore
	   */
	  children: PropTypes.node,
	  /**
	   * @ignore
	   */
	  value: PropTypes.object
	} : void 0;
	function getThemeProps(params) {
	  const {
	    theme,
	    name,
	    props
	  } = params;
	  if (!theme || !theme.components || !theme.components[name]) {
	    return props;
	  }
	  const config = theme.components[name];
	  if (config.defaultProps) {
	    // compatible with v5 signature
	    return resolveProps(config.defaultProps, props);
	  }
	  if (!config.styleOverrides && !config.variants) {
	    // v6 signature, no property 'defaultProps'
	    return resolveProps(config, props);
	  }
	  return props;
	}
	function useDefaultProps$1({
	  props,
	  name
	}) {
	  const ctx = React__namespace.useContext(PropsContext);
	  return getThemeProps({
	    props,
	    name,
	    theme: {
	      components: ctx
	    }
	  });
	}

	process.env.NODE_ENV !== "production" ? {
	  // ┌────────────────────────────── Warning ──────────────────────────────┐
	  // │ These PropTypes are generated from the TypeScript type definitions. │
	  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
	  // └─────────────────────────────────────────────────────────────────────┘
	  /**
	   * @ignore
	   */
	  children: PropTypes.node,
	  /**
	   * @ignore
	   */
	  value: PropTypes.object.isRequired
	} : void 0;
	function useDefaultProps(params) {
	  return useDefaultProps$1(params);
	}

	function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
	  const result = {};
	  slots.forEach(slot => {
	    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
	  });
	  return result;
	}

	function getTypographyUtilityClass(slot) {
	  return generateUtilityClass('MuiTypography', slot);
	}
	generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

	const _excluded$1 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
	const useUtilityClasses$1 = ownerState => {
	  const {
	    align,
	    gutterBottom,
	    noWrap,
	    paragraph,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize$1(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
	  };
	  return composeClasses(slots, getTypographyUtilityClass, classes);
	};
	const TypographyRoot = styled('span', {
	  name: 'MuiTypography',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize$1(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  margin: 0
	}, ownerState.variant === 'inherit' && {
	  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
	  font: 'inherit'
	}, ownerState.variant !== 'inherit' && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
	  textAlign: ownerState.align
	}, ownerState.noWrap && {
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  whiteSpace: 'nowrap'
	}, ownerState.gutterBottom && {
	  marginBottom: '0.35em'
	}, ownerState.paragraph && {
	  marginBottom: 16
	}));
	const defaultVariantMapping = {
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  subtitle1: 'h6',
	  subtitle2: 'h6',
	  body1: 'p',
	  body2: 'p',
	  inherit: 'p'
	};

	// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
	const colorTransformations = {
	  primary: 'primary.main',
	  textPrimary: 'text.primary',
	  secondary: 'secondary.main',
	  textSecondary: 'text.secondary',
	  error: 'error.main'
	};
	const transformDeprecatedColors = color => {
	  return colorTransformations[color] || color;
	};
	const Typography = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
	  const themeProps = useDefaultProps({
	    props: inProps,
	    name: 'MuiTypography'
	  });
	  const color = transformDeprecatedColors(themeProps.color);
	  const props = extendSxProp(_extends$1({}, themeProps, {
	    color
	  }));
	  const {
	      align = 'inherit',
	      className,
	      component,
	      gutterBottom = false,
	      noWrap = false,
	      paragraph = false,
	      variant = 'body1',
	      variantMapping = defaultVariantMapping
	    } = props,
	    other = _objectWithoutPropertiesLoose(props, _excluded$1);
	  const ownerState = _extends$1({}, props, {
	    align,
	    color,
	    className,
	    component,
	    gutterBottom,
	    noWrap,
	    paragraph,
	    variant,
	    variantMapping
	  });
	  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
	  const classes = useUtilityClasses$1(ownerState);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, _extends$1({
	    as: Component,
	    ref: ref,
	    ownerState: ownerState,
	    className: clsx(classes.root, className)
	  }, other));
	});
	process.env.NODE_ENV !== "production" ? Typography.propTypes /* remove-proptypes */ = {
	  // ┌────────────────────────────── Warning ──────────────────────────────┐
	  // │ These PropTypes are generated from the TypeScript type definitions. │
	  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
	  // └─────────────────────────────────────────────────────────────────────┘
	  /**
	   * Set the text-align on the component.
	   * @default 'inherit'
	   */
	  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
	  /**
	   * The content of the component.
	   */
	  children: PropTypes.node,
	  /**
	   * Override or extend the styles applied to the component.
	   */
	  classes: PropTypes.object,
	  /**
	   * @ignore
	   */
	  className: PropTypes.string,
	  /**
	   * The component used for the root node.
	   * Either a string to use a HTML element or a component.
	   */
	  component: PropTypes.elementType,
	  /**
	   * If `true`, the text will have a bottom margin.
	   * @default false
	   */
	  gutterBottom: PropTypes.bool,
	  /**
	   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
	   *
	   * Note that text overflow can only happen with block or inline-block level elements
	   * (the element needs to have a width in order to overflow).
	   * @default false
	   */
	  noWrap: PropTypes.bool,
	  /**
	   * If `true`, the element will be a paragraph element.
	   * @default false
	   */
	  paragraph: PropTypes.bool,
	  /**
	   * The system prop that allows defining system overrides as well as additional CSS styles.
	   */
	  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
	  /**
	   * Applies the theme typography styles.
	   * @default 'body1'
	   */
	  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),
	  /**
	   * The component maps the variant prop to a range of different HTML element types.
	   * For instance, subtitle1 to `<h6>`.
	   * If you wish to change that mapping, you can provide your own.
	   * Alternatively, you can use the `component` prop.
	   * @default {
	   *   h1: 'h1',
	   *   h2: 'h2',
	   *   h3: 'h3',
	   *   h4: 'h4',
	   *   h5: 'h5',
	   *   h6: 'h6',
	   *   subtitle1: 'h6',
	   *   subtitle2: 'h6',
	   *   body1: 'p',
	   *   body2: 'p',
	   *   inherit: 'p',
	   * }
	   */
	  variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object
	} : void 0;

	/**
	 * @ignore - internal component.
	 */
	const FormControlContext = /*#__PURE__*/React__namespace.createContext(undefined);
	if (process.env.NODE_ENV !== 'production') {
	  FormControlContext.displayName = 'FormControlContext';
	}

	function useFormControl() {
	  return React__namespace.useContext(FormControlContext);
	}

	function getInputAdornmentUtilityClass(slot) {
	  return generateUtilityClass('MuiInputAdornment', slot);
	}
	const inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);

	var _span;
	const _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
	const overridesResolver = (props, styles) => {
	  const {
	    ownerState
	  } = props;
	  return [styles.root, styles[`position${capitalize$1(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
	};
	const useUtilityClasses = ownerState => {
	  const {
	    classes,
	    disablePointerEvents,
	    hiddenLabel,
	    position,
	    size,
	    variant
	  } = ownerState;
	  const slots = {
	    root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${capitalize$1(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${capitalize$1(size)}`]
	  };
	  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
	};
	const InputAdornmentRoot = styled('div', {
	  name: 'MuiInputAdornment',
	  slot: 'Root',
	  overridesResolver
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  display: 'flex',
	  height: '0.01em',
	  // Fix IE11 flexbox alignment. To remove at some point.
	  maxHeight: '2em',
	  alignItems: 'center',
	  whiteSpace: 'nowrap',
	  color: (theme.vars || theme).palette.action.active
	}, ownerState.variant === 'filled' && {
	  // Styles applied to the root element if `variant="filled"`.
	  [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]: {
	    marginTop: 16
	  }
	}, ownerState.position === 'start' && {
	  // Styles applied to the root element if `position="start"`.
	  marginRight: 8
	}, ownerState.position === 'end' && {
	  // Styles applied to the root element if `position="end"`.
	  marginLeft: 8
	}, ownerState.disablePointerEvents === true && {
	  // Styles applied to the root element if `disablePointerEvents={true}`.
	  pointerEvents: 'none'
	}));
	const InputAdornment = /*#__PURE__*/React__namespace.forwardRef(function InputAdornment(inProps, ref) {
	  const props = useDefaultProps({
	    props: inProps,
	    name: 'MuiInputAdornment'
	  });
	  const {
	      children,
	      className,
	      component = 'div',
	      disablePointerEvents = false,
	      disableTypography = false,
	      position,
	      variant: variantProp
	    } = props,
	    other = _objectWithoutPropertiesLoose(props, _excluded);
	  const muiFormControl = useFormControl() || {};
	  let variant = variantProp;
	  if (variantProp && muiFormControl.variant) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (variantProp === muiFormControl.variant) {
	        console.error('MUI: The `InputAdornment` variant infers the variant prop ' + 'you do not have to provide one.');
	      }
	    }
	  }
	  if (muiFormControl && !variant) {
	    variant = muiFormControl.variant;
	  }
	  const ownerState = _extends$1({}, props, {
	    hiddenLabel: muiFormControl.hiddenLabel,
	    size: muiFormControl.size,
	    disablePointerEvents,
	    position,
	    variant
	  });
	  const classes = useUtilityClasses(ownerState);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext.Provider, {
	    value: null,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx(InputAdornmentRoot, _extends$1({
	      as: component,
	      ownerState: ownerState,
	      className: clsx(classes.root, className),
	      ref: ref
	    }, other, {
	      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
	        color: "text.secondary",
	        children: children
	      }) : /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
	        children: [position === 'start' ? ( /* notranslate needed while Google Translate will not fix zero-width space issue */_span || (_span = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	          className: "notranslate",
	          children: "\u200B"
	        }))) : null, children]
	      })
	    }))
	  });
	});
	process.env.NODE_ENV !== "production" ? InputAdornment.propTypes /* remove-proptypes */ = {
	  // ┌────────────────────────────── Warning ──────────────────────────────┐
	  // │ These PropTypes are generated from the TypeScript type definitions. │
	  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
	  // └─────────────────────────────────────────────────────────────────────┘
	  /**
	   * The content of the component, normally an `IconButton` or string.
	   */
	  children: PropTypes.node,
	  /**
	   * Override or extend the styles applied to the component.
	   */
	  classes: PropTypes.object,
	  /**
	   * @ignore
	   */
	  className: PropTypes.string,
	  /**
	   * The component used for the root node.
	   * Either a string to use a HTML element or a component.
	   */
	  component: PropTypes.elementType,
	  /**
	   * Disable pointer events on the root.
	   * This allows for the content of the adornment to focus the `input` on click.
	   * @default false
	   */
	  disablePointerEvents: PropTypes.bool,
	  /**
	   * If children is a string then disable wrapping in a Typography component.
	   * @default false
	   */
	  disableTypography: PropTypes.bool,
	  /**
	   * The position this adornment should appear relative to the `Input`.
	   */
	  position: PropTypes.oneOf(['end', 'start']).isRequired,
	  /**
	   * The system prop that allows defining system overrides as well as additional CSS styles.
	   */
	  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
	  /**
	   * The variant to use.
	   * Note: If you are using the `TextField` component or the `FormControl` component
	   * you do not have to set this manually.
	   */
	  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
	} : void 0;

	const InputText = React__namespace.default.forwardRef(
	  ({ variant = "primary", title, urlPrefix = "https://", ...props }, ref) => {
	    let muiProps = {
	      fullWidth: true,
	      variant: "outlined"
	    };
	    switch (variant) {
	      case "primary":
	        muiProps = {
	          ...muiProps,
	          color: "primary"
	        };
	        break;
	      case "secondary":
	        muiProps = {
	          ...muiProps,
	          color: "secondary"
	        };
	        break;
	      case "error":
	        muiProps = {
	          ...muiProps,
	          error: true
	        };
	        break;
	      case "masked":
	        muiProps = {
	          ...muiProps,
	          color: "primary",
	          InputProps: {
	            ...props.InputProps,
	            startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(
	              InputAdornment,
	              {
	                position: "start",
	                sx: {
	                  color: "#29374780",
	                  p: 0,
	                  marginRight: 0
	                },
	                children: urlPrefix
	              }
	            )
	          }
	        };
	        break;
	    }
	    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
	      title && /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
	        title,
	        " ",
	        props.required ? /* @__PURE__ */ jsxRuntimeExports.jsx(
	          material.Typography,
	          {
	            sx: { fontSize: 20, pl: 0.3, display: "block" },
	            color: "#C10000",
	            children: "*"
	          }
	        ) : ""
	      ] }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx(
	        TextFieldStyled,
	        {
	          ref,
	          ...muiProps,
	          ...props,
	          sx: {
	            "& .MuiOutlinedInput-input": {
	              paddingLeft: variant === "masked" ? "0px !important" : "16px"
	            }
	          }
	        }
	      )
	    ] });
	  }
	);
	InputText.displayName = "TextField";

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

	const legacyPalette = {
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
	  backgrounds: {
	    white: "#FFFFFF",
	    system: "#F4F5F8",
	    form: "#1e6779",
	    login: "#FFFCF5",
	    error: "#FCF6F6",
	    border: "#D6DCE6",
	    addInInfo: "#FFF7E1"
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
	const universalPalette = {
	  white: {
	    light: "#FFFFFF"
	  },
	  navy: {
	    dark: "#293747"
	  },
	  black: {
	    dark: "#000000"
	  },
	  neutral: {
	    darkGrey: "#828282",
	    grey2: "#CACACA",
	    lightGrey: "#EEEEEE"
	  },
	  flat: {
	    grey: "#F9F9F9"
	  },
	  stroke: {
	    grey: "#DBDFE3"
	  },
	  alerts: {
	    yellow: {
	      alert: "#FFF4E5",
	      border: "#D4CBBE",
	      accent: "#EF6C00",
	      dark: "#663C00"
	    },
	    blue: {
	      alert: "#E5F6FD",
	      light: "#D4EBF5",
	      border: "#C1C9D8",
	      accent: "#0288D1",
	      dark: "#014361"
	    },
	    green: {
	      alert: "#EDF7ED",
	      light: "#DFF1D5",
	      border: "#A5B5A5",
	      accent: "#2E7D32",
	      dark: "#1E4620"
	    },
	    red: {
	      alert: "#FDEDED",
	      light: "#F9D8D0",
	      border: "#DCCDCD",
	      accent: "#D32F2F",
	      dark: "#5F2120"
	    }
	  }
	};
	const paletteZborAjutor = {
	  ...legacyPalette,
	  ...universalPalette,
	  mode: "light",
	  primary: {
	    hue: "#EFF7F1",
	    main: "#149F42",
	    main60: "#72C58E",
	    light: "#A9DCBA",
	    dark: "#0E1726"
	  },
	  secondary: {
	    light: "#DEF9D0",
	    main: "#218141",
	    dark: "#115026"
	  }
	};
	const paletteFlightHelp = {
	  ...legacyPalette,
	  ...universalPalette,
	  mode: "light",
	  primary: {
	    hue: "#F6FBFB",
	    main: "#20ABAD",
	    main60: "#6FC3C4",
	    light: "#8FB2B2",
	    dark: "#0F5C5D",
	    hover: "#063536"
	  },
	  secondary: {
	    light: "#F9D8D0",
	    main: "#FE5B35",
	    dark: "#E64722"
	  }
	};
	console.log(paletteFlightHelp);
	const palette = {
	  legacyPalette,
	  universalPalette,
	  paletteZborAjutor,
	  paletteFlightHelp
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
	  h1: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "28px",
	    lineHeight: "36px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "28px",
	      lineHeight: "36px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "40px",
	      lineHeight: "46px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "40px",
	      lineHeight: "46px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "48px",
	      lineHeight: "56px"
	    }
	  },
	  h2: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "26px",
	    lineHeight: "32px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "35px",
	      lineHeight: "38px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "35px",
	      lineHeight: "38px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "40px",
	      lineHeight: "44px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "40px",
	      lineHeight: "44px"
	    }
	  },
	  h3: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "24px",
	    lineHeight: "30px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "24px",
	      lineHeight: "30px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "32px",
	      lineHeight: "26px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "36px",
	      lineHeight: "44px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "36px",
	      lineHeight: "44px"
	    }
	  },
	  h4: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "22px",
	    lineHeight: "26px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "22px",
	      lineHeight: "26px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "26px",
	      lineHeight: "30px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "28px",
	      lineHeight: "26px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "28px",
	      lineHeight: "26px"
	    }
	  },
	  h5: {
	    fontFamily,
	    fontWeight: 600,
	    // SemiBold
	    fontSize: "20px",
	    lineHeight: "26px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "20px",
	      lineHeight: "26px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "22px",
	      lineHeight: "28px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "22px",
	      lineHeight: "28px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "24px",
	      lineHeight: "29px"
	    }
	  },
	  h6: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "18px",
	    lineHeight: "26px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px) and (max-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "18px",
	      lineHeight: "26px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "20px",
	      lineHeight: "26px"
	    }
	  },
	  allCaps: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    textTransform: "uppercase",
	    fontSize: "12px",
	    lineHeight: "18px",
	    letterSpacing: "4px",
	    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
	      fontSize: "12px",
	      lineHeight: "18px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "15px",
	      lineHeight: "20px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
	      fontSize: "15px",
	      lineHeight: "20px"
	    },
	    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
	      fontSize: "17px",
	      lineHeight: "23px"
	    }
	  },
	  // Bold.18
	  bold18: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "18px",
	    lineHeight: "24px"
	  },
	  // Regular.18
	  regular18: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "18px",
	    lineHeight: "24px"
	  },
	  // Bold.16
	  bold16: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "16px",
	    lineHeight: "26px"
	  },
	  // Regular.16
	  regular16: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "16px",
	    lineHeight: "26px"
	  },
	  // Bold.14
	  bold14: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "14px",
	    lineHeight: "20px"
	  },
	  // Regular.14
	  regular14: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "14px",
	    lineHeight: "20px"
	  },
	  // Bold.12 (SemiBold)
	  bold12: {
	    fontFamily,
	    fontWeight: 600,
	    // SemiBold
	    fontSize: "12px",
	    lineHeight: "16px"
	  },
	  // Regular.12
	  regular12: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "12px",
	    lineHeight: "16px"
	  },
	  // Bold.10
	  bold10: {
	    fontFamily,
	    fontWeight: 700,
	    // Bold
	    fontSize: "10px",
	    lineHeight: "14px"
	  },
	  // Regular.10
	  regular10: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "10px",
	    lineHeight: "14px"
	  },
	  // Normal Link
	  normalLink: {
	    fontFamily,
	    fontWeight: 400,
	    // Regular
	    fontSize: "12px",
	    lineHeight: "16px",
	    textDecoration: "underline"
	  },
	  // Button Link
	  buttonLink: {
	    fontFamily,
	    fontWeight: 600,
	    // SemiBold
	    fontSize: "12px",
	    lineHeight: "16px",
	    textTransform: "capitalize"
	    // Title Case
	  },
	  h1Light: {},
	  h1Regular: {},
	  regularBold: {
	    fontWeight: 600,
	    fontSize: "14px",
	    lineHeight: "16px"
	  },
	  regularRegular: {},
	  smallBold: {},
	  smallSemiBold: {},
	  xsmallRegular: {},
	  xsmallSemiBold: {},
	  h1Bold: {
	    fontFamily,
	    fontSize: "48px",
	    lineHeight: "56px",
	    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "32px",
	      lineHeight: "40px"
	    },
	    fontWeight: "700"
	  },
	  h1SemiBold: {
	    fontFamily,
	    fontSize: "48px",
	    lineHeight: "60px",
	    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
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
	  h2Bold: {
	    fontFamily,
	    fontSize: "40px",
	    lineHeight: "60px",
	    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
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
	  h3Bold: {
	    fontFamily,
	    fontSize: "28px",
	    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
	      fontSize: "24px"
	    },
	    fontWeight: "600",
	    lineHeight: "40px"
	  },
	  h3Regular: {
	    fontFamily,
	    fontSize: "32px",
	    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
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
	  smallRegular: {
	    fontFamily,
	    fontSize: "12px",
	    fontWeight: "400",
	    lineHeight: "16px"
	  },
	  paragraphBold: {
	    fontFamily,
	    fontSize: "16px",
	    fontWeight: "700",
	    lineHeight: "30px"
	  },
	  paragraphMedium: {
	    fontFamily,
	    fontSize: "16px",
	    fontWeight: "500",
	    lineHeight: "30px"
	  },
	  // Otras variantes estándar
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

	const MuiButton = (theme) => {
	  const styleOverrides = {
	    defaultProps: {
	      disableRipple: true,
	      variant: "primary"
	    },
	    styleOverrides: {
	      root: {},
	      contained: {
	        color: theme.palette.common.white,
	        "&:hover": {
	          color: theme.palette.common.black
	        }
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiButtonBase = (theme) => {
	  const styleOverrides = {
	    defaultProps: {
	      disableRipple: true
	    }
	  };
	  return styleOverrides;
	};

	const MuiFormHelperText = (theme) => {
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

	const MuiInputBase = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      input: {
	        ...theme.typography.regularRegular
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiFormLabel = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      root: {
	        "&.MuiFormLabel-root": {
	          ...theme.typography.regularRegular
	        }
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiMenuItem = (theme) => {
	  const styleOverrides = {
	    defaultProps: {
	      disableRipple: true
	    },
	    styleOverrides: {
	      root: {
	        ...theme.typography.regularRegular
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiAutocomplete = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      listbox: {
	        ...theme.typography.regularRegular
	      },
	      noOptions: {
	        ...theme.typography.regularRegular
	      },
	      loading: {
	        ...theme.typography.regularRegular
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiPickersCalendarHeader = (theme) => {
	  return {
	    styleOverrides: {
	      root: {
	        fontFamily
	      }
	    }
	  };
	};

	const MuiPickersDay = (theme) => {
	  return {
	    styleOverrides: {
	      root: {
	        "&.Mui-selected": {
	          backgroundColor: `${theme.palette.primary.main} !important`
	        }
	      }
	    }
	  };
	};

	const MuiIconButton = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      root: {
	        "&:focus": {
	          backgroundColor: theme.palette.buttons?.iconButtonBackgroundFocus
	        }
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiPickersToolbar = (theme) => {
	  return {
	    styleOverrides: {
	      root: {
	        fontFamily
	      }
	    }
	  };
	};

	const MuiAccordionSummary = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      expandIconWrapper: {
	        color: theme.palette.secondary.main
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiListItemButton = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      root: {
	        "&.nav-bar-item": {
	          cursor: "pointer",
	          borderRadius: "60px",
	          color: theme.palette.common.black,
	          backgroundColor: "transparent",
	          "&.MuiListItemButton-root-active": {
	            backgroundColor: theme.palette.common.white
	          },
	          "&.MuiListItemButton-root:hover": {
	            color: "initial",
	            backgroundColor: material.darken(theme.palette.common.white, 0.1),
	            "&.MuiListItemButton-root:hover .MuiListItemIcon-root": {
	              color: theme.palette.primary.main
	            }
	          }
	        }
	      }
	    }
	  };
	  return styleOverrides;
	};

	const MuiTableCell = (theme) => {
	  const styleOverrides = {
	    styleOverrides: {
	      body: {
	        ...theme.typography.smallRegular
	      },
	      head: {
	        ...theme.typography.smallBold
	      }
	    }
	  };
	  return styleOverrides;
	};

	const overrides = (theme) => {
	  return {
	    MuiButton: MuiButton(theme),
	    MuiButtonBase: MuiButtonBase(),
	    MuiInputBase: MuiInputBase(theme),
	    MuiFormLabel: MuiFormLabel(theme),
	    MuiFormHelperText: MuiFormHelperText(),
	    MuiMenuItem: MuiMenuItem(theme),
	    MuiAutocomplete: MuiAutocomplete(theme),
	    MuiPickersCalendarHeader: MuiPickersCalendarHeader(),
	    MuiPickersToolbar: MuiPickersToolbar(),
	    MuiPickersDay: MuiPickersDay(theme),
	    MuiIconButton: MuiIconButton(theme),
	    MuiAccordionSummary: MuiAccordionSummary(theme),
	    MuiListItemButton: MuiListItemButton(theme),
	    MuiTableCell: MuiTableCell(theme)
	  };
	};

	function buttons(theme) {
	  return {
	    MuiButton: {
	      defaultProps: {
	        disableElevation: true
	      },
	      styleOverrides: {
	        root: {
	          textTransform: "none",
	          borderRadius: "20px"
	        },
	        sizeMedium: {
	          padding: "8px 22px"
	        },
	        sizeLarge: {
	          padding: "19px 22px"
	        },
	        sizeSmall: {
	          padding: "4px 16px 6px 16px"
	        }
	      },
	      variants: [
	        {
	          props: { variant: "primaryBlue" },
	          style: {
	            backgroundColor: theme.palette?.primary?.dark,
	            color: theme.palette.common.white,
	            "&:hover": {
	              backgroundColor: theme.palette?.primary?.hover,
	              color: theme.palette.common.white
	            },
	            "&:focus": {
	              backgroundColor: theme.palette?.primary?.hover,
	              border: `3px solid ${theme.palette?.primary?.main}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        },
	        {
	          props: { variant: "secondaryOrange" },
	          style: {
	            backgroundColor: theme.palette?.secondary?.main,
	            color: theme.palette.common.white,
	            borderColor: theme.palette?.secondary?.main,
	            "&:hover": {
	              backgroundColor: theme.palette?.secondary?.dark
	            },
	            "&:focus": {
	              backgroundColor: theme.palette?.secondary?.main,
	              border: `3px solid ${theme.palette?.secondary?.dark}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        },
	        {
	          props: { variant: "secondaryOutlined" },
	          style: {
	            backgroundColor: theme.palette.common.white,
	            color: theme.palette?.secondary?.main,
	            border: `1px solid ${theme.palette?.secondary?.dark}`,
	            "&:hover": {
	              backgroundColor: theme.palette?.secondary?.light
	            },
	            "&:focus": {
	              borderColor: theme.palette.secondary.dark,
	              border: `3px solid ${theme.palette?.secondary?.main}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        },
	        {
	          props: { variant: "primaryOutline" },
	          style: {
	            backgroundColor: theme.palette.common.white,
	            color: theme.palette?.primary?.dark,
	            border: `1px solid ${theme.palette?.primary?.dark}`,
	            "&:hover": {
	              backgroundColor: "#E64722",
	              color: theme.palette.common.white
	            },
	            "&:focus": {
	              backgroundColor: theme.palette?.secondary.main,
	              border: `3px solid ${theme.palette?.primary?.main}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        },
	        {
	          props: { variant: "transparent" },
	          style: {
	            color: theme.palette.common.white,
	            border: `1px solid ${theme.palette.common.white}`,
	            "&:hover": {
	              opacity: 0.82
	            },
	            "&:focus": {
	              border: `2px solid ${theme.palette.common.white}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        },
	        {
	          props: { variant: "primaryMain" },
	          style: {
	            backgroundColor: theme.palette?.primary?.main,
	            color: theme.palette.common.white,
	            "&:hover": {
	              backgroundColor: theme.palette?.primary?.dark,
	              color: theme.palette.common.white
	            },
	            "&:focus": {
	              backgroundColor: theme.palette?.primary?.hover,
	              border: `3px solid ${theme.palette?.primary?.main}`
	            },
	            "&.Mui-disabled": {
	              backgroundColor: "#D8DFE3",
	              color: "#828282",
	              borderColor: "#828282"
	            }
	          }
	        }
	      ]
	    }
	  };
	}

	const getColors = (type) => {
	  if (type === "zaborAjutor") {
	    return palette.paletteZborAjutor;
	  }
	  return palette.paletteFlightHelp;
	};
	const customCreateTheme = (type) => {
	  const colors = getColors(type);
	  const baseTheme = createTheme({
	    typography,
	    spacing: 4,
	    palette: colors,
	    breakpoints
	  });
	  const componentsOverrides = overrides(baseTheme);
	  const buttonOverrides = buttons(baseTheme);
	  const flightHelpTheme = createTheme({
	    typography,
	    spacing: 4,
	    palette: colors,
	    breakpoints,
	    components: {
	      ...componentsOverrides,
	      MuiButton: {
	        ...componentsOverrides.MuiButton,
	        ...buttonOverrides.MuiButton
	      }
	    }
	  });
	  return flightHelpTheme;
	};

	exports.Button = Button;
	exports.InputText = InputText;
	exports.breakpoints = breakpoints;
	exports.customCreateTheme = customCreateTheme;
	exports.palette = palette;
	exports.typography = typography;

	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=flighthelp-ui.umd.js.map
