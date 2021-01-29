import { PatternRef } from '../../gears/color';
import { PositiveReal } from '../../common';
import { ShapeRef } from '../../gears/shape';

export type SnapVariables = {
  snap_bg: PatternRef;
  snap_border_width: PositiveReal;
  snap_shape: ShapeRef;
  snapper_gap: PositiveReal;
};
