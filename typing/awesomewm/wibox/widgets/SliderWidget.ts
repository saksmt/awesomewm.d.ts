import { Widget } from '../Widget';
import { ShapeRef } from '../../gears/shape';
import { PatternRef } from '../../gears/color';
import { PositiveReal, RealNumber, Margins } from '../../common';

export interface SliderWidget extends Widget {
  handle_shape: ShapeRef;
  handle_color: PatternRef;
  handle_margins: Margins | RealNumber;
  handle_width: PositiveReal;
  handle_border_color: PatternRef;
  handle_border_width: PositiveReal;
  bar_shape: ShapeRef;
  bar_color: PatternRef;
  bar_height: PositiveReal;
  bar_margins: Margins | RealNumber;
  bar_border_color: PatternRef;
  bar_border_width: PositiveReal;
  value: RealNumber;
  minimum: RealNumber;
  maximum: RealNumber;
}
