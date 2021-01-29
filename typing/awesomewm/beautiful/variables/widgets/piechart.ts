import { PatternRef } from '../../../gears/color';
import { PositiveReal } from '../../../common';

export type PiechartVariables = {
  piechart_border_color: PatternRef;
  piechart_border_width: PositiveReal;
  piechart_colors: PatternRef[];
};
