import { PatternRef } from '../../../gears/color';
import { PositiveReal, RealNumber, Margins } from '../../../common';

export type RadialprogressbarVariables = {
  radialprogressbar_color: PatternRef;
  radialprogressbar_border_color: PatternRef;
  radialprogressbar_border_width: PositiveReal;
  radialprogressbar_paddings: Margins | RealNumber;
};
