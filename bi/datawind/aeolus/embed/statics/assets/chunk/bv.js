/**
 * 将数组e中索引i处的所有元素追加到数组t的索引i处
 * @param {Array} t - 目标数组
 * @param {Array} e - 源数组
 * @param {number} i - 要操作的索引
 */
function _V(t, e, i) {
  for (let n = 0; n < e[i].length; n++) t[i].push(e[i][n]);
}

/**
 * 计算三维向量的长度/模
 * @param {Array} t - 三维向量 [x, y, z]
 * @returns {number} 向量的长度
 */
function pV(t) {
  const e = t[0],
    i = t[1],
    n = t[2];
  return Math.sqrt(e * e + i * i + n * n);
}

/**
 * 判断多边形或轮廓的方向（顺时针或逆时针）
 * @param {Array} t - 包含坐标的数组
 * @param {number} e - 起始索引
 * @param {number} i - 结束索引
 * @param {number} n - 步长
 * @returns {boolean} true表示为正方向（通常是逆时针）
 */
function mV(t, e, i, n) {
  let r = 0;
  for (let o = e, a = i - n; o < i; o += n)
    (r += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o);
  return r > 0;
}

/**
 * 标准化三维向量（使其成为单位向量）
 * @param {Array} t - 用于存储结果的向量
 * @param {Array} e - 输入向量
 * @returns {Array} 标准化后的向量
 */
function fV(t, e) {
  const i = e[0],
    n = e[1],
    r = e[2];
  let o = i * i + n * n + r * r;
  return (
    o > 0 &&
      ((o = 1 / Math.sqrt(o)),
      (t[0] = e[0] * o),
      (t[1] = e[1] * o),
      (t[2] = e[2] * o)),
    t
  );
}

/**
 * 计算两个三维向量的差（向量减法）
 * @param {Array} t - 用于存储结果的向量
 * @param {Array} e - 第一个向量
 * @param {Array} i - 第二个向量
 * @returns {Array} 结果向量 t = e - i
 */
function dV(t, e, i) {
  return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t;
}

function gV(t, e, i, n = [], r = !0) {
  const o = [],
    a = [];
  return (
    dV(o, i, e),
    dV(a, t, e),
    (function (t, e, i) {
      const n = e[0],
        r = e[1],
        o = e[2],
        a = i[0],
        s = i[1],
        l = i[2];
      (t[0] = r * l - o * s), (t[1] = o * a - n * l), (t[2] = n * s - r * a);
    })(n, o, a),
    r && fV(n, n),
    n
  );
}

/**
 * 处理2D平面地理特征的三角剖分和法线计算
 * 将地理多边形数据转换为3D模型中的平面几何体
 * @param {Object} t - 目标几何体数据对象，包含index、position、normal和uv数组
 * @param {Object} e - 输入参数，包含coordinates(坐标)、bbox(边界框)和height(高度)
 */
function yV(t, e) {
  const { coordinates: i, bbox: n, height: r } = e,
    { vertices: o, holes: a, dimensions: s } = window._l.flatten(i),
    l = window._l.default(o, a, s),
    { index: u, position: c, normal: h, uv: p } = t,
    d = n[2] - n[0],
    f = n[3] - n[1],
    g = c.length / 3;
  let m;
  const y = [];
  for (m = 0; m < o.length; m += s)
    (y[0] = +Math.round(o[m])),
      (y[1] = +Math.round(o[m + 1])),
      (y[2] = +Math.round(r)),
      c.push(...y),
      p.push((+y[0] - n[0]) / d, (+y[1] - n[1]) / f),
      h.push(0, 0, 0);
  let v, b, x;
  const _ = [],
    S = [],
    M = [],
    C = [];
  for (m = 2; m < l.length; m += 3)
    (v = l[m - 2] + g),
      (b = l[m - 1] + g),
      (x = l[m] + g),
      u.push(v, b, x),
      (v *= 3),
      (_[0] = c[v]),
      (_[1] = c[v + 1]),
      (_[2] = c[v + 2]),
      (b *= 3),
      (S[0] = c[b]),
      (S[1] = c[b + 1]),
      (S[2] = c[b + 2]),
      (x *= 3),
      (M[0] = c[x]),
      (M[1] = c[x + 1]),
      (M[2] = c[x + 2]),
      gV(_, S, M, C, !1),
      (h[v] += C[0]),
      (h[v + 1] += C[1]),
      (h[v + 2] += C[2]),
      (h[b] += C[0]),
      (h[b + 1] += C[1]),
      (h[b + 2] += C[2]),
      (h[x] += C[0]),
      (h[x + 1] += C[1]),
      (h[x + 2] += C[2]);
  for (m = 3 * g; m < h.length; m += 3)
    (C[0] = h[m]),
      (C[1] = h[m + 1]),
      (C[2] = h[m + 2]),
      fV(C, C),
      ([h[m], h[m + 1], h[m + 2]] = C);
}

/**
 * 处理3D立体地理特征的三角剖分和法线计算
 * 将2D地理数据挤压(extrude)成具有高度的3D模型
 * @param {Object} t - 目标几何体数据对象，包含index、position、normal和uv数组
 * @param {Object} e - 输入参数，包含coordinates(坐标)和height(高度)
 */
function vV(t, e) {
  const { coordinates: i, height: n } = e,
    { vertices: r, holes: o, dimensions: a } = window._l.flatten(i),
    { index: s, position: l, normal: u, uv: c } = t,
    h = [],
    p = [],
    d = [],
    f = [],
    g = [],
    m = [],
    y = [],
    v = [],
    b = [],
    x = l.length / 3;
  let _, S;
  for (_ = 0; _ < r.length; _ += a)
    (y[0] = +Math.round(r[_])),
      (y[1] = +Math.round(r[_ + 1])),
      (y[2] = +Math.round(n)),
      l.push(...y),
      u.push(0, 0, 0),
      (y[2] = 0),
      l.push(...y),
      u.push(0, 0, 0);
  const M = o && o.length > 0 ? o[0] : r.length / a;
  let C, w;
  b.push([0, M]);
  const A = o.length;
  for (_ = 0; _ < A; _++)
    (C = o[_]), (w = _ < A - 1 ? o[_ + 1] : r.length / a), b.push([C, w]);
  let E, D, T;
  for (_ = 0; _ < b.length; _++) {
    ([C, w] = b[_]), (D = 0 === _), (E = 0);
    if (D === mV(r, C * a, w * a, a))
      for (S = C + 1; S < w; S++)
        (T = 2 * (S - 1) + x),
          (T *= 3),
          (h[0] = l[T]),
          (h[1] = l[T + 1]),
          (h[2] = l[T + 2]),
          (p[0] = l[T + 3]),
          (p[1] = l[T + 4]),
          (p[2] = l[T + 5]),
          (T = 2 * S + x),
          (T *= 3),
          (d[0] = l[T]),
          (d[1] = l[T + 1]),
          (d[2] = l[T + 2]),
          (f[0] = l[T + 3]),
          (f[1] = l[T + 4]),
          (f[2] = l[T + 5]),
          (T = 2 * (S - 1) + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          (E += pV(dV(v, f, p))),
          (T = 2 * S + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          gV(p, f, h, g, !1),
          gV(f, d, h, m, !1),
          (T = 2 * (S - 1) + x),
          (T *= 3),
          (u[T] += g[0] + m[0]),
          (u[T + 1] += g[1] + m[1]),
          (u[T + 2] += g[2] + m[2]),
          (u[T + 3] += g[0]),
          (u[T + 4] += g[1]),
          (u[T + 5] += g[2]),
          (T = 2 * S + x),
          (T *= 3),
          (u[T] += m[0]),
          (u[T + 1] += m[1]),
          (u[T + 2] += m[2]),
          (u[T + 3] += g[0] + m[0]),
          (u[T + 4] += g[1] + m[1]),
          (u[T + 5] += g[2] + m[2]),
          (T = 2 * (S - 1) + x),
          s.push(T + 1, T + 3, T),
          s.push(T + 3, T + 2, T);
    else
      for (S = w - 2; S >= C; S--)
        (T = 2 * (S + 1) + x),
          (T *= 3),
          (h[0] = l[T]),
          (h[1] = l[T + 1]),
          (h[2] = l[T + 2]),
          (p[0] = l[T + 3]),
          (p[1] = l[T + 4]),
          (p[2] = l[T + 5]),
          (T = 2 * S + x),
          (T *= 3),
          (d[0] = l[T]),
          (d[1] = l[T + 1]),
          (d[2] = l[T + 2]),
          (f[0] = l[T + 3]),
          (f[1] = l[T + 4]),
          (f[2] = l[T + 5]),
          (T = 2 * (S + 1) + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          (E += pV(dV(v, f, p))),
          (T = 2 * S + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          gV(p, f, h, g, !1),
          gV(f, d, h, m, !1),
          (T = 2 * (S + 1) + x),
          (T *= 3),
          (u[T] += g[0] + m[0]),
          (u[T + 1] += g[1] + m[1]),
          (u[T + 2] += g[2] + m[2]),
          (u[T + 3] += g[0]),
          (u[T + 4] += g[1]),
          (u[T + 5] += g[2]),
          (T = 2 * S + x),
          (T *= 3),
          (u[T] += m[0]),
          (u[T + 1] += m[1]),
          (u[T + 2] += m[2]),
          (u[T + 3] += g[0] + m[0]),
          (u[T + 4] += g[1] + m[1]),
          (u[T + 5] += g[2] + m[2]),
          (T = 2 * (S + 1) + x),
          s.push(T + 1, T - 1, T),
          s.push(T - 1, T - 2, T);
  }
  for (_ = 3 * x; _ < u.length; _ += 3)
    (g[0] = u[_]),
      (g[1] = u[_ + 1]),
      (g[2] = u[_ + 2]),
      fV(g, g),
      ([u[_], u[_ + 1], u[_ + 2]] = g);
}
window.vV = vV;

/**
 * 将地理特征数据转换为3D几何体数据结构
 * 这个函数处理GeoJSON格式的特征集合，将其转换为可在3D渲染中使用的顶点数据
 * @param {Object} t - 输入的地理数据对象，包含features数组
 * @param {Object} e - 配置参数或选项
 * @returns {Object} 处理后的几何体数据，包含索引、位置、法线和纹理坐标
 */
function bV(t, e) {
  const i = {
      index: [],
      position: [],
      normal: [],
      uv: [],
    },
    n = {
      index: [],
      position: [],
      normal: [],
      uv: [],
    };
  let r, o, a;
  for (r = 0; r < t.features.length; r++) {
    (o = t.features[r]), (a = o.geometry.coordinates);
    yV(i, {
      coordinates: a,
      bbox: e,
      height: 1,
    });
    vV(n, {
      coordinates: a,
      bbox: e,
      height: 1,
    });
  }
  const s = {
    index: [],
    position: [],
    normal: [],
    uv: [],
    group: [],
  };
  xV(0, s, i);
  xV(1, s, n);
  console.log("🚀 ~ bV ~ s:", s);
  return s;
}
window.bV = bV;

/**
 * 将处理后的几何体数据添加到目标对象中
 * @param {number} t - 组标识符
 * @param {Object} e - 目标对象，包含index、position、normal、uv和group数组
 * @param {Object} i - 处理后的几何体数据，包含index、position、normal和uv数组
 */
function xV(t, e, i) {
  _V(e, i, "index");
  _V(e, i, "position");
  _V(e, i, "normal");
  _V(e, i, "uv");
  e.group.push(t, i.index.length, i.position.length / 3);
}
