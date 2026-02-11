/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef, ShapeRef } from 'gears';

  export namespace widget {
    export interface Graph extends Widget {
      border_color: PatternRef;
      color: PatternRef;
      background_color: PatternRef;
      max_value: RealNumber;
      min_value: RealNumber;
      scale: boolean;
      step_width: PositiveReal;
      step_spacing: PositiveReal;
      step_shape: ShapeRef;
      stack: boolean;
      stack_colors: PatternRef[];

      add_value(value: RealNumber, group: Index): void;

      clear(): void;
    }

    export const graph: Widget.Constructor<(this: void) => Graph>;
  }
}
