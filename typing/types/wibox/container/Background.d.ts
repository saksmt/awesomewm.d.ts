/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ShapeRef, PatternRef, SurfaceRef } from 'gears';

  namespace container {
    export interface Background extends Container {
      fg: PatternRef;
      bg: PatternRef;
      shape: ShapeRef;
      shape_border_width: number;
      shape_border_color: PatternRef;
      shape_border_clip: boolean;
      bgimage: SurfaceRef;
    }

    export const background: Widget.Constructor<
      (this: void, widget?: Widget, bg?: PatternRef, shape?: ShapeRef) => Background
    >;
  }
}
