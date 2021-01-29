import { Widget } from '../Widget';
import { ShapeRef } from '../../gears/shape';
import { PatternRef } from '../../gears/color';
import { Margins } from '../../common';

export interface CheckboxWidget extends Widget {
  border_width: number;
  bg: PatternRef;
  border_color: PatternRef;
  check_border_color: PatternRef;
  check_border_width: PatternRef;
  check_color: PatternRef;
  shape: ShapeRef;
  check_shape: ShapeRef;
  paddings: Margins | number;
  color: PatternRef;
  checked: boolean;
}
