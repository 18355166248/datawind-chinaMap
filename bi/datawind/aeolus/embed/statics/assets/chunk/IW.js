import eW from "./eW.js";

const sk = !0,
  lk = !0,
  uk = {
    mode: "webgis",
    zoom: 3.75,
    center: [104.299, 33.518],
    rotation: 4,
    pitch: 40,
    enableZoom: !0,
    enablePitch: !0,
    enableRotate: !0,
    enablePan: !0,
    lock: !1,
    zoomSpeed: 1,
    rotateSpeed: 1,
    panSpeed: 1,
    maxPitch: 80,
    minPitch: 0,
    maxRotation: 360,
    minRotation: -360,
    maxZoom: 20,
    minZoom: 2,
    drillSave: !0,
  },
  ck = {
    ambient: {
      enabled: !0,
      color: "#FFFFFF",
      intensity: 35,
    },
    directional: {
      enabled: !0,
      color: "#FFFFFF",
      intensity: 35,
      x: 0.3,
      y: -0.5,
      z: 0.5,
      shadow: {
        enabled: !0,
        color: "#000000",
        opacity: 0.3,
        size: 1024,
        bias: 1e-4,
      },
    },
  },
  hk = {
    offsetX: 0,
    offsetY: 0,
    dpr: window.devicePixelRatio ? window.devicePixelRatio : 1,
    background: {
      color: "rgba(12,9,41,1)",
      map: null,
      transparent: !1,
    },
  },
  pk = 12,
  dk = 400,
  fk = "rgba(215,242,255,0.6)",
  gk = "SourceHanSansCN-Normal",
  mk = {
    fontFamily:
      "PingFang SC,Microsoft Yahei,system-ui,-apple-system,segoe ui,Roboto,Helvetica,Arial,sans-serif, apple color emoji,segoe ui emoji,segoe ui symbol",
    fontSize: pk,
    fontWeight: dk,
    color: fk,
    strokeWidth: 0,
    strokeColor: "rgba(0,0,0,1)",
    offsetX: 0,
    offsetY: 0,
  },
  yk = {
    color: null,
    opacity: 1,
    padding: {
      top: 5,
      left: 5,
      right: 5,
      bottom: 5,
    },
    shadow: {
      color: "rgb(255, 255, 255)",
      blur: 0,
      offsetX: 0,
      offsetY: 0,
    },
    borderRadius: null,
  },
  vk = "1.2",
  bk = "1.4";

class IW {
  constructor(t) {
    (this.props = t),
      (this.id = window.we()),
      (this.__cb = []),
      (this.__errorCb = []),
      (this.__isReady = !1),
      (this.__destroyed = !1),
      (this.version = window.ut),
      (this.__maps = []),
      (this.eventManager = new window.CG()),
      (this.layerManager = new window.OU()),
      (this.__initCameraSystem = () => {
        const { viewportConfig: t, width: e, height: i } = this.state;
        this.cameraSystem = new window.wG({
          config: t,
          width: e,
          height: i,
        });
      }),
      (this.__initSceneSystem = () => {
        const {
          sceneConfig: t,
          viewportConfig: e,
          containerDom: i,
        } = this.state;
        (this.sceneSystem = new window.IU({
          containerDom: i,
          config: t,
          viewportConfig: e,
          cameraSystem: this.cameraSystem,
          layerManager: this.layerManager,
        })),
          this.ee.on("viewportChange", (t) => {
            (this.sceneSystem.coreScene.ext.zoom = t.zoom),
              (this.sceneSystem.hudScene.ext.zoom = t.zoom);
          });
      }),
      (this.__initRenderSystem = () => {
        const { width: t, height: e, containerDom: i } = this.state;
        (this.renderSystem = new window.MU({
          containerDom: i,
          width: t,
          height: e,
          cameraSystem: this.cameraSystem,
          sceneSystem: this.sceneSystem,
        })),
          this.shaderService.registerBasicModule(),
          this.eventManager.ee.on("markerEnabled", ({ markerType: t }) => {
            const { width: e, height: i, containerDom: n } = this.props;
            this.renderSystem.markerRenderer ||
              (this.renderSystem.markerRenderer = new rW({
                sceneSystem: this.sceneSystem,
                cameraSystem: this.cameraSystem,
                controlsSystem: this.controlsSystem,
                containerDom: n,
                markerType: t,
                width: e,
                height: i,
              }));
          });
      }),
      (this.__initEventSystem = () => {
        const { containerDom: t, autoSize: e } = this.state;
        this.eventSystem = new window.gU({
          engine: window.sW,
          viewportSystem: this.viewportSystem,
          cameraSystem: this.cameraSystem,
          renderSystem: this.renderSystem,
          sceneSystem: this.sceneSystem,
          containerDom: t,
          autoSize: e,
          ee: this.ee,
          layerManager: this.layerManager,
          eventManager: this.eventManager,
        });
      }),
      (this.__initLightSystem = () => {
        const { lightConfig: t } = this.state;
        this.lightSystem = new window.xU({
          sceneSystem: this.sceneSystem,
          gis: this,
          config: t,
        });
      }),
      (this.__initHelperSystem = () => {
        const { dev: t } = this.state;
        if (t) {
          (this.renderSystem.coreRenderer.debug.checkShaderErrors = !1),
            new KU({
              length: 2e4,
              sceneSystem: this.sceneSystem,
            }),
            new nj({
              type: "cartesian",
              sceneSystem: this.sceneSystem,
              config: {
                size: 100,
                divisions: 10,
              },
            });
          const t = new QE(this.cameraSystem.coreCamera);
          this.sceneSystem.coreScene.add(t),
            this.lightSystem.lights.forEach((t) => {
              switch (t.type) {
                case "directional": {
                  const e = 5,
                    i = new qE(t.light, e);
                  return void this.sceneSystem.coreScene.add(i);
                }
                case "spot": {
                  const e = new GE(t.light);
                  return void this.sceneSystem.coreScene.add(e);
                }
              }
            });
        }
      }),
      (this.__syncMap = (t) => {
        this.__maps.forEach((e) => {
          e.setCenter(t.center, !0),
            e.setZoom(t.zoom, !0),
            e.setPitch(t.pitch, !0),
            e.setRotation(t.rotation, !0);
        });
      }),
      this.__init();
  }
  __init() {
    if (!this.__checkEnv()) return;
    this.__injectToGlobal(),
      (this.ee = new window.dt()),
      this.__initDataSet(),
      this.__mergeDefaultConfig(),
      this.__initCameraSystem(),
      this.__initSceneSystem(),
      this.__initRenderSystem(),
      this.__initLightSystem(),
      this.__initControlsSystem(),
      this.__initViewportSystem(),
      this.__initEventSystem();
    new Promise((t, e) => {
      this.__initBaseMapLayer(t, e);
    })
      .then(() => {
        this.__iniTickSystem(),
          this.tickSystem.start(),
          this.__initHelperSystem(),
          (this.__isReady = !0),
          setTimeout(() => {
            if (!this.__destroyed) {
              for (let t = 0; t < this.__cb.length; t++) this.__cb[t](this);
              (this.__cb = []), this.ee.emit("loaded", "");
            }
          }, 0);
      })
      .catch((t) => {
        for (let e = 0; e < this.__errorCb.length; e++) this.__errorCb[e](t);
        (this.__errorCb = []), this.ee.emit("loaded", "");
      });
  }
  __checkEnv() {
    return this.props.containerDom && this.props.containerDom.isConnected
      ? window.QD.isWebGL2Available()
        ? (window.QD.isGPUAcceleratorEnabled() ||
            this.logService.error(
              "检测到您已关闭浏览器硬件加速模式，请开启以获得更好的体验"
            ),
          !0)
        : (this.logService.error(
            "当前环境不支持 webgl2，请更新浏览器或显卡配置以获得更好的体验"
          ),
          !1)
      : (this.logService.error("Plane3D containerDom is required"), !1);
  }
  __injectToGlobal() {
    const { globalVariable: t = sk } = this.props;
    t &&
      ((window.__gis__ = this),
      Array.isArray(window.__gises__)
        ? window.__gises__.push(this)
        : (window.__gises__ = [this]));
  }
  __initDataSet() {
    const t = new window.ok();
    t.registerParser("geojson", window.Kz),
      t.registerParser("bytejson", window.Xw),
      t.registerTransform("projection", window.ML),
      t.registerTransform("hexagon", window.bW),
      t.registerTransform("grid", window._W),
      t.registerTransform("filter", window.aT),
      t.registerTransform("map", window.mF),
      t.registerTransform("dissolve", window.gI),
      t.registerTransform("webgis", window.lW),
      (this.dataSet = t);
  }
  __mergeDefaultConfig() {
    const {
        autoSize: t,
        containerDom: e,
        baseMapLayer: i,
        width: n,
        height: r,
      } = this.props,
      o = null != t ? t : lk,
      a = null != n ? n : 1920,
      s = null != r ? r : 1080,
      l = null == i ? void 0 : i.baseZoom;
    this.state = window.af(
      {
        dev: false,
        globalVariable: sk,
        autoSize: lk,
        sceneConfig: hk,
        viewportConfig: window.af(uk, {
          mode: window.fW(this.props.viewportConfig),
        }),
        baseMapLayer: window.af(window.Rk, {
          baseZoom: l || -1,
        }),
        lightConfig: ck,
        controlType: "orbit",
      },
      window.ot(window.rt({}, this.props), {
        width: o ? e.clientWidth : a,
        height: o ? e.clientHeight : s,
      })
    );
  }
  __initControlsSystem() {
    const { viewportConfig: t } = this.state;
    (this.controlsSystem = new window.DG({
      sceneSystem: this.sceneSystem,
      renderSystem: this.renderSystem,
      cameraSystem: this.cameraSystem,
      config: t,
      layerManager: this.layerManager,
      gis: this,
    })),
      this.controlsSystem.gisStateApi.subscribe(
        window.AG.WebGis,
        this.__syncMap
      );
  }
  __initViewportSystem() {
    const { viewportConfig: t } = this.state;
    this.viewportSystem = new window.dW({
      sceneSystem: this.sceneSystem,
      renderSystem: this.renderSystem,
      cameraSystem: this.cameraSystem,
      controlsSystem: this.controlsSystem,
      config: t,
      layerManager: this.layerManager,
      gis: this,
    });
  }
  __iniTickSystem() {
    this.tickSystem = new window.JU({
      sceneSystem: this.sceneSystem,
      renderSystem: this.renderSystem,
      cameraSystem: this.cameraSystem,
      controlsSystem: this.controlsSystem,
      layerManager: this.layerManager,
    });
  }
  async __initBaseMapLayer(t, e) {
    const { baseMapLayer: i } = this.state;
    if (i.enabled)
      try {
        const e = new eW(this, i, t);
        await e.init();
      } catch (n) {
        e(n);
      }
    else t();
  }
  then(t) {
    return (
      this.__isReady
        ? setTimeout(() => {
            t(this);
          }, 0)
        : this.__cb.push(t),
      this
    );
  }
  catch(t) {
    return this.__errorCb.push(t), this;
  }
  on(t, e, i) {
    window.Fk(t) || this.eventSystem.mapContainerEvent.bindEventListeners(t),
      this.ee.on(t, e, i);
  }
  off(t, e) {
    window.Fk(t) || this.eventManager.removeMapEvent(this.id, t),
      this.ee.removeListener(t),
      e && e();
  }
  get performance() {
    return this.renderSystem.coreRenderer.info;
  }
  registerMap(t) {
    if (!t.__destroyed)
      if (this.__maps.find((e) => e.id === t.id))
        this.logService.warn("请不要重复绑定第三方地图");
      else {
        this.__maps.push(t);
        const e = this.controlsSystem.gisStateApi.getSourceState(),
          i = t.getMaxPitch(),
          n = t.getZooms();
        this.viewportSystem.set({
          maxPitch: Math.min(e.maxPitch, i),
          minZoom: n[0],
          maxZoom: n[1],
        }),
          this.__syncMap(this.controlsSystem.gisStateApi.get(window.AG.WebGis));
      }
  }
  unregisterMap(t) {
    this.__maps.splice(this.__maps.indexOf(t), 1);
  }
  destroy() {
    var t, e, i, n, r, o, a, s, l, u, c, h, p, d;
    if (this.__destroyed)
      return void this.logService.warn("请勿重复调用 destroy");
    (this.__destroyed = !0),
      this.ee.emit("destroy", ""),
      null == (t = this.eventSystem) || t.destroy(),
      null == (e = this.controlsSystem) || e.destroy(),
      null == (i = this.tickSystem) || i.destroy(),
      null == (n = this.layerManager) || n.destroy(),
      null == (r = this.lightSystem) || r.destroy(),
      null == (o = this.sceneSystem) || o.destroy(),
      null == (a = this.renderSystem) || a.destroy(),
      null == (s = this.dataSet) || s.destroy(),
      null == (l = this.controlsSystem) ||
        l.gisStateApi.unsubscribe(window.AG.WebGis, this.__syncMap),
      null == (u = this.viewportSystem) || u.destroy(),
      null == (c = this.__maps) || c.forEach((t) => t.destroy()),
      (null == (h = this.state) ? void 0 : h.containerDom) &&
        (this.state.containerDom.innerHTML = ""),
      (null == (p = window.__gis__) ? void 0 : p.id) === this.id &&
        (window.__gis__ = null);
    const f =
      null == (d = window.__gises__)
        ? void 0
        : d.findIndex((t) => t.id === this.id);
    f > -1 && window.__gises__.splice(f, 1);
  }
}
window.IW = IW;
