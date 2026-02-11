/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ShapeRef, PatternRef, Margins } from 'gears';

  export namespace widget {
    export interface Slider extends Widget {
      handle_shape: ShapeRef;
      handle_color: PatternRef;
      handle_margins: Margins | RealNumber;
      handle_width: PositiveReal;
      handle_border_color: PatternRef;
      handle_border_width: PositiveReal;
      bar_shape: ShapeRef;
      bar_color: PatternRef;
      bar_height: PositiveReal;
      bar_margins: Margins | RealNumber;
      bar_border_color: PatternRef;
      bar_border_width: PositiveReal;
      value: RealNumber;
      minimum: RealNumber;
      maximum: RealNumber;
    }

    export const slider: Widget.Constructor<(this: void) => Slider>;
  }
}
