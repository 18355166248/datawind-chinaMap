const Mk = "100000";
const jf = 63781.37;
const Vf = jf * Math.PI * 2;

class eW extends window.oV {
  constructor(t, e, i) {
    super(t, e),
      (this.gis = t),
      (this.props = e),
      (this.cb = i),
      (this.isDrilling = !1),
      (this.drillData = {
        default: [new Map()],
        process: [new Map()],
      }),
      (this.currentCode = Mk),
      (this.currentLevel = 0),
      (this.currentParentCode = null),
      (this.currentParentLevel = -1),
      (this.drillCache = {}),
      (this.subDistrictInfoArr = []),
      (this.currentRegion = null);
  }
  async init() {
    this._initialState(),
      this._initLayerGroup(),
      await this.__initMap(),
      this.gis.__destroyed ||
        (this.__initEvent(),
        this.animation.start(),
        super.registerInteraction(
          this.state.interaction,
          this.subDistrictFillGroup,
          !1
        ),
        super.emitPropsWatch(),
        this.registerHeightScale(),
        this.ee.emit("loaded", this),
        this.cb());
  }
  _initialState() {
    super._initialState({});
  }
  _initLayerGroup() {
    super._initLayerGroup({
      layerName: "base-map-layer",
      layerType: "base",
    }),
      this.__releaseLayerGroup();
  }
  __initEvent() {
    const { drill: t } = this.state;
    t.enabled &&
      (t.preventMouse ||
        (this.gis.eventManager.bindEvent(this.id, t.drillUpEvent),
        this.gis.eventManager.bindEvent(this.id, t.drillDownEvent)));
  }
  __releaseLayerGroup() {
    (this.districtStrokeGroup = new As()),
      (this.districtStrokeGroup.name = "district-stroke"),
      (this.districtBottomStrokeGroup = new As()),
      (this.districtBottomStrokeGroup.name = "district-bottom-stroke"),
      (this.districtFillGroup = new As()),
      (this.districtFillGroup.name = "district-fill"),
      (this.extrudeBackgroundFillGroup = new As()),
      (this.extrudeBackgroundFillGroup.name = "extrude-background-fill"),
      (this.subDistrictStrokeGroup = new As()),
      (this.subDistrictStrokeGroup.name = "sub-district-stroke"),
      (this.subDistrictFillGroup = new As()),
      (this.subDistrictFillGroup.name = "sub-district-fill"),
      (this.listenerObj = this.subDistrictFillGroup),
      this.coreGroup.add(
        this.districtStrokeGroup,
        this.districtBottomStrokeGroup,
        this.districtFillGroup,
        this.extrudeBackgroundFillGroup,
        this.subDistrictFillGroup,
        this.subDistrictStrokeGroup
      ),
      (this.coreGroup.userData.invertedRelection = !0),
      (this.districtStrokeGroup.userData.invertedRelection = !1),
      (this.districtBottomStrokeGroup.userData.invertedRelection = !1),
      (this.districtFillGroup.userData.invertedRelection = !0),
      (this.extrudeBackgroundFillGroup.userData.invertedRelection = !0),
      (this.subDistrictFillGroup.userData.invertedRelection = !1),
      (this.subDistrictStrokeGroup.userData.invertedRelection = !1);
  }
  set(t) {
    return super.set(t), this;
  }
  get() {
    return super.get();
  }
  add() {
    return this;
  }
  remove() {
    super.remove();
  }
  updateArea(t) {
    const { cameraStatus: e } = this.gis.globalOpts,
      {
        drill: { duration: i },
      } = this.state,
      { cameraChange: n, cameraTween: r } = af(window.Ok, t);
    n &&
      this.gis.viewportSystem.setCameraState(
        e,
        r
          ? {
              duration: i,
              type: "straight",
            }
          : void 0
      ),
      this.updateBaseHeight(),
      this._updatePOI(!0);
  }
  async initExtrude() {
    const { bboxOption: t, boundary: e, boundaryProj: i } = this.gis.globalOpts,
      { districtStyle: n, extrudeBackgroundStyle: r } = this.state;
    if (
      (n &&
        n.enabled &&
        (function (t, e) {
          const { geojson: i, bboxOption: n } = t,
            r = window.bV(i, n.bboxProj);
          let o = 0,
            a = 0,
            s = 0,
            l = 0;
          const u = n.baseHeight ? n.baseHeight : 1;
          for (let c = 0; c < r.group.length; c += 3)
            switch (
              ((o += s),
              (a += l),
              (s = r.group[c + 1]),
              (l = r.group[c + 2]),
              r.group[c])
            ) {
              case 0:
                const t = window.RV({
                    index: r.index.slice(o, 1 * (o + s)),
                    position: r.position.slice(3 * a, 3 * (a + l)),
                    normal: r.normal.slice(3 * a, 3 * (a + l)),
                    uv: r.uv.slice(2 * a, 2 * (a + l)),
                  }),
                  i = new window.Wn(t, e.extrudeTopMaterial);
                i.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                  (i.scale.z = u),
                  (i.position.z = 0),
                  (i.userData.faceType = "top"),
                  (i.name = "map-top"),
                  (i.frustumCulled = !1),
                  e.districtFillGroup.add(i);
                const n = new window.Wn(t, e.extrudeInnerShadowMaterial);
                n.setRenderIndex(window.lU.BASE_MAP_LAYER_INNERSHADOW_MESH),
                  (n.scale.z = 1.01 * u),
                  (n.position.z = 0),
                  (n.userData.faceType = "map-innerShadow"),
                  (n.name = "map-innerShadow"),
                  (n.frustumCulled = !1),
                  e.districtFillGroup.add(n);
                break;
              case 1:
                const c = window.RV({
                    index: r.index.slice(o, 1 * (o + s)),
                    position: r.position.slice(3 * a, 3 * (a + l)),
                    normal: r.normal.slice(3 * a, 3 * (a + l)),
                    uv: r.uv.slice(2 * a, 2 * (a + l)),
                  }),
                  h = new window.Wn(c, e.extrudeSideMaterial);
                h.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                  (h.scale.z = u),
                  (h.position.z = 0),
                  (h.name = "map-side"),
                  (h.userData.faceType = "side"),
                  (h.userData.invertedRelection = !0),
                  (h.castShadow = !0),
                  (h.frustumCulled = !1),
                  e.districtFillGroup.add(h);
            }
        })(
          {
            geojson: i,
            bboxOption: t,
          },
          this
        ),
      r && r.enabled)
    ) {
      if (!this.bgGeoData) {
        const t = {
          type: xk.GEOBUF_URL,
          data: `https://lf3-dpfe.${atob(
            "Ynl0ZXRvcy5jb20="
          )}/obj/gis/data/worldborderworldborder_gc.pbf`,
        };
        this.bgGeoData = await ZV(t, {
          useProcess: !1,
          useProject: !1,
        });
      }
      const i = UV(t, this),
        n = (function (t, e, i) {
          const { bbox2: n } = t,
            r = Ww.intersect(
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [n[0], n[1]],
                      [n[2], n[1]],
                      [n[2], n[3]],
                      [n[0], n[3]],
                      [n[0], n[1]],
                    ],
                  ],
                },
              },
              e.__geojson__.features[0]
            );
          let o = {
            type: "FeatureCollection",
            features: [r],
          };
          o = window.am.rewind(o);
          const a = Ww.distance(
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [t.bbox[0], t.bbox[1]],
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [t.bbox[2], t.bbox[3]],
                },
              },
              {
                units: "meters",
              }
            ),
            s = Ww.buffer(i.features[0], ~~(0.001 * a), {
              units: "meters",
              steps: 1,
            });
          return (
            (o = {
              type: "FeatureCollection",
              features: [Ww.difference(r, s)],
            }),
            sm(lV(o), Qf)
          );
        })(i, this.bgGeoData, e);
      !(function (t, e) {
        const { geojson: i, bboxOption: n } = t,
          r = window.bV(i, n.bboxProj);
        let o = 0,
          a = 0,
          s = 0,
          l = 0;
        for (let u = 0; u < r.group.length; u += 3)
          switch (
            ((o += s),
            (a += l),
            (s = r.group[u + 1]),
            (l = r.group[u + 2]),
            r.group[u])
          ) {
            case 0:
              const t = window.RV({
                  index: r.index.slice(o, 1 * (o + s)),
                  position: r.position.slice(3 * a, 3 * (a + l)),
                  normal: r.normal.slice(3 * a, 3 * (a + l)),
                  uv: r.uv.slice(2 * a, 2 * (a + l)),
                }),
                i = new window.Wn(t, e.extrudeBackgroundTopMaterial);
              i.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                (i.scale.z = n.baseHeight ? n.baseHeight : 1),
                (i.position.z = 0),
                (i.userData.faceType = "top"),
                (i.name = "map-top"),
                (i.receiveShadow = !0),
                (i.frustumCulled = !1),
                e.extrudeBackgroundFillGroup.add(i);
              break;
            case 1:
              const u = window.RV({
                  index: r.index.slice(o, 1 * (o + s)),
                  position: r.position.slice(3 * a, 3 * (a + l)),
                  normal: r.normal.slice(3 * a, 3 * (a + l)),
                  uv: r.uv.slice(2 * a, 2 * (a + l)),
                }),
                c = new window.Wn(u, e.extrudeBackgroundSideMaterial);
              c.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                (c.scale.z = n.baseHeight ? n.baseHeight : 1),
                (c.position.z = 0),
                (c.name = "map-side"),
                (c.userData.faceType = "side"),
                (c.userData.invertedRelection = !0),
                (c.castShadow = !0),
                (c.frustumCulled = !1),
                e.extrudeBackgroundFillGroup.add(c);
          }
      })(
        {
          geojson: n,
          bboxOption: i,
        },
        this
      );
    }
  }
  async updateExtrudeStyle() {
    const { districtStyle: t, extrudeBackgroundStyle: e } = this.state;
    t && t.enabled && (window.FV(this, "extrude"), window.zV(this), kV(this)),
      e && e.enabled && window.FV(this, "extrude-background");
  }
  updateBaseHeight() {
    const { globalOpts: t } = this.gis;
    if (t) {
      const {
        bboxOption: { baseHeight: e },
      } = t;
      this.districtStrokeGroup.position.setZ(e),
        this.subDistrictStrokeGroup.position.setZ(e),
        this.subDistrictFillGroup.position.setZ(e),
        this.poiGroup.updateBaseHeight(e),
        (function (t, e) {
          e.districtFillGroup.children.forEach((e) => {
            "map-innerShadow" === e.userData.faceType
              ? (e.scale.z = 1.01 * (t || 1))
              : (e.scale.z = t || 1),
              (e.position.z = 0);
          });
        })(e, this),
        window.jV(e, this);
    }
  }
  async __initMap(t) {
    const { districtStyle: e, extrudeBackgroundStyle: i } = this.state,
      { sceneSystem: n } = this.gis;
    await window.$V(this),
      this.gis.__destroyed ||
        (window.tW(this),
        window.uV(this),
        window.HV(this),
        this.scaleAdaptation(!1),
        t
          ? this.gis.viewportSystem.init("xgis")
          : this.gis.viewportSystem.init(),
        this.scaleAdaptation(!1),
        (function (t, e, i) {
          const n = window.EA(e.state.background.color);
          (i.extrudeTopMaterial = new window.zA({
            color: n.color,
            transparent: !0,
            depthTest: !0,
            depthWrite: !0,
          })),
            (i.extrudeInnerShadowMaterial = new window.zA({
              transparent: !0,
              depthTest: !0,
              depthWrite: !0,
            }));
          const { colorConfig: r } = t.sideConfig,
            {
              bottomColor: o,
              topColor: a,
              bottomOpacity: s,
              topOpacity: l,
            } = window.GV(r);
          i.extrudeSideMaterial = new window.Jn({
            uniforms: {
              type: {
                type: "int",
                value: ((t) => {
                  switch (t) {
                    case "linear":
                      return 1;
                    case "ordinal":
                      return 2;
                  }
                })(r.type),
              },
              bottomColor: {
                type: "vec3",
                value: {
                  color: o,
                  opacity: s,
                },
              },
              topColor: {
                type: "vec3",
                value: {
                  color: a,
                  opacity: l,
                },
              },
            },
            transparent: !0,
            vertexShader:
              "varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}",
            fragmentShader:
              "#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n  vec3 color;\n  float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}",
          });
        })(e, n, this),
        (function (t, e, i) {
          const n = window.EA(e.state.background.color);
          i.extrudeBackgroundTopMaterial = new window.zA({
            color: n.color,
            transparent: !0,
            depthTest: !0,
            depthWrite: !0,
          });
          const { colorConfig: r } = t.sideConfig,
            {
              bottomColor: o,
              topColor: a,
              bottomOpacity: s,
              topOpacity: l,
            } = window.GV(r);
          i.extrudeBackgroundSideMaterial = new window.Jn({
            uniforms: {
              type: {
                type: "int",
                value: ((t) => {
                  switch (t) {
                    case "linear":
                      return 1;
                    case "ordinal":
                      return 2;
                  }
                })(r.type),
              },
              bottomColor: {
                type: "vec3",
                value: {
                  color: o,
                  opacity: s,
                },
              },
              topColor: {
                type: "vec3",
                value: {
                  color: a,
                  opacity: l,
                },
              },
            },
            transparent: !1,
            vertexShader:
              "varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}",
            fragmentShader:
              "#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n    vec3 color;\n    float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}",
            depthTest: !0,
            depthWrite: !0,
          });
        })(i, n, this),
        await this.initExtrude());
  }
  async drillDown(t, e) {
    const { viewportSystem: i } = this.gis,
      {
        drill: {
          enabled: n,
          duration: r,
          level: { range: o },
        },
      } = this.state;
    if (!n) return this.logService.warn("当前未开启钻取功能"), this;
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;
    const a = qV(this.drillData, t);
    if (-1 === a)
      return this.logService.warn(`钻取层级 ${a}不合法，下钻无效`), this;
    if (a > o[1] || a < o[0])
      return this.logService.warn(`钻取层级 ${a}超过最大限制，下钻无效`), this;
    this.isDrilling = !0;
    const s = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };
    (this.drillCache[s.adcode] = s),
      (this.currentLevel = a),
      (this.currentCode = t);
    const l = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    (this.currentParentLevel = l.level),
      (this.currentParentCode = l.adcode),
      (this.currentRegion = null),
      window.tW(this);
    const u = {
      type: "drillDown",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };
    return (
      this.ee.emit("drill", u),
      this.ee.emit("drillDown", u),
      WV(this),
      await new Promise((t) =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit("drillDownEnd", u),
                this.ee.emit("drillEnd", u),
                (this.isDrilling = !1);
            })(),
            t(this);
        }, r)
      )
    );
  }
  async drillUp(t, e) {
    const { viewportSystem: i } = this.gis,
      {
        drill: {
          enabled: n,
          duration: r,
          level: { range: o },
        },
      } = this.state;
    if (!n) return this.logService.warn("当前未开启钻取功能"), this;
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;
    let a = this.currentParentLevel;
    if ((t && (a = qV(this.drillData, t)), -1 === a))
      return this.logService.warn(`钻取层级 ${a}不合法，上钻无效`), this;
    if (a > o[1] || a < o[0])
      return this.logService.warn(`钻取层级 ${a}超过最大限制，上钻无效`), this;
    this.isDrilling = !0;
    const s = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };
    (this.drillCache[s.adcode] = s), (this.currentLevel = a);
    const l = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    this.currentCode = null != t ? t : l.adcode;
    const u = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    (this.currentParentCode = u.adcode),
      (this.currentParentLevel = u.level),
      (this.currentRegion = null),
      window.tW(this);
    const c = {
      type: "drillUp",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };
    return (
      this.ee.emit("drill", c),
      this.ee.emit("drillUp", c),
      WV(this),
      await new Promise((t) =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit("drillUpEnd", c),
                this.ee.emit("drillEnd", c),
                (this.isDrilling = !1);
            })(),
            t(this);
        }, r)
      )
    );
  }
  async drillRegion(t, e) {
    const { viewportSystem: i } = this.gis,
      {
        drill: { enabled: n, duration: r },
      } = this.state;
    if (!n) return this.logService.warn("当前未开启钻取功能"), this;
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;
    (this.isDrilling = !0), (this.currentRegion = t);
    const o = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };
    (this.drillCache[o.adcode] = o),
      (this.currentLevel = 0),
      (this.currentCode = t);
    const a = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    (this.currentParentCode = a.adcode),
      (this.currentParentLevel = a.level),
      (async function (t) {
        const e = t.state.data[t.currentRegion];
        (t.rawSubDistrictData = e.rawSubDistrictData),
          (t.subDistrictData = e.subDistrictData),
          (t.rawDistrictData = e.rawDistrictData),
          (t.districtData = e.districtData);
      })(this);
    const s = {
      type: "drillRegion",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };
    return (
      this.ee.emit("drill", s),
      this.ee.emit("drillRegion", s),
      WV(this),
      await new Promise((t) =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit("drillEnd", s),
                this.ee.emit("drillRegionEnd", s),
                (this.isDrilling = !1);
            })(),
            t(this);
        }, r)
      )
    );
  }
  async initPOI() {
    const { poi: t } = this.state,
      {
        enabled: e,
        background: i,
        orient: n,
        alignment: r,
        offsetX: o,
        offsetY: a,
        major: s,
      } = t;
    if (!e || !s.enabled) return void this.clearPoiGroup();
    this.clearPoiGroup();
    const { baseHeight: l } = this.gis.globalOpts.bboxOption;
    for (let u = 0; u < this.subDistrictInfoArr.length; u++) {
      const t = this.subDistrictInfoArr[u],
        { centroid: e, alias: c } = t;
      if (!e) continue;
      const h = new Ye(0, 0, 0);
      await this.poiGroup.addText(
        h,
        n,
        r,
        i,
        {
          content: `${s.format ? s.format(c) : c}`,
          props: s,
        },
        null,
        o,
        a,
        {
          position: [e[0], e[1], l],
          offsetX: o,
          offsetY: a,
        }
      );
    }
    this._updatePOI(!0);
  }
  scaleAdaptation(t = !0) {
    const { project: e } = this.gis.layerManager.geo,
      {
        districtStyle: { heightScale: i },
        viewClip: n,
      } = this.state,
      { drillSave: r } = this.gis.viewportSystem.get(),
      o = this.drillCache[this.currentCode];
    let a;
    a = o && r ? o.viewPortInfo : this.gis.viewportSystem.get();
    const { pitch: s, rotation: l, offset: u } = a,
      c = Vf,
      h = null == n ? void 0 : n[this.currentCode],
      p = window.KV({
        geojson: {
          type: "FeatureCollection",
          features: this.rawDistrictData,
        },
        geojsonProj: {
          type: "FeatureCollection",
          features: this.districtData,
        },
        project: e,
        geojsonUtil: window.am,
        worldBboxSize: c,
        heightScale: i,
        pitch: s,
        rotation: l,
        offset: u,
        viewClip: h,
      });
    (this.gis.globalOpts = p),
      this.gis.layerManager.ee.emit("updateArea", {
        cameraTween: t,
      }),
      this.gis.lightSystem.ee.emit("updateArea");
  }
  registerHeightScale() {
    this._propsWatch.addWatch([
      this._propsWatch.defaultRule(
        ["districtStyle", "heightScale"],
        "diffDeep",
        () => {
          const { bboxOption: t } = this.gis.globalOpts;
          (t.baseHeight =
            t.size.bboxSize * this.state.districtStyle.heightScale * 0.05),
            this.gis.layerManager.ee.emit("updateArea", {
              cameraChange: !1,
              cameraTween: !1,
            }),
            this.gis.lightSystem.ee.emit("updateArea");
        }
      ),
    ]);
  }
  debugBbox() {
    const {
        bboxOption: {
          size: { width: t, height: e },
          centerProj: i,
          baseHeight: n,
        },
      } = this.gis.globalOpts,
      r = new dr(t, e),
      o = new pn({
        color: 16711680,
        opacity: 0.1,
        transparent: !0,
        side: xt,
      }),
      a = new window.Wn(r, o);
    a.position.set(i[0], i[1], n + 1),
      a.setRenderIndex(window.lU.PARTICLE_LAYER),
      this.coreGroup.add(a);
  }
  handleAnimation() {
    this.boundaryStreamerLayer && this.boundaryStreamerLayer.handleAnimation();
  }
  clear() {
    this.clearCoreGroup(),
      this.clearPoiGroup(),
      this.clearInteractionGroup(),
      (this.isDrilling = !1),
      (this.drillData = {
        default: [new Map()],
        process: [new Map()],
      }),
      (this.currentCode = Mk),
      (this.currentLevel = 0),
      (this.currentParentCode = null),
      (this.currentParentLevel = -1),
      (this.drillCache = {}),
      (this.subDistrictStrokeGroup = null),
      (this.subDistrictFillGroup = null),
      (this.districtStrokeGroup = null),
      (this.districtBottomStrokeGroup = null),
      (this.districtFillGroup = null),
      (this.extrudeBackgroundFillGroup = null),
      (this.subDistrictInfoArr = []),
      (this.districtData = null),
      (this.subDistrictData = null),
      (this.rawDistrictData = null),
      (this.rawSubDistrictData = null),
      (this.extrudeTopMaterial = null),
      (this.extrudeSideMaterial = null),
      (this.extrudeInnerShadowMaterial = null),
      (this.extrudeBackgroundTopMaterial = null),
      (this.extrudeBackgroundSideMaterial = null),
      (this.currentRegion = null),
      (this.bgGeoData = null),
      (this.boundaryStreamerLayer = null),
      (this.gis.globalOpts = null);
  }
  async release() {
    if (
      (this.clear(),
      this._initLayerGroup(),
      await this.__initMap(!0),
      this.gis.__destroyed)
    )
      return;
    this.__initEvent(),
      this.animation.start(),
      super.registerInteraction(
        this.state.interaction,
        this.subDistrictFillGroup,
        !1
      ),
      super.emitPropsWatch(),
      this.registerHeightScale(),
      window.FV(this, "extrude"),
      window.BV(this.extrudeSideMaterial, this.state.districtStyle),
      window.zV(this),
      kV(this),
      cV(this.state.districtStyle, this),
      hV(this.state.districtStyle, this),
      VV(this.state.subDistrictStyle, this),
      window.FV(this, "extrude-background"),
      window.BV(this.extrudeBackgroundSideMaterial, this.state.extrudeBackgroundStyle);
    const { backgroundBboxOption: t } = this.gis.globalOpts;
    t &&
      ((t.baseHeight =
        t.size.bboxSize *
        this.state.extrudeBackgroundStyle.heightScale *
        0.05 *
        0.2),
      window.jV(t.baseHeight, this)),
      await this.initPOI();
  }
  _initPropsWatchRule() {
    super._initPropsWatchRule(),
      this._propsWatch.addWatch([
        this._propsWatch.defaultRule(["viewClip"], "diffDeep", () => {
          (this.drillCache = {}), this.scaleAdaptation(!1);
        }),
        this._propsWatch.defaultRule(
          ["districtStyle", "fill"],
          "diffDeep",
          () => {
            window.FV(this, "extrude");
          }
        ),
        this._propsWatch.defaultRule(
          ["districtStyle", "sideConfig"],
          "diffDeep",
          () => {
            window.BV(this.extrudeSideMaterial, this.state.districtStyle);
          }
        ),
        this._propsWatch.defaultRule(
          ["districtStyle", "innerShadow"],
          "diffDeep",
          () => {
            window.zV(this);
          }
        ),
        this._propsWatch.defaultRule(
          ["districtStyle", "boundaryStreamer"],
          "diffDeep",
          () => {
            kV(this);
          }
        ),
        this._propsWatch.defaultRule(
          ["districtStyle", "stroke"],
          "diffDeep",
          () => {
            cV(this.state.districtStyle, this);
          }
        ),
        this._propsWatch.defaultRule(
          ["districtStyle", "bottomStroke"],
          "diffDeep",
          () => {
            hV(this.state.districtStyle, this);
          }
        ),
        this._propsWatch.defaultRule(
          ["subDistrictStyle", "stroke"],
          "diffDeep",
          () => {
            VV(this.state.subDistrictStyle, this);
          }
        ),
        this._propsWatch.defaultRule(
          ["extrudeBackgroundStyle", "fill"],
          "diffDeep",
          () => {
            window.FV(this, "extrude-background");
          }
        ),
        this._propsWatch.defaultRule(
          ["extrudeBackgroundStyle", "sideConfig"],
          "diffDeep",
          () => {
            window.BV(
              this.extrudeBackgroundSideMaterial,
              this.state.extrudeBackgroundStyle
            );
          }
        ),
        this._propsWatch.defaultRule(
          ["extrudeBackgroundStyle", "heightScale"],
          "diffDeep",
          () => {
            const { backgroundBboxOption: t } = this.gis.globalOpts;
            t &&
              ((t.baseHeight =
                t.size.bboxSize *
                this.state.extrudeBackgroundStyle.heightScale *
                0.05 *
                0.2),
              window.jV(t.baseHeight, this));
          }
        ),
        this._propsWatch.defaultRule("poi", "diffDeep", () => {
          this.initPOI();
        }),
      ]);
  }
}

export default eW;
