import {
  i1 as e,
  i6 as r,
  ie as t,
  ig as i,
  ih as a,
} from "../entry/index.7886b0f6.js";
import {
  r as s,
  a as n,
  b as l,
  d as h,
  e as o,
  f as c,
  h as d,
  i as m,
  j as u,
  k as p,
  l as C,
  m as g,
} from "./removeTips.d0c4745f.js";
class y extends e {
  variableContext = {
    tipDOM: null,
  };
  type = r.Entity;
  dom;
  get container() {
    return this.dom;
  }
  set container(e) {
    this.dom = e;
  }
  constructor(e, r) {
    super(e, r), (this.dom = t.call(this)), i.call(this);
  }
  render(e) {
    this.error && this.renderTips(this.error);
  }
  animate(e) {
    this.render(!1);
  }
  destroy(e) {
    return a.call(this, e);
  }
  renderTips(e) {
    return s.call(this, e);
  }
  removeTips() {
    return n.call(this);
  }
  renderPositionChange(e) {
    return l.call(this, e);
  }
  renderSizeChange(e) {
    return h.call(this, e);
  }
  renderVisibilityChange(e) {
    return o.call(this, e);
  }
  setElementVisibility(e) {
    this.container.style.display = e ? "block" : "none";
  }
  renderOpacityChange(e) {
    return c.call(this, e);
  }
  renderClipOverflowChange(e) {
    return d.call(this, e);
  }
  animatePositionChange(e, r) {
    return m.call(this, e, r);
  }
  animateSizeChange(e, r) {
    return u.call(this, e, r);
  }
  animateVisibilityChange(e, r) {
    return p.call(this, e, r);
  }
  animateOpacityChange(e, r) {
    return C.call(this, e, r);
  }
  animateClipOverflowChange(e, r) {
    return g.call(this, e, r);
  }
  suspend() {}
  resume() {}
}
export { y as E };
