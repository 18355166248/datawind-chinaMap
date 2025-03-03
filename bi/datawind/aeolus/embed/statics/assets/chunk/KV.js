const JV = {
  bboxSize: 68016,
  height: 50503.97002946732,
  maxSize: 68565.51601500002,
  minSize: 50503.97002946732,
  width: 68565.51601500002,
};

function KV(t) {
  const {
      geojson: e,
      geojsonProj: i,
      geojsonUtil: n,
      worldBboxSize: r,
      heightScale: o,
      pitch: a,
      rotation: s,
      offset: l,
      viewClip: u,
    } = t,
    c = n.bbox(i);
  let h = c;
  u &&
    (h = (function (t, e, i) {
      const n = [0, 0, 0, 0];
      switch (i) {
        case "bottom-right":
          (n[0] = t[0]),
            (n[1] = Math.max(t[1], e[3])),
            (n[2] = Math.min(t[2], e[0])),
            (n[3] = t[3]);
          break;
        case "bottom":
          (n[0] = t[0]),
            (n[1] = Math.max(t[1], e[3])),
            (n[2] = t[2]),
            (n[3] = t[3]);
          break;
        case "top":
          (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = Math.min(t[3], e[1]));
          break;
        case "left":
          (n[0] = Math.max(t[0], e[2])),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]);
          break;
        case "right":
          (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = Math.min(t[2], e[0])),
            (n[3] = t[3]);
      }
      return n;
    })(
      c,
      [
        ...window.Qf([u.bbox[0], u.bbox[1]]),
        ...window.Qf([u.bbox[2], u.bbox[3]]),
      ],
      u.direction
    ));
  const p = (function (t, e, i) {
      const n = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2, 0],
        r = [t[0], t[1]],
        o = [t[2], t[3]],
        a = [...window.Zf(r), ...window.Zf(o)],
        s = [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2, 0],
        l = Math.abs(t[0] - t[2]),
        u = Math.abs(t[1] - t[3]),
        c = Math.min(l, u),
        h = Math.max(l, u),
        p = JV.width,
        d = JV.height,
        f = JV.bboxSize,
        g = window.ef([l / p, u / d]) * f,
        m = g / e,
        y = g * i * 0.05;
      return {
        bbox: a,
        bboxProj: t,
        center: s,
        centerProj: n,
        size: {
          width: l,
          height: u,
          minSize: c,
          maxSize: h,
          bboxSize: g,
        },
        bboxScale: m,
        baseHeight: y,
      };
    })(h, r, o),
    d = [(h[0] + h[2]) / 2, (h[1] + h[3]) / 2, 0],
    f = p.size.bboxSize * l[2],
    g = window.oA(a, s).map((t) => t * f);
  (g[0] += d[0]), (g[1] += d[1]), (g[2] += d[2]);
  const m = window.aA(a, s);
  return {
    boundary: e,
    boundaryProj: i,
    bboxOption: p,
    viewBBoxOption: p,
    cameraStatus: {
      near: Math.max(p.size.bboxSize, 0.001),
      far: 10 * p.size.bboxSize,
      target: [d[0] + l[0] * p.size.bboxSize, d[1] + l[1] * p.size.bboxSize, 0],
      position: [
        g[0] + l[0] * p.size.bboxSize,
        g[1] + l[1] * p.size.bboxSize,
        g[2],
      ],
      up: m,
    },
    layerFitValue: {
      xy: p.size.bboxSize >> 4,
      z: p.size.bboxSize >> 3,
      flylineWidth: p.size.bboxSize >> 12,
      straightLineWidth: p.size.bboxSize >> 6,
    },
  };
}
window.KV = KV;
