function tW(t) {
  var e, i, n;
  try {
    const { drill: r, data: o } = t.state,
      a = r.enabled && r.data;
    if (a)
      if (0 === t.currentLevel) {
        const e =
          !!o.region &&
          Object.values(o.region).find((e) => e.adcode === t.currentCode);

        if (e) {
          t.rawDistrictData = o[e.adcode].rawDistrictData;
          t.districtData = o[e.adcode].districtData;
          t.currentRegion = e.adcode;
        } else {
          t.rawDistrictData = o.district.__geojson__.features;
          t.districtData = o.district.__geojson_process_proj__.features;
        }
      } else
        (t.rawDistrictData = [
          t.drillData.default[t.currentParentLevel]
            .get(t.currentParentCode)
            .find((e) => e.properties.id === t.currentCode),
        ]),
          (t.districtData = window.sm(
            window.lV({
              type: "FeatureCollection",
              features: t.rawDistrictData,
            }),
            Qf
          ).features);
    else
      (null == (e = o.district) ? void 0 : e.data) &&
        ((t.districtData = o.district.__geojson_process_proj__.features),
        (t.rawDistrictData = o.district.__geojson__.features));
    if (a) {
      t.rawSubDistrictData = t.drillData.default[t.currentLevel].get(
        t.currentCode
      );
      let e = {
        type: "FeatureCollection",
        features: t.rawSubDistrictData,
      };
      const n =
        null == (i = t.state.drill.data[t.currentLevel]) ? void 0 : i.simplify;
      (null == n ? void 0 : n.enabled) && (e = am.simplify(e, n.tolerance)),
        (t.subDistrictData = window.sm(window.lV(e), Qf).features);
    } else
      (null == (n = o.subDistrict) ? void 0 : n.data) &&
        ((t.subDistrictData = o.subDistrict.__geojson_process_proj__.features),
        (t.rawSubDistrictData = o.subDistrict.__geojson__.features));
  } catch (r) {
    console.log("🚀 ~ tW ~ r:", r);
    throw ((t.isDrilling = !1), new Error("地图数据生成失败"));
  }
}

window.tW = tW;
