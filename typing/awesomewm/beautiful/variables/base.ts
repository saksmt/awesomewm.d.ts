import { PatternRef } from '../../gears/color';
import { Fraction, NaturalNumber, PositiveReal } from '../../common';
import { MasterFillPolicy } from '../../awful/tag';
import { FontRef } from '../../pango/font';
import { SurfaceRef } from '../../gears/surface';
import { Screen } from '../../awful/screen';

export type BaseVariables = {
  cursor_mouse_move: string;
  cursor_mouse_resize: string;
  enable_spawn_cursor: boolean;
  master_width_factor: Fraction;
  useless_gap: PositiveReal;
  master_fill_policy: MasterFillPolicy;
  master_count: NaturalNumber;
  column_count: NaturalNumber;
  font: FontRef;
  wallpaper: SurfaceRef | ((this: void, screen: Screen) => SurfaceRef);
  icon_theme: string;
  awesome_icon: string;

  bg_systray: PatternRef;
  systray_icon_spacing: PositiveReal;

  bg_normal: PatternRef;
  fg_normal: PatternRef;
  border_normal: PatternRef;

  bg_urgent: PatternRef;
  fg_urgent: PatternRef;

  bg_focus: PatternRef;
  fg_focus: PatternRef;
  border_focus: PatternRef;

  bg_minimize: PatternRef;
  fg_minimize: PatternRef;

  border_marked: PatternRef;

  border_width: PositiveReal;
};
