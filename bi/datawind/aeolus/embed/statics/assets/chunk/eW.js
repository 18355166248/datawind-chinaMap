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
  /**
   * 初始化地图组件
   * 设置初始状态、图层组、事件监听等
   * @returns {Promise<void>}
   */
  async init() {
    // 初始化状态
    this._initialState();

    // 初始化图层组
    this._initLayerGroup();

    // 初始化地图渲染系统
    await this.__initMap();

    // 如果GIS已销毁则不继续执行
    if (this.gis.__destroyed) return;

    // 初始化事件监听
    this.__initEvent();

    // 启动动画
    this.animation.start();

    // 注册交互
    super.registerInteraction(
      this.state.interaction,
      this.subDistrictFillGroup,
      false
    );

    // 触发属性监听
    super.emitPropsWatch();

    // 注册高度缩放
    this.registerHeightScale();

    // 触发加载完成事件
    this.ee.emit("loaded", this);

    // 执行回调函数
    this.cb();
  }
  /**
   * 初始化组件状态
   * 调用父类方法设置初始状态
   */
  _initialState() {
    super._initialState({});
  }
  /**
   * 初始化图层组
   * 创建基础地图图层并释放图层组
   */
  _initLayerGroup() {
    // 调用父类方法初始化基础图层
    super._initLayerGroup({
      layerName: "base-map-layer",
      layerType: "base",
    });

    // 释放并创建子图层组
    this.__releaseLayerGroup();
  }
  /**
   * 初始化事件监听
   * 根据钻取配置绑定相关事件
   */
  __initEvent() {
    const { drill: drillConfig } = this.state;

    // 如果启用了钻取功能且未禁用鼠标事件
    if (drillConfig.enabled && !drillConfig.preventMouse) {
      // 绑定上钻和下钻事件
      this.gis.eventManager.bindEvent(this.id, drillConfig.drillUpEvent);
      this.gis.eventManager.bindEvent(this.id, drillConfig.drillDownEvent);
    }
  }
  /**
   * 创建并释放图层组
   * 初始化各种地图图层组并设置其属性
   */
  __releaseLayerGroup() {
    // 创建区域边界线图层组
    this.districtStrokeGroup = new As();
    this.districtStrokeGroup.name = "district-stroke";

    // 创建区域底部边界线图层组
    this.districtBottomStrokeGroup = new As();
    this.districtBottomStrokeGroup.name = "district-bottom-stroke";

    // 创建区域填充图层组
    this.districtFillGroup = new As();
    this.districtFillGroup.name = "district-fill";

    // 创建背景拉伸填充图层组
    this.extrudeBackgroundFillGroup = new As();
    this.extrudeBackgroundFillGroup.name = "extrude-background-fill";

    // 创建子区域边界线图层组
    this.subDistrictStrokeGroup = new As();
    this.subDistrictStrokeGroup.name = "sub-district-stroke";

    // 创建子区域填充图层组
    this.subDistrictFillGroup = new As();
    this.subDistrictFillGroup.name = "sub-district-fill";

    // 设置监听对象为子区域填充图层组
    this.listenerObj = this.subDistrictFillGroup;

    // 将所有图层组添加到核心组
    this.coreGroup.add(
      this.districtStrokeGroup,
      this.districtBottomStrokeGroup,
      this.districtFillGroup,
      this.extrudeBackgroundFillGroup,
      this.subDistrictFillGroup,
      this.subDistrictStrokeGroup
    );

    // 设置图层组的反射属性
    this.coreGroup.userData.invertedRelection = true;
    this.districtStrokeGroup.userData.invertedRelection = false;
    this.districtBottomStrokeGroup.userData.invertedRelection = false;
    this.districtFillGroup.userData.invertedRelection = true;
    this.extrudeBackgroundFillGroup.userData.invertedRelection = true;
    this.subDistrictFillGroup.userData.invertedRelection = false;
    this.subDistrictStrokeGroup.userData.invertedRelection = false;
  }
  /**
   * 设置组件属性
   * @param {Object} props - 要设置的属性对象
   * @returns {Object} 返回当前实例，支持链式调用
   */
  set(props) {
    super.set(props);
    return this;
  }

  /**
   * 获取组件属性
   * @returns {Object} 返回组件当前属性
   */
  get() {
    return super.get();
  }

  /**
   * 添加子组件
   * 当前组件不支持添加子组件，仅返回自身
   * @returns {Object} 返回当前实例，支持链式调用
   */
  add() {
    return this;
  }

  /**
   * 移除组件
   * 调用父类方法移除组件
   */
  remove() {
    super.remove();
  }
  /**
   * 更新地图区域
   * 根据提供的配置更新相机状态和高度
   * @param {Object} config - 区域更新配置
   * @returns {Object} 返回当前实例，支持链式调用
   */
  updateArea(config) {
    const { cameraStatus: cameraState } = this.gis.globalOpts,
      {
        drill: { duration: animationDuration },
      } = this.state;

    // 计算相机变化
    const { cameraChange: shouldChangeCamera, cameraTween: useTween } = af(
      window.Ok,
      config
    );

    // 如果需要更新相机位置
    if (shouldChangeCamera) {
      // 设置相机状态，可选择是否使用动画
      this.gis.viewportSystem.setCameraState(
        cameraState,
        useTween
          ? {
              duration: animationDuration,
              type: "straight",
            }
          : undefined
      );
    }

    // 更新基础高度
    this.updateBaseHeight();

    // 更新POI
    this._updatePOI(true);

    return this;
  }
  /**
   * 初始化地图拉伸效果
   * 创建区域拉伸和背景拉伸的3D效果
   * @returns {Promise<void>}
   */
  async initExtrude() {
    const {
      bboxOption: bboxConfig,
      boundary: boundaryData,
      boundaryProj: boundaryProjection,
    } = this.gis.globalOpts;
    const {
      districtStyle: districtStyleConfig,
      extrudeBackgroundStyle: backgroundStyleConfig,
    } = this.state;

    // 处理区域拉伸效果
    if (districtStyleConfig && districtStyleConfig.enabled) {
      // 创建区域拉伸效果
      (function createDistrictExtrude(options, context) {
        const { geojson: geoJsonData, bboxOption: bboxOptions } = options;
        // 处理地理数据
        const processedData = window.bV(geoJsonData, bboxOptions.bboxProj);

        // 初始化索引和位置计数器
        let indexOffset = 0,
          positionOffset = 0,
          indexCount = 0,
          positionCount = 0;

        // 获取基础高度
        const baseHeight = bboxOptions.baseHeight ? bboxOptions.baseHeight : 1;

        // 遍历几何数据组
        for (
          let groupIndex = 0;
          groupIndex < processedData.group.length;
          groupIndex += 3
        ) {
          // 更新偏移量
          indexOffset += indexCount;
          positionOffset += positionCount;
          indexCount = processedData.group[groupIndex + 1];
          positionCount = processedData.group[groupIndex + 2];

          // 根据几何类型创建不同的网格
          switch (processedData.group[groupIndex]) {
            case 0: // 顶部面
              // 创建顶部几何体 BufferGeometry
              const topGeometry = window.RV({
                index: processedData.index.slice(
                  indexOffset,
                  1 * (indexOffset + indexCount)
                ),
                position: processedData.position.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                normal: processedData.normal.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                uv: processedData.uv.slice(
                  2 * positionOffset,
                  2 * (positionOffset + positionCount)
                ),
              });

              // 创建顶部网格
              const topMesh = new window.Wn(
                topGeometry,
                context.extrudeTopMaterial
              );
              topMesh.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH);
              topMesh.scale.z = baseHeight;
              topMesh.position.z = 0;
              topMesh.userData.faceType = "top";
              topMesh.name = "map-top";
              topMesh.frustumCulled = false;
              context.districtFillGroup.add(topMesh);

              // 创建内阴影网格 Mesh
              const innerShadowMesh = new window.Wn(
                topGeometry,
                context.extrudeInnerShadowMaterial
              );

              innerShadowMesh.setRenderIndex(
                window.lU.BASE_MAP_LAYER_INNERSHADOW_MESH
              );
              innerShadowMesh.scale.z = 1.01 * baseHeight;
              innerShadowMesh.position.z = 0;
              innerShadowMesh.userData.faceType = "map-innerShadow";
              innerShadowMesh.name = "map-innerShadow";
              innerShadowMesh.frustumCulled = false;
              context.districtFillGroup.add(innerShadowMesh);
              break;

            case 1: // 侧面
              // 创建侧面几何体
              const sideGeometry = window.RV({
                index: processedData.index.slice(
                  indexOffset,
                  1 * (indexOffset + indexCount)
                ),
                position: processedData.position.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                normal: processedData.normal.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                uv: processedData.uv.slice(
                  2 * positionOffset,
                  2 * (positionOffset + positionCount)
                ),
              });

              // 创建侧面网格
              const sideMesh = new window.Wn(
                sideGeometry,
                context.extrudeSideMaterial
              );
              sideMesh.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH);
              sideMesh.scale.z = baseHeight;
              sideMesh.position.z = 0;
              sideMesh.name = "map-side";
              sideMesh.userData.faceType = "side";
              sideMesh.userData.invertedRelection = true;
              sideMesh.castShadow = true;
              sideMesh.frustumCulled = false;
              context.districtFillGroup.add(sideMesh);
          }
        }
      })(
        {
          geojson: boundaryProjection,
          bboxOption: bboxConfig,
        },
        this
      );
    }

    // 处理背景拉伸效果
    if (backgroundStyleConfig && backgroundStyleConfig.enabled) {
      // 加载背景地理数据
      if (!this.bgGeoData) {
        const geoDataConfig = {
          type: xk.GEOBUF_URL,
          data: `https://lf3-dpfe.${atob(
            "Ynl0ZXRvcy5jb20="
          )}/obj/gis/data/worldborderworldborder_gc.pbf`,
        };
        this.bgGeoData = await ZV(geoDataConfig, {
          useProcess: false,
          useProject: false,
        });
      }

      // 处理边界框配置
      const bboxConfigProcessed = UV(bboxConfig, this);

      // 计算背景区域
      const backgroundGeoJson = (function calculateBackgroundArea(
        bboxConfigProcessed,
        bgGeoData,
        boundaryData
      ) {
        const { bbox2: bbox } = bboxConfigProcessed;

        // 计算边界框与背景数据的交集
        const intersection = Ww.intersect(
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [bbox[0], bbox[1]],
                  [bbox[2], bbox[1]],
                  [bbox[2], bbox[3]],
                  [bbox[0], bbox[3]],
                  [bbox[0], bbox[1]],
                ],
              ],
            },
          },
          bgGeoData.__geojson__.features[0]
        );

        // 创建特征集合
        let featureCollection = {
          type: "FeatureCollection",
          features: [intersection],
        };

        // 确保多边形方向正确
        featureCollection = window.am.rewind(featureCollection);

        // 计算边界框对角线距离
        const diagonalDistance = Ww.distance(
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [
                bboxConfigProcessed.bbox[0],
                bboxConfigProcessed.bbox[1],
              ],
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [
                bboxConfigProcessed.bbox[2],
                bboxConfigProcessed.bbox[3],
              ],
            },
          },
          {
            units: "meters",
          }
        );

        // 创建缓冲区
        const buffer = Ww.buffer(
          bboxConfigProcessed.features[0],
          ~~(0.001 * diagonalDistance),
          {
            units: "meters",
            steps: 1,
          }
        );

        // 计算差集得到背景区域
        featureCollection = {
          type: "FeatureCollection",
          features: [Ww.difference(intersection, buffer)],
        };

        // 转换为适合渲染的格式
        return sm(lV(featureCollection), Qf);
      })(bboxConfigProcessed, this.bgGeoData, boundaryData);

      // 创建背景拉伸效果
      (function createBackgroundExtrude(options, context) {
        const { geojson: geoJsonData, bboxOption: bboxOptions } = options;

        // 处理地理数据
        const processedData = window.bV(geoJsonData, bboxOptions.bboxProj);

        // 初始化索引和位置计数器
        let indexOffset = 0,
          positionOffset = 0,
          indexCount = 0,
          positionCount = 0;

        // 遍历几何数据组
        for (
          let groupIndex = 0;
          groupIndex < processedData.group.length;
          groupIndex += 3
        ) {
          // 更新偏移量
          indexOffset += indexCount;
          positionOffset += positionCount;
          indexCount = processedData.group[groupIndex + 1];
          positionCount = processedData.group[groupIndex + 2];

          // 根据几何类型创建不同的网格
          switch (processedData.group[groupIndex]) {
            case 0: // 顶部面
              // 创建顶部几何体
              const topGeometry = window.RV({
                index: processedData.index.slice(
                  indexOffset,
                  1 * (indexOffset + indexCount)
                ),
                position: processedData.position.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                normal: processedData.normal.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                uv: processedData.uv.slice(
                  2 * positionOffset,
                  2 * (positionOffset + positionCount)
                ),
              });

              // 创建顶部网格
              const topMesh = new window.Wn(
                topGeometry,
                context.extrudeBackgroundTopMaterial
              );
              topMesh.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH);
              topMesh.scale.z = bboxOptions.baseHeight
                ? bboxOptions.baseHeight
                : 1;
              topMesh.position.z = 0;
              topMesh.userData.faceType = "top";
              topMesh.name = "map-top";
              topMesh.receiveShadow = true;
              topMesh.frustumCulled = false;
              context.extrudeBackgroundFillGroup.add(topMesh);
              break;

            case 1: // 侧面
              // 创建侧面几何体
              const sideGeometry = window.RV({
                index: processedData.index.slice(
                  indexOffset,
                  1 * (indexOffset + indexCount)
                ),
                position: processedData.position.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                normal: processedData.normal.slice(
                  3 * positionOffset,
                  3 * (positionOffset + positionCount)
                ),
                uv: processedData.uv.slice(
                  2 * positionOffset,
                  2 * (positionOffset + positionCount)
                ),
              });

              // 创建侧面网格
              const sideMesh = new window.Wn(
                sideGeometry,
                context.extrudeBackgroundSideMaterial
              );
              sideMesh.setRenderIndex(window.lU.BASE_MAP_LAYER_EXTRUDE_MESH);
              sideMesh.scale.z = bboxOptions.baseHeight
                ? bboxOptions.baseHeight
                : 1;
              sideMesh.position.z = 0;
              sideMesh.name = "map-side";
              sideMesh.userData.faceType = "side";
              sideMesh.userData.invertedRelection = true;
              sideMesh.castShadow = true;
              sideMesh.frustumCulled = false;
              context.extrudeBackgroundFillGroup.add(sideMesh);
          }
        }
      })(
        {
          geojson: backgroundGeoJson,
          bboxOption: bboxConfigProcessed,
        },
        this
      );
    }
  }
  /**
   * 更新拉伸样式
   * 根据配置更新区域拉伸和背景拉伸的样式
   * @returns {Promise<void>}
   */
  async updateExtrudeStyle() {
    const {
      districtStyle: districtStyleConfig,
      extrudeBackgroundStyle: backgroundStyleConfig,
    } = this.state;

    // 更新区域拉伸样式
    if (districtStyleConfig && districtStyleConfig.enabled) {
      window.FV(this, "extrude");
      window.zV(this);
      kV(this);
    }

    // 更新背景拉伸样式
    if (backgroundStyleConfig && backgroundStyleConfig.enabled) {
      window.FV(this, "extrude-background");
    }
  }
  /**
   * 更新地图基础高度
   * 调整各个图层组的Z轴位置和比例，以适应新的基础高度
   */
  updateBaseHeight() {
    const { globalOpts: mapGlobalOptions } = this.gis;
    if (mapGlobalOptions) {
      const {
        bboxOption: { baseHeight: heightValue },
      } = mapGlobalOptions;

      // 更新各图层组的Z轴位置
      this.districtStrokeGroup.position.setZ(heightValue);
      this.subDistrictStrokeGroup.position.setZ(heightValue);
      this.subDistrictFillGroup.position.setZ(heightValue);

      // 更新POI组的基础高度
      this.poiGroup.updateBaseHeight(heightValue);

      // 更新区域填充组的高度比例
      (function updateDistrictFillHeight(height, context) {
        context.districtFillGroup.children.forEach((child) => {
          // 内阴影需要稍微高一点以避免Z-fighting
          if (child.userData.faceType === "map-innerShadow") {
            child.scale.z = 1.01 * (height || 1);
          } else {
            child.scale.z = height || 1;
          }
          child.position.z = 0;
        });
      })(heightValue, this);

      // 更新其他相关组件的高度
      window.jV(heightValue, this);
    }
  }
  /**
   * 初始化地图渲染系统
   * 设置场景、材质和渲染器等
   * @param {boolean} useXGisViewport - 是否使用xgis视口系统
   * @returns {Promise<void>}
   */
  async __initMap(useXGisViewport) {
    const {
        districtStyle: districtStyleConfig,
        extrudeBackgroundStyle: backgroundStyleConfig,
      } = this.state,
      { sceneSystem: sceneSystem } = this.gis;

    // 初始化地图数据
    await window.$V(this);

    // 如果GIS已销毁则不继续执行
    if (this.gis.__destroyed) return;

    // 初始化地图组件
    window.tW(this);
    window.uV(this);
    window.HV(this);

    // 调整地图比例
    this.scaleAdaptation(false);

    // 初始化视口系统
    if (useXGisViewport) {
      this.gis.viewportSystem.init("xgis");
    } else {
      this.gis.viewportSystem.init();
    }

    // 再次调整地图比例
    this.scaleAdaptation(false);

    // 创建区域拉伸材质
    (function createExtrudeMaterials(districtStyle, scene, context) {
      // 获取背景颜色
      const backgroundColor = window.EA(scene.state.background.color);

      // 创建顶部材质
      context.extrudeTopMaterial = new window.zA({
        color: backgroundColor.color,
        transparent: true,
        depthTest: true,
        depthWrite: true,
      });

      // 创建内阴影材质 MeshStandardMaterial
      context.extrudeInnerShadowMaterial = new window.zA({
        transparent: true,
        depthTest: true,
        depthWrite: true,
      });

      // 获取侧面颜色配置
      const { colorConfig: sideColorConfig } = districtStyle.sideConfig;
      const {
        bottomColor: sideBottomColor,
        topColor: sideTopColor,
        bottomOpacity: sideBottomOpacity,
        topOpacity: sideTopOpacity,
      } = window.GV(sideColorConfig);

      // 创建侧面渐变材质
      context.extrudeSideMaterial = new window.Jn({
        uniforms: {
          type: {
            type: "int",
            value: ((colorType) => {
              switch (colorType) {
                case "linear":
                  return 1;
                case "ordinal":
                  return 2;
                default:
                  return 1;
              }
            })(sideColorConfig.type),
          },
          bottomColor: {
            type: "vec3",
            value: {
              color: sideBottomColor,
              opacity: sideBottomOpacity,
            },
          },
          topColor: {
            type: "vec3",
            value: {
              color: sideTopColor,
              opacity: sideTopOpacity,
            },
          },
        },
        transparent: true,
        vertexShader:
          "varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}",
        fragmentShader:
          "#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n  vec3 color;\n  float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}",
      });
    })(districtStyleConfig, sceneSystem, this);

    // 创建背景拉伸材质
    (function createBackgroundExtrudeMaterials(
      backgroundStyle,
      scene,
      context
    ) {
      // 获取背景颜色
      const backgroundColor = window.EA(scene.state.background.color);

      // 创建背景顶部材质 MeshStandardMaterial
      context.extrudeBackgroundTopMaterial = new window.zA({
        color: backgroundColor.color,
        transparent: true,
        depthTest: true,
        depthWrite: true,
      });

      // 获取侧面颜色配置
      const { colorConfig: sideColorConfig } = backgroundStyle.sideConfig;
      const {
        bottomColor: sideBottomColor,
        topColor: sideTopColor,
        bottomOpacity: sideBottomOpacity,
        topOpacity: sideTopOpacity,
      } = window.GV(sideColorConfig);

      // 创建背景侧面渐变材质 ShaderMaterial
      context.extrudeBackgroundSideMaterial = new window.Jn({
        uniforms: {
          type: {
            type: "int",
            value: ((colorType) => {
              switch (colorType) {
                case "linear":
                  return 1;
                case "ordinal":
                  return 2;
                default:
                  return 1;
              }
            })(sideColorConfig.type),
          },
          bottomColor: {
            type: "vec3",
            value: {
              color: sideBottomColor,
              opacity: sideBottomOpacity,
            },
          },
          topColor: {
            type: "vec3",
            value: {
              color: sideTopColor,
              opacity: sideTopOpacity,
            },
          },
        },
        transparent: false,
        vertexShader:
          "varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}",
        fragmentShader:
          "#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n    vec3 color;\n    float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}",
        depthTest: true,
        depthWrite: true,
      });
    })(backgroundStyleConfig, sceneSystem, this);

    // 初始化拉伸效果
    await this.initExtrude();
  }
  /**
   * 地图下钻功能 - 从当前层级钻取到下一级行政区
   * @param {string} targetCode - 目标区域的行政区编码
   * @param {Function} callback - 钻取完成后的回调函数
   * @returns {Promise} 返回钻取操作的Promise
   */
  async drillDown(targetCode, callback) {
    const { viewportSystem } = this.gis,
      {
        drill: {
          enabled: drillEnabled,
          duration: animationDuration,
          level: { range: levelRange },
        },
      } = this.state;

    // 检查钻取功能是否启用
    if (!drillEnabled) return this.logService.warn("当前未开启钻取功能"), this;

    // 检查是否有正在进行的钻取操作
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;

    // 获取目标区域的层级
    const targetLevel = qV(this.drillData, targetCode);

    // 验证钻取层级是否有效
    if (targetLevel === -1)
      return (
        this.logService.warn(`钻取层级 ${targetLevel}不合法，下钻无效`), this
      );

    // 检查钻取层级是否在允许范围内
    if (targetLevel > levelRange[1] || targetLevel < levelRange[0])
      return (
        this.logService.warn(`钻取层级 ${targetLevel}超过最大限制，下钻无效`),
        this
      );

    // 标记钻取状态为进行中
    this.isDrilling = true;

    // 保存当前视图状态到缓存
    const currentViewState = {
      adcode: this.currentCode,
      viewPortInfo: viewportSystem.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };

    // 缓存当前状态，便于后续上钻操作
    this.drillCache[currentViewState.adcode] = currentViewState;

    // 更新当前层级和区域编码
    this.currentLevel = targetLevel;
    this.currentCode = targetCode;

    // 获取并设置父级区域信息
    const parentInfo = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    this.currentParentLevel = parentInfo.level;
    this.currentParentCode = parentInfo.adcode;
    this.currentRegion = null;

    // 执行钻取相关操作
    window.tW(this);

    // 创建钻取事件对象
    const drillEvent = {
      type: "drillDown",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };

    // 触发钻取事件
    this.ee.emit("drill", drillEvent);
    this.ee.emit("drillDown", drillEvent);

    // 执行钻取视图更新
    WV(this);

    // 等待动画完成并触发回调
    return await new Promise((resolve) =>
      setTimeout(() => {
        // 执行回调函数
        callback && callback();

        // 触发钻取结束事件
        (() => {
          this.ee.emit("drillDownEnd", drillEvent);
          this.ee.emit("drillEnd", drillEvent);
          this.isDrilling = false;
        })();

        resolve(this);
      }, animationDuration)
    );
  }
  /**
   * 地图上钻功能 - 从当前层级钻取到上一级行政区
   * @param {string} targetCode - 目标区域的行政区编码，可选，默认使用当前区域的父级编码
   * @param {Function} callback - 钻取完成后的回调函数
   * @returns {Promise} 返回钻取操作的Promise
   */
  async drillUp(targetCode, callback) {
    const { viewportSystem } = this.gis,
      {
        drill: {
          enabled: drillEnabled,
          duration: animationDuration,
          level: { range: levelRange },
        },
      } = this.state;

    // 检查钻取功能是否启用
    if (!drillEnabled) return this.logService.warn("当前未开启钻取功能"), this;

    // 检查是否有正在进行的钻取操作
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;

    // 确定目标层级，默认为当前父级层级
    let targetLevel = this.currentParentLevel;

    // 如果指定了目标编码，则获取对应的层级
    if (targetCode) {
      targetLevel = qV(this.drillData, targetCode);
    }

    // 验证钻取层级是否有效
    if (targetLevel === -1)
      return (
        this.logService.warn(`钻取层级 ${targetLevel}不合法，上钻无效`), this
      );

    // 检查钻取层级是否在允许范围内
    if (targetLevel > levelRange[1] || targetLevel < levelRange[0])
      return (
        this.logService.warn(`钻取层级 ${targetLevel}超过最大限制，上钻无效`),
        this
      );

    // 标记钻取状态为进行中
    this.isDrilling = true;

    // 保存当前视图状态到缓存
    const currentViewState = {
      adcode: this.currentCode,
      viewPortInfo: viewportSystem.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };

    // 缓存当前状态，便于后续操作
    this.drillCache[currentViewState.adcode] = currentViewState;

    // 更新当前层级
    this.currentLevel = targetLevel;

    // 获取当前区域的父级信息
    const parentInfo = XV.getParentInfoByAdCode(this.currentCode, this.gis);

    // 设置当前区域编码，如果指定了目标编码则使用目标编码，否则使用父级编码
    this.currentCode = targetCode != null ? targetCode : parentInfo.adcode;

    // 获取并设置新的父级区域信息
    const newParentInfo = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    this.currentParentCode = newParentInfo.adcode;
    this.currentParentLevel = newParentInfo.level;
    this.currentRegion = null;

    // 执行钻取相关操作
    window.tW(this);

    // 创建钻取事件对象
    const drillEvent = {
      type: "drillUp",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };

    // 触发钻取事件
    this.ee.emit("drill", drillEvent);
    this.ee.emit("drillUp", drillEvent);

    // 执行钻取视图更新
    WV(this);

    // 等待动画完成并触发回调
    return await new Promise((resolve) =>
      setTimeout(() => {
        // 执行回调函数
        callback && callback();

        // 触发钻取结束事件
        (() => {
          this.ee.emit("drillUpEnd", drillEvent);
          this.ee.emit("drillEnd", drillEvent);
          this.isDrilling = false;
        })();

        resolve(this);
      }, animationDuration)
    );
  }
  /**
   * 地图区域钻取功能 - 钻取到指定区域
   * @param {string} regionCode - 目标区域的编码
   * @param {Function} callback - 钻取完成后的回调函数
   * @returns {Promise} 返回钻取操作的Promise
   */
  async drillRegion(regionCode, callback) {
    const { viewportSystem } = this.gis,
      {
        drill: { enabled: drillEnabled, duration: animationDuration },
      } = this.state;

    // 检查钻取功能是否启用
    if (!drillEnabled) return this.logService.warn("当前未开启钻取功能"), this;

    // 检查是否有正在进行的钻取操作
    if (this.isDrilling) return this.logService.warn("当前钻取未结束"), this;

    // 标记钻取状态为进行中并设置当前区域
    this.isDrilling = true;
    this.currentRegion = regionCode;

    // 保存当前视图状态到缓存
    const currentViewState = {
      adcode: this.currentCode,
      viewPortInfo: viewportSystem.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    };

    // 缓存当前状态，便于后续操作
    this.drillCache[currentViewState.adcode] = currentViewState;

    // 重置层级并设置当前区域编码
    this.currentLevel = 0;
    this.currentCode = regionCode;

    // 获取并设置父级区域信息
    const parentInfo = XV.getParentInfoByAdCode(this.currentCode, this.gis);
    this.currentParentCode = parentInfo.adcode;
    this.currentParentLevel = parentInfo.level;

    // 加载区域数据
    (async function loadRegionData(context) {
      const regionData = context.state.data[context.currentRegion];
      context.rawSubDistrictData = regionData.rawSubDistrictData;
      context.subDistrictData = regionData.subDistrictData;
      context.rawDistrictData = regionData.rawDistrictData;
      context.districtData = regionData.districtData;
    })(this);

    // 创建钻取事件对象
    const drillEvent = {
      type: "drillRegion",
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    };

    // 触发钻取事件
    this.ee.emit("drill", drillEvent);
    this.ee.emit("drillRegion", drillEvent);

    // 执行钻取视图更新
    WV(this);

    // 等待动画完成并触发回调
    return await new Promise((resolve) =>
      setTimeout(() => {
        // 执行回调函数
        callback && callback();

        // 触发钻取结束事件
        (() => {
          this.ee.emit("drillEnd", drillEvent);
          this.ee.emit("drillRegionEnd", drillEvent);
          this.isDrilling = false;
        })();

        resolve(this);
      }, animationDuration)
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
    const { project } = this.gis.layerManager.geo,
      {
        districtStyle: { heightScale },
        viewClip,
      } = this.state,
      { drillSave } = this.gis.viewportSystem.get(),
      o = this.drillCache[this.currentCode];
    let a;
    a = o && drillSave ? o.viewPortInfo : this.gis.viewportSystem.get();
    const { pitch, rotation, offset } = a;
    const c = Vf,
      h = null == viewClip ? void 0 : viewClip[this.currentCode],
      p = window.KV({
        geojson: {
          type: "FeatureCollection",
          features: this.rawDistrictData,
        },
        geojsonProj: {
          type: "FeatureCollection",
          features: this.districtData,
        },
        project,
        geojsonUtil: window.am,
        worldBboxSize: c,
        heightScale,
        pitch,
        rotation,
        offset,
        viewClip: h,
      });
    // 初始化 this.gis.globalOpts
    this.gis.globalOpts = p;
    this.gis.layerManager.ee.emit("updateArea", {
      cameraTween: t,
    });
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
      window.BV(
        this.extrudeBackgroundSideMaterial,
        this.state.extrudeBackgroundStyle
      );
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
