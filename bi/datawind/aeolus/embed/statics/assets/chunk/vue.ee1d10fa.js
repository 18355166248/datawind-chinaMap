import { r as e, c as r, h as t } from "./runtime-dom.esm-bundler.b03bcf39.js";
import { E as n } from "./EntityElement.38fe1532.js";
import { e as s } from "./emitEvent.61fdb922.js";
import { ib as o } from "../entry/index.7886b0f6.js";
function a(e, r) {
  return r
    ? class extends r {
        render(r) {
          return super.render(r), i(this, e, r);
        }
        destroy(e) {
          var r;
          null == (r = this.variableContext.app) || r.unmount(),
            super.destroy(e);
        }
      }
    : class extends n {
        render(r) {
          return super.render(r), i(this, e, r);
        }
        destroy(e) {
          var r;
          null == (r = this.variableContext.app) || r.unmount(),
            super.destroy(e);
        }
      };
}
function i(n, a, i = !1) {
  if (i) {
    n.variableContext.props = e({
      context: {
        renderer: n,
        isFirstRender: i,
      },
    });
    const p = r({
      render: () => t(a, n.variableContext.props),
    });
    (n.variableContext.app = p), p.mount(n.container), s.call(n, o.Loaded);
  }
  n.variableContext.props.context.isFirstRender = i;
}
export { a as b };
