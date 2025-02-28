const qk = "Transient";
const Wk = "Singleton";
const Gk = "inject";
const Uk = "multi_inject";
const jk = "inversify:paramtypes";
const Vk = "Request";
const Hk = "post_construct";
const eB = "No matching bindings found for serviceIdentifier:";
var zk = "named";
var Qk = 0;
function Zk() {
  return Qk++;
}
window.Zk = Zk;
const sB = "Maximum call stack size exceeded";
function cB(t) {
  return t instanceof RangeError || t.message === sB;
}
function hB(t) {
  return "function" == typeof t
    ? t.name
    : "symbol" == typeof t
    ? t.toString()
    : t;
}
function NB(t, e, i) {
  var n,
    r,
    o = null;
  if (e.length > 0) {
    var a = e
      .filter(function (t) {
        return null !== t.target && t.target.type === Xk.ConstructorArgument;
      })
      .map(i);
    (r = a),
      (o = (function (t, e, i) {
        var n = e.filter(function (t) {
            return null !== t.target && t.target.type === Xk.ClassProperty;
          }),
          r = n.map(i);
        return (
          n.forEach(function (e, i) {
            var n;
            n = e.target.name.value();
            var o = r[i];
            t[n] = o;
          }),
          t
        );
      })((o = new ((n = t).bind.apply(n, [void 0].concat(r)))()), e, i));
  } else o = new t();
  return (
    (function (t, e) {
      if (Reflect.hasMetadata(Hk, t)) {
        var i = Reflect.getMetadata(Hk, t);
        try {
          e[i.value]();
        } catch (n) {
          throw new Error(aB(t.name, n.message));
        }
      }
    })(t, o),
    o
  );
}
const uB = {
  MultipleBindingsAvailable: 2,
  NoBindingsAvailable: 0,
  OnlyOneBindingAvailable: 1,
};
const OB = function (t) {
  return function (e) {
    e.parentContext.setCurrentRequest(e);
    var i = e.bindings,
      n = e.childRequests,
      r = e.target && e.target.isArray(),
      o = !(
        e.parentRequest &&
        e.parentRequest.target &&
        e.target &&
        e.parentRequest.target.matchesArray(e.target.serviceIdentifier)
      );
    if (r && o)
      return n.map(function (e) {
        return OB(t)(e);
      });
    var a = null;
    if (!e.target.isOptional() || 0 !== i.length) {
      var s = i[0],
        l = s.scope === Wk,
        u = s.scope === Vk;
      if (l && s.activated) return s.cache;
      if (u && null !== t && t.has(s.id)) return t.get(s.id);
      if (s.type === Yk.ConstantValue) a = s.cache;
      else if (s.type === Yk.Function) a = s.cache;
      else if (s.type === Yk.Constructor) a = s.implementationType;
      else if (s.type === Yk.DynamicValue && null !== s.dynamicValue)
        a = RB("toDynamicValue", s.serviceIdentifier, function () {
          return s.dynamicValue(e.parentContext);
        });
      else if (s.type === Yk.Factory && null !== s.factory)
        a = RB("toFactory", s.serviceIdentifier, function () {
          return s.factory(e.parentContext);
        });
      else if (s.type === Yk.Provider && null !== s.provider)
        a = RB("toProvider", s.serviceIdentifier, function () {
          return s.provider(e.parentContext);
        });
      else {
        if (s.type !== Yk.Instance || null === s.implementationType) {
          var c = hB(e.serviceIdentifier);
          throw new Error("Invalid binding type: " + c);
        }
        a = NB(s.implementationType, n, OB(t));
      }
      return (
        "function" == typeof s.onActivation &&
          (a = s.onActivation(e.parentContext, a)),
        l && ((s.cache = a), (s.activated = !0)),
        u && null !== t && !t.has(s.id) && t.set(s.id, a),
        a
      );
    }
  };
};
const Yk = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider",
};
var mB = (function () {
  function t(t) {
    (this.id = window.Zk()), (this.container = t);
  }
  return (
    (t.prototype.addPlan = function (t) {
      this.plan = t;
    }),
    (t.prototype.setCurrentRequest = function (t) {
      this.currentRequest = t;
    }),
    t
  );
})();
const jB = (function () {
  function t(t) {
    (this._binding = t),
      (this._bindingWhenSyntax = new GB(this._binding)),
      (this._bindingOnSyntax = new UB(this._binding));
  }
  return (
    (t.prototype.when = function (t) {
      return this._bindingWhenSyntax.when(t);
    }),
    (t.prototype.whenTargetNamed = function (t) {
      return this._bindingWhenSyntax.whenTargetNamed(t);
    }),
    (t.prototype.whenTargetIsDefault = function () {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    }),
    (t.prototype.whenTargetTagged = function (t, e) {
      return this._bindingWhenSyntax.whenTargetTagged(t, e);
    }),
    (t.prototype.whenInjectedInto = function (t) {
      return this._bindingWhenSyntax.whenInjectedInto(t);
    }),
    (t.prototype.whenParentNamed = function (t) {
      return this._bindingWhenSyntax.whenParentNamed(t);
    }),
    (t.prototype.whenParentTagged = function (t, e) {
      return this._bindingWhenSyntax.whenParentTagged(t, e);
    }),
    (t.prototype.whenAnyAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(t);
    }),
    (t.prototype.whenNoAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorIs(t);
    }),
    (t.prototype.whenAnyAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
    }),
    (t.prototype.whenAnyAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e);
    }),
    (t.prototype.whenNoAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(t);
    }),
    (t.prototype.whenNoAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(t, e);
    }),
    (t.prototype.whenAnyAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
    }),
    (t.prototype.whenNoAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(t);
    }),
    (t.prototype.onActivation = function (t) {
      return this._bindingOnSyntax.onActivation(t);
    }),
    t
  );
})();
const UB = (function () {
  function t(t) {
    this._binding = t;
  }
  return (
    (t.prototype.onActivation = function (t) {
      return (this._binding.onActivation = t), new GB(this._binding);
    }),
    t
  );
})();
const GB = (function () {
  function t(t) {
    this._binding = t;
  }
  return (
    (t.prototype.when = function (t) {
      return (this._binding.constraint = t), new UB(this._binding);
    }),
    (t.prototype.whenTargetNamed = function (t) {
      return (this._binding.constraint = kB(t)), new UB(this._binding);
    }),
    (t.prototype.whenTargetIsDefault = function () {
      return (
        (this._binding.constraint = function (t) {
          return (
            null !== t.target && !t.target.isNamed() && !t.target.isTagged()
          );
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenTargetTagged = function (t, e) {
      return (this._binding.constraint = zB(t)(e)), new UB(this._binding);
    }),
    (t.prototype.whenInjectedInto = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return BB(t)(e.parentRequest);
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenParentNamed = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return kB(t)(e.parentRequest);
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenParentTagged = function (t, e) {
      return (
        (this._binding.constraint = function (i) {
          return zB(t)(e)(i.parentRequest);
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenAnyAncestorIs = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return FB(e, BB(t));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenNoAncestorIs = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return !FB(e, BB(t));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenAnyAncestorNamed = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return FB(e, kB(t));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenNoAncestorNamed = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return !FB(e, kB(t));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenAnyAncestorTagged = function (t, e) {
      return (
        (this._binding.constraint = function (i) {
          return FB(i, zB(t)(e));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenNoAncestorTagged = function (t, e) {
      return (
        (this._binding.constraint = function (i) {
          return !FB(i, zB(t)(e));
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenAnyAncestorMatches = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return FB(e, t);
        }),
        new UB(this._binding)
      );
    }),
    (t.prototype.whenNoAncestorMatches = function (t) {
      return (
        (this._binding.constraint = function (e) {
          return !FB(e, t);
        }),
        new UB(this._binding)
      );
    }),
    t
  );
})();
const xB = (function () {
  function t(t) {
    this.str = t;
  }
  return (
    (t.prototype.startsWith = function (t) {
      return 0 === this.str.indexOf(t);
    }),
    (t.prototype.endsWith = function (t) {
      var e,
        i = t.split("").reverse().join("");
      return (
        (e = this.str.split("").reverse().join("")),
        this.startsWith.call(
          {
            str: e,
          },
          i
        )
      );
    }),
    (t.prototype.contains = function (t) {
      return -1 !== this.str.indexOf(t);
    }),
    (t.prototype.equals = function (t) {
      return this.str === t;
    }),
    (t.prototype.value = function () {
      return this.str;
    }),
    t
  );
})();
const _B = (function () {
  function t(t, e, i, n) {
    (this.id = window.Zk()),
      (this.type = t),
      (this.serviceIdentifier = i),
      (this.name = new xB(e || "")),
      (this.metadata = new Array());
    var r = null;
    "string" == typeof n ? (r = new yB(zk, n)) : n instanceof yB && (r = n),
      null !== r && this.metadata.push(r);
  }
  return (
    (t.prototype.hasTag = function (t) {
      for (var e = 0, i = this.metadata; e < i.length; e++) {
        if (i[e].key === t) return !0;
      }
      return !1;
    }),
    (t.prototype.isArray = function () {
      return this.hasTag(Uk);
    }),
    (t.prototype.matchesArray = function (t) {
      return this.matchesTag(Uk)(t);
    }),
    (t.prototype.isNamed = function () {
      return this.hasTag(zk);
    }),
    (t.prototype.isTagged = function () {
      return this.metadata.some(function (t) {
        return (
          t.key !== Gk &&
          t.key !== Uk &&
          t.key !== kk &&
          t.key !== Bk &&
          t.key !== zk
        );
      });
    }),
    (t.prototype.isOptional = function () {
      return this.matchesTag("optional")(!0);
    }),
    (t.prototype.getNamedTag = function () {
      return this.isNamed()
        ? this.metadata.filter(function (t) {
            return t.key === zk;
          })[0]
        : null;
    }),
    (t.prototype.getCustomTags = function () {
      return this.isTagged()
        ? this.metadata.filter(function (t) {
            return (
              t.key !== Gk &&
              t.key !== Uk &&
              t.key !== kk &&
              t.key !== Bk &&
              t.key !== zk
            );
          })
        : null;
    }),
    (t.prototype.matchesNamedTag = function (t) {
      return this.matchesTag(zk)(t);
    }),
    (t.prototype.matchesTag = function (t) {
      var e = this;
      return function (i) {
        for (var n = 0, r = e.metadata; n < r.length; n++) {
          var o = r[n];
          if (o.key === t && o.value === i) return !0;
        }
        return !1;
      };
    }),
    t
  );
})();
const HB = (function () {
  function t(t) {
    this._binding = t;
  }
  return (
    (t.prototype.inRequestScope = function () {
      return (this._binding.scope = Vk), new jB(this._binding);
    }),
    (t.prototype.inSingletonScope = function () {
      return (this._binding.scope = Wk), new jB(this._binding);
    }),
    (t.prototype.inTransientScope = function () {
      return (this._binding.scope = qk), new jB(this._binding);
    }),
    t
  );
})();
const VB = (function () {
  function t(t) {
    (this._binding = t),
      (this._bindingWhenSyntax = new GB(this._binding)),
      (this._bindingOnSyntax = new UB(this._binding)),
      (this._bindingInSyntax = new HB(t));
  }
  return (
    (t.prototype.inRequestScope = function () {
      return this._bindingInSyntax.inRequestScope();
    }),
    (t.prototype.inSingletonScope = function () {
      return this._bindingInSyntax.inSingletonScope();
    }),
    (t.prototype.inTransientScope = function () {
      return this._bindingInSyntax.inTransientScope();
    }),
    (t.prototype.when = function (t) {
      return this._bindingWhenSyntax.when(t);
    }),
    (t.prototype.whenTargetNamed = function (t) {
      return this._bindingWhenSyntax.whenTargetNamed(t);
    }),
    (t.prototype.whenTargetIsDefault = function () {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    }),
    (t.prototype.whenTargetTagged = function (t, e) {
      return this._bindingWhenSyntax.whenTargetTagged(t, e);
    }),
    (t.prototype.whenInjectedInto = function (t) {
      return this._bindingWhenSyntax.whenInjectedInto(t);
    }),
    (t.prototype.whenParentNamed = function (t) {
      return this._bindingWhenSyntax.whenParentNamed(t);
    }),
    (t.prototype.whenParentTagged = function (t, e) {
      return this._bindingWhenSyntax.whenParentTagged(t, e);
    }),
    (t.prototype.whenAnyAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(t);
    }),
    (t.prototype.whenNoAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorIs(t);
    }),
    (t.prototype.whenAnyAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
    }),
    (t.prototype.whenAnyAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e);
    }),
    (t.prototype.whenNoAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(t);
    }),
    (t.prototype.whenNoAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(t, e);
    }),
    (t.prototype.whenAnyAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
    }),
    (t.prototype.whenNoAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(t);
    }),
    (t.prototype.onActivation = function (t) {
      return this._bindingOnSyntax.onActivation(t);
    }),
    t
  );
})();

const WB = (function () {
  function t(t) {
    this._binding = t;
  }
  return (
    (t.prototype.to = function (t) {
      return (
        (this._binding.type = Yk.Instance),
        (this._binding.implementationType = t),
        new VB(this._binding)
      );
    }),
    (t.prototype.toSelf = function () {
      if ("function" != typeof this._binding.serviceIdentifier)
        throw new Error(
          "The toSelf function can only be applied when a constructor is used as service identifier"
        );
      var t = this._binding.serviceIdentifier;
      return this.to(t);
    }),
    (t.prototype.toConstantValue = function (t) {
      return (
        (this._binding.type = Yk.ConstantValue),
        (this._binding.cache = t),
        (this._binding.dynamicValue = null),
        (this._binding.implementationType = null),
        new jB(this._binding)
      );
    }),
    (t.prototype.toDynamicValue = function (t) {
      return (
        (this._binding.type = Yk.DynamicValue),
        (this._binding.cache = null),
        (this._binding.dynamicValue = t),
        (this._binding.implementationType = null),
        new VB(this._binding)
      );
    }),
    (t.prototype.toConstructor = function (t) {
      return (
        (this._binding.type = Yk.Constructor),
        (this._binding.implementationType = t),
        new jB(this._binding)
      );
    }),
    (t.prototype.toFactory = function (t) {
      return (
        (this._binding.type = Yk.Factory),
        (this._binding.factory = t),
        new jB(this._binding)
      );
    }),
    (t.prototype.toFunction = function (t) {
      if ("function" != typeof t)
        throw new Error(
          "Value provided to function binding must be a function!"
        );
      var e = this.toConstantValue(t);
      return (this._binding.type = Yk.Function), e;
    }),
    (t.prototype.toAutoFactory = function (t) {
      return (
        (this._binding.type = Yk.Factory),
        (this._binding.factory = function (e) {
          return function () {
            return e.container.get(t);
          };
        }),
        new jB(this._binding)
      );
    }),
    (t.prototype.toProvider = function (t) {
      return (
        (this._binding.type = Yk.Provider),
        (this._binding.provider = t),
        new jB(this._binding)
      );
    }),
    (t.prototype.toService = function (t) {
      this.toDynamicValue(function (e) {
        return e.container.get(t);
      });
    }),
    t
  );
})();
const yB = (function () {
  function t(t, e) {
    (this.key = t), (this.value = e);
  }
  return (
    (t.prototype.toString = function () {
      return this.key === zk
        ? "named: " + this.value.toString() + " "
        : "tagged: { key:" +
            this.key.toString() +
            ", value: " +
            this.value +
            " }";
    }),
    t
  );
})();
function pB(t, e, i) {
  var n = "",
    r = i(t, e);
  return (
    0 !== r.length &&
      ((n = "\nRegistered bindings:"),
      r.forEach(function (t) {
        var e = "Object";
        null !== t.implementationType && (e = gB(t.implementationType)),
          (n = n + "\n " + e),
          t.constraint.metaData && (n = n + " - " + t.constraint.metaData);
      })),
    n
  );
}
function TB(t, e, i, n, r) {
  var o = LB(i.container, r.serviceIdentifier),
    a = [];
  return (
    o.length === uB.NoBindingsAvailable &&
      i.container.options.autoBindInjectable &&
      "function" == typeof r.serviceIdentifier &&
      t.getConstructorMetadata(r.serviceIdentifier).compilerGeneratedMetadata &&
      (i.container.bind(r.serviceIdentifier).toSelf(),
      (o = LB(i.container, r.serviceIdentifier))),
    (a = e
      ? o
      : o.filter(function (t) {
          var e = new EB(t.serviceIdentifier, i, n, t, r);
          return t.constraint(e);
        })),
    (function (t, e, i, n) {
      switch (e.length) {
        case uB.NoBindingsAvailable:
          if (i.isOptional()) return e;
          var r = hB(t),
            o = eB;
          throw (
            ((o += (function (t, e) {
              if (e.isTagged() || e.isNamed()) {
                var i = "",
                  n = e.getNamedTag(),
                  r = e.getCustomTags();
                return (
                  null !== n && (i += n.toString() + "\n"),
                  null !== r &&
                    r.forEach(function (t) {
                      i += t.toString() + "\n";
                    }),
                  " " + t + "\n " + t + " - " + i
                );
              }
              return " " + t;
            })(r, i)),
            (o += pB(n, r, LB)),
            new Error(o))
          );
        case uB.OnlyOneBindingAvailable:
          if (!i.isArray()) return e;
        case uB.MultipleBindingsAvailable:
        default:
          if (i.isArray()) return e;
          (r = hB(t)), (o = tB + " " + r);
          throw ((o += pB(n, r, LB)), new Error(o));
      }
    })(r.serviceIdentifier, a, r, i.container),
    a
  );
}
var EB = (function () {
  function t(t, e, i, n, r) {
    (this.id = window.Zk()),
      (this.serviceIdentifier = t),
      (this.parentContext = e),
      (this.parentRequest = i),
      (this.target = r),
      (this.childRequests = []),
      (this.bindings = Array.isArray(n) ? n : [n]),
      (this.requestScope = null === i ? new Map() : null);
  }
  return (
    (t.prototype.addChildRequest = function (e, i, n) {
      var r = new t(e, this.parentContext, this, i, n);
      return this.childRequests.push(r), r;
    }),
    t
  );
})();
function DB(t) {
  return t._bindingDictionary;
}
function LB(t, e) {
  var i = [],
    n = DB(t);
  return (
    n.hasKey(e) ? (i = n.get(e)) : null !== t.parent && (i = LB(t.parent, e)), i
  );
}
const vB = function (t, e) {
  (this.parentContext = t), (this.rootRequest = e);
};
function CB(t, e) {
  for (
    var i = t.getPropertiesMetadata(e), n = [], r = 0, o = Object.keys(i);
    r < o.length;
    r++
  ) {
    var a = o[r],
      s = i[a],
      l = AB(i[a]),
      u = l.targetName || a,
      c = l.inject || l.multiInject,
      h = new _B(Xk.ClassProperty, u, c);
    (h.metadata = s), n.push(h);
  }
  var p = Object.getPrototypeOf(e.prototype).constructor;
  if (p !== Object) {
    var d = CB(t, p);
    n = n.concat(d);
  }
  return n;
}
function wB(t, e) {
  var i = Object.getPrototypeOf(e.prototype).constructor;
  if (i !== Object) {
    var n = SB(t, gB(i), i, !0),
      r = n.map(function (t) {
        return t.metadata.filter(function (t) {
          return t.key === Bk;
        });
      }),
      o = [].concat.apply([], r).length,
      a = n.length - o;
    return a > 0 ? a : wB(t, i);
  }
  return 0;
}
function SB(t, e, i, n) {
  var r = t.getConstructorMetadata(i),
    o = r.compilerGeneratedMetadata;
  if (void 0 === o) throw new Error(iB + " " + e + ".");
  var a = r.userGeneratedMetadata,
    s = Object.keys(a),
    l = (function (t, e, i, n, r) {
      for (var o = [], a = 0; a < r; a++) {
        var s = MB(a, t, e, i, n);
        null !== s && o.push(s);
      }
      return o;
    })(n, e, o, a, 0 === i.length && s.length > 0 ? s.length : i.length),
    u = CB(t, i);
  return l.concat(u);
}
function gB(t) {
  if (t.name) return t.name;
  var e = t.toString(),
    i = e.match(/^function\s*([^\s(]+)/);
  return i ? i[1] : "Anonymous function: " + e;
}
function PB(t, e, i, n, r, o) {
  var a, s;
  if (null === r) {
    (a = TB(t, e, n, null, o)), (s = new EB(i, n, null, a, o));
    var l = new vB(n, s);
    n.addPlan(l);
  } else
    (a = TB(t, e, n, r, o)), (s = r.addChildRequest(o.serviceIdentifier, a, o));
  a.forEach(function (e) {
    var i = null;
    if (o.isArray()) i = s.addChildRequest(e.serviceIdentifier, e, o);
    else {
      if (e.cache) return;
      i = s;
    }
    if (e.type === Yk.Instance && null !== e.implementationType) {
      var r = (function (t, e) {
        return SB(t, gB(e), e, !1);
      })(t, e.implementationType);
      if (!n.container.options.skipBaseClassChecks) {
        var a = wB(t, e.implementationType);
        if (r.length < a) {
          var l = oB(gB(e.implementationType));
          throw new Error(l);
        }
      }
      r.forEach(function (e) {
        PB(t, !1, e.serviceIdentifier, n, i, e);
      });
    }
  });
}
function IB(t, e, i, n, r, o, a, s) {
  void 0 === s && (s = !1);
  var l = new mB(e),
    u = (function (t, e, i, n, r, o) {
      var a = new yB(t ? Uk : Gk, i),
        s = new _B(e, n, i, a);
      if (void 0 !== r) {
        var l = new yB(r, o);
        s.metadata.push(l);
      }
      return s;
    })(i, n, r, "", o, a);
  try {
    return PB(t, s, r, l, null, u), l;
  } catch (c) {
    throw (cB(c) && l.plan && fB(l.plan.rootRequest), c);
  }
}

var Jk = (function () {
  function t(t, e) {
    (this.id = window.Zk()),
      (this.activated = !1),
      (this.serviceIdentifier = t),
      (this.scope = e),
      (this.type = Yk.Invalid),
      (this.constraint = function (t) {
        return !0;
      }),
      (this.implementationType = null),
      (this.cache = null),
      (this.factory = null),
      (this.provider = null),
      (this.onActivation = null),
      (this.dynamicValue = null);
  }
  return (
    (t.prototype.clone = function () {
      var e = new t(this.serviceIdentifier, this.scope);
      return (
        (e.activated = !1),
        (e.implementationType = this.implementationType),
        (e.dynamicValue = this.dynamicValue),
        (e.scope = this.scope),
        (e.type = this.type),
        (e.factory = this.factory),
        (e.provider = this.provider),
        (e.constraint = this.constraint),
        (e.onActivation = this.onActivation),
        (e.cache = this.cache),
        e
      );
    }),
    t
  );
})();

var sG = Symbol.for("INJECTION");
function lG(t, e, i, n) {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return (
        n &&
          !Reflect.hasMetadata(sG, this, e) &&
          Reflect.defineMetadata(sG, i(), this, e),
        Reflect.hasMetadata(sG, this, e)
          ? Reflect.getMetadata(sG, this, e)
          : i()
      );
    },
    set: function (t) {
      Reflect.defineMetadata(sG, t, this, e);
    },
  });
}
const lB = (function () {
  function t() {}
  return (
    (t.prototype.getConstructorMetadata = function (t) {
      return {
        compilerGeneratedMetadata: Reflect.getMetadata(jk, t),
        userGeneratedMetadata: Reflect.getMetadata("inversify:tagged", t) || {},
      };
    }),
    (t.prototype.getPropertiesMetadata = function (t) {
      return Reflect.getMetadata("inversify:tagged_props", t) || [];
    }),
    t
  );
})();
const YB = (function () {
  function t() {
    this._map = new Map();
  }
  return (
    (t.prototype.getMap = function () {
      return this._map;
    }),
    (t.prototype.add = function (t, e) {
      if (null == t) throw new Error(Kk);
      if (null == e) throw new Error(Kk);
      var i = this._map.get(t);
      void 0 !== i ? (i.push(e), this._map.set(t, i)) : this._map.set(t, [e]);
    }),
    (t.prototype.get = function (t) {
      if (null == t) throw new Error(Kk);
      var e = this._map.get(t);
      if (void 0 !== e) return e;
      throw new Error($k);
    }),
    (t.prototype.remove = function (t) {
      if (null == t) throw new Error(Kk);
      if (!this._map.delete(t)) throw new Error($k);
    }),
    (t.prototype.removeByCondition = function (t) {
      var e = this;
      this._map.forEach(function (i, n) {
        var r = i.filter(function (e) {
          return !t(e);
        });
        r.length > 0 ? e._map.set(n, r) : e._map.delete(n);
      });
    }),
    (t.prototype.hasKey = function (t) {
      if (null == t) throw new Error(Kk);
      return this._map.has(t);
    }),
    (t.prototype.clone = function () {
      var e = new t();
      return (
        this._map.forEach(function (t, i) {
          t.forEach(function (t) {
            return e.add(i, t.clone());
          });
        }),
        e
      );
    }),
    (t.prototype.traverse = function (t) {
      this._map.forEach(function (e, i) {
        t(i, e);
      });
    }),
    t
  );
})();
const ZB = (function () {
  function t(t) {
    var e = t || {};
    if ("object" != typeof e)
      throw new Error(
        "Invalid Container constructor argument. Container options must be an object."
      );
    if (void 0 === e.defaultScope) e.defaultScope = qk;
    else if (
      e.defaultScope !== Wk &&
      e.defaultScope !== qk &&
      e.defaultScope !== Vk
    )
      throw new Error(
        "Invalid Container option. Default scope must be a string ('singleton' or 'transient')."
      );
    if (void 0 === e.autoBindInjectable) e.autoBindInjectable = !1;
    else if ("boolean" != typeof e.autoBindInjectable)
      throw new Error(
        "Invalid Container option. Auto bind injectable must be a boolean"
      );
    if (void 0 === e.skipBaseClassChecks) e.skipBaseClassChecks = !1;
    else if ("boolean" != typeof e.skipBaseClassChecks)
      throw new Error(
        "Invalid Container option. Skip base check must be a boolean"
      );
    (this.options = {
      autoBindInjectable: e.autoBindInjectable,
      defaultScope: e.defaultScope,
      skipBaseClassChecks: e.skipBaseClassChecks,
    }),
      (this.id = Zk()),
      (this._bindingDictionary = new YB()),
      (this._snapshots = []),
      (this._middleware = null),
      (this.parent = null),
      (this._metadataReader = new lB());
  }
  return (
    (t.merge = function (e, i) {
      var n = new t(),
        r = DB(n),
        o = DB(e),
        a = DB(i);
      function s(t, e) {
        t.traverse(function (t, i) {
          i.forEach(function (t) {
            e.add(t.serviceIdentifier, t.clone());
          });
        });
      }
      return s(o, r), s(a, r), n;
    }),
    (t.prototype.load = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      for (
        var i = this._getContainerModuleHelpersFactory(), n = 0, r = t;
        n < r.length;
        n++
      ) {
        var o = r[n],
          a = i(o.id);
        o.registry(
          a.bindFunction,
          a.unbindFunction,
          a.isboundFunction,
          a.rebindFunction
        );
      }
    }),
    (t.prototype.loadAsync = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return XB(this, void 0, void 0, function () {
        var e, i, n, r, o;
        return QB(this, function (a) {
          switch (a.label) {
            case 0:
              (e = this._getContainerModuleHelpersFactory()),
                (i = 0),
                (n = t),
                (a.label = 1);
            case 1:
              return i < n.length
                ? ((r = n[i]),
                  (o = e(r.id)),
                  [
                    4,
                    r.registry(
                      o.bindFunction,
                      o.unbindFunction,
                      o.isboundFunction,
                      o.rebindFunction
                    ),
                  ])
                : [3, 4];
            case 2:
              a.sent(), (a.label = 3);
            case 3:
              return i++, [3, 1];
            case 4:
              return [2];
          }
        });
      });
    }),
    (t.prototype.unload = function () {
      for (var t = this, e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      e.forEach(function (e) {
        var i,
          n =
            ((i = e.id),
            function (t) {
              return t.moduleId === i;
            });
        t._bindingDictionary.removeByCondition(n);
      });
    }),
    (t.prototype.bind = function (t) {
      var e = this.options.defaultScope || qk,
        i = new Jk(t, e);
      return this._bindingDictionary.add(t, i), new WB(i);
    }),
    (t.prototype.rebind = function (t) {
      return this.unbind(t), this.bind(t);
    }),
    (t.prototype.unbind = function (t) {
      try {
        this._bindingDictionary.remove(t);
      } catch (e) {
        throw new Error("Could not unbind serviceIdentifier: " + hB(t));
      }
    }),
    (t.prototype.unbindAll = function () {
      this._bindingDictionary = new YB();
    }),
    (t.prototype.isBound = function (t) {
      var e = this._bindingDictionary.hasKey(t);
      return !e && this.parent && (e = this.parent.isBound(t)), e;
    }),
    (t.prototype.isBoundNamed = function (t, e) {
      return this.isBoundTagged(t, zk, e);
    }),
    (t.prototype.isBoundTagged = function (t, e, i) {
      var n = !1;
      if (this._bindingDictionary.hasKey(t)) {
        var r = this._bindingDictionary.get(t),
          o = (function (t, e, i, n) {
            var r = new _B(window.Xk.Variable, "", e, new yB(i, n)),
              o = new mB(t);
            return new EB(e, o, null, [], r);
          })(this, t, e, i);
        n = r.some(function (t) {
          return t.constraint(o);
        });
      }
      return !n && this.parent && (n = this.parent.isBoundTagged(t, e, i)), n;
    }),
    (t.prototype.snapshot = function () {
      this._snapshots.push(
        qB.of(this._bindingDictionary.clone(), this._middleware)
      );
    }),
    (t.prototype.restore = function () {
      var t = this._snapshots.pop();
      if (void 0 === t) throw new Error("No snapshot available to restore.");
      (this._bindingDictionary = t.bindings), (this._middleware = t.middleware);
    }),
    (t.prototype.createChild = function (e) {
      var i = new t(e || this.options);
      return (i.parent = this), i;
    }),
    (t.prototype.applyMiddleware = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var i = this._middleware ? this._middleware : this._planAndResolve();
      this._middleware = t.reduce(function (t, e) {
        return e(t);
      }, i);
    }),
    (t.prototype.applyCustomMetadataReader = function (t) {
      this._metadataReader = t;
    }),
    (t.prototype.get = function (t) {
      return this._get(!1, !1, window.Xk.Variable, t);
    }),
    (t.prototype.getTagged = function (t, e, i) {
      return this._get(!1, !1, window.Xk.Variable, t, e, i);
    }),
    (t.prototype.getNamed = function (t, e) {
      return this.getTagged(t, zk, e);
    }),
    (t.prototype.getAll = function (t) {
      return this._get(!0, !0, window.Xk.Variable, t);
    }),
    (t.prototype.getAllTagged = function (t, e, i) {
      return this._get(!1, !0, window.Xk.Variable, t, e, i);
    }),
    (t.prototype.getAllNamed = function (t, e) {
      return this.getAllTagged(t, zk, e);
    }),
    (t.prototype.resolve = function (t) {
      var e = this.createChild();
      return e.bind(t).toSelf(), e.get(t);
    }),
    (t.prototype._getContainerModuleHelpersFactory = function () {
      var t = this,
        e = function (t, e) {
          t._binding.moduleId = e;
        },
        i = function (i) {
          return function (n) {
            var r = t.rebind.bind(t)(n);
            return e(r, i), r;
          };
        };
      return function (n) {
        return {
          bindFunction:
            ((r = n),
            function (i) {
              var n = t.bind.bind(t)(i);
              return e(n, r), n;
            }),
          isboundFunction: function (e) {
            return t.isBound.bind(t)(e);
          },
          rebindFunction: i(n),
          unbindFunction: function (e) {
            t.unbind.bind(t)(e);
          },
        };
        var r;
      };
    }),
    (t.prototype._get = function (t, e, i, n, r, o) {
      var a = null,
        s = {
          avoidConstraints: t,
          contextInterceptor: function (t) {
            return t;
          },
          isMultiInject: e,
          key: r,
          serviceIdentifier: n,
          targetType: i,
          value: o,
        };
      if (this._middleware) {
        if (null == (a = this._middleware(s)))
          throw new Error(
            "Invalid return type in middleware. Middleware must return!"
          );
      } else a = this._planAndResolve()(s);
      return a;
    }),
    (t.prototype._planAndResolve = function () {
      var t = this;
      return function (e) {
        var i = IB(
          t._metadataReader,
          t,
          e.isMultiInject,
          e.targetType,
          e.serviceIdentifier,
          e.key,
          e.value,
          e.avoidConstraints
        );
        return (function (t) {
          return OB(t.plan.rootRequest.requestScope)(t.plan.rootRequest);
        })((i = e.contextInterceptor(i)));
      };
    }),
    t
  );
})();
window.ZB = ZB;

const bG = new ZB();
window.bG = bG;

const xG = (function (t, e) {
    void 0 === e && (e = !0);
    var i = (function (t, e) {
        return function (i) {
          return function (n, r) {
            lG(
              n,
              r,
              function () {
                return t.get(i);
              },
              e
            );
          };
        };
      })(t, e),
      n = (function (t, e) {
        return function (i, n) {
          return function (r, o) {
            lG(
              r,
              o,
              function () {
                return t.getNamed(i, n);
              },
              e
            );
          };
        };
      })(t, e),
      r = (function (t, e) {
        return function (i, n, r) {
          return function (o, a) {
            lG(
              o,
              a,
              function () {
                return t.getTagged(i, n, r);
              },
              e
            );
          };
        };
      })(t, e),
      o = (function (t, e) {
        return function (i) {
          return function (n, r) {
            lG(
              n,
              r,
              function () {
                return t.getAll(i);
              },
              e
            );
          };
        };
      })(t, e);
    return {
      lazyInject: i,
      lazyInjectNamed: n,
      lazyInjectTagged: r,
      lazyMultiInject: o,
    };
  })(bG, !1),
  _G = (t) => {
    const e = xG.lazyInject(t);
    return function (t, i, n) {
      e.call(this, t, i), n && (n.initializer = () => t[i]);
    };
  };

window._G = _G;
