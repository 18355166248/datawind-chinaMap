const e = {
    typo: "typo",
    fontFamily: "fontFamily",
    fontSize: "fontSize",
    fontWeight: "fontWeight",
    fontColor: "color",
    textAlign: "textAlign",
    characterSpace: "characterSpace",
    lineHeight: "lineHeight",
    verticalAlign: "verticalAlign",
    background: "background",
    chartShape: "chartShape",
    lineStyle: "lineStyle",
    lineSmooth: "lineSmooth",
    legendPosition: "legendPosition",
    numberAxisConfig: "numberAxisConfig",
    chartLine: "chartLine",
    chartMark: "chartMark",
    axisType: "axisType",
  },
  t = {
    color: "color",
    range: "range",
    enum: "enum",
    number: "number",
    string: "string",
    boolean: "boolean",
    panel: "panel",
    transition: "transition",
  };
var i = {
    title_cn: "点型",
    title_en: "Mark",
    type: t.enum,
    alias: e.chartMark,
    fieldName: "chartMark",
    items: [
      {
        title_cn: "圆",
        title_en: "Circle",
        value: "circle",
      },
      {
        title_cn: "空心圆",
        title_en: "Empty Circle",
        value: "point",
      },
      {
        title_cn: "方块",
        title_en: "Square",
        value: "square",
      },
      {
        title_cn: "菱形",
        title_en: "Diamond",
        value: "diamond",
      },
      {
        title_cn: "六边形",
        title_en: "Hexagon",
        value: "hexagon",
      },
      {
        title_cn: "三角形",
        title_en: "Triangle",
        value: "triangle",
      },
      {
        title_cn: "叉",
        title_en: "Cross",
        value: "cross",
      },
    ],
  },
  l = {
    title_cn: "线型",
    title_en: "Line Style",
    type: t.enum,
    alias: e.chartMark,
    fieldName: "lineStyle",
    items: [
      {
        title_cn: "实线",
        title_en: "solid",
        value: "Solid",
      },
      {
        title_cn: "虚线",
        title_en: "Dashed",
        value: "dashed",
      },
      {
        title_cn: "点线",
        title_en: "Dotted",
        value: "dotted",
      },
    ],
  },
  n = {
    title_cn: "转折方式",
    title_en: "Line Join Type",
    type: t.enum,
    alias: e.chartMark,
    fieldName: "lineJoinType",
    items: [
      {
        title_cn: "折线",
        title_en: "Polyline",
        value: "polyline",
      },
      {
        title_cn: "平滑",
        title_en: "Smooth",
        value: "smooth",
      },
    ],
  },
  a = {
    title_cn: "图例位置",
    title_en: "Legend Position",
    type: t.enum,
    alias: e.chartMark,
    fieldName: "legendPosition",
    items: [
      {
        title_cn: "左上",
        title_en: "Top Left",
        value: "topLeft",
      },
      {
        title_cn: "右上",
        title_en: "Top Right",
        value: "topRight",
      },
      {
        title_cn: "上中",
        title_en: "Top Middle",
        value: "topMiddle",
      },
      {
        title_cn: "左下",
        title_en: "Bottom Left",
        value: "bottomLeft",
      },
      {
        title_cn: "右下",
        title_en: "Bottom Right",
        value: "bottomRight",
      },
      {
        title_cn: "中下",
        title_en: "Bottom Middle",
        value: "bottomMiddle",
      },
      {
        title_cn: "左上",
        title_en: "Left Top",
        value: "leftTop",
      },
      {
        title_cn: "左中",
        title_en: "Left Center",
        value: "leftCenter",
      },
      {
        title_cn: "左下",
        title_en: "Left Bottom",
        value: "leftBottom",
      },
      {
        title_cn: "右上",
        title_en: "Right Top",
        value: "rightTop",
      },
      {
        title_cn: "右中",
        title_en: "Right Center",
        value: "rightCenter",
      },
      {
        title_cn: "右下",
        title_en: "Right Bottom",
        value: "rightBottom",
      },
    ],
  };
const o = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      chartMark: i,
      lineStyle: l,
      lineJoinType: n,
      legendPosition: a,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
var r = {
    title_cn: "形状",
    title_en: "Geometry",
    alias: e.geometry,
    fieldName: "geometry",
  },
  c = {
    title_cn: "背景色",
    title_en: "Background Color",
    alias: e.background,
    fieldName: "backgroundColor",
    type: t.color,
  },
  _ = {
    title_cn: "背景图",
    title_en: "Background Image",
    alias: e.backgroundImage,
    fieldName: "backgroundImage",
    type: t.string,
  },
  g = {
    title_cn: "透明度",
    title_en: "Opacity",
    alias: e.opacity,
    fieldName: "opacity",
    type: t.range,
    range: [0, 100],
    suffix: "%",
  };
const m = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      geometry: r,
      backgroundColor: c,
      backgroundImage: _,
      opacity: g,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
var u = {
    alias: e.typo,
    fieldName: "typo",
    title_cn: "文本样式",
    title_en: "Text Style",
    type: t.panel,
  },
  p = {
    title_cn: "字体",
    title_en: "Font Family",
    type: t.enum,
    items: [],
    alias: e.fontFamily,
    fieldName: "fontFamily",
  },
  d = {
    title_cn: "字号",
    title_en: "Font Size",
    type: t.number,
    min: 1,
    max: 1e3,
    mode: "integer",
    alias: e.fontSize,
    fieldName: "fontSize",
  },
  f = {
    title_cn: "字重",
    title_en: "Font Weight",
    type: t.enum,
    items: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "bold",
      "bolder",
      "normal",
    ].map(function (e) {
      return {
        value: e,
        title_en: e,
        title_cn: e,
      };
    }),
    alias: e.fontWeight,
    fieldName: "fontWeight",
  },
  s = {
    title_cn: "文字颜色",
    title_en: "Text Color",
    type: t.color,
    fieldName: "color",
    alias: e.fontColor,
  },
  y = {
    title_cn: "对齐",
    title_en: "Text Align",
    type: t.enum,
    alias: e.textAlign,
    fieldName: "textAlign",
    items: [
      {
        title_cn: "left",
        title_en: "left",
        value: "left",
      },
      {
        title_cn: "center",
        title_en: "center",
        value: "center",
      },
      {
        title_cn: "right",
        title_en: "right",
        value: "right",
      },
    ],
  },
  h = {
    title_cn: "竖直对齐",
    title_en: "Vertical Align",
    type: t.enum,
    items: [
      {
        title_cn: "上",
        title_en: "Top",
        value: "top",
      },
      {
        title_cn: "中",
        title_en: "Middle",
        value: "middle",
      },
      {
        title_cn: "下",
        title_en: "Bottom",
        value: "bottom",
      },
    ],
    alias: e.verticalAlign,
    fieldName: "verticalAlign",
  },
  v = {
    title_cn: "字符间距",
    title_en: "Character Space",
    alias: e.characterSpace,
    fieldName: "characterSpace",
    type: t.range,
    range: [0, 1e3],
  },
  S = {
    title_cn: "行高",
    title_en: "Line Height",
    type: t.range,
    range: [0, 1e3],
    alias: e.lineHeight,
    fieldName: "lineHeight",
  };
const b = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      typo: u,
      fontFamily: p,
      fontSize: d,
      fontWeight: f,
      textColor: s,
      textAlign: y,
      verticalAlign: h,
      characterSpace: v,
      lineHeight: S,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
export { b as a, o as c, m as g, e as p, t };
