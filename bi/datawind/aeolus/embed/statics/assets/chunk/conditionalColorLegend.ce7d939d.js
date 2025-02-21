import {
  ey as e,
  ez as a,
  eA as s,
  d9 as l,
  eB as n,
  d8 as o,
  eC as r,
  eD as t,
  dQ as i,
  dP as c,
  eE as d,
  eF as h,
  da as u,
} from "../entry/index.7886b0f6.js";
const f = (l = !1) => {
    var n, o, r, t;
    return (
      (null == (o = null == (n = e) ? void 0 : n.scheme10)
        ? void 0
        : o.length) && (a[0].colors = e.scheme10),
      (null == (t = null == (r = e) ? void 0 : r.scheme20)
        ? void 0
        : t.length) && (a[1].colors = e.scheme10),
      l ? s : a
    );
  },
  p = (e, s, l = a) => {
    var t, i, c;
    const { colorScheme: d, colors: h = [], customScheme: u } = e,
      f =
        Array.isArray(u) && u.length > 0
          ? u
          : null !=
            (i = null == (t = l.find((e) => e.key === d)) ? void 0 : t.colors)
          ? i
          : [n];
    if (0 === s.length) {
      const e = h.find((e) => 0 === e.index);
      return {
        range: [null != (c = null == e ? void 0 : e.color) ? c : f[0]],
        specified: {},
      };
    }
    const p = f.length,
      m = o.exports.range(s.length).map((e) => f[e % p]),
      v = {};
    return (
      s.forEach((e, a) => {
        if (g(e)) {
          const l = r(s, m, a);
          v[e] = l;
        }
      }),
      h.forEach(({ index: e, title: a, color: l }) => {
        const n = s.find((e) => a && e === a);
        n ? (v[n] = l) : "number" == typeof e && e > -1 && (v[s[e]] = l);
      }),
      {
        range: m,
        specified: v,
      }
    );
  },
  g = (e) => e.includes(t),
  m = (e) => {
    var a;
    return null == (a = null == e ? void 0 : e.includes)
      ? void 0
      : a.call(e, "deg");
  },
  v = (e) => e.split(", "),
  x = (e) => {
    if (m(e)) {
      const a = v(e).slice(1);
      let s = a[0],
        n = l(a[0]).alpha();
      return (
        a.forEach((e) => {
          l(e).alpha() > n && ((s = e), (n = l(s).alpha()));
        }),
        s
      );
    }
    return e;
  },
  E = (e) => {
    if (!m(e)) return e;
    const [a, s, l] = v(e),
      n = 360 - +a.slice(0, -3) - 270,
      o = Math.cos((n / 180) * Math.PI),
      r = Math.sin((n / 180) * Math.PI);
    return {
      gradient: "linear",
      x0: o < 0 ? Math.abs(o) : 0,
      x1: o > 0 ? o : 0,
      y1: r < 0 ? Math.abs(r) : 0,
      y0: r > 0 ? r : 0,
      stops: [
        {
          offset: 0,
          color: s,
        },
        {
          offset: 1,
          color: l,
        },
      ],
    };
  },
  y = (e, s, l = a) => {
    const n = new Map(),
      o = p(e, s, l);
    return (
      s.forEach((e, a) => {
        o.specified[e]
          ? n.set(e, o.specified[e])
          : n.set(e, o.range[a % o.range.length]);
      }),
      n
    );
  },
  T = {
    [i.HEAD]: "start",
    [i.CENTER]: "middle",
    [i.TAIL]: "end",
  },
  M = {
    [c.TOP]: "maxRow",
    [c.BOTTOM]: "maxRow",
    [c.LEFT]: "maxCol",
    [c.RIGHT]: "maxCol",
  };
var b = ((e) => (
  (e.DISCRETE = "discrete"), (e.COLOR = "color"), (e.SIZE = "size"), e
))(b || {});
const C = "legend",
  I = (e, a) =>
    e.map(({ exps: e, target: s, gradientTarget: l }) => {
      const n = null != l ? l : s;
      return {
        label: e
          .filter((e) => void 0 !== e.op && void 0 !== e.value)
          .map(
            (e) =>
              `${a} ${d[e.op]} ${
                e.type === h.Field ? e.fieldDisplayName : e.value
              }`
          )
          .join(` ${u.i18n`且`} `),
        shape: {
          fill: m(n) ? E(n) : n,
        },
      };
    });
export {
  T as L,
  C as a,
  b,
  M as c,
  I as d,
  p as e,
  x as f,
  f as g,
  y as h,
  m as i,
  v as t,
};
