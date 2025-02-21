import { i9 as e } from "../entry/index.7886b0f6.js";
var t, a, i, o, n, l, r, p, u, m;
async function g(t, a) {
  if (this.editMode === e.View) {
    const e = this.getRenderer(),
      i = {
        ...a,
        target: this.POMNode,
      };
    await e.emit(t, i);
  }
}
((a = t || (t = {})).RangeInput = "rangeInput"),
  (a.CheckboxGroup = "checkboxGroup"),
  (a.GradientColor = "gradientColor"),
  (a.RadioButtonGroup = "radioButtonGroup"),
  (a.TitleSplitHalf = "titleSplitHalf"),
  (a.TitleSplitHalfGradientColor = "titleSplitHalfGradientColor"),
  (a.CollapsePanel = "collapsePanel"),
  (a.DigitalTwinGroup = "digitalTwinGroup"),
  (a.FontFamily = "fontFamily"),
  (a.FontWeight = "fontWeight"),
  (a.FontSize = "fontSize"),
  (a.FontColor = "color"),
  (a.LetterSpacing = "letterSpacing"),
  (a.Typography = "typo"),
  (a.MapDynamicNumber = "mapDynamicNumber"),
  (a.FlipCardAlignRadioButtonGroup = "flipCardAlignRadioButtonGroup"),
  (a.AffixTab = "affixTab"),
  (a.AnimationInterval = "animationInterval"),
  (a.FontStyleCheckboxGroup = "fontStyleCheckboxGroup"),
  ((o = i || (i = {})).Number = "number"),
  (o.NumberSelect = "numberSmartSelect"),
  (o.String = "string"),
  (o.Boolean = "boolean"),
  (o.Color = "color"),
  (o.Fill = "fill"),
  (o.Range = "range"),
  (o.Enum = "enum"),
  (o.Panel = "panel"),
  (o.Image = "image"),
  ((l = n || (n = {})).Small = "small"),
  (l.Medium = "medium"),
  (l.Large = "large"),
  ((p = r || (r = {})).INTEGER = "integer"),
  (p.FLOAT = "float"),
  (p.EXPRESSION = "expression"),
  ((m = u || (u = {})).Solid = "Solid"),
  (m.LinearGradient = "LinearGradient");
export { n as A, t as E, u as F, r as N, i as a, g as e };
