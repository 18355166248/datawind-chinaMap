进入代码

case hX.CHINA_GIS:

render -> createInit -> initGis -> IW

class O2 extends z

z 来自 EntityHostElement.e9904ea6.js

## 文件 index.6dcce8bc.js

zV 方法 画阴影 生成图片
在内部的 AV 方法里面 生成每个区域的阴影

IW
t.baseMapLayer.common.visible = false; // 控制地图隐藏

    t.baseMapLayer.districtStyle.innerShadow.enabled = true;
    // t.baseMapLayer.districtStyle.innerShadow.shadowColor = 'rgb(208, 255, 0)'; // 设置阴影

districtStyle.innerShadow.enabled
districtStyle.innerShadow.shadowColor

extrude

getBaseLayerConfig 获取初始化值

## 初始化地图数据

index.7886b0f6.js
方法 getVScreenDetail
处理数据 parsingSchemaData

TextDecoder

index.6dcce8bc.js

## 网络

创建内阴影渐变网格 eW.js initExtrude

zV.js 通过 canvas 画地图渐变阴影

bboxProj 数据来源于 finalBbox

```js
// 如果需要视图裁剪，计算裁剪后的边界框
if (clipConfig) {
  finalBbox = calculateClippedBbox(
    originalBbox,
    [
      ...window.Qf([clipConfig.bbox[0], clipConfig.bbox[1]]),
      ...window.Qf([clipConfig.bbox[2], clipConfig.bbox[3]]),
    ],
    clipConfig.direction
  );
}
```

处理数据

```js
districtData的数据来自下面的处理

t.districtData = o.district.__geojson_process_proj__.features;

t.__geojson_process_proj__ = window.sm(
```

## 方法 af

深拷贝 cloneDeep

## cW

## 设置地图的山峰效果

OV 函数下 r.normalMap = t;

## pd 是 lodash 的 cloneDeep

## wA THREE.Color

## Le THREE.Vector2
