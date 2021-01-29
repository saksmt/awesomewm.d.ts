import { Widget } from '../../wibox/Widget';
import { SurfaceRef } from '../../gears/surface';
import { WidgetConstructor } from '../../../wibox';

export interface Button extends Widget {
  image: SurfaceRef;
}

export type ButtonModule = WidgetConstructor<(this: void) => Button>;
