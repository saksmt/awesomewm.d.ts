import { Widget } from '../Widget';
import { PatternRef } from '../../gears/color';
import { ShapeRef } from '../../gears/shape';
import { Index, PositiveReal, RealNumber } from '../../common';

export interface GraphWidget extends Widget {
  border_color: PatternRef;
  color: PatternRef;
  background_color: PatternRef;
  max_value: RealNumber;
  min_value: RealNumber;
  scale: boolean;
  step_width: PositiveReal;
  step_spacing: PositiveReal;
  step_shape: ShapeRef;
  stack: boolean;
  stack_colors: PatternRef[];
  add_value(value: RealNumber, group: Index): void;
  clear(): void;
}
