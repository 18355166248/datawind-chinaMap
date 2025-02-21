import {
  i1 as e,
  i9 as t,
  i6 as i,
  ie as r,
  ig as s,
  ih as n,
} from "../entry/index.7886b0f6.js";
import {
  r as a,
  a as l,
  b as h,
  d as o,
  e as c,
  f as d,
  h as u,
  i as g,
  j as m,
  k as p,
  l as C,
  m as y,
} from "./removeTips.d0c4745f.js";
class E extends e {
  static panelConfig;
  supportToggleStateEventAction = !0;
  currentState = 0;
  get stateCount() {
    return this.POMNode.slices.length;
  }
  underEditingMode = !1;
  renderNextState = this.render;
  enterEdit() {
    return this.enterSlice();
  }
  quitEdit() {}
  quitEditing() {
    var e;
    null == (e = this.quitEdit) || e.call(this);
  }
  enterSlice(e = !1) {
    if (this.editMode === t.Edit) {
      const t = this.POMNode.slices[this.currentState];
      return this.getRenderer().enterSlice(t, e), !0;
    }
    return !1;
  }
}
class f extends E {
  type = i.EntityHost;
  dom;
  get container() {
    return this.dom;
  }
  set container(e) {
    this.dom = e;
  }
  variableContext = {
    tipDOM: null,
  };
  constructor(e, t) {
    super(e, t), (this.dom = r.call(this)), s.call(this);
  }
  render(e) {
    this.error && this.renderTips(this.error);
  }
  animate(e) {
    this.render(!1);
  }
  destroy(e) {
    return n.call(this, e);
  }
  renderTips(e) {
    return a.call(this, e);
  }
  removeTips() {
    return l.call(this);
  }
  renderPositionChange(e) {
    return h.call(this, e);
  }
  renderSizeChange(e) {
    return o.call(this, e);
  }
  renderVisibilityChange(e) {
    return c.call(this, e);
  }
  setElementVisibility(e) {
    this.container.style.display = e ? "block" : "none";
  }
  renderOpacityChange(e) {
    return d.call(this, e);
  }
  renderClipOverflowChange(e) {
    return u.call(this, e);
  }
  animatePositionChange(e, t) {
    return g.call(this, e, t);
  }
  animateSizeChange(e, t) {
    return m.call(this, e, t);
  }
  animateVisibilityChange(e, t) {
    return p.call(this, e, t);
  }
  animateOpacityChange(e, t) {
    return C.call(this, e, t);
  }
  animateClipOverflowChange(e, t) {
    return y.call(this, e, t);
  }
  suspend() {}
  resume() {}
}
export { f as E, E as H };
