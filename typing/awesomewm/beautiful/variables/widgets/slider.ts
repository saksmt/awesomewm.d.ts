import { PositiveReal, RealNumber, Margins } from '../../../common';
import { PatternRef } from '../../../gears/color';
import { ShapeRef } from '../../../gears/shape';

export type SliderVariables = {
  handle_border_width: PositiveReal;
  handle_border_color: PatternRef;
  handle_color: PatternRef;
  handle_shape: ShapeRef;
  handle_width: PositiveReal;
  handle_margins: Margins | RealNumber;

  bar_border_width: PositiveReal;
  bar_border_color: PatternRef;
  bar_color: PatternRef;
  bar_shape: ShapeRef;
  bar_height: PositiveReal;
  bar_margins: Margins | RealNumber;
};
