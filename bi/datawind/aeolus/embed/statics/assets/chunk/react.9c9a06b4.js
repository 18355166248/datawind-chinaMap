import {
  k as e,
  U as r,
  l as t,
  ib as n,
  i2 as s,
  i8 as i,
} from "../entry/index.7886b0f6.js";
import { E as o } from "./EntityElement.38fe1532.js";
import { e as a } from "./emitEvent.61fdb922.js";
function d(e, r) {
  return e;
}
function u(r, t, n) {
  return n
    ? class extends n {
        render(e) {
          if ((super.render(e), !this.error)) return c(this, r, e);
        }
        animate(e) {
          return m(this, r, e);
        }
        destroy(r) {
          e.exports.unmountComponentAtNode(this.container), super.destroy(r);
        }
        renderTips(e) {
          return p(this, t, e);
        }
      }
    : class extends o {
        render(e) {
          if ((super.render(e), !this.error)) return c(this, r, e);
        }
        animate(e) {
          return m(this, r, e);
        }
        destroy(r) {
          e.exports.unmountComponentAtNode(this.container), super.destroy(r);
        }
        renderTips(e) {
          return p(this, t, e);
        }
      };
}
function c(e, s, i = !1) {
  r.render(
    t.createElement(s, {
      context: {
        renderer: e,
        isFirstRender: i,
      },
    }),
    e.container
  ),
    i && a.call(e, n.Loaded);
}
function m(e, s, i) {
  r.render(
    t.createElement(s, {
      context: {
        renderer: e,
        animationTimeline: i,
      },
    }),
    e.container
  ),
    a.call(e, n.Loaded);
}
function p(e, n, o) {
  o || (o = new s(i.DataEmpty, "Please Config Data Bind First")),
    e.setError(o),
    r.render(
      t.createElement(n, {
        context: {
          renderer: e,
        },
      }),
      e.container
    );
}
export { u as b, d };
