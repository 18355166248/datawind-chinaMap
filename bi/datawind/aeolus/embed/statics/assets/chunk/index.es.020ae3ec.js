function r(r, t) {
  return void 0 === t && (t = 15), +parseFloat(Number(r).toPrecision(t));
}
function t(r) {
  var t = r.toString().split(/[eE]/),
    n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
  return n > 0 ? n : 0;
}
function n(n) {
  if (-1 === n.toString().indexOf("e"))
    return Number(n.toString().replace(".", ""));
  var e = t(n);
  return e > 0 ? r(Number(n) * Math.pow(10, e)) : Number(n);
}
function e(r) {
  f && (r > Number.MAX_SAFE_INTEGER || Number.MIN_SAFE_INTEGER);
}
function a(r, t) {
  var n = r[0],
    e = r[1],
    a = r.slice(2),
    i = t(n, e);
  return (
    a.forEach(function (r) {
      i = t(i, r);
    }),
    i
  );
}
function i() {
  for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
  if (r.length > 2) return a(r, i);
  var u = r[0],
    f = r[1],
    h = n(u),
    c = n(f),
    l = t(u) + t(f),
    v = h * c;
  return e(v), v / Math.pow(10, l);
}
function o() {
  for (var u = [], f = 0; f < arguments.length; f++) u[f] = arguments[f];
  if (u.length > 2) return a(u, o);
  var h = u[0],
    c = u[1],
    l = n(h),
    v = n(c);
  return e(l), e(v), i(l / v, r(Math.pow(10, t(c) - t(h))));
}
function u(r, t) {
  var n = Math.pow(10, t),
    e = o(Math.round(Math.abs(i(r, n))), n);
  return r < 0 && 0 !== e && (e = i(e, -1)), e;
}
var f = !0;
var h = {
  strip: r,
  plus: function r() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    if (n.length > 2) return a(n, r);
    var o = n[0],
      u = n[1],
      f = Math.pow(10, Math.max(t(o), t(u)));
    return (i(o, f) + i(u, f)) / f;
  },
  minus: function r() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    if (n.length > 2) return a(n, r);
    var o = n[0],
      u = n[1],
      f = Math.pow(10, Math.max(t(o), t(u)));
    return (i(o, f) - i(u, f)) / f;
  },
  times: i,
  divide: o,
  round: u,
  digitLength: t,
  float2Fixed: n,
  enableBoundaryChecking: function (r) {
    void 0 === r && (r = !0), (f = r);
  },
};
const c = h;
export { c as N, u as r, i as t };
