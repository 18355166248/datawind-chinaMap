class zf {
  constructor(t) {
    (this.parent = t), (this.watchers = []);
  }
  addWatch(t) {
    t instanceof Array
      ? Array.prototype.push.apply(this.watchers, t)
      : this.watchers.push(t),
      this.watchers.sort((t, e) => (t.priority || 10) - (e.priority || 10));
  }
  compare(t, e) {
    if (e && t)
      for (let i = 0, n = this.watchers.length; i < n; i++) {
        const n = this.watchers[i],
          { rule: r, cb: o } = n;
        if (this.__calcRuleAndProps(r, e, t) && (o(e, t), n.serial)) break;
      }
  }
  defaultRule(t, e, i, n = !1) {
    return this.parent.defaultRule(t, e, i, n);
  }
  __calcRuleAndProps(t, e, i) {
    let n = !1;
    switch (t.type) {
      case "all":
        t.rules && (n = t.rules.every((t) => this.__calcRuleAndProps(t, e, i)));
        break;
      case "some":
        t.rules && (n = t.rules.some((t) => this.__calcRuleAndProps(t, e, i)));
        break;
      default: {
        const n =
          "custom" === t.type ? t.ruleFunc : this.parent.ruleFuncMap[t.type];
        return !!n && n(e, i, t.key);
      }
    }
    return n;
  }
}

const kf = new (class {
  constructor() {
    this.ruleFuncMap = {};
  }
  registerRule(t, e) {
    this.ruleFuncMap[t] = e;
  }
  createPropsWatch() {
    return new zf(this);
  }
  defaultRule(t, e, i, n = !1) {
    return {
      rule: {
        type: e,
        key: t,
      },
      cb: i,
      serial: n,
    };
  }
})();
kf.registerRule("has", (t, e, i) => window.cf(window.Ff(t, i))),
  kf.registerRule("diff", (t, e, i) => {
    const n = window.Ff(t, i),
      r = window.Ff(e, i);
    return window.cf(n) && n !== r;
  }),
  kf.registerRule("diffDeep", (t, e, i) => {
    const n = window.Ff(t, i),
      r = window.Ff(e, i);
    return (
      window.cf(n) && n !== r && (Array.isArray(n) ? !window.tf(n, r) : !window.tf(window.nf({}, r, n), r))
    );
  }),
  kf.registerRule("diffAnyone", (t, e, i) =>
    i.some((i) => {
      const n = window.Ff(t, i),
        r = window.Ff(e, i);
      return window.cf(n) && n !== r;
    })
  ),
  kf.registerRule("diffAnyoneDeep", (t, e, i) =>
    i.some((i) => {
      const n = window.Ff(t, i),
        r = window.Ff(e, i);
      return (
        window.cf(n) &&
        n !== r &&
        (Array.isArray(n) ? !window.tf(n, r) : !window.tf(window.nf({}, r, n), r))
      );
    })
  ),
  kf.registerRule("always", () => !0),
  kf.registerRule("hasAndClose", (t, e, i) => {
    const n = window.Ff(t, i);
    return window.cf(n) && !n;
  });

window.kf = kf;
