'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var classNames = _interopDefault(require('classnames'));
var bodyScrollLock = require('body-scroll-lock');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

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
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
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
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
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

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
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

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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
  function PropTypeError(message) {
    this.message = message;
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

      if (secret !== ReactPropTypesSecret_1) {
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
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
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

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
      if (!reactIs.isValidElementType(propValue)) {
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
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
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
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
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

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
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
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
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

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});
var propTypes_1 = propTypes.any;
var propTypes_2 = propTypes.array;
var propTypes_3 = propTypes.bool;
var propTypes_4 = propTypes.func;
var propTypes_5 = propTypes.number;
var propTypes_6 = propTypes.object;
var propTypes_7 = propTypes.string;
var propTypes_8 = propTypes.node;
var propTypes_9 = propTypes.element;
var propTypes_10 = propTypes.symbol;
var propTypes_11 = propTypes.elementType;
var propTypes_12 = propTypes.instanceOf;
var propTypes_13 = propTypes.oneOf;
var propTypes_14 = propTypes.oneOfType;
var propTypes_15 = propTypes.arrayOf;
var propTypes_16 = propTypes.objectOf;
var propTypes_17 = propTypes.shape;
var propTypes_18 = propTypes.exact;

/**
 * @description Is null
 * @param val
 */
var isNull = function (val) { return val === null; };
/**
 * @description Is array
 * @param val
 */
var isArr = function (val) { return Array.isArray(val); };
/**
 * @description Is object
 * @param val
 */
var isObj = function (val) { return typeof val === 'object' && !isArr(val) && !isNull(val); };
/**
 * @description Is number
 * @param val
 */
// eslint-disable-next-line no-restricted-globals
var isNum = function (val) { return typeof val === 'number' && !isNaN(val); };
/**
 * @description Is function
 * @param val
 */
var isFunc = function (val) { return typeof val === 'function'; };
/**
 * @description Is string
 * @param val
 */
var isStr = function (val) { return typeof val === 'string'; };
/**
 * @description Is non empty string
 * @param val
 */
var isNonEmptyStr = function (val) { return isStr(val) && val !== ''; };
/**
 * @description Uid
 * @param len
 */
var uid = function (len) {
    if (len === void 0) { len = 7; }
    return Math.random().toString(35).substr(2, len);
};
/**
 * @description Observe intersection
 * @param target
 * @param callback
 */
var observeIntersection = function (target, callback) {
    if (!isFunc(window.IntersectionObserver)) {
        return console.warn('IntersectionObserver is not supported.');
    }
    // eslint-disable-next-line compat/compat
    var Observe = new IntersectionObserver(function (items) {
        callback(items);
    });
    Observe.observe(target);
    return Observe;
};
/**
 * @description Get css var
 * @param varName
 */
var getCssVar = function (varName) { return (getComputedStyle(document.documentElement).getPropertyValue(varName)); };
/**
 * @description Set css var
 * @param varName
 * @param varValue
 */
var setCssVar = function (varName, varValue) {
    document.documentElement.style.setProperty(varName, varValue);
};
/**
 * @description Limit number
 * @param num
 * @param max
 */
var limitNum = function (num, max) { return (num <= max ? num : max); };
/**
 * @description Can render prop
 * @param prop
 */
var isRenderable = function (prop) { return isNonEmptyStr(prop) || isNum(prop) || isObj(prop); };
/**
 * @description Contains node
 * @param nodes
 * @param node
 */
var containsNode = function (nodes, node) {
    var containsNode = false;
    for (var i = 0; i < nodes.length; i += 1) {
        var pathNode = nodes[i];
        if (isFunc(pathNode.isSameNode) && pathNode.isSameNode(node)) {
            containsNode = true;
            break;
        }
    }
    return containsNode;
};

var Button = function (props) {
    var _a;
    var children = props.children, type = props.type, size = props.size, className = props.className, active = props.active, loading = props.loading, outlined = props.outlined, expanded = props.expanded, rounded = props.rounded, fab = props.fab, bordered = props.bordered, flat = props.flat, hovered = props.hovered, dashed = props.dashed, squared = props.squared, restProps = __rest(props, ["children", "type", "size", "className", "active", "loading", "outlined", "expanded", "rounded", "fab", "bordered", "flat", "hovered", "dashed", "squared"]);
    var componentClassName = classNames((_a = {
            btn: true
        },
        _a["btn--" + type] = true,
        _a['btn--active'] = active,
        _a['btn--loading'] = loading,
        _a['btn--outlined'] = outlined,
        _a['btn--expanded'] = expanded,
        _a['btn--rounded'] = rounded,
        _a['btn--fab'] = fab,
        _a['btn--no-border'] = !bordered,
        _a['btn--flat'] = flat,
        _a['btn--hovered'] = hovered,
        _a['btn--dashed'] = dashed,
        _a['btn--squared'] = squared || fab,
        _a["btn--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("button", __assign({}, restProps, { className: componentClassName }), children));
};
Button.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    type: propTypes_13([
        'link',
        'text',
        'icon',
        'primary',
        'secondary',
        'success',
        'info',
        'danger',
        'warning',
        'facebook',
        'google'
    ]),
    size: propTypes_13([null, 'sm', 'lg']),
    className: propTypes_7,
    active: propTypes_3,
    loading: propTypes_3,
    outlined: propTypes_3,
    expanded: propTypes_3,
    rounded: propTypes_3,
    fab: propTypes_3,
    bordered: propTypes_3,
    flat: propTypes_3,
    hovered: propTypes_3,
    dashed: propTypes_3,
    squared: propTypes_3
};
Button.defaultProps = {
    type: 'secondary',
    size: null,
    className: null,
    active: false,
    loading: false,
    outlined: false,
    expanded: false,
    rounded: false,
    fab: false,
    bordered: true,
    flat: true,
    hovered: false,
    dashed: false,
    squared: false
};

var ButtonGroup = function (props) {
    var _a;
    var children = props.children, align = props.align, className = props.className, rounded = props.rounded, wrapped = props.wrapped, stacked = props.stacked, restProps = __rest(props, ["children", "align", "className", "rounded", "wrapped", "stacked"]);
    var componentClassName = classNames((_a = {
            'btn-group': true,
            'btn-group--rounded': rounded,
            'btn-group--nowrap': !wrapped,
            'btn-group--stacked': stacked
        },
        _a["btn-group--" + align] = align !== 'left',
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({ className: componentClassName }, restProps), children));
};
ButtonGroup.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    align: propTypes_13([
        'left',
        'center',
        'right'
    ]),
    className: propTypes_7,
    rounded: propTypes_3,
    wrapped: propTypes_3,
    stacked: propTypes_3
};
ButtonGroup.defaultProps = {
    align: 'left',
    className: null,
    rounded: false,
    wrapped: true,
    stacked: false
};

var Card = function (props) {
    var _a;
    var children = props.children, paddingSize = props.paddingSize, className = props.className, hovered = props.hovered, padded = props.padded, loading = props.loading, bordered = props.bordered, flat = props.flat, rounded = props.rounded, restProps = __rest(props, ["children", "paddingSize", "className", "hovered", "padded", "loading", "bordered", "flat", "rounded"]);
    var componentClassName = classNames((_a = {
            card: true,
            'card--padding': padded,
            'card--loading': loading,
            'card--hover': hovered,
            'card--bordered': bordered,
            'card--flat': flat,
            'card--rounded': rounded
        },
        _a["card--padding-" + paddingSize] = isStr(paddingSize),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Card.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    paddingSize: propTypes_13([
        null,
        'sm',
        'lg'
    ]),
    className: propTypes_7,
    hovered: propTypes_3,
    padded: propTypes_3,
    loading: propTypes_3,
    bordered: propTypes_3,
    flat: propTypes_3,
    rounded: propTypes_3
};
Card.defaultProps = {
    paddingSize: null,
    className: null,
    hovered: false,
    padded: true,
    loading: false,
    bordered: true,
    flat: false,
    rounded: true
};

var CardDivider = function (_a) {
    var _b;
    var className = _a.className, restProps = __rest(_a, ["className"]);
    var componentClassName = classNames((_b = {
            card__divider: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName })));
};
CardDivider.propTypes = {
    className: propTypes_7
};
CardDivider.defaultProps = {
    className: null
};

var sizes = ['auto', 'xs', 'sm', 'md', 'lg', 'xl'];
var DropdownBody = function (props) {
    var _a;
    var children = props.children, size = props.size, className = props.className, active = props.active, restProps = __rest(props, ["children", "size", "className", "active"]);
    var componentClassName = classNames((_a = {
            dropdown__body: true,
            'dropdown__body--active': active
        },
        // @ts-ignore
        _a["dropdown__body--size-" + size] = DropdownBody.sizes.includes(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({ "aria-expanded": active }, restProps, { className: componentClassName }), children));
};
DropdownBody.sizes = sizes;
DropdownBody.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_5,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    size: propTypes_13(sizes),
    className: propTypes_7,
    active: propTypes_3
};
DropdownBody.defaultProps = {
    size: 'auto',
    className: null,
    active: false
};

var DropdownText = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            dropdown__text: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
DropdownText.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_5,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
DropdownText.defaultProps = {
    className: null
};

var DropdownItem = function (props) {
    var _a;
    var children = props.children, className = props.className, active = props.active, restProps = __rest(props, ["children", "className", "active"]);
    var componentClassName = classNames((_a = {
            dropdown__item: true,
            'dropdown__item--active': active
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({ role: "option", "aria-selected": active }, restProps, { className: componentClassName }), children));
};
DropdownItem.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_5,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    active: propTypes_3
};
DropdownItem.defaultProps = {
    className: null,
    active: false
};

var DropdownDivider = function (props) {
    var _a;
    var className = props.className, restProps = __rest(props, ["className"]);
    var componentClassName = classNames((_a = {
            dropdown__divider: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName })));
};
DropdownDivider.propTypes = {
    className: propTypes_7
};
DropdownDivider.defaultProps = {
    className: null
};

var addEventListener = window.addEventListener, removeEventListener = window.removeEventListener;
var useRef = React.useRef, useEffect = React.useEffect;
var Dropdown = function (props) {
    var _a;
    var children = props.children, className = props.className, onClickOutside = props.onClickOutside, restProps = __rest(props, ["children", "className", "onClickOutside"]);
    var refComponent = useRef(null);
    var latestOnClickOutside = useRef(onClickOutside);
    var hasOnClickOutside = isFunc(onClickOutside);
    var componentClassName = classNames((_a = {
            dropdown: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    var onClick = function (event) {
        var pathNodes = event.composedPath();
        var dropdownNode = refComponent.current;
        var hasPathNodes = isArr(pathNodes);
        // @ts-ignore
        if (hasPathNodes && !containsNode(pathNodes, dropdownNode)) {
            // @ts-ignore
            onClickOutside();
        }
    };
    useEffect(function () {
        latestOnClickOutside.current = onClickOutside;
        if (hasOnClickOutside) {
            addEventListener('click', onClick);
        }
        return function () {
            if (hasOnClickOutside) {
                removeEventListener('click', onClick);
            }
        };
    }, [onClickOutside]);
    return (React.createElement("div", __assign({}, restProps, { ref: refComponent, className: componentClassName }), children));
};
Dropdown.Body = DropdownBody;
Dropdown.Text = DropdownText;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_5,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    onClickOutside: propTypes_4
};
Dropdown.defaultProps = {
    className: null,
    onClickOutside: null
};

var Row = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            row: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Row.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Row.defaultProps = {
    className: null
};

var Col = function (props) {
    var _a;
    var children = props.children, widths = props.widths, orders = props.orders, className = props.className, restProps = __rest(props, ["children", "widths", "orders", "className"]);
    var hasWidths = isArr(widths);
    var hasOrders = isArr(orders);
    var colClasses = (_a = {
            col: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a);
    if (hasWidths) {
        // @ts-ignore
        widths.forEach(function (w) {
            colClasses["col--" + w] = true;
        });
    }
    if (hasOrders) {
        // @ts-ignore
        orders.forEach(function (order) {
            colClasses["order--" + order] = true;
        });
    }
    var colClassName = classNames(colClasses);
    return (React.createElement("div", __assign({}, restProps, { className: colClassName }), children));
};
Col.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    widths: propTypes_15(propTypes_13([
        'sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7', 'sm-8', 'sm-9', 'sm-10', 'sm-11', 'sm-12',
        'md-1', 'md-2', 'md-3', 'md-4', 'md-5', 'md-6', 'md-7', 'md-8', 'md-9', 'md-10', 'md-11', 'md-12',
        'lg-1', 'lg-2', 'lg-3', 'lg-4', 'lg-5', 'lg-6', 'lg-7', 'lg-8', 'lg-9', 'lg-10', 'lg-11', 'lg-12',
        'xl-1', 'xl-2', 'xl-3', 'xl-4', 'xl-5', 'xl-6', 'xl-7', 'xl-8', 'xl-9', 'xl-10', 'xl-11', 'xl-12'
    ])),
    orders: propTypes_15(propTypes_13([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        'sm-0', 'sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7', 'sm-8', 'sm-9', 'sm-10', 'sm-11',
        'md-0', 'md-1', 'md-2', 'md-3', 'md-4', 'md-5', 'md-6', 'md-7', 'md-8', 'md-9', 'md-10', 'md-11',
        'lg-0', 'lg-1', 'lg-2', 'lg-3', 'lg-4', 'lg-5', 'lg-6', 'lg-7', 'lg-8', 'lg-9', 'lg-10', 'lg-11',
        'xl-0', 'xl-1', 'xl-2', 'xl-3', 'xl-4', 'xl-5', 'xl-6', 'xl-7', 'xl-8', 'xl-9', 'xl-10', 'xl-11'
    ])),
    className: propTypes_7
};
Col.defaultProps = {
    widths: null,
    orders: null,
    className: null
};

var Grid = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            grid: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Grid.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Grid.defaultProps = {
    className: null
};
Grid.Row = Row;
Grid.Col = Col;

var Container = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            container: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Container.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Container.defaultProps = {
    className: null
};

var Content = function (props) {
    var _a;
    var children = props.children, className = props.className, align = props.align, restProps = __rest(props, ["children", "className", "align"]);
    var componentClassName = classNames((_a = {
            content: true
        },
        _a["content__" + align] = isNonEmptyStr(align),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Content.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    align: propTypes_13([
        null,
        'vcenter'
    ]),
};
Content.defaultProps = {
    className: null,
    align: null
};

var Footer = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            footer: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("footer", __assign({ role: "contentinfo" }, restProps, { className: componentClassName }), children));
};
Footer.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Footer.defaultProps = {
    className: null
};

var useState = React.useState, useEffect$1 = React.useEffect, useRef$1 = React.useRef;
var Header = function (props) {
    var _a;
    var children = props.children, className = props.className, sticky = props.sticky, restProps = __rest(props, ["children", "className", "sticky"]);
    var _b = useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    var beforeHeaderRef = useRef$1(null);
    var componentClassName = classNames((_a = {
            header: true,
            'header--sticky': sticky,
            'header--scrolled': sticky && isScrolled
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    useEffect$1(function () {
        if (!sticky) {
            return function () { };
        }
        var topLinkNode = beforeHeaderRef.current;
        // @ts-ignore
        var observer = observeIntersection(topLinkNode, function (items) {
            // @ts-ignore
            setIsScrolled(!items[0].isIntersecting);
        });
        // @ts-ignore
        return function () { return observer.unobserve(topLinkNode); };
    }, [sticky]);
    return (React.createElement(React.Fragment, null,
        sticky && (React.createElement("span", { ref: beforeHeaderRef, className: "invisible" })),
        React.createElement("header", __assign({}, restProps, { className: componentClassName }), children)));
};
Header.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    sticky: propTypes_3
};
Header.defaultProps = {
    className: null,
    sticky: false
};

var Layout = function (props) {
    var _a;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var componentClassName = classNames((_a = {
            layout: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Layout.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Layout.defaultProps = {
    className: null
};
Layout.Container = Container;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;

var Fragment = React.Fragment;
var Input = function (props) {
    var _a, _b;
    var type = props.type, size = props.size, width = props.width, label = props.label, icon = props.icon, className = props.className, prependIcon = props.prependIcon, prependLabel = props.prependLabel, active = props.active, rounded = props.rounded, readOnly = props.readOnly, valid = props.valid, validated = props.validated, loading = props.loading, isSwitch = props.isSwitch, bordered = props.bordered, flat = props.flat, hovered = props.hovered, squared = props.squared, renderInput = props.renderInput, restProps = __rest(props, ["type", "size", "width", "label", "icon", "className", "prependIcon", "prependLabel", "active", "rounded", "readOnly", "valid", "validated", "loading", "isSwitch", "bordered", "flat", "hovered", "squared", "renderInput"]);
    var hasIcon = isObj(icon);
    var isRadio = type === 'radio';
    var isCheckbox = type === 'checkbox';
    var isBinaryInput = isRadio || isCheckbox;
    var inputClass = classNames((_a = {
            'form-control__input': true,
            'form-control__input--auto-width': !isNull(width),
            'form-control--active': active,
            'form-control__input--rounded': rounded,
            'form-control__input--readOnly': readOnly,
            'form-control__input--valid': validated && valid,
            'form-control__input--no-border': !bordered,
            'form-control__input--flat': flat,
            'form-control__input--hovered': hovered,
            'form-control__input--squared': squared,
            'form-control__input--invalid': validated && !valid,
            'form-control__input--loading': loading
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    var inputControlClass = classNames((_b = {
            'form-control': true,
            'form-control--rounded': rounded,
            'form-control--radio': isRadio,
            'form-control--checkbox': !isSwitch && isCheckbox,
            'form-control--switch': isSwitch,
            'form-control--prepend': (loading && prependIcon) || (hasIcon && prependIcon),
            'form-control--append': (loading && !prependIcon) || (hasIcon && !prependIcon)
        },
        _b["form-control--" + size] = isNonEmptyStr(size),
        _b));
    var labelClass = classNames({
        'label--rounded': rounded
    });
    var renderLabel = function () { return (React.createElement("label", { htmlFor: restProps.id, className: labelClass }, label)); };
    var renderBeforeLabel = function () { return label && prependLabel && renderLabel(); };
    var renderAfterLabel = function () { return label && !prependLabel && renderLabel(); };
    var inputProps = __assign(__assign({}, restProps), { type: type,
        readOnly: readOnly, className: inputClass });
    return (React.createElement(Fragment, null,
        !isBinaryInput && renderBeforeLabel(),
        React.createElement("span", { className: inputControlClass },
            isBinaryInput && renderBeforeLabel(),
            renderInput(inputProps),
            hasIcon && (React.createElement("span", { className: "form-control__input-icon" }, icon)),
            isBinaryInput && renderAfterLabel()),
        !isBinaryInput && renderAfterLabel()));
};
Input.propTypes = {
    type: propTypes_13([
        'text',
        'number',
        'email',
        'password',
        'search',
        'tel',
        'checkbox',
        'radio',
        'file'
    ]),
    size: propTypes_13([null, 'sm', 'lg']),
    width: propTypes_13([
        null,
        'initial'
    ]),
    label: propTypes_14([
        propTypes_7,
        propTypes_8
    ]),
    className: propTypes_7,
    icon: propTypes_8,
    prependIcon: propTypes_3,
    prependLabel: propTypes_3,
    active: propTypes_3,
    rounded: propTypes_3,
    readOnly: propTypes_3,
    validated: propTypes_3,
    valid: propTypes_3,
    loading: propTypes_3,
    isSwitch: propTypes_3,
    bordered: propTypes_3,
    flat: propTypes_3,
    hovered: propTypes_3,
    squared: propTypes_3,
    renderInput: propTypes_4
};
Input.defaultProps = {
    id: null,
    type: 'text',
    size: null,
    width: null,
    label: null,
    className: null,
    icon: null,
    prependIcon: true,
    prependLabel: true,
    active: false,
    rounded: false,
    readOnly: false,
    validated: false,
    valid: true,
    loading: false,
    isSwitch: false,
    bordered: true,
    flat: true,
    hovered: false,
    squared: false,
    renderInput: function (props) { return (React.createElement("input", __assign({}, props))); }
};

var Checkbox = function (_a) {
    var _b = _a.id, id = _b === void 0 ? uid() : _b, restProps = __rest(_a, ["id"]);
    var inputProps = __assign(__assign({}, restProps), { type: 'checkbox', id: id, prependLabel: false });
    return (React.createElement(Input, __assign({}, inputProps)));
};
Checkbox.propTypes = {
    id: propTypes_7,
    label: propTypes_14([
        propTypes_7,
        propTypes_8
    ]).isRequired
};
Checkbox.defaultProps = {
    id: undefined
};

var Email = function (props) {
    var inputProps = __assign(__assign({}, props), { type: 'email' });
    return (React.createElement(Input, __assign({}, inputProps)));
};

var File = function (_a) {
    var onChange = _a.onChange, restProps = __rest(_a, ["onChange"]);
    var inputProps = __assign(__assign({}, restProps), { type: 'file', onChange: function (event) {
            event.persist();
            onChange(event.nativeEvent);
        } });
    return (React.createElement(Input, __assign({}, inputProps)));
};
File.propTypes = {
    onChange: propTypes_4
};
File.defaultProps = {
    onChange: function () { }
};

var InputGroup = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, isRow = _a.isRow;
    var componentClassName = classNames((_b = {
            'form-group': true,
            'form-group--row': isRow
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("div", { className: componentClassName }, children));
};
InputGroup.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    isRow: propTypes_3
};
InputGroup.defaultProps = {
    className: null,
    isRow: false
};

var Number = function (props) {
    var inputProps = __assign(__assign({}, props), { type: 'number' });
    return (React.createElement(Input, __assign({}, inputProps)));
};

var Password = function (props) {
    var inputProps = __assign(__assign({}, props), { type: 'password' });
    return (React.createElement(Input, __assign({}, inputProps)));
};

var Radio = function (_a) {
    var _b = _a.id, id = _b === void 0 ? uid() : _b, restProps = __rest(_a, ["id"]);
    var inputProps = __assign(__assign({}, restProps), { type: 'radio', id: id, prependLabel: false });
    return (React.createElement(Input, __assign({}, inputProps)));
};
Radio.propTypes = {
    id: propTypes_7
};
Radio.defaultProps = {
    id: undefined
};

var Search = function (props) {
    var inputProps = __assign(__assign({}, props), { type: 'search' });
    return (React.createElement(Input, __assign({}, inputProps)));
};

var Tel = function (props) {
    var inputProps = __assign(__assign({}, props), { type: 'tel' });
    return (React.createElement(Input, __assign({}, inputProps)));
};

var Fragment$1 = React.Fragment;
var Textarea = function (props) { return (React.createElement(Input, __assign({}, props, { renderInput: function (inputProps) { return (React.createElement(Fragment$1, null,
        React.createElement("textarea", __assign({}, inputProps)))); } }))); };
Textarea.propTypes = {
    rows: propTypes_5
};
Textarea.defaultProps = {
    rows: 6
};

var Fragment$2 = React.Fragment;
var Select = function (_a) {
    var options = _a.options, restProps = __rest(_a, ["options"]);
    return (React.createElement(Input, __assign({}, restProps, { renderInput: function (_a) {
            var type = _a.type, restInputProps = __rest(_a, ["type"]);
            return (React.createElement(Fragment$2, null,
                React.createElement("select", __assign({}, restInputProps), options.map(function (_a) {
                    var value = _a.value, label = _a.label;
                    return (React.createElement("option", { key: value, value: value }, label));
                }))));
        } })));
};
Select.propTypes = {
    value: propTypes_14([
        propTypes_7,
        propTypes_5
    ]).isRequired,
    options: propTypes_15(propTypes_17({
        value: propTypes_14([
            propTypes_7,
            propTypes_5
        ]),
        label: propTypes_14([
            propTypes_7,
            propTypes_5,
            propTypes_8
        ])
    })).isRequired
};

var ModalBody = function (_a) {
    var _b;
    var children = _a.children, className = _a.className;
    var componentClassName = classNames((_b = {
            modal__body: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("div", { className: componentClassName }, children));
};
ModalBody.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
ModalBody.defaultProps = {
    className: null
};

var ModalFooter = function (_a) {
    var _b;
    var children = _a.children, className = _a.className;
    var componentClassName = classNames((_b = {
            modal__footer: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("div", { className: componentClassName }, children));
};
ModalFooter.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
ModalFooter.defaultProps = {
    className: null
};

var ModalHeader = function (_a) {
    var _b;
    var children = _a.children, className = _a.className;
    var componentClassName = classNames((_b = {
            modal__header: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("div", { className: componentClassName }, children));
};
ModalHeader.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
ModalHeader.defaultProps = {
    className: null
};

var useRef$2 = React.useRef, useEffect$2 = React.useEffect;
var Modal = function (props) {
    var _a;
    var children = props.children, header = props.header, footer = props.footer, size = props.size, className = props.className, active = props.active, fullscreen = props.fullscreen, onEscape = props.onEscape;
    var refComponent = useRef$2(null);
    var hasOnEscape = isFunc(onEscape);
    var componentClassName = classNames((_a = {
            modal: true,
            'modal--active': active
        },
        _a["modal--" + size] = size !== 'normal',
        _a['modal--fullscreen'] = active && fullscreen,
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    var handleKeyDown = function (event) {
        if (active && event.key === 'Escape' && hasOnEscape) {
            // @ts-ignore
            onEscape();
        }
    };
    var observeKeyDown = function () { return window.addEventListener('keydown', handleKeyDown); };
    var unobserveKeyDown = function () { return window.removeEventListener('keydown', handleKeyDown); };
    var disableScroll = function () {
        // @ts-ignore
        var modalScroll = refComponent.current.querySelector('.modal__body');
        bodyScrollLock.disableBodyScroll(modalScroll);
    };
    var enableScroll = function () {
        bodyScrollLock.clearAllBodyScrollLocks();
    };
    useEffect$2(function () {
        observeKeyDown();
        return function () { return unobserveKeyDown(); };
    });
    useEffect$2(function () {
        if (active) {
            disableScroll();
        }
        else {
            enableScroll();
        }
    }, [active]);
    return (React.createElement("div", { ref: refComponent, className: componentClassName },
        React.createElement("div", { className: "modal__dialog" },
            React.createElement("div", { className: "modal__content" },
                header,
                children,
                footer))));
};
Modal.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    header: propTypes_8,
    footer: propTypes_8,
    size: propTypes_13(['sm', 'md', 'normal', 'lg', 'xl']),
    className: propTypes_7,
    active: propTypes_3,
    fullscreen: propTypes_3,
    onEscape: propTypes_4,
};
Modal.defaultProps = {
    header: null,
    footer: null,
    size: 'normal',
    className: null,
    active: false,
    fullscreen: false,
    onEscape: null,
};

var ModalTitle = function (_a) {
    var _b;
    var children = _a.children, className = _a.className;
    var componentClassName = classNames((_b = {
            modal__title: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("h3", { className: componentClassName }, children));
};
ModalTitle.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
ModalTitle.defaultProps = {
    className: null
};

var NavMenu = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    var componentClassName = classNames((_b = {
            navigation__menu: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("ul", __assign({}, restProps, { className: componentClassName }), children));
};
NavMenu.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
NavMenu.defaultProps = {
    className: null
};

var NavMenuItem = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, active = _a.active, home = _a.home;
    var componentClassName = classNames((_b = {
            navigation__item: true,
            'navigation__item--active': active,
            'navigation__item--home': home
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("li", { className: componentClassName }, children));
};
NavMenuItem.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    active: propTypes_3,
    home: propTypes_3
};
NavMenuItem.defaultProps = {
    className: null,
    active: false,
    home: false
};

var Nav = function (_a) {
    var children = _a.children, active = _a.active;
    var componentClassName = classNames({
        navigation: true,
        'navigation--active': active
    });
    return (React.createElement("div", { className: componentClassName }, children));
};
Nav.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    active: propTypes_3
};
Nav.defaultProps = {
    active: false
};

var Fragment$3 = React.Fragment;
var NavTrigger = function (_a) {
    var _b;
    var className = _a.className, renderTrigger = _a.renderTrigger;
    var componentClassName = classNames((_b = {
            navigation__trigger: true
        },
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement(Fragment$3, null, renderTrigger(componentClassName)));
};
NavTrigger.propTypes = {
    className: propTypes_7,
    renderTrigger: propTypes_4.isRequired
};
NavTrigger.defaultProps = {
    className: null
};

var Sidebar = function (props) {
    var _a;
    var children = props.children, className = props.className;
    var componentClassName = classNames((_a = {
            sidebar: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", { className: componentClassName },
        React.createElement("div", { className: "sidebar__body" }, children)));
};
Sidebar.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7
};
Sidebar.defaultProps = {
    className: null
};

var SidebarItem = function (props) {
    var _a;
    var className = props.className, active = props.active, renderItem = props.renderItem;
    var componentClassName = classNames((_a = {
            sidebar__item: true,
            'sidebar__item--active': active
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return renderItem(componentClassName);
};
SidebarItem.propTypes = {
    className: propTypes_7,
    active: propTypes_3,
    renderItem: propTypes_4.isRequired
};
SidebarItem.defaultProps = {
    className: null,
    active: false,
    renderItem: function () { }
};

var Tabs = function (props) {
    var _a;
    var children = props.children, className = props.className, align = props.align, basic = props.basic, bordered = props.bordered;
    var componentClassName = classNames((_a = {
            tabs: true,
            'tabs--basic': basic,
            'tabs--border': bordered
        },
        _a["tabs--" + align] = align !== 'left',
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("ul", { className: componentClassName }, children));
};
Tabs.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    align: propTypes_13([
        'left',
        'center',
        'right'
    ]),
    basic: propTypes_3,
    bordered: propTypes_3
};
Tabs.defaultProps = {
    className: null,
    align: 'left',
    basic: false,
    bordered: false
};

var Tab = function (props) {
    var _a;
    var children = props.children, className = props.className, active = props.active;
    var componentClassName = classNames((_a = {
            tabs__item: true,
            'tabs__item--active': active
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("li", { className: componentClassName }, children));
};
Tab.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    active: propTypes_3
};
Tab.defaultProps = {
    className: null,
    active: false
};

var initialContext = {
    iconsSprite: null
};
var ThemeContext = React.createContext(initialContext);

var App = function (props) {
    var children = props.children, iconsSprite = props.iconsSprite;
    return (React.createElement(ThemeContext.Provider, { value: {
            iconsSprite: iconsSprite
        } },
        React.createElement("div", { className: "fidelity-ui-app" }, children)));
};
App.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    iconsSprite: propTypes_7.isRequired
};

var Badge = function (props) {
    var _a;
    var children = props.children, type = props.type, size = props.size, className = props.className, loading = props.loading, squared = props.squared, rounded = props.rounded, fab = props.fab, outlined = props.outlined, restProps = __rest(props, ["children", "type", "size", "className", "loading", "squared", "rounded", "fab", "outlined"]);
    var componentClassName = classNames((_a = {
            badge: true
        },
        _a["badge--" + type] = true,
        _a['badge--loading'] = loading,
        _a['badge--squared'] = squared || fab,
        _a['badge--rounded'] = rounded,
        _a['badge--outlined'] = outlined,
        _a['badge--fab'] = fab,
        _a["badge--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("span", __assign({}, restProps, { className: componentClassName }),
        React.createElement("span", { className: "badge__letter" }, children)));
};
Badge.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]),
    type: propTypes_13([
        'text',
        'primary',
        'secondary',
        'success',
        'info',
        'danger',
        'warning'
    ]),
    size: propTypes_13(['xs', 'sm', 'md', 'lg']),
    className: propTypes_7,
    loading: propTypes_3,
    squared: propTypes_3,
    rounded: propTypes_3,
    fab: propTypes_3,
    outlined: propTypes_3
};
Badge.defaultProps = {
    children: null,
    type: 'secondary',
    size: 'sm',
    className: null,
    loading: false,
    squared: false,
    rounded: true,
    fab: false,
    outlined: false
};

var Collapse = function (props) {
    var _a;
    var children = props.children, className = props.className, active = props.active, restProps = __rest(props, ["children", "className", "active"]);
    var componentClassName = classNames((_a = {
            collapse: true,
            'collapse--active': active
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { "aria-expanded": active, className: componentClassName }), children));
};
Collapse.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    className: propTypes_7,
    active: propTypes_3
};
Collapse.defaultProps = {
    className: null,
    active: false
};

var Divider = function (props) {
    var _a;
    var children = props.children, size = props.size, className = props.className, restProps = __rest(props, ["children", "size", "className"]);
    var componentClassName = classNames((_a = {
            divider: true
        },
        _a["divider--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }),
        React.createElement("span", { className: "divider__text" }, children)));
};
Divider.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]),
    size: propTypes_13([null, 'sm', 'lg']),
    className: propTypes_7
};
Divider.defaultProps = {
    children: null,
    size: null,
    className: null
};

var Empty = function (props) {
    var _a;
    var text = props.text, header = props.header, footer = props.footer, size = props.size, className = props.className, rounded = props.rounded, hovered = props.hovered, bordered = props.bordered, flat = props.flat, restProps = __rest(props, ["text", "header", "footer", "size", "className", "rounded", "hovered", "bordered", "flat"]);
    var hasHeader = isObj(header);
    var hasFooter = isObj(footer);
    var componentClassName = classNames((_a = {
            empty: true,
            'empty--rounded': rounded,
            'empty--hovered': hovered,
            'empty--bordered': bordered,
            'empty--flat': flat
        },
        _a["empty--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }),
        React.createElement("div", { className: "empty__wrap" },
            hasHeader && (React.createElement("div", { className: "empty__header" }, header)),
            React.createElement("div", { className: "empty__body" }, text),
            hasFooter && (React.createElement("div", { className: "empty__footer" }, footer)))));
};
Empty.propTypes = {
    header: propTypes_8,
    text: propTypes_14([
        propTypes_7,
        propTypes_8
    ]).isRequired,
    footer: propTypes_8,
    size: propTypes_13([null, 'sm', 'md', 'lg']),
    className: propTypes_7,
    rounded: propTypes_3,
    hovered: propTypes_3,
    bordered: propTypes_3,
    flat: propTypes_3
};
Empty.defaultProps = {
    header: null,
    footer: null,
    size: null,
    className: null,
    rounded: true,
    hovered: false,
    bordered: true,
    flat: true
};

var Fillable = function (props) {
    var _a;
    var children = props.children, placeholder = props.placeholder, className = props.className, contentEditable = props.contentEditable, onKeyDown = props.onKeyDown, restProps = __rest(props, ["children", "placeholder", "className", "contentEditable", "onKeyDown"]);
    var componentClassName = classNames((_a = {
            fillable: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { role: "textbox", tabIndex: 0, className: componentClassName, contentEditable: contentEditable, suppressContentEditableWarning: true, "data-placeholder": placeholder, onKeyDown: onKeyDown }), children));
};
Fillable.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    placeholder: propTypes_7,
    className: propTypes_7,
    contentEditable: propTypes_3,
    onKeyDown: propTypes_4
};
Fillable.defaultProps = {
    placeholder: null,
    className: null,
    contentEditable: true,
    onKeyDown: function (event) {
        event.preventDefault();
        return false;
    }
};

var useContext = React.useContext;
var Icon = function (props) {
    var _a;
    var id = props.id, size = props.size, className = props.className, rotate = props.rotate, rounded = props.rounded, spinning = props.spinning, restProps = __rest(props, ["id", "size", "className", "rotate", "rounded", "spinning"]);
    var context = useContext(ThemeContext);
    var iconsSprite = context.iconsSprite;
    var rotated = isNum(rotate);
    var componentClassName = classNames((_a = {
            icon: true,
            'icon--rounded': rounded,
            'icon--spinning': spinning,
            'icon--rotated': rotated
        },
        _a["icon--rotate-" + rotate] = rotated,
        _a["icon--" + size] = isNum(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    if (!isNonEmptyStr(iconsSprite)) {
        return null;
    }
    var iconHref = iconsSprite + "#" + id;
    return (React.createElement("svg", __assign({}, restProps, { className: componentClassName }),
        React.createElement("use", { xlinkHref: iconHref })));
};
Icon.propTypes = {
    id: propTypes_7.isRequired,
    size: propTypes_13([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64]),
    rotate: propTypes_13([45, 90, 135, 180, 225, 270, 315, 360]),
    className: propTypes_7,
    rounded: propTypes_3,
    spinning: propTypes_3
};
Icon.defaultProps = {
    size: null,
    rotate: null,
    className: null,
    rounded: false,
    spinning: false
};

var useState$1 = React.useState, useEffect$3 = React.useEffect;
var Image = function (props) {
    var _a;
    var src = props.src, alt = props.alt, size = props.size, aspectRatio = props.aspectRatio, className = props.className, spinner = props.spinner, spinnerHideDelay = props.spinnerHideDelay, rounded = props.rounded, hovered = props.hovered, elevated = props.elevated, expanded = props.expanded, contained = props.contained, onLoad = props.onLoad, onError = props.onError, restProps = __rest(props, ["src", "alt", "size", "aspectRatio", "className", "spinner", "spinnerHideDelay", "rounded", "hovered", "elevated", "expanded", "contained", "onLoad", "onError"]);
    var _b = useState$1(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState$1(false), isError = _c[0], setIsError = _c[1];
    var _d = useState$1(null), errorNode = _d[0], setErrorNode = _d[1];
    var _e = useState$1(false), hasSpinnerFaded = _e[0], setHasSpinnerFaded = _e[1];
    var hasCustomError = isNonEmptyStr(errorNode) || isObj(errorNode);
    var hasAspectRatio = isNonEmptyStr(aspectRatio);
    var hasOnLoad = isFunc(onLoad);
    var hasOnError = isFunc(onError);
    var hasSpinner = isObj(spinner);
    var componentClassName = classNames((_a = {
            image: true,
            'image--loading': isLoading && hasSpinner,
            'image--rounded': rounded,
            'image--hovered': hovered,
            'image--elevated': elevated,
            'image--expanded': expanded,
            'image--contained': contained,
            'image--ratioed': hasAspectRatio,
            'image--error': isError
        },
        _a["image--" + size] = isNonEmptyStr(size),
        _a["image--ratio-" + aspectRatio] = hasAspectRatio,
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    var imageSpinnerClassName = classNames({
        image__spinner: true,
        'image__spinner--active': isLoading
    });
    var imgClassName = classNames({
        visible: !isLoading,
        invisible: isLoading
    });
    var onLoadSrc = function (event) {
        setIsLoading(false);
        if (hasOnLoad) {
            // @ts-ignore
            onLoad(event);
        }
    };
    var setImageError = function (err) {
        setIsError(true);
        if (hasOnError) {
            // @ts-ignore
            var errorNode_1 = onError(err);
            if (isNonEmptyStr(errorNode_1) || isObj(errorNode_1)) {
                // @ts-ignore
                setErrorNode(errorNode_1);
            }
        }
        setIsLoading(false);
    };
    useEffect$3(function () {
        if (!isLoading) {
            setTimeout(function () {
                setHasSpinnerFaded(true);
            }, spinnerHideDelay);
        }
    }, [isLoading]);
    return (React.createElement("span", { className: componentClassName },
        hasSpinner && !hasSpinnerFaded && (React.createElement("span", { className: imageSpinnerClassName }, spinner)),
        (!isError || !hasCustomError) && (React.createElement("img", __assign({}, restProps, { src: src, alt: alt, className: imgClassName, onLoad: onLoadSrc, onError: setImageError }))),
        isError && hasCustomError && (React.createElement("span", { className: "image__error" }, errorNode))));
};
Image.propTypes = {
    src: propTypes_7.isRequired,
    alt: propTypes_7,
    size: propTypes_13([null, 'xs', 'sm', 'md', 'lg', 'xl']),
    aspectRatio: propTypes_13([null, '4-3', '16-9']),
    className: propTypes_7,
    spinner: propTypes_8,
    spinnerHideDelay: propTypes_8,
    rounded: propTypes_3,
    hovered: propTypes_3,
    elevated: propTypes_3,
    expanded: propTypes_3,
    contained: propTypes_3,
    onLoad: propTypes_4,
    onError: propTypes_4
};
Image.defaultProps = {
    alt: null,
    size: null,
    aspectRatio: null,
    className: null,
    spinner: null,
    spinnerHideDelay: 1000,
    rounded: true,
    hovered: false,
    elevated: false,
    expanded: false,
    contained: false,
    onLoad: null,
    onError: null
};

var Notification = function (props) {
    var _a;
    var children = props.children, type = props.type, icon = props.icon, className = props.className, bordered = props.bordered, hovered = props.hovered, rounded = props.rounded, elevated = props.elevated, prependIcon = props.prependIcon, restProps = __rest(props, ["children", "type", "icon", "className", "bordered", "hovered", "rounded", "elevated", "prependIcon"]);
    var hasIcon = isObj(icon);
    var componentClassName = classNames((_a = {
            notification: true,
            'notification--append-icon': !prependIcon,
            'notification--bordered': bordered,
            'notification--hovered': hovered,
            'notification--rounded': rounded,
            'notification--elevated': elevated
        },
        _a["notification--" + type] = isNonEmptyStr(type),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }),
        hasIcon && (React.createElement("div", { className: "notification__icon" }, icon)),
        React.createElement("div", { className: "notification__message" }, children)));
};
Notification.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    type: propTypes_13([
        'primary',
        'secondary',
        'info',
        'warning',
        'success',
        'danger'
    ]),
    icon: propTypes_8,
    className: propTypes_7,
    bordered: propTypes_3,
    hovered: propTypes_3,
    rounded: propTypes_3,
    elevated: propTypes_3,
    prependIcon: propTypes_3
};
Notification.defaultProps = {
    type: 'info',
    icon: null,
    className: null,
    bordered: true,
    hovered: false,
    rounded: true,
    elevated: false,
    prependIcon: true
};

var ProgressBar = function (props) {
    var _a;
    var value = props.value, className = props.className, restProps = __rest(props, ["value", "className"]);
    var _b = restProps.style, style = _b === void 0 ? {} : _b;
    var progressInStyle = __assign(__assign({}, style), { width: value + "%" });
    var componentClassName = classNames((_a = {
            progress__bar: true
        },
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("span", __assign({ role: "progressbar" }, restProps, { className: componentClassName, style: progressInStyle })));
};
ProgressBar.propTypes = {
    value: propTypes_5.isRequired,
    className: propTypes_7
};
ProgressBar.defaultProps = {
    className: null
};

var typeShape = propTypes_13([
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
    'warning'
]);
var sizeShape = propTypes_13([null, 'xs', 'sm', 'md', 'lg', 'xl']);
var labelShape = propTypes_14([
    propTypes_7,
    propTypes_5,
    propTypes_8,
    propTypes_15(propTypes_8)
]);
var labelAlignmentShape = propTypes_13([
    null,
    'left',
    'center',
    'sticky',
    'right'
]);

var ProgressLabel = function (props) {
    var _a;
    var value = props.value, label = props.label, alignment = props.alignment, className = props.className, restProps = __rest(props, ["value", "label", "alignment", "className"]);
    var _b = restProps.style, style = _b === void 0 ? {} : _b;
    var hasAlignment = isNonEmptyStr(alignment);
    var hasStickyAlignment = hasAlignment && alignment === 'sticky';
    var progressLabelStyle = hasStickyAlignment
        ? __assign(__assign({}, style), { right: 100 - value + "%" }) : style;
    var componentClassName = classNames((_a = {
            progress__label: true
        },
        _a["progress__label--" + alignment] = hasAlignment,
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName, style: progressLabelStyle }), label));
};
ProgressLabel.propTypes = {
    value: propTypes_5,
    label: labelShape.isRequired,
    alignment: labelAlignmentShape,
    className: propTypes_7
};
ProgressLabel.defaultProps = {
    value: 0,
    alignment: null,
    className: null
};

var Progress = function (props) {
    var _a;
    var type = props.type, size = props.size, value = props.value, label = props.label, labelAlignment = props.labelAlignment, className = props.className, rounded = props.rounded, elevated = props.elevated, hovered = props.hovered, restProps = __rest(props, ["type", "size", "value", "label", "labelAlignment", "className", "rounded", "elevated", "hovered"]);
    var maxValue = 100;
    var formattedValue = limitNum(value, maxValue);
    var hasLabelSlot = isRenderable(label);
    var componentClassName = classNames((_a = {
            progress: true,
            'progress--rounded': rounded,
            'progress--elevated': elevated,
            'progress--hovered': hovered
        },
        _a["progress--" + type] = isNonEmptyStr(type),
        _a["progress--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }),
        React.createElement(ProgressBar, { role: "progressbar", "aria-valuenow": formattedValue, "aria-valuemin": 0, "aria-valuemax": maxValue, value: formattedValue }),
        hasLabelSlot && (React.createElement(ProgressLabel, { label: label, value: formattedValue, alignment: labelAlignment }))));
};
Progress.propTypes = {
    type: typeShape,
    size: sizeShape,
    value: propTypes_5,
    label: labelShape,
    labelAlignment: labelAlignmentShape,
    className: propTypes_7,
    rounded: propTypes_3,
    elevated: propTypes_3,
    hovered: propTypes_3
};
Progress.defaultProps = {
    type: 'secondary',
    size: null,
    value: 0,
    label: null,
    labelAlignment: null,
    className: null,
    rounded: true,
    elevated: false,
    hovered: false
};

var TableShape = {
    name: propTypes_7.isRequired,
    label: propTypes_7.isRequired,
    width: propTypes_7,
    selected: propTypes_3,
    default: propTypes_3,
    render: propTypes_4.isRequired
};
var sortShape = {
    name: propTypes_7.isRequired,
    asc: propTypes_3.isRequired
};
var Table = function (props) {
    var items = props.items, columns = props.columns, sort = props.sort, itemId = props.itemId, loading = props.loading, sorting = props.sorting, selectable = props.selectable, onClickItem = props.onClickItem, onSort = props.onSort, renderFilters = props.renderFilters, renderHeader = props.renderHeader, renderItemCheckbox = props.renderItemCheckbox, renderSortIcon = props.renderSortIcon;
    var hasSort = isFunc(onSort);
    var hasRenderFilters = isFunc(renderFilters);
    var hasRenderHeader = isFunc(renderHeader);
    var hasOnClickItem = isFunc(onClickItem);
    var tableClassName = classNames({
        table: true,
        'table--loading': loading
    });
    return (React.createElement("div", { className: tableClassName },
        hasRenderFilters && (React.createElement("div", { className: "table__filters" }, renderFilters())),
        hasRenderHeader && (React.createElement("div", { className: "table__header" }, renderHeader())),
        React.createElement("div", { className: "table__body" },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        selectable && (React.createElement("th", { className: "table__sort" },
                            React.createElement("span", null))),
                        columns.map(function (column) {
                            var name = column.name, label = column.label, width = column.width;
                            var isSorted = name === sort.name;
                            var isAscSort = !isSorted || !sort.asc;
                            var tHeadColStyle = isNonEmptyStr(width) ? { width: width } : {};
                            var columnClassName = classNames({
                                table__sort: true,
                                'table__sort--active': isSorted,
                                'table__sort--ascending': isSorted && sort.asc,
                                'table__sort--descending': isSorted && !sort.asc,
                                'table__sort--loading': isSorted && sorting
                            });
                            return (React.createElement("th", { key: "thead-col-" + name, style: tHeadColStyle },
                                React.createElement("div", { className: columnClassName, title: label, role: "button", onClick: function () {
                                        if (hasSort) {
                                            // @ts-ignore
                                            onSort(column, isAscSort);
                                        }
                                    } },
                                    React.createElement("span", { className: "table__title" }, label),
                                    React.createElement("span", { className: "table__sort__icon" }, renderSortIcon(sort, isSorted)))));
                        }))),
                React.createElement("tbody", null, items.map(function (item, rowIndex) {
                    // @ts-ignore
                    var rowId = item[itemId];
                    return (React.createElement("tr", { key: "tbody-row-" + rowId },
                        selectable && (React.createElement("td", { className: "table__checkbox" }, renderItemCheckbox(item))),
                        columns.map(function (_a, colIndex) {
                            var name = _a.name, render = _a.render, width = _a.width;
                            var tbodyColStyle = isNonEmptyStr(width) ? { width: width } : {};
                            return (React.createElement("td", { key: "tbody-col-" + name, style: tbodyColStyle, onClick: function () {
                                    if (hasOnClickItem) {
                                        // @ts-ignore
                                        onClickItem(item, rowIndex, colIndex);
                                    }
                                } }, render(item, name, rowIndex, colIndex)));
                        })));
                }))))));
};
Table.propTypes = {
    items: propTypes_15(propTypes_6).isRequired,
    columns: propTypes_15(propTypes_17(TableShape)).isRequired,
    sort: propTypes_17(sortShape).isRequired,
    itemId: propTypes_7,
    loading: propTypes_3,
    sorting: propTypes_3,
    selectable: propTypes_3,
    onClickItem: propTypes_4,
    onSort: propTypes_4,
    renderFilters: propTypes_4,
    renderHeader: propTypes_4,
    renderItemCheckbox: propTypes_4,
    renderSortIcon: propTypes_4
};
Table.defaultProps = {
    itemId: 'id',
    loading: false,
    sorting: false,
    selectable: false,
    onClickItem: null,
    onSort: null,
    renderFilters: null,
    renderHeader: null,
    renderItemCheckbox: function () { },
    renderSortIcon: function () { }
};

var Tag = function (_a) {
    var _b;
    var label = _a.label, size = _a.size, className = _a.className, removeIcon = _a.removeIcon, onRemove = _a.onRemove;
    var hasOnRemove = isFunc(onRemove);
    var hasRemoveIcon = isObj(removeIcon);
    var componentClassName = classNames((_b = {
            tag: true
        },
        _b["tag--" + size] = isNonEmptyStr(size),
        // @ts-ignore
        _b[className] = isNonEmptyStr(className),
        _b));
    return (React.createElement("span", { className: componentClassName },
        label,
        hasOnRemove && (React.createElement("a", { href: "#", className: "tag__remove", onClick: function (event) {
                event.preventDefault();
                event.stopPropagation();
                // @ts-ignore
                onRemove();
            } }, hasRemoveIcon ? (removeIcon) : ('x')))));
};
Tag.propTypes = {
    label: propTypes_14([
        propTypes_8,
        propTypes_7
    ]).isRequired,
    size: propTypes_13(['sm', 'md', 'lg']),
    className: propTypes_7,
    removeIcon: propTypes_8,
    onRemove: propTypes_4
};
Tag.defaultProps = {
    size: 'md',
    className: null,
    removeIcon: null,
    onRemove: null
};

var Transition = function (props) {
    var _a;
    var children = props.children, type = props.type, className = props.className, restProps = __rest(props, ["children", "type", "className"]);
    var componentClassName = classNames((_a = {
            transition: true
        },
        // @ts-ignore
        _a["transition--" + type] = isNonEmptyStr(type),
        // @ts-ignore
        _a[className] = isNonEmptyStr(className),
        _a));
    return (React.createElement("div", __assign({}, restProps, { className: componentClassName }), children));
};
Transition.propTypes = {
    children: propTypes_14([
        propTypes_7,
        propTypes_5,
        propTypes_8,
        propTypes_15(propTypes_8)
    ]).isRequired,
    type: propTypes_13([
        'fade',
        'fade-in-down',
        'fade-in-left',
        'fade-in-right',
        'fade-in-up',
        'fade-out',
        'slide-in-down',
        'slide-in-left',
        'slide-in-right',
        'slide-in-up',
        'slide-out-down',
        'slide-out-left',
        'slide-out-right',
        'slide-out-up',
        'spin'
    ]),
    className: propTypes_7
};
Transition.defaultProps = {
    type: 'fade',
    className: null
};

var utils = {
    getCssVar: getCssVar,
    setCssVar: setCssVar
};

exports.App = App;
exports.Badge = Badge;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.CardDivider = CardDivider;
exports.Checkbox = Checkbox;
exports.Collapse = Collapse;
exports.Divider = Divider;
exports.Dropdown = Dropdown;
exports.Email = Email;
exports.Empty = Empty;
exports.File = File;
exports.Fillable = Fillable;
exports.Grid = Grid;
exports.Icon = Icon;
exports.Image = Image;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Layout = Layout;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
exports.Nav = Nav;
exports.NavMenu = NavMenu;
exports.NavMenuItem = NavMenuItem;
exports.NavTrigger = NavTrigger;
exports.Notification = Notification;
exports.Number = Number;
exports.Password = Password;
exports.Progress = Progress;
exports.Radio = Radio;
exports.Search = Search;
exports.Select = Select;
exports.Sidebar = Sidebar;
exports.SidebarItem = SidebarItem;
exports.Tab = Tab;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.Tel = Tel;
exports.Textarea = Textarea;
exports.Transition = Transition;
exports.utils = utils;
//# sourceMappingURL=index.js.map
