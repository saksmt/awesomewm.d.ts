import { Widget } from '../Widget';
import { PositiveReal, RealNumber } from '../../common';
import { PatternRef } from '../../gears/color';

export interface PieChartWidget extends Widget {
  data_list: [string, RealNumber][];
  data: { [label: string]: RealNumber };
  border_color: PatternRef;
  border_width: PositiveReal;
  colors: PatternRef[];
  display_labels: boolean;
}
