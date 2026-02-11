/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ShapeRef, PatternRef } from 'gears';

  export namespace widget {
    export interface Separator extends Widget {
      orientation: Separator.Orientation;
      thickness: PositiveReal;
      shape: ShapeRef;
      span_ratio: Fraction;
      color: PatternRef;
      border_color: PatternRef;
      border_width: PositiveReal;
    }
    export namespace Separator {
      export const enum Orientation {
        Horizontal = 'horizontal',
        Vertical = 'vertical',
        Auto = 'auto',
      }
    }

    export const separator: Widget.Constructor<(this: void) => Separator>;
  }
}
