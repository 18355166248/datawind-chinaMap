import {bl as f, bd as u, bA as n, bC as r, b0 as t, d6 as e, bq as o} from "../entry/index.7886b0f6.js";
function a(u, n, r) {
    var t = u.length;
    return r = void 0 === r ? t : r,
    !n && r >= t ? u : f(u, n, r)
}
var d = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function i(f) {
    return d.test(f)
}
var s = "\\ud800-\\udfff"
  , v = "[" + s + "]"
  , c = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
  , b = "\\ud83c[\\udffb-\\udfff]"
  , l = "[^" + s + "]"
  , h = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , p = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , g = "(?:" + c + "|" + b + ")" + "?"
  , m = "[\\ufe0e\\ufe0f]?"
  , j = m + g + ("(?:\\u200d(?:" + [l, h, p].join("|") + ")" + m + g + ")*")
  , x = "(?:" + [l + c + "?", c, h, p, v].join("|") + ")"
  , y = RegExp(b + "(?=" + b + ")|" + x + j, "g");
function M(f) {
    return i(f) ? function(f) {
        return f.match(y) || []
    }(f) : function(f) {
        return f.split("")
    }(f)
}
var E = Math.floor
  , R = Math.random;
function q(f, u) {
    return f + E(R() * (u - f + 1))
}
var A = parseFloat
  , C = Math.min
  , F = Math.random;
function k(f, r, t) {
    if (t && "boolean" != typeof t && u(f, r, t) && (r = t = void 0),
    void 0 === t && ("boolean" == typeof r ? (t = r,
    r = void 0) : "boolean" == typeof f && (t = f,
    f = void 0)),
    void 0 === f && void 0 === r ? (f = 0,
    r = 1) : (f = n(f),
    void 0 === r ? (r = f,
    f = 0) : r = n(r)),
    f > r) {
        var e = f;
        f = r,
        r = e
    }
    if (t || f % 1 || r % 1) {
        var o = F();
        return C(f + o * (r - f + A("1e-" + ((o + "").length - 1))), r)
    }
    return q(f, r)
}
function w(f, u) {
    for (var n = f.length; n-- && r(u, f[n], 0) > -1; )
        ;
    return n
}
function z(f, u) {
    for (var n = -1, t = f.length; ++n < t && r(u, f[n], 0) > -1; )
        ;
    return n
}
function B(f, u, n) {
    if ((f = t(f)) && (n || void 0 === u))
        return e(f);
    if (!f || !(u = o(u)))
        return f;
    var r = M(f)
      , d = M(u);
    return a(r, z(r, d), w(r, d) + 1).join("")
}
export {w as a, q as b, a as c, z as d, i as h, k as r, M as s, B as t};
