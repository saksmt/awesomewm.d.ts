import { Widget } from '../Widget';
import { ShapeRef } from '../../gears/shape';
import { Fraction, PositiveReal } from '../../common';
import { PatternRef } from '../../gears/color';

export interface SeparatorWidget extends Widget {
  orientation: SeparatorOrientation;
  thickness: PositiveReal;
  shape: ShapeRef;
  span_ratio: Fraction;
  color: PatternRef;
  border_color: PatternRef;
  border_width: PositiveReal;
}

export const enum SeparatorOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Auto = 'auto',
}
