import { Widget } from '../../wibox/Widget';
import { PositiveReal, RealNumber } from '../../common';
import { Screen } from '../screen';
import { ShapeRef } from '../../gears/shape';
import { DrawableLike } from '../common';

export interface RootWidget extends Widget {
  x: RealNumber;
  y: RealNumber;
  width: PositiveReal;
  height: PositiveReal;
  ontop: boolean;
  type: string;
  screen: Screen;
  window: string;
  shape_bounding: ShapeRef;
  shape_clip: ShapeRef;
  shape_input: ShapeRef;
  shape: ShapeRef;
  drawable: DrawableLike;
  widget: Widget;
}
