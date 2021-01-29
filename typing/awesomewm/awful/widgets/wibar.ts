import { PositiveReal, AlignCross, Geometry, Margins } from '../../common';
import { PatternRef } from '../../gears/color';
import { SurfaceRef } from '../../gears/surface';
import { WidgetConstructor } from '../../../wibox';
import { RootWidget } from './widget';

export interface Wibar extends RootWidget {
  stretch: boolean;
  position: AlignCross;
  border_width: PositiveReal;
  border_color: PatternRef;
  cursor: string;
  input_passthrough: boolean;
  bg: PatternRef;
  fg: PatternRef;
  bgimage: SurfaceRef;

  remove(): void;
  geometry(newGeometry?: Geometry): Geometry;
  struts(newStruts?: Margins): Margins;
}

export type WibarModule = WidgetConstructor<(this: void) => Wibar>;
