import {
  M as a,
  a as e,
  S as i,
  b as s,
  g as o,
  u as t,
  i as l,
  c as n,
  d as r,
  e as c,
  T as d,
  f as h,
  F as g,
} from "./index.872994a3.js";
import {
  F as p,
  aS as u,
  r as w,
  L as v,
  c4 as m,
  T as C,
  cj as L,
  X as M,
  a7 as f,
  a8 as b,
  a9 as E,
  aV as x,
  al as y,
  bh as T,
  aW as $,
  bp as A,
  aN as _,
  aO as R,
  aP as D,
  ap as V,
  by as F,
  c0 as S,
  b9 as k,
  am as I,
  c2 as H,
  aX as U,
  an as Z,
  bd as O,
  ao as P,
  bO as N,
  bU as B,
  bi as z,
  aA as G,
  b3 as j,
  aB as Y,
  aC as K,
  bV as q,
  h as W,
  j as X,
  aE as J,
  b4 as Q,
  be as aa,
  ah as ea,
  aG as ia,
  aI as sa,
  aJ as oa,
  aH as ta,
  aK as la,
  aL as na,
  c3 as ra,
  g as ca,
  aT as da,
  aU as ha,
  k as ga,
  c1 as pa,
  aQ as ua,
  aR as wa,
  a5 as va,
  a6 as ma,
  bQ as Ca,
  aY as La,
  aq as Ma,
  ar as fa,
  aM as ba,
  as as Ea,
  bI as xa,
  at as ya,
  av as Ta,
  bB as $a,
  ax as Aa,
  bR as _a,
  ay as Ra,
  au as Da,
  az as Va,
  c5 as Fa,
  c6 as Sa,
  c7 as ka,
  c8 as Ia,
  c9 as Ha,
  ca as Ua,
  cb as Za,
  cc as Oa,
  b2 as Pa,
  t as Na,
  O as Ba,
  v as za,
  P as Ga,
  w as ja,
  Q as Ya,
  x as Ka,
  y as qa,
  d as Wa,
  z as Xa,
  i as Ja,
  aF as Qa,
  A as ae,
  B as ee,
  R as ie,
  C as se,
  U as oe,
  V as te,
  e as le,
  c as ne,
  s as re,
  W as ce,
  cd as de,
  D as he,
  Y as ge,
  a4 as pe,
  Z as ue,
  E as we,
  _ as ve,
  $ as me,
  G as Ce,
  H as Le,
  I as Me,
  J as fe,
  a0 as be,
  a1 as Ee,
  K as xe,
  a2 as ye,
  N as Te,
  m as $e,
  n as Ae,
  o as _e,
  q as Re,
  a3 as De,
  b5 as Ve,
  b6 as Fe,
  bj as Se,
  br as ke,
  ce as Ie,
  cf as He,
  bJ as Ue,
  bL as Ze,
  bM as Oe,
  bK as Pe,
  bN as Ne,
  bt as Be,
  aZ as ze,
  bf as Ge,
  bk as je,
  ci as Ye,
  bc as Ke,
  bW as qe,
  b1 as We,
  bs as Xe,
  bq as Je,
  bw as Qe,
  p as ai,
  l as ei,
  bx as ii,
  aw as si,
  a_ as oi,
  b7 as ti,
  bz as li,
  bA as ni,
  ai as ri,
  bC as ci,
  bD as di,
  bE as hi,
  bF as gi,
  bG as pi,
  bH as ui,
  aj as wi,
  b8 as vi,
  bP as mi,
  ak as Ci,
  bS as Li,
  bT as Mi,
  a$ as fi,
  bb as bi,
  bl as Ei,
  b0 as xi,
  ba as yi,
  bm as Ti,
  bu as $i,
  bg as Ai,
  bn as _i,
  bv as Ri,
  bX as Di,
  aD as Vi,
  bo as Fi,
  bY as Si,
  bZ as ki,
  cg as Ii,
  b_ as Hi,
  b$ as Ui,
  u as Zi,
  ch as Oi,
  af as Pi,
  aa as Ni,
  ab as Bi,
  ag as zi,
  ac as Gi,
  ad as ji,
  ae as Yi,
} from "./index.872994a3.js";
import {
  d8 as Ki,
  d9 as qi,
  da as Wi,
  db as Xi,
  dc as Ji,
  dd as Qi,
  de as as,
  df as es,
  dg as is,
  dh as ss,
  di as os,
} from "../entry/index.7886b0f6.js";
import {
  dj as ts,
  dk as ls,
  dl as ns,
  dm as rs,
  dn as cs,
  dp as ds,
  dq as hs,
  dr as gs,
  ds as ps,
  dc as us,
  dt as ws,
  du as vs,
  dv as ms,
  dw as Cs,
  dx as Ls,
  dy as Ms,
  dz as fs,
  dA as bs,
  dB as Es,
  dC as xs,
  dD as ys,
} from "../entry/index.7886b0f6.js";
import {
  L as Ts,
  a as $s,
  b as As,
  c as _s,
  d as Rs,
} from "./conditionalColorLegend.ce7d939d.js";
import "./index.59d0ed8e.js";
import "./Color.875e3a23.js";
const Ds = (a, e) => {
    const { fieldMap: i, cells: s } = a,
      { foldInfo: o } = s[0],
      { id: t } = null != o ? o : {},
      l = Object.keys(i);
    t && l.push(t);
    const n = {};
    return (
      l.forEach((a) => {
        e[a] && (n[a] = e[a]);
      }),
      n
    );
  },
  Vs = (a, e, i) => {
    const s = Ds(a, e),
      o = Ds(a, i),
      t = Object.keys(s),
      l = Object.keys(o);
    return t.every((a) => l.includes(a) && Ki.exports.isEqual(s[a], o[a]));
  },
  Fs = (a) => {
    const { fieldMap: e, cells: i } = a,
      { foldInfo: s } = i[0],
      { id: o } = null != s ? s : {},
      t = Object.keys(e);
    return o && t.push(o), t;
  },
  Ss = (a, e, i) =>
    e.find((e) => i.every((i) => Ki.exports.isEqual(a[i], e[i]))),
  ks = (o, { vizData: t }) => {
    o.series.find((e) => e.id === a).regionId = e;
    const l = o.series.find((a) => a.id === i);
    return (
      l && (l.regionId = s),
      {
        ...o,
        region: [
          {
            id: e,
          },
          {
            id: s,
          },
        ],
      }
    );
  },
  Is = "#tmp_group_",
  Hs = "group",
  Us = "index",
  Zs = "_COMPACT_GROUP_DIMENSION_",
  Os = "_COMPACT_GROUP_INDEX_",
  Ps = "_COMPACT_GROUP_ORIGIN_FIELD_",
  Ns = (a, e) => {
    const i = [],
      s = {};
    let o = 1;
    const t = {};
    return (
      null == a ||
        a.forEach((a) => {
          const l = [];
          a.field && l.push(a.field),
            a.isGroup &&
              l.push(
                ...a.children
                  .map((a) => {
                    var e;
                    return null != (e = a.field) ? e : "";
                  })
                  .filter((a) => "" !== a)
              );
          const n = `${Hs}-${l.join("-")}`;
          let r;
          l.forEach((i) => {
            var s;
            (t[i] = n),
              !("title" in a) &&
                e &&
                (r = null == (s = e[i]) ? void 0 : s.value);
          }),
            l.length > o && (o = l.length);
          const c = {
            groupId: n,
            fields: l,
            title: "title" in a ? a.title : r,
          };
          i.push(c), (s[n] = c);
        }),
      {
        groups: i,
        groupMap: s,
        groupLength: o,
        fieldGroupMap: t,
      }
    );
  };
var Bs = Object.defineProperty,
  zs = (a, e, i) => (
    ((a, e, i) => {
      e in a
        ? Bs(a, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i,
          })
        : (a[e] = i);
    })(a, "symbol" != typeof e ? e + "" : e, i),
    i
  );
class Gs {
  constructor(a) {
    zs(this, "column"), (this.column = a);
  }
  get id() {
    const { field: a } = this.column;
    return a;
  }
}
const js = (a) => {
  const e = [],
    i = (a) => {
      a.forEach((a) => {
        a.columns ? i(a.columns) : e.push(a);
      });
    };
  return i(a), e;
};
const Ys = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M503.146667 117.429333a64.373333 64.373333 0 0 1 11.029333 0.341334l0.714667 0.085333 1.749333 0.245333 0.682667 0.117334c0.554667 0.085333 1.088 0.192 1.632 0.288l0.853333 0.181333c1.514667 0.32 2.986667 0.682667 4.458667 1.098667l0.202666 0.064a60.618667 60.618667 0 0 1 10.656 4.138666l0.64 0.330667c0.512 0.256 1.024 0.522667 1.525334 0.8l0.704 0.394667 1.493333 0.853333 0.426667 0.266667a47.466667 47.466667 0 0 1 3.36 2.186666 82.24 82.24 0 0 1 3.989333 3.04l0.512 0.416c1.173333 0.992 2.314667 2.016 3.413333 3.082667l0.298667 0.288 282.666667 277.333333a64 64 0 1 1-89.642667 91.370667L570.666667 333.792v539.392a64 64 0 0 1-61.6 63.957333l-2.4 0.042667a64 64 0 0 1-64-64v-539.413333L268.821333 504.352a64 64 0 0 1-88.565333 1.024l-1.941333-1.888a64 64 0 0 1 0.864-90.506667l282.666666-277.333333a65.301333 65.301333 0 0 1 11.573334-9.013333l0.437333-0.266667a50.24 50.24 0 0 1 1.482667-0.853333l0.704-0.394667c0.501333-0.277333 1.013333-0.544 1.514666-0.8l0.650667-0.32a52.949333 52.949333 0 0 1 2.784-1.312 63.765333 63.765333 0 0 1 7.872-2.848l0.213333-0.053333c1.450667-0.426667 2.933333-0.789333 4.437334-1.098667l0.864-0.170667c0.533333-0.106667 1.077333-0.213333 1.621333-0.298666l0.704-0.106667c0.576-0.106667 1.152-0.181333 1.738667-0.256l0.714666-0.085333c0.906667-0.106667 1.813333-0.192 2.730667-0.266667z" />\n  </svg>`,
  Ks = (a) =>
    `<svg t="1644533554308" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41733" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M241.365333 911.914667a83.925333 83.925333 0 1 1-122.88-114.346667l510.72-549.034667H304.64a69.973333 69.973333 0 0 1-69.973333-69.973333V155.306667C234.666667 116.650667 265.941333 85.333333 304.64 85.333333h553.685333c38.613333 0 69.973333 31.317333 69.973334 69.973334l-0.042667 553.685333a69.973333 69.973333 0 0 1-69.973333 69.930667h-23.296a69.973333 69.973333 0 0 1-69.973334-69.973334V349.098667L241.408 911.914667z" p-id="41734"></path>\n  </svg>`,
  qs = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M503.146667 906.570667a64.373333 64.373333 0 0 0 11.029333-0.341334l0.714667-0.085333 1.749333-0.245333 0.682667-0.117334a46.506667 46.506667 0 0 0 1.632-0.288l0.853333-0.181333c1.514667-0.32 2.986667-0.682667 4.458667-1.098667l0.202666-0.064a60.618667 60.618667 0 0 0 10.656-4.138666l0.64-0.330667c0.512-0.256 1.024-0.522667 1.525334-0.8l0.704-0.394667 1.493333-0.853333 0.426667-0.266667a47.466667 47.466667 0 0 0 3.36-2.186666 82.24 82.24 0 0 0 3.989333-3.04l0.512-0.416c1.173333-0.992 2.314667-2.016 3.413333-3.082667l0.298667-0.288 282.666667-277.333333a64 64 0 1 0-89.642667-91.370667L570.666667 690.208V150.816a64 64 0 0 0-61.6-63.957333l-2.4-0.042667a64 64 0 0 0-64 64v539.413333L268.821333 519.648a64 64 0 0 0-88.565333-1.024l-1.941333 1.888a64 64 0 0 0 0.864 90.506667l282.666666 277.333333a65.301333 65.301333 0 0 0 11.573334 9.013333l0.437333 0.266667c0.490667 0.298667 0.981333 0.576 1.482667 0.853333l0.704 0.394667c0.501333 0.277333 1.013333 0.544 1.514666 0.8l0.650667 0.32a52.949333 52.949333 0 0 0 2.784 1.312 63.765333 63.765333 0 0 0 7.872 2.848l0.213333 0.053333c1.450667 0.426667 2.933333 0.789333 4.437334 1.098667l0.864 0.170667c0.533333 0.106667 1.077333 0.213333 1.621333 0.298666l0.704 0.106667c0.576 0.106667 1.152 0.181333 1.738667 0.256l0.714666 0.085333c0.906667 0.106667 1.813333 0.192 2.730667 0.266667z" />\n  </svg>`,
  Ws = (a) =>
    `<svg t="1644533681770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41863" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M265.856 114.389333a77.397333 77.397333 0 1 0-120.874667 96.725334l461.653334 577.024h-286.293334c-35.669333 0-64.554667 28.885333-64.554666 64.512v21.504c0 35.626667 28.885333 64.512 64.512 64.512h510.677333c35.626667 0 64.512-28.885333 64.512-64.512V363.52c0-35.626667-28.885333-64.512-64.512-64.512h-21.504c-35.626667 0-64.512 28.885333-64.512 64.512v349.781333L265.813333 114.346667z" p-id="41864"></path>\n  </svg>`,
  Xs = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M916.501333 510.922667a64.373333 64.373333 0 0 0-0.341333-11.018667l-0.096-0.714667a51.232 51.232 0 0 0-0.245333-1.749333l-0.106667-0.693333a46.506667 46.506667 0 0 0-0.298667-1.621334l-0.181333-0.874666a60.266667 60.266667 0 0 0-1.088-4.448l-0.064-0.202667a60.618667 60.618667 0 0 0-4.138667-10.656l-0.330666-0.64a54.890667 54.890667 0 0 0-0.8-1.525333l-0.394667-0.693334a51.648 51.648 0 0 0-0.853333-1.493333l-0.266667-0.426667a47.466667 47.466667 0 0 0-2.197333-3.370666 82.24 82.24 0 0 0-3.029334-3.989334 65.301333 65.301333 0 0 0-3.498666-3.925333l-0.288-0.298667-277.333334-282.666666a64 64 0 1 0-91.370666 89.642666l170.56 173.845334H160.736a64 64 0 0 0-63.957333 61.6l-0.042667 2.4a64 64 0 0 0 64 64h539.413333L529.589333 745.248a64 64 0 0 0-1.034666 88.576l1.898666 1.930667a64 64 0 0 0 90.506667-0.853334l277.333333-282.666666a65.301333 65.301333 0 0 0 9.013334-11.584l0.256-0.426667a50.24 50.24 0 0 0 0.864-1.493333l0.394666-0.704c0.277333-0.501333 0.533333-1.002667 0.8-1.514667l0.32-0.64a52.949333 52.949333 0 0 0 1.301334-2.794667 63.765333 63.765333 0 0 0 2.848-7.872l0.053333-0.202666c0.426667-1.461333 0.789333-2.944 1.109333-4.448l0.170667-0.853334c0.106667-0.544 0.213333-1.088 0.298667-1.632l0.106666-0.693333c0.096-0.576 0.181333-1.162667 0.256-1.749333l0.085334-0.714667c0.106667-0.906667 0.192-1.813333 0.256-2.730667z" />\n  </svg>`,
  Js = (a) =>
    `<svg t="1644571091374" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40847" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M586.144 782.912a58.24 58.24 0 0 0 0 82.304l13.696 13.76a58.24 58.24 0 0 0 82.304 0l325.824-325.76a58.24 58.24 0 0 0 0-82.368l-325.76-325.76a58.24 58.24 0 0 0-82.368 0l-13.696 13.696a58.24 58.24 0 0 0 0 82.304l200.384 200.32H69.92a69.824 69.824 0 1 0 0 139.712H787.936l-201.792 201.792z" p-id="40848"></path>\n  </svg>`,
  Qs = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M512 789.333333a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m-6.058667-682.666666a64 64 0 0 1 64.725334 63.274666l5.333333 469.333334a64 64 0 0 1-128 1.450666l-5.333333-469.333333A64 64 0 0 1 505.941333 106.666667z" />\n  </svg>`,
  ao = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M512 512m-362.666667 0a362.666667 362.666667 0 1 0 725.333334 0 362.666667 362.666667 0 1 0-725.333334 0Z" />\n  </svg>`,
  eo = (a) =>
    `<svg t="1644534085318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42385" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512z" p-id="42386"></path><path d="M512 746.666667a234.666667 234.666667 0 1 0 0-469.333334 234.666667 234.666667 0 0 0 0 469.333334z m256-234.666667a256 256 0 1 1-512 0 256 256 0 0 1 512 0z" p-id="42387"></path>\n  </svg>`,
  io = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M512 441.770667l280.458667 275.861333a64 64 0 0 0 89.749333-91.264l-325.333333-320a64 64 0 0 0-89.749334 0l-325.333333 320a64 64 0 0 0 89.749333 91.264L512 441.770667z" />\n  </svg>`,
  so = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M512 582.229333l280.458667-275.861333a64 64 0 0 1 89.749333 91.264l-325.333333 320a64 64 0 0 1-89.749334 0l-325.333333-320a64 64 0 0 1 89.749333-91.264L512 582.229333z" />\n  </svg>`,
  oo = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M170.666667 576a64 64 0 1 1 0-128h682.666666a64 64 0 1 1 0 128H170.666667z" />\n  </svg>`,
  to = (a) =>
    `<svg t="1644534565789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42516" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M170.666667 486.4c0-9.386667 7.68-17.066667 17.066666-17.066667h648.533334c9.386667 0 17.066667 7.68 17.066666 17.066667v93.866667a17.066667 17.066667 0 0 1-17.066666 17.066666H187.733333a17.066667 17.066667 0 0 1-17.066666-17.066666v-93.866667z" p-id="42517"></path>\n  </svg>`,
  lo = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M529.653333 228.682667l365.077334 538.005333A21.333333 21.333333 0 0 1 877.077333 800H146.922667a21.333333 21.333333 0 0 1-17.653334-33.312l365.077334-538.005333a21.333333 21.333333 0 0 1 35.306666 0z" />\n  </svg>`,
  no = (a) =>
    `<svg t="1644533796105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41993" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M556.288 275.456l282.368 312.576c33.28 36.906667 6.229333 94.634667-44.373333 94.634667H229.632c-11.306667 0-22.4-3.157333-31.914667-9.088a57.6 57.6 0 0 1-21.76-24.362667 55.466667 55.466667 0 0 1 9.344-61.184l282.368-312.533333c5.546667-6.101333 12.373333-11.050667 19.968-14.378667a60.458667 60.458667 0 0 1 68.693334 14.336z" p-id="41994"></path><path d="M540.458667 289.706667l282.368 312.618666c19.968 22.186667 4.992 59.008-28.501334 59.008H229.546667a39.04 39.04 0 0 1-20.608-5.845333 36.266667 36.266667 0 0 1-13.738667-15.36 34.090667 34.090667 0 0 1 5.845333-37.76l282.368-312.576a37.546667 37.546667 0 0 1 12.757334-9.173333 39.168 39.168 0 0 1 44.245333 9.130666z m298.197333 298.325333l-282.368-312.576a60.501333 60.501333 0 0 0-88.661333 0.042667l-282.368 312.533333a55.466667 55.466667 0 0 0-9.344 61.141333c4.693333 10.026667 12.245333 18.474667 21.76 24.405334 9.514667 5.973333 20.608 9.088 31.914666 9.088h564.736c50.56 0 77.653333-57.728 44.330667-94.634667z" p-id="41995"></path>\n  </svg>`,
  ro = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024">\n    <path d="M547.498667 812.992L894.442667 292.586667a42.666667 42.666667 0 0 0-35.498667-66.325334H165.056a42.666667 42.666667 0 0 0-35.498667 66.325334l346.944 520.426666a42.666667 42.666667 0 0 0 70.997334 0z" />\n  </svg>`,
  co = (a) =>
    `<svg t="1644533848549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42124" width="${a.width}" height="${a.height}" fill="${a.color}">\n    <path d="M467.712 748.544l-282.368-312.576C152.064 399.061333 179.114667 341.333333 229.717333 341.333333h564.693334c11.306667 0 22.4 3.157333 31.914666 9.088 9.514667 5.930667 17.066667 14.378667 21.76 24.362667a55.381333 55.381333 0 0 1-9.344 61.184l-282.368 312.533333a58.88 58.88 0 0 1-19.968 14.378667 60.501333 60.501333 0 0 1-68.693333-14.336z" p-id="42125"></path><path d="M483.541333 734.293333L201.173333 421.632c-19.968-22.186667-4.992-59.008 28.501334-59.008H794.453333c7.338667 0 14.506667 2.048 20.608 5.845333a36.266667 36.266667 0 0 1 13.738667 15.36 34.133333 34.133333 0 0 1-5.845333 37.76l-282.368 312.576a37.589333 37.589333 0 0 1-12.757334 9.173334 39.125333 39.125333 0 0 1-44.245333-9.130667z m-298.197333-298.325333l282.368 312.576c5.546667 6.144 12.373333 11.008 19.968 14.336a60.501333 60.501333 0 0 0 68.693333-14.378667l282.368-312.533333a55.381333 55.381333 0 0 0 9.344-61.141333 57.6 57.6 0 0 0-21.76-24.405334A60.288 60.288 0 0 0 794.410667 341.333333H229.674667c-50.56 0-77.653333 57.728-44.330667 94.634667z" p-id="42126"></path>\n  </svg>`,
  ho = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 16 16">\n    <path d="M8.65274 1.73179C8.77451 1.60524 8.97705 1.60524 9.09881 1.73179L13.7325 6.54729C13.9218 6.74393 13.7824 7.07143 13.5095 7.07143H4.24206C3.96916 7.07143 3.8298 6.74393 4.01902 6.54729L8.65274 1.73179Z M7.0188 6.4523a0.62 0.62 0 0 1 0.62 -0.62h2.4762a0.612 0.612 0 0 1 0.612 0.612v7.428574a0.612 0.612 0 0 1 -0.612 0.612h-2.476194a0.612 0.612 0 0 1 -0.612 -0.612z" p-id="42126"></path>\n  </svg>`,
  go = (a) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 16 16">\n    <path d="M8.94076 14.2682C8.819 14.3948 8.61646 14.3948 8.49469 14.2682L3.86097 9.45271C3.67175 9.25607 3.81111 8.92857 4.08401 8.92857H13.3514C13.6243 8.92857 13.7637 9.25607 13.5745 9.45271L8.94076 14.2682Z M6.85507 2.147a0.62 0.62 0 0 1 0.62 -0.62h2.4762a0.62 0.62 0 0 1 0.62 0.62v7.42857a0.62 0.62 0 0 1 -0.62 0.62h-2.4762a0.62 0.62 0 0 1 -0.62 -0.62z" p-id="42126"></path>\n  </svg>`,
  po = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 15 15" fill="${a.color}" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4.03332 1.43335L4.45758 1.00909C4.22327 0.774771 3.84337 0.774771 3.60906 1.00909L4.03332 1.43335ZM1.00906 3.60909C0.77474 3.8434 0.77474 4.2233 1.00906 4.45761C1.24337 4.69193 1.62327 4.69193 1.85758 4.45761L1.00906 3.60909ZM6.20905 4.45761C6.44337 4.69193 6.82327 4.69193 7.05758 4.45761C7.2919 4.2233 7.2919 3.8434 7.05758 3.60909L6.20905 4.45761ZM3.43332 14C3.43332 14.3314 3.70195 14.6 4.03332 14.6C4.36469 14.6 4.63332 14.3314 4.63332 14H3.43332ZM8.79999 3.43335C8.46862 3.43335 8.19999 3.70198 8.19999 4.03335C8.19999 4.36472 8.46862 4.63335 8.79999 4.63335V3.43335ZM14 4.63335C14.3314 4.63335 14.6 4.36472 14.6 4.03335C14.6 3.70198 14.3314 3.43335 14 3.43335V4.63335ZM8.79999 6.90002C8.46862 6.90002 8.19999 7.16865 8.19999 7.50002C8.19999 7.83139 8.46862 8.10002 8.79999 8.10002V6.90002ZM12.2667 8.10002C12.598 8.10002 12.8667 7.83139 12.8667 7.50002C12.8667 7.16865 12.598 6.90002 12.2667 6.90002V8.10002ZM8.79999 10.3667C8.46862 10.3667 8.19999 10.6353 8.19999 10.9667C8.19999 11.2981 8.46862 11.5667 8.79999 11.5667V10.3667ZM10.5333 11.5667C10.8647 11.5667 11.1333 11.2981 11.1333 10.9667C11.1333 10.6353 10.8647 10.3667 10.5333 10.3667V11.5667ZM3.60906 1.00909L1.00906 3.60909L1.85758 4.45761L4.45758 1.85761L3.60906 1.00909ZM3.60906 1.85761L6.20905 4.45761L7.05758 3.60909L4.45758 1.00909L3.60906 1.85761ZM3.43332 1.43335V14H4.63332V1.43335H3.43332ZM8.79999 4.63335H14V3.43335H8.79999V4.63335ZM8.79999 8.10002H12.2667V6.90002H8.79999V8.10002ZM8.79999 11.5667H10.5333V10.3667H8.79999V11.5667Z" fill="${a.color}"/>\n  </svg>`,
  uo = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 15 15" fill="${a.color}" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4.03333 13.5667L3.60907 13.9909C3.84339 14.2252 4.22328 14.2252 4.4576 13.9909L4.03333 13.5667ZM7.0576 11.3909C7.29191 11.1566 7.29191 10.7767 7.0576 10.5424C6.82328 10.3081 6.44339 10.3081 6.20907 10.5424L7.0576 11.3909ZM1.8576 10.5424C1.62328 10.3081 1.24338 10.3081 1.00907 10.5424C0.774756 10.7767 0.774756 11.1566 1.00907 11.3909L1.8576 10.5424ZM4.63333 1C4.63333 0.668629 4.36471 0.4 4.03333 0.4C3.70196 0.4 3.43333 0.668629 3.43333 1H4.63333ZM8.8 3.43333C8.46863 3.43333 8.2 3.70196 8.2 4.03333C8.2 4.3647 8.46863 4.63333 8.8 4.63333V3.43333ZM14 4.63333C14.3314 4.63333 14.6 4.3647 14.6 4.03333C14.6 3.70196 14.3314 3.43333 14 3.43333V4.63333ZM8.8 6.9C8.46863 6.9 8.2 7.16863 8.2 7.5C8.2 7.83137 8.46863 8.1 8.8 8.1V6.9ZM12.2667 8.1C12.598 8.1 12.8667 7.83137 12.8667 7.5C12.8667 7.16863 12.598 6.9 12.2667 6.9V8.1ZM8.8 10.3667C8.46863 10.3667 8.2 10.6353 8.2 10.9667C8.2 11.298 8.46863 11.5667 8.8 11.5667V10.3667ZM10.5333 11.5667C10.8647 11.5667 11.1333 11.298 11.1333 10.9667C11.1333 10.6353 10.8647 10.3667 10.5333 10.3667V11.5667ZM4.4576 13.9909L7.0576 11.3909L6.20907 10.5424L3.60907 13.1424L4.4576 13.9909ZM4.4576 13.1424L1.8576 10.5424L1.00907 11.3909L3.60907 13.9909L4.4576 13.1424ZM3.43333 1V13.5667H4.63333V1H3.43333ZM8.8 4.63333H14V3.43333H8.8V4.63333ZM8.8 8.1H12.2667V6.9H8.8V8.1ZM8.8 11.5667H10.5333V10.3667H8.8V11.5667Z" fill="${a.color}"/>\n  </svg>`,
  wo = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3 2.5C2.17157 2.5 1.5 3.17157 1.5 4V12C1.5 12.8284 2.17157 13.5 3 13.5H13C13.8284 13.5 14.5 12.8284 14.5 12V4C14.5 3.17157 13.8284 2.5 13 2.5H3Z" stroke="${a.color}" stroke-linecap="round" stroke-linejoin="round"/>\n    <path d="M7 3V13" stroke="${a.color}" stroke-linecap="round" stroke-linejoin="round"/>\n    <path d="M2 6L7 3" stroke="${a.color}" stroke-width="0.7" stroke-linecap="square"/>\n    <path d="M2 9L7 6" stroke="${a.color}" stroke-width="0.7" stroke-linecap="square"/>\n    <path d="M2 12L7 9" stroke="${a.color}" stroke-width="0.7" stroke-linecap="square"/>\n    <path d="M5 13L7 12" stroke="${a.color}" stroke-width="0.7" stroke-linecap="square"/>\n  </svg>`,
  vo = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 20 20" fill="${a.color}" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 4L9.6084 3.54541C9.83347 3.35153 10.1665 3.35153 10.3916 3.54541L10 4ZM13.3916 6.12975C13.6427 6.34603 13.6709 6.72488 13.4546 6.97594C13.2383 7.227 12.8595 7.2552 12.6084 7.03892L13.3916 6.12975ZM7.3916 7.03892C7.14054 7.2552 6.76169 7.227 6.54541 6.97594C6.32914 6.72488 6.35734 6.34603 6.6084 6.12975L7.3916 7.03892ZM10.6 15C10.6 15.3314 10.3314 15.6 10 15.6C9.66863 15.6 9.4 15.3314 9.4 15H10.6ZM10.3916 3.54541L13.3916 6.12975L12.6084 7.03892L9.6084 4.45459L10.3916 3.54541ZM10.3916 4.45459L7.3916 7.03892L6.6084 6.12975L9.6084 3.54541L10.3916 4.45459ZM9.4 15V4H10.6V15H9.4Z" fill="${a.color}"/>\n  </svg>`,
  mo = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 20 20" fill="${a.color}" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 16L9.6084 16.4546C9.83347 16.6485 10.1665 16.6485 10.3916 16.4546L10 16ZM13.3916 13.8702C13.6427 13.654 13.6709 13.2751 13.4546 13.0241C13.2383 12.773 12.8595 12.7448 12.6084 12.9611L13.3916 13.8702ZM7.3916 12.9611C7.14054 12.7448 6.76169 12.773 6.54541 13.0241C6.32914 13.2751 6.35734 13.654 6.6084 13.8702L7.3916 12.9611ZM10.6 5C10.6 4.66863 10.3314 4.4 10 4.4C9.66863 4.4 9.4 4.66863 9.4 5H10.6ZM10.3916 16.4546L13.3916 13.8702L12.6084 12.9611L9.6084 15.5454L10.3916 16.4546ZM10.3916 15.5454L7.3916 12.9611L6.6084 13.8702L9.6084 16.4546L10.3916 15.5454ZM9.4 5V16H10.6V5H9.4Z" fill="${a.color}"/>\n  </svg>`,
  Co = (a) =>
    `<svg width="${a.width}" height="${a.height}" fill="${a.color}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M9.5,5.5h-3v-3C6.5,2.2,6.3,2,6,2S5.5,2.2,5.5,2.5v3h-3C2.2,5.5,2,5.7,2,6s0.2,0.5,0.5,0.5h3v3\tC5.5,9.8,5.7,10,6,10s0.5-0.2,0.5-0.5v-3h3C9.8,6.5,10,6.3,10,6S9.8,5.5,9.5,5.5z" fill="${a.color}"/></svg>`,
  Lo = (a) =>
    `<svg  width="${a.width}" height="${a.height}" fill="${a.color}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M819.2 556.8H224c-25.6 0-44.8-19.2-44.8-44.8s19.2-44.8 44.8-44.8h595.2c25.6 0 44.8 19.2 44.8 44.8s-19.2 44.8-44.8 44.8z" fill="${a.color}" /></svg>`,
  Mo = (a) =>
    `<svg width="${a.width}" height="${a.height}" viewBox="0 0 20 20" fill="${a.color}" xmlns="http://www.w3.org/2000/svg">\n    <path d="M Z" />\n  </svg>`,
  fo = {
    "icon-arrow-up": Ks,
    "icon-arrow-down": Ws,
    "icon-right-strong": Js,
    "icon-exclamation": Qs,
    "icon-circle": eo,
    "icon-up-strong": io,
    "icon-down-strong": so,
    "icon-bar": oo,
    "icon-triangle": no,
    "icon-sanjiao": co,
    "icon-tailedarrow-up": ho,
    "icon-tailedarrow-down": go,
    "icon-add": Co,
    "icon-minus": Lo,
    empty: Mo,
  },
  bo = (a, e) => {
    var i;
    return null == (i = fo[a]) ? void 0 : i.call(fo, e);
  };
const Eo = {
  [d.BAR]: (a, e, i, s, n, r) => {
    var c, d;
    const { data: h, excludeTotal: g } = e;
    let p, u;
    if ((p = a.indicatorKey)) u = "number";
    else {
      const e = null != (c = i.find((a) => new Gs(a).id === h.pillId)) ? c : a;
      ({ valueType: u, field: p } = e);
    }
    const [w, v] = o({
      field: p,
      records: s,
      valueType: u,
      excludeTotal: g,
      statistic:
        null == (d = null == r ? void 0 : r.statistics) ? void 0 : d[p],
    });
    (a.columnType = new n.columns.type.PercentCompleteBarColumn({
      min: w,
      max: v,
      type: !1 !== h.barAxis ? "negative" : "negative_no_axis",
      dependField: i.find((a) => new Gs(a).id === h.pillId) ? p : h.pillId,
    })),
      (a.style = {
        ...a.style,
        showBar: t((a) => {
          if (l(e, a)) return !1;
        }, !0),
        barPosiColor: `rgba(${qi(h.positiveColor).rgb().join(",")}, 0.5)`,
        barNagiColor: `rgba(${qi(h.negativeColor).rgb().join(",")}, 0.5)`,
        barBgColor: "transparent",
        barAxisColor: h.barAxisColor,
        barHeight: !1 !== h.barAxis ? "50%" : "100%",
        barPadding:
          !1 !== h.barAxis
            ? ["25%", 10]
            : "right" === h.orientation
            ? [0, 0, 0, 10]
            : [0, 10, 0, 0],
        showBarMark: !0,
        barMarkWidth: 2,
        barMarkPosition: "bottom" === h.barMarkPosition ? "bottom" : "right",
        barMarkPosiColor: h.positiveColor,
        barMarkNagiColor: h.negativeColor,
        barRightToLeft: "right" === h.orientation,
      });
  },
  [d.COLOR_LEVELS]: h,
  [d.SINGLE_COLOR]: (a, e) => {
    var i, s;
    const { data: o } = e,
      r = (a) => {
        if (l(e, a)) return null;
        let i = null;
        const { col: s, row: t, grid: r } = a,
          c = r.getCellOriginRecord(s, t),
          d = Object.fromEntries(js(r.options.header).map((a) => [a.field, a]));
        for (let e = 0; e < o.length; e++)
          if (n(o[e].ruleGroup, c, d)) {
            i = o[e];
            break;
          }
        return i;
      };
    a.style = {
      ...a.style,
      color: t(
        (a) => {
          const e = r(a);
          if (e) return e.color;
        },
        null == (i = a.style) ? void 0 : i.color
      ),
      bgColor: t(
        (a) => {
          const e = r(a);
          if (e) return e.bgColor;
        },
        null == (s = a.style) ? void 0 : s.bgColor
      ),
    };
  },
  [d.TAG]: (a, e, i, s, o, n, d) => {
    var h, g, p, u;
    const { data: w, excludeTotal: v } = e,
      m = null != (h = a.indicatorKey) ? h : new Gs(a).id,
      { displayConf: C } = n,
      L = (a) => {
        if (l(e, a)) return null;
        let i = null;
        const { dataValue: s, col: o, row: t, grid: n } = a,
          r = n.getCellOriginRecord(o, t),
          h = n.options.header
            ? Object.fromEntries(js(n.options.header).map((a) => [a.field, a]))
            : void 0;
        for (let e = 0; e < w.length; e++) {
          const { pillId: a } = w[e];
          if (
            c(
              w[e].rules.map((e) => ({
                ...e,
                pillId: a,
              })),
              a && !d && Ki.exports.has(r, a) ? (null == r ? void 0 : r[a]) : s,
              r,
              h && a ? (null == h ? void 0 : h[a]) : {}
            )
          ) {
            i = w[e];
            break;
          }
        }
        return i;
      };
    a.style = {
      ...a.style,
      icon: t(
        (a) => {
          const e = L(a);
          if (e && "none" !== e.tagIconPosition)
            return {
              name: `${e.tagIcon}|${e.color}`,
              svg: bo(e.tagIcon, {
                width: "12px",
                height: "12px",
                color: e.color,
              }),
              positionType:
                "left" === e.tagIconPosition
                  ? o.TYPES.IconPosition.left
                  : o.TYPES.IconPosition.right,
              width: 12,
              height: 12,
            };
        },
        null == (g = a.style) ? void 0 : g.icon
      ),
      color: t(
        (a) => {
          const e = L(a);
          return e ? e.textColor || e.color : C.bodyFontColor;
        },
        null == (p = a.style) ? void 0 : p.color
      ),
    };
    const M = null != (u = a.fieldFormat) ? u : a.format;
    (a.fieldFormat = (a) => {
      var e, i;
      const s = null == a ? void 0 : a[m];
      if (v && r(a)) return null != (e = null == M ? void 0 : M(a)) ? e : s;
      let o = null;
      for (let t = 0; t < w.length; t++) {
        const e = w[t].pillId ? (null == a ? void 0 : a[w[t].pillId]) : s;
        if (c(w[t].rules, e)) {
          o = w[t];
          break;
        }
      }
      return "onlyTag" === (null == o ? void 0 : o.tagIconPosition)
        ? ""
        : null != (i = null == M ? void 0 : M(a))
        ? i
        : s;
    }),
      (a.format = a.fieldFormat);
  },
};
var xo = ((a) => (
  (a.DEFAULT_RED = "#E33232"),
  (a.DEFAULT_GREEN = "#058D52"),
  (a.DEFAULT_YELLOW = "#D29B19"),
  (a.DEFAULT_GRAY = "#959DA5"),
  (a.DEFAULT_TEXT_COLOR = "#9EAFC6"),
  a
))(xo || {});
const yo = {
    MENU_SORT_ASC: "sort_asc",
    MENU_SORT_DESC: "sort_desc",
    MENU_FROZEN_COL: "frozen_col",
    MENU_DIMMET_INFO: "dimmet_info",
    MENU_NUM_FORMAT: "num_format",
    MENU_VISUAL_STYLE: "visual_style",
    MENU_SORT_CANCEL: "sort_cancel",
  },
  To = {
    MENU_COPY_VALUE: "copy_value",
    MENU_COPY_VALUE_HEADER: "copy_value_header",
  },
  $o = [
    {
      key: "group1",
      members: ["icon-add", "icon-bar", "icon-minus"],
      colors: [xo.DEFAULT_GREEN, xo.DEFAULT_GRAY, xo.DEFAULT_RED],
    },
    {
      key: "group2",
      members: ["icon-triangle", "icon-bar", "icon-sanjiao"],
      colors: [xo.DEFAULT_GREEN, xo.DEFAULT_GRAY, xo.DEFAULT_RED],
    },
    {
      key: "group3",
      members: ["icon-up-strong", "icon-bar", "icon-down-strong"],
      colors: [xo.DEFAULT_GREEN, xo.DEFAULT_GRAY, xo.DEFAULT_RED],
    },
    {
      key: "group4",
      members: ["icon-tailedarrow-up", "icon-bar", "icon-tailedarrow-down"],
      colors: [xo.DEFAULT_GREEN, xo.DEFAULT_GRAY, xo.DEFAULT_RED],
    },
    {
      key: "group5",
      members: ["icon-add", "icon-bar", "icon-minus"],
      colors: [xo.DEFAULT_RED, xo.DEFAULT_GRAY, xo.DEFAULT_GREEN],
    },
    {
      key: "group6",
      members: ["icon-triangle", "icon-bar", "icon-sanjiao"],
      colors: [xo.DEFAULT_RED, xo.DEFAULT_GRAY, xo.DEFAULT_GREEN],
    },
    {
      key: "group7",
      members: ["icon-up-strong", "icon-bar", "icon-down-strong"],
      colors: [xo.DEFAULT_RED, xo.DEFAULT_GRAY, xo.DEFAULT_GREEN],
    },
    {
      key: "group8",
      members: ["icon-tailedarrow-up", "icon-bar", "icon-tailedarrow-down"],
      colors: [xo.DEFAULT_RED, xo.DEFAULT_GRAY, xo.DEFAULT_GREEN],
    },
  ],
  Ao = "rgba(46, 98, 241, 1)",
  _o = 100,
  Ro = "rgba(20, 20, 20, 0.45)",
  Do = ({ vizData: a }) => {
    const { display: e, autoWrap: i } = a.displayConf;
    return {
      widthMode: "custom" === e ? "standard" : e,
      disableColumnResize: "adaptive" === e,
      autoRowHeight: !0,
      autoWrapText: null != i && i,
      enableColumnResizeOnAllRows: !0,
      maxCharactersNumber: 256,
      keyboardOptions: {
        copySelected: !1,
      },
      columnResizerType: "all",
      dropDownMenu: {
        renderMode: "html",
      },
    };
  },
  Vo = (a) => {
    const e = {
        rows: [],
        columns: [],
        dimensions: [],
        rowHierarchyType: "grid",
        rowHierarchyIndent: 30,
        rowExpandLevel: 1,
        showColumnHeader: !0,
        showRowHeader: !0,
        corner: {
          titleOnDimension: "row",
          headerStyle: {
            textStick: !0,
          },
        },
      },
      { headerHorizontal: i, headerVertical: s } = a.displayConf,
      { row: o = [] } = a.cells[0];
    return (
      (e.showColumnHeader = i),
      (e.showRowHeader = s),
      (e.corner = {
        ...e.corner,
        titleOnDimension:
          (null == o ? void 0 : o.length) >= 1 ? "row" : "column",
      }),
      e
    );
  },
  Fo = (a) => {
    const e = new Map();
    return (
      ((a, e) => {
        let i = 0,
          s = [...a];
        for (; 0 !== s.length; ) {
          e(s, i++);
          const a = [];
          null == s ||
            s.forEach((e) => {
              e.isGroup && a.push(...e.children);
            }),
            (s = a);
        }
      })(a, (a, i) => {
        const s = a.filter((a) => a.isGroup);
        if (0 === s.length) return;
        const o = s.map((a) => a.isGroup && a.field).join("-");
        e.set(i, o);
      }),
      e
    );
  },
  So = (a, e, i, s = !1) => {
    const { dimensions: o } = e,
      t = [...o];
    let l = t.length - 1;
    for (const n of a.values()) {
      const a = s ? l : t.findIndex((a) => !!a.indicators);
      t.splice(a, 0, {
        dimensionKey: n,
        dimensionTitle: Wi.i18n`指标分组`,
        drillDown: !1,
        drillUp: !1,
        showSort: !1,
        width: "auto",
      }),
        l++;
    }
    return (
      t.forEach((a, e) => {
        var s;
        a.width = null != (s = null == i ? void 0 : i[e]) ? s : "auto";
      }),
      t
    );
  },
  ko = (a, e) => {
    a.forEach((a, i, s) => {
      const o = e(a, i, s);
      a.children && !0 !== o && ko(a.children, e);
    });
  },
  Io = (a, e, i, s, o = "rows") => {
    const { dimensions: t, columns: l, rows: n } = i,
      r = t.find((a) => a.dimensionKey === s);
    let c;
    ko(
      "columns" === o ? l : n,
      (a, e, i) =>
        !(c || !i.length || !i.every((a) => a.dimensionKey === s)) &&
        ((c = a.children), !0)
    );
    const d = (e, i) =>
      e.map((e) => {
        var o, t;
        if (!1 === e.isGroup)
          return {
            dimensionKey: s,
            indicatorKey: e.field,
            value:
              null ==
              (t =
                null == (o = null == r ? void 0 : r.indicators)
                  ? void 0
                  : o.find((a) => a.indicatorKey === e.field))
                ? void 0
                : t.value,
            children: c,
          };
        {
          const s = d(e.children, i + 1);
          return {
            dimensionKey: a.get(i),
            value: e.title,
            children: s.filter((a) => {
              var e;
              return (
                ((null == (e = a.children) ? void 0 : e.length) > 0 &&
                  Ki.exports.isNil(a.indicatorKey)) ||
                !Ki.exports.isNil(a.indicatorKey)
              );
            }),
            indicatorKey: void 0,
          };
        }
      });
    return d(e, 0);
  },
  Ho = "rgba(255,255,255,0)",
  Uo = 19,
  Zo = 12,
  Oo = 8.6,
  Po = 4,
  No = 18,
  Bo = "normal",
  zo = 4,
  Go = 600,
  jo = (
    {
      bodyFontSize: a,
      bodyFontColor: e,
      alternateRow: i,
      alternateRowColor: s,
    },
    o
  ) => ({
    font: `normal normal normal ${a}px ${g}`,
    color: t(e, null == o ? void 0 : o.color),
    bgColor: t(
      null == i || i
        ? ({ row: a, grid: e }) =>
            (a - e.columnHeaderLevelCount) % 2 == 0 ? Ho : s
        : Ho,
      null == o ? void 0 : o.bgColor
    ),
    lineHeight: Math.max(18, null != a ? a : 0),
  }),
  Yo = (
    {
      headerFontSize: a,
      headerFontColor: e,
      headerBackground: i,
      headerColor: s,
    },
    o
  ) => ({
    font: (e) => `${e.dataValue === Xi ? "italic" : "normal"} bold ${a}px ${g}`,
    color: t(e, null == o ? void 0 : o.color),
    bgColor: t(null == i || i ? s : Ho, null == o ? void 0 : o.bgColor),
    lineHeight: Math.max(18, null != a ? a : 0),
  }),
  Ko = Ki.exports.memoize((a) => {
    var e;
    const i =
      "tight" === a.rowSpaceMode
        ? 4
        : "custom" === a.rowSpaceMode
        ? null != (e = a.customRowPadding)
          ? e
          : 4
        : 8.6;
    return [i, 19, i, 19];
  }),
  qo = (a, e, i) => {
    var s, o;
    const { fieldMap: t, chartType: l } = e,
      n = e.displayConf;
    if (!t[a]) return;
    const r = i || Ji(a, e);
    if ("function" == typeof r) return r;
    const c = (null == (s = n.specialValue) ? void 0 : s.dimensions) || Qi.NULL,
      d =
        (null == (o = n.specialValue) ? void 0 : o.measures) || Qi.BRACKET_TXT,
      h =
        l === as.RAW_TABLE
          ? t[a].role === es.MEASURE
            ? d
            : c
          : t[a].location === is.MEASURE
          ? d
          : c;
    return ss(r, os[h]);
  },
  Wo = "viPipeline";
export {
  Bo as CELL_FONT_WEIGHT,
  No as CELL_LINE_HEIGHT,
  Uo as CELL_PADDING_LEFT,
  Zo as CELL_PADDING_LEFT_TIGHT,
  Oo as CELL_PADDING_TOP,
  Po as CELL_PADDING_TOP_TIGHT,
  Is as COMPACT_FIELD_PREFIX,
  Zs as COMPACT_GROUP_DIM_KEY,
  Os as COMPACT_GROUP_INDEX_KEY,
  Us as COMPACT_GROUP_INDICATOR_PREFIX,
  Ps as COMPACT_GROUP_ORIGIN_FIELD_KEY,
  Hs as COMPACT_GROUP_PREFIX,
  xo as ConditionalFormatColor,
  Ao as DEFAULT_LINE_COLOR,
  _o as DEFAULT_MAX_MARK_COUNT,
  ts as DEFAULT_MEASURE_CANVAS_ID,
  Ro as DEFAULT_SUB_TITLE_COLOR,
  p as FONT_FAMILY,
  Go as HEADER_FONT_WEIGHT,
  u as INVALID_VALUE_MAP,
  Co as IconAdd,
  qs as IconArrowDown,
  Ys as IconArrowUp,
  oo as IconBar,
  ao as IconCircle,
  so as IconDownStrong,
  Mo as IconEmpty,
  Qs as IconExclamation,
  wo as IconFrozenCol,
  vo as IconHeaderSortAsc,
  mo as IconHeaderSortDesc,
  Xs as IconRightStrong,
  ro as IconSanjiao,
  po as IconSortAsc,
  uo as IconSortDesc,
  lo as IconTriangle,
  io as IconUpStrong,
  w as LABEL_TYPES_FILTER_MAP,
  Ts as LEGEND_ALIGN_MAP,
  $s as LEGEND_ID,
  As as LEGEND_TYPE,
  _s as LINES_MAP,
  v as LINE_NUMBER_COL_NAME,
  Ws as NewIconDownArrow,
  co as NewIconDownTriangle,
  Js as NewIconGentleArrow,
  to as NewIconGentleTriangle,
  Ks as NewIconUpArrow,
  eo as NewIconUpRound,
  no as NewIconUpTriangle,
  $o as PeriodConditionList,
  m as RuleMatch,
  Ho as TRANSPARENT_COLOR,
  zo as TREND_CELL_PADDING,
  C as TableVisualType,
  L as TagIconMap,
  go as TailedarrowDown,
  ho as TailedarrowUp,
  M as XYChartTypes,
  ls as allFields,
  ns as allRenderFields,
  f as animation,
  b as axisDimension,
  E as axisMeasure,
  x as barInteractive,
  y as barStyle,
  T as bilateralLayout,
  $ as brush,
  A as buildLegend,
  _ as buildSectionGoal,
  R as buildSectionTick,
  D as buildSectionTickLabel,
  rs as calcCombinedLabel,
  V as cartesian,
  F as centerValue,
  S as chartSpaceSizeToVChartSize,
  k as circleViewsLabel,
  I as color,
  H as colorLevelFunc,
  U as columnInteractive,
  Z as combinationIndicators,
  O as combinationLabel,
  P as combinationRecords,
  N as combinationReferenceLine,
  B as combinationStack,
  cs as combinedLabelMap,
  z as commonLayout,
  So as completeDimensions,
  Rs as conditionalConfigToLegendConfig,
  Do as configAdapter,
  To as contextMenuItemKey,
  ds as converStringToNumber,
  hs as createFieldFormatter,
  G as crosshair,
  j as dataFilterCustomer,
  Y as datasets,
  Wo as default,
  K as displayMode,
  ks as dualAxisLayout,
  q as enableMeasureParallelList,
  W as execPipeline,
  X as execPipelineAsync,
  Ss as findDataItem,
  J as forecast,
  Q as formatterCustomer,
  aa as funnelLabel,
  ea as gaugeAxis,
  ia as gaugeData,
  sa as gaugeExtensionMark,
  oa as gaugeIndicator,
  ta as gaugeReverse,
  la as gaugeSection,
  na as gaugeStyle,
  Vo as generateBasicLayoutByVizData,
  gs as generateHash,
  ra as getAutoLabelColor,
  jo as getBodyStyle,
  ps as getCellByMark,
  ca as getColumnMinMax,
  Io as getColumnOrRowsGroups,
  us as getFieldFormat,
  Fo as getFieldGroupLevelDimensions,
  ws as getFieldId,
  vs as getFields,
  js as getFlatHeaders,
  da as getFormatMethod,
  ha as getFormatMethodWithValue,
  qo as getFormatter,
  Ns as getGroupsForTranspose,
  Yo as getHeaderStyle,
  bo as getIconSvg,
  ms as getMeasureCanvas,
  Cs as getOriginalFields,
  Ls as getOriginalMeasures,
  Ms as getPillFormat,
  fs as getPillsByField,
  ga as getPipeline,
  pa as getScatterSizeRange,
  ua as getSimpleTick,
  wa as getSimpleTickEnd,
  Ko as getTableCellPadding,
  bs as getTextMeasure,
  va as getTotalPercentFormatter,
  ma as getTotalValueFormatter,
  Fs as getValidDataKeys,
  yo as headerMenuItemKey,
  Ca as hierarchySankey,
  La as histogramInteractive,
  Lo as iconMinus,
  Ma as initCombination,
  fa as initFunnel,
  ba as initGauge,
  Ea as initHistogram,
  xa as initLiquid,
  ya as initMap,
  Ta as initMultiSeriesChart,
  $a as initProgress,
  Aa as initRadar,
  _a as initSankey,
  Ra as initScatter,
  Da as initScatterMap,
  Va as initWordCloud,
  Fa as instanceOfTableVisualBarData,
  Sa as instanceOfTableVisualColorLevelsData,
  ka as instanceOfTableVisualRule,
  Ia as instanceOfTableVisualRules,
  Ha as instanceOfTableVisualSingleColorData,
  Ua as instanceOfTableVisualSingleColorDataArray,
  Za as instanceOfTableVisualTagData,
  Oa as instanceOfTableVisualTagDataArray,
  Pa as invalidType,
  Na as isArea,
  Ba as isAreaLikeChart,
  za as isAreaPercent,
  Ga as isBarLikeChart,
  ja as isBilateral,
  Ya as isCartesianChart,
  Ka as isCircleViews,
  qa as isCombination,
  Wa as isCombined,
  Xa as isDualAxis,
  Ja as isExcludeTotalAndProcessingTotal,
  Qa as isForecastPredRange,
  ae as isFunnelChart,
  ee as isGauge,
  ie as isHorizontalBar,
  se as isLine,
  oe as isLineLikeChart,
  te as isMapChart,
  le as isMatchRule,
  ne as isMatchRuleGroup,
  re as isMobile,
  ce as isNonPivotTable,
  de as isNum,
  Es as isNumberType,
  he as isOKRTable,
  ge as isPivot,
  pe as isPivotCombined,
  ue as isPivotLikeTable,
  we as isPivotTable,
  ve as isPivotableTotalChart,
  me as isPolarChart,
  Ce as isRadarChart,
  Le as isRawTable,
  xs as isRenderField,
  Vs as isSameDataItem,
  Me as isSankey,
  fe as isScatter,
  be as isSingleDimensionChart,
  Ee as isSymbolLikeChart,
  xe as isTable,
  ye as isTableChart,
  Te as isTrendTable,
  $e as isVChartInstance,
  Ae as isVTableChartInstance,
  _e as isVTableInstance,
  Re as isVisActorInstance,
  De as isXYChart,
  Ve as label,
  Fe as labelCustomer,
  Se as legend,
  ke as lineStyle,
  Ie as linearInterpolation,
  He as linearInterpolations,
  Ue as liquidData,
  Ze as liquidGoal,
  Oe as liquidIndicator,
  Pe as liquidReverse,
  Ne as liquidStyle,
  Be as location,
  ko as loopLayoutColumnsOrRows,
  ze as mapInteractive,
  Ge as mapLabel,
  je as mapLegend,
  Ye as measureCardPipes,
  Ke as multiSeriesLabel,
  qe as multiSeriesStack,
  We as multipleInteractive,
  Xe as multipleLineStyle,
  Je as partialSplit,
  Qe as percent,
  ai as pipeline,
  ei as pipelineAsync,
  ii as pivot,
  si as polar,
  oi as polarInteractive,
  ti as polarLabel,
  li as polarMerge,
  ni as polarRadius,
  ys as positionToOrient,
  Eo as processorMap,
  ri as progressAxis,
  ci as progressData,
  di as progressGoal,
  hi as progressIndicator,
  gi as progressSection,
  pi as progressStyle,
  ui as progressText,
  wi as radarAxis,
  vi as radarLabel,
  mi as referenceLine,
  Ci as roseAxis,
  Li as sankeyColor,
  Mi as sankeyDimensionLabel,
  fi as sankeyInteractive,
  bi as sankeyLabel,
  Ei as sankeyLegend,
  xi as scatterInteractive,
  yi as scatterLabel,
  Ti as scatterLegend,
  $i as scatterMapColor,
  Ai as scatterMapLabel,
  _i as scatterMapLegend,
  Ri as scatterMapSize,
  Di as stack,
  Vi as tableChartDisplayMode,
  Fi as tableChartLegend,
  Si as tableChartTheme,
  ki as theme,
  Ii as toNum,
  Hi as tooltip,
  Ui as trendStyle,
  Zi as updatePropertyDefine,
  Oi as valuePercent,
  Pi as xAxes,
  Ni as xyAxes,
  Bi as xyyAxes,
  zi as yAxes,
  Gi as yxAxes,
  ji as yxxAxes,
  Yi as yyAxes,
};
