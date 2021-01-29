import { PositiveReal, Radian, RealNumber, Margins } from '../../common';
import { Container } from './Container';
import { PatternRef } from '../../gears/color';

export interface ArcChartContainer extends Container {
  paddings: Margins;
  border_color: PatternRef;
  colors: PatternRef[];
  border_width: PositiveReal;
  min_value: RealNumber;
  max_value: RealNumber;
  bg?: PatternRef;
  value: RealNumber;
  values: RealNumber[];
  rounded_edge: boolean;
  thickness: PositiveReal;
  start_angle: Radian;
}
