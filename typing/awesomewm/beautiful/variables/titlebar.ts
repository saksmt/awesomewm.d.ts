import { PatternRef } from '../../gears/color';
import { SurfaceRef } from '../../gears/surface';

export type TitlebarVariables = {
  titlebar_fg: PatternRef;
  titlebar_bg: PatternRef;
  titlebar_fg_normal: PatternRef;
  titlebar_bg_normal: PatternRef;
  titlebar_fg_focus: PatternRef;
  titlebar_bg_focus: PatternRef;
  titlebar_bgimage: SurfaceRef;
  titlebar_bgimage_normal: SurfaceRef;
  titlebar_bgimage_focus: SurfaceRef;

  titlebar_floating_button: SurfaceRef;
  titlebar_floating_button_hover: SurfaceRef;
  titlebar_floating_button_press: SurfaceRef;
  titlebar_floating_button_active: SurfaceRef;
  titlebar_floating_button_active_hover: SurfaceRef;
  titlebar_floating_button_active_press: SurfaceRef;

  titlebar_close_button: SurfaceRef;
  titlebar_close_button_hover: SurfaceRef;
  titlebar_close_button_press: SurfaceRef;
  titlebar_close_button_active: SurfaceRef;
  titlebar_close_button_active_hover: SurfaceRef;
  titlebar_close_button_active_press: SurfaceRef;

  titlebar_minimize_button: SurfaceRef;
  titlebar_minimize_button_hover: SurfaceRef;
  titlebar_minimize_button_press: SurfaceRef;
  titlebar_minimize_button_active: SurfaceRef;
  titlebar_minimize_button_active_hover: SurfaceRef;
  titlebar_minimize_button_active_press: SurfaceRef;

  titlebar_sticky_button: SurfaceRef;
  titlebar_sticky_button_hover: SurfaceRef;
  titlebar_sticky_button_press: SurfaceRef;
  titlebar_sticky_button_active: SurfaceRef;
  titlebar_sticky_button_active_hover: SurfaceRef;
  titlebar_sticky_button_active_press: SurfaceRef;

  titlebar_maximized_button: SurfaceRef;
  titlebar_maximized_button_hover: SurfaceRef;
  titlebar_maximized_button_press: SurfaceRef;
  titlebar_maximized_button_active: SurfaceRef;
  titlebar_maximized_button_active_hover: SurfaceRef;
  titlebar_maximized_button_active_press: SurfaceRef;

  titlebar_ontop_button: SurfaceRef;
  titlebar_ontop_button_hover: SurfaceRef;
  titlebar_ontop_button_press: SurfaceRef;
  titlebar_ontop_button_active: SurfaceRef;
  titlebar_ontop_button_active_hover: SurfaceRef;
  titlebar_ontop_button_active_press: SurfaceRef;
};
