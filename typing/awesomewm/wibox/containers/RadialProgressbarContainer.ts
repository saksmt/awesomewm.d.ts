import { Container } from './Container';
import { PositiveReal, RealNumber, Margins } from '../../common';
import { PatternRef } from '../../gears/color';

export interface RadialProgressbarContainer extends Container {
  paddings: Margins | RealNumber;
  value: RealNumber;
  border_color: PatternRef;
  color: PatternRef;
  border_width: PositiveReal;
  min_value: RealNumber;
  max_value: RealNumber;
}
