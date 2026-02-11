/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef, Margins } from 'gears';

  namespace container {
    export interface ArcChart extends Container {
      paddings: Margins;
      border_color: PatternRef;
      colors: PatternRef[];
      border_width: PositiveReal;
      min_value: RealNumber;
      max_value: RealNumber;
      bg?: PatternRef;
      value: RealNumber;
      values: RealNumber[];
      rounded_edge: boolean;
      thickness: PositiveReal;
      start_angle: Radian;
    }

    export const arcchart: Widget.Constructor<(this: void, widget?: Widget) => ArcChart>;
  }
}
