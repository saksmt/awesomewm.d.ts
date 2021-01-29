import { Fraction, PositiveReal } from '../../../common';
import { PatternRef } from '../../../gears/color';
import { ShapeRef } from '../../../gears/shape';

export type SeparatorVariables = {
  separator_thickness: PositiveReal;
  separator_border_color: PatternRef;
  separator_border_width: PositiveReal;
  separator_span_ratio: Fraction;
  separator_color: PatternRef;
  separator_shape: ShapeRef;
};
