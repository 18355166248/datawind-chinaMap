import {
  hy as l,
  hz as e,
  fT as i,
  fU as n,
  g6 as s,
  gj as o,
  gH as r,
  ga as t,
  gO as u,
  g2 as d,
  gq as a,
  g3 as c,
  gv as v,
} from "../entry/index.7886b0f6.js";
const f = (i) => !(!i || !l(i.extensions, e.ChartKey).id),
  m = (l) => {
    var e;
    return (
      f(l) &&
      (null == l || null === (e = l.display) || void 0 === e
        ? void 0
        : e.queryType) === i.EXTEND
    );
  };
var p;
const g = (l) => {
  var e;
  return Object.values(
    null !==
      (p = null === (e = l.customConfig) || void 0 === e ? void 0 : e.fields) &&
      void 0 !== p
      ? p
      : {}
  ).reduce((l, e) => [...l, ...e], []);
};
var y;
const x = (l, e) => {
  var i;
  const {
    excludeRows: n = !1,
    excludeColumns: s = !1,
    excludeColors: o = !1,
    excludeSizes: r = !1,
    excludeTooltips: t = !1,
    excludeDetails: u = !1,
    excludeWhereList: d = !1,
    excludeCustomPills: a = !1,
    excludeWhereComparePills: c = !1,
    excludeDynamicConfigPills: v = !1,
    location: f = "",
  } = null != e ? e : {};
  var m, p, y, x, h, C, I, T, A, D;
  const b = [
    ...(null !== (m = l.dimensions) && void 0 !== m ? m : []),
    ...(s ? [] : null !== (p = l.columns) && void 0 !== p ? p : []),
    ...(n ? [] : null !== (y = l.rows) && void 0 !== y ? y : []),
    ...(null !== (x = l.measures) && void 0 !== x ? x : []),
    ...(null !== (h = l.subMeasures) && void 0 !== h ? h : []),
    ...(o ? [] : null !== (C = l.colors) && void 0 !== C ? C : []),
    ...(r ? [] : null !== (I = l.sizes) && void 0 !== I ? I : []),
    ...(t ? [] : null !== (T = l.tooltips) && void 0 !== T ? T : []),
    ...(u ? [] : null !== (A = l.details) && void 0 !== A ? A : []),
    ...(d ? [] : l.whereList),
    ...(a ? [] : g(l)),
    ...(c
      ? []
      : (null !==
          (D =
            null === (i = l.whereCompare) || void 0 === i
              ? void 0
              : i.conditionList) && void 0 !== D
          ? D
          : []
        ).flat()),
    ...(v ? [] : P(l)),
  ];
  return f ? b.filter((l) => l.location === f) : b;
};
var h;
const P = (l) =>
  Object.values(null !== (h = l.dynamicPillsMap) && void 0 !== h ? h : {})
    .map((l) => l.pillList)
    .flat();
var C, I;
const T = (l, e) =>
    null !==
      (I =
        null !== (C = l[e]) && void 0 !== C
          ? C
          : ((l, e) => {
              var i, n;
              return null !==
                (y =
                  null === (i = l.customConfig) ||
                  void 0 === i ||
                  null === (n = i.fields) ||
                  void 0 === n
                    ? void 0
                    : n[e]) && void 0 !== y
                ? y
                : [];
            })(l, e)) && void 0 !== I
      ? I
      : [],
  A = (l, e, i) => {
    const r = s(l.display.type);
    var t;
    const u =
        null === (t = null == i ? void 0 : i.rawTablePillAsMeasure) ||
        void 0 === t ||
        t,
      d = null == i ? void 0 : i.rawTableDynamicPillAsMeasure;
    var a, c, v, f, m, p, g;
    const y = x(l, {
      ...i,
      excludeColors:
        null === (a = null == i ? void 0 : i.excludeColors) ||
        void 0 === a ||
        a,
      excludeSizes:
        null === (c = null == i ? void 0 : i.excludeSizes) || void 0 === c || c,
      excludeTooltips:
        null === (v = null == i ? void 0 : i.excludeTooltips) ||
        void 0 === v ||
        v,
      excludeDetails:
        null === (f = null == i ? void 0 : i.excludeDetails) ||
        void 0 === f ||
        f,
      excludeWhereList:
        null === (m = null == i ? void 0 : i.excludeWhereList) ||
        void 0 === m ||
        m,
      excludeWhereComparePills:
        null === (p = null == i ? void 0 : i.excludeWhereComparePills) ||
        void 0 === p ||
        p,
      excludeDynamicConfigPills:
        null === (g = null == i ? void 0 : i.excludeDynamicConfigPills) ||
        void 0 === g ||
        g,
    });
    if (e === n.DIM) return y.filter((l) => l.roleType === e && !(r && u));
    const h = y.filter((l) => l.roleType === e || (r && u));
    return e === n.MEA && r && !d
      ? h.filter((l) => !(l.pillType === o.DYNAMIC && l.roleType === n.DIM))
      : h;
  },
  D = (l, e) => A(l, n.DIM, e),
  b = (l, e) => A(l, n.MEA, e);
function q({ schema: l, filter: e, fn: i }) {
  return r(l, (n) => {
    var s, o, r;
    (null === (s = n.customConfig) || void 0 === s ? void 0 : s.fields) &&
      (n.customConfig.fields = Object.entries(
        null !==
          (r =
            null === (o = l.customConfig) || void 0 === o
              ? void 0
              : o.fields) && void 0 !== r
          ? r
          : {}
      ).reduce(
        (l, [n, s]) => (
          (l[n] =
            null == s
              ? void 0
              : s
                  .filter(null != e ? e : () => !0)
                  .map((l, e) => (i ? i(l, n, e) : l))),
          l
        ),
        {}
      ));
  });
}
function M({ schema: l, handler: e, filter: i }) {
  let s = q({
    schema: l,
    filter: (l) => !i || l.roleType !== n.DIM || i(l),
  });
  return (
    (s = r(s, (l) => {
      var n, s;
      D(l).forEach((l) => e && e(l)),
        (l.dimensions = l.dimensions.filter(null != i ? i : () => !0)),
        (l.columns =
          null === (n = l.columns) || void 0 === n
            ? void 0
            : n.filter(null != i ? i : () => !0)),
        (l.rows =
          null === (s = l.rows) || void 0 === s
            ? void 0
            : s.filter(null != i ? i : () => !0));
    })),
    s
  );
}
function w({ schema: l, handler: e, filter: i, options: s }) {
  let o = q({
    schema: l,
    filter: (l) => !i || l.roleType !== n.MEA || i(l),
  });
  return (
    (o = r(o, (l) => {
      var n, o, r;
      (l.measures = l.measures.filter(null != i ? i : () => !0)),
        (l.subMeasures =
          null === (n = l.subMeasures) || void 0 === n
            ? void 0
            : n.filter(null != i ? i : () => !0)),
        (l.tooltips =
          null === (o = l.tooltips) || void 0 === o
            ? void 0
            : o.filter(null != i ? i : () => !0)),
        (l.whereList =
          null === (r = l.whereList) || void 0 === r
            ? void 0
            : r.filter(null != i ? i : () => !0)),
        b(l, s).forEach((l) => e && e(l));
    })),
    o
  );
}
function L(l, e, i) {
  return r(l, (l) => {
    l[e]
      ? (l[e] = i)
      : ((l.customConfig && l.customConfig.fields) ||
          (l.customConfig = {
            fields: {},
          }),
        (l.customConfig.fields[e] = i));
  });
}
function z(l, e, ...i) {
  return l.slice(0, e).concat(i).concat(l.slice(e));
}
const S = (l, e) =>
    x(l, {
      excludeWhereList: !e,
      excludeWhereComparePills: !0,
      excludeDynamicConfigPills: !0,
    }),
  W = (l, e) => S(l, !0).find((l) => String(l.uniqueId) === String(e)),
  O = (l, e) => {
    const i = S(l, !0).find((l) => l.uniqueId === e);
    if (!i)
      return {
        index: null,
        pill: null,
      };
    return {
      index: T(l, i.location).findIndex((l) => l.uniqueId === e),
      pill: i,
    };
  },
  j = (l) => S(l, !1).filter(F),
  E = (l, e) => T(l, e).filter(Q),
  G = (l) => S(l, !1).filter(R);
var N;
const U = (l, e) => {
  var i;
  return null === (i = S(l).find((l) => String(l.uniqueId) === String(e))) ||
    void 0 === i
    ? void 0
    : i.id;
};
var B;
const k = (l) =>
  !(null !== (B = null == l ? void 0 : l.notJoinQuery) && void 0 !== B && B);
var _;
const F = (l) =>
    !(null !== (_ = null == l ? void 0 : l.notDisplay) && void 0 !== _ && _),
  Q = (l) => k(l) && F(l),
  R = (l) => "placeholder" === l.pillType && !!l.miniChart;
function V(l, e, i, n) {
  const s = T(l, i);
  return L(
    l,
    i,
    z(null != s ? s : [], n, e).map((l, e) => ({
      ...l,
      index: e,
    }))
  );
}
const J = (l, e = !1) => S(l, e).map((l) => l.id),
  H = (l, e = !1) => S(l, e).map((l) => l.uniqueId);
function K(l, e) {
  const i = (l) => (i) => {
    const n = i.sourceType !== e;
    if (!n) {
      var s, o;
      for (const e of null !== (o = l.measuresGroups) && void 0 !== o
        ? o
        : []) {
        const l = e.indexOf(i.uniqueId);
        l > -1 && e.splice(l, 1);
      }
      l.measuresGroups =
        null === (s = l.measuresGroups) || void 0 === s
          ? void 0
          : s.filter((l) => l.length > 1);
    }
    return n;
  };
  let n = r(l, (l) => {
    Object.values(t).forEach((e) => {
      l[e] && (l[e] = l[e].filter(i(l)));
    });
  });
  return (
    f(l) &&
      (n = q({
        schema: n,
        filter: i(n),
      })),
    n
  );
}
const X = (l, e, i) => {
  const n = u(l, e, i);
  return (
    l.sourceType !== d.CALCULATION &&
    "calc" !== (null == n ? void 0 : n.calcType)
  );
};
function Y(l, e, i) {
  const { aggrConf: n = {}, sourceType: s } = l;
  let o = null;
  o = "id" in e ? e : u(l, e, i);
  let { dataTypeName: r } = o || {};
  if (a(s)) return "float";
  if (n.exprAggr) {
    if ("string" === r) {
      if (/max|min/i.test(n.exprAggr)) return "string";
      r = "int";
    }
    if (c.isDate(r) && /count/i.test(n.exprAggr)) return "int";
    if (/avg|quantile|varSamp|stddevSamp/i.test(n.exprAggr)) return "float";
  }
  return n.timeGranularityType === v.TWeek ||
    n.timeGranularityType === v.CustomWeek
    ? "string"
    : n.timeGranularityType === v.Week || n.timeGranularityType === v.Month
    ? "date"
    : r;
}
const Z = (l, e) => {
    const i = l.find((l) => l.uniqueId === e);
    var n;
    return (
      i &&
      (null === (n = null == i ? void 0 : i.invisible) || void 0 === n || n) &&
      Q(i)
    );
  },
  $ = (l) => {
    const { measures: e, measuresGroups: i } = l,
      n = e
        .filter(Q)
        .filter((l) => !l.invisible)
        .map((l) => l.uniqueId),
      s = (null != i ? i : [])
        .map((l) => l.filter((l) => Z(e, l)))
        .filter((l) => l.length > 1);
    return (
      s &&
        s.length > 0 &&
        s.forEach((l) => {
          const e = l[0],
            { length: i } = l,
            s = n.findIndex((l) => l === e);
          if (-1 !== s) {
            const l = n.splice(s, i);
            n.splice(s, 0, l);
          }
        }),
      n
    );
  };
function ll(l) {
  return null != l ? l : [];
}
function el(l, e) {
  var i, n;
  return (
    Q(l) &&
    (null === (i = e.fieldMap) ||
    void 0 === i ||
    null === (n = i[l.uniqueId]) ||
    void 0 === n
      ? void 0
      : n.visible)
  );
}
const il = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      getAllPills: S,
      getPillByUniqueId: W,
      getPillAndIndexByUniqueId: O,
      getPillByOriginId: (l, e) => S(l, !0).find((l) => l.originId === e),
      getPillByPillId: (l, e) => S(l, !0).find((l) => l.id === e),
      getAllQueryPills: (l) => S(l, !1).filter(k),
      getAllDisplayPills: j,
      getVisualizedPills: (l) => S(l, !1).filter(Q),
      getVisualizedPillsByLocation: E,
      getAllMiniChartPills: G,
      getUniqueId: (l) => l.uniqueId,
      getPillName: (l) => {
        var e;
        return null !==
          (N =
            null === (e = l.format) || void 0 === e ? void 0 : e.displayName) &&
          void 0 !== N
          ? N
          : null == l
          ? void 0
          : l.name;
      },
      getPillAggr: (l) => {
        var e, i;
        return null === (e = l.aggrConf) ||
          void 0 === e ||
          null === (i = e.exprAggr) ||
          void 0 === i
          ? void 0
          : i.replace("(", "");
      },
      uniqueId2Id: U,
      id2UniqueId: (l, e) => {
        var i;
        return null === (i = S(l).find((l) => l.id === e)) || void 0 === i
          ? void 0
          : i.uniqueId;
      },
      getPillRoleType: (l) => l.roleType,
      isJoinQueryPill: k,
      isDisplayPill: F,
      isVisualizedPill: Q,
      isPlaceholderPill: (l) => "placeholder" === l.pillType,
      isMiniChartPill: R,
      insertPill: V,
      getAllPillIds: J,
      getAllPillUniqueIds: H,
      removeDerivedPills: K,
      isNotTableCalculationPill: X,
      getFieldDataType: Y,
      resetPillNotDisplayField: (l) => {
        return (
          (e = {
            schema: l,
            handler: (l) => {
              l && delete l.notDisplay;
            },
          }),
          w({
            ...e,
            schema: M(e),
          })
        );
        var e;
      },
      isInvisibleId: Z,
      getPillListFromSchema: $,
      extractRenderPills: function (l, e) {
        return {
          dimensions: ll(l.dimensions).filter((l) => el(l, e)),
          measures: ll(l.measures).filter((l) => el(l, e)),
          rows: ll(l.rows).filter((l) => el(l, e)),
          columns: ll(l.columns).filter((l) => el(l, e)),
          sizes: ll(l.sizes).filter((l) => el(l, e)),
          colors: ll(l.colors).filter((l) => el(l, e)),
          subMeasures: ll(l.subMeasures).filter((l) => el(l, e)),
          details: ll(l.details).filter((l) => el(l, e)),
        };
      },
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
export {
  R as A,
  U as B,
  il as C,
  b as a,
  T as b,
  D as c,
  X as d,
  $ as e,
  S as f,
  x as g,
  f as h,
  m as i,
  q as j,
  J as k,
  Y as l,
  w as m,
  k as n,
  H as o,
  O as p,
  V as q,
  K as r,
  Q as s,
  G as t,
  L as u,
  j as v,
  E as w,
  W as x,
  z as y,
  Z as z,
};
