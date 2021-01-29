import { Container } from './Container';
import { ShapeRef } from '../../gears/shape';
import { PatternRef } from '../../gears/color';
import { SurfaceRef } from '../../gears/surface';

export interface BackgroundContainer extends Container {
  fg: PatternRef;
  bg: PatternRef;
  shape: ShapeRef;
  shape_border_width: number;
  shape_border_color: PatternRef;
  shape_border_clip: boolean;
  bgimage: SurfaceRef;
}
