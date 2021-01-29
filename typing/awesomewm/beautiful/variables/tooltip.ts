import { PatternRef } from '../../gears/color';
import { FontRef } from '../../pango/font';
import { AlignPerimeter, Opacity, PositiveReal } from '../../common';
import { ShapeRef } from '../../gears/shape';

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
