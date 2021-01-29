import { Container } from './Container';
import { Surface } from '../../cairo/surface';
import { Screen } from '../../awful/screen';
import { PositiveReal, RealNumber } from '../../common';
import { ShapeRef } from '../../gears/shape';
import { PatternRef } from '../../gears/color';
import { SurfaceRef } from '../../gears/surface';

export interface Wibox extends Container {
  border_width: PositiveReal;
  border_color: string;
  ontop: boolean;
  type: string;
  x: RealNumber;
  y: RealNumber;
  width: PositiveReal;
  height: PositiveReal;
  screen: Screen;
  window: string;
  readonly shape_bounding: Surface;
  readonly shape_clip: Surface;
  readonly shape_input: Surface;
  shape: ShapeRef;
  input_passthrough: boolean;
  bg: PatternRef;
  fg: PatternRef;
  bgimage: SurfaceRef;
}
