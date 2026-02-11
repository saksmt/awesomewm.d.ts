/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, ShapeRef, FontRef, AlignPerimeter } from 'gears';

  export type TooltipVariables = {
    tooltip_bg: PatternRef;
    tooltip_fg: PatternRef;
    tooltip_font: FontRef;
    tooltip_border_color: PatternRef;
    tooltip_border_width: PositiveReal;
    tooltip_opacity: Opacity;
    tooltip_shape: ShapeRef;
    tooltip_align: AlignPerimeter;
  };
}
