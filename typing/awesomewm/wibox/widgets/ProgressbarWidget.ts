import { Widget } from '../Widget';
import { PatternRef } from '../../gears/color';
import { PositiveReal, RealNumber, Margins } from '../../common';
import { ShapeRef } from '../../gears/shape';

export interface ProgressbarWidget extends Widget {
  border_color: PatternRef;
  border_width: PositiveReal;
  bar_border_color: PatternRef;
  bar_border_width: PositiveReal;
  color: PatternRef;
  background_color: PatternRef;
  bar_shape: ShapeRef;
  shape: ShapeRef;
  clip: boolean;
  ticks: boolean;
  ticks_gap: PositiveReal;
  ticks_size: PositiveReal;
  max_value: RealNumber;
  margins: Margins | RealNumber;
  paddings: Margins | RealNumber;

  set_value(value: RealNumber): void;
}
