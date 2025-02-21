import { i6 as e, id as i, i1 as n } from "../entry/index.7886b0f6.js";
import { d as t } from "./destroy.6bac23ca.js";
import { H as a } from "./EntityHostElement.e9904ea6.js";
class r extends a {
  type = e.GhostHost;
  render(e) {}
  destroy(e) {
    return t(this);
  }
  renderPositionChange(e) {}
  renderSizeChange(e) {}
  renderVisibilityChange(e) {
    return o.call(this, e);
  }
  setElementVisibility(e) {}
  renderOpacityChange(e) {}
  renderClipOverflowChange(e) {}
  animatePositionChange(e, i) {}
  animateSizeChange(e, i) {}
  animateVisibilityChange(e, i) {}
  animateOpacityChange(e, i) {}
  animateClipOverflowChange(e, i) {}
  suspend() {}
  resume() {}
}
const s = (e, n) => {
  const t = i(e.POMNode) && n && e.POMNode.visible;
  e.setElementVisibility(t);
};
function o(e) {
  return s(this, e);
}
class h extends n {
  type = e.Ghost;
  render(e) {}
  destroy(e) {
    return t(this);
  }
  renderPositionChange(e) {}
  renderSizeChange(e) {}
  renderVisibilityChange(e) {
    return o.call(this, e);
  }
  setElementVisibility(e) {}
  renderOpacityChange(e) {}
  renderClipOverflowChange(e) {}
  animatePositionChange(e, i) {}
  animateSizeChange(e, i) {}
  animateVisibilityChange(e, i) {}
  animateOpacityChange(e, i) {}
  animateClipOverflowChange(e, i) {}
  suspend() {}
  resume() {}
}
export { h as G, r as a };
