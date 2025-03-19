/**
 * 地图纹理加载器
 * 用于处理地图的不同类型纹理（普通地图、法线地图、发光地图）的加载和应用
 * @param {Object} context - 上下文对象，包含材质和GIS配置
 * @param {String} textureUrl - 纹理URL，可以是直接图片URL或瓦片URL模板
 * @param {String} textureType - 纹理类型：'map'、'normalMap'或'emissiveMap'
 * @param {String} layerType - 图层类型：'extrude'或'extrude-background'
 */
const kt = 1e3;
const loadMapTexture = (context, textureUrl, textureType, layerType) => {
  let material, bboxOptions, isBackground;

  // 根据图层类型设置相应的材质和边界框选项
  switch (layerType) {
    case "extrude":
      material = context.extrudeTopMaterial;
      bboxOptions = context.gis.globalOpts.bboxOption;
      isBackground = false;
      break;
    case "extrude-background":
      material = context.extrudeBackgroundTopMaterial;
      bboxOptions = context.gis.globalOpts.backgroundBboxOption;
      isBackground = true;
  }

  /**
   * 检查URL是否为瓦片URL模板
   * @param {String} url - 要检查的URL
   * @return {Boolean} 是否为瓦片URL模板
   */
  const isTileUrlTemplate = (url) => {
    return (
      url.indexOf("{x}") > -1 &&
      url.indexOf("{y}") > -1 &&
      url.indexOf("{z}") > -1
    );
  };

  // 根据URL类型选择不同的纹理加载方式
  if (!isTileUrlTemplate(textureUrl)) {
    // 直接加载单一图片作为纹理
    context.textureManager(`${layerType}-${textureType}`).setTexture(
      (setTexture) => {
        context
          .textureManager(`${layerType}-${textureType}`)
          .loader.load(textureUrl, (texture) => {
            setTexture(texture);
          });
      },
      (texture) => {
        // 根据纹理类型应用到相应的材质属性
        applyTextureToMaterial(material, textureType, texture);
      }
    );
  } else {
    // 加载瓦片地图作为纹理
    context.textureManager(`${layerType}-${textureType}`).setTexture(
      (setTexture) => {
        // 处理瓦片地图
        processTileMap({
          tileUrl: textureUrl,
          bboxOption: bboxOptions,
          maxZoom: 12,
          imageType: textureType,
          isExtrudeBackground: isBackground,
          cb: setTexture,
        });
      },
      (texture) => {
        // 根据纹理类型应用到相应的材质属性
        applyTextureToMaterial(material, textureType, texture);
      }
    );
  }

  /**
   * 将纹理应用到材质的相应属性
   * @param {Object} material - 目标材质
   * @param {String} textureType - 纹理类型
   * @param {Object} texture - 纹理对象
   */
  function applyTextureToMaterial(material, textureType, texture) {
    switch (textureType) {
      case "map":
        material.map = texture;
        material.color = CU; // 使用预定义的颜色常量
        break;
      case "normalMap":
        // 设置地图的山峰效果
        material.normalMap = texture;
        break;
      case "emissiveMap":
        material.emissiveMap = texture;
        material.emissiveIntensity = 1;
    }
    material.needsUpdate = true;
  }

  /**
   * 处理瓦片地图
   * 加载和合并多个瓦片以创建单一纹理
   * @param {Object} options - 瓦片处理选项
   */
  function processTileMap(options) {
    const { tileUrl, bboxOption, maxZoom, cb, isExtrudeBackground } = options;
    const { bbox, bboxProj, size } = bboxOption;

    // 计算瓦片信息
    const tileInfo = MV({
      tileUrl,
      bbox,
      maxZoom,
      worldBboxSize: Vf,
      bboxOption,
      isExtrudeBackground,
    });

    const { minCol, maxCol, minRow, maxRow, tilesInfo, tileBboxProj } =
      tileInfo;

    const tilePromises = [];

    // 为每个瓦片创建加载Promise
    for (let i = 0; i < tilesInfo.length; i++) {
      const tile = tilesInfo[i];
      const tilePromise = new Promise((resolve, reject) => {
        fetch(tile.url).then((response) => {
          response.blob().then((blob) => {
            createImageBitmap(blob).then((bitmap) => {
              tile.imageBitmap = bitmap;
              resolve(tile);
            });
          });
        });
      });
      tilePromises.push(tilePromise);
    }

    // 当所有瓦片加载完成后，将它们合并到一个画布上
    Promise.all(tilePromises)
      .then((tiles) => {
        // 创建合适大小的画布
        const canvas = document.createElement("canvas");
        const tileSize = 256; // 标准瓦片大小

        // 计算画布尺寸
        canvas.width =
          (tileSize * (maxCol - minCol + 1) * size.width) / tileBboxProj.width;
        canvas.height =
          (tileSize * (maxRow - minRow + 1) * size.height) /
          tileBboxProj.height;
        canvas.style.width = canvas.width + "px";
        canvas.style.height = canvas.height + "px";

        const ctx = canvas.getContext("2d");

        // 绘制每个瓦片到画布上
        for (let i = 0; i < tiles.length; i++) {
          const tile = tiles[i];
          // 计算瓦片在画布上的位置
          const x =
            tileSize * (tile.col - minCol) -
            (Math.abs(bboxProj[0] - tileBboxProj.leftTop[0]) *
              (maxCol - minCol + 1) *
              tileSize) /
              tileBboxProj.width;
          const y =
            tileSize * (tile.row - minRow) -
            (Math.abs(bboxProj[3] - tileBboxProj.leftTop[1]) *
              (maxRow - minRow + 1) *
              tileSize) /
              tileBboxProj.height;

          ctx.drawImage(tile.imageBitmap, x, y, tileSize, tileSize);
        }

        // // 注释掉的导出图片功能
        // // 生成图片数据URL（PNG格式，默认质量0.9）
        // const dataUrl = canvas.toDataURL("image/png", 0.9);
        // // 创建隐藏的下载链接
        // const link = document.createElement("a");
        // link.href = dataUrl;
        // link.download = "test.png"; // 自定义文件名
        // // 触发下载
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        // 创建纹理并设置属性
        const texture = new Es(canvas);
        texture.wrapS = texture.wrapT = kt; // 设置纹理环绕模式
        texture.repeat.set(1, 1);

        // 回调返回创建的纹理
        cb(texture);
      })
      .catch((error) => {
        console.error("加载瓦片地图出错:", error);
      });
  }
};

// 导出函数到全局作用域，保持向后兼容性
window.OV = loadMapTexture;
