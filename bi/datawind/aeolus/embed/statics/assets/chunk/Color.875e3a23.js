var t = {
  exports: {},
};
!(function (t) {
  var e = Object.prototype.hasOwnProperty,
    s = "~";
  function r() {}
  function n(t, e, s) {
    (this.fn = t), (this.context = e), (this.once = s || !1);
  }
  function i(t, e, r, i, o) {
    if ("function" != typeof r)
      throw new TypeError("The listener must be a function");
    var a = new n(r, i || t, o),
      h = s ? s + e : e;
    return (
      t._events[h]
        ? t._events[h].fn
          ? (t._events[h] = [t._events[h], a])
          : t._events[h].push(a)
        : ((t._events[h] = a), t._eventsCount++),
      t
    );
  }
  function o(t, e) {
    0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
  }
  function a() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (s = !1)),
    (a.prototype.eventNames = function () {
      var t,
        r,
        n = [];
      if (0 === this._eventsCount) return n;
      for (r in (t = this._events)) e.call(t, r) && n.push(s ? r.slice(1) : r);
      return Object.getOwnPropertySymbols
        ? n.concat(Object.getOwnPropertySymbols(t))
        : n;
    }),
    (a.prototype.listeners = function (t) {
      var e = s ? s + t : t,
        r = this._events[e];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var n = 0, i = r.length, o = new Array(i); n < i; n++)
        o[n] = r[n].fn;
      return o;
    }),
    (a.prototype.listenerCount = function (t) {
      var e = s ? s + t : t,
        r = this._events[e];
      return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (a.prototype.emit = function (t, e, r, n, i, o) {
      var a = s ? s + t : t;
      if (!this._events[a]) return !1;
      var h,
        c,
        l = this._events[a],
        u = arguments.length;
      if (l.fn) {
        switch ((l.once && this.removeListener(t, l.fn, void 0, !0), u)) {
          case 1:
            return l.fn.call(l.context), !0;
          case 2:
            return l.fn.call(l.context, e), !0;
          case 3:
            return l.fn.call(l.context, e, r), !0;
          case 4:
            return l.fn.call(l.context, e, r, n), !0;
          case 5:
            return l.fn.call(l.context, e, r, n, i), !0;
          case 6:
            return l.fn.call(l.context, e, r, n, i, o), !0;
        }
        for (c = 1, h = new Array(u - 1); c < u; c++) h[c - 1] = arguments[c];
        l.fn.apply(l.context, h);
      } else {
        var y,
          x = l.length;
        for (c = 0; c < x; c++)
          switch (
            (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), u)
          ) {
            case 1:
              l[c].fn.call(l[c].context);
              break;
            case 2:
              l[c].fn.call(l[c].context, e);
              break;
            case 3:
              l[c].fn.call(l[c].context, e, r);
              break;
            case 4:
              l[c].fn.call(l[c].context, e, r, n);
              break;
            default:
              if (!h)
                for (y = 1, h = new Array(u - 1); y < u; y++)
                  h[y - 1] = arguments[y];
              l[c].fn.apply(l[c].context, h);
          }
      }
      return !0;
    }),
    (a.prototype.on = function (t, e, s) {
      return i(this, t, e, s, !1);
    }),
    (a.prototype.once = function (t, e, s) {
      return i(this, t, e, s, !0);
    }),
    (a.prototype.removeListener = function (t, e, r, n) {
      var i = s ? s + t : t;
      if (!this._events[i]) return this;
      if (!e) return o(this, i), this;
      var a = this._events[i];
      if (a.fn)
        a.fn !== e || (n && !a.once) || (r && a.context !== r) || o(this, i);
      else {
        for (var h = 0, c = [], l = a.length; h < l; h++)
          (a[h].fn !== e || (n && !a[h].once) || (r && a[h].context !== r)) &&
            c.push(a[h]);
        c.length ? (this._events[i] = 1 === c.length ? c[0] : c) : o(this, i);
      }
      return this;
    }),
    (a.prototype.removeAllListeners = function (t) {
      var e;
      return (
        t
          ? ((e = s ? s + t : t), this._events[e] && o(this, e))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = s),
    (a.EventEmitter = a),
    (t.exports = a);
})(t);
const e = t.exports,
  s = (t, e) => Object.prototype.toString.call(t) === `[object ${e}]`,
  r = (t, e = !1) =>
    e ? "boolean" == typeof t : !0 === t || !1 === t || s(t, "Boolean"),
  n = (t) => "function" == typeof t,
  i = (t) => null == t,
  o = (t) => null != t,
  a = (t) => {
    const e = typeof t;
    return (null !== t && "object" === e) || "function" === e;
  },
  h = (t, e = !1) => {
    const r = typeof t;
    return e ? "string" === r : "string" === r || s(t, "String");
  },
  c = (t) => (Array.isArray ? Array.isArray(t) : s(t, "Array")),
  l = (t, e = !1) => {
    const r = typeof t;
    return e ? "number" === r : "number" === r || s(t, "Number");
  },
  u = (t) => new RegExp(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/).test(t),
  y = (t) =>
    new RegExp(
      /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g
    ).test(t),
  x = Object.prototype.hasOwnProperty,
  f = (t, e) => null != t && x.call(t, e),
  g = "undefined" != typeof console;
function d(t, e, s) {
  const r = [e].concat([].slice.call(s));
  g && console[t].apply(console, r);
}
var b, p;
((p = b || (b = {}))[(p.None = 0)] = "None"),
  (p[(p.Error = 1)] = "Error"),
  (p[(p.Warn = 2)] = "Warn"),
  (p[(p.Info = 3)] = "Info"),
  (p[(p.Debug = 4)] = "Debug");
class m {
  static getInstance(t, e) {
    return (
      m._instance && l(t)
        ? m._instance.level(t)
        : m._instance || (m._instance = new m(t, e)),
      m._instance
    );
  }
  static setInstance(t) {
    return (m._instance = t);
  }
  static setInstanceLevel(t) {
    m._instance ? m._instance.level(t) : (m._instance = new m(t));
  }
  static clearInstance() {
    m._instance = null;
  }
  constructor(t = b.None, e) {
    (this._onErrorHandler = []), (this._level = t), (this._method = e);
  }
  addErrorHandler(t) {
    this._onErrorHandler.find((e) => e === t) || this._onErrorHandler.push(t);
  }
  removeErrorHandler(t) {
    const e = this._onErrorHandler.findIndex((e) => e === t);
    e < 0 || this._onErrorHandler.splice(e, 1);
  }
  callErrorHandler(...t) {
    this._onErrorHandler.forEach((e) => e(...t));
  }
  canLogInfo() {
    return this._level >= b.Info;
  }
  canLogDebug() {
    return this._level >= b.Debug;
  }
  canLogError() {
    return this._level >= b.Error;
  }
  canLogWarn() {
    return this._level >= b.Warn;
  }
  level(t) {
    return arguments.length ? ((this._level = +t), this) : this._level;
  }
  error(...t) {
    var e;
    return (
      this._level >= b.Error &&
        (this._onErrorHandler.length
          ? this.callErrorHandler(...t)
          : d(
              null !== (e = this._method) && void 0 !== e ? e : "error",
              "ERROR",
              t
            )),
      this
    );
  }
  warn(...t) {
    return this._level >= b.Warn && d(this._method || "warn", "WARN", t), this;
  }
  info(...t) {
    return this._level >= b.Info && d(this._method || "log", "INFO", t), this;
  }
  debug(...t) {
    return this._level >= b.Debug && d(this._method || "log", "DEBUG", t), this;
  }
}
m._instance = null;
const M = function (t, e, s) {
    return t < e ? e : t > s ? s : t;
  },
  v = 1e-12,
  w = Math.PI,
  _ = w / 2,
  L = 2 * w,
  k = 2 * Math.PI,
  I = Math.abs,
  E = Math.atan2,
  P = Math.cos,
  A = Math.max,
  B = Math.min,
  N = Math.sin,
  S = Math.sqrt,
  H = Math.pow;
function O(t) {
  return t > 1 ? 0 : t < -1 ? w : Math.acos(t);
}
function R(t) {
  return t >= 1 ? _ : t <= -1 ? -_ : Math.asin(t);
}
function T(t, e, s, r, n) {
  let i = s,
    o = r;
  return (
    "number" == typeof t && "number" == typeof s && (i = (1 - n) * t + n * s),
    "number" == typeof e && "number" == typeof r && (o = (1 - n) * e + n * r),
    {
      x: i,
      y: o,
    }
  );
}
function G(t, e) {
  return t[0] * e[1] - t[1] * e[0];
}
function X(t, e = 10) {
  return Math.round(t * e) / e;
}
function V(t) {
  const e = t.toString().split(/[eE]/),
    s = (e[0].split(".")[1] || "").length - (+e[1] || 0);
  return s > 0 ? s : 0;
}
function $(t, e) {
  return X(t + e, 10 ** Math.max(V(t), V(e)));
}
function q(t, e) {
  return X(t - e, 10 ** Math.max(V(t), V(e)));
}
class C {
  constructor(t = 0, e = 0, s, r) {
    (this.x = 0),
      (this.y = 0),
      (this.x = t),
      (this.y = e),
      (this.x1 = s),
      (this.y1 = r);
  }
  clone() {
    return new C(this.x, this.y);
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.x1 = t.x1),
      (this.y1 = t.y1),
      (this.defined = t.defined),
      (this.context = t.context),
      this
    );
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  add(t) {
    return l(t)
      ? ((this.x += t), void (this.y += t))
      : ((this.x += t.x), (this.y += t.y), this);
  }
  sub(t) {
    return l(t)
      ? ((this.x -= t), void (this.y -= t))
      : ((this.x -= t.x), (this.y -= t.y), this);
  }
  multi(t) {
    throw new Error("暂不支持");
  }
  div(t) {
    throw new Error("暂不支持");
  }
}
class j {
  static distancePP(t, e) {
    return S(H(t.x - e.x, 2) + H(t.y - e.y, 2));
  }
  static distanceNN(t, e, s, r) {
    return S(H(t - s, 2) + H(e - r, 2));
  }
  static distancePN(t, e, s) {
    return S(H(e - t.x, 2) + H(s - t.y, 2));
  }
  static pointAtPP(t, e, s) {
    return new C((e.x - t.x) * s + t.x, (e.y - t.y) * s + t.y);
  }
}
function D(t) {
  return t * (Math.PI / 180);
}
function W(t) {
  return (180 * t) / Math.PI;
}
const U = (t = 0) => {
    if (t < 0) for (; t < -L; ) t += L;
    else if (t > 0) for (; t > L; ) t -= L;
    return t;
  },
  F = U;
function Y(t, e, s) {
  return e
    ? {
        x: t.x + e * Math.cos(s),
        y: t.y + e * Math.sin(s),
      }
    : {
        x: t.x,
        y: t.y,
      };
}
function z(
  t,
  e = {
    x: 0,
    y: 0,
  },
  s = 0,
  r = 2 * Math.PI
) {
  const { x: n, y: i } = t,
    { x: o, y: a } = e;
  let h = n - o,
    c = i - a;
  const l = Math.sqrt(h * h + c * c);
  if (0 === l)
    return {
      radius: 0,
      angle: 0,
    };
  (h /= l), (c /= l);
  let u = Math.atan2(c, h);
  if (u < s) for (; u <= s; ) u += 2 * Math.PI;
  if (u > r) for (; u >= r; ) u -= 2 * Math.PI;
  return {
    radius: l,
    angle: u,
  };
}
function Z(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function J(t) {
  for (; t < 0; ) t += 2 * Math.PI;
  for (; t >= 2 * Math.PI; ) t -= 2 * Math.PI;
  return t;
}
function K(t, e, s, r) {
  const { x: n, y: i } = e,
    o = (function (t, e) {
      const s = Math.abs(e - t);
      if (s >= 2 * Math.PI || 2 * Math.PI - s < 1e-6)
        return [0, Math.PI / 2, Math.PI, 1.5 * Math.PI];
      const r = J(Math.min(t, e)),
        n = r + s,
        i = [r, n];
      let o = (Math.floor(r / Math.PI) * Math.PI) / 2;
      for (; o < n; ) o > r && i.push(o), (o += Math.PI / 2);
      return i;
    })(s, r),
    { width: a, height: h } = t,
    c = [];
  return (
    o.forEach((t) => {
      const e = Math.sin(t),
        s = Math.cos(t);
      1 === e
        ? c.push(h - i)
        : -1 === e
        ? c.push(i)
        : 1 === s
        ? c.push(a - n)
        : -1 === s
        ? c.push(n)
        : (e > 0 ? c.push(Math.abs((h - i) / e)) : c.push(Math.abs(i / e)),
          s > 0 ? c.push(Math.abs((a - n) / s)) : c.push(Math.abs(n / s)));
    }),
    Math.min.apply(null, c)
  );
}
function Q(t) {
  return (t = J(t)) > 0 && t <= Math.PI / 2
    ? 2
    : t > Math.PI / 2 && t <= Math.PI
    ? 3
    : t > Math.PI && t <= (3 * Math.PI) / 2
    ? 4
    : 1;
}
function tt(t, e, s) {
  (t[0] = e[0] - s[0]), (t[1] = e[1] - s[1]);
}
function et(t, e, s, r) {
  let n = t[0],
    i = e[0],
    o = s[0],
    a = r[0];
  return (
    i < n && ([n, i] = [i, n]),
    a < o && ([a, o] = [o, a]),
    !(
      i < o ||
      a < n ||
      ((n = t[1]),
      (i = e[1]),
      (o = s[1]),
      (a = r[1]),
      i < n && ([n, i] = [i, n]),
      a < o && ([a, o] = [o, a]),
      i < o || a < n)
    )
  );
}
function st(t, e, s, r) {
  if (!et(t, e, s, r)) return !1;
  const n = [0, 0],
    i = [0, 0],
    o = [0, 0];
  if (
    (tt(n, e, t),
    tt(i, r, s),
    I((a = n)[0] - (h = i)[0]) + I(a[1] - h[1]) < 1e-12)
  )
    return !0;
  var a, h;
  tt(o, s, t);
  const c = G(o, i) / G(n, i);
  return c >= 0 && c <= 1 && [t[0] + n[0] * c, t[1] + n[1] * c];
}
function rt(t, e, s) {
  if (null === t) return e;
  if (null === e) return t;
  const {
    x11: r,
    x12: n,
    y11: i,
    y12: o,
    x21: a,
    x22: h,
    y21: c,
    y22: l,
  } = ot(t, e, s);
  return r >= h || n <= a || i >= l || o <= c
    ? {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      }
    : {
        x1: Math.max(r, a),
        y1: Math.max(i, c),
        x2: Math.min(n, h),
        y2: Math.min(o, l),
      };
}
var nt, it;
((it = nt || (nt = {}))[(it.NONE = 0)] = "NONE"),
  (it[(it.BBOX1 = 1)] = "BBOX1"),
  (it[(it.BBOX2 = 2)] = "BBOX2");
const ot = (t, e, s) => {
  let r = t.x1,
    n = t.x2,
    i = t.y1,
    o = t.y2,
    a = e.x1,
    h = e.x2,
    c = e.y1,
    l = e.y2;
  return (
    s &&
      (r > n && ([r, n] = [n, r]),
      i > o && ([i, o] = [o, i]),
      a > h && ([a, h] = [h, a]),
      c > l && ([c, l] = [l, c])),
    {
      x11: r,
      x12: n,
      y11: i,
      y12: o,
      x21: a,
      x22: h,
      y21: c,
      y22: l,
    }
  );
};
function at(t, e, s) {
  if (!t || !e) return nt.NONE;
  const {
    x11: r,
    x12: n,
    y11: i,
    y12: o,
    x21: a,
    x22: h,
    y21: c,
    y22: l,
  } = ot(t, e, s);
  return r > a && n < h && i > c && o < l
    ? nt.BBOX1
    : a > r && h < n && c > i && l < o
    ? nt.BBOX2
    : nt.NONE;
}
function ht(t, e, s) {
  if (t && e) {
    if (!s) return !(t.x1 > e.x2 || t.x2 < e.x1 || t.y1 > e.y2 || t.y2 < e.y1);
    const {
      x11: r,
      x12: n,
      y11: i,
      y12: o,
      x21: a,
      x22: h,
      y21: c,
      y22: l,
    } = ot(t, e, !0);
    return !(r > h || n < a || i > l || o < c);
  }
  return !0;
}
function ct(t, e, s) {
  if (!e) return !0;
  if (!s) return t.x >= e.x1 && t.x <= e.x2 && t.y >= e.y1 && t.y <= e.y2;
  let r = e.x1,
    n = e.x2,
    i = e.y1,
    o = e.y2;
  return (
    r > n && ([r, n] = [n, r]),
    i > o && ([i, o] = [o, i]),
    t.x >= r && t.x <= n && t.y >= i && t.y <= o
  );
}
function lt(t, e) {
  return Math.abs(e[0] * t[0] + e[1] * t[1]);
}
function ut(
  { x: t, y: e },
  s,
  r = {
    x: 0,
    y: 0,
  }
) {
  return {
    x: (t - r.x) * Math.cos(s) - (e - r.y) * Math.sin(s) + r.x,
    y: (t - r.x) * Math.sin(s) + (e - r.y) * Math.cos(s) + r.y,
  };
}
function yt(t) {
  return {
    x: (t.x1 + t.x2) / 2,
    y: (t.y1 + t.y2) / 2,
  };
}
function xt(t, e) {
  const s = e ? D(t.angle) : t.angle,
    r = yt(t);
  return [
    ut(
      {
        x: t.x1,
        y: t.y1,
      },
      s,
      r
    ),
    ut(
      {
        x: t.x2,
        y: t.y1,
      },
      s,
      r
    ),
    ut(
      {
        x: t.x2,
        y: t.y2,
      },
      s,
      r
    ),
    ut(
      {
        x: t.x1,
        y: t.y2,
      },
      s,
      r
    ),
  ];
}
function ft(t, e, s = !1, r) {
  const n = xt(t, s),
    i = xt(e, s),
    o = (t, e) => [e.x - t.x, e.y - t.y];
  r &&
    (r.save(),
    (r.fillStyle = "red"),
    (r.globalAlpha = 0.6),
    n.forEach((t, e) => {
      0 === e ? r.moveTo(t.x, t.y) : r.lineTo(t.x, t.y);
    }),
    r.fill(),
    r.restore(),
    r.save(),
    (r.fillStyle = "green"),
    (r.globalAlpha = 0.6),
    i.forEach((t, e) => {
      0 === e ? r.moveTo(t.x, t.y) : r.lineTo(t.x, t.y);
    }),
    r.fill(),
    r.restore());
  const a = yt(t),
    h = yt(e);
  r && r.fillRect(a.x, a.y, 2, 2), r && r.fillRect(h.x, h.y, 2, 2);
  const c = o(a, h),
    l = o(n[0], n[1]),
    u = o(n[1], n[2]),
    y = o(i[0], i[1]),
    x = o(i[1], i[2]),
    f = s ? D(t.angle) : t.angle;
  let g = s ? D(90 - t.angle) : t.angle + _;
  const d = s ? D(e.angle) : e.angle;
  let b = s ? D(90 - e.angle) : e.angle + _;
  g > k && (g -= k), b > k && (b -= k);
  const p = (t, e, s, r) => {
    const n = [Math.cos(e), Math.sin(e)];
    return t + (lt(n, s) + lt(n, r)) / 2 > lt(n, c);
  };
  return (
    p((t.x2 - t.x1) / 2, f, y, x) &&
    p((t.y2 - t.y1) / 2, g, y, x) &&
    p((e.x2 - e.x1) / 2, d, l, u) &&
    p((e.y2 - e.y1) / 2, b, l, u)
  );
}
function gt(t, e = {}, s) {
  s || (s = 1);
  const {
    fontStyle: r = e.fontStyle,
    fontVariant: n = e.fontVariant,
    fontWeight: i = e.fontWeight,
    fontSize: o = e.fontSize,
    fontFamily: a = e.fontFamily,
  } = t;
  return (
    (r ? r + " " : "") +
    (n ? n + " " : "") +
    (i ? i + " " : "") +
    o * s +
    "px " +
    (a || "sans-serif")
  );
}
function dt(t, e, s) {
  const { x1: r, y1: n, x2: i, y2: o } = e;
  return s.onlyTranslate()
    ? (t !== e && t.setValue(e.x1, e.y1, e.x2, e.y2), t.translate(s.e, s.f), e)
    : (t.clear(),
      t.add(s.a * r + s.c * n + s.e, s.b * r + s.d * n + s.f),
      t.add(s.a * i + s.c * n + s.e, s.b * i + s.d * n + s.f),
      t.add(s.a * i + s.c * o + s.e, s.b * i + s.d * o + s.f),
      t.add(s.a * r + s.c * o + s.e, s.b * r + s.d * o + s.f),
      e);
}
class bt {
  constructor(t) {
    t ? this.setValue(t.x1, t.y1, t.x2, t.y2) : this.clear();
  }
  clone() {
    return new bt(this);
  }
  clear() {
    return (
      (this.x1 = +Number.MAX_VALUE),
      (this.y1 = +Number.MAX_VALUE),
      (this.x2 = -Number.MAX_VALUE),
      (this.y2 = -Number.MAX_VALUE),
      this
    );
  }
  empty() {
    return (
      this.x1 === +Number.MAX_VALUE &&
      this.y1 === +Number.MAX_VALUE &&
      this.x2 === -Number.MAX_VALUE &&
      this.y2 === -Number.MAX_VALUE
    );
  }
  equals(t) {
    return (
      this.x1 === t.x1 &&
      this.y1 === t.y1 &&
      this.x2 === t.x2 &&
      this.y2 === t.y2
    );
  }
  setValue(t = 0, e = 0, s = 0, r = 0) {
    return (this.x1 = t), (this.y1 = e), (this.x2 = s), (this.y2 = r), this;
  }
  set(t = 0, e = 0, s = 0, r = 0) {
    return (
      s < t ? ((this.x2 = t), (this.x1 = s)) : ((this.x1 = t), (this.x2 = s)),
      r < e ? ((this.y2 = e), (this.y1 = r)) : ((this.y1 = e), (this.y2 = r)),
      this
    );
  }
  add(t = 0, e = 0) {
    return (
      t < this.x1 && (this.x1 = t),
      e < this.y1 && (this.y1 = e),
      t > this.x2 && (this.x2 = t),
      e > this.y2 && (this.y2 = e),
      this
    );
  }
  expand(t = 0) {
    return (
      c(t)
        ? ((this.y1 -= t[0]),
          (this.x2 += t[1]),
          (this.y2 += t[2]),
          (this.x1 -= t[3]))
        : ((this.x1 -= t), (this.y1 -= t), (this.x2 += t), (this.y2 += t)),
      this
    );
  }
  round() {
    return (
      (this.x1 = Math.floor(this.x1)),
      (this.y1 = Math.floor(this.y1)),
      (this.x2 = Math.ceil(this.x2)),
      (this.y2 = Math.ceil(this.y2)),
      this
    );
  }
  translate(t = 0, e = 0) {
    return (this.x1 += t), (this.x2 += t), (this.y1 += e), (this.y2 += e), this;
  }
  rotate(t = 0, e = 0, s = 0) {
    const r = this.rotatedPoints(t, e, s);
    return this.clear()
      .add(r[0], r[1])
      .add(r[2], r[3])
      .add(r[4], r[5])
      .add(r[6], r[7]);
  }
  scale(t = 0, e = 0, s = 0, r = 0) {
    const n = this.scalePoints(t, e, s, r);
    return this.clear().add(n[0], n[1]).add(n[2], n[3]);
  }
  union(t) {
    return (
      t.x1 < this.x1 && (this.x1 = t.x1),
      t.y1 < this.y1 && (this.y1 = t.y1),
      t.x2 > this.x2 && (this.x2 = t.x2),
      t.y2 > this.y2 && (this.y2 = t.y2),
      this
    );
  }
  intersect(t) {
    return (
      t.x1 > this.x1 && (this.x1 = t.x1),
      t.y1 > this.y1 && (this.y1 = t.y1),
      t.x2 < this.x2 && (this.x2 = t.x2),
      t.y2 < this.y2 && (this.y2 = t.y2),
      this
    );
  }
  encloses(t) {
    return (
      t &&
      this.x1 <= t.x1 &&
      this.x2 >= t.x2 &&
      this.y1 <= t.y1 &&
      this.y2 >= t.y2
    );
  }
  alignsWith(t) {
    return (
      t &&
      (this.x1 === t.x1 ||
        this.x2 === t.x2 ||
        this.y1 === t.y1 ||
        this.y2 === t.y2)
    );
  }
  intersects(t) {
    return (
      t &&
      !(this.x2 < t.x1 || this.x1 > t.x2 || this.y2 < t.y1 || this.y1 > t.y2)
    );
  }
  contains(t = 0, e = 0) {
    return !(t < this.x1 || t > this.x2 || e < this.y1 || e > this.y2);
  }
  containsPoint(t) {
    return !(t.x < this.x1 || t.x > this.x2 || t.y < this.y1 || t.y > this.y2);
  }
  width() {
    return this.empty() ? 0 : this.x2 - this.x1;
  }
  height() {
    return this.empty() ? 0 : this.y2 - this.y1;
  }
  scaleX(t = 0) {
    return (this.x1 *= t), (this.x2 *= t), this;
  }
  scaleY(t = 0) {
    return (this.y1 *= t), (this.y2 *= t), this;
  }
  transformWithMatrix(t) {
    return dt(this, this, t), this;
  }
  copy(t) {
    return (
      (this.x1 = t.x1),
      (this.y1 = t.y1),
      (this.x2 = t.x2),
      (this.y2 = t.y2),
      this
    );
  }
  rotatedPoints(t, e, s) {
    const { x1: r, y1: n, x2: i, y2: o } = this,
      a = Math.cos(t),
      h = Math.sin(t),
      c = e - e * a + s * h,
      l = s - e * h - s * a;
    return [
      a * r - h * n + c,
      h * r + a * n + l,
      a * r - h * o + c,
      h * r + a * o + l,
      a * i - h * n + c,
      h * i + a * n + l,
      a * i - h * o + c,
      h * i + a * o + l,
    ];
  }
  scalePoints(t, e, s, r) {
    const { x1: n, y1: i, x2: o, y2: a } = this;
    return [
      t * n + (1 - t) * s,
      e * i + (1 - e) * r,
      t * o + (1 - t) * s,
      e * a + (1 - e) * r,
    ];
  }
}
class pt extends bt {}
class mt extends bt {
  constructor(t, e = 0) {
    super(t), t && (this.angle = e);
  }
  intersects(t) {
    return ft(this, t);
  }
  setValue(t = 0, e = 0, s = 0, r = 0, n = 0) {
    return super.setValue(t, e, s, r), (this.angle = n), this;
  }
}
class Mt {
  constructor(t = 1, e = 0, s = 0, r = 1, n = 0, i = 0) {
    (this.a = t),
      (this.b = e),
      (this.c = s),
      (this.d = r),
      (this.e = n),
      (this.f = i);
  }
  equalToMatrix(t) {
    return !(
      this.e !== t.e ||
      this.f !== t.f ||
      this.a !== t.a ||
      this.d !== t.d ||
      this.b !== t.b ||
      this.c !== t.c
    );
  }
  equalTo(t, e, s, r, n, i) {
    return !(
      this.e !== n ||
      this.f !== i ||
      this.a !== t ||
      this.d !== r ||
      this.b !== e ||
      this.c !== s
    );
  }
  setValue(t, e, s, r, n, i) {
    return (
      (this.a = t),
      (this.b = e),
      (this.c = s),
      (this.d = r),
      (this.e = n),
      (this.f = i),
      this
    );
  }
  reset() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.e = 0),
      (this.f = 0),
      this
    );
  }
  getInverse() {
    const t = this.a,
      e = this.b,
      s = this.c,
      r = this.d,
      n = this.e,
      i = this.f,
      o = new Mt(),
      a = t * r - e * s;
    return (
      (o.a = r / a),
      (o.b = -e / a),
      (o.c = -s / a),
      (o.d = t / a),
      (o.e = (s * i - r * n) / a),
      (o.f = -(t * i - e * n) / a),
      o
    );
  }
  rotate(t) {
    const e = Math.cos(t),
      s = Math.sin(t),
      r = this.a * e + this.c * s,
      n = this.b * e + this.d * s,
      i = this.a * -s + this.c * e,
      o = this.b * -s + this.d * e;
    return (this.a = r), (this.b = n), (this.c = i), (this.d = o), this;
  }
  rotateByCenter(t, e, s) {
    const r = Math.cos(t),
      n = Math.sin(t),
      i = (1 - r) * e + n * s,
      o = (1 - r) * s - n * e,
      a = r * this.a - n * this.b,
      h = n * this.a + r * this.b,
      c = r * this.c - n * this.d,
      l = n * this.c + r * this.d,
      u = r * this.e - n * this.f + i,
      y = n * this.e + r * this.f + o;
    return (
      (this.a = a),
      (this.b = h),
      (this.c = c),
      (this.d = l),
      (this.e = u),
      (this.f = y),
      this
    );
  }
  scale(t, e) {
    return (this.a *= t), (this.b *= t), (this.c *= e), (this.d *= e), this;
  }
  setScale(t, e) {
    return (
      (this.b = (this.b / this.a) * t),
      (this.c = (this.c / this.d) * e),
      (this.a = t),
      (this.d = e),
      this
    );
  }
  transform(t, e, s, r, n, i) {
    return this.multiply(t, e, s, r, n, i), this;
  }
  translate(t, e) {
    return (
      (this.e += this.a * t + this.c * e),
      (this.f += this.b * t + this.d * e),
      this
    );
  }
  transpose() {
    const { a: t, b: e, c: s, d: r, e: n, f: i } = this;
    return (
      (this.a = e),
      (this.b = t),
      (this.c = r),
      (this.d = s),
      (this.e = i),
      (this.f = n),
      this
    );
  }
  multiply(t, e, s, r, n, i) {
    const o = this.a,
      a = this.b,
      h = this.c,
      c = this.d,
      l = o * t + h * e,
      u = a * t + c * e,
      y = o * s + h * r,
      x = a * s + c * r,
      f = o * n + h * i + this.e,
      g = a * n + c * i + this.f;
    return (
      (this.a = l),
      (this.b = u),
      (this.c = y),
      (this.d = x),
      (this.e = f),
      (this.f = g),
      this
    );
  }
  interpolate(t, e) {
    const s = new Mt();
    return (
      (s.a = this.a + (t.a - this.a) * e),
      (s.b = this.b + (t.b - this.b) * e),
      (s.c = this.c + (t.c - this.c) * e),
      (s.d = this.d + (t.d - this.d) * e),
      (s.e = this.e + (t.e - this.e) * e),
      (s.f = this.f + (t.f - this.f) * e),
      s
    );
  }
  transformPoint(t, e) {
    const { a: s, b: r, c: n, d: i, e: o, f: a } = this,
      h = s * i - r * n,
      c = i / h,
      l = -r / h,
      u = -n / h,
      y = s / h,
      x = (n * a - i * o) / h,
      f = -(s * a - r * o) / h,
      { x: g, y: d } = t;
    (e.x = g * c + d * u + x), (e.y = g * l + d * y + f);
  }
  onlyTranslate(t = 1) {
    return this.a === t && 0 === this.b && 0 === this.c && this.d === t;
  }
  clone() {
    return new Mt(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  toTransformAttrs() {
    const t = this.a,
      e = this.b,
      s = this.c,
      r = this.d,
      n = t * r - e * s,
      i = {
        x: this.e,
        y: this.f,
        rotateDeg: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0,
      };
    if (0 !== t || 0 !== e) {
      const o = Math.sqrt(t * t + e * e);
      (i.rotateDeg = e > 0 ? Math.acos(t / o) : -Math.acos(t / o)),
        (i.scaleX = o),
        (i.scaleY = n / o),
        (i.skewX = (t * s + e * r) / n),
        (i.skewY = 0);
    } else if (0 !== s || 0 !== r) {
      const o = Math.sqrt(s * s + r * r);
      (i.rotateDeg =
        Math.PI / 2 - (r > 0 ? Math.acos(-s / o) : -Math.acos(s / o))),
        (i.scaleX = n / o),
        (i.scaleY = o),
        (i.skewX = 0),
        (i.skewY = (t * s + e * r) / n);
    }
    return (i.rotateDeg = W(i.rotateDeg)), i;
  }
}
function vt(t, e, s, r, n, i, o, a) {
  const h = e.a,
    c = e.b,
    l = e.c,
    u = e.d,
    y = e.e,
    x = e.f,
    f = P(o),
    g = N(o);
  let d, b;
  a ? ((d = a[0]), (b = a[1])) : ((d = s), (b = r));
  const p = d - s,
    m = b - r,
    M = h * f + l * g,
    v = c * f + u * g,
    w = l * f - h * g,
    _ = u * f - c * g;
  (t.a = n * M),
    (t.b = n * v),
    (t.c = i * w),
    (t.d = i * _),
    (t.e = y + h * d + l * b - M * p - w * m),
    (t.f = x + c * d + u * b - v * p - _ * m);
}
function wt(t, e, s) {
  (e /= 100), (s /= 100);
  const r = (1 - Math.abs(2 * s - 1)) * e,
    n = r * (1 - Math.abs(((t / 60) % 2) - 1)),
    i = s - r / 2;
  let o = 0,
    a = 0,
    h = 0;
  return (
    0 <= t && t < 60
      ? ((o = r), (a = n), (h = 0))
      : 60 <= t && t < 120
      ? ((o = n), (a = r), (h = 0))
      : 120 <= t && t < 180
      ? ((o = 0), (a = r), (h = n))
      : 180 <= t && t < 240
      ? ((o = 0), (a = n), (h = r))
      : 240 <= t && t < 300
      ? ((o = n), (a = 0), (h = r))
      : 300 <= t && t < 360 && ((o = r), (a = 0), (h = n)),
    (o = Math.round(255 * (o + i))),
    (a = Math.round(255 * (a + i))),
    (h = Math.round(255 * (h + i))),
    {
      r: o,
      g: a,
      b: h,
    }
  );
}
function _t(t, e, s) {
  (t /= 255), (e /= 255), (s /= 255);
  const r = Math.min(t, e, s),
    n = Math.max(t, e, s),
    i = n - r;
  let o = 0,
    a = 0,
    h = 0;
  return (
    (o =
      0 === i
        ? 0
        : n === t
        ? ((e - s) / i) % 6
        : n === e
        ? (s - t) / i + 2
        : (t - e) / i + 4),
    (o = Math.round(60 * o)),
    o < 0 && (o += 360),
    (h = (n + r) / 2),
    (a = 0 === i ? 0 : i / (1 - Math.abs(2 * h - 1))),
    (a = +(100 * a).toFixed(1)),
    (h = +(100 * h).toFixed(1)),
    {
      h: o,
      s: a,
      l: h,
    }
  );
}
const Lt = /^#([0-9a-f]{3,8})$/,
  kt = {
    transparent: 4294967040,
  },
  It = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function Et(t) {
  return (
    ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
    t.toString(16)
  );
}
function Pt(t) {
  return l(t)
    ? new Ht(t >> 16, (t >> 8) & 255, 255 & t, 1)
    : c(t)
    ? new Ht(t[0], t[1], t[2])
    : new Ht(255, 255, 255);
}
function At(t) {
  return t < 0.04045
    ? 0.0773993808 * t
    : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
}
function Bt(t) {
  return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
}
const Nt = (t, e) => {
  const s = Lt.exec(t);
  if (e || s) {
    const t = parseInt(s[1], 16),
      e = s[1].length;
    return 3 === e
      ? new Ht(
          ((t >> 8) & 15) + (((t >> 8) & 15) << 4),
          ((t >> 4) & 15) + (((t >> 4) & 15) << 4),
          (15 & t) + ((15 & t) << 4),
          1
        )
      : 6 === e
      ? Pt(t)
      : 8 === e
      ? new Ht(
          (t >> 24) & 255,
          (t >> 16) & 255,
          (t >> 8) & 255,
          (255 & t) / 255
        )
      : null;
  }
};
class St {
  static Brighter(t, e = 1) {
    return 1 === e ? t : new St(t).brighter(e).toRGBA();
  }
  static SetOpacity(t, e = 1) {
    return 1 === e ? t : new St(t).setOpacity(e).toRGBA();
  }
  static getColorBrightness(t, e = "hsl") {
    const s = t instanceof St ? t : new St(t);
    switch (e) {
      case "hsv":
      default:
        return s.getHSVBrightness();
      case "hsl":
        return s.getHSLBrightness();
      case "lum":
        return s.getLuminance();
      case "lum2":
        return s.getLuminance2();
      case "lum3":
        return s.getLuminance3();
    }
  }
  static parseColorString(t) {
    if (o(kt[t]))
      return (function (t) {
        return l(t)
          ? new Ht(t >>> 24, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t)
          : c(t)
          ? new Ht(t[0], t[1], t[2], t[3])
          : new Ht(255, 255, 255, 1);
      })(kt[t]);
    if (o(It[t])) return Pt(It[t]);
    const e = `${t}`.trim().toLowerCase(),
      s = Nt(e);
    if (void 0 !== s) return s;
    if (/^(rgb|RGB|rgba|RGBA)/.test(e)) {
      const t = e.replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g, "").split(",");
      return new Ht(
        parseInt(t[0], 10),
        parseInt(t[1], 10),
        parseInt(t[2], 10),
        parseFloat(t[3])
      );
    }
    if (/^(hsl|HSL|hsla|HSLA)/.test(e)) {
      const t = e.replace(/(?:\(|\)|hsla|HSLA|hsl|HSL)*/g, "").split(","),
        s = wt(parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10));
      return new Ht(s.r, s.g, s.b, parseFloat(t[3]));
    }
  }
  constructor(t) {
    const e = St.parseColorString(t);
    this.color = e || new Ht(255, 255, 255);
  }
  toRGBA() {
    return this.color.formatRgb();
  }
  toString() {
    return this.color.formatRgb();
  }
  toHex() {
    return this.color.formatHex();
  }
  toHsl() {
    return this.color.formatHsl();
  }
  brighter(t) {
    const { r: e, g: s, b: r } = this.color;
    return (
      (this.color.r = Math.max(0, Math.min(255, Math.floor(e * t)))),
      (this.color.g = Math.max(0, Math.min(255, Math.floor(s * t)))),
      (this.color.b = Math.max(0, Math.min(255, Math.floor(r * t)))),
      this
    );
  }
  add(t) {
    const { r: e, g: s, b: r } = this.color;
    return (
      (this.color.r += Math.min(255, e + t.color.r)),
      (this.color.g += Math.min(255, s + t.color.g)),
      (this.color.b += Math.min(255, r + t.color.b)),
      this
    );
  }
  sub(t) {
    return (
      (this.color.r = Math.max(0, this.color.r - t.color.r)),
      (this.color.g = Math.max(0, this.color.g - t.color.g)),
      (this.color.b = Math.max(0, this.color.b - t.color.b)),
      this
    );
  }
  multiply(t) {
    const { r: e, g: s, b: r } = this.color;
    return (
      (this.color.r = Math.max(0, Math.min(255, Math.floor(e * t.color.r)))),
      (this.color.g = Math.max(0, Math.min(255, Math.floor(s * t.color.g)))),
      (this.color.b = Math.max(0, Math.min(255, Math.floor(r * t.color.b)))),
      this
    );
  }
  getHSVBrightness() {
    return Math.max(this.color.r, this.color.g, this.color.b) / 255;
  }
  getHSLBrightness() {
    return (
      0.5 *
      (Math.max(this.color.r, this.color.g, this.color.b) / 255 +
        Math.min(this.color.r, this.color.g, this.color.b) / 255)
    );
  }
  setHsl(t, e, s) {
    const r = this.color.opacity,
      n = _t(this.color.r, this.color.g, this.color.b),
      o = wt(
        i(t) ? n.h : M(t, 0, 360),
        i(e) ? n.s : e >= 0 && e <= 1 ? 100 * e : e,
        i(s) ? n.l : s <= 1 && s >= 0 ? 100 * s : s
      );
    return (this.color = new Ht(o.r, o.g, o.b, r)), this;
  }
  setRGB(t, e, s) {
    return (
      !i(t) && (this.color.r = t),
      !i(e) && (this.color.g = e),
      !i(s) && (this.color.b = s),
      this
    );
  }
  setHex(t) {
    const e = `${t}`.trim().toLowerCase(),
      s = Nt(e, !0);
    return null != s ? s : this;
  }
  setColorName(t) {
    const e = It[t.toLowerCase()];
    return void 0 !== e && this.setHex(e), this;
  }
  setScalar(t) {
    return (this.color.r = t), (this.color.g = t), (this.color.b = t), this;
  }
  setOpacity(t = 1) {
    return (this.color.opacity = t), this;
  }
  getLuminance() {
    return (
      (0.2126 * this.color.r + 0.7152 * this.color.g + 0.0722 * this.color.b) /
      255
    );
  }
  getLuminance2() {
    return (
      (0.2627 * this.color.r + 0.678 * this.color.g + 0.0593 * this.color.b) /
      255
    );
  }
  getLuminance3() {
    return (
      (0.299 * this.color.r + 0.587 * this.color.g + 0.114 * this.color.b) / 255
    );
  }
  clone() {
    return new St(this.color.toString());
  }
  copyGammaToLinear(t, e = 2) {
    return (
      (this.color.r = Math.pow(t.color.r, e)),
      (this.color.g = Math.pow(t.color.g, e)),
      (this.color.b = Math.pow(t.color.b, e)),
      this
    );
  }
  copyLinearToGamma(t, e = 2) {
    const s = e > 0 ? 1 / e : 1;
    return (
      (this.color.r = Math.pow(t.color.r, s)),
      (this.color.g = Math.pow(t.color.g, s)),
      (this.color.b = Math.pow(t.color.b, s)),
      this
    );
  }
  convertGammaToLinear(t) {
    return this.copyGammaToLinear(this, t), this;
  }
  convertLinearToGamma(t) {
    return this.copyLinearToGamma(this, t), this;
  }
  copySRGBToLinear(t) {
    return (
      (this.color.r = At(t.color.r)),
      (this.color.g = At(t.color.g)),
      (this.color.b = At(t.color.b)),
      this
    );
  }
  copyLinearToSRGB(t) {
    return (
      (this.color.r = Bt(t.color.r)),
      (this.color.g = Bt(t.color.g)),
      (this.color.b = Bt(t.color.b)),
      this
    );
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
}
class Ht {
  constructor(t, e, s, r) {
    (this.r = isNaN(+t) ? 255 : Math.max(0, Math.min(255, +t))),
      (this.g = isNaN(+e) ? 255 : Math.max(0, Math.min(255, +e))),
      (this.b = isNaN(+s) ? 255 : Math.max(0, Math.min(255, +s))),
      o(r)
        ? (this.opacity = isNaN(+r) ? 1 : Math.max(0, Math.min(1, +r)))
        : (this.opacity = 1);
  }
  formatHex() {
    return `#${
      Et(this.r) +
      Et(this.g) +
      Et(this.b) +
      (1 === this.opacity ? "" : Et(255 * this.opacity))
    }`;
  }
  formatRgb() {
    const t = this.opacity;
    return `${1 === t ? "rgb(" : "rgba("}${this.r},${this.g},${this.b}${
      1 === t ? ")" : `,${t})`
    }`;
  }
  formatHsl() {
    const t = this.opacity,
      { h: e, s: s, l: r } = _t(this.r, this.g, this.b);
    return `${1 === t ? "hsl(" : "hsla("}${e},${s}%,${r}%${
      1 === t ? ")" : `,${t})`
    }`;
  }
  toString() {
    return this.formatHex();
  }
}
export {
  W as $,
  pt as A,
  ut as B,
  St as C,
  dt as D,
  e as E,
  O as F,
  S as G,
  F as H,
  R as I,
  bt as J,
  rt as K,
  m as L,
  Mt as M,
  ht as N,
  mt as O,
  C as P,
  M as Q,
  G as R,
  o as S,
  at as T,
  J as U,
  Y as V,
  ft as W,
  Z as X,
  st as Y,
  U as Z,
  ct as _,
  j as a,
  Q as a0,
  $ as a1,
  q as a2,
  z as a3,
  s as a4,
  et as a5,
  Ht as a6,
  It as a7,
  wt as a8,
  _t as a9,
  V as aa,
  b as ab,
  K as ac,
  I as b,
  E as c,
  D as d,
  B as e,
  v as f,
  a as g,
  _ as h,
  r as i,
  n as j,
  c as k,
  P as l,
  A as m,
  w as n,
  T as o,
  k as p,
  h as q,
  l as r,
  N as s,
  L as t,
  i as u,
  f as v,
  vt as w,
  u as x,
  y,
  gt as z,
};
