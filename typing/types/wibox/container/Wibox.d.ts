/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { Surface } from 'oocairo';
  import { Screen } from 'awful';
  import { ShapeRef, PatternRef, SurfaceRef } from 'gears';

  export namespace container {
    export interface Wibox extends Container {
      border_width: PositiveReal;
      border_color: string;
      ontop: boolean;
      type: string;
      x: RealNumber;
      y: RealNumber;
      width: PositiveReal;
      height: PositiveReal;
      screen: Screen;
      window: string;
      readonly shape_bounding: Surface;
      readonly shape_clip: Surface;
      readonly shape_input: Surface;
      shape: ShapeRef;
      input_passthrough: boolean;
      bg: PatternRef;
      fg: PatternRef;
      bgimage: SurfaceRef;
    }
  }
}
