import { E as z } from "./EntityHostElement.e9904ea6.js";
import {
  ct as u,
  e6 as h,
  cV as p,
  eF as d,
  cx as f,
  i9 as g,
  ib as m,
  i2 as y,
  i8 as v,
  io as b,
  ij as x,
  cs as _,
  i as S,
  cw as M,
  ia as C,
  is as w,
  it as A,
  iy as E,
  iq as D,
  e7 as T,
  ic as P,
  cB as L,
  dq as I,
  hN as N,
} from "../entry/index.7886b0f6.js";
import { r as t } from "./index.es.020ae3ec.js";
import { e as s } from "./emitEvent.61fdb922.js";

class P2 {
  constructor({ executeCallback: t, revokeCallback: e }) {
    Object.defineProperty(this, "executeCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(this, "revokeCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.executeCallback = t),
      (this.revokeCallback = e);
  }
  execute() {
    this.executeCallback();
  }
  revoke() {
    this.revokeCallback();
  }
}
const L2 = new Map();
function I2(t) {
  var e;
  switch (t) {
    case window.hX.CHINA_GIS:
      return window.jX[
        null !== (e = x.getLocaleId()) && void 0 !== e ? e : "zh_CN"
      ];
    case window.hX.WOLRD_GIS:
      return "zh_CN" !== x.getLocaleId() && WX[x.getLocaleId()]
        ? WX[x.getLocaleId()]
        : {};
    case window.hX.CUSTOM_GIS:
    default:
      return {};
  }
}

var N2, R2;
((R2 = N2 || (N2 = {}))[(R2.NONE = 0)] = "NONE"),
  (R2[(R2.ONCE = 1)] = "ONCE"),
  (R2[(R2.LOOP = 2)] = "LOOP");

export class O2 extends z {
  constructor(t, e) {
    console.log("🚀 ~ O2:");
    super(t, e),
      Object.defineProperty(this, "lastDrillAdCode", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "tickMode", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: N2.NONE,
      }),
      Object.defineProperty(this, "tickTime", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "tickId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "comboTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "comboTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 200,
      }),
      Object.defineProperty(this, "drillEndCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: [],
      }),
      Object.defineProperty(this, "drillStartCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: [],
      }),
      Object.defineProperty(this, "preWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "preHeight", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "currentSlice", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "preViewportConfig", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "editingPlot", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      }),
      Object.defineProperty(this, "isInit", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "isInitGis", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "isInitAmap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "isInitNanhai", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "drillRange", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: [0, 3],
      }),
      Object.defineProperty(this, "propsWatch", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "preProperties", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      }),
      Object.defineProperty(this, "needDelayInit", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "elementDisplayObserver", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "lastCustomData", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "lastRegion", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "needUpgradeViewport", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "asyncFontsTask", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          gis: !1,
          nanhai: !1,
        },
      }),
      Object.defineProperty(this, "previousConfig", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "gisContextMapKey", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "interactionOperationEmit", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _(() => {
          var t;
          if (
            !(null === (t = this.variableContext) || void 0 === t
              ? void 0
              : t.gis)
          )
            return;
          const e = this.getRawViewportConfig();
          if (this.POMNode.operationEmit) {
            const t = new P2({
              executeCallback: () => {
                this.setViewportConfig(e);
              },
              revokeCallback: () => {
                this.setViewportConfig(this.preViewportConfig);
              },
            });
            this.POMNode.operationEmit(t);
          }
          this.preViewportConfig = e;
        }, 200),
      }),
      Object.defineProperty(this, "drill", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: async (t) => {
          if ("-1" === t) this.drillUp();
          else if (rQ(t)) await this.drillUp(window.ZY);
          else if (t.includes($Y)) {
            const e = t.split($Y)[1];
            this.variableContext.regionData[e] && (await this.drillRegion(e));
          } else {
            const e = await window.nQ(t, this.variableContext.gis);
            await this.drillDownSingle(e);
          }
        },
      }),
      Object.defineProperty(this, "drillUp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: async (t) => {
          var e;
          const { baseMapLayer: i } =
            null === (e = this.variableContext.gis) || void 0 === e
              ? void 0
              : e.layerManager;
          await i.drillUp(t, () => {});
        },
      }),
      (this.propsWatch = window.AZ.createPropsWatch()),
      this.initPropsWatchRule(),
      this.observeElementDisplay();
  }
  render(t) {
    super.render(t);
    const e =
      this.POMNode.width !== this.preWidth ||
      this.POMNode.height !== this.preHeight;
    if (t || !1 !== this.isInit || !e)
      if (t || !1 === this.isInit) {
        let t;
        switch (
          (this.editMode === g.View
            ? (this.gisContextMapKey = `${this.renderer.getScreenId()}-${
                this.POMNode.id
              }`)
            : (this.gisContextMapKey = this.POMNode.id),
          this.upgradeCompatible(),
          this.POMNode.renderType)
        ) {
          case hX.CHINA_GIS:
            t = window.PX.presets;
            break;
          case hX.WOLRD_GIS:
            t = yQ.presets;
            break;
          case hX.CUSTOM_GIS:
            t = gQ.presets;
        }
        if (
          ((this.POMNode.properties = window.IX(t, this.POMNode.properties)),
          !window.UZ(this))
        )
          return void (this.needDelayInit = !0);
        const e = L2.get(this.gisContextMapKey);
        this.editMode === g.View && e ? this.animateInit() : this.createInit(),
          this.POMNode.viz || (this.POMNode.viz = {});
      } else
        this.isInit &&
          (e
            ? ((this.preWidth = this.POMNode.width),
              (this.preHeight = this.POMNode.height))
            : this.update());
  }
  upgradeCompatible() {
    !this.POMNode.properties.viewport &&
      this.POMNode.data.viewportConfig &&
      (this.needUpgradeViewport = !0);
  }
  observeElementDisplay() {
    const t = this.dom;
    (this.elementDisplayObserver = new MutationObserver((t) => {
      t.forEach((t) => {
        var e = t.target;
        e &&
          "block" == e.style.display &&
          this.needDelayInit &&
          (this.render(!0), (this.needDelayInit = !1));
      });
    })),
      this.elementDisplayObserver.observe(t, {
        attributes: !0,
        childList: !1,
        subtree: !1,
        attributeOldValue: !1,
        attributeFilter: ["style"],
      });
  }
  createInit() {
    (this.dom.innerHTML = ""), this.clearError(), this.initState();
    const t = document.createElement("div"),
      e = document.createElement("div");
    (e.style.width = "100%"),
      (e.style.height = "100%"),
      (e.style.willChange = "width,height"),
      (this.variableContext = {
        ...this.variableContext,
        div: e,
        ghostDiv: t,
        tipsPool: {},
        gis: null,
        amapLayer: null,
        nanhaiLayer: null,
        regionData: {},
      }),
      this.dom.append(e),
      this.initGis();
  }
  animateInit() {
    var t;
    (this.currentSlice = this.POMNode.slices[0]),
      (this.preViewportConfig = this.POMNode.data.viewportConfig),
      this.POMNode.slices.forEach((t) => {
        t.editingSpace = "gisSurface";
      });
    const e = L2.get(this.gisContextMapKey);
    (this.variableContext = e),
      this.dom.append(this.variableContext.div),
      null === (t = this.variableContext.gis) ||
        void 0 === t ||
        t.tickSystem.start(),
      this.initHandle();
  }
  initState() {
    var t;
    (this.isInit = !1),
      (this.isInitGis = !1),
      (this.isInitAmap = !1),
      (this.isInitNanhai = !1),
      (this.lastDrillAdCode = null),
      (this.drillEndCallback = []),
      (this.drillStartCallback = []),
      null === (t = this.variableContext.gis) || void 0 === t || t.destroy(),
      (this.variableContext = {
        ...this.variableContext,
        div: null,
        ghostDiv: null,
        tipsPool: {},
        gis: null,
        amapLayer: null,
        nanhaiLayer: null,
        regionData: {},
      }),
      (this.preProperties = u(this.properties)),
      (this.preWidth = this.POMNode.width),
      (this.preHeight = this.POMNode.height),
      (this.currentSlice = this.POMNode.slices[0]),
      (this.preViewportConfig = this.POMNode.data.viewportConfig),
      this.POMNode.slices.forEach((t) => {
        t.editingSpace = "gisSurface";
      });
  }
  getRealDPR() {
    return (
      (window.devicePixelRatio ? window.devicePixelRatio : 1) *
      this.renderer.getScale()[0]
    );
  }
  async initGis() {
    const {
        amap: { enable: e },
        nanhai: { enable: i },
      } = this.properties,
      { div: n } = this.variableContext,
      r = {
        common: {
          visible: !1,
        },
        districtStyle: {
          heightScale: 0,
          bottomStroke: {
            width: 0,
          },
        },
        data: await this.getDataConfig(),
        drill: await this.getDrillConfig(),
        viewClip: this.getViewClipConfig(),
        poi: {
          major: {
            aliasMap: I2(this.POMNode.renderType),
          },
        },
      },
      o = {
        containerDom: n,
        globalVariable:
          this.editMode === g.Edit ||
          window.location.href.includes("showToolbar=true"),
        viewportConfig: this.getViewportConfig(),
        lightConfig: this.getLightConfig(),
        sceneConfig: window.IX(
          {
            logo: {
              visible: !1,
            },
            background: {
              transparent: !0,
            },
          },
          this.getSceneConfig()
        ),
        baseMapLayer: window.IX(r, this.getBaseLayerConfig()),
      };

    (this.variableContext.gis = new window.IW(o)),
      this.variableContext.gis
        .then(() => {
          var n;
          if (((this.isInitGis = !0), this.needUpgradeViewport)) {
            const e =
              null === (n = this.variableContext.gis) || void 0 === n
                ? void 0
                : n.viewportSystem.get();
            (this.POMNode.properties.viewport = {
              centerLng: t(e.center[0], 6),
              centerLat: t(e.center[1], 6),
              zoom: t(e.zoom, 2),
              pitch: t(e.pitch, 0),
              rotation: t(e.rotation, 0),
            }),
              (this.needUpgradeViewport = !1);
          }
          e || i || this.initHandle(),
            i && this.setNanhaiEnable(),
            e && this.setAMapEnable();
        })
        .catch((t) => {
          let e = t.message;
          if ("地图数据加载失败" === e)
            e = S("地图数据加载失败，请确保地图数据源配置正常");
          this.renderGisError(e);
        });
  }
  renderGisError(t) {
    const e = new y(v.RenderError, t);
    this.variableContext &&
      ((this.variableContext.tipsPool[this.POMNode.id] = e), this.renderTips()),
      console.error(t);
  }
  tickOnce() {
    this.editMode !== g.View &&
      this.tickMode === N2.NONE &&
      ((this.tickMode = N2.ONCE),
      (this.tickId = window.requestAnimationFrame(() => {
        if (this.variableContext) {
          const { gis: t } = this.variableContext;
          null == t || t.tickSystem.tick();
        }
        this.tickMode = N2.NONE;
      })));
  }
  tickLoop(t) {
    if (this.editMode !== g.View)
      if (this.tickMode !== N2.LOOP) {
        const e = Date.now(),
          i = () => {
            this.tickTime < 4e3
              ? ((this.tickMode = N2.LOOP),
                (this.tickId = window.requestAnimationFrame(() => {
                  if (this.variableContext) {
                    const { gis: t } = this.variableContext;
                    null == t || t.tickSystem.tick();
                  }
                  const t = Date.now();
                  (this.tickTime = t - e), i();
                })))
              : ((this.tickTime = 0), (this.tickMode = N2.NONE), t && t());
          };
        i();
      } else this.tickTime = 0;
  }
  initHandle(t = !0) {
    var e;
    const { gis: i } = this.variableContext;
    this.asyncFontsTask.gis && this.updateGisFonts(),
      this.asyncFontsTask.nanhai && this.updateNanhaiFonts(),
      this.editMode !== g.View &&
        (null == i || i.tickSystem.pause(), this.tickLoop()),
      this.renderLayer(),
      M(this.preViewportConfig) &&
        (this.preViewportConfig =
          null === (e = this.variableContext.gis) || void 0 === e
            ? void 0
            : e.viewportSystem.get()),
      this.initEventListener(),
      (this.isInit = !0),
      s.call(this, b.Loaded),
      L2.set(this.gisContextMapKey, this.variableContext);
  }
  initEventListener() {
    const { gis: t } = this.variableContext;
    null == t ||
      t.on("resize", (e) => {
        var i;
        e.width &&
          e.height &&
          (this.setViewportConfig(),
          null == t || t.layerManager.baseMapLayer.scaleAdaptation(!1),
          null === (i = this.POMNode) ||
            void 0 === i ||
            i.slices.forEach((t) => {
              t.children
                .filter(
                  (t) =>
                    "@dp/aeolian-package-geography://informationLabel" ===
                    t.renderType
                )
                .forEach((t) => {
                  var e;
                  null === (e = t.layer) ||
                    void 0 === e ||
                    e.updateLayerInteractive();
                });
            }),
          this.tickOnce());
      }),
      null == t ||
        t.layerManager.baseMapLayer.on("click", (e) => {
          var i;
          if (this.comboTimer)
            if (
              (clearTimeout(this.comboTimer),
              (this.comboTimer = setTimeout(() => {
                this.comboTimer = void 0;
              }, this.comboTimeout)),
              e)
            ) {
              let n = e.properties.alias;
              const r =
                !(null == t
                  ? void 0
                  : t.layerManager.baseMapLayer.currentRegion) &&
                Object.values(this.variableContext.regionData).find((t) =>
                  t.child.includes(e.properties.id)
                );
              r && (n = $Y + r.name);
              const o =
                null !== (i = t.layerManager.baseMapLayer.currentLevel) &&
                void 0 !== i
                  ? i
                  : iX.country;
              s.call(this, b.AreaDbClick, {
                region: n,
                currentLevel: o,
                maxLevel: 4,
              });
            } else s.call(this, b.OutSideAreaDbClick, {});
          else
            this.comboTimer = setTimeout(() => {
              var i;
              if (((this.comboTimer = void 0), e)) {
                let n = e.properties.alias;
                const r =
                  !(null == t
                    ? void 0
                    : t.layerManager.baseMapLayer.currentRegion) &&
                  Object.values(this.variableContext.regionData).find((t) =>
                    t.child.includes(e.properties.id)
                  );
                r && (n = $Y + r.name);
                const o =
                  null !== (i = t.layerManager.baseMapLayer.currentLevel) &&
                  void 0 !== i
                    ? i
                    : iX.country;
                s.call(this, b.AreaClick, {
                  region: n,
                  currentLevel: o,
                  maxLevel: 4,
                });
              } else s.call(this, b.OutSideAreaClick, {});
            }, this.comboTimeout);
        }),
      null == t ||
        t.layerManager.baseMapLayer.on("drill", async (t) => {
          this.setNanhaiVisible(t.properties.currentCode),
            this.drillStartCallback.forEach((e) => e(t.properties.currentCode));
        }),
      null == t ||
        t.layerManager.baseMapLayer.on("drillEnd", async (t) => {
          this.storeViewport(),
            this.drillEndCallback.forEach((e) => e(t.properties.currentCode));
        }),
      null == t ||
        t.controlsSystem.controls.addEventListener(
          "start",
          this.interactionOperationEmit
        ),
      this.editMode !== g.View &&
        (null == t ||
          t.on("viewportChange", () => {
            "gisSurface" === this.renderer.page.editingSpace && this.tickOnce();
          }));
  }
  clearEventListener() {
    var t, e, i, n, r, o;
    if (null === (t = this.variableContext) || void 0 === t ? void 0 : t.gis) {
      const t =
        null ===
          (i =
            null === (e = this.variableContext.gis) || void 0 === e
              ? void 0
              : e.layerManager) || void 0 === i
          ? void 0
          : i.baseMapLayer;
      t &&
        (t.off("click"),
        t.off("dblclick"),
        t.off("drill"),
        t.off("drillEnd"),
        t.off("drillUpEnd"),
        t.off("drillDownEnd")),
        null === (n = this.variableContext.gis) ||
          void 0 === n ||
          n.controlsSystem.controls.removeEventListener(
            "start",
            this.interactionOperationEmit
          ),
        null ===
          (o =
            null === (r = this.variableContext) || void 0 === r
              ? void 0
              : r.gis) ||
          void 0 === o ||
          o.off("viewportChange");
    }
  }
  async update() {
    const { gis: t } = this.variableContext;
    t &&
      (this.propsWatch.compare(this.preProperties, this.properties),
      (this.preProperties = u(this.properties)));
  }
  renderTips() {
    if (this.variableContext) {
      const t = this.variableContext.tipsPool;
      if (Object.keys(t).length > 0) {
        const e = Object.values(t),
          i = e.reduce((t, e) => t + e.message, ""),
          n = e[e.length - 1].type;
        super.renderTips(new y(n, i));
      } else this.removeTips();
    }
  }
  getSceneConfig() {
    const { componentBackground: t } = this.properties;
    return {
      dpr: this.getRealDPR(),
      background: {
        transparent: !(null == t ? void 0 : t.hasColor),
        color: t.backgroundColor,
      },
    };
  }
  setSceneConfig() {
    const { gis: t } = this.variableContext,
      e = this.getSceneConfig();
    null == t || t.sceneSystem.set(e);
  }
  getViewportConfig() {
    const { interaction: t } = this.properties,
      {
        sceneChangeEnable: e,
        zoomEnable: i,
        translationEnable: n,
        pitchEnable: r,
        rotationEnable: o,
      } = t,
      a = this.editMode !== g.View;
    let s;
    if (this.needUpgradeViewport)
      s = {
        ...this.POMNode.data.viewportConfig,
        enableZoom: a || i,
        enablePitch: a || r,
        enableRotate: a || o,
        enablePan: a || n,
        lock: !a && !e,
        drillSave: !0,
      };
    else {
      const { viewport: t } = this.properties,
        { centerLng: l, centerLat: u } = t;
      s = {
        ...t,
        center: [l, u],
        enableZoom: a || i,
        enablePitch: a || r,
        enableRotate: a || o,
        enablePan: a || n,
        lock: !a && !e,
        drillSave: !0,
      };
    }
    return s;
  }
  getRawViewportConfig() {
    var e;
    const i =
      null === (e = this.variableContext.gis) || void 0 === e
        ? void 0
        : e.viewportSystem.get();
    return {
      center: [t(i.center[0], 6), t(i.center[1], 6)],
      zoom: t(i.zoom, 2),
      pitch: t(i.pitch, 0),
      rotation: t(i.rotation, 0),
      maxZoom: i.maxZoom,
      minZoom: i.minZoom,
      maxPitch: i.maxPitch,
      minPitch: i.minPitch,
      maxRotation: i.maxRotation,
      minRotation: i.minRotation,
    };
  }
  setViewportConfig(t) {
    if (this.variableContext) {
      const { gis: e } = this.variableContext,
        i = null != t ? t : this.getViewportConfig();
      null == e || e.viewportSystem.setWebGisCameraState(i);
    }
  }
  ayncViewportConfig(t) {
    (this.properties.viewport.centerLng = t.center[0]),
      (this.properties.viewport.centerLat = t.center[1]),
      (this.properties.viewport.zoom = t.zoom),
      (this.properties.viewport.pitch = t.pitch),
      (this.properties.viewport.rotation = t.rotation);
  }
  setLightConfig() {
    const { gis: t } = this.variableContext,
      e = this.getLightConfig();
    null == t || t.lightSystem.set(e);
  }
  getLightConfig() {
    const { light: t } = this.properties;
    return {
      ambient: {
        color: t.ambient.color,
        intensity: t.ambient.intensity,
      },
      directional: {
        color: t.directional.color,
        intensity: t.directional.intensity,
        x: t.directional.x,
        y: t.directional.y,
        z: t.directional.z,
        shadow: {
          enabled: t.shadow.enabled,
          color: t.shadow.color,
        },
      },
    };
  }
  getBaseLayerConfig() {
    const {
        baseMapLayer: t,
        districtOutline: e,
        innerShadow: i,
        extrude: n,
        boundaryStreamer: r,
        provinceOutline: o,
        mapStyle: a,
        common: s,
      } = this.properties,
      { labelEnable: l = !0 } = a,
      u = null == t ? void 0 : t.show,
      c = {
        common: {
          visible: u,
          zoomRange: [s.zoomMin, s.zoomMax],
        },
        districtStyle: {
          enabled: !0,
          stroke: {
            color: a.borderColor,
          },
          fill: {
            color: a.backgroundColor,
            metalness: a.metalness,
            roughness: a.roughness,
            map:
              "mapStyle-image-tab-1" === a.backgroundType
                ? this.replaceStaticTemplatePath(a.backgroundImage)
                : a.backgroundTile,
            normalMap:
              "mapStyle-tile-tab-1" === a.normalType
                ? this.replaceStaticTemplatePath(a.normalImage)
                : a.normalTile,
            normalScale: a.normalScale,
          },
          innerShadow: {
            enabled: i.enable,
            // shadowColor: i.color,
            // shadowBlurScale: i.width,
            shadowColor: "rgba(252,228,14,1)",
            shadowBlurScale: 0.1,
          },
          boundaryStreamer: {
            enabled: r.enable,
            lineLength: r.length,
            lineWidth: r.width,
            lineColor: r.endColor,
            lineHeadColor: r.headColor,
            lineHeadRatio: 0.2,
            speed: r.speed,
          },
        },
        drill: {},
        poi: {
          major: {
            enabled: l,
            color: a.fontStyle.color,
            fontWeight: a.fontStyle.fontWeight,
            fontSize: a.fontStyle.fontSize,
            aliasMap: I2(this.POMNode.renderType),
            fontFamily: window.RX(a.fontStyle.fontFamily),
          },
          coverEnable: !a.coverEnable,
        },
      };
    return (
      (c.districtStyle.heightScale = u ? n.height : 0),
      (c.districtStyle.sideConfig = {
        colorConfig: {
          range: [n.topColor, n.bottomColor],
        },
      }),
      e &&
        (c.districtStyle.stroke = {
          ...c.districtStyle.stroke,
          opacity: e.opacity,
          width: e.width,
        }),
      o &&
        (c.subDistrictStyle = {
          stroke: {
            opacity: o.opacity,
            width: o.width,
            color: o.borderColor,
          },
        }),
      c
    );
  }
  async setBaseLayer() {
    const { gis: t } = this.variableContext,
      e = this.getBaseLayerConfig();
    f(e, this.previousConfig) ||
      ((this.previousConfig = e),
      null == t || t.layerManager.baseMapLayer.set(e));
  }
  async getDataConfig() {
    const {
      data: { region: t },
    } = this.properties;
    let e;
    switch (
      (this.buildRegionData(), (this.lastRegion = t), this.POMNode.renderType)
    ) {
      case hX.CHINA_GIS:
        e = {
          district: {
            type: window.xk.GEOBUF_URL,
            data: window.aQ("countryborder_208_gc.pbf"),
          },
          subDistrict: {
            type: window.xk.GEOBUF_URL,
            data: window.aQ("district_100000_1_gc.pbf"),
          },
          region: this.variableContext.regionData,
          nameMap: window.UX,
        };
        break;
      case hX.WOLRD_GIS:
        e = {
          district: null,
          subDistrict: {
            type: window.xk.GEOBUF_URL,
            data: window.aQ("bd_world_without_antarctica.pbf"),
            simplify: {
              enabled: !0,
              tolerance: 0.1,
            },
          },
          region: this.variableContext.regionData,
        };
        break;
      case hX.CUSTOM_GIS:
        const {
            data: {
              custom: { data: t },
            },
          } = this.properties,
          i = await fetch(this.replaceStaticTemplatePath(t.url)),
          n = await i.json();
        (e = {
          district: null,
          subDistrict: {
            type: "geojson",
            data: n[n.rootId],
            simplify: {
              enabled: !1,
            },
          },
          region: this.variableContext.regionData,
        }),
          (this.lastCustomData = u(t));
    }
    return e;
  }
  getViewClipConfig() {
    const {
      nanhai: { enable: t },
    } = this.properties;
    if (t) {
      const t = window.cX,
        e = Object.values(this.variableContext.regionData).find((t) =>
          t.child.includes(JY)
        );
      return e && (t[e.adcode] = window.cX[window.ZY]), t;
    }
    return null;
  }
  async getDrillConfig() {
    const {
      interaction: { initialLevelName: t },
    } = this.properties;
    let e;
    switch (this.POMNode.renderType) {
      case hX.CHINA_GIS:
        const i = await window.nQ(t, this.variableContext.gis);
        (e = {
          enabled: !0,
          level: {
            range: this.drillRange,
            adcode: i,
          },
          data: {
            0: {
              type: window.xk.GEOBUF_URL,
              data: window.aQ("districtaggregate_province_kld_gc.pbf"),
            },
            1: {
              type: window.xk.GEOBUF_URL,
              data: window.aQ("districtaggregate_city_kld_gc.pbf"),
            },
            2: {
              type: window.xk.GEOBUF_URL,
              data: window.aQ("districtaggregate_county_kld_gc.pbf"),
            },
          },
          duration: 500,
          preventMouse: !0,
        }),
          (this.lastDrillAdCode = i);
        break;
      case hX.WOLRD_GIS:
        (e = {
          enabled: !1,
          data: null,
          duration: 500,
          preventMouse: !0,
        }),
          (this.lastDrillAdCode = QY);
        break;
      case hX.CUSTOM_GIS:
        (e = {
          enabled: !1,
          data: null,
          duration: 500,
          preventMouse: !0,
        }),
          (this.lastDrillAdCode = "999999");
    }
    return e;
  }
  async modifyCustomData() {
    const { gis: t } = this.variableContext,
      {
        data: {
          custom: { data: e },
        },
      } = this.properties;
    f(e, this.lastCustomData) ||
      (null == t ||
        t.layerManager.baseMapLayer.ee.emit("modifyCustomDataStart"),
      null == t ||
        t.layerManager.baseMapLayer.set({
          data: await this.getDataConfig(),
          drill: await this.getDrillConfig(),
        }),
      await (null == t ? void 0 : t.layerManager.baseMapLayer.release()),
      this.storeViewport(),
      null == t ||
        t.layerManager.baseMapLayer.ee.emit(
          "modifyCustomDataEnd",
          this.lastDrillAdCode
        ),
      (this.lastCustomData = u(e)));
  }
  async updateDefaultData() {
    const {
      interaction: { initialLevelName: t },
    } = this.properties;
    if (this.POMNode.renderType !== hX.CHINA_GIS) return;
    const e = await window.nQ(t, this.variableContext.gis);
    this.lastDrillAdCode !== e &&
      (e === window.ZY
        ? await this.drillUp(window.ZY)
        : await this.drillDownSingle(e),
      (this.lastDrillAdCode = e));
  }
  setAMapEnable(t = !0) {
    const {
        amap: e,
        nanhai: { enable: i },
      } = this.properties,
      {
        style: n,
        enable: r,
        content: o,
        custom: { key: a, securityJsCode: s, id: l },
        type: u,
        filter: c,
      } = e,
      { gis: h, div: p } = this.variableContext;
    if ((this.destroyAMap(), r)) {
      const e = new T2({
        id: p,
        key: "amap.default" === u ? "255b6b2933a0084ac1ea75faf6994e47" : a,
        securityJsCode:
          "amap.default" === u ? "22658a511592b5249bf6a69b9911e149" : s,
        style: "amap.default" === u ? n : this.getAMapCustomStyle(l),
        showLabel: !0,
        terrain: o.terrain,
        layers: {
          nebula: {
            visible: o.nebula,
          },
          traffic: {
            visible: o.traffic,
          },
          roadnet: {
            visible: o.roadnet,
          },
          buildings: {
            visible: o.buildings,
          },
        },
        filter: {
          ...c,
          enabled: c.enable,
        },
      });
      (this.variableContext.amapLayer = e),
        e.then(() => {
          null == h || h.registerMap(e),
            o.label ? e.show("label") : e.hide("label"),
            (this.isInitAmap = !0),
            t && (!i || (i && this.isInitNanhai)) && this.initHandle();
        });
    }
  }
  getAMapCustomStyle(t) {
    return `amap://styles/${t}`;
  }
  setAMapContent() {
    const { amap: t } = this.properties,
      { content: e } = t,
      { amapLayer: i } = this.variableContext;
    this.isInitAmap &&
      Object.entries(e).forEach((t) => {
        "terrain" !== t[0] && (!0 === t[1] ? i.show(t[0]) : i.hide(t[0]));
      });
  }
  setAMapFilter() {
    const { amap: t } = this.properties,
      { filter: e } = t,
      { amapLayer: i } = this.variableContext;
    this.isInitAmap &&
      (null == i ||
        i.setFilter({
          ...e,
          enabled: e.enable,
        }));
  }
  updateViewClip(t) {
    const { gis: e } = this.variableContext;
    null == e ||
      e.layerManager.baseMapLayer.set({
        viewClip: t,
      }),
      null == e || e.layerManager.baseMapLayer.scaleAdaptation(!1),
      this.storeViewport();
  }
  setNanhaiEnable(t = !0) {
    const {
        nanhai: e,
        amap: { enable: i },
      } = this.properties,
      {
        enable: n,
        offsetX: r,
        offsetY: o,
        scale: a,
        fill: s,
        background: l,
        position: u,
        stroke: c,
        border: h,
        fontStyle: p,
      } = e,
      { nanhaiLayer: d, gis: f } = this.variableContext;
    if (n) {
      if ((this.updateViewClip(window.cX), d)) return;
      const e = {
          common: {
            offset: [r, o, 0],
          },
          scale: a,
          position: u,
          data: {
            type: window.xk.GEOBUF_URL,
            data: window.aQ("chinasouthseaaggregate_aggregatecssea_kld_gc.pbf"),
          },
          style: {
            fill: {
              color: s,
            },
            background: {
              color: l,
            },
            stroke: {
              color: c.color,
              width: c.width,
            },
            border: {
              color: h.color,
              width: h.width,
            },
          },
          poi: {
            enabled: !0,
            data: {
              type: window.xk.GEOBUF_URL,
              data: window.aQ(
                "chinasouthseaaggregate_aggregatecssea_name_kld_gc.pbf"
              ),
            },
            major: {
              enabled: p.enable,
              color: p.color,
              fontSize: p.fontSize,
              fontWeight: p.fontWeight,
              fontFamily: window.RX(p.fontFamily),
              aliasMap: window.HX[x.getLocaleId() || "zh_CN"],
            },
          },
        },
        n = new window.TY(f, e);
      n.then(() => {
        (this.variableContext.nanhaiLayer = n),
          (this.isInitNanhai = !0),
          this.setNanhaiVisible(this.lastDrillAdCode),
          t || this.tickOnce(),
          t && (!i || (i && this.isInitAmap)) && this.initHandle();
      });
    } else {
      if ((this.updateViewClip(null), !d)) return;
      d.remove(), (this.variableContext.nanhaiLayer = null), this.tickOnce();
    }
  }
  setNanhaiVisible(t) {
    const { nanhaiLayer: e } = this.variableContext,
      {
        nanhai: { enable: i },
      } = this.properties;
    if (!i) return;
    if (!e) return;
    const n = Object.values(this.variableContext.regionData).find((t) =>
      t.child.includes(JY)
    );
    t === (null == n ? void 0 : n.adcode) || window.ZY === t || JY === t
      ? e.set({
          common: {
            visible: !0,
          },
        })
      : e.set({
          common: {
            visible: !1,
          },
        });
  }
  setNanhaiContent() {
    const { nanhai: t } = this.properties,
      {
        offsetX: e,
        offsetY: i,
        scale: n,
        fill: r,
        background: o,
        position: a,
        stroke: s,
        border: l,
        fontStyle: u,
      } = t,
      { nanhaiLayer: c } = this.variableContext;
    if (!c) return;
    const h = {
      common: {
        offset: [e, i, 0],
      },
      scale: n,
      position: a,
      style: {
        fill: {
          color: r,
        },
        background: {
          color: o,
        },
        stroke: {
          color: s.color,
          width: s.width,
        },
        border: {
          color: l.color,
          width: l.width,
        },
      },
      poi: {
        enabled: !0,
        major: {
          enabled: u.enable,
          color: u.color,
          fontSize: u.fontSize,
          fontWeight: u.fontWeight,
          fontFamily: window.RX(u.fontFamily),
          aliasMap: window.HX[x.getLocaleId() || "zh_CN"],
        },
      },
    };
    c.set(h);
  }
  setAMapStyle() {
    const { amap: t } = this.properties,
      {
        style: e,
        type: i,
        custom: { id: n },
      } = t,
      { amapLayer: r } = this.variableContext;
    this.isInitAmap &&
      (null == r ||
        r.setMapStyle("amap.default" === i ? e : this.getAMapCustomStyle(n)));
  }
  animate() {
    var t;
    (this.gisContextMapKey = `${this.renderer.getScreenId()}-${
      this.POMNode.id
    }`),
      null === (t = this.currentSlice) ||
        void 0 === t ||
        t.children.forEach((t) => {
          var e, i, n;
          null ===
            (i =
              null === (e = this.renderer.page) || void 0 === e
                ? void 0
                : e.clear) ||
            void 0 === i ||
            i.call(e, t.id),
            null === (n = t.layer) || void 0 === n || n.destroy(),
            (t.layer = void 0);
        }),
      (this.currentSlice = this.POMNode.slices[0]),
      (this.drillEndCallback = []),
      (this.drillStartCallback = []),
      this.update(),
      this.renderLayer();
  }
  renderLayer() {
    const t = this.POMNode.slices[0];
    this.renderer.renderLayer(t, this.variableContext.ghostDiv);
  }
  modifyNodePlots() {
    (this.editingPlot = {
      x: this.POMNode.x,
      y: this.POMNode.y,
    }),
      this.POMNode.slices.forEach((t) => {
        (t.width = this.POMNode.width), (t.height = this.POMNode.height);
      }),
      (this.dom.style.transform = "translate(0,0)");
    const t = this.POMNode.page,
      [e] = t.properties;
    e && (this.dom.style.backgroundColor = e);
  }
  resetNodePlots() {
    const { x: t, y: e } = this.editingPlot;
    (this.dom.style.transform = `translate(${t}px,${e}px)`),
      (this.dom.style.backgroundColor = "transparent");
  }
  enterEdit() {
    return (
      window.UZ(this) ||
        ((this.dom.style.display = "block"), this.isInit || this.render(!0)),
      this.renderer.elementRequestStage(this),
      this.modifyNodePlots(),
      this.renderer.enterSlice(this.POMNode.slices[0], !0),
      setTimeout(() => {
        this.renderer.editing = this.POMNode;
      }, 0),
      !0
    );
  }
  storeViewport() {
    const { gis: t } = this.variableContext;
    t &&
      ((this.preViewportConfig = this.getRawViewportConfig()),
      this.ayncViewportConfig(this.preViewportConfig));
  }
  quitEdit() {
    window.UZ(this) || (this.dom.style.display = "none");
    let t = this.POMNode.slices[0].host.parent;
    for (; !t.isSlice; ) t = t.parent;
    this.storeViewport(),
      this.resetNodePlots(),
      this.renderer.elementExitStage(),
      this.renderer.exitSlice(t);
  }
  forwardToPage() {
    window.UZ(this) || (this.dom.style.display = "none");
    let t = this.POMNode.slices[0].host.parent;
    for (; !t.isSlice || !t.isPage; )
      t.isSlice ? t.isPage || (t = t.host.parent) : (t = t.parent);
    this.storeViewport(),
      this.resetNodePlots(),
      this.renderer.elementExitStage(),
      this.renderer.exitSlice(t),
      (this.renderer.editing = void 0);
  }
  async drillDownSingle(t) {
    var e;
    const { baseMapLayer: i } =
      null === (e = this.variableContext.gis) || void 0 === e
        ? void 0
        : e.layerManager;
    await i.drillDown(t, () => {});
  }
  async drillRegion(t) {
    var e;
    const { baseMapLayer: i } =
      null === (e = this.variableContext.gis) || void 0 === e
        ? void 0
        : e.layerManager;
    await i.drillRegion(t, () => {});
  }
  buildRegionData() {
    const {
      data: { region: t },
    } = this.properties;
    (this.variableContext.regionData = {}),
      t.forEach((t) => {
        let e = t.name;
        const [i, n] = t.position.split(",");
        this.variableContext.regionData[e] = {
          adcode: e,
          name: e,
          position: [Number(i), Number(n)],
          child: t.child,
        };
      });
  }
  updateRegion() {
    var t;
    const {
        data: { region: e },
      } = this.properties,
      { baseMapLayer: i } =
        null === (t = this.variableContext.gis) || void 0 === t
          ? void 0
          : t.layerManager;
    f(e, this.lastRegion) ||
      (this.buildRegionData(),
      (i.state.data.region = {}),
      i.set({
        data: {
          region: this.variableContext.regionData,
        },
      }),
      i.ee.emit("modifyCustomDataStart"),
      i.ee.emit("modifyCustomDataEnd", this.lastDrillAdCode),
      (this.lastRegion = u(e)));
  }
  initPropsWatchRule() {
    this.propsWatch.addWatch([
      this.propsWatch.defaultRule(
        [
          "common",
          "baseMapLayer",
          "districtOutline",
          "extrude",
          "shadow",
          "innerShadow",
          ["mapStyle", "backgroundColor"],
          ["mapStyle", "metalness"],
          ["mapStyle", "roughness"],
          ["mapStyle", "normalScale"],
          ["mapStyle", "borderColor"],
          ["mapStyle", "fontStyle"],
          ["mapStyle", "coverEnable"],
          ["mapStyle", "labelEnable"],
          "provinceOutline",
        ],
        "diffAnyoneDeep",
        () => {
          this.setBaseLayer(), this.tickOnce();
        }
      ),
      this.propsWatch.defaultRule(
        [
          ["mapStyle", "backgroundType"],
          ["mapStyle", "backgroundImage"],
          ["mapStyle", "backgroundTile"],
          ["mapStyle", "normalType"],
          ["mapStyle", "normalImage"],
          ["mapStyle", "normalTile"],
        ],
        "diffAnyoneDeep",
        () => {
          this.setBaseLayer(), this.tickLoop();
        }
      ),
      this.propsWatch.defaultRule(
        ["boundaryStreamer", "enable"],
        "diffDeep",
        (t) => {
          this.setBaseLayer(),
            (null == t ? void 0 : t.boundaryStreamer.enable)
              ? this.tickLoop()
              : this.tickOnce();
        }
      ),
      this.propsWatch.defaultRule(
        [
          ["boundaryStreamer", "headColor"],
          ["boundaryStreamer", "endColor"],
          ["boundaryStreamer", "width"],
          ["boundaryStreamer", "speed"],
          ["boundaryStreamer", "length"],
        ],
        "diffAnyoneDeep",
        () => {
          this.setBaseLayer(), this.tickLoop();
        }
      ),
      this.propsWatch.defaultRule(
        [["data", "custom", "data"]],
        "diffAnyoneDeep",
        async () => {
          await this.modifyCustomData(), this.tickOnce();
        }
      ),
      this.propsWatch.defaultRule(["data", "region"], "diffDeep", () => {
        this.updateRegion();
      }),
      this.propsWatch.defaultRule(
        ["interaction", "initialLevelName"],
        "diffDeep",
        async () => {
          this.updateDefaultData(), this.tickLoop();
        }
      ),
      this.propsWatch.defaultRule("componentBackground", "diffDeep", () => {
        this.setSceneConfig(), this.tickOnce();
      }),
      this.propsWatch.defaultRule("light", "diffDeep", () => {
        this.setLightConfig(), this.tickOnce();
      }),
      this.propsWatch.defaultRule(
        ["interaction", "viewport"],
        "diffAnyoneDeep",
        () => {
          this.setViewportConfig(), this.tickOnce();
        }
      ),
      this.propsWatch.defaultRule(["nanhai", "enable"], "diffDeep", () => {
        this.setNanhaiEnable(!1);
      }),
      this.propsWatch.defaultRule(
        [
          ["nanhai", "position"],
          ["nanhai", "offsetX"],
          ["nanhai", "offsetY"],
          ["nanhai", "scale"],
          ["nanhai", "fill"],
          ["nanhai", "stroke"],
          ["nanhai", "border"],
          ["nanhai", "background"],
          ["nanhai", "fontStyle"],
        ],
        "diffAnyoneDeep",
        () => {
          this.setNanhaiContent(), this.tickOnce();
        }
      ),
      this.propsWatch.defaultRule(
        ["amap", "custom", "key"],
        "diffDeep",
        () => {
          C2(), this.setAMapEnable(!1);
        },
        !0
      ),
      this.propsWatch.defaultRule(
        [
          ["amap", "enable"],
          ["amap", "type"],
          ["amap", "custom", "securityJsCode"],
          ["amap", "content", "terrain"],
        ],
        "diffAnyoneDeep",
        () => {
          this.setAMapEnable(!1);
        },
        !0
      ),
      this.propsWatch.defaultRule(
        [
          ["amap", "style"],
          ["amap", "custom", "id"],
        ],
        "diffAnyoneDeep",
        () => {
          this.setAMapStyle();
        }
      ),
      this.propsWatch.defaultRule(["amap", "content"], "diffDeep", () => {
        this.setAMapContent();
      }),
      this.propsWatch.defaultRule(["amap", "filter"], "diffDeep", () => {
        this.setAMapFilter();
      }),
    ]);
  }
  onFontsUpdated() {
    this.updateGisFonts(), this.updateNanhaiFonts();
  }
  updateGisFonts() {
    const { gis: t } = this.variableContext;
    (this.asyncFontsTask.gis = !0),
      t &&
        this.isInitGis &&
        ((this.asyncFontsTask.gis = !1),
        null == t || t.layerManager.baseMapLayer.initPOI());
  }
  updateNanhaiFonts() {
    const { nanhaiLayer: t } = this.variableContext;
    (this.asyncFontsTask.nanhai = !0),
      t &&
        this.isInitNanhai &&
        ((this.asyncFontsTask.nanhai = !1), t.initPOI());
  }
  toDataURL(t = "image/jpeg", e = 0.92) {
    const { gis: i } = this.variableContext;
    if (i) return null == i ? void 0 : i.renderSystem.toDataURL(t, e);
  }
  destroyAMap() {
    const { amapLayer: t, gis: e } = this.variableContext;
    null == e || e.unregisterMap(t),
      null == t || t.destroy(),
      (this.variableContext.amapLayer = null),
      (this.isInitAmap = !1);
  }
  suspend() {
    this.variableContext.gis && this.variableContext.gis.tickSystem.pause();
  }
  resume() {
    this.variableContext.gis && this.variableContext.gis.tickSystem.start();
  }
  async destroy(t) {
    var e, i, n, r, o;
    this.clearEventListener();
    for (let a = 0; a < this.POMNode.slices.length; a++) {
      const n = this.POMNode.slices[a];
      await (null === (i = (e = this.renderer).destroyLayer) || void 0 === i
        ? void 0
        : i.call(e, n, void 0, t)),
        n.children.forEach((t) => {
          var e, i, n;
          null ===
            (i =
              null === (e = this.renderer.page) || void 0 === e
                ? void 0
                : e.clear) ||
            void 0 === i ||
            i.call(e, t.id),
            null === (n = t.layer) || void 0 === n || n.destroy(),
            (t.layer = void 0);
        });
    }
    this.isInit && t === C.Flip
      ? null === (n = this.variableContext.gis) ||
        void 0 === n ||
        n.tickSystem.pause()
      : (window.cancelAnimationFrame(this.tickId),
        this.destroyAMap(),
        null === (r = this.variableContext.gis) || void 0 === r || r.destroy(),
        (this.variableContext.gis = null),
        L2.delete(this.gisContextMapKey),
        null === (o = this.elementDisplayObserver) ||
          void 0 === o ||
          o.disconnect()),
      super.destroy(t);
  }
}
Object.defineProperty(O2, "panelConfig", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    panelLimit: 1,
    name: "Gis",
  },
}),
  Object.defineProperty(O2, "events", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: [
      {
        title_cn: "单击",
        title_en: "Click",
        value: b.Click,
      },
      {
        title_cn: "双击",
        title_en: "Double Click",
        value: b.DbClick,
      },
      {
        title_cn: "区域单击",
        title_en: "Area Click",
        value: b.AreaClick,
      },
      {
        title_cn: "区域双击",
        title_en: "Area Double Click",
        value: b.AreaDbClick,
      },
      {
        title_cn: "区域外单击",
        title_en: "Outside Area Click",
        value: b.OutSideAreaClick,
      },
      {
        title_cn: "区域外双击",
        title_en: "Outside Area Double Click",
        value: b.OutSideAreaDbClick,
      },
      {
        title_cn: "加载前",
        title_en: "Before Element Load",
        value: b.BeforeLoad,
      },
      {
        title_cn: "加载完成",
        title_en: "Element Loaded",
        value: b.Loaded,
      },
    ],
  });
