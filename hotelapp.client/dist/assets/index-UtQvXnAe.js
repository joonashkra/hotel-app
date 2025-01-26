function Od(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Md = { exports: {} },
  si = {},
  Id = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = Symbol.for("react.element"),
  em = Symbol.for("react.portal"),
  tm = Symbol.for("react.fragment"),
  nm = Symbol.for("react.strict_mode"),
  rm = Symbol.for("react.profiler"),
  om = Symbol.for("react.provider"),
  lm = Symbol.for("react.context"),
  im = Symbol.for("react.forward_ref"),
  am = Symbol.for("react.suspense"),
  sm = Symbol.for("react.memo"),
  um = Symbol.for("react.lazy"),
  Hu = Symbol.iterator;
function cm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ad = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zd = Object.assign,
  Ud = {};
function Tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || Ad);
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bd() {}
Bd.prototype = Tr.prototype;
function Ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || Ad);
}
var xs = (Ss.prototype = new Bd());
xs.constructor = Ss;
zd(xs, Tr.prototype);
xs.isPureReactComponent = !0;
var Vu = Array.isArray,
  $d = Object.prototype.hasOwnProperty,
  Es = { current: null },
  Hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      $d.call(t, r) && !Hd.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Oo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Es.current,
  };
}
function dm(e, t) {
  return {
    $$typeof: Oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ks(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function fm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wu = /\/+/g;
function Ai(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fm("" + e.key)
    : t.toString(36);
}
function gl(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oo:
          case em:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ai(i, 0) : r),
      Vu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Wu, "$&/") + "/"),
          gl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ks(o) &&
            (o = dm(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Wu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Vu(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Ai(l, a);
      i += gl(l, t, n, s, o);
    }
  else if (((s = cm(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Ai(l, a++)), (i += gl(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Go(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    gl(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function pm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  yl = { transition: null },
  hm = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: yl,
    ReactCurrentOwner: Es,
  };
function Wd() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Go,
  forEach: function (e, t, n) {
    Go(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Go(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Go(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ks(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = Tr;
J.Fragment = tm;
J.Profiler = rm;
J.PureComponent = Ss;
J.StrictMode = nm;
J.Suspense = am;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
J.act = Wd;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = zd({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Es.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      $d.call(t, s) &&
        !Hd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Oo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: lm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: om, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Vd;
J.createFactory = function (e) {
  var t = Vd.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: im, render: e };
};
J.isValidElement = ks;
J.lazy = function (e) {
  return { $$typeof: um, _payload: { _status: -1, _result: e }, _init: pm };
};
J.memo = function (e, t) {
  return { $$typeof: sm, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
J.unstable_act = Wd;
J.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ve.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
J.useId = function () {
  return Ve.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ve.current.useRef(e);
};
J.useState = function (e) {
  return Ve.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ve.current.useTransition();
};
J.version = "18.3.1";
Id.exports = J;
var k = Id.exports;
const mm = Fd(k),
  gm = Od({ __proto__: null, default: mm }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym = k,
  vm = Symbol.for("react.element"),
  wm = Symbol.for("react.fragment"),
  Sm = Object.prototype.hasOwnProperty,
  xm = ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Em = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sm.call(t, r) && !Em.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: vm,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: xm.current,
  };
}
si.Fragment = wm;
si.jsx = Qd;
si.jsxs = Qd;
Md.exports = si;
var f = Md.exports,
  Kd = { exports: {} },
  lt = {},
  bd = { exports: {} },
  qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, W) {
    var Q = O.length;
    O.push(W);
    e: for (; 0 < Q; ) {
      var te = (Q - 1) >>> 1,
        ue = O[te];
      if (0 < o(ue, W)) (O[te] = W), (O[Q] = ue), (Q = te);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var W = O[0],
      Q = O.pop();
    if (Q !== W) {
      O[0] = Q;
      e: for (var te = 0, ue = O.length, kt = ue >>> 1; te < kt; ) {
        var _e = 2 * (te + 1) - 1,
          pt = O[_e],
          Ue = _e + 1,
          _t = O[Ue];
        if (0 > o(pt, Q))
          Ue < ue && 0 > o(_t, pt)
            ? ((O[te] = _t), (O[Ue] = Q), (te = Ue))
            : ((O[te] = pt), (O[_e] = Q), (te = _e));
        else if (Ue < ue && 0 > o(_t, Q)) (O[te] = _t), (O[Ue] = Q), (te = Ue);
        else break e;
      }
    }
    return W;
  }
  function o(O, W) {
    var Q = O.sortIndex - W.sortIndex;
    return Q !== 0 ? Q : O.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    g = !1,
    v = !1,
    S = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= O)
        r(u), (W.sortIndex = W.expirationTime), t(s, W);
      else break;
      W = n(u);
    }
  }
  function R(O) {
    if (((S = !1), y(O), !v))
      if (n(s) !== null) (v = !0), Jt(T);
      else {
        var W = n(u);
        W !== null && Se(R, W.startTime - O);
      }
  }
  function T(O, W) {
    (v = !1), S && ((S = !1), m(N), (N = -1)), (g = !0);
    var Q = h;
    try {
      for (
        y(W), d = n(s);
        d !== null && (!(d.expirationTime > W) || (O && !$()));

      ) {
        var te = d.callback;
        if (typeof te == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ue = te(d.expirationTime <= W);
          (W = e.unstable_now()),
            typeof ue == "function" ? (d.callback = ue) : d === n(s) && r(s),
            y(W);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var kt = !0;
      else {
        var _e = n(u);
        _e !== null && Se(R, _e.startTime - W), (kt = !1);
      }
      return kt;
    } finally {
      (d = null), (h = Q), (g = !1);
    }
  }
  var x = !1,
    D = null,
    N = -1,
    F = 5,
    M = -1;
  function $() {
    return !(e.unstable_now() - M < F);
  }
  function re() {
    if (D !== null) {
      var O = e.unstable_now();
      M = O;
      var W = !0;
      try {
        W = D(!0, O);
      } finally {
        W ? ie() : ((x = !1), (D = null));
      }
    } else x = !1;
  }
  var ie;
  if (typeof p == "function")
    ie = function () {
      p(re);
    };
  else if (typeof MessageChannel < "u") {
    var Ee = new MessageChannel(),
      qt = Ee.port2;
    (Ee.port1.onmessage = re),
      (ie = function () {
        qt.postMessage(null);
      });
  } else
    ie = function () {
      E(re, 0);
    };
  function Jt(O) {
    (D = O), x || ((x = !0), ie());
  }
  function Se(O, W) {
    N = E(function () {
      O(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Jt(T));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = h;
      }
      var Q = h;
      h = W;
      try {
        return O();
      } finally {
        h = Q;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, W) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Q = h;
      h = O;
      try {
        return W();
      } finally {
        h = Q;
      }
    }),
    (e.unstable_scheduleCallback = function (O, W, Q) {
      var te = e.unstable_now();
      switch (
        (typeof Q == "object" && Q !== null
          ? ((Q = Q.delay), (Q = typeof Q == "number" && 0 < Q ? te + Q : te))
          : (Q = te),
        O)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = Q + ue),
        (O = {
          id: c++,
          callback: W,
          priorityLevel: O,
          startTime: Q,
          expirationTime: ue,
          sortIndex: -1,
        }),
        Q > te
          ? ((O.sortIndex = Q),
            t(u, O),
            n(s) === null &&
              O === n(u) &&
              (S ? (m(N), (N = -1)) : (S = !0), Se(R, Q - te)))
          : ((O.sortIndex = ue), t(s, O), v || g || ((v = !0), Jt(T))),
        O
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (O) {
      var W = h;
      return function () {
        var Q = h;
        h = W;
        try {
          return O.apply(this, arguments);
        } finally {
          h = Q;
        }
      };
    });
})(qd);
bd.exports = qd;
var km = bd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm = k,
  ot = km;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jd = new Set(),
  ho = {};
function bn(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (ho[e] = t, e = 0; e < t.length; e++) Jd.add(t[e]);
}
var Ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ya = Object.prototype.hasOwnProperty,
  Rm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qu = {},
  Ku = {};
function jm(e) {
  return ya.call(Ku, e)
    ? !0
    : ya.call(Qu, e)
      ? !1
      : Rm.test(e)
        ? (Ku[e] = !0)
        : ((Qu[e] = !0), !1);
}
function Pm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nm(e, t, n, r) {
  if (t === null || typeof t > "u" || Pm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function Rs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Rs);
    Fe[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Rs);
    Fe[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cs, Rs);
  Fe[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Nm(t, n, o, r) && (n = null),
    r || o === null
      ? jm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zo = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  Ps = Symbol.for("react.strict_mode"),
  va = Symbol.for("react.profiler"),
  Xd = Symbol.for("react.provider"),
  Yd = Symbol.for("react.context"),
  Ns = Symbol.for("react.forward_ref"),
  wa = Symbol.for("react.suspense"),
  Sa = Symbol.for("react.suspense_list"),
  Ts = Symbol.for("react.memo"),
  tn = Symbol.for("react.lazy"),
  Gd = Symbol.for("react.offscreen"),
  bu = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bu && e[bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  zi;
function Gr(e) {
  if (zi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zi = (t && t[1]) || "";
    }
  return (
    `
` +
    zi +
    e
  );
}
var Ui = !1;
function Bi(e, t) {
  if (!e || Ui) return "";
  Ui = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function Tm(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bi(e.type, !1)), e;
    case 11:
      return (e = Bi(e.type.render, !1)), e;
    case 1:
      return (e = Bi(e.type, !0)), e;
    default:
      return "";
  }
}
function xa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case va:
      return "Profiler";
    case Ps:
      return "StrictMode";
    case wa:
      return "Suspense";
    case Sa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yd:
        return (e.displayName || "Context") + ".Consumer";
      case Xd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ns:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ts:
        return (
          (t = e.displayName || null), t !== null ? t : xa(e.type) || "Memo"
        );
      case tn:
        (t = e._payload), (e = e._init);
        try {
          return xa(e(t));
        } catch {}
    }
  return null;
}
function _m(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xa(t);
    case 8:
      return t === Ps ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lm(e) {
  var t = Zd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function el(e) {
  e._valueTracker || (e._valueTracker = Lm(e));
}
function ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ea(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function tf(e, t) {
  (t = t.checked), t != null && js(e, "checked", t, !1);
}
function ka(e, t) {
  tf(e, t);
  var n = yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ca(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ca(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ju(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ca(e, t, n) {
  (t !== "number" || Ll(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ra(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yn(n) };
}
function nf(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ja(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var tl,
  of = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        tl = tl || document.createElement("div"),
          tl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = tl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ro = {
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
    strokeWidth: !0,
  },
  Dm = ["Webkit", "ms", "Moz", "O"];
Object.keys(ro).forEach(function (e) {
  Dm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ro[t] = ro[e]);
  });
});
function lf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ro.hasOwnProperty(e) && ro[e])
      ? ("" + t).trim()
      : t + "px";
}
function af(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = lf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Om = ge(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function Pa(e, t) {
  if (t) {
    if (Om[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Na(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ta = null;
function _s(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _a = null,
  mr = null,
  gr = null;
function Gu(e) {
  if ((e = Io(e))) {
    if (typeof _a != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = pi(t)), _a(e.stateNode, e.type, t));
  }
}
function sf(e) {
  mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function uf() {
  if (mr) {
    var e = mr,
      t = gr;
    if (((gr = mr = null), Gu(e), t)) for (e = 0; e < t.length; e++) Gu(t[e]);
  }
}
function cf(e, t) {
  return e(t);
}
function df() {}
var $i = !1;
function ff(e, t, n) {
  if ($i) return e(t, n);
  $i = !0;
  try {
    return cf(e, t, n);
  } finally {
    ($i = !1), (mr !== null || gr !== null) && (df(), uf());
  }
}
function go(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var La = !1;
if (Ut)
  try {
    var Br = {};
    Object.defineProperty(Br, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", Br, Br),
      window.removeEventListener("test", Br, Br);
  } catch {
    La = !1;
  }
function Fm(e, t, n, r, o, l, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var oo = !1,
  Dl = null,
  Ol = !1,
  Da = null,
  Mm = {
    onError: function (e) {
      (oo = !0), (Dl = e);
    },
  };
function Im(e, t, n, r, o, l, i, a, s) {
  (oo = !1), (Dl = null), Fm.apply(Mm, arguments);
}
function Am(e, t, n, r, o, l, i, a, s) {
  if ((Im.apply(this, arguments), oo)) {
    if (oo) {
      var u = Dl;
      (oo = !1), (Dl = null);
    } else throw Error(L(198));
    Ol || ((Ol = !0), (Da = u));
  }
}
function qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zu(e) {
  if (qn(e) !== e) throw Error(L(188));
}
function zm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Zu(o), e;
        if (l === r) return Zu(o), t;
        l = l.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function hf(e) {
  return (e = zm(e)), e !== null ? mf(e) : null;
}
function mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gf = ot.unstable_scheduleCallback,
  ec = ot.unstable_cancelCallback,
  Um = ot.unstable_shouldYield,
  Bm = ot.unstable_requestPaint,
  xe = ot.unstable_now,
  $m = ot.unstable_getCurrentPriorityLevel,
  Ls = ot.unstable_ImmediatePriority,
  yf = ot.unstable_UserBlockingPriority,
  Fl = ot.unstable_NormalPriority,
  Hm = ot.unstable_LowPriority,
  vf = ot.unstable_IdlePriority,
  ui = null,
  Nt = null;
function Vm(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Km,
  Wm = Math.log,
  Qm = Math.LN2;
function Km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wm(e) / Qm) | 0)) | 0;
}
var nl = 64,
  rl = 4194304;
function eo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = eo(a)) : ((l &= i), l !== 0 && (r = eo(l)));
  } else (i = n & ~o), i !== 0 ? (r = eo(i)) : l !== 0 && (r = eo(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function bm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - wt(l),
      a = 1 << i,
      s = o[i];
    s === -1
      ? (!(a & n) || a & r) && (o[i] = bm(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wf() {
  var e = nl;
  return (nl <<= 1), !(nl & 4194240) && (nl = 64), e;
}
function Hi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function Jm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - wt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ds(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function Sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xf,
  Os,
  Ef,
  kf,
  Cf,
  Fa = !1,
  ol = [],
  un = null,
  cn = null,
  dn = null,
  yo = new Map(),
  vo = new Map(),
  rn = [],
  Xm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function tc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vo.delete(t.pointerId);
  }
}
function $r(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Io(t)), t !== null && Os(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ym(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (un = $r(un, e, t, n, r, o)), !0;
    case "dragenter":
      return (cn = $r(cn, e, t, n, r, o)), !0;
    case "mouseover":
      return (dn = $r(dn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return yo.set(l, $r(yo.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), vo.set(l, $r(vo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Rf(e) {
  var t = Dn(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pf(n)), t !== null)) {
          (e.blockedOn = t),
            Cf(e.priority, function () {
              Ef(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ta = r), n.target.dispatchEvent(r), (Ta = null);
    } else return (t = Io(n)), t !== null && Os(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nc(e, t, n) {
  vl(e) && n.delete(t);
}
function Gm() {
  (Fa = !1),
    un !== null && vl(un) && (un = null),
    cn !== null && vl(cn) && (cn = null),
    dn !== null && vl(dn) && (dn = null),
    yo.forEach(nc),
    vo.forEach(nc);
}
function Hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fa ||
      ((Fa = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, Gm)));
}
function wo(e) {
  function t(o) {
    return Hr(o, e);
  }
  if (0 < ol.length) {
    Hr(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && Hr(un, e),
      cn !== null && Hr(cn, e),
      dn !== null && Hr(dn, e),
      yo.forEach(t),
      vo.forEach(t),
      n = 0;
    n < rn.length;
    n++
  )
    (r = rn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rn.length && ((n = rn[0]), n.blockedOn === null); )
    Rf(n), n.blockedOn === null && rn.shift();
}
var yr = Qt.ReactCurrentBatchConfig,
  Il = !0;
function Zm(e, t, n, r) {
  var o = oe,
    l = yr.transition;
  yr.transition = null;
  try {
    (oe = 1), Fs(e, t, n, r);
  } finally {
    (oe = o), (yr.transition = l);
  }
}
function eg(e, t, n, r) {
  var o = oe,
    l = yr.transition;
  yr.transition = null;
  try {
    (oe = 4), Fs(e, t, n, r);
  } finally {
    (oe = o), (yr.transition = l);
  }
}
function Fs(e, t, n, r) {
  if (Il) {
    var o = Ma(e, t, n, r);
    if (o === null) Gi(e, t, r, Al, n), tc(e, r);
    else if (Ym(o, e, t, n, r)) r.stopPropagation();
    else if ((tc(e, r), t & 4 && -1 < Xm.indexOf(e))) {
      for (; o !== null; ) {
        var l = Io(o);
        if (
          (l !== null && xf(l),
          (l = Ma(e, t, n, r)),
          l === null && Gi(e, t, r, Al, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Gi(e, t, r, null, n);
  }
}
var Al = null;
function Ma(e, t, n, r) {
  if (((Al = null), (e = _s(r)), (e = Dn(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Al = e), null;
}
function jf(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch ($m()) {
        case Ls:
          return 1;
        case yf:
          return 4;
        case Fl:
        case Hm:
          return 16;
        case vf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null,
  Ms = null,
  wl = null;
function Pf() {
  if (wl) return wl;
  var e,
    t = Ms,
    n = t.length,
    r,
    o = "value" in ln ? ln.value : ln.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (wl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ll() {
  return !0;
}
function rc() {
  return !1;
}
function it(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ll
        : rc),
      (this.isPropagationStopped = rc),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ll));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ll));
      },
      persist: function () {},
      isPersistent: ll,
    }),
    t
  );
}
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Is = it(_r),
  Mo = ge({}, _r, { view: 0, detail: 0 }),
  tg = it(Mo),
  Vi,
  Wi,
  Vr,
  ci = ge({}, Mo, {
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
    getModifierState: As,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vr &&
            (Vr && e.type === "mousemove"
              ? ((Vi = e.screenX - Vr.screenX), (Wi = e.screenY - Vr.screenY))
              : (Wi = Vi = 0),
            (Vr = e)),
          Vi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wi;
    },
  }),
  oc = it(ci),
  ng = ge({}, ci, { dataTransfer: 0 }),
  rg = it(ng),
  og = ge({}, Mo, { relatedTarget: 0 }),
  Qi = it(og),
  lg = ge({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ig = it(lg),
  ag = ge({}, _r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sg = it(ag),
  ug = ge({}, _r, { data: 0 }),
  lc = it(ug),
  cg = {
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
    MozPrintableKey: "Unidentified",
  },
  dg = {
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
    224: "Meta",
  },
  fg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fg[e]) ? !!t[e] : !1;
}
function As() {
  return pg;
}
var hg = ge({}, Mo, {
    key: function (e) {
      if (e.key) {
        var t = cg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? dg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: As,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  mg = it(hg),
  gg = ge({}, ci, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ic = it(gg),
  yg = ge({}, Mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: As,
  }),
  vg = it(yg),
  wg = ge({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sg = it(wg),
  xg = ge({}, ci, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Eg = it(xg),
  kg = [9, 13, 27, 32],
  zs = Ut && "CompositionEvent" in window,
  lo = null;
Ut && "documentMode" in document && (lo = document.documentMode);
var Cg = Ut && "TextEvent" in window && !lo,
  Nf = Ut && (!zs || (lo && 8 < lo && 11 >= lo)),
  ac = " ",
  sc = !1;
function Tf(e, t) {
  switch (e) {
    case "keyup":
      return kg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _f(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function Rg(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : ((sc = !0), ac);
    case "textInput":
      return (e = t.data), e === ac && sc ? null : e;
    default:
      return null;
  }
}
function jg(e, t) {
  if (or)
    return e === "compositionend" || (!zs && Tf(e, t))
      ? ((e = Pf()), (wl = Ms = ln = null), (or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pg = {
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
  week: !0,
};
function uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pg[e.type] : t === "textarea";
}
function Lf(e, t, n, r) {
  sf(r),
    (t = zl(t, "onChange")),
    0 < t.length &&
      ((n = new Is("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var io = null,
  So = null;
function Ng(e) {
  Hf(e, 0);
}
function di(e) {
  var t = ar(e);
  if (ef(t)) return e;
}
function Tg(e, t) {
  if (e === "change") return t;
}
var Df = !1;
if (Ut) {
  var Ki;
  if (Ut) {
    var bi = "oninput" in document;
    if (!bi) {
      var cc = document.createElement("div");
      cc.setAttribute("oninput", "return;"),
        (bi = typeof cc.oninput == "function");
    }
    Ki = bi;
  } else Ki = !1;
  Df = Ki && (!document.documentMode || 9 < document.documentMode);
}
function dc() {
  io && (io.detachEvent("onpropertychange", Of), (So = io = null));
}
function Of(e) {
  if (e.propertyName === "value" && di(So)) {
    var t = [];
    Lf(t, So, e, _s(e)), ff(Ng, t);
  }
}
function _g(e, t, n) {
  e === "focusin"
    ? (dc(), (io = t), (So = n), io.attachEvent("onpropertychange", Of))
    : e === "focusout" && dc();
}
function Lg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return di(So);
}
function Dg(e, t) {
  if (e === "click") return di(t);
}
function Og(e, t) {
  if (e === "input" || e === "change") return di(t);
}
function Fg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : Fg;
function xo(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ya.call(t, o) || !xt(e[o], t[o])) return !1;
  }
  return !0;
}
function fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pc(e, t) {
  var n = fc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fc(n);
  }
}
function Ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ff(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Mf() {
  for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ll(e.document);
  }
  return t;
}
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mg(e) {
  var t = Mf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ff(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = pc(n, l));
        var i = pc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ig = Ut && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  Ia = null,
  ao = null,
  Aa = !1;
function hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Aa ||
    lr == null ||
    lr !== Ll(r) ||
    ((r = lr),
    "selectionStart" in r && Us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ao && xo(ao, r)) ||
      ((ao = r),
      (r = zl(Ia, "onSelect")),
      0 < r.length &&
        ((t = new Is("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = lr))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ir = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  qi = {},
  If = {};
Ut &&
  ((If = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ir.animationend.animation,
    delete ir.animationiteration.animation,
    delete ir.animationstart.animation),
  "TransitionEvent" in window || delete ir.transitionend.transition);
function fi(e) {
  if (qi[e]) return qi[e];
  if (!ir[e]) return e;
  var t = ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in If) return (qi[e] = t[n]);
  return e;
}
var Af = fi("animationend"),
  zf = fi("animationiteration"),
  Uf = fi("animationstart"),
  Bf = fi("transitionend"),
  $f = new Map(),
  mc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Sn(e, t) {
  $f.set(e, t), bn(t, [e]);
}
for (var Ji = 0; Ji < mc.length; Ji++) {
  var Xi = mc[Ji],
    Ag = Xi.toLowerCase(),
    zg = Xi[0].toUpperCase() + Xi.slice(1);
  Sn(Ag, "on" + zg);
}
Sn(Af, "onAnimationEnd");
Sn(zf, "onAnimationIteration");
Sn(Uf, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(Bf, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
bn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
bn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
bn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
bn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var to =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(to));
function gc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Am(r, t, void 0, e), (e.currentTarget = null);
}
function Hf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && o.isPropagationStopped())) break e;
          gc(o, a, u), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          gc(o, a, u), (l = s);
        }
    }
  }
  if (Ol) throw ((e = Da), (Ol = !1), (Da = null), e);
}
function ce(e, t) {
  var n = t[Ha];
  n === void 0 && (n = t[Ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vf(t, e, 2, !1), n.add(r));
}
function Yi(e, t, n) {
  var r = 0;
  t && (r |= 4), Vf(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function Eo(e) {
  if (!e[al]) {
    (e[al] = !0),
      Jd.forEach(function (n) {
        n !== "selectionchange" && (Ug.has(n) || Yi(n, !1, e), Yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[al] || ((t[al] = !0), Yi("selectionchange", !1, t));
  }
}
function Vf(e, t, n, r) {
  switch (jf(t)) {
    case 1:
      var o = Zm;
      break;
    case 4:
      o = eg;
      break;
    default:
      o = Fs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Gi(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Dn(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ff(function () {
    var u = l,
      c = _s(n),
      d = [];
    e: {
      var h = $f.get(e);
      if (h !== void 0) {
        var g = Is,
          v = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = mg;
            break;
          case "focusin":
            (v = "focus"), (g = Qi);
            break;
          case "focusout":
            (v = "blur"), (g = Qi);
            break;
          case "beforeblur":
          case "afterblur":
            g = Qi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = oc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = rg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = vg;
            break;
          case Af:
          case zf:
          case Uf:
            g = ig;
            break;
          case Bf:
            g = Sg;
            break;
          case "scroll":
            g = tg;
            break;
          case "wheel":
            g = Eg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ic;
        }
        var S = (t & 4) !== 0,
          E = !S && e === "scroll",
          m = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var R = y.stateNode;
          if (
            (y.tag === 5 &&
              R !== null &&
              ((y = R),
              m !== null && ((R = go(p, m)), R != null && S.push(ko(p, R, y)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < S.length &&
          ((h = new g(h, v, null, n, c)), d.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ta &&
            (v = n.relatedTarget || n.fromElement) &&
            (Dn(v) || v[Bt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? Dn(v) : null),
              v !== null &&
                ((E = qn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((S = oc),
            (R = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ic),
              (R = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (E = g == null ? h : ar(g)),
            (y = v == null ? h : ar(v)),
            (h = new S(R, p + "leave", g, n, c)),
            (h.target = E),
            (h.relatedTarget = y),
            (R = null),
            Dn(c) === u &&
              ((S = new S(m, p + "enter", v, n, c)),
              (S.target = y),
              (S.relatedTarget = E),
              (R = S)),
            (E = R),
            g && v)
          )
            t: {
              for (S = g, m = v, p = 0, y = S; y; y = Zn(y)) p++;
              for (y = 0, R = m; R; R = Zn(R)) y++;
              for (; 0 < p - y; ) (S = Zn(S)), p--;
              for (; 0 < y - p; ) (m = Zn(m)), y--;
              for (; p--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = Zn(S)), (m = Zn(m));
              }
              S = null;
            }
          else S = null;
          g !== null && yc(d, h, g, S, !1),
            v !== null && E !== null && yc(d, E, v, S, !0);
        }
      }
      e: {
        if (
          ((h = u ? ar(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var T = Tg;
        else if (uc(h))
          if (Df) T = Og;
          else {
            T = Lg;
            var x = _g;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (T = Dg);
        if (T && (T = T(e, u))) {
          Lf(d, T, n, c);
          break e;
        }
        x && x(e, h, u),
          e === "focusout" &&
            (x = h._wrapperState) &&
            x.controlled &&
            h.type === "number" &&
            Ca(h, "number", h.value);
      }
      switch (((x = u ? ar(u) : window), e)) {
        case "focusin":
          (uc(x) || x.contentEditable === "true") &&
            ((lr = x), (Ia = u), (ao = null));
          break;
        case "focusout":
          ao = Ia = lr = null;
          break;
        case "mousedown":
          Aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Aa = !1), hc(d, n, c);
          break;
        case "selectionchange":
          if (Ig) break;
        case "keydown":
        case "keyup":
          hc(d, n, c);
      }
      var D;
      if (zs)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        or
          ? Tf(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Nf &&
          n.locale !== "ko" &&
          (or || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && or && (D = Pf())
            : ((ln = c),
              (Ms = "value" in ln ? ln.value : ln.textContent),
              (or = !0))),
        (x = zl(u, N)),
        0 < x.length &&
          ((N = new lc(N, e, null, n, c)),
          d.push({ event: N, listeners: x }),
          D ? (N.data = D) : ((D = _f(n)), D !== null && (N.data = D)))),
        (D = Cg ? Rg(e, n) : jg(e, n)) &&
          ((u = zl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = D)));
    }
    Hf(d, t);
  });
}
function ko(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = go(e, n)),
      l != null && r.unshift(ko(e, l, o)),
      (l = go(e, t)),
      l != null && r.push(ko(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yc(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = go(n, l)), s != null && i.unshift(ko(n, s, a)))
        : o || ((s = go(n, l)), s != null && i.push(ko(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bg = /\r\n?/g,
  $g = /\u0000|\uFFFD/g;
function vc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bg,
      `
`,
    )
    .replace($g, "");
}
function sl(e, t, n) {
  if (((t = vc(t)), vc(e) !== t && n)) throw Error(L(425));
}
function Ul() {}
var za = null,
  Ua = null;
function Ba(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $a = typeof setTimeout == "function" ? setTimeout : void 0,
  Hg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wc = typeof Promise == "function" ? Promise : void 0,
  Vg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wc < "u"
        ? function (e) {
            return wc.resolve(null).then(e).catch(Wg);
          }
        : $a;
function Wg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  wo(t);
}
function fn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Lr = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Lr,
  Co = "__reactProps$" + Lr,
  Bt = "__reactContainer$" + Lr,
  Ha = "__reactEvents$" + Lr,
  Qg = "__reactListeners$" + Lr,
  Kg = "__reactHandles$" + Lr;
function Dn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sc(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = Sc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Io(e) {
  return (
    (e = e[Pt] || e[Bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function pi(e) {
  return e[Co] || null;
}
var Va = [],
  sr = -1;
function xn(e) {
  return { current: e };
}
function de(e) {
  0 > sr || ((e.current = Va[sr]), (Va[sr] = null), sr--);
}
function se(e, t) {
  sr++, (Va[sr] = e.current), (e.current = t);
}
var vn = {},
  ze = xn(vn),
  qe = xn(!1),
  Bn = vn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function Bl() {
  de(qe), de(ze);
}
function xc(e, t, n) {
  if (ze.current !== vn) throw Error(L(168));
  se(ze, t), se(qe, n);
}
function Wf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, _m(e) || "Unknown", o));
  return ge({}, n, r);
}
function $l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vn),
    (Bn = ze.current),
    se(ze, e),
    se(qe, qe.current),
    !0
  );
}
function Ec(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Wf(e, t, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(qe),
      de(ze),
      se(ze, e))
    : de(qe),
    se(qe, n);
}
var Ft = null,
  hi = !1,
  ea = !1;
function Qf(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function bg(e) {
  (hi = !0), Qf(e);
}
function En() {
  if (!ea && Ft !== null) {
    ea = !0;
    var e = 0,
      t = oe;
    try {
      var n = Ft;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (hi = !1);
    } catch (o) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), gf(Ls, En), o);
    } finally {
      (oe = t), (ea = !1);
    }
  }
  return null;
}
var ur = [],
  cr = 0,
  Hl = null,
  Vl = 0,
  at = [],
  st = 0,
  $n = null,
  Mt = 1,
  It = "";
function Nn(e, t) {
  (ur[cr++] = Vl), (ur[cr++] = Hl), (Hl = e), (Vl = t);
}
function Kf(e, t, n) {
  (at[st++] = Mt), (at[st++] = It), (at[st++] = $n), ($n = e);
  var r = Mt;
  e = It;
  var o = 32 - wt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - wt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Mt = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (It = l + e);
  } else (Mt = (1 << l) | (n << o) | r), (It = e);
}
function Bs(e) {
  e.return !== null && (Nn(e, 1), Kf(e, 1, 0));
}
function $s(e) {
  for (; e === Hl; )
    (Hl = ur[--cr]), (ur[cr] = null), (Vl = ur[--cr]), (ur[cr] = null);
  for (; e === $n; )
    ($n = at[--st]),
      (at[st] = null),
      (It = at[--st]),
      (at[st] = null),
      (Mt = at[--st]),
      (at[st] = null);
}
var nt = null,
  tt = null,
  pe = !1,
  vt = null;
function bf(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = fn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: Mt, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qa(e) {
  if (pe) {
    var t = tt;
    if (t) {
      var n = t;
      if (!kc(e, t)) {
        if (Wa(e)) throw Error(L(418));
        t = fn(n.nextSibling);
        var r = nt;
        t && kc(e, t)
          ? bf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (nt = e));
      }
    } else {
      if (Wa(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (nt = e);
    }
  }
}
function Cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function ul(e) {
  if (e !== nt) return !1;
  if (!pe) return Cc(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (Wa(e)) throw (qf(), Error(L(418)));
    for (; t; ) bf(e, t), (t = fn(t.nextSibling));
  }
  if ((Cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = fn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? fn(e.stateNode.nextSibling) : null;
  return !0;
}
function qf() {
  for (var e = tt; e; ) e = fn(e.nextSibling);
}
function Er() {
  (tt = nt = null), (pe = !1);
}
function Hs(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var qg = Qt.ReactCurrentBatchConfig;
function Wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function cl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Rc(e) {
  var t = e._init;
  return t(e._payload);
}
function Jf(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = gn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, y, R) {
    return p === null || p.tag !== 6
      ? ((p = aa(y, m.mode, R)), (p.return = m), p)
      : ((p = o(p, y)), (p.return = m), p);
  }
  function s(m, p, y, R) {
    var T = y.type;
    return T === rr
      ? c(m, p, y.props.children, R, y.key)
      : p !== null &&
          (p.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === tn &&
              Rc(T) === p.type))
        ? ((R = o(p, y.props)), (R.ref = Wr(m, p, y)), (R.return = m), R)
        : ((R = Pl(y.type, y.key, y.props, null, m.mode, R)),
          (R.ref = Wr(m, p, y)),
          (R.return = m),
          R);
  }
  function u(m, p, y, R) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = sa(y, m.mode, R)), (p.return = m), p)
      : ((p = o(p, y.children || [])), (p.return = m), p);
  }
  function c(m, p, y, R, T) {
    return p === null || p.tag !== 7
      ? ((p = zn(y, m.mode, R, T)), (p.return = m), p)
      : ((p = o(p, y)), (p.return = m), p);
  }
  function d(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = aa("" + p, m.mode, y)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zo:
          return (
            (y = Pl(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = Wr(m, null, p)),
            (y.return = m),
            y
          );
        case nr:
          return (p = sa(p, m.mode, y)), (p.return = m), p;
        case tn:
          var R = p._init;
          return d(m, R(p._payload), y);
      }
      if (Zr(p) || Ur(p))
        return (p = zn(p, m.mode, y, null)), (p.return = m), p;
      cl(m, p);
    }
    return null;
  }
  function h(m, p, y, R) {
    var T = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return T !== null ? null : a(m, p, "" + y, R);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Zo:
          return y.key === T ? s(m, p, y, R) : null;
        case nr:
          return y.key === T ? u(m, p, y, R) : null;
        case tn:
          return (T = y._init), h(m, p, T(y._payload), R);
      }
      if (Zr(y) || Ur(y)) return T !== null ? null : c(m, p, y, R, null);
      cl(m, y);
    }
    return null;
  }
  function g(m, p, y, R, T) {
    if ((typeof R == "string" && R !== "") || typeof R == "number")
      return (m = m.get(y) || null), a(p, m, "" + R, T);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case Zo:
          return (m = m.get(R.key === null ? y : R.key) || null), s(p, m, R, T);
        case nr:
          return (m = m.get(R.key === null ? y : R.key) || null), u(p, m, R, T);
        case tn:
          var x = R._init;
          return g(m, p, y, x(R._payload), T);
      }
      if (Zr(R) || Ur(R)) return (m = m.get(y) || null), c(p, m, R, T, null);
      cl(p, R);
    }
    return null;
  }
  function v(m, p, y, R) {
    for (
      var T = null, x = null, D = p, N = (p = 0), F = null;
      D !== null && N < y.length;
      N++
    ) {
      D.index > N ? ((F = D), (D = null)) : (F = D.sibling);
      var M = h(m, D, y[N], R);
      if (M === null) {
        D === null && (D = F);
        break;
      }
      e && D && M.alternate === null && t(m, D),
        (p = l(M, p, N)),
        x === null ? (T = M) : (x.sibling = M),
        (x = M),
        (D = F);
    }
    if (N === y.length) return n(m, D), pe && Nn(m, N), T;
    if (D === null) {
      for (; N < y.length; N++)
        (D = d(m, y[N], R)),
          D !== null &&
            ((p = l(D, p, N)), x === null ? (T = D) : (x.sibling = D), (x = D));
      return pe && Nn(m, N), T;
    }
    for (D = r(m, D); N < y.length; N++)
      (F = g(D, m, N, y[N], R)),
        F !== null &&
          (e && F.alternate !== null && D.delete(F.key === null ? N : F.key),
          (p = l(F, p, N)),
          x === null ? (T = F) : (x.sibling = F),
          (x = F));
    return (
      e &&
        D.forEach(function ($) {
          return t(m, $);
        }),
      pe && Nn(m, N),
      T
    );
  }
  function S(m, p, y, R) {
    var T = Ur(y);
    if (typeof T != "function") throw Error(L(150));
    if (((y = T.call(y)), y == null)) throw Error(L(151));
    for (
      var x = (T = null), D = p, N = (p = 0), F = null, M = y.next();
      D !== null && !M.done;
      N++, M = y.next()
    ) {
      D.index > N ? ((F = D), (D = null)) : (F = D.sibling);
      var $ = h(m, D, M.value, R);
      if ($ === null) {
        D === null && (D = F);
        break;
      }
      e && D && $.alternate === null && t(m, D),
        (p = l($, p, N)),
        x === null ? (T = $) : (x.sibling = $),
        (x = $),
        (D = F);
    }
    if (M.done) return n(m, D), pe && Nn(m, N), T;
    if (D === null) {
      for (; !M.done; N++, M = y.next())
        (M = d(m, M.value, R)),
          M !== null &&
            ((p = l(M, p, N)), x === null ? (T = M) : (x.sibling = M), (x = M));
      return pe && Nn(m, N), T;
    }
    for (D = r(m, D); !M.done; N++, M = y.next())
      (M = g(D, m, N, M.value, R)),
        M !== null &&
          (e && M.alternate !== null && D.delete(M.key === null ? N : M.key),
          (p = l(M, p, N)),
          x === null ? (T = M) : (x.sibling = M),
          (x = M));
    return (
      e &&
        D.forEach(function (re) {
          return t(m, re);
        }),
      pe && Nn(m, N),
      T
    );
  }
  function E(m, p, y, R) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === rr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Zo:
          e: {
            for (var T = y.key, x = p; x !== null; ) {
              if (x.key === T) {
                if (((T = y.type), T === rr)) {
                  if (x.tag === 7) {
                    n(m, x.sibling),
                      (p = o(x, y.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  x.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === tn &&
                    Rc(T) === x.type)
                ) {
                  n(m, x.sibling),
                    (p = o(x, y.props)),
                    (p.ref = Wr(m, x, y)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, x);
                break;
              } else t(m, x);
              x = x.sibling;
            }
            y.type === rr
              ? ((p = zn(y.props.children, m.mode, R, y.key)),
                (p.return = m),
                (m = p))
              : ((R = Pl(y.type, y.key, y.props, null, m.mode, R)),
                (R.ref = Wr(m, p, y)),
                (R.return = m),
                (m = R));
          }
          return i(m);
        case nr:
          e: {
            for (x = y.key; p !== null; ) {
              if (p.key === x)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = sa(y, m.mode, R)), (p.return = m), (m = p);
          }
          return i(m);
        case tn:
          return (x = y._init), E(m, p, x(y._payload), R);
      }
      if (Zr(y)) return v(m, p, y, R);
      if (Ur(y)) return S(m, p, y, R);
      cl(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = aa(y, m.mode, R)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return E;
}
var kr = Jf(!0),
  Xf = Jf(!1),
  Wl = xn(null),
  Ql = null,
  dr = null,
  Vs = null;
function Ws() {
  Vs = dr = Ql = null;
}
function Qs(e) {
  var t = Wl.current;
  de(Wl), (e._currentValue = t);
}
function Ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vr(e, t) {
  (Ql = e),
    (Vs = dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (Vs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
      if (Ql === null) throw Error(L(308));
      (dr = e), (Ql.dependencies = { lanes: 0, firstContext: e });
    } else dr = dr.next = e;
  return t;
}
var On = null;
function Ks(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Yf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ks(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function At(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ks(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function xl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n);
  }
}
function jc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Kl(e, t, n, r) {
  var o = e.updateQueue;
  nn = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (l = u) : (i.next = u), (i = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var d = o.baseState;
    (i = 0), (c = u = s = null), (a = l);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            S = a;
          switch (((h = t), (g = n), S.tag)) {
            case 1:
              if (((v = S.payload), typeof v == "function")) {
                d = v.call(g, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = S.payload),
                (h = typeof v == "function" ? v.call(g, d, h) : v),
                h == null)
              )
                break e;
              d = ge({}, d, h);
              break e;
            case 2:
              nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = d)) : (c = c.next = g),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Vn |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Ao = {},
  Tt = xn(Ao),
  Ro = xn(Ao),
  jo = xn(Ao);
function Fn(e) {
  if (e === Ao) throw Error(L(174));
  return e;
}
function qs(e, t) {
  switch ((se(jo, t), se(Ro, e), se(Tt, Ao), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ja(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ja(t, e));
  }
  de(Tt), se(Tt, t);
}
function Cr() {
  de(Tt), de(Ro), de(jo);
}
function Zf(e) {
  Fn(jo.current);
  var t = Fn(Tt.current),
    n = ja(t, e.type);
  t !== n && (se(Ro, e), se(Tt, n));
}
function Js(e) {
  Ro.current === e && (de(Tt), de(Ro));
}
var he = xn(0);
function bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ta = [];
function Xs() {
  for (var e = 0; e < ta.length; e++)
    ta[e]._workInProgressVersionPrimary = null;
  ta.length = 0;
}
var El = Qt.ReactCurrentDispatcher,
  na = Qt.ReactCurrentBatchConfig,
  Hn = 0,
  me = null,
  je = null,
  Ne = null,
  ql = !1,
  so = !1,
  Po = 0,
  Jg = 0;
function Me() {
  throw Error(L(321));
}
function Ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, o, l) {
  if (
    ((Hn = l),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (El.current = e === null || e.memoizedState === null ? Zg : ey),
    (e = n(r, o)),
    so)
  ) {
    l = 0;
    do {
      if (((so = !1), (Po = 0), 25 <= l)) throw Error(L(301));
      (l += 1),
        (Ne = je = null),
        (t.updateQueue = null),
        (El.current = ty),
        (e = n(r, o));
    } while (so);
  }
  if (
    ((El.current = Jl),
    (t = je !== null && je.next !== null),
    (Hn = 0),
    (Ne = je = me = null),
    (ql = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Zs() {
  var e = Po !== 0;
  return (Po = 0), e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (me.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function ft() {
  if (je === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Ne === null ? me.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (je = e);
  else {
    if (e === null) throw Error(L(310));
    (je = e),
      (e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null,
      }),
      Ne === null ? (me.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function No(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ra(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = je,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = l;
    do {
      var c = u.lane;
      if ((Hn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = d), (i = r)) : (s = s.next = d),
          (me.lanes |= c),
          (Vn |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (i = r) : (s.next = a),
      xt(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (me.lanes |= l), (Vn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oa(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    xt(l, t.memoizedState) || (be = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function ep() {}
function tp(e, t) {
  var n = me,
    r = ft(),
    o = t(),
    l = !xt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (be = !0)),
    (r = r.queue),
    eu(op.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      To(9, rp.bind(null, n, r, o, t), void 0, null),
      Te === null)
    )
      throw Error(L(349));
    Hn & 30 || np(n, t, o);
  }
  return o;
}
function np(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lp(t) && ip(e);
}
function op(e, t, n) {
  return n(function () {
    lp(t) && ip(e);
  });
}
function lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function ip(e) {
  var t = $t(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Nc(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: No,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gg.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function To(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ap() {
  return ft().memoizedState;
}
function kl(e, t, n, r) {
  var o = jt();
  (me.flags |= e),
    (o.memoizedState = To(1 | t, n, void 0, r === void 0 ? null : r));
}
function mi(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (je !== null) {
    var i = je.memoizedState;
    if (((l = i.destroy), r !== null && Ys(r, i.deps))) {
      o.memoizedState = To(t, n, l, r);
      return;
    }
  }
  (me.flags |= e), (o.memoizedState = To(1 | t, n, l, r));
}
function Tc(e, t) {
  return kl(8390656, 8, e, t);
}
function eu(e, t) {
  return mi(2048, 8, e, t);
}
function sp(e, t) {
  return mi(4, 2, e, t);
}
function up(e, t) {
  return mi(4, 4, e, t);
}
function cp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), mi(4, 4, cp.bind(null, t, e), n)
  );
}
function tu() {}
function fp(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ys(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pp(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ys(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hp(e, t, n) {
  return Hn & 21
    ? (xt(n, t) || ((n = wf()), (me.lanes |= n), (Vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function Xg(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = na.transition;
  na.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (na.transition = r);
  }
}
function mp() {
  return ft().memoizedState;
}
function Yg(e, t, n) {
  var r = mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gp(e))
  )
    yp(t, n);
  else if (((n = Yf(e, t, n, r)), n !== null)) {
    var o = He();
    St(n, e, r, o), vp(n, t, r);
  }
}
function Gg(e, t, n) {
  var r = mn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gp(e)) yp(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), xt(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Ks(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yf(e, t, o, r)),
      n !== null && ((o = He()), St(n, e, r, o), vp(n, t, r));
  }
}
function gp(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function yp(e, t) {
  so = ql = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n);
  }
}
var Jl = {
    readContext: dt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Zg = {
    readContext: dt,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Tc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        kl(4194308, 4, cp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return kl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return kl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yg.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nc,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nc(!1),
        t = e[0];
      return (e = Xg.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        o = jt();
      if (pe) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(L(349));
        Hn & 30 || np(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Tc(op.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        To(9, rp.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = Te.identifierPrefix;
      if (pe) {
        var n = It,
          r = Mt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Po++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ey = {
    readContext: dt,
    useCallback: fp,
    useContext: dt,
    useEffect: eu,
    useImperativeHandle: dp,
    useInsertionEffect: sp,
    useLayoutEffect: up,
    useMemo: pp,
    useReducer: ra,
    useRef: ap,
    useState: function () {
      return ra(No);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = ft();
      return hp(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = ra(No)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ep,
    useSyncExternalStore: tp,
    useId: mp,
    unstable_isNewReconciler: !1,
  },
  ty = {
    readContext: dt,
    useCallback: fp,
    useContext: dt,
    useEffect: eu,
    useImperativeHandle: dp,
    useInsertionEffect: sp,
    useLayoutEffect: up,
    useMemo: pp,
    useReducer: oa,
    useRef: ap,
    useState: function () {
      return oa(No);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = ft();
      return je === null ? (t.memoizedState = e) : hp(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(No)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ep,
    useSyncExternalStore: tp,
    useId: mp,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ba(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = mn(e),
      l = At(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = pn(e, l, o)),
      t !== null && (St(t, e, o, r), xl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = mn(e),
      l = At(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = pn(e, l, o)),
      t !== null && (St(t, e, o, r), xl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = mn(e),
      o = At(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = pn(e, o, r)),
      t !== null && (St(t, e, r, n), xl(t, e, r));
  },
};
function _c(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !xo(n, r) || !xo(o, l)
        : !0
  );
}
function wp(e, t, n) {
  var r = !1,
    o = vn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = dt(l))
      : ((o = Je(t) ? Bn : ze.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? xr(e, o) : vn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Lc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gi.enqueueReplaceState(t, t.state, null);
}
function qa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), bs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = dt(l))
    : ((l = Je(t) ? Bn : ze.current), (o.context = xr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ba(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gi.enqueueReplaceState(o, o.state, null),
      Kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function la(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ny = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, t, n) {
  (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yl || ((Yl = !0), (ls = r)), Ja(e, t);
    }),
    n
  );
}
function xp(e, t, n) {
  (n = At(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ja(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ja(e, t),
          typeof r != "function" &&
            (hn === null ? (hn = new Set([this])) : hn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Dc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ny();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = gy.bind(null, e, t, n)), t.then(e, e));
}
function Oc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ry = Qt.ReactCurrentOwner,
  be = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Xf(t, null, n, r) : kr(t, e.child, n, r);
}
function Mc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    vr(t, o),
    (r = Gs(e, t, n, r, l, o)),
    (n = Zs()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ht(e, t, o))
      : (pe && n && Bs(t), (t.flags |= 1), $e(e, t, r, o), t.child)
  );
}
function Ic(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !uu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Ep(e, t, l, r, o))
      : ((e = Pl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xo), n(i, r) && e.ref === t.ref)
    )
      return Ht(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = gn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ep(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (xo(l, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), Ht(e, t, o);
  }
  return Xa(e, t, n, r, o);
}
function kp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(pr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(pr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        se(pr, Ze),
        (Ze |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(pr, Ze),
      (Ze |= r);
  return $e(e, t, o, n), t.child;
}
function Cp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xa(e, t, n, r, o) {
  var l = Je(n) ? Bn : ze.current;
  return (
    (l = xr(t, l)),
    vr(t, o),
    (n = Gs(e, t, n, r, l, o)),
    (r = Zs()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ht(e, t, o))
      : (pe && r && Bs(t), (t.flags |= 1), $e(e, t, n, o), t.child)
  );
}
function Ac(e, t, n, r, o) {
  if (Je(n)) {
    var l = !0;
    $l(t);
  } else l = !1;
  if ((vr(t, o), t.stateNode === null))
    Cl(e, t), wp(t, n, r), qa(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = Je(n) ? Bn : ze.current), (u = xr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Lc(t, i, r, u)),
      (nn = !1);
    var h = t.memoizedState;
    (i.state = h),
      Kl(t, r, i, o),
      (s = t.memoizedState),
      a !== r || h !== s || qe.current || nn
        ? (typeof c == "function" && (ba(t, n, c, r), (s = t.memoizedState)),
          (a = nn || _c(t, n, a, r, h, s, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Gf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : mt(t.type, a)),
      (i.props = u),
      (d = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = dt(s))
        : ((s = Je(n) ? Bn : ze.current), (s = xr(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== d || h !== s) && Lc(t, i, r, s)),
      (nn = !1),
      (h = t.memoizedState),
      (i.state = h),
      Kl(t, r, i, o);
    var v = t.memoizedState;
    a !== d || h !== v || qe.current || nn
      ? (typeof g == "function" && (ba(t, n, g, r), (v = t.memoizedState)),
        (u = nn || _c(t, n, u, r, h, v, s) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ya(e, t, n, r, l, o);
}
function Ya(e, t, n, r, o, l) {
  Cp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Ec(t, n, !1), Ht(e, t, l);
  (r = t.stateNode), (ry.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = kr(t, e.child, null, l)), (t.child = kr(t, null, a, l)))
      : $e(e, t, a, l),
    (t.memoizedState = r.state),
    o && Ec(t, n, !0),
    t.child
  );
}
function Rp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xc(e, t.context, !1),
    qs(e, t.containerInfo);
}
function zc(e, t, n, r, o) {
  return Er(), Hs(o), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Ga = { dehydrated: null, treeContext: null, retryLane: 0 };
function Za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jp(e, t, n) {
  var r = t.pendingProps,
    o = he.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(he, o & 1),
    e === null)
  )
    return (
      Qa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = wi(i, r, 0, null)),
              (e = zn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Za(n)),
              (t.memoizedState = Ga),
              e)
            : nu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return oy(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = gn(a, l)) : ((l = zn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Za(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ga),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = gn(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (
    (t = wi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function dl(e, t, n, r) {
  return (
    r !== null && Hs(r),
    kr(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oy(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = la(Error(L(422)))), dl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = wi({ mode: "visible", children: r.children }, o, 0, null)),
          (l = zn(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && kr(t, e.child, null, i),
          (t.child.memoizedState = Za(i)),
          (t.memoizedState = Ga),
          l);
  if (!(t.mode & 1)) return dl(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(L(419))), (r = la(l, r, void 0)), dl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), be || a)) {
    if (((r = Te), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), $t(e, o), St(r, e, o, -1));
    }
    return su(), (r = la(Error(L(421)))), dl(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (tt = fn(o.nextSibling)),
      (nt = t),
      (pe = !0),
      (vt = null),
      e !== null &&
        ((at[st++] = Mt),
        (at[st++] = It),
        (at[st++] = $n),
        (Mt = e.id),
        (It = e.overflow),
        ($n = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ka(e.return, t, n);
}
function ia(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Pp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if (($e(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uc(e, n, t);
        else if (e.tag === 19) Uc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && bl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ia(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && bl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ia(t, !0, n, null, l);
        break;
      case "together":
        ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ly(e, t, n) {
  switch (t.tag) {
    case 3:
      Rp(t), Er();
      break;
    case 5:
      Zf(t);
      break;
    case 1:
      Je(t.type) && $l(t);
      break;
    case 4:
      qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(Wl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? jp(e, t, n)
            : (se(he, he.current & 1),
              (e = Ht(e, t, n)),
              e !== null ? e.sibling : null);
      se(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kp(e, t, n);
  }
  return Ht(e, t, n);
}
var Np, es, Tp, _p;
Np = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
es = function () {};
Tp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fn(Tt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ea(e, o)), (r = Ea(e, r)), (l = []);
        break;
      case "select":
        (o = ge({}, o, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ra(e, o)), (r = Ra(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ul);
    }
    Pa(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ho.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (l = l || []).push(u, "" + s)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ho.hasOwnProperty(u)
                  ? (s != null && u === "onScroll" && ce("scroll", e),
                    l || a === s || (l = []))
                  : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_p = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qr(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function iy(e, t, n) {
  var r = t.pendingProps;
  switch (($s(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Je(t.type) && Bl(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cr(),
        de(qe),
        de(ze),
        Xs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ul(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (ss(vt), (vt = null)))),
        es(e, t),
        Ie(t),
        null
      );
    case 5:
      Js(t);
      var o = Fn(jo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ie(t), null;
        }
        if (((e = Fn(Tt.current)), ul(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Pt] = t), (r[Co] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < to.length; o++) ce(to[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              qu(r, l), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              Xu(r, l), ce("invalid", r);
          }
          Pa(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ho.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              el(r), Ju(r, l, !0);
              break;
            case "textarea":
              el(r), Yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ul);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Co] = r),
            Np(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Na(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < to.length; o++) ce(to[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (o = r);
                break;
              case "details":
                ce("toggle", e), (o = r);
                break;
              case "input":
                qu(e, r), (o = Ea(e, r)), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ge({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                Xu(e, r), (o = Ra(e, r)), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Pa(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? af(e, s)
                  : l === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && of(e, s))
                    : l === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && mo(e, s)
                        : typeof s == "number" && mo(e, "" + s)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (ho.hasOwnProperty(l)
                          ? s != null && l === "onScroll" && ce("scroll", e)
                          : s != null && js(e, l, s, i));
              }
            switch (n) {
              case "input":
                el(e), Ju(e, r, !1);
                break;
              case "textarea":
                el(e), Yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? hr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      hr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ul);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) _p(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Fn(jo.current)), Fn(Tt.current), ul(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (l = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (de(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && tt !== null && t.mode & 1 && !(t.flags & 128))
          qf(), Er(), (t.flags |= 98560), (l = !1);
        else if (((l = ul(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(L(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(L(317));
            l[Pt] = t;
          } else
            Er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (l = !1);
        } else vt !== null && (ss(vt), (vt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? Pe === 0 && (Pe = 3) : su())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Cr(), es(e, t), e === null && Eo(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return Qs(t.type._context), Ie(t), null;
    case 17:
      return Je(t.type) && Bl(), Ie(t), null;
    case 19:
      if ((de(he), (l = t.memoizedState), l === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Qr(l, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = bl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            xe() > jr &&
            ((t.flags |= 128), (r = !0), Qr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !pe)
            )
              return Ie(t), null;
          } else
            2 * xe() - l.renderingStartTime > jr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = xe()),
          (t.sibling = null),
          (n = he.current),
          se(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function ay(e, t) {
  switch (($s(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        de(qe),
        de(ze),
        Xs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Js(t), null;
    case 13:
      if (
        (de(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(he), null;
    case 4:
      return Cr(), null;
    case 10:
      return Qs(t.type._context), null;
    case 22:
    case 23:
      return au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fl = !1,
  Ae = !1,
  sy = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function ts(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Bc = !1;
function uy(e, t) {
  if (((za = Il), (e = Mf()), Us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = i + o),
                d !== l || (r !== 0 && d.nodeType !== 3) || (s = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (a = i),
                h === l && ++c === r && (s = i),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ua = { focusedElem: e, selectionRange: n }, Il = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var S = v.memoizedProps,
                    E = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : mt(t.type, S),
                      E,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (R) {
          we(t, t.return, R);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (v = Bc), (Bc = !1), v;
}
function uo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ts(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ns(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Co], delete t[Ha], delete t[Qg], delete t[Kg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), (e = e.sibling);
}
function os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), (e = e.sibling);
}
var De = null,
  gt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Op(e, t, n), (n = n.sibling);
}
function Op(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ui, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || fr(n, t);
    case 6:
      var r = De,
        o = gt;
      (De = null),
        Gt(e, t, n),
        (De = r),
        (gt = o),
        De !== null &&
          (gt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (gt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zi(e.parentNode, n)
              : e.nodeType === 1 && Zi(e, n),
            wo(e))
          : Zi(De, n.stateNode));
      break;
    case 4:
      (r = De),
        (o = gt),
        (De = n.stateNode.containerInfo),
        (gt = !0),
        Gt(e, t, n),
        (De = r),
        (gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ts(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), Gt(e, t, n), (Ae = r))
        : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function Hc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sy()),
      t.forEach(function (r) {
        var o = vy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (De = a.stateNode), (gt = !1);
              break e;
            case 3:
              (De = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (De = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (De === null) throw Error(L(160));
        Op(l, i, o), (De = null), (gt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        we(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fp(t, e), (t = t.sibling);
}
function Fp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), Rt(e), r & 4)) {
        try {
          uo(3, e, e.return), yi(3, e);
        } catch (S) {
          we(e, e.return, S);
        }
        try {
          uo(5, e, e.return);
        } catch (S) {
          we(e, e.return, S);
        }
      }
      break;
    case 1:
      ht(t, e), Rt(e), r & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        Rt(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          mo(o, "");
        } catch (S) {
          we(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && tf(o, l),
              Na(a, i);
            var u = Na(a, l);
            for (i = 0; i < s.length; i += 2) {
              var c = s[i],
                d = s[i + 1];
              c === "style"
                ? af(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? of(o, d)
                  : c === "children"
                    ? mo(o, d)
                    : js(o, c, d, u);
            }
            switch (a) {
              case "input":
                ka(o, l);
                break;
              case "textarea":
                nf(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? hr(o, !!l.multiple, g, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hr(o, !!l.multiple, l.defaultValue, !0)
                      : hr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Co] = l;
          } catch (S) {
            we(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ht(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (S) {
          we(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wo(t.containerInfo);
        } catch (S) {
          we(e, e.return, S);
        }
      break;
    case 4:
      ht(t, e), Rt(e);
      break;
    case 13:
      ht(t, e),
        Rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (lu = xe())),
        r & 4 && Hc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || c), ht(t, e), (Ae = u)) : ht(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((h = I), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  uo(4, h, h.return);
                  break;
                case 1:
                  fr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (S) {
                      we(r, n, S);
                    }
                  }
                  break;
                case 5:
                  fr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Wc(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (I = g)) : Wc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = d.stateNode),
                      (s = d.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = lf("display", i)));
              } catch (S) {
                we(e, e.return, S);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (S) {
                we(e, e.return, S);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), Rt(e), r & 4 && Hc(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (mo(o, ""), (r.flags &= -33));
          var l = $c(e);
          os(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = $c(e);
          rs(e, a, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      we(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cy(e, t, n) {
  (I = e), Mp(e);
}
function Mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || fl;
      if (!i) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Ae;
        a = fl;
        var u = Ae;
        if (((fl = i), (Ae = s) && !u))
          for (I = o; I !== null; )
            (i = I),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Qc(o)
                : s !== null
                  ? ((s.return = i), (I = s))
                  : Qc(o);
        for (; l !== null; ) (I = l), Mp(l), (l = l.sibling);
        (I = o), (fl = a), (Ae = u);
      }
      Vc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (I = l)) : Vc(e);
  }
}
function Vc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || yi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && Pc(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && wo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ae || (t.flags & 512 && ns(t));
      } catch (h) {
        we(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Wc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Qc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yi(4, t);
          } catch (s) {
            we(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              we(t, o, s);
            }
          }
          var l = t.return;
          try {
            ns(t);
          } catch (s) {
            we(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ns(t);
          } catch (s) {
            we(t, i, s);
          }
      }
    } catch (s) {
      we(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var dy = Math.ceil,
  Xl = Qt.ReactCurrentDispatcher,
  ru = Qt.ReactCurrentOwner,
  ct = Qt.ReactCurrentBatchConfig,
  Z = 0,
  Te = null,
  Re = null,
  Oe = 0,
  Ze = 0,
  pr = xn(0),
  Pe = 0,
  _o = null,
  Vn = 0,
  vi = 0,
  ou = 0,
  co = null,
  Ke = null,
  lu = 0,
  jr = 1 / 0,
  Ot = null,
  Yl = !1,
  ls = null,
  hn = null,
  pl = !1,
  an = null,
  Gl = 0,
  fo = 0,
  is = null,
  Rl = -1,
  jl = 0;
function He() {
  return Z & 6 ? xe() : Rl !== -1 ? Rl : (Rl = xe());
}
function mn(e) {
  return e.mode & 1
    ? Z & 2 && Oe !== 0
      ? Oe & -Oe
      : qg.transition !== null
        ? (jl === 0 && (jl = wf()), jl)
        : ((e = oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jf(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < fo) throw ((fo = 0), (is = null), Error(L(185)));
  Fo(e, n, r),
    (!(Z & 2) || e !== Te) &&
      (e === Te && (!(Z & 2) && (vi |= n), Pe === 4 && on(e, Oe)),
      Xe(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((jr = xe() + 500), hi && En()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  qm(e, t);
  var r = Ml(e, e === Te ? Oe : 0);
  if (r === 0)
    n !== null && ec(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ec(n), t === 1))
      e.tag === 0 ? bg(Kc.bind(null, e)) : Qf(Kc.bind(null, e)),
        Vg(function () {
          !(Z & 6) && En();
        }),
        (n = null);
    else {
      switch (Sf(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = yf;
          break;
        case 16:
          n = Fl;
          break;
        case 536870912:
          n = vf;
          break;
        default:
          n = Fl;
      }
      n = Vp(n, Ip.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ip(e, t) {
  if (((Rl = -1), (jl = 0), Z & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (wr() && e.callbackNode !== n) return null;
  var r = Ml(e, e === Te ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zl(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var l = zp();
    (Te !== e || Oe !== t) && ((Ot = null), (jr = xe() + 500), An(e, t));
    do
      try {
        hy();
        break;
      } catch (a) {
        Ap(e, a);
      }
    while (!0);
    Ws(),
      (Xl.current = l),
      (Z = o),
      Re !== null ? (t = 0) : ((Te = null), (Oe = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Oa(e)), o !== 0 && ((r = o), (t = as(e, o)))), t === 1)
    )
      throw ((n = _o), An(e, 0), on(e, r), Xe(e, xe()), n);
    if (t === 6) on(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !fy(o) &&
          ((t = Zl(e, r)),
          t === 2 && ((l = Oa(e)), l !== 0 && ((r = l), (t = as(e, l)))),
          t === 1))
      )
        throw ((n = _o), An(e, 0), on(e, r), Xe(e, xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Tn(e, Ke, Ot);
          break;
        case 3:
          if (
            (on(e, r), (r & 130023424) === r && ((t = lu + 500 - xe()), 10 < t))
          ) {
            if (Ml(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = $a(Tn.bind(null, e, Ke, Ot), t);
            break;
          }
          Tn(e, Ke, Ot);
          break;
        case 4:
          if ((on(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - wt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * dy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $a(Tn.bind(null, e, Ke, Ot), r);
            break;
          }
          Tn(e, Ke, Ot);
          break;
        case 5:
          Tn(e, Ke, Ot);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Xe(e, xe()), e.callbackNode === n ? Ip.bind(null, e) : null;
}
function as(e, t) {
  var n = co;
  return (
    e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
    (e = Zl(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ss(t)),
    e
  );
}
function ss(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function fy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function on(e, t) {
  for (
    t &= ~ou,
      t &= ~vi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Kc(e) {
  if (Z & 6) throw Error(L(327));
  wr();
  var t = Ml(e, 0);
  if (!(t & 1)) return Xe(e, xe()), null;
  var n = Zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = _o), An(e, 0), on(e, t), Xe(e, xe()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, Ke, Ot),
    Xe(e, xe()),
    null
  );
}
function iu(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((jr = xe() + 500), hi && En());
  }
}
function Wn(e) {
  an !== null && an.tag === 0 && !(Z & 6) && wr();
  var t = Z;
  Z |= 1;
  var n = ct.transition,
    r = oe;
  try {
    if (((ct.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (ct.transition = n), (Z = t), !(Z & 6) && En();
  }
}
function au() {
  (Ze = pr.current), de(pr);
}
function An(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hg(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var r = n;
      switch (($s(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Bl();
          break;
        case 3:
          Cr(), de(qe), de(ze), Xs();
          break;
        case 5:
          Js(r);
          break;
        case 4:
          Cr();
          break;
        case 13:
          de(he);
          break;
        case 19:
          de(he);
          break;
        case 10:
          Qs(r.type._context);
          break;
        case 22:
        case 23:
          au();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (Re = e = gn(e.current, null)),
    (Oe = Ze = t),
    (Pe = 0),
    (_o = null),
    (ou = vi = Vn = 0),
    (Ke = co = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function Ap(e, t) {
  do {
    var n = Re;
    try {
      if ((Ws(), (El.current = Jl), ql)) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ql = !1;
      }
      if (
        ((Hn = 0),
        (Ne = je = me = null),
        (so = !1),
        (Po = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (_o = t), (Re = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Oc(i);
          if (g !== null) {
            (g.flags &= -257),
              Fc(g, i, a, l, t),
              g.mode & 1 && Dc(l, u, t),
              (t = g),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Dc(l, u, t), su();
              break e;
            }
            s = Error(L(426));
          }
        } else if (pe && a.mode & 1) {
          var E = Oc(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Fc(E, i, a, l, t),
              Hs(Rr(s, a));
            break e;
          }
        }
        (l = s = Rr(s, a)),
          Pe !== 4 && (Pe = 2),
          co === null ? (co = [l]) : co.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = Sp(l, s, t);
              jc(l, m);
              break e;
            case 1:
              a = s;
              var p = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (hn === null || !hn.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var R = xp(l, a, t);
                jc(l, R);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Bp(n);
    } catch (T) {
      (t = T), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zp() {
  var e = Xl.current;
  return (Xl.current = Jl), e === null ? Jl : e;
}
function su() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Te === null || (!(Vn & 268435455) && !(vi & 268435455)) || on(Te, Oe);
}
function Zl(e, t) {
  var n = Z;
  Z |= 2;
  var r = zp();
  (Te !== e || Oe !== t) && ((Ot = null), An(e, t));
  do
    try {
      py();
      break;
    } catch (o) {
      Ap(e, o);
    }
  while (!0);
  if ((Ws(), (Z = n), (Xl.current = r), Re !== null)) throw Error(L(261));
  return (Te = null), (Oe = 0), Pe;
}
function py() {
  for (; Re !== null; ) Up(Re);
}
function hy() {
  for (; Re !== null && !Um(); ) Up(Re);
}
function Up(e) {
  var t = Hp(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bp(e) : (Re = t),
    (ru.current = null);
}
function Bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ay(n, t)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Re = null);
        return;
      }
    } else if (((n = iy(n, t, Ze)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function Tn(e, t, n) {
  var r = oe,
    o = ct.transition;
  try {
    (ct.transition = null), (oe = 1), my(e, t, n, r);
  } finally {
    (ct.transition = o), (oe = r);
  }
  return null;
}
function my(e, t, n, r) {
  do wr();
  while (an !== null);
  if (Z & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Jm(e, l),
    e === Te && ((Re = Te = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pl ||
      ((pl = !0),
      Vp(Fl, function () {
        return wr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = ct.transition), (ct.transition = null);
    var i = oe;
    oe = 1;
    var a = Z;
    (Z |= 4),
      (ru.current = null),
      uy(e, n),
      Fp(n, e),
      Mg(Ua),
      (Il = !!za),
      (Ua = za = null),
      (e.current = n),
      cy(n),
      Bm(),
      (Z = a),
      (oe = i),
      (ct.transition = l);
  } else e.current = n;
  if (
    (pl && ((pl = !1), (an = e), (Gl = o)),
    (l = e.pendingLanes),
    l === 0 && (hn = null),
    Vm(n.stateNode),
    Xe(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yl) throw ((Yl = !1), (e = ls), (ls = null), e);
  return (
    Gl & 1 && e.tag !== 0 && wr(),
    (l = e.pendingLanes),
    l & 1 ? (e === is ? fo++ : ((fo = 0), (is = e))) : (fo = 0),
    En(),
    null
  );
}
function wr() {
  if (an !== null) {
    var e = Sf(Gl),
      t = ct.transition,
      n = oe;
    try {
      if (((ct.transition = null), (oe = 16 > e ? 16 : e), an === null))
        var r = !1;
      else {
        if (((e = an), (an = null), (Gl = 0), Z & 6)) throw Error(L(331));
        var o = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var l = I,
            i = l.child;
          if (I.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uo(8, c, l);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var h = c.sibling,
                        g = c.return;
                      if ((Lp(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (I = h);
                        break;
                      }
                      I = g;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var E = S.sibling;
                    (S.sibling = null), (S = E);
                  } while (S !== null);
                }
              }
              I = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (I = i);
          else
            e: for (; I !== null; ) {
              if (((l = I), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    uo(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (I = m);
                break e;
              }
              I = l.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          i = I;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (I = y);
          else
            e: for (i = p; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yi(9, a);
                  }
                } catch (T) {
                  we(a, a.return, T);
                }
              if (a === i) {
                I = null;
                break e;
              }
              var R = a.sibling;
              if (R !== null) {
                (R.return = a.return), (I = R);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((Z = o), En(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(ui, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (ct.transition = t);
    }
  }
  return !1;
}
function bc(e, t, n) {
  (t = Rr(n, t)),
    (t = Sp(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = He()),
    e !== null && (Fo(e, 1, t), Xe(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) bc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (hn === null || !hn.has(r)))
        ) {
          (e = Rr(n, e)),
            (e = xp(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = He()),
            t !== null && (Fo(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Oe & n) === n &&
      (Pe === 4 || (Pe === 3 && (Oe & 130023424) === Oe && 500 > xe() - lu)
        ? An(e, 0)
        : (ou |= n)),
    Xe(e, t);
}
function $p(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = rl), (rl <<= 1), !(rl & 130023424) && (rl = 4194304))
      : (t = 1));
  var n = He();
  (e = $t(e, t)), e !== null && (Fo(e, t, n), Xe(e, n));
}
function yy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $p(e, n);
}
function vy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), $p(e, n);
}
var Hp;
Hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), ly(e, t, n);
      be = !!(e.flags & 131072);
    }
  else (be = !1), pe && t.flags & 1048576 && Kf(t, Vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var o = xr(t, ze.current);
      vr(t, n), (o = Gs(null, t, r, e, o, n));
      var l = Zs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((l = !0), $l(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            bs(t),
            (o.updater = gi),
            (t.stateNode = o),
            (o._reactInternals = t),
            qa(t, r, e, n),
            (t = Ya(null, t, r, !0, l, n)))
          : ((t.tag = 0), pe && l && Bs(t), $e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Sy(r)),
          (e = mt(r, e)),
          o)
        ) {
          case 0:
            t = Xa(null, t, r, e, n);
            break e;
          case 1:
            t = Ac(null, t, r, e, n);
            break e;
          case 11:
            t = Mc(null, t, r, e, n);
            break e;
          case 14:
            t = Ic(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Xa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Ac(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Rp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Gf(e, t),
          Kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Rr(Error(L(423)), t)), (t = zc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Rr(Error(L(424)), t)), (t = zc(e, t, r, n, o));
            break e;
          } else
            for (
              tt = fn(t.stateNode.containerInfo.firstChild),
                nt = t,
                pe = !0,
                vt = null,
                n = Xf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Er(), r === o)) {
            t = Ht(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zf(t),
        e === null && Qa(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ba(r, o) ? (i = null) : l !== null && Ba(r, l) && (t.flags |= 32),
        Cp(e, t),
        $e(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Qa(t), null;
    case 13:
      return jp(e, t, n);
    case 4:
      return (
        qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Mc(e, t, r, o, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          se(Wl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (xt(l.value, i)) {
            if (l.children === o.children && !qe.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = At(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Ka(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ka(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        $e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        vr(t, n),
        (o = dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mt(r, t.pendingProps)),
        (o = mt(r.type, o)),
        Ic(e, t, r, o, n)
      );
    case 15:
      return Ep(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Cl(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), $l(t)) : (e = !1),
        vr(t, n),
        wp(t, r, o),
        qa(t, r, o, n),
        Ya(null, t, r, !0, e, n)
      );
    case 19:
      return Pp(e, t, n);
    case 22:
      return kp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Vp(e, t) {
  return gf(e, t);
}
function wy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new wy(e, t, n, r);
}
function uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sy(e) {
  if (typeof e == "function") return uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ns)) return 11;
    if (e === Ts) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Pl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) uu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case rr:
        return zn(n.children, o, l, t);
      case Ps:
        (i = 8), (o |= 8);
        break;
      case va:
        return (
          (e = ut(12, n, t, o | 2)), (e.elementType = va), (e.lanes = l), e
        );
      case wa:
        return (e = ut(13, n, t, o)), (e.elementType = wa), (e.lanes = l), e;
      case Sa:
        return (e = ut(19, n, t, o)), (e.elementType = Sa), (e.lanes = l), e;
      case Gd:
        return wi(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xd:
              i = 10;
              break e;
            case Yd:
              i = 9;
              break e;
            case Ns:
              i = 11;
              break e;
            case Ts:
              i = 14;
              break e;
            case tn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function zn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function wi(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Gd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function aa(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function sa(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hi(0)),
    (this.expirationTimes = Hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, o, l, i, a, s) {
  return (
    (e = new xy(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ut(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bs(l),
    e
  );
}
function Ey(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wp(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Wf(e, n, t);
  }
  return t;
}
function Qp(e, t, n, r, o, l, i, a, s) {
  return (
    (e = cu(n, r, !0, e, o, l, i, a, s)),
    (e.context = Wp(null)),
    (n = e.current),
    (r = He()),
    (o = mn(n)),
    (l = At(r, o)),
    (l.callback = t ?? null),
    pn(n, l, o),
    (e.current.lanes = o),
    Fo(e, o, r),
    Xe(e, r),
    e
  );
}
function Si(e, t, n, r) {
  var o = t.current,
    l = He(),
    i = mn(o);
  return (
    (n = Wp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(o, t, i)),
    e !== null && (St(e, o, i, l), xl(e, o, i)),
    i
  );
}
function ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function du(e, t) {
  qc(e, t), (e = e.alternate) && qc(e, t);
}
function ky() {
  return null;
}
var Kp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
xi.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Si(e, t, null, null);
};
xi.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      Si(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function xi(e) {
  this._internalRoot = e;
}
xi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++);
    rn.splice(n, 0, e), n === 0 && Rf(e);
  }
};
function pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ei(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jc() {}
function Cy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = ei(i);
        l.call(u);
      };
    }
    var i = Qp(t, r, e, 0, null, !1, !1, "", Jc);
    return (
      (e._reactRootContainer = i),
      (e[Bt] = i.current),
      Eo(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ei(s);
      a.call(u);
    };
  }
  var s = cu(e, 0, !1, null, null, !1, !1, "", Jc);
  return (
    (e._reactRootContainer = s),
    (e[Bt] = s.current),
    Eo(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      Si(t, s, n, r);
    }),
    s
  );
}
function ki(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = ei(i);
        a.call(s);
      };
    }
    Si(t, i, e, o);
  } else i = Cy(n, t, e, o, r);
  return ei(i);
}
xf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = eo(t.pendingLanes);
        n !== 0 &&
          (Ds(t, n | 1), Xe(t, xe()), !(Z & 6) && ((jr = xe() + 500), En()));
      }
      break;
    case 13:
      Wn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var o = He();
          St(r, e, 1, o);
        }
      }),
        du(e, 1);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = He();
      St(t, e, 134217728, n);
    }
    du(e, 134217728);
  }
};
Ef = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = He();
      St(n, e, t, r);
    }
    du(e, t);
  }
};
kf = function () {
  return oe;
};
Cf = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
_a = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ka(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pi(r);
            if (!o) throw Error(L(90));
            ef(r), ka(r, o);
          }
        }
      }
      break;
    case "textarea":
      nf(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
cf = iu;
df = Wn;
var Ry = { usingClientEntryPoint: !1, Events: [Io, ar, pi, sf, uf, iu] },
  Kr = {
    findFiberByHostInstance: Dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  jy = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (ui = hl.inject(jy)), (Nt = hl);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pu(t)) throw Error(L(200));
  return Ey(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!pu(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Kp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Bt] = t.current),
    Eo(e.nodeType === 8 ? e.parentNode : e),
    new fu(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = hf(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return Wn(e);
};
lt.hydrate = function (e, t, n) {
  if (!Ei(t)) throw Error(L(200));
  return ki(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!pu(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Kp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Qp(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Bt] = t.current),
    Eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new xi(t);
};
lt.render = function (e, t, n) {
  if (!Ei(t)) throw Error(L(200));
  return ki(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!Ei(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Wn(function () {
        ki(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = iu;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ei(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ki(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
bp(), (Kd.exports = lt);
var hu = Kd.exports;
const Py = Fd(hu),
  Ny = Od({ __proto__: null, default: Py }, [hu]);
var qp,
  Xc = hu;
(qp = Xc.createRoot), Xc.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ce || (Ce = {}));
const Yc = "popstate";
function Ty(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: a } = r.location;
    return Lo(
      "",
      { pathname: l, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Qn(o);
  }
  return Ly(t, n, null, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Pr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _y() {
  return Math.random().toString(36).substr(2, 8);
}
function Gc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Lo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? kn(t) : t,
      { state: n, key: (t && t.key) || r || _y() },
    )
  );
}
function Qn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function kn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    a = Ce.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), i.replaceState(fe({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    a = Ce.Pop;
    let E = c(),
      m = E == null ? null : E - u;
    (u = E), s && s({ action: a, location: S.location, delta: m });
  }
  function h(E, m) {
    a = Ce.Push;
    let p = Lo(S.location, E, m);
    u = c() + 1;
    let y = Gc(p, u),
      R = S.createHref(p);
    try {
      i.pushState(y, "", R);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      o.location.assign(R);
    }
    l && s && s({ action: a, location: S.location, delta: 1 });
  }
  function g(E, m) {
    a = Ce.Replace;
    let p = Lo(S.location, E, m);
    u = c();
    let y = Gc(p, u),
      R = S.createHref(p);
    i.replaceState(y, "", R),
      l && s && s({ action: a, location: S.location, delta: 0 });
  }
  function v(E) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof E == "string" ? E : Qn(E);
    return (
      (p = p.replace(/ $/, "%20")),
      q(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Yc, d),
        (s = E),
        () => {
          o.removeEventListener(Yc, d), (s = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: v,
    encodeLocation(E) {
      let m = v(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: g,
    go(E) {
      return i.go(E);
    },
  };
  return S;
}
var le;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(le || (le = {}));
const Dy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Oy(e) {
  return e.index === !0;
}
function ti(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, String(l)],
        a = typeof o.id == "string" ? o.id : i.join("-");
      if (
        (q(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Oy(o))
      ) {
        let s = fe({}, o, t(o), { id: a });
        return (r[a] = s), s;
      } else {
        let s = fe({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = s), o.children && (s.children = ti(o.children, t, i, r)), s
        );
      }
    })
  );
}
function _n(e, t, n) {
  return n === void 0 && (n = "/"), Nl(e, t, n, !1);
}
function Nl(e, t, n, r) {
  let o = typeof t == "string" ? kn(t) : t,
    l = Vt(o.pathname || "/", n);
  if (l == null) return null;
  let i = Jp(e);
  My(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let u = Ky(l);
    a = Wy(i[s], u, r);
  }
  return a;
}
function Fy(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Jp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
    let s = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    s.relativePath.startsWith("/") &&
      (q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = zt([r, s.relativePath]),
      c = n.concat(s);
    l.children &&
      l.children.length > 0 &&
      (q(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Jp(l.children, t, c, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: Hy(u, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, i);
      else for (let s of Xp(l.path)) o(l, i, s);
    }),
    t
  );
}
function Xp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Xp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? l : [l, s].join("/")))),
    o && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function My(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Vy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Iy = /^:[\w-]+$/,
  Ay = 3,
  zy = 2,
  Uy = 1,
  By = 10,
  $y = -2,
  Zc = (e) => e === "*";
function Hy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zc) && (r += $y),
    t && (r += zy),
    n
      .filter((o) => !Zc(o))
      .reduce((o, l) => o + (Iy.test(l) ? Ay : l === "" ? Uy : By), r)
  );
}
function Vy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Wy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    o = {},
    l = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      d = ni(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c,
      ),
      h = s.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ni(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      i.push({
        params: o,
        pathname: zt([l, d.pathname]),
        pathnameBase: Jy(zt([l, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (l = zt([l, d.pathnameBase]));
  }
  return i;
}
function ni(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Qy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: h, isOptional: g } = c;
      if (h === "*") {
        let S = a[d] || "";
        i = l.slice(0, l.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        g && !v ? (u[h] = void 0) : (u[h] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Qy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Pr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ky(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Pr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Vt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function by(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? kn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qy(n, t)) : t,
    search: Xy(r),
    hash: Yy(o),
  };
}
function qy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ua(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function mu(e, t) {
  let n = Yp(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function gu(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = kn(e))
    : ((o = fe({}, e)),
      q(
        !o.pathname || !o.pathname.includes("?"),
        ua("?", "pathname", "search", o),
      ),
      q(
        !o.pathname || !o.pathname.includes("#"),
        ua("#", "pathname", "hash", o),
      ),
      q(!o.search || !o.search.includes("#"), ua("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    a;
  if (i == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      o.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let s = by(o, a),
    u = i && i !== "/" && i.endsWith("/"),
    c = (l || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Jy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Xy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Yy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ri {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ci(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Gp = ["post", "put", "patch", "delete"],
  Gy = new Set(Gp),
  Zy = ["get", ...Gp],
  ev = new Set(Zy),
  tv = new Set([301, 302, 303, 307, 308]),
  nv = new Set([307, 308]),
  ca = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  br = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  yu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ov = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Zp = "remix-router-transitions";
function lv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    o = (C) => ({ hasErrorBoundary: w(C) });
  } else o = ov;
  let l = {},
    i = ti(e.routes, o, void 0, l),
    a,
    s = e.basename || "/",
    u = e.dataStrategy || uv,
    c = e.patchRoutesOnNavigation,
    d = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    h = null,
    g = new Set(),
    v = null,
    S = null,
    E = null,
    m = e.hydrationData != null,
    p = _n(i, e.history.location, s),
    y = null;
  if (p == null && !c) {
    let w = Qe(404, { pathname: e.history.location.pathname }),
      { matches: C, route: j } = cd(i);
    (p = C), (y = { [j.id]: w });
  }
  p &&
    !e.hydrationData &&
    qo(p, i, e.history.location.pathname).active &&
    (p = null);
  let R;
  if (p)
    if (p.some((w) => w.route.lazy)) R = !1;
    else if (!p.some((w) => w.route.loader)) R = !0;
    else if (d.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        C = e.hydrationData ? e.hydrationData.errors : null;
      if (C) {
        let j = p.findIndex((_) => C[_.route.id] !== void 0);
        R = p.slice(0, j + 1).every((_) => !cs(_.route, w, C));
      } else R = p.every((j) => !cs(j.route, w, C));
    } else R = e.hydrationData != null;
  else if (((R = !1), (p = []), d.v7_partialHydration)) {
    let w = qo(null, i, e.history.location.pathname);
    w.active && w.matches && (p = w.matches);
  }
  let T,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: R,
      navigation: ca,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = Ce.Pop,
    N = !1,
    F,
    M = !1,
    $ = new Map(),
    re = null,
    ie = !1,
    Ee = !1,
    qt = [],
    Jt = new Set(),
    Se = new Map(),
    O = 0,
    W = -1,
    Q = new Map(),
    te = new Set(),
    ue = new Map(),
    kt = new Map(),
    _e = new Set(),
    pt = new Map(),
    Ue = new Map(),
    _t;
  function Ah() {
    if (
      ((h = e.history.listen((w) => {
        let { action: C, location: j, delta: _ } = w;
        if (_t) {
          _t(), (_t = void 0);
          return;
        }
        Pr(
          Ue.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let A = zu({
          currentLocation: x.location,
          nextLocation: j,
          historyAction: C,
        });
        if (A && _ != null) {
          let H = new Promise((K) => {
            _t = K;
          });
          e.history.go(_ * -1),
            bo(A, {
              state: "blocked",
              location: j,
              proceed() {
                bo(A, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: j,
                }),
                  H.then(() => e.history.go(_));
              },
              reset() {
                let K = new Map(x.blockers);
                K.set(A, br), Be({ blockers: K });
              },
            });
          return;
        }
        return Rn(C, j);
      })),
      n)
    ) {
      kv(t, $);
      let w = () => Cv(t, $);
      t.addEventListener("pagehide", w),
        (re = () => t.removeEventListener("pagehide", w));
    }
    return x.initialized || Rn(Ce.Pop, x.location, { initialHydration: !0 }), T;
  }
  function zh() {
    h && h(),
      re && re(),
      g.clear(),
      F && F.abort(),
      x.fetchers.forEach((w, C) => Ko(C)),
      x.blockers.forEach((w, C) => Au(C));
  }
  function Uh(w) {
    return g.add(w), () => g.delete(w);
  }
  function Be(w, C) {
    C === void 0 && (C = {}), (x = fe({}, x, w));
    let j = [],
      _ = [];
    d.v7_fetcherPersist &&
      x.fetchers.forEach((A, H) => {
        A.state === "idle" && (_e.has(H) ? _.push(H) : j.push(H));
      }),
      [...g].forEach((A) =>
        A(x, {
          deletedFetchers: _,
          viewTransitionOpts: C.viewTransitionOpts,
          flushSync: C.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist &&
        (j.forEach((A) => x.fetchers.delete(A)), _.forEach((A) => Ko(A)));
  }
  function Jn(w, C, j) {
    var _, A;
    let { flushSync: H } = j === void 0 ? {} : j,
      K =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        yt(x.navigation.formMethod) &&
        x.navigation.state === "loading" &&
        ((_ = w.state) == null ? void 0 : _._isRedirect) !== !0,
      U;
    C.actionData
      ? Object.keys(C.actionData).length > 0
        ? (U = C.actionData)
        : (U = null)
      : K
        ? (U = x.actionData)
        : (U = null);
    let B = C.loaderData
        ? sd(x.loaderData, C.loaderData, C.matches || [], C.errors)
        : x.loaderData,
      z = x.blockers;
    z.size > 0 && ((z = new Map(z)), z.forEach((G, Le) => z.set(Le, br)));
    let V =
      N === !0 ||
      (x.navigation.formMethod != null &&
        yt(x.navigation.formMethod) &&
        ((A = w.state) == null ? void 0 : A._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      ie ||
        D === Ce.Pop ||
        (D === Ce.Push
          ? e.history.push(w, w.state)
          : D === Ce.Replace && e.history.replace(w, w.state));
    let X;
    if (D === Ce.Pop) {
      let G = $.get(x.location.pathname);
      G && G.has(w.pathname)
        ? (X = { currentLocation: x.location, nextLocation: w })
        : $.has(w.pathname) &&
          (X = { currentLocation: w, nextLocation: x.location });
    } else if (M) {
      let G = $.get(x.location.pathname);
      G
        ? G.add(w.pathname)
        : ((G = new Set([w.pathname])), $.set(x.location.pathname, G)),
        (X = { currentLocation: x.location, nextLocation: w });
    }
    Be(
      fe({}, C, {
        actionData: U,
        loaderData: B,
        historyAction: D,
        location: w,
        initialized: !0,
        navigation: ca,
        revalidation: "idle",
        restoreScrollPosition: Bu(w, C.matches || x.matches),
        preventScrollReset: V,
        blockers: z,
      }),
      { viewTransitionOpts: X, flushSync: H === !0 },
    ),
      (D = Ce.Pop),
      (N = !1),
      (M = !1),
      (ie = !1),
      (Ee = !1),
      (qt = []);
  }
  async function _u(w, C) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let j = us(
        x.location,
        x.matches,
        s,
        d.v7_prependBasename,
        w,
        d.v7_relativeSplatPath,
        C == null ? void 0 : C.fromRouteId,
        C == null ? void 0 : C.relative,
      ),
      {
        path: _,
        submission: A,
        error: H,
      } = ed(d.v7_normalizeFormMethod, !1, j, C),
      K = x.location,
      U = Lo(x.location, _, C && C.state);
    U = fe({}, U, e.history.encodeLocation(U));
    let B = C && C.replace != null ? C.replace : void 0,
      z = Ce.Push;
    B === !0
      ? (z = Ce.Replace)
      : B === !1 ||
        (A != null &&
          yt(A.formMethod) &&
          A.formAction === x.location.pathname + x.location.search &&
          (z = Ce.Replace));
    let V =
        C && "preventScrollReset" in C ? C.preventScrollReset === !0 : void 0,
      X = (C && C.flushSync) === !0,
      G = zu({ currentLocation: K, nextLocation: U, historyAction: z });
    if (G) {
      bo(G, {
        state: "blocked",
        location: U,
        proceed() {
          bo(G, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            _u(w, C);
        },
        reset() {
          let Le = new Map(x.blockers);
          Le.set(G, br), Be({ blockers: Le });
        },
      });
      return;
    }
    return await Rn(z, U, {
      submission: A,
      pendingError: H,
      preventScrollReset: V,
      replace: C && C.replace,
      enableViewTransition: C && C.viewTransition,
      flushSync: X,
    });
  }
  function Bh() {
    if (
      (Oi(),
      Be({ revalidation: "loading" }),
      x.navigation.state !== "submitting")
    ) {
      if (x.navigation.state === "idle") {
        Rn(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Rn(D || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation,
        enableViewTransition: M === !0,
      });
    }
  }
  async function Rn(w, C, j) {
    F && F.abort(),
      (F = null),
      (D = w),
      (ie = (j && j.startUninterruptedRevalidation) === !0),
      Xh(x.location, x.matches),
      (N = (j && j.preventScrollReset) === !0),
      (M = (j && j.enableViewTransition) === !0);
    let _ = a || i,
      A = j && j.overrideNavigation,
      H = _n(_, C, s),
      K = (j && j.flushSync) === !0,
      U = qo(H, _, C.pathname);
    if ((U.active && U.matches && (H = U.matches), !H)) {
      let { error: ae, notFoundMatches: ne, route: ye } = Fi(C.pathname);
      Jn(
        C,
        { matches: ne, loaderData: {}, errors: { [ye.id]: ae } },
        { flushSync: K },
      );
      return;
    }
    if (
      x.initialized &&
      !Ee &&
      mv(x.location, C) &&
      !(j && j.submission && yt(j.submission.formMethod))
    ) {
      Jn(C, { matches: H }, { flushSync: K });
      return;
    }
    F = new AbortController();
    let B = er(e.history, C, F.signal, j && j.submission),
      z;
    if (j && j.pendingError)
      z = [Ln(H).route.id, { type: le.error, error: j.pendingError }];
    else if (j && j.submission && yt(j.submission.formMethod)) {
      let ae = await $h(B, C, j.submission, H, U.active, {
        replace: j.replace,
        flushSync: K,
      });
      if (ae.shortCircuited) return;
      if (ae.pendingActionResult) {
        let [ne, ye] = ae.pendingActionResult;
        if (et(ye) && Ci(ye.error) && ye.error.status === 404) {
          (F = null),
            Jn(C, {
              matches: ae.matches,
              loaderData: {},
              errors: { [ne]: ye.error },
            });
          return;
        }
      }
      (H = ae.matches || H),
        (z = ae.pendingActionResult),
        (A = da(C, j.submission)),
        (K = !1),
        (U.active = !1),
        (B = er(e.history, B.url, B.signal));
    }
    let {
      shortCircuited: V,
      matches: X,
      loaderData: G,
      errors: Le,
    } = await Hh(
      B,
      C,
      H,
      U.active,
      A,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      K,
      z,
    );
    V ||
      ((F = null),
      Jn(C, fe({ matches: X || H }, ud(z), { loaderData: G, errors: Le })));
  }
  async function $h(w, C, j, _, A, H) {
    H === void 0 && (H = {}), Oi();
    let K = xv(C, j);
    if ((Be({ navigation: K }, { flushSync: H.flushSync === !0 }), A)) {
      let z = await Jo(_, C.pathname, w.signal);
      if (z.type === "aborted") return { shortCircuited: !0 };
      if (z.type === "error") {
        let V = Ln(z.partialMatches).route.id;
        return {
          matches: z.partialMatches,
          pendingActionResult: [V, { type: le.error, error: z.error }],
        };
      } else if (z.matches) _ = z.matches;
      else {
        let { notFoundMatches: V, error: X, route: G } = Fi(C.pathname);
        return {
          matches: V,
          pendingActionResult: [G.id, { type: le.error, error: X }],
        };
      }
    }
    let U,
      B = no(_, C);
    if (!B.route.action && !B.route.lazy)
      U = {
        type: le.error,
        error: Qe(405, {
          method: w.method,
          pathname: C.pathname,
          routeId: B.route.id,
        }),
      };
    else if (
      ((U = (await Mr("action", x, w, [B], _, null))[B.route.id]),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Mn(U)) {
      let z;
      return (
        H && H.replace != null
          ? (z = H.replace)
          : (z =
              ld(U.response.headers.get("Location"), new URL(w.url), s) ===
              x.location.pathname + x.location.search),
        await jn(w, U, !0, { submission: j, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (sn(U)) throw Qe(400, { type: "defer-action" });
    if (et(U)) {
      let z = Ln(_, B.route.id);
      return (
        (H && H.replace) !== !0 && (D = Ce.Push),
        { matches: _, pendingActionResult: [z.route.id, U] }
      );
    }
    return { matches: _, pendingActionResult: [B.route.id, U] };
  }
  async function Hh(w, C, j, _, A, H, K, U, B, z, V) {
    let X = A || da(C, H),
      G = H || K || fd(X),
      Le = !ie && (!d.v7_partialHydration || !B);
    if (_) {
      if (Le) {
        let ve = Lu(V);
        Be(fe({ navigation: X }, ve !== void 0 ? { actionData: ve } : {}), {
          flushSync: z,
        });
      }
      let ee = await Jo(j, C.pathname, w.signal);
      if (ee.type === "aborted") return { shortCircuited: !0 };
      if (ee.type === "error") {
        let ve = Ln(ee.partialMatches).route.id;
        return {
          matches: ee.partialMatches,
          loaderData: {},
          errors: { [ve]: ee.error },
        };
      } else if (ee.matches) j = ee.matches;
      else {
        let { error: ve, notFoundMatches: Yn, route: zr } = Fi(C.pathname);
        return { matches: Yn, loaderData: {}, errors: { [zr.id]: ve } };
      }
    }
    let ae = a || i,
      [ne, ye] = nd(
        e.history,
        x,
        j,
        G,
        C,
        d.v7_partialHydration && B === !0,
        d.v7_skipActionErrorRevalidation,
        Ee,
        qt,
        Jt,
        _e,
        ue,
        te,
        ae,
        s,
        V,
      );
    if (
      (Mi(
        (ee) =>
          !(j && j.some((ve) => ve.route.id === ee)) ||
          (ne && ne.some((ve) => ve.route.id === ee)),
      ),
      (W = ++O),
      ne.length === 0 && ye.length === 0)
    ) {
      let ee = Mu();
      return (
        Jn(
          C,
          fe(
            {
              matches: j,
              loaderData: {},
              errors: V && et(V[1]) ? { [V[0]]: V[1].error } : null,
            },
            ud(V),
            ee ? { fetchers: new Map(x.fetchers) } : {},
          ),
          { flushSync: z },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Le) {
      let ee = {};
      if (!_) {
        ee.navigation = X;
        let ve = Lu(V);
        ve !== void 0 && (ee.actionData = ve);
      }
      ye.length > 0 && (ee.fetchers = Vh(ye)), Be(ee, { flushSync: z });
    }
    ye.forEach((ee) => {
      Yt(ee.key), ee.controller && Se.set(ee.key, ee.controller);
    });
    let Xn = () => ye.forEach((ee) => Yt(ee.key));
    F && F.signal.addEventListener("abort", Xn);
    let { loaderResults: Ir, fetcherResults: Dt } = await Du(x, j, ne, ye, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", Xn),
      ye.forEach((ee) => Se.delete(ee.key));
    let Ct = ml(Ir);
    if (Ct)
      return await jn(w, Ct.result, !0, { replace: U }), { shortCircuited: !0 };
    if (((Ct = ml(Dt)), Ct))
      return (
        te.add(Ct.key),
        await jn(w, Ct.result, !0, { replace: U }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ii, errors: Ar } = ad(x, j, Ir, V, ye, Dt, pt);
    pt.forEach((ee, ve) => {
      ee.subscribe((Yn) => {
        (Yn || ee.done) && pt.delete(ve);
      });
    }),
      d.v7_partialHydration && B && x.errors && (Ar = fe({}, x.errors, Ar));
    let Pn = Mu(),
      Xo = Iu(W),
      Yo = Pn || Xo || ye.length > 0;
    return fe(
      { matches: j, loaderData: Ii, errors: Ar },
      Yo ? { fetchers: new Map(x.fetchers) } : {},
    );
  }
  function Lu(w) {
    if (w && !et(w[1])) return { [w[0]]: w[1].data };
    if (x.actionData)
      return Object.keys(x.actionData).length === 0 ? null : x.actionData;
  }
  function Vh(w) {
    return (
      w.forEach((C) => {
        let j = x.fetchers.get(C.key),
          _ = qr(void 0, j ? j.data : void 0);
        x.fetchers.set(C.key, _);
      }),
      new Map(x.fetchers)
    );
  }
  function Wh(w, C, j, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Yt(w);
    let A = (_ && _.flushSync) === !0,
      H = a || i,
      K = us(
        x.location,
        x.matches,
        s,
        d.v7_prependBasename,
        j,
        d.v7_relativeSplatPath,
        C,
        _ == null ? void 0 : _.relative,
      ),
      U = _n(H, K, s),
      B = qo(U, H, K);
    if ((B.active && B.matches && (U = B.matches), !U)) {
      Lt(w, C, Qe(404, { pathname: K }), { flushSync: A });
      return;
    }
    let {
      path: z,
      submission: V,
      error: X,
    } = ed(d.v7_normalizeFormMethod, !0, K, _);
    if (X) {
      Lt(w, C, X, { flushSync: A });
      return;
    }
    let G = no(U, z),
      Le = (_ && _.preventScrollReset) === !0;
    if (V && yt(V.formMethod)) {
      Qh(w, C, z, G, U, B.active, A, Le, V);
      return;
    }
    ue.set(w, { routeId: C, path: z }), Kh(w, C, z, G, U, B.active, A, Le, V);
  }
  async function Qh(w, C, j, _, A, H, K, U, B) {
    Oi(), ue.delete(w);
    function z(ke) {
      if (!ke.route.action && !ke.route.lazy) {
        let Gn = Qe(405, { method: B.formMethod, pathname: j, routeId: C });
        return Lt(w, C, Gn, { flushSync: K }), !0;
      }
      return !1;
    }
    if (!H && z(_)) return;
    let V = x.fetchers.get(w);
    Xt(w, Ev(B, V), { flushSync: K });
    let X = new AbortController(),
      G = er(e.history, j, X.signal, B);
    if (H) {
      let ke = await Jo(A, j, G.signal);
      if (ke.type === "aborted") return;
      if (ke.type === "error") {
        Lt(w, C, ke.error, { flushSync: K });
        return;
      } else if (ke.matches) {
        if (((A = ke.matches), (_ = no(A, j)), z(_))) return;
      } else {
        Lt(w, C, Qe(404, { pathname: j }), { flushSync: K });
        return;
      }
    }
    Se.set(w, X);
    let Le = O,
      ne = (await Mr("action", x, G, [_], A, w))[_.route.id];
    if (G.signal.aborted) {
      Se.get(w) === X && Se.delete(w);
      return;
    }
    if (d.v7_fetcherPersist && _e.has(w)) {
      if (Mn(ne) || et(ne)) {
        Xt(w, en(void 0));
        return;
      }
    } else {
      if (Mn(ne))
        if ((Se.delete(w), W > Le)) {
          Xt(w, en(void 0));
          return;
        } else
          return (
            te.add(w),
            Xt(w, qr(B)),
            jn(G, ne, !1, { fetcherSubmission: B, preventScrollReset: U })
          );
      if (et(ne)) {
        Lt(w, C, ne.error);
        return;
      }
    }
    if (sn(ne)) throw Qe(400, { type: "defer-action" });
    let ye = x.navigation.location || x.location,
      Xn = er(e.history, ye, X.signal),
      Ir = a || i,
      Dt =
        x.navigation.state !== "idle"
          ? _n(Ir, x.navigation.location, s)
          : x.matches;
    q(Dt, "Didn't find any matches after fetcher action");
    let Ct = ++O;
    Q.set(w, Ct);
    let Ii = qr(B, ne.data);
    x.fetchers.set(w, Ii);
    let [Ar, Pn] = nd(
      e.history,
      x,
      Dt,
      B,
      ye,
      !1,
      d.v7_skipActionErrorRevalidation,
      Ee,
      qt,
      Jt,
      _e,
      ue,
      te,
      Ir,
      s,
      [_.route.id, ne],
    );
    Pn.filter((ke) => ke.key !== w).forEach((ke) => {
      let Gn = ke.key,
        $u = x.fetchers.get(Gn),
        Zh = qr(void 0, $u ? $u.data : void 0);
      x.fetchers.set(Gn, Zh),
        Yt(Gn),
        ke.controller && Se.set(Gn, ke.controller);
    }),
      Be({ fetchers: new Map(x.fetchers) });
    let Xo = () => Pn.forEach((ke) => Yt(ke.key));
    X.signal.addEventListener("abort", Xo);
    let { loaderResults: Yo, fetcherResults: ee } = await Du(x, Dt, Ar, Pn, Xn);
    if (X.signal.aborted) return;
    X.signal.removeEventListener("abort", Xo),
      Q.delete(w),
      Se.delete(w),
      Pn.forEach((ke) => Se.delete(ke.key));
    let ve = ml(Yo);
    if (ve) return jn(Xn, ve.result, !1, { preventScrollReset: U });
    if (((ve = ml(ee)), ve))
      return te.add(ve.key), jn(Xn, ve.result, !1, { preventScrollReset: U });
    let { loaderData: Yn, errors: zr } = ad(x, Dt, Yo, void 0, Pn, ee, pt);
    if (x.fetchers.has(w)) {
      let ke = en(ne.data);
      x.fetchers.set(w, ke);
    }
    Iu(Ct),
      x.navigation.state === "loading" && Ct > W
        ? (q(D, "Expected pending action"),
          F && F.abort(),
          Jn(x.navigation.location, {
            matches: Dt,
            loaderData: Yn,
            errors: zr,
            fetchers: new Map(x.fetchers),
          }))
        : (Be({
            errors: zr,
            loaderData: sd(x.loaderData, Yn, Dt, zr),
            fetchers: new Map(x.fetchers),
          }),
          (Ee = !1));
  }
  async function Kh(w, C, j, _, A, H, K, U, B) {
    let z = x.fetchers.get(w);
    Xt(w, qr(B, z ? z.data : void 0), { flushSync: K });
    let V = new AbortController(),
      X = er(e.history, j, V.signal);
    if (H) {
      let ne = await Jo(A, j, X.signal);
      if (ne.type === "aborted") return;
      if (ne.type === "error") {
        Lt(w, C, ne.error, { flushSync: K });
        return;
      } else if (ne.matches) (A = ne.matches), (_ = no(A, j));
      else {
        Lt(w, C, Qe(404, { pathname: j }), { flushSync: K });
        return;
      }
    }
    Se.set(w, V);
    let G = O,
      ae = (await Mr("loader", x, X, [_], A, w))[_.route.id];
    if (
      (sn(ae) && (ae = (await vu(ae, X.signal, !0)) || ae),
      Se.get(w) === V && Se.delete(w),
      !X.signal.aborted)
    ) {
      if (_e.has(w)) {
        Xt(w, en(void 0));
        return;
      }
      if (Mn(ae))
        if (W > G) {
          Xt(w, en(void 0));
          return;
        } else {
          te.add(w), await jn(X, ae, !1, { preventScrollReset: U });
          return;
        }
      if (et(ae)) {
        Lt(w, C, ae.error);
        return;
      }
      q(!sn(ae), "Unhandled fetcher deferred data"), Xt(w, en(ae.data));
    }
  }
  async function jn(w, C, j, _) {
    let {
      submission: A,
      fetcherSubmission: H,
      preventScrollReset: K,
      replace: U,
    } = _ === void 0 ? {} : _;
    C.response.headers.has("X-Remix-Revalidate") && (Ee = !0);
    let B = C.response.headers.get("Location");
    q(B, "Expected a Location header on the redirect Response"),
      (B = ld(B, new URL(w.url), s));
    let z = Lo(x.location, B, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (C.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (yu.test(B)) {
        const ye = e.history.createURL(B);
        ne = ye.origin !== t.location.origin || Vt(ye.pathname, s) == null;
      }
      if (ne) {
        U ? t.location.replace(B) : t.location.assign(B);
        return;
      }
    }
    F = null;
    let V =
        U === !0 || C.response.headers.has("X-Remix-Replace")
          ? Ce.Replace
          : Ce.Push,
      { formMethod: X, formAction: G, formEncType: Le } = x.navigation;
    !A && !H && X && G && Le && (A = fd(x.navigation));
    let ae = A || H;
    if (nv.has(C.response.status) && ae && yt(ae.formMethod))
      await Rn(V, z, {
        submission: fe({}, ae, { formAction: B }),
        preventScrollReset: K || N,
        enableViewTransition: j ? M : void 0,
      });
    else {
      let ne = da(z, A);
      await Rn(V, z, {
        overrideNavigation: ne,
        fetcherSubmission: H,
        preventScrollReset: K || N,
        enableViewTransition: j ? M : void 0,
      });
    }
  }
  async function Mr(w, C, j, _, A, H) {
    let K,
      U = {};
    try {
      K = await cv(u, w, C, j, _, A, H, l, o);
    } catch (B) {
      return (
        _.forEach((z) => {
          U[z.route.id] = { type: le.error, error: B };
        }),
        U
      );
    }
    for (let [B, z] of Object.entries(K))
      if (gv(z)) {
        let V = z.result;
        U[B] = {
          type: le.redirect,
          response: pv(V, j, B, A, s, d.v7_relativeSplatPath),
        };
      } else U[B] = await fv(z);
    return U;
  }
  async function Du(w, C, j, _, A) {
    let H = w.matches,
      K = Mr("loader", w, A, j, C, null),
      U = Promise.all(
        _.map(async (V) => {
          if (V.matches && V.match && V.controller) {
            let G = (
              await Mr(
                "loader",
                w,
                er(e.history, V.path, V.controller.signal),
                [V.match],
                V.matches,
                V.key,
              )
            )[V.match.route.id];
            return { [V.key]: G };
          } else
            return Promise.resolve({
              [V.key]: { type: le.error, error: Qe(404, { pathname: V.path }) },
            });
        }),
      ),
      B = await K,
      z = (await U).reduce((V, X) => Object.assign(V, X), {});
    return (
      await Promise.all([wv(C, B, A.signal, H, w.loaderData), Sv(C, z, _)]),
      { loaderResults: B, fetcherResults: z }
    );
  }
  function Oi() {
    (Ee = !0),
      qt.push(...Mi()),
      ue.forEach((w, C) => {
        Se.has(C) && Jt.add(C), Yt(C);
      });
  }
  function Xt(w, C, j) {
    j === void 0 && (j = {}),
      x.fetchers.set(w, C),
      Be(
        { fetchers: new Map(x.fetchers) },
        { flushSync: (j && j.flushSync) === !0 },
      );
  }
  function Lt(w, C, j, _) {
    _ === void 0 && (_ = {});
    let A = Ln(x.matches, C);
    Ko(w),
      Be(
        { errors: { [A.route.id]: j }, fetchers: new Map(x.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function Ou(w) {
    return (
      d.v7_fetcherPersist &&
        (kt.set(w, (kt.get(w) || 0) + 1), _e.has(w) && _e.delete(w)),
      x.fetchers.get(w) || rv
    );
  }
  function Ko(w) {
    let C = x.fetchers.get(w);
    Se.has(w) && !(C && C.state === "loading" && Q.has(w)) && Yt(w),
      ue.delete(w),
      Q.delete(w),
      te.delete(w),
      _e.delete(w),
      Jt.delete(w),
      x.fetchers.delete(w);
  }
  function bh(w) {
    if (d.v7_fetcherPersist) {
      let C = (kt.get(w) || 0) - 1;
      C <= 0 ? (kt.delete(w), _e.add(w)) : kt.set(w, C);
    } else Ko(w);
    Be({ fetchers: new Map(x.fetchers) });
  }
  function Yt(w) {
    let C = Se.get(w);
    C && (C.abort(), Se.delete(w));
  }
  function Fu(w) {
    for (let C of w) {
      let j = Ou(C),
        _ = en(j.data);
      x.fetchers.set(C, _);
    }
  }
  function Mu() {
    let w = [],
      C = !1;
    for (let j of te) {
      let _ = x.fetchers.get(j);
      q(_, "Expected fetcher: " + j),
        _.state === "loading" && (te.delete(j), w.push(j), (C = !0));
    }
    return Fu(w), C;
  }
  function Iu(w) {
    let C = [];
    for (let [j, _] of Q)
      if (_ < w) {
        let A = x.fetchers.get(j);
        q(A, "Expected fetcher: " + j),
          A.state === "loading" && (Yt(j), Q.delete(j), C.push(j));
      }
    return Fu(C), C.length > 0;
  }
  function qh(w, C) {
    let j = x.blockers.get(w) || br;
    return Ue.get(w) !== C && Ue.set(w, C), j;
  }
  function Au(w) {
    x.blockers.delete(w), Ue.delete(w);
  }
  function bo(w, C) {
    let j = x.blockers.get(w) || br;
    q(
      (j.state === "unblocked" && C.state === "blocked") ||
        (j.state === "blocked" && C.state === "blocked") ||
        (j.state === "blocked" && C.state === "proceeding") ||
        (j.state === "blocked" && C.state === "unblocked") ||
        (j.state === "proceeding" && C.state === "unblocked"),
      "Invalid blocker state transition: " + j.state + " -> " + C.state,
    );
    let _ = new Map(x.blockers);
    _.set(w, C), Be({ blockers: _ });
  }
  function zu(w) {
    let { currentLocation: C, nextLocation: j, historyAction: _ } = w;
    if (Ue.size === 0) return;
    Ue.size > 1 && Pr(!1, "A router only supports one blocker at a time");
    let A = Array.from(Ue.entries()),
      [H, K] = A[A.length - 1],
      U = x.blockers.get(H);
    if (
      !(U && U.state === "proceeding") &&
      K({ currentLocation: C, nextLocation: j, historyAction: _ })
    )
      return H;
  }
  function Fi(w) {
    let C = Qe(404, { pathname: w }),
      j = a || i,
      { matches: _, route: A } = cd(j);
    return Mi(), { notFoundMatches: _, route: A, error: C };
  }
  function Mi(w) {
    let C = [];
    return (
      pt.forEach((j, _) => {
        (!w || w(_)) && (j.cancel(), C.push(_), pt.delete(_));
      }),
      C
    );
  }
  function Jh(w, C, j) {
    if (((v = w), (E = C), (S = j || null), !m && x.navigation === ca)) {
      m = !0;
      let _ = Bu(x.location, x.matches);
      _ != null && Be({ restoreScrollPosition: _ });
    }
    return () => {
      (v = null), (E = null), (S = null);
    };
  }
  function Uu(w, C) {
    return (
      (S &&
        S(
          w,
          C.map((_) => Fy(_, x.loaderData)),
        )) ||
      w.key
    );
  }
  function Xh(w, C) {
    if (v && E) {
      let j = Uu(w, C);
      v[j] = E();
    }
  }
  function Bu(w, C) {
    if (v) {
      let j = Uu(w, C),
        _ = v[j];
      if (typeof _ == "number") return _;
    }
    return null;
  }
  function qo(w, C, j) {
    if (c)
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: Nl(C, j, s, !0) };
      } else return { active: !0, matches: Nl(C, j, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Jo(w, C, j) {
    if (!c) return { type: "success", matches: w };
    let _ = w;
    for (;;) {
      let A = a == null,
        H = a || i,
        K = l;
      try {
        await c({
          path: C,
          matches: _,
          patch: (z, V) => {
            j.aborted || od(z, V, H, K, o);
          },
        });
      } catch (z) {
        return { type: "error", error: z, partialMatches: _ };
      } finally {
        A && !j.aborted && (i = [...i]);
      }
      if (j.aborted) return { type: "aborted" };
      let U = _n(H, C, s);
      if (U) return { type: "success", matches: U };
      let B = Nl(H, C, s, !0);
      if (
        !B ||
        (_.length === B.length &&
          _.every((z, V) => z.route.id === B[V].route.id))
      )
        return { type: "success", matches: null };
      _ = B;
    }
  }
  function Yh(w) {
    (l = {}), (a = ti(w, o, void 0, l));
  }
  function Gh(w, C) {
    let j = a == null;
    od(w, C, a || i, l, o), j && ((i = [...i]), Be({}));
  }
  return (
    (T = {
      get basename() {
        return s;
      },
      get future() {
        return d;
      },
      get state() {
        return x;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Ah,
      subscribe: Uh,
      enableScrollRestoration: Jh,
      navigate: _u,
      fetch: Wh,
      revalidate: Bh,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: Ou,
      deleteFetcher: bh,
      dispose: zh,
      getBlocker: qh,
      deleteBlocker: Au,
      patchRoutes: Gh,
      _internalFetchControllers: Se,
      _internalActiveDeferreds: pt,
      _internalSetRoutes: Yh,
    }),
    T
  );
}
function iv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function us(e, t, n, r, o, l, i, a) {
  let s, u;
  if (i) {
    s = [];
    for (let d of t)
      if ((s.push(d), d.route.id === i)) {
        u = d;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = gu(o || ".", mu(s, l), Vt(e.pathname, n) || e.pathname, a === "path");
  if (
    (o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") && u)
  ) {
    let d = wu(c.search);
    if (u.route.index && !d)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && d) {
      let h = new URLSearchParams(c.search),
        g = h.getAll("index");
      h.delete("index"),
        g.filter((S) => S).forEach((S) => h.append("index", S));
      let v = h.toString();
      c.search = v ? "?" + v : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : zt([n, c.pathname])),
    Qn(c)
  );
}
function ed(e, t, n, r) {
  if (!r || !iv(r)) return { path: n };
  if (r.formMethod && !vv(r.formMethod))
    return { path: n, error: Qe(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Qe(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    i = e ? l.toUpperCase() : l.toLowerCase(),
    a = nh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!yt(i)) return o();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((g, v) => {
                let [S, E] = v;
                return (
                  "" +
                  g +
                  S +
                  "=" +
                  E +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!yt(i)) return o();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  q(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let s, u;
  if (r.formData) (s = ds(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = ds(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = id(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = id(s));
    } catch {
      return o();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (yt(c.formMethod)) return { path: n, submission: c };
  let d = kn(n);
  return (
    t && d.search && wu(d.search) && s.append("index", ""),
    (d.search = "?" + s),
    { path: Qn(d), submission: c }
  );
}
function td(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((o) => o.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function nd(e, t, n, r, o, l, i, a, s, u, c, d, h, g, v, S) {
  let E = S ? (et(S[1]) ? S[1].error : S[1].data) : void 0,
    m = e.createURL(t.location),
    p = e.createURL(o),
    y = n;
  l && t.errors
    ? (y = td(n, Object.keys(t.errors)[0], !0))
    : S && et(S[1]) && (y = td(n, S[0]));
  let R = S ? S[1].statusCode : void 0,
    T = i && R && R >= 400,
    x = y.filter((N, F) => {
      let { route: M } = N;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (l) return cs(M, t.loaderData, t.errors);
      if (
        av(t.loaderData, t.matches[F], N) ||
        s.some((ie) => ie === N.route.id)
      )
        return !0;
      let $ = t.matches[F],
        re = N;
      return rd(
        N,
        fe(
          {
            currentUrl: m,
            currentParams: $.params,
            nextUrl: p,
            nextParams: re.params,
          },
          r,
          {
            actionResult: E,
            actionStatus: R,
            defaultShouldRevalidate: T
              ? !1
              : a ||
                m.pathname + m.search === p.pathname + p.search ||
                m.search !== p.search ||
                eh($, re),
          },
        ),
      );
    }),
    D = [];
  return (
    d.forEach((N, F) => {
      if (l || !n.some((Ee) => Ee.route.id === N.routeId) || c.has(F)) return;
      let M = _n(g, N.path, v);
      if (!M) {
        D.push({
          key: F,
          routeId: N.routeId,
          path: N.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let $ = t.fetchers.get(F),
        re = no(M, N.path),
        ie = !1;
      h.has(F)
        ? (ie = !1)
        : u.has(F)
          ? (u.delete(F), (ie = !0))
          : $ && $.state !== "idle" && $.data === void 0
            ? (ie = a)
            : (ie = rd(
                re,
                fe(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: p,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: E,
                    actionStatus: R,
                    defaultShouldRevalidate: T ? !1 : a,
                  },
                ),
              )),
        ie &&
          D.push({
            key: F,
            routeId: N.routeId,
            path: N.path,
            matches: M,
            match: re,
            controller: new AbortController(),
          });
    }),
    [x, D]
  );
}
function cs(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    o = n != null && n[e.id] !== void 0;
  return !r && o
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !r && !o;
}
function av(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function eh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function rd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function od(e, t, n, r, o) {
  var l;
  let i;
  if (e) {
    let u = r[e];
    q(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (i = u.children);
  } else i = n;
  let a = t.filter((u) => !i.some((c) => th(u, c))),
    s = ti(
      a,
      o,
      [e || "_", "patch", String(((l = i) == null ? void 0 : l.length) || "0")],
      r,
    );
  i.push(...s);
}
function th(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var o;
            return (o = t.children) == null ? void 0 : o.some((l) => th(n, l));
          })
      : !1;
}
async function sv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  q(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
    let s = o[i] !== void 0 && i !== "hasErrorBoundary";
    Pr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !s && !Dy.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, fe({}, t(o), { lazy: void 0 }));
}
async function uv(e) {
  let { matches: t } = e,
    n = t.filter((o) => o.shouldLoad);
  return (await Promise.all(n.map((o) => o.resolve()))).reduce(
    (o, l, i) => Object.assign(o, { [n[i].route.id]: l }),
    {},
  );
}
async function cv(e, t, n, r, o, l, i, a, s, u) {
  let c = l.map((g) => (g.route.lazy ? sv(g.route, s, a) : void 0)),
    d = l.map((g, v) => {
      let S = c[v],
        E = o.some((p) => p.route.id === g.route.id);
      return fe({}, g, {
        shouldLoad: E,
        resolve: async (p) => (
          p &&
            r.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (E = !0),
          E
            ? dv(t, r, g, S, p, u)
            : Promise.resolve({ type: le.data, result: void 0 })
        ),
      });
    }),
    h = await e({
      matches: d,
      request: r,
      params: l[0].params,
      fetcherKey: i,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return h;
}
async function dv(e, t, n, r, o, l) {
  let i,
    a,
    s = (u) => {
      let c,
        d = new Promise((v, S) => (c = S));
      (a = () => c()), t.signal.addEventListener("abort", a);
      let h = (v) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : u(
                { request: t, params: n.params, context: l },
                ...(v !== void 0 ? [v] : []),
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (o ? o((S) => h(S)) : h()) };
          } catch (v) {
            return { type: "error", result: v };
          }
        })();
      return Promise.race([g, d]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [d] = await Promise.all([
            s(u).catch((h) => {
              c = h;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        i = d;
      } else if ((await r, (u = n.route[e]), u)) i = await s(u);
      else if (e === "action") {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw Qe(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: le.data, result: void 0 };
    else if (u) i = await s(u);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw Qe(404, { pathname: d });
    }
    q(
      i.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (u) {
    return { type: le.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return i;
}
async function fv(e) {
  let { result: t, type: n } = e;
  if (rh(t)) {
    let u;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (c) {
      return { type: le.error, error: c };
    }
    return n === le.error
      ? {
          type: le.error,
          error: new ri(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: le.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === le.error) {
    if (dd(t)) {
      var r;
      if (t.data instanceof Error) {
        var o;
        return {
          type: le.error,
          error: t.data,
          statusCode: (o = t.init) == null ? void 0 : o.status,
        };
      }
      t = new ri(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: le.error, error: t, statusCode: Ci(t) ? t.status : void 0 };
  }
  if (yv(t)) {
    var l, i;
    return {
      type: le.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (dd(t)) {
    var a, s;
    return {
      type: le.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (s = t.init) != null && s.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: le.data, data: t };
}
function pv(e, t, n, r, o, l) {
  let i = e.headers.get("Location");
  if (
    (q(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !yu.test(i))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (i = us(new URL(t.url), a, o, !0, i, l)), e.headers.set("Location", i);
  }
  return e;
}
function ld(e, t, n) {
  if (yu.test(e)) {
    let r = e,
      o = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      l = Vt(o.pathname, n) != null;
    if (o.origin === t.origin && l) return o.pathname + o.search + o.hash;
  }
  return e;
}
function er(e, t, n, r) {
  let o = e.createURL(nh(t)).toString(),
    l = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (l.method = i.toUpperCase()),
      a === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": a })),
          (l.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (l.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (l.body = ds(r.formData))
            : (l.body = r.formData);
  }
  return new Request(o, l);
}
function ds(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function id(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function hv(e, t, n, r, o) {
  let l = {},
    i = null,
    a,
    s = !1,
    u = {},
    c = n && et(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return;
      let h = d.route.id,
        g = t[h];
      if (
        (q(!Mn(g), "Cannot handle redirect results in processLoaderData"),
        et(g))
      ) {
        let v = g.error;
        c !== void 0 && ((v = c), (c = void 0)), (i = i || {});
        {
          let S = Ln(e, h);
          i[S.route.id] == null && (i[S.route.id] = v);
        }
        (l[h] = void 0),
          s || ((s = !0), (a = Ci(g.error) ? g.error.status : 500)),
          g.headers && (u[h] = g.headers);
      } else
        sn(g)
          ? (r.set(h, g.deferredData),
            (l[h] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !s &&
              (a = g.statusCode),
            g.headers && (u[h] = g.headers))
          : ((l[h] = g.data),
            g.statusCode && g.statusCode !== 200 && !s && (a = g.statusCode),
            g.headers && (u[h] = g.headers));
    }),
    c !== void 0 && n && ((i = { [n[0]]: c }), (l[n[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: a || 200, loaderHeaders: u }
  );
}
function ad(e, t, n, r, o, l, i) {
  let { loaderData: a, errors: s } = hv(t, n, r, i);
  return (
    o.forEach((u) => {
      let { key: c, match: d, controller: h } = u,
        g = l[c];
      if (
        (q(g, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
      )
        if (et(g)) {
          let v = Ln(e.matches, d == null ? void 0 : d.route.id);
          (s && s[v.route.id]) || (s = fe({}, s, { [v.route.id]: g.error })),
            e.fetchers.delete(c);
        } else if (Mn(g)) q(!1, "Unhandled fetcher revalidation redirect");
        else if (sn(g)) q(!1, "Unhandled fetcher deferred data");
        else {
          let v = en(g.data);
          e.fetchers.set(c, v);
        }
    }),
    { loaderData: a, errors: s }
  );
}
function sd(e, t, n, r) {
  let o = fe({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (o[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function ud(e) {
  return e
    ? et(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ln(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function cd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Qe(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: o,
      type: l,
      message: i,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
            ? (s = "defer() is not supported in actions")
            : l === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            o && n && r
              ? (s =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ri(e || 500, a, new Error(s), !0)
  );
}
function ml(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, o] = t[n];
    if (Mn(o)) return { key: r, result: o };
  }
}
function nh(e) {
  let t = typeof e == "string" ? kn(e) : e;
  return Qn(fe({}, t, { hash: "" }));
}
function mv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function gv(e) {
  return rh(e.result) && tv.has(e.result.status);
}
function sn(e) {
  return e.type === le.deferred;
}
function et(e) {
  return e.type === le.error;
}
function Mn(e) {
  return (e && e.type) === le.redirect;
}
function dd(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function yv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function rh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function vv(e) {
  return ev.has(e.toLowerCase());
}
function yt(e) {
  return Gy.has(e.toLowerCase());
}
async function wv(e, t, n, r, o) {
  let l = Object.entries(t);
  for (let i = 0; i < l.length; i++) {
    let [a, s] = l[i],
      u = e.find((h) => (h == null ? void 0 : h.route.id) === a);
    if (!u) continue;
    let c = r.find((h) => h.route.id === u.route.id),
      d = c != null && !eh(c, u) && (o && o[u.route.id]) !== void 0;
    sn(s) &&
      d &&
      (await vu(s, n, !1).then((h) => {
        h && (t[a] = h);
      }));
  }
}
async function Sv(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: o, routeId: l, controller: i } = n[r],
      a = t[o];
    e.find((u) => (u == null ? void 0 : u.route.id) === l) &&
      sn(a) &&
      (q(
        i,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await vu(a, i.signal, !0).then((u) => {
        u && (t[o] = u);
      }));
  }
}
async function vu(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: le.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: le.error, error: o };
      }
    return { type: le.data, data: e.deferredData.data };
  }
}
function wu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function no(e, t) {
  let n = typeof t == "string" ? kn(t).search : t.search;
  if (e[e.length - 1].route.index && wu(n || "")) return e[e.length - 1];
  let r = Yp(e);
  return r[r.length - 1];
}
function fd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function da(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function qr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Ev(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function en(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function kv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Zp);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {}
}
function Cv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Zp, JSON.stringify(n));
    } catch (r) {
      Pr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oi() {
  return (
    (oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oi.apply(this, arguments)
  );
}
const zo = k.createContext(null),
  Su = k.createContext(null),
  Cn = k.createContext(null),
  xu = k.createContext(null),
  Kt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  oh = k.createContext(null);
function Rv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Uo() || q(!1);
  let { basename: r, navigator: o } = k.useContext(Cn),
    { hash: l, pathname: i, search: a } = ji(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : zt([r, i])),
    o.createHref({ pathname: s, search: a, hash: l })
  );
}
function Uo() {
  return k.useContext(xu) != null;
}
function Bo() {
  return Uo() || q(!1), k.useContext(xu).location;
}
function lh(e) {
  k.useContext(Cn).static || k.useLayoutEffect(e);
}
function bt() {
  let { isDataRoute: e } = k.useContext(Kt);
  return e ? zv() : jv();
}
function jv() {
  Uo() || q(!1);
  let e = k.useContext(zo),
    { basename: t, future: n, navigator: r } = k.useContext(Cn),
    { matches: o } = k.useContext(Kt),
    { pathname: l } = Bo(),
    i = JSON.stringify(mu(o, n.v7_relativeSplatPath)),
    a = k.useRef(!1);
  return (
    lh(() => {
      a.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = gu(u, JSON.parse(i), l, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : zt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, i, l, e],
    )
  );
}
const ih = k.createContext(null);
function Ri() {
  return k.useContext(ih);
}
function Pv(e) {
  let t = k.useContext(Kt).outlet;
  return t && k.createElement(ih.Provider, { value: e }, t);
}
function Eu() {
  let { matches: e } = k.useContext(Kt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ji(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(Cn),
    { matches: o } = k.useContext(Kt),
    { pathname: l } = Bo(),
    i = JSON.stringify(mu(o, r.v7_relativeSplatPath));
  return k.useMemo(() => gu(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function Nv(e, t, n, r) {
  Uo() || q(!1);
  let { navigator: o } = k.useContext(Cn),
    { matches: l } = k.useContext(Kt),
    i = l[l.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Bo(),
    c;
  c = u;
  let d = c.pathname || "/",
    h = d;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let g = _n(e, { pathname: h });
  return Ov(
    g &&
      g.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: zt([
            s,
            o.encodeLocation
              ? o.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? s
              : zt([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    l,
    n,
    r,
  );
}
function Tv() {
  let e = Av(),
    t = Ci(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const _v = k.createElement(Tv, null);
class Lv extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Kt.Provider,
          { value: this.props.routeContext },
          k.createElement(oh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Dv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(zo);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Kt.Provider, { value: t }, r)
  );
}
function Ov(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = i.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    c >= 0 || q(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let d = i[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: h, errors: g } = n,
          v =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (s = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, d, h) => {
    let g,
      v = !1,
      S = null,
      E = null;
    n &&
      ((g = a && d.route.id ? a[d.route.id] : void 0),
      (S = d.route.errorElement || _v),
      s &&
        (u < 0 && h === 0
          ? (Uv("route-fallback"), (v = !0), (E = null))
          : u === h &&
            ((v = !0), (E = d.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, h + 1)),
      p = () => {
        let y;
        return (
          g
            ? (y = S)
            : v
              ? (y = E)
              : d.route.Component
                ? (y = k.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = c),
          k.createElement(Dv, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? k.createElement(Lv, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var ah = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ah || {}),
  li = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(li || {});
function Fv(e) {
  let t = k.useContext(zo);
  return t || q(!1), t;
}
function Mv(e) {
  let t = k.useContext(Su);
  return t || q(!1), t;
}
function Iv(e) {
  let t = k.useContext(Kt);
  return t || q(!1), t;
}
function sh(e) {
  let t = Iv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function Av() {
  var e;
  let t = k.useContext(oh),
    n = Mv(li.UseRouteError),
    r = sh(li.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function zv() {
  let { router: e } = Fv(ah.UseNavigateStable),
    t = sh(li.UseNavigateStable),
    n = k.useRef(!1);
  return (
    lh(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, oi({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
const pd = {};
function Uv(e, t, n) {
  pd[e] || (pd[e] = !0);
}
const hd = {};
function Bv(e, t) {
  hd[t] || ((hd[t] = !0), console.warn(t));
}
const tr = (e, t, n) =>
  Bv(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + "."),
  );
function $v(e, t) {
  (e != null && e.v7_startTransition) ||
    tr(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      (!t || !t.v7_relativeSplatPath) &&
      tr(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
      ),
    t &&
      (t.v7_fetcherPersist ||
        tr(
          "v7_fetcherPersist",
          "The persistence behavior of fetchers is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist",
        ),
      t.v7_normalizeFormMethod ||
        tr(
          "v7_normalizeFormMethod",
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod",
        ),
      t.v7_partialHydration ||
        tr(
          "v7_partialHydration",
          "`RouterProvider` hydration behavior is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_partialhydration",
        ),
      t.v7_skipActionErrorRevalidation ||
        tr(
          "v7_skipActionErrorRevalidation",
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation",
        ));
}
function Hv(e) {
  return Pv(e.context);
}
function Vv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ce.Pop,
    navigator: l,
    static: i = !1,
    future: a,
  } = e;
  Uo() && q(!1);
  let s = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: s,
        navigator: l,
        static: i,
        future: oi({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, l, i],
    );
  typeof r == "string" && (r = kn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: h = "",
      state: g = null,
      key: v = "default",
    } = r,
    S = k.useMemo(() => {
      let E = Vt(c, s);
      return E == null
        ? null
        : {
            location: { pathname: E, search: d, hash: h, state: g, key: v },
            navigationType: o,
          };
    }, [s, c, d, h, g, v, o]);
  return S == null
    ? null
    : k.createElement(
        Cn.Provider,
        { value: u },
        k.createElement(xu.Provider, { children: n, value: S }),
      );
}
new Promise(() => {});
function Wv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: k.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nr.apply(this, arguments)
  );
}
function uh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Qv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Kv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Qv(e);
}
const bv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  qv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Jv = "6";
try {
  window.__reactRouterVersion = Jv;
} catch {}
function Xv(e, t) {
  return lv({
    basename: t == null ? void 0 : t.basename,
    future: Nr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Ty({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Yv(),
    routes: e,
    mapRouteProperties: Wv,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Yv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Nr({}, t, { errors: Gv(t.errors) })), t;
}
function Gv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new ri(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let i = new l(o.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
const ch = k.createContext({ isTransitioning: !1 }),
  Zv = k.createContext(new Map()),
  e0 = "startTransition",
  md = gm[e0],
  t0 = "flushSync",
  gd = Ny[t0];
function n0(e) {
  md ? md(e) : e();
}
function Jr(e) {
  gd ? gd(e) : e();
}
class r0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function o0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = k.useState(n.state),
    [i, a] = k.useState(),
    [s, u] = k.useState({ isTransitioning: !1 }),
    [c, d] = k.useState(),
    [h, g] = k.useState(),
    [v, S] = k.useState(),
    E = k.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = k.useCallback(
      (N) => {
        m ? n0(N) : N();
      },
      [m],
    ),
    y = k.useCallback(
      (N, F) => {
        let { deletedFetchers: M, flushSync: $, viewTransitionOpts: re } = F;
        M.forEach((Ee) => E.current.delete(Ee)),
          N.fetchers.forEach((Ee, qt) => {
            Ee.data !== void 0 && E.current.set(qt, Ee.data);
          });
        let ie =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!re || ie) {
          $ ? Jr(() => l(N)) : p(() => l(N));
          return;
        }
        if ($) {
          Jr(() => {
            h && (c && c.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: re.currentLocation,
                nextLocation: re.nextLocation,
              });
          });
          let Ee = n.window.document.startViewTransition(() => {
            Jr(() => l(N));
          });
          Ee.finished.finally(() => {
            Jr(() => {
              d(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Jr(() => g(Ee));
          return;
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            S({
              state: N,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }))
          : (a(N),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }));
      },
      [n.window, h, c, E, p],
    );
  k.useLayoutEffect(() => n.subscribe(y), [n, y]),
    k.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new r0());
    }, [s]),
    k.useEffect(() => {
      if (c && i && n.window) {
        let N = i,
          F = c.promise,
          M = n.window.document.startViewTransition(async () => {
            p(() => l(N)), await F;
          });
        M.finished.finally(() => {
          d(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(M);
      }
    }, [p, i, c, n.window]),
    k.useEffect(() => {
      c && i && o.location.key === i.location.key && c.resolve();
    }, [c, h, o.location, i]),
    k.useEffect(() => {
      !s.isTransitioning &&
        v &&
        (a(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        S(void 0));
    }, [s.isTransitioning, v]),
    k.useEffect(() => {}, []);
  let R = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (N) => n.navigate(N),
        push: (N, F, M) =>
          n.navigate(N, {
            state: F,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (N, F, M) =>
          n.navigate(N, {
            replace: !0,
            state: F,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n],
    ),
    T = n.basename || "/",
    x = k.useMemo(
      () => ({ router: n, navigator: R, static: !1, basename: T }),
      [n, R, T],
    ),
    D = k.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return (
    k.useEffect(() => $v(r, n.future), [r, n.future]),
    k.createElement(
      k.Fragment,
      null,
      k.createElement(
        zo.Provider,
        { value: x },
        k.createElement(
          Su.Provider,
          { value: o },
          k.createElement(
            Zv.Provider,
            { value: E.current },
            k.createElement(
              ch.Provider,
              { value: s },
              k.createElement(
                Vv,
                {
                  basename: T,
                  location: o.location,
                  navigationType: o.historyAction,
                  navigator: R,
                  future: D,
                },
                o.initialized || n.future.v7_partialHydration
                  ? k.createElement(l0, {
                      routes: n.routes,
                      future: n.future,
                      state: o,
                    })
                  : t,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const l0 = k.memo(i0);
function i0(e) {
  let { routes: t, future: n, state: r } = e;
  return Nv(t, void 0, r, n);
}
const a0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  s0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dh = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      h = uh(t, bv),
      { basename: g } = k.useContext(Cn),
      v,
      S = !1;
    if (typeof u == "string" && s0.test(u) && ((v = u), a0))
      try {
        let y = new URL(window.location.href),
          R = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          T = Vt(R.pathname, g);
        R.origin === y.origin && T != null
          ? (u = T + R.search + R.hash)
          : (S = !0);
      } catch {}
    let E = Rv(u, { relative: o }),
      m = c0(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: o,
        viewTransition: d,
      });
    function p(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return k.createElement(
      "a",
      Nr({}, h, { href: v || E, onClick: S || l ? r : p, ref: n, target: s }),
    );
  }),
  fa = k.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: l = "",
        end: i = !1,
        style: a,
        to: s,
        viewTransition: u,
        children: c,
      } = t,
      d = uh(t, qv),
      h = ji(s, { relative: d.relative }),
      g = Bo(),
      v = k.useContext(Su),
      { navigator: S, basename: E } = k.useContext(Cn),
      m = v != null && d0(h) && u === !0,
      p = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      y = g.pathname,
      R =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    o ||
      ((y = y.toLowerCase()),
      (R = R ? R.toLowerCase() : null),
      (p = p.toLowerCase())),
      R && E && (R = Vt(R, E) || R);
    const T = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let x = y === p || (!i && y.startsWith(p) && y.charAt(T) === "/"),
      D =
        R != null &&
        (R === p || (!i && R.startsWith(p) && R.charAt(p.length) === "/")),
      N = { isActive: x, isPending: D, isTransitioning: m },
      F = x ? r : void 0,
      M;
    typeof l == "function"
      ? (M = l(N))
      : (M = [
          l,
          x ? "active" : null,
          D ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let $ = typeof a == "function" ? a(N) : a;
    return k.createElement(
      dh,
      Nr({}, d, {
        "aria-current": F,
        className: M,
        ref: n,
        style: $,
        to: s,
        viewTransition: u,
      }),
      typeof c == "function" ? c(N) : c,
    );
  });
var fs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fs || (fs = {}));
var yd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(yd || (yd = {}));
function u0(e) {
  let t = k.useContext(zo);
  return t || q(!1), t;
}
function c0(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    s = bt(),
    u = Bo(),
    c = ji(e, { relative: i });
  return k.useCallback(
    (d) => {
      if (Kv(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Qn(u) === Qn(c);
        s(e, {
          replace: h,
          state: o,
          preventScrollReset: l,
          relative: i,
          viewTransition: a,
        });
      }
    },
    [u, s, c, r, o, n, e, l, i, a],
  );
}
function d0(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(ch);
  n == null && q(!1);
  let { basename: r } = u0(fs.useViewTransitionState),
    o = ji(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = Vt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Vt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ni(o.pathname, i) != null || ni(o.pathname, l) != null;
}
const f0 = ({ rooms: e }) => {
  const t = bt();
  return e && e.length < 1
    ? f.jsx("p", { children: "No rooms found." })
    : f.jsx("ul", {
        className: "roomsList",
        "data-testid": "roomsList",
        children: e.map((n) =>
          f.jsx(
            "div",
            {
              onClick: () => t(`/rooms/${n.id}`),
              className: "roomsListItem",
              children: f.jsx("li", {
                children: f.jsxs("div", {
                  className: "roomsListItemContent",
                  children: [
                    f.jsxs("p", {
                      id: "roomId",
                      children: ["Room ID: ", n.id],
                    }),
                    f.jsxs("div", {
                      className: "roomsListItemDetails",
                      children: [
                        f.jsxs("div", {
                          children: [
                            f.jsxs("p", {
                              children: ["Location: ", n.location],
                            }),
                            f.jsxs("p", {
                              children: ["Price / Night: ", n.price, "€"],
                            }),
                          ],
                        }),
                        f.jsxs("p", { children: ["Category: ", n.category] }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            n.id,
          ),
        ),
      });
};
function fh(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: p0 } = Object.prototype,
  { getPrototypeOf: ku } = Object,
  Pi = ((e) => (t) => {
    const n = p0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => Pi(t) === e),
  Ni = (e) => (t) => typeof t === e,
  { isArray: Dr } = Array,
  Do = Ni("undefined");
function h0(e) {
  return (
    e !== null &&
    !Do(e) &&
    e.constructor !== null &&
    !Do(e.constructor) &&
    rt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ph = Et("ArrayBuffer");
function m0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ph(e.buffer)),
    t
  );
}
const g0 = Ni("string"),
  rt = Ni("function"),
  hh = Ni("number"),
  Ti = (e) => e !== null && typeof e == "object",
  y0 = (e) => e === !0 || e === !1,
  Tl = (e) => {
    if (Pi(e) !== "object") return !1;
    const t = ku(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  v0 = Et("Date"),
  w0 = Et("File"),
  S0 = Et("Blob"),
  x0 = Et("FileList"),
  E0 = (e) => Ti(e) && rt(e.pipe),
  k0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (rt(e.append) &&
          ((t = Pi(e)) === "formdata" ||
            (t === "object" &&
              rt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  C0 = Et("URLSearchParams"),
  [R0, j0, P0, N0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Et,
  ),
  T0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $o(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Dr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let a;
    for (r = 0; r < i; r++) (a = l[r]), t.call(null, e[a], a, e);
  }
}
function mh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const In =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  gh = (e) => !Do(e) && e !== In;
function ps() {
  const { caseless: e } = (gh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && mh(t, o)) || o;
      Tl(t[l]) && Tl(r)
        ? (t[l] = ps(t[l], r))
        : Tl(r)
          ? (t[l] = ps({}, r))
          : Dr(r)
            ? (t[l] = r.slice())
            : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && $o(arguments[r], n);
  return t;
}
const _0 = (e, t, n, { allOwnKeys: r } = {}) => (
    $o(
      t,
      (o, l) => {
        n && rt(o) ? (e[l] = fh(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  L0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  D0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  O0 = (e, t, n, r) => {
    let o, l, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && ku(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  F0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  M0 = (e) => {
    if (!e) return null;
    if (Dr(e)) return e;
    let t = e.length;
    if (!hh(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  I0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ku(Uint8Array)),
  A0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  z0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  U0 = Et("HTMLFormElement"),
  B0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  vd = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  $0 = Et("RegExp"),
  yh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    $o(n, (o, l) => {
      let i;
      (i = t(o, l, e)) !== !1 && (r[l] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  H0 = (e) => {
    yh(e, (t, n) => {
      if (rt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (rt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  V0 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return Dr(e) ? r(e) : r(String(e).split(t)), n;
  },
  W0 = () => {},
  Q0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  pa = "abcdefghijklmnopqrstuvwxyz",
  wd = "0123456789",
  vh = { DIGIT: wd, ALPHA: pa, ALPHA_DIGIT: pa + pa.toUpperCase() + wd },
  K0 = (e = 16, t = vh.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function b0(e) {
  return !!(
    e &&
    rt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const q0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ti(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = Dr(r) ? [] : {};
            return (
              $o(r, (i, a) => {
                const s = n(i, o + 1);
                !Do(s) && (l[a] = s);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  J0 = Et("AsyncFunction"),
  X0 = (e) => e && (Ti(e) || rt(e)) && rt(e.then) && rt(e.catch),
  wh = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            In.addEventListener(
              "message",
              ({ source: o, data: l }) => {
                o === In && l === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              r.push(o), In.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    rt(In.postMessage),
  ),
  Y0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(In)
      : (typeof process < "u" && process.nextTick) || wh,
  P = {
    isArray: Dr,
    isArrayBuffer: ph,
    isBuffer: h0,
    isFormData: k0,
    isArrayBufferView: m0,
    isString: g0,
    isNumber: hh,
    isBoolean: y0,
    isObject: Ti,
    isPlainObject: Tl,
    isReadableStream: R0,
    isRequest: j0,
    isResponse: P0,
    isHeaders: N0,
    isUndefined: Do,
    isDate: v0,
    isFile: w0,
    isBlob: S0,
    isRegExp: $0,
    isFunction: rt,
    isStream: E0,
    isURLSearchParams: C0,
    isTypedArray: I0,
    isFileList: x0,
    forEach: $o,
    merge: ps,
    extend: _0,
    trim: T0,
    stripBOM: L0,
    inherits: D0,
    toFlatObject: O0,
    kindOf: Pi,
    kindOfTest: Et,
    endsWith: F0,
    toArray: M0,
    forEachEntry: A0,
    matchAll: z0,
    isHTMLForm: U0,
    hasOwnProperty: vd,
    hasOwnProp: vd,
    reduceDescriptors: yh,
    freezeMethods: H0,
    toObjectSet: V0,
    toCamelCase: B0,
    noop: W0,
    toFiniteNumber: Q0,
    findKey: mh,
    global: In,
    isContextDefined: gh,
    ALPHABET: vh,
    generateString: K0,
    isSpecCompliantForm: b0,
    toJSONObject: q0,
    isAsyncFn: J0,
    isThenable: X0,
    setImmediate: wh,
    asap: Y0,
  };
function b(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
P.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Sh = b.prototype,
  xh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  xh[e] = { value: e };
});
Object.defineProperties(b, xh);
Object.defineProperty(Sh, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, o, l) => {
  const i = Object.create(Sh);
  return (
    P.toFlatObject(
      e,
      i,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    b.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  );
};
const G0 = null;
function hs(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Eh(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sd(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = Eh(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Z0(e) {
  return P.isArray(e) && !e.some(hs);
}
const e1 = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function _i(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, E) {
        return !P.isUndefined(E[S]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    l = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (P.isDate(v)) return v.toISOString();
    if (!s && P.isBlob(v))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(v) || P.isTypedArray(v)
      ? s && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, S, E) {
    let m = v;
    if (v && !E && typeof v == "object") {
      if (P.endsWith(S, "{}"))
        (S = r ? S : S.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (P.isArray(v) && Z0(v)) ||
        ((P.isFileList(v) || P.endsWith(S, "[]")) && (m = P.toArray(v)))
      )
        return (
          (S = Eh(S)),
          m.forEach(function (y, R) {
            !(P.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? Sd([S], R, l) : i === null ? S : S + "[]",
                u(y),
              );
          }),
          !1
        );
    }
    return hs(v) ? !0 : (t.append(Sd(E, S, l), u(v)), !1);
  }
  const d = [],
    h = Object.assign(e1, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: hs,
    });
  function g(v, S) {
    if (!P.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      d.push(v),
        P.forEach(v, function (m, p) {
          (!(P.isUndefined(m) || m === null) &&
            o.call(t, m, P.isString(p) ? p.trim() : p, S, h)) === !0 &&
            g(m, S ? S.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function xd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Cu(e, t) {
  (this._pairs = []), e && _i(e, this, t);
}
const kh = Cu.prototype;
kh.append = function (t, n) {
  this._pairs.push([t, n]);
};
kh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, xd);
      }
    : xd;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function t1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ch(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || t1,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = P.isURLSearchParams(t) ? t.toString() : new Cu(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class Ed {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Rh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  n1 = typeof URLSearchParams < "u" ? URLSearchParams : Cu,
  r1 = typeof FormData < "u" ? FormData : null,
  o1 = typeof Blob < "u" ? Blob : null,
  l1 = {
    isBrowser: !0,
    classes: { URLSearchParams: n1, FormData: r1, Blob: o1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ru = typeof window < "u" && typeof document < "u",
  ms = (typeof navigator == "object" && navigator) || void 0,
  i1 =
    Ru &&
    (!ms || ["ReactNative", "NativeScript", "NS"].indexOf(ms.product) < 0),
  a1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  s1 = (Ru && window.location.href) || "http://localhost",
  u1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ru,
        hasStandardBrowserEnv: i1,
        hasStandardBrowserWebWorkerEnv: a1,
        navigator: ms,
        origin: s1,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ye = { ...u1, ...l1 };
function c1(e, t) {
  return _i(
    e,
    new Ye.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return Ye.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function d1(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function f1(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function jh(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      s = l >= n.length;
    return (
      (i = !i && P.isArray(o) ? o.length : i),
      s
        ? (P.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !P.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && P.isArray(o[i]) && (o[i] = f1(o[i])),
          !a)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, o) => {
        t(d1(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function p1(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ho = {
  transitional: Rh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = P.isObject(t);
      if ((l && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return o ? JSON.stringify(jh(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t) ||
        P.isReadableStream(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return c1(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return _i(
            a ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer,
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), p1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ho.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ye.classes.FormData, Blob: Ye.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ho.headers[e] = {};
});
const h1 = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  m1 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && h1[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  kd = Symbol("internals");
function Xr(e) {
  return e && String(e).trim().toLowerCase();
}
function _l(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(_l) : String(e);
}
function g1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const y1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ha(e, t, n, r, o) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function v1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function w1(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class Ge {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(a, s, u) {
      const c = Xr(s);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = P.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || s] = _l(a));
    }
    const i = (a, s) => P.forEach(a, (u, c) => l(u, c, s));
    if (P.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (P.isString(t) && (t = t.trim()) && !y1(t)) i(m1(t), n);
    else if (P.isHeaders(t)) for (const [a, s] of t.entries()) l(s, a, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Xr(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return g1(o);
        if (P.isFunction(n)) return n.call(this, o, r);
        if (P.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Xr(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ha(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = Xr(i)), i)) {
        const a = P.findKey(r, i);
        a && (!n || ha(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return P.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || ha(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (o, l) => {
        const i = P.findKey(r, l);
        if (i) {
          (n[i] = _l(o)), delete n[l];
          return;
        }
        const a = t ? v1(l) : String(l).trim();
        a !== l && delete n[l], (n[a] = _l(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[kd] = this[kd] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const a = Xr(i);
      r[a] || (w1(o, i), (r[a] = !0));
    }
    return P.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
Ge.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(Ge.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(Ge);
function ma(e, t) {
  const n = this || Ho,
    r = t || n,
    o = Ge.from(r.headers);
  let l = r.data;
  return (
    P.forEach(e, function (a) {
      l = a.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function Ph(e) {
  return !!(e && e.__CANCEL__);
}
function Or(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Or, b, { __CANCEL__: !0 });
function Nh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new b(
          "Request failed with status code " + n.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function S1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function x1(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[l];
      i || (i = u), (n[o] = s), (r[o] = u);
      let d = l,
        h = 0;
      for (; d !== o; ) (h += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), u - i < t)) return;
      const g = c && u - c;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function E1(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    l;
  const i = (u, c = Date.now()) => {
    (n = c), (o = null), l && (clearTimeout(l), (l = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? i(u, c)
        : ((o = u),
          l ||
            (l = setTimeout(() => {
              (l = null), i(o);
            }, r - d)));
    },
    () => o && i(o),
  ];
}
const ii = (e, t, n = 3) => {
    let r = 0;
    const o = x1(50, 250);
    return E1((l) => {
      const i = l.loaded,
        a = l.lengthComputable ? l.total : void 0,
        s = i - r,
        u = o(s),
        c = i <= a;
      r = i;
      const d = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && a && c ? (a - i) / u : void 0,
        event: l,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Cd = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Rd =
    (e) =>
    (...t) =>
      P.asap(() => e(...t)),
  k1 = Ye.hasStandardBrowserEnv
    ? (function () {
        const t =
            Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(l) {
          let i = l;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (i) {
            const a = P.isString(i) ? o(i) : i;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  C1 = Ye.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l) {
          const i = [e + "=" + encodeURIComponent(t)];
          P.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            P.isString(r) && i.push("path=" + r),
            P.isString(o) && i.push("domain=" + o),
            l === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function R1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function j1(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Th(e, t) {
  return e && !R1(t) ? j1(e, t) : t;
}
const jd = (e) => (e instanceof Ge ? { ...e } : e);
function Kn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: d }, u, c)
      : P.isPlainObject(c)
        ? P.merge({}, c)
        : P.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, d) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function l(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c);
  }
  function i(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const s = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c) => o(jd(u), jd(c), !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = s[c] || o,
        h = d(e[c], t[c], c);
      (P.isUndefined(h) && d !== a) || (n[c] = h);
    }),
    n
  );
}
const _h = (e) => {
    const t = Kn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: l,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = Ge.from(i)),
      (t.url = Ch(Th(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        );
    let s;
    if (P.isFormData(n)) {
      if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((s = i.getContentType()) !== !1) {
        const [u, ...c] = s
          ? s
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Ye.hasStandardBrowserEnv &&
      (r && P.isFunction(r) && (r = r(t)), r || (r !== !1 && k1(t.url)))
    ) {
      const u = o && l && C1.read(l);
      u && i.set(o, u);
    }
    return t;
  },
  P1 = typeof XMLHttpRequest < "u",
  N1 =
    P1 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = _h(e);
        let l = o.data;
        const i = Ge.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: s, onDownloadProgress: u } = o,
          c,
          d,
          h,
          g,
          v;
        function S() {
          g && g(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let E = new XMLHttpRequest();
        E.open(o.method.toUpperCase(), o.url, !0), (E.timeout = o.timeout);
        function m() {
          if (!E) return;
          const y = Ge.from(
              "getAllResponseHeaders" in E && E.getAllResponseHeaders(),
            ),
            T = {
              data:
                !a || a === "text" || a === "json"
                  ? E.responseText
                  : E.response,
              status: E.status,
              statusText: E.statusText,
              headers: y,
              config: e,
              request: E,
            };
          Nh(
            function (D) {
              n(D), S();
            },
            function (D) {
              r(D), S();
            },
            T,
          ),
            (E = null);
        }
        "onloadend" in E
          ? (E.onloadend = m)
          : (E.onreadystatechange = function () {
              !E ||
                E.readyState !== 4 ||
                (E.status === 0 &&
                  !(E.responseURL && E.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (E.onabort = function () {
            E &&
              (r(new b("Request aborted", b.ECONNABORTED, e, E)), (E = null));
          }),
          (E.onerror = function () {
            r(new b("Network Error", b.ERR_NETWORK, e, E)), (E = null);
          }),
          (E.ontimeout = function () {
            let R = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const T = o.transitional || Rh;
            o.timeoutErrorMessage && (R = o.timeoutErrorMessage),
              r(
                new b(
                  R,
                  T.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  e,
                  E,
                ),
              ),
              (E = null);
          }),
          l === void 0 && i.setContentType(null),
          "setRequestHeader" in E &&
            P.forEach(i.toJSON(), function (R, T) {
              E.setRequestHeader(T, R);
            }),
          P.isUndefined(o.withCredentials) ||
            (E.withCredentials = !!o.withCredentials),
          a && a !== "json" && (E.responseType = o.responseType),
          u && (([h, v] = ii(u, !0)), E.addEventListener("progress", h)),
          s &&
            E.upload &&
            (([d, g] = ii(s)),
            E.upload.addEventListener("progress", d),
            E.upload.addEventListener("loadend", g)),
          (o.cancelToken || o.signal) &&
            ((c = (y) => {
              E &&
                (r(!y || y.type ? new Or(null, e, E) : y),
                E.abort(),
                (E = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const p = S1(o.url);
        if (p && Ye.protocols.indexOf(p) === -1) {
          r(new b("Unsupported protocol " + p + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        E.send(l || null);
      });
    },
  T1 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const l = function (u) {
        if (!o) {
          (o = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof b ? c : new Or(c instanceof Error ? c.message : c),
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), l(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(l)
              : u.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", l));
      const { signal: s } = r;
      return (s.unsubscribe = () => P.asap(a)), s;
    }
  },
  _1 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  L1 = async function* (e, t) {
    for await (const n of D1(e)) yield* _1(n, t);
  },
  D1 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Pd = (e, t, n, r) => {
    const o = L1(e, t);
    let l = 0,
      i,
      a = (s) => {
        i || ((i = !0), r && r(s));
      };
    return new ReadableStream(
      {
        async pull(s) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              a(), s.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let h = (l += d);
              n(h);
            }
            s.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(s) {
          return a(s), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Li =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Lh = Li && typeof ReadableStream == "function",
  O1 =
    Li &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Dh = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  F1 =
    Lh &&
    Dh(() => {
      let e = !1;
      const t = new Request(Ye.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Nd = 64 * 1024,
  gs = Lh && Dh(() => P.isReadableStream(new Response("").body)),
  ai = { stream: gs && ((e) => e.body) };
Li &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ai[t] &&
        (ai[t] = P.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new b(
                `Response type '${t}' is not supported`,
                b.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const M1 = async (e) => {
    if (e == null) return 0;
    if (P.isBlob(e)) return e.size;
    if (P.isSpecCompliantForm(e))
      return (
        await new Request(Ye.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (P.isArrayBufferView(e) || P.isArrayBuffer(e)) return e.byteLength;
    if ((P.isURLSearchParams(e) && (e = e + ""), P.isString(e)))
      return (await O1(e)).byteLength;
  },
  I1 = async (e, t) => {
    const n = P.toFiniteNumber(e.getContentLength());
    return n ?? M1(t);
  },
  A1 =
    Li &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: l,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: s,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = _h(e);
      u = u ? (u + "").toLowerCase() : "text";
      let g = T1([o, l && l.toAbortSignal()], i),
        v;
      const S =
        g &&
        g.unsubscribe &&
        (() => {
          g.unsubscribe();
        });
      let E;
      try {
        if (
          s &&
          F1 &&
          n !== "get" &&
          n !== "head" &&
          (E = await I1(c, r)) !== 0
        ) {
          let T = new Request(t, { method: "POST", body: r, duplex: "half" }),
            x;
          if (
            (P.isFormData(r) &&
              (x = T.headers.get("content-type")) &&
              c.setContentType(x),
            T.body)
          ) {
            const [D, N] = Cd(E, ii(Rd(s)));
            r = Pd(T.body, Nd, D, N);
          }
        }
        P.isString(d) || (d = d ? "include" : "omit");
        const m = "credentials" in Request.prototype;
        v = new Request(t, {
          ...h,
          signal: g,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: m ? d : void 0,
        });
        let p = await fetch(v);
        const y = gs && (u === "stream" || u === "response");
        if (gs && (a || (y && S))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((F) => {
            T[F] = p[F];
          });
          const x = P.toFiniteNumber(p.headers.get("content-length")),
            [D, N] = (a && Cd(x, ii(Rd(a), !0))) || [];
          p = new Response(
            Pd(p.body, Nd, D, () => {
              N && N(), S && S();
            }),
            T,
          );
        }
        u = u || "text";
        let R = await ai[P.findKey(ai, u) || "text"](p, e);
        return (
          !y && S && S(),
          await new Promise((T, x) => {
            Nh(T, x, {
              data: R,
              headers: Ge.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (m) {
        throw (
          (S && S(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new b("Network Error", b.ERR_NETWORK, e, v), {
                cause: m.cause || m,
              })
            : b.from(m, m && m.code, e, v))
        );
      }
    }),
  ys = { http: G0, xhr: N1, fetch: A1 };
P.forEach(ys, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Td = (e) => `- ${e}`,
  z1 = (e) => P.isFunction(e) || e === null || e === !1,
  Oh = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let i;
        if (
          ((r = n),
          !z1(n) && ((r = ys[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new b(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + l] = r;
      }
      if (!r) {
        const l = Object.entries(o).map(
          ([a, s]) =>
            `adapter ${a} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let i = t
          ? l.length > 1
            ? `since :
` +
              l.map(Td).join(`
`)
            : " " + Td(l[0])
          : "as no adapter specified";
        throw new b(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: ys,
  };
function ga(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Or(null, e);
}
function _d(e) {
  return (
    ga(e),
    (e.headers = Ge.from(e.headers)),
    (e.data = ma.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Oh.getAdapter(e.adapter || Ho.adapter)(e).then(
      function (r) {
        return (
          ga(e),
          (r.data = ma.call(e, e.transformResponse, r)),
          (r.headers = Ge.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Ph(r) ||
            (ga(e),
            r &&
              r.response &&
              ((r.response.data = ma.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ge.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Fh = "1.7.7",
  ju = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ju[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Ld = {};
ju.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      "[Axios v" +
      Fh +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (l, i, a) => {
    if (t === !1)
      throw new b(
        o(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED,
      );
    return (
      n &&
        !Ld[i] &&
        ((Ld[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, i, a) : !0
    );
  };
};
function U1(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l];
    if (i) {
      const a = e[l],
        s = a === void 0 || i(a, l, e);
      if (s !== !0)
        throw new b("option " + l + " must be " + s, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new b("Unknown option " + l, b.ERR_BAD_OPTION);
  }
}
const vs = { assertOptions: U1, validators: ju },
  Zt = vs.validators;
class Un {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ed(), response: new Ed() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Kn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      vs.assertOptions(
        r,
        {
          silentJSONParsing: Zt.transitional(Zt.boolean),
          forcedJSONParsing: Zt.transitional(Zt.boolean),
          clarifyTimeoutError: Zt.transitional(Zt.boolean),
        },
        !1,
      ),
      o != null &&
        (P.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : vs.assertOptions(
              o,
              { encode: Zt.function, serialize: Zt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = l && P.merge(l.common, l[n.method]);
    l &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete l[v];
        },
      ),
      (n.headers = Ge.concat(i, l));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((s = s && S.synchronous), a.unshift(S.fulfilled, S.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (S) {
      u.push(S.fulfilled, S.rejected);
    });
    let c,
      d = 0,
      h;
    if (!s) {
      const v = [_d.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          h = v.length,
          c = Promise.resolve(n);
        d < h;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    h = a.length;
    let g = n;
    for (d = 0; d < h; ) {
      const v = a[d++],
        S = a[d++];
      try {
        g = v(g);
      } catch (E) {
        S.call(this, E);
        break;
      }
    }
    try {
      c = _d.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Kn(this.defaults, t);
    const n = Th(t.baseURL, t.url);
    return Ch(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  Un.prototype[t] = function (n, r) {
    return this.request(
      Kn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, i, a) {
      return this.request(
        Kn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: i,
        }),
      );
    };
  }
  (Un.prototype[t] = n()), (Un.prototype[t + "Form"] = n(!0));
});
class Pu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const i = new Promise((a) => {
          r.subscribe(a), (l = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, a) {
        r.reason || ((r.reason = new Or(l, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Pu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function B1(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function $1(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const ws = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ws).forEach(([e, t]) => {
  ws[t] = e;
});
function Mh(e) {
  const t = new Un(e),
    n = fh(Un.prototype.request, t);
  return (
    P.extend(n, Un.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Mh(Kn(e, o));
    }),
    n
  );
}
const Y = Mh(Ho);
Y.Axios = Un;
Y.CanceledError = Or;
Y.CancelToken = Pu;
Y.isCancel = Ph;
Y.VERSION = Fh;
Y.toFormData = _i;
Y.AxiosError = b;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = B1;
Y.isAxiosError = $1;
Y.mergeConfig = Kn;
Y.AxiosHeaders = Ge;
Y.formToJSON = (e) => jh(P.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = Oh.getAdapter;
Y.HttpStatusCode = ws;
Y.default = Y;
const Vo = "/api/rooms";
let Di;
const H1 = (e) => {
    Di = `Bearer ${e}`;
  },
  V1 = async () => (await Y.get(Vo)).data,
  W1 = async (e) => (await Y.get(`${Vo}/${e}`)).data,
  Q1 = async (e) => {
    const t = { headers: { Authorization: Di } };
    return (await Y.post(Vo, e, t)).data;
  },
  K1 = async (e, t) => {
    const n = { headers: { Authorization: Di } };
    return (await Y.put(`${Vo}/${e}`, t, n)).data;
  },
  b1 = async (e) => {
    const t = { headers: { Authorization: Di } };
    return (await Y.delete(`${Vo}/${e}`, t)).data;
  },
  Wt = {
    getAll: V1,
    getById: W1,
    create: Q1,
    update: K1,
    remove: b1,
    setToken: H1,
  },
  Wo = "/api/bookings";
let Fr;
const q1 = (e) => {
    Fr = `Bearer ${e}`;
  },
  J1 = async () => {
    const e = { headers: { Authorization: Fr } };
    return (await Y.get(Wo, e)).data;
  },
  X1 = async (e) => {
    const t = { headers: { Authorization: Fr } };
    return (await Y.get(`${Wo}/${e}`, t)).data;
  },
  Y1 = async (e) => {
    const t = { headers: { Authorization: Fr } };
    return (await Y.post(Wo, e, t)).data;
  },
  G1 = async (e, t) => {
    const n = { headers: { Authorization: Fr } };
    return (await Y.put(`${Wo}/${e}`, t, n)).data;
  },
  Z1 = async (e) => {
    const t = { headers: { Authorization: Fr } };
    return (await Y.delete(`${Wo}/${e}`, t)).data;
  },
  wn = {
    getAll: J1,
    getById: X1,
    create: Y1,
    remove: Z1,
    setToken: q1,
    update: G1,
  };
function Nu({ room: e, rooms: t, bookings: n, setBookings: r }) {
  const [o, l] = k.useState(""),
    [i, a] = k.useState(""),
    [s, u] = k.useState(""),
    [c, d] = k.useState(""),
    [h, g] = k.useState(""),
    [v, S] = k.useState(""),
    [E, m] = k.useState(""),
    [p, y] = k.useState(""),
    [R, T] = k.useState(""),
    [x, D] = k.useState(!1);
  k.useEffect(() => {
    e
      ? (D(!0), m(e.location || ""), y(e.category || ""), T(e.id || ""))
      : (D(!1), m(""), y(""), T(""));
  }, [e]);
  const N = k.useMemo(() => [...new Set(t.map(($) => $.location))], [t]),
    F = k.useMemo(() => [...new Set(t.map(($) => $.category))], [t]);
  k.useEffect(() => {
    N.length > 0 && m(N[0]), F.length > 0 && y(F[0]);
  }, [N, F]);
  const M = async ($) => {
    $.preventDefault();
    const re = {
      name: o,
      email: i,
      phoneNumber: s,
      startDate: c,
      endDate: h,
      comments: v,
      location: E,
      category: p,
      ...(x && { roomId: R }),
    };
    try {
      const ie = await wn.create(re);
      window.alert(
        `Booked room succesfully! The status of your booking is ${ie.status.toUpperCase()}.`,
      ),
        l(""),
        a(""),
        u(""),
        d(""),
        g(""),
        S(""),
        m(N[0]),
        y(F[0]),
        x || r(n.concat(ie));
    } catch (ie) {
      console.error(ie), window.alert(ie.response.data);
    }
  };
  return f.jsxs("form", {
    className: "bookRoomForm",
    onSubmit: M,
    children: [
      f.jsxs("div", {
        className: "bookingCustomerInfo",
        children: [
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Name" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "name",
                value: o,
                placeholder: "Type your name...",
                onChange: ($) => l($.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Email Address" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "email",
                value: i,
                placeholder: "Type your email...",
                onChange: ($) => a($.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Phone number" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "phone",
                value: s,
                placeholder: "Type your phone number...",
                onChange: ($) => u($.target.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "bookingRoomInfo",
        children: [
          !x &&
            f.jsxs(f.Fragment, {
              children: [
                f.jsxs("div", {
                  style: { display: "flex", flexDirection: "column" },
                  className: "bookingInput",
                  children: [
                    f.jsx("label", { children: "Location" }),
                    f.jsx("select", {
                      name: "location",
                      onChange: ($) => m($.target.value),
                      value: E,
                      children: N.map(($, re) =>
                        f.jsx("option", { children: $ }, re),
                      ),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  style: { display: "flex", flexDirection: "column" },
                  className: "bookingInput",
                  children: [
                    f.jsx("label", { children: "Category" }),
                    f.jsx("select", {
                      name: "category",
                      onChange: ($) => y($.target.value),
                      value: p,
                      children: F.map(($, re) =>
                        f.jsx("option", { children: $ }, re),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Check-in" }),
              f.jsx("input", {
                required: !0,
                type: "date",
                value: c,
                onChange: ($) => d($.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Check-out" }),
              f.jsx("input", {
                required: !0,
                type: "date",
                value: h,
                onChange: ($) => g($.target.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "bookingInput",
        id: "comments",
        children: [
          f.jsx("label", { children: "Comments" }),
          f.jsx("textarea", {
            name: "comments",
            value: v,
            placeholder: "Type comments for booking...",
            onChange: ($) => S($.target.value),
            rows: "2",
          }),
        ],
      }),
      f.jsx("button", { type: "submit", children: "Book room" }),
    ],
  });
}
function ew({ rooms: e, setFilteredRooms: t }) {
  const [n, r] = k.useState("All"),
    [o, l] = k.useState("All"),
    i = k.useMemo(() => ["All", ...new Set(e.map((d) => d.location))], [e]),
    a = k.useMemo(() => ["All", ...new Set(e.map((d) => d.category))], [e]),
    s = (d, h) => {
      let g = e;
      d !== "All" && (g = g.filter((v) => v.location === d)),
        h !== "All" && (g = g.filter((v) => v.category === h)),
        t(g);
    },
    u = (d) => {
      const h = d.target.value;
      r(h), s(h, o);
    },
    c = (d) => {
      const h = d.target.value;
      l(h), s(n, h);
    };
  return f.jsxs("div", {
    className: "filterRooms",
    children: [
      f.jsxs("div", {
        className: "filterInput",
        children: [
          f.jsx("label", { children: "Search by location:" }),
          f.jsx("select", {
            value: n,
            onChange: u,
            children: i.map((d, h) =>
              f.jsx("option", { value: d, children: d }, h),
            ),
          }),
        ],
      }),
      f.jsxs("div", {
        className: "filterInput",
        children: [
          f.jsx("label", { children: "Search by category:" }),
          f.jsx("select", {
            value: o,
            onChange: c,
            children: a.map((d, h) =>
              f.jsx("option", { value: d, children: d }, h),
            ),
          }),
        ],
      }),
    ],
  });
}
const tw = ({ rooms: e, setRooms: t, setErrorMsg: n }) => {
  const [r, o] = k.useState(""),
    [l, i] = k.useState(""),
    [a, s] = k.useState([]),
    [u, c] = k.useState(""),
    [d, h] = k.useState(""),
    g = async (E) => {
      E.preventDefault();
      const m = {
        location: r,
        category: d,
        features: a,
        price: u,
        isAvailable: !0,
      };
      try {
        const p = await Wt.create(m);
        o(""),
          s([]),
          c(0),
          h(""),
          t(e.concat(p)),
          window.alert("Room created succesfully.");
      } catch (p) {
        n(p.response.data);
      }
    },
    v = (E) => {
      E && (s(a.concat(E)), i(""));
    },
    S = () => {
      o(""), h(""), s([]), c(0);
    };
  return f.jsxs("form", {
    onSubmit: g,
    className: "createRoomForm",
    children: [
      f.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        },
        children: [
          f.jsxs("div", {
            className: "roomInput",
            children: [
              f.jsx("label", { children: "Location" }),
              f.jsx("input", {
                type: "text",
                name: "location",
                value: r,
                placeholder: "Type location...",
                onChange: ({ target: E }) => o(E.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "roomInput",
            children: [
              f.jsx("label", { children: "Category" }),
              f.jsx("input", {
                type: "text",
                name: "category",
                value: d,
                placeholder: "Type category...",
                onChange: ({ target: E }) => h(E.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "roomInput",
        children: [
          f.jsx("label", { children: "Features" }),
          f.jsxs("div", {
            className: "featureInputField",
            children: [
              f.jsx("input", {
                type: "text",
                name: "feature",
                value: l,
                placeholder: "Type new feature...",
                onChange: ({ target: E }) => i(E.value),
              }),
              f.jsx("button", {
                id: "addFeatureBtn",
                type: "button",
                "data-testid": "addFeatureBtn",
                onClick: () => v(l),
                children: "+",
              }),
            ],
          }),
          a.length > 0 &&
            f.jsx("ul", {
              className: "addRoomFeatureList",
              children: a.map((E, m) =>
                f.jsxs(
                  "li",
                  {
                    children: [
                      f.jsx("p", { children: E }),
                      f.jsx("button", {
                        id: "deleteBtn",
                        type: "button",
                        onClick: () => s(a.filter((p, y) => y !== m)),
                        children: "X",
                      }),
                    ],
                  },
                  m,
                ),
              ),
            }),
        ],
      }),
      f.jsxs("div", {
        className: "roomInput",
        children: [
          f.jsx("label", { children: "Price / Night (€)" }),
          f.jsx("input", {
            type: "text",
            name: "price",
            value: u,
            placeholder: "Type price...",
            onChange: ({ target: E }) => c(E.value),
          }),
        ],
      }),
      f.jsxs("div", {
        className: "addRoomActions",
        children: [
          f.jsx("button", {
            id: "addRoomBtn",
            type: "submit",
            "data-testid": "addRoomBtn",
            children: "Add Room",
          }),
          f.jsx("button", {
            id: "clearFormBtn",
            type: "button",
            onClick: S,
            children: "Clear",
          }),
        ],
      }),
    ],
  });
};
function Dd() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState([]),
    [o, l] = k.useState(""),
    [i, a] = k.useState(!0),
    { user: s } = Ri();
  return (
    k.useEffect(() => {
      a(!0),
        (async () => {
          try {
            const c = await Wt.getAll();
            t(c || []), r(c || []);
          } catch (c) {
            l(c.response.data);
          } finally {
            a(!1);
          }
        })();
    }, []),
    k.useEffect(() => {
      r(e);
    }, [e]),
    i
      ? f.jsx("div", { className: "loading", children: "Loading..." })
      : o
        ? f.jsx("div", { children: o })
        : f.jsxs("div", {
            className: "roomsPage",
            children: [
              o && f.jsx("p", { style: { color: "red" }, children: o }),
              f.jsxs("div", {
                className: "roomsPageContent",
                children: [
                  f.jsxs("div", {
                    children: [
                      f.jsx("h2", { children: "Rooms" }),
                      f.jsxs("p", {
                        children: [
                          "Click on a room to see details and ",
                          (s == null ? void 0 : s.role) === "Admin"
                            ? "update or delete it"
                            : "make a booking",
                          ".",
                        ],
                      }),
                      f.jsx(ew, { rooms: e, setFilteredRooms: r }),
                      f.jsx(f0, { rooms: n, setRooms: t, user: s }),
                    ],
                  }),
                  (s == null ? void 0 : s.role) === "Admin" &&
                    f.jsxs("div", {
                      children: [
                        f.jsx("h2", { children: "Add Room" }),
                        f.jsx("p", {
                          children:
                            "Add new room available for customers and staff.",
                        }),
                        f.jsx(tw, { rooms: e, setRooms: t, setErrorMsg: l }),
                      ],
                    }),
                  !(s != null && s.role) &&
                    f.jsxs("div", {
                      children: [
                        f.jsx("h2", { children: "Book a room" }),
                        f.jsx("p", {
                          children:
                            "Make a general booking for any room in location and category of your choice.",
                        }),
                        f.jsx(Nu, { rooms: e }),
                      ],
                    }),
                ],
              }),
            ],
          })
  );
}
function nw({ room: e }) {
  return f.jsxs("div", {
    className: "roomDetails",
    children: [
      f.jsxs("p", { children: ["Location: ", e.location] }),
      f.jsxs("p", { children: ["Category: ", e.category] }),
      f.jsxs("div", {
        children: [
          f.jsx("p", { children: "Features:" }),
          f.jsx("ul", {
            children: e.features.map((t, n) => f.jsx("li", { children: t }, n)),
          }),
        ],
      }),
      f.jsxs("p", { children: ["Price: ", e.price, "€ / Night"] }),
    ],
  });
}
function rw() {
  const [e, t] = k.useState({}),
    [n, r] = k.useState(""),
    [o, l] = k.useState(!0),
    i = bt(),
    { user: a } = Ri(),
    { id: s } = Eu();
  k.useEffect(() => {
    (async () => {
      l(!0);
      try {
        const d = await Wt.getById(s);
        t(d);
      } catch (d) {
        r("Room not found."), console.log(d);
      } finally {
        l(!1);
      }
    })();
  }, [s]);
  const u = async () => {
    try {
      await Wt.remove(s),
        window.alert("Room deleted succesfully."),
        i("/rooms");
    } catch (c) {
      console.log(c), window.alert("Error occured when deleting room.");
    }
  };
  return o
    ? f.jsx("div", { children: "Loading..." })
    : n
      ? f.jsx("p", { style: { color: "red" }, children: n })
      : f.jsxs("div", {
          className: "roomPage",
          children: [
            f.jsxs("div", {
              children: [
                f.jsxs("h1", { children: ["Room ID: ", s] }),
                f.jsx(nw, { room: e }),
                (a == null ? void 0 : a.role) === "Admin" &&
                  f.jsxs("div", {
                    className: "roomManagementActions",
                    children: [
                      f.jsx("button", {
                        onClick: () => i(`/rooms/update/${s}`),
                        children: "Update",
                      }),
                      f.jsx("button", {
                        style: { backgroundColor: "red" },
                        onClick: u,
                        children: "Delete",
                      }),
                    ],
                  }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsx("h2", { children: "Book this room" }),
                f.jsx(Nu, { room: e, rooms: [] }),
              ],
            }),
          ],
        });
}
function ow({ user: e }) {
  const t = bt(),
    [n, r] = k.useState(!1);
  k.useEffect(() => {
    r(!!e);
  }, [e]);
  const o = () => {
      window.localStorage.removeItem("loggedInUser"),
        t("/login"),
        window.location.reload();
    },
    l = {
      Admin: [
        { to: "/rooms", label: "Rooms" },
        { to: "/bookings", label: "Bookings" },
        { to: "/staff/new", label: "Add Staff" },
      ],
      Staff: [
        { to: "/rooms", label: "Rooms" },
        { to: "/bookings", label: "Bookings" },
      ],
      Customer: [{ to: "/", label: "Home" }],
    },
    i = (e == null ? void 0 : e.role) || "Customer",
    a = l[i] || l.Customer;
  return f.jsxs("div", {
    className: "navBar",
    children: [
      f.jsx("h1", { children: "HotelApp" }),
      f.jsx("nav", {
        children: f.jsx("ul", {
          children: n
            ? f.jsxs(f.Fragment, {
                children: [
                  a.map(({ to: s, label: u }) =>
                    f.jsx(
                      fa,
                      {
                        to: s,
                        style: ({ isActive: c }) => ({
                          borderBottom: c ? "0.15rem solid #14213D" : "none",
                        }),
                        children: u,
                      },
                      s,
                    ),
                  ),
                  f.jsx("a", {
                    onClick: o,
                    style: { cursor: "pointer" },
                    children: "Log Out",
                  }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  f.jsx(fa, { to: "/", children: "Home" }),
                  f.jsx(fa, { to: "/login", children: "Login" }),
                ],
              }),
        }),
      }),
    ],
  });
}
const Qo = "/api/users";
let Tu;
const lw = (e) => {
    Tu = `Bearer ${e}`;
  },
  iw = async (e) => (await Y.post(`${Qo}/login`, e)).data,
  aw = async (e) => (await Y.post(`${Qo}/login/staff`, e)).data,
  sw = async (e) => (await Y.post(Qo, e)).data,
  uw = async (e) => {
    const t = { headers: { Authorization: Tu } };
    return (await Y.post(`${Qo}/staff`, e, t)).data;
  },
  cw = async (e) => {
    const t = { headers: { Authorization: Tu } };
    return (await Y.delete(`${Qo}/${e}`, t)).data;
  },
  po = {
    create: sw,
    remove: cw,
    login: iw,
    setToken: lw,
    loginStaff: aw,
    createStaff: uw,
  };
function dw() {
  const [e, t] = k.useState(null),
    [n, r] = k.useState(!0);
  k.useEffect(() => {
    r(!0);
    const l = window.localStorage.getItem("loggedInUser");
    if (l) {
      const i = JSON.parse(l);
      Wt.setToken(i.token), wn.setToken(i.token), po.setToken(i.token), t(i);
    }
    r(!1);
  }, []);
  const o = async (l) => {
    let i;
    try {
      i = await po.login(l);
    } catch (a) {
      if (a.response && a.response.status === 401) i = await po.loginStaff(l);
      else throw a;
    }
    if (!i.token) throw new Error("Invalid credentials.");
    window.localStorage.setItem("loggedInUser", JSON.stringify(i)),
      Wt.setToken(i.token),
      wn.setToken(i.token),
      t(i);
  };
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx(ow, { user: e }),
      e &&
        f.jsx("p", {
          className: "authText",
          children:
            e != null && e.role
              ? `Logged in as ${e == null ? void 0 : e.role}`
              : "Logged in as Customer",
        }),
      f.jsx(Hv, { context: { handleLogin: o, user: e, loadingAuth: n } }),
    ],
  });
}
function fw({ id: e, room: t }) {
  const [n, r] = k.useState(t.location),
    [o, l] = k.useState(""),
    [i, a] = k.useState(t.features),
    [s, u] = k.useState(t.price),
    [c, d] = k.useState(t.category),
    h = bt(),
    g = async (E) => {
      E.preventDefault();
      const m = { location: n, category: c, features: i, price: s };
      try {
        await Wt.update(e, m),
          window.alert("Room updated succesfully!"),
          h(`/rooms/${e}`);
      } catch (p) {
        window.alert(p.response.data);
      }
    },
    v = (E) => {
      E && (a(i.concat(E)), l(""));
    },
    S = () => {
      window.confirm("Cancel update? All changes will be lost.") &&
        h(`/rooms/${e}`);
    };
  return f.jsxs("form", {
    onSubmit: g,
    className: "updateRoomForm",
    children: [
      f.jsxs("h2", { children: ["Room ID: ", t.id] }),
      f.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        },
        children: [
          f.jsxs("div", {
            className: "roomInput",
            children: [
              f.jsx("label", { children: "Location: " }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "location",
                value: n,
                placeholder: "Edit location...",
                onChange: ({ target: E }) => r(E.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "roomInput",
            children: [
              f.jsx("label", { children: "Category: " }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "category",
                value: c,
                placeholder: "Edit category...",
                onChange: ({ target: E }) => d(E.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "roomInput",
        children: [
          f.jsx("label", { children: "Features: " }),
          f.jsxs("div", {
            className: "featureInputField",
            children: [
              f.jsx("input", {
                type: "text",
                name: "feature",
                value: o,
                placeholder: "Type new feature...",
                onChange: ({ target: E }) => l(E.value),
              }),
              f.jsx("button", {
                id: "addFeatureBtn",
                type: "button",
                "data-testid": "addFeatureBtn",
                onClick: () => v(o),
                children: "+",
              }),
            ],
          }),
          i.length > 0 &&
            f.jsx("ul", {
              className: "addRoomFeatureList",
              children: i.map((E, m) =>
                f.jsxs(
                  "li",
                  {
                    children: [
                      f.jsx("p", { children: E }),
                      f.jsx("button", {
                        id: "deleteBtn",
                        type: "button",
                        onClick: () => a(i.filter((p, y) => y !== m)),
                        children: "X",
                      }),
                    ],
                  },
                  m,
                ),
              ),
            }),
        ],
      }),
      f.jsxs("div", {
        className: "roomInput",
        children: [
          f.jsx("label", { children: "Price / night (€): " }),
          f.jsx("input", {
            required: !0,
            type: "text",
            name: "price",
            value: s,
            placeholder: "Edit price...",
            onChange: ({ target: E }) => u(E.value),
          }),
        ],
      }),
      f.jsxs("div", {
        className: "updateActions",
        children: [
          f.jsx("button", {
            id: "addRoomBtn",
            type: "submit",
            "data-testid": "addRoomBtn",
            children: "Update Room",
          }),
          f.jsx("button", {
            id: "cancelUpdate",
            type: "button",
            onClick: S,
            children: "Cancel",
          }),
        ],
      }),
    ],
  });
}
function pw() {
  const { id: e } = Eu(),
    [t, n] = k.useState(""),
    [r, o] = k.useState(!0),
    [l, i] = k.useState({});
  return (
    k.useEffect(() => {
      o(!0),
        (async () => {
          try {
            const s = await Wt.getById(e);
            i(s || {});
          } catch (s) {
            n(s.response.data);
          } finally {
            o(!1);
          }
        })();
    }, [e]),
    r
      ? f.jsx("div", { className: "loading", children: "Loading..." })
      : t
        ? f.jsx("div", { children: t })
        : f.jsxs("div", {
            className: "updateRoomPage",
            children: [
              f.jsx("h1", { children: "Update room" }),
              f.jsx(fw, { id: e, room: l }),
            ],
          })
  );
}
function hw({ handleLogin: e, toggleSignup: t }) {
  const [n, r] = k.useState(""),
    [o, l] = k.useState(""),
    [i, a] = k.useState(""),
    s = bt(),
    u = async (c) => {
      c.preventDefault(), a("");
      try {
        await e({ username: n, password: o }), s("/rooms");
      } catch (d) {
        a(d.response.data);
      }
    };
  return f.jsxs("form", {
    className: "authForm",
    onSubmit: u,
    children: [
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Username" }),
          f.jsx("input", {
            required: !0,
            type: "text",
            value: n,
            name: "username",
            onChange: ({ target: c }) => r(c.value),
            "data-testid": "username",
            placeholder: "Type your username...",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Password" }),
          f.jsx("input", {
            required: !0,
            type: "password",
            value: o,
            name: "password",
            onChange: ({ target: c }) => l(c.value),
            "data-testid": "password",
            placeholder: "Type your password...",
          }),
        ],
      }),
      f.jsx("button", { type: "submit", children: "Login" }),
      i && f.jsx("p", { style: { color: "red" }, children: i }),
      f.jsx("a", { onClick: t, children: "Create an account here!" }),
    ],
  });
}
function Ih({ toggleSignup: e }) {
  const [t, n] = k.useState(""),
    [r, o] = k.useState(""),
    [l, i] = k.useState(""),
    [a, s] = k.useState(""),
    [u, c] = k.useState(""),
    [d, h] = k.useState(!1),
    [g, v] = k.useState("Staff");
  k.useEffect(() => {
    window.location.href.includes("staff") ? h(!0) : h(!1);
  }, []);
  const S = async (E) => {
    E.preventDefault(), c("");
    try {
      d
        ? (await po.createStaff({
            userName: t,
            email: r,
            phoneNumber: a,
            passwordHash: l,
            role: g,
          }),
          window.alert(`New ${g.toLowerCase()} account created succesfully.`),
          n(""),
          o(""),
          i(""),
          s(""))
        : (await po.create({
            userName: t,
            email: r,
            phoneNumber: a,
            passwordHash: l,
            role: "",
          }),
          window.alert(
            "Your account was created succesfully! Log in to continue.",
          ),
          window.location.reload());
    } catch (m) {
      console.error(m), c("Error with signup.");
    }
  };
  return f.jsxs("form", {
    className: "authForm",
    onSubmit: S,
    children: [
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Name" }),
          f.jsx("input", {
            required: !0,
            type: "text",
            value: t,
            name: "username",
            onChange: ({ target: E }) => n(E.value),
            "data-testid": "username",
            placeholder: "Type name...",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Email" }),
          f.jsx("input", {
            required: !0,
            type: "text",
            value: r,
            name: "email",
            onChange: ({ target: E }) => o(E.value),
            "data-testid": "email",
            placeholder: "Type email...",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Phone number" }),
          f.jsx("input", {
            required: !0,
            type: "text",
            value: a,
            name: "phone",
            onChange: ({ target: E }) => s(E.value),
            "data-testid": "phone",
            placeholder: "Type phone number...",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "authInput",
        children: [
          f.jsx("label", { children: "Password" }),
          f.jsx("input", {
            required: !0,
            type: "password",
            value: l,
            name: "password",
            onChange: ({ target: E }) => i(E.value),
            "data-testid": "password",
            placeholder: "Type new password...",
          }),
        ],
      }),
      d &&
        f.jsxs("div", {
          children: [
            f.jsx("label", { style: { fontSize: "1.2rem" }, children: "Role" }),
            f.jsxs("select", {
              id: "staffSelect",
              name: "role",
              onChange: (E) => v(E.target.value),
              value: g,
              children: [
                f.jsx("option", { children: "Staff" }),
                f.jsx("option", { children: "Admin" }),
              ],
            }),
          ],
        }),
      f.jsx("button", {
        type: "submit",
        children: d ? "Create account" : "Sign Up",
      }),
      u && f.jsx("p", { style: { color: "red" }, children: u }),
      !d &&
        f.jsx("a", { onClick: e, children: "Existing account? Log in here!" }),
    ],
  });
}
function mw() {
  const [e, t] = k.useState(!1),
    { handleLogin: n } = Ri(),
    r = () => {
      t(!e);
    };
  return f.jsx("div", {
    className: "loginPage",
    children: e
      ? f.jsxs(f.Fragment, {
          children: [
            f.jsx("h1", { children: "Sign Up" }),
            f.jsx(Ih, { toggleSignup: r }),
          ],
        })
      : f.jsxs(f.Fragment, {
          children: [
            f.jsx("h1", { children: "Log In" }),
            f.jsx(hw, { handleLogin: n, toggleSignup: r }),
          ],
        }),
  });
}
function Yr({ children: e, roles: t = [] }) {
  const { user: n, loadingAuth: r } = Ri(),
    o = bt();
  return (
    k.useEffect(() => {
      r || ((!n || !t.includes(n.role)) && o("/", { replace: !0 }));
    }, [n, o, r, t]),
    r
      ? f.jsx("div", { children: "Loading..." })
      : t.includes(n == null ? void 0 : n.role)
        ? e
        : null
  );
}
function gw({ id: e, booking: t }) {
  const [n, r] = k.useState(""),
    [o, l] = k.useState(""),
    [i, a] = k.useState(""),
    [s, u] = k.useState(""),
    [c, d] = k.useState(""),
    [h, g] = k.useState(""),
    [v, S] = k.useState(""),
    [E, m] = k.useState(""),
    p = bt();
  k.useEffect(() => {
    t &&
      (r(t.name || ""),
      l(t.email || ""),
      a(t.phoneNumber || ""),
      S(t.location || ""),
      m(t.category || ""),
      u(t.startDate || ""),
      d(t.endDate || ""),
      g(t.comments || ""));
  }, [t]);
  const y = async (R) => {
    R.preventDefault();
    const T = {
      roomId: t.roomId || null,
      name: n,
      email: o,
      phoneNumber: i,
      startDate: s,
      endDate: c,
      comments: h,
      location: v,
      category: E,
      status: t.status || null,
    };
    try {
      await wn.update(e, T),
        window.alert("Booking updated succesfully!"),
        p("/bookings");
    } catch (x) {
      window.alert(x.response.data);
    }
  };
  return f.jsxs("form", {
    className: "updateBookingForm",
    onSubmit: y,
    children: [
      f.jsxs("h2", { children: ["Room ID: ", t.roomId] }),
      f.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        },
        children: [
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Name" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "name",
                value: n,
                placeholder: "Type your name...",
                onChange: (R) => r(R.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Email Address" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "email",
                value: o,
                placeholder: "Type your email...",
                onChange: (R) => l(R.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Phone number" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "phone",
                value: i,
                placeholder: "Type your phone number...",
                onChange: (R) => a(R.target.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        style: { display: "flex", gap: "1rem" },
        children: [
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Location" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "location",
                value: v,
                placeholder: "Type your phone number...",
                onChange: (R) => S(R.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Category" }),
              f.jsx("input", {
                required: !0,
                type: "text",
                name: "category",
                value: E,
                placeholder: "Type your phone number...",
                onChange: (R) => m(R.target.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        style: { display: "flex", gap: "1rem" },
        children: [
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "Start Date" }),
              f.jsx("input", {
                required: !0,
                type: "date",
                value: s,
                onChange: (R) => u(R.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "bookingInput",
            children: [
              f.jsx("label", { children: "End Date" }),
              f.jsx("input", {
                required: !0,
                type: "date",
                value: c,
                onChange: (R) => d(R.target.value),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "bookingInput",
        id: "comments",
        children: [
          f.jsx("label", { children: "Comments" }),
          f.jsx("textarea", {
            name: "comments",
            value: h,
            placeholder: "Type comments for booking...",
            onChange: (R) => g(R.target.value),
            rows: "2",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "updateActions",
        children: [
          f.jsx("button", { type: "submit", children: "Update booking" }),
          f.jsx("button", {
            id: "cancelUpdate",
            type: "button",
            children: "Cancel",
          }),
        ],
      }),
    ],
  });
}
function yw() {
  const { id: e } = Eu(),
    [t, n] = k.useState({}),
    [r, o] = k.useState(""),
    [l, i] = k.useState(!0);
  return (
    k.useEffect(() => {
      i(!0),
        (async () => {
          try {
            const s = await wn.getById(e);
            n(s);
          } catch (s) {
            o(s.response.data);
          } finally {
            i(!1);
          }
        })();
    }, [e]),
    l
      ? f.jsx("div", { className: "loading", children: "Loading..." })
      : r
        ? f.jsx("div", { style: { color: "red" }, children: r })
        : f.jsxs("div", {
            className: "updateBookingPage",
            children: [
              f.jsx("h1", { children: "Update booking" }),
              f.jsx(gw, { booking: t, id: e }),
            ],
          })
  );
}
function vw({ bookings: e, setBookings: t, rooms: n }) {
  const [r, o] = k.useState(null),
    [l, i] = k.useState([]),
    [a, s] = k.useState(""),
    u = bt();
  k.useEffect(() => {
    l.length > 0 && s(l[0].id);
  }, [l]);
  const c = async (g) => {
      try {
        await wn.remove(g),
          t((v) => v.filter((S) => S.id !== g)),
          window.alert("Booking deleted succesfully.");
      } catch (v) {
        window.alert(v.response.data);
      }
    },
    d = async (g) => {
      const v = { ...g, status: "confirmed", roomId: a };
      try {
        await wn.update(g.id, v);
        const S = e.map((E) => (E.id === g.id ? v : E));
        t(S), window.alert("Booking confirmed succesfully."), o(null);
      } catch (S) {
        window.alert(S.response.data);
      }
    },
    h = async (g) => {
      o(g.id);
      const v = n.filter(
        (S) => S.location === g.location && S.category === g.category,
      );
      v.length < 1 &&
        (window.confirm(
          `No available rooms for location ${g.location} and category ${g.category}. Would you like to delete this booking?`,
        ) && c(g.id),
        o(null)),
        i(v);
    };
  return e && e.length < 1
    ? f.jsx("p", { children: "No bookings found." })
    : f.jsx("ul", {
        className: "bookingsList",
        children: e.map((g) =>
          f.jsx(
            "div",
            {
              children: f.jsxs("li", {
                className: "bookingsListItemContainer",
                children: [
                  f.jsxs("div", {
                    className: "bookingsListItem",
                    children: [
                      f.jsxs("div", {
                        className: "bookingsListItemContent",
                        children: [
                          g.roomId
                            ? f.jsxs(dh, {
                                to: `/rooms/${g.roomId}`,
                                children: ["Room ID: ", g.roomId],
                              })
                            : f.jsx("a", { children: "General booking" }),
                          f.jsxs("div", {
                            className: "bookingsListItemDetails",
                            children: [
                              f.jsxs("div", {
                                className: "bookingsListItemRoomInfo",
                                children: [
                                  f.jsxs("p", {
                                    children: ["Location: ", g.location],
                                  }),
                                  f.jsxs("p", {
                                    children: ["Category: ", g.category],
                                  }),
                                  f.jsxs("p", {
                                    children: [
                                      "From ",
                                      g.startDate,
                                      " to ",
                                      g.endDate,
                                    ],
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "bookingsListItemCustomerInfo",
                                children: [
                                  f.jsxs("p", { children: ["Name: ", g.name] }),
                                  f.jsxs("p", {
                                    children: ["Email: ", g.email],
                                  }),
                                  f.jsxs("p", {
                                    children: ["Phone: ", g.phoneNumber],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g.comments &&
                            f.jsxs("p", {
                              children: ['Comment: "', g.comments, '"'],
                            }),
                          f.jsxs("div", {
                            className: "bookingStatus",
                            children: [
                              f.jsx("p", { children: "Status:" }),
                              f.jsx("p", {
                                id: "statusState",
                                style: {
                                  color: `${g.status === "pending" ? "red" : "green"}`,
                                },
                                children: g.status.toUpperCase(),
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "managementActions",
                        children: [
                          g.status === "pending" &&
                            !r &&
                            f.jsx("button", {
                              onClick: () => h(g),
                              style: { backgroundColor: "#0D8947" },
                              children: "Confirm",
                            }),
                          f.jsx("button", {
                            onClick: () => u(`${g.id}`),
                            children: "Update",
                          }),
                          f.jsx("button", {
                            onClick: () => c(g.id),
                            style: { backgroundColor: "red" },
                            children: "Delete",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r === g.id &&
                    f.jsxs(f.Fragment, {
                      children: [
                        f.jsx("hr", {}),
                        f.jsx("h2", {
                          style: {
                            margin: "1rem",
                            marginBottom: 0,
                            fontSize: "1.2rem",
                          },
                          children: "Confirm booking",
                        }),
                        f.jsx("div", {
                          className: "confirmBooking",
                          children: f.jsxs("div", {
                            children: [
                              f.jsxs("p", {
                                children: [
                                  "Select available room with location ",
                                  g.location,
                                  " and category ",
                                  g.category,
                                ],
                              }),
                              f.jsxs("div", {
                                className: "confirmActions",
                                children: [
                                  f.jsx("select", {
                                    onChange: (v) => s(v.target.value),
                                    value: a,
                                    children: l.map((v) =>
                                      f.jsx("option", { children: v.id }, v.id),
                                    ),
                                  }),
                                  f.jsxs("div", {
                                    style: { display: "flex", gap: "0.5rem" },
                                    children: [
                                      f.jsx("button", {
                                        style: { backgroundColor: "#0D8947" },
                                        onClick: () => d(g),
                                        children: "Confirm",
                                      }),
                                      f.jsx("button", {
                                        onClick: () => o(null),
                                        style: { backgroundColor: "red" },
                                        children: "Cancel",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            },
            g.id,
          ),
        ),
      });
}
function ww() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState([]),
    [o, l] = k.useState(""),
    [i, a] = k.useState(!0);
  return (
    k.useEffect(() => {
      a(!0),
        (async () => {
          try {
            const u = await Wt.getAll();
            t(u || []);
          } catch (u) {
            l(u.response.data);
          } finally {
            a(!1);
          }
        })();
    }, []),
    k.useEffect(() => {
      a(!0),
        (async () => {
          try {
            const u = await wn.getAll();
            r(u || []);
          } catch (u) {
            l(u.response.data);
          } finally {
            a(!1);
          }
        })();
    }, []),
    i
      ? f.jsx("div", { className: "loading", children: "Loading..." })
      : o
        ? f.jsx("div", { style: { color: "red" }, children: o })
        : f.jsxs("div", {
            className: "bookingsPage",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsx("h2", { children: "Bookings" }),
                  f.jsx("p", {
                    children: "Update, confirm and delete bookings",
                  }),
                  f.jsx(vw, { bookings: n, setBookings: r, rooms: e }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsx("h2", { children: "Book a room" }),
                  f.jsx("p", {
                    children:
                      "Make a general booking for a room in any location and category",
                  }),
                  f.jsx(Nu, { rooms: e, bookings: n, setBookings: r }),
                ],
              }),
            ],
          })
  );
}
function Sw() {
  return f.jsxs("div", {
    className: "loginPage",
    children: [
      f.jsx("h1", { children: "Create new staff account" }),
      f.jsx(Ih, {}),
    ],
  });
}
const xw = Xv(
  [
    {
      path: "/",
      element: f.jsx(dw, {}),
      children: [
        { path: "/", element: f.jsx(Dd, {}) },
        { path: "/rooms/:id", element: f.jsx(rw, {}) },
        { path: "/login", element: f.jsx(mw, {}) },
        {
          path: "/bookings",
          element: f.jsx(Yr, {
            roles: ["Admin", "Staff"],
            children: f.jsx(ww, {}),
          }),
        },
        {
          path: "/bookings/:id",
          element: f.jsx(Yr, {
            roles: ["Admin", "Staff"],
            children: f.jsx(yw, {}),
          }),
        },
        {
          path: "/rooms",
          element: f.jsx(Yr, {
            roles: ["Admin", "Staff"],
            children: f.jsx(Dd, {}),
          }),
        },
        {
          path: "/rooms/update/:id",
          element: f.jsx(Yr, { roles: ["Admin"], children: f.jsx(pw, {}) }),
        },
        {
          path: "/staff/new",
          element: f.jsx(Yr, { roles: ["Admin"], children: f.jsx(Sw, {}) }),
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: !0,
      v7_normalizeFormMethod: !0,
      v7_partialHydration: !0,
      v7_relativeSplatPath: !0,
      v7_skipActionErrorRevalidation: !0,
      v7_startTransition: !0,
    },
  },
);
qp(document.getElementById("root")).render(
  f.jsx(o0, { router: xw, future: { v7_startTransition: !0 } }),
);
