import { Widget } from '../Widget';
import { SurfaceRef } from '../../gears/surface';
import { ShapeRef } from '../../gears/shape';

export interface ImageWidget extends Widget {
  image: SurfaceRef;
  clip_shape: ShapeRef;
  resize: boolean;
}
