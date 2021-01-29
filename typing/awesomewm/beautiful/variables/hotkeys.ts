import { PatternRef } from '../../gears/color';
import { PositiveReal, RealNumber } from '../../common';
import { ShapeRef } from '../../gears/shape';
import { FontRef } from '../../pango/font';

export type HotkeysVariables = {
  hotkeys_bg: PatternRef;
  hotkeys_fg: PatternRef;
  hotkeys_border_width: PositiveReal;
  hotkeys_border_color: PatternRef;
  hotkeys_shape: ShapeRef;
  hotkeys_modifiers_fg: PatternRef;
  hotkeys_label_bg: PatternRef;
  hotkeys_label_fg: PatternRef;
  hotkeys_font: FontRef;
  hotkeys_description_font: FontRef;
  hotkeys_group_margin: RealNumber;
};
