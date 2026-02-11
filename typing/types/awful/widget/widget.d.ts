/// <reference path="../common.d.ts" />
/// <reference path="../screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Widget } from 'wibox';
  import { ShapeRef } from 'gears';

  export namespace widget {
    export interface RootWidget extends Widget {
      x: RealNumber;
      y: RealNumber;
      width: PositiveReal;
      height: PositiveReal;
      ontop: boolean;
      type: string;
      screen: Screen;
      window: string;
      shape_bounding: ShapeRef;
      shape_clip: ShapeRef;
      shape_input: ShapeRef;
      shape: ShapeRef;
      drawable: DrawableLike;
      widget: Widget;
    }
  }
}
