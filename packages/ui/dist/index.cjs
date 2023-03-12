"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
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
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
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
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
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
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
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
              value: self
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
        function createElement(type, config2, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config2);
              }
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            self = config2.__self === void 0 ? null : config2.__self;
            source = config2.__source === void 0 ? null : config2.__source;
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config2, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config2[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config2[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
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
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
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
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
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
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
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
              ReactCurrentDispatcher$1.current = previousDispatcher;
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
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
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
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
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
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
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
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
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
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
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
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
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
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a)
        m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps)
        for (b in a = c.defaultProps, a)
          void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports.Fragment = l;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var React2 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
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
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
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
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
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
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
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
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
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
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
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
        var hasOwnProperty = Object.prototype.hasOwnProperty;
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
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
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
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config2, self) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
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
        var ReactElement = function(type, key, ref, self, source, owner, props) {
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
              value: self
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
        function jsxDEV(type, config2, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            if (hasValidRef(config2)) {
              ref = config2.ref;
              warnIfStringRefCannotBeAutoConverted(config2, self);
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
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
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
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
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
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
            if (isArray(node)) {
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
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
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
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
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
            if (type === REACT_FRAGMENT_TYPE) {
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
        var jsx3 = jsxWithValidationDynamic;
        var jsxs3 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx3;
        exports.jsxs = jsxs3;
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button_default
});
module.exports = __toCommonJS(ui_exports);

// Button/index.tsx
var import_lodash = __toESM(require("lodash"), 1);
var import_react2 = __toESM(require_react(), 1);

// stitches.config.ts
var import_react = require("@stitches/react");

// theme.json
var theme_default = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};

// stitches.config.ts
var RadixColors = __toESM(require("@radix-ui/colors"), 1);
var Radix = RadixColors;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors = flattenKeys(theme_default.light);
var brandColors = flattenKeys(theme_default.brand);
var supportColors = flattenKeys(theme_default.support);
var darkColors = flattenKeys(theme_default.dark);
var bgToneScales = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  theme: {
    colors: __spreadValues(__spreadValues(__spreadValues({}, lightColors), brandColors), supportColors),
    space: __spreadValues({
      "100%": "100%"
    }, theme_default.spacing),
    sizes: __spreadValues({
      "100%": "100%"
    }, theme_default.spacing),
    fontSizes: __spreadValues({}, theme_default.fontSizes),
    fonts: {
      heading: `${theme_default.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues({}, theme_default.fontWeights),
    lineHeights: __spreadValues({}, theme_default.lineHeights),
    letterSpacings: __spreadValues({}, theme_default.letterSpacing),
    borderWidths: __spreadValues({}, theme_default.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues({}, theme_default.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, bgToneScales), textToneScales), borderToneScales), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues({}, import_react.defaultThemeMap)
});
var stitchesDarkTheme = createTheme("dark", {
  colors: __spreadValues({}, darkColors)
});
var globalStyles = globalCss({
  "*": { margin: 0, boxSizing: "border-box" }
});

// Box/index.tsx
var Box = styled("div", {});
var Box_default = Box;

// Spinner/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var AutoSpinner = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};

// util/tones.ts
var RadixColors2 = __toESM(require("@radix-ui/colors"), 1);
function getButtonToneStyle(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle(tone, depth) {
  const colorFromRadix = __objRest(RadixColors2, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      $$shadowColor: shadowColor[tone + "A6"],
      boxShadow: `0.3px 0.5px 0.7px $$shadowColor,                
                0.4px 0.8px 1px -1.2px $$shadowColor,
                1px 2px 2.5px -2.5px $$shadowColor;`
    };
  } else if (depth === "2") {
    return {
      $$shadowColor: shadowColor[tone + "A6"],
      boxShadow: `0.3px 0.5px 0.7px $$shadowColor,
                0.8px 1.6px 2px -0.8px $$shadowColor,
                2.1px 4.1px 5.2px -1.7px $$shadowColor,
                5px 10px 12.6px -2.5px $$shadowColor;`
    };
  } else if (depth === "3") {
    return {
      $$shadowColor: shadowColor[tone + "A5"],
      boxShadow: `0.3px 0.5px 0.7px $$shadowColor,
                1.5px 2.9px 3.7px -0.4px $$shadowColor,
                2.7px 5.4px 6.8px -0.7px $$shadowColor,
                4.5px 8.9px 11.2px -1.1px $$shadowColor,
                7.1px 14.3px 18px -1.4px $$shadowColor,
                11.2px 22.3px 28.1px -1.8px $$shadowColor`
    };
  } else
    return {};
}

// Button/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var BaseButton = styled("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  "&:hover": {
    transform: "translateY(-1px)"
  },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$4",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$5",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$6",
        py: "$4"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  defaultVariants: {
    size: "md",
    align: "center"
  }
});
var Button = (_a, ref) => {
  var _b = _a, {
    size,
    align,
    tone = "slate",
    intent = "primary",
    isLoading,
    children,
    leftIcon,
    rightIcon,
    depth,
    css: css2,
    isDark
  } = _b, props = __objRest(_b, [
    "size",
    "align",
    "tone",
    "intent",
    "isLoading",
    "children",
    "leftIcon",
    "rightIcon",
    "depth",
    "css",
    "isDark"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    BaseButton,
    __spreadProps(__spreadValues({
      className: isDark ? stitchesDarkTheme : void 0,
      ref,
      size,
      align,
      css: import_lodash.default.merge(
        getButtonToneStyle(tone, intent),
        getButtonShadowStyle(tone, depth),
        css2
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Box_default,
          {
            style: {
              opacity: isLoading ? 0 : 1
            },
            children: leftIcon
          }
        ),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Box_default,
          {
            style: {
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              inset: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AutoSpinner, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Box_default,
          {
            className: "button-text",
            style: {
              opacity: isLoading ? 0 : 1
            },
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Box_default,
          {
            style: {
              opacity: isLoading ? 0 : 1
            },
            children: rightIcon
          }
        )
      ]
    })
  );
};
var Button_default = import_react2.default.forwardRef(Button);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
