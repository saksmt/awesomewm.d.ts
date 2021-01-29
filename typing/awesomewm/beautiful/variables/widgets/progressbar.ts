import { PatternRef } from '../../../gears/color';
import { ShapeRef } from '../../../gears/shape';
import { PositiveReal, RealNumber, Margins } from '../../../common';

export type ProgressbarVariables = {
  progressbar_fg: PatternRef;
  progressbar_bg: PatternRef;
  progressbar_margins: Margins | RealNumber;
  progressbar_paddings: Margins | RealNumber;

  progressbar_shape: ShapeRef;
  progressbar_border_color: PatternRef;
  progressbar_border_width: PositiveReal;

  progressbar_bar_shape: ShapeRef;
  progressbar_bar_border_color: PatternRef;
  progressbar_bar_border_width: PositiveReal;
};
