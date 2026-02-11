/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef, Margins } from 'gears';

  export namespace container {
    export interface RadialProgressbar extends Container {
      paddings: Margins | RealNumber;
      value: RealNumber;
      border_color: PatternRef;
      color: PatternRef;
      border_width: PositiveReal;
      min_value: RealNumber;
      max_value: RealNumber;
    }

    export const radialprogressbar: Widget.Constructor<
      (this: void, widget?: Widget) => RadialProgressbar
    >;
  }
}
