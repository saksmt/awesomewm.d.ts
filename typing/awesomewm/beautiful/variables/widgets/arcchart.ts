import { PatternRef } from '../../../gears/color';
import { PositiveReal, RealNumber, Margins } from '../../../common';

export type ArcchartVariables = {
  arcchart_color: PatternRef;
  arcchart_border_color: PatternRef;
  arcchart_border_width: PositiveReal;
  arcchart_paddings: Margins | RealNumber;
  arcchart_thickness: PositiveReal;
};
