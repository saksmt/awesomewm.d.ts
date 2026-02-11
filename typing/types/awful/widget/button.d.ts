/** @noResolution */
declare module 'awful' {
  import { Widget } from 'wibox';
  import { SurfaceRef } from 'gears';

  export namespace widget {
    export interface Button extends Widget {
      image: SurfaceRef;
    }

    export const button: Widget.Constructor<(this: void) => Button>;
  }
}
