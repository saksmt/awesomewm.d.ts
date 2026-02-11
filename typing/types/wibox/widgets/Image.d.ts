/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { SurfaceRef, ShapeRef } from 'gears';

  export namespace widget {
    export interface Image extends Widget {
      image: SurfaceRef;
      clip_shape: ShapeRef;
      resize: boolean;
    }

    export const imagebox: Widget.Constructor<
      (this: void, image?: SurfaceRef, resize_allowed?: boolean, clip_shape?: ShapeRef) => Image
    >;
  }
}
