let oV = class {
  constructor(t, e) {
    (this.gis = t),
      (this.props = e),
      (this.animation = new window.TU()),
      (this.ee = new dt()),
      (this.scaleService = window.HH),
      (this.listenerObj = new window.As()),
      (this.comboTimeout = 200),
      (this.activeArr = []),
      (this.handleDblclick = (t) => {
        clearTimeout(this.comboTimer),
          (this.comboTimer = setTimeout(() => {
            this.comboTimer = null;
          }, this.comboTimeout));
      }),
      this._baseLayerinit();
    const { containerDom: i } = this.gis.props;
    i.addEventListener("dblclick", this.handleDblclick, !1);
  }
  _baseLayerinit() {
    (this.group = new window.As()),
      (this.group.userData.isRootLayer = !0),
      (this.group.userData.invertedRelection = !1),
      (this.id = this.group.uuid),
      (this.dataView = new window.ak(this.gis.dataSet, {})),
      (this.textureManager = window.Yd(this.textureService.getTextureManager)(
        this.id
      )),
      (this._propsWatch = kf.createPropsWatch()),
      this._initPropsWatchRule();
  }
  _initialState(t) {
    this.state = af(t, this.props);
  }
  _initLayerGroup(t) {
    const {
        layerName: e,
        layerType: i,
        coreGroup: n,
        label: r = {},
        isHudScene: o = !1,
      } = t,
      { enabled: a = !1, markerType: s = "css2d" } = r,
      { sceneSystem: l, layerManager: u } = this.gis;
    (this.layerType = i),
      o ? l.hudScene.add(this.group) : l.coreScene.add(this.group),
      (this.group.name = e),
      (this.coreGroup = null != n ? n : new window.As()),
      (this.coreGroup.name = `core-${e}`),
      this.group.add(this.coreGroup),
      (this.poiGroup = new window.eV()),
      (this.poiGroup.name = `${e}-poi-layer`),
      l.hudScene.add(this.poiGroup),
      u.add({
        layerType: i,
        layer: this,
      }),
      a &&
        this.gis.eventManager.ee.emit("markerEnabled", {
          markerType: s,
        }),
      this.updateBaseHeight();
  }
  _getParseData(t) {
    const { rawData: e, layerType: i, coordsField: n } = t,
      { clipMode: r } = this.state,
      { globalOpts: o } = this.gis,
      { boundary: a } = o,
      s = Yw(e[0]) ? "geojson" : "bytejson",
      l = !(!r || r === Qw.none),
      u = this.dataView
        .parse(e, {
          type: s,
          options: {
            layerType: i,
            coordsField: n,
          },
        })
        .transform({
          type: "filter",
          options: {
            callback: l && ((t) => Kw(t, a.features[0], r, i)),
          },
        })
        .transform({
          type: "webgis",
          options: {
            as: "coordinates",
          },
        }).latestData;
    return this.state.parseData.push(...u), this;
  }
  _getScaleData(t) {
    const { parseData: e } = this.state;
    return (this.state.scaleData = this.scaleService.apply(t, e)), this;
  }
  _getRenderData(t) {}
  add(t) {
    return this;
  }
  remove() {
    this._destroy();
  }
  set(t) {
    return this._propsWatch.compare(this.state, t), this;
  }
  get() {
    return this.state;
  }
  updateArea(t) {
    this.updateBaseHeight(), this._updateOffset(this.state.common.offset);
  }
  updateBaseHeight() {
    const { globalOpts: t } = this.gis;
    if (t) {
      const e = t.bboxOption.baseHeight;
      this.coreGroup.position.setZ(e),
        this.poiGroup.updateBaseHeight(e),
        this._updatePOI(!0);
    }
  }
  setContainer(t) {
    this.container = t;
  }
  getContainer() {
    return this.container;
  }
  clear() {
    this.clearCoreGroup(),
      this.clearPoiGroup(),
      this.clearInteractionGroup(),
      this._clearData();
  }
  clearCoreGroup() {
    this.coreGroup.destroy(!1);
  }
  clearPoiGroup() {
    this.poiGroup.abort(), this.poiGroup.destroy(!1);
  }
  clearInteractionGroup() {
    this.unActive();
  }
  _clearData() {
    (this.dataView.latestData = null),
      (this.state.data = []),
      (this.state.parseData = []),
      (this.state.scaleData = []),
      (this.state.renderData = []);
  }
  _destroy() {
    var t;
    const { sceneSystem: e, layerManager: i } = this.gis,
      { containerDom: n } = this.gis.props;
    n.removeEventListener("dblclick", this.handleDblclick),
      this.clear(),
      i.__removePure({
        layerID: this.id,
      }),
      this.dataView.destroy(),
      this.textureService.removeTextureManager(this.id),
      null == (t = e.coreScene) || t.remove(this.group),
      this.ee.removeAllListeners(),
      (this._propsWatch = null);
  }
  on(t, e, i) {
    Fk(t) || this.gis.eventManager.bindEvent(this.id, t), this.ee.on(t, e, i);
  }
  off(t, e) {
    Fk(t) || this.gis.eventManager.removeMapEvent(this.id, t),
      this.ee.removeListener(t),
      e && e();
  }
  rotate(t, e) {
    switch (t) {
      case "x":
        this.group.rotateX(De(e));
        break;
      case "y":
        this.group.rotateY(De(e));
        break;
      case "z":
        this.group.rotateZ(De(e));
    }
  }
  handleAnimation(t) {}
  emitPropsWatch(t = {}) {
    this._propsWatch.compare(t, this.state);
  }
  _initPropsWatchRule() {
    this._propsWatch.addWatch([
      this._propsWatch.defaultRule("", "always", (t) => {
        this.state = af(this.state, t);
      }),
      this._propsWatch.defaultRule(["common", "offset"], "diff", (t) => {
        cf(t.common.offset) && this._updateOffset(t.common.offset);
      }),
      this._propsWatch.defaultRule(["common", "visible"], "diff", (t) => {
        window.sf(t.common, "visible") && this._updateVisible(t.common.visible);
      }),
      this._propsWatch.defaultRule(["common", "zIndex"], "diff", (t) => {
        window.sf(t.common, "zIndex") && this._updateZIndex(t.common.zIndex);
      }),
      this._propsWatch.defaultRule(["common", "zoomRange"], "diff", (t) => {
        window.sf(t.common, "zoomRange") && this._updateZoomRange(t.common.zoomRange);
      }),
      this._propsWatch.defaultRule("interaction", "diffDeep", () => {
        this._updateInteraction(this.state.interaction);
      }),
    ]);
  }
  _updateOffset(t) {
    const [e, i, n] = t,
      { globalOpts: r } = this.gis,
      { size: o } = r.bboxOption,
      a = window.TA(o.bboxSize, e),
      s = window.TA(o.bboxSize, i),
      l = window.TA(o.bboxSize, n);
    this.extensions &&
      Object.values(this.extensions).forEach((t) => {
        t.group.position.setX(a),
          t.group.position.setY(s),
          t.group.position.setZ(l),
          t._updatePOI(!0);
      }),
      this.group.position.setX(a),
      this.group.position.setY(s),
      this.group.position.setZ(l),
      this._updatePOI(!0);
  }
  _updateVisible(t) {
    this.extensions &&
      Object.values(this.extensions).forEach((e) => {
        e.group.visible = !!t && e.state.common.visible;
      }),
      "marker-layer" === this.group.name &&
        requestAnimationFrame(() => {
          const e = `data-layerid="${this.id}"`;
          document.querySelectorAll(`[${e}]`).forEach((e) => {
            e.firstChild.style.display = t ? "block" : "none";
          });
        }),
      (this.group.visible = t),
      (this.poiGroup.visible = t);
  }
  _updateZoomRange(t) {
    this.extensions &&
      Object.values(this.extensions).forEach((e) => {
        (e.group.ext.zoomRange = t), (e.poiGroup.ext.zoomRange = t);
      }),
      (this.group.ext.zoomRange = t),
      (this.poiGroup.ext.zoomRange = t);
  }
  _updateZIndex(t) {
    this.extensions &&
      Object.values(this.extensions).forEach((e) => {
        e.group.zIndex = null != t ? t : e.group.zIndex;
      }),
      "marker-layer" === this.group.name &&
        requestAnimationFrame(() => {
          const e = `data-layerid="${this.id}"`;
          document.querySelectorAll(`[${e}]`).forEach((e) => {
            e.style.zIndex = t + "";
          });
        }),
      (this.group.zIndex = null != t ? t : this.group.zIndex);
  }
  _updateInteraction(t) {
    if (((this.interaction = t), !this.interaction)) return;
    const { hover: e, select: i } = this.interaction;
    [e, i].forEach((t) => {
      t.enabled
        ? this.gis.eventManager.bindEvent(this.id, t.trigger)
        : this.gis.eventManager.removeMapEvent(this.id, t.trigger);
    });
  }
  registerInteraction(t = this.state.interaction, e = this.coreGroup, i = !1) {
    (this.interaction = t), (this.listenerObj = e), (this.recursive = i);
  }
  active(t) {
    const {
      type: e,
      object: i,
      id: n,
      instanceId: r,
      name: o,
      color: a,
      multi: s,
    } = t;
    return cf(n) || cf(o)
      ? (o
          ? o instanceof Array
            ? o.forEach((t) => {
                this._activeAtomic({
                  name: t,
                  object: i,
                  color: a,
                  type: e,
                  multi: s,
                });
              })
            : this._activeAtomic({
                name: o,
                object: i,
                color: a,
                type: e,
                multi: s,
              })
          : n instanceof Array
          ? n.forEach((t) => {
              this._activeAtomic({
                id: t,
                object: i,
                color: a,
                type: e,
                instanceId: r,
                multi: s,
              });
            })
          : this._activeAtomic({
              id: n,
              object: i,
              color: a,
              type: e,
              instanceId: r,
              multi: s,
            }),
        this)
      : (this.logService.error("active 需要 传入 id 或 name"), this);
  }
  _activeAtomic(t) {
    const { object: e } = t;
    e && e.isInstancedMesh
      ? this._activeInstanceAtomic(t)
      : this._activeMeshAtomic(t);
  }
  _activeInstanceAtomic(t) {
    const {
      color: e,
      type: i,
      object: n,
      instanceId: r,
      id: o,
      name: a,
      multi: s,
    } = t;
    n.ext.activeArr || (n.ext.activeArr = []);
    const l = n.ext.activeArr.findIndex(
      (t) => t.isActive && t.instanceId === r
    );
    if (-1 != l) {
      const t = n.ext.activeArr[l];
      if ("select" === t.type && "hover" === i) return;
      if ("select" === t.type && "select" === i) {
        const { instanceId: e, rawColor: i } = t;
        return (
          ZD(n.geometry.attributes.color, e, i),
          (n.ext.activeArr[l].type = ""),
          (n.ext.activeArr[l].activeColor = ""),
          void (n.ext.activeArr[l].isActive = !1)
        );
      }
    }
    "hover" === i &&
      this.unActive({
        type: "hover",
      }),
      "select" === i &&
        !0 !== s &&
        this.unActive({
          type: "select",
        });
    const u = n.ext.activeArr.findIndex((t) => t.instanceId === r);
    let c;
    if (-1 === u) {
      const { color: t } = n.geometry.attributes,
        { array: o, itemSize: a } = t;
      (c = Array.from(o).slice(r * a, r * a + a)),
        t.normalized && (c = c.map((t) => t / 255)),
        n.ext.activeArr.push({
          rawColor: c,
          activeColor: e,
          instanceId: r,
          isActive: !0,
          type: i,
        });
    } else (n.ext.activeArr[u].type = i), (n.ext.activeArr[u].isActive = !0);
    if (isNaN(Number(e))) {
      const t = EA(e);
      ZD(n.geometry.attributes.color, r, [
        t.color.r,
        t.color.g,
        t.color.b,
        t.opacity,
      ]);
    } else {
      const t = Number(e),
        i = n.ext.activeArr[u];
      ZD(n.geometry.attributes.color, r, [
        (null != c ? c : i.rawColor)[0] * t,
        (null != c ? c : i.rawColor)[1] * t,
        (null != c ? c : i.rawColor)[2] * t,
        (null != c ? c : i.rawColor)[3],
      ]);
    }
    const h = {
      name: a,
      id: o,
      instanceId: r,
      object: n,
      type: i,
      meshs: [],
    };
    this.activeArr.push(h);
  }
  _activeMeshAtomic(t) {
    const { name: e, color: i, type: n, id: r, multi: o } = t,
      a = this.activeArr.findIndex((t) =>
        t.meshs.find((t) => JH(t, e, r) && t.ext.isActive)
      );
    if (-1 != a) {
      const t = this.activeArr[a];
      let i = !1;
      if (
        (t.meshs.forEach((o) => {
          "select" === o.ext.type && "hover" === n
            ? (i = !0)
            : "select" === o.ext.type &&
              "select" === n &&
              (this._unactiveAtomic({
                id: r,
                name: e,
                meshs: t.meshs,
              }),
              this.activeArr.splice(a, 1),
              (i = !0));
        }),
        i)
      )
        return;
    }
    "hover" === n &&
      this.unActive({
        type: "hover",
      }),
      "select" === n &&
        !0 !== o &&
        this.unActive({
          type: "select",
        });
    const s = this.listenerObj.getObjectsByFn((t) => JH(t, e, r));
    if (0 === s.length) return void this.logService.error("active mesh 不存在");
    const l = {
      name: e,
      id: r,
      meshs: [],
      type: n,
    };
    s.forEach((t) => {
      const e = t,
        r = e.material;
      (e.ext.type = n),
        (e.ext.isActive = !0),
        (e.ext.activeColor = i),
        e.ext.rawColor ||
          ((e.ext.rawColor = r.color.clone()),
          (e.ext.rawTransparent = r.transparent),
          (e.ext.rawOpacity = r.opacity));
      if (isNaN(Number(i))) {
        const t = EA(i);
        (r.color = t.color),
          (r.transparent = t.transparent),
          (r.opacity = t.opacity);
      } else {
        const t = Number(i),
          n = e.ext.rawColor.clone();
        r.color = n.multiplyScalar(t);
      }
      (r.needsUpdate = !0), l.meshs.push(t);
    }),
      this.activeArr.push(l);
  }
  unActive(t) {
    for (let e = this.activeArr.length - 1; e >= 0; e--) {
      const i = this.activeArr[e],
        n = i.object,
        r = i.type,
        o = i.meshs;
      if (cf(null == t ? void 0 : t.id)) {
        const { id: i } = t;
        i instanceof Array
          ? i.forEach((t) => {
              t === n.id &&
                (this._unactiveAtomic({
                  id: t,
                  object: n,
                  meshs: o,
                }),
                this.activeArr.splice(e, 1));
            })
          : i === n.id &&
            (this._unactiveAtomic({
              id: i,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1));
      } else if (null == t ? void 0 : t.name) {
        const { name: i } = t;
        i instanceof Array
          ? i.forEach((t) => {
              t === n.name &&
                (this._unactiveAtomic({
                  name: t,
                  object: n,
                  meshs: o,
                }),
                this.activeArr.splice(e, 1));
            })
          : i === n.name &&
            (this._unactiveAtomic({
              name: i,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1));
      } else
        cf(null == t ? void 0 : t.type)
          ? t.type === r &&
            (this._unactiveAtomic({
              type: t.type,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1))
          : (this._unactiveAtomic({
              type: r,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1));
    }
    return this;
  }
  _unactiveAtomic(t) {
    const { object: e } = t;
    e && e.isInstancedMesh
      ? this._unactiveInstanceAtomic(t)
      : this._unactiveMeshAtomic(t);
  }
  _unactiveInstanceAtomic(t) {
    const { type: e, object: i } = t;
    for (let n = i.ext.activeArr.length - 1; n >= 0; n--) {
      const t = i.ext.activeArr[n],
        { instanceId: r, isActive: o, rawColor: a } = t;
      o &&
        e === t.type &&
        (ZD(i.geometry.attributes.color, r, a),
        (t.type = ""),
        (t.activeColor = ""),
        (t.isActive = !1));
    }
  }
  _unactiveMeshAtomic(t) {
    const { id: e, type: i, name: n, meshs: r } = t;
    r.forEach((t) => {
      if ((JH(t, n, e) || (!!i && t.ext.type === i)) && t.ext.isActive) {
        const e = t.material;
        (e.color = t.ext.rawColor),
          (e.transparent = t.ext.rawTransparent),
          (e.opacity = t.ext.rawOpacity),
          (e.needsUpdate = !0),
          (t.ext.isActive = !1),
          (t.ext.activeColor = ""),
          (t.ext.type = "");
      }
    });
  }
  _updatePOI(t = !1) {
    const { poi: e, interaction: i } = this.state;
    if (!e || !e.enabled) return;
    const { cameraSystem: n } = this.gis,
      { coverEnable: r, hideOnMove: o } = e;
    if (o && !t) return void (this.poiGroup.moving = !0);
    t && (this.poiGroup.moving = !1),
      this.group.updateWorldMatrix(!0, !1),
      n.coreCamera.updateWorldMatrix(!0, !1),
      this.poiGroup.updateTextPosition(this.group.matrixWorld, n);
    (i.hover.enabled && i.hover.effect.poi) ||
    (i.select.enabled && i.select.effect.poi)
      ? this.poiGroup.hide({
          each: !0,
        })
      : r || this.poiGroup.collision();
  }
  _mapSize(t, e) {
    const { globalOpts: i } = this.gis;
    let n = 100;
    switch (e) {
      case "straightline":
        n = (t / 100) * i.layerFitValue.straightLineWidth;
        break;
      case "flyline":
        n = (t / 100) * i.layerFitValue.flylineWidth;
        break;
      case "z":
        n = (t / 100) * i.layerFitValue.z;
        break;
      default:
        n = (t / 100) * i.layerFitValue.xy;
    }
    return n;
  }
};

oV = window.rV(
  [
    function (t) {
      return class extends t {
        constructor(t, e) {
          super(t, e),
            this.__layerEvent__ &&
              this.__layerEvent__.forEach(([t, e]) => {
                this.gis.ee.on(t, this[e]);
              });
        }
        remove() {
          super.remove(),
            this.__layerEvent__ &&
              this.__layerEvent__.forEach(([t, e]) => {
                this.gis.ee.off(t, this[e]);
              });
        }
      };
    },
  ],
  oV
);

window.rV([window._G(window.KB.ILogService)], oV.prototype, "logService", 2),
  window.rV(
    [window._G(window.KB.ITextService)],
    oV.prototype,
    "textService",
    2
  ),
  window.rV(
    [window._G(window.KB.ITextureService)],
    oV.prototype,
    "textureService",
    2
  );

window.oV = oV;
