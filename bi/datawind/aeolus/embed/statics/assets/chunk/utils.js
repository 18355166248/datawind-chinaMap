function fW(t) {
  let e;
  return (
    (e = (null == t ? void 0 : t.mode)
      ? t.mode
      : (null == t ? void 0 : t.offset)
      ? "xgis"
      : ((null == t ? void 0 : t.zoom) && (null == t || t.center), "webgis")),
    e
  );
}
window.fW = fW;

function Fk(t) {
  return !![
    "loaded",
    "destroy",
    "resize",
    "viewportChange",
    "pan",
    "panStart",
    "panEnd",
    "zoom",
    "zoomStart",
    "zoomEnd",
    "rotate",
    "rotateStart",
    "rotateEnd",
    "pitch",
    "pitchStart",
    "pitchEnd",
    "hover",
    "select",
    "drill",
    "drillUp",
    "drillUpEnd",
    "drillDown",
    "drillDownEnd",
    "drillEnd",
  ].includes(t);
}
window.Fk = Fk;

var iV = Object.defineProperty,
  nV = Object.getOwnPropertyDescriptor,
  rV = (t, e, i, n) => {
    for (
      var r, o = n > 1 ? void 0 : n ? nV(e, i) : e, a = t.length - 1;
      a >= 0;
      a--
    )
      (r = t[a]) && (o = (n ? r(e, i, o) : r(o)) || o);
    return n && o && iV(e, i, o), o;
  };
window.rV = rV;

window.KB = {
  ITextService: Symbol.for("ITextService"),
  ILogService: Symbol.for("ILogService"),
  IEventEmitter: Symbol.for("IEventEmitter"),
  SceneID: Symbol.for("SceneID"),
  IEventService: Symbol.for("IEventService"),
  ITextureService: Symbol.for("ITextureService"),
  IShaderService: Symbol.for("IShaderService"),
};

var Xk = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable",
};
window.Xk = Xk;

function Ff(t, e) {
  if ("string" == typeof e) return t[e];
  {
    const i = e.length;
    let n,
      r,
      o = -1;
    for (; ++o < i && ((n = e[o]), Object.hasOwnProperty.call(t, n)); )
      r = t = t[n];
    return o === i ? r : void 0;
  }
}
window.Ff = Ff;

function uf(t) {
  return null == t;
}
function cf(t) {
  return !uf(t);
}
window.cf = cf;

function TA(t, e) {
  const i = -t,
    n = [-1, 1];
  return i + ((e - n[0]) / (n[1] - n[0])) * (t - i);
}
window.TA = TA;
