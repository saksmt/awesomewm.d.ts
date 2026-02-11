/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ShapeRef, PatternRef, Margins } from 'gears';

  export namespace widget {
    export interface Checkbox extends Widget {
      border_width: number;
      bg: PatternRef;
      border_color: PatternRef;
      check_border_color: PatternRef;
      check_border_width: PatternRef;
      check_color: PatternRef;
      shape: ShapeRef;
      check_shape: ShapeRef;
      paddings: Margins | number;
      color: PatternRef;
      checked: boolean;
    }

    export const checkbox: Widget.Constructor<(this: void) => Checkbox>;
  }
}
