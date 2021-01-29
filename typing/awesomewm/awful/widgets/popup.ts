import {
  AlignCross,
  AlignZ,
  Geometry,
  Margins,
  MouseButton,
  Point,
  PositiveReal,
} from '../../common';
import { Placement } from '../placement';
import { PatternRef } from '../../gears/color';
import { DrawableLike } from '../common';
import { Widget } from '../../wibox/Widget';
import { SurfaceRef } from '../../gears/surface';
import { RootWidget } from './widget';
import { WidgetConstructor } from '../../../wibox';

export interface Popup extends RootWidget {
  preferred_positions: AlignCross;
  preferred_anchors: AlignZ;
  current_position: AlignCross;
  current_anchor: AlignZ;
  hide_on_right_click: boolean;
  minimum_height: PositiveReal;
  minimum_width: PositiveReal;
  maximum_height: PositiveReal;
  maximum_width: PositiveReal;
  offset: Point;
  placement: Placement | false;
  border_width: PositiveReal;
  border_color: PatternRef;
  cursor: string;
  input_passthrough: boolean;
  bg: PatternRef;
  bgimage: SurfaceRef;
  fg: PatternRef;

  move_next_to(object: DrawableLike): void;
  bind_to_widget(widget: Widget, button?: MouseButton): void;
  unbind_to_widget(widget: Widget): void;
  geometry(newGeometry?: Geometry): Geometry;
  struts(newStruts: Margins): Margins;
}

export type PopupModule = WidgetConstructor<(this: void) => Popup>;
