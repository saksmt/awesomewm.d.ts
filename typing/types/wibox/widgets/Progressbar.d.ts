/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef, ShapeRef, Margins } from 'gears';

  export namespace widget {
    export interface Progressbar extends Widget {
      border_color: PatternRef;
      border_width: PositiveReal;
      bar_border_color: PatternRef;
      bar_border_width: PositiveReal;
      color: PatternRef;
      background_color: PatternRef;
      bar_shape: ShapeRef;
      shape: ShapeRef;
      clip: boolean;
      ticks: boolean;
      ticks_gap: PositiveReal;
      ticks_size: PositiveReal;
      max_value: RealNumber;
      margins: Margins | RealNumber;
      paddings: Margins | RealNumber;

      set_value(value: RealNumber): void;
    }

    export const progressbar: Widget.Constructor<(this: void) => Progressbar>;
  }
}
