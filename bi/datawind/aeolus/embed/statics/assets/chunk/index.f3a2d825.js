import { d8 as e, es as r, eP as t } from "../entry/index.7886b0f6.js";
import {
  hO as i,
  hC as s,
  hP as n,
  dK as a,
  hF as o,
  hA as l,
  hE as u,
  hL as d,
  hB as f,
  hN as c,
  dJ as p,
  hM as N,
  dI as m,
  hI as v,
  dH as x,
  hG as b,
  hH as D,
  hK as g,
  hJ as C,
  hD as F,
} from "../entry/index.7886b0f6.js";
const S = (i, s, n) => {
    if (!s || 0 === s.length) return i;
    const a = i.concat([]);
    return (
      s
        .filter(
          ({ depend: t, order: i }) =>
            !e.exports.isNil(t) && [r.ASC, r.DESC].includes(i)
        )
        .reverse()
        .forEach((i) => {
          var s, o;
          const { depend: l, filter: u, order: d } = i;
          if (e.exports.isNil(l)) return;
          const f =
            null !==
              (o =
                n &&
                (null === (s = n.find((e) => e.id === l)) || void 0 === s
                  ? void 0
                  : s.type)) && void 0 !== o
              ? o
              : t.INT;
          let c = "string";
          c = [t.INT, t.FLOAT, t].includes(f) ? "number" : "string";
          const p = d === r.ASC ? 1 : -1;
          a.sort((r, t) => {
            const i = h(r, u),
              s = h(t, u),
              n = r[l],
              a = t[l],
              o = !e.exports.isNil(n),
              d = !e.exports.isNil(a);
            if ((!i && s) || (!o && d)) return 1;
            if ((i && !s) || (o && !d)) return -1;
            if ((!i && !s) || (!o && !d)) return 0;
            if ("string" === c) return n.localeCompare(a) * p;
            if ("number" === c) {
              const e = Number(r[l]),
                i = Number(t[l]),
                s = isNaN(e),
                n = isNaN(i);
              return s && !n ? 1 : !s && n ? -1 : s && n ? 0 : (e - i) * p;
            }
            return 0;
          });
        }),
      a
    );
  },
  h = (e, r) => {
    if (!r) return !0;
    for (const { id: t, val: i } of r) if (e[t] !== i) return !1;
    return !0;
  },
  A = (t, i, s) => {
    if (!s || 0 === s.length || !t) return t;
    const n = i.flat(3),
      a = e.exports.cloneDeep(t);
    return (
      s
        .filter(
          ({ id: t, depend: i, order: s }) =>
            !e.exports.isNil(t) &&
            !e.exports.isNil(i) &&
            [r.ASC, r.DESC].includes(s)
        )
        .reverse()
        .forEach((t) => {
          const { id: i, depend: s, filter: o, order: l } = t;
          if (e.exports.isNil(s)) return;
          const u = l === r.ASC ? 1 : -1,
            d = n.filter((e) => E(e, o));
          M(a, d, i, s, u);
        }),
      a
    );
  },
  E = (e, r) => {
    if (!r) return !0;
    for (const { id: t, val: i } of r) if (e[t] !== i) return !1;
    return !0;
  },
  M = (r, t, i, s, n) => {
    if (null !== r)
      if (r.field === i) {
        t.sort((r, t) => {
          const i = r[s],
            a = t[s],
            o = !e.exports.isNil(i),
            l = !e.exports.isNil(a);
          if (!o && l) return 1;
          if (o && !l) return -1;
          if (!o && !l) return 0;
          const u = Number(r[s]),
            d = Number(t[s]),
            f = isNaN(u),
            c = isNaN(d);
          return f && !c ? 1 : !f && c ? -1 : f && c ? 0 : (u - d) * n;
        });
        const a = t.map((e) => e[i]);
        r.values.sort((e, r) => a.indexOf(e.value) - a.indexOf(r.value));
      } else
        r.values.forEach(({ value: e, child: a }) => {
          const o = t.filter((t) => t[r.field] === e);
          M(a, o, i, s, n);
        });
  },
  I = "vizService";
export {
  i as EnableFeatures,
  s as FOLD_ID,
  n as Locations,
  a as Origin,
  o as buildAliasMap,
  l as buildDataSource,
  u as buildFieldMap,
  d as buildLocationMap,
  f as buildVizData,
  c as collectConditionalColorFields,
  I as default,
  p as getColorItems,
  N as getColorItemsFormatter,
  m as getDomainFromDataset,
  v as getDomainMap,
  x as getMinMaxFromDomain,
  b as nullString,
  D as nullValue,
  g as removeDatasetField,
  C as retainDatasetField,
  S as sortDataSource,
  A as sortPivotTree,
  F as updateVizData,
};
