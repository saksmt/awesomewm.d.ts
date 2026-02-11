/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, ShapeRef, FontRef, AlignX } from 'gears';

  export type LayoutlistVariables = {
    layoutlist_bg_normal: PatternRef;
    layoutlist_fg_normal: PatternRef;
    layoutlist_bg_selected: PatternRef;
    layoutlist_fg_selected: PatternRef;
    layoutlist_disable_name: boolean;
    layoutlist_disable_icon: boolean;
    layoutlist_font: FontRef;
    layoutlist_font_selected: FontRef;
    layoutlist_align: AlignX;
    layoutlist_spacing: PositiveReal;
    layoutlist_shape: ShapeRef;
    layoutlist_shape_border_width: PositiveReal;
    layoutlist_shape_border_color: PatternRef;
    layoutlist_shape_selected: ShapeRef;
    layoutlist_shape_border_width_selected: PositiveReal;
    layoutlist_shape_border_color_selected: PatternRef;
  };
}
