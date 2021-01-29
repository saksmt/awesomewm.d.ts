import { SurfaceRef } from '../../gears/surface';
import { FontRef } from '../../pango/font';
import { PositiveReal } from '../../common';
import { PatternRef } from '../../gears/color';

export type MenuVariables = {
  menu_submenu_icon: SurfaceRef;
  menu_font: FontRef;
  menu_height: PositiveReal;
  menu_width: PositiveReal;
  menu_border_color: PatternRef;
  menu_border_width: PositiveReal;
  menu_fg_normal: PatternRef;
  menu_bg_normal: PatternRef;
  menu_fg_focus: PatternRef;
  menu_bg_focus: PatternRef;
  menu_submenu: string;

  menubar_border_width: PositiveReal;
  menubar_border_color: PatternRef;

  menubar_fg_normal: PatternRef;
  menubar_bg_normal: PatternRef;

  menubar_fg_selected: PatternRef;
  menubar_bg_selected: PatternRef;
};
