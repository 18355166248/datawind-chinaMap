async function $V(context) {
  try {
    // 从上下文中获取钻取和数据配置
    const { drill: drillConfig, data: dataConfig } = context.state;

    // 如果启用了钻取功能并且有钻取数据，则处理钻取数据
    if (drillConfig.enabled && drillConfig.data) {
      await (async function processDrillData(ctx) {
        const { drill: drillConfig } = ctx.state;

        // 获取钻取数据并处理
        (ctx.drillData = await (async function fetchAndProcessDrillData(
          drillData,
          levelRange,
          granularityConfig
        ) {
          const promises = [];

          // 遍历层级范围，获取每个层级的数据
          for (let level = levelRange[0]; level <= levelRange[1]; level++) {
            const levelData = drillData[String(level)];
            if (levelData) {
              const { data: sourceData, type: dataType } = levelData;
              let dataUrl = sourceData;

              // 根据数据类型处理不同格式的地理数据
              switch (dataType) {
                case xk.GEOJSON:
                  // 直接使用GeoJSON数据
                  promises.push(
                    new Promise((resolve) => {
                      resolve(sourceData);
                    })
                  );
                  break;
                case xk.GEOBUF_URL:
                  // 从URL获取GeoBuf格式数据并转换为GeoJSON
                  dataUrl = sourceData;
                  promises.push(window.XV.getGeoBuf2GeoJsonByUrl(dataUrl));
                  break;
                case xk.GEOJSON_URL:
                  // 从URL获取GeoJSON格式数据
                  dataUrl = sourceData;
                  promises.push(window.XV.getGeoJsonByUrl(dataUrl));
                  break;
                case xk.GEOBUF:
                default:
                  console.error(
                    "[xGis]",
                    `地图数据 url ${dataUrl} 格式无法解析`
                  );
              }
            } else if (level !== 3) {
              // 如果不是第3级且没有找到对应数据，则输出错误信息
              console.error(
                "[xGis]",
                `钻取地图 level ${level} 无法匹配对应数据`
              );
            }
          }

          // 等待所有数据加载完成并处理
          return Promise.all(promises)
            .then((geoDataArray) => {
              // 处理地理数据，构建默认和处理后的数据结构
              const processedData = (function organizeGeoData(
                geoDataArray,
                levelRange,
                granularityConfig
              ) {
                const result = {
                  default: [], // 默认数据结构
                  process: [], // 处理后的数据结构
                };

                // 处理每个层级的地理数据
                geoDataArray.forEach((geoData, index) => {
                  const defaultMap = new Map();
                  let processMap = new Map();
                  const granularity = granularityConfig[String(index)];

                  // 检查粒度配置是否合法
                  if (granularity <= index) {
                    console.error(
                      "[xGis]",
                      `配置 granularity ${granularity} 必须大于 level ${index} `
                    );
                  } else {
                    let targetData;

                    // 根据不同层级处理数据
                    switch (index) {
                      case 0: // 第一级
                        // 设置默认数据
                        defaultMap.set(window.Mk, geoDataArray[0].features);

                        // 根据粒度配置处理数据
                        switch (granularity) {
                          case 1:
                            targetData = geoDataArray[0];
                            processMap.set(window.Mk, targetData.features);
                            break;
                          case 2:
                            const filteredFeatures = [];
                            targetData = geoDataArray[1];

                            // 过滤特性并构建处理后的数据
                            targetData.features.forEach((feature) => {
                              const parentId = feature.properties.parent;
                              if (window.Lk.includes(parentId)) {
                                const parentFeature =
                                  geoDataArray[0].features.find(
                                    (f) => f.properties.id === parentId
                                  );
                                // 避免重复添加
                                if (
                                  !filteredFeatures.find(
                                    (f) =>
                                      f.properties.id ===
                                      parentFeature.properties.id
                                  )
                                ) {
                                  filteredFeatures.push(parentFeature);
                                }
                              } else {
                                filteredFeatures.push(feature);
                              }
                            });
                            processMap.set(window.Mk, filteredFeatures);
                            break;
                          default:
                            targetData = geoDataArray[2];
                            processMap.set(window.Mk, targetData.features);
                        }
                        break;
                      case 1: // 第二级
                        targetData = geoDataArray[granularity - 1];

                        // 根据父级ID组织特性
                        geoData.features.forEach((feature) => {
                          const parentId = feature.properties.parent;
                          const features = defaultMap.get(parentId);
                          Array.isArray(features)
                            ? features.push(feature)
                            : defaultMap.set(parentId, [feature]);
                        });

                        // 根据粒度处理数据
                        if (granularity === 2) {
                          processMap = defaultMap;
                        } else if (targetData) {
                          geoData.features.forEach((feature) => {
                            const parentId = feature.properties.parent;
                            let features = processMap.get(parentId);

                            // 确保features是数组
                            if (!Array.isArray(features)) {
                              processMap.set(parentId, []);
                              features = processMap.get(parentId);
                            }

                            // 根据特定条件添加特性
                            if (window.Lk.includes(parentId)) {
                              features.push(feature);
                            } else {
                              targetData.features.forEach((targetFeature) => {
                                const routes =
                                  targetFeature.properties.acroutes;
                                if (routes) {
                                  // 检查路由中是否包含父级ID
                                  if (routes.split(",")[1] === parentId) {
                                    features.push(targetFeature);
                                  }
                                }
                              });
                            }
                          });
                        }
                        break;
                      case 2: // 第三级
                        // 根据父级ID组织特性
                        geoData.features.forEach((feature) => {
                          const parentId = feature.properties.parent;
                          const features = defaultMap.get(parentId);
                          Array.isArray(features)
                            ? features.push(feature)
                            : defaultMap.set(parentId, [feature]);
                        });
                        processMap = defaultMap;
                        break;
                      default:
                        console.error(
                          "[xGis]",
                          "钻取地图 数据 data 超出三级结构"
                        );
                    }
                  }

                  // 将处理结果添加到返回值中
                  result.default.push(defaultMap);
                  result.process.push(processMap);
                });

                // 处理特殊情况：三级结构的最后一级
                if (
                  geoDataArray[1] &&
                  geoDataArray[2] &&
                  levelRange[levelRange.length - 1] === 3
                ) {
                  const specialMap = new Map();
                  let processedSpecialMap = new Map();

                  // 处理第二级数据
                  geoDataArray[1].features.forEach((feature) => {
                    if (window.Lk.includes(feature.properties.parent)) {
                      const featureId = feature.properties.id;
                      const features = specialMap.get(featureId);
                      Array.isArray(features)
                        ? features.push(feature)
                        : specialMap.set(feature.properties.id, [feature]);
                    }
                  });

                  // 处理第三级数据
                  geoDataArray[2].features.forEach((feature) => {
                    const featureId = feature.properties.id;
                    const features = specialMap.get(featureId);
                    Array.isArray(features)
                      ? features.push(feature)
                      : specialMap.set(featureId, [feature]);
                  });

                  processedSpecialMap = specialMap;
                  result.default.push(specialMap);
                  result.process.push(processedSpecialMap);
                }

                return result;
              })(geoDataArray, levelRange, granularityConfig);

              return processedData;
            })
            .catch((error) => {
              console.error("[xGis]", error);
              return {
                default: [],
                process: [],
              };
            });
        })(drillConfig.data, drillConfig.level.range, drillConfig.granularity)),
          // 设置当前代码和级别
          (ctx.currentCode = drillConfig.level.adcode),
          (ctx.currentLevel = window.qV(ctx.drillData, ctx.currentCode));

        // 获取父级信息
        const parentInfo = window.XV.getParentInfoByAdCode(
          ctx.currentCode,
          ctx.gis
        );
        ctx.currentParentLevel = parentInfo.level;
        ctx.currentParentCode = parentInfo.adcode;
      })(context);
    } else {
      // 如果没有启用钻取功能，则处理子区域数据
      await window.ZV(dataConfig?.subDistrict);
    }

    // 如果没有区域数据，则创建默认区域数据
    if (!dataConfig.district) {
      dataConfig.district = {
        type: xk.GEOJSON,
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: am.dissolve(dataConfig.subDistrict.__raw_geojson__),
            },
          ],
        },
      };
    }

    // 处理区域数据
    await window.ZV(dataConfig?.district);

    // 处理区域和子区域数据
    (async function processRegionData(ctx) {
      const {
        data: { region: regionData, subDistrict: subDistrictData },
        drill: {
          data: drillData,
          granularity: granularityConfig,
          enabled: drillEnabled,
        },
      } = ctx.state;

      // 判断是否启用了钻取功能且有钻取数据
      const hasDrillData = drillEnabled && drillData;

      // 处理每个区域的数据
      regionData &&
        Object.values(regionData).forEach((region) => {
          let rawDistrictData,
            districtData,
            rawSubDistrictData,
            subDistrictData,
            filteredFeatures;

          // 根据是否有钻取数据采用不同的处理方式
          if (hasDrillData) {
            // 使用钻取数据处理
            filteredFeatures = ctx.drillData.default[0]
              .get(window.Mk)
              .filter((feature) =>
                region.child.includes(feature.properties.id)
              );

            if (filteredFeatures.length > 0) {
              let processedFeatures;

              // 根据区域粒度配置处理特性
              switch (granularityConfig.region) {
                case 1:
                  processedFeatures = filteredFeatures;
                  break;
                case 2:
                  const level2Features = [];

                  // 处理第二级数据
                  for (const [
                    featureId,
                    features,
                  ] of ctx.drillData.default[1].entries()) {
                    if (region.child.includes(featureId)) {
                      if (window.Lk.includes(featureId)) {
                        // 添加父级特性
                        level2Features.push(
                          ctx.drillData.default[0]
                            .get(window.Mk)
                            .find(
                              (feature) => feature.properties.id === featureId
                            )
                        );
                      } else {
                        // 添加所有子特性
                        level2Features.push(...features);
                      }
                    }
                  }
                  processedFeatures = level2Features;
                  break;
                case 3:
                  const level3Features = [];

                  // 处理第三级数据
                  for (const [
                    featureId,
                    features,
                  ] of ctx.drillData.default[2].entries()) {
                    const routes = features[0].properties.acroutes;
                    if (routes) {
                      const parentId = routes.split(",")[1];
                      if (region.child.includes(parentId)) {
                        level3Features.push(...features);
                      }
                    }
                  }
                  processedFeatures = level3Features;
              }

              // 设置区域数据
              ctx.drillData.default[0].set(region.adcode, filteredFeatures);
              ctx.drillData.process[0].set(region.adcode, processedFeatures);

              // 获取处理后的特性
              const processedRegionFeatures = ctx.drillData.process[0].get(
                region.adcode
              );

              // 创建区域数据
              rawDistrictData = [
                {
                  type: "Feature",
                  properties: {},
                  geometry: am.dissolve(processedRegionFeatures),
                },
              ];

              // 处理区域数据
              districtData = sm(
                lV({
                  type: "FeatureCollection",
                  features: rawDistrictData,
                }),
                Qf
              ).features;

              // 设置子区域数据
              rawSubDistrictData = ctx.drillData.process[0].get(region.adcode);
              subDistrictData = sm(
                lV({
                  type: "FeatureCollection",
                  features: rawSubDistrictData,
                }),
                Qf
              ).features;
            }
          } else if (subDistrictData) {
            // 使用子区域数据处理
            filteredFeatures = subDistrictData.__geojson__.features.filter(
              (feature) => region.child.includes(feature.properties.id)
            );

            if (filteredFeatures.length > 0) {
              const processedFeatures = filteredFeatures;

              // 设置区域数据
              ctx.drillData.default[0].set(region.adcode, filteredFeatures);
              ctx.drillData.process[0].set(region.adcode, processedFeatures);

              // 创建区域数据
              rawDistrictData = [
                {
                  type: "Feature",
                  properties: {},
                  geometry: am.dissolve(processedFeatures),
                },
              ];

              // 处理区域数据
              districtData = sm(
                lV({
                  type: "FeatureCollection",
                  features: rawDistrictData,
                }),
                Qf
              ).features;

              // 设置子区域数据
              rawSubDistrictData = processedFeatures;
              subDistrictData = sm(
                lV({
                  type: "FeatureCollection",
                  features: rawSubDistrictData,
                }),
                Qf
              ).features;
            }
          }

          // 如果有过滤后的特性，则更新状态
          if (filteredFeatures && filteredFeatures.length > 0) {
            ctx.state = af(ctx.state, {
              data: {
                [region.adcode]: {
                  districtData: districtData,
                  rawDistrictData: rawDistrictData,
                  subDistrictData: subDistrictData,
                  rawSubDistrictData: rawSubDistrictData,
                },
              },
            });
          }
        });
    })(context);
  } catch (error) {
    console.log("🚀 ~ $V ~ error:", error);
    throw new Error("地图数据加载失败");
  }
}
window.$V = $V;
