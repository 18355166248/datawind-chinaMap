import {bf as i, cs as n} from "../entry/index.7886b0f6.js";
function t(t, r, a) {
    var e = !0
      , o = !0;
    if ("function" != typeof t)
        throw new TypeError("Expected a function");
    return i(a) && (e = "leading"in a ? !!a.leading : e,
    o = "trailing"in a ? !!a.trailing : o),
    n(t, r, {
        leading: e,
        maxWait: r,
        trailing: o
    })
}
export {t};
