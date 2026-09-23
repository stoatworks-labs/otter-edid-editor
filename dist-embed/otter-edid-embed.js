//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region ../../../node_modules/react/cjs/react.production.min.js
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
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
		if (null === a || "object" !== typeof a) return null;
		a = z && a[z] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
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
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
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
	H.isPureReactComponent = !0;
	var I = Array.isArray;
	var J = Object.prototype.hasOwnProperty;
	var K = { current: null };
	var L = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M(a, b, e) {
		var d, c = {}, k = null, h = null;
		if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		var g = arguments.length - 2;
		if (1 === g) c.children = e;
		else if (1 < g) {
			for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
			c.children = f;
		}
		if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		return {
			$$typeof: l,
			type: a,
			key: k,
			ref: h,
			props: c,
			_owner: K.current
		};
	}
	function N(a, b) {
		return {
			$$typeof: l,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a) {
			return b[a];
		});
	}
	var P = /\/+/g;
	function Q(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
		var k = typeof a;
		if ("undefined" === k || "boolean" === k) a = null;
		var h = !1;
		if (null === a) h = !0;
		else switch (k) {
			case "string":
			case "number":
				h = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l:
				case n: h = !0;
			}
		}
		if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
			return a;
		})) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		h = 0;
		d = "" === d ? "." : d + ":";
		if (I(a)) for (var g = 0; g < a.length; g++) {
			k = a[g];
			var f = d + Q(k, g);
			h += R(k, b, e, f, c);
		}
		else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
		else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h;
	}
	function S(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R(a, d, "", "", function(a) {
			return b.call(e, a, c++);
		});
		return d;
	}
	function T(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
			}, function(b) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U = { current: null };
	var V = { transition: null };
	var W = {
		ReactCurrentDispatcher: U,
		ReactCurrentBatchConfig: V,
		ReactCurrentOwner: K
	};
	function X() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	exports.Children = {
		map: S,
		forEach: function(a, b, e) {
			S(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S(a, function(a) {
				return a;
			}) || [];
		},
		only: function(a) {
			if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E;
	exports.Fragment = p;
	exports.Profiler = r;
	exports.PureComponent = G;
	exports.StrictMode = q;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	exports.act = X;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k = b.ref, h = K.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
			for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		}
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			g = Array(f);
			for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
			d.children = g;
		}
		return {
			$$typeof: l,
			type: a.type,
			key: c,
			ref: k,
			props: d,
			_owner: h
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t,
			_context: a
		};
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
		return {
			$$typeof: v,
			render: a
		};
	};
	exports.isValidElement = O;
	exports.lazy = function(a) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
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
	exports.unstable_act = X;
	exports.useCallback = function(a, b) {
		return U.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U.current.useContext(a);
	};
	exports.useDebugValue = function() {};
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
	exports.version = "18.3.1";
}));
//#endregion
//#region ../../../node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production_min();
}));
//#endregion
//#region ../../../node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [];
	var t = [];
	var u = 1;
	var v = null;
	var y = 3;
	var z = !1;
	var A = !1;
	var B = !1;
	var D = "function" === typeof setTimeout ? setTimeout : null;
	var E = "function" === typeof clearTimeout ? clearTimeout : null;
	var F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1;
	var O = null;
	var L = -1;
	var P = 5;
	var Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region ../../../node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region ../../../node_modules/react-dom/cjs/react-dom.production.min.js
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react();
	var ca = require_scheduler();
	function p(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set();
	var ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
	var ja = Object.prototype.hasOwnProperty;
	var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
	var la = {};
	var ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f, g) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f;
		this.removeEmptyString = g;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	var va = Symbol.for("react.element");
	var wa = Symbol.for("react.portal");
	var ya = Symbol.for("react.fragment");
	var za = Symbol.for("react.strict_mode");
	var Aa = Symbol.for("react.profiler");
	var Ba = Symbol.for("react.provider");
	var Ca = Symbol.for("react.context");
	var Da = Symbol.for("react.forward_ref");
	var Ea = Symbol.for("react.suspense");
	var Fa = Symbol.for("react.suspense_list");
	var Ga = Symbol.for("react.memo");
	var Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign;
	var La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l) {
					var d = l;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l) {
					d = l;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l) {
					d = l;
				}
				a();
			}
		} catch (l) {
			if (l && d && "string" === typeof l.stack) {
				for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
				for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
					if (1 !== g || 1 !== h) do
						if (g--, h--, 0 > h || e[g] !== f[h]) {
							var k = "\n" + e[g].replace(" at new ", " at ");
							a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
							return k;
						}
					while (1 <= g && 0 <= h);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a) {
					d = "" + a;
					f.call(this, a);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a) {
					d = "" + a;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb;
	var nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	};
	var qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null;
	var zb = null;
	var Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l);
		} catch (m) {
			this.onError(m);
		}
	}
	var Ob = !1;
	var Pb = null;
	var Qb = !1;
	var Rb = null;
	var Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f, g, h, k) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f = e.alternate;
			if (null === f) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f.child) {
				for (f = e.child; f;) {
					if (f === c) return Xb(e), a;
					if (f === d) return Xb(e), b;
					f = f.sibling;
				}
				throw Error(p(188));
			}
			if (c.return !== d.return) c = e, d = f;
			else {
				for (var g = !1, h = e.child; h;) {
					if (h === c) {
						g = !0;
						c = e;
						d = f;
						break;
					}
					if (h === d) {
						g = !0;
						d = e;
						c = f;
						break;
					}
					h = h.sibling;
				}
				if (!g) {
					for (h = f.child; h;) {
						if (h === c) {
							g = !0;
							c = f;
							d = e;
							break;
						}
						if (h === d) {
							g = !0;
							d = f;
							c = e;
							break;
						}
						h = h.sibling;
					}
					if (!g) throw Error(p(189));
				}
			}
			if (c.alternate !== d) throw Error(p(190));
		}
		if (3 !== c.tag) throw Error(p(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback;
	var bc = ca.unstable_cancelCallback;
	var cc = ca.unstable_shouldYield;
	var dc = ca.unstable_requestPaint;
	var B = ca.unstable_now;
	var ec = ca.unstable_getCurrentPriorityLevel;
	var fc = ca.unstable_ImmediatePriority;
	var gc = ca.unstable_UserBlockingPriority;
	var hc = ca.unstable_NormalPriority;
	var ic = ca.unstable_LowPriority;
	var jc = ca.unstable_IdlePriority;
	var kc = null;
	var lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc;
	var pc = Math.log;
	var qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64;
	var sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
		if (0 !== g) {
			var h = g & ~e;
			0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		} else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
			var g = 31 - oc(f), h = 1 << g, k = e[g];
			if (-1 === k) {
				if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
			} else k <= b && (a.expiredLanes |= h);
			f &= ~h;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec;
	var Fc;
	var Gc;
	var Hc;
	var Ic;
	var Jc = !1;
	var Kc = [];
	var Lc = null;
	var Mc = null;
	var Nc = null;
	var Oc = /* @__PURE__ */ new Map();
	var Pc = /* @__PURE__ */ new Map();
	var Qc = [];
	var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f) {
		if (null === a || a.nativeEvent !== f) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f = e.pointerId;
				Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b) {
			return ad(b, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig;
	var dd = !0;
	function ed(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f = Cb(e);
					null !== f && Ec(f);
					f = Yc(a, b, c, d);
					null === f && hd(a, b, d, id, c);
					if (f === e) break;
					e = f;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null;
	var ld = null;
	var md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g = c - a;
		for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b, d, e, f, g) {
			this._reactName = b;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f;
			this.target = g;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
			this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	};
	var td = rd(sd);
	var ud = A({}, sd, {
		view: 0,
		detail: 0
	});
	var vd = rd(ud);
	var wd;
	var xd;
	var yd;
	var Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	});
	var Bd = rd(Ad);
	var Dd = rd(A({}, Ad, { dataTransfer: 0 }));
	var Fd = rd(A({}, ud, { relatedTarget: 0 }));
	var Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} }));
	var Ld = rd(A({}, sd, { data: 0 }));
	var Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	};
	var Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	};
	var Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	}));
	var Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}));
	var Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	}));
	var Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}));
	var $d = [
		9,
		13,
		27,
		32
	];
	var ae = ia && "CompositionEvent" in window;
	var be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be;
	var de = ia && (!ae || be && 8 < be && 11 >= be);
	var ee = String.fromCharCode(32);
	var fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null;
	var qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f = Math.min(d.start, e);
					d = void 0 === d.end ? f : Math.min(d.end, e);
					!a.extend && f > d && (e = d, d = f, f = e);
					e = Ke(c, f);
					var g = Ke(c, d);
					e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
	var Qe = null;
	var Re = null;
	var Se = null;
	var Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	};
	var Xe = {};
	var Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend");
	var af = Ze("animationiteration");
	var bf = Ze("animationstart");
	var cf = Ze("transitionend");
	var df = /* @__PURE__ */ new Map();
	var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
	var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f = void 0;
				if (b) for (var g = d.length - 1; 0 <= g; g--) {
					var h = d[g], k = h.instance, l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
				else for (g = 0; g < d.length; g++) {
					h = d[g];
					k = h.instance;
					l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b) {
				"selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g = d.tag;
			if (3 === g || 4 === g) {
				var h = d.stateNode.containerInfo;
				if (h === e || 8 === h.nodeType && h.parentNode === e) break;
				if (4 === g) for (g = d.return; null !== g;) {
					var k = g.tag;
					if (3 === k || 4 === k) {
						if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
					}
					g = g.return;
				}
				for (; null !== h;) {
					g = Wc(h);
					if (null === g) return;
					k = g.tag;
					if (5 === k || 6 === k) {
						d = f = g;
						continue a;
					}
					h = h.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d = f, e = xb(c), g = [];
			a: {
				var h = df.get(a);
				if (void 0 !== h) {
					var k = td, n = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k = Rd;
							break;
						case "focusin":
							n = "focus";
							k = Fd;
							break;
						case "focusout":
							n = "blur";
							k = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k = Vd;
							break;
						case $e:
						case af:
						case bf:
							k = Hd;
							break;
						case cf:
							k = Xd;
							break;
						case "scroll":
							k = vd;
							break;
						case "wheel":
							k = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k = Td;
					}
					var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
					t = [];
					for (var w = d, u; null !== w;) {
						u = w;
						var F = u.stateNode;
						5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
						if (J) break;
						w = w.return;
					}
					0 < t.length && (h = new k(h, n, null, c, e), g.push({
						event: h,
						listeners: t
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h = "mouseover" === a || "pointerover" === a;
					k = "mouseout" === a || "pointerout" === a;
					if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
					if (k || h) {
						h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
						if (k) {
							if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
						} else k = null, n = d;
						if (k !== n) {
							t = Bd;
							F = "onMouseLeave";
							x = "onMouseEnter";
							w = "mouse";
							if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
							J = null == k ? h : ue(k);
							u = null == n ? h : ue(n);
							h = new t(F, w + "leave", k, c, e);
							h.target = J;
							h.relatedTarget = u;
							F = null;
							Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
							J = F;
							if (k && n) b: {
								t = k;
								x = n;
								w = 0;
								for (u = t; u; u = vf(u)) w++;
								u = 0;
								for (F = x; F; F = vf(F)) u++;
								for (; 0 < w - u;) t = vf(t), w--;
								for (; 0 < u - w;) x = vf(x), u--;
								for (; w--;) {
									if (t === x || null !== x && t === x.alternate) break b;
									t = vf(t);
									x = vf(x);
								}
								t = null;
							}
							else t = null;
							null !== k && wf(g, h, k, t, !1);
							null !== n && null !== J && wf(g, J, n, t, !0);
						}
					}
				}
				a: {
					h = d ? ue(d) : window;
					k = h.nodeName && h.nodeName.toLowerCase();
					if ("select" === k || "input" === k && "file" === h.type) var na = ve;
					else if (me(h)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
					if (na && (na = na(a, d))) {
						ne(g, na, c, e);
						break a;
					}
					xa && xa(a, h, d);
					"focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
				}
				xa = d ? ue(d) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g, c, e);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g, c, e);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
					event: e,
					listeners: d
				}), e.data = $a);
			}
			se(g, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f = e.stateNode;
			5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f = b._reactName, g = []; null !== c && c !== d;) {
			var h = c, k = h.alternate, l = h.stateNode;
			if (null !== k && k === d) break;
			5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
			c = c.return;
		}
		0 !== g.length && a.push({
			event: b,
			listeners: g
		});
	}
	var xf = /\r\n?/g;
	var yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null;
	var Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
	var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
	var Hf = "function" === typeof Promise ? Promise : void 0;
	var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2);
	var Of = "__reactFiber$" + Nf;
	var Pf = "__reactProps$" + Nf;
	var uf = "__reactContainer$" + Nf;
	var of = "__reactEvents$" + Nf;
	var Qf = "__reactListeners$" + Nf;
	var Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [];
	var Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {};
	var H = Uf(Vf);
	var Wf = Uf(!1);
	var Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f;
		for (f in c) e[f] = b[f];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null;
	var fg = !1;
	var gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [];
	var lg = 0;
	var mg = null;
	var ng = 0;
	var og = [];
	var pg = 0;
	var qg = null;
	var rg = 1;
	var sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f = 32 - oc(b) + e;
		if (30 < f) {
			var g = e - e % 5;
			f = (d & (1 << g) - 1).toString(32);
			d >>= g;
			e -= g;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f + a;
		} else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null;
	var yg = null;
	var I = !1;
	var zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p(147, a));
				var e = d, f = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
				b = function(a) {
					var b = e.refs;
					null === a ? delete b[f] : b[f] = a;
				};
				b._stringRef = f;
				return b;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c._owner) throw Error(p(290, a));
		}
		return a;
	}
	function Mg(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function Ng(a) {
		var b = a._init;
		return b(a._payload);
	}
	function Og(a) {
		function b(b, c) {
			if (a) {
				var d = b.deletions;
				null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
			}
		}
		function c(c, d) {
			if (!a) return null;
			for (; null !== d;) b(c, d), d = d.sibling;
			return null;
		}
		function d(a, b) {
			for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
			return a;
		}
		function e(a, b) {
			a = Pg(a, b);
			a.index = 0;
			a.sibling = null;
			return a;
		}
		function f(b, c, d) {
			b.index = d;
			if (!a) return b.flags |= 1048576, c;
			d = b.alternate;
			if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
			b.flags |= 2;
			return c;
		}
		function g(b) {
			a && null === b.alternate && (b.flags |= 2);
			return b;
		}
		function h(a, b, c, d) {
			if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function k(a, b, c, d) {
			var f = c.type;
			if (f === ya) return m(a, b, c.props.children, d, c.key);
			if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
			d = Rg(c.type, c.key, c.props, null, a.mode, d);
			d.ref = Lg(a, b, c);
			d.return = a;
			return d;
		}
		function l(a, b, c, d) {
			if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
			b = e(b, c.children || []);
			b.return = a;
			return b;
		}
		function m(a, b, c, d, f) {
			if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function q(a, b, c) {
			if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
			if ("object" === typeof b && null !== b) {
				switch (b.$$typeof) {
					case va: return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
					case wa: return b = Sg(b, a.mode, c), b.return = a, b;
					case Ha:
						var d = b._init;
						return q(a, d(b._payload), c);
				}
				if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
				Mg(a, b);
			}
			return null;
		}
		function r(a, b, c, d) {
			var e = null !== b ? b.key : null;
			if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case va: return c.key === e ? k(a, b, c, d) : null;
					case wa: return c.key === e ? l(a, b, c, d) : null;
					case Ha: return e = c._init, r(a, b, e(c._payload), d);
				}
				if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
				Mg(a, c);
			}
			return null;
		}
		function y(a, b, c, d, e) {
			if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case va: return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
					case wa: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					case Ha:
						var f = d._init;
						return y(a, b, c, f(d._payload), e);
				}
				if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
				Mg(b, d);
			}
			return null;
		}
		function n(e, g, h, k) {
			for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
				u.index > w ? (x = u, u = null) : x = u.sibling;
				var n = r(e, u, h[w], k);
				if (null === n) {
					null === u && (u = x);
					break;
				}
				a && u && null === n.alternate && b(e, u);
				g = f(n, g, w);
				null === m ? l = n : m.sibling = n;
				m = n;
				u = x;
			}
			if (w === h.length) return c(e, u), I && tg(e, w), l;
			if (null === u) {
				for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
				I && tg(e, w);
				return l;
			}
			for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
			a && u.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function t(e, g, h, k) {
			var l = Ka(h);
			if ("function" !== typeof l) throw Error(p(150));
			h = l.call(h);
			if (null == h) throw Error(p(151));
			for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
				m.index > w ? (x = m, m = null) : x = m.sibling;
				var t = r(e, m, n.value, k);
				if (null === t) {
					null === m && (m = x);
					break;
				}
				a && m && null === t.alternate && b(e, m);
				g = f(t, g, w);
				null === u ? l = t : u.sibling = t;
				u = t;
				m = x;
			}
			if (n.done) return c(e, m), I && tg(e, w), l;
			if (null === m) {
				for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
				I && tg(e, w);
				return l;
			}
			for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
			a && m.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function J(a, d, f, h) {
			"object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case va:
						a: {
							for (var k = f.key, l = d; null !== l;) {
								if (l.key === k) {
									k = f.type;
									if (k === ya) {
										if (7 === l.tag) {
											c(a, l.sibling);
											d = e(l, f.props.children);
											d.return = a;
											a = d;
											break a;
										}
									} else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
										c(a, l.sibling);
										d = e(l, f.props);
										d.ref = Lg(a, l, f);
										d.return = a;
										a = d;
										break a;
									}
									c(a, l);
									break;
								} else b(a, l);
								l = l.sibling;
							}
							f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case wa:
						a: {
							for (l = f.key; null !== d;) {
								if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = Sg(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
					case Ha: return l = f._init, J(a, d, l(f._payload), h);
				}
				if (eb(f)) return n(a, d, f, h);
				if (Ka(f)) return t(a, d, f, h);
				Mg(a, f);
			}
			return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		}
		return J;
	}
	var Ug = Og(!0);
	var Vg = Og(!1);
	var Wg = Uf(null);
	var Xg = null;
	var Yg = null;
	var Zg = null;
	function $g() {
		Zg = Yg = Xg = null;
	}
	function ah(a) {
		var b = Wg.current;
		E(Wg);
		a._currentValue = b;
	}
	function bh(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function ch(a, b) {
		Xg = a;
		Zg = Yg = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
	}
	function eh(a) {
		var b = a._currentValue;
		if (Zg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Yg) {
			if (null === Xg) throw Error(p(308));
			Yg = a;
			Xg.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Yg = Yg.next = a;
		return b;
	}
	var fh = null;
	function gh(a) {
		null === fh ? fh = [a] : fh.push(a);
	}
	function hh(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return ih(a, d);
	}
	function ih(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var jh = !1;
	function kh(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function lh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function mh(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function nh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return ih(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return ih(a, c);
	}
	function oh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function ph(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f ? e = f = g : f = f.next = g;
					c = c.next;
				} while (null !== c);
				null === f ? e = f = b : f = f.next = b;
			} else e = f = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function qh(a, b, c, d) {
		var e = a.updateQueue;
		jh = !1;
		var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
		if (null !== h) {
			e.shared.pending = null;
			var k = h, l = k.next;
			k.next = null;
			null === g ? f = l : g.next = l;
			g = k;
			var m = a.alternate;
			null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		}
		if (null !== f) {
			var q = e.baseState;
			g = 0;
			m = l = k = null;
			h = f;
			do {
				var r = h.lane, y = h.eventTime;
				if ((d & r) === r) {
					null !== m && (m = m.next = {
						eventTime: y,
						lane: 0,
						tag: h.tag,
						payload: h.payload,
						callback: h.callback,
						next: null
					});
					a: {
						var n = a, t = h;
						r = b;
						y = c;
						switch (t.tag) {
							case 1:
								n = t.payload;
								if ("function" === typeof n) {
									q = n.call(y, q, r);
									break a;
								}
								q = n;
								break a;
							case 3: n.flags = n.flags & -65537 | 128;
							case 0:
								n = t.payload;
								r = "function" === typeof n ? n.call(y, q, r) : n;
								if (null === r || void 0 === r) break a;
								q = A({}, q, r);
								break a;
							case 2: jh = !0;
						}
					}
					null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
				} else y = {
					eventTime: y,
					lane: r,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
				h = h.next;
				if (null === h) if (h = e.shared.pending, null === h) break;
				else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
			} while (1);
			null === m && (k = q);
			e.baseState = k;
			e.firstBaseUpdate = l;
			e.lastBaseUpdate = m;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g |= e.lane, e = e.next;
				while (e !== b);
			} else null === f && (e.shared.lanes = 0);
			rh |= g;
			a.lanes = g;
			a.memoizedState = q;
		}
	}
	function sh(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p(191, e));
				e.call(d);
			}
		}
	}
	var th = {};
	var uh = Uf(th);
	var vh = Uf(th);
	var wh = Uf(th);
	function xh(a) {
		if (a === th) throw Error(p(174));
		return a;
	}
	function yh(a, b) {
		G(wh, b);
		G(vh, a);
		G(uh, th);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(uh);
		G(uh, b);
	}
	function zh() {
		E(uh);
		E(vh);
		E(wh);
	}
	function Ah(a) {
		xh(wh.current);
		var b = xh(uh.current);
		var c = lb(b, a.type);
		b !== c && (G(vh, a), G(uh, c));
	}
	function Bh(a) {
		vh.current === a && (E(uh), E(vh));
	}
	var L = Uf(0);
	function Ch(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Dh = [];
	function Eh() {
		for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		Dh.length = 0;
	}
	var Fh = ua.ReactCurrentDispatcher;
	var Gh = ua.ReactCurrentBatchConfig;
	var Hh = 0;
	var M = null;
	var N = null;
	var O = null;
	var Ih = !1;
	var Jh = !1;
	var Kh = 0;
	var Lh = 0;
	function P() {
		throw Error(p(321));
	}
	function Mh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Nh(a, b, c, d, e, f) {
		Hh = f;
		M = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		a = c(d, e);
		if (Jh) {
			f = 0;
			do {
				Jh = !1;
				Kh = 0;
				if (25 <= f) throw Error(p(301));
				f += 1;
				O = N = null;
				b.updateQueue = null;
				Fh.current = Qh;
				a = c(d, e);
			} while (Jh);
		}
		Fh.current = Rh;
		b = null !== N && null !== N.next;
		Hh = 0;
		O = N = M = null;
		Ih = !1;
		if (b) throw Error(p(300));
		return a;
	}
	function Sh() {
		var a = 0 !== Kh;
		Kh = 0;
		return a;
	}
	function Th() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = a : O = O.next = a;
		return O;
	}
	function Uh() {
		if (null === N) {
			var a = M.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = N.next;
		var b = null === O ? M.memoizedState : O.next;
		if (null !== b) O = b, N = a;
		else {
			if (null === a) throw Error(p(310));
			N = a;
			a = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
		}
		return O;
	}
	function Vh(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function Wh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = N, e = d.baseQueue, f = c.pending;
		if (null !== f) {
			if (null !== e) {
				var g = e.next;
				e.next = f.next;
				f.next = g;
			}
			d.baseQueue = e = f;
			c.pending = null;
		}
		if (null !== e) {
			f = e.next;
			d = d.baseState;
			var h = g = null, k = null, l = f;
			do {
				var m = l.lane;
				if ((Hh & m) === m) null !== k && (k = k.next = {
					lane: 0,
					action: l.action,
					hasEagerState: l.hasEagerState,
					eagerState: l.eagerState,
					next: null
				}), d = l.hasEagerState ? l.eagerState : a(d, l.action);
				else {
					var q = {
						lane: m,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					};
					null === k ? (h = k = q, g = d) : k = k.next = q;
					M.lanes |= m;
					rh |= m;
				}
				l = l.next;
			} while (null !== l && l !== f);
			null === k ? g = d : k.next = h;
			He(d, b.memoizedState) || (dh = !0);
			b.memoizedState = d;
			b.baseState = g;
			b.baseQueue = k;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f = e.lane, M.lanes |= f, rh |= f, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function Xh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g = e = e.next;
			do
				f = a(f, g.action), g = g.next;
			while (g !== e);
			He(f, b.memoizedState) || (dh = !0);
			b.memoizedState = f;
			null === b.baseQueue && (b.baseState = f);
			c.lastRenderedState = f;
		}
		return [f, d];
	}
	function Yh() {}
	function Zh(a, b) {
		var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
		f && (d.memoizedState = e, dh = !0);
		d = d.queue;
		$h(ai.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
			c.flags |= 2048;
			bi(9, ci.bind(null, c, d, e, b), void 0, null);
			if (null === Q) throw Error(p(349));
			0 !== (Hh & 30) || di(c, b, e);
		}
		return e;
	}
	function di(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function ci(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		ei(b) && fi(a);
	}
	function ai(a, b, c) {
		return c(function() {
			ei(b) && fi(a);
		});
	}
	function ei(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function fi(a) {
		var b = ih(a, 1);
		null !== b && gi(b, a, 1, -1);
	}
	function hi(a) {
		var b = Th();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vh,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ii.bind(null, M, a);
		return [b.memoizedState, a];
	}
	function bi(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function ji() {
		return Uh().memoizedState;
	}
	function ki(a, b, c, d) {
		var e = Th();
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function li(a, b, c, d) {
		var e = Uh();
		d = void 0 === d ? null : d;
		var f = void 0;
		if (null !== N) {
			var g = N.memoizedState;
			f = g.destroy;
			if (null !== d && Mh(d, g.deps)) {
				e.memoizedState = bi(b, c, f, d);
				return;
			}
		}
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, f, d);
	}
	function mi(a, b) {
		return ki(8390656, 8, a, b);
	}
	function $h(a, b) {
		return li(2048, 8, a, b);
	}
	function ni(a, b) {
		return li(4, 2, a, b);
	}
	function oi(a, b) {
		return li(4, 4, a, b);
	}
	function pi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function qi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return li(4, 4, pi.bind(null, b, a), c);
	}
	function ri() {}
	function si(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function ti(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function ui(a, b, c) {
		if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
		return b;
	}
	function vi(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Gh.transition;
		Gh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Gh.transition = d;
		}
	}
	function wi() {
		return Uh().memoizedState;
	}
	function xi(a, b, c) {
		var d = yi(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, c);
		else if (c = hh(a, b, c, d), null !== c) {
			var e = R();
			gi(c, a, d, e);
			Bi(c, b, d);
		}
	}
	function ii(a, b, c) {
		var d = yi(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, e);
		else {
			var f = a.alternate;
			if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
				var g = b.lastRenderedState, h = f(g, c);
				e.hasEagerState = !0;
				e.eagerState = h;
				if (He(h, g)) {
					var k = b.interleaved;
					null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l) {}
			c = hh(a, b, e, d);
			null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
		}
	}
	function zi(a) {
		var b = a.alternate;
		return a === M || null !== b && b === M;
	}
	function Ai(a, b) {
		Jh = Ih = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Bi(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var Rh = {
		readContext: eh,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useInsertionEffect: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useSyncExternalStore: P,
		useId: P,
		unstable_isNewReconciler: !1
	};
	var Oh = {
		readContext: eh,
		useCallback: function(a, b) {
			Th().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: eh,
		useEffect: mi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ki(4194308, 4, pi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ki(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ki(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = Th();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = Th();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = xi.bind(null, M, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = Th();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: hi,
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return Th().memoizedState = a;
		},
		useTransition: function() {
			var a = hi(!1), b = a[0];
			a = vi.bind(null, a[1]);
			Th().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = M, e = Th();
			if (I) {
				if (void 0 === c) throw Error(p(407));
				c = c();
			} else {
				c = b();
				if (null === Q) throw Error(p(349));
				0 !== (Hh & 30) || di(d, b, c);
			}
			e.memoizedState = c;
			var f = {
				value: c,
				getSnapshot: b
			};
			e.queue = f;
			mi(ai.bind(null, d, f, a), [a]);
			d.flags |= 2048;
			bi(9, ci.bind(null, d, f, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = Th(), b = Q.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Kh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	};
	var Ph = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Wh,
		useRef: ji,
		useState: function() {
			return Wh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return ui(Uh(), N.memoizedState, a);
		},
		useTransition: function() {
			return [Wh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	var Qh = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Xh,
		useRef: ji,
		useState: function() {
			return Xh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			var b = Uh();
			return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
		},
		useTransition: function() {
			return [Xh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	function Ci(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	function Di(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Ei = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.tag = 1;
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = R(), d = yi(a), e = mh(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = nh(a, e, d);
			null !== b && (gi(b, a, d, c), oh(b, a, d));
		}
	};
	function Fi(a, b, c, d, e, f, g) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function Gi(a, b, c) {
		var d = !1, e = Vf;
		var f = b.contextType;
		"object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = Ei;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		return b;
	}
	function Hi(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
	}
	function Ii(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = {};
		kh(a);
		var f = b.contextType;
		"object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		e.state = a.memoizedState;
		f = b.getDerivedStateFromProps;
		"function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function Ji(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f) {
			e = "\nError generating stack: " + f.message + "\n" + f.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Ki(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Li(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	function Ni(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Oi || (Oi = !0, Pi = d);
			Li(a, b);
		};
		return c;
	}
	function Qi(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Li(a, b);
			};
		}
		var f = a.stateNode;
		null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
			Li(a, b);
			"function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
			var c = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
		});
		return c;
	}
	function Si(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Mi();
			var e = /* @__PURE__ */ new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
	}
	function Ui(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Vi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Wi = ua.ReactCurrentOwner;
	var dh = !1;
	function Xi(a, b, c, d) {
		b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
	}
	function Yi(a, b, c, d, e) {
		c = c.render;
		var f = b.ref;
		ch(b, e);
		d = Nh(a, b, c, d, f, e);
		c = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Xi(a, b, d, e);
		return b.child;
	}
	function $i(a, b, c, d, e) {
		if (null === a) {
			var f = c.type;
			if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
			a = Rg(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f = a.child;
		if (0 === (a.lanes & e)) {
			var g = f.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
		}
		b.flags |= 1;
		a = Pg(f, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function bj(a, b, c, d, e) {
		if (null !== a) {
			var f = a.memoizedProps;
			if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);
			else return b.lanes = a.lanes, Zi(a, b, e);
		}
		return cj(a, b, c, d, e);
	}
	function dj(a, b, c) {
		var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(ej, fj), fj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(ej, fj), fj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f ? f.baseLanes : c;
			G(ej, fj);
			fj |= d;
		}
		else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
		Xi(a, b, e, c);
		return b.child;
	}
	function gj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function cj(a, b, c, d, e) {
		var f = Zf(c) ? Xf : H.current;
		f = Yf(b, f);
		ch(b, e);
		c = Nh(a, b, c, d, f, e);
		d = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Xi(a, b, c, e);
		return b.child;
	}
	function hj(a, b, c, d, e) {
		if (Zf(c)) {
			var f = !0;
			cg(b);
		} else f = !1;
		ch(b, e);
		if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;
		else if (null === a) {
			var g = b.stateNode, h = b.memoizedProps;
			g.props = h;
			var k = g.context, l = c.contextType;
			"object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
			var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
			q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
			jh = !1;
			var r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			k = b.memoizedState;
			h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g = b.stateNode;
			lh(a, b);
			h = b.memoizedProps;
			l = b.type === b.elementType ? h : Ci(b.type, h);
			g.props = l;
			q = b.pendingProps;
			r = g.context;
			k = c.contextType;
			"object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
			var y = c.getDerivedStateFromProps;
			(m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
			jh = !1;
			r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			var n = b.memoizedState;
			h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return jj(a, b, c, d, f, e);
	}
	function jj(a, b, c, d, e, f) {
		gj(a, b);
		var g = 0 !== (b.flags & 128);
		if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
		d = b.stateNode;
		Wi.current = b;
		var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function kj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		yh(a, b.containerInfo);
	}
	function lj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Xi(a, b, c, d);
		return b.child;
	}
	var mj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function nj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function oj(a, b, c) {
		var d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128), h;
		(h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h) f = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(L, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g = d.children;
			a = d.fallback;
			return f ? (d = b.mode, f = b.child, g = {
				mode: "hidden",
				children: g
			}, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
		}
		e = a.memoizedState;
		if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
		if (f) {
			f = d.fallback;
			g = b.mode;
			e = a.child;
			h = e.sibling;
			var k = {
				mode: "hidden",
				children: d.children
			};
			0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
			f.return = b;
			d.return = b;
			d.sibling = f;
			b.child = d;
			d = f;
			f = b.child;
			g = a.child.memoizedState;
			g = null === g ? nj(c) : {
				baseLanes: g.baseLanes | c,
				cachePool: null,
				transitions: g.transitions
			};
			f.memoizedState = g;
			f.childLanes = a.childLanes & ~c;
			b.memoizedState = mj;
			return d;
		}
		f = a.child;
		a = f.sibling;
		d = Pg(f, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function qj(a, b) {
		b = pj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function sj(a, b, c, d) {
		null !== d && Jg(d);
		Ug(b, a.child, null, c);
		a = qj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function rj(a, b, c, d, e, f, g) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f = d.fallback;
			e = b.mode;
			d = pj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f = Tg(f, e, g, null);
			f.flags |= 2;
			d.return = b;
			f.return = b;
			d.sibling = f;
			b.child = d;
			0 !== (b.mode & 1) && Ug(b, a.child, null, g);
			b.child.memoizedState = nj(g);
			b.memoizedState = mj;
			return f;
		}
		if (0 === (b.mode & 1)) return sj(a, b, g, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h = d.dgst;
			d = h;
			f = Error(p(419));
			d = Ki(f, d, void 0);
			return sj(a, b, g, d);
		}
		h = 0 !== (g & a.childLanes);
		if (dh || h) {
			d = Q;
			if (null !== d) {
				switch (g & -g) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
				0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
			}
			tj();
			d = Ki(Error(p(421)));
			return sj(a, b, g, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
		a = f.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = qj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function vj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		bh(a.return, b, c);
	}
	function wj(a, b, c, d, e) {
		var f = a.memoizedState;
		null === f ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function xj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f = d.tail;
		Xi(a, b, d.children, c);
		d = L.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
				else if (19 === a.tag) vj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(L, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				wj(b, !1, e, c, f);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Ch(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				wj(b, !0, c, null, f);
				break;
			case "together":
				wj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function ij(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function Zi(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		rh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p(153));
		if (null !== b.child) {
			a = b.child;
			c = Pg(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function yj(a, b, c) {
		switch (b.tag) {
			case 3:
				kj(b);
				Ig();
				break;
			case 5:
				Ah(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				yh(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Wg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
					G(L, L.current & 1);
					a = Zi(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(L, L.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return xj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(L, L.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, dj(a, b, c);
		}
		return Zi(a, b, c);
	}
	var zj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	};
	var Bj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			xh(uh.current);
			var f = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g;
			c = null;
			for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
				var h = e[l];
				for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
			} else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
			for (l in d) {
				var k = d[l];
				h = null != e ? e[l] : void 0;
				if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
					for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
					for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
				} else c || (f || (f = []), f.push(l, c)), c = k;
				else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
			}
			c && (f = f || []).push("style", c);
			var l = f;
			if (b.updateQueue = l) b.flags |= 4;
		}
	};
	var Cj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Dj(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Ej(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				zh();
				E(Wf);
				E(H);
				Eh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
				S(b);
				return null;
			case 5:
				Bh(b);
				var e = xh(wh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p(166));
						S(b);
						return null;
					}
					a = xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f), D("invalid", d);
						}
						ub(c, f);
						e = null;
						for (var g in f) if (f.hasOwnProperty(g)) {
							var h = f[g];
							"children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						zj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h = e;
							for (f in h) if (h.hasOwnProperty(f)) {
								var k = h[f];
								"style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f = d.value;
									null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
					c = xh(wh.current);
					xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(L);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
					else if (f = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f) throw Error(p(318));
							f = b.memoizedState;
							f = null !== f ? f.dehydrated : null;
							if (!f) throw Error(p(317));
							f[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f = !1;
					} else null !== zg && (Fj(zg), zg = null), f = !0;
					if (!f) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return zh(), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return ah(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(L);
				f = b.memoizedState;
				if (null === f) return S(b), null;
				d = 0 !== (b.flags & 128);
				g = f.rendering;
				if (null === g) if (d) Dj(f, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g = Ch(a);
						if (null !== g) {
							b.flags |= 128;
							Dj(f, !1);
							d = g.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(L, L.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Ch(g), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
					} else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
					f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
				}
				if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b.tag));
	}
	function Ij(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Bh(b), null;
			case 13:
				E(L);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(L), null;
			case 4: return zh(), null;
			case 10: return ah(b.type._context), null;
			case 22:
			case 23: return Hj(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Jj = !1;
	var U = !1;
	var Kj = "function" === typeof WeakSet ? WeakSet : Set;
	var V = null;
	function Lj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Mj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Nj = !1;
	function Oj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f.nodeType;
					} catch (F) {
						c = null;
						break a;
					}
					var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
					b: for (;;) {
						for (var y;;) {
							q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
							q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
							3 === q.nodeType && (g += q.nodeValue.length);
							if (null === (y = q.firstChild)) break;
							r = q;
							q = y;
						}
						for (;;) {
							if (q === a) break b;
							r === c && ++l === e && (h = g);
							r === f && ++m === d && (k = g);
							if (null !== (y = q.nextSibling)) break;
							q = r;
							r = q.parentNode;
						}
						q = y;
					}
					c = -1 === h || -1 === k ? null : {
						start: h,
						end: k
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n) {
							var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode;
							x.__reactInternalSnapshotBeforeUpdate = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
						}
						break;
					case 3:
						var u = b.stateNode.containerInfo;
						1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F) {
				W(b, b.return, F);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n = Nj;
		Nj = !1;
		return n;
	}
	function Pj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f = e.destroy;
					e.destroy = void 0;
					void 0 !== f && Mj(b, c, f);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Qj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Rj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Sj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Sj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Tj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Uj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Tj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Vj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	var X = null;
	var Xj = !1;
	function Yj(a, b, c) {
		for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
	}
	function Zj(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h) {}
		switch (c.tag) {
			case 5: U || Lj(c, b);
			case 6:
				var d = X, e = Xj;
				X = null;
				Yj(a, b, c);
				X = d;
				Xj = e;
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Xj;
				X = c.stateNode.containerInfo;
				Xj = !0;
				Yj(a, b, c);
				X = d;
				Xj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f = e, g = f.destroy;
						f = f.tag;
						void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
						e = e.next;
					} while (e !== d);
				}
				Yj(a, b, c);
				break;
			case 1:
				if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h) {
					W(c, b, h);
				}
				Yj(a, b, c);
				break;
			case 21:
				Yj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
				break;
			default: Yj(a, b, c);
		}
	}
	function ak(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Kj());
			b.forEach(function(b) {
				var d = bk.bind(null, a, b);
				c.has(b) || (c.add(b), b.then(d, d));
			});
		}
	}
	function ck(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f = a, g = b, h = g;
				a: for (; null !== h;) {
					switch (h.tag) {
						case 5:
							X = h.stateNode;
							Xj = !1;
							break a;
						case 3:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
						case 4:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
					}
					h = h.return;
				}
				if (null === X) throw Error(p(160));
				Zj(f, g, e);
				X = null;
				Xj = !1;
				var k = e.alternate;
				null !== k && (k.return = null);
				e.return = null;
			} catch (l) {
				W(e, b, l);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
	}
	function dk(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ck(b, a);
				ek(a);
				if (d & 4) {
					try {
						Pj(3, a, a.return), Qj(3, a);
					} catch (t) {
						W(a, a.return, t);
					}
					try {
						Pj(5, a, a.return);
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 1:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				break;
			case 5:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t) {
						W(a, a.return, t);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
					a.updateQueue = null;
					if (null !== k) try {
						"input" === h && "radio" === f.type && null != f.name && ab(e, f);
						vb(h, g);
						var l = vb(h, f);
						for (g = 0; g < k.length; g += 2) {
							var m = k[g], q = k[g + 1];
							"style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
						}
						switch (h) {
							case "input":
								bb(e, f);
								break;
							case "textarea":
								ib(e, f);
								break;
							case "select":
								var r = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f.multiple;
								var y = f.value;
								null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
						}
						e[Pf] = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 6:
				ck(b, a);
				ek(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e = a.stateNode;
					f = a.memoizedProps;
					try {
						e.nodeValue = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 3:
				ck(b, a);
				ek(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t) {
					W(a, a.return, t);
				}
				break;
			case 4:
				ck(b, a);
				ek(a);
				break;
			case 13:
				ck(b, a);
				ek(a);
				e = a.child;
				e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
				d & 4 && ak(a);
				break;
			case 22:
				m = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
				ek(a);
				if (d & 8192) {
					l = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
						for (q = V = m; null !== V;) {
							r = V;
							y = r.child;
							switch (r.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pj(4, r, r.return);
									break;
								case 1:
									Lj(r, r.return);
									var n = r.stateNode;
									if ("function" === typeof n.componentWillUnmount) {
										d = r;
										c = r.return;
										try {
											b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
										} catch (t) {
											W(d, c, t);
										}
									}
									break;
								case 5:
									Lj(r, r.return);
									break;
								case 22: if (null !== r.memoizedState) {
									gk(q);
									continue;
								}
							}
							null !== y ? (y.return = r, V = y) : gk(q);
						}
						m = m.sibling;
					}
					a: for (m = null, q = a;;) {
						if (5 === q.tag) {
							if (null === m) {
								m = q;
								try {
									e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
								} catch (t) {
									W(a, a.return, t);
								}
							}
						} else if (6 === q.tag) {
							if (null === m) try {
								q.stateNode.nodeValue = l ? "" : q.memoizedProps;
							} catch (t) {
								W(a, a.return, t);
							}
						} else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
							q.child.return = q;
							q = q.child;
							continue;
						}
						if (q === a) break a;
						for (; null === q.sibling;) {
							if (null === q.return || q.return === a) break a;
							m === q && (m = null);
							q = q.return;
						}
						m === q && (m = null);
						q.sibling.return = q.return;
						q = q.sibling;
					}
				}
				break;
			case 19:
				ck(b, a);
				ek(a);
				d & 4 && ak(a);
				break;
			case 21: break;
			default: ck(b, a), ek(a);
		}
	}
	function ek(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Tj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						Wj(a, Uj(a), e);
						break;
					case 3:
					case 4:
						var g = d.stateNode.containerInfo;
						Vj(a, Uj(a), g);
						break;
					default: throw Error(p(161));
				}
			} catch (k) {
				W(a, a.return, k);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function hk(a, b, c) {
		V = a;
		ik(a, b, c);
	}
	function ik(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f = e.child;
			if (22 === e.tag && d) {
				var g = null !== e.memoizedState || Jj;
				if (!g) {
					var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
					h = Jj;
					var l = U;
					Jj = g;
					if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
					for (; null !== f;) V = f, ik(f, b, c), f = f.sibling;
					V = e;
					Jj = h;
					U = l;
				}
				kk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Qj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f = b.updateQueue;
							null !== f && sh(b, f, d);
							break;
						case 3:
							var g = b.updateQueue;
							if (null !== g) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								sh(b, g, c);
							}
							break;
						case 5:
							var h = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h;
								var k = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k.autoFocus && c.focus();
										break;
									case "img": k.src && (c.src = k.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l = b.alternate;
								if (null !== l) {
									var m = l.memoizedState;
									if (null !== m) {
										var q = m.dehydrated;
										null !== q && bd(q);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b.flags & 512 && Rj(b);
				} catch (r) {
					W(b, b.return, r);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function gk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function jk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Qj(4, b);
						} catch (k) {
							W(b, c, k);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k) {
								W(b, e, k);
							}
						}
						var f = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, f, k);
						}
						break;
					case 5:
						var g = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, g, k);
						}
				}
			} catch (k) {
				W(b, b.return, k);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h = b.sibling;
			if (null !== h) {
				h.return = b.return;
				V = h;
				break;
			}
			V = b.return;
		}
	}
	var lk = Math.ceil;
	var mk = ua.ReactCurrentDispatcher;
	var nk = ua.ReactCurrentOwner;
	var ok = ua.ReactCurrentBatchConfig;
	var K = 0;
	var Q = null;
	var Y = null;
	var Z = 0;
	var fj = 0;
	var ej = Uf(0);
	var T = 0;
	var pk = null;
	var rh = 0;
	var qk = 0;
	var rk = 0;
	var sk = null;
	var tk = null;
	var fk = 0;
	var Gj = Infinity;
	var uk = null;
	var Oi = !1;
	var Pi = null;
	var Ri = null;
	var vk = !1;
	var wk = null;
	var xk = 0;
	var yk = 0;
	var zk = null;
	var Ak = -1;
	var Bk = 0;
	function R() {
		return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	}
	function yi(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function gi(a, b, c, d) {
		if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
	}
	function Dk(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Fk(c, Gk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Gk(a, b) {
		Ak = -1;
		Bk = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c = a.callbackNode;
		if (Hk() && a.callbackNode !== c) return null;
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f = Jk();
			if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
			do
				try {
					Lk();
					break;
				} catch (h) {
					Mk(a, h);
				}
			while (1);
			$g();
			mk.current = f;
			K = e;
			null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
			if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
			if (6 === b) Ck(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Pk(a, tk, uk);
						break;
					case 3:
						Ck(a, d);
						if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								R();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 4:
						Ck(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g = 31 - oc(d);
							f = 1 << g;
							g = b[g];
							g > e && (e = g);
							d &= ~f;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 5:
						Pk(a, tk, uk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Dk(a, B());
		return a.callbackNode === c ? Gk.bind(null, a) : null;
	}
	function Nk(a, b) {
		var c = sk;
		a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
		a = Ik(a, b);
		2 !== a && (b = tk, tk = c, null !== b && Fj(b));
		return a;
	}
	function Fj(a) {
		null === tk ? tk = a : tk.push.apply(tk, a);
	}
	function Ok(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f(), e)) return !1;
					} catch (g) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Ck(a, b) {
		b &= ~rk;
		b &= ~qk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Ek(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Hk();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Dk(a, B()), null;
		var c = Ik(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Nk(a, d));
		}
		if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
		if (6 === c) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Pk(a, tk, uk);
		Dk(a, B());
		return null;
	}
	function Qk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Gj = B() + 500, fg && jg());
		}
	}
	function Rk(a) {
		null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		var b = K;
		K |= 1;
		var c = ok.transition, d = C;
		try {
			if (ok.transition = null, C = 1, a) return a();
		} finally {
			C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Hj() {
		fj = ej.current;
		E(ej);
	}
	function Kk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					zh();
					E(Wf);
					E(H);
					Eh();
					break;
				case 5:
					Bh(d);
					break;
				case 4:
					zh();
					break;
				case 13:
					E(L);
					break;
				case 19:
					E(L);
					break;
				case 10:
					ah(d.type._context);
					break;
				case 22:
				case 23: Hj();
			}
			c = c.return;
		}
		Q = a;
		Y = a = Pg(a.current, null);
		Z = fj = b;
		T = 0;
		pk = null;
		rk = qk = rh = 0;
		tk = sk = null;
		if (null !== fh) {
			for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f = c.pending;
				if (null !== f) {
					var g = f.next;
					f.next = e;
					d.next = g;
				}
				c.pending = d;
			}
			fh = null;
		}
		return a;
	}
	function Mk(a, b) {
		do {
			var c = Y;
			try {
				$g();
				Fh.current = Rh;
				if (Ih) {
					for (var d = M.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Ih = !1;
				}
				Hh = 0;
				O = N = M = null;
				Jh = !1;
				Kh = 0;
				nk.current = null;
				if (null === c || null === c.return) {
					T = 1;
					pk = b;
					Y = null;
					break;
				}
				a: {
					var f = a, g = c.return, h = c, k = b;
					b = Z;
					h.flags |= 32768;
					if (null !== k && "object" === typeof k && "function" === typeof k.then) {
						var l = k, m = h, q = m.tag;
						if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
							var r = m.alternate;
							r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
						}
						var y = Ui(g);
						if (null !== y) {
							y.flags &= -257;
							Vi(y, g, h, f, b);
							y.mode & 1 && Si(f, l, b);
							b = y;
							k = l;
							var n = b.updateQueue;
							if (null === n) {
								var t = /* @__PURE__ */ new Set();
								t.add(k);
								b.updateQueue = t;
							} else n.add(k);
							break a;
						} else {
							if (0 === (b & 1)) {
								Si(f, l, b);
								tj();
								break a;
							}
							k = Error(p(426));
						}
					} else if (I && h.mode & 1) {
						var J = Ui(g);
						if (null !== J) {
							0 === (J.flags & 65536) && (J.flags |= 256);
							Vi(J, g, h, f, b);
							Jg(Ji(k, h));
							break a;
						}
					}
					f = k = Ji(k, h);
					4 !== T && (T = 2);
					null === sk ? sk = [f] : sk.push(f);
					f = g;
					do {
						switch (f.tag) {
							case 3:
								f.flags |= 65536;
								b &= -b;
								f.lanes |= b;
								var x = Ni(f, k, b);
								ph(f, x);
								break a;
							case 1:
								h = k;
								var w = f.type, u = f.stateNode;
								if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
									f.flags |= 65536;
									b &= -b;
									f.lanes |= b;
									var F = Qi(f, h, b);
									ph(f, F);
									break a;
								}
						}
						f = f.return;
					} while (null !== f);
				}
				Sk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Jk() {
		var a = mk.current;
		mk.current = Rh;
		return null === a ? Rh : a;
	}
	function tj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	}
	function Ik(a, b) {
		var c = K;
		K |= 2;
		var d = Jk();
		if (Q !== a || Z !== b) uk = null, Kk(a, b);
		do
			try {
				Tk();
				break;
			} catch (e) {
				Mk(a, e);
			}
		while (1);
		$g();
		K = c;
		mk.current = d;
		if (null !== Y) throw Error(p(261));
		Q = null;
		Z = 0;
		return T;
	}
	function Tk() {
		for (; null !== Y;) Uk(Y);
	}
	function Lk() {
		for (; null !== Y && !cc();) Uk(Y);
	}
	function Uk(a) {
		var b = Vk(a.alternate, a, fj);
		a.memoizedProps = a.pendingProps;
		null === b ? Sk(a) : Y = b;
		nk.current = null;
	}
	function Sk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Ej(c, b, fj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Ij(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Pk(a, b, c) {
		var d = C, e = ok.transition;
		try {
			ok.transition = null, C = 1, Wk(a, b, c, d);
		} finally {
			ok.transition = e, C = d;
		}
		return null;
	}
	function Wk(a, b, c, d) {
		do
			Hk();
		while (null !== wk);
		if (0 !== (K & 6)) throw Error(p(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f = c.lanes | c.childLanes;
		Bc(a, f);
		a === Q && (Y = Q = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
			Hk();
			return null;
		}));
		f = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f) {
			f = ok.transition;
			ok.transition = null;
			var g = C;
			C = 1;
			var h = K;
			K |= 4;
			nk.current = null;
			Oj(a, c);
			dk(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			hk(c, a, e);
			dc();
			K = h;
			C = g;
			ok.transition = f;
		} else a.current = c;
		vk && (vk = !1, wk = a, xk = e);
		f = a.pendingLanes;
		0 === f && (Ri = null);
		mc(c.stateNode, d);
		Dk(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
		0 !== (xk & 1) && 0 !== a.tag && Hk();
		f = a.pendingLanes;
		0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		jg();
		return null;
	}
	function Hk() {
		if (null !== wk) {
			var a = Dc(xk), b = ok.transition, c = C;
			try {
				ok.transition = null;
				C = 16 > a ? 16 : a;
				if (null === wk) var d = !1;
				else {
					a = wk;
					wk = null;
					xk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f = V, g = f.child;
						if (0 !== (V.flags & 16)) {
							var h = f.deletions;
							if (null !== h) {
								for (var k = 0; k < h.length; k++) {
									var l = h[k];
									for (V = l; null !== V;) {
										var m = V;
										switch (m.tag) {
											case 0:
											case 11:
											case 15: Pj(8, m, f);
										}
										var q = m.child;
										if (null !== q) q.return = m, V = q;
										else for (; null !== V;) {
											m = V;
											var r = m.sibling, y = m.return;
											Sj(m);
											if (m === l) {
												V = null;
												break;
											}
											if (null !== r) {
												r.return = y;
												V = r;
												break;
											}
											V = y;
										}
									}
								}
								var n = f.alternate;
								if (null !== n) {
									var t = n.child;
									if (null !== t) {
										n.child = null;
										do {
											var J = t.sibling;
											t.sibling = null;
											t = J;
										} while (null !== t);
									}
								}
								V = f;
							}
						}
						if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
						else b: for (; null !== V;) {
							f = V;
							if (0 !== (f.flags & 2048)) switch (f.tag) {
								case 0:
								case 11:
								case 15: Pj(9, f, f.return);
							}
							var x = f.sibling;
							if (null !== x) {
								x.return = f.return;
								V = x;
								break b;
							}
							V = f.return;
						}
					}
					var w = a.current;
					for (V = w; null !== V;) {
						g = V;
						var u = g.child;
						if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
						else b: for (g = w; null !== V;) {
							h = V;
							if (0 !== (h.flags & 2048)) try {
								switch (h.tag) {
									case 0:
									case 11:
									case 15: Qj(9, h);
								}
							} catch (na) {
								W(h, h.return, na);
							}
							if (h === g) {
								V = null;
								break b;
							}
							var F = h.sibling;
							if (null !== F) {
								F.return = h.return;
								V = F;
								break b;
							}
							V = h.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, ok.transition = b;
			}
		}
		return !1;
	}
	function Xk(a, b, c) {
		b = Ji(c, b);
		b = Ni(a, b, 1);
		a = nh(a, b, 1);
		b = R();
		null !== a && (Ac(a, 1, b), Dk(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Xk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Xk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
					a = Ji(c, a);
					a = Qi(b, a, 1);
					b = nh(b, a, 1);
					a = R();
					null !== b && (Ac(b, 1, a), Dk(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = R();
		a.pingedLanes |= a.suspendedLanes & c;
		Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
		Dk(a, b);
	}
	function Yk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = R();
		a = ih(a, b);
		null !== a && (Ac(a, b, c), Dk(a, c));
	}
	function uj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Yk(a, c);
	}
	function bk(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d && d.delete(b);
		Yk(a, c);
	}
	var Vk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
			dh = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				ij(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				ch(b, c);
				e = Nh(null, b, d, a, e, c);
				var f = Sh();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					ij(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = Zk(d);
					a = Ci(d, a);
					switch (e) {
						case 0:
							b = cj(null, b, d, a, c);
							break a;
						case 1:
							b = hj(null, b, d, a, c);
							break a;
						case 11:
							b = Yi(null, b, d, a, c);
							break a;
						case 14:
							b = $i(null, b, d, Ci(d.type, a), c);
							break a;
					}
					throw Error(p(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
			case 3:
				a: {
					kj(b);
					if (null === a) throw Error(p(387));
					d = b.pendingProps;
					f = b.memoizedState;
					e = f.element;
					lh(a, b);
					qh(b, d, null, c);
					var g = b.memoizedState;
					d = g.element;
					if (f.isDehydrated) if (f = {
						element: d,
						isDehydrated: !1,
						cache: g.cache,
						pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
						transitions: g.transitions
					}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
						e = Ji(Error(p(423)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ji(Error(p(424)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = Zi(a, b, c);
							break a;
						}
						Xi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return oj(a, b, c);
			case 4: return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
			case 7: return Xi(a, b, b.pendingProps, c), b.child;
			case 8: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f = b.memoizedProps;
					g = e.value;
					G(Wg, d._currentValue);
					d._currentValue = g;
					if (null !== f) if (He(f.value, g)) {
						if (f.children === e.children && !Wf.current) {
							b = Zi(a, b, c);
							break a;
						}
					} else for (f = b.child, null !== f && (f.return = b); null !== f;) {
						var h = f.dependencies;
						if (null !== h) {
							g = f.child;
							for (var k = h.firstContext; null !== k;) {
								if (k.context === d) {
									if (1 === f.tag) {
										k = mh(-1, c & -c);
										k.tag = 2;
										var l = f.updateQueue;
										if (null !== l) {
											l = l.shared;
											var m = l.pending;
											null === m ? k.next = k : (k.next = m.next, m.next = k);
											l.pending = k;
										}
									}
									f.lanes |= c;
									k = f.alternate;
									null !== k && (k.lanes |= c);
									bh(f.return, c, b);
									h.lanes |= c;
									break;
								}
								k = k.next;
							}
						} else if (10 === f.tag) g = f.type === b.type ? null : f.child;
						else if (18 === f.tag) {
							g = f.return;
							if (null === g) throw Error(p(341));
							g.lanes |= c;
							h = g.alternate;
							null !== h && (h.lanes |= c);
							bh(g, c, b);
							g = f.sibling;
						} else g = f.child;
						if (null !== g) g.return = f;
						else for (g = f; null !== g;) {
							if (g === b) {
								g = null;
								break;
							}
							f = g.sibling;
							if (null !== f) {
								f.return = g.return;
								g = f;
								break;
							}
							g = g.return;
						}
						f = g;
					}
					Xi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
			case 15: return bj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
			case 19: return xj(a, b, c);
			case 22: return dj(a, b, c);
		}
		throw Error(p(156, b.tag));
	};
	function Fk(a, b) {
		return ac(a, b);
	}
	function $k(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new $k(a, b, c, d);
	}
	function aj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function Zk(a) {
		if ("function" === typeof a) return aj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function Pg(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function Rg(a, b, c, d, e, f) {
		var g = 2;
		d = a;
		if ("function" === typeof a) aj(a) && (g = 1);
		else if ("string" === typeof a) g = 5;
		else a: switch (a) {
			case ya: return Tg(c.children, e, f, b);
			case za:
				g = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
			case Ia: return pj(c, e, f, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g = 10;
						break a;
					case Ca:
						g = 9;
						break a;
					case Da:
						g = 11;
						break a;
					case Ga:
						g = 14;
						break a;
					case Ha:
						g = 16;
						d = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f;
		return b;
	}
	function Tg(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function pj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function Qg(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function Sg(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function al(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function bl(a, b, c, d, e, f, g, h, k) {
		a = new al(a, b, c, h, k);
		1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		f = Bg(3, null, null, b);
		a.current = f;
		f.stateNode = a;
		f.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		kh(f);
		return a;
	}
	function cl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function dl(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function el(a, b, c, d, e, f, g, h, k) {
		a = bl(c, d, !0, a, e, f, g, h, k);
		a.context = dl(null);
		c = a.current;
		d = R();
		e = yi(c);
		f = mh(d, e);
		f.callback = void 0 !== b && null !== b ? b : null;
		nh(c, f, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Dk(a, d);
		return a;
	}
	function fl(a, b, c, d) {
		var e = b.current, f = R(), g = yi(e);
		c = dl(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = mh(f, g);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = nh(e, b, g);
		null !== a && (gi(a, e, g, f), oh(a, e, g));
		return g;
	}
	function gl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function hl(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function il(a, b) {
		hl(a, b);
		(a = a.alternate) && hl(a, b);
	}
	function jl() {
		return null;
	}
	var kl = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ll(a) {
		this._internalRoot = a;
	}
	ml.prototype.render = ll.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p(409));
		fl(a, b, null, null);
	};
	ml.prototype.unmount = ll.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Rk(function() {
				fl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function ml(a) {
		this._internalRoot = a;
	}
	ml.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function nl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function pl() {}
	function ql(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f = d;
				d = function() {
					var a = gl(g);
					f.call(a);
				};
			}
			var g = el(b, d, a, 0, null, !1, !1, "", pl);
			a._reactRootContainer = g;
			a[uf] = g.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk();
			return g;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h = d;
			d = function() {
				var a = gl(k);
				h.call(a);
			};
		}
		var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
		a._reactRootContainer = k;
		a[uf] = k.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Rk(function() {
			fl(b, k, c, d);
		});
		return k;
	}
	function rl(a, b, c, d, e) {
		var f = c._reactRootContainer;
		if (f) {
			var g = f;
			if ("function" === typeof e) {
				var h = e;
				e = function() {
					var a = gl(g);
					h.call(a);
				};
			}
			fl(b, g, a, e);
		} else g = ql(c, b, a, e, d);
		return gl(g);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
				}
				break;
			case 13: Rk(function() {
				var b = ih(a, 1);
				if (null !== b) gi(b, a, 1, R());
			}), il(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = ih(a, 134217728);
			if (null !== b) gi(b, a, 134217728, R());
			il(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = yi(a), c = ih(a, b);
			if (null !== c) gi(c, a, b, R());
			il(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Qk;
	Hb = Rk;
	var sl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Qk
		]
	};
	var tl = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	};
	var ul = {
		bundleType: tl.bundleType,
		version: tl.version,
		rendererPackageName: tl.rendererPackageName,
		rendererConfig: tl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!vl.isDisabled && vl.supportsFiber) try {
			kc = vl.inject(ul), lc = vl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!nl(b)) throw Error(p(200));
		return cl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!nl(a)) throw Error(p(299));
		var c = !1, d = "", e = kl;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = bl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ll(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Rk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!nl(a)) throw Error(p(405));
		var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new ml(b);
	};
	exports.render = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!ol(a)) throw Error(p(40));
		return a._reactRootContainer ? (Rk(function() {
			rl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Qk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!ol(c)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return rl(a, b, c, !1, d);
	};
	exports.version = "18.3.1-next-f1338f8080-20240426";
}));
//#endregion
//#region ../../../node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region ../../../node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region src/lib/edid/tables.ts
var import_react = require_react();
var import_client = require_client();
/**
* Positional bit tables from the EDID base block.
*
* These are ORDER-CRITICAL. Every entry's index is its bit position, so an
* insertion anywhere but the end silently rewrites the meaning of an existing
* EDID. Append only.
*/
/** Established Timings I & II, bytes 35-36, MSB of byte 35 first. */
var ESTABLISHED_I_II = [
	"720x400 @70",
	"720x400 @88",
	"640x480 @60",
	"640x480 @67",
	"640x480 @72",
	"640x480 @75",
	"800x600 @56",
	"800x600 @60",
	"800x600 @72",
	"800x600 @75",
	"832x624 @75",
	"1024x768 @87i",
	"1024x768 @60",
	"1024x768 @70",
	"1024x768 @75",
	"1280x1024 @75"
];
/** Byte 37 bit 7. Bits 6-0 of that byte are manufacturer-reserved. */
var ESTABLISHED_EXTRA = "1152x870 @75";
/**
* Established Timings III (descriptor tag 0xF7), bytes 6-17 of the descriptor,
* MSB first. 44 defined slots; the remainder are reserved and stay zero.
*/
var ESTABLISHED_III_MODES = [
	"640x350 @85",
	"640x400 @85",
	"720x400 @85",
	"640x480 @85",
	"848x480 @60",
	"800x600 @85",
	"1024x768 @85",
	"1152x864 @75",
	"1280x768 @60 RB",
	"1280x768 @60",
	"1280x768 @75",
	"1280x768 @85",
	"1280x960 @60",
	"1280x960 @85",
	"1280x1024 @60",
	"1280x1024 @85",
	"1360x768 @60",
	"1440x900 @60 RB",
	"1440x900 @60",
	"1440x900 @75",
	"1440x900 @85",
	"1400x1050 @60 RB",
	"1400x1050 @60",
	"1400x1050 @75",
	"1400x1050 @85",
	"1680x1050 @60 RB",
	"1680x1050 @60",
	"1680x1050 @75",
	"1680x1050 @85",
	"1600x1200 @60",
	"1600x1200 @65",
	"1600x1200 @70",
	"1600x1200 @75",
	"1600x1200 @85",
	"1792x1344 @60",
	"1792x1344 @75",
	"1856x1392 @60",
	"1856x1392 @75",
	"1920x1200 @60 RB",
	"1920x1200 @60",
	"1920x1200 @75",
	"1920x1200 @85",
	"1920x1440 @60",
	"1920x1440 @75"
];
/** Standard Timing aspect ratio field, bits 7-6 of the second byte. */
var STD_ASPECTS = [
	"16:10",
	"4:3",
	"5:4",
	"16:9"
];
/** Digital interface, low nibble of byte 20 when bit 7 is set. */
var DIGITAL_INTERFACES = [
	"undefined",
	"dvi",
	"hdmi-a",
	"hdmi-b",
	"mddi",
	"displayport"
];
/** Colour bit depth, bits 6-4 of byte 20. Index 7 is reserved. */
var BIT_DEPTHS = [
	"undefined",
	6,
	8,
	10,
	12,
	14,
	16
];
/**
* CTA-861 short audio descriptor sample rates, byte 1 bits 6-0, LSB first.
* Bit 7 is reserved.
*/
var CTA_AUDIO_RATES = [
	32,
	44.1,
	48,
	88.2,
	96,
	176.4,
	192
];
//#endregion
//#region src/lib/edid/decode-dtd.ts
var SYNC_TYPES = [
	"analog-composite",
	"bipolar-analog",
	"digital-composite",
	"digital-separate"
];
var STEREO = [
	"none",
	"field-right",
	"field-left",
	"interleaved-right",
	"interleaved-left",
	"interleaved-4way",
	"side-by-side"
];
/**
* Unpack an 18-byte detailed timing descriptor.
*
* Returns null when bytes 0-1 are zero, which marks a DISPLAY descriptor
* (name, range limits, ...) rather than a timing. That sentinel is why a DTD
* can never have a zero pixel clock, and why the caller has to dispatch on it
* before doing anything else.
*
* Lives apart from decode.ts so cta861.ts can use it without importing the
* whole base-block decoder, which imports cta861 in turn.
*/
function decodeDtd(b) {
	const clock10k = b[0] | b[1] << 8;
	if (clock10k === 0) return null;
	const hActive = b[2] | b[4] >> 4 << 8;
	const hBlank = b[3] | (b[4] & 15) << 8;
	const vActive = b[5] | b[7] >> 4 << 8;
	const vBlank = b[6] | (b[7] & 15) << 8;
	const hFront = b[8] | (b[11] >> 6 & 3) << 8;
	const hSync = b[9] | (b[11] >> 4 & 3) << 8;
	const vFront = b[10] >> 4 & 15 | (b[11] >> 2 & 3) << 4;
	const vSync = b[10] & 15 | (b[11] & 3) << 4;
	const flags = b[17];
	const syncType = SYNC_TYPES[flags >> 3 & 3];
	const stereoIdx = (flags >> 5 & 3) << 1 | flags & 1;
	return {
		kind: "dtd",
		timing: {
			hActive,
			hFront,
			hSync,
			hBack: hBlank - hFront - hSync,
			vActive,
			vFront,
			vSync,
			vBack: vBlank - vFront - vSync,
			pixelClockHz: clock10k * 1e4,
			interlaced: !!(flags & 128),
			hSyncPositive: syncType === "digital-separate" ? !!(flags & 2) : false,
			vSyncPositive: syncType === "digital-separate" ? !!(flags & 4) : false
		},
		hSizeMm: b[12] | b[14] >> 4 << 8,
		vSizeMm: b[13] | (b[14] & 15) << 8,
		hBorder: b[15],
		vBorder: b[16],
		syncType,
		stereo: stereoIdx === 0 ? "none" : STEREO[stereoIdx - 1] ?? "none"
	};
}
//#endregion
//#region src/lib/timing/types.ts
var hTotal = (t) => t.hActive + t.hFront + t.hSync + t.hBack;
var vTotal = (t) => t.vActive + t.vFront + t.vSync + t.vBack;
/** Line rate in Hz. */
var hFreq = (t) => t.pixelClockHz / hTotal(t);
/**
* Refresh in Hz.
*
* For an interlaced mode this is the FIELD rate, which is what every EDID field,
* every spec sheet and every operator means by "1080i60". The frame rate is half
* of it. Getting this backwards silently halves or doubles every bandwidth
* number downstream, so the two are never conflated.
*/
var vFreq = (t) => hFreq(t) / vTotal(t);
/** Frames per second — half the field rate when interlaced. */
var frameRate = (t) => t.interlaced ? vFreq(t) / 2 : vFreq(t);
/** A short human label: "1920x1080p60" / "1920x1080i59.94". */
function timingLabel(t) {
	const r = vFreq(t);
	const whole = Math.round(r);
	const text = Math.abs(r - whole) < .01 ? String(whole) : r.toFixed(2);
	return `${t.hActive}x${t.vActive}${t.interlaced ? "i" : "p"}${text}`;
}
var isDisplayIdV2 = (version) => version >= 32;
/** DisplayID's aspect ratio enum, bits 6-4 of the flags byte. */
var DISPLAYID_ASPECTS = [
	"1:1",
	"5:4",
	"4:3",
	"15:9",
	"16:9",
	"16:10",
	"64:27",
	"256:135"
];
/** Type I keeps the aspect in bits 3-0 and has a ninth code, 8 = undefined —
*  which is what the Mac-bonding reference tiles carry. */
var DISPLAYID_V1_ASPECTS = [...DISPLAYID_ASPECTS, "undefined"];
var le16 = (v) => [v & 255, v >> 8 & 255];
function encodeDetailedTiming(t, kind) {
	const m = t.timing;
	const unit = kind === "type1" ? 1e4 : 1e3;
	const clockUnits = Math.round(m.pixelClockHz / unit);
	if (clockUnits < 1 || clockUnits > 16777216) throw new Error(`DisplayID pixel clock ${m.pixelClockHz / 1e3} kHz is out of range`);
	const c = clockUnits - 1;
	const hBlank = m.hFront + m.hSync + m.hBack;
	const vBlank = m.vFront + m.vSync + m.vBack;
	const aspectIdx = Math.max(0, (kind === "type1" ? DISPLAYID_V1_ASPECTS : DISPLAYID_ASPECTS).indexOf(t.aspect));
	const aspectBits = kind === "type1" ? aspectIdx & 15 : aspectIdx << 4;
	return [
		c & 255,
		c >> 8 & 255,
		c >> 16 & 255,
		(t.preferred ? 128 : 0) | aspectBits,
		...le16(m.hActive - 1),
		...le16(hBlank - 1),
		...le16(m.hFront - 1 | (m.hSyncPositive ? 32768 : 0)),
		...le16(m.hSync - 1),
		...le16(m.vActive - 1),
		...le16(vBlank - 1),
		...le16(m.vFront - 1 | (m.vSyncPositive ? 32768 : 0)),
		...le16(m.vSync - 1)
	];
}
var encodeType7Timing = (t) => encodeDetailedTiming(t, "type7");
var encodeType1Timing = (t) => encodeDetailedTiming(t, "type1");
function decodeDetailedTiming(b, kind) {
	const clockHz = ((b[0] | b[1] << 8 | b[2] << 16) + 1) * (kind === "type1" ? 1e4 : 1e3);
	const rd = (i) => b[i] | b[i + 1] << 8;
	const hActive = rd(4) + 1;
	const hBlank = rd(6) + 1;
	const hFront = (rd(8) & 32767) + 1;
	const hSync = rd(10) + 1;
	const vActive = rd(12) + 1;
	const vBlank = rd(14) + 1;
	const vFront = (rd(16) & 32767) + 1;
	const vSync = rd(18) + 1;
	return {
		preferred: !!(b[3] & 128),
		aspect: kind === "type1" ? DISPLAYID_V1_ASPECTS[b[3] & 15] ?? "undefined" : DISPLAYID_ASPECTS[b[3] >> 4 & 7],
		fractional: false,
		timing: {
			hActive,
			hFront,
			hSync,
			hBack: hBlank - hFront - hSync,
			vActive,
			vFront,
			vSync,
			vBack: vBlank - vFront - vSync,
			pixelClockHz: clockHz,
			interlaced: false,
			hSyncPositive: !!(rd(8) & 32768),
			vSyncPositive: !!(rd(16) & 32768)
		}
	};
}
var decodeType7Timing = (b) => decodeDetailedTiming(b, "type7");
var decodeType1Timing = (b) => decodeDetailedTiming(b, "type1");
/**
* Tiled Display Topology payload, 22 bytes. Layout from drm_parse_tiled_block
* (drm_edid.c) and struct displayid_tiled_block, read 2026-09-23:
*
*   0      capabilities; bit 7 = single physical enclosure
*   1      bits 7-4 hTiles-1 (low 4), bits 3-0 vTiles-1 (low 4)
*   2      bits 7-4 hLocation (low 4), bits 3-0 vLocation (low 4)
*   3      the high bits: 7-6 hTiles-1, 5-4 vTiles-1, 3-2 hLocation, 1-0 vLocation
*   4-5    tileWidth-1, LE     6-7   tileHeight-1, LE
*   8-12   bezel               13-21 topology id
*
* Counts and sizes minus one, locations not — the same trap as Type VII.
*/
function encodeTiledTopology(t) {
	const h = t.hTiles - 1;
	const v = t.vTiles - 1;
	for (const [what, n] of [["horizontal tiles", t.hTiles], ["vertical tiles", t.vTiles]]) if (!(n >= 1 && n <= 64)) throw new Error(`tiled topology: ${what} must be 1-64, got ${n}`);
	if (!(t.hLocation >= 0 && t.hLocation < t.hTiles && t.vLocation >= 0 && t.vLocation < t.vTiles)) throw new Error(`tiled topology: location (${t.hLocation},${t.vLocation}) is outside a ${t.hTiles}x${t.vTiles} grid`);
	if (!(t.tileWidth >= 1 && t.tileWidth <= 65536 && t.tileHeight >= 1 && t.tileHeight <= 65536)) throw new Error(`tiled topology: tile ${t.tileWidth}x${t.tileHeight} is out of range`);
	if (t.bezel.length !== 5 || t.topologyId.length !== 9) throw new Error("tiled topology: bezel is 5 bytes and the topology id 9");
	return [
		t.capabilities & 255,
		(h & 15) << 4 | v & 15,
		(t.hLocation & 15) << 4 | t.vLocation & 15,
		(h >> 4 & 3) << 6 | (v >> 4 & 3) << 4 | (t.hLocation >> 4 & 3) << 2 | t.vLocation >> 4 & 3,
		...le16(t.tileWidth - 1),
		...le16(t.tileHeight - 1),
		...t.bezel,
		...t.topologyId
	];
}
function decodeTiledTopology(p) {
	if (p.length < 22) return null;
	const hi = p[3];
	return {
		capabilities: p[0],
		hTiles: (p[1] >> 4 | (hi >> 6 & 3) << 4) + 1,
		vTiles: (p[1] & 15 | (hi >> 4 & 3) << 4) + 1,
		hLocation: p[2] >> 4 | (hi >> 2 & 3) << 4,
		vLocation: p[2] & 15 | (hi & 3) << 4,
		tileWidth: (p[4] | p[5] << 8) + 1,
		tileHeight: (p[6] | p[7] << 8) + 1,
		bezel: p.slice(8, 13),
		topologyId: p.slice(13, 22)
	};
}
function encodeDisplayId(ext) {
	const blocks = [];
	const v2 = isDisplayIdV2(ext.version);
	if (ext.type1Timings?.length) {
		const payload = ext.type1Timings.flatMap(encodeType1Timing);
		if (payload.length > 255) throw new Error(`${ext.type1Timings.length} DisplayID timings exceed one data block; split them across extensions`);
		blocks.push(3, 1, payload.length, ...payload);
	}
	if (ext.tiled && !v2) {
		const payload = encodeTiledTopology(ext.tiled);
		blocks.push(18, 0, payload.length, ...payload);
	}
	if (ext.type7Timings.length) {
		const payload = ext.type7Timings.flatMap(encodeType7Timing);
		if (payload.length > 255) throw new Error(`${ext.type7Timings.length} DisplayID timings exceed one data block; split them across extensions`);
		blocks.push(34, 1, payload.length, ...payload);
	}
	if (ext.interfaceFeatures) {
		const f = ext.interfaceFeatures;
		const bpcMask = (set) => (set.includes(6) ? 1 : 0) | (set.includes(8) ? 2 : 0) | (set.includes(10) ? 4 : 0) | (set.includes(12) ? 8 : 0) | (set.includes(14) ? 16 : 0) | (set.includes(16) ? 32 : 0);
		const payload = [
			Math.round(f.minPixelRateAudioMHz),
			bpcMask(f.bpc),
			bpcMask(f.bpc),
			bpcMask(f.bpc),
			bpcMask(f.bpc),
			0,
			0,
			f.dscPassthrough ? 1 : 0
		];
		blocks.push(38, 0, payload.length, ...payload);
	}
	if (ext.tiled && v2) {
		const payload = encodeTiledTopology(ext.tiled);
		blocks.push(40, 0, payload.length, ...payload);
	}
	for (const u of ext.unknownBlocks) blocks.push(...u);
	if (blocks.length > 121) throw new Error(`DisplayID section is ${blocks.length} bytes; one extension block holds at most 121`);
	const declared = Math.min(121, Math.max(blocks.length, ext.sectionLength ?? 0));
	while (blocks.length < declared) blocks.push(0);
	const section = [
		ext.version,
		blocks.length,
		ext.primaryUseCase,
		ext.extensionCount ?? 0,
		...blocks
	];
	const sum = section.reduce((a, b) => a + b, 0);
	section.push((256 - sum % 256) % 256);
	const out = [112, ...section];
	while (out.length < 127) out.push(0);
	out.push(checksum(out));
	return out;
}
function decodeDisplayId(bytes) {
	const ext = {
		kind: "displayid",
		version: bytes[1],
		primaryUseCase: bytes[3],
		extensionCount: bytes[4],
		type7Timings: [],
		unknownBlocks: []
	};
	const v2 = isDisplayIdV2(ext.version);
	const payloadBytes = bytes[2];
	let i = 5;
	const end = Math.min(5 + payloadBytes, 127);
	while (i + 3 <= end) {
		const tag = bytes[i];
		const len = bytes[i + 2];
		if (tag === 0 && len === 0) break;
		const payload = bytes.slice(i + 3, i + 3 + len);
		const tiled = v2 ? tag === 40 : tag === 18;
		if (!v2 && tag === 3) {
			ext.type1Timings ??= [];
			for (let k = 0; k + 20 <= payload.length; k += 20) ext.type1Timings.push(decodeType1Timing(payload.slice(k, k + 20)));
		} else if (tiled && !ext.tiled && decodeTiledTopology(payload)) ext.tiled = decodeTiledTopology(payload);
		else if (tag === 34) for (let k = 0; k + 20 <= payload.length; k += 20) ext.type7Timings.push(decodeType7Timing(payload.slice(k, k + 20)));
		else if (tag === 38) {
			const bpc = [];
			const m = payload[1] ?? 0;
			[
				6,
				8,
				10,
				12,
				14,
				16
			].forEach((d, bit) => {
				if (m & 1 << bit) bpc.push(d);
			});
			ext.interfaceFeatures = {
				bpc,
				dscPassthrough: !!(payload[7] & 1),
				minPixelRateAudioMHz: payload[0] ?? 0
			};
		} else ext.unknownBlocks.push(bytes.slice(i, i + 3 + len));
		i += 3 + len;
	}
	if (payloadBytes > i - 5) ext.sectionLength = payloadBytes;
	return ext;
}
//#endregion
//#region src/lib/edid/encode.ts
var EncodeError = class extends Error {
	field;
	constructor(field, message) {
		super(`${field}: ${message}`);
		this.field = field;
		this.name = "EncodeError";
	}
};
function u8(field, v) {
	const n = Math.round(v);
	if (n < 0 || n > 255) throw new EncodeError(field, `${v} does not fit in a byte`);
	return n;
}
/** Sum of the block must be 0 mod 256; the last byte carries the difference. */
function checksum(block) {
	return (256 - block.slice(0, 127).reduce((a, b) => a + b, 0) % 256) % 256;
}
/**
* Manufacturer ID: three 5-bit letters packed big-endian into two bytes, A = 1.
*
* The high bit is reserved and must be zero, which is why only 15 of the 16
* bits carry data and why 'ZZZ' is legal but '\0AA' is not.
*/
function encodeManufacturer(id) {
	const s = id.toUpperCase().trim();
	if (!/^[A-Z]{3}$/.test(s)) throw new EncodeError("manufacturerId", `"${id}" must be exactly three letters A-Z`);
	const n = s.charCodeAt(0) - 64 << 10 | s.charCodeAt(1) - 64 << 5 | s.charCodeAt(2) - 64;
	return [n >> 8 & 255, n & 255];
}
/** 10-bit CIE 1931 fraction. 0.640 becomes 655. */
var chromaValue = (field, v) => {
	if (v < 0 || v >= 1) throw new EncodeError(field, `${v} must be in [0, 1)`);
	return Math.round(v * 1024);
};
function encodeChromaticity(c) {
	const rx = chromaValue("redX", c.redX);
	const ry = chromaValue("redY", c.redY);
	const gx = chromaValue("greenX", c.greenX);
	const gy = chromaValue("greenY", c.greenY);
	const bx = chromaValue("blueX", c.blueX);
	const by = chromaValue("blueY", c.blueY);
	const wx = chromaValue("whiteX", c.whiteX);
	const wy = chromaValue("whiteY", c.whiteY);
	return [
		(rx & 3) << 6 | (ry & 3) << 4 | (gx & 3) << 2 | gy & 3,
		(bx & 3) << 6 | (by & 3) << 4 | (wx & 3) << 2 | wy & 3,
		rx >> 2,
		ry >> 2,
		gx >> 2,
		gy >> 2,
		bx >> 2,
		by >> 2,
		wx >> 2,
		wy >> 2
	];
}
function encodeStandardTiming(st) {
	if (!st) return [1, 1];
	const code = st.hActive / 8 - 31;
	if (!Number.isInteger(code) || code < 1 || code > 255) throw new EncodeError("standardTiming", `${st.hActive} px is not expressible — must be a multiple of 8 from 256 to 2288`);
	const aspect = STD_ASPECTS.indexOf(st.aspect);
	if (aspect < 0) throw new EncodeError("standardTiming", `unknown aspect ${st.aspect}`);
	const rr = Math.round(st.refreshHz) - 60;
	if (rr < 0 || rr > 63) throw new EncodeError("standardTiming", `${st.refreshHz} Hz is out of range — a standard timing can only say 60-123 Hz`);
	return [code, aspect << 6 | rr];
}
/**
* An 18-byte Detailed Timing Descriptor.
*
* The pixel clock field is 10 kHz units, so an exact clock that is not a
* multiple of 10 kHz cannot be represented — 25.175 MHz becomes 25.18. That
* loss is real and is reported by `dtdClockError`, not hidden.
*/
function encodeDtd(d) {
	const t = d.timing;
	const clock10k = Math.round(t.pixelClockHz / 1e4);
	if (clock10k < 1 || clock10k > 65535) throw new EncodeError("pixelClock", `${(t.pixelClockHz / 1e6).toFixed(3)} MHz is outside what a DTD can state (0.01-655.35 MHz). Above 655.35 MHz the timing has to live in a DisplayID Type VII block instead.`);
	const hBlank = t.hFront + t.hSync + t.hBack;
	const vBlank = t.vFront + t.vSync + t.vBack;
	if (t.hActive > 4095) throw new EncodeError("hActive", `${t.hActive} exceeds the 12-bit field (4095)`);
	if (hBlank > 4095) throw new EncodeError("hBlank", `${hBlank} exceeds the 12-bit field (4095)`);
	if (t.vActive > 4095) throw new EncodeError("vActive", `${t.vActive} exceeds the 12-bit field (4095)`);
	if (vBlank > 4095) throw new EncodeError("vBlank", `${vBlank} exceeds the 12-bit field (4095)`);
	if (t.hFront > 1023) throw new EncodeError("hFront", `${t.hFront} exceeds the 10-bit field (1023)`);
	if (t.hSync > 1023) throw new EncodeError("hSync", `${t.hSync} exceeds the 10-bit field (1023)`);
	if (t.vFront > 63) throw new EncodeError("vFront", `${t.vFront} exceeds the 6-bit field (63)`);
	if (t.vSync > 63) throw new EncodeError("vSync", `${t.vSync} exceeds the 6-bit field (63)`);
	const syncBits = {
		"analog-composite": 0,
		"bipolar-analog": 1,
		"digital-composite": 2,
		"digital-separate": 3
	}[d.syncType];
	const stereoIdx = [
		"none",
		"field-right",
		"field-left",
		"interleaved-right",
		"interleaved-left",
		"interleaved-4way",
		"side-by-side"
	].indexOf(d.stereo);
	const stereoHi = stereoIdx <= 0 ? 0 : stereoIdx + 1 >> 1;
	const stereoLo = stereoIdx <= 0 ? 0 : stereoIdx + 1 & 1;
	let flags = (t.interlaced ? 128 : 0) | (stereoHi & 3) << 5 | syncBits << 3 | stereoLo;
	if (syncBits === 3) flags |= (t.vSyncPositive ? 4 : 0) | (t.hSyncPositive ? 2 : 0);
	return [
		clock10k & 255,
		clock10k >> 8 & 255,
		t.hActive & 255,
		hBlank & 255,
		t.hActive >> 8 << 4 | hBlank >> 8,
		t.vActive & 255,
		vBlank & 255,
		t.vActive >> 8 << 4 | vBlank >> 8,
		t.hFront & 255,
		t.hSync & 255,
		(t.vFront & 15) << 4 | t.vSync & 15,
		t.hFront >> 8 << 6 | t.hSync >> 8 << 4 | t.vFront >> 4 << 2 | t.vSync >> 4,
		u8("hSizeMm", d.hSizeMm & 255),
		u8("vSizeMm", d.vSizeMm & 255),
		d.hSizeMm >> 8 << 4 | d.vSizeMm >> 8,
		u8("hBorder", d.hBorder),
		u8("vBorder", d.vBorder),
		flags
	];
}
/**
* Why this timing will not fit an 18-byte detailed timing descriptor, or null
* if it does fit.
*
* The clock ceiling is the famous one, but it is NOT the only limit and often
* not the one that bites first: active and blanking are 12-bit fields, so
* anything wider than 4095 pixels is out no matter how slow it is. An
* 8192x1080 @60 wide format — which Analog Way advertise on the Aquilon input
* cards — has a perfectly ordinary 594 MHz clock and still cannot be a DTD.
*/
function dtdLimit(t) {
	const hBlank = t.hFront + t.hSync + t.hBack;
	const vBlank = t.vFront + t.vSync + t.vBack;
	if (Math.round(t.pixelClockHz / 1e4) > 65535) return `a ${(t.pixelClockHz / 1e6).toFixed(2)} MHz pixel clock is above the 655.35 MHz a detailed timing descriptor can state`;
	if (t.hActive > 4095) return `${t.hActive} active pixels exceeds the descriptor's 12-bit field (4095 max)`;
	if (t.vActive > 4095) return `${t.vActive} active lines exceeds the descriptor's 12-bit field (4095 max)`;
	if (hBlank > 4095) return `${hBlank} pixels of horizontal blanking exceeds the descriptor's 12-bit field`;
	if (vBlank > 4095) return `${vBlank} lines of vertical blanking exceeds the descriptor's 12-bit field`;
	if (t.hFront > 1023) return `a ${t.hFront} pixel front porch exceeds the descriptor's 10-bit field`;
	if (t.hSync > 1023) return `a ${t.hSync} pixel sync width exceeds the descriptor's 10-bit field`;
	if (t.vFront > 63) return `a ${t.vFront} line front porch exceeds the descriptor's 6-bit field`;
	if (t.vSync > 63) return `a ${t.vSync} line sync width exceeds the descriptor's 6-bit field`;
	return null;
}
function textDescriptor(tag, text) {
	const bytes = [
		0,
		0,
		0,
		tag,
		0
	];
	const chars = [...text].slice(0, 13);
	for (const ch of chars) {
		const c = ch.codePointAt(0) ?? 32;
		bytes.push(c > 0 && c < 127 ? c : 32);
	}
	if (chars.length < 13) {
		bytes.push(10);
		while (bytes.length < 18) bytes.push(32);
	}
	return bytes.slice(0, 18);
}
function encodeRange(d) {
	let vMin = Math.round(d.minVerticalHz);
	let vMax = Math.round(d.maxVerticalHz);
	let hMin = Math.round(d.minHorizontalKHz);
	let hMax = Math.round(d.maxHorizontalKHz);
	let offsets = 0;
	if (vMax > 255) {
		offsets |= vMin > 255 ? 3 : 2;
		vMax -= 255;
		if (vMin > 255) vMin -= 255;
	}
	if (hMax > 255) {
		offsets |= hMin > 255 ? 12 : 8;
		hMax -= 255;
		if (hMin > 255) hMin -= 255;
	}
	if (vMax > 255 || hMax > 255) throw new EncodeError("rangeLimits", "rates above 510 Hz / 510 kHz cannot be stated in a range descriptor");
	const clock = Math.ceil(d.maxPixelClockMHz / 10);
	if (clock > 255) throw new EncodeError("maxPixelClockMHz", `${d.maxPixelClockMHz} MHz exceeds the 2550 MHz field maximum`);
	const support = {
		"default-gtf": 0,
		"range-limits-only": 1,
		"secondary-gtf": 2,
		cvt: 4
	}[d.support];
	const head = [
		0,
		0,
		0,
		253,
		offsets,
		vMin,
		vMax,
		hMin,
		hMax,
		clock,
		support
	];
	if (d.support === "cvt" && d.cvt) {
		const c = d.cvt;
		const maxPx = Math.round(c.maxActivePixelsPerLine / 8);
		const aspectBits = (c.supportedAspects.includes("4:3") ? 128 : 0) | (c.supportedAspects.includes("16:9") ? 64 : 0) | (c.supportedAspects.includes("16:10") ? 32 : 0) | (c.supportedAspects.includes("5:4") ? 16 : 0);
		const prefIdx = {
			"4:3": 0,
			"16:9": 1,
			"16:10": 2,
			"5:4": 3
		}[c.preferredAspect] ?? 0;
		return [
			...head,
			c.version,
			maxPx >> 8,
			maxPx & 255,
			aspectBits,
			prefIdx << 5 | (c.reducedBlanking ? 16 : 0) | (c.standardBlanking ? 8 : 0),
			(c.scalingHorizontalShrink ? 128 : 0) | (c.scalingHorizontalStretch ? 64 : 0) | (c.scalingVerticalShrink ? 32 : 0) | (c.scalingVerticalStretch ? 16 : 0),
			Math.round(c.preferredRefreshHz)
		];
	}
	return [
		...head,
		10,
		32,
		32,
		32,
		32,
		32,
		32
	];
}
function encodeDescriptor(d) {
	switch (d.kind) {
		case "dtd": return encodeDtd(d);
		case "name": return textDescriptor(252, d.text);
		case "serial": return textDescriptor(255, d.text);
		case "text": return textDescriptor(254, d.text);
		case "range": return encodeRange(d);
		case "established-iii": {
			const bytes = [
				0,
				0,
				0,
				247,
				10,
				...new Array(12).fill(0),
				0
			];
			for (const mode of d.modes) {
				const idx = ESTABLISHED_III_MODES.indexOf(mode);
				if (idx < 0) continue;
				bytes[5 + (idx >> 3)] |= 128 >> (idx & 7);
			}
			return bytes.slice(0, 18);
		}
		case "dummy": return [
			0,
			0,
			0,
			16,
			0,
			...new Array(13).fill(0)
		];
		case "raw": {
			const b = d.bytes.slice(0, 18);
			while (b.length < 18) b.push(0);
			return b;
		}
	}
}
/** The 128-byte base block, checksum included. */
function encodeBaseBlock(e) {
	const b = [];
	b.push(0, 255, 255, 255, 255, 255, 255, 0);
	b.push(...encodeManufacturer(e.manufacturerId));
	b.push(e.productCode & 255, e.productCode >> 8 & 255);
	b.push(e.serialNumber & 255, e.serialNumber >> 8 & 255, e.serialNumber >> 16 & 255, e.serialNumber >>> 24 & 255);
	b.push(e.isModelYear ? 255 : u8("week", e.week));
	const yearByte = e.year - 1990;
	if (yearByte < 0 || yearByte > 255) throw new EncodeError("year", `${e.year} is outside 1990-2245`);
	b.push(yearByte);
	b.push(u8("version", e.version), u8("revision", e.revision));
	if (e.input.kind === "digital") {
		const depth = BIT_DEPTHS.indexOf(e.input.bitDepth);
		const iface = DIGITAL_INTERFACES.indexOf(e.input.interface);
		if (depth < 0) throw new EncodeError("bitDepth", `unknown depth ${e.input.bitDepth}`);
		if (iface < 0) throw new EncodeError("interface", `unknown interface ${e.input.interface}`);
		b.push(128 | depth << 4 | iface);
	} else {
		const a = e.input;
		b.push(a.levels << 5 | (a.blankToBlackSetup ? 16 : 0) | (a.separateSyncSupported ? 8 : 0) | (a.compositeSyncSupported ? 4 : 0) | (a.syncOnGreenSupported ? 2 : 0) | (a.vsyncSerrated ? 1 : 0));
	}
	b.push(u8("screenWidthCm", e.screenWidthCm), u8("screenHeightCm", e.screenHeightCm));
	if (e.gamma === null) b.push(255);
	else {
		const g = Math.round(e.gamma * 100) - 100;
		if (g < 0 || g > 254) throw new EncodeError("gamma", `${e.gamma} is outside 1.00-3.54`);
		b.push(g);
	}
	const f = e.features;
	const enc = [
		"rgb444",
		"rgb444-ycrcb444",
		"rgb444-ycrcb422",
		"rgb444-ycrcb444-ycrcb422"
	].indexOf(f.colorEncoding);
	b.push((f.standby ? 128 : 0) | (f.suspend ? 64 : 0) | (f.activeOff ? 32 : 0) | enc << 3 | (f.srgbDefault ? 4 : 0) | (f.preferredTimingIsNative ? 2 : 0) | (f.continuousFrequency ? 1 : 0));
	b.push(...encodeChromaticity(e.chromaticity));
	let est0 = 0;
	let est1 = 0;
	ESTABLISHED_I_II.forEach((mode, i) => {
		if (!e.established[mode]) return;
		if (i < 8) est0 |= 128 >> i;
		else est1 |= 128 >> i - 8;
	});
	b.push(est0, est1, e.established["1152x870 @75"] ? 128 : 0);
	for (let i = 0; i < 8; i++) b.push(...encodeStandardTiming(e.standardTimings[i] ?? null));
	for (let i = 0; i < 4; i++) {
		const d = e.descriptors[i] ?? { kind: "dummy" };
		b.push(...encodeDescriptor(d));
	}
	b.push(e.extensions.length);
	b.push(checksum(b));
	if (b.length !== 128) throw new EncodeError("base", `produced ${b.length} bytes, expected 128 — this is a bug`);
	return b;
}
/** The whole EDID: base block plus every extension, each 128 bytes. */
function encodeEdid(e) {
	const out = [...encodeBaseBlock(e)];
	for (const ext of e.extensions) switch (ext.kind) {
		case "cta":
			out.push(...encodeCta(ext));
			break;
		case "displayid":
			out.push(...encodeDisplayId(ext));
			break;
		case "raw": {
			const bl = ext.bytes.slice(0, 128);
			while (bl.length < 127) bl.push(0);
			bl[127] = checksum(bl);
			out.push(...bl);
			break;
		}
	}
	return Uint8Array.from(out);
}
//#endregion
//#region src/lib/edid/cta861.ts
/**
* CTA-861 extension block (tag 0x02).
*
* Layout: a four-byte header, then a data block collection, then detailed
* timings, then padding, then the checksum. Header byte 2 is the offset at
* which the timings start, which means the data block collection's total size
* is not stated anywhere — it is inferred from that offset. Get it wrong and
* a sink reads the first DTD as a data block header.
*
* The HDMI Forum VSDB bit assignments below follow edid-decode's reading of
* HDMI 2.1. They are NOT verified against a device here; see AGENTS.md.
*/
var HDMI_OUI = [
	3,
	12,
	0
];
var HDMI_FORUM_OUI = [
	216,
	93,
	196
];
function block(tag, payload) {
	if (payload.length > 31) throw new Error(`CTA data block tag ${tag}: ${payload.length} bytes exceeds the 31-byte maximum`);
	return [tag << 5 | payload.length, ...payload];
}
var extBlock = (extTag, payload) => block(7, [extTag, ...payload]);
function encodeAudioDescriptor(a) {
	let rateBits = 0;
	for (const r of a.rates) {
		const i = CTA_AUDIO_RATES.indexOf(r);
		if (i >= 0) rateBits |= 1 << i;
	}
	let third = 0;
	if (a.format === 1) for (const d of a.lpcmDepths ?? []) {
		if (d === 16) third |= 1;
		if (d === 20) third |= 2;
		if (d === 24) third |= 4;
	}
	else third = Math.round((a.maxBitrateKbps ?? 0) / 8);
	return [
		(a.format & 15) << 3 | a.channels - 1 & 7,
		rateBits,
		third
	];
}
function encodeHdmiVsdb(v) {
	const [a, b, c, d] = v.physicalAddress;
	const payload = [
		...HDMI_OUI,
		(a & 15) << 4 | b & 15,
		(c & 15) << 4 | d & 15,
		(v.supportsAi ? 128 : 0) | (v.deepColor48 ? 64 : 0) | (v.deepColor36 ? 32 : 0) | (v.deepColor30 ? 16 : 0) | (v.deepColorY444 ? 8 : 0) | (v.dviDual ? 1 : 0)
	];
	if (v.maxTmdsClockMHz > 0) payload.push(Math.round(v.maxTmdsClockMHz / 5));
	return block(3, payload);
}
function encodeHdmiForumVsdb(v) {
	const payload = [
		...HDMI_FORUM_OUI,
		v.version & 255,
		Math.round(v.maxTmdsCharacterRateMHz / 5),
		(v.scdcPresent ? 128 : 0) | (v.rrCapable ? 64 : 0) | (v.lte340ScrambleSupported ? 8 : 0),
		(v.maxFrlRate & 15) << 4 | (v.deepColor420_48 ? 4 : 0) | (v.deepColor420_36 ? 2 : 0) | (v.deepColor420_30 ? 1 : 0),
		(v.allmSupported ? 8 : 0) | (v.fvaSupported ? 16 : 0) | (v.cnmVrr ? 32 : 0) | (v.cinemaVrr ? 64 : 0) | (v.mDelta ? 128 : 0)
	];
	const needsVrr = v.vrrMin > 0 || v.vrrMax > 0;
	const needsDsc = v.dscCapable;
	if (needsVrr || needsDsc || v.qmsSupported) {
		payload.push((v.vrrMax >> 8 & 3) << 6 | v.vrrMin & 63);
		payload.push(v.vrrMax & 255);
	}
	if (needsDsc || v.qmsSupported) {
		payload.push((v.dscCapable ? 128 : 0) | (v.dscNative420 ? 64 : 0) | (v.qmsSupported ? 32 : 0) | (v.dscAllBpp ? 16 : 0) | (v.dsc12bpc ? 4 : 0) | (v.dsc10bpc ? 2 : 0));
		payload.push((v.dscMaxFrlRate & 15) << 4 | v.dscMaxSlices & 15);
		payload.push(v.dscTotalChunkKBytes & 63);
	}
	return block(3, payload);
}
function encodeHdr(h) {
	const payload = [(h.eotfSdr ? 1 : 0) | (h.eotfHdr ? 2 : 0) | (h.eotfSmpte2084 ? 4 : 0) | (h.eotfHlg ? 8 : 0), h.staticMetadataType1 ? 1 : 0];
	if (h.maxLuminance !== void 0) payload.push(h.maxLuminance & 255);
	if (h.maxFrameAverageLuminance !== void 0) payload.push(h.maxFrameAverageLuminance & 255);
	if (h.minLuminance !== void 0) payload.push(h.minLuminance & 255);
	return extBlock(6, payload);
}
function encodeColorimetry(c) {
	return extBlock(5, [(c.xvYCC601 ? 1 : 0) | (c.xvYCC709 ? 2 : 0) | (c.sYCC601 ? 4 : 0) | (c.opYCC601 ? 8 : 0) | (c.opRGB ? 16 : 0) | (c.bt2020cYCC ? 32 : 0) | (c.bt2020YCC ? 64 : 0) | (c.bt2020RGB ? 128 : 0), (c.dciP3 ? 128 : 0) | (c.md[0] ? 1 : 0) | (c.md[1] ? 2 : 0) | (c.md[2] ? 4 : 0) | (c.md[3] ? 8 : 0)]);
}
function encodeVideoCapability(v) {
	return extBlock(0, [(v.qySelectableYcc ? 128 : 0) | (v.qsSelectableRgb ? 64 : 0) | (v.ptScan & 3) << 4 | (v.itScan & 3) << 2 | v.ceScan & 3]);
}
/**
* A canonical serialisation: sorted keys, undefined dropped. The UI edits by
* spreading, so key order is not something to compare on.
*/
function canonical(v) {
	if (Array.isArray(v)) return `[${v.map(canonical).join(",")}]`;
	if (v && typeof v === "object") {
		const o = v;
		return `{${Object.keys(o).filter((k) => o[k] !== void 0).sort().map((k) => `${JSON.stringify(k)}:${canonical(o[k])}`).join(",")}}`;
	}
	return JSON.stringify(v) ?? "null";
}
/** The model fields each data block decodes into — what an edit changes. */
var FIELDS = {
	video: (e) => e.videoDescriptors,
	audio: (e) => e.audioDescriptors,
	speaker: (e) => e.speakerAllocation,
	hdmi: (e) => e.hdmiVsdb,
	videoCapability: (e) => e.videoCapability,
	colorimetry: (e) => e.colorimetry,
	hdr: (e) => e.hdrStaticMetadata,
	ycbcr420Only: (e) => e.ycbcr420OnlyVics,
	ycbcr420Also: (e) => e.ycbcr420AlsoVics,
	hdmiForum: (e) => e.hdmiForumVsdb
};
var modelOf = (e, key) => canonical(FIELDS[key](e));
var wholeModelOf = (e) => canonical({
	...e,
	source: void 0
});
/** Each modelled block from scratch, or null when there is nothing to say.
*  The object's key order is the order a block built here is written in. */
function freshBlocks(ext) {
	return {
		video: ext.videoDescriptors.length ? block(2, ext.videoDescriptors.map((v) => v.vic <= 64 && v.native ? v.vic | 128 : v.vic & 255)) : null,
		audio: ext.audioDescriptors.length ? block(1, ext.audioDescriptors.flatMap(encodeAudioDescriptor)) : null,
		speaker: ext.speakerAllocation !== void 0 ? block(4, [
			ext.speakerAllocation & 255,
			0,
			0
		]) : null,
		hdmi: ext.hdmiVsdb ? encodeHdmiVsdb(ext.hdmiVsdb) : null,
		videoCapability: ext.videoCapability ? encodeVideoCapability(ext.videoCapability) : null,
		colorimetry: ext.colorimetry ? encodeColorimetry(ext.colorimetry) : null,
		hdr: ext.hdrStaticMetadata ? encodeHdr(ext.hdrStaticMetadata) : null,
		ycbcr420Only: ext.ycbcr420OnlyVics.length ? extBlock(14, ext.ycbcr420OnlyVics.map((v) => v & 255)) : null,
		ycbcr420Also: ext.ycbcr420AlsoVics.length ? encodeYcbcr420Map(ext.ycbcr420AlsoVics) : null,
		hdmiForum: ext.hdmiForumVsdb ? encodeHdmiForumVsdb(ext.hdmiForumVsdb) : null
	};
}
function encodeYcbcr420Map(indices) {
	const bytes = [];
	for (const idx of indices) {
		const byte = idx >> 3;
		while (bytes.length <= byte) bytes.push(0);
		bytes[byte] |= 1 << (idx & 7);
	}
	return extBlock(15, bytes);
}
/**
* The data block collection. A decoded block keeps its original order, and
* each block whose fields are unedited goes back out as the bytes it came in
* as. A field that has been edited is re-encoded where its block was; one the
* decoded EDID never had is appended, in this encoder's own order.
*/
function encodeDataBlocks(ext) {
	const fresh = freshBlocks(ext);
	const dbc = [];
	const done = /* @__PURE__ */ new Set();
	let unknown = 0;
	for (const b of ext.source?.blocks ?? []) {
		if (b.key === "unknown") {
			if (unknown < ext.unknownBlocks.length) dbc.push(...ext.unknownBlocks[unknown++]);
			continue;
		}
		const now = fresh[b.key];
		if (!now) continue;
		if (modelOf(ext, b.key) === b.model) dbc.push(...b.bytes);
		else if (!done.has(b.key)) dbc.push(...now);
		done.add(b.key);
	}
	for (const [key, bytes] of Object.entries(fresh)) if (bytes && !done.has(key)) dbc.push(...bytes);
	for (; unknown < ext.unknownBlocks.length; unknown++) dbc.push(...ext.unknownBlocks[unknown]);
	return dbc;
}
function encodeCta(ext) {
	if (ext.source && wholeModelOf(ext) === ext.source.model) return [...ext.source.bytes, checksum(ext.source.bytes)];
	const dbc = encodeDataBlocks(ext);
	const dtds = ext.detailedTimings.flatMap(encodeDtd);
	const dtdOffset = 4 + dbc.length;
	if (dtdOffset + dtds.length > 127) throw new Error(`CTA extension overflows: ${dbc.length} bytes of data blocks plus ${ext.detailedTimings.length} detailed timings needs ${dtdOffset + dtds.length} of 127 bytes. Drop a timing, or move it to a DisplayID block.`);
	const nativeDtds = Math.min(ext.detailedTimings.length, ext.source?.nativeDtds ?? 15, 15);
	const out = [
		2,
		ext.revision,
		dtds.length ? dtdOffset : 0,
		(ext.underscanIt ? 128 : 0) | (ext.basicAudio ? 64 : 0) | (ext.ycbcr444 ? 32 : 0) | (ext.ycbcr422 ? 16 : 0) | nativeDtds,
		...dbc,
		...dtds
	];
	while (out.length < 127) out.push(0);
	out.push(checksum(out));
	return out;
}
function decodeAudioDescriptor(b) {
	const format = b[0] >> 3 & 15;
	const a = {
		format,
		channels: (b[0] & 7) + 1,
		rates: CTA_AUDIO_RATES.filter((_, i) => b[1] & 1 << i)
	};
	if (format === 1) a.lpcmDepths = [
		16,
		20,
		24
	].filter((_, i) => b[2] & 1 << i);
	else a.maxBitrateKbps = b[2] * 8;
	return a;
}
function decodeCta(bytes) {
	const ext = {
		kind: "cta",
		revision: bytes[1],
		underscanIt: !!(bytes[3] & 128),
		basicAudio: !!(bytes[3] & 64),
		ycbcr444: !!(bytes[3] & 32),
		ycbcr422: !!(bytes[3] & 16),
		videoDescriptors: [],
		audioDescriptors: [],
		ycbcr420OnlyVics: [],
		ycbcr420AlsoVics: [],
		detailedTimings: [],
		unknownBlocks: []
	};
	const dtdOffset = bytes[2];
	const dbcEnd = dtdOffset === 0 ? 127 : dtdOffset;
	const read = [];
	let i = 4;
	while (i < dbcEnd && i < 127) {
		const tag = bytes[i] >> 5;
		const len = bytes[i] & 31;
		if (len === 0 && tag === 0) break;
		const payload = bytes.slice(i + 1, i + 1 + len);
		const whole = bytes.slice(i, i + 1 + len);
		let key = "unknown";
		switch (tag) {
			case 1:
				key = "audio";
				for (let k = 0; k + 2 < payload.length + 1 && k + 3 <= payload.length; k += 3) ext.audioDescriptors.push(decodeAudioDescriptor(payload.slice(k, k + 3)));
				break;
			case 2:
				key = "video";
				for (const v of payload) {
					const vic = v & 127;
					ext.videoDescriptors.push(vic <= 64 ? {
						vic,
						native: !!(v & 128)
					} : {
						vic: v,
						native: false
					});
				}
				break;
			case 3:
				if (payload[0] === 3 && payload[1] === 12 && payload[2] === 0) {
					ext.hdmiVsdb = {
						physicalAddress: [
							payload[3] >> 4,
							payload[3] & 15,
							payload[4] >> 4,
							payload[4] & 15
						],
						supportsAi: !!(payload[5] & 128),
						deepColor48: !!(payload[5] & 64),
						deepColor36: !!(payload[5] & 32),
						deepColor30: !!(payload[5] & 16),
						deepColorY444: !!(payload[5] & 8),
						dviDual: !!(payload[5] & 1),
						maxTmdsClockMHz: payload.length > 6 ? payload[6] * 5 : 0
					};
					key = "hdmi";
				} else if (payload[0] === 216 && payload[1] === 93 && payload[2] === 196) {
					const p = payload.slice(3);
					ext.hdmiForumVsdb = {
						version: p[0],
						maxTmdsCharacterRateMHz: (p[1] ?? 0) * 5,
						scdcPresent: !!(p[2] & 128),
						rrCapable: !!(p[2] & 64),
						lte340ScrambleSupported: !!(p[2] & 8),
						maxFrlRate: p[3] >> 4 & 15,
						deepColor420_48: !!(p[3] & 4),
						deepColor420_36: !!(p[3] & 2),
						deepColor420_30: !!(p[3] & 1),
						mDelta: !!(p[4] & 128),
						cinemaVrr: !!(p[4] & 64),
						cnmVrr: !!(p[4] & 32),
						fvaSupported: !!(p[4] & 16),
						allmSupported: !!(p[4] & 8),
						vrrMin: p.length > 5 ? p[5] & 63 : 0,
						vrrMax: p.length > 6 ? (p[5] >> 6 & 3) << 8 | p[6] : 0,
						dscCapable: p.length > 7 ? !!(p[7] & 128) : false,
						dscNative420: p.length > 7 ? !!(p[7] & 64) : false,
						qmsSupported: p.length > 7 ? !!(p[7] & 32) : false,
						dscAllBpp: p.length > 7 ? !!(p[7] & 16) : false,
						dsc12bpc: p.length > 7 ? !!(p[7] & 4) : false,
						dsc10bpc: p.length > 7 ? !!(p[7] & 2) : false,
						dscMaxFrlRate: p.length > 8 ? p[8] >> 4 & 15 : 0,
						dscMaxSlices: p.length > 8 ? p[8] & 15 : 0,
						dscTotalChunkKBytes: p.length > 9 ? p[9] & 63 : 0,
						qmsTfrMin: false,
						qmsTfrMax: false
					};
					key = "hdmiForum";
				} else ext.unknownBlocks.push(whole);
				break;
			case 4:
				ext.speakerAllocation = payload[0];
				key = "speaker";
				break;
			case 7: {
				const et = payload[0];
				const body = payload.slice(1);
				if (et === 0) {
					key = "videoCapability";
					ext.videoCapability = {
						qySelectableYcc: !!(body[0] & 128),
						qsSelectableRgb: !!(body[0] & 64),
						ptScan: body[0] >> 4 & 3,
						itScan: body[0] >> 2 & 3,
						ceScan: body[0] & 3
					};
				} else if (et === 5) {
					key = "colorimetry";
					ext.colorimetry = {
						xvYCC601: !!(body[0] & 1),
						xvYCC709: !!(body[0] & 2),
						sYCC601: !!(body[0] & 4),
						opYCC601: !!(body[0] & 8),
						opRGB: !!(body[0] & 16),
						bt2020cYCC: !!(body[0] & 32),
						bt2020YCC: !!(body[0] & 64),
						bt2020RGB: !!(body[0] & 128),
						dciP3: !!(body[1] & 128),
						md: [
							!!(body[1] & 1),
							!!(body[1] & 2),
							!!(body[1] & 4),
							!!(body[1] & 8)
						]
					};
				} else if (et === 6) {
					key = "hdr";
					const h = {
						eotfSdr: !!(body[0] & 1),
						eotfHdr: !!(body[0] & 2),
						eotfSmpte2084: !!(body[0] & 4),
						eotfHlg: !!(body[0] & 8),
						staticMetadataType1: !!(body[1] & 1)
					};
					if (body.length > 2) h.maxLuminance = body[2];
					if (body.length > 3) h.maxFrameAverageLuminance = body[3];
					if (body.length > 4) h.minLuminance = body[4];
					ext.hdrStaticMetadata = h;
				} else if (et === 14) {
					key = "ycbcr420Only";
					ext.ycbcr420OnlyVics = body.slice();
				} else if (et === 15) {
					key = "ycbcr420Also";
					body.forEach((byte, bi) => {
						for (let bit = 0; bit < 8; bit++) if (byte & 1 << bit) ext.ycbcr420AlsoVics.push(bi * 8 + bit);
					});
				} else ext.unknownBlocks.push(whole);
				break;
			}
			default: ext.unknownBlocks.push(whole);
		}
		read.push({
			key,
			bytes: whole
		});
		i += 1 + len;
	}
	if (dtdOffset >= 4) for (let p = dtdOffset; p + 18 <= 127; p += 18) {
		const chunk = bytes.slice(p, p + 18);
		if (chunk[0] === 0 && chunk[1] === 0) break;
		const dtd = decodeDtd(chunk);
		if (dtd) ext.detailedTimings.push(dtd);
	}
	ext.source = {
		bytes: bytes.slice(0, 127),
		model: wholeModelOf(ext),
		blocks: read.map(({ key, bytes }) => ({
			key,
			bytes,
			model: key === "unknown" ? "" : modelOf(ext, key)
		})),
		nativeDtds: bytes[3] & 15
	};
	return ext;
}
//#endregion
//#region src/lib/edid/decode.ts
var HEADER = [
	0,
	255,
	255,
	255,
	255,
	255,
	255,
	0
];
function decodeText(b) {
	let s = "";
	for (let i = 5; i < 18; i++) {
		if (b[i] === 10) break;
		s += String.fromCharCode(b[i]);
	}
	return s.replace(/\s+$/, "");
}
function decodeDescriptor(b, issues, idx) {
	const dtd = decodeDtd(b);
	if (dtd) return dtd;
	const tag = b[3];
	switch (tag) {
		case 252: return {
			kind: "name",
			text: decodeText(b)
		};
		case 255: return {
			kind: "serial",
			text: decodeText(b)
		};
		case 254: return {
			kind: "text",
			text: decodeText(b)
		};
		case 16: return { kind: "dummy" };
		case 247: {
			const modes = [];
			ESTABLISHED_III_MODES.forEach((mode, i) => {
				if (b[5 + (i >> 3)] & 128 >> (i & 7)) modes.push(mode);
			});
			return {
				kind: "established-iii",
				modes
			};
		}
		case 253: {
			const offsets = b[4];
			const vOff = offsets & 3;
			const hOff = offsets >> 2 & 3;
			const support = {
				0: "default-gtf",
				1: "range-limits-only",
				2: "secondary-gtf",
				4: "cvt"
			}[b[10]] ?? "range-limits-only";
			const d = {
				kind: "range",
				minVerticalHz: b[5] + (vOff === 3 ? 255 : 0),
				maxVerticalHz: b[6] + (vOff >= 2 ? 255 : 0),
				minHorizontalKHz: b[7] + (hOff === 3 ? 255 : 0),
				maxHorizontalKHz: b[8] + (hOff >= 2 ? 255 : 0),
				maxPixelClockMHz: b[9] * 10,
				support
			};
			if (support === "cvt") {
				const prefIdx = b[15] >> 5 & 7;
				d.cvt = {
					version: b[11],
					maxActivePixelsPerLine: ((b[12] & 3) << 8 | b[13]) * 8,
					supportedAspects: [
						...b[14] & 128 ? ["4:3"] : [],
						...b[14] & 64 ? ["16:9"] : [],
						...b[14] & 32 ? ["16:10"] : [],
						...b[14] & 16 ? ["5:4"] : []
					],
					preferredAspect: [
						"4:3",
						"16:9",
						"16:10",
						"5:4"
					][prefIdx] ?? "16:9",
					reducedBlanking: !!(b[15] & 16),
					standardBlanking: !!(b[15] & 8),
					scalingHorizontalShrink: !!(b[16] & 128),
					scalingHorizontalStretch: !!(b[16] & 64),
					scalingVerticalShrink: !!(b[16] & 32),
					scalingVerticalStretch: !!(b[16] & 16),
					preferredRefreshHz: b[17]
				};
			}
			return d;
		}
		default:
			issues.push({
				severity: "warning",
				where: `descriptor ${idx + 1}`,
				message: `unrecognised display descriptor tag 0x${tag.toString(16).padStart(2, "0")} — kept as raw bytes`
			});
			return {
				kind: "raw",
				bytes: b.slice()
			};
	}
}
/**
* Parse an EDID.
*
* Never throws on malformed input: a bad checksum, a wrong header or a short
* block become issues, and the parse continues on whatever is there. Refusing
* to open a broken EDID would make the tool useless for exactly the case a
* person reaches for it — the dump off a device that is misbehaving.
*/
function decodeEdid(data) {
	const bytes = Array.from(data);
	const issues = [];
	if (bytes.length < 128) {
		issues.push({
			severity: "error",
			where: "file",
			message: `only ${bytes.length} bytes — an EDID base block is 128`
		});
		while (bytes.length < 128) bytes.push(0);
	}
	if (!HEADER.every((v, i) => bytes[i] === v)) issues.push({
		severity: "error",
		where: "header",
		message: "the 00 FF FF FF FF FF FF 00 header is missing — this may not be an EDID, or may be offset"
	});
	const sum = bytes.slice(0, 128).reduce((a, b) => a + b, 0) % 256;
	if (sum !== 0) issues.push({
		severity: "error",
		where: "base block",
		message: `checksum is wrong (bytes sum to ${sum}, should be 0). Re-saving will correct it.`
	});
	const mfg = bytes[8] << 8 | bytes[9];
	const manufacturerId = String.fromCharCode(64 + (mfg >> 10 & 31)) + String.fromCharCode(64 + (mfg >> 5 & 31)) + String.fromCharCode(64 + (mfg & 31));
	const input = !!(bytes[20] & 128) ? {
		kind: "digital",
		bitDepth: BIT_DEPTHS[bytes[20] >> 4 & 7] ?? "undefined",
		interface: DIGITAL_INTERFACES[bytes[20] & 15] ?? "undefined"
	} : {
		kind: "analog",
		levels: bytes[20] >> 5 & 3,
		blankToBlackSetup: !!(bytes[20] & 16),
		separateSyncSupported: !!(bytes[20] & 8),
		compositeSyncSupported: !!(bytes[20] & 4),
		syncOnGreenSupported: !!(bytes[20] & 2),
		vsyncSerrated: !!(bytes[20] & 1)
	};
	const chroma = (hi, lowByte, shift) => (bytes[hi] << 2 | bytes[lowByte] >> shift & 3) / 1024;
	const established = {};
	ESTABLISHED_I_II.forEach((mode, i) => {
		if ((i < 8 ? bytes[35] : bytes[36]) & 128 >> (i < 8 ? i : i - 8)) established[mode] = true;
	});
	if (bytes[37] & 128) established[ESTABLISHED_EXTRA] = true;
	const standardTimings = [];
	for (let i = 0; i < 8; i++) {
		const a = bytes[38 + i * 2];
		const b = bytes[39 + i * 2];
		if (a === 1 && b === 1 || a === 0 && b === 0) {
			standardTimings.push(null);
			continue;
		}
		standardTimings.push({
			hActive: (a + 31) * 8,
			aspect: STD_ASPECTS[b >> 6 & 3],
			refreshHz: (b & 63) + 60
		});
	}
	const descriptors = [];
	for (let i = 0; i < 4; i++) descriptors.push(decodeDescriptor(bytes.slice(54 + i * 18, 72 + i * 18), issues, i));
	const extCount = bytes[126];
	const extensions = [];
	const available = Math.floor((bytes.length - 128) / 128);
	if (available < extCount) issues.push({
		severity: "warning",
		where: "extensions",
		message: `the base block declares ${extCount} extension block(s) but the file holds ${available}`
	});
	for (let i = 0; i < Math.min(extCount, available); i++) {
		const block = bytes.slice(128 + i * 128, 256 + i * 128);
		const s = block.reduce((a, b) => a + b, 0) % 256;
		if (s !== 0) issues.push({
			severity: "error",
			where: `extension ${i + 1}`,
			message: `checksum is wrong (sums to ${s})`
		});
		switch (block[0]) {
			case 2:
				extensions.push(decodeCta(block));
				break;
			case 112:
				extensions.push(decodeDisplayId(block));
				break;
			default:
				issues.push({
					severity: "warning",
					where: `extension ${i + 1}`,
					message: `tag 0x${block[0].toString(16).padStart(2, "0")} is not modelled — kept byte-for-byte`
				});
				extensions.push({
					kind: "raw",
					tag: block[0],
					bytes: block
				});
		}
	}
	const revision = bytes[19];
	const gammaByte = bytes[23];
	if (gammaByte === 255 && revision < 4) issues.push({
		severity: "warning",
		where: "gamma",
		message: "gamma 0xFF means \"defined in an extension\", which only EDID 1.4 allows"
	});
	return {
		edid: {
			manufacturerId,
			productCode: bytes[10] | bytes[11] << 8,
			serialNumber: (bytes[12] | bytes[13] << 8 | bytes[14] << 16 | bytes[15] << 24) >>> 0,
			week: bytes[16] === 255 ? 0 : bytes[16],
			year: bytes[17] + 1990,
			isModelYear: bytes[16] === 255,
			version: bytes[18],
			revision,
			input,
			screenWidthCm: bytes[21],
			screenHeightCm: bytes[22],
			gamma: gammaByte === 255 ? null : (gammaByte + 100) / 100,
			features: {
				standby: !!(bytes[24] & 128),
				suspend: !!(bytes[24] & 64),
				activeOff: !!(bytes[24] & 32),
				colorEncoding: [
					"rgb444",
					"rgb444-ycrcb444",
					"rgb444-ycrcb422",
					"rgb444-ycrcb444-ycrcb422"
				][bytes[24] >> 3 & 3],
				srgbDefault: !!(bytes[24] & 4),
				preferredTimingIsNative: !!(bytes[24] & 2),
				continuousFrequency: !!(bytes[24] & 1)
			},
			chromaticity: {
				redX: chroma(27, 25, 6),
				redY: chroma(28, 25, 4),
				greenX: chroma(29, 25, 2),
				greenY: chroma(30, 25, 0),
				blueX: chroma(31, 26, 6),
				blueY: chroma(32, 26, 4),
				whiteX: chroma(33, 26, 2),
				whiteY: chroma(34, 26, 0)
			},
			established,
			standardTimings,
			descriptors,
			extensions
		},
		issues
	};
}
/** Accepts a raw binary, or a hex dump in any of the common shapings. */
function parseEdidFile(input) {
	if (typeof input !== "string") return decodeEdid(input);
	const cleaned = input.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\/\/.*$/gm, " ").replace(/0x/gi, " ").replace(/^[0-9a-f]{4,8}:/gim, " ").replace(/[^0-9a-fA-F]/g, "");
	const bytes = [];
	for (let i = 0; i + 1 < cleaned.length; i += 2) bytes.push(parseInt(cleaned.slice(i, i + 2), 16));
	return decodeEdid(bytes);
}
//#endregion
//#region src/lib/edid/defaults.ts
/**
* sRGB / Rec.709 primaries and D65 white.
*
* The default because a processor-facing EDID is describing a signal format,
* not a panel — and 709 is what the signal is. Anyone describing a real display
* should put that display's measured primaries in.
*/
var REC709_CHROMATICITY = {
	redX: .64,
	redY: .33,
	greenX: .3,
	greenY: .6,
	blueX: .15,
	blueY: .06,
	whiteX: .3127,
	whiteY: .329
};
function emptyCta() {
	return {
		kind: "cta",
		revision: 3,
		underscanIt: true,
		basicAudio: false,
		ycbcr444: true,
		ycbcr422: true,
		videoDescriptors: [],
		audioDescriptors: [],
		ycbcr420OnlyVics: [],
		ycbcr420AlsoVics: [],
		detailedTimings: [],
		unknownBlocks: []
	};
}
/**
* A blank EDID 1.4, digital, ready to have timings put in it.
*
* 'OTR' is not a registered PNP ID and is deliberately not one — this tool must
* not stamp somebody else's registered manufacturer code onto a made-up EDID.
* The UI says so where the field is edited.
*/
function blankEdid() {
	return {
		manufacturerId: "OTR",
		productCode: 1,
		serialNumber: 1,
		week: 1,
		year: (/* @__PURE__ */ new Date()).getFullYear(),
		isModelYear: false,
		version: 1,
		revision: 4,
		input: {
			kind: "digital",
			bitDepth: 8,
			interface: "hdmi-a"
		},
		screenWidthCm: 0,
		screenHeightCm: 0,
		gamma: 2.2,
		features: {
			standby: false,
			suspend: false,
			activeOff: true,
			colorEncoding: "rgb444-ycrcb444-ycrcb422",
			srgbDefault: false,
			preferredTimingIsNative: true,
			continuousFrequency: false
		},
		chromaticity: { ...REC709_CHROMATICITY },
		established: {},
		standardTimings: [
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null
		],
		descriptors: [
			{ kind: "dummy" },
			{ kind: "dummy" },
			{ kind: "dummy" },
			{ kind: "dummy" }
		],
		extensions: []
	};
}
//#endregion
//#region src/lib/timing/cvt.ts
/**
* VESA Coordinated Video Timings.
*
* Three generations live here and they are genuinely different algorithms, not
* parameter tweaks:
*
*   cvt()      CVT 1.1 standard blanking. Derives blanking from a duty-cycle
*              curve, so blanking shrinks as the line rate rises.
*   cvtRb()    CVT 1.1 reduced blanking v1. Fixed 160-pixel horizontal blanking.
*              This is what "RB" means on nearly every device menu.
*   cvtRb2()   CVT 1.2 reduced blanking v2. 80-pixel horizontal blanking, fixed
*              8-line vsync, and a 1 kHz clock step instead of 250 kHz — which
*              is what lets it hit fractional rates exactly.
*
* Reference values the tests pin (all published DMT entries, so they are
* independent of this implementation):
*   1920x1200 @60 CVT     193.25 MHz, 2592 x 1245
*   1920x1200 @60 CVT-RB  154.00 MHz, 2080 x 1235
*   1680x1050 @60 CVT     146.25 MHz, 2240 x 1089
*/
var CELL_GRAN$1 = 8;
var MIN_V_PORCH = 3;
var MIN_V_BPORCH = 6;
var MIN_VSYNC_BP$1 = 550;
var CLOCK_STEP_HZ = 25e4;
var C_PRIME$1 = 30;
var M_PRIME$1 = 300;
var RB_H_BLANK = 160;
var RB_H_SYNC = 32;
var RB_V_FPORCH = 3;
var RB_MIN_V_BLANK = 460;
var RB2_H_BLANK = 80;
var RB2_H_SYNC = 32;
var RB2_H_FRONT = 8;
var RB2_V_FPORCH = 1;
var RB2_V_SYNC = 8;
var RB2_MIN_V_BLANK = 460;
var RB2_CLOCK_STEP_HZ = 1e3;
/**
* VSync width in lines, chosen from the aspect ratio.
*
* This is a lookup on the EXACT integer ratio, not the nearest one — CVT is
* explicit that an aspect it does not recognise gets 10 lines, and quietly
* snapping 1366x768 to 16:9 would give it 5 and change the clock. Same trap as
* a reduced fraction being the wrong answer for a person.
*/
function vSyncForAspect(hActive, vActive) {
	if (vActive * 4 / 3 === hActive) return 4;
	if (vActive * 16 / 9 === hActive) return 5;
	if (vActive * 16 / 10 === hActive) return 6;
	if (vActive % 4 === 0 && vActive * 5 / 4 === hActive) return 7;
	if (vActive * 15 / 9 === hActive) return 7;
	return 10;
}
var roundToCell = (n) => Math.floor(n / CELL_GRAN$1) * CELL_GRAN$1;
/** CVT 1.1, standard (non-reduced) blanking. */
function cvt(hActive, vActive, opts) {
	const { refreshHz, interlaced = false, margins = false } = opts;
	const hPixels = roundToCell(hActive);
	const vLines = interlaced ? Math.round(vActive / 2) : vActive;
	const vSync = vSyncForAspect(hPixels, vActive);
	const interlaceAdjust = interlaced ? .5 : 0;
	const marginLines = margins ? Math.round(vLines * 18 / 1e3) : 0;
	const marginPixels = margins ? roundToCell(hPixels * 18 / 1e3) : 0;
	const totalActivePixels = hPixels + marginPixels * 2;
	const hPeriodEst = (1e6 / refreshHz - MIN_VSYNC_BP$1) / (vLines + marginLines * 2 + MIN_V_PORCH + interlaceAdjust);
	let vSyncBp = Math.floor(MIN_VSYNC_BP$1 / hPeriodEst) + 1;
	if (vSyncBp < vSync + MIN_V_PORCH) vSyncBp = vSync + MIN_V_PORCH;
	const vBackPorch = vSyncBp - vSync;
	let dutyCycle = C_PRIME$1 - M_PRIME$1 * hPeriodEst / 1e3;
	if (dutyCycle < 20) dutyCycle = 20;
	const hBlank = Math.floor(totalActivePixels * dutyCycle / (100 - dutyCycle) / 16) * 16;
	const hTotalPixels = totalActivePixels + hBlank;
	const hSync = Math.floor(hTotalPixels * 8 / 100 / CELL_GRAN$1) * CELL_GRAN$1;
	const hBackPorch = hBlank / 2 + marginPixels;
	const hFrontPorch = hBlank - hSync - hBackPorch + marginPixels;
	const pixelClockHz = Math.floor(hTotalPixels / hPeriodEst / (CLOCK_STEP_HZ / 1e6)) * CLOCK_STEP_HZ;
	return {
		hActive: totalActivePixels,
		hFront: hFrontPorch,
		hSync,
		hBack: hBackPorch,
		vActive: interlaced ? vActive : vLines + marginLines * 2,
		vFront: MIN_V_PORCH,
		vSync,
		vBack: vBackPorch,
		pixelClockHz,
		interlaced,
		hSyncPositive: false,
		vSyncPositive: true
	};
}
/** CVT 1.1 reduced blanking, version 1. */
function cvtRb(hActive, vActive, opts) {
	const { refreshHz, interlaced = false } = opts;
	const hPixels = roundToCell(hActive);
	const vLines = interlaced ? Math.round(vActive / 2) : vActive;
	const vSync = vSyncForAspect(hPixels, vActive);
	const interlaceAdjust = interlaced ? .5 : 0;
	const hPeriod = (1e6 / refreshHz - RB_MIN_V_BLANK) / vLines;
	let vBlankLines = Math.floor(RB_MIN_V_BLANK / hPeriod) + 1;
	const minVBlank = RB_V_FPORCH + vSync + MIN_V_BPORCH;
	if (vBlankLines < minVBlank) vBlankLines = minVBlank;
	const vTotalLines = vLines + vBlankLines + interlaceAdjust;
	const hTotalPixels = hPixels + RB_H_BLANK;
	const clockRaw = refreshHz * vTotalLines * hTotalPixels;
	const pixelClockHz = Math.floor(clockRaw / CLOCK_STEP_HZ) * CLOCK_STEP_HZ;
	const vBack = vBlankLines - RB_V_FPORCH - vSync;
	return {
		hActive: hPixels,
		hFront: 48,
		hSync: RB_H_SYNC,
		hBack: 80,
		vActive: interlaced ? vActive : vLines,
		vFront: RB_V_FPORCH,
		vSync,
		vBack,
		pixelClockHz,
		interlaced,
		hSyncPositive: true,
		vSyncPositive: false
	};
}
/**
* CVT 1.2 reduced blanking, version 2.
*
* The 1 kHz clock step is the point of it: RBv1's 250 kHz step cannot land on
* 1000/1001 rates exactly, RBv2 can.
*/
function cvtRb2(hActive, vActive, opts) {
	const { refreshHz, interlaced = false } = opts;
	const hPixels = roundToCell(hActive);
	const vLines = interlaced ? Math.round(vActive / 2) : vActive;
	const interlaceAdjust = interlaced ? .5 : 0;
	const hTotalPixels = hPixels + RB2_H_BLANK;
	const hPeriod = (1e6 / refreshHz - RB2_MIN_V_BLANK) / vLines;
	let vBlankLines = Math.ceil(RB2_MIN_V_BLANK / hPeriod);
	const minVBlank = 15;
	if (vBlankLines < minVBlank) vBlankLines = minVBlank;
	const clockRaw = refreshHz * (vLines + vBlankLines + interlaceAdjust) * hTotalPixels;
	const pixelClockHz = Math.round(clockRaw / RB2_CLOCK_STEP_HZ) * RB2_CLOCK_STEP_HZ;
	return {
		hActive: hPixels,
		hFront: RB2_H_FRONT,
		hSync: RB2_H_SYNC,
		hBack: 40,
		vActive: interlaced ? vActive : vLines,
		vFront: RB2_V_FPORCH,
		vSync: RB2_V_SYNC,
		vBack: vBlankLines - RB2_V_FPORCH - RB2_V_SYNC,
		pixelClockHz,
		interlaced,
		hSyncPositive: true,
		vSyncPositive: false
	};
}
//#endregion
//#region src/lib/timing/gtf.ts
/**
* VESA Generalized Timing Formula 1.1, refresh-rate variant.
*
* Superseded by CVT everywhere that matters, but LiveCore and the older Midra
* generation still list GTF 1.1 as an accepted input standard, so a person
* feeding those boxes needs to be able to produce it.
*
* Defaults are the published ones: C=40%, M=600 kHz/%, K=128, J=20%.
*/
var CELL_GRAN = 8;
var MIN_PORCH = 1;
var V_SYNC_RQD = 3;
var H_SYNC_PERCENT = 8;
var MIN_VSYNC_BP = 550;
var M = 600;
var K = 128;
var C_PRIME = 30;
var M_PRIME = K / 256 * M;
function gtf(hActive, vActive, opts) {
	const { refreshHz, interlaced = false } = opts;
	const hPixels = Math.round(hActive / CELL_GRAN) * CELL_GRAN;
	const vLines = interlaced ? Math.round(vActive / 2) : vActive;
	const interlaceAdjust = interlaced ? .5 : 0;
	const hPeriodEst = (1 / refreshHz - MIN_VSYNC_BP / 1e6) / (vLines + MIN_PORCH + interlaceAdjust) * 1e6;
	const vSyncBp = Math.round(MIN_VSYNC_BP / hPeriodEst);
	const vBackPorch = vSyncBp - V_SYNC_RQD;
	const totalVLines = vLines + vSyncBp + interlaceAdjust + MIN_PORCH;
	const hPeriod = hPeriodEst * (1e6 / hPeriodEst / totalVLines) / refreshHz;
	let dutyCycle = C_PRIME - M_PRIME * hPeriod / 1e3;
	if (dutyCycle < 20) dutyCycle = 20;
	const hBlank = Math.round(hPixels * dutyCycle / (100 - dutyCycle) / 16) * 16;
	const totalPixels = hPixels + hBlank;
	const pixelClockHz = Math.round(totalPixels / hPeriod * 1e6);
	const hSync = Math.round(H_SYNC_PERCENT / 100 * totalPixels / CELL_GRAN) * CELL_GRAN;
	const hBack = hBlank / 2;
	return {
		hActive: hPixels,
		hFront: hBlank - hSync - hBack,
		hSync,
		hBack,
		vActive: interlaced ? vActive : vLines,
		vFront: MIN_PORCH,
		vSync: V_SYNC_RQD,
		vBack: vBackPorch,
		pixelClockHz,
		interlaced,
		hSyncPositive: false,
		vSyncPositive: true
	};
}
//#endregion
//#region src/lib/timing/cta.ts
var ROWS$1 = [
	{
		vic: 1,
		h: 640,
		hf: 16,
		hs: 96,
		hb: 48,
		v: 480,
		vf: 10,
		vs: 2,
		vb: 33,
		clk: 25175,
		hp: false,
		vp: false,
		par: "4:3",
		frac: true
	},
	{
		vic: 2,
		h: 720,
		hf: 16,
		hs: 62,
		hb: 60,
		v: 480,
		vf: 9,
		vs: 6,
		vb: 30,
		clk: 27e3,
		hp: false,
		vp: false,
		par: "4:3",
		frac: true
	},
	{
		vic: 3,
		h: 720,
		hf: 16,
		hs: 62,
		hb: 60,
		v: 480,
		vf: 9,
		vs: 6,
		vb: 30,
		clk: 27e3,
		hp: false,
		vp: false,
		par: "16:9",
		frac: true
	},
	{
		vic: 4,
		h: 1280,
		hf: 110,
		hs: 40,
		hb: 220,
		v: 720,
		vf: 5,
		vs: 5,
		vb: 20,
		clk: 74250,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 5,
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 540,
		vf: 2,
		vs: 5,
		vb: 15,
		clk: 74250,
		i: true,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 16,
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 148500,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 17,
		h: 720,
		hf: 12,
		hs: 64,
		hb: 68,
		v: 576,
		vf: 5,
		vs: 5,
		vb: 39,
		clk: 27e3,
		hp: false,
		vp: false,
		par: "4:3"
	},
	{
		vic: 18,
		h: 720,
		hf: 12,
		hs: 64,
		hb: 68,
		v: 576,
		vf: 5,
		vs: 5,
		vb: 39,
		clk: 27e3,
		hp: false,
		vp: false,
		par: "16:9"
	},
	{
		vic: 19,
		h: 1280,
		hf: 440,
		hs: 40,
		hb: 220,
		v: 720,
		vf: 5,
		vs: 5,
		vb: 20,
		clk: 74250,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 20,
		h: 1920,
		hf: 528,
		hs: 44,
		hb: 148,
		v: 540,
		vf: 2,
		vs: 5,
		vb: 15,
		clk: 74250,
		i: true,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 31,
		h: 1920,
		hf: 528,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 148500,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 32,
		h: 1920,
		hf: 638,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 74250,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 33,
		h: 1920,
		hf: 528,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 74250,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 34,
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 74250,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 63,
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 64,
		h: 1920,
		hf: 528,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 93,
		h: 3840,
		hf: 1276,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 94,
		h: 3840,
		hf: 1056,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 95,
		h: 3840,
		hf: 176,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 96,
		h: 3840,
		hf: 1056,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 594e3,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 97,
		h: 3840,
		hf: 176,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 594e3,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	},
	{
		vic: 98,
		h: 4096,
		hf: 1020,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "256:135",
		frac: true
	},
	{
		vic: 99,
		h: 4096,
		hf: 968,
		hs: 88,
		hb: 128,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "256:135"
	},
	{
		vic: 100,
		h: 4096,
		hf: 88,
		hs: 88,
		hb: 128,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 297e3,
		hp: true,
		vp: true,
		par: "256:135",
		frac: true
	},
	{
		vic: 101,
		h: 4096,
		hf: 968,
		hs: 88,
		hb: 128,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 594e3,
		hp: true,
		vp: true,
		par: "256:135"
	},
	{
		vic: 102,
		h: 4096,
		hf: 88,
		hs: 88,
		hb: 128,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 594e3,
		hp: true,
		vp: true,
		par: "256:135",
		frac: true
	},
	{
		vic: 117,
		h: 3840,
		hf: 1056,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 1188e3,
		hp: true,
		vp: true,
		par: "16:9"
	},
	{
		vic: 118,
		h: 3840,
		hf: 176,
		hs: 88,
		hb: 296,
		v: 2160,
		vf: 8,
		vs: 10,
		vb: 72,
		clk: 1188e3,
		hp: true,
		vp: true,
		par: "16:9",
		frac: true
	}
];
function build(r) {
	const t = {
		name: "",
		standard: "cta",
		code: r.vic,
		vic: r.vic,
		aspect: r.par,
		hasFractional: r.frac === true,
		hActive: r.h,
		hFront: r.hf,
		hSync: r.hs,
		hBack: r.hb,
		vActive: r.v,
		vFront: r.vf,
		vSync: r.vs,
		vBack: r.vb,
		pixelClockHz: r.clk * 1e3,
		interlaced: r.i === true,
		hSyncPositive: r.hp,
		vSyncPositive: r.vp
	};
	const hT = r.h + r.hf + r.hs + r.hb;
	const vT = r.v + r.vf + r.vs + r.vb;
	const rate = r.clk * 1e3 / hT / vT;
	const disp = r.i ? r.v * 2 : r.v;
	t.name = `VIC ${r.vic} — ${r.h}x${disp}${r.i ? "i" : "p"}${Math.round(rate)} ${r.par}`;
	return t;
}
var CTA_TIMINGS = ROWS$1.map(build);
var DMT_TIMINGS = [
	{
		code: 4,
		name: "640x480 @60",
		h: 640,
		hf: 16,
		hs: 96,
		hb: 48,
		v: 480,
		vf: 10,
		vs: 2,
		vb: 33,
		clk: 25175,
		hp: false,
		vp: false
	},
	{
		code: 9,
		name: "800x600 @60",
		h: 800,
		hf: 40,
		hs: 128,
		hb: 88,
		v: 600,
		vf: 1,
		vs: 4,
		vb: 23,
		clk: 4e4,
		hp: true,
		vp: true
	},
	{
		code: 10,
		name: "800x600 @72",
		h: 800,
		hf: 56,
		hs: 120,
		hb: 64,
		v: 600,
		vf: 37,
		vs: 6,
		vb: 23,
		clk: 5e4,
		hp: true,
		vp: true
	},
	{
		code: 11,
		name: "800x600 @75",
		h: 800,
		hf: 16,
		hs: 80,
		hb: 160,
		v: 600,
		vf: 1,
		vs: 3,
		vb: 21,
		clk: 49500,
		hp: true,
		vp: true
	},
	{
		code: 16,
		name: "1024x768 @60",
		h: 1024,
		hf: 24,
		hs: 136,
		hb: 160,
		v: 768,
		vf: 3,
		vs: 6,
		vb: 29,
		clk: 65e3,
		hp: false,
		vp: false
	},
	{
		code: 18,
		name: "1024x768 @75",
		h: 1024,
		hf: 16,
		hs: 96,
		hb: 176,
		v: 768,
		vf: 1,
		vs: 3,
		vb: 28,
		clk: 78750,
		hp: true,
		vp: true
	},
	{
		code: 23,
		name: "1152x864 @75",
		h: 1152,
		hf: 64,
		hs: 128,
		hb: 256,
		v: 864,
		vf: 1,
		vs: 3,
		vb: 32,
		clk: 108e3,
		hp: true,
		vp: true
	},
	{
		code: 27,
		name: "1280x800 @60 RB",
		h: 1280,
		hf: 48,
		hs: 32,
		hb: 80,
		v: 800,
		vf: 3,
		vs: 6,
		vb: 14,
		clk: 71e3,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 28,
		name: "1280x800 @60",
		h: 1280,
		hf: 72,
		hs: 128,
		hb: 200,
		v: 800,
		vf: 3,
		vs: 6,
		vb: 22,
		clk: 83500,
		hp: false,
		vp: true
	},
	{
		code: 32,
		name: "1280x960 @60",
		h: 1280,
		hf: 96,
		hs: 112,
		hb: 312,
		v: 960,
		vf: 1,
		vs: 3,
		vb: 36,
		clk: 108e3,
		hp: true,
		vp: true
	},
	{
		code: 35,
		name: "1280x1024 @60",
		h: 1280,
		hf: 48,
		hs: 112,
		hb: 248,
		v: 1024,
		vf: 1,
		vs: 3,
		vb: 38,
		clk: 108e3,
		hp: true,
		vp: true
	},
	{
		code: 36,
		name: "1280x1024 @75",
		h: 1280,
		hf: 16,
		hs: 144,
		hb: 248,
		v: 1024,
		vf: 1,
		vs: 3,
		vb: 38,
		clk: 135e3,
		hp: true,
		vp: true
	},
	{
		code: 39,
		name: "1360x768 @60",
		h: 1360,
		hf: 64,
		hs: 112,
		hb: 256,
		v: 768,
		vf: 3,
		vs: 6,
		vb: 18,
		clk: 85500,
		hp: true,
		vp: true
	},
	{
		code: 41,
		name: "1400x1050 @60",
		h: 1400,
		hf: 88,
		hs: 144,
		hb: 232,
		v: 1050,
		vf: 3,
		vs: 4,
		vb: 32,
		clk: 121750,
		hp: false,
		vp: true
	},
	{
		code: 46,
		name: "1440x900 @60 RB",
		h: 1440,
		hf: 48,
		hs: 32,
		hb: 80,
		v: 900,
		vf: 3,
		vs: 6,
		vb: 17,
		clk: 88750,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 47,
		name: "1440x900 @60",
		h: 1440,
		hf: 80,
		hs: 152,
		hb: 232,
		v: 900,
		vf: 3,
		vs: 6,
		vb: 25,
		clk: 106500,
		hp: false,
		vp: true
	},
	{
		code: 51,
		name: "1600x1200 @60",
		h: 1600,
		hf: 64,
		hs: 192,
		hb: 304,
		v: 1200,
		vf: 1,
		vs: 3,
		vb: 46,
		clk: 162e3,
		hp: true,
		vp: true
	},
	{
		code: 57,
		name: "1680x1050 @60 RB",
		h: 1680,
		hf: 48,
		hs: 32,
		hb: 80,
		v: 1050,
		vf: 3,
		vs: 6,
		vb: 21,
		clk: 119e3,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 58,
		name: "1680x1050 @60",
		h: 1680,
		hf: 104,
		hs: 176,
		hb: 280,
		v: 1050,
		vf: 3,
		vs: 6,
		vb: 30,
		clk: 146250,
		hp: false,
		vp: true
	},
	{
		code: 65,
		name: "1920x1080 @60",
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 148500,
		hp: true,
		vp: true
	},
	{
		code: 68,
		name: "1920x1200 @60 RB",
		h: 1920,
		hf: 48,
		hs: 32,
		hb: 80,
		v: 1200,
		vf: 3,
		vs: 6,
		vb: 26,
		clk: 154e3,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 69,
		name: "1920x1200 @60",
		h: 1920,
		hf: 136,
		hs: 200,
		hb: 336,
		v: 1200,
		vf: 3,
		vs: 6,
		vb: 36,
		clk: 193250,
		hp: false,
		vp: true
	},
	{
		code: 73,
		name: "2560x1600 @60 RB",
		h: 2560,
		hf: 48,
		hs: 32,
		hb: 80,
		v: 1600,
		vf: 3,
		vs: 6,
		vb: 37,
		clk: 268500,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 74,
		name: "2560x1600 @60",
		h: 2560,
		hf: 192,
		hs: 280,
		hb: 472,
		v: 1600,
		vf: 3,
		vs: 6,
		vb: 49,
		clk: 348500,
		hp: false,
		vp: true
	},
	{
		code: 81,
		name: "1366x768 @60",
		h: 1366,
		hf: 70,
		hs: 143,
		hb: 213,
		v: 768,
		vf: 3,
		vs: 3,
		vb: 24,
		clk: 85500,
		hp: true,
		vp: true
	},
	{
		code: 82,
		name: "1920x1080 @60 (CTA)",
		h: 1920,
		hf: 88,
		hs: 44,
		hb: 148,
		v: 1080,
		vf: 4,
		vs: 5,
		vb: 36,
		clk: 148500,
		hp: true,
		vp: true
	},
	{
		code: 84,
		name: "2048x1152 @60 RB",
		h: 2048,
		hf: 26,
		hs: 80,
		hb: 96,
		v: 1152,
		vf: 3,
		vs: 5,
		vb: 40,
		clk: 162e3,
		hp: true,
		vp: false,
		rb: true
	},
	{
		code: 85,
		name: "1280x720 @60",
		h: 1280,
		hf: 110,
		hs: 40,
		hb: 220,
		v: 720,
		vf: 5,
		vs: 5,
		vb: 20,
		clk: 74250,
		hp: true,
		vp: true
	},
	{
		code: 86,
		name: "1366x768 @60 RB",
		h: 1366,
		hf: 14,
		hs: 56,
		hb: 64,
		v: 768,
		vf: 1,
		vs: 3,
		vb: 28,
		clk: 72e3,
		hp: true,
		vp: false,
		rb: true
	}
].map((r) => ({
	name: `${r.name}`,
	standard: "dmt",
	code: r.code,
	hActive: r.h,
	hFront: r.hf,
	hSync: r.hs,
	hBack: r.hb,
	vActive: r.v,
	vFront: r.vf,
	vSync: r.vs,
	vBack: r.vb,
	pixelClockHz: r.clk * 1e3,
	interlaced: false,
	hSyncPositive: r.hp,
	vSyncPositive: r.vp
}));
//#endregion
//#region src/lib/build.ts
var DTD = (t) => ({
	kind: "dtd",
	timing: t,
	hSizeMm: 0,
	vSizeMm: 0,
	hBorder: 0,
	vBorder: 0,
	syncType: "digital-separate",
	stereo: "none"
});
/** Does a table entry match the request, allowing for the fractional variant? */
function matchesRate(entryRate, wanted) {
	return Math.abs(entryRate - wanted) < .5;
}
/**
* Turn a resolution and a refresh rate into a timing.
*
* Order matters: a mode that IS a CTA VIC should be generated as that VIC, not
* re-derived from CVT, because the two differ (1080p60 is 2200x1125 in CTA and
* something else entirely under CVT) and every sink in this trade expects the
* CTA raster. 'auto' therefore looks in the standard tables first.
*/
function solveTiming(req) {
	const notes = [];
	const { hActive, vActive, refreshHz, interlaced, standard } = req;
	const applyFraction = (t) => req.fractional ? {
		...t,
		pixelClockHz: t.pixelClockHz * 1e3 / 1001
	} : t;
	if (standard === "cta" || standard === "manual") {
		const hit = CTA_TIMINGS.find((c) => c.hActive === hActive && (c.interlaced ? c.vActive * 2 : c.vActive) === vActive && c.interlaced === interlaced && matchesRate(vFreq(c), refreshHz));
		if (hit) {
			if (req.fractional && !hit.hasFractional) notes.push(`VIC ${hit.vic} has no 1000/1001 variant in CTA-861 — the fractional rate is written as a detailed timing only.`);
			return {
				timing: applyFraction(hit),
				standard: "cta",
				vic: hit.vic,
				notes
			};
		}
		if (standard === "cta") {
			notes.push(`${hActive}x${vActive}@${refreshHz} is not a CTA-861 VIC. Fell back to CVT reduced blanking v2; a consumer HDMI source may ignore it, because many only act on VICs.`);
			return {
				timing: applyFraction(cvtRb2(hActive, vActive, {
					refreshHz,
					interlaced
				})),
				standard: "cvt-rb2",
				notes
			};
		}
	}
	if (standard === "dmt" || standard === "manual") {
		const hit = DMT_TIMINGS.find((d) => d.hActive === hActive && d.vActive === vActive && matchesRate(vFreq(d), refreshHz));
		if (hit) return {
			timing: applyFraction(hit),
			standard: "dmt",
			notes
		};
		if (standard === "dmt") {
			notes.push(`${hActive}x${vActive}@${refreshHz} is not in the DMT table. Fell back to CVT.`);
			return {
				timing: applyFraction(cvt(hActive, vActive, {
					refreshHz,
					interlaced
				})),
				standard: "cvt",
				notes
			};
		}
	}
	switch (standard) {
		case "cvt": return {
			timing: applyFraction(cvt(hActive, vActive, {
				refreshHz,
				interlaced
			})),
			standard: "cvt",
			notes
		};
		case "cvt-rb": return {
			timing: applyFraction(cvtRb(hActive, vActive, {
				refreshHz,
				interlaced
			})),
			standard: "cvt-rb",
			notes
		};
		case "cvt-rb2": return {
			timing: applyFraction(cvtRb2(hActive, vActive, {
				refreshHz,
				interlaced
			})),
			standard: "cvt-rb2",
			notes
		};
		case "gtf": return {
			timing: applyFraction(gtf(hActive, vActive, {
				refreshHz,
				interlaced
			})),
			standard: "gtf",
			notes
		};
		default:
			notes.push("No standard timing matched; used CVT reduced blanking v2 as the cheapest legal raster.");
			return {
				timing: applyFraction(cvtRb2(hActive, vActive, {
					refreshHz,
					interlaced
				})),
				standard: "cvt-rb2",
				notes
			};
	}
}
/**
* Build a complete EDID around one mode.
*
* The shape is deliberate and is what makes an EDID actually work on a mixed
* fleet, rather than merely parse:
*
*  - Descriptor 1 is the mode, as a DTD, flagged native.
*  - Descriptor 2 is a range-limits descriptor sized to the mode. Without one,
*    EDID 1.4 is malformed, and a processor with continuous-frequency output
*    has nothing to legalise a custom raster against.
*  - Descriptor 3 is the name. It is what appears in every device's input menu,
*    so it is worth being specific: "PDS4K-2160p60", not "Display".
*  - A CTA extension carries the VIC when the mode has one, because consumer
*    sources act on VICs and routinely ignore DTDs.
*  - A DisplayID extension appears only when the clock exceeds what a DTD can
*    state (655.35 MHz), because a needless extension is another block for a
*    fussy sink to choke on.
*/
function buildEdid(req) {
	const { timing, standard, vic, notes } = solveTiming(req);
	return edidAroundTiming(timing, {
		name: req.name,
		signal: req.signal,
		standard,
		vic,
		fractional: req.fractional,
		notes
	});
}
/**
* The CTA VIC whose raster this timing is exactly, if any.
*
* Exact, not "same resolution and rate": a 1080p60 at CVT blanking is not
* VIC 16, and claiming it is would tell a source to send a raster the sink was
* never built around. The 1000/1001 variant of a VIC counts as the VIC.
*/
function vicFor(t) {
	for (const c of CTA_TIMINGS) {
		const whole = c;
		const fraction = {
			...c,
			pixelClockHz: c.pixelClockHz * 1e3 / 1001
		};
		const sameRaster = (x) => x.hActive === t.hActive && x.hFront === t.hFront && x.hSync === t.hSync && x.hBack === t.hBack && x.vActive === t.vActive && x.vFront === t.vFront && x.vSync === t.vSync && x.vBack === t.vBack && x.interlaced === t.interlaced;
		const close = (x) => Math.abs(x.pixelClockHz - t.pixelClockHz) <= x.pixelClockHz * .001;
		if (sameRaster(whole) && (close(whole) || c.hasFractional && close(fraction))) return c.vic;
	}
}
/**
* Build a complete EDID around a timing that is already decided — a switcher's
* custom format, say, whose every porch was chosen by somebody on purpose and
* must not be re-derived. `buildEdid` is this after `solveTiming`.
*/
function edidAroundTiming(timing, opts) {
	const { standard, vic } = opts;
	const notes = opts.notes ? [...opts.notes] : [];
	const req = {
		name: opts.name,
		signal: opts.signal,
		fractional: !!opts.fractional
	};
	const e = blankEdid();
	const rate = vFreq(timing);
	const lineKHz = hFreq(timing) / 1e3;
	const clockMHz = timing.pixelClockHz / 1e6;
	e.features.continuousFrequency = standard.startsWith("cvt") || standard === "gtf";
	e.features.preferredTimingIsNative = true;
	const dtdBlocker = dtdLimit(timing);
	const tooFastForDtd = dtdBlocker !== null;
	e.descriptors = [
		tooFastForDtd ? { kind: "dummy" } : DTD(timing),
		{
			kind: "range",
			minVerticalHz: Math.max(1, Math.floor(rate) - 1),
			maxVerticalHz: Math.ceil(rate) + 1,
			minHorizontalKHz: Math.max(1, Math.floor(lineKHz) - 1),
			maxHorizontalKHz: Math.ceil(lineKHz) + 1,
			maxPixelClockMHz: clockMHz,
			support: e.features.continuousFrequency ? "cvt" : "range-limits-only",
			...e.features.continuousFrequency ? { cvt: {
				version: 17,
				maxActivePixelsPerLine: hTotal(timing),
				supportedAspects: ["16:9", "16:10"],
				preferredAspect: "16:9",
				reducedBlanking: standard === "cvt-rb" || standard === "cvt-rb2",
				standardBlanking: standard === "cvt",
				scalingHorizontalShrink: false,
				scalingHorizontalStretch: false,
				scalingVerticalShrink: false,
				scalingVerticalStretch: false,
				preferredRefreshHz: Math.round(rate)
			} } : {}
		},
		{
			kind: "name",
			text: (req.name || timingLabel(timing)).slice(0, 13)
		},
		{ kind: "dummy" }
	];
	if (dtdBlocker) notes.push(`This mode cannot be a detailed timing descriptor: ${dtdBlocker}. It is carried in a DisplayID Type VII block instead, whose fields are wide enough, and descriptor 1 is left empty.`);
	const s = req.signal;
	if (vic !== void 0 || s.format !== "rgb444" || s.dsc || s.vrr || s.bpc > 8) {
		const cta = emptyCta();
		cta.ycbcr444 = s.format === "ycbcr444" || s.format === "rgb444";
		cta.ycbcr422 = true;
		if (vic !== void 0) {
			cta.videoDescriptors = [{
				vic,
				native: vic <= 64
			}];
			if (s.format === "ycbcr420") {
				cta.videoDescriptors = [];
				cta.ycbcr420OnlyVics = [vic];
			}
		}
		if (!tooFastForDtd && vic === void 0) cta.detailedTimings = [DTD(timing)];
		const tmdsMHz = Math.min(600, Math.ceil(clockMHz * (s.format === "ycbcr420" ? .5 : s.bpc / 8)));
		cta.hdmiVsdb = {
			physicalAddress: [
				1,
				0,
				0,
				0
			],
			supportsAi: false,
			deepColor30: s.bpc >= 10,
			deepColor36: s.bpc >= 12,
			deepColor48: s.bpc >= 16,
			deepColorY444: s.bpc > 8,
			dviDual: false,
			maxTmdsClockMHz: tmdsMHz
		};
		if (s.dsc || s.vrr || clockMHz * (s.bpc / 8) > 340) {
			cta.hdmiForumVsdb = {
				version: 1,
				maxTmdsCharacterRateMHz: tmdsMHz,
				scdcPresent: true,
				rrCapable: true,
				lte340ScrambleSupported: true,
				deepColor420_30: s.bpc >= 10,
				deepColor420_36: s.bpc >= 12,
				deepColor420_48: false,
				maxFrlRate: frlRateFor(timing.pixelClockHz, s),
				dscCapable: s.dsc,
				dsc10bpc: s.dsc && s.bpc >= 10,
				dsc12bpc: s.dsc && s.bpc >= 12,
				dscNative420: s.dsc && s.format === "ycbcr420",
				dscAllBpp: s.dsc,
				dscMaxFrlRate: s.dsc ? frlRateFor(timing.pixelClockHz, s) : 0,
				dscMaxSlices: s.dsc ? 8 : 0,
				dscTotalChunkKBytes: s.dsc ? 4 : 0,
				vrrMin: s.vrr ? Math.round(s.vrrMinHz) : 0,
				vrrMax: s.vrr ? Math.round(s.vrrMaxHz) : 0,
				qmsSupported: false,
				qmsTfrMin: false,
				qmsTfrMax: false,
				allmSupported: s.vrr,
				fvaSupported: false,
				cnmVrr: false,
				cinemaVrr: false,
				mDelta: false
			};
			if (s.vrr) notes.push(`Variable refresh is advertised as a ${Math.round(s.vrrMinHz)}–${Math.round(s.vrrMaxHz)} Hz window in the HDMI Forum block. Nothing in the Analog Way, Barco or PixelHue ranges here is documented to act on it — it is for the source’s benefit.`);
			if (s.dsc) notes.push("DSC is advertised, which commits the link to FRL: an HDMI 2.0 or earlier input will not negotiate it at all.");
		}
		if (s.bpc > 8) cta.colorimetry = {
			xvYCC601: false,
			xvYCC709: false,
			sYCC601: false,
			opYCC601: false,
			opRGB: false,
			bt2020cYCC: false,
			bt2020YCC: true,
			bt2020RGB: true,
			dciP3: false,
			md: [
				false,
				false,
				false,
				false
			]
		};
		e.extensions.push(cta);
	}
	if (tooFastForDtd) {
		const did = {
			kind: "displayid",
			version: 32,
			primaryUseCase: 3,
			extensionCount: 0,
			type7Timings: [{
				timing,
				preferred: true,
				aspect: aspectFor(timing),
				fractional: req.fractional
			}],
			unknownBlocks: []
		};
		e.extensions.push(did);
	}
	return {
		edid: e,
		timing,
		resolvedStandard: standard,
		vic,
		notes
	};
}
function aspectFor(t) {
	const r = t.hActive / t.vActive;
	const table = [
		[1, "1:1"],
		[5 / 4, "5:4"],
		[4 / 3, "4:3"],
		[15 / 9, "15:9"],
		[16 / 9, "16:9"],
		[16 / 10, "16:10"],
		[64 / 27, "64:27"],
		[256 / 135, "256:135"]
	];
	let best = table[0];
	for (const row of table) if (Math.abs(row[0] - r) < Math.abs(best[0] - r)) best = row;
	return best[1];
}
/** Smallest FRL rate index (1-6) that carries the mode. */
function frlRateFor(clockHz, s) {
	const payload = clockHz * (s.dsc ? s.dscTargetBpp : s.format === "ycbcr422" ? 16 : s.format === "ycbcr420" ? s.bpc * 3 / 2 : s.bpc * 3);
	const rates = [
		9e9,
		18e9,
		24e9,
		32e9,
		4e10,
		48e9
	];
	for (let i = 0; i < rates.length; i++) if (payload <= rates[i] * (16 / 18)) return i + 1;
	return 6;
}
//#endregion
//#region src/lib/link.ts
var DEFAULT_SIGNAL = {
	format: "rgb444",
	bpc: 8,
	dsc: false,
	dscTargetBpp: 12,
	vrr: false,
	vrrMinHz: 24,
	vrrMaxHz: 60
};
/**
* Bits carried per pixel.
*
* 4:2:2 is the odd one: it subsamples chroma horizontally but HDMI always
* transports it in a fixed 12-bit-per-component container, so it costs the same
* as 8-bit 4:4:4 regardless of the requested depth. Treating it as
* 2 x bpc would overstate 12-bit 4:2:2 by half.
*/
function bitsPerPixel(s) {
	if (s.dsc) return s.dscTargetBpp;
	switch (s.format) {
		case "rgb444":
		case "ycbcr444": return s.bpc * 3;
		case "ycbcr422": return 16;
		case "ycbcr420": return s.bpc * 3 / 2;
	}
}
/** Payload rate in bits per second. */
function payloadBps(t, s) {
	return t.pixelClockHz * bitsPerPixel(s);
}
/**
* HDMI TMDS character rate.
*
* Deep colour raises the character rate above the pixel clock because the extra
* bits are clocked out on the same three lanes. 4:2:0 halves it, which is the
* whole reason 4K60 exists on HDMI 1.4 hardware at all.
*/
function tmdsCharacterRateHz(t, s) {
	if (s.dsc) return Number.POSITIVE_INFINITY;
	const base = s.format === "ycbcr420" ? t.pixelClockHz / 2 : t.pixelClockHz;
	if (s.format === "ycbcr422") return base;
	return base * s.bpc / 8;
}
/** 16b/18b line coding on FRL: 16 payload bits per 18 on the wire. */
var FRL_EFFICIENCY = 16 / 18;
var HDMI_VERSIONS = [
	{
		name: "HDMI 1.0–1.2",
		maxTmdsHz: 165e6,
		frlBps: 0,
		frlRate: 0,
		lanes: 3
	},
	{
		name: "HDMI 1.3/1.4",
		maxTmdsHz: 34e7,
		frlBps: 0,
		frlRate: 0,
		lanes: 3
	},
	{
		name: "HDMI 2.0",
		maxTmdsHz: 6e8,
		frlBps: 0,
		frlRate: 0,
		lanes: 3
	},
	{
		name: "HDMI 2.1 FRL 3×3G (9G)",
		maxTmdsHz: 6e8,
		frlBps: 9e9,
		frlRate: 1,
		lanes: 3
	},
	{
		name: "HDMI 2.1 FRL 3×6G (18G)",
		maxTmdsHz: 6e8,
		frlBps: 18e9,
		frlRate: 2,
		lanes: 3
	},
	{
		name: "HDMI 2.1 FRL 4×6G (24G)",
		maxTmdsHz: 6e8,
		frlBps: 24e9,
		frlRate: 3,
		lanes: 4
	},
	{
		name: "HDMI 2.1 FRL 4×8G (32G)",
		maxTmdsHz: 6e8,
		frlBps: 32e9,
		frlRate: 4,
		lanes: 4
	},
	{
		name: "HDMI 2.1 FRL 4×10G (40G)",
		maxTmdsHz: 6e8,
		frlBps: 4e10,
		frlRate: 5,
		lanes: 4
	},
	{
		name: "HDMI 2.1 FRL 4×12G (48G)",
		maxTmdsHz: 6e8,
		frlBps: 48e9,
		frlRate: 6,
		lanes: 4
	}
];
function hdmiRequirement(t, s) {
	const payload = payloadBps(t, s);
	const tmds = tmdsCharacterRateHz(t, s);
	if (!s.dsc && Number.isFinite(tmds)) {
		for (const v of HDMI_VERSIONS) if (v.frlBps === 0 && tmds <= v.maxTmdsHz) return {
			version: v,
			viaTmds: true,
			tmdsCharacterRateHz: tmds,
			payloadBps: payload,
			utilisation: tmds / v.maxTmdsHz,
			note: tmds > 34e7 ? "Above 340 MHz the link must be scrambled and the sink must expose SCDC — an HDMI 1.4 cable will not do it." : void 0
		};
	}
	for (const v of HDMI_VERSIONS) {
		if (v.frlBps === 0) continue;
		if (payload <= v.frlBps * FRL_EFFICIENCY) return {
			version: v,
			viaTmds: false,
			tmdsCharacterRateHz: tmds,
			payloadBps: payload,
			utilisation: payload / (v.frlBps * FRL_EFFICIENCY),
			note: s.dsc ? "DSC only travels over FRL — an HDMI 2.0 or earlier link cannot carry it." : void 0
		};
	}
	return {
		version: null,
		viaTmds: false,
		tmdsCharacterRateHz: tmds,
		payloadBps: payload,
		utilisation: payload / (48e9 * FRL_EFFICIENCY),
		note: "Beyond HDMI 2.1 48G even with DSC at this target."
	};
}
var DP_RATES = [
	{
		name: "RBR (1.62G)",
		laneBps: 162e7,
		efficiency: .8,
		since: "DP 1.1"
	},
	{
		name: "HBR (2.7G)",
		laneBps: 27e8,
		efficiency: .8,
		since: "DP 1.1"
	},
	{
		name: "HBR2 (5.4G)",
		laneBps: 54e8,
		efficiency: .8,
		since: "DP 1.2"
	},
	{
		name: "HBR3 (8.1G)",
		laneBps: 81e8,
		efficiency: .8,
		since: "DP 1.3"
	},
	{
		name: "UHBR10",
		laneBps: 1e10,
		efficiency: 128 / 132,
		since: "DP 2.0"
	},
	{
		name: "UHBR13.5",
		laneBps: 135e8,
		efficiency: 128 / 132,
		since: "DP 2.0"
	},
	{
		name: "UHBR20",
		laneBps: 2e10,
		efficiency: 128 / 132,
		since: "DP 2.0"
	}
];
function dpRequirement(t, s, lanes = 4) {
	const payload = payloadBps(t, s);
	for (const r of DP_RATES) {
		const capacity = r.laneBps * lanes * r.efficiency;
		if (payload <= capacity) return {
			rate: r,
			lanes,
			payloadBps: payload,
			utilisation: payload / capacity,
			note: payload / capacity > .98 ? "Within 2% of the rate ceiling — DisplayPort transfer-unit overhead may put this over in practice." : void 0
		};
	}
	return {
		rate: null,
		lanes,
		payloadBps: payload,
		utilisation: payload / (2e10 * lanes * (128 / 132)),
		note: "Beyond UHBR20 on this lane count."
	};
}
/** Single-link DVI tops out at 165 MHz; dual-link doubles it to 330. */
function dviRequirement(t, s) {
	const clock = tmdsCharacterRateHz(t, s);
	if (!Number.isFinite(clock)) return {
		link: null,
		clockHz: clock
	};
	if (clock <= 165e6) return {
		link: "single",
		clockHz: clock
	};
	if (clock <= 33e7) return {
		link: "dual",
		clockHz: clock
	};
	return {
		link: null,
		clockHz: clock
	};
}
var formatBps = (bps) => bps >= 1e9 ? `${(bps / 1e9).toFixed(2)} Gbps` : `${(bps / 1e6).toFixed(0)} Mbps`;
var formatHz = (hz) => hz >= 1e6 ? `${(hz / 1e6).toFixed(2)} MHz` : `${(hz / 1e3).toFixed(1)} kHz`;
//#endregion
//#region src/lib/primary.ts
/**
* The one timing an EDID is really about.
*
* Search order matters and is not arbitrary: DisplayID first, because a mode
* that needs DisplayID is by definition one a DTD could not hold, so if a
* DisplayID block exists it describes the FASTEST mode present. Then the first
* base-block DTD, which EDID 1.4 defines as the preferred timing. Then a CTA
* detailed timing.
*/
function primaryTiming(e) {
	for (const ext of e.extensions) if (ext.kind === "displayid") {
		const d = ext;
		const all = [...d.type1Timings ?? [], ...d.type7Timings];
		const pref = all.find((t) => t.preferred) ?? all[0];
		if (pref) return pref.timing;
	}
	for (const d of e.descriptors) if (d.kind === "dtd") return d.timing;
	for (const ext of e.extensions) if (ext.kind === "cta") {
		const c = ext;
		if (c.detailedTimings[0]) return c.detailedTimings[0].timing;
	}
	return null;
}
function displayName(e) {
	for (const d of e.descriptors) if (d.kind === "name") return d.text;
	return "";
}
function setDisplayName(e, text) {
	const descriptors = [...e.descriptors];
	const idx = descriptors.findIndex((d) => d.kind === "name");
	if (idx >= 0) descriptors[idx] = {
		kind: "name",
		text
	};
	else {
		const slot = descriptors.findIndex((d) => d.kind === "dummy");
		if (slot >= 0) descriptors[slot] = {
			kind: "name",
			text
		};
	}
	return {
		...e,
		descriptors
	};
}
//#endregion
//#region ../../../node_modules/react/cjs/react-jsx-runtime.production.min.js
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var f = require_react();
	var k = Symbol.for("react.element");
	var l = Symbol.for("react.fragment");
	var m = Object.prototype.hasOwnProperty;
	var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
	var p = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q(c, a, g) {
		var b, d = {}, e = null, h = null;
		void 0 !== g && (e = "" + g);
		void 0 !== a.key && (e = "" + a.key);
		void 0 !== a.ref && (h = a.ref);
		for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		return {
			$$typeof: k,
			type: c,
			key: e,
			ref: h,
			props: d,
			_owner: n.current
		};
	}
	exports.Fragment = l;
	exports.jsx = q;
	exports.jsxs = q;
}));
//#endregion
//#region src/components/ui.tsx
var import_jsx_runtime = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production_min();
})))();
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [label, hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hint",
			children: [" · ", hint]
		}) : null] }), children]
	});
}
function Num({ label, hint, value, onChange, min, max, step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			value: Number.isFinite(value) ? value : 0,
			min,
			max,
			step: step ?? 1,
			onChange: (e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))
		})
	});
}
function Text({ label, hint, value, onChange, maxLength, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			value,
			maxLength,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})
	});
}
function Pick({ label, hint, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		hint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value: String(value),
			onChange: (e) => {
				const raw = e.target.value;
				const hit = options.find((o) => String(o.value) === raw);
				if (hit) onChange(hit.value);
			},
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: String(o.value),
				children: o.label
			}, String(o.value)))
		})
	});
}
function Check({ label, checked, onChange, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "check",
		title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange: (e) => onChange(e.target.checked)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function Panel({ title, children, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			style: right ? {
				display: "flex",
				alignItems: "center",
				gap: 10
			} : void 0,
			children: [title, right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { marginLeft: "auto" },
				children: right
			}) : null]
		}), children]
	});
}
function Stat({ k, v, small }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stat",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "k",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: small ? "v small" : "v",
			children: v
		})]
	});
}
//#endregion
//#region src/components/SimpleMode.tsx
var PRESETS$1 = [
	{
		label: "1920x1080 @60",
		w: 1920,
		h: 1080,
		r: 60
	},
	{
		label: "1920x1200 @60",
		w: 1920,
		h: 1200,
		r: 60
	},
	{
		label: "2560x1600 @60",
		w: 2560,
		h: 1600,
		r: 60
	},
	{
		label: "3840x2160 @60",
		w: 3840,
		h: 2160,
		r: 60
	},
	{
		label: "3840x2160 @30",
		w: 3840,
		h: 2160,
		r: 30
	},
	{
		label: "4096x2160 @60",
		w: 4096,
		h: 2160,
		r: 60
	},
	{
		label: "3840x2160 @120",
		w: 3840,
		h: 2160,
		r: 120
	},
	{
		label: "1280x720 @60",
		w: 1280,
		h: 720,
		r: 60
	},
	{
		label: "2048x1080 @60",
		w: 2048,
		h: 1080,
		r: 60
	},
	{
		label: "8192x1080 @60",
		w: 8192,
		h: 1080,
		r: 60
	},
	{
		label: "1920x1080 @240",
		w: 1920,
		h: 1080,
		r: 240
	}
];
var STANDARDS = [
	{
		value: "manual",
		label: "Auto — CTA VIC, then DMT, then CVT-RB v2"
	},
	{
		value: "cta",
		label: "CTA-861 VIC (broadcast rasters)"
	},
	{
		value: "dmt",
		label: "VESA DMT"
	},
	{
		value: "cvt-rb2",
		label: "CVT reduced blanking v2 (cheapest)"
	},
	{
		value: "cvt-rb",
		label: "CVT reduced blanking v1"
	},
	{
		value: "cvt",
		label: "CVT standard blanking"
	},
	{
		value: "gtf",
		label: "GTF 1.1 (legacy LiveCore / Midra)"
	}
];
var FORMATS = [
	{
		value: "rgb444",
		label: "RGB 4:4:4"
	},
	{
		value: "ycbcr444",
		label: "YCbCr 4:4:4"
	},
	{
		value: "ycbcr422",
		label: "YCbCr 4:2:2"
	},
	{
		value: "ycbcr420",
		label: "YCbCr 4:2:0"
	}
];
function SimpleMode({ req, onChange, onBuild, notes }) {
	const [custom, setCustom] = (0, import_react.useState)(false);
	const set = (patch) => onChange({
		...req,
		...patch
	});
	const setSig = (patch) => onChange({
		...req,
		signal: {
			...req.signal,
			...patch
		}
	});
	const presetLabel = PRESETS$1.find((p) => p.w === req.hActive && p.h === req.vActive && p.r === req.refreshHz)?.label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "What the display should say it is",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						label: "EDID name",
						hint: "13 characters, shown in every input menu",
						value: req.name,
						maxLength: 13,
						placeholder: "e.g. PDS4K-2160p60",
						onChange: (name) => set({ name })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Preset",
						value: custom || !presetLabel ? "custom" : presetLabel,
						options: [...PRESETS$1.map((p) => ({
							value: p.label,
							label: p.label
						})), {
							value: "custom",
							label: "Custom…"
						}],
						onChange: (v) => {
							if (v === "custom") {
								setCustom(true);
								return;
							}
							const p = PRESETS$1.find((x) => x.label === v);
							setCustom(false);
							set({
								hActive: p.w,
								vActive: p.h,
								refreshHz: p.r
							});
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Width",
							hint: "active px",
							value: req.hActive,
							min: 8,
							max: 16384,
							step: 8,
							onChange: (hActive) => set({ hActive })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Height",
							hint: "active lines",
							value: req.vActive,
							min: 8,
							max: 8192,
							onChange: (vActive) => set({ vActive })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Refresh",
							hint: req.interlaced ? "Hz, field rate" : "Hz",
							value: req.refreshHz,
							min: 1,
							max: 480,
							step: 1,
							onChange: (refreshHz) => set({ refreshHz })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: 6,
								justifyContent: "flex-end",
								paddingBottom: 4
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								label: "Interlaced",
								checked: req.interlaced,
								onChange: (interlaced) => set({ interlaced })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								label: "Fractional (÷1.001)",
								title: "59.94 rather than 60 — the pixel clock divides, the raster does not.",
								checked: req.fractional,
								onChange: (fractional) => set({ fractional })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c2",
					style: { marginTop: 10 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Timing standard",
						value: req.standard,
						options: STANDARDS,
						onChange: (standard) => set({ standard })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							alignItems: "flex-end"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go",
							onClick: onBuild,
							style: { width: "100%" },
							children: "Calculate"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Signal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
							label: "Colour format",
							value: req.signal.format,
							options: FORMATS,
							onChange: (format) => setSig({ format })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
							label: "Bit depth",
							hint: "per component",
							value: req.signal.bpc,
							options: [
								{
									value: 8,
									label: "8-bit"
								},
								{
									value: 10,
									label: "10-bit"
								},
								{
									value: 12,
									label: "12-bit"
								},
								{
									value: 16,
									label: "16-bit"
								}
							],
							onChange: (bpc) => setSig({ bpc })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: 6,
								justifyContent: "flex-end",
								paddingBottom: 4
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								label: "DSC (Display Stream Compression)",
								title: "Commits the link to HDMI FRL — an HDMI 2.0 input cannot negotiate DSC at all.",
								checked: req.signal.dsc,
								onChange: (dsc) => setSig({ dsc })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								label: "Variable refresh (VRR / VFR)",
								title: "Written as a VRRmin/VRRmax window in the HDMI Forum block.",
								checked: req.signal.vrr,
								onChange: (vrr) => setSig({ vrr })
							})]
						})
					]
				}),
				req.signal.dsc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c3",
					style: { marginTop: 10 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "DSC target",
						hint: "bits per pixel, 12 is the usual visually-lossless target",
						value: req.signal.dscTargetBpp,
						min: 6,
						max: 24,
						onChange: (dscTargetBpp) => setSig({ dscTargetBpp })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { gridColumn: "span 2" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "note warn",
							style: { marginTop: 18 },
							children: "DSC travels only over HDMI fixed-rate link. Turning this on makes every HDMI 2.0 and earlier input in the table below say no — which is correct, not a bug in the table."
						})
					})]
				}) : null,
				req.signal.vrr ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c3",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "VRR minimum",
							hint: "Hz",
							value: req.signal.vrrMinHz,
							min: 1,
							max: 500,
							onChange: (vrrMinHz) => setSig({ vrrMinHz })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "VRR maximum",
							hint: "Hz",
							value: req.signal.vrrMaxHz,
							min: 1,
							max: 500,
							onChange: (vrrMaxHz) => setSig({ vrrMaxHz })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "note",
							style: { marginTop: 18 },
							children: "Advertised in the HDMI Forum VSDB. None of the event processors here is documented to act on it; it is there for a source that will."
						})
					]
				}) : null
			]
		}),
		notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "What was built",
			children: notes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "banner",
				children: n
			}, i))
		}) : null
	] });
}
//#endregion
//#region src/lib/mosaic.ts
/**
* Mosaic mode: one canvas split across several connectors, one EDID per plug,
* each carrying a DisplayID Tiled Display Topology block so the source treats
* the plugs as ONE display. On a Mac that is what makes the outputs frame
* synced — macOS bonds the tiles into a single display and scans them out as
* one, so the seams cannot tear.
*
* This reproduces a reference tiled-EDID builder BYTE FOR BYTE — a test pins
* it against that builder's own output. The point of copying rather than
* composing from Otter's own encoder is that the reference's files have
* bonded on real Macs (macOS 26 and 27) and synthetic ones did not:
*
*   The base and CTA blocks are a PixelHue Q8's EDID verbatim, patched only
*   where a tile must differ (vendor, product, bit depth, preferred DTD,
*   name). The reference's first version synthesised them from scratch — the
*   DisplayID block matched the reference exactly, base+CTA did not — and no
*   Mac was ever seen bonding on those files.
*
* Nobody isolated WHICH reference bytes matter, so none of them are "tidied".
* Otter's own CTA encoder does not reproduce this CTA block byte for byte,
* which is why a mosaic is carried as raw bytes and never re-encoded.
*
* Layout, 384 bytes per tile:
*   block 0  EDID 1.4 base — a DTD at a representable size (the tile, halved
*            until it fits 4095 wide), the monitor name, the reference range
*            limits (23-240 Hz, up to 600 MHz)
*   block 1  the reference CTA-861 extension, untouched
*   block 2  DisplayID 1.3: a Type I timing (the real tile mode, preferred)
*            and the Tiled Display Topology block
*/
var REFERENCE_B64 = "AP///////wA59l7kAQEBAQIfAQTFAAB4GjExpVVOoSYMUFQlTwDRwLMAlQCBgIFAgcABAQEBTdAAoPBwPoAwIDUAX1khAAAYAAAA/QAX8A//PAAKICAgICAgAAAA/ABsZWZ0CiAgICAgICAgAAAAEQAAAAAAAAAAAAAAAAAAAnICAyV0SWtakB8iZmVkYyMPBwdn2F3EAXiAAGcDDAAAADhE4gBPKGgAoPBwPoAwIDUAX1khAAAY72gAoKBALmAwIDYA4A4RAAAYNTyAoHCwI0AwIDYA4A4RAAAYAjqAGHE4LUBYLEUA4A4RAAAYAAAAAAAAAAAAAAAAAAAAAAAA9A==";
var reference = null;
var ref = () => reference ??= Uint8Array.from(atob(REFERENCE_B64), (c) => c.charCodeAt(0));
var MAC_27_MAX_WIDTH = 12288;
var MAX_TILE_WIDTH = 6144;
var MOSAIC_GRIDS = [{
	cols: 2,
	rows: 1,
	label: "2 × 1 — side by side"
}, {
	cols: 2,
	rows: 2,
	label: "2 × 2"
}];
var DEFAULT_MOSAIC = {
	width: 6144,
	height: 2160,
	cols: 2,
	rows: 1,
	refreshHz: 60,
	name: "Mosaic",
	bitDepth: 10,
	vendor: "SWK",
	product: 20308,
	group: 1
};
function mosaicTiming(w, h, hz) {
	const hBlank = 160;
	const hFront = 48;
	const hSync = 32;
	const hTotal = w + hBlank;
	const vFront = 3;
	const vSync = 10;
	const vTotalMin = h + vFront + vSync + 6;
	let vTotal = vTotalMin;
	for (let i = 0; i < 4; i++) {
		const lineUs = hTotal / (hTotal * vTotal * hz) * 1e6;
		vTotal = Math.max(vTotalMin, h + Math.ceil(460 / lineUs));
	}
	return {
		hActive: w,
		hBlank,
		hFront,
		hSync,
		vActive: h,
		vBlank: vTotal - h,
		vFront,
		vSync,
		pixelClockMHz: hTotal * vTotal * hz / 1e6
	};
}
/** As the tile's EDID states it: 10 kHz clock, H sync positive, V negative. */
function toTiming(m) {
	return {
		hActive: m.hActive,
		hFront: m.hFront,
		hSync: m.hSync,
		hBack: m.hBlank - m.hFront - m.hSync,
		vActive: m.vActive,
		vFront: m.vFront,
		vSync: m.vSync,
		vBack: m.vBlank - m.vFront - m.vSync,
		pixelClockHz: Math.round(m.pixelClockMHz * 100) * 1e4,
		interlaced: false,
		hSyncPositive: true,
		vSyncPositive: false
	};
}
function pnpBytes(pnp) {
	const c = (i) => pnp.charCodeAt(i) - 64 & 31;
	const v = c(0) << 10 | c(1) << 5 | c(2);
	return [v >> 8 & 255, v & 255];
}
function baseDtd(m) {
	const clk = Math.round(m.pixelClockMHz * 100);
	if (clk > 65535) throw new Error(`the base block's stand-in mode needs ${(clk / 100).toFixed(2)} MHz — past the 655.35 MHz a DTD can state`);
	const b = new Array(18).fill(0);
	b[0] = clk & 255;
	b[1] = clk >> 8 & 255;
	b[2] = m.hActive & 255;
	b[3] = m.hBlank & 255;
	b[4] = m.hActive >> 8 << 4 | m.hBlank >> 8;
	b[5] = m.vActive & 255;
	b[6] = m.vBlank & 255;
	b[7] = m.vActive >> 8 << 4 | m.vBlank >> 8;
	b[8] = m.hFront & 255;
	b[9] = m.hSync & 255;
	b[10] = (m.vFront & 15) << 4 | m.vSync & 15;
	b[11] = m.hFront >> 8 << 6 | m.hSync >> 8 << 4 | m.vFront >> 4 << 2 | m.vSync >> 4;
	b[12] = 95;
	b[13] = 89;
	b[14] = 33;
	b[17] = 30;
	return b;
}
function nameDescriptor(s) {
	const b = new Array(18).fill(0);
	b[3] = 252;
	let t = s.slice(0, 13);
	if (t.length < 13) t += "\n";
	t = t.padEnd(13, " ");
	for (let i = 0; i < 13; i++) b[5 + i] = t.charCodeAt(i) & 127;
	return b;
}
function tileLabel(cols, rows, col, row) {
	if (cols === 2 && rows === 1) return col === 0 ? "left" : "right";
	return `r${row + 1}c${col + 1}`;
}
function tileFile(cols, rows, col, row) {
	if (cols === 2 && rows === 1) return col === 0 ? "left.bin" : "right.bin";
	return `tile_r${row + 1}_c${col + 1}.bin`;
}
/** Errors that make the set unbuildable — as opposed to checkMosaic's advice. */
function mosaicErrors(r) {
	const out = [];
	if (!(r.width > 0 && r.height > 0 && r.refreshHz > 0)) out.push("Width, height and rate must all be above zero.");
	if (!(r.cols >= 1 && r.rows >= 1)) out.push("The grid needs at least one column and one row.");
	if (out.length) return out;
	if (r.width % r.cols) out.push(`${r.width} does not divide into ${r.cols} equal columns.`);
	if (r.height % r.rows) out.push(`${r.height} does not divide into ${r.rows} equal rows.`);
	if (r.width % 8) out.push(`The canvas width must be a multiple of 8 — ${r.width} is not.`);
	const tileW = r.width / r.cols;
	if (tileW > 6144) out.push(`Each tile would be ${tileW} wide. ${MAX_TILE_WIDTH} is the widest tile a Mac composes.`);
	if (r.cols > 16 || r.rows > 16) out.push("More than 16 tiles on an axis needs the high location bits, which this layout leaves at zero.");
	if (!/^[A-Z]{3}$/.test(r.vendor)) out.push("The vendor id is three capital letters, A-Z.");
	if (!(r.product >= 0 && r.product <= 65535)) out.push("The product code is 0-65535.");
	if (!(r.group >= 0 && r.group <= 255)) out.push("The mosaic number is 0-255.");
	return out;
}
/** Vendor letters, product (high byte first), then a serial of 00 nn 00 01
*  where nn is the mosaic number — the reference's layout. */
function mosaicTopologyId(r) {
	return [
		...[...r.vendor.padEnd(3, "?")].slice(0, 3).map((c) => c.charCodeAt(0)),
		r.product >> 8 & 255,
		r.product & 255,
		0,
		r.group & 255,
		0,
		1
	];
}
/** Build every tile's EDID. Throws on anything mosaicErrors reports. */
function buildMosaic(r, nameFor) {
	const errors = mosaicErrors(r);
	if (errors.length) throw new Error(errors[0]);
	const tileW = r.width / r.cols;
	const tileH = r.height / r.rows;
	const tile = mosaicTiming(tileW, tileH, r.refreshHz);
	let safeW = tileW;
	while (safeW > 4095) safeW = Math.ceil(safeW / 2);
	const stand = mosaicTiming(safeW, tileH, r.refreshHz);
	const topologyId = mosaicTopologyId(r);
	const tiles = [];
	for (let row = 0; row < r.rows; row++) for (let col = 0; col < r.cols; col++) {
		const base = [...ref().slice(0, 128)];
		const [m0, m1] = pnpBytes(r.vendor);
		base[8] = m0;
		base[9] = m1;
		base[10] = r.product & 255;
		base[11] = r.product >> 8 & 255;
		base[20] = r.bitDepth === 10 ? 197 : 181;
		base.splice(54, 18, ...baseDtd(stand));
		base.splice(90, 18, ...nameDescriptor(nameFor ? nameFor(col, row) : r.name));
		base[127] = checksum(base);
		const cta = [...ref().slice(128, 256)];
		const timingBlock = encodeType1Timing({
			timing: toTiming(tile),
			preferred: true,
			aspect: "undefined",
			fractional: false
		});
		const tiledBlock = encodeTiledTopology({
			capabilities: 10,
			hTiles: r.cols,
			vTiles: r.rows,
			hLocation: col,
			vLocation: row,
			tileWidth: tileW,
			tileHeight: tileH,
			bezel: [
				0,
				0,
				0,
				0,
				0
			],
			topologyId
		});
		const blocks = [
			3,
			1,
			20,
			...timingBlock,
			18,
			0,
			22,
			...tiledBlock
		];
		while (blocks.length < 121) blocks.push(0);
		const section = [
			18,
			121,
			0,
			0,
			...blocks
		];
		const sum = section.reduce((a, b) => a + b, 0);
		const did = [
			112,
			...section,
			(256 - sum % 256) % 256
		];
		did.push(checksum(did));
		tiles.push({
			col,
			row,
			file: tileFile(r.cols, r.rows, col, row),
			label: tileLabel(r.cols, r.rows, col, row),
			bytes: Uint8Array.from([
				...base,
				...cta,
				...did
			])
		});
	}
	return {
		tileWidth: tileW,
		tileHeight: tileH,
		tileTiming: toTiming(tile),
		baseTiming: toTiming(stand),
		tiles
	};
}
/**
* What a Mac will do with the set, per bench results with the reference files on macOS 26
* and 27 and the BetterDisplay field reports. Advice, not a build error.
*/
function checkMosaic(r) {
	const out = [];
	const grid = `${r.cols} × ${r.rows}`;
	if (r.cols === 2 && r.rows === 1) out.push({
		level: "ok",
		what: "2 × 1 bonds on macOS",
		detail: "Two plugs, side by side, become one display."
	});
	else if (r.cols === 2 && r.rows === 2) out.push({
		level: "warn",
		what: "2 × 2 bonds on macOS 27",
		detail: "The Mac side works. On an Encore 3 running 10.3, a two-row tile file with DisplayID on drops the connector’s hotplug, so a 2 × 2 fed by an E3 is two 2 × 1 inputs until Barco fix it."
	});
	else out.push({
		level: "bad",
		what: `${grid} does not bond on a Mac`,
		detail: "Only 2 × 1 and 2 × 2 have ever bonded. Three and four across never have, and stacked tiles failed in the field reports."
	});
	if (r.width <= 6144) out.push({
		level: "ok",
		what: `${r.width} wide works on any recent macOS`,
		detail: "Bonded canvases up to 6144 wide were verified on macOS 26 and 27."
	});
	else if (r.width <= 12288) out.push({
		level: "warn",
		what: `${r.width} wide needs macOS 27`,
		detail: "macOS 26 composes a bonded display only up to 6144 wide."
	});
	else out.push({
		level: "bad",
		what: `${r.width} wide has never been tested`,
		detail: `${MAC_27_MAX_WIDTH} is the widest bonded canvas anyone has shown working, on macOS 27. Split it across two Macs.`
	});
	out.push({
		level: "ok",
		what: "Frame sync comes from bonding",
		detail: "Bonded tiles are one display, so the Mac scans them out together. If the Mac shows the plugs as separate displays, they are not bonded and not synced."
	});
	return out;
}
//#endregion
//#region src/lib/zip.ts
/**
* A stored (uncompressed) zip, enough to hand over a mosaic's tile files in
* one download. EDIDs are a few hundred bytes; deflate would buy nothing and
* cost a dependency. Every archiver reads method 0.
*/
var table = null;
function crc32(data) {
	if (!table) {
		table = /* @__PURE__ */ new Uint32Array(256);
		for (let n = 0; n < 256; n++) {
			let c = n;
			for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
			table[n] = c >>> 0;
		}
	}
	let crc = 4294967295;
	for (const b of data) crc = table[(crc ^ b) & 255] ^ crc >>> 8;
	return (crc ^ 4294967295) >>> 0;
}
function zipStored(files) {
	const u16 = (v) => [v & 255, v >> 8 & 255];
	const u32 = (v) => [
		v & 255,
		v >>> 8 & 255,
		v >>> 16 & 255,
		v >>> 24 & 255
	];
	const enc = new TextEncoder();
	const local = [];
	const central = [];
	for (const f of files) {
		const name = [...enc.encode(f.name)];
		const crc = crc32(f.data);
		const offset = local.length;
		const common = [
			...u16(20),
			...u16(0),
			...u16(0),
			...u16(0),
			...u16(33),
			...u32(crc),
			...u32(f.data.length),
			...u32(f.data.length),
			...u16(name.length),
			...u16(0)
		];
		local.push(...u32(67324752), ...common, ...name, ...f.data);
		central.push(...u32(33639248), ...u16(20), ...common, ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name);
	}
	const end = [
		...u32(101010256),
		...u16(0),
		...u16(0),
		...u16(files.length),
		...u16(files.length),
		...u32(central.length),
		...u32(local.length),
		...u16(0)
	];
	return Uint8Array.from([
		...local,
		...central,
		...end
	]);
}
//#endregion
//#region src/components/HexView.tsx
function render(bytes, fmt, name) {
	const hex = (b) => b.toString(16).padStart(2, "0");
	switch (fmt) {
		case "hex": return [...bytes].map(hex).join("");
		case "c": {
			const lines = [`static const unsigned char ${name}[${bytes.length}] = {`];
			for (let i = 0; i < bytes.length; i += 12) lines.push("  " + [...bytes.slice(i, i + 12)].map((b) => `0x${hex(b)}`).join(", ") + ",");
			lines.push("};");
			return lines.join("\n");
		}
		default: {
			const lines = [];
			for (let i = 0; i < bytes.length; i += 16) {
				const chunk = [...bytes.slice(i, i + 16)];
				lines.push(`${i.toString(16).padStart(8, "0")}: ${chunk.map(hex).join(" ")}`);
			}
			return lines.join("\n");
		}
	}
}
function saveBytes(bytes, filename, type = "application/octet-stream") {
	const blob = new Blob([bytes.slice().buffer], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var slug = (s) => (s || "edid").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "edid";
function HexView({ edid, raw, name, onLoad, title }) {
	const [fmt, setFmt] = (0, import_react.useState)("xxd");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const built = (0, import_react.useMemo)(() => {
		if (raw) return {
			bytes: raw,
			error: null
		};
		if (!edid) return {
			bytes: null,
			error: "nothing to show"
		};
		try {
			return {
				bytes: encodeEdid(edid),
				error: null
			};
		} catch (e) {
			return {
				bytes: null,
				error: e instanceof Error ? e.message : String(e)
			};
		}
	}, [edid, raw]);
	if (built.error || !built.bytes) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "EDID bytes",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "banner bad",
			children: ["This EDID cannot be encoded: ", built.error]
		})
	});
	const bytes = built.bytes;
	const blocks = Math.ceil(bytes.length / 128);
	const text = render(bytes, fmt, slug(name));
	const download = () => saveBytes(bytes, `${slug(name)}.bin`);
	const downloadText = () => {
		const blob = new Blob([text], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${slug(name)}.${fmt === "c" ? "h" : "txt"}`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: title ?? `EDID bytes — ${bytes.length} bytes, ${blocks} block${blocks > 1 ? "s" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				style: { marginBottom: 10 },
				children: [
					[
						"xxd",
						"hex",
						"c"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "minor",
						"aria-pressed": fmt === f,
						onClick: () => setFmt(f),
						children: f === "xxd" ? "Offset dump" : f === "hex" ? "Flat hex" : "C array"
					}, f)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { flex: 1 } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "minor",
						onClick: () => {
							navigator.clipboard.writeText(text);
							setCopied(true);
							setTimeout(() => setCopied(false), 1400);
						},
						children: copied ? "Copied" : "Copy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "minor",
						onClick: downloadText,
						children: "Save text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "go",
						onClick: download,
						children: "Download .bin"
					})
				]
			}),
			onLoad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				style: { marginBottom: 10 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "minor",
						onClick: () => fileRef.current?.click(),
						children: "Open an EDID…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "note",
						style: { margin: 0 },
						children: ".bin, or a hex dump pasted from anywhere — xrandr, edid-decode, xxd, a C header."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: ".bin,.dat,.edid,.txt,.h,.hex",
						style: { display: "none" },
						onChange: async (e) => {
							const f = e.target.files?.[0];
							if (!f) return;
							const buf = new Uint8Array(await f.arrayBuffer());
							const isBinary = buf[0] === 0 && buf[1] === 255 && buf[2] === 255;
							onLoad?.(isBinary ? buf : new TextDecoder().decode(buf));
							e.target.value = "";
						}
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "hex",
				children: text
			})
		]
	});
}
//#endregion
//#region src/components/MosaicMode.tsx
var PRESETS = [
	{
		label: "6144x2160 @60 — widest for any macOS",
		w: 6144,
		h: 2160,
		r: 60
	},
	{
		label: "5120x1440 @60",
		w: 5120,
		h: 1440,
		r: 60
	},
	{
		label: "7680x2160 @60 — two UHD",
		w: 7680,
		h: 2160,
		r: 60
	},
	{
		label: "7680x2160 @50 — two UHD",
		w: 7680,
		h: 2160,
		r: 50
	},
	{
		label: "7680x4320 @30 — 2 x 2 UHD",
		w: 7680,
		h: 4320,
		r: 30
	},
	{
		label: "12288x1536 @50 — LED strip",
		w: 12288,
		h: 1536,
		r: 50
	}
];
var hexId = (id) => String.fromCharCode(...id.slice(0, 3)) + " " + id.slice(3).map((b) => b.toString(16).padStart(2, "0")).join(" ");
function MosaicMode({ req, onChange, result, errors, selected, onSelect }) {
	const set = (patch) => onChange({
		...req,
		...patch
	});
	const grid = MOSAIC_GRIDS.find((g) => g.cols === req.cols && g.rows === req.rows);
	const preset = PRESETS.find((p) => p.w === req.width && p.h === req.height && p.r === req.refreshHz);
	const saveAll = () => {
		if (!result) return;
		saveBytes(zipStored(result.tiles.map((t) => ({
			name: t.file,
			data: t.bytes
		}))), `${slug(req.name)}_${req.width}x${req.height}_${req.refreshHz}Hz.zip`, "application/zip");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "The canvas the Mac should see as one display",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						label: "EDID name",
						hint: "13 characters, the same on every plug",
						value: req.name,
						maxLength: 13,
						onChange: (name) => set({ name })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Preset",
						value: preset?.label ?? "custom",
						options: [...PRESETS.map((p) => ({
							value: p.label,
							label: p.label
						})), {
							value: "custom",
							label: "Custom…"
						}],
						onChange: (v) => {
							const p = PRESETS.find((x) => x.label === v);
							if (!p) return;
							set({
								width: p.w,
								height: p.h,
								refreshHz: p.r,
								rows: p.h === 4320 ? 2 : req.rows
							});
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Width",
							hint: "whole canvas",
							value: req.width,
							min: 8,
							max: 16384,
							step: 8,
							onChange: (width) => set({ width })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Height",
							hint: "whole canvas",
							value: req.height,
							min: 8,
							max: 8192,
							onChange: (height) => set({ height })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Refresh",
							hint: "Hz",
							value: req.refreshHz,
							min: 1,
							max: 240,
							step: .01,
							onChange: (refreshHz) => set({ refreshHz })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
							label: "Plugs",
							value: grid ? `${req.cols}x${req.rows}` : "2x1",
							options: MOSAIC_GRIDS.map((g) => ({
								value: `${g.cols}x${g.rows}`,
								label: g.label
							})),
							onChange: (v) => {
								const [cols, rows] = v.split("x").map(Number);
								set({
									cols,
									rows
								});
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
							label: "Bit depth",
							value: req.bitDepth,
							options: [{
								value: 10,
								label: "10-bit"
							}, {
								value: 8,
								label: "8-bit"
							}],
							onChange: (bitDepth) => set({ bitDepth })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Mosaic number",
							hint: "0-255",
							value: req.group,
							min: 0,
							max: 255,
							onChange: (group) => set({ group })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							label: "Vendor id",
							hint: "3 letters",
							value: req.vendor,
							maxLength: 3,
							onChange: (vendor) => set({ vendor: vendor.toUpperCase() })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Product code",
							value: req.product,
							min: 0,
							max: 65535,
							onChange: (product) => set({ product })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "note",
					children: "A Mac groups plugs into one display by the topology id — vendor, product and mosaic number. Give a second mosaic on the same Mac a different number. The default id is Stoatworks Labs’ own (SWK, “OT”)."
				})
			]
		}),
		errors.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "Can’t build this",
			children: errors.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "banner bad",
				children: e
			}, i))
		}) : null,
		result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: `${result.tiles.length} EDIDs, one per plug`,
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "go",
				onClick: saveAll,
				children: "Download all (.zip)"
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stats",
					style: { marginBottom: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Each plug",
							v: `${result.tileWidth} × ${result.tileHeight}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Tile mode",
							v: timingLabel(result.tileTiming),
							small: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Pixel clock / plug",
							v: `${(result.tileTiming.pixelClockHz / 1e6).toFixed(2)} MHz`,
							small: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Fallback in base block",
							v: `${result.baseTiming.hActive} × ${result.baseTiming.vActive}`,
							small: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "tiles",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Plug" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Position" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "File" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: result.tiles.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						"aria-selected": i === selected,
						onClick: () => onSelect(i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: t.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
								"column ",
								t.col + 1,
								", row ",
								t.row + 1
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "mono",
								children: t.file
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: { textAlign: "right" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "minor",
									onClick: (e) => {
										e.stopPropagation();
										saveBytes(t.bytes, t.file);
									},
									children: ".bin"
								})
							})
						]
					}, t.file)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "note",
					children: [
						"Load each file on the input at its position —",
						" ",
						req.rows === 1 ? "left.bin on the connector fed by the Mac’s left-hand output" : "r1c1 is the top left",
						". If the picture comes out in the wrong order, swap the cables. Topology id",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono",
							children: hexId(mosaicTopologyId(req))
						}),
						"."
					]
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "How this works",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "Each plug gets its own EDID. All of them carry a DisplayID Tiled Display Topology block with the same id and grid, and each one’s own position. A Mac that reads matching blocks on several connectors joins them into a single display. It then drives the outputs as one, so they stay frame synced with no tearing at the seams."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "The layout copies, byte for byte, reference files that have bonded on macOS 26 and 27. Their base and CTA blocks come from a real display’s EDID, because EDIDs built from scratch never bonded on a Mac. Nothing Otter builds elsewhere has been tried on hardware."
			})]
		})
	] });
}
function MosaicChecks({ checks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "What a Mac will make of it",
		children: [checks.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: 10,
				alignItems: "baseline",
				marginBottom: 8
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `pill ${c.level}`,
				children: c.level === "ok" ? "yes" : c.level === "warn" ? "caveat" : "no"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: c.what }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: c.detail
			})] })]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "note",
			children: "From bench testing of the reference files on macOS 26 and 27, and BetterDisplay users’ field reports. The DisplayID block layout is checked against the Linux kernel’s parser."
		})]
	});
}
//#endregion
//#region src/components/AdvancedMode.tsx
var DESCRIPTOR_KINDS = [
	{
		value: "dtd",
		label: "Detailed timing"
	},
	{
		value: "name",
		label: "Display name"
	},
	{
		value: "serial",
		label: "Serial number (text)"
	},
	{
		value: "text",
		label: "Free text"
	},
	{
		value: "range",
		label: "Display range limits"
	},
	{
		value: "established-iii",
		label: "Established timings III"
	},
	{
		value: "dummy",
		label: "Unused"
	}
];
function blankDescriptor(kind, t) {
	switch (kind) {
		case "dtd": return {
			kind: "dtd",
			timing: t ?? {
				hActive: 1920,
				hFront: 88,
				hSync: 44,
				hBack: 148,
				vActive: 1080,
				vFront: 4,
				vSync: 5,
				vBack: 36,
				pixelClockHz: 1485e5,
				interlaced: false,
				hSyncPositive: true,
				vSyncPositive: true
			},
			hSizeMm: 0,
			vSizeMm: 0,
			hBorder: 0,
			vBorder: 0,
			syncType: "digital-separate",
			stereo: "none"
		};
		case "name": return {
			kind: "name",
			text: ""
		};
		case "serial": return {
			kind: "serial",
			text: ""
		};
		case "text": return {
			kind: "text",
			text: ""
		};
		case "range": return {
			kind: "range",
			minVerticalHz: 24,
			maxVerticalHz: 60,
			minHorizontalKHz: 15,
			maxHorizontalKHz: 140,
			maxPixelClockMHz: 300,
			support: "range-limits-only"
		};
		case "established-iii": return {
			kind: "established-iii",
			modes: []
		};
		default: return { kind: "dummy" };
	}
}
function TimingEditor({ t, onChange }) {
	const set = (p) => onChange({
		...t,
		...p
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid c4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "H active",
				value: t.hActive,
				onChange: (hActive) => set({ hActive })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "H front porch",
				value: t.hFront,
				onChange: (hFront) => set({ hFront })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "H sync width",
				value: t.hSync,
				onChange: (hSync) => set({ hSync })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "H back porch",
				value: t.hBack,
				onChange: (hBack) => set({ hBack })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "V active",
				value: t.vActive,
				onChange: (vActive) => set({ vActive })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "V front porch",
				value: t.vFront,
				onChange: (vFront) => set({ vFront })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "V sync width",
				value: t.vSync,
				onChange: (vSync) => set({ vSync })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "V back porch",
				value: t.vBack,
				onChange: (vBack) => set({ vBack })
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid c4",
		style: { marginTop: 10 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				label: "Pixel clock",
				hint: "MHz — a DTD stores 10 kHz steps",
				value: Number((t.pixelClockHz / 1e6).toFixed(4)),
				step: .01,
				onChange: (v) => set({ pixelClockHz: Math.round(v * 1e6) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 6,
					justifyContent: "flex-end",
					paddingBottom: 4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: "Interlaced",
					checked: t.interlaced,
					onChange: (interlaced) => set({ interlaced })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 6,
					justifyContent: "flex-end",
					paddingBottom: 4
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: "+H sync",
					checked: t.hSyncPositive,
					onChange: (hSyncPositive) => set({ hSyncPositive })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: "+V sync",
					checked: t.vSyncPositive,
					onChange: (vSyncPositive) => set({ vSyncPositive })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note",
				style: {
					alignSelf: "flex-end",
					paddingBottom: 6
				},
				children: [
					hTotal(t),
					" x ",
					vTotal(t),
					" raster · ",
					(hFreq(t) / 1e3).toFixed(2),
					" kHz ·",
					" ",
					vFreq(t).toFixed(3),
					" Hz"
				]
			})
		]
	})] });
}
function DescriptorEditor({ d, index, onChange, fallbackTiming }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			borderTop: index ? "1px solid var(--line)" : void 0,
			paddingTop: index ? 12 : 0,
			marginTop: index ? 12 : 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid c2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
					label: `Descriptor ${index + 1}`,
					hint: index === 0 ? "EDID 1.4: this one is the preferred timing" : void 0,
					value: d.kind,
					options: DESCRIPTOR_KINDS,
					onChange: (kind) => onChange(blankDescriptor(kind, fallbackTiming))
				})
			}),
			d.kind === "dtd" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { marginTop: 10 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimingEditor, {
					t: d.timing,
					onChange: (timing) => onChange({
						...d,
						timing
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Image width",
							hint: "mm, 0 = not stated",
							value: d.hSizeMm,
							onChange: (hSizeMm) => onChange({
								...d,
								hSizeMm
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Image height",
							hint: "mm",
							value: d.vSizeMm,
							onChange: (vSizeMm) => onChange({
								...d,
								vSizeMm
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "H border",
							value: d.hBorder,
							onChange: (hBorder) => onChange({
								...d,
								hBorder
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "V border",
							value: d.vBorder,
							onChange: (vBorder) => onChange({
								...d,
								vBorder
							})
						})
					]
				})]
			}) : null,
			d.kind === "name" || d.kind === "serial" || d.kind === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid c2",
				style: { marginTop: 10 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					label: "Text",
					hint: "13 characters, ASCII",
					value: d.text,
					maxLength: 13,
					onChange: (text) => onChange({
						...d,
						text
					})
				})
			}) : null,
			d.kind === "range" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid c3",
				style: { marginTop: 10 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Min vertical",
						hint: "Hz",
						value: d.minVerticalHz,
						onChange: (v) => onChange({
							...d,
							minVerticalHz: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Max vertical",
						hint: "Hz",
						value: d.maxVerticalHz,
						onChange: (v) => onChange({
							...d,
							maxVerticalHz: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Max pixel clock",
						hint: "MHz, stored in 10 MHz steps",
						value: d.maxPixelClockMHz,
						step: 10,
						onChange: (v) => onChange({
							...d,
							maxPixelClockMHz: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Min horizontal",
						hint: "kHz",
						value: d.minHorizontalKHz,
						onChange: (v) => onChange({
							...d,
							minHorizontalKHz: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Max horizontal",
						hint: "kHz",
						value: d.maxHorizontalKHz,
						onChange: (v) => onChange({
							...d,
							maxHorizontalKHz: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Timing support",
						value: d.support,
						options: [
							{
								value: "range-limits-only",
								label: "Range limits only"
							},
							{
								value: "default-gtf",
								label: "Default GTF"
							},
							{
								value: "secondary-gtf",
								label: "Secondary GTF"
							},
							{
								value: "cvt",
								label: "CVT supported"
							}
						],
						onChange: (support) => onChange({
							...d,
							support
						})
					})
				]
			}), d.support === "cvt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "CVT parameters are written from the mode when the EDID is built in simple mode. Editing them by hand is not exposed — the fields interact, and a hand-built combination that contradicts the range limits is worse than none."
			}) : null] }) : null,
			d.kind === "established-iii" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					marginTop: 10,
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
					gap: "4px 10px"
				},
				children: ESTABLISHED_III_MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: m,
					checked: d.modes.includes(m),
					onChange: (on) => onChange({
						...d,
						modes: on ? [...d.modes, m] : d.modes.filter((x) => x !== m)
					})
				}, m))
			}) : null
		]
	});
}
function CtaEditor({ cta, onChange }) {
	const set = (p) => onChange({
		...cta,
		...p
	});
	const hf = cta.hdmiForumVsdb;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid c4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
					label: "Revision",
					value: cta.revision,
					min: 1,
					max: 4,
					onChange: (revision) => set({ revision })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						justifyContent: "flex-end",
						paddingBottom: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Basic audio",
						checked: cta.basicAudio,
						onChange: (basicAudio) => set({ basicAudio })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Underscan (IT)",
						checked: cta.underscanIt,
						onChange: (underscanIt) => set({ underscanIt })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						justifyContent: "flex-end",
						paddingBottom: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "YCbCr 4:4:4",
						checked: cta.ycbcr444,
						onChange: (ycbcr444) => set({ ycbcr444 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "YCbCr 4:2:2",
						checked: cta.ycbcr422,
						onChange: (ycbcr422) => set({ ycbcr422 })
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Video descriptors (VICs)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "note",
			style: { marginBottom: 8 },
			children: "A consumer HDMI source acts on these and routinely ignores a detailed timing that says the same thing. The first is written native; above VIC 64 the native flag does not exist."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
				gap: "3px 10px",
				maxHeight: 220,
				overflowY: "auto"
			},
			children: CTA_TIMINGS.map((t) => {
				const on = cta.videoDescriptors.some((v) => v.vic === t.vic);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: t.name,
					checked: on,
					onChange: (want) => set({ videoDescriptors: want ? [...cta.videoDescriptors, {
						vic: t.vic,
						native: cta.videoDescriptors.length === 0 && t.vic <= 64
					}] : cta.videoDescriptors.filter((v) => v.vic !== t.vic) })
				}, t.vic);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "HDMI vendor-specific block" }),
		cta.hdmiVsdb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid c4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
					label: "Max TMDS clock",
					hint: "MHz, 5 MHz steps",
					value: cta.hdmiVsdb.maxTmdsClockMHz,
					step: 5,
					onChange: (v) => set({ hdmiVsdb: {
						...cta.hdmiVsdb,
						maxTmdsClockMHz: v
					} })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					label: "Physical address",
					hint: "A.B.C.D",
					value: cta.hdmiVsdb.physicalAddress.join("."),
					onChange: (v) => {
						const parts = v.split(".").map((x) => Math.max(0, Math.min(15, Number(x) || 0)));
						while (parts.length < 4) parts.push(0);
						set({ hdmiVsdb: {
							...cta.hdmiVsdb,
							physicalAddress: parts.slice(0, 4)
						} });
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						justifyContent: "flex-end",
						paddingBottom: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Deep colour 30-bit",
						checked: cta.hdmiVsdb.deepColor30,
						onChange: (x) => set({ hdmiVsdb: {
							...cta.hdmiVsdb,
							deepColor30: x
						} })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Deep colour 36-bit",
						checked: cta.hdmiVsdb.deepColor36,
						onChange: (x) => set({ hdmiVsdb: {
							...cta.hdmiVsdb,
							deepColor36: x
						} })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						justifyContent: "flex-end",
						paddingBottom: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "YCbCr 4:4:4 deep colour",
						checked: cta.hdmiVsdb.deepColorY444,
						onChange: (x) => set({ hdmiVsdb: {
							...cta.hdmiVsdb,
							deepColorY444: x
						} })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DVI dual link",
						checked: cta.hdmiVsdb.dviDual,
						onChange: (x) => set({ hdmiVsdb: {
							...cta.hdmiVsdb,
							dviDual: x
						} })
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "minor",
			onClick: () => set({ hdmiVsdb: {
				physicalAddress: [
					1,
					0,
					0,
					0
				],
				supportsAi: false,
				deepColor30: false,
				deepColor36: false,
				deepColor48: false,
				deepColorY444: false,
				dviDual: false,
				maxTmdsClockMHz: 300
			} }),
			children: "Add HDMI VSDB"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "HDMI Forum block — DSC, VRR, FRL" }),
		hf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid c4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Max TMDS char rate",
						hint: "MHz",
						value: hf.maxTmdsCharacterRateMHz,
						step: 5,
						onChange: (v) => set({ hdmiForumVsdb: {
							...hf,
							maxTmdsCharacterRateMHz: v
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Max FRL rate",
						value: hf.maxFrlRate,
						options: [
							{
								value: 0,
								label: "TMDS only"
							},
							{
								value: 1,
								label: "3 lanes x 3G — 9G"
							},
							{
								value: 2,
								label: "3 lanes x 6G — 18G"
							},
							{
								value: 3,
								label: "4 lanes x 6G — 24G"
							},
							{
								value: 4,
								label: "4 lanes x 8G — 32G"
							},
							{
								value: 5,
								label: "4 lanes x 10G — 40G"
							},
							{
								value: 6,
								label: "4 lanes x 12G — 48G"
							}
						],
						onChange: (maxFrlRate) => set({ hdmiForumVsdb: {
							...hf,
							maxFrlRate
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "VRR minimum",
						hint: "Hz, 0 = off",
						value: hf.vrrMin,
						onChange: (vrrMin) => set({ hdmiForumVsdb: {
							...hf,
							vrrMin
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "VRR maximum",
						hint: "Hz",
						value: hf.vrrMax,
						onChange: (vrrMax) => set({ hdmiForumVsdb: {
							...hf,
							vrrMax
						} })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid c4",
				style: { marginTop: 10 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DSC capable",
						checked: hf.dscCapable,
						onChange: (dscCapable) => set({ hdmiForumVsdb: {
							...hf,
							dscCapable
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DSC 10 bpc",
						checked: hf.dsc10bpc,
						onChange: (dsc10bpc) => set({ hdmiForumVsdb: {
							...hf,
							dsc10bpc
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DSC 12 bpc",
						checked: hf.dsc12bpc,
						onChange: (dsc12bpc) => set({ hdmiForumVsdb: {
							...hf,
							dsc12bpc
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DSC native 4:2:0",
						checked: hf.dscNative420,
						onChange: (dscNative420) => set({ hdmiForumVsdb: {
							...hf,
							dscNative420
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "SCDC present",
						checked: hf.scdcPresent,
						onChange: (scdcPresent) => set({ hdmiForumVsdb: {
							...hf,
							scdcPresent
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Scrambling ≤340 Mcsc",
						checked: hf.lte340ScrambleSupported,
						onChange: (x) => set({ hdmiForumVsdb: {
							...hf,
							lte340ScrambleSupported: x
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "ALLM",
						checked: hf.allmSupported,
						onChange: (allmSupported) => set({ hdmiForumVsdb: {
							...hf,
							allmSupported
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "QMS",
						checked: hf.qmsSupported,
						onChange: (qmsSupported) => set({ hdmiForumVsdb: {
							...hf,
							qmsSupported
						} })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "Bit assignments in this block follow edid-decode’s reading of HDMI 2.1 and have not been checked against a device. See AGENTS.md."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "minor",
				style: { marginTop: 8 },
				onClick: () => set({ hdmiForumVsdb: void 0 }),
				children: "Remove"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "minor",
			onClick: () => set({ hdmiForumVsdb: {
				version: 1,
				maxTmdsCharacterRateMHz: 600,
				scdcPresent: true,
				rrCapable: true,
				lte340ScrambleSupported: true,
				deepColor420_30: false,
				deepColor420_36: false,
				deepColor420_48: false,
				maxFrlRate: 0,
				dscCapable: false,
				dsc10bpc: false,
				dsc12bpc: false,
				dscNative420: false,
				dscAllBpp: false,
				dscMaxFrlRate: 0,
				dscMaxSlices: 0,
				dscTotalChunkKBytes: 0,
				vrrMin: 0,
				vrrMax: 0,
				qmsSupported: false,
				qmsTfrMin: false,
				qmsTfrMax: false,
				allmSupported: false,
				fvaSupported: false,
				cnmVrr: false,
				cinemaVrr: false,
				mDelta: false
			} }),
			children: "Add HDMI Forum block"
		})
	] });
}
function AdvancedMode({ edid, onChange, primary }) {
	const set = (p) => onChange({
		...edid,
		...p
	});
	const cta = edid.extensions.find((x) => x.kind === "cta");
	const did = edid.extensions.find((x) => x.kind === "displayid");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Identity",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid c4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						label: "Manufacturer",
						hint: "3 letters — PNP ID",
						value: edid.manufacturerId,
						maxLength: 3,
						onChange: (v) => set({ manufacturerId: v.toUpperCase().replace(/[^A-Za-z]/g, "") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Product code",
						value: edid.productCode,
						min: 0,
						max: 65535,
						onChange: (productCode) => set({ productCode })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Serial number",
						value: edid.serialNumber,
						min: 0,
						onChange: (serialNumber) => set({ serialNumber })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Year",
						value: edid.year,
						min: 1990,
						max: 2245,
						onChange: (year) => set({ year })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "Week",
						hint: "1-54",
						value: edid.week,
						min: 0,
						max: 54,
						onChange: (week) => set({ week })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "EDID version",
						value: edid.version,
						min: 1,
						max: 1,
						onChange: (version) => set({ version })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						label: "EDID revision",
						hint: "4 = EDID 1.4",
						value: edid.revision,
						min: 0,
						max: 4,
						onChange: (revision) => set({ revision })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 6,
							justifyContent: "flex-end",
							paddingBottom: 4
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Year is a MODEL year",
							checked: edid.isModelYear,
							onChange: (isModelYear) => set({ isModelYear })
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "The manufacturer field is a registered PNP ID. Writing a real vendor’s code onto an EDID you made up will make a device report the wrong maker — pick something that is not registered unless you are reproducing a specific display on purpose."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Video input",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Input type",
						value: edid.input.kind,
						options: [{
							value: "digital",
							label: "Digital"
						}, {
							value: "analog",
							label: "Analog"
						}],
						onChange: (kind) => set({ input: kind === "digital" ? {
							kind: "digital",
							bitDepth: 8,
							interface: "hdmi-a"
						} : {
							kind: "analog",
							levels: 0,
							blankToBlackSetup: false,
							separateSyncSupported: true,
							compositeSyncSupported: true,
							syncOnGreenSupported: false,
							vsyncSerrated: true
						} })
					}), edid.input.kind === "digital" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Bit depth",
						value: String(edid.input.bitDepth),
						options: [
							"undefined",
							"6",
							"8",
							"10",
							"12",
							"14",
							"16"
						].map((v) => ({
							value: v,
							label: v === "undefined" ? "Undefined" : `${v}-bit`
						})),
						onChange: (v) => set({ input: {
							...edid.input,
							bitDepth: v === "undefined" ? "undefined" : Number(v)
						} })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
						label: "Interface",
						value: edid.input.interface,
						options: [
							{
								value: "undefined",
								label: "Undefined"
							},
							{
								value: "dvi",
								label: "DVI"
							},
							{
								value: "hdmi-a",
								label: "HDMI-a"
							},
							{
								value: "hdmi-b",
								label: "HDMI-b"
							},
							{
								value: "mddi",
								label: "MDDI"
							},
							{
								value: "displayport",
								label: "DisplayPort"
							}
						],
						onChange: (v) => set({ input: {
							...edid.input,
							interface: v
						} })
					})] }) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c4",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Screen width",
							hint: "cm, 0 = undefined",
							value: edid.screenWidthCm,
							min: 0,
							max: 255,
							onChange: (screenWidthCm) => set({ screenWidthCm })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Screen height",
							hint: "cm",
							value: edid.screenHeightCm,
							min: 0,
							max: 255,
							onChange: (screenHeightCm) => set({ screenHeightCm })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Gamma",
							hint: "1.00-3.54",
							value: edid.gamma ?? 2.2,
							step: .01,
							min: 1,
							max: 3.54,
							onChange: (gamma) => set({ gamma })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
							label: "Colour encoding",
							value: edid.features.colorEncoding,
							options: [
								{
									value: "rgb444",
									label: "RGB 4:4:4"
								},
								{
									value: "rgb444-ycrcb444",
									label: "RGB + YCrCb 4:4:4"
								},
								{
									value: "rgb444-ycrcb422",
									label: "RGB + YCrCb 4:2:2"
								},
								{
									value: "rgb444-ycrcb444-ycrcb422",
									label: "RGB + both YCrCb"
								}
							],
							onChange: (colorEncoding) => set({ features: {
								...edid.features,
								colorEncoding
							} })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid c3",
					style: { marginTop: 10 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Preferred timing is native",
							checked: edid.features.preferredTimingIsNative,
							onChange: (v) => set({ features: {
								...edid.features,
								preferredTimingIsNative: v
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Continuous frequency",
							title: "The display takes any rate inside the range descriptor, not only the listed modes. This is what legalises a processor's custom output.",
							checked: edid.features.continuousFrequency,
							onChange: (v) => set({ features: {
								...edid.features,
								continuousFrequency: v
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "sRGB is the default colour space",
							checked: edid.features.srgbDefault,
							onChange: (v) => set({ features: {
								...edid.features,
								srgbDefault: v
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Standby",
							checked: edid.features.standby,
							onChange: (v) => set({ features: {
								...edid.features,
								standby: v
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Suspend",
							checked: edid.features.suspend,
							onChange: (v) => set({ features: {
								...edid.features,
								suspend: v
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Active off",
							checked: edid.features.activeOff,
							onChange: (v) => set({ features: {
								...edid.features,
								activeOff: v
							} })
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Chromaticity",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid c4",
				children: [
					["redX", "Red x"],
					["redY", "Red y"],
					["greenX", "Green x"],
					["greenY", "Green y"],
					["blueX", "Blue x"],
					["blueY", "Blue y"],
					["whiteX", "White x"],
					["whiteY", "White y"]
				].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
					label,
					value: Number(edid.chromaticity[k].toFixed(4)),
					step: .001,
					min: 0,
					max: .999,
					onChange: (v) => set({ chromaticity: {
						...edid.chromaticity,
						[k]: v
					} })
				}, k))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "Stored as 10-bit fractions, so the nearest representable step is about 0.001."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "Established timings",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
					gap: "4px 10px"
				},
				children: [...ESTABLISHED_I_II, ESTABLISHED_EXTRA].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: m,
					checked: !!edid.established[m],
					onChange: (on) => {
						const established = { ...edid.established };
						if (on) established[m] = true;
						else delete established[m];
						set({ established });
					}
				}, m))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Standard timings",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid c2",
				children: edid.standardTimings.map((st, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					style: { gap: 6 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "note",
							style: {
								width: 16,
								margin: 0
							},
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							style: { width: 90 },
							value: st?.hActive ?? 0,
							step: 8,
							onChange: (e) => {
								const hActive = Number(e.target.value);
								const next = [...edid.standardTimings];
								next[i] = hActive >= 256 ? {
									hActive,
									aspect: st?.aspect ?? "16:9",
									refreshHz: st?.refreshHz ?? 60
								} : null;
								set({ standardTimings: next });
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: st?.aspect ?? "16:9",
							disabled: !st,
							style: { width: 84 },
							onChange: (e) => {
								const next = [...edid.standardTimings];
								if (next[i]) next[i] = {
									...next[i],
									aspect: e.target.value
								};
								set({ standardTimings: next });
							},
							children: [
								"16:10",
								"4:3",
								"5:4",
								"16:9"
							].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a }, a))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							style: { width: 76 },
							value: st?.refreshHz ?? 60,
							min: 60,
							max: 123,
							disabled: !st,
							onChange: (e) => {
								const next = [...edid.standardTimings];
								if (next[i]) next[i] = {
									...next[i],
									refreshHz: Number(e.target.value)
								};
								set({ standardTimings: next });
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "minor",
							onClick: () => {
								const next = [...edid.standardTimings];
								next[i] = null;
								set({ standardTimings: next });
							},
							children: "clear"
						})
					]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "Width must be a multiple of 8 from 256 to 2288, and the rate a whole number from 60 to 123 — that is the whole field. Anything else needs a detailed timing."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "Descriptors",
			children: edid.descriptors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptorEditor, {
				d,
				index: i,
				fallbackTiming: primary,
				onChange: (nd) => {
					const next = [...edid.descriptors];
					next[i] = nd;
					set({ descriptors: next });
				}
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "CTA-861 extension",
			right: cta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "minor",
				onClick: () => set({ extensions: edid.extensions.filter((x) => x !== cta) }),
				children: "Remove"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "minor",
				onClick: () => set({ extensions: [...edid.extensions, emptyCta()] }),
				children: "Add"
			}),
			children: cta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaEditor, {
				cta,
				onChange: (next) => set({ extensions: edid.extensions.map((x) => x === cta ? next : x) })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "No CTA extension. Without one an EDID says nothing about HDMI, audio, HDR, 4:2:0 or deep colour — a sink that only has a base block is treated as DVI."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "DisplayID 2.0 extension",
			right: did ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "minor",
				onClick: () => set({ extensions: edid.extensions.filter((x) => x !== did) }),
				children: "Remove"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "minor",
				onClick: () => set({ extensions: [...edid.extensions, {
					kind: "displayid",
					version: 32,
					primaryUseCase: 3,
					extensionCount: 0,
					type7Timings: primary ? [{
						timing: primary,
						preferred: true,
						aspect: "16:9",
						fractional: false
					}] : [],
					unknownBlocks: []
				}] }),
				children: "Add"
			}),
			children: did ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "note",
					style: { marginBottom: 10 },
					children: "Type VII timings state the clock in kHz across 24 bits, so they reach far beyond the 655.35 MHz a detailed timing descriptor can hold. This is the only way to put 2160p120 in an EDID."
				}),
				did.type7Timings.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						borderTop: i ? "1px solid var(--line)" : void 0,
						paddingTop: i ? 12 : 0,
						marginTop: i ? 12 : 0
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimingEditor, {
						t: t.timing,
						onChange: (timing) => {
							const next = {
								...did,
								type7Timings: did.type7Timings.map((x, j) => j === i ? {
									...x,
									timing
								} : x)
							};
							set({ extensions: edid.extensions.map((x) => x === did ? next : x) });
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row",
						style: { marginTop: 8 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							label: "Preferred",
							checked: t.preferred,
							onChange: (preferred) => {
								const next = {
									...did,
									type7Timings: did.type7Timings.map((x, j) => j === i ? {
										...x,
										preferred
									} : x)
								};
								set({ extensions: edid.extensions.map((x) => x === did ? next : x) });
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "minor",
							onClick: () => {
								const next = {
									...did,
									type7Timings: did.type7Timings.filter((_, j) => j !== i)
								};
								set({ extensions: edid.extensions.map((x) => x === did ? next : x) });
							},
							children: "Remove timing"
						})]
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "minor",
					style: { marginTop: 10 },
					onClick: () => {
						const seed = primary ?? did.type7Timings[0]?.timing;
						if (!seed) return;
						const next = {
							...did,
							type7Timings: [...did.type7Timings, {
								timing: seed,
								preferred: false,
								aspect: "16:9",
								fractional: false
							}]
						};
						set({ extensions: edid.extensions.map((x) => x === did ? next : x) });
					},
					children: "Add timing"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "No DisplayID block. You need one only when the pixel clock exceeds 655.35 MHz — a needless extension is another block for a fussy sink to choke on."
			})
		})
	] });
}
//#endregion
//#region src/components/LinkSummary.tsx
/**
* What the mode costs, and the smallest interface version that carries it.
*
* The DVI row is here because half this fleet's kit is DVI-era and "single or
* dual link?" is the first question anyone asks about a LiveCore input.
*/
function LinkSummary({ timing, signal }) {
	const hdmi = hdmiRequirement(timing, signal);
	const dp4 = dpRequirement(timing, signal, 4);
	const dp2 = dpRequirement(timing, signal, 2);
	const dvi = dviRequirement(timing, signal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Signal cost and required interface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Pixel clock",
						v: formatHz(timing.pixelClockHz)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Raster",
						v: `${hTotal(timing)} x ${vTotal(timing)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Line rate",
						v: `${(hFreq(timing) / 1e3).toFixed(2)} kHz`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: timing.interlaced ? "Field rate" : "Refresh",
						v: `${vFreq(timing).toFixed(3)} Hz`
					}),
					timing.interlaced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Frame rate",
						v: `${frameRate(timing).toFixed(3)} Hz`
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Bits per pixel",
						v: `${bitsPerPixel(signal)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Payload",
						v: formatBps(timing.pixelClockHz * bitsPerPixel(signal))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Minimum interface version" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "HDMI",
						small: true,
						v: hdmi.version ? hdmi.version.name : "no HDMI version carries this"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "DisplayPort (4 lane)",
						small: true,
						v: dp4.rate ? `${dp4.rate.name} — ${dp4.rate.since}` : "beyond UHBR20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "DisplayPort (2 lane)",
						small: true,
						v: dp2.rate ? `${dp2.rate.name} — ${dp2.rate.since}` : "beyond UHBR20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "DVI",
						small: true,
						v: dvi.link === "single" ? "Single link" : dvi.link === "dual" ? "Dual link" : "beyond dual link"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: hdmi.viaTmds ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"TMDS character rate ",
					formatHz(hdmi.tmdsCharacterRateHz),
					" — ",
					(hdmi.utilisation * 100).toFixed(0),
					"% of that version’s ceiling."
				] }) : hdmi.version ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Needs a fixed-rate link: ",
					formatBps(hdmi.payloadBps),
					" at ",
					(hdmi.utilisation * 100).toFixed(0),
					"% of",
					" ",
					hdmi.version.name.replace("HDMI 2.1 ", ""),
					" after 16b/18b coding."
				] }) : null
			}),
			hdmi.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note warn",
				children: hdmi.note
			}) : null,
			dp4.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note warn",
				children: ["DisplayPort: ", dp4.note]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: "DisplayPort figures are the raw link budget after line coding. Real capacity is a little lower because the stream is packed into transfer units with per-line overhead, so treat anything above 98% as marginal rather than as a pass. HDMI TMDS is a clock ceiling and is exact."
			})
		]
	});
}
//#endregion
//#region src/lib/capability/devices.ts
/**
* Per-model input capability for the processors this fleet meets.
*
* RULES FOR EDITING, and they are not negotiable:
*
*  1. Every `documented` device carries at least one citation, and the citation
*     says what was actually read — not "vendor website".
*  2. A number the vendor does not state is `inferred` at best. Inferring
*     "HDMI 2.0 therefore 600 MHz" is fair; inventing a custom-format ceiling
*     is not.
*  3. When a vendor quotes a format ("4K60 8-bit 4:4:4") rather than a clock,
*     the clock recorded here is the CTA-861 clock for that format, and the
*     note says so. Do not silently upgrade it to a round number.
*  4. Nothing here has been checked against the hardware. Every entry is
*     paperwork. The UI says this; do not remove that.
*
* Common connector shapes, so a per-device typo can't diverge from the standard.
*/
var HDMI_14 = (count) => ({
	kind: "hdmi",
	label: "HDMI 1.4",
	count,
	maxPixelClockHz: 34e7,
	maxBpc: 12,
	formats: [
		"rgb444",
		"ycbcr444",
		"ycbcr422"
	],
	hdcp: ["1.4"],
	dsc: false,
	vrr: false
});
var HDMI_20 = (count, maxHz = 6e8, maxBpc = 12) => ({
	kind: "hdmi",
	label: "HDMI 2.0",
	count,
	maxPixelClockHz: maxHz,
	maxBpc,
	formats: [
		"rgb444",
		"ycbcr444",
		"ycbcr422",
		"ycbcr420"
	],
	hdcp: ["1.4", "2.2"],
	dsc: false,
	vrr: false
});
var DP_12 = (count, maxHz = 6e8, maxBpc = 10) => ({
	kind: "displayport",
	label: "DisplayPort 1.2",
	count,
	maxPixelClockHz: maxHz,
	dpLaneBps: 54e8,
	dpLanes: 4,
	maxBpc,
	formats: [
		"rgb444",
		"ycbcr444",
		"ycbcr422"
	],
	hdcp: ["1.3"],
	dsc: false,
	vrr: false
});
var DP_14 = (count, maxHz = 12e8) => ({
	kind: "displayport",
	label: "DisplayPort 1.4",
	count,
	maxPixelClockHz: maxHz,
	dpLaneBps: 81e8,
	dpLanes: 4,
	maxBpc: 10,
	formats: [
		"rgb444",
		"ycbcr444",
		"ycbcr422"
	],
	hdcp: ["1.3", "2.2"],
	dsc: false,
	vrr: false
});
var AW = "Analog Way";
var BARCO = "Barco";
var DEVICES = [
	{
		id: "aw-livecore-ascender",
		vendor: AW,
		family: "LiveCore",
		model: "Ascender 16 / 32 / 48",
		role: "sink",
		standards: [
			"gtf",
			"cvt",
			"dmt",
			"manual"
		],
		capacityModes: [{
			id: "single",
			label: "Single-link",
			connectors: [
				{
					kind: "dvi",
					label: "Single-link DVI-I",
					count: 1,
					maxPixelClockHz: 165e6,
					maxBpc: 8,
					formats: [
						"rgb444",
						"ycbcr444",
						"ycbcr422"
					],
					hdcp: ["1.4"],
					dsc: false,
					vrr: false
				},
				{
					kind: "hdmi",
					label: "HDMI (single-link)",
					count: 1,
					maxPixelClockHz: 165e6,
					maxBpc: 8,
					formats: [
						"rgb444",
						"ycbcr444",
						"ycbcr422"
					],
					hdcp: ["1.4"],
					dsc: false,
					vrr: false
				},
				{
					kind: "displayport",
					label: "DisplayPort 1.1a (4-lane)",
					count: 1,
					maxPixelClockHz: 165e6,
					dpLaneBps: 27e8,
					dpLanes: 4,
					maxBpc: 8,
					formats: [
						"rgb444",
						"ycbcr444",
						"ycbcr422"
					],
					hdcp: ["1.3"],
					dsc: false,
					vrr: false
				}
			]
		}, {
			id: "dual",
			label: "Dual-link",
			tradeoff: "Available only on inputs #2, #4, #6, #8, #10 and #12, and it DISABLES the neighbouring input (#1 with #2, #5 with #6, #9 with #10) — the unit needs both to carry the link.",
			connectors: [{
				kind: "dvi",
				label: "Dual-link DVI-D",
				count: 1,
				maxPixelClockHz: 33e7,
				maxBpc: 8,
				formats: [
					"rgb444",
					"ycbcr444",
					"ycbcr422"
				],
				hdcp: ["1.4"],
				dsc: false,
				vrr: false
			}]
		}],
		notes: [
			"The 165 MHz single-link ceiling is exactly 1600x1200 @60 — the manual names that mode as the limit case.",
			"Inputs accept GTF 1.1, CVT 1.1 and DMT 1.0 rev 12; anything else has to go in as a custom format.",
			"4:2:0 is an OUTPUT-only format on this platform. A 4:2:0 EDID will not buy you a 4K60 input here."
		],
		confidence: "documented",
		citations: [
			{
				claim: "\"The maximum pixel clock frequency is 165 MHz. This corresponds to 1600x1200 @ 60 Hz, for single link. For dual and 4K resolutions, the maximum pixel clock frequency is 330 MHz.\"",
				source: "LiveCore Unit User Manual (UK), §4.5.3 Computer formats",
				read: "2026-08-20"
			},
			{
				claim: "Plug types: 4-lane DisplayPort 1.1a, HDMI, single DVI-I / dual-link DVI-D, 3G/HD/SD-SDI, universal analog. Dual-link selectable on inputs #2/#4/#6/#8/#10/#12 and disables the paired input.",
				source: "LiveCore Unit User Manual (UK), §4.6 Input specifications and the Dual-Link section",
				read: "2026-08-20"
			},
			{
				claim: "Inputs support GTF v1.1, CVT v1.1 and DMT v1.0 rev 12.",
				source: "LiveCore Unit User Manual (UK), §4.5.4 Input Computer formats",
				read: "2026-08-20"
			}
		]
	},
	{
		id: "aw-livecore-nextage",
		vendor: AW,
		family: "LiveCore",
		model: "NeXtage 8 / 16",
		role: "sink",
		standards: [
			"gtf",
			"cvt",
			"dmt",
			"manual"
		],
		capacityModes: [],
		inheritsFrom: "aw-livecore-ascender",
		notes: ["Same input architecture and the same 165/330 MHz ceilings as the Ascender — one shared LiveCore platform."],
		confidence: "documented",
		citations: [{
			claim: "The LiveCore manual covers Ascender 16/32/48, NeXtage 8/16 and SmartMatriX Ultra as one platform.",
			source: "LiveCore Unit User Manual (UK), title page and §4.6",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-livecore-smartmatrix",
		vendor: AW,
		family: "LiveCore",
		model: "SmartMatriX Ultra",
		role: "sink",
		standards: [
			"gtf",
			"cvt",
			"dmt",
			"manual"
		],
		capacityModes: [],
		inheritsFrom: "aw-livecore-ascender",
		notes: ["Same LiveCore input platform: 165 MHz single-link, 330 MHz dual-link."],
		confidence: "documented",
		citations: [{
			claim: "Covered by the same LiveCore unit manual and the same input specification section.",
			source: "LiveCore Unit User Manual (UK), §4.6",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-livepremier-aquilon",
		vendor: AW,
		family: "LivePremier",
		model: "Aquilon RS / C (HDMI 2.0 input card)",
		role: "sink",
		maxRefreshHz: 144,
		capacityModes: [{
			id: "hdmi20",
			label: "4x HDMI 2.0",
			connectors: [HDMI_20(4, 6e8, 12)]
		}],
		notes: [
			"Each port takes 4K60 8-bit 4:4:4, or 4K60 12-bit 4:2:2, or 4K30 12-bit 4:4:4 — three different ways to spend the same 18 Gbps.",
			"High frame rate to 144 Hz, and custom extra-wide formats such as 8192x1080 @60 are explicitly supported.",
			"HDR10 and HLG; HDCP 1.4 and 2.2; up to 8 channels of embedded PCM per input."
		],
		confidence: "documented",
		citations: [{
			claim: "Each port supports \"formats up to 4K60 8 bits 4:4:4 or 4K60 12 bits 4:2:2 or 4K30 12 bits 4:4:4\"; HFR to 144 Hz; custom formats such as 8192x1080@60; HDCP 1.4 and 2.2.",
			source: "Analog Way — Four HDMI 2.0 input card for Aquilon series (ACC-AQL-IN-HDMI) product page",
			url: "https://www.analogway.com/products/four-hdmi-2-0-input-card-for-livepremier-tm-series",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-livepremier-aquilon-dp",
		vendor: AW,
		family: "LivePremier",
		model: "Aquilon RS / C (DisplayPort input card)",
		role: "sink",
		maxRefreshHz: 144,
		capacityModes: [{
			id: "dp12x4",
			label: "4x DisplayPort 1.2",
			connectors: [DP_12(4, 6e8, 10)]
		}, {
			id: "dp14x2",
			label: "2x DisplayPort 1.4",
			tradeoff: "PORTS 2 AND 4 ARE PREEMPTED. Selecting DP 1.4 leaves you ports 1 and 3 only — the card borrows its neighbour's lanes to build each 1.4 link. Patch accordingly: a cable already in port 2 or 4 goes dark the moment the mode is applied.",
			connectors: [DP_14(2, 12e8)]
		}],
		notes: [
			"This is the clearest capacity trade in the fleet: the same card is four DP 1.2 ports or two DP 1.4 ports.",
			"DP 1.2 mode reaches 4K60 10-bit 4:4:4. DP 1.4 mode reaches 5K60 8-bit 4:4:4, or 3840x2160 RB at 120 Hz.",
			"The 120 Hz figure is quoted for REDUCED BLANKING specifically — a standard-blanking 2160p120 needs more clock than the card is rated for.",
			"Switching to DP 1.4 preempts ports 2 and 4; only ports 1 and 3 remain live. Analog Way documents the 4-to-2 port drop but not WHICH two survive."
		],
		confidence: "documented",
		citations: [{
			claim: "Four DP 1.2 input ports, of which two are configurable as DP 1.4. DP 1.4 mode: up to 5K60p 8-bit 4:4:4, or up to 3840x2160RB 120 Hz 8-bit 4:4:4, up to 34.2 Gbps. DP 1.2 mode: up to 4K60 10-bit 4:4:4, custom formats to 8192x1080@60. HDCP 1.4 and 2.2.",
			source: "Analog Way — DisplayPort 1.2 / 1.4 input card for Aquilon series product page",
			url: "https://www.analogway.com/products/four-displayport-1-2-input-card-for-livepremier-tm-series",
			read: "2026-08-20"
		}, {
			claim: "Enabling DP 1.4 preempts ports 2 and 4, leaving ports 1 and 3 usable. Operator report, not vendor documentation — the vendor states the port count drops from four to two but not which two.",
			source: "Allan Sargeant, field knowledge",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-midra4k",
		vendor: AW,
		family: "Midra 4K",
		model: "Eikos 4K / QuickMatriX 4K / QuickVu 4K / Pulse 4K",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(4, 6e8, 10), DP_12(2, 6e8, 10)]
		}],
		notes: ["Ten inputs: eight 4K60 (four HDMI 2.0, two 12G-SDI, two DP 1.2) plus two 1080p inputs on selectable HDMI/SDI.", "4K60 10-bit 4:4:4 processing throughout, HDR, HDCP 2.2."],
		confidence: "documented",
		citations: [{
			claim: "Ten inputs including eight 4K60 inputs (four HDMI 2.0, two 12G-SDI and two DisplayPort 1.2) and two 1080p inputs with user-selectable HDMI and SDI connectors; 4K60 10-bit 4:4:4 processing; HDCP 2.2.",
			source: "Analog Way — Midra 4K series announcement and product pages",
			url: "https://www.analogway.com/midra-4k-presentation-switchers",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-midra-legacy",
		vendor: AW,
		family: "Midra (previous generation)",
		model: "Pulse2 / Eikos2 / Saphyr / SmartMatriX2 / QuickMatriX / QuickVu",
		role: "sink",
		standards: [
			"gtf",
			"cvt",
			"dmt",
			"manual"
		],
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [{
				kind: "hdmi",
				label: "HDMI (single-link, DVI-D compatible)",
				count: 2,
				maxPixelClockHz: 165e6,
				maxBpc: 8,
				formats: [
					"rgb444",
					"ycbcr444",
					"ycbcr422"
				],
				hdcp: ["1.4"],
				dsc: false,
				vrr: false
			}]
		}],
		notes: [
			"Single-link only: 165 MHz, which the manual states as 1920x1200 @60.",
			"8-bit 4:4:4 or 4:2:2 — this generation has no deep colour path and no 4K input at all.",
			"HDMI extras (Ethernet channel, ARC, 3D, 4K, deep colour) are explicitly NOT processed."
		],
		confidence: "documented",
		citations: [{
			claim: "\"The maximum pixel clock frequency is 165 MHz. Supported formats include 1920x1200 @ 60hz\"",
			source: "Pulse2 User Manual, computer formats section",
			read: "2026-08-20"
		}, {
			claim: "HDMI inputs accept RGB or YUV, 8 bits, 4:4:4 or 4:2:2. Inputs support GTF v1.1, CVT v1.1 and DMT v1.0 rev 12. HDMI Ethernet Channel, ARC, 3D, 4K, Content Type and Deep Color are not processed.",
			source: "Pulse2 User Manual, input specifications and the HDMI warning note",
			read: "2026-08-20"
		}]
	},
	{
		id: "aw-alta4k",
		vendor: AW,
		family: "Alta 4K",
		model: "Zenith 100 / Zenith 200 (Alta 4K series)",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(8, 6e8, 12), DP_12(4, 6e8, 12)]
		}],
		notes: ["Sixteen inputs: fourteen at 4K60 (eight HDMI 2.0, four DP 1.2, two 12G-SDI) plus two 1080p on selectable HDMI/SDI.", "HDMI ports take 4K60 8-bit 4:4:4 or 4K60 12-bit 4:2:2; DP ports take 4K60 10-bit 4:4:4 or 4K60 12-bit 4:2:2."],
		confidence: "documented",
		citations: [{
			claim: "Up to sixteen inputs including fourteen 4K60 inputs (eight HDMI 2.0, four DisplayPort 1.2, two 12G-SDI) and two 1080p inputs. HDMI: up to 4K60 8-bit 4:4:4 or 4K60 12-bit 4:2:2. DisplayPort: up to 4K60 10-bit 4:4:4 or 4K60 12-bit 4:2:2. HDCP 2.2.",
			source: "Analog Way — Alta 4K presentation switchers product pages",
			url: "https://www.analogway.com/alta-4k-presentation-switchers",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-e2-gen1",
		vendor: BARCO,
		family: "Event Master",
		model: "E2 / S3 (Gen 1 DP-HDMI input card)",
		role: "sink",
		capacityModes: [
			{
				id: "four-1200p",
				label: "4x 1200p60",
				connectors: [HDMI_14(2), {
					kind: "displayport",
					label: "DisplayPort 1.1",
					count: 2,
					maxPixelClockHz: 3e8,
					dpLaneBps: 27e8,
					dpLanes: 4,
					maxBpc: 12,
					formats: ["rgb444", "ycbcr444"],
					hdcp: ["1.3"],
					dsc: false,
					vrr: false
				}]
			},
			{
				id: "two-4k30",
				label: "2x 4K/UHD @30",
				tradeoff: "Two inputs instead of four.",
				connectors: [{
					kind: "displayport",
					label: "DisplayPort 1.1",
					count: 2,
					maxPixelClockHz: 3e8,
					dpLaneBps: 27e8,
					dpLanes: 4,
					maxBpc: 12,
					formats: ["rgb444", "ycbcr444"],
					hdcp: ["1.3"],
					dsc: false,
					vrr: false
				}]
			},
			{
				id: "one-4k60-dual-cable",
				label: "1x 4K60 — DUAL CABLE",
				tradeoff: "Consumes the whole card, and the source must split the image across two cables. A single-cable 4K60 EDID will not work here at all.",
				connectors: [{
					kind: "displayport",
					label: "DisplayPort 1.1 x2 (dual cable)",
					count: 1,
					maxPixelClockHz: 6e8,
					dpLaneBps: 27e8,
					dpLanes: 8,
					maxBpc: 12,
					formats: ["rgb444", "ycbcr444"],
					hdcp: ["1.3"],
					dsc: false,
					vrr: false
				}]
			}
		],
		notes: [
			"Gen 1 predates HDMI 2.0 entirely: 4K60 exists here only as two cables carrying half the picture each.",
			"The HDMI ports are 1.4 at 297 Mpix/s; the DisplayPort ports are 1.1 at 300 Mpix/s. Dual-link DVI on the tri-combo card reaches 330 Mpix/s.",
			"RGB or YCbCr 4:4:4, 12-bit."
		],
		confidence: "documented",
		citations: [{
			claim: "DP/HDMI input card (Gen 1): DisplayPort 1.1 up to 300 Mpix/s, HDMI 1.4 up to 297 Mpix/s; \"up to 4x 1200p@60, or 1x 4K@60p/UHD per card (dual cable)\"; RGB or YCbCr 4:4:4 12-bit; HDCP 1.3 (DP) and 1.4 (HDMI).",
			source: "Barco Event Master E2 Series User Manual, specifications of the DP/HDMI input card (Gen 1)",
			url: "https://www.manualslib.com/manual/1822386/Barco-Event-Master-E2-Series.html?page=546",
			read: "2026-08-20"
		}, {
			claim: "Dual-link DVI supports 330 Mpix/sec on the tri-combo input card.",
			source: "Barco E2 Tri-combo spec sheet",
			url: "https://assets.barco.com/m/3d46b7fb2bf0dda9/original/E2-Tri-combo-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-e2-gen2",
		vendor: BARCO,
		family: "Event Master",
		model: "E2 Gen 2 (HDMI 2.0 quad input card)",
		role: "sink",
		capacityModes: [{
			id: "four-wqxga",
			label: "4x WQXGA @60 (HDMI 1.4a)",
			connectors: [HDMI_14(4)]
		}, {
			id: "two-uhd60",
			label: "2x UHD @60 (HDMI 2.0) — dual capacity slot",
			tradeoff: "The card occupies a dual-capacity input slot; two inputs instead of four.",
			connectors: [HDMI_20(2, 6e8, 10)]
		}],
		notes: [
			"Single-cable 4K60 at last: 600 Mpix/s, UHD60 8-bit 4:4:4 or UHD60 10-bit 4:2:2.",
			"The chassis carries 12x HDMI 2.0 and 12x DisplayPort 1.2, both rated 600 MHz max, for up to 16 4K inputs.",
			"HDCP 2.2 end to end when the whole chain is 2.2, backwards compatible with 1.x."
		],
		confidence: "documented",
		citations: [{
			claim: "HDMI 2.0 quad input card (Gen 2): up to 600 Mpix/s; \"2x UHD@60p (HDMI 2.0) or 4x WQXGA@60p (HDMI 1.4a) inputs per card\"; UHD@60p 8-bit 4:4:4 or UHD@60p 10-bit 4:2:2; dual capacity input slot; HDCP 2.2 backwards compatible with 1.x.",
			source: "Barco Event Master E2 Series User Manual, specifications of the HDMI 2.0 quad input card (Gen 2)",
			url: "https://www.manualslib.com/manual/1822386/Barco-Event-Master-E2-Series.html?page=546",
			read: "2026-08-20"
		}, {
			claim: "E2 Gen 2: up to 16x 4K inputs, each input card supports up to 2x 4K@60p; 12x HDMI 2.0 (600 MHz max); 12x DisplayPort 1.2 (600 MHz max).",
			source: "Barco E2 Gen 2 spec sheet",
			url: "https://assets.barco.com/m/1da1a218bfbbede6/original/E2-Gen-2-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-s3-4k",
		vendor: BARCO,
		family: "Event Master",
		model: "S3-4K",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard (Gen 2 cards)",
			connectors: [HDMI_20(4, 6e8, 10), DP_12(4, 66e7, 10)]
		}],
		notes: ["HDMI 2.0 rated 600 MHz max; DisplayPort 1.2 rated 660 MHz max — the DP ports are the higher-clocked pair."],
		confidence: "documented",
		citations: [{
			claim: "S3-4K: HDMI 2.0 (4 to 96, 600 MHz max) and DisplayPort 1.2 (4 to 96, 660 MHz max) inputs.",
			source: "Barco S3-4K spec sheet",
			url: "https://assets.barco.com/m/663dfa0f62601d99/original/S3-4K-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-ex",
		vendor: BARCO,
		family: "Event Master",
		model: "EX expansion chassis",
		role: "sink",
		capacityModes: [],
		notes: ["An expansion chassis: it takes the same Event Master input cards, so its capability is whichever card is fitted — check the E2 Gen 1 or Gen 2 row instead.", "E2 Gen 2 links to up to 8 EX chassis, or 2 S3-4K, or 1 S3-4K plus 4 EX."],
		confidence: "documented",
		citations: [{
			claim: "Expansion via simple linking to: 2 S3-4K or 8 EX chassis, or 1 S3-4K plus 4 EX. HDCP compliance determined by installed cards.",
			source: "Barco E2 Gen 2 spec sheet",
			url: "https://assets.barco.com/m/1da1a218bfbbede6/original/E2-Gen-2-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-encore3",
		vendor: BARCO,
		family: "Encore3",
		model: "Encore3 (E3)",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard (Event Master Gen 2 cards)",
			connectors: [HDMI_20(9, 6e8, 12), DP_12(5, 6e8, 12)]
		}],
		notes: [
			"Named \"E3\" in the field, but it is Encore3 — NOT an Event Master E-series box, and it is not the same platform as E2.",
			"Up to 7 input card slots, each up to 4x 4K@60p, for 16x 4K60 inputs; up to 9x HDMI 2.0 and 5x DP 1.2, both to 4096x2160 @60.",
			"12-bit 4:4:4 processing with 8x 4K60 program outputs."
		],
		confidence: "documented",
		citations: [{
			claim: "Up to 7 input capable card slots to occupy with Event Master Gen2 cards, each input card supports up to 4x 4K @60p inputs; 16x 4K@60p inputs; up to 9x HDMI 2.0 (up to 4096x2160 @60Hz); up to 5x DisplayPort 1.2 (up to 4096x2160 @60Hz). HDCP compliance determined by installed cards.",
			source: "Barco ENCORE3 spec sheet",
			url: "https://assets.barco.com/m/3dde766e9029e7f4/original/ENCORE3-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-pds-4k",
		vendor: BARCO,
		family: "PDS",
		model: "PDS-4K",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(6, 6e8, 10)]
		}, {
			id: "with-dp-card",
			label: "With audio + DisplayPort option card",
			tradeoff: "Requires the optional expansion card in the option slot.",
			connectors: [HDMI_20(6, 6e8, 10), DP_12(2, 6e8, 10)]
		}],
		notes: [
			"Six HDMI 2.0 inputs as standard; the option card adds two DisplayPort 1.2 inputs plus embedded audio pass-through.",
			"Outputs are 2x 4K60 or 4x 4K30 — worth knowing, because a PDS-4K cannot pass a 4K60 EDID straight through to four screens.",
			"HDCP 1.x and 2.2."
		],
		confidence: "documented",
		citations: [{
			claim: "Video inputs: 6x HDMI 2.0 connectors. Video outputs: 4x HDMI 2.0 connectors. 2x outputs up to 4K60 or 4x outputs up to 4K30. HDCP 1.x and 2.2. Option Card slot supports additional video input connectors, embedded audio processing and Dante audio.",
			source: "Barco PDS-4K spec sheet",
			url: "https://assets.barco.com/m/28436bd46ae91eed/original/PDS-4K-en-Spec-sheet.pdf",
			read: "2026-08-20"
		}, {
			claim: "The optional audio and DisplayPort 1.2 input card adds two DisplayPort 1.2 inputs.",
			source: "Barco — PDS-4K Audio and DisplayPort 1.2 input card product page",
			url: "https://www.barco.com/en/product/pds4k-audio-dp12-input-card",
			read: "2026-08-20"
		}]
	},
	{
		id: "barco-pds-902",
		vendor: BARCO,
		family: "PDS",
		model: "PDS-902 3G",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [{
				kind: "dvi",
				label: "Single-link DVI-I",
				count: 4,
				maxPixelClockHz: 165e6,
				maxBpc: 8,
				formats: [
					"rgb444",
					"ycbcr444",
					"ycbcr422"
				],
				hdcp: ["1.4"],
				dsc: false,
				vrr: false
			}]
		}],
		notes: ["An HD-era switcher: single-link only, no 4K path of any kind.", "NOT VERIFIED against a Barco document in this pass — the 165 MHz single-link figure is the DVI standard limit, not a quoted PDS-902 number. Treat this row as a placeholder and check the manual before relying on it."],
		confidence: "unverified",
		citations: []
	},
	{
		id: "pixelhue-p20",
		vendor: "PixelHue",
		family: "P Series",
		model: "P20",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(8, 6e8, 10), DP_12(8, 6e8, 10)]
		}],
		notes: [
			"Eight combo connectors that are each DP 1.2 OR HDMI 2.0 — the count above is the total per type, not 16 ports.",
			"Plus 4x 12G-SDI in. 4:4:4 10-bit processing, HDR10/HLG/SDR conversion.",
			"Switcher mode gives 2x 4K60 out; PGM-only mode reaches 8Kx4K@60."
		],
		confidence: "documented",
		citations: [{
			claim: "P20: 8 x DP 1.2 / HDMI 2.0 + 4 x 12G-SDI inputs, 8 x HDMI 2.0 outputs. True 4:4:4 10-bit processing, HDR10/HLG/SDR. Switcher mode up to two 4Kx2K@60Hz outputs; PGM-only mode up to 8Kx4K@60Hz.",
			source: "PixelHue P20 product listings and PixelHue P Series product page",
			url: "https://www.pixelhue.com/index.php/content/products_detail/catid/64/id/20.html",
			read: "2026-08-20"
		}]
	},
	{
		id: "pixelhue-p10",
		vendor: "PixelHue",
		family: "P Series",
		model: "P10",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(4, 6e8, 10), DP_12(4, 6e8, 10)]
		}],
		notes: ["The P20’s smaller sibling: one 4Kx2K@60 output in switcher mode, 8Kx2K@60 in PGM-only.", "Port count here is INFERRED as half the P20’s, not read from a PixelHue document. Check before relying on it."],
		confidence: "inferred",
		citations: [{
			claim: "P10 and P20 are one series supporting HDMI 2.0, DP 1.2 and 12G-SDI; P10 gives one 4Kx2K@60 output in switcher mode and 8Kx2K@60 in PGM-only mode.",
			source: "PixelHue P Series product page",
			url: "https://www.pixelhue.com/index.php/content/products_detail/catid/64/id/20.html",
			read: "2026-08-20"
		}]
	},
	{
		id: "brompton-sx40",
		vendor: "Brompton",
		family: "Tessera",
		model: "SX40",
		role: "sink",
		minRefreshHz: 23.976,
		maxRefreshHz: 250,
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [{
				kind: "hdmi",
				label: "HDMI 2.0",
				count: 1,
				maxPixelClockHz: 6e8,
				maxBpc: 12,
				formats: [
					"rgb444",
					"ycbcr444",
					"ycbcr422",
					"ycbcr420"
				],
				hdcp: ["1.4", "2.2"],
				dsc: false,
				vrr: false
			}]
		}],
		notes: [
			"The widest frame-rate window of anything here: 23.976 Hz to 250 Hz on HDMI, which is the point of it for LED volumes.",
			"Custom resolutions up to 4K DCI, 18 Gbps, 600 MHz maximum pixel clock.",
			"8, 10 or 12-bit; RGB, YCbCr 4:2:0, 4:2:2 and 4:4:4.",
			"DVI-D and DisplayPort sources need a passive/active adaptor — there is no native DP connector."
		],
		confidence: "documented",
		citations: [{
			claim: "HDMI 2.0 \"up to 4k DCI with customised resolutions at frame rates from 23.976Hz to 250Hz\" with \"18Gbps bandwidth to a maximum pixel clock of 600MHz\"; 8, 10 or 12-bit in RGB, YCbCr 4:2:0, 4:2:2 and 4:4:4; DVI-D and DisplayPort accepted via adaptor.",
			source: "Brompton Technology — Tessera User Manual, \"4K Sources (for SX40 and S8)\"",
			url: "https://www.bromptontech.com/online-help/Content/Tessera%20User%20Manual/03.%20Feature%20Topics/09.3%20-%204K%20Sources.htm",
			read: "2026-08-20"
		}]
	},
	{
		id: "novastar-mx40pro",
		vendor: "NovaStar",
		family: "MX Series",
		model: "MX40 Pro",
		role: "sink",
		capacityModes: [{
			id: "standard",
			label: "Standard",
			connectors: [HDMI_20(1, 6e8, 10), DP_12(1, 6e8, 10)]
		}],
		notes: ["HDMI 2.0, DP 1.2 and 12G-SDI in; standard resolutions to 3840x2160 @60.", "Connector COUNTS here are not from the NovaStar datasheet — only the connector types and the 3840x2160@60 ceiling are. Treat the counts as unverified."],
		confidence: "inferred",
		citations: [{
			claim: "MX40 Pro offers HDMI 2.0, DP 1.2 and 12G-SDI video inputs, 20x Ethernet output ports and 4x 10G optical ports; supports standard resolutions up to 3840x2160@60Hz.",
			source: "NovaStar MX40 Pro LED Display Controller Specifications V1.4.1",
			url: "https://oss.novastar.tech/uploads/2024/08/MX40-Pro-LED-Display-Controller-Specifications-V1.4.1.pdf",
			read: "2026-08-20"
		}]
	},
	{
		id: "disguise-vx4",
		vendor: "disguise",
		family: "vx",
		model: "vx 4 (HDMI 2.0 VFC output)",
		role: "source",
		capacityModes: [{
			id: "standard",
			label: "HDMI 2.0 VFC card",
			connectors: [HDMI_20(4, 6e8, 8)]
		}],
		notes: [
			"A SOURCE, not a sink: the question for a media server is whether it can GENERATE the mode your EDID asks for.",
			"Ships with four HDMI 2.0 VFC output cards supporting up to 4096x2160.",
			"Capture is SDI-based on this machine, so an EDID you build is unlikely to be read by its inputs."
		],
		confidence: "documented",
		citations: [{
			claim: "vx 4 ships standard with four HDMI 2.0 VFC output cards supporting resolutions up to 4096 x 2160; 16x 3G-SDI inputs; 1x DisplayPort 1.2 for GUI.",
			source: "disguise — VX 4 Specifications, disguise User Guide",
			url: "https://help.disguise.one/hardware/legacy/vx4/vx4-specs",
			read: "2026-08-20"
		}]
	},
	{
		id: "greenhippo-boreal",
		vendor: "Green Hippo",
		family: "Hippotizer",
		model: "Boreal+ MK2 (DisplayPort)",
		role: "source",
		capacityModes: [{
			id: "standard",
			label: "DisplayPort outputs",
			connectors: [DP_12(2, 6e8, 8)]
		}],
		notes: [
			"A SOURCE: what matters is whether it can drive the mode your EDID advertises.",
			"Boreal+ MK2 DisplayPort: two DisplayPort outputs to a maximum of 3840x2160 @60.",
			"Output COUNT and the DP version are from a reseller listing rather than a Green Hippo datasheet — the 3840x2160@60 ceiling is the sourced part."
		],
		confidence: "inferred",
		citations: [{
			claim: "Boreal+ MK2 DisplayPort has two DisplayPort outputs with a maximum resolution of 3840x2160@60.",
			source: "Green Hippo Hippotizer V4 manual, Boreal+ MK2 topic",
			url: "https://www.manula.com/manuals/green-hippo/hippotizer-v4/4.6.4/en/topic/boreal-mk2",
			read: "2026-08-20"
		}]
	}
];
/**
* Resolve `inheritsFrom` into real modes.
*
* Only an explicit pointer counts. A device with no modes and no pointer keeps
* none, and the evaluator reports 'unknown' for it — which is what an EX
* chassis deserves, because its answer depends entirely on which generation of
* card is fitted.
*/
function resolveModes(d) {
	if (d.capacityModes.length > 0 || !d.inheritsFrom) return d;
	const donor = DEVICES.find((x) => x.id === d.inheritsFrom);
	return donor ? {
		...d,
		capacityModes: donor.capacityModes
	} : d;
}
var DEVICE_LIST = DEVICES.map(resolveModes);
//#endregion
//#region src/lib/capability/evaluate.ts
var pct = (n) => `${(n * 100).toFixed(0)}%`;
var mhz = (hz) => `${(hz / 1e6).toFixed(1)} MHz`;
var FORMAT_NAMES = {
	rgb444: "RGB 4:4:4",
	ycbcr444: "YCbCr 4:4:4",
	ycbcr422: "YCbCr 4:2:2",
	ycbcr420: "YCbCr 4:2:0"
};
/** 8b/10b below UHBR — every DP rate modelled on these devices is 8b/10b. */
var DP_EFFICIENCY = .8;
function checkConnector(c, t, s) {
	const reasons = [];
	let headroom = 0;
	if (!c.formats.includes(s.format)) reasons.push(`does not accept ${FORMAT_NAMES[s.format] ?? s.format}`);
	if (!s.dsc && s.bpc > c.maxBpc) reasons.push(`${s.bpc}-bit exceeds the ${c.maxBpc}-bit ceiling`);
	if (s.dsc && !c.dsc) reasons.push("no DSC support — the compressed stream cannot be decoded here");
	if (s.vrr && !c.vrr) reasons.push("no variable refresh support — the source will be held to a fixed rate");
	if (c.kind === "hdmi" || c.kind === "dvi") {
		const rate = tmdsCharacterRateHz(t, s);
		if (!Number.isFinite(rate)) {
			reasons.push("DSC needs an FRL link; this connector is TMDS only");
			headroom = 1;
		} else {
			headroom = rate / c.maxPixelClockHz;
			if (rate > c.maxPixelClockHz) reasons.push(`needs ${mhz(rate)} of TMDS character rate, ceiling is ${mhz(c.maxPixelClockHz)}`);
		}
	} else if (c.kind === "displayport") {
		const clockRatio = t.pixelClockHz / c.maxPixelClockHz;
		if (t.pixelClockHz > c.maxPixelClockHz) reasons.push(`needs a ${mhz(t.pixelClockHz)} pixel clock, ceiling is ${mhz(c.maxPixelClockHz)}`);
		let linkRatio = 0;
		if (c.dpLaneBps && c.dpLanes) {
			const capacity = c.dpLaneBps * c.dpLanes * DP_EFFICIENCY;
			const payload = payloadBps(t, s);
			linkRatio = payload / capacity;
			if (payload > capacity) reasons.push(`needs ${(payload / 1e9).toFixed(2)} Gbps at ${bitsPerPixel(s)} bpp, link carries ${(capacity / 1e9).toFixed(2)} Gbps`);
			else if (linkRatio > .98) reasons.push(`at ${pct(linkRatio)} of the link budget — DisplayPort transfer-unit overhead may push this over in practice`);
		}
		headroom = Math.max(clockRatio, linkRatio);
	}
	return {
		connector: c,
		ok: reasons.filter((r) => !r.includes("may push this over")).length === 0,
		reasons,
		headroom
	};
}
function checkMode(m, t, s) {
	const connectors = m.connectors.map((c) => checkConnector(c, t, s));
	return {
		mode: m,
		ok: connectors.some((c) => c.ok),
		connectors
	};
}
function evaluateDevice(d, t, s) {
	const warnings = [];
	if (d.capacityModes.length === 0) return {
		device: d,
		status: "unknown",
		modes: [],
		warnings: ["No input capability recorded for this model."]
	};
	const rate = vFreq(t);
	if (d.minRefreshHz !== void 0 && rate < d.minRefreshHz - .01) warnings.push(`${rate.toFixed(2)} Hz is below the documented ${d.minRefreshHz} Hz minimum.`);
	if (d.maxRefreshHz !== void 0 && rate > d.maxRefreshHz + .01) warnings.push(`${rate.toFixed(2)} Hz exceeds the documented ${d.maxRefreshHz} Hz maximum.`);
	if (d.maxHActive !== void 0 && t.hActive > d.maxHActive) warnings.push(`${t.hActive} px wide exceeds the documented ${d.maxHActive} px maximum.`);
	const modes = d.capacityModes.map((m) => checkMode(m, t, s));
	const working = modes.filter((m) => m.ok);
	if (working.length === 0) return {
		device: d,
		status: "unsupported",
		modes,
		warnings
	};
	const free = working.find((m) => !m.mode.tradeoff);
	const chosen = free ?? working[0];
	const conn = chosen.connectors.find((c) => c.ok);
	if (chosen.mode.tradeoff) warnings.push(chosen.mode.tradeoff);
	for (const r of conn.reasons) warnings.push(r);
	return {
		device: d,
		status: warnings.some((w) => /below the documented|exceeds the documented/.test(w)) ? "conditional" : free && warnings.length === 0 ? "supported" : "conditional",
		requiredMode: chosen.mode,
		requiredConnector: conn.connector,
		modes,
		warnings
	};
}
function evaluateAll(t, s, devices = DEVICE_LIST) {
	return devices.map((d) => evaluateDevice(d, t, s));
}
//#endregion
//#region src/components/SupportMatrix.tsx
var PILL = {
	supported: {
		cls: "ok",
		label: "Yes"
	},
	conditional: {
		cls: "warn",
		label: "Conditional"
	},
	unsupported: {
		cls: "bad",
		label: "No"
	},
	unknown: {
		cls: "unknown",
		label: "Unknown"
	}
};
var CONF_LABEL = {
	documented: "documented",
	inferred: "inferred",
	unverified: "UNVERIFIED"
};
function Row({ v }) {
	const p = PILL[v.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "model",
			children: v.device.model
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "vendor",
			children: [
				v.device.vendor,
				" · ",
				v.device.family,
				v.device.role === "source" ? " · source" : ""
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `pill ${p.cls}`,
			children: p.label
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: v.requiredMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: v.requiredMode.label }), v.requiredConnector ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "vendor",
			children: ["via ", v.requiredConnector.label]
		}) : null] }) : v.status === "unsupported" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "vendor",
			children: v.modes[0]?.connectors[0]?.reasons[0] ?? "no input mode carries it"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "vendor",
			children: "—"
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [v.warnings.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "note warn",
			style: { marginTop: i ? 4 : 0 },
			children: w
		}, i)), v.device.notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "cite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: ["Notes & sources ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pill conf",
					children: CONF_LABEL[v.device.confidence]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					style: {
						margin: "6px 0 0",
						paddingLeft: 16,
						color: "var(--dim)",
						fontSize: 11.5
					},
					children: v.device.notes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, i))
				}),
				v.device.citations.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [c.claim, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("cite", { children: [
					c.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: c.url,
						target: "_blank",
						rel: "noreferrer",
						style: { color: "var(--dim)" },
						children: c.source
					}) : c.source,
					" ",
					"· read ",
					c.read
				] })] }, i)),
				v.device.citations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "No source recorded. Treat every number in this row as a guess." }) : null
			]
		}) : null] })
	] });
}
function SupportMatrix({ timing, signal }) {
	const [vendor, setVendor] = (0, import_react.useState)("all");
	const verdicts = (0, import_react.useMemo)(() => evaluateAll(timing, signal), [timing, signal]);
	const vendors = (0, import_react.useMemo)(() => ["all", ...new Set(verdicts.map((v) => v.device.vendor))], [verdicts]);
	const shown = vendor === "all" ? verdicts : verdicts.filter((v) => v.device.vendor === vendor);
	const counts = verdicts.reduce((a, v) => {
		a[v.status] = (a[v.status] ?? 0) + 1;
		return a;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Hardware support",
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			style: {
				fontSize: 11,
				color: "var(--dim)",
				fontWeight: 400
			},
			children: [
				counts.supported ?? 0,
				" yes · ",
				counts.conditional ?? 0,
				" conditional · ",
				counts.unsupported ?? 0,
				" no"
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filters",
				children: vendors.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-pressed": vendor === x,
					onClick: () => setVendor(x),
					children: x === "all" ? "All vendors" : x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "banner info",
				children: "Every row is paperwork — vendor manuals and spec sheets, cited per claim. Nothing here has been tried against the hardware. “Conditional” means it fits only in a mode you have to go and configure, and the column says which."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "matrix",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							style: { width: "26%" },
							children: "Device"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							style: { width: "11%" },
							children: "Takes it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							style: { width: "24%" },
							children: "Required mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "What to watch" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: shown.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { v }, v.device.id)) })]
				})
			})
		]
	});
}
//#endregion
//#region src/components/HostPanel.tsx
/**
* Save into the host's EDID slots — shown only when the editor is embedded.
*
* One EDID goes to one slot. A mosaic goes to as many slots in a row as it has
* plugs, starting where the operator says, because a tiled set is only useful
* whole: half of it in the bank bonds nothing.
*
* ⚠️ Replacing a slot that holds something is allowed, but never by default —
* the picker starts on the first empty slot (or the slot the editor was opened
* from, which is the one the operator means to change) and names what a write
* would replace.
*/
function HostPanel({ host, items, preferred }) {
	const [, bump] = (0, import_react.useReducer)((n) => n + 1, 0);
	(0, import_react.useEffect)(() => host.subscribe ? host.subscribe(bump) : void 0, [host]);
	const slots = host.slots();
	const firstEmpty = slots.find((s) => s.empty && !s.locked);
	const [start, setStart] = (0, import_react.useState)(preferred ?? firstEmpty?.id ?? slots[0]?.id ?? "");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [said, setSaid] = (0, import_react.useState)(null);
	const run = (0, import_react.useMemo)(() => targets(slots, start, items.length), [
		slots,
		start,
		items.length
	]);
	const replacing = run.filter((s) => !s.empty);
	const locked = run.filter((s) => s.locked);
	const broken = items.find((i) => !i.bytes);
	const blocked = busy || !!broken || run.length < items.length || locked.length > 0;
	const save = async () => {
		setBusy(true);
		setSaid(null);
		try {
			for (let i = 0; i < items.length; i++) await host.save(run[i].id, items[i].bytes);
			setSaid({
				ok: true,
				text: items.length === 1 ? `Saved to ${run[0].label}.` : `Saved ${items.map((it, i) => `${it.label} to ${run[i].label}`).join(", ")}.`
			});
		} catch (e) {
			setSaid({
				ok: false,
				text: e instanceof Error ? e.message : String(e)
			});
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: `Save to ${host.title}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field",
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: items.length === 1 ? "EDID bank slot" : `First of ${items.length} slots in a row` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: start,
						onChange: (e) => {
							setStart(e.target.value);
							setSaid(null);
						},
						children: slots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: s.id,
							disabled: s.locked,
							children: [
								s.label,
								" — ",
								s.locked ? `${s.name} (protected)` : s.empty ? "empty" : s.name
							]
						}, s.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "go",
					style: { alignSelf: "flex-end" },
					disabled: blocked,
					onClick: save,
					children: busy ? "Saving…" : items.length === 1 ? `Save to ${run[0]?.label ?? "…"}` : `Save ${items.length} tiles`
				})]
			}),
			broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note bad",
				children: [
					broken.label,
					" cannot be encoded",
					broken.error ? `: ${broken.error}` : "",
					"."
				]
			}) : run.length < items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note bad",
				children: [
					"There are not ",
					items.length,
					" slots from ",
					slots.find((s) => s.id === start)?.label,
					" to the end of the bank."
				]
			}) : locked.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note bad",
				children: [
					locked.map((s) => s.label).join(", "),
					" ",
					locked.length > 1 ? "are" : "is",
					" protected."
				]
			}) : replacing.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note warn",
				children: [
					"Replaces ",
					replacing.map((s) => `${s.label} (${s.name || "unnamed"})`).join(", "),
					"."
				]
			}) : null,
			items.length > 1 && !broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "note",
				children: items.map((it, i) => `${it.label} → ${run[i]?.label ?? "—"}`).join(" · ")
			}) : null,
			said ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: said.ok ? "note" : "note bad",
				style: said.ok ? { color: "var(--ok)" } : void 0,
				children: said.text
			}) : null
		]
	});
}
/** `count` slots in bank order from `start`, or fewer when the bank runs out. */
function targets(slots, start, count) {
	const at = slots.findIndex((s) => s.id === start);
	return at < 0 ? [] : slots.slice(at, at + count);
}
//#endregion
//#region src/App.tsx
var INITIAL = {
	name: "UHD-2160p60",
	hActive: 3840,
	vActive: 2160,
	refreshHz: 60,
	standard: "manual",
	interlaced: false,
	fractional: false,
	signal: { ...DEFAULT_SIGNAL }
};
/**
* The signal controls are duplicated into advanced mode deliberately.
*
* In simple mode they are an INPUT — they change the EDID that gets built. In
* advanced mode the EDID is already whatever you made it, and these describe
* the signal you intend to push through it, which is what the support table
* needs to answer the question. Same controls, two different jobs, so they are
* labelled differently rather than shared silently.
*/
function SignalStrip({ signal, onChange }) {
	const set = (p) => onChange({
		...signal,
		...p
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Signal you intend to send",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid c4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
					label: "Colour format",
					value: signal.format,
					options: [
						{
							value: "rgb444",
							label: "RGB 4:4:4"
						},
						{
							value: "ycbcr444",
							label: "YCbCr 4:4:4"
						},
						{
							value: "ycbcr422",
							label: "YCbCr 4:2:2"
						},
						{
							value: "ycbcr420",
							label: "YCbCr 4:2:0"
						}
					],
					onChange: (format) => set({ format })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pick, {
					label: "Bit depth",
					value: signal.bpc,
					options: [
						8,
						10,
						12,
						16
					].map((b) => ({
						value: b,
						label: `${b}-bit`
					})),
					onChange: (bpc) => set({ bpc })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 6,
						justifyContent: "flex-end",
						paddingBottom: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "DSC",
						checked: signal.dsc,
						onChange: (dsc) => set({ dsc })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						label: "Variable refresh",
						checked: signal.vrr,
						onChange: (vrr) => set({ vrr })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "note",
					style: {
						alignSelf: "flex-end",
						paddingBottom: 6
					},
					children: "These do not change the EDID here — they describe what you will feed through it, which is what the support table is answering."
				})
			]
		})
	});
}
/** Opening on a host's slot: its bytes, decoded once, in advanced mode. */
function opening(host) {
	if (!host?.initial) return null;
	try {
		return parseEdidFile(host.initial.bytes);
	} catch {
		return null;
	}
}
function App({ host } = {}) {
	const [opened] = (0, import_react.useState)(() => opening(host));
	const [mode, setMode] = (0, import_react.useState)(opened ? "advanced" : "simple");
	const [mosaicReq, setMosaicReq] = (0, import_react.useState)(DEFAULT_MOSAIC);
	const [tileIdx, setTileIdx] = (0, import_react.useState)(0);
	const mosaic = (0, import_react.useMemo)(() => {
		const errors = mosaicErrors(mosaicReq);
		if (errors.length) return {
			errors,
			result: null
		};
		try {
			return {
				errors,
				result: buildMosaic(mosaicReq)
			};
		} catch (e) {
			return {
				errors: [e instanceof Error ? e.message : String(e)],
				result: null
			};
		}
	}, [mosaicReq]);
	const tile = mosaic.result?.tiles[Math.min(tileIdx, mosaic.result.tiles.length - 1)];
	const [req, setReq] = (0, import_react.useState)(INITIAL);
	const [edid, setEdid] = (0, import_react.useState)(() => opened?.edid ?? buildEdid(INITIAL).edid);
	const [notes, setNotes] = (0, import_react.useState)(() => opened ? [] : buildEdid(INITIAL).notes);
	const [issues, setIssues] = (0, import_react.useState)(() => opened?.issues ?? []);
	const primary = (0, import_react.useMemo)(() => primaryTiming(edid), [edid]);
	const name = displayName(edid);
	const build = () => {
		const r = buildEdid(req);
		setEdid(r.edid);
		setNotes(r.notes);
		setIssues([]);
	};
	const outgoing = (0, import_react.useMemo)(() => {
		if (!host) return [];
		if (mode === "mosaic") {
			if (!mosaic.result) return [{
				label: "The mosaic",
				bytes: null,
				error: mosaic.errors[0] ?? null
			}];
			return mosaic.result.tiles.map((t) => ({
				label: t.label,
				bytes: t.bytes
			}));
		}
		try {
			return [{
				label: name || "This EDID",
				bytes: encodeEdid(edid)
			}];
		} catch (e) {
			return [{
				label: name || "This EDID",
				bytes: null,
				error: e instanceof Error ? e.message : String(e)
			}];
		}
	}, [
		host,
		mode,
		mosaic,
		edid,
		name
	]);
	const load = (data) => {
		const r = parseEdidFile(data);
		setEdid(r.edid);
		setIssues(r.issues);
		setNotes([]);
		setMode("advanced");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Otter EDID Editor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag",
						children: "Build an EDID from a resolution, or edit every field — then see which processors will take it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ver",
						children: "v0.1.0"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tabs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-selected": mode === "simple",
						onClick: () => setMode("simple"),
						children: "Simple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-selected": mode === "advanced",
						onClick: () => setMode("advanced"),
						children: "Advanced"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-selected": mode === "mosaic",
						onClick: () => setMode("mosaic"),
						children: "Mosaic"
					})
				]
			}),
			issues.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { marginBottom: 14 },
				children: issues.map((i, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i.severity === "error" ? "banner bad" : "banner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [i.where, ":"] }),
						" ",
						i.message
					]
				}, k))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cols",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: mode === "mosaic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MosaicMode, {
					req: mosaicReq,
					onChange: (r) => {
						setMosaicReq(r);
						if (r.cols * r.rows !== mosaicReq.cols * mosaicReq.rows) setTileIdx(0);
					},
					result: mosaic.result,
					errors: mosaic.errors,
					selected: tileIdx,
					onSelect: setTileIdx
				}) : mode === "simple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleMode, {
					req,
					onChange: setReq,
					onBuild: build,
					notes
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid c2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["EDID name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hint",
								children: " · descriptor text, 13 characters"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								maxLength: 13,
								value: name,
								placeholder: primary ? timingLabel(primary) : "Display",
								onChange: (e) => setEdid(setDisplayName(edid, e.target.value))
							})]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvancedMode, {
					edid,
					onChange: setEdid,
					primary
				})] }) }), mode === "mosaic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					host ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostPanel, {
						host,
						items: outgoing,
						preferred: host.initial?.slotId
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MosaicChecks, { checks: checkMosaic(mosaicReq) }),
					mosaic.result && tile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkSummary, {
							timing: mosaic.result.tileTiming,
							signal: {
								...req.signal,
								bpc: mosaicReq.bitDepth
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportMatrix, {
							timing: mosaic.result.tileTiming,
							signal: {
								...req.signal,
								bpc: mosaicReq.bitDepth
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexView, {
							raw: tile.bytes,
							name: tile.file.replace(/\.bin$/, ""),
							title: `${tile.file} — ${tile.bytes.length} bytes, 3 blocks`
						})
					] }) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					host ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostPanel, {
						host,
						items: outgoing,
						preferred: host.initial?.slotId
					}) : null,
					mode === "advanced" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalStrip, {
						signal: req.signal,
						onChange: (signal) => setReq({
							...req,
							signal
						})
					}) : null,
					primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkSummary, {
						timing: primary,
						signal: req.signal
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportMatrix, {
						timing: primary,
						signal: req.signal
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Signal cost and required interface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "banner",
							children: "This EDID carries no timing — no detailed timing descriptor, no CTA timing and no DisplayID timing — so there is nothing to cost or to check against hardware."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexView, {
						edid,
						name: name || "edid",
						onLoad: load
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "About",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "note",
								children: host ? `Everything is built in this window. Nothing leaves it except what you save to ${host.title}.` : "Everything happens in this browser. No EDID is uploaded anywhere, and there is no backend to upload it to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "note",
								style: { marginTop: 6 },
								children: "The hardware table is built from vendor manuals and spec sheets, cited per claim. None of it has been tried against real hardware — treat it as a well-sourced starting point, not a guarantee."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row",
								style: { marginTop: 10 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "minor",
									onClick: () => {
										setEdid(blankEdid());
										setNotes([]);
										setIssues([]);
									},
									children: "Start from a blank EDID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "minor",
									onClick: () => {
										setReq(INITIAL);
										const r = buildEdid(INITIAL);
										setEdid(r.edid);
										setNotes(r.notes);
										setIssues([]);
									},
									children: "Reset"
								})]
							})
						]
					})
				] })]
			})
		]
	});
}
//#endregion
//#region src/styles.css?inline
var styles_default = ":root {\n  --bg: #12151a;\n  --panel: #1a1f27;\n  --panel-2: #212836;\n  --line: #2c3543;\n  --text: #dfe6f0;\n  --dim: #8b98ab;\n  --accent: #5fb0d8;\n  --ok: #4ec98a;\n  --warn: #e0b050;\n  --bad: #e0685f;\n  --unknown: #6b7787;\n  --mono: ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace;\n}\n\n* { box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  background: var(--bg);\n  color: var(--text);\n  font: 14px/1.5 system-ui, -apple-system, \"Segoe UI\", sans-serif;\n}\n\n.app { max-width: 1680px; margin: 0 auto; padding: 16px 20px 64px; }\n\nheader.top {\n  display: flex; align-items: baseline; gap: 16px;\n  padding-bottom: 12px; margin-bottom: 16px;\n  border-bottom: 1px solid var(--line);\n  flex-wrap: wrap;\n}\nheader.top h1 { font-size: 19px; margin: 0; font-weight: 620; letter-spacing: -0.01em; }\nheader.top .tag { color: var(--dim); font-size: 13px; }\nheader.top .ver { margin-left: auto; color: var(--dim); font-size: 12px; font-family: var(--mono); }\n\n.tabs { display: flex; gap: 4px; margin-bottom: 16px; }\n.tabs button {\n  background: var(--panel); color: var(--dim); border: 1px solid var(--line);\n  padding: 7px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 550;\n}\n.tabs button[aria-selected='true'] { background: var(--accent); border-color: var(--accent); color: #0d1117; }\n\n.cols { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 16px; align-items: start; }\n@media (max-width: 1100px) { .cols { grid-template-columns: 1fr; } }\n\n.panel {\n  background: var(--panel); border: 1px solid var(--line);\n  border-radius: 8px; padding: 14px 16px; margin-bottom: 14px;\n}\n.panel > h2 {\n  font-size: 12px; text-transform: uppercase; letter-spacing: 0.07em;\n  color: var(--dim); margin: 0 0 12px; font-weight: 620;\n}\n.panel > h3 {\n  font-size: 12px; letter-spacing: 0.04em; color: var(--dim);\n  margin: 16px 0 8px; font-weight: 600;\n}\n\n.grid { display: grid; gap: 10px 14px; }\n.grid.c2 { grid-template-columns: 1fr 1fr; }\n.grid.c3 { grid-template-columns: 1fr 1fr 1fr; }\n.grid.c4 { grid-template-columns: repeat(4, 1fr); }\n@media (max-width: 620px) { .grid.c3, .grid.c4 { grid-template-columns: 1fr 1fr; } }\n\nlabel.field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }\nlabel.field > span { font-size: 11px; color: var(--dim); letter-spacing: 0.03em; }\nlabel.field .hint { color: var(--unknown); font-size: 10.5px; }\n\ninput[type='text'], input[type='number'], select, textarea {\n  background: var(--bg); color: var(--text);\n  border: 1px solid var(--line); border-radius: 5px;\n  padding: 6px 8px; font-size: 13px; font-family: inherit; width: 100%; min-width: 0;\n}\ninput[type='number'] { font-family: var(--mono); }\ntextarea { font-family: var(--mono); font-size: 11.5px; line-height: 1.45; resize: vertical; }\ninput:focus, select:focus, textarea:focus { outline: 1px solid var(--accent); border-color: var(--accent); }\n\nlabel.check { display: flex; align-items: center; gap: 7px; font-size: 12.5px; cursor: pointer; }\nlabel.check input { accent-color: var(--accent); }\n\nbutton.go {\n  background: var(--accent); color: #0d1117; border: 0; border-radius: 6px;\n  padding: 9px 20px; font-size: 13.5px; font-weight: 650; cursor: pointer;\n}\nbutton.go:hover { filter: brightness(1.08); }\nbutton.minor {\n  background: var(--panel-2); color: var(--text); border: 1px solid var(--line);\n  border-radius: 5px; padding: 5px 11px; font-size: 12px; cursor: pointer;\n}\nbutton.minor:hover { border-color: var(--accent); }\n.row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }\n\ntable.matrix { width: 100%; border-collapse: collapse; font-size: 12.5px; }\ntable.matrix th {\n  text-align: left; color: var(--dim); font-weight: 600; font-size: 11px;\n  text-transform: uppercase; letter-spacing: 0.05em;\n  padding: 6px 8px; border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--panel);\n}\ntable.matrix td { padding: 7px 8px; border-bottom: 1px solid #232a35; vertical-align: top; }\ntable.matrix tr:hover td { background: #1e2530; }\ntable.matrix .model { font-weight: 560; }\ntable.matrix .vendor { color: var(--dim); font-size: 11px; }\n\n.pill {\n  display: inline-block; padding: 1.5px 8px; border-radius: 999px;\n  font-size: 11px; font-weight: 620; white-space: nowrap;\n}\n.pill.ok { background: rgba(78,201,138,0.15); color: var(--ok); }\n.pill.warn { background: rgba(224,176,80,0.15); color: var(--warn); }\n.pill.bad { background: rgba(224,104,95,0.15); color: var(--bad); }\n.pill.unknown { background: rgba(107,119,135,0.18); color: var(--unknown); }\n.pill.conf { background: transparent; border: 1px solid var(--line); color: var(--dim); font-weight: 500; }\n\n.note { color: var(--dim); font-size: 11.5px; margin-top: 4px; }\n.note.warn { color: var(--warn); }\n.note.bad { color: var(--bad); }\n\n.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; }\n.stat { background: var(--panel-2); border-radius: 6px; padding: 8px 10px; }\n.stat .k { font-size: 10.5px; color: var(--dim); text-transform: uppercase; letter-spacing: 0.05em; }\n.stat .v { font-size: 15px; font-family: var(--mono); margin-top: 2px; }\n.stat .v.small { font-size: 12.5px; }\n\npre.hex {\n  font-family: var(--mono); font-size: 11.5px; line-height: 1.55;\n  background: var(--bg); border: 1px solid var(--line); border-radius: 6px;\n  padding: 10px 12px; overflow-x: auto; margin: 0;\n}\npre.hex .addr { color: var(--unknown); }\npre.hex .sep { color: #3d4a5c; }\n\n.banner {\n  border-left: 3px solid var(--warn); background: rgba(224,176,80,0.07);\n  padding: 8px 12px; border-radius: 0 5px 5px 0; font-size: 12.5px; margin-bottom: 10px;\n}\n.banner.bad { border-color: var(--bad); background: rgba(224,104,95,0.07); }\n.banner.info { border-color: var(--accent); background: rgba(95,176,216,0.07); }\n\ndetails.cite { margin-top: 6px; }\ndetails.cite summary { cursor: pointer; color: var(--dim); font-size: 11px; }\ndetails.cite blockquote {\n  margin: 6px 0 0; padding-left: 10px; border-left: 2px solid var(--line);\n  color: var(--dim); font-size: 11.5px;\n}\ndetails.cite blockquote cite { display: block; color: var(--unknown); font-style: normal; margin-top: 3px; font-size: 10.5px; }\n\n.filters { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }\n.filters button {\n  background: var(--panel-2); border: 1px solid var(--line); color: var(--dim);\n  border-radius: 999px; padding: 3px 11px; font-size: 11.5px; cursor: pointer;\n}\n.filters button[aria-pressed='true'] { border-color: var(--accent); color: var(--text); }\n\n.scroll { max-height: 620px; overflow-y: auto; }\n\n/*\n * The shared Stoatworks support footer appends itself to <body>, outside .app,\n * so it does not inherit the page gutter. Match it, and let the footer draw its\n * own rule and chips from currentColor as it is designed to.\n */\n.sw-support {\n  max-width: 1680px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* Mosaic: one row per plug, the selected one drives the byte view. */\ntable.tiles { width: 100%; border-collapse: collapse; font-size: 12.5px; margin-bottom: 6px; }\ntable.tiles th { text-align: left; color: var(--dim); font-weight: 500; font-size: 11px; padding: 4px 8px; border-bottom: 1px solid var(--line); }\ntable.tiles td { padding: 6px 8px; border-bottom: 1px solid #232a35; cursor: pointer; }\ntable.tiles tr:hover td { background: #1e2530; }\ntable.tiles tr[aria-selected='true'] td { background: rgba(95,176,216,0.10); }\n.mono { font-family: var(--mono); }\n";
//#endregion
//#region src/embed.tsx
/**
* The editor as a module another application embeds.
*
* `npm run build:embed` makes `dist-embed/otter-edid-embed.js` from this: one
* dependency-free ES module — React, the stylesheet and the library inside it —
* that a host with no build step of its own can copy in and import. LivePremier
* Plus is the first: it vendors the file, mounts the editor in a window beside
* the switcher's EDID page and hands it an `EdidHost` so a finished EDID goes
* straight into a bank slot.
*
* Two surfaces, both here so they cannot drift from the site:
*
*   mount(el, host?)       the whole editor, as on the site, plus the host panel
*   edidForTiming(…) etc.  the library alone, for a host that builds EDIDs
*                          without showing an editor (a switcher's custom formats)
*
* The stylesheet is global — it styles `body` — so mount into a document of
* the editor's own (a popped-out window), not into somebody else's page.
*/
var version = "v0.1.0";
var STYLE_ID = "otter-edid-embed-css";
/** Put the editor in `el`. Returns a function that takes it out again. */
function mount(el, host) {
	const doc = el.ownerDocument;
	if (!doc.getElementById(STYLE_ID)) {
		const style = doc.createElement("style");
		style.id = STYLE_ID;
		style.textContent = styles_default;
		doc.head.append(style);
	}
	const root = (0, import_client.createRoot)(el);
	root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, { host }) }));
	return () => root.unmount();
}
/**
* A complete EDID around a timing somebody already decided — every porch kept.
*
* Carries the CTA VIC when the raster is exactly one, since consumer sources act
* on VICs; otherwise the timing is the native detailed timing, with a CTA
* extension only where the signal needs one. Answers the bytes, the name that
* went into the name descriptor, and the build's notes.
*/
function edidForTiming(timing, opts = {}) {
	const vic = vicFor(timing);
	const label = timingLabel(timing);
	const name = (opts.name || shortName(timing, label)).slice(0, 13);
	const r = edidAroundTiming(timing, {
		name,
		signal: {
			...DEFAULT_SIGNAL,
			bpc: opts.bpc ?? 8
		},
		standard: vic !== void 0 ? "cta" : "manual",
		vic,
		fractional: Math.abs(vFreq(timing) - Math.round(vFreq(timing))) > .01
	});
	return {
		bytes: encodeEdid(r.edid),
		name,
		label,
		vic,
		notes: r.notes
	};
}
/**
* A name that fits the 13-character name descriptor without being cut
* mid-number: "1920x1080p59." says less than "1080p59.94".
*/
function shortName(t, label) {
	if (label.length <= 13) return label;
	const rate = label.slice(label.search(/[pi][\d.]+$/));
	const short = `${t.vActive}${rate}`;
	return short.length <= 13 ? short : label.slice(0, 13);
}
/** What an EDID says about itself, in brief: its name, its preferred mode, its problems. */
function describeEdid(bytes) {
	const r = decodeEdid(bytes);
	const t = primaryTiming(r.edid);
	return {
		name: displayName(r.edid),
		mode: t ? timingLabel(t) : null,
		timing: t,
		errors: r.issues.filter((i) => i.severity === "error").map((i) => `${i.where}: ${i.message}`)
	};
}
//#endregion
export { describeEdid, edidForTiming, mount, timingLabel, version };
