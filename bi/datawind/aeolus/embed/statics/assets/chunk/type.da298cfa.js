import { ib as e, ic as t } from "../entry/index.7886b0f6.js";
const a = {
    category_cn: "自定义",
    category_en: "custom",
    editingSpace: ["default"],
    iconType: "customComponent",
  },
  n = (e, t) => ({
    ...a,
    ...e,
  }),
  i = (e) => e,
  c = (e) => e,
  r = (e) => e,
  o = (e) => e,
  s = (e) => e,
  l = (e) => e,
  u = (a) => {
    const n = [
        {
          title_cn: "点击",
          title_en: "Click",
          value: e.Click,
        },
        {
          title_cn: "双击",
          title_en: "Double Click",
          value: e.DbClick,
        },
        {
          title_cn: "加载完成",
          title_en: "Element Loaded",
          value: e.Loaded,
        },
      ],
      {
        attributes: i,
        description: c,
        renderer: r,
        events: o = n,
        chartConstraintRequest: s,
        analyticDeclaration: l,
        componentFilterDeclaration: u,
      } = a;
    return (
      (r.events = o),
      l && ((r.analyticDeclaration = l), (r.chartConstraintRequest = t.TABLE)),
      s && (r.chartConstraintRequest = s),
      u && (r.componentFilterDeclaration = u),
      {
        attributes: i,
        description: c,
        renderer: r,
      }
    );
  };
export { i as a, c as b, r as c, n as d, o as e, s as f, l as g, u as h };
