import {fO as e, fP as i, cB as n, b1 as t, fQ as r, fR as l, fS as o, cw as a, fT as d, fU as s, fV as u, er as c, fW as p, fX as f, fY as m, fZ as v, f_ as y, f$ as I, g0 as h, g1 as g, g2 as E, g3 as T, g4 as C, g5 as A, g6 as M, g7 as N, g8 as L, g9 as R, ga as b, gb as D, gc as S, gd as O, cx as _, ge as P, gf as B, gg as q, ct as w, cV as x, gh as G, gi as k, gj as U, gk as F, gl as $, gm as W, ck as Y, gn as H, go as V, gp as K, gq as j, gr as z, cY as Q, gs as X, gt as J, cE as Z, gu as ee, gv as ie, gw as ne, gx as te, ag as re, ah as le, gy as oe, gz as ae, gA as de, gB as se, gC as ue, gD as ce, bk as pe, gE as fe, ci as me, gF as ve, cf as ye, gG as Ie, cl as he, cW as ge, co as Ee, cp as Te, gH as Ce, gI as Ae, gJ as Me, gK as Ne, gL as Le, gM as Re, gN as be, gO as De, aS as Se, gP as Oe, gQ as _e, gR as Pe, gS as Be, gT as qe, gU as we, gV as xe, gW as Ge, gX as ke, gY as Ue, cA as Fe, gZ as $e, g_ as We, g$ as Ye, cn as He, h0 as Ve, h1 as Ke, h2 as je, h3 as ze, h4 as Qe, h5 as Xe, h6 as Je, h7 as Ze, h8 as ei, h9 as ii, cj as ni, ha as ti, hb as ri, hc as li, hd as oi, he as ai, hf as di, hg as si, hh as ui, hi as ci, hj as pi, hk as fi, hl as mi, hm as vi, hn as yi, ho as Ii, hp as hi, cX as gi, hq as Ei, hr as Ti, hs as Ci, ht as Ai, hu as Mi, hv as Ni, hw as Li, hx as Ri} from "../entry/index.7886b0f6.js";
import {i as bi, g as Di, a as Si, b as Oi, c as _i, d as Pi, e as Bi, m as qi, f as wi, h as xi, u as Gi, j as ki, k as Ui, l as Fi, n as $i, r as Wi, o as Yi, p as Hi, q as Vi, s as Ki, t as ji, v as zi, w as Qi, x as Xi, y as Ji, z as Zi, A as en, B as nn} from "./pill.0c310496.js";
e.AVG,
e.MAX,
e.MIN,
e.COUNT,
e.DISTINCT_COUNT;
const tn = e => t(e) ? e.some((e => e.connectionMode === r.Live)) : e.connectionMode === r.Live
  , rn = e => !!e && e.some((i => ([l.CH, l.OPEN_CH, l.CH_FILE].includes(i.type) || In(e)) && tn(i)))
  , ln = e => !!e && e.some((i => ([l.BYTEHOUSE_CDW, l.BYTEHOUSE_CE, l.BYTEHOUSE_CE_BUILDIN].includes(i.type) || hn(e)) && tn(i)))
  , on = e => !!e && e.some((i => (i.type === l.DORIS || yn(e)) && tn(i)))
  , an = e => !!e && e.some((i => (i.type === l.HIVE_PRESTO || mn(e)) && tn(i)))
  , dn = e => !!e && e.some((e => e.type === l.RDS && tn(e)))
  , sn = e => !!e && e.some((e => {
    var i;
    return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.databricks && tn(e)
}
))
  , un = e => !!e && e.some((e => {
    var i;
    return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.postgresql && tn(e)
}
))
  , cn = e => !!e && e.some((e => {
    var i;
    return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.hologres && tn(e)
}
))
  , pn = e => !!e && e.some((e => {
    var i;
    return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.las && tn(e)
}
))
  , fn = e => !!e && e.some((e => {
    var i;
    return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.redshift && tn(e)
}
))
  , mn = e => !!e && e.some((e => {
    var i;
    return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.byteQuery
}
))
  , vn = e => !!e && e.some((e => {
    var i;
    return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.mysql
}
))
  , yn = e => !!e && e.some((e => {
    var i;
    return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.doris
}
))
  , In = e => !!e && e.some((e => {
    var i, n;
    return e.type === l.LIVE_MULTI_TABLE && ((null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.clickHouse || (null === (n = e.liveDataSetConf) || void 0 === n ? void 0 : n.driverName) === o.clickHouseOpensource)
}
))
  , hn = e => !!e && e.some((e => {
    var i, n, t, r;
    return e.type === l.LIVE_MULTI_TABLE && ((null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.bytehouseCdw || (null === (n = e.liveDataSetConf) || void 0 === n ? void 0 : n.driverName) === o.bytehouseCdwEngine || (null === (t = e.liveDataSetConf) || void 0 === t ? void 0 : t.driverName) === o.bytehouseCe || (null === (r = e.liveDataSetConf) || void 0 === r ? void 0 : r.driverName) === o.bytehouseCeBuiltin)
}
))
  , gn = e => !!e && e.some((e => {
    var i;
    return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.finder
}
))
  , En = e => !!e && e.some((e => {
    var i;
    return e.type === l.LIVE_MULTI_TABLE && [o.presto, o.impala, o.postgresql, o.hologres].includes(null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName)
}
))
  , Tn = e => {
    if (En(e)) {
        if (e.some((e => {
            var i;
            return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.presto
        }
        )))
            return o.presto;
        if (e.some((e => {
            var i;
            return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.impala
        }
        )))
            return o.impala
    }
}
  , Cn = e => !!e && e.some((e => "metrics" === e.category));
var An;
const Mn = e => e.display.queryType === d.EXTEND ? d.TABLE : e.display.type !== d.TREND_TABLE && null !== (An = e.display.queryType) && void 0 !== An ? An : e.display.type;
var Nn;
const Ln = e => {
    var i;
    return Object.keys(null !== (Nn = null === (i = e.customConfig) || void 0 === i ? void 0 : i.fields) && void 0 !== Nn ? Nn : [])
}
  , Rn = e => e && e.length ? e : Object.values(s)
  , bn = e => {
    const i = Rn(e);
    return 1 === i.length && i[0] === s.DIM
}
  , Dn = e => {
    const i = Rn(e);
    return 1 === i.length && i[0] === s.MEA
}
  , Sn = (e, i) => {
    let n = [];
    if (1 === e.length)
        n = [[e[0]]];
    else if (0 === i.length)
        n = e.map((e => [e]));
    else {
        let t = [...e];
        const r = i.map((e => e.field));
        for (; t.length > 0; ) {
            const e = t.shift();
            if (r.includes(e)) {
                const r = i.find((i => i.field === e));
                if (r && !0 === r.isGroup && r.children) {
                    const i = e
                      , l = r.children.map((e => e.field));
                    n.push([i, ...l]),
                    t = t.filter((e => !(e === i || l.includes(e))))
                }
            } else
                n.push([e])
        }
    }
    return n
}
  , On = "empty"
  , _n = "aeolus_where_compare_all_measures"
  , Pn = "all_period_compare_measures"
  , Bn = "all_percent_measures"
  , qn = "AXIS_LEGEND_SORT"
  , wn = "LEGEND_TOPN"
  , xn = u.i18n`无法获取数据集信息`
  , Gn = "HH:mm:ss";
c("00:00:00", Gn),
c("23:59:59", Gn),
p.PERCENT,
f.SIGNIFICANT_DECIMAL;
const kn = "any_op";
var Un, Fn, $n, Wn, Yn, Hn, Vn, Kn, jn, zn, Qn, Xn, Jn, Zn, et, it, nt, tt, rt, lt, ot, at, dt, st, ut, ct, pt, ft, mt, vt, yt, It, ht, gt;
function Et(e, i) {
    return i.every((i => ( (e, i) => {
        var n, t;
        return !i.actionConfigureByServer || ((null === (n = i.actionConfigures) || void 0 === n ? void 0 : n.supportedAnalysis) ? i.actionConfigures.supportedAnalysis.includes(e) : !(null === (t = i.actionConfigures) || void 0 === t ? void 0 : t.unsupportedAnalysis) || !i.actionConfigures.unsupportedAnalysis.includes(e))
    }
    )(e, i)))
}
d.TABLE,
d.PIVOT_TABLE,
d.TABLE,
d.HISTOGRAM,
d.WORD_CLOUD,
(Fn = Un || (Un = {})).minute = "minute",
Fn.hour = "hour",
Fn.day = "day",
Fn.tradingDay = "tradingDay",
Fn.week = "week",
Fn.month = "month",
Fn.year = "year",
Fn.bimonthly = "bimonthly",
Fn.quarter = "quarter",
Fn.semiannual = "semiannual",
Fn.bytedWeek = "bytedWeek",
Fn.customWeek = "customWeek",
(Wn = $n || ($n = {}))[Wn.current = 0] = "current",
Wn[Wn.previous = 1] = "previous",
(Hn = Yn || (Yn = {})).Relative = "relative",
Hn.SingleDate = "singleDate",
Hn.Absolute = "absolute",
Hn.Advanced = "advanced",
Hn.Special = "special",
Hn.RangeDate = "rangeDate",
(Kn = Vn || (Vn = {})).NullDate = "nullDate",
Kn.NotNullDate = "notNullDate",
Kn.All = "all",
(zn = jn || (jn = {})).Fixed = "fixed",
zn.Dynamic = "dynamic",
zn.Unlimited = "unlimited",
(Xn = Qn || (Qn = {})).Forward = "forward",
Xn.Backward = "backward",
(Zn = Jn || (Jn = {})).Now = "now",
Zn.Yesterday = "yesterday",
Zn.Today = "today",
Zn.Week = "week",
Zn.BytedWeek = "bytedWeek",
Zn.CustomWeek = "customWeek",
Zn.Month = "month",
Zn.Bimonthly = "bimonthly",
Zn.Quarter = "quarter",
Zn.Semiannual = "semiannual",
Zn.Year = "year",
(it = et || (et = {})).commonly = "commonly",
it.custom = "custom",
(tt = nt || (nt = {})).empty = "empty",
tt.last1D = "last-1-days",
tt.last7D = "last-7-days",
tt.week = "week",
tt.last1W = "last-1-weeks",
tt.last14D = "last-14-days",
tt.last30D = "last-30-days",
tt.last365D = "last-365-days",
tt.quarter = "quarter",
tt.last1Q = "last-1-quarters",
tt.last3M = "last-3-months",
tt.last6M = "last-6-months",
tt.last1Y = "last-1-years",
tt.last2Y = "last-2-years",
tt.month = "month",
tt.bimonthly = "bimonthly",
tt.lastDataDay = "last-data-day",
tt.lastData7D = "last-data-7-days",
tt.lastData14D = "last-data-14-days",
tt.lastData30D = "last-data-30-days",
(lt = rt || (rt = {})).empty = "empty",
lt.lastDataMonth = "last-data-month",
lt.month = "month",
lt.bimonthly = "bimonthly",
lt.quarter = "quarter",
lt.semiannual = "semiannual",
lt.last1Q = "last-1-quarters",
lt.last3M = "last-3-months",
lt.last6M = "last-6-months",
lt.last1Y = "last-1-years",
(at = ot || (ot = {})).empty = "empty",
at.lastDataWeek = "last-data-month",
at.week = "week",
at.last1W = "last-1-weeks",
(st = dt || (dt = {})).UpDown = "UpDown",
st.LeftRight = "LeftRight",
(ct = ut || (ut = {})).Loose = "Loose",
ct.Normal = "Normal",
ct.Compact = "Compact",
(ft = pt || (pt = {})).Uninitialized = "",
ft.Equal = "==",
ft.Greater = ">",
ft.GreaterEqual = ">=",
ft.Less = "<",
ft.LessEqual = "<=",
ft.NotEqual = "!=",
ft.In = "in",
ft.NotIn = "not in",
ft.Between = "between",
ft.NotBetween = "not between",
ft.Like = "like",
ft.NotLike = "not like",
ft.ArrayHas = "arrayHas",
ft.NotArrayHas = "notArrayHas",
ft.MapKeyHas = "mapKeyHas",
ft.Last = "last",
ft.LastSync = "lastSync",
ft.Null = "is null",
ft.NotNull = "is not null",
ft.Empty = "is empty",
ft.NotEmpty = "is not empty",
ft.AdvancedDate = "advancedDate",
ft.SpecialDate = "specialDate",
ft.IsNaN = "isNaN",
ft.IsNotNaN = "isNotNaN",
(vt = mt || (mt = {})).Comma = ",",
vt.Space = " ",
vt.LineFeed = "\n",
(It = yt || (yt = {})).Contain = "Contain",
It.NotContain = "NotContain",
It.StartWith = "StartWith",
It.EndWith = "EndWith",
It.Accurate = "Accurate",
(gt = ht || (ht = {})).save = "save",
gt.saveAs = "saveAs",
gt.routine = "routine",
gt.sampleForQuery = "sampleForQuery",
gt.sampleForDownload = "sampleForDownload",
gt.monitorTrigger = "monitorTrigger",
gt.subscribeTrigger = "subscribeTrigger",
gt.broadcastTrigger = "broadcastTrigger",
gt.findFactor = "findFactor",
gt.logicalTable = "logicalTable",
gt.replaceDataset = "replaceDataset",
gt.UNIQ = "uniq",
gt.PERCENTILE = "percentile",
gt.AUTO_QUERY = "autoQuery",
gt.DATASETS_CONFIG_BY_SERVER = "DATASETS_CONFIG_BY_SERVER",
gt.LINKAGE = "linkage",
gt.CUSTOMFIELD = "customField",
gt.GLOBALFILTER = "globalFilter",
gt.MODIFYDIMMET = "modifyDimMet",
gt.FILTERNOTIN = "filterNotIn",
gt.CONDITIONFILTER = "conditionFilter",
gt.FILTERMORE = "filterMore",
gt.FILTEROR = "filterOr",
gt.CHARTSORT = "chartSort",
gt.LASTSYNC = "lastSync",
gt.LAYER = "layer",
gt.TREEFILTER = "treeFilter",
gt.COMBINATIONFILTER = "combinationFilter",
gt.derivedPillFilter = "derivedPillFilter",
gt.timestampAggr = "timestampAggr",
gt.SORT = "sort",
gt.TOPN = "topN",
gt.TOPNBYDIMENSIONS = "topNByDimensions",
gt.COMBINED = "combined",
gt.PERCENT = "percent",
gt.WHERE_COMPARE = "whereCompare",
gt.WHERE_COMPARE_CONFIDENCE = "whereCompareConfidence",
gt.PERIODCOMPARE = "periodCompare",
gt.REFERENCE_LINE = "referenceLine",
gt.TABLE_CALCULATION = "tableCalculation",
gt.TABLE_CALCULATION_NEXT = "tableCalculationNext",
gt.CLUSTERING = "clustering",
gt.FORECAST = "forecast";
const Tt = ({dataSets: e, featureKey: i, schema: t, envFeatureConfig: s}) => {
    const c = {
        enabled: !0,
        visible: !0,
        tip: ""
    };
    if (a(e))
        return c;
    switch (i) {
    case ht.save:
    case ht.saveAs:
    case ht.routine:
        e.some((e => e.type === l.SQL_EDITOR_SAVED)) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`来源于SQL查询生成的数据集，暂不支持`);
        break;
    case ht.sampleForQuery:
        {
            var p, f;
            const i = !(null !== (f = null == s || null === (p = s.vizQuery) || void 0 === p ? void 0 : p.showSample) && void 0 !== f && !f)
              , u = e.every((e => {
                var i, t, a, d;
                if (e.actionConfigureByServer && !1 === (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.enableSample))
                    return !1;
                if (an([e]))
                    return !0;
                if (gn([e]))
                    return !0;
                if ((e => e.some((e => e.type === l.HIVE_CNCH)))([e]))
                    return !0;
                if (En([e]))
                    return Tn([e]) !== o.impala && (null === (t = e.liveDataSetConf) || void 0 === t ? void 0 : t.driverName) !== o.postgresql && (null === (a = e.liveDataSetConf) || void 0 === a ? void 0 : a.driverName) !== o.hologres && !!(null === (d = e.liveDataSetConf) || void 0 === d ? void 0 : d.isSingleLive);
                if (pn([e]))
                    return !1;
                if (fn([e]))
                    return !1;
                if (sn([e]))
                    return !1;
                if (un([e]))
                    return !1;
                if (cn([e]))
                    return !1;
                if (n(e.sampleRate))
                    return !1;
                if (e.connectionMode === r.Live) {
                    var s, u;
                    if ("metrics" === e.category)
                        return !0;
                    if ((hn([e]) || In([e])) && (null === (s = e.liveDataSetConf) || void 0 === s ? void 0 : s.isSingleLive))
                        return !0;
                    if (!(null === (u = e.routine) || void 0 === u ? void 0 : u.datasetStatus))
                        return !1
                }
                return !0
            }
            ))
              , m = t && t.display.type !== d.PIVOT_TABLE && a(t.logicalTableConf);
            c.enabled = Boolean(i && u && m),
            c.enabled || (c.visible = !1);
            break
        }
    case ht.sampleForDownload:
        {
            const i = e.every((e => {
                var i, t;
                return (!e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.enableSample)) && !(e.connectionMode === r.Live && !(null === (t = e.routine) || void 0 === t ? void 0 : t.datasetStatus) || n(e.sampleRate) || on([e]))
            }
            ));
            c.enabled = i,
            c.visible = i;
            break
        }
    case ht.TABLE_CALCULATION:
        {
            const n = e.map((e => e.type));
            Et(i, e) ? gn(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`Finder 数据源直连模式暂不支持表计算功能`) : an(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`Hive 数据源直连模式暂不支持表计算功能`) : n.includes(l.HIVE_PRESTO) && (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`HIVE_PRESTO 数据源暂不支持表计算功能`) : (c.enabled = !1,
            c.visible = !Cn(e),
            c.tip = u.i18n`该数据集不支持表计算功能`);
            break
        }
    case ht.TABLE_CALCULATION_NEXT:
        e.some((e => {
            var i;
            return e.actionConfigureByServer && !1 === (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.enableQuadraticTableCalculation)
        }
        )) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`仅支持clickhouse数据集`);
        break;
    case ht.CLUSTERING:
        {
            const n = e.map((e => e.type));
            Et(i, e) ? tn(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`直连模式不支持聚类`) : n.includes(l.HIVE_PRESTO) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`HIVE_PRESTO 数据源暂不支持聚类功能`) : gn(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`Finder 数据源直连模式暂不支持聚类功能`) : En(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = Tn(e) === o.presto ? u.i18n`Presto 数据源直连模式暂不支持聚类功能` : u.i18n`Impala 数据源直连模式暂不支持聚类功能`) : rn(e) || In(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`ClickHouse 数据源直连模式暂不支持聚类功能`) : (ln(e) || hn(e)) && (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`ByteHouse 数据源直连模式暂不支持聚类功能`) : (c.enabled = !1,
            c.visible = !Cn(e),
            c.tip = u.i18n`该数据集不支持聚类功能`);
            break
        }
    case ht.FORECAST:
        {
            const n = e.map((e => e.type));
            Et(i, e) ? tn(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`直连模式不支持预测`) : n.includes(l.HIVE_PRESTO) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`HIVE_PRESTO 数据源暂不支持预测功能`) : gn(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`Finder 数据源直连模式暂不支持预测功能`) : En(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = Tn(e) === o.presto ? u.i18n`Presto 数据源直连模式暂不支持预测功能` : u.i18n`Impala 数据源直连模式暂不支持预测功能`) : rn(e) || In(e) ? (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`ClickHouse 数据源直连模式暂不支持预测功能`) : (ln(e) || hn(e)) && (c.enabled = !1,
            c.visible = !0,
            c.tip = u.i18n`ByteHouse 数据源直连模式暂不支持预测功能`) : (c.enabled = !1,
            c.visible = !Cn(e),
            c.tip = u.i18n`该数据集不支持预测功能`);
            break
        }
    case ht.SORT:
    case ht.TOPN:
    case ht.COMBINED:
    case ht.PERCENT:
    case ht.WHERE_COMPARE:
    case ht.PERIODCOMPARE:
    case ht.REFERENCE_LINE:
        Et(i, e) || (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`该数据集不支持该功能`);
        break;
    case ht.monitorTrigger:
        tn(e) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`直连模式仅支持定时监控`);
        break;
    case ht.broadcastTrigger:
    case ht.subscribeTrigger:
        tn(e) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`直连模式仅支持定时订阅`);
        break;
    case ht.findFactor:
        var v, y, I;
        if (!(null !== (I = null == s || null === (v = s.vizQuery) || void 0 === v || null === (y = v.findFactor) || void 0 === y ? void 0 : y.enableFindFactor) && void 0 !== I && !I))
            if (Cn(e))
                c.enabled = !1,
                c.visible = !1;
            else {
                if (rn(e) || In(e))
                    break;
                e.some((e => e.connectionMode === r.Live)) ? (c.enabled = !1,
                c.visible = !0,
                c.tip = u.i18n`直连模式不支持归因分析配置`) : e.some((e => {
                    return (i = e) && !a(i.mirror);
                    var i
                }
                )) ? (c.enabled = !1,
                c.visible = !0,
                c.tip = u.i18n`镜像数据集不支持归因`) : ln(e) || hn(e) ? (c.enabled = !1,
                c.visible = !0,
                c.tip = u.i18n`ByteHouse 直连不支持归因分析配置`) : gn(e) ? (c.enabled = !1,
                c.visible = !0,
                c.tip = u.i18n`Finder 直连不支持归因分析配置`) : En(e) ? (c.enabled = !1,
                c.visible = !0,
                c.tip = Tn(e) === o.presto ? u.i18n`Presto 直连不支持归因分析配置` : u.i18n`Impala 直连不支持归因分析配置`) : on(e) && (c.enabled = !1,
                c.visible = !0,
                c.tip = u.i18n`Doris 直连不支持归因分析配置`)
            }
        else
            c.enabled = !1,
            c.visible = !1;
        break;
    case ht.logicalTable:
        gn(e) || tn(e) || bi(t) ? (c.enabled = !1,
        c.visible = !1) : (h = null == e ? void 0 : e[0],
        (null === (g = h.labelConf) || void 0 === g ? void 0 : g.dataSetLabelType) === m.Label && (c.enabled = !1,
        c.visible = !1));
        break;
    case ht.replaceDataset:
        Cn(e) ? (c.enabled = !1,
        c.tip = u.i18n`业务主题不支持替换数据集`) : e.forEach((e => {
            var i;
            e.actionConfigureByServer && !1 === (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.enableReportReplaceDataset) && (c.enabled = !1,
            c.tip = u.i18n`该数据集不支持替换数据集`)
        }
        ));
        break;
    case ht.PERCENTILE:
        on(e) ? (c.enabled = !1,
        c.visible = !1,
        c.tip = u.i18n`直连模式 Doris 不支持分位数`) : dn(e) ? (c.enabled = !1,
        c.visible = !1,
        c.tip = u.i18n`直连模式 Rds 不支持分位数`) : vn(e) ? (c.enabled = !1,
        c.visible = !1,
        c.tip = u.i18n`多表直连 Mysql 不支持分位数`) : yn(e) ? (c.enabled = !1,
        c.visible = !1,
        c.tip = u.i18n`多表直连 Doris 不支持分位数`) : (e => !!e && e.some((e => {
            var i;
            return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.rds
        }
        )))(e) ? (c.enabled = !1,
        c.visible = !1,
        c.tip = u.i18n`多表直连 Rds 不支持分位数`) : Tn(e) === o.impala && (c.isImpala = !0);
        break;
    case ht.AUTO_QUERY:
        break;
    case ht.TOPNBYDIMENSIONS:
        En(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = Tn(e) === o.presto ? u.i18n`Presto直连 不支持每个维度下的前N条` : u.i18n`Impala直连 不支持每个维度下的前N条`) : on(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Doris直连 不支持每个维度下的前N条`) : an(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Hive直连 不支持每个维度下的前N条`) : dn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Rds直连 不支持每个维度下的前N条`) : (e => !!e && e.some((e => {
            var i;
            return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.starrocks && tn(e)
        }
        )))(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Starrocks直连 不支持每个维度下的前N条`) : pn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Las直连 不支持每个维度下的前N条`) : fn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Redshift直连 不支持每个维度下的前N条`) : sn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Databricks直连 不支持每个维度下的前N条`) : un(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Postgresql直连 不支持每个维度下的前N条`) : cn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`Hologres直连 不支持每个维度下的前N条`) : vn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`多表直连 Mysql 不支持每个维度下的前N条`) : yn(e) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`多表直连 Doris 不支持每个维度下的前N条`);
        break;
    case ht.WHERE_COMPARE_CONFIDENCE:
        e.map((e => e.type)).includes(l.HIVE_PRESTO) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`HIVE_PRESTO 数据源暂不支持置信区间`),
        gn(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`直连 Finder 不支持置信区间`) : En(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = Tn(e) === o.presto ? u.i18n`直连 Presto 不支持置信区间` : u.i18n`直连 Impala 不支持置信区间`) : rn(e) || In(e) ? (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`直连 ClickHouse 不支持置信区间`) : (ln(e) || hn(e)) && (c.enabled = !1,
        c.visible = !0,
        c.tip = u.i18n`直连 ByteHouse 不支持置信区间`);
        break;
    case ht.UNIQ:
        {
            const i = e[0];
            if (c.enabled = !1,
            c.tip = "",
            (e => !!e && e.some((i => ([l.MYSQL, l.MYSQL_CUSTOM_SQL].includes(i.type) || vn(e)) && tn(i))))(e))
                return c;
            if (un(e))
                return c.enabled = !1,
                c.tip = u.i18n`Postgresql 直连数据集不支持`,
                c;
            if (cn(e))
                return c.enabled = !1,
                c.tip = u.i18n`Hologres 直连数据集不支持`,
                c;
            if (an(e))
                c.enabled = !0,
                c.tip = u.i18n`使用 approx_distinct 函数进行计算，查询性能较快，结果为近似值（和精确结果差距±2.3%）`;
            else if (function(e) {
                return e.connectionMode !== r.Live || tn([e]) && (on([e]) || rn([e]) || ln([e]) || an([e]))
            }(i)) {
                const e = on([i]) ? "APPROX_COUNT_DISTINCT" : "uniq";
                c.enabled = !0,
                c.tip = u.i18n`使用 ${e} 函数进行计算，查询性能较快，结果为近似值`
            } else
                En(e) ? (c.enabled = !0,
                c.tip = u.i18n`使用 approx_distinct 函数进行计算，查询性能较快，结果为近似值`) : gn(e) && (c.enabled = !0,
                c.tip = u.i18n`使用 uniq 函数进行计算，查询性能较快，结果为近似值`);
            break
        }
    case ht.DATASETS_CONFIG_BY_SERVER:
        c.enabled = !1,
        c.visible = !1,
        (e => !!e && e.some((e => !0 === e.actionConfigureByServer)))(e) && (c.enabled = !0);
        break;
    case ht.LINKAGE:
        {
            const i = e.some((e => {
                var i;
                return e.actionConfigureByServer && (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.disableLinkage)
            }
            ));
            c.enabled = !i;
            break
        }
    case ht.CUSTOMFIELD:
        {
            const i = e.some((e => {
                var i;
                return e.actionConfigureByServer && (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.disableCustomField)
            }
            ));
            c.enabled = !i;
            break
        }
    case ht.GLOBALFILTER:
        {
            const i = e.some((e => {
                var i, n;
                return e.actionConfigureByServer && !1 === (null === (i = e.actionConfigures) || void 0 === i || null === (n = i.filterConstraints) || void 0 === n ? void 0 : n.enableGlobalFilter)
            }
            ));
            c.enabled = !i;
            break
        }
    case ht.MODIFYDIMMET:
        c.enabled = e.every((e => {
            var i;
            return !e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.enableModifyDimMet)
        }
        ));
        break;
    case ht.FILTERNOTIN:
        c.enabled = e.every((e => {
            var i, n;
            return !e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i || null === (n = i.filterConstraints) || void 0 === n ? void 0 : n.enableFilterNotIn)
        }
        ));
        break;
    case ht.FILTERMORE:
        c.enabled = e.every((e => {
            var i, n;
            return !e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i || null === (n = i.filterConstraints) || void 0 === n ? void 0 : n.enableFilterMore)
        }
        ));
        break;
    case ht.CONDITIONFILTER:
        c.enabled = e.every((e => {
            var i, n;
            return !e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i || null === (n = i.filterConstraints) || void 0 === n ? void 0 : n.enableConditionFilter)
        }
        ));
        break;
    case ht.CHARTSORT:
        c.enabled = e.every((e => {
            var i;
            return !e.actionConfigureByServer || !0 !== (null === (i = e.actionConfigures) || void 0 === i ? void 0 : i.disabledChartSort)
        }
        ));
        break;
    case ht.FILTEROR:
        c.enabled = e.every((e => {
            var i, n;
            return !e.actionConfigureByServer || !1 !== (null === (i = e.actionConfigures) || void 0 === i || null === (n = i.filterConstraints) || void 0 === n ? void 0 : n.enableFilterOr)
        }
        )) && function(e) {
            let i = 1 / 0;
            return e.forEach((e => {
                var n, t, r;
                e.actionConfigureByServer && (null === (n = e.actionConfigures) || void 0 === n || null === (t = n.filterConstraints) || void 0 === t ? void 0 : t.filterDepth) && (i = Math.min(i, null === (r = e.actionConfigures.filterConstraints) || void 0 === r ? void 0 : r.filterDepth))
            }
            )),
            i
        }(e) > 1;
        break;
    case ht.LASTSYNC:
        (Cn(e) || e.some((e => {
            var i;
            return e.type === l.LIVE_MULTI_TABLE && (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.starrocks
        }
        ))) && (c.enabled = !1);
        break;
    case ht.LAYER:
        Cn(e) && (c.enabled = !1,
        c.tip = u.i18n`业务主题不支持层级`);
        break;
    case ht.TREEFILTER:
        Cn(e) ? (c.enabled = !1,
        c.tip = u.i18n`指标查询不支持树形筛选`) : fn(e) ? (c.enabled = !1,
        c.tip = u.i18n`Redshift直连不支持树形筛选`) : sn(e) ? (c.enabled = !1,
        c.tip = u.i18n`Databricks直连不支持树形筛选`) : un(e) ? (c.enabled = !1,
        c.tip = u.i18n`Postgresql直连不支持树形筛选`) : cn(e) && (c.enabled = !1,
        c.tip = u.i18n`Hologres直连不支持树形筛选`);
        break;
    case ht.COMBINATIONFILTER:
        Cn(e) && (c.enabled = !1,
        c.tip = u.i18n`指标查询暂不支持组合筛选`);
        break;
    case ht.derivedPillFilter:
        (fn(e) || sn(e) || un(e) || cn(e)) && (c.enabled = !1);
        break;
    case ht.timestampAggr:
        fn(e) ? c.enabled = !0 : c.enabled = !1
    }
    var h, g;
    return c
}
;
var Ct;
(Ct || (Ct = {})).MODIFY = "modify",
v(( (e, i) => {
    const n = Di(i).filter(y);
    return {
        selectedDimIds: n.filter((i => {
            var n;
            return (null === (n = e.fieldMap[i.dimMetId]) || void 0 === n ? void 0 : n.roleType) === s.DIM
        }
        )).map(( ({dimMetId: e}) => e)),
        selectedMetIds: n.filter((i => {
            var n;
            return (null === (n = e.fieldMap[i.dimMetId]) || void 0 === n ? void 0 : n.roleType) === s.MEA
        }
        )).map(( ({dimMetId: e}) => e))
    }
}
));
const At = v((e => I.from(e)))
  , Mt = [d.HISTOGRAM, d.TREND_TABLE]
  , Nt = e => {
    const i = Mn(e);
    return !Mt.includes(i)
}
  , Lt = [d.RAW_TABLE, d.HISTOGRAM, d.GAUGE, d.PROGRESS, d.WATERFALL, d.WATERFALL_CHANGE, d.TREND_TABLE]
  , Rt = e => {
    const i = Mn(e);
    return !Lt.includes(i)
}
  , bt = [d.PIVOT_TABLE, d.HISTOGRAM, d.RADAR, d.SANKEY, d.GAUGE, d.PROGRESS, d.WATERFALL, d.WATERFALL_CHANGE, d.TREND_TABLE]
  , Dt = e => {
    const i = Mn(e);
    return !bt.includes(i)
}
  , St = [d.GAUGE, d.PROGRESS, d.HISTOGRAM, d.MEASURE_TREND, d.TREND_TABLE]
  , Ot = e => {
    const i = Mn(e);
    return !St.includes(i)
}
  , _t = [d.MAP, d.SCATTER_MAP, d.SCATTER, d.CIRCLE_VIEWS, d.WORD_CLOUD, d.HISTOGRAM, d.GAUGE, d.PROGRESS, d.MEASURE_TREND, d.TREND_TABLE]
  , Pt = e => {
    var i, n;
    const t = Mn(e)
      , r = e.display.type;
    return !(_t.includes(t) || [d.GIS_TRACE_MAP, d.TREND_TABLE].includes(r) || [d.GIS_BAR_MAP].includes(t) && (null == e || null === (i = e.colors) || void 0 === i || null === (n = i[0]) || void 0 === n ? void 0 : n.roleType) !== h.DIM)
}
  , Bt = [d.RAW_TABLE, d.PIVOT_TABLE, d.TABLE, d.LINE, d.AREA, d.AREA_PERCENT, d.COLUMN, d.COLUMN_PERCENT, d.COLUMN_PARALLEL, d.BAR, d.BAR_PERCENT, d.BAR_PARALLEL, d.DUAL_AXIS, d.BILATERAL, d.CIRCLE_VIEWS, d.COMBINATION, d.WORD_CLOUD, d.FUNNEL, d.RADAR, d.MEASURE_CARD, d.COMPARATIVE_MEASURE_CARD, d.MEASURE_TREND]
  , qt = e => {
    const i = Mn(e);
    return Bt.includes(i)
}
  , wt = [d.COLUMN, d.COLUMN_PARALLEL, d.BAR, d.BAR_PARALLEL, d.LINE, d.AREA, d.SCATTER, d.CIRCLE_VIEWS, d.DUAL_AXIS, d.COMBINATION, d.WATERFALL, d.MEASURE_TREND];
d.COLUMN,
d.COLUMN_PARALLEL,
d.BAR,
d.BAR_PARALLEL,
d.LINE,
d.AREA,
d.SCATTER,
d.CIRCLE_VIEWS,
d.DUAL_AXIS,
d.COMBINATION,
d.WATERFALL;
const xt = e => wt.includes(e.display.type)
  , Gt = [d.BILATERAL, d.BAR, d.BAR_PARALLEL, d.BAR_PERCENT, d.COMBINATION, d.TABLE, d.LINE, d.COLUMN, d.COLUMN_PERCENT, d.COLUMN_PARALLEL, d.AREA, d.AREA_PERCENT, d.DUAL_AXIS, d.PIVOT_TABLE]
  , kt = e => {
    const i = Mn(e);
    return Gt.includes(i)
}
  , Ut = [d.LINE]
  , Ft = e => Ut.includes(e.display.type)
  , $t = [d.TREND_TABLE]
  , Wt = e => !$t.includes(e.display.type);
function Yt(e, i) {
    return e.reduce(( (e, n) => e.set(i(n), n)), new Map)
}
var Ht, Vt, Kt, jt, zt, Qt, Xt, Jt, Zt, er, ir, nr, tr, rr;
(Vt = Ht || (Ht = {})).TABLE = "table",
Vt.CHART = "chart",
(jt = Kt || (Kt = {})).TOP = "top",
jt.BOTTOM = "bottom",
(Qt = zt || (zt = {})).ALL = "all",
Qt.CURRENT = "current",
(Jt = Xt || (Xt = {})).OUTSIDE = "outside",
Jt.INSIDE = "inside",
(er = Zt || (Zt = {})).MEASURE_ON_TOP = "measureTop",
er.MEASURE_ON_BOTTOM = "measureBottom",
er.MEASURE_ON_LEFT = "measureLeft",
er.MEASURE_ON_RIGHT = "measureRight",
(nr = ir || (ir = {})).SUM = "sum",
nr.AVG = "avg",
nr.MAX = "max",
nr.MIN = "min",
nr.COUNT = "count",
nr.UNIQ = "uniq",
nr.DISTINCT_COUNT = "count_distinct ",
nr.DETAIL = "detail",
(rr = tr || (tr = {})).Raw = "detail",
rr.Sum = "sum",
rr.Average = "avg",
rr.Min = "min",
rr.Max = "max",
rr.Hidden = "hidden";
const lr = (e, i, n, t) => {
    const r = g(e, i, n);
    return e.sourceType !== E.CALCULATION && !e.notJoinQuery && (e.sourceType !== E.COMPARE || !e.id.includes("_confidence")) && (T.isNumber(r) || C(e)) && (!t || !A(i[e.dimMetId]))
}
;
var or, ar;
(ar = or || (or = {})).Row = "row",
ar.Column = "column";
const dr = e => {
    var i;
    return e.type === d.COMBINATION ? null === (i = e.conf[d.COMBINATION]) || void 0 === i ? void 0 : i.layout : [d.BAR, d.BAR_PERCENT, d.BAR_PARALLEL].includes(e.type) ? or.Column : or.Row
}
;
function sr(e, i, n, t) {
    const r = function(e, i, n) {
        return Si(e).filter((e => Pi(e, i, n)))
    }(e, i, n);
    if ("all" === t.applyType)
        return r.map((e => ({
            id: e.id,
            method: t.applyMethod
        })));
    const l = Yt(r, (e => e.id));
    var o;
    return (null !== (o = t.methodsList) && void 0 !== o ? o : []).filter((e => !!l.has(e.id)))
}
var ur, cr, pr, fr, mr, vr, yr, Ir, hr, gr, Er, Tr, Cr, Ar, Mr, Nr, Lr, Rr, br, Dr, Sr, Or, _r, Pr, Br, qr, wr, xr, Gr, kr, Ur, Fr, $r, Wr, Yr, Hr, Vr, Kr, jr, zr, Qr, Xr, Jr, Zr, el, il, nl, tl, rl, ll, ol, al;
ir.AVG,
ir.MAX,
ir.MIN,
ir.COUNT,
ir.DISTINCT_COUNT,
(cr = ur || (ur = {})).ALL = "all",
cr.NOW = "now",
(fr = pr || (pr = {})).PERCENT = "percent",
fr.DETAIL = "detail",
(vr = mr || (mr = {})).DAY = "d",
vr.WEEK = "w",
vr.BIWEEK = "ww",
vr.MONTH = "M",
vr.BIMONTH = "MM",
vr.Quarter = "Q",
vr.Year = "Y",
(Ir = yr || (yr = {})).RelativeRatio = "relativeRatio",
Ir.LastWeekRatio = "lastweekRatio",
Ir.LastMonthRatio = "lastmonthRatio",
Ir.LastYearRatio = "lastyearRatio",
Ir.BaseDate = "basedate",
Ir.Custom = "custom",
(gr = hr || (hr = {})).FIXED = "fixed",
gr.COMPUTED = "compute",
(Tr = Er || (Er = {})).AVERAGE = "average",
Tr.MAX = "max",
Tr.MIN = "min",
Tr.SUM = "sum",
Tr.MEDIAN = "median",
Tr.STANDARD_DEVIATION = "standardDeviation",
(Ar = Cr || (Cr = {})).TABLE = "table",
Ar.PANE = "pane",
(Nr = Mr || (Mr = {})).NAME = "name",
Nr.VALUE = "value",
(Rr = Lr || (Lr = {})).DASHED = "dashed",
Rr.DOTTED = "dotted",
Rr.SOLID = "solid",
(Dr = br || (br = {})).TABLE = "table",
Dr.AXIS_LEGEND = "axis_legend",
Dr.AXIS = "axis",
Dr.LEGEND = "legend",
Dr.PIVOT_CHART = "pivot_chart",
(Or = Sr || (Sr = {})).ASC = "asc",
Or.DESC = "desc",
Or.CUSTOM = "custom",
Or.MANUAL = "manual",
(Pr = _r || (_r = {})).LIST = "list",
Pr.CUSTOM = "custom",
(qr = Br || (Br = {})).TOPN = "topN",
qr.SORT = "sort",
(xr = wr || (wr = {})).Row = "row",
xr.Column = "col",
xr.Table = "table",
xr.Custom = "custom",
xr.Legend = "legend",
xr.Axis = "axis",
(kr = Gr || (Gr = {})).DownThenAcross = "down-then-across",
kr.Down = "down",
kr.AcrossThenDown = "across-then-down",
kr.Across = "across",
(Fr = Ur || (Ur = {})).Difference = "difference",
Fr.PercentDifferenceFrom = "percentDifferenceFrom",
Fr.PercentOfTotal = "percentOfTotal",
Fr.RunningTotal = "runningTotal",
Fr.Percentile = "percentile",
Fr.Rank = "rank",
Fr.MovingCalculation = "movingCalculation",
(Wr = $r || ($r = {})).Difference = "difference",
Wr.PercentDifferenceFrom = "percentDifferenceFrom",
(Hr = Yr || (Yr = {})).Previous = "-1",
Hr.Next = "1",
Hr.First = "FIRST()",
Hr.Last = "LAST()",
(Kr = Vr || (Vr = {})).Sum = "sum",
Kr.Avg = "avg",
Kr.Min = "min",
Kr.Max = "max",
(zr = jr || (jr = {})).DESC = "desc",
zr.ASC = "asc",
(Xr = Qr || (Qr = {})).RANK = "rank",
Xr.RANK_MODIFIED = "rank_modified",
Xr.RANK_DENSE = "rank_dense",
Xr.RANK_UNIQUE = "rank_unique",
(Zr = Jr || (Jr = {})).BY_RESULT = "by_result",
Zr.BY_DIMENSIONS = "by_dimensions",
Zr.TOP_DIMENSIONS = "top_dimensions",
Zr.BY_LEGEND = "by_legend",
(il = el || (el = {})).Rows = "rows",
il.Percent = "percent",
(tl = nl || (nl = {})).STORE = "store",
tl.RATIO = "ratio",
tl.DIFF = "diff",
tl.STORE_RATIO = "store_ratio",
tl.REVERSED_STORE_RATIO = "reversed_store_ratio",
(ll = rl || (rl = {})).NULL = "null",
ll.SORT = "sort",
ll.TOPN = "topN",
ll.COMBINED = "combined",
ll.PERCENT = "percent",
ll.WHERE_COMPARE = "whereCompare",
ll.PERIODCOMPARE = "periodCompare",
ll.REFERENCE_LINE = "referenceLine",
ll.TABLE_CALCULATION = "tableCalculation",
ll.CLUSTERING = "clustering",
ll.FORECAST = "forecast",
ll.SecondaryAnalysis = "secondaryAnalysis",
(al = ol || (ol = {})).CHART = "chart",
al.ANALYZE = "analyze",
d.TABLE;
const dl = e => (e => {
    if ((null == e ? void 0 : e.roleType) === s.DIM)
        return D.Where;
    const {filter: i} = e;
    var n;
    return "isWhereInAggr"in i.option && (null === (n = i.option) || void 0 === n ? void 0 : n.isWhereInAggr) ? D.Where : D.Having
}
)(e) === D.Where;
function sl(e, i) {
    return S(e, {
        algorithm: "md5",
        unorderedObjects: !0,
        respectType: !1,
        respectFunctionProperties: !1,
        respectFunctionNames: !1,
        ignoreUnknown: !0,
        unorderedArrays: !1,
        ...i
    })
}
function ul({originId: e, aggrConf: i, exprTemplate: t, mapKey: r, sourceType: l}) {
    let o = `${e}`;
    return l === E.SEGMENT && (o = `subject_id_${e}`),
    (null == i ? void 0 : i.exprAggr) && (o = `${i.exprAggr.replace(/\(|\)|(\s+)|(\.)/g, "")}_${e}`),
    (null == i ? void 0 : i.hasOwnProperty("timeGranularityType")) && !n(null == i ? void 0 : i.timeGranularityType) && (o = `time_${i.timeGranularityType}`,
    (null == i ? void 0 : i.hasOwnProperty("timeGranularityNum")) && !n(null == i ? void 0 : i.timeGranularityNum) && (o += `_${i.timeGranularityNum}`),
    o += `_${e}`),
    r && (o += `_${sl(r)}`),
    t && (o += `_${sl(Object.values(t.params).join("_"))}`),
    o
}
const cl = e => {
    if (e.display.type !== d.COMBINATION)
        return e;
    const {list: i} = e.display.conf.combination
      , n = Bi(e)
      , t = ( (e, i) => e.length === i.length && e.map(( (e, n) => void 0 !== i[n] && ("number" == typeof e ? e === i[n].id && _([e], i[n].fields) : !!Array.isArray(e) && e[0] === i[n].id && _(e, i[n].fields)))).reduce(( (e, i) => e && i), !0))(n, i);
    var r;
    const l = null !== (r = e.display.conf.combination.axisMeasure) && void 0 !== r ? r : O.combination.axisMeasure;
    if (t)
        return e;
    {
        const t = ( (e, i, n) => e.map((e => {
            const t = Array.isArray(e)
              , r = t ? e[0] : e
              , l = i.find((e => e.id === r));
            if (l) {
                if (t && !_(l.fields, e)) {
                    const i = [...e];
                    return {
                        ...l,
                        fields: i.slice(0),
                        main: i.slice(0),
                        sub: []
                    }
                }
                return t ? l : {
                    ...l,
                    fields: [e],
                    main: [e],
                    sub: []
                }
            }
            const o = t ? [...e] : [e]
              , a = {
                ...P,
                ...n,
                ...( () => {
                    if (!i.length)
                        return {};
                    if (i[0].axisMeasure && i[0].axisMeasure.length) {
                        const {grid: e, gridColor: n, gridLineStyle: t, gridWidth: r} = i[0].axisMeasure[0];
                        return {
                            grid: e,
                            gridColor: n,
                            gridLineStyle: t,
                            gridWidth: r
                        }
                    }
                    return {}
                }
                )()
            };
            return {
                id: r,
                chartType: B.LINE,
                dualAxis: {
                    main: q.COLUMN,
                    sub: q.LINE
                },
                fields: o.slice(0),
                main: o.slice(0),
                sub: [],
                axisMeasure: [w(a), w(a)]
            }
        }
        )))(n, i, l);
        return R(e, (e => {
            e.display.conf.combination.list = t
        }
        ))
    }
}
  , pl = e => {
    if (e.display.type !== d.GIS_TRACE_MAP)
        return e;
    const {details: i} = e;
    return 0 === (null == i ? void 0 : i.length) ? R(e, (e => {
        e.sort = void 0
    }
    )) : R(e, (e => {
        e.sort = {
            type: Br.SORT,
            orderByList: [{
                id: null == i ? void 0 : i[0].id.toString(),
                order: Sr.ASC
            }]
        }
    }
    ))
}
  , fl = e => e.isGroup && (null == e ? void 0 : e.uniqueId)
  , ml = (e, i, n) => {
    void 0 !== i && e.some(( (e, t, r) => !1 !== e.isGroup && !fl(e) || e.uniqueId !== i ? e.isGroup && e.children ? ml(e.children, i, n) : void 0 : (n(e, t, r),
    !0)))
}
  , vl = (e, i, n) => {
    e.some(( (e, t, r) => e.key === i ? (n(e, t, r),
    !0) : e.isGroup && e.children ? vl(e.children, i, n) : void 0))
}
  , yl = (e, i) => {
    e.forEach(( (e, n, t) => {
        i(e, n, t),
        e.isGroup && e.children && yl(e.children, i)
    }
    ))
}
  , Il = (e, i) => {
    for (let n = 0; n < e.length; n++) {
        const t = e[n];
        if (!1 === t.isGroup) {
            !0 === i(t, n, e) && e.splice(n--, 1)
        }
        t.isGroup && t.children && Il(t.children, i)
    }
}
  , hl = e => {
    const i = []
      , n = e => {
        e && (e.uniqueId && i.push(e.uniqueId),
        e.isGroup && e.children && e.children.forEach(n))
    }
    ;
    return e.forEach(n),
    i
}
  , gl = (e, i) => {
    let n = !1;
    return yl(t(i) ? i : [i], (i => {
        !1 !== i.isGroup && !fl(i) || i.uniqueId !== e || (n = !0)
    }
    )),
    n
}
;
function El(e, i) {
    const {derivedList: n, sourceType: t} = i
      , r = Si(e, {
        excludeTooltips: !1,
        excludeWhereList: !1
    })
      , l = r.filter((e => e.sourceType === t))
      , o = n.map((e => e.id))
      , a = []
      , d = l.filter((e => !o.includes(e.id))).filter((e => {
        const i = n.find((i => i.beforeUpdateId === e.id));
        return e.location === b.WHERE ? !i : !i || !i.updateDerived || (a.push(i.id),
        !1)
    }
    ))
      , s = d.map((e => e.uniqueId))
      , u = n.filter((e => !r.find((i => i.id === e.id)) && !a.includes(e.id)))
      , c = R(e, (e => {
        var i;
        for (const r of u) {
            var n;
            const i = Oi(e, r.location)
              , l = null === (n = i.find((e => `${e.id}` == `${r.originId}`))) || void 0 === n ? void 0 : n.uniqueId;
            if (Cl(r, e))
                Al(e, r);
            else if (Ml(r, e, l)) {
                var t;
                ml(null === (t = e.measureTree) || void 0 === t ? void 0 : t.data, l, ( (e, n, t) => {
                    const l = t[n];
                    if (!0 !== l.isGroup && l.uniqueId) {
                        const e = Ll(t, i, n);
                        t.splice(e, 0, {
                            isGroup: !1,
                            uniqueId: r.uniqueId,
                            key: r.uniqueId.toString()
                        })
                    }
                }
                ));
                const n = Nl(i, r.originId);
                -1 === n ? i.push(r) : i.splice(n + 1, 0, r)
            } else {
                const e = Nl(i, r.originId);
                -1 === e ? i.push(r) : i.splice(e + 1, 0, r)
            }
        }
        e.measuresGroups = null === (i = e.measuresGroups) || void 0 === i ? void 0 : i.map((e => e.filter((e => !s.includes(e))))).filter((e => e.length > 1))
    }
    ));
    return qi({
        schema: c,
        filter: e => !d.some((i => e.location !== b.WHERE ? i.id === e.id : i.id === e.id && i.location === b.WHERE)),
        handler: e => {
            const i = n.find((i => i.id === e.id)) || e.location === b.WHERE && n.find((i => i.beforeUpdateId === e.id)) || n.find((i => i.beforeUpdateId === e.id && i.updateDerived))
              , t = Array.isArray(e.compactName) ? e.compactName : [e.compactName, ""];
            var r, l, o, a;
            i && (x(e, {
                ...i,
                expr: i.expr,
                format: {
                    ...e.format,
                    displayName: t[1] === (null === (r = e.format) || void 0 === r ? void 0 : r.displayName) ? null == i || null === (l = i.format) || void 0 === l ? void 0 : l.displayName : null == e || null === (o = e.format) || void 0 === o ? void 0 : o.displayName,
                    ...i.updateDerived ? {
                        conditionalFormat: Rl(null === (a = i.format) || void 0 === a ? void 0 : a.conditionalFormat, e)
                    } : {}
                },
                uniqueId: e.uniqueId,
                location: e.location,
                unremovable: i.location === b.WHERE ? e.unremovable : i.unremovable
            }),
            e.error = "")
        }
        ,
        options: {
            excludeWhereList: !1,
            excludeTooltips: !1
        }
    })
}
function Tl(e) {
    return sl(e)
}
const Cl = (e, i) => {
    var n;
    return e.location === b.MEASURE && !![d.COMBINATION, d.MEASURE_TREND, d.MEASURE_CARD].includes(null === (n = i.display) || void 0 === n ? void 0 : n.type)
}
  , Al = (e, i) => {
    const n = Oi(e, i.location)
      , t = Nl(n, i.originId);
    if (-1 === t)
        n.push(i);
    else {
        var r;
        const o = null === (r = e.measuresGroups) || void 0 === r ? void 0 : r.find((e => e.includes(n[t].uniqueId)));
        if (void 0 !== o) {
            const e = o.indexOf(n[t].uniqueId);
            o.splice(e + 1, 0, i.uniqueId)
        } else {
            var l;
            null === (l = e.measuresGroups) || void 0 === l || l.push([n[t].uniqueId, i.uniqueId])
        }
        n.splice(t + 1, 0, i)
    }
    const o = cl(e);
    Object.assign(e, o)
}
  , Ml = (e, i, t) => {
    var r;
    return e.location === b.MEASURE && (!![d.TABLE, d.PIVOT_TABLE].includes(null === (r = i.display) || void 0 === r ? void 0 : r.type) && (!n(i.measureTree) && !0 === i.measureTree.enable && 0 !== i.measureTree.data.length && !(!t || !gl(t, i.measureTree.data))))
}
  , Nl = (e, i) => {
    let n = e.findIndex((e => `${e.id}` == `${i}`));
    if (-1 === n)
        return -1;
    for (; e[n + 1] && G(e[n + 1]); )
        n += 1;
    return n
}
  , Ll = (e, i, n) => {
    let t = n + 1;
    for (; t < e.length; t++) {
        const n = e[t];
        if (n.isGroup)
            return t;
        {
            const e = i.find((e => e.uniqueId === n.uniqueId));
            if (e && G(e))
                continue;
            return t
        }
    }
    return t
}
  , Rl = (e, i) => {
    if (!e)
        return e;
    return R(e, (e => {
        const {type: n, data: t} = e;
        switch (n) {
        case k.TAG:
            var r;
            (null === (r = t[0]) || void 0 === r ? void 0 : r.pillId) && (t[0].pillId = `${i.uniqueId}`);
            break;
        case k.COLOR_LEVELS:
        case k.BAR:
            t.pillId = `${i.uniqueId}`;
            break;
        case k.SINGLE_COLOR:
            t.forEach((e => e.ruleGroup.groups.forEach((e => e.rules.forEach((e => {
                e.pillId = `${i.uniqueId}`
            }
            ))))))
        }
    }
    ))
}
;
function bl(e) {
    return e.pillType === U.DYNAMIC && e.sourceType === E.PLACEHOLDER
}
const Dl = (e, i) => {
    if (C(e)) {
        var n, t;
        const {selectedPillIdList: [r], pillList: l} = null !== (t = null === (n = i.dynamicPillsMap) || void 0 === n ? void 0 : n[e.id]) && void 0 !== t ? t : {
            selectedPillIdList: [],
            pillList: []
        };
        if (r) {
            const e = l.find(( ({id: e}) => e === r));
            if (e)
                return e
        }
    }
    return e
}
;
function Sl(e, i, n=!0) {
    let t = "";
    const r = u.i18n`动态维度`
      , l = u.i18n`动态指标`
      , o = e.pillType === U.DYNAMIC
      , d = (e, i, n) => i ? `${n}(${e.replace("(", ":").replace(")", "")})` : e;
    if (o && (t = e.roleType === s.DIM ? r : l),
    F(e) && e.name)
        return e.name;
    if (G(e) && e.name)
        return d(e.name, o, t);
    if (!i)
        return e.name || u.i18n`未知字段`;
    const c = i.isMapKey ? `${i.parentName}.${i.name}` : T.isDynamic(i.dataTypeName) ? u.i18n`无` : i.name;
    let p = c;
    var f;
    if (n)
        if (a(e.aggrConf) || (null === (f = e.legacy) || void 0 === f ? void 0 : f.uncompatibleAggr))
            p = e.roleType === s.MEA && e.location !== b.DIMENSION ? u.i18n`聚合(${c})` : c;
        else {
            const i = $(e.aggrConf);
            p = i ? `${i}(${c})` : c
        }
    return d(p, o, t)
}
function Ol(e, i, t) {
    if (W(e))
        return s.MEA;
    return !n(t) && i.includes(t) ? t : i && 0 !== i.length && 2 !== Y(i).length ? bn(i) ? s.DIM : s.MEA : e.roleType
}
const _l = (e, i, n={}) => {
    const {mixins: t={}} = n;
    if (e === s.MEA && T.isNumber(i.dataTypeName))
        return {
            numFormat: i.dataFormat ? void 0 : Pl,
            ...t,
            dataTypeName: i.dataTypeName
        };
    if (T.isString(null == i ? void 0 : i.dataTypeName)) {
        const e = {
            contentType: H.LINK,
            ...t
        };
        return (null == i ? void 0 : i.geoInfo) ? {
            ...e,
            isGeoField: !0
        } : e
    }
    return t
}
  , Pl = {
    auto: !0,
    type: p.DIGIT,
    unit: null,
    kSep: !0,
    precision: 4,
    precisionType: f.SIGNIFICANT_DECIMAL
};
function Bl(e, i) {
    var n, t, r, l;
    const o = null !== (l = i.dimMetId) && void 0 !== l ? l : null === (n = i.dimMetItem) || void 0 === n ? void 0 : n.id
      , a = I.from(null != e ? e : []).getDataSetByDimMetId(o)
      , {location: u, fieldTypes: c=[], id: p, mapKey: f, autoAggr: m=!0, sourceType: v, drillInfo: y, chartType: h} = i
      , {fieldMap: g={}, mapKeys: C={}} = null != a ? a : {};
    var A, M;
    const N = null !== (M = i.dimMetItem) && void 0 !== M ? M : f && null !== (A = null === (t = C[o]) || void 0 === t ? void 0 : t.find((e => e.expr === f))) && void 0 !== A ? A : g[o];
    if (!N)
        throw new Error(`dimMetItem ${o} not exists`);
    const L = i.aggrConf ? i.aggrConf : {}
      , R = Ol(N, c, i.roleType)
      , b = _l(R, N, {
        mixins: (null == a || null === (r = a.thirdPartyConf) || void 0 === r ? void 0 : r.isIndexPlatform) ? {
            showFieldDescr: !0
        } : void 0
    });
    if (m && R === s.MEA) {
        const e = V(N, h === d.TREND_TABLE);
        e && (L.exprAggr = e)
    }
    var D;
    return {
        uniqueId: null !== (D = i.uniqueId) && void 0 !== D ? D : K(),
        id: p || ul({
            originId: o,
            aggrConf: L,
            mapKey: f,
            sourceType: N.isGroup ? E.SEGMENT : void 0
        }),
        location: u,
        dimMetId: o,
        mapKey: f,
        originId: String(o),
        roleType: R,
        aggrConf: L,
        format: b,
        sourceType: N.isGroup ? E.SEGMENT : v,
        drillInfo: y,
        error: T.isTemplate(N.dataTypeName) && !j(v) ? z.NOT_SET_TMPL : void 0
    }
}
function ql(e, i) {
    var n;
    const {mixins: t={}, autoAggr: r=!0, aggrConf: l={}, dimMetId: o, chartQueryFilter: d} = i
      , u = Bl(e, {
        ...i,
        autoAggr: r,
        roleType: t.roleType,
        location: b.WHERE,
        fieldTypes: [s.DIM, s.MEA]
    })
      , c = Q(t, ["op", "val", "valOption", "option", "containNullDate"])
      , p = I.from(null != e ? e : []).getDataSetByDimMetId(o)
      , {fieldMap: f={}, mapKeys: m={}} = null != p ? p : {};
    var v;
    const y = i.mapKey && null !== (v = null === (n = m[o]) || void 0 === n ? void 0 : n.find((e => e.expr === i.mapKey))) && void 0 !== v ? v : f[o]
      , h = (u.roleType || (null == y ? void 0 : y.roleType)) === s.DIM || G(u) || !r && a(l) && (null == y ? void 0 : y.roleType) === s.MEA && !W(y);
    let g;
    var E, T, C, A;
    return X(y) && c.val && (g = [...c.val]),
    {
        ...u,
        ...Q(t, ["showEditComponent", "isDrill", "subFilterIds", "boundParam", "expr", "sourceType", "name", "compactName", "format", "unremovable"]),
        preRelation: null !== (E = t.preRelation) && void 0 !== E ? E : J.AND,
        filter: {
            op: null !== (T = c.op) && void 0 !== T ? T : pt.Uninitialized,
            val: Z(c.val) ? [] : c.val,
            valOption: null !== (C = c.valOption) && void 0 !== C ? C : {},
            option: {
                isReportFilter: !1,
                isWhereInAggr: h,
                desensitizationList: g,
                ...null !== (A = c.option) && void 0 !== A ? A : {}
            },
            containNullDate: c.containNullDate
        },
        chartQueryFilter: d,
        name: null == y ? void 0 : y.name,
        dataSetId: null == y ? void 0 : y.dataSetId
    }
}
const wl = e => {
    var i, n, t;
    return xl(e) ? {
        startTime: null === (i = e.valOption) || void 0 === i ? void 0 : i.startTime,
        endTime: null === (n = e.valOption) || void 0 === n ? void 0 : n.endTime,
        holiday: null === (t = e.valOption) || void 0 === t ? void 0 : t.holiday
    } : null
}
  , xl = e => e.op === pt.AdvancedDate
  , Gl = e => e && e.op === pt.SpecialDate
  , kl = (e, i=ee.YearMonthDay) => n => null == n ? void 0 : n.format(Ul(e, i))
  , Ul = (e, i=ee.YearMonthDay) => {
    if (i === ee.YearMonthDay)
        return e ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    if (i === ee.YearMonth)
        return "YYYY-MM";
    if (i === ee.YearWeek)
        return "YYYY-ww";
    throw new Error(`unknow granularityType with ${i}`)
}
  , Fl = (e, i, n) => {
    let t = "";
    switch (!0) {
    case e.type === jn.Unlimited:
        t = u.i18n`无限制`;
        break;
    case e.type === jn.Fixed:
        t = kl(i)(c(e.val));
        break;
    case e.type === jn.Dynamic:
        {
            const r = $l(e, n);
            t = r ? kl(i)(r) : "";
            break
        }
    }
    return t
}
  , $l = (e, i, n) => {
    if (e.type !== jn.Dynamic)
        return null;
    const {val: t, datetimeUnit: r, customWeekAnchor: l, direction: o} = e
      , a = c(n)
      , d = o === Qn.Forward
      , s = Wl[r](t * (d ? 1 : -1))
      , u = r === Un.bytedWeek ? 4 : r === Un.customWeek ? l : void 0;
    let p;
    return p = r !== Un.tradingDay ? c(a).add(s) : function(e, i, n) {
        const t = c(n);
        if (i)
            for (; e > 0; )
                t.subtract(1, "day"),
                zl(t) && e--;
        else
            for (; e > 0; )
                t.add(1, "day"),
                zl(t) && e--;
        return t
    }(t, !d, a),
    i ? Yl(p, r, u) : Hl(p, r, u, void 0, n)
}
  , Wl = {
    [Un.minute]: e => c.duration(e, Un.minute),
    [Un.hour]: e => c.duration(e, Un.hour),
    [Un.day]: e => c.duration(e, Un.day),
    [Un.tradingDay]: e => c.duration(e, Un.day),
    [Un.week]: e => c.duration(e, Un.week),
    [Un.month]: e => c.duration(e, Un.month),
    [Un.quarter]: e => c.duration(e, Un.quarter),
    [Un.year]: e => c.duration(e, Un.year),
    [Un.semiannual]: e => c.duration(6 * e, Un.month),
    [Un.bimonthly]: e => c.duration(2 * e, Un.month),
    [Un.bytedWeek]: e => c.duration(e, Un.week),
    [Un.customWeek]: e => c.duration(e, Un.week)
}
  , Yl = (e, i, n) => {
    let t = c(e);
    switch (i) {
    case Un.minute:
    case Un.hour:
    case Un.day:
    case Un.month:
    case Un.quarter:
    case Un.year:
        t = t.startOf(i);
        break;
    case Un.week:
        t = t.startOf("isoWeek");
        break;
    case Un.bimonthly:
        t = t.month(e.month() - e.month() % 2).startOf(Un.month);
        break;
    case Un.semiannual:
        t = t.month(e.month() <= 5 ? 0 : 6).startOf(Un.month);
        break;
    case Un.bytedWeek:
        t = t.isoWeekday(4).subtract(c.duration(e.isoWeekday() <= 3 ? 1 : 0, Un.week)).startOf(Un.day);
        break;
    case Un.customWeek:
        t = t.isoWeekday(n).subtract(c.duration(e.isoWeekday() <= n - 1 ? 1 : 0, Un.week)).startOf(Un.day)
    }
    return t
}
  , Hl = (e, i, n, t, r) => {
    let l = c(e);
    switch (i) {
    case Un.minute:
    case Un.hour:
    case Un.day:
    case Un.month:
    case Un.quarter:
    case Un.year:
        l = l.endOf(i);
        break;
    case Un.week:
        l = l.endOf("isoWeek");
        break;
    case Un.bimonthly:
        l = l.month(e.month() + (e.month() + 1) % 2).endOf(Un.month);
        break;
    case Un.semiannual:
        l = l.month(e.month() <= 5 ? 5 : 11).endOf(Un.month);
        break;
    case Un.bytedWeek:
        l = l.isoWeekday(3).add(c.duration(e.isoWeekday() > 3 ? 1 : 0, Un.week)).endOf(Un.day);
        break;
    case Un.customWeek:
        l = l.isoWeekday(n - 1 || 7).add(c.duration(e.isoWeekday() > (n - 1 || 7) ? 1 : 0, Un.week)).endOf(Un.day)
    }
    if (t) {
        const e = c(r);
        switch (t) {
        case Jn.Now:
            l = e;
            break;
        case Jn.Yesterday:
            l = e.subtract(1, Un.day).endOf(Un.day);
            break;
        case Jn.Today:
            l = e.endOf(Un.day);
            break;
        case Jn.Month:
            l = e.endOf(Un.month);
            break;
        case Jn.Semiannual:
            l = e.month(c().month() <= 5 ? 5 : 11).endOf(Un.month)
        }
    }
    return l
}
  , Vl = /(^\d{4})-Q([1-4]{1}$)/
  , Kl = /(^\d{4})-W\d{2}\((\d{1,2}\/\d{1,2})~(\d{1,2}\/\d{1,2})\)/;
var jl;
const zl = e => {
    var i, n, t, r, l, o;
    const a = null !== (o = null === g_app || void 0 === g_app || null === (i = g_app._store) || void 0 === i || null === (n = i.getState) || void 0 === n || null === (t = n.call(i)) || void 0 === t || null === (r = t.base) || void 0 === r || null === (l = r.curAppSettings) || void 0 === l ? void 0 : l.marketHolidayList) && void 0 !== o ? o : [];
    return ![0, 6].includes(e.day()) && !a.includes(e.format("YYYY-MM-DD"))
}
;
const Ql = {
    isNullOrEmptyOp: e => /^is (not\s+)?(null|empty)$/.test(e),
    isInOp: e => /^(not\s+)?in$/.test(e),
    isEqOp: e => ["==", "="].includes(e),
    isUnEqOp: e => ["!="].includes(e),
    isBetweenOp: e => /^(not\s+)?between$/.test(e),
    isLastOp: e => /^last(Sync)?$/.test(e),
    isLikeOrNotOp: e => /^(not\s)?like$/.test(e),
    isArrayHasOp: e => [pt.ArrayHas, pt.NotArrayHas].includes(e),
    isMapOp: e => e === pt.MapKeyHas,
    isComparisonOp: e => [">=", "<=", ">", "<"].includes(e),
    isNaNOrNotNaNOp: e => [pt.IsNaN, pt.IsNotNaN].includes(e)
};
pt.Equal,
pt.NotEqual,
pt.GreaterEqual,
pt.LessEqual,
pt.Between,
pt.NotBetween,
pt.In,
pt.NotIn,
pt.ArrayHas,
pt.NotArrayHas,
pt.MapKeyHas,
pt.Null,
pt.NotNull,
pt.Empty,
pt.NotEmpty,
pt.Like,
pt.NotLike,
pt.IsNaN,
pt.IsNotNaN,
yt.Contain,
yt.NotContain,
yt.StartWith,
yt.EndWith,
yt.Accurate,
mt.Comma,
mt.Space,
mt.LineFeed,
re.get(le.Feature);
class Xl {
    get(e) {
        return this.graph.get(e)
    }
    addFilter(e) {
        var i;
        const {graph: n} = this
          , t = {
            id: e.uniqueId,
            value: e,
            parents: new Map,
            children: new Map
        };
        return n.set(e.uniqueId, t),
        null === (i = e.subFilterIds) || void 0 === i || i.forEach((e => {
            const i = n.get(e);
            i && (t.children.set(i.id, i),
            i.parents.set(t.id, t))
        }
        )),
        t
    }
    removeFilter(e) {
        const {graph: i} = this;
        if (!i.has(e.uniqueId))
            return;
        const n = i.get(e.uniqueId);
        i.delete(n.id),
        n.children.forEach((e => {
            e.parents.delete(n.id)
        }
        )),
        n.parents.forEach((e => {
            e.children.delete(n.id)
        }
        ))
    }
    updateSubFilterLinks(e) {
        var i, n;
        const {graph: t} = this
          , {uniqueId: r, subFilterIds: l} = e;
        if (!t.has(r))
            return;
        const o = t.get(r)
          , {children: a} = o
          , d = new Map(null === (i = null === (n = null == l ? void 0 : l.filter((e => t.has(e)))) || void 0 === n ? void 0 : n.map((e => t.get(e)))) || void 0 === i ? void 0 : i.map((e => [e.id, e])))
          , s = [...d.values()].filter((e => !a.has(e.id)))
          , u = [...a.values()].filter((e => !d.has(e.id)));
        o.children = d,
        s.forEach((e => {
            e.parents.set(o.id, o)
        }
        )),
        u.forEach((e => {
            e.parents.delete(o.id)
        }
        ))
    }
    isCyclic() {
        const {graph: e} = this
          , i = new Map
          , n = new Set
          , t = [];
        for (e.forEach((e => {
            const r = e.parents.size;
            i.set(e, r),
            r || (t.push(e),
            n.add(e))
        }
        )); t.length; ) {
            t.pop().children.forEach((e => {
                const r = i.get(e) - 1;
                i.set(e, r),
                r || (t.push(e),
                n.add(e))
            }
            ))
        }
        return n.size < e.size
    }
    getAncestors(e) {
        const i = new Set;
        if (!e)
            return i;
        const n = [...e.parents.values()];
        for (; n.length; ) {
            const e = n.pop();
            i.has(e) || (i.add(e),
            n.push(...e.parents.values()))
        }
        return i
    }
    constructor(e) {
        var i, n, t;
        if (i = this,
        n = "graph",
        t = new Map,
        n in i ? Object.defineProperty(i, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = t,
        !e)
            return;
        const {graph: r} = this;
        e.forEach((e => {
            r.set(e.uniqueId, {
                id: e.uniqueId,
                value: e,
                parents: new Map,
                children: new Map
            })
        }
        )),
        e.forEach((e => this.updateSubFilterLinks(e)))
    }
}
var Jl, Zl;
(Zl = Jl || (Jl = {})).NoPill = "no_pill",
Zl.PartialPill = "partial_pill",
Zl.AllPill = "all_pill";
const eo = e => {
    const i = []
      , n = e => {
        e && (e.children ? e.children.forEach((e => n(e))) : i.push(e))
    }
    ;
    return oe(e) && n(e.filter),
    i
}
;
function io(e, i) {
    const n = [];
    let t = e.findIndex((e => e.uniqueId === i.uniqueId)) + 1;
    if (t > 0)
        for (; t < e.length; ) {
            if (!(e[t].preRelation === J.OR))
                break;
            n.push(e[t]),
            t++
        }
    return n
}
const no = {
    eq: pt.Equal,
    gt: pt.Greater,
    ge: pt.GreaterEqual,
    lt: pt.Less,
    le: pt.LessEqual,
    ne: pt.NotEqual,
    in: pt.In,
    ni: pt.NotIn,
    btw: pt.Between,
    lk: pt.Like,
    nlk: pt.NotLike,
    arrayhas: pt.ArrayHas,
    mapkeyhas: pt.MapKeyHas,
    last: pt.Last,
    lastsync: pt.LastSync,
    [kn]: kn
};
Object.entries(no).forEach(( ([e,i]) => {}
));
const to = d.TABLE;
function ro(e, i) {
    if (!i)
        return e;
    let {parameters: n} = e;
    const t = (n || []).map((e => e.id))
      , r = function(e, i) {
        var n;
        const t = I.from(i)
          , r = t.dataSets.flatMap((e => e.dataSetParamList ? e.dataSetParamList.map((e => e.id)) : []));
        var l, o;
        const a = [...wi(e, !0), ...null !== (l = null === (n = e.whereCompare) || void 0 === n ? void 0 : n.conditionList.flat()) && void 0 !== l ? l : [], ...(null !== (o = e.whereList) && void 0 !== o ? o : []).filter((e => oe(e))).reduce(( (e, i) => (e.push(...eo(i)),
        e)), [])]
          , d = Y(a.map((e => e.dimMetId))).flatMap((e => {
            const i = t.getDataSetByDimMetId(e)
              , n = null == i ? void 0 : i.fieldMap[e];
            return n ? n.paramIdList : []
        }
        ));
        return Y([...r, ...d])
    }(e, i)
      , l = r.filter((e => !t.includes(e)))
      , o = I.from(i).getParamList();
    return _(t, r) || (n = n.filter((e => r.includes(e.id))).concat(l.map((e => {
        const i = o.find((i => i.id === e));
        return i ? {
            id: i.id,
            val: i.initVal,
            visible: !0,
            isIntial: !0
        } : null
    }
    )).filter(Boolean))),
    (null == o ? void 0 : o.length) > 0 && (n = n.map((e => {
        if (!e.isIntial)
            return e;
        const i = o.find((i => i.id === e.id));
        return i ? {
            ...e,
            val: i.initVal
        } : e
    }
    ))),
    {
        ...e,
        parameters: n
    }
}
function lo(e, i) {
    const t = I.from(i).getDataSetByDimMetId(e.dimMetId);
    if (!t)
        return {
            ...e,
            error: xn
        };
    if (de(e) || (r = null == e ? void 0 : e.filter,
    xl(r) ? a(r.valOption) : Gl(r) ? (null === (s = r.val) || void 0 === s ? void 0 : s[0]) === Vn.All : !Ql.isNullOrEmptyOp(r.op) && a(r.val) && !(null === (l = r.valOption) || void 0 === l ? void 0 : l.subQuery) && !(null === (o = r.valOption) || void 0 === o || null === (d = o.excludedVal) || void 0 === d ? void 0 : d.length) || Ql.isBetweenOp(r.op) && (r.val.some(n) || 2 !== r.val.length)))
        return e;
    var r, l, o, d, s;
    if (!se(e, ue(t, e)))
        return e;
    const c = xl(e.filter)
      , p = e.filter.op === pt.SpecialDate
      , f = ![pt.Last, pt.LastSync, pt.Between, pt.AdvancedDate].includes(e.filter.op) || c && !wl(e.filter) || !c && void 0 === e.filter.val;
    return !p && f ? {
        ...e,
        error: u.i18n`日期格式字段筛选条件错误`
    } : e
}
function oo(e, i) {
    const n = Oi(e, b.WHERE);
    return {
        ...e,
        whereList: n.map((e => {
            if (de(e) || F(e))
                return e;
            if (oe(e)) {
                const n = e => e.children ? {
                    ...e,
                    children: e.children.map((e => n(e)))
                } : lo(e, i);
                return {
                    ...e,
                    filter: n(e.filter)
                }
            }
            return lo(e, i)
        }
        ))
    }
}
Yn.Absolute,
Yn.Advanced,
Yn.Relative,
Yn.SingleDate,
pt.Equal,
pt.NotEqual,
pt.GreaterEqual,
pt.Greater,
pt.Less,
pt.LessEqual,
pt.Between,
pt.NotBetween,
pt.Equal,
pt.NotEqual,
pt.Greater,
pt.GreaterEqual,
pt.Less,
pt.LessEqual,
pt.Between,
pt.NotBetween,
pt.Like,
pt.NotLike,
pt.In,
pt.NotIn;
const ao = [d.PIVOT_TABLE]
  , so = [d.PIVOT_TABLE];
var uo, co;
(co = uo || (uo = {})).DimenisionDrill = "dimenisionDrill",
co.FocurDrill = "foucusDrill";
const po = (e, i, n) => {
    const t = String(i)
      , r = n ? String(n) : void 0
      , l = a(e.sort) ? e.sort : R(e.sort, (e => {
        (null == e ? void 0 : e.orderByList) && (e.orderByList = e.orderByList.map((e => e.id === t ? r ? {
            ...e,
            id: r,
            depend: e.depend === t ? r : e.depend
        } : null : e)).filter(Boolean))
    }
    ))
      , o = a(e.topN) ? e.topN : R(e.topN, (e => {
        var i;
        e.orderByList = null == e || null === (i = e.orderByList) || void 0 === i ? void 0 : i.map((e => {
            var i;
            const n = {
                ...e,
                dimensions: (null !== (i = e.dimensions) && void 0 !== i ? i : []).map((e => e === t ? r : e)).filter(Boolean),
                measure: e.measure === t ? r : e.measure
            };
            return n.measure ? n : void 0
        }
        )).filter(Boolean)
    }
    ));
    return {
        overrideSort: fo(e, l),
        overrideTopN: mo(e, o)
    }
}
;
function fo(e, i) {
    var n;
    return Do(null == e || null === (n = e.display) || void 0 === n ? void 0 : n.type) && i ? {
        ...i,
        orderByList: he(null == i ? void 0 : i.orderByList, "id")
    } : i
}
function mo(e, i) {
    var n;
    return Do(null == e || null === (n = e.display) || void 0 === n ? void 0 : n.type) && i ? {
        ...i,
        orderByList: he(null == i ? void 0 : i.orderByList, "measure")
    } : i
}
function vo(e, i) {
    return R(e, (n => {
        if (!a(n.drill)) {
            var t;
            const {overrideSort: o, overrideTopN: a} = po(n, n.drill[0].dimMetId, null === (t = pe(n.drill)) || void 0 === t ? void 0 : t.dimMetId);
            n.topN = a,
            n.sort = o;
            const {uniqueId: d} = pe(n.drill)
              , s = n.drill[0]
              , u = Di(e).find((e => d === e.uniqueId));
            if (u && u.pillType !== U.DYNAMIC) {
                const e = Oi(n, u.location);
                if (Boolean(I.from(i).fieldMap[n.drill[0].dimMetId])) {
                    var r, l;
                    const t = null !== (l = null === (r = u.drillInfo) || void 0 === r ? void 0 : r.pillConfigs) && void 0 !== l ? l : {}
                      , o = t[s.uniqueId] ? {
                        ...t[s.uniqueId],
                        location: u.location
                    } : Bl(i, {
                        location: u.location,
                        fieldTypes: u.roleType ? [u.roleType] : [],
                        dimMetId: s.dimMetId,
                        uniqueId: s.uniqueId
                    });
                    o.drillInfo = null == u ? void 0 : u.drillInfo,
                    o.index = u.index,
                    o.pillType = u.pillType,
                    n[u.location] = e.map((e => e.uniqueId === u.uniqueId ? o : e))
                } else
                    n[u.location] = e.filter((e => e.uniqueId === u.uniqueId))
            }
        }
        n.drill = [],
        n.whereList = n.whereList.filter((e => {
            var i;
            return (null === (i = e.filter.option) || void 0 === i ? void 0 : i.origin) !== Ie.Drill
        }
        ))
    }
    ))
}
const yo = [d.MEASURE_CARD, d.MEASURE_TREND, d.TREND_TABLE, d.FUNNEL, d.GAUGE, d.PROGRESS, d.WATERFALL_CHANGE]
  , Io = e => !xi(e) && !yo.includes(e.display.type)
  , ho = e => e.display.type === d.PIVOT_TABLE ? [...e.rows, ...e.columns] : Io(e) ? [...e.dimensions] : []
  , go = e => {
    var i;
    const {drill: n} = e;
    if (!a(n))
        return null === (i = ho(e)) || void 0 === i ? void 0 : i.find((e => e.uniqueId === pe(n).uniqueId))
}
  , Eo = (e, i) => {
    if (bo(e))
        return ( (e, i) => {
            const n = Object.values(Ee(ho(e), (i => {
                var n, t;
                return null === (n = Dl(i, e)) || void 0 === n || null === (t = n.drillInfo) || void 0 === t ? void 0 : t.groupId
            }
            )))
              , t = [];
            for (const r of n) {
                const n = No({
                    pill: r[0],
                    dataSets: i,
                    schema: e,
                    pills: r
                });
                if (a(null == n ? void 0 : n.drillPath) && a(null == n ? void 0 : n.layerDrillPath))
                    continue;
                const {layerDrillPath: l=[], drillPath: o=[]} = n;
                if (a(o)) {
                    if (!a(l)) {
                        const i = Te(r, (i => {
                            var n;
                            return null === (n = Dl(i, e)) || void 0 === n ? void 0 : n.dimMetId
                        }
                        ));
                        if (i[pe(l)])
                            continue;
                        for (let e = l.length - 2; e > -1; e--)
                            if (i[l[e]]) {
                                t.push(i[l[e]]);
                                break
                            }
                    }
                } else {
                    const i = Te(r, (i => {
                        var n;
                        return null === (n = Dl(i, e)) || void 0 === n ? void 0 : n.uniqueId
                    }
                    ));
                    if (i[pe(o)])
                        continue;
                    for (let e = o.length - 2; e > -1; e--)
                        if (i[o[e]]) {
                            t.push(i[o[e]]);
                            break
                        }
                }
            }
            return t
        }
        )(e, i);
    {
        const n = go(e);
        return n ? Mo(n, i, e) ? [n] : [] : ho(e).filter((n => Mo(n, i, e)))
    }
}
  , To = (e, i) => {
    var n;
    if (!i)
        return null;
    const t = I.from(L(i)).getDataSetByDimMetId(e);
    if (!t)
        return null;
    const {fieldMap: r} = t
      , l = null === (n = r[e]) || void 0 === n ? void 0 : n.layerId;
    return t.dimensionList.find((e => e.id === l))
}
  , Co = (e, i) => {
    const n = I.from(L(i)).getDataSetByDimMetId(e);
    if (!n)
        return;
    const t = To(e, n);
    return (null == t ? void 0 : t.isFolder) || null == t ? void 0 : t.dimList.map((e => e.id))
}
  , Ao = (e, i, n) => {
    if (!fe(e)) {
        var t;
        const e = null === (t = pe(n.drill)) || void 0 === t ? void 0 : t.uniqueId;
        if (!e)
            return;
        const r = ho(n).find((i => i.uniqueId === e));
        if (!r)
            return;
        return Ao(r, i, n)
    }
    {
        var r;
        const t = Dl(e, n);
        if (!a(null == t || null === (r = t.drillInfo) || void 0 === r ? void 0 : r.drillPath))
            return {
                type: "uniqueId",
                path: t.drillInfo.drillPath
            };
        const l = (null == t ? void 0 : t.dimMetId) ? Co(t.dimMetId, i) : void 0;
        if (!a(l))
            return {
                type: "dimMetId",
                path: l
            }
    }
}
  , Mo = (e, i, n) => {
    if (!Io(n))
        return !1;
    const t = Ao(e, i, n);
    return !a(t) && (e.pillType === U.DYNAMIC ? pe(null == t ? void 0 : t.path) !== e.dimMetId && (!(!a(n.drill) && n.drill[0].uniqueId === e.uniqueId) || n.drill.length < t.path.length) : "uniqueId" === (null == t ? void 0 : t.type) ? t.path.slice(0, t.path.length - 1).includes(e.uniqueId) : t.path.slice(0, t.path.length - 1).includes(e.dimMetId))
}
  , No = ({pill: e, dataSets: i, schema: n, pills: t}) => {
    var r, l;
    if (null === (r = Dl(e, n)) || void 0 === r || null === (l = r.drillInfo) || void 0 === l ? void 0 : l.groupId) {
        const r = (t || ho(n)).filter((i => {
            var t, r, l, o;
            return (null === (t = Dl(i, n)) || void 0 === t || null === (r = t.drillInfo) || void 0 === r ? void 0 : r.groupId) === (null === (l = Dl(e, n)) || void 0 === l || null === (o = l.drillInfo) || void 0 === o ? void 0 : o.groupId) && i.location === e.location
        }
        ));
        if (a(r) || 1 === r.length)
            return (e => {
                var t, r, l;
                if (!a(null === (t = Dl(e, n)) || void 0 === t || null === (r = t.drillInfo) || void 0 === r ? void 0 : r.drillPath))
                    return null === (l = Dl(e, n)) || void 0 === l ? void 0 : l.drillInfo;
                const o = Co(e.dimMetId, i);
                var d;
                return a(o) ? null : {
                    ...(null === (d = Dl(e, n)) || void 0 === d ? void 0 : d.drillInfo) || {},
                    layerDrillPath: o
                }
            }
            )(e);
        let l = null;
        for (const e of r) {
            var o, d, s;
            if (!a(null === (o = Dl(e, n)) || void 0 === o || null === (d = o.drillInfo) || void 0 === d ? void 0 : d.drillPath))
                return null === (s = Dl(e, n)) || void 0 === s ? void 0 : s.drillInfo;
            const t = Co(e.dimMetId, i);
            var u;
            if (!a(t))
                l = {
                    ...(null === (u = Dl(e, n)) || void 0 === u ? void 0 : u.drillInfo) || {},
                    layerDrillPath: t
                }
        }
        return l
    }
    return null
}
  , Lo = (e, i, n, t) => bo(t) ? Ro(e, i, n, t) : Mo(e, n, t) ? ce.DRILLABLE : ce.UNDRILLABLE
  , Ro = (e, i, n, t) => {
    const {drillPath: r=[], layerDrillPath: l=[]} = No({
        pill: e,
        dataSets: n,
        schema: t,
        pills: i
    }) || {};
    if (a(r) && a(l))
        return ce.UNDRILLABLE;
    const o = Dl(e, t)
      , d = (n, r) => {
        const l = n.findIndex((e => e === o[r]));
        if (l === n.length - 1)
            return ce.UNDRILLABLE;
        const a = i.filter((i => {
            var n, r, l, o;
            return (null === (n = Dl(i, t)) || void 0 === n || null === (r = n.drillInfo) || void 0 === r ? void 0 : r.groupId) === (null === (l = Dl(e, t)) || void 0 === l || null === (o = l.drillInfo) || void 0 === o ? void 0 : o.groupId) && i.location === e.location
        }
        ));
        return me(n.slice(l), a.map((e => Dl(e, t)[r]))).length > 1 ? ce.DRILLED : ce.DRILLABLE
    }
    ;
    return a(r) ? a(l) ? ce.UNDRILLABLE : d(l, "dimMetId") : d(r, "uniqueId")
}
;
function bo(e) {
    return Do(e.display.type) && !function(e) {
        var i;
        return !(!(null === (i = e.drill) || void 0 === i ? void 0 : i.length) && !So({
            schema: e
        }))
    }(e)
}
function Do(e) {
    return ao.includes(e)
}
const So = ({schema: e, dataSets: i, layerId: n}) => {
    var t;
    if (!a(e.drill) && (null === (t = e.drill) || void 0 === t ? void 0 : t.some((e => e.origin === ve.departmentAutoDrill)))) {
        var r;
        const t = null === (r = ye(e.drill)) || void 0 === r ? void 0 : r.dimMetId;
        if (n && !a(i) && t) {
            const e = To(t, i);
            return e && e.id === n
        }
        return !0
    }
    if (!a(e.whereList)) {
        var l;
        const t = e.whereList.find((e => {
            var i;
            return (null === (i = e.filter.option) || void 0 === i ? void 0 : i.origin) === Ie.Drill
        }
        ));
        if (!t)
            return !1;
        const r = ho(e).find((i => {
            var n;
            return Dl(i, e).uniqueId === (null === (n = t.filter.option) || void 0 === n ? void 0 : n.originDrillUniqueId)
        }
        ));
        if (null == r || null === (l = r.drillInfo) || void 0 === l ? void 0 : l.departmentAutoDrill) {
            if (n && !a(i) && r.dimMetId) {
                const e = To(r.dimMetId, i);
                return e && e.id === n
            }
            return !0
        }
    }
    return !1
}
;
function Oo({uniqueId: e, pill: i, schema: n, dataSets: t}) {
    var r, l;
    const o = ho(n)
      , d = i || o.find((i => i.uniqueId === e));
    if (!d)
        return !1;
    const s = Dl(d, n)
      , u = null === (r = s.drillInfo) || void 0 === r ? void 0 : r.groupId;
    if (!s || !u)
        return !1;
    const c = o.filter((e => {
        var i, t;
        return (null === (i = Dl(e, n)) || void 0 === i || null === (t = i.drillInfo) || void 0 === t ? void 0 : t.groupId) === u
    }
    ));
    if (c.length < 2)
        return !0;
    if (!a(null === (l = s.drillInfo) || void 0 === l ? void 0 : l.drillPath))
        return !0;
    const p = Ao(s, t, n);
    if (a(p))
        return !1;
    const {drillPath: f, layerDrillPath: m} = No({
        pill: d,
        dataSets: t,
        schema: n,
        pills: c
    }) || {
        drillPath: [],
        layerDrillPath: []
    }
      , v = (e, i) => {
        const t = e.findIndex((e => e === s[i]))
          , r = me(e.slice(0, t), c.map((e => {
            var t;
            return null === (t = Dl(e, n)) || void 0 === t ? void 0 : t[i]
        }
        )));
        return a(r)
    }
    ;
    return a(m) ? !!a(f) || v(f, "uniqueId") : v(m, "dimMetId")
}
function _o({groupId: e, uniqueId: i, schema: n, dataSets: t}) {
    return i || e ? Ce(n, (e => {
        var r;
        const l = ho(e).find((e => e.uniqueId === i));
        let o = !1;
        if (!l)
            return;
        const d = No({
            pill: l,
            dataSets: t,
            schema: n
        }) || {};
        a(d.drillPath) || (o = !0);
        const s = Dl(l, n);
        e[l.location] = null === (r = e[l.location]) || void 0 === r ? void 0 : r.map((e => {
            var i, r;
            if ((null === (i = e.drillInfo) || void 0 === i ? void 0 : i.groupId) === (null === (r = s.drillInfo) || void 0 === r ? void 0 : r.groupId) && !Oo({
                pill: e,
                schema: n,
                dataSets: t
            })) {
                const i = {
                    ...e,
                    drillInfo: {
                        ...e.drillInfo,
                        groupId: Math.random().toString(36).slice(-8)
                    }
                };
                return o && (i.uniqueId = K()),
                i
            }
            return e
        }
        ))
    }
    )) : n
}
const Po = (e, i, n, t) => {
    const r = xo({
        schema: e,
        dataSets: i,
        drillInfo: n,
        keepDepartmentDrillFilter: t
    });
    return r ? Bo(r, e) : null
}
  , Bo = (e, i) => {
    const {overrideWhereList: n, replacePill: t, overrideDrill: r, overrideSort: l, overrideTopN: o, displayConf: a} = e;
    let d = Ce(i, (e => {
        e.whereList = n,
        e.drill = r,
        e.topN = o,
        e.sort = l,
        e.display.conf = a
    }
    ));
    const s = Oi(d, t.location);
    return d = Gi(d, t.location, s.map(( (i, n) => n === e.replacePillIndex ? t : i))),
    d
}
  , qo = ({value: e, dimMetItem: i, dataSets: n, index: t, originDrillUniqueId: r, aggrConf: l}) => {
    let o = pt.In;
    const a = e === Ne ? null : e;
    let d = [a];
    const s = {
        origin: Ie.Drill,
        originDrillUniqueId: r
    };
    if ("date" === i.dataTypeName || "datetime" === i.dataTypeName) {
        o = pt.Between;
        const {timeGranularityType: i, timeGranularityNum: n} = null != l ? l : {}
          , t = null === a ? [null, null] : ( (e, i) => {
            var n;
            const {timeGranularityType: t, timeGranularityNum: r=1} = null != i ? i : {};
            if (!t)
                return [e, e];
            const l = "YYYY-MM-DD"
              , o = "YYYY-MM-DD HH:mm:ss"
              , a = (e, i, n, t) => {
                if (e.isValid())
                    return [c(e).startOf(i).add(null != n ? n : 0).format(o), c(e).endOf(i).add(null != t ? t : 0).format(o)]
            }
              , d = {
                [ie.Year]: () => a(c(e), "year", c.duration(r - 1, "month"), c.duration(r - 1, "month")),
                [ie.Quarter]: () => {
                    const i = e.match(Vl);
                    if (!i)
                        return null;
                    const [,n,t] = i
                      , r = c(n).quarter(+t);
                    return a(r, "quarter")
                }
                ,
                [ie.Bimonth]: () => {
                    const i = ne(e);
                    if (!i)
                        return null;
                    const {YYYY: n, MM1: t, MM2: r} = i;
                    return [c(`${n}/${t}`).startOf("month").format(o), c(`${n}/${r}`).endOf("month").format(o)]
                }
                ,
                [ie.Month]: () => a(c(e), "month"),
                [ie.Biweek]: () => {
                    const i = te(e);
                    if (!i)
                        return null;
                    const {YYYY1: n, YYYY2: t, MM1: r, MM2: l, DD1: a, DD2: d} = i;
                    return [c(`${n}/${r}/${a}`).startOf("day").format(o), c(`${t}/${l}/${d}`).endOf("day").format(o)]
                }
                ,
                [ie.CustomWeek]: () => {
                    const i = e.match(Kl);
                    if (!i)
                        return null;
                    const [,n,t,r] = i
                      , a = c(`${n}/${t}`, l)
                      , d = c(`${n}/${r}`, l);
                    return a.isValid() && d.isValid() ? [a.startOf("day").format(o), d.isBefore(a) ? d.add(1, "year").endOf("day").format(o) : d.endOf("day").format(o)] : null
                }
                ,
                [ie.Day]: () => a(c(e), "day"),
                [ie.Hour]: () => a(c(e), "hour", void 0, c.duration(r - 1, "hour")),
                [ie.Minute]: () => a(c(e), "minute", void 0, c.duration(r - 1, "minute")),
                [ie.Second]: () => a(c(e), "second", void 0, c.duration(r - 1, "second"))
            };
            return null === (n = d[t]) || void 0 === n ? void 0 : n.call(d)
        }
        )(e, {
            timeGranularityType: i,
            timeGranularityNum: n
        });
        t ? d = t : (d.push(e),
        s.dateMode = Yn.SingleDate)
    }
    const u = ql(n, {
        dimMetId: i.id,
        mixins: {
            op: o,
            val: d,
            option: s
        }
    });
    return u.index = t,
    u.menuInvisible = !0,
    u.unremovable = !0,
    u
}
  , wo = ({schema: e, dataSets: i, data: t, uniqueId: r, origin: l}) => {
    const o = Eo(e, i);
    if (a(o))
        return null;
    let d;
    if (d = r ? o.find((e => e.uniqueId === Number(r))) : o[0],
    !d)
        return null;
    const s = Ao(d, i, e);
    if (!s)
        return null;
    const {fieldMap: u} = I.from(i);
    return "dimMetId" === s.type ? ( ({fieldMap: e, drillPath: i, schema: t, drillPill: r, dataSets: l, data: o, drillOrigin: d}) => {
        var s, u, c;
        const p = i[i.indexOf((null === (s = pe(null !== (c = t.drill) && void 0 !== c ? c : [])) || void 0 === s ? void 0 : s.dimMetId) || r.dimMetId) + 1]
          , f = e[p];
        if (!f)
            return null;
        let m, v = e[r.dimMetId];
        if (r.pillType === U.DYNAMIC)
            v = a(t.drill) ? e[r.dimMetId] : e[pe(t.drill).dimMetId],
            m = r;
        else {
            var y, I;
            const i = Object.values(null !== (I = null === (y = r.drillInfo) || void 0 === y ? void 0 : y.pillConfigs) && void 0 !== I ? I : {}).find((e => e.dimMetId === f.id));
            m = i ? {
                ...i,
                roleType: r.roleType,
                location: r.location
            } : Bl(l, {
                location: r.location,
                fieldTypes: n(r.roleType) ? [] : [r.roleType],
                dimMetId: f.id
            }),
            m.index = r.index,
            m.pillType = r.pillType,
            m.drillInfo = r.drillInfo,
            v = e[r.dimMetId]
        }
        const h = $o(r, v, r.uniqueId, r.aggrConf, t, l, o, e, d)
          , g = [(null === (u = t.drill) || void 0 === u ? void 0 : u.length) ? null : r, Object.assign({}, m, {
            dimMetId: f.id
        })].filter(Boolean).map((e => ({
            ...Q(e, ["uniqueId", "dimMetId"]),
            origin: d
        })));
        var E;
        const T = [...null !== (E = t.drill) && void 0 !== E ? E : [], ...g]
          , C = Oi(t, r.location).findIndex((e => e.uniqueId === (null == r ? void 0 : r.uniqueId)))
          , A = Wo(t);
        return {
            replacePill: m,
            replacePillIndex: C,
            overrideWhereList: [...t.whereList, ...h],
            overrideDrill: T,
            displayConf: A,
            ...po(t, r.dimMetId, p)
        }
    }
    )({
        fieldMap: u,
        drillPath: s.path,
        schema: e,
        drillPill: d,
        dataSets: i,
        data: t,
        drillOrigin: l
    }) : ( ({fieldMap: e, drillPath: i, schema: n, drillPill: t, dataSets: r, data: l, drillOrigin: o}) => {
        var a, d, s, u, c, p;
        const f = (null === (a = pe(null !== (c = n.drill) && void 0 !== c ? c : [])) || void 0 === a ? void 0 : a.dynamicDrillUniqueId) || (null === (d = pe(null !== (p = n.drill) && void 0 !== p ? p : [])) || void 0 === d ? void 0 : d.uniqueId) || Dl(t, n).uniqueId
          , m = i[i.indexOf(f) + 1];
        if (!m)
            return null;
        let v, y, I, h;
        const g = null === (s = Dl(t, n).drillInfo) || void 0 === s ? void 0 : s.pillConfigs;
        if (t.pillType === U.DYNAMIC) {
            var E, T, C;
            h = t,
            v = null == g ? void 0 : g[m].dimMetId,
            y = null !== (C = null == g || null === (E = g[f]) || void 0 === E ? void 0 : E.dimMetId) && void 0 !== C ? C : t.dimMetId,
            I = (null == g ? void 0 : g[f]) ? null == g || null === (T = g[f]) || void 0 === T ? void 0 : T.aggrConf : t.aggrConf
        } else {
            var A;
            if (h = null == g ? void 0 : g[m],
            !h)
                return null;
            h = {
                ...h,
                roleType: t.roleType,
                location: t.location,
                index: t.index,
                pillType: t.pillType,
                drillInfo: t.drillInfo
            },
            v = h.dimMetId,
            y = t.dimMetId,
            I = null == g || null === (A = g[f]) || void 0 === A ? void 0 : A.aggrConf
        }
        if (!v)
            return null;
        const M = e[v]
          , N = $o(t, e[y], f, I, n, r, l, e, o)
          , L = [(null === (u = n.drill) || void 0 === u ? void 0 : u.length) ? null : {
            ...t,
            dynamicDrillUniqueId: t.pillType === U.DYNAMIC ? f : void 0
        }, Object.assign({}, h, {
            dimMetId: M.id,
            dynamicDrillUniqueId: t.pillType === U.DYNAMIC ? m : void 0
        })].filter(Boolean).map((e => ({
            ...Q(e, ["uniqueId", "dimMetId", "dynamicDrillUniqueId"]),
            origin: o
        })));
        var R;
        const b = [...null !== (R = n.drill) && void 0 !== R ? R : [], ...L]
          , D = Oi(n, t.location).findIndex((e => e.uniqueId === t.uniqueId))
          , S = Wo(n);
        return {
            replacePill: h,
            replacePillIndex: D,
            overrideWhereList: [...n.whereList, ...N],
            overrideDrill: b,
            displayConf: S,
            ...po(n, t.dimMetId, v)
        }
    }
    )({
        fieldMap: u,
        drillPath: s.path,
        schema: e,
        drillPill: d,
        dataSets: i,
        data: t,
        drillOrigin: l
    })
}
  , xo = ({schema: e, dataSets: i, drillInfo: t, keepDepartmentDrillFilter: r}) => {
    var l, o, s;
    if (a(e.drill))
        return null;
    const u = t || e.drill[e.drill.length - 2];
    if (!u)
        return null;
    const c = go(e);
    if (!c)
        return null;
    const p = Oi(e, c.location).findIndex((e => e.uniqueId === c.uniqueId));
    let f, m = e.drill.length - 1;
    if (c.pillType === U.DYNAMIC)
        f = c,
        m = (null == u ? void 0 : u.dynamicDrillUniqueId) ? e.drill.findIndex((e => e.dynamicDrillUniqueId === u.dynamicDrillUniqueId)) : e.drill.findIndex((e => e.dimMetId === (null == u ? void 0 : u.dimMetId)));
    else {
        var v, y;
        const t = null === (v = c.drillInfo) || void 0 === v || null === (y = v.pillConfigs) || void 0 === y ? void 0 : y[u.uniqueId];
        f = t ? {
            ...t,
            location: c.location
        } : Bl(i, {
            location: c.location,
            fieldTypes: n(c.roleType) ? [] : [c.roleType],
            dimMetId: u.dimMetId,
            uniqueId: u.uniqueId
        }),
        f.index = c.index,
        f.drillInfo = c.drillInfo,
        m = e.drill.findIndex((e => e.uniqueId === u.uniqueId))
    }
    const I = m > 0 ? e.drill.slice(0, m + 1) : [];
    let h = e.whereList;
    if (c.pillType === U.DYNAMIC && "dimMetId" === (null === (l = Ao(c, i, e)) || void 0 === l ? void 0 : l.type)) {
        const i = new Set(e.drill.slice(m).map((e => e.dimMetId)));
        h = r ? h.filter((e => !(Me(e) && i.has(e.dimMetId)))) : h.filter((e => !Me(e) || !i.has(e.dimMetId)))
    } else {
        const i = new Set(e.drill.slice(m).map((e => e.dynamicDrillUniqueId || e.uniqueId)));
        h = r ? h.filter((n => {
            var t;
            if (!Me(n))
                return !0;
            if (i.has(null === (t = n.filter.option) || void 0 === t ? void 0 : t.originDrillUniqueId)) {
                var r, l;
                const i = null === (r = n.filter.option) || void 0 === r ? void 0 : r.originDrillUniqueId
                  , t = null === (l = e.drill) || void 0 === l ? void 0 : l.find((e => e.uniqueId === i || e.dynamicDrillUniqueId === i));
                return (null == t ? void 0 : t.dimMetId) !== n.dimMetId
            }
            return !0
        }
        )) : h.filter((e => {
            var n;
            return !Me(e) || !i.has(null === (n = e.filter.option) || void 0 === n ? void 0 : n.originDrillUniqueId)
        }
        ))
    }
    if (so.includes(null === (o = e.display) || void 0 === o ? void 0 : o.type) && 0 === m && (h = h.filter((e => !Me(e)))),
    (null === (s = e.display) || void 0 === s ? void 0 : s.type) === d.PIVOT_TABLE && r && So({
        schema: e
    })) {
        var g, E, T;
        const i = null === (g = null == h ? void 0 : h.filter(Me)) || void 0 === g || null === (E = g[m]) || void 0 === E ? void 0 : E.dimMetId;
        if (!(null === (T = e.drill) || void 0 === T ? void 0 : T.find((e => e.dimMetId === i)))) {
            let e = -1;
            h = h.filter((i => !Me(i) || (e++,
            !!(e < m))))
        }
    }
    return {
        replacePill: f,
        replacePillIndex: p,
        overrideWhereList: h,
        overrideDrill: I,
        displayConf: e.display.conf,
        ...po(e, c.dimMetId, u.dimMetId)
    }
}
  , Go = e => !a(e.drill)
  , ko = (e, i, n, t, r, l) => {
    const o = go(e);
    if (!o)
        return !1;
    if (fe(n) && n.uniqueId === (null == o ? void 0 : o.uniqueId)) {
        if (o.location !== t)
            return !0
    } else if (t !== b.COLOR && t !== b.DIMENSION)
        return !1;
    if (e.display.type === d.TABLE)
        return !1;
    let a;
    fe(n) ? a = {
        ...n,
        location: t,
        index: l
    } : (a = Bl(i, {
        dimMetId: n.id,
        location: t,
        fieldTypes: r
    }),
    a.index = l);
    const s = ho(e);
    fe(n) && (s[n.index] = null),
    a.location === b.DIMENSION && s.splice(a.index, 0, a);
    const u = s.filter((n => Boolean(n) && Mo(n, i, e)))[0];
    return (null == u ? void 0 : u.uniqueId) !== o.uniqueId
}
  , Uo = (e, i) => Ce(e, (e => {
    if (a(e.drill))
        return {
            ...e,
            whereList: e.whereList.filter((e => !Me(e)))
        };
    if (I.from(i).getDataSetByDimMetId(e.drill[0].dimMetId))
        try {
            const n = Po(e, i, e.drill[0]);
            if (!n)
                throw new Error("rollup failed");
            Object.assign(e, n)
        } catch (n) {
            const t = vo(e, i);
            Object.assign(e, t)
        }
}
))
  , Fo = (e, i) => {
    const {drill: n=[]} = e
      , t = n.map((e => e.dimMetId));
    if (0 === t.length)
        return !0;
    if (!I.from(i).getDataSetByDimMetId(t[0]))
        return !1;
    const r = Ao(n[0], i, e);
    if (!r)
        return !1;
    if ("dimMetId" === r.type) {
        const e = r.path.indexOf(t[0]);
        return t.every(( (i, n) => r.path[e + n] === i))
    }
    return !0
}
;
function $o(e, i, n, t, r, l, o, a, s) {
    const u = o[e.uniqueId];
    let c = r.whereList.length;
    const p = [];
    if (r.display.type === d.PIVOT_TABLE && s !== ve.departmentAutoDrill) {
        ("rows" === o.type ? r.rows : r.columns).filter((e => Object.keys(o).includes(`${null == e ? void 0 : e.uniqueId}`) && `${o.pillUniqueId}` != `${null == e ? void 0 : e.uniqueId}` && !e.notJoinQuery && !r.whereList.find((i => {
            var n;
            const t = null !== (n = i.filter.option) && void 0 !== n ? n : {};
            return t.origin === Ie.Drill && t.originDrillUniqueId === e.uniqueId
        }
        )))).forEach((e => {
            p.push(qo({
                value: o[e.uniqueId],
                dimMetItem: a[e.dimMetId],
                dataSets: l,
                index: c,
                originDrillUniqueId: e.uniqueId,
                aggrConf: e.aggrConf
            })),
            c++
        }
        ))
    }
    return p.push(qo({
        value: u,
        dimMetItem: i,
        dataSets: l,
        index: c,
        originDrillUniqueId: n,
        aggrConf: t
    })),
    p
}
const Wo = e => {
    var i, n;
    return [d.MAP, d.SCATTER_MAP].includes(e.display.type) ? {
        ...e.display.conf,
        location: {
            ...null !== (n = null === (i = e.display.conf) || void 0 === i ? void 0 : i.location) && void 0 !== n ? n : {},
            coordinate: null,
            zoom: 1
        }
    } : e.display.conf
}
;
function Yo(e, i) {
    if (bo(e))
        return function(e, i) {
            var n;
            return Do(null == e || null === (n = e.display) || void 0 === n ? void 0 : n.type) ? Ce(e, (e => {
                const n = {};
                ["rows", "columns"].forEach((t => {
                    e[t].forEach((t => {
                        var r;
                        if (Ae(t)) {
                            var l;
                            const i = Dl(t, e);
                            a(i) || (null === (l = i.drillInfo) || void 0 === l ? void 0 : l.groupId) || (i.drillInfo = {
                                ...i.drillInfo,
                                groupId: Math.random().toString(36).slice(-8)
                            })
                        } else if (!(null === (r = t.drillInfo) || void 0 === r ? void 0 : r.groupId)) {
                            const e = To(t.dimMetId, i);
                            e ? (t.drillInfo = {
                                ...t.drillInfo,
                                groupId: n[e.id] || Math.random().toString(36).slice(-8)
                            },
                            n[e.id] || (n[e.id] = t.drillInfo.groupId)) : t.drillInfo = {
                                ...t.drillInfo,
                                groupId: Math.random().toString(36).slice(-8)
                            }
                        }
                    }
                    ))
                }
                ))
            }
            )) : e
        }(e, i);
    return Go(e) && !Fo(e, i) ? Uo(e, i) : e
}
function Ho(e, i) {
    return function(e, i, n) {
        const t = Object.values(b);
        let r = {
            ...e
        };
        return t.forEach((e => {
            r[e] && (r = Le.set(e, r[e].map(( (n, t) => i(n, e, t))), r))
        }
        )),
        n && r.dynamicPillsMap && Object.entries(r.dynamicPillsMap).forEach(( ([e,n]) => {
            r = Le.set(`dynamicPillsMap.${e}`, {
                ...n,
                pillList: n.pillList.map(( (e, n) => i(e, e.location, n)))
            }, r)
        }
        )),
        xi(e) && (r = ki({
            schema: e,
            fn: i
        })),
        r
    }(e, (n => {
        if (n.roleType !== s.MEA)
            return n;
        const t = Re(n, i, e.display.type)
          , r = {
            ...n
        };
        switch (t) {
        case be.G12G0:
            r.error = z.ORIGIN_AGGR_CHANGED;
            break;
        case be.G02G1:
            e.display.type === d.RAW_TABLE && (r.error = z.ORIGIN_AGGR_CHANGED),
            r.aggrConf = {};
            break;
        default:
            r.error = r.error === z.ORIGIN_AGGR_CHANGED ? void 0 : r.error
        }
        return r
    }
    ), !0)
}
var Vo;
const Ko = e => {
    var i, n;
    return !!((null !== (Vo = null === (i = e.percent) || void 0 === i || null === (n = i.calcConfList) || void 0 === n ? void 0 : n.length) && void 0 !== Vo ? Vo : 0) > 0)
}
  , jo = e => {
    var i;
    return !!(null === (i = e.periodCompare) || void 0 === i ? void 0 : i.length)
}
;
function zo(e) {
    var i;
    return !!(null === (i = e.whereCompare) || void 0 === i ? void 0 : i.measureList)
}
const Qo = e => {
    var i, n;
    return !a(null === (i = e.topN) || void 0 === i ? void 0 : i.orderByList) || !!(null === (n = e.topN) || void 0 === n ? void 0 : n.measure)
}
  , Xo = e => !a(e.combined)
  , Jo = e => {
    var i;
    return !!(null === (i = e.referenceLine) || void 0 === i ? void 0 : i.length)
}
  , Zo = e => {
    var i, n;
    return !!(null === (i = e.tableCalculation) || void 0 === i || null === (n = i.rules) || void 0 === n ? void 0 : n.length)
}
  , ea = (e, i) => Xo(e) ? R(e, (n => {
    var t;
    if ((e => {
        var i;
        const {type: n} = null !== (i = e.display) && void 0 !== i ? i : {};
        return n === d.PIVOT_TABLE || N(e)
    }
    )(e) && e.combined && e.combined.elementType !== Xt.OUTSIDE)
        return n.combined = function(e, i, n) {
            const t = I.from(L(i));
            function r(e, i) {
                const n = Yt(i, (e => e.uniqueId.toString()));
                return e.filter((e => n.has(e)))
            }
            if (n && (e => !("type"in e))(n))
                return R(n, (i => {
                    var l;
                    const o = null !== (l = Oi(e, b.COLUMN)) && void 0 !== l ? l : [];
                    var a;
                    const d = null !== (a = Oi(e, b.ROW)) && void 0 !== a ? a : []
                      , s = _i(e, {
                        excludeColumns: !0,
                        excludeRows: !0
                    })
                      , u = dr(e.display) === or.Row ? [...o, ...s] : o
                      , c = dr(e.display) === or.Column ? [...d, ...s] : d
                      , {rowDimensions: p=[], colDimensions: f=[]} = i;
                    i.rowDimensions = r(p, c),
                    i.colDimensions = r(f, u),
                    i.methodsList = sr(e, t.getFieldMap(), t.getMapKeys(), n)
                }
                ))
        }(e, i, e.combined),
        void (0 === (null === (t = n.combined) || void 0 === t ? void 0 : t.methodsList.length) && (n.combined = void 0));
    const r = n.combined
      , l = ( (e, i) => {
        const {display: n} = e
          , {fieldMap: t, mapKeys: r} = I.from(i)
          , l = Si(e)
          , o = M(n.type);
        return l.filter((e => lr(e, t, r, o)))
    }
    )(e, i)
      , {type: o} = r
      , a = Ui(n);
    var s;
    r.combinedList = (null !== (s = r.combinedList) && void 0 !== s ? s : []).map((e => ({
        ...e,
        idList: e.idList.filter((e => a.includes(e) || "all_combined_measures" === e && l.length > 0))
    }))).filter((e => o !== Ht.TABLE || e.idList.length)),
    0 === r.combinedList.length && (n.combined = void 0)
}
)) : e;
function ia(e, i) {
    const {uniqueId: n} = i
      , t = Object.values(b)
      , r = ki({
        schema: e,
        filter: e => e.uniqueId !== n
    });
    return R(r, (e => {
        t.forEach((i => {
            e[i] && (e[i] = e[i].filter((e => e.uniqueId !== n)).map(( (e, i) => ({
                ...e,
                index: i
            }))))
        }
        ))
    }
    ))
}
const na = (e, i) => {
    let n = e;
    if (e.forecast) {
        const t = wi(e).find((e => e.sourceType === E.FORECAST));
        if (!t)
            return n = R(n, (e => {
                delete e.forecast
            }
            )),
            n;
        const r = Oi(e, b.DIMENSION);
        if (r[0].uniqueId !== e.forecast.timePill)
            return t && (n = ia(n, {
                uniqueId: t.uniqueId
            })),
            n = R(n, (e => {
                e.forecast = void 0
            }
            )),
            n;
        if (t) {
            if (!(r[r.length - 1].uniqueId === t.uniqueId))
                return n = Ps(n),
                n = _s(e.forecast, n, i),
                n
        }
        return n
    }
    return n
}
;
function ta(e, {dimMetId: i, format: n, name: t, compactName: r, sourceType: l, originId: o, id: a, expr: d, index: u, autoAggr: c=!1, location: p}) {
    return {
        ...Bl(e, {
            dimMetId: i,
            location: null != p ? p : b.MEASURE,
            fieldTypes: [s.MEA],
            id: a,
            sourceType: l,
            autoAggr: c
        }),
        format: n,
        compactName: r,
        originId: o,
        name: t,
        expr: d,
        unremovable: !0,
        index: u
    }
}
const ra = () => ({
    type: p.PERCENT,
    precision: 2,
    precisionType: f.DECIMAL_DIGITS
})
  , la = e => `${e}${u.i18n`的百分比`}`
  , oa = () => u.i18n`百分比`;
function aa(e, i, n) {
    const t = I.from(L(i))
      , r = t.getFieldMap()
      , l = t.getMapKeys();
    return e.map(( (e, t) => {
        const o = Tl({
            measureId: e.id,
            sourceType: e.sourceType
        })
          , a = e.beforeUpdateId && e.updateDerived ? Tl({
            measureId: e.beforeUpdateId,
            sourceType: e.sourceType
        }) : void 0
          , d = De(e, r, l)
          , s = Sl(e, d, n)
          , u = la(s)
          , c = la(d.name)
          , p = oa()
          , f = ta(i, {
            dimMetId: null == d ? void 0 : d.id,
            name: u,
            compactName: [p, c],
            originId: e.id,
            index: t,
            sourceType: E.PERCENT,
            id: o,
            format: {
                numFormat: ra(),
                displayName: c
            },
            expr: e.expr,
            location: e.location
        });
        return f.beforeUpdateId = a,
        f.updateDerived = e.updateDerived,
        f
    }
    ))
}
const da = (e, i, n) => {
    const {fieldMap: t, mapKeys: r} = I.from(i);
    return he(Si(e).filter((e => ( (e, i, n, t) => {
        const r = Fi(e, i, n);
        return !j(e.sourceType) && $i(e) && (T.isNumber(r) || T.isTemplate(r) || e.pillType === U.DYNAMIC && !(t && bl(e)))
    }
    )(e, t, r, n))), "id")
}
  , sa = (e, i) => Ko(e) ? Ce(e, (n => {
    if (n.percent) {
        var t;
        const {percent: r} = n
          , l = da(e, i, !0)
          , o = l.map((e => e.id));
        r.calcConfList.forEach((e => {
            e.idList = e.idList.filter((e => o.includes(e) || e === Bn && l.length > 0))
        }
        )),
        r.calcConfList = r.calcConfList.filter((e => e.idList.length));
        let a = [];
        if (0 === (null === (t = r.calcConfList) || void 0 === t ? void 0 : t.length) || r.calcConfList.every((e => 0 === e.idList.length)) || !Nt(e))
            n.percent = void 0,
            a = [];
        else {
            const e = M(n.display.type);
            a = aa(n.percent.calcConfList.some((e => {
                var i;
                return null === (i = e.idList) || void 0 === i ? void 0 : i.includes(Bn)
            }
            )) ? l : n.percent.calcConfList.reduce(( (e, i) => e.concat(i.idList)), []).map((e => l.find((i => i.id === e)))).filter(Boolean), i, !e)
        }
        const d = El(n, {
            derivedList: a,
            sourceType: E.PERCENT
        });
        Object.assign(n, d)
    }
}
)) : e;
const ua = e => {
    const {datetimeUnit: i} = e.valOption
      , n = {
        [Un.minute]: "m",
        [Un.hour]: "h",
        [Un.day]: "d",
        [Un.week]: "w",
        [Un.bytedWeek]: "w",
        [Un.customWeek]: "w",
        [Un.month]: "M",
        [Un.bimonthly]: "M",
        [Un.quarter]: "Q",
        [Un.semiannual]: "M",
        [Un.year]: "Y"
    };
    if (xl(e)) {
        const {startTime: i, endTime: t} = wl(e);
        if (i.type === jn.Unlimited || t.type === jn.Unlimited)
            return null;
        if (i.datetimeUnit && i.datetimeUnit === t.datetimeUnit) {
            let e;
            e = i.direction !== t.direction ? i.val + t.val : Math.abs(i.val - t.val);
            let r = 1;
            return i.datetimeUnit === Un.bimonthly ? r = 2 : i.datetimeUnit === Un.semiannual && (r = 6),
            `${(1 + e) * r}${n[i.datetimeUnit]}`
        }
        const r = c(Fl(i, !1, !0))
          , l = c(Fl(t, !1, !1));
        return r.isValid() && l.isValid() ? `${l.diff(r, "d") + 1}d` : null
    }
    if ([pt.Last, pt.LastSync].includes(e.op)) {
        if (i === Un.bimonthly)
            return 2 * +e.val[0] + "M";
        if (i === Un.semiannual)
            return 6 * +e.val[0] + "M";
        if (i && n[i])
            return `${e.val[0]}${n[i]}`
    }
    if (e.op === pt.Between) {
        const i = (e => {
            var i;
            return null !== (jl = null === (i = e.option) || void 0 === i ? void 0 : i.granularityType) && void 0 !== jl ? jl : ee.YearMonthDay
        }
        )(e);
        return {
            [ee.YearMonthDay]: `${c(e.val[1]).diff(c(e.val[0]), "d") + 1}d`,
            [ee.YearMonth]: `${c(e.val[1]).diff(c(e.val[0]), "M") + 1}M`,
            [ee.YearWeek]: `${c(e.val[1]).diff(c(e.val[0]), "w") + 1}w`
        }[i]
    }
    return null
}
  , ca = {
    [ie.Second]: e => ({
        unit: "s",
        offset: e
    }),
    [ie.Minute]: e => ({
        unit: "m",
        offset: e
    }),
    [ie.Hour]: e => ({
        unit: "h",
        offset: e
    }),
    [ie.Day]: () => ({
        unit: "d",
        offset: 1
    }),
    [ie.TWeek]: () => ({
        unit: "w",
        offset: 1
    }),
    [ie.Week]: () => ({
        unit: "w",
        offset: 1
    }),
    [ie.CustomWeek]: () => ({
        unit: "w",
        offset: 1
    }),
    [ie.Biweek]: () => ({
        unit: "w",
        offset: 2
    }),
    [ie.Month]: () => ({
        unit: "M",
        offset: 1
    }),
    [ie.Bimonth]: () => ({
        unit: "M",
        offset: 2
    }),
    [ie.Quarter]: () => ({
        unit: "M",
        offset: 3
    }),
    [ie.Year]: () => ({
        unit: "Y",
        offset: 1
    })
};
function pa(e, i, n) {
    const t = Oi(e, b.WHERE)
      , r = Ea(e)
      , {shiftId: l, periodType: o, baseDate: a, customNum: d, customUnit: s} = n
      , u = e => e.id === l
      , p = r.find(u)
      , f = t.find(u);
    if (!p && !f)
        return null;
    const m = !!p;
    if (o === yr.RelativeRatio) {
        if (!m && f)
            return ua(f.filter);
        if (p)
            return function(e, i) {
                const {fieldMap: n, mapKeys: t} = I.from(i)
                  , r = De(e, n, t)
                  , l = T.isDatetime(r.dataTypeName)
                  , {aggrConf: o={}} = e;
                if (_e(o))
                    return l ? "1s" : "1d";
                const {timeGranularityType: a, timeGranularityNum: d} = o
                  , {unit: s, offset: u} = ca[a](d);
                return `${u}${s}`
            }(p, i)
    }
    const v = null != p ? p : f
      , {aggrConf: y={}} = v
      , {timeGranularityType: h, timeGranularityNum: g} = y;
    if (o === yr.BaseDate) {
        const e = "YYYY-MM-DD";
        return !p && f ? a.map((i => c(i).format(e))) : function(e, i, n) {
            const t = "YYYY-MM-DD"
              , r = i => [c(e).format(i), c(e).format(i)]
              , l = (i=!1) => {
                const r = n > c(e).isoWeekday() ? c(e).isoWeekday(1).add(-7, "day").add(n - 1, "day") : c(e).isoWeekday(1).add(n - 1, "day")
                  , l = c(r).add(c.duration(i ? 13 : 6, "days"));
                return [r.format(t), l.format(t)]
            }
              , o = {
                [ie.Second]: () => r("YYYY-MM-DD"),
                [ie.Minute]: () => r("YYYY-MM-DD"),
                [ie.Hour]: () => r("YYYY-MM-DD"),
                [ie.Day]: () => r("YYYY-MM-DD"),
                [ie.Week]: l,
                [ie.TWeek]: l,
                [ie.CustomWeek]: l,
                [ie.Biweek]: () => l(!0),
                [ie.Month]: () => {
                    const i = c(e).startOf("month")
                      , n = c(e).endOf("month");
                    return [i.format(t), n.format(t)]
                }
                ,
                [ie.Bimonth]: () => {
                    const i = c(e).startOf("month")
                      , n = c(e).add(1, "month").endOf("month");
                    return [i.format(t), n.format(t)]
                }
                ,
                [ie.Quarter]: () => {
                    const i = c(e).startOf("quarter")
                      , n = c(e).endOf("quarter");
                    return [i.format(t), n.format(t)]
                }
                ,
                [ie.Year]: () => {
                    const i = c(e).startOf("year").add(c.duration(n - 1, "months"))
                      , r = c(i).add(c.duration(12, "months").subtract(1, "day"));
                    return [i.format(t), r.format(t)]
                }
            };
            return o[i || ie.Day]()
        }(c(a[0]), h, g)
    }
    return o === yr.Custom ? s === mr.Quarter ? `${3 * d}${mr.MONTH}` : s === mr.BIMONTH ? `${2 * d}${mr.MONTH}` : s === mr.BIWEEK ? `${2 * d}${mr.WEEK}` : `${d}${s}` : o === yr.LastWeekRatio ? "1w" : o === yr.LastMonthRatio ? "1M" : o === yr.LastYearRatio ? "1Y" : null
}
function fa(e) {
    return null === e ? "-7d" : Array.isArray(e) ? e : `-${e}`
}
const ma = ({periodCompareItem: e, period: i, measureId: n, retType: t, prefix: r="table", separator: l="_"}) => [r, e.shiftId, (Array.isArray(i) ? i.join("_") : i).replace(/\s+|-|:/g, ""), n, t].join(l);
function va(e, i, n, t) {
    const {idList: r, retTypeList: l} = e
      , o = []
      , a = []
      , d = pa(n, t, e)
      , s = ga(n, t, !0)
      , u = Y(s.map((e => e.id)))
      , c = r.includes(Pn) ? u : r.filter((e => u.includes(e)))
      , p = n.periodCompare[i]
      , f = [];
    for (const I of c)
        for (const r of l) {
            var m, v, y;
            const l = `${I}_${r}`
              , o = null == p || null === (m = p.configToDerivedPillRelations) || void 0 === m ? void 0 : m.find((e => e.key === l))
              , s = ha({
                periodCompareFormItem: e,
                index: a.length,
                measureId: I,
                retType: r,
                periodCompareIndex: i,
                schema: n,
                dataSets: t,
                originDerivedPillId: null == o ? void 0 : o.derivedPillId,
                originPeriodType: null == p ? void 0 : p.periodType
            });
            s.expr = ma({
                periodCompareItem: e,
                period: Array.isArray(d) ? d : `${d}`,
                measureId: I,
                retType: r
            });
            const u = Di(n).find((e => e.id === I && e.beforeUpdateId))
              , c = null == u ? void 0 : u.beforeUpdateId;
            if (c) {
                const n = ya(e, c, r, i);
                s.beforeUpdateId = n,
                s.updateDerived = u.updateDerived
            }
            a.push(s),
            f.push({
                key: l,
                derivedPillId: s.id,
                dynamicSelectedPillIdList: (null === (v = n.dynamicPillsMap) || void 0 === v || null === (y = v[I]) || void 0 === y ? void 0 : y.selectedPillIdList) || []
            })
        }
    return o.push({
        ...e,
        configToDerivedPillRelations: f,
        period: fa(d)
    }),
    {
        derivedList: a,
        periodCompareList: o
    }
}
const ya = (e, i, n, t) => Tl({
    dependDateId: e.shiftId,
    periodType: e.periodType,
    measureId: i,
    retType: n,
    periodCompreIndex: t,
    dynamicOption: {
        customUnit: e.customUnit,
        customNum: e.customNum,
        baseDate: Array.isArray(e.baseDate) ? e.baseDate.join("_") : e.baseDate ? c(e.baseDate).format() : void 0
    }
})
  , Ia = (e, i, n) => function({name: e, periodType: i, retType: n, customOptions: t}) {
    let r = {
        [yr.RelativeRatio]: {
            [nl.RATIO]: u.i18n`环比增长率`,
            [nl.DIFF]: u.i18n`环比增长值`,
            [nl.STORE]: u.i18n`环比原始值`
        },
        [yr.LastWeekRatio]: {
            [nl.RATIO]: u.i18n`上周同比增长率`,
            [nl.DIFF]: u.i18n`上周同比增长值`,
            [nl.STORE]: u.i18n`上周同比原始值`
        },
        [yr.LastMonthRatio]: {
            [nl.RATIO]: u.i18n`上月同比增长率`,
            [nl.DIFF]: u.i18n`上月同比增长值`,
            [nl.STORE]: u.i18n`上月同比原始值`
        },
        [yr.LastYearRatio]: {
            [nl.RATIO]: u.i18n`上年同比增长率`,
            [nl.DIFF]: u.i18n`上年同比增长值`,
            [nl.STORE]: u.i18n`上年同比原始值`
        },
        [yr.Custom]: {
            [nl.RATIO]: u.i18n`差异百分比`,
            [nl.DIFF]: u.i18n`差异值`,
            [nl.STORE]: u.i18n`原始值`
        },
        [yr.BaseDate]: {
            [nl.RATIO]: u.i18n`定基增长率`,
            [nl.DIFF]: u.i18n`定基增长值`,
            [nl.STORE]: u.i18n`定基原始值`
        }
    }[i][n]
      , l = u.i18n`${e}的${r}`;
    if (i === yr.Custom && !a(t)) {
        const e = `(-${t.customNum}${t.customUnit})`;
        l += e,
        r += e
    }
    return {
        name: l,
        compactName: r
    }
}({
    name: i,
    periodType: e.periodType,
    retType: n,
    customOptions: e.periodType === yr.Custom ? {
        customNum: e.customNum,
        customUnit: e.customUnit
    } : void 0
});
function ha({periodCompareFormItem: e, measureId: i, retType: n, periodCompareIndex: t, schema: r, dataSets: l, index: o, originDerivedPillId: a, originPeriodType: d}) {
    var s, u, c, m, v, y, h;
    const g = L(l)
      , T = ya(e, i, n, t)
      , C = Si(r)
      , A = C.find((e => e.id === a))
      , M = C.find((e => e.id === i))
      , N = I.from(g).getDataSetByDimMetId(M.dimMetId)
      , R = ue(N, M) || {}
      , b = Sl({
        ...M,
        pillType: U.ORIGIN
    }, R, !1)
      , D = Sl(M, R)
      , S = function(e, i, n, t) {
        var r, l;
        if (i && (null === (r = i.format) || void 0 === r ? void 0 : r.numFormat))
            return null === (l = i.format) || void 0 === l ? void 0 : l.numFormat;
        let o;
        switch (e) {
        case nl.STORE:
        case nl.DIFF:
            o = n && !n.auto ? n : t && !t.auto ? t : {
                type: p.DIGIT,
                precision: 2,
                precisionType: f.DECIMAL_DIGITS
            };
            break;
        case nl.RATIO:
            o = {
                type: p.PERCENT,
                precision: 2,
                precisionType: f.DECIMAL_DIGITS
            }
        }
        return o
    }(n, A, null == M || null === (s = M.format) || void 0 === s ? void 0 : s.numFormat, null == R ? void 0 : R.dataFormat)
      , O = Ia(e, D, n)
      , _ = Ia(e, b, n).name
      , P = d === e.periodType;
    return ta(N, {
        dimMetId: null == R ? void 0 : R.id,
        id: T,
        sourceType: E.PERIODCMP,
        format: {
            displayName: P && (null == A || null === (u = A.compactName) || void 0 === u ? void 0 : u[1]) !== (null == A || null === (c = A.format) || void 0 === c ? void 0 : c.displayName) && (null == A || null === (m = A.format) || void 0 === m ? void 0 : m.displayName) || _,
            fieldDescr: P ? null == A || null === (v = A.format) || void 0 === v ? void 0 : v.fieldDescr : void 0,
            showFieldDescr: !!P && (null == A || null === (y = A.format) || void 0 === y ? void 0 : y.showFieldDescr),
            numFormat: S,
            conditionalFormat: null == A || null === (h = A.format) || void 0 === h ? void 0 : h.conditionalFormat
        },
        compactName: [O.compactName, _],
        originId: i,
        name: O.name,
        index: o,
        location: M.location
    })
}
const ga = (e, i, n) => {
    const {fieldMap: t, mapKeys: r} = I.from(i);
    return Si(e).filter((e => function(e, i, n, t) {
        const r = Fi(e, i, n);
        return !G(e) && !F(e) && !bl(e) && $i(e) && (T.isNumber(r) || T.isTemplate(r) || !t && C(e))
    }(e, t, r, n)))
}
  , Ea = e => {
    const {display: {type: i}} = e;
    return i === d.RAW_TABLE ? [] : [d.PIVOT_TABLE, d.TREND_TABLE].includes(i) ? _i(e) : _i(e).filter((e => ![b.COLUMN, b.ROW].includes(e.location)))
}
  , Ta = (e, i) => (null != i ? i : []).every((i => i.every(( (n, t) => {
    if (t !== i.length - 1) {
        const r = e.findIndex((e => e === n));
        return e.findIndex((e => e === i[t + 1])) - r == 1
    }
    return !0
}
))));
const Ca = function(e, i) {
    return jo(e) ? R(e, (n => {
        const t = n.periodCompare
          , {fieldMap: r} = I.from(i)
          , l = wi(e, !0).filter((e => {
            var i;
            return e.location !== b.WHERE || !de(e) && !F(e) && T.isTime(null === (i = r[e.dimMetId]) || void 0 === i ? void 0 : i.dataTypeName)
        }
        ))
          , o = l.map((e => e.id))
          , a = ga(e, i);
        n.periodCompare = t.filter((e => {
            var t;
            const r = l.find((i => i.id === e.shiftId));
            if (!o.includes(e.shiftId) || Ae(r) && !function(e, i, n) {
                const {fieldMap: t, mapKeys: r} = At(n);
                var l;
                const {pillList: o=[], canEmpty: a} = null !== (l = Se(i, e.id)) && void 0 !== l ? l : {};
                return o.every((e => {
                    var i;
                    const n = De(e, t, r);
                    return T.isTime(n.dataTypeName) && !Oe.includes(null === (i = e.aggrConf) || void 0 === i ? void 0 : i.timeGranularityType)
                }
                )) && !a
            }(r, n.dynamicPillsMap, i))
                return !1;
            e.idList = e.idList.filter((e => o.includes(e) || e === Pn && a.length > 0));
            const d = (null == r || null === (t = r.aggrConf) || void 0 === t ? void 0 : t.timeGranularityType) || ("datetime" === (null == r ? void 0 : r.dataTypeName) ? ie.Second : ie.Day)
              , s = function(e, i, n, t) {
                if (!t || Oe.includes(t))
                    return !1;
                switch (n) {
                case yr.RelativeRatio:
                    return !0;
                case yr.LastWeekRatio:
                case yr.LastMonthRatio:
                    return !(!e || i) && [ie.Day, ie.Hour, ie.Minute, ie.Second].includes(t);
                case yr.LastYearRatio:
                    return !(!e || i || [ie.Year].includes(t));
                case yr.BaseDate:
                    return ![ie.Bimonth, ie.Biweek].includes(t);
                case yr.Custom:
                    return !0;
                default:
                    return !1
                }
            }((null == r ? void 0 : r.location) !== b.WHERE, (null == r ? void 0 : r.pillType) === U.DYNAMIC, e.periodType, d);
            return !(!e.idList.length || !s)
        }
        ));
        const d = []
          , s = [];
        n.periodCompare.forEach(( (e, t) => {
            const {derivedList: r, periodCompareList: l} = va(e, t, n, i);
            d.push(...r),
            s.push(...l)
        }
        )),
        n.periodCompare = s;
        const u = El(n, {
            derivedList: d,
            sourceType: E.PERIODCMP
        });
        Object.assign(n, u)
    }
    )) : e
}
  , Aa = e => Jo(e) ? R(e, (e => {
    var i, n, t;
    if (null === (i = e.referenceLine) || void 0 === i ? void 0 : i.length) {
        const i = Yi(e)
          , n = Ui(e);
        e.referenceLine = e.referenceLine.filter((e => {
            var t, r, l, o;
            return (null == e || null === (t = e.calcConfig) || void 0 === t ? void 0 : t.uniqueId) ? i.includes(null == e || null === (l = e.calcConfig) || void 0 === l ? void 0 : l.uniqueId) : !(null == e || null === (r = e.calcConfig) || void 0 === r ? void 0 : r.measureId) || n.includes(null == e || null === (o = e.calcConfig) || void 0 === o ? void 0 : o.measureId)
        }
        ))
    }
    wt.includes(e.display.type) && (null === (n = e.referenceLine) || void 0 === n ? void 0 : n.length) && (e.referenceLine = null === (t = e.referenceLine) || void 0 === t ? void 0 : t.map((i => ({
        ...i,
        scopeRange: 0 === e.rows.length && 0 === e.columns.length ? Cr.TABLE : Cr.PANE
    }))))
}
)) : e
  , Ma = [d.COLUMN, d.COLUMN_PERCENT, d.COLUMN_PARALLEL, d.BAR, d.BAR_PERCENT, d.BAR_PARALLEL, d.LINE, d.AREA, d.AREA_PERCENT, d.DUAL_AXIS, d.COMBINATION, d.BILATERAL, d.RADAR, d.WATERFALL_CHANGE]
  , Na = [d.TABLE, d.RAW_TABLE, d.PIVOT_TABLE, d.FUNNEL, d.SANKEY, d.MEASURE_CARD, d.COMPARATIVE_MEASURE_CARD, d.MEASURE_TREND, d.WATERFALL, d.GIS_TRACE_MAP]
  , La = e => {
    const i = Mn(e);
    if (Na.includes(i))
        return [br.TABLE];
    const n = _i(e).filter((e => ![b.COLUMN, b.ROW].includes(e.location))).reduce(( (e, i) => (Pe(i) || i.notJoinQuery || e.includes(i.id) || e.push(i.id),
    e)), [])
      , t = [];
    return N(e) && t.push(br.PIVOT_CHART),
    Ma.includes(i) ? n.length > 1 ? [...t, br.AXIS_LEGEND] : [...t, br.AXIS] : [...t, br.LEGEND]
}
;
const Ra = e => R(e, (i => {
    if (i.sort && Ws(i)) {
        const {orderByList: n=[]} = i.sort
          , t = La(i)
          , r = Ui(i, !1)
          , l = _i(e).filter((e => !Pe(e)))
          , o = Si(e).filter((e => !Pe(e)))
          , a = {
            [br.AXIS]: e => {
                return e.strategy === br.AXIS && r.includes(e.id) && (i = l.filter((e => e.location === b.DIMENSION)),
                n = o,
                i.length ? [i[0], ...n] : [...n]).some((i => i.id === e.id));
                var i, n
            }
            ,
            [br.LEGEND]: e => e.strategy === br.LEGEND && r.includes(e.id),
            [br.AXIS_LEGEND]: e => (e.strategy === br.AXIS || e.strategy === br.LEGEND) && r.includes(e.id),
            [br.PIVOT_CHART]: e => e.strategy === br.PIVOT_CHART && l.map((e => e.id)).includes(e.id) && e.depend && r.includes(e.depend)
        };
        i.sort.orderByList = n.filter((e => {
            if ([On, qn].includes(e.id))
                return !0;
            if (t.includes(br.AXIS_LEGEND) && e.strategy && [br.AXIS, br.LEGEND].includes(e.strategy))
                return a[e.strategy](e);
            if (e.strategy && t.includes(e.strategy) && a[e.strategy])
                return a[e.strategy](e);
            if (!e.strategy) {
                if (e.depend) {
                    if (e.filter && e.filter.length) {
                        const n = i.rows.filter((e => e.pillType !== U.PLACEHOLDER))
                          , t = i.columns.filter((e => e.pillType !== U.PLACEHOLDER));
                        return r.includes(e.id) && r.includes(e.depend) && (e.filter.length === n.length && e.filter.every(( (e, i) => {
                            var t;
                            return e.id === (null === (t = n[i]) || void 0 === t ? void 0 : t.id)
                        }
                        )) || e.filter.length === t.length && e.filter.every(( (e, i) => {
                            var n;
                            return e.id === (null === (n = t[i]) || void 0 === n ? void 0 : n.id)
                        }
                        )))
                    }
                    return r.includes(e.id) && r.includes(e.depend)
                }
                return r.includes(e.id)
            }
            return !1
        }
        ))
    }
}
))
  , ba = {
    get[Ur.Difference]() {
        return u.i18n`差异`
    },
    get[Ur.PercentDifferenceFrom]() {
        return u.i18n`差异百分比`
    },
    get[Ur.PercentOfTotal]() {
        return u.i18n`总额百分比`
    },
    get[Ur.RunningTotal]() {
        return u.i18n`汇总`
    },
    get[Ur.Percentile]() {
        return u.i18n`百分位`
    },
    get[Ur.Rank]() {
        return u.i18n`排名`
    },
    get[Ur.MovingCalculation]() {
        return u.i18n`移动计算`
    }
};
function Da(e, i) {
    return `LOOKUP(${e}, ${i})`
}
function Sa(e) {
    return `ZN(${e})`
}
function Oa(e, i) {
    return `${e} ALONG ${i.join(",")}`
}
function _a(e) {
    return `RUNNING_SUM(${e})`
}
function Pa(e, i) {
    return `RANK(${e}, '${i}')`
}
function Ba(e, i) {
    return `WINDOW_SUM(${e}, ${i.winStart}, ${i.winEnd}, ${i.fillWindow ? 1 : 0})`
}
function qa(e, i, n) {
    try {
        switch (e.type) {
        case Ur.Difference:
            return t = Sa(n),
            r = Oa(Da(n, e.relativeTo.toString()), i),
            `${t} - ${r}`;
        case Ur.PercentDifferenceFrom:
            return function(e, i) {
                return `(${e} - ${i}) / ${i}`
            }(Sa(n), Oa(Da(n, e.relativeTo.toString()), i));
        case Ur.PercentOfTotal:
            return function(e, i) {
                return `${e} / ${i}`
            }(n, Oa(`TOTAL(${n})`, i));
        case Ur.RunningTotal:
            switch (e.aggregator) {
            case Vr.Sum:
                return Oa(_a(n), i);
            case Vr.Avg:
                return Oa(function(e) {
                    return `RUNNING_AVG(${e})`
                }(n), i);
            case Vr.Max:
                return Oa(function(e) {
                    return `RUNNING_MAX(${e})`
                }(n), i);
            case Vr.Min:
                return Oa(function(e) {
                    return `RUNNING_MIN(${e})`
                }(n), i);
            default:
                return Oa(_a(n), i)
            }
        case Ur.Percentile:
            return Oa(function(e, i) {
                return `RANK_PERCENTILE(${e}, '${i}')`
            }(n, e.order), i);
        case Ur.Rank:
            switch (e.arrange) {
            case Qr.RANK:
                return Oa(Pa(n, e.order), i);
            case Qr.RANK_MODIFIED:
                return Oa(function(e, i) {
                    return `RANK_MODIFIED(${e}, '${i}')`
                }(n, e.order), i);
            case Qr.RANK_DENSE:
                return Oa(function(e, i) {
                    return `RANK_DENSE(${e}, '${i}')`
                }(n, e.order), i);
            case Qr.RANK_UNIQUE:
                return Oa(function(e, i) {
                    return `RANK_UNIQUE(${e}, '${i}')`
                }(n, e.order), i);
            default:
                return Oa(Pa(n, e.order), i)
            }
        case Ur.MovingCalculation:
            switch (e.aggregator) {
            case Vr.Sum:
                return Oa(Ba(n, e), i);
            case Vr.Avg:
                return Oa(function(e, i) {
                    return `WINDOW_AVG(${e},  ${i.winStart}, ${i.winEnd}, ${i.fillWindow ? 1 : 0})`
                }(n, e), i);
            case Vr.Max:
                return Oa(function(e, i) {
                    return `WINDOW_MAX(${e}, ${i.winStart}, ${i.winEnd}, ${i.fillWindow ? 1 : 0})`
                }(n, e), i);
            case Vr.Min:
                return Oa(function(e, i) {
                    return `WINDOW_MIN(${e},  ${i.winStart}, ${i.winEnd}, ${i.fillWindow ? 1 : 0})`
                }(n, e), i);
            default:
                return Oa(Ba(n, e), i)
            }
        }
    } catch (l) {}
    var t, r;
    return n
}
function wa(e, i, n) {
    return i in e ? Object.defineProperty(e, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = n,
    e
}
wr.Row,
wr.Column,
wr.Table,
wr.Custom,
wr.Legend,
wr.Axis,
Gr.Down,
Gr.AcrossThenDown,
Gr.DownThenAcross,
Gr.Across,
Yr.Previous,
Yr.Next,
Yr.First,
Yr.Last,
jr.DESC,
jr.ASC,
Vr.Sum,
Vr.Avg,
Vr.Min,
Vr.Max,
Qr.RANK,
Qr.RANK_MODIFIED,
Qr.RANK_DENSE,
Qr.RANK_UNIQUE;
let xa = class {
    expr() {
        const {dimMetItem: e, pill: i} = this;
        if (T.isTime(e.dataTypeName) && !a(i.aggrConf) && i.roleType === s.DIM) {
            const {timeGranularityNum: n, timeGranularityType: t} = i.aggrConf;
            let r = ka(i, e);
            if (!n)
                return Ga(r);
            const l = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            switch (t) {
            case ie.Minute:
                r = `tc_minute(${r},${n})`;
                break;
            case ie.Hour:
                r = `tc_hour(${r},${n})`;
                break;
            case ie.TWeek:
                r = `tc_toutiao_week(${r})`;
                break;
            case ie.Week:
                r = `tc_toMonday(${r})`;
                break;
            case ie.Day:
                r = `tc_to_date(${r})`;
                break;
            case ie.CustomWeek:
                r = `tc_customize_week(${r},'${l[n - 1]}')`;
                break;
            case ie.Biweek:
                r = `tc_year_biweekly(${r},'${l[n - 1]}')`;
                break;
            case ie.Month:
                r = `tc_month(${r})`;
                break;
            case ie.Bimonth:
                r = `tc_year_bimonthly(${r})`;
                break;
            case ie.DayOfWeek:
                r = `tc_toDayOfWeek(${r})`;
                break;
            case ie.Year:
                r = `tc_year(${r},${n})`;
                break;
            case ie.Quarter:
                r = `tc_year_quarter(${r})`;
                break;
            case ie.Second:
                r = `tc_year_month_day_hour_minute_second(${r},${n})`;
                break;
            case ie.PerQuarter:
                r = `tc_quarter(${r})`;
                break;
            case ie.PerBimonth:
                r = `tc_bimonthly_only(${r})`;
                break;
            case ie.PerMonth:
                r = `tc_month_only(${r})`;
                break;
            case ie.PerBiweek:
                r = `tc_biweekly_only(${r},'${l[n - 1]}')`;
                break;
            case ie.PerWeek:
                r = `tc_customize_week_only(${r},'${l[n - 1]}')`;
                break;
            case ie.PerDay:
                r = `tc_day_only(${r})`;
                break;
            case ie.PerHour:
                r = `tc_hour_only(${r},${n})`;
                break;
            case ie.PerMinute:
                r = `tc_minute_only(${r},${n})`;
                break;
            case ie.PerSecond:
                r = `tc_second_only(${r},${n})`
            }
            return Ga(r)
        }
        return i.roleType === s.MEA ? function(e, i) {
            var n;
            if (G(e))
                return e.expr;
            const t = null === (n = e.aggrConf) || void 0 === n ? void 0 : n.exprAggr;
            var r;
            const l = i.isMapKey ? `${i.parentExpr}{'${null !== (r = i.fullExpr) && void 0 !== r ? r : i.expr}'}` : i.fullExpr;
            if (t)
                return `${t}${l})`;
            return l
        }(i, e) : Ga(ka(i, e))
    }
    constructor(e, i) {
        wa(this, "pill", void 0),
        wa(this, "dimMetItem", void 0),
        this.pill = e,
        this.dimMetItem = i
    }
}
;
function Ga(e) {
    return `(${e})`
}
function ka(e, i) {
    var n, t;
    return i.isMapKey ? `${null !== (n = i.parentFullExpr) && void 0 !== n ? n : i.parentExpr}{'${null !== (t = i.fullExpr) && void 0 !== t ? t : i.expr}'}` : i.fullExpr
}
function Ua(e) {
    switch (e.display.type) {
    case d.BAR:
    case d.BAR_PARALLEL:
    case d.BAR_PERCENT:
    case d.BILATERAL:
        return !0;
    case d.COMBINATION:
        if ("column" === e.display.conf.combination.layout)
            return !0
    }
    return !1
}
function Fa(e, i, n) {
    var t;
    const r = (null === (t = e.nextCalculation) || void 0 === t ? void 0 : t.enabled) ? e.nextCalculation.method : void 0
      , l = `${Sl(n, i, !0)}${u.i18n`的`}${ba[e.method.type]}${r ? `_${ba[r.type]}` : ""}`;
    var o;
    return {
        name: l,
        compactName: [ba[null !== (o = null == r ? void 0 : r.type) && void 0 !== o ? o : e.method.type], l]
    }
}
function $a(e) {
    var i;
    const n = (null === (i = e.nextCalculation) || void 0 === i ? void 0 : i.enabled) ? e.nextCalculation.method : void 0;
    return `${ba[e.method.type]}${n ? `_${ba[n.type]}` : ""}`
}
function Wa(e) {
    return [...Si(e, {
        excludeTooltips: !1
    }), ...Si(e, {
        location: b.WHERE
    }).filter((e => j(e.sourceType)))]
}
function Ya(e, i, n) {
    var t, r, l;
    if (Array.isArray(i) && (i = i.find((i => i.id === e.measureId))),
    !i)
        return null;
    const o = De(i, n.fieldMap, n.mapKeys)
      , a = function(e, i) {
        let n = i;
        const {addressingDims: t, method: r, nextCalculation: l} = e;
        return n = qa(r, t, n),
        (null == l ? void 0 : l.enabled) && l.method && (n = qa(l.method, l.addressingDims, `(${n})`)),
        n
    }(e, new xa(i,o).expr());
    let d = Ha(null === (t = e.method) || void 0 === t ? void 0 : t.type, null == i || null === (r = i.format) || void 0 === r ? void 0 : r.numFormat, null == o ? void 0 : o.dataFormat);
    (null === (l = e.nextCalculation) || void 0 === l ? void 0 : l.enabled) && e.nextCalculation.method && (d = Ha(e.nextCalculation.method.type, d, null == o ? void 0 : o.dataFormat));
    const s = ta(n.dataSets, {
        dimMetId: null == o ? void 0 : o.id,
        format: {
            numFormat: d
        },
        index: 1,
        ...Fa(e, o, i),
        sourceType: E.CALCULATION,
        originId: e.measureId,
        id: e.id,
        expr: a,
        location: i.location
    });
    return s.location = i.location,
    s
}
function Ha(e, i, n) {
    let t;
    switch (e) {
    case Ur.Difference:
    case Ur.RunningTotal:
    case Ur.MovingCalculation:
        t = i && !i.auto ? i : n && !n.auto ? n : {
            type: p.DIGIT,
            precision: 2,
            precisionType: f.DECIMAL_DIGITS
        };
        break;
    case Ur.PercentDifferenceFrom:
    case Ur.PercentOfTotal:
    case Ur.Percentile:
        t = {
            type: p.PERCENT,
            precision: 2,
            precisionType: f.DECIMAL_DIGITS
        };
        break;
    case Ur.Rank:
        t = {
            type: p.DIGIT,
            precision: 0,
            precisionType: f.DECIMAL_DIGITS
        }
    }
    return t
}
function Va(e, i, n) {
    const t = [];
    return function(e) {
        switch (e) {
        case d.RAW_TABLE:
        case d.TABLE:
        case d.PIVOT_TABLE:
            return !1
        }
        return !0
    }(n) ? (1 === e && 0 === i && t.push(wr.Legend),
    1 === e && i > 0 && (t.push(wr.Axis),
    t.push(wr.Legend)),
    t) : (e > 0 && t.push(wr.Column),
    i > 0 && t.push(wr.Row),
    n === d.PIVOT_TABLE && (e >= 1 || i >= 1) && (t.push(wr.Table),
    t.push(wr.Custom)),
    t)
}
function Ka(e, i, n) {
    return R(e, (e => {
        var t;
        switch (e.partitionType) {
        case wr.Row:
            e.rd = i,
            e.cd = 0;
            break;
        case wr.Column:
            e.rd = 0,
            e.cd = n;
            break;
        case wr.Table:
            e.rd = 0,
            e.cd = 0;
            break;
        case wr.Custom:
            e.rd >= i && (e.rd = i),
            e.cd >= n && (e.cd = n);
            break;
        case wr.Legend:
            e.rd = 0,
            e.cd = n;
            break;
        case wr.Axis:
            e.rd = i,
            e.cd = 0
        }
        "nextCalculation"in e && (null === (t = e.nextCalculation) || void 0 === t ? void 0 : t.enabled) && (e.nextCalculation = Ka(e.nextCalculation, i, n))
    }
    ))
}
function ja(e, i, n) {
    const t = function(e, i, n) {
        switch (n.partitionType) {
        case wr.Column:
            return [Gr.Down];
        case wr.Row:
            return [Gr.Across];
        case wr.Axis:
            return Ua(e) ? [Gr.Across] : [Gr.Down];
        case wr.Legend:
            return Ua(e) ? [Gr.Down] : [Gr.Across];
        case wr.Custom:
            {
                const t = id(e, i)
                  , r = nd(e, i)
                  , {cd: l, rd: o} = n
                  , a = [];
                return l === t.length && a.push(Gr.Down),
                o === r.length && a.push(Gr.Across),
                o < r.length && l < t.length && a.push(Gr.DownThenAcross, Gr.AcrossThenDown),
                a
            }
        case wr.Table:
            return [Gr.DownThenAcross, Gr.AcrossThenDown];
        default:
            return []
        }
    }(e, i, n);
    return R(n, (r => {
        var l;
        0 === t.length ? r.addressing = void 0 : -1 === t.indexOf(n.addressing) && (r.addressing = t[0]),
        "nextCalculation"in r && (null === (l = r.nextCalculation) || void 0 === l ? void 0 : l.enabled) && (r.nextCalculation = ja(e, i, r.nextCalculation))
    }
    ))
}
function za(e, i, n, t, r) {
    const l = e.display.type
      , o = Va(t.length, r.length, l);
    const a = [function e(i) {
        return R(i, (i => {
            var n;
            0 === o.length ? i.partitionType = void 0 : -1 === o.indexOf(i.partitionType) && (i.partitionType = o[0]),
            "nextCalculation"in i && (null === (n = i.nextCalculation) || void 0 === n ? void 0 : n.enabled) && (i.nextCalculation = e(i.nextCalculation))
        }
        ))
    }
    , e => Ka(e, t.length, r.length), n => ja(e, i, n), e => {
        const {partitionDims: i, addressingDims: n} = td(e, t, r);
        return R(e, (e => {
            var l;
            if (e.partitionDims = i.map((e => e.expr())),
            e.addressingDims = n.map((e => e.expr())),
            null === (l = e.nextCalculation) || void 0 === l ? void 0 : l.enabled) {
                const {partitionDims: i, addressingDims: n} = td(e.nextCalculation, t, r);
                e.nextCalculation.partitionDims = i.map((e => e.expr())),
                e.nextCalculation.addressingDims = n.map((e => e.expr()))
            }
        }
        ))
    }
    , i => {
        var n, t;
        const {selectedPillIdList: r=[]} = null !== (t = null === (n = e.dynamicPillsMap) || void 0 === n ? void 0 : n[i.measureId]) && void 0 !== t ? t : {};
        return R(i, (e => {
            e.dynamicSelectedPillIdList = r
        }
        ))
    }
    ].reduce(( (e, i) => i(e)), n);
    return a
}
function Qa(e, i) {
    var n;
    const {tableCalculation: t} = e;
    if (!t || 0 === (null === (n = t.rules) || void 0 === n ? void 0 : n.length))
        return e;
    const r = I.from(i)
      , l = nd(e, r)
      , o = id(e, r)
      , a = []
      , d = R(e, (i => {
        var n, d;
        const s = Yt(null !== (d = t.rules) && void 0 !== d ? d : [], (e => e.id));
        var u;
        const c = (p = null !== (u = t.rules) && void 0 !== u ? u : [],
        f = e => e.id,
        p.reduce(( (e, i, n) => e.set(f(i), n)), new Map));
        var p, f;
        const m = Wa(i)
          , v = Yt(m, (e => e.id.toString()))
          , y = Yt(function(e, i) {
            function n(e, i) {
                const n = Fi(e, i.fieldMap, i.mapKeys)
                  , t = [E.PERIODCMP, E.COMPARE];
                return (!j(e.sourceType) || t.includes(e.sourceType)) && !(e.sourceType === E.COMPARE && e.id.includes("confidence")) && (T.isNumber(n) || C(e))
            }
            return e.filter((e => n(e, i)))
        }(m, r), (e => e.dimMetId.toString()));
        kt(e) && m.filter((e => e.sourceType === E.CALCULATION)).forEach((e => {
            if (!v.has(`${e.originId}`)) {
                if (y.has(e.dimMetId.toString())) {
                    const n = y.get(e.dimMetId.toString())
                      , t = s.get(e.id);
                    t.measureId = n.id;
                    const a = za(i, r, t, l, o);
                    i.tableCalculation.rules[c.get(t.id)] = a;
                    const d = Ya(a, n, r)
                      , u = Xa(t, a);
                    return void Ja(d, e, u)
                }
                return m.some((i => i.id === e.id)) && a.push(e.id),
                void (i.tableCalculation.rules[c.get(e.id)] = null)
            }
            const n = s.get(e.id)
              , t = za(i, r, n, l, o);
            i.tableCalculation.rules[c.get(n.id)] = t;
            const d = Ya(t, v.get(e.originId.toString()), r)
              , u = Xa(n, t);
            Ja(d, e, u)
        }
        )),
        i.tableCalculation = {
            ...i.tableCalculation,
            rules: null === (n = i.tableCalculation) || void 0 === n ? void 0 : n.rules.filter((e => !!e && v.has(e.measureId)))
        }
    }
    ));
    return qi({
        schema: d,
        filter: e => !a.includes(e.id)
    })
}
function Xa(e, i) {
    var n, t, r, l, o, a, d, s;
    const u = (null === (n = e.method) || void 0 === n ? void 0 : n.type) === (null === (t = i.method) || void 0 === t ? void 0 : t.type) && e.measureId === i.measureId && !(null === (r = e.nextCalculation) || void 0 === r ? void 0 : r.enabled) == !(null === (l = i.nextCalculation) || void 0 === l ? void 0 : l.enabled) && (null === (o = e.nextCalculation) || void 0 === o || null === (a = o.method) || void 0 === a ? void 0 : a.type) === (null === (d = i.nextCalculation) || void 0 === d || null === (s = d.method) || void 0 === s ? void 0 : s.type);
    return {
        extendNumFormat: u,
        extendConditionalFormat: u,
        extendFieldFormat: u
    }
}
function Ja(e, i, n) {
    var t, r, l, o, a;
    (i.dimMetId = e.dimMetId,
    i.name = e.name,
    i.compactName = e.compactName,
    i.expr = e.expr,
    i.originId = e.originId,
    i.format || (i.format = {}),
    n.extendFieldFormat) || (i.format.displayName = null === (t = e.format) || void 0 === t ? void 0 : t.displayName,
    i.format.fieldDescr = null === (r = e.format) || void 0 === r ? void 0 : r.fieldDescr,
    i.format.showFieldDescr = null === (l = e.format) || void 0 === l ? void 0 : l.showFieldDescr);
    n.extendNumFormat || (i.format.numFormat = null === (o = e.format) || void 0 === o ? void 0 : o.numFormat);
    n.extendConditionalFormat || (i.format.conditionalFormat = null === (a = e.format) || void 0 === a ? void 0 : a.conditionalFormat)
}
function Za(e, i) {
    const n = [];
    return e.forEach((e => {
        const t = De(e, i.fieldMap, i.mapKeys);
        !Pe(e) && !bl(e) && !j(e.sourceType) && n.push(new xa(e,t))
    }
    )),
    n
}
function ed(e, i, n) {
    const t = e.display.conf.transpose;
    function r(e) {
        return n ? Za(e, i) : []
    }
    function l(e) {
        return n ? [] : Za(e, i)
    }
    const o = _i(e).filter((e => ![b.COLUMN, b.ROW].includes(e.location)))
      , a = Si(e)
      , s = Oi(e, b.ROW)
      , u = Oi(e, b.COLUMN);
    switch (e.display.type) {
    case d.COMBINATION:
        return Za(n ? o.slice(0, 1) : o.slice(1), i);
    case d.RAW_TABLE:
        return t ? r(a) : l(a);
    case d.TABLE:
        return t ? l(o) : r(o);
    case d.PIVOT_TABLE:
        return Za(n ? s : u, i)
    }
    return Za(n ? o.slice(0, 1) : o.slice(1), i)
}
function id(e, i) {
    return ed(e, i, !1)
}
function nd(e, i) {
    return ed(e, i, !0)
}
function td(e, i, n) {
    const {cd: t, rd: r} = e;
    let l = []
      , o = [];
    switch (e.addressing) {
    case Gr.AcrossThenDown:
    case Gr.Across:
        l = n.slice(0, t).concat(i.slice(0, r)),
        o = i.slice(r).concat(n.slice(t));
        break;
    case Gr.Down:
    case Gr.DownThenAcross:
        l = i.slice(0, r).concat(n.slice(0, t)),
        o = n.slice(t).concat(i.slice(r))
    }
    return {
        partitionDims: l,
        addressingDims: o
    }
}
const rd = function(e) {
    return {
        ...qi({
            schema: e,
            filter: e => e.sourceType !== E.CALCULATION
        }),
        tableCalculation: void 0
    }
}
  , ld = (e, i) => Qa(e, i)
  , od = [d.PIE, d.ANNULAR, d.ROSE]
  , ad = (e, i) => !!od.includes(e) || (0 !== i || !ud(e));
var dd, sd;
(sd = dd || (dd = {})).COLUMN = "column",
sd.COLUMN_PERCENT = "column_percent",
sd.COLUMN_PARALLEL = "column_parallel",
sd.BAR = "bar",
sd.BAR_PERCENT = "bar_percent",
sd.BAR_PARALLEL = "bar_parallel",
sd.LINE = "line",
sd.AREA = "area",
sd.AREA_PERCENT = "area_percent",
sd.DOUBLE_AXIS = "double_axis",
sd.COMBINATION = "combination",
sd.RADAR = "radar",
sd.PIE = "pie",
sd.ANNULAR = "annular",
sd.ROSE = "rose";
const ud = e => Object.values(dd).some((i => String(i) === String(e)))
  , cd = (e, i, n, t) => {
    if (e === Jr.BY_DIMENSIONS) {
        if (!(e => ![d.RAW_TABLE].includes(e.display.type) && Ot(e))(i))
            return {
                hasError: !0,
                error: u.i18n`图表类型不支持每个维度下的前N条`
            };
        const {disabled: e, disabledTip: a} = ( (e, i, n) => {
            if ((null != n ? n : []).some((e => {
                var i, n, t;
                return (null === (i = e.liveDataSetConf) || void 0 === i ? void 0 : i.driverName) === o.impala || (null === (n = e.liveDataSetConf) || void 0 === n ? void 0 : n.driverName) === o.postgresql || (null === (t = e.liveDataSetConf) || void 0 === t ? void 0 : t.driverName) === o.hologres
            }
            )))
                return {
                    disabled: !0,
                    disabledTip: u.i18n`直连模式不支持此计算类型`
                };
            const t = Tt({
                dataSets: n,
                featureKey: ht.TOPNBYDIMENSIONS
            });
            return !1 === t.enabled ? {
                disabled: !0,
                disabledTip: t.tip
            } : e.some((e => e.dataSetType === l.MYSQL && e.connectionMode === r.Live || e.dataSetType === l.HIVE_PRESTO || e.engineType === qe.Presto)) ? {
                disabled: !0,
                disabledTip: u.i18n`直连mysql和presto不可使用此选项`
            } : i.length >= 2 ? {
                disabled: !1
            } : {
                disabled: !0,
                disabledTip: u.i18n`至少配置2个维度后，可使用此选项`
            }
        }
        )(n, t);
        return {
            hasError: e,
            error: a
        }
    }
    if (e === Jr.TOP_DIMENSIONS) {
        if (!(e => ![d.RAW_TABLE].includes(e.display.type) && Ot(e))(i))
            return {
                hasError: !0,
                error: u.i18n`图表类型不支持前N条维度项`
            };
        const {disabled: e, disabledTip: n} = ( (e, i) => {
            var n;
            return e.length >= 1 ? i && (null === (n = _i(i)) || void 0 === n ? void 0 : n.some((e => e.sourceType === E.SEGMENT))) ? {
                disabled: !0,
                disabledTip: u.i18n`维度中含有群体字段，暂不支持`
            } : {
                disabled: !1
            } : {
                disabled: !0,
                disabledTip: u.i18n`至少配置1个维度后，可使用此选项`
            }
        }
        )(t, i);
        return {
            hasError: e,
            error: n
        }
    }
    return {
        hasError: !1
    }
}
  , pd = (e, i) => e.topN && Qo(e) ? R(e, (n => {
    if (n.topN) {
        const t = n.topN
          , r = i.map((e => ({
            dataSetType: e.type,
            connectionMode: e.connectionMode,
            engineType: e.engineType
        })))
          , l = _i(e).filter((i => Be(e.display.type) || ![b.COLUMN, b.ROW].includes(i.location)))
          , o = l.map((e => e.id))
          , d = Si(e);
        if (cd(t.type, e, r, o).hasError || a(t.orderByList))
            return void (n.topN = void 0);
        t.orderByList = t.orderByList.map((i => {
            var n;
            const r = ( (e, i, n, t) => n === Jr.BY_DIMENSIONS ? e.filter((e => t !== e.id)) : n === Jr.TOP_DIMENSIONS && ud(i) && e.length >= 2 ? e.concat([{
                id: wn
            }]) : e)(l, e.display.type, t.type, i.measure)
              , o = ( (e, i, n, t, r) => {
                const l = he([...e, ...i], "id");
                return n === Jr.TOP_DIMENSIONS ? t.includes(wn) ? l.filter(( (e, i) => ad(r, i))) : he(e.filter((e => t.includes(e.id))).concat(i), "id") : n === Jr.BY_RESULT && Be(r) ? e : l
            }
            )(l, d, t.type, i.dimensions || [], e.display.type);
            if (!([Jr.BY_DIMENSIONS, Jr.TOP_DIMENSIONS].includes(t.type) && (null === (n = i.dimensions) || void 0 === n ? void 0 : n.every((e => !(null == r ? void 0 : r.find((i => i.id === e)))))) || !o.find((e => e.id === i.measure)))) {
                var a;
                if ([Jr.BY_DIMENSIONS, Jr.TOP_DIMENSIONS].includes(t.type))
                    i.dimensions = null === (a = i.dimensions) || void 0 === a ? void 0 : a.filter((e => r.find((i => i.id === e))));
                return i
            }
        }
        )).filter(Boolean),
        a(t.orderByList) && (n.topN = void 0)
    }
}
)) : e;
function fd(e, i, n=!1) {
    const {fieldMap: t, mapKeys: r} = Array.isArray(i) ? I.from(i) : i
      , l = g(e, t, r);
    return !G(e) && !F(e) && !bl(e) && (T.isNumber(l) || T.isTemplate(l) || !!n && C(e))
}
const md = e => Ws(e) ? e.sort.orderByList.map((e => e.depend ? [e.id, e.depend] : [e.id])).flat().filter(Boolean) : []
  , vd = e => {
    if (Qo(e)) {
        var i;
        const {topN: r} = e;
        var n, t;
        let l = null !== (t = null == r || null === (i = r.orderByList) || void 0 === i ? void 0 : i.reduce(( (e, i) => [...e, ...null !== (n = i.dimensions) && void 0 !== n ? n : [], i.measure]), [])) && void 0 !== t ? t : [];
        return l = Y(l.filter((e => !!e))),
        l
    }
    return []
}
  , yd = e => {
    if (Xo(e)) {
        const {combined: i} = e;
        return "type"in i ? i.combinedList.map((e => e.idList)).flat() : i.methodsList.map((e => e.id)).concat(i.colDimensions).flat()
    }
    return []
}
  , Id = e => {
    if (Ko(e)) {
        var i;
        return null === (i = e.percent) || void 0 === i ? void 0 : i.calcConfList.reduce(( (e, i) => e.concat(i.idList)), [])
    }
    return []
}
  , hd = (e, i) => {
    if (zo(e)) {
        const n = Y(Si(e).filter((e => fd(e, i))).map((e => e.id)));
        return e.whereCompare.measureList.includes(_n) ? n : e.whereCompare.measureList.filter((e => n.find((i => i === e))))
    }
    return []
}
  , gd = e => Jo(e) ? e.referenceLine.map((e => e.calcConfig.measureId)) : []
  , Ed = e => {
    var i;
    return Zo(e) ? null === (i = e.tableCalculation) || void 0 === i ? void 0 : i.rules.map((e => e.measureId)) : []
}
  , Td = {
    get[nl.STORE]() {
        return u.i18n`原始值`
    },
    get[nl.STORE_RATIO]() {
        return u.i18n`比值`
    },
    get[nl.DIFF]() {
        return u.i18n`差异值`
    },
    get[nl.RATIO]() {
        return u.i18n`差异百分比`
    },
    get[nl.REVERSED_STORE_RATIO]() {
        return u.i18n`反比`
    }
};
function Cd(e, i, n) {
    switch (e) {
    case nl.STORE:
    case nl.DIFF:
        return i && !i.auto ? i : n && !n.auto ? n : {
            type: p.DIGIT,
            precision: 2,
            precisionType: f.DECIMAL_DIGITS
        };
    case nl.STORE_RATIO:
        return {
            type: p.DIGIT,
            precision: 2,
            precisionType: f.DECIMAL_DIGITS
        };
    case nl.RATIO:
        return {
            type: p.PERCENT,
            precision: 2,
            precisionType: f.DECIMAL_DIGITS
        }
    }
}
function Ad({index: e, measureId: i, type: n, baseIndex: t}) {
    return `table_${e === t ? 0 : e < t ? e + 1 : e}_${i}_${n}`
}
function Md({dataSets: e, measurePillList: i, whereCmpConf: n, startIndex: t, customTitleMap: r={}, chartType: l}) {
    const o = [];
    let a = t;
    return hd({
        whereCompare: n,
        measures: i,
        display: {
            type: l
        }
    }, L(e)).forEach((t => {
        const l = (n => {
            const t = i.find((e => e.id === n));
            return (null == t ? void 0 : t.dimMetId) ? ue(e, t) : null
        }
        )(t) || {}
          , d = i.find((e => e.id === t));
        d ? (n.retType.includes(nl.STORE) && n.conditionList.forEach(( (s, c) => {
            const p = Tl({
                measureId: t,
                type: `condition_${c}`,
                index: c,
                baseIndex: n.baseIndex
            })
              , f = i.find((e => e.id === t && e.beforeUpdateId))
              , m = null == f ? void 0 : f.beforeUpdateId
              , v = m ? Tl({
                measureId: m,
                type: `condition_${c}`,
                index: c,
                baseIndex: n.baseIndex
            }) : void 0
              , y = u.i18n`对比${String(c + 1)}`
              , I = u.i18n`${y}: ${Sl({
                ...d,
                pillType: U.ORIGIN
            }, l)}`
              , h = r[`${t}_${c + 1}`]
              , g = {
                displayName: (null == h ? void 0 : h.customTitle) || I
            };
            var T;
            h ? g.numFormat = h.numFormat : g.numFormat = Cd(nl.STORE, null === (T = d.format) || void 0 === T ? void 0 : T.numFormat, l.dataFormat);
            const C = ta(e, {
                dimMetId: null == l ? void 0 : l.id,
                id: p,
                format: g,
                name: I,
                compactName: [y, I],
                expr: Ad({
                    index: c,
                    baseIndex: n.baseIndex,
                    measureId: t,
                    type: nl.STORE
                }),
                originId: t,
                sourceType: E.COMPARE,
                index: a++,
                location: d.location
            });
            C.beforeUpdateId = v,
            C.updateDerived = null == f ? void 0 : f.updateDerived,
            o.push(C)
        }
        )),
        n.conditionList.forEach(( (s, c) => {
            if (c !== n.baseIndex && (n.retType.filter((e => e !== nl.STORE)).forEach((s => {
                var u;
                const p = Tl({
                    measureId: t,
                    type: s,
                    index: c,
                    baseIndex: n.baseIndex
                })
                  , f = i.find((e => e.id === t && e.beforeUpdateId))
                  , m = null == f ? void 0 : f.beforeUpdateId
                  , v = m ? Tl({
                    measureId: m,
                    type: s,
                    index: c,
                    baseIndex: n.baseIndex
                }) : void 0;
                let y = `${c + 1}-${n.baseIndex + 1}`;
                s === nl.REVERSED_STORE_RATIO && (y = `${n.baseIndex + 1}-${c + 1}`);
                const I = `${y}${h = s,
                Td[h]}`;
                var h;
                const g = `${I}: ${Sl({
                    ...d,
                    pillType: U.ORIGIN
                }, l)}`
                  , T = r[`${t}_${s}`]
                  , C = ta(e, {
                    id: p,
                    originId: t,
                    dimMetId: null == l ? void 0 : l.id,
                    format: {
                        displayName: (null == T ? void 0 : T.customTitle) || g,
                        numFormat: T && s !== nl.RATIO ? T.numFormat : Cd(s, null === (u = d.format) || void 0 === u ? void 0 : u.numFormat, l.dataFormat)
                    },
                    name: g,
                    compactName: [I, g],
                    expr: Ad({
                        index: c,
                        baseIndex: n.baseIndex,
                        measureId: t,
                        type: s
                    }),
                    sourceType: E.COMPARE,
                    index: a++,
                    location: d.location
                });
                C.beforeUpdateId = v,
                C.updateDerived = null == f ? void 0 : f.updateDerived,
                o.push(C)
            }
            )),
            n.confidenceField)) {
                const i = u.i18n`置信区间`
                  , r = `${i}: ${Sl({
                    ...d,
                    pillType: U.ORIGIN
                }, l)}`
                  , s = ta(e, {
                    id: `${t}_confidence`,
                    originId: t,
                    dimMetId: null == l ? void 0 : l.id,
                    format: {
                        displayName: r,
                        contentType: H.CONFIDENCE_INTERVAL
                    },
                    name: r,
                    compactName: [i, r],
                    expr: Ad({
                        index: c,
                        baseIndex: n.baseIndex,
                        measureId: t,
                        type: "confidenceField"
                    }),
                    sourceType: E.COMPARE,
                    index: a++,
                    location: d.location
                });
                o.push({
                    ...s,
                    notJoinQuery: !1,
                    invisible: !0
                })
            }
        }
        ))) : console.error(`Can not find pill ${t}`)
    }
    )),
    o
}
function Nd(e, i, n) {
    return Md({
        dataSets: n,
        measurePillList: Si(i).filter((e => fd(e, n))),
        whereCmpConf: e,
        startIndex: Si(i).filter((e => !G(e))).length,
        chartType: i.display.type,
        schema: i
    })
}
function Ld(e, i, n) {
    return R(e, (t => {
        if (t.whereCompare && zo(t)) {
            const r = hd(e, i);
            Si(t).forEach((e => {
                r.includes(e.id) && n(e)
            }
            ))
        }
    }
    ))
}
function Rd(e, i) {
    const t = [md, vd, yd, Id, gd, Ed].map((i => i(e))).flat();
    return Ld(e, i, (e => {
        n(e.notDisplay) && (t.includes(e.id) ? e.notDisplay = !1 : e.notDisplay = !0)
    }
    ))
}
const bd = function(e, i) {
    return zo(e) ? Ce(e, (e => {
        if (!e.whereCompare)
            return e;
        const {measureList: n} = e.whereCompare;
        let t = [];
        const r = ( (e, i, n) => he(Si(e).filter((e => fd(e, i, n))), "id"))(e, i);
        r.length ? (e.whereCompare.measureList = n.includes(_n) ? [_n] : n.filter((e => r.find((i => i.id === e)))),
        t = Nd(e.whereCompare, e, i)) : e.whereCompare = void 0;
        const l = Rd(El(e, {
            derivedList: t,
            sourceType: E.COMPARE
        }), i);
        Object.assign(e, l)
    }
    )) : e
};
const Dd = {
    rewriteParameters: function(e, i, n) {
        return {
            __directive: "redirect",
            data: {
                schema: e,
                dataSets: i,
                options: n
            }
        }
    },
    isRewriteParameters: function(e) {
        return "redirect" === (null == e ? void 0 : e.__directive)
    }
}
  , Sd = function(e, i, n) {
    var t, r;
    const l = I.from(i).getDataSetByDimMetId(n.dimMetId);
    if (!l)
        return e;
    const o = ue(l, {
        dimMetId: n.dimMetId,
        mapKey: n.mapKey
    });
    var a;
    const d = ko(e, i, o, n.location, n.fieldTypes, null !== (a = n.index) && void 0 !== a ? a : Oi(e, n.location).length);
    if (!d && !Do(null == e || null === (t = e.display) || void 0 === t ? void 0 : t.type))
        return e;
    const s = Object.assign({}, n);
    let u = e;
    if (d && (u = Uo(e, i)),
    Do(null == e || null === (r = e.display) || void 0 === r ? void 0 : r.type)) {
        const e = s.modifyPillToAdd;
        s.modifyPillToAdd = (i, n) => (e && (i = null == e ? void 0 : e(i, n)),
        R(i, (e => {
            Dl(e, n) && (Dl(e, n).drillInfo = {
                ...e.drillInfo
            })
        }
        )))
    }
    return Dd.rewriteParameters(u, i, s)
};
function Od(e, i) {
    return R(e, (e => {
        const {uniqueId: n, addPosition: t="right"} = i
          , {index: r, pill: l} = Hi(e, n);
        if (!l)
            return;
        const o = Oi(e, l.location)[r + ("right" === t ? 1 : -1)].uniqueId;
        e.measuresGroups || (e.measuresGroups = []);
        const a = e.measuresGroups.find((e => e.includes(n)));
        if (a) {
            const e = a.findIndex((e => e === n)) + ("right" === t ? 1 : 0);
            a.splice(e, 0, o)
        } else
            e.measuresGroups.push("right" === t ? [n, o] : [o, n])
    }
    ))
}
const _d = (e, i) => {
    if (!e.measuresGroups)
        return e;
    const {measuresGroups: n} = e
      , t = n.findIndex((e => e.includes(i)));
    if (-1 === t)
        return e;
    const r = w(n)
      , l = r[t].findIndex((e => e === i));
    return r[t].splice(l, 1),
    r[t].length < 2 && r.splice(t, 1),
    {
        ...e,
        measuresGroups: r
    }
}
  , Pd = (e, i, n) => {
    const {uniqueId: t, keepOriginPill: r} = n;
    return r ? e : _d(e, t)
}
  , Bd = (e, i, n) => {
    const {uniqueId: t} = n;
    return _d(e, t)
}
;
function qd(e) {
    return e
}
function wd(...e) {
    return (i, n, t) => e.reduce(( ({schema: e, dataSets: i, options: n}, t) => {
        const r = t(e, i, n);
        return Dd.isRewriteParameters(r) ? r.data : {
            schema: r,
            dataSets: i,
            options: n
        }
    }
    ), {
        schema: i,
        dataSets: n,
        options: t
    }).schema
}
function xd({location: e, roleType: i, name: n, undraggable: t}) {
    const r = K();
    return {
        originId: String(r),
        id: `placeholder_${r}`,
        uniqueId: r,
        dimMetId: r,
        name: n,
        location: e,
        format: {},
        aggrConf: {},
        pillType: U.PLACEHOLDER,
        sourceType: E.RAW,
        roleType: i,
        highlight: !1,
        unremovable: !0,
        notJoinQuery: !0,
        error: void 0,
        undraggable: t
    }
}
const Gd = function(e) {
    if (e.display.type !== d.HISTOGRAM)
        return e;
    const {dimensions: i, measures: n} = e
      , t = i.filter(Ki)
      , r = n.filter(Ki)
      , l = [].concat(t, n).filter(Pe).length > 0;
    if (!l && 1 === t.length && 0 === n.length) {
        const i = xd({
            location: b.MEASURE,
            roleType: s.MEA,
            name: u.i18n`记录数`,
            undraggable: !0
        });
        return {
            ...e,
            measures: [i]
        }
    }
    return l && (1 !== t.length || 0 !== r.length) ? {
        ...e,
        dimensions: e.dimensions.filter((e => !Pe(e))),
        measures: n.filter((e => !Pe(e)))
    } : e
}
  , kd = function(e, i=b.COLUMN) {
    if (e.display.type !== d.PIVOT_TABLE)
        return e;
    const {columns: n, rows: t, measures: r} = e
      , l = [].concat(n, t).filter(Pe).length > 0;
    if (!l && r.length >= 2) {
        const n = xd({
            location: i,
            roleType: s.DIM,
            name: u.i18n`指标名称 `
        });
        return {
            ...e,
            columns: [...e.columns, n]
        }
    }
    return l && r.length < 2 ? {
        ...e,
        columns: e.columns.filter((e => !Pe(e))),
        rows: t.filter((e => !Pe(e)))
    } : e
}
  , Ud = function(e) {
    return e.display.type !== d.PROGRESS ? e : Ce(e, (i => {
        if (0 === e.measures.length)
            return;
        var n;
        (Le.isNil(i.display.conf.displayConfMap) && (i.display.conf.displayConfMap = {}),
        Le.isNil(i.display.conf.columnNum) && (i.display.conf.columnNum = 2),
        Le.isNil(i.display.conf.selectedPill)) && (i.display.conf.selectedPill = null !== (n = i.measures[0].uniqueId) && void 0 !== n ? n : void 0);
        const {conf: t} = i.display
          , {displayConfMap: r} = i.display.conf
          , [l,o] = Fd(i, r);
        $d(o, r),
        Wd(l, t, r)
    }
    ))
}
  , Fd = (e, i) => {
    const {measures: n} = e
      , t = new Set
      , r = new Set(Object.keys(i));
    for (const l of n) {
        const {uniqueId: e} = l;
        i.hasOwnProperty(e) || t.add(e.toString()),
        r.delete(e.toString())
    }
    return [t, r]
}
  , $d = (e, i) => {
    e.forEach((e => {
        delete i[e]
    }
    ))
}
  , Wd = (e, i, n) => {
    e.forEach((e => {
        n[e] = {
            color: {
                ...i.color
            },
            measure: {
                ...i.measure
            },
            params: {
                ...i.params
            },
            sections: Le.cloneDeep(i.sections)
        }
    }
    ))
}
  , Yd = function(e) {
    return [d.TABLE, d.RAW_TABLE, d.PIVOT_TABLE].includes(e.display.type) && e.pagination && e.pagination.offset > 0 ? {
        ...e,
        pagination: {
            ...e.pagination,
            offset: 0
        }
    } : e
}
  , Hd = e => {
    var i;
    return [d.TABLE, d.RAW_TABLE, d.PIVOT_TABLE].includes(e.display.type) && !e.measures.some(G) && (null === (i = e.display.conf) || void 0 === i ? void 0 : i.compact) ? Ce(e, (e => {
        e.display.conf.compact = !1
    }
    )) : e
}
  , Vd = e => {
    const i = e.display.type;
    return [d.TABLE, d.RAW_TABLE, d.PIVOT_TABLE].includes(i) && n(e.display.conf.customFields) ? Ce(e, (e => {
        e.display.conf.customFields = {
            enable: !0
        }
    }
    )) : e
}
;
function Kd(e) {
    var i;
    return null == e || null === (i = e.columns) || void 0 === i ? void 0 : i[0]
}
const jd = e => {
    var i, n;
    const t = [d.TREND_TABLE];
    if (!(null == t ? void 0 : t.includes(null === (i = e.display) || void 0 === i ? void 0 : i.type)))
        return e;
    const r = Qd(e)
      , l = Kd(r);
    return (null === (n = r.whereList) || void 0 === n ? void 0 : n.find((e => {
        var i, n;
        return e.dimMetId === (null == l ? void 0 : l.dimMetId) && (null == e || null === (i = e.filter) || void 0 === i || null === (n = i.option) || void 0 === n ? void 0 : n.isDefaultPartitionField)
    }
    ))) ? zd(r, l.dimMetId) : r
}
  , zd = (e, i) => Ce(e, (n => {
    var t;
    n.whereList = null === (t = e.whereList) || void 0 === t ? void 0 : t.map((e => ({
        ...e,
        notJoinQuery: !(e.dimMetId !== i)
    })))
}
))
  , Qd = e => Ce(e, (i => {
    var n;
    i.whereList = null === (n = e.whereList) || void 0 === n ? void 0 : n.map((e => ({
        ...e,
        notJoinQuery: !1
    })))
}
));
var Xd, Jd, Zd, es, is, ns, ts, rs;
(Jd = Xd || (Xd = {})).SpecialCalc = "daily",
Jd.CommonCalc = "regular",
(es = Zd || (Zd = {})).AvgDaily = "avg",
es.Total = "sum",
es.Regular = "regular",
(ns = is || (is = {})).BuildIn = "buildIn",
ns.Custom = "custom",
Zd.AvgDaily,
u.i18n`日均`,
Zd.Total,
u.i18n`累计`,
Zd.Regular,
u.i18n`自动`;
class ls {
    static judgeChangeConfigInChart(e) {
        var i, n, t, r;
        return !!(null === (i = e.calculateMode) || void 0 === i || null === (n = i.calcConfig) || void 0 === n ? void 0 : n.buildInConfig.enableSwitchBtn) && (null === (t = e.calculateMode) || void 0 === t || null === (r = t.calcConfig) || void 0 === r ? void 0 : r.configMode) !== is.Custom
    }
    static changeSwitchBtnEnable(e, i) {
        var n, t;
        const r = Le.set(["calculateMode", "calcConfig", "buildInConfig", "enableSwitchBtn"], i, e)
          , l = null === (n = r.calculateMode) || void 0 === n ? void 0 : n.calcConfig.buildInConfig.enableSwitchList;
        return i && !(null == l ? void 0 : l.includes(null === (t = r.calculateMode) || void 0 === t ? void 0 : t.calcConfig.buildInConfig.calculate)) ? ls.changeCalculate(r, l[0]) : r
    }
    static changeEnableSwitchList(e, i) {
        var n;
        const t = Le.set(["calculateMode", "calcConfig", "buildInConfig", "enableSwitchList"], i, e);
        return (null == i ? void 0 : i.includes(null === (n = t.calculateMode) || void 0 === n ? void 0 : n.calcConfig.buildInConfig.calculate)) ? t : ls.changeCalculate(t, i[0])
    }
    static getCalculateValue(e) {
        var i, n, t;
        return null === (i = e.calculateMode) || void 0 === i || null === (n = i.calcConfig) || void 0 === n || null === (t = n.buildInConfig) || void 0 === t ? void 0 : t.calculate
    }
    static changeCurrentCalculateType(e, i) {
        return Le.set(["calculateMode", "calcConfig", "buildInConfig", "currentCalculateType"], i, e)
    }
    static changeConfigMode(e, i) {
        return Le.set(["calculateMode", "calcConfig", "configMode"], i, e)
    }
    static changeCalculate(e, i) {
        return Le.set(["calculateMode", "calcConfig", "buildInConfig", "calculate"], i, e)
    }
    static changeMeasureCalc(e, i, n) {
        var t;
        return (null === (t = e.calculateMode) || void 0 === t ? void 0 : t.calcConfig.customConfig) ? Le.set(["calculateMode", "calcConfig", "customConfig", n], i, e) : Le.set(["calculateMode", "calcConfig", "customConfig"], {
            [n]: i
        }, e)
    }
    static resetByDeletePill(e, i) {
        var n, t, r;
        return (null === (n = e.calculateMode) || void 0 === n || null === (t = n.calcConfig) || void 0 === t || null === (r = t.customConfig) || void 0 === r ? void 0 : r[i]) ? Le.set(["calculateMode", "calcConfig", "customConfig", i], void 0, e) : e
    }
    static generateCalculationConfig(e, i) {
        const n = {
            calcMethod: ls.getIsCommonCalc(e) ? Xd.CommonCalc : Xd.SpecialCalc
        };
        return ls.getIsCommonCalc(e) || (n.daily = null == i ? void 0 : i.filter(Boolean).map((i => ls.getCalculateItemByMeasure(e, i)))),
        n
    }
    static getCalculateItemByMeasure(e, i) {
        const {calculateMode: n} = e
          , t = {
            metricId: i.id,
            method: Zd.AvgDaily
        };
        if (!ls.getIsCommonCalc(e)) {
            const {calcConfig: e} = n || {};
            if (e.configMode === is.BuildIn)
                t.method = e.buildInConfig.calculate;
            else {
                var r;
                const n = null === (r = e.customConfig) || void 0 === r ? void 0 : r[`${i.uniqueId}`];
                t.method = null != n ? n : t.method
            }
        }
        return t
    }
    static getIsCommonCalc(e) {
        const {calculateMode: i} = e;
        return (null == i ? void 0 : i.calcConfig.configMode) === is.BuildIn && (null == i ? void 0 : i.calcConfig.buildInConfig.calculate) === Zd.Regular
    }
    constructor() {
        var e, i, n;
        n = void 0,
        (i = "calculateMode")in (e = this) ? Object.defineProperty(e, i, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[i] = n
    }
}
function os(e, i, n) {
    return i in e ? Object.defineProperty(e, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = n,
    e
}
(rs = ts || (ts = {})).Relative = "relative",
rs.Absolute = "absolute";
const {i18n: as} = u;
class ds {
    static getFormatByTimeKey(e, i) {
        var n;
        return (null === (n = e.timeGranularity[i]) || void 0 === n ? void 0 : n.format) || {
            timeFormat: {
                type: 1
            }
        }
    }
    static setFormatByTimeKey(e, i, n) {
        return Le.set(["timeGranularity", i, "format"], n, e)
    }
    static changeSwitchStatus(e, i) {
        return Le.set(["enableSwitchTimeGranularity"], i, e)
    }
    static getDefaultValue(e) {
        const i = ds.TimeGranularityText[e];
        return Q(i, ["range", "timeGranularityNum"])
    }
    static getAllGranularityType(e) {
        var i;
        if (!e.timeGranularity)
            return [];
        const n = Object.keys(e.timeGranularity);
        return null === (i = ds.TimeGranularityList.filter((i => {
            var t;
            return !!(null === (t = e.timeGranularity) || void 0 === t ? void 0 : t[i]) && n.find((e => Number(e) === i))
        }
        ))) || void 0 === i ? void 0 : i.map((e => {
            var i;
            return {
                key: e,
                label: null === (i = ds.TimeGranularityText[Number(e)]) || void 0 === i ? void 0 : i.text
            }
        }
        ))
    }
    static addGranularityType(e, i) {
        return e.timeGranularity[i] ? e : Le.set(["timeGranularity", i], ds.getDefaultValue(i), e)
    }
    static deleteGranularityType(e, i) {
        return e.timeGranularity[i] ? {
            ...e,
            timeGranularity: Le.set([i], null, e.timeGranularity)
        } : e
    }
    static getTimeGranularityNumList(e) {
        switch (e) {
        case ie.Year:
            return Array(12).fill(0).map(( (e, i) => ({
                key: Ge(ie.Year, i + 1),
                label: 0 === i ? as`1-12月(${as`自然年`})` : as`${i + 1}-次年${i}月`
            })));
        case ie.Biweek:
        case ie.CustomWeek:
            return xe(e)
        }
        return []
    }
    static changeTimeGranularityRange(e, i, n) {
        var t;
        return (null === (t = e.timeGranularity) || void 0 === t ? void 0 : t[i]) ? Le.set(["timeGranularity", i, "range"], n, e) : e
    }
    static changeTimeGranularityNum(e, i, n) {
        var t, r;
        if ((null === (t = e.timeGranularity) || void 0 === t ? void 0 : t[i]) && (null === (r = ds.getTimeGranularityNumList(i)) || void 0 === r ? void 0 : r.length)) {
            var l;
            const t = (null === (l = n.split(".")) || void 0 === l ? void 0 : l[2]) || 1;
            return Le.set(["timeGranularity", i, "timeGranularityNum"], Number(t), e)
        }
        return e
    }
    static generateFilter(e, i, n, t) {
        var r;
        const l = null === (r = e.timeGranularity) || void 0 === r ? void 0 : r[i]
          , o = Kd(n);
        if (!l || !o || !t)
            return;
        const {datetimeUnit: a, generateRange: d} = ds.TimeGranularityFilterConfig[i] || {};
        var s;
        return ql(t, {
            dimMetId: o.dimMetId,
            chartQueryFilter: !0,
            mixins: {
                op: pt.Last,
                val: [null !== (s = null == d ? void 0 : d(l.range)) && void 0 !== s ? s : l.range],
                option: {
                    dateMode: Yn.Relative,
                    isTimeGranularity: !0
                },
                valOption: {
                    datetimeUnit: a,
                    anchorOffset: l.timeGranularityNum === ie.Year ? l.timeGranularityNum : 0,
                    customYearAnchor: [ie.Year].includes(i) ? l.timeGranularityNum : void 0,
                    customWeekAnchor: [ie.Biweek, ie.CustomWeek].includes(i) ? l.timeGranularityNum : void 0,
                    until: void 0
                }
            }
        })
    }
    static getGranularityKey(e, i) {
        var n;
        const t = null === (n = ds.getAllGranularityType(e)) || void 0 === n ? void 0 : n[0]
          , r = Kd(i);
        if (t && r) {
            var l;
            const {originId: i} = r
              , n = null === (l = e.timeGranularity[t.key]) || void 0 === l ? void 0 : l.timeGranularityNum;
            return `time_${t.key}_${n}_${i}`
        }
    }
    static getAllTimeGranularity(e) {
        const {timeGranularity: i} = e;
        var n;
        return ds.getAllGranularityType(e).filter((e => !!i[e.key])).map((e => {
            var t;
            return {
                timeGranularityType: e.key,
                timeGranularityNum: null !== (n = null === (t = i[e.key]) || void 0 === t ? void 0 : t.timeGranularityNum) && void 0 !== n ? n : 1
            }
        }
        ))
    }
    constructor() {
        os(this, "enableSwitchTimeGranularity", !0),
        os(this, "timeGranularity", {
            [ie.Bimonth]: ds.getDefaultValue(ie.Bimonth),
            [ie.Biweek]: ds.getDefaultValue(ie.Biweek)
        })
    }
}
os(ds, "TimeGranularityList", [ie.Year, ie.Quarter, ie.Bimonth, ie.Month, ie.Biweek, ie.CustomWeek, ie.Day]),
os(ds, "TimeGranularityText", {
    [ie.Year]: {
        text: u.i18n`年`,
        min: 1,
        max: 100,
        range: 3,
        timeGranularityNum: 1
    },
    [ie.Quarter]: {
        text: u.i18n`季度`,
        min: 1,
        max: 400,
        range: 8,
        timeGranularityNum: 1
    },
    [ie.Bimonth]: {
        text: u.i18n`双月`,
        min: 1,
        range: 8,
        max: 600,
        timeGranularityNum: 1
    },
    [ie.Month]: {
        text: u.i18n`月`,
        min: 1,
        range: 3,
        max: 1200,
        timeGranularityNum: 1
    },
    [ie.Biweek]: {
        text: u.i18n`双周`,
        min: 1,
        range: 6,
        max: 2400,
        timeGranularityNum: 1
    },
    [ie.CustomWeek]: {
        text: u.i18n`周`,
        min: 1,
        range: 3,
        max: 4800,
        timeGranularityNum: 1
    },
    [ie.Day]: {
        text: u.i18n`日`,
        min: 1,
        range: 7,
        max: 33600,
        timeGranularityNum: 1
    }
}),
os(ds, "TimeGranularityFilterConfig", {
    [ie.Year]: {
        datetimeUnit: Un.year
    },
    [ie.Quarter]: {
        datetimeUnit: Un.quarter
    },
    [ie.Bimonth]: {
        datetimeUnit: Un.bimonthly
    },
    [ie.Month]: {
        datetimeUnit: Un.month
    },
    [ie.Biweek]: {
        datetimeUnit: Un.customWeek,
        generateRange: e => 2 * e
    },
    [ie.CustomWeek]: {
        datetimeUnit: Un.customWeek
    },
    [ie.Day]: {
        datetimeUnit: Un.day
    }
});
class ss {
    static refreshMiniChartConfig(e, i, n) {
        var t, r, l;
        const o = ss.getDimsCanConfigMiniChart(i, n);
        return (null === (t = e.miniChart) || void 0 === t ? void 0 : t.enabled) && !(null === (r = e.miniChart) || void 0 === r || null === (l = r.dimensionConfig) || void 0 === l ? void 0 : l.uniqueId) && (null == o ? void 0 : o.length) ? Ce(e, (e => {
            var i;
            const t = o[0];
            var r;
            (e.miniChart.dimensionConfig.uniqueId = t.uniqueId,
            null === (i = e.miniChart) || void 0 === i ? void 0 : i.chartName) || (e.miniChart.chartName = ss.generateDefaultName(Sl(t, n[t.dimMetId], !1), (null == t || null === (r = t.aggrConf) || void 0 === r ? void 0 : r.timeGranularityType) || ie.Day))
        }
        )) : e
    }
    static getMiniChartBasePill(e, i) {
        var n;
        return e.miniChart ? null === (n = i.columns) || void 0 === n ? void 0 : n.find((i => {
            var n, t;
            return i.uniqueId === (null === (n = e.miniChart) || void 0 === n || null === (t = n.dimensionConfig) || void 0 === t ? void 0 : t.uniqueId)
        }
        )) : null
    }
    static initMiniChartPillByConfig(e, i) {
        var n;
        const t = ss.getMiniChartBasePill(e, i);
        if (t)
            return {
                ...t,
                ...Q(null === (n = e.miniChart) || void 0 === n ? void 0 : n.dimensionConfig, ["aggrConf", "format", "fillDate"]) || {}
            }
    }
    static generateConfigByPillChange(e, i, n, t) {
        var r, l;
        const o = Le.set(["miniChart", "dimensionConfig"], {
            ...(null === (r = e.miniChart) || void 0 === r ? void 0 : r.dimensionConfig) || {},
            ...Q(i, ["aggrConf", "fillDate"]) || {}
        }, e);
        if (!(null === (l = e.miniChart) || void 0 === l ? void 0 : l.userChanged)) {
            var a;
            const e = ss.generateDefaultName(n ? Sl(n, t[null == n ? void 0 : n.dimMetId], !1) : "", (null == i || null === (a = i.aggrConf) || void 0 === a ? void 0 : a.timeGranularityType) || ie.Day);
            return Le.set(["miniChart", "chartName"], e, o)
        }
        return o
    }
    static getDimsCanConfigMiniChart(e, i) {
        return _i(e).filter((e => {
            var n, t, r;
            return (null === (n = e.aggrConf) || void 0 === n ? void 0 : n.timeGranularityType) ? (null === (r = e.aggrConf) || void 0 === r ? void 0 : r.timeGranularityType) === ie.Day : T.isDate((null === (t = i[e.dimMetId]) || void 0 === t ? void 0 : t.dataTypeName) || "")
        }
        ))
    }
    static changeMiniChartEnabled(e, i, n, t) {
        var r, l;
        if (!(null === (r = e.miniChart) || void 0 === r || null === (l = r.dimensionConfig) || void 0 === l ? void 0 : l.uniqueId) && i) {
            var o;
            const r = e.miniChart || {};
            return Le.set(["miniChart"], {
                filterStartOffset: 7,
                ...r,
                enabled: i,
                chartName: ss.generateDefaultName(n ? Sl(n, t[null == n ? void 0 : n.dimMetId], !1) : "", (null == n || null === (o = n.aggrConf) || void 0 === o ? void 0 : o.timeGranularityType) || ie.Day),
                dimensionConfig: {
                    uniqueId: (null == n ? void 0 : n.uniqueId) || "",
                    aggrConf: {
                        timeGranularityType: ie.Day,
                        timeGranularityNum: 1
                    },
                    style: {
                        lineColor: ke,
                        symbol: Ue.NONE,
                        smooth: "broken"
                    },
                    tooltip: {
                        visible: !0
                    }
                }
            }, e)
        }
        return Le.set(["miniChart", "enabled"], i, e)
    }
    static changeFilterStartOffset(e, i) {
        return !(null == e ? void 0 : e.miniChart) || Fe(i) ? e : Le.set(["miniChart", "filterStartOffset"], i, e)
    }
    static generateDefaultName(e, i) {
        var n;
        return e ? u.i18n`迷你图（按${null === (n = ds.TimeGranularityText[i]) || void 0 === n ? void 0 : n.text}（${e}））` : u.i18n`当前图表暂无可用字段`
    }
    static changeMiniChartName(e, i) {
        var n;
        const t = Le.set(["miniChart", "chartName"], i, e);
        return (null === (n = e.miniChart) || void 0 === n ? void 0 : n.userChanged) ? t : ss.setUserChanged(t)
    }
    static resetByDeletePill(e, i) {
        var n, t;
        return (null === (n = e.miniChart) || void 0 === n || null === (t = n.dimensionConfig) || void 0 === t ? void 0 : t.uniqueId) === i ? Le.set(["miniChart"], null, e) : e
    }
    static changeStyleByProperty(e, i, n) {
        var t;
        const r = Le.set(["miniChart", "style", i], n, e);
        return (null === (t = e.miniChart) || void 0 === t ? void 0 : t.userChanged) ? r : ss.setUserChanged(r)
    }
    static changeToolTipByProperty(e, i, n) {
        var t;
        const r = Le.set(["miniChart", "tooltip", i], n, e);
        return (null === (t = e.miniChart) || void 0 === t ? void 0 : t.userChanged) ? r : ss.setUserChanged(r)
    }
    static setUserChanged(e) {
        return Le.set(["miniChart", "userChanged"], !0, e)
    }
    constructor() {
        var e, i, n;
        n = void 0,
        (i = "miniChart")in (e = this) ? Object.defineProperty(e, i, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[i] = n
    }
}
const us = function(e, i, n) {
    const {uniqueId: t} = n || {};
    if (e.display.type !== d.TREND_TABLE || !t)
        return e;
    let r = e.display.conf;
    return r = ss.resetByDeletePill(r, t),
    r = ls.resetByDeletePill(r, t),
    Le.set(["display", "conf"], r, e)
}
  , cs = function(e, i=b.ROW) {
    if (e.display.type !== d.TREND_TABLE)
        return e;
    const {columns: n, rows: t, measures: r} = e
      , l = [].concat(n, t).filter(Pe).length > 0;
    if (!l && r.length >= 2) {
        const n = xd({
            location: i,
            roleType: s.DIM,
            name: u.i18n`指标名称 `
        });
        return {
            ...e,
            rows: [...e.rows, n]
        }
    }
    return l && r.length < 2 ? {
        ...e,
        columns: e.columns.filter((e => !Pe(e))),
        rows: t.filter((e => !Pe(e)))
    } : e
};
$e(!1);
const ps = (e, i) => [kd, cs, Gd, Yd, Hd, Ud, cl, pl, us, jd, Vd].reduce(( (e, n) => n(e, void 0, i)), e)
  , fs = e => R(e, (e => {
    if (e.measureTree) {
        var i;
        const n = !!e.measures.length && (null === (i = e.measureTree) || void 0 === i ? void 0 : i.data.some((e => e.isGroup)));
        !1 === n ? e.measureTree = void 0 : e.measureTree.enable = n
    }
    return e
}
))
  , ms = e => {
    var i, n;
    return !1 === [d.TABLE, d.PIVOT_TABLE, d.TREND_TABLE].includes(e.display.type) ? R(e, (e => {
        e.measureTree = void 0
    }
    )) : [d.TREND_TABLE].includes(e.display.type) || (null === (i = e.measureTree) || void 0 === i ? void 0 : i.displayType) !== We.TREE ? !0 !== (null === (n = e.measureTree) || void 0 === n ? void 0 : n.enable) ? R(e, (e => {
        e.measureTree = void 0
    }
    )) : R(e, (e => {
        const {measures: i, measureTree: n} = e;
        var t;
        const r = hl(null !== (t = null == n ? void 0 : n.data) && void 0 !== t ? t : [])
          , l = i.filter((e => -1 === r.indexOf(e.uniqueId)))
          , o = r.filter((e => -1 === i.findIndex((i => i.uniqueId === e))));
        var a;
        return l.forEach((e => {
            var t, r;
            const l = ( (e, i, n) => {
                const t = i.indexOf(e);
                if (0 === t)
                    return 0;
                const r = i[t - 1];
                for (let l = 0; l < n.length; l++)
                    if (gl(r, n[l]))
                        return 1 + l;
                return n.length
            }
            )(e.uniqueId, i.map((e => e.uniqueId)), null !== (r = null == n ? void 0 : n.data) && void 0 !== r ? r : []);
            null == n || null === (t = n.data) || void 0 === t || t.splice(l, 0, {
                isGroup: !1,
                uniqueId: e.uniqueId,
                key: e.uniqueId.toString()
            })
        }
        )),
        o.forEach((e => {
            var i;
            ml(null !== (i = null == n ? void 0 : n.data) && void 0 !== i ? i : [], e, ( (e, i, n) => {
                n.splice(i, 1)
            }
            ))
        }
        )),
        yl(null !== (a = null == n ? void 0 : n.data) && void 0 !== a ? a : [], (e => {
            var i;
            fl(e) && !(null === (i = e.children) || void 0 === i ? void 0 : i.length) && (e.isGroup = !1)
        }
        )),
        e
    }
    )) : R(e, (e => {
        e.measureTree = void 0
    }
    ))
}
  , vs = e => R(e, (e => {
    var i, n;
    const t = hl(null !== (n = null === (i = e.measureTree) || void 0 === i ? void 0 : i.data) && void 0 !== n ? n : []);
    var r;
    (e.measures.sort(( (e, i) => t.indexOf(e.uniqueId) - t.indexOf(i.uniqueId))),
    e.measureTree) && (e.measureTree.enable = null === (r = e.measureTree) || void 0 === r ? void 0 : r.data.some((e => e.isGroup)));
    return e
}
))
  , ys = (e, i, n) => {
    const {uniqueId: t} = n
      , r = R(e, (e => {
        var i, n;
        (null === (i = e.measureTree) || void 0 === i || null === (n = i.data) || void 0 === n ? void 0 : n.length) && t && ml(e.measureTree.data, t, ( (e, i, n) => {
            n.splice(i, 1)
        }
        ))
    }
    ));
    return fs(r)
}
  , Is = e => {
    const i = wi(e)
      , n = e => wi(e).filter((e => {
        var n, t;
        const {type: r, data: l} = null !== (t = null === (n = e.format) || void 0 === n ? void 0 : n.conditionalFormat) && void 0 !== t ? t : {};
        let o;
        switch (r) {
        case k.TAG:
            var a;
            return o = null === (a = l[0]) || void 0 === a ? void 0 : a.pillId,
            o && !i.some((e => {
                var i;
                return (null === (i = e.uniqueId) || void 0 === i ? void 0 : i.toString()) === o
            }
            ));
        case k.COLOR_LEVELS:
        case k.BAR:
            return o = l.pillId,
            o && !i.some((e => {
                var i;
                return (null === (i = e.uniqueId) || void 0 === i ? void 0 : i.toString()) === o
            }
            ));
        case k.SINGLE_COLOR:
            return l.some((e => e.ruleGroup.groups.some((e => e.rules.some((e => !i.some((i => {
                var n;
                return (null === (n = i.uniqueId) || void 0 === n ? void 0 : n.toString()) === e.pillId
            }
            ))))))));
        default:
            return !1
        }
    }
    ));
    return n(e).length ? R(e, (e => {
        n(e).forEach((e => {
            e.format.conditionalFormat = void 0
        }
        ))
    }
    )) : e
}
  , hs = e => {
    if (e.display.type !== d.TABLE)
        return e;
    let i = e;
    const n = i.whereList.map((e => e.dimMetId))
      , t = e => ji(e).filter((e => {
        var t;
        const r = e.miniChart
          , l = null === (t = i.details) || void 0 === t ? void 0 : t.find((e => e.uniqueId === r.dimensions[0]));
        return !n.includes(null == l ? void 0 : l.dimMetId) && r.enableCustomFilter
    }
    ));
    t(i).length && (i = R(i, (e => {
        t(e).forEach((e => {
            e.miniChart.enableCustomFilter = !1
        }
        ))
    }
    )));
    return i = R(i, (e => {
        const n = (e => {
            const n = [];
            return ji(e).forEach((e => {
                var t, r;
                const l = e.miniChart
                  , o = null === (t = i.details) || void 0 === t ? void 0 : t.find((e => e.uniqueId === l.dimensions[0]))
                  , a = null === (r = i.details) || void 0 === r ? void 0 : r.find((e => e.uniqueId === l.measures[0]));
                o && n.push(o.uniqueId),
                a && n.push(a.uniqueId)
            }
            )),
            n
        }
        )(e);
        var t;
        e.details && (e.details = null === (t = e.details) || void 0 === t ? void 0 : t.filter((e => n.includes(e.uniqueId))));
        e.details && (e.details = e.details.map((e => {
            var i;
            if (e.roleType === s.DIM && 1 === (null === (i = e.aggrConf) || void 0 === i ? void 0 : i.timeGranularityNum) && e.sourceType !== E.AGGR) {
                const i = ul({
                    originId: e.originId,
                    aggrConf: e.aggrConf,
                    exprTemplate: e.exprTemplate,
                    mapKey: e.mapKey
                });
                return {
                    ...e,
                    id: i,
                    sourceType: E.AGGR
                }
            }
            return e
        }
        )))
    }
    )),
    i
}
;
var gs, Es;
(Es = gs || (gs = {})).Add = "add",
Es.Delete = "delete";
const Ts = {
    [d.GIS_BAR_MAP]: {
        defaultRangeValue: [5, 30],
        defaultInputValue: Ye.size.range[0]
    }
}
  , Cs = e => {
    var i;
    return !!Ts[null == e || null === (i = e.display) || void 0 === i ? void 0 : i.type]
}
  , As = (e, i) => {
    const {defaultRangeValue: n, defaultInputValue: t} = Ts[e.display.type];
    return i === gs.Add ? n : [t, t]
}
  , Ms = (e, i, n) => {
    if (!Cs(e) || n.location !== b.SIZE)
        return e;
    const t = As(e, gs.Add);
    return Ce(e, (e => (e.display.conf.size.range = t,
    e)))
}
  , Ns = (e, i, n) => {
    const {uniqueId: t} = n;
    if (!Cs(e) || !( (e, i) => !!(e.sizes || []).find((e => e.uniqueId === i)))(e, t))
        return e;
    const r = As(e, gs.Delete);
    return Ce(e, (e => (e.display.conf.size.range = r,
    e)))
}
;
function Ls(e) {
    if (!e.dynamicPillsMap)
        return e;
    const i = Di(e)
      , n = Object.keys(e.dynamicPillsMap).reduce(( (n, t) => i.find((e => e.id === t)) ? {
        ...n,
        [t]: e.dynamicPillsMap[t]
    } : n), {});
    return {
        ...e,
        dynamicPillsMap: n
    }
}
const Rs = e => R(e, (e => {
    Di(e).forEach((e => {
        delete e.beforeUpdateId,
        delete e.updateDerived
    }
    ))
}
));
$e(!1);
const bs = (e, i) => [Ca, bd, sa, Ra, pd, ea, Aa, ld, na, Is, hs, ro, ms, Ls, Rs].reduce(( (e, n) => n(e, i, void 0)), e)
  , Ds = wd(Sd, (function(e, i, n) {
    const {location: t, fieldTypes: r, dimMetId: l, mapKey: o, modifyPillToAdd: a=qd, autoAggr: u, roleType: c, groupInfo: p} = n;
    if (t === b.WHERE)
        return function(e, i, n) {
            const {location: t, dimMetId: r, mapKey: l, preRelation: o=J.AND} = n
              , a = I.from(Array.isArray(i) ? i : [i]).getDataSetByDimMetId(r);
            if (!a)
                return e;
            const u = a.fieldMap[r];
            if (t !== b.WHERE)
                return console.error(`unexpected filterPill location: ${t}`),
                e;
            const c = Oi(e, b.WHERE)
              , {index: p, modifyPillToAdd: f=qd} = n
              , m = f(ql(a, {
                dimMetId: r,
                mapKey: l,
                autoAggr: e.display.type !== d.RAW_TABLE,
                mixins: {
                    preRelation: o,
                    showEditComponent: !0,
                    roleType: n.roleType,
                    ...we.isMapOrArray(u.dataTypeName) && {
                        roleType: s.DIM
                    }
                }
            }), e);
            return Vi(e, m, t, null != p ? p : c.length)
        }(e, i, n);
    const f = Oi(e, t)
      , {index: m} = n
      , v = a(Bl(i, {
        location: t,
        fieldTypes: r,
        dimMetId: l,
        mapKey: o,
        aggrConf: n.aggrConf,
        autoAggr: null != u ? u : e.display.type !== d.RAW_TABLE,
        uniqueId: n.uniqueId,
        roleType: c,
        chartType: e.display.type
    }), e);
    return ( (e, i, n) => n !== b.MEASURE || void 0 === i ? e : Od(e, i))(Vi(e, v, t, null != m ? m : f.length), p, t)
}
), bs, Ms, ps);
var Ss, Os;
(Os = Ss || (Ss = {})).Day = "day",
Os.Week = "week",
Os.Biweek = "biweek",
Os.Month = "month",
Os.Bimonth = "bimonth",
Os.Quarter = "quarter",
Os.Year = "year";
const _s = (e, i, n) => {
    const t = Oi(i, b.DIMENSION)
      , r = t[0];
    let l = Ps(i);
    return l = Ds(l, n, {
        index: t.length,
        dimMetId: r.dimMetId,
        location: b.DIMENSION,
        fieldTypes: [s.DIM],
        modifyPillToAdd: e => R(e, (e => {
            e.originId = r.id,
            e.sourceType = E.FORECAST,
            e.id = `forecast_${r.id}`,
            e.name = u.i18n`实际/预测`,
            e.undraggable = !0
        }
        ))
    }),
    l = R(l, (i => {
        const n = {
            ...e,
            granularity: Fs(r),
            timePill: Oi(l, b.DIMENSION)[0].uniqueId
        };
        i.forecast = n
    }
    )),
    l
}
  , Ps = e => {
    const i = Wi(e, E.FORECAST);
    return i.forecast = void 0,
    i
}
  , Bs = [ie.Day, ie.PerDay]
  , qs = [ie.TWeek, ie.Week, ie.CustomWeek, ie.DayOfWeek, ie.PerWeek]
  , ws = [ie.Biweek, ie.PerBiweek]
  , xs = [ie.Month, ie.PerMonth]
  , Gs = [ie.Bimonth, ie.PerBimonth]
  , ks = [ie.Quarter, ie.PerQuarter]
  , Us = [ie.Year]
  , Fs = e => {
    var i;
    const n = {
        [Ss.Day]: Bs,
        [Ss.Week]: qs,
        [Ss.Biweek]: ws,
        [Ss.Month]: xs,
        [Ss.Bimonth]: Gs,
        [Ss.Quarter]: ks,
        [Ss.Year]: Us
    }
      , t = null == e || null === (i = e.aggrConf) || void 0 === i ? void 0 : i.timeGranularityType;
    if (!t)
        return Ss.Day;
    var r;
    return null !== (r = Object.entries(n).filter(( ([,e]) => e.includes(t)))[0][0]) && void 0 !== r ? r : Ss.Day
}
  , {getFeatureConfig: $s} = re.get(le.Feature)
  , Ws = e => {
    var i;
    const n = La(e)
      , t = (null === (i = e.sort) || void 0 === i ? void 0 : i.orderByList) || [];
    if (!t.length)
        return !1;
    if (n.includes(br.TABLE))
        return !!t.length;
    let r = t.filter((e => e.strategy === br.PIVOT_CHART));
    return n.includes(br.AXIS) ? r = [...r, ...t.filter((e => e.strategy === br.AXIS))] : n.includes(br.LEGEND) ? r = [...r, ...t.filter((e => e.strategy === br.LEGEND))] : n.includes(br.AXIS_LEGEND) && (r = [...r, ...t.filter((e => [br.AXIS, br.LEGEND].includes(e.strategy)))]),
    !!r.length
}
  , Ys = e => {
    const i = [];
    return Ws(e) && i.push(rl.SORT),
    Qo(e) && i.push(rl.TOPN),
    Xo(e) && i.push(rl.COMBINED),
    Ko(e) && i.push(rl.PERCENT),
    (e => zo(e))(e) && i.push(rl.WHERE_COMPARE),
    jo(e) && i.push(rl.PERIODCOMPARE),
    Jo(e) && i.push(rl.REFERENCE_LINE),
    Zo(e) && i.push(rl.TABLE_CALCULATION),
    (e => Boolean(e.clustering))(e) && i.push(rl.CLUSTERING),
    (e => Boolean(e.forecast))(e) && i.push(rl.FORECAST),
    i
}
  , Hs = (e, i) => {
    var n, t;
    const r = {}
      , l = Ys(e);
    var o;
    return Array.from(new Set([...Ks(l, e), ...Vs(e, i), ...zs(e), ...null !== (o = null === (n = $s()) || void 0 === n || null === (t = n.vizQuery) || void 0 === t ? void 0 : t.disableAnalysis) && void 0 !== o ? o : []])).forEach((i => {
        const n = {
            visible: !0,
            tips: []
        };
        e.display.type === d.TREND_TABLE && (n.tips = [u.i18n`趋势分析表暂不支持该分析功能`]),
        i === rl.FORECAST && (n.tips = [u.i18n`1.仅支持X轴为日期类型字段的折线图`, u.i18n`2.时序预测只兼容TopN，对比，参考线`, u.i18n`3.暂时不支持双周、双月`]),
        r[i] = n
    }
    )),
    js(i, e).forEach((e => {
        const i = r[e.key];
        var n;
        r[e.key] = {
            visible: e.info.visible,
            tips: e.info.tip ? [e.info.tip] : null !== (n = null == i ? void 0 : i.tips) && void 0 !== n ? n : []
        }
    }
    )),
    r
}
  , Vs = (e, i) => {
    var n, t;
    const r = []
      , l = i.reduce(( (e, i) => ({
        ...e,
        ...i.fieldMap
    })), {})
      , o = Object.values(l).filter((e => T.isCluster(e.dataTypeName))).map((e => e.id));
    zi(e).filter((e => e.pillType !== U.TEMP_CLUSTER)).map((e => e.dimMetId)).some((e => o.includes(e))) && r.push(...Object.values(rl).filter((e => e !== rl.SORT && e !== rl.COMBINED && e !== rl.SecondaryAnalysis)));
    Di(e, {
        excludeWhereList: !0
    }).some((e => e.sourceType === E.SEGMENT)) && r.push(rl.PERIODCOMPARE);
    const a = Oi(e, b.DIMENSION)[0]
      , d = l[null == a ? void 0 : a.dimMetId]
      , s = T.isDate(null == d ? void 0 : d.dataTypeName)
      , u = T.isDatetime(null == d ? void 0 : d.dataTypeName) && [Bs, qs, ws, xs, Gs, ks, Us].flat(1).includes(null == a || null === (n = a.aggrConf) || void 0 === n ? void 0 : n.timeGranularityType)
      , c = (null == a ? void 0 : a.pillType) === U.DYNAMIC;
    return [ws, Gs].flat(1).includes(null == a || null === (t = a.aggrConf) || void 0 === t ? void 0 : t.timeGranularityType) ? r.push(rl.FORECAST) : s || u ? (c || N(e)) && r.push(rl.FORECAST) : r.push(rl.FORECAST),
    r
}
  , Ks = (e, i) => {
    const n = Mn(i)
      , t = new Set
      , r = Object.values(rl).filter((e => ![rl.TOPN, rl.WHERE_COMPARE, rl.REFERENCE_LINE, rl.FORECAST, rl.SecondaryAnalysis].includes(e)));
    return e.includes(rl.FORECAST) && r.forEach((e => t.add(e))),
    me(e, r).length > 0 && t.add(rl.FORECAST),
    e.includes(rl.CLUSTERING) ? Object.values(rl).filter((e => e !== rl.SecondaryAnalysis)).forEach((e => {
        [rl.SORT, rl.CLUSTERING].includes(e) || t.add(e)
    }
    )) : e.filter((e => ![rl.SORT, rl.CLUSTERING].includes(e))).length && t.add(rl.CLUSTERING),
    (e => !a(e.logicalTableConf))(i) && t.add(rl.CLUSTERING),
    M(n) && (t.add(rl.WHERE_COMPARE),
    t.add(rl.PERIODCOMPARE)),
    [[Pt, rl.SORT], [Ot, rl.TOPN], [qt, rl.COMBINED], [Nt, rl.PERCENT], [Dt, rl.WHERE_COMPARE], [Rt, rl.PERIODCOMPARE], [xt, rl.REFERENCE_LINE], [kt, rl.TABLE_CALCULATION], [Ft, rl.FORECAST], [Wt, rl.CLUSTERING]].forEach((e => {
        e[0](i) || t.add(e[1])
    }
    )),
    [...t]
}
  , js = (e, i) => Object.values(rl).map((n => ({
    key: n,
    info: Tt({
        dataSets: e,
        featureKey: n,
        schema: i
    })
}))).filter((e => !e.info.enabled))
  , zs = e => {
    const i = [rl.SORT, rl.TOPN, rl.COMBINED, rl.PERCENT, rl.WHERE_COMPARE, rl.PERIODCOMPARE, rl.REFERENCE_LINE, rl.TABLE_CALCULATION, rl.FORECAST, rl.CLUSTERING];
    let n = [];
    if (e.display.type === d.PIVOT_TABLE && 0 === Qi(e, b.MEASURE).length) {
        const e = [rl.SORT, rl.TOPN];
        n = n.concat(He(i, e))
    }
    return new Set(n)
}
  , Qs = function(e, i, n) {
    return e.display.type === d.PIVOT_TABLE ? R(e, (i => {
        const t = ho(i).find((e => e.id === n.pillId));
        if (t) {
            var r;
            const i = Dl(t, e);
            if (i && i.uniqueId !== t.uniqueId && !(null === (r = i.drillInfo) || void 0 === r ? void 0 : r.groupId)) {
                var l;
                const e = Math.random().toString(36).slice(-8);
                i.drillInfo = {
                    ...i.drillInfo,
                    groupId: e
                },
                t.drillInfo && !(null === (l = t.drillInfo) || void 0 === l ? void 0 : l.groupId) && (t.drillInfo.groupId = e)
            }
        }
    }
    )) : e
}
  , Xs = function(e, i, n) {
    return function(e, i, n) {
        return R(e, (t => {
            const r = ho(t).find((e => e.uniqueId === n));
            if (!r)
                return e;
            const l = Ao(r, i, e);
            if (a(l))
                return;
            var o;
            const d = null !== (o = Dl(r, e).drillInfo) && void 0 !== o ? o : {};
            let s = !1;
            var u, c;
            ((null == l ? void 0 : l.path.includes(r.dimMetId)) || (null == l ? void 0 : l.path.includes(r.uniqueId))) && ("dimMetId" === l.type ? Object.values(null !== (u = null == d ? void 0 : d.pillConfigs) && void 0 !== u ? u : {}).forEach((e => {
                e.dimMetId === r.dimMetId && (Object.assign(e, ge(r, ["drillInfo"]), {
                    location: b.Drill
                }),
                s = !0)
            }
            )) : a(null == d ? void 0 : d.pillConfigs) || (d.pillConfigs[r.uniqueId] = Object.assign(d.pillConfigs[r.uniqueId] || {}, ge(r, ["drillInfo"]), {
                location: b.Drill
            }),
            s = !0),
            s || (a(null === (c = r.drillInfo) || void 0 === c ? void 0 : c.pillConfigs) && (r.drillInfo = {
                ...r.drillInfo,
                pillConfigs: {}
            }),
            r.drillInfo.pillConfigs[r.uniqueId] = Object.assign(ge(r, ["drillInfo"]), {
                location: b.Drill
            })))
        }
        ))
    }(e, i, n.uniqueId)
}
  , Js = (e, i, n) => {
    var t;
    const r = Xi(e, n.uniqueId);
    if (null == r || null === (t = r.drillInfo) || void 0 === t ? void 0 : t.departmentAutoDrill) {
        const i = e.whereList.filter((e => {
            var i;
            return !Me(e) || (null === (i = e.filter.option) || void 0 === i ? void 0 : i.originDrillUniqueId) !== r.uniqueId
        }
        ));
        return {
            ...e,
            whereList: i
        }
    }
    return e
}
  , Zs = function(e, i, n) {
    var t, r;
    const l = Xi(e, n.uniqueId);
    if (!l)
        return e;
    if (bo(e) && (null == l ? void 0 : l.location) !== n.location)
        return Oo({
            schema: e,
            dataSets: i,
            pill: l
        }) ? _o({
            uniqueId: n.uniqueId,
            schema: e,
            dataSets: i
        }) : Ce(e, (e => {
            const i = Xi(e, n.uniqueId);
            i.drillInfo && (i.drillInfo.groupId = Math.random().toString(36).slice(-8))
        }
        ));
    var o;
    if (!ko(e, i, l, n.location, n.fieldTypes, null !== (o = n.index) && void 0 !== o ? o : Oi(e, n.location).length))
        return e;
    const a = go(e)
      , d = n.uniqueId === a.uniqueId
      , s = null === (t = e.drill) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.uniqueId
      , u = Uo(e, i)
      , c = d ? {
        ...n,
        uniqueId: s
    } : n;
    return Dd.rewriteParameters(u, i, c)
}
  , eu = function(e, i, n) {
    if (bo(e) && Oo({
        schema: e,
        dataSets: i,
        uniqueId: n.uniqueId
    }))
        return _o({
            uniqueId: n.uniqueId,
            schema: e,
            dataSets: i
        });
    const t = go(e);
    if (!t || t.uniqueId !== n.uniqueId)
        return Js(e, i, n);
    const {location: r, uniqueId: l} = t
      , o = Oi(e, r).findIndex((e => e.uniqueId === l))
      , a = n.uniqueId === t.uniqueId;
    let d = Uo(e, i);
    const s = Oi(d, r)[o]
      , u = a ? {
        ...n,
        uniqueId: s.uniqueId
    } : n;
    return d = Js(d, i, n),
    Dd.rewriteParameters(d, i, u)
}
  , iu = function(e, i, n) {
    if (bo(e)) {
        const t = ho(e).find((e => e.uniqueId === n.uniqueId));
        return !t || _(t.drillInfo, n.pill.drillInfo) ? e : _o({
            uniqueId: t.uniqueId,
            schema: e,
            dataSets: i
        })
    }
    return e
}
  , nu = function(e, i, n) {
    if (n.clearDrillState) {
        if (bo(e)) {
            const t = ho(e).find((e => e.id === n.dynamicPillId));
            return t ? _o({
                uniqueId: t.uniqueId,
                schema: e,
                dataSets: i
            }) : e
        }
        {
            const t = go(e);
            if (t && Ae(t) && (null == t ? void 0 : t.id) === n.dynamicPillId)
                return vo(e, i)
        }
    }
    return e
}
  , tu = function(e, i, n) {
    if (bo(e)) {
        const t = ho(e)
          , r = t.find((e => e.id === n.pillId));
        if (!r)
            return e;
        const l = Dl(r, e);
        if ((null == l ? void 0 : l.uniqueId) === r.uniqueId)
            return e;
        const o = n.pillList.find((e => e.id === (null == l ? void 0 : l.id)));
        if (t.filter((e => {
            var i, n;
            return (null === (i = e.drillInfo) || void 0 === i ? void 0 : i.groupId) && e.drillInfo.groupId === (null == l || null === (n = l.drillInfo) || void 0 === n ? void 0 : n.groupId)
        }
        )).length > 1 && (!o || _(null == l ? void 0 : l.drillInfo, null == o ? void 0 : o.drillInfo)))
            return _o({
                schema: e,
                uniqueId: r.uniqueId,
                dataSets: i
            })
    } else {
        var t;
        const r = go(e);
        if (!r || n.pillId !== r.id)
            return e;
        const l = n.pillList.find((i => {
            var n;
            return i.id === (null === (n = Dl(r, e)) || void 0 === n ? void 0 : n.id)
        }
        ));
        if (!l || _(null === (t = Dl(r, e)) || void 0 === t ? void 0 : t.drillInfo, l.drillInfo))
            return _o({
                schema: e,
                uniqueId: r.uniqueId,
                dataSets: i
            })
    }
    return e
};
const ru = wd((function(e, i) {
    const {index: n} = i
      , t = Oi(e, b.WHERE);
    let r = 1;
    t.forEach((e => {
        if (oe(e)) {
            var i;
            const n = null !== (i = e.nameIndex) && void 0 !== i ? i : 1;
            n >= r && (r = n + 1)
        }
    }
    ));
    const l = function({op: e=J.AND, nameIndex: i}) {
        const n = K();
        return {
            uniqueId: n,
            format: {},
            originId: String(n),
            id: String(n),
            dimMetId: n,
            pillType: U.COMBINATION_FILTER,
            aggrConf: {},
            highlight: !1,
            location: b.WHERE,
            unremovable: !1,
            nameIndex: i,
            notJoinQuery: !1,
            roleType: s.DIM,
            filter: {
                op: e,
                children: []
            }
        }
    }({
        nameIndex: r
    });
    return Vi(e, l, b.WHERE, null != n ? n : t.length)
}
));
function lu(e, i) {
    const {uniqueId: n} = i
      , t = Oi(e, b.WHERE);
    if (io(t, {
        uniqueId: n
    }).some(de))
        return e;
    const r = function(e=b.WHERE) {
        const i = K();
        return {
            uniqueId: i,
            format: {},
            originId: String(i),
            id: `or${i}`,
            dimMetId: i,
            pillType: U.OR_PLACEHOLDER,
            aggrConf: {},
            highlight: !1,
            location: e,
            unremovable: !1,
            name: "or placeholder",
            sourceType: E.PLACEHOLDER,
            notJoinQuery: !0,
            roleType: s.DIM,
            undraggable: !0,
            preRelation: J.OR,
            isParameter: !1,
            filter: {
                op: pt.Uninitialized,
                val: null
            }
        }
    }()
      , l = t.findIndex((e => e.uniqueId === n));
    if (l < 0)
        return e;
    const o = {
        ...e,
        whereList: t.map(( (e, i) => i === l ? {
            ...e,
            undraggable: !0
        } : e))
    };
    return Vi(o, r, b.WHERE, l + 1)
}
const ou = wd(( (e, i, n) => lu(e, n)))
  , au = wd(( (e, i, n) => Od(e, n)), (e => cl(e)))
  , du = wd(( (e, i, n) => R(e, (e => {
    e.combined = n
}
))))
  , su = wd((e => R(e, (e => {
    e.combined = void 0
}
))))
  , uu = wd(( (e, i, n) => Ce(e, (e => {
    if (!n)
        return e;
    e.percent = n;
    const t = function(e, i, n) {
        const t = M(e.display.type)
          , r = da(e, L(i), !0)
          , l = n.calcConfList.reduce(( (e, i) => e.concat(i.idList)), []);
        return aa(l.includes(Bn) ? r : r.filter((e => l.includes(e.id))), i, !t)
    }(e, i, n)
      , r = El(e, {
        derivedList: t,
        sourceType: E.PERCENT
    });
    Object.assign(e, r)
}
))), bs, ps)
  , cu = wd((e => Ce(e, (e => {
    if (e.percent) {
        e.percent = void 0;
        const i = Wi(e, E.PERCENT);
        Object.assign(e, i)
    }
}
))), bs, ps)
  , pu = wd(( (e, i, n) => R(e, (e => {
    const {derivedPills: t, periodCompareConfigs: r} = function(e, i, n) {
        return n.map(( (n, t) => va(n, t, e, i))).reduce(( (e, i) => ({
            derivedPills: e.derivedPills.concat(i.derivedList),
            periodCompareConfigs: e.periodCompareConfigs.concat(i.periodCompareList)
        })), {
            derivedPills: [],
            periodCompareConfigs: []
        })
    }(e, i, n);
    e.periodCompare = r;
    let l = El(e, {
        derivedList: t,
        sourceType: E.PERIODCMP
    });
    l = function(e, i) {
        const n = Si(e)
          , t = i.reduce(( (e, i) => {
            e[i.originId] || (e[i.originId] = []);
            const t = n.find((e => e.id === i.id));
            return t && e[i.originId].push(t),
            e
        }
        ), {});
        return Ce(e, (e => {
            const i = Y(n.map((e => e.location)));
            for (const n of i) {
                var r;
                const i = Oi(e, n).filter((e => e.sourceType !== E.PERIODCMP));
                if (Object.keys(t).forEach((e => {
                    const r = i.findIndex((i => i.id === e));
                    if (r > -1) {
                        const l = t[e].map((e => ({
                            ...e,
                            location: n
                        })));
                        i.splice(r + 1, 0, ...l)
                    }
                }
                )),
                e[n]) {
                    if (e[n] = i,
                    n === b.MEASURE) {
                        var l;
                        const i = e[n]
                          , r = null === (l = e.measuresGroups) || void 0 === l ? void 0 : l.map((e => e.filter((e => {
                            var n;
                            return (null === (n = i.find((i => i.uniqueId === e))) || void 0 === n ? void 0 : n.sourceType) !== E.PERIODCMP
                        }
                        ))))
                          , o = null == r ? void 0 : r.map((e => {
                            const n = [...e];
                            return e.forEach((e => {
                                const r = i.find((i => i.uniqueId === e));
                                if (r && t[r.id]) {
                                    const i = t[r.id].map((e => e.uniqueId))
                                      , l = n.findIndex((i => i === e));
                                    n.splice(l + 1, 0, ...i)
                                }
                            }
                            )),
                            n
                        }
                        ));
                        e.measuresGroups = o
                    }
                    n !== b.MEASURE || Ta(i.map((e => e.uniqueId)), e.measuresGroups) || (e.measuresGroups = [])
                } else
                    (null === (r = e.customConfig) || void 0 === r ? void 0 : r.fields[n]) && (e.customConfig.fields[n] = i)
            }
        }
        ))
    }(l, t),
    Object.assign(e, l)
}
))), bs, ps)
  , fu = wd((e => R(e, (e => {
    if (e.periodCompare) {
        e.periodCompare = [];
        const i = Wi(e, E.PERIODCMP);
        Object.assign(e, i)
    }
}
))), bs, ps)
  , mu = wd(( (e, i, n) => R(e, (e => {
    e.referenceLine = n
}
))))
  , vu = wd((e => R(e, (e => {
    e.referenceLine && (e.referenceLine = [])
}
))))
  , yu = wd(( (e, i, n) => R(e, (e => {
    e.sort = n
}
))))
  , Iu = wd((e => R(e, (e => {
    e.sort && (e.sort = void 0)
}
))))
  , hu = wd(( (e, i, n) => function(e, i, n) {
    const {rules: t, hideAllEmptyRowsOrCols: r} = n
      , l = I.from(i)
      , o = nd(e, l)
      , a = id(e, l)
      , d = {};
    let s = R(e, (e => {
        var i;
        const n = Yt(Wa(e), (e => e.id))
          , s = w(null === (i = e.tableCalculation) || void 0 === i ? void 0 : i.rules);
        var u;
        e.tableCalculation = {
            rules: null !== (u = null == t ? void 0 : t.map((i => za(e, l, i, o, a)))) && void 0 !== u ? u : [],
            hideAllEmptyRowsOrCols: r
        },
        e.tableCalculation.rules.forEach(( (e, i) => {
            const t = null == s ? void 0 : s[i];
            if (n.has(e.id)) {
                const i = n.get(e.id);
                return void Ja(Ya(e, n.get(e.measureId), l), i, Xa(t, e))
            }
            const r = n.get(e.measureId)
              , o = Ya(e, r, l);
            d[r.location] || (d[r.location] = []),
            d[r.location].push(w(o))
        }
        ))
    }
    ));
    return Object.entries(d).forEach(( ([e,i]) => {
        const n = Oi(s, e).concat(i);
        s = Gi(s, e, n)
    }
    )),
    qi({
        schema: s,
        filter: e => {
            var i, n;
            const t = null !== (n = null === (i = s.tableCalculation) || void 0 === i ? void 0 : i.rules.map((e => e.id))) && void 0 !== n ? n : [];
            return !(e.sourceType === E.CALCULATION && !(null == t ? void 0 : t.includes(e.id)))
        }
    })
}(e, i, n)), ps)
  , gu = wd(rd, ps)
  , Eu = wd(( (e, i, n) => R(e, (e => {
    e.topN = n
}
))))
  , Tu = wd((e => R(e, (e => {
    e.topN && (e.topN = void 0)
}
))))
  , Cu = wd(( (e, i, n) => Ce(e, (e => {
    e.whereCompare = n;
    let t = Rd(e, i);
    t = El(t, {
        derivedList: Nd(n, t, i),
        sourceType: E.COMPARE
    }),
    Object.assign(e, t)
}
))), bs, ps)
  , Au = wd(( (e, i) => Ce(e, (e => {
    let n = Ld(e, i, (e => {
        delete e.notDisplay,
        e.notJoinQuery = !1
    }
    ));
    n = Wi(n, E.COMPARE),
    Object.assign(e, {
        ...n,
        whereCompare: void 0
    })
}
))), bs, ps)
  , Mu = wd(( (e, i, n) => ( (e, i, n) => {
    const t = ho(e)
      , r = t.find((e => e.uniqueId === n));
    if (!r)
        return e;
    const l = No({
        pill: r,
        dataSets: i,
        schema: e,
        pills: t
    }) || {};
    if (!l || a(l.drillPath) && a(l.layerDrillPath))
        return e;
    const o = (n, t) => {
        var o, a, d;
        const s = Dl(r, e);
        if (!s)
            return;
        var u;
        const c = null !== (u = null == t ? void 0 : t.findIndex((e => e === s[n]))) && void 0 !== u ? u : -1;
        if (-1 === c)
            return null;
        const p = t[c + 1];
        var f;
        const m = "uniqueId" === n ? null === (o = l.pillConfigs) || void 0 === o ? void 0 : o[p] : Object.values(null !== (f = l.pillConfigs) && void 0 !== f ? f : {}).find((e => e[n] === p))
          , v = m ? {
            ...m,
            location: r.location,
            fieldTypes: r.roleType
        } : Bl(i, {
            dimMetId: p,
            location: r.location,
            fieldTypes: r.roleType ? [r.roleType] : []
        });
        return v.drillInfo = {
            groupId: null === (a = Dl(r, e)) || void 0 === a || null === (d = a.drillInfo) || void 0 === d ? void 0 : d.groupId
        },
        v
    }
      , d = a(l.drillPath) ? o("dimMetId", l.layerDrillPath) : o("uniqueId", l.drillPath);
    return d ? Ce(e, (e => {
        const i = Oi(e, r.location)
          , t = i.findIndex((e => e.uniqueId === n));
        i.splice(t < 0 ? i.length : t + 1, 0, d),
        i.map(( (e, i) => ({
            ...e,
            index: i
        })))
    }
    )) : e
}
)(e, i, n.uniqueId)), bs)
  , Nu = wd(( (e, i, n) => ( (e, i, n) => {
    const t = ho(e)
      , r = t.find((e => e.uniqueId === n));
    if (!r)
        return e;
    const {drillPath: l=[], layerDrillPath: o=[]} = No({
        pill: r,
        dataSets: i,
        schema: e,
        pills: t
    }) || {};
    if (a(l) && a(o))
        return e;
    const d = t.filter((i => {
        var n, t, l, o;
        return (null === (n = Dl(i, e)) || void 0 === n || null === (t = n.drillInfo) || void 0 === t ? void 0 : t.groupId) === (null === (l = Dl(r, e)) || void 0 === l || null === (o = l.drillInfo) || void 0 === o ? void 0 : o.groupId) && i.location === r.location
    }
    ));
    let s = {};
    if (a(l)) {
        if (!a(o)) {
            const e = o.findIndex((e => e === r.dimMetId))
              , i = new Set(o.slice(e + 1));
            d.forEach((e => {
                i.has(e.dimMetId) && (s[e.uniqueId] = !0)
            }
            ))
        }
    } else {
        const e = l.findIndex((e => e === r.uniqueId));
        s = l.slice(e + 1).reduce(( (e, i) => ({
            ...e,
            [i]: !0
        })), {})
    }
    return Ce(e, (e => {
        e[r.location] = e[r.location].filter((e => !s[e.uniqueId]))
    }
    ))
}
)(e, i, n.uniqueId)), bs)
  , Lu = wd(( (e, i, n) => ( ({schema: e, dataSets: i, data: n, uniqueId: t, origin: r}) => {
    const l = wo({
        schema: e,
        dataSets: i,
        data: n,
        uniqueId: t,
        origin: r
    });
    return l ? Bo(l, e) : null
}
)({
    schema: e,
    dataSets: i,
    data: n.data,
    uniqueId: n.uniqueId,
    origin: n.origin
}) || e), bs, ps);
function Ru({location: e, fieldTypes: i, roleType: n, index: t}) {
    const r = K();
    return {
        uniqueId: r,
        format: {},
        originId: String(r),
        id: `dynamic${r}`,
        dimMetId: r,
        pillType: U.DYNAMIC,
        aggrConf: {},
        highlight: !1,
        location: e,
        index: t,
        unremovable: !1,
        sourceType: E.PLACEHOLDER,
        error: z.NOT_SET_DYNAMIC,
        roleType: null != n ? n : Dn(i) ? s.MEA : s.DIM
    }
}
function bu(e, i) {
    var n;
    return x({}, {
        ...i,
        notJoinQuery: !!bl(i) || e.notJoinQuery && !bl(e),
        sourceType: i.sourceType,
        fillDate: null !== (n = i.fillDate) && void 0 !== n && n,
        notDisplay: e.notDisplay
    }, Q(e, ["id", "uniqueId", "location", "pillType", "index", "unremovable", "menuInvisible"]))
}
const Du = wd((function(e, i, n) {
    const {location: t, fieldTypes: r, index: l, roleType: o} = n
      , a = Oi(e, t)
      , d = Ru({
        location: t,
        fieldTypes: r,
        index: null != l ? l : a.length,
        roleType: o
    })
      , s = Ji(a, null != l ? l : a.length, d).map(( (e, i) => ({
        ...e,
        index: i
    })));
    return Gi(e, t, s)
}
), bs, ps)
  , Su = wd(tu, ( (e, i, n) => function(e, i) {
    return Ce(e, (e => {
        var n;
        const {pillId: t, pillList: r, roleType: l, canEmpty: o, displayName: a, displayType: d} = i;
        if (!r.length)
            return;
        e.dynamicPillsMap || (e.dynamicPillsMap = {});
        const s = e.dynamicPillsMap[t];
        let u = null == s || null === (n = s.selectedPillIdList) || void 0 === n ? void 0 : n[0];
        (!s || u && "dynamic_select_empty" !== u && !r.map((e => e.id)).includes(u)) && (u = r[0].id),
        e.dynamicPillsMap[t] = {
            roleType: l,
            canEmpty: o,
            pillList: [...r],
            selectedPillIdList: [u],
            displayName: a,
            displayType: d
        };
        const c = r.find((e => e.id === u))
          , p = wi(e, !1).find((e => e.id === t));
        c && p && Object.assign(p, bu(p, c))
    }
    ))
}(e, n)), Qs, bs)
  , Ou = wd(nu, ( (e, i, n) => function(e, i) {
    const {dynamicPillId: n, selectedIdList: t, overriderPill: r} = i;
    return Ce(e, (e => {
        const {dynamicPillsMap: i} = e
          , l = [..._i(e), ...Si(e, {
            rawTableDynamicPillAsMeasure: !0
        })]
          , o = null == i ? void 0 : i[n];
        if (!i || !o)
            return;
        const a = r || o.pillList.find((e => e.id === t[0]));
        o.selectedPillIdList = t;
        const d = l.find((e => e.id === n));
        if (d) {
            let e = a;
            e || (e = Ru({
                location: d.location,
                roleType: d.roleType,
                index: d.index
            }),
            e.error = void 0,
            e.notJoinQuery = !0);
            const i = bu(d, e)
              , n = Object.keys(d)
              , t = Object.keys(i);
            n.forEach((e => {
                t.includes(e) || delete d[e]
            }
            )),
            t.forEach((e => {
                d[e] = i[e]
            }
            ))
        }
    }
    ))
}(e, n)), Ca, sa, bd, ld, ro)
  , _u = wd(Ca, sa, bd, ld, ro)
  , Pu = (e, i, n) => R(e, (e => {
    e.logicalTableConf = n.config
}
))
  , Bu = Pu
  , qu = wd(Pu)
  , wu = wd(Bu);
const xu = wd(Zs, (function(e, i, n) {
    const {uniqueId: t, location: r} = n
      , l = Xi(e, t);
    if (!l)
        return e;
    const {location: o} = l;
    return o === r ? function(e, i) {
        var n;
        const {uniqueId: t, location: r, keepOriginPill: l} = i
          , o = Xi(e, t)
          , a = Oi(e, r);
        var d;
        const s = null !== (d = i.index) && void 0 !== d ? d : a.length
          , u = {
            ...w(o),
            uniqueId: K()
        };
        var c;
        const p = null !== (c = null === (n = i.modifyMovedPill) || void 0 === n ? void 0 : n.call(i, u)) && void 0 !== c ? c : u
          , f = (l ? Ji(a, s, p) : Ji(a.map((e => e.uniqueId === t ? null : e)), s, o)).filter(Boolean).map(( (e, i) => ({
            ...e,
            index: i
        })));
        return Gi(e, r, f)
    }(e, n) : function(e, i, n) {
        var t, r;
        const {uniqueId: l, location: o, fieldTypes: a, keepOriginPill: u} = n
          , c = Xi(e, l);
        if (!c)
            return e;
        const {location: p, roleType: f} = c
          , m = ue(i, c)
          , v = Ol(m, a, f);
        let y = w(c);
        const I = v !== f;
        y.location = o,
        (u || I) && (y.uniqueId = K(),
        I && (y.roleType = v,
        v === s.DIM ? (y.aggrConf = {},
        y.format && (y.format.numFormat = void 0)) : y.aggrConf = Ke(m, e.display.type === d.TREND_TABLE),
        y.format && (y.format.timeFormat = void 0)),
        y.id = j(y.sourceType) ? y.id : ul({
            originId: y.dimMetId,
            aggrConf: y.aggrConf,
            mapKey: y.mapKey
        }));
        if (o === b.WHERE) {
            const n = ql(i, {
                dimMetId: m.id,
                mapKey: m.isMapKey ? m.expr : void 0,
                autoAggr: e.display.type !== d.RAW_TABLE,
                mixins: {
                    showEditComponent: !0,
                    preRelation: J.AND,
                    roleType: we.isMapOrArray(m.dataTypeName) ? s.DIM : c.roleType
                }
            });
            n.aggrConf = Dn(a) ? {} : c.aggrConf,
            y = {
                ...n,
                ...y
            },
            y.aggrConf = ge(y.aggrConf, ["timeGranularityNum", "timeGranularityType"])
        }
        var h, g;
        const E = null !== (g = null !== (h = n.index) && void 0 !== h ? h : null === (t = Oi(e, o)) || void 0 === t ? void 0 : t.length) && void 0 !== g ? g : 0
          , T = Oi(e, p)
          , C = Oi(e, o);
        let A = e;
        if (!u) {
            const e = T.filter((e => e.uniqueId !== l)).map(( (e, i) => ({
                ...e,
                index: i
            })));
            A = Gi(A, p, e)
        }
        C || (A = Gi(A, o, []));
        var M;
        const N = null !== (M = null === (r = n.modifyMovedPill) || void 0 === r ? void 0 : r.call(n, y)) && void 0 !== M ? M : y
          , L = Ji(C, E, N).map(( (e, i) => ({
            ...e,
            index: i
        })));
        return A = Gi(A, o, L),
        A
    }(e, i, n)
}
), Pd, bs, ps)
  , Gu = wd(eu, Ns, ( (e, i, n) => {
    const {uniqueId: t} = n
      , r = Oi(e, b.WHERE).find((e => e.uniqueId === t));
    if (!r)
        return e;
    const l = ( (e, i) => R(e, (e => {
        const n = new Xl(e)
          , t = n.get(i.uniqueId);
        t && (n.removeFilter(i),
        t.parents.forEach((e => {
            e.value.subFilterIds = [...e.children.keys()]
        }
        )))
    }
    )))(e.whereList, r)
      , o = function(e, i) {
        if (!e.length)
            return null;
        let n = null;
        for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (r.preRelation !== J.OR && (n = r),
            r.uniqueId === i.uniqueId)
                break
        }
        return n
    }(l, r)
      , a = io(l, o)
      , d = [o, ...a]
      , s = d.map((e => e.id));
    let u = l;
    return r.uniqueId === o.uniqueId && (u = u.map((e => a.some((i => i.uniqueId === e.uniqueId)) ? null : e)).filter(Boolean)),
    2 === d.length && (u = u.map((e => s.includes(e.id) ? {
        ...e,
        undraggable: !1
    } : e))),
    {
        ...e,
        whereList: u.map(( (e, i) => ({
            ...e,
            index: i
        })))
    }
}
), ( (e, i, n) => {
    var t;
    const {uniqueId: r} = n
      , l = Xi(e, r);
    if (!l)
        return e;
    if (!Ae(l))
        return e;
    if (null === (t = e.dynamicPillsMap) || void 0 === t ? void 0 : t[l.id]) {
        return {
            ...e,
            dynamicPillsMap: ge(e.dynamicPillsMap, l.id)
        }
    }
    return e
}
), ( (e, i, n) => ia(e, n)), Bd, ys, bs, ( (e, i, n) => ps(e, n)))
  , ku = wd(( (e, i, n) => Po(e, i, null == n ? void 0 : n.drillInfo, null == n ? void 0 : n.keepDepartmentDrillFilter) || e), bs, ps);
d.BAR,
d.BAR_PARALLEL,
d.BAR_PERCENT,
d.COLUMN,
d.COLUMN_PARALLEL,
d.COLUMN_PERCENT,
d.LINE,
d.AREA,
d.AREA_PERCENT,
d.DUAL_AXIS,
d.PIE,
d.ANNULAR,
d.ROSE,
d.BILATERAL,
d.COMBINATION,
d.SCATTER,
d.CIRCLE_VIEWS,
d.WORD_CLOUD,
d.FUNNEL,
d.RADAR,
d.SANKEY,
d.MEASURE_TREND,
d.TREND_TABLE,
d.PIVOT_TABLE,
je.INNER,
je.OUTER,
ze.DIMENSION,
ze.MEASURE,
ze.PERCENT,
Qe.ALL,
Qe.MIN,
Qe.MAX,
Qe.EXTREMUM,
Qe.ENDPOINT,
d.MEASURE_CARD,
d.COMPARATIVE_MEASURE_CARD,
d.MEASURE_TREND,
d.AREA_PERCENT,
d.BAR_PERCENT,
d.COLUMN_PERCENT,
d.MAP,
d.SCATTER_MAP,
d.GIS_HEAT_MAP,
d.GIS_MARK_MAP,
d.GIS_BAR_MAP,
d.GAUGE,
d.PROGRESS,
$e(!1);
const Uu = wd(iu, (function(e, i, n) {
    const {uniqueId: t, pill: r, needBeforeUpdateId: l=!0} = n
      , {fieldMap: o} = I.from(i);
    return R(e, (e => {
        const n = wi(e, !0).find((e => e.uniqueId === t));
        if (!n)
            return;
        const a = n.id
          , d = Object.assign({}, n, ge(r, ["uniqueId"]));
        var s;
        d.id = j(d.sourceType) || Xe(d.sourceType) ? d.id : ul({
            originId: d.dimMetId,
            aggrConf: null !== (s = d.aggrConf) && void 0 !== s ? s : {},
            exprTemplate: d.exprTemplate,
            mapKey: d.mapKey
        }),
        l && (d.beforeUpdateId = a);
        if (!_(n.exprTemplate, d.exprTemplate) && d.exprTemplate) {
            const e = o[n.dimMetId];
            d.expr = Je(d.exprTemplate.params, o, e.expr)
        }
        n.error !== z.ORIGIN_AGGR_CHANGED || Ze(n, i, e.display.type) || (d.error = void 0);
        var u;
        _(n.aggrConf, d.aggrConf) || (d.sourceType = _e(null !== (u = d.aggrConf) && void 0 !== u ? u : {}) ? E.RAW : E.AGGR);
        Object.assign(n, d);
        let c = e;
        if (n.location !== b.WHERE && n.location !== b.DETAIL) {
            const i = Ln(e);
            [b.COLUMN, b.ROW, b.DIMENSION, b.MEASURE, b.SUB_MEASURE, b.COLOR, b.SIZE, b.DETAIL].concat(i).forEach((i => {
                const n = Oi(e, i).map((e => e.id === d.id ? {
                    ...e,
                    ...ge(d, ["location", "drillInfo"]),
                    uniqueId: e.uniqueId,
                    id: e.id
                } : e));
                c = Gi(c, i, n)
            }
            ))
        }
        const p = n.id;
        Object.assign(e, function(e, i) {
            const {originPillId: n, nextPillId: t} = i;
            return R(e, (r => {
                var l, o;
                if (Ko(r) && r.percent && r.percent.calcConfList && r.percent.calcConfList.some((e => e.idList.includes(n)))) {
                    const e = r.percent.calcConfList.findIndex((e => e.idList.includes(n)))
                      , i = r.percent.calcConfList[e].idList.findIndex((e => e === n));
                    r.percent.calcConfList[e].idList[i] = t
                }
                if (jo(e)) {
                    const l = [...Ea(e), ...e.whereList];
                    r.periodCompare.forEach((e => {
                        if (l.find((e => e.location === i.pill.location)) && e.shiftId === n) {
                            const i = l.find((e => e.id === t));
                            !i || Oe.includes(i.aggrConf.timeGranularityType) ? e.shiftId = null : e.shiftId = t
                        }
                        if (e.idList.includes(n)) {
                            const i = e.idList.findIndex((e => e === n));
                            e.idList[i] = t
                        }
                    }
                    ))
                }
                if (zo(e) && !(null === (l = e.whereCompare) || void 0 === l ? void 0 : l.measureList.includes(_n)) && (null === (o = e.whereCompare) || void 0 === o ? void 0 : o.measureList.includes(n))) {
                    var a;
                    const i = null === (a = e.whereCompare) || void 0 === a ? void 0 : a.measureList.findIndex((e => e === n));
                    e.whereCompare.measureList[i] = t
                }
            }
            ))
        }(c, {
            originPillId: a,
            nextPillId: p,
            pill: n
        }))
    }
    ))
}
), Xs, bs, ps)
  , Fu = wd((function(e, i, n) {
    return R(e, (e => {
        const i = wi(e, !1);
        n.forEach((n => {
            const {pill: t} = n;
            var r;
            const l = Object.entries(null !== (r = e.dynamicPillsMap) && void 0 !== r ? r : {}).filter(( ([,e]) => e.pillList.some((e => e.id === t.id))));
            l.length > 0 && l.forEach((e => {
                var n;
                const [r,l] = e;
                if (l.pillList = l.pillList.map((e => e.id === t.id ? {
                    ...e,
                    format: t.format,
                    aggrConf: t.aggrConf,
                    notDisplay: t.notDisplay
                } : e)),
                t.id === (null === (n = l.selectedPillIdList) || void 0 === n ? void 0 : n[0])) {
                    const e = i.find((e => e.id === r));
                    e && Object.assign(e, {
                        ...e,
                        format: t.format,
                        aggrConf: t.aggrConf,
                        notDisplay: t.notDisplay
                    })
                }
            }
            ));
            const o = Ln(e);
            [b.COLUMN, b.ROW, b.DIMENSION, b.MEASURE, b.SUB_MEASURE].concat(o).forEach((i => {
                const n = Oi(e, i).map((e => e.id === t.id ? {
                    ...e,
                    format: t.format,
                    aggrConf: t.aggrConf,
                    notDisplay: t.notDisplay
                } : e))
                  , r = Gi(e, i, n);
                Object.assign(e, r)
            }
            ))
        }
        ))
    }
    ))
}
), bs, ps);
const $u = wd((function(e, i, n) {
    const {index: t} = n
      , r = Oi(e, b.WHERE)[t];
    let l = e;
    r && de(r) && (l = Gu(l, i, {
        uniqueId: r.uniqueId
    }));
    let o = t;
    if (function(e) {
        return Boolean(e.uniqueId)
    }(n)) {
        const {uniqueId: r} = n
          , a = Xi(e, r);
        l = xu(l, i, {
            location: b.WHERE,
            fieldTypes: [s.DIM, s.MEA],
            index: t,
            uniqueId: r
        });
        const d = Oi(l, b.WHERE)[t];
        l = Uu(l, i, {
            uniqueId: d.uniqueId,
            pill: {
                preRelation: J.OR
            }
        }),
        (null == a ? void 0 : a.location) === b.WHERE && (o = Oi(l, b.WHERE).findIndex((e => e.uniqueId === r)))
    } else {
        const {dimMetId: e, mapKey: r} = n;
        let o;
        const a = Oi(l, b.WHERE)[t - 1]
          , d = I.from(i).getFieldMap()[e];
        ei(a, i) && (null == d ? void 0 : d.roleType) === s.DIM && (o = s.MEA),
        l = Ds(l, i, {
            location: b.WHERE,
            fieldTypes: [s.DIM, s.MEA],
            index: t,
            dimMetId: e,
            mapKey: r,
            preRelation: J.OR,
            roleType: o
        })
    }
    const a = Oi(l, b.WHERE)[o]
      , d = Oi(l, b.WHERE)[o - 1];
    return l = Uu(l, i, {
        uniqueId: d.uniqueId,
        pill: {
            undraggable: !0
        }
    }),
    l = Uu(l, i, {
        uniqueId: a.uniqueId,
        pill: x(a, {
            undraggable: !0,
            filter: {
                option: {
                    isWhereInAggr: dl(d)
                }
            }
        })
    }),
    l
}
))
  , Wu = wd(( (e, i, n) => ( (e, i) => R(e, (e => {
    var n;
    const t = null === (n = e.measureTree) || void 0 === n ? void 0 : n.data
      , {groupKey: r} = i;
    return vl(null != t ? t : [], r, ( (e, i, n) => {
        if (n.splice(i, 1),
        e.isGroup && e.children)
            if (fl(e)) {
                const r = {
                    isGroup: !1,
                    uniqueId: t = e.uniqueId,
                    key: t.toString()
                };
                n.splice(i, 0, r, ...e.children)
            } else
                n.splice(i, 0, ...e.children);
        var t
    }
    )),
    e
}
)))(e, n)), (e => vs(e)), (e => fs(e)));
const Yu = wd(( (e, i, n) => function(e, i) {
    return {
        ...e,
        display: i
    }
}(e, n)))
  , Hu = wd(( (e, i, n) => ( (e, i) => R(e, (e => (e.measureTree = i.measureTree,
e))))(e, n)), (e => vs(e)), (e => fs(e)));
function Vu(e, i) {
    return n => {
        const t = i(e.schema, e.dataSets, n);
        return e.schema = t,
        e
    }
}
function Ku(e, i, n) {
    return i in e ? Object.defineProperty(e, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = n,
    e
}
const ju = class e {
    static from(i, n) {
        const t = Array.isArray(i) ? i : [i]
          , r = function(e, i) {
            return [Ho, oo, Yo, ro].reduce(( (e, n) => n(e, i)), e)
        }(n || ( (e=to) => ({
            columns: [],
            rows: [],
            dimensions: [],
            measures: [],
            subMeasures: [],
            whereList: [],
            colors: [],
            sizes: [],
            drill: [],
            parameters: [],
            whereCompare: void 0,
            periodCompare: [],
            referenceLine: [],
            display: {
                type: e,
                queryType: e,
                conf: ae(e),
                enableAdvisor: !0
            },
            reportFilterConfig: {
                structType: dt.LeftRight,
                layoutSize: ut.Normal
            }
        }))(), t);
        return new e(t,r)
    }
    cloneBuilder() {
        return new e(this.dataSets,this.schema)
    }
    if(e, i, n) {
        return e(this) ? i(this) : n ? n(this) : this
    }
    getSchema() {
        return this.schema
    }
    constructor(e, i) {
        Ku(this, "dataSets", void 0),
        Ku(this, "schema", void 0),
        Ku(this, "addPill", Vu(this, Ds)),
        Ku(this, "movePill", Vu(this, xu)),
        Ku(this, "updatePill", Vu(this, Uu)),
        Ku(this, "batchUpdatePillFormat", Vu(this, Fu)),
        Ku(this, "removePill", Vu(this, Gu)),
        Ku(this, "addDynamicPill", Vu(this, Du)),
        Ku(this, "updateDynamicFieldSelection", Vu(this, Ou)),
        Ku(this, "updateDynamicFieldConfig", Vu(this, Su)),
        Ku(this, "addOrFilterPillPlaceholder", Vu(this, ou)),
        Ku(this, "setOrFilterPill", Vu(this, $u)),
        Ku(this, "addCombinationFilterPill", Vu(this, ru)),
        Ku(this, "addPillToMeasureGroup", Vu(this, au)),
        Ku(this, "applySortRule", Vu(this, yu)),
        Ku(this, "resetSort", Vu(this, Iu)),
        Ku(this, "applyTopNRule", Vu(this, Eu)),
        Ku(this, "resetTopN", Vu(this, Tu)),
        Ku(this, "applyCombinedRule", Vu(this, du)),
        Ku(this, "resetCombined", Vu(this, su)),
        Ku(this, "applyPercentRule", Vu(this, uu)),
        Ku(this, "resetPercent", Vu(this, cu)),
        Ku(this, "applyWhereCompareRule", Vu(this, Cu)),
        Ku(this, "resetWhereCompare", Vu(this, Au)),
        Ku(this, "applyPeriodCompareRule", Vu(this, pu)),
        Ku(this, "resetPeriodCompare", Vu(this, fu)),
        Ku(this, "applyReferenceLineRule", Vu(this, mu)),
        Ku(this, "resetReferenceLine", Vu(this, vu)),
        Ku(this, "applyTableCalculationConfig", Vu(this, hu)),
        Ku(this, "resetTableCalculation", Vu(this, gu)),
        Ku(this, "drillDown", Vu(this, Lu)),
        Ku(this, "rollUp", Vu(this, ku)),
        Ku(this, "dimensionDrillDown", Vu(this, Mu)),
        Ku(this, "dimensionRollUp", Vu(this, Nu)),
        Ku(this, "updateDisplay", Vu(this, Yu)),
        Ku(this, "addLogicalTable", Vu(this, qu)),
        Ku(this, "updateLogicalTable", Vu(this, wu)),
        Ku(this, "updatePillsTree", Vu(this, Hu)),
        Ku(this, "unGroupPillTree", Vu(this, Wu)),
        this.dataSets = e,
        this.schema = i
    }
}
;
function zu({pill: e, coreVizData: i}) {
    var n, t;
    if (!i)
        return null;
    const {fieldMap: r={}} = i;
    return (null == r || null === (n = r[e.uniqueId]) || void 0 === n || null === (t = n.format) || void 0 === t ? void 0 : t.type) === ii ? r[e.uniqueId].format : null
}
function Qu(e, i, n) {
    return i in e ? Object.defineProperty(e, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = n,
    e
}
const Xu = new class {
    constructor() {
        Qu(this, "api", null),
        Qu(this, "setApi", (e => {
            this.api = e
        }
        )),
        Qu(this, "getApi", ( () => this.api))
    }
}
;
const Ju = (e, i) => {
    const n = w(i)
      , t = (e => {
        const i = [];
        return yl(e, (e => {
            e.isGroup && !fl(e) || i.push(e.uniqueId)
        }
        )),
        i
    }
    )(n);
    if (e.length === t.length)
        return n;
    return e.filter((e => e.sourceType === E.CALCULATION)).forEach((e => {
        n.push({
            isGroup: !1,
            key: String(e.uniqueId),
            uniqueId: e.uniqueId
        })
    }
    )),
    n
}
  , Zu = (e, i, n) => {
    const t = w(i);
    Il(t, (i => {
        var t;
        if (!0 === i.isGroup && !fl(i))
            return !1;
        const r = e.find((e => e.uniqueId === i.uniqueId));
        return !(null == r ? void 0 : r.miniChart) && (!1 === (null === (t = n[i.key]) || void 0 === t ? void 0 : t.visible) || (!0 === (null == r ? void 0 : r.notDisplay) || !0 === (null == r ? void 0 : r.notJoinQuery)))
    }
    ));
    return t.map((i => {
        if (i.isGroup) {
            var t, r, l;
            const o = i.uniqueId && null !== (l = null === (t = e.find((e => e.uniqueId === i.uniqueId))) || void 0 === t || null === (r = t.format) || void 0 === r ? void 0 : r.displayName) && void 0 !== l ? l : i.title;
            return {
                isGroup: !0,
                field: i.key,
                title: o,
                autoExpand: i.autoExpand,
                children: i.children ? Zu(e, i.children, n) : []
            }
        }
        return {
            isGroup: !1,
            field: i.key
        }
    }
    ))
}
  , ec = (e, i=void 0) => {
    var n;
    const {measuresGroups: t, measures: r} = e
      , l = (null != t ? t : []).map((e => e.filter((e => Zi(r, e))).map((e => `${e}`)))).filter((e => e.length > 1));
    return l && l.length > 0 ? (e => e.map((e => ({
        isGroup: !0,
        field: String(e[0]),
        children: e.slice(1, e.length).map(String).map((e => ({
            isGroup: !1,
            field: e
        })))
    }))))(l) : i && [d.TREND_TABLE, d.PIVOT_TABLE, d.TABLE].includes(e.display.type) && !0 === (null === (n = e.measureTree) || void 0 === n ? void 0 : n.enable) ? Zu(e.measures, Ju(e.measures, e.measureTree.data), i) : i ? ( (e, i) => {
        const n = e.measures.filter((e => !(e.notDisplay || e.roleType !== s.MEA || e.notJoinQuery && e.pillType !== U.PLACEHOLDER)));
        if (n.every((e => !G(e))))
            return [];
        const t = Yt(n, (e => e.id.toString()))
          , r = [];
        let l = 0;
        const o = new Map;
        for (; n.length > 0 && l < n.length; ) {
            var a;
            const s = n[l];
            if (G(s)) {
                const e = String(s.originId)
                  , i = String(s.uniqueId)
                  , a = t.get(e);
                if (a && G(a)) {
                    r.push({
                        isGroup: !1,
                        field: i
                    }),
                    n.splice(l, 1);
                    continue
                }
                var d;
                if (!t.has(null !== (d = null == e ? void 0 : e.toString()) && void 0 !== d ? d : "")) {
                    let t = o.get(e);
                    t ? t.push({
                        isGroup: !1,
                        field: i
                    }) : (t = [{
                        isGroup: !1,
                        field: i
                    }],
                    o.set(e, t),
                    r.push({
                        isGroup: !0,
                        children: t
                    })),
                    n.splice(l, 1),
                    l = 0;
                    continue
                }
                l += 1;
                continue
            }
            n.splice(l, 1),
            l = 0;
            const c = s.id
              , p = String(s.uniqueId)
              , f = ni(n, (e => e.originId === c))
              , m = f.map((e => String(e.uniqueId))).filter((e => void 0 !== e));
            var u;
            const v = null !== (u = null === (a = i[p]) || void 0 === a ? void 0 : a.alias) && void 0 !== u ? u : ""
              , y = f.map((n => {
                const t = String(n.uniqueId);
                var r;
                const {alias: l} = null !== (r = i[t]) && void 0 !== r ? r : {}
                  , {compactName: o} = n;
                if (Array.isArray(o) && 2 === o.length) {
                    if (o[1] === l) {
                        if (n.sourceType === E.CALCULATION) {
                            var a, d;
                            const i = null === (a = e.tableCalculation) || void 0 === a || null === (d = a.rules) || void 0 === d ? void 0 : d.find((e => e.id === n.id));
                            if (i)
                                return $a(i)
                        }
                        return o[0]
                    }
                    return null != l ? l : o[0]
                }
                return null != o ? o : l
            }
            )).map((e => `(${e})`));
            r.push({
                title: `${[v, ...y].join(" ")}`,
                field: p,
                isGroup: !0,
                children: m.map((e => ({
                    isGroup: !1,
                    field: e
                })))
            })
        }
        return r.every((e => {
            var i;
            return !e.isGroup || !(null === (i = e.children) || void 0 === i ? void 0 : i.length) || !e.field && e.children.length <= 1
        }
        )) ? [] : r
    }
    )(e, i) : []
}
  , {getFeatureConfig: ic} = re.get(le.Feature);
const nc = (e, i, n, t=!1) => {
    var r;
    const l = null !== (r = t ? i : Ei[i]) && void 0 !== r ? r : i;
    n[l] ? n[l].push(String(e)) : n[l] = [String(e)]
}
  , tc = (e, i, n) => {
    var t, r, l, o, a;
    const d = i.display.conf;
    if ((null === (t = Object.keys((null == d ? void 0 : d.timeGranularity) || {})) || void 0 === t ? void 0 : t.length) && `${e.uniqueId}` === Ti(n)) {
        return [e => {
            const t = Mi(e, n, i.display.conf)
              , r = Ai(t);
            return r ? r(e) : e
        }
        , []]
    }
    if ((null === (r = e.format) || void 0 === r || null === (l = r.numFormat) || void 0 === l ? void 0 : l.type) === Ci.CUSTOM) {
        var s, u;
        const {custom: i=[]} = null !== (u = null === (s = e.format) || void 0 === s ? void 0 : s.numFormat) && void 0 !== u ? u : {};
        return [e => {
            const n = i.find(( ({rules: i}) => Ni(i, e)));
            return (null == n ? void 0 : n.numFormat) ? Li(n.numFormat)(e) : e
        }
        , i]
    }
    if ((null === (o = null == n ? void 0 : n.fieldMap[e.uniqueId]) || void 0 === o || null === (a = o.format) || void 0 === a ? void 0 : a.type) === Ci.CUSTOM) {
        const {custom: i=[]} = null == n ? void 0 : n.fieldMap[e.uniqueId].format;
        return [e => {
            const n = i.find(( ({rules: i}) => Ni(i, e)));
            return (null == n ? void 0 : n.numFormat) ? Li(n.numFormat)(e) : e
        }
        , i]
    }
    var c, p, f, m;
    return [null !== (m = null !== (f = zu({
        pill: e,
        coreVizData: n
    })) && void 0 !== f ? f : null === (c = e.format) || void 0 === c ? void 0 : c.timeFormat) && void 0 !== m ? m : null === (p = e.format) || void 0 === p ? void 0 : p.numFormat, []]
}
;
function rc(e, i, n, t, r, l) {
    if (!e)
        return {
            ...ui
        };
    const o = function(e, i) {
        const n = Array.isArray(i) ? i : [i]
          , t = go(e);
        if (!t)
            return e;
        if (t.pillType === U.DYNAMIC) {
            var r;
            const i = pe(e.drill)
              , a = Ao(t, n, e);
            if (!a)
                return e;
            let d;
            var l;
            const u = null !== (l = null === (r = Dl(t, e).drillInfo) || void 0 === r ? void 0 : r.pillConfigs) && void 0 !== l ? l : {};
            var o;
            d = "uniqueId" === a.type ? u[i.dynamicDrillUniqueId] : null !== (o = Object.values(u).find((e => e.dimMetId === i.dimMetId))) && void 0 !== o ? o : Bl(n, {
                location: b.DYNAMIC_DIM,
                fieldTypes: [s.DIM],
                dimMetId: i.dimMetId
            });
            let c = Ce(e, (e => {
                var i, n;
                null === (i = e.dynamicPillsMap) || void 0 === i || null === (n = i[t.id]) || void 0 === n || n.pillList.unshift(d)
            }
            ));
            return c = ju.from(n, e).updateDynamicFieldSelection({
                dynamicPillId: t.id,
                selectedIdList: [d.id],
                overriderPill: d
            }).getSchema(),
            c = _u(c, n),
            c
        }
        return e
    }(i, null != n ? n : [])
      , u = function(e, i, n, t, r) {
        const l = null == r ? void 0 : r.dataFormatUnit
          , o = Ce(e.display.conf, (n => {
            const t = e => {
                var n;
                const t = I.from(null != i ? i : []).fieldMap[null == e ? void 0 : e.dimMetId];
                var r;
                return e ? null !== (r = null === (n = e.format) || void 0 === n ? void 0 : n.displayName) && void 0 !== r ? r : Sl(e, t, !1) : ""
            }
            ;
            if (n.axisDimension) {
                const i = e.dimensions[0]
                  , r = t(i);
                n.axisDimension = n.axisDimension.map((e => ({
                    ...e,
                    titleDeafult: r
                })))
            }
            n.axisMeasure && (n.axisMeasure = n.axisMeasure.map(( (i, n) => {
                let r;
                if (e.display.type === d.DUAL_AXIS) {
                    var o;
                    r = [e.measures, null !== (o = e.subMeasures) && void 0 !== o ? o : []][n].filter(Ki).map((e => t(e))).join(" & ")
                } else {
                    const i = e.measures[n];
                    r = t(i)
                }
                return i.numFormat && (i.numFormat.dataFormatUnit = l),
                {
                    ...i,
                    titleDeafult: r
                }
            }
            )));
            const r = n;
            if (r.combination) {
                var o;
                const {combination: e} = r;
                (null === (o = e.axisMeasure) || void 0 === o ? void 0 : o.numFormat) && ((null == e ? void 0 : e.axisMeasure.numFormat).dataFormatUnit = l),
                e.list && (e.list = e.list.map((e => (e.axisMeasure && (e.axisMeasure = e.axisMeasure.map((e => ((null == e ? void 0 : e.numFormat) && (e.numFormat.dataFormatUnit = l),
                e)))),
                e))))
            }
        }
        ))
          , a = {
            fieldMap: {},
            locationMap: {
                [vi.DIMENSION]: [],
                [vi.MEASURE]: []
            },
            displayConf: o,
            other: {},
            depends: []
        }
          , s = M(e.display.type)
          , {fieldMap: u, mapKeys: c} = At(null != i ? i : [])
          , p = Yi(e);
        for (const [I,g] of p.entries()) {
            var f, m;
            const n = Xi(e, g);
            if (!n)
                continue;
            const l = i && ue(i, n)
              , {location: o} = n
              , p = {
                ...n.format
            }
              , [A,M] = tc(n, e, r);
            var v, y;
            null === (f = a.depends) || void 0 === f || f.push(...M);
            const N = {
                index: I,
                id: String(g),
                pillId: n.id,
                alias: null == p ? void 0 : p.displayName,
                description: (null == p ? void 0 : p.showFieldDescr) && null !== (y = null !== (v = null == p ? void 0 : p.fieldDescr) && void 0 !== v ? v : null == l ? void 0 : l.descr) && void 0 !== y ? y : null,
                format: A,
                contentFormat: Q(p, ["contentType", "templateLink", "conditionalFormat"]),
                role: 0 === n.roleType ? yi.DIMENSION : yi.MEASURE,
                aggrConf: n.aggrConf,
                geoInfo: w(null == l ? void 0 : l.geoInfo),
                sourceType: n.sourceType,
                location: n.location.slice(0, n.location.length - 1),
                disableSort: Pe(n) || n.sourceType === E.CALCULATION || "calc" === (null == l ? void 0 : l.calcType),
                disableCombined: !lr(n, u, c, s),
                headerStyle: null === (m = n.format) || void 0 === m ? void 0 : m.headerStyle
            };
            var h;
            if (en(n))
                N.visible = !0,
                N.miniChart = n.miniChart,
                (null === (h = N.miniChart.measures) || void 0 === h ? void 0 : h.some((i => {
                    let n = nn(e, i);
                    if (n) {
                        var t;
                        const e = n.split("_");
                        return n = 2 === e.length ? e[1] : e[0],
                        null === (t = u[n]) || void 0 === t ? void 0 : t.isDesensitization
                    }
                    return !1
                }
                ))) && (N.miniChart.tooltip.visible = !1,
                N.miniChart.tooltip.disabled = !0);
            if ([d.TABLE, d.RAW_TABLE].includes(e.display.type) && (null == t ? void 0 : t.includes(Ii.TABLE_STYLE_HEADER_MENU))) {
                const e = Fi(n, l);
                Pe(n) || C(n) || (N.customMenu = [],
                N.customMenu.push(hi.MENU_DIMMET_INFO),
                (l && T.isNumber(l.dataTypeName) || T.isNumber(e) || T.isTemplate(e) || l && "calc" === l.calcType) && N.customMenu.push(hi.MENU_NUM_FORMAT),
                N.customMenu.push(hi.MENU_VISUAL_STYLE))
            }
            a.fieldMap[g] = gi(N, Z);
            const L = bi(e);
            nc(g, o, a.locationMap, L)
        }
        return a
    }(o, n, 0, l, e)
      , c = {};
    for (const a of Object.keys(e.fieldMap)) {
        var p, f, m, v, y, h;
        c[a] = {
            ...e.fieldMap[a],
            ...u.fieldMap[a],
            format: "function" == typeof (null === (p = u.fieldMap[a]) || void 0 === p ? void 0 : p.format) ? null === (f = u.fieldMap[a]) || void 0 === f ? void 0 : f.format : {
                ...null === (m = e.fieldMap[a]) || void 0 === m ? void 0 : m.format,
                ...null === (v = u.fieldMap[a]) || void 0 === v ? void 0 : v.format
            },
            ...(null === (y = e.fieldMap[a]) || void 0 === y ? void 0 : y.geoInfo) && {
                geoInfo: null === (h = e.fieldMap[a]) || void 0 === h ? void 0 : h.geoInfo
            }
        };
        const i = c[a].location;
        if (i && o && Array.isArray(n)) {
            const e = o[`${i}s`]
              , t = null == e ? void 0 : e.find((e => e.uniqueId === Number(a)));
            if (t && n) {
                const i = Lo(t, null != e ? e : [], n, o);
                c[a].drillStatus = i
            }
        }
        !Tt({
            dataSets: null != n ? n : [],
            featureKey: ht.CHARTSORT
        }).enabled && (c[a].disabledChartSortByServerDataSetsConfigure = !0)
    }
    let g = {
        ...e,
        origin: t,
        fieldMap: c,
        locationMap: u.locationMap,
        displayConf: u.displayConf,
        other: {
            ...e.other
        },
        hash: sl({
            displayOptionsDepends: u.depends
        })
    };
    return g = Ce(g, (e => {
        var i, t, r, l, s, u, p, f, m, v, y, h, g, E;
        if (e.chartType === d.TABLE || e.chartType === d.RAW_TABLE)
            e.pagination = {
                size: null !== (u = null === (r = o.pagination) || void 0 === r ? void 0 : r.size) && void 0 !== u ? u : e.displayConf.pageSize,
                offset: null !== (p = null === (l = o.pagination) || void 0 === l ? void 0 : l.offset) && void 0 !== p ? p : 0,
                total: null !== (f = null === (s = e.other) || void 0 === s ? void 0 : s.atLeast) && void 0 !== f ? f : 0
            };
        else if (e.chartType === d.PIVOT_TABLE) {
            var T, C, A, M;
            e.pagination = {
                size: e.displayConf.pageSize,
                offset: null !== (A = null === (T = o.pagination) || void 0 === T ? void 0 : T.offset) && void 0 !== A ? A : 0,
                total: null !== (M = null === (C = e.other) || void 0 === C ? void 0 : C.length) && void 0 !== M ? M : 0
            }
        }
        (e.referenceLine = o.referenceLine,
        e.forecast = o.forecast,
        d.MEASURE_CARD === e.chartType && (e.fieldGroups = ec(o)),
        d.TABLE === e.chartType || d.RAW_TABLE === e.chartType) && (e.displayConf.fieldTree = null === (m = o.measureTree) || void 0 === m ? void 0 : m.enable,
        !0 === (null === (v = o.measureTree) || void 0 === v ? void 0 : v.enable) ? e.fieldGroups = Zu(o.measures, Ju(o.measures, o.measureTree.data), c) : !0 === e.displayConf.compact && (e.fieldGroups = ec(o, e.fieldMap)));
        [d.PIVOT_TABLE, d.TREND_TABLE].includes(e.chartType) && (e.displayConf.fieldTree = null === (y = o.measureTree) || void 0 === y ? void 0 : y.enable,
        (null === (h = o.measureTree) || void 0 === h ? void 0 : h.enable) ? e.fieldGroups = Zu(o.measures, Ju(o.measures, o.measureTree.data), c) : e.displayConf.compact && (e.fieldGroups = ec(o, e.fieldMap)));
        if (e.other || (e.other = {}),
        [d.TABLE, d.RAW_TABLE, d.WATERFALL_CHANGE].includes(e.chartType)) {
            const i = Array.isArray(n) && ( (e, i) => Object.keys(Hs(e, i)))(o, n) || [];
            e.other.disableSort = i.includes(rl.SORT)
        }
        if (Do(e.chartType) && !bo(o) && (e.other.disabledDrills = [uo.DimenisionDrill]),
        [d.MAP, d.SCATTER_MAP].includes(e.chartType) && (null === (i = o.drill) || void 0 === i ? void 0 : i.length) && o.drill.length > 1 && !a(n)) {
            var N, L, R;
            const i = o.drill.length
              , t = o.drill[i - 1]
              , r = o.drill[i - 2]
              , l = e.fieldMap[t.uniqueId];
            var D;
            const a = null !== (D = r.dynamicDrillUniqueId) && void 0 !== D ? D : r.uniqueId
              , d = null === (N = o.whereList.find((e => {
                var i;
                return Me(e) && (null === (i = e.filter.option) || void 0 === i ? void 0 : i.originDrillUniqueId) === a && e.dimMetId === r.dimMetId
            }
            ))) || void 0 === N || null === (L = N.filter) || void 0 === L || null === (R = L.val) || void 0 === R ? void 0 : R[0];
            if (d) {
                var S, O;
                const e = I.from(n).fieldMap[r.dimMetId]
                  , i = null == e || null === (S = e.geoInfo) || void 0 === S || null === (O = S.geoMapList) || void 0 === O ? void 0 : O.find((e => e.geoValue === d));
                i && (null == l ? void 0 : l.geoInfo) && (l.geoInfo.geoFilter = null == i ? void 0 : i.geoId)
            }
        }
        [d.GIS_BAR_MAP].includes(e.chartType) && (e.other.barMaxHeight = 120,
        !(null === (g = o.colors) || void 0 === g ? void 0 : g.length) && (null === (E = o.dimensions) || void 0 === E ? void 0 : E.every((e => {
            var i;
            return null === (i = I.from(n).fieldMap[e.dimMetId]) || void 0 === i ? void 0 : i.geoInfo
        }
        ))) && (e.other.barMaxHeight = 100));
        if ([d.LINE].includes(e.chartType) && !e.isEmpty && (null === (t = o.periodCompare) || void 0 === t ? void 0 : t.length) > 0 && ( (e, i, n) => {
            var t;
            const r = Oi(i, b.DIMENSION)[0]
              , l = I.from(n).fieldMap[null == r ? void 0 : r.dimMetId];
            if (!["date", "datetime"].includes(null == l ? void 0 : l.dataTypeName))
                return;
            const o = ti(e)
              , a = e.displayConf;
            a.color || (a.color = ri.color),
            a.lineStyle || (a.lineStyle = li);
            const {colorScheme: d} = a.color
              , s = (null === (t = oi(e.origin === ai.VSCREEN).find((e => e.key === d))) || void 0 === t ? void 0 : t.colors) || [di];
            i.periodCompare.forEach((n => {
                var t;
                n.isFromPillMenu && (null === (t = n.configToDerivedPillRelations) || void 0 === t || t.forEach((n => {
                    const t = i.measures.find((e => e.id === n.derivedPillId))
                      , r = t && e.fieldMap[t.uniqueId]
                      , l = t && i.measures.find((e => e.id === t.originId))
                      , d = l && e.fieldMap[l.uniqueId];
                    if (r && d && (null == o ? void 0 : o.length)) {
                        const e = r.alias
                          , i = d.alias;
                        o.filter((i => i.endsWith(e))).forEach((n => {
                            const t = `${n.substring(0, n.lastIndexOf(e))}${i}`
                              , {colors: r} = a.color;
                            if (!Array.isArray(r) || !r.find((e => e.title === n))) {
                                const e = o.indexOf(t);
                                let i;
                                if (Array.isArray(r)) {
                                    const n = r.find((e => e.title === t));
                                    n ? i = n.color : (i = s[e % s.length],
                                    r.push({
                                        index: r.length,
                                        color: i,
                                        title: t
                                    }))
                                } else
                                    i = s[e % s.length],
                                    a.color.colors = [{
                                        index: 0,
                                        color: i,
                                        title: t
                                    }];
                                const l = si(i)
                                  , d = l.setAlpha(.6 * l.getAlpha()).toRgbString();
                                a.color.colors.push({
                                    index: a.color.colors.length,
                                    color: d,
                                    title: n
                                })
                            }
                            ["smooth", "lineWidth", "lineStyle", "symbol", "symbolSize"].forEach((e => {
                                const i = a.lineStyle
                                  , r = i[e];
                                if (!Array.isArray(r) || !r.find((e => e.title === n))) {
                                    let l, o;
                                    if (Array.isArray(i[e])) {
                                        const n = r.find((e => e.title === t));
                                        n ? l = n.value : (l = li[e],
                                        i[e].push({
                                            title: t,
                                            value: l
                                        }))
                                    } else
                                        l = r,
                                        i[e] = [{
                                            title: t,
                                            value: r
                                        }];
                                    switch (e) {
                                    case "smooth":
                                    case "symbol":
                                        o = l;
                                        break;
                                    case "lineWidth":
                                        o = Math.max(l - 1, 1);
                                        break;
                                    case "symbolSize":
                                        {
                                            const e = [2, 3, 4, 6, 8]
                                              , i = e.findIndex((e => e === l));
                                            o = e[Math.max(i - 1, 0)];
                                            break
                                        }
                                    case "lineStyle":
                                        o = "dashed"
                                    }
                                    i[e].push({
                                        title: n,
                                        value: o
                                    })
                                }
                            }
                            ))
                        }
                        ))
                    }
                }
                )))
            }
            ))
        }
        )(e, o, n),
        e.chartType === d.PIVOT_TABLE && 0 === o.measures.filter((i => {
            var n;
            return !i.notJoinQuery && !i.notDisplay && (null === (n = e.fieldMap[i.uniqueId]) || void 0 === n ? void 0 : n.visible)
        }
        )).length) {
            var _, P;
            const {locationMap: i, cells: n} = e
              , t = null === (_ = n[0]) || void 0 === _ || null === (P = _.value) || void 0 === P ? void 0 : P[0];
            t && (i.measure || (i.measure = []),
            i.measure.push(t))
        }
        if ([d.MAP, d.SCATTER_MAP].includes(e.chartType)) {
            var B, q, w;
            const i = `${window.location.origin}`
              , n = (null === (B = ic()) || void 0 === B ? void 0 : B.apiBasePath) || ""
              , t = "aeolus/api/v3/geo/geoJson";
            var x;
            const r = null !== (x = !!(null === (q = ci.getCurrentGray()) || void 0 === q || null === (w = q.parent) || void 0 === w ? void 0 : w.id)) && void 0 !== x && x ? "&aeolus_gray_env=aeolus-gray" : "";
            e.other.geoUrl = `${i}${n}/${t}?${r}`
        }
        e.other.apiManager = Xu,
        e.other.getQueryIdGenerator = pi,
        e.sort = fi(o),
        e.combined = o.combined
    }
    )),
    function(e, i) {
        return Ce(e, (e => {
            Di(i).forEach((i => {
                var n;
                const {uniqueId: t} = i;
                var r;
                const l = null !== (r = null == i || null === (n = i.format) || void 0 === n ? void 0 : n.displayName) && void 0 !== r ? r : i.name;
                l && (e.fieldMap[t] && (e.fieldMap[t].alias = l),
                e.aliasMap[t] && (e.aliasMap[t] = l))
            }
            ))
        }
        ))
    }(g, i)
}
const lc = (e, i) => {
    const {cells: t, fieldMap: r} = e
      , {dimension: l, majorMeasure: o, minorMeasure: a, specialValue: d, gapMode: s, conditionalFormat: u} = e.displayConf;
    if (0 === t.length)
        return {
            width: -1,
            height: -1
        };
    var c;
    const p = null !== (c = null == d ? void 0 : d.measures) && void 0 !== c ? c : mi.BRACKET_TXT
      , f = (i, t) => {
        const r = ( (e, i, t="field") => {
            var r;
            if (n(e))
                return;
            const l = null === (r = i.fieldMap[e]) || void 0 === r ? void 0 : r.format;
            let o;
            if (l && "auto"in l && !0 === (null == l ? void 0 : l.auto)) {
                var a;
                const n = null === (a = i.fieldMap[e]) || void 0 === a ? void 0 : a.autoFormat;
                o = null == n ? void 0 : n[t]
            }
            return null != o ? o : l
        }
        )(i, e, "field");
        return Ai(r, Ri[p])(t)
    }
      , m = t[0]
      , v = e.datasets[0][0][0];
    var y, I;
    const h = Sn(null !== (y = null == m ? void 0 : m.value) && void 0 !== y ? y : [], null !== (I = e.fieldGroups) && void 0 !== I ? I : [])
      , g = h.length * v.length;
    let E = 0
      , T = 0;
    const {titleSpacing: C, indicatorKey: A, indicatorTagSpacing: M, indicatorValue: N, secondaryTagSpacing: L, secondaryKeySpacing: R, secondarySpacing: b, paddingHorizontal: D, paddingVertical: S} = ( (e, i, n, t="loose", r) => "tight" === t ? {
        titleSpacing: e.fontSize / 8 + i.nameSize / 8,
        indicatorKey: i.nameSize / 8 + i.valueSize / 8,
        indicatorValue: i.valueSize / 8 + n.nameSize / 8,
        secondarySpacing: n.nameSize / 4,
        indicatorTagSpacing: i.valueSize / 4,
        secondaryKeySpacing: n.valueSize,
        secondaryTagSpacing: n.valueSize / 2,
        paddingHorizontal: r > 1 ? 10 : 0,
        paddingVertical: r > 1 ? 10 : 0
    } : "loose" === t ? {
        titleSpacing: e.fontSize / 4 + i.nameSize / 4,
        indicatorKey: i.nameSize / 4 + i.valueSize / 4,
        indicatorValue: i.valueSize / 4 + n.nameSize / 4,
        secondarySpacing: n.nameSize,
        indicatorTagSpacing: i.valueSize / 4,
        secondaryKeySpacing: n.valueSize,
        secondaryTagSpacing: n.valueSize / 2,
        paddingVertical: i.nameSize / 4 + i.valueSize / 4,
        paddingHorizontal: r > 1 ? 10 : 0
    } : "wide" === t ? {
        titleSpacing: e.fontSize / 2 + i.nameSize / 2,
        indicatorKey: i.nameSize / 4 + i.valueSize / 4,
        indicatorValue: i.valueSize / 2 + n.nameSize / 2,
        secondarySpacing: n.nameSize,
        indicatorTagSpacing: i.valueSize / 4,
        secondaryKeySpacing: n.valueSize,
        secondaryTagSpacing: n.valueSize / 2,
        paddingVertical: i.nameSize / 4 + i.valueSize / 4,
        paddingHorizontal: r > 1 ? 10 : 0
    } : void 0)(l, o, a, s, g);
    v.forEach((e => {
        e && h.forEach((i => {
            var n;
            let t = 0
              , d = 0;
            const s = null == m || null === (n = m.group) || void 0 === n ? void 0 : n[0];
            if (s && l.display) {
                const i = oc(e[s], l.fontSize);
                t = Math.max(t, i.width),
                d += i.height + C
            }
            if (i.length > 0) {
                var c;
                const n = ( (e, i, n) => {
                    var t;
                    let r = e;
                    const {foldInfo: l} = n;
                    return l && l.key && (l.value === e || (null === (t = l.value) || void 0 === t ? void 0 : t.includes(e))) && (r = i[l.id]),
                    r
                }
                )(i[0], e, m);
                var p;
                const l = oc(null !== (p = null === (c = r[n]) || void 0 === c ? void 0 : c.alias) && void 0 !== p ? p : "", o.nameSize)
                  , a = oc(f(n, e[n]), o.valueSize, "Byte Number")
                  , s = !!(null == u ? void 0 : u.find(( ({config: e, fields: i}) => i.includes(n) && e.type === k.TAG)));
                o.showName && (t = Math.max(t, l.width),
                d += l.height + A);
                const v = s ? a.width + o.valueSize + M : a.width;
                t = Math.max(t, v),
                d += a.height + N
            }
            let v = Number.MIN_VALUE
              , y = Number.MIN_VALUE;
            if (i.length > 1) {
                const n = i.some((e => !!(null == u ? void 0 : u.find(( ({config: i, fields: n}) => n.includes(e) && i.type === k.TAG)))));
                for (let t = 1; t < i.length; t++) {
                    var I;
                    const l = i[t];
                    var h;
                    const o = oc(null !== (h = null === (I = r[l]) || void 0 === I ? void 0 : I.alias) && void 0 !== h ? h : "", a.nameSize)
                      , s = oc(f(l, e[l]), a.valueSize, "Byte Number")
                      , u = n ? s.width + a.valueSize + 2 * L : s.width;
                    d += Math.max(o.height, s.height) + b,
                    v = Math.max(v, o.width),
                    y = Math.max(y, u)
                }
            }
            const g = v + y + R;
            t = Math.max(t, g),
            E = Math.max(t, E),
            T = Math.max(d, T)
        }
        ))
    }
    ));
    const O = l.columns
      , _ = (2 * D + E) * Math.min(O, g)
      , P = (2 * S + T) * Math.ceil(g / O);
    return {
        width: Math.min(_, i) + 10,
        height: P + 10
    }
}
;
function oc(e, i, n) {
    var t;
    if ("undefined" == typeof window) {
        let n = 0;
        for (let t = 0; t < e.length; t++)
            /[0-9]|\.|,/.test(e[t]) ? n += .6 * i : n += i;
        return {
            width: n,
            height: i + 4
        }
    }
    const r = document.createElement("span")
      , l = {
        width: 0,
        height: 0
    };
    return l.width = r.offsetWidth,
    l.height = r.offsetWidth,
    r.style.visibility = "hidden",
    r.style.fontSize = `${i}px`,
    n && (r.style.fontFamily = n),
    document.body.appendChild(r),
    void 0 !== r.textContent ? r.textContent = e : r.innerText = e,
    l.width = r.offsetWidth - l.width,
    l.height = r.offsetHeight - l.height,
    null === (t = r.parentNode) || void 0 === t || t.removeChild(r),
    l.width += 5,
    l
}
export {rc as completeVizData, lc as getMinRectOfCard, oc as getTextSize};
