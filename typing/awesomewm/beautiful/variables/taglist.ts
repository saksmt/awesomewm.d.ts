import { PatternRef } from '../../gears/color';
import { ShapeRef } from '../../gears/shape';
import { FontRef } from '../../pango/font';
import { PositiveReal } from '../../common';

export type TaglistVariables = {
  taglist_fg_occupied: PatternRef;
  taglist_bg_occupied: PatternRef;

  taglist_squares_sel: ShapeRef;
  taglist_squares_unsel: ShapeRef;
  taglist_squares_sel_empty: ShapeRef;
  taglist_squares_unsel_empty: ShapeRef;
  taglist_squares_resize: boolean;
  taglist_font: FontRef;
  taglist_spacing: PositiveReal;

  taglist_shape: ShapeRef;
  taglist_shape_border_width: PositiveReal;
  taglist_shape_border_color: PatternRef;

  taglist_shape_focus: ShapeRef;
  taglist_shape_border_width_focus: PositiveReal;
  taglist_shape_border_color_focus: PatternRef;
  taglist_fg_focus: PatternRef;
  taglist_bg_focus: PatternRef;

  taglist_shape_urgent: ShapeRef;
  taglist_shape_border_width_urgent: PositiveReal;
  taglist_shape_border_color_urgent: PatternRef;
  taglist_fg_urgent: PatternRef;
  taglist_bg_urgent: PatternRef;

  taglist_shape_volatile: ShapeRef;
  taglist_shape_border_width_volatile: PositiveReal;
  taglist_shape_border_color_volatile: PatternRef;
  taglist_fg_volatile: PatternRef;
  taglist_bg_volatile: PatternRef;

  taglist_shape_empty: ShapeRef;
  taglist_shape_border_width_empty: PositiveReal;
  taglist_shape_border_color_empty: PatternRef;
  taglist_fg_empty: PatternRef;
  taglist_bg_empty: PatternRef;

  taglist_disable_icon: boolean;
  taglist_disable_text: boolean; //?
};
