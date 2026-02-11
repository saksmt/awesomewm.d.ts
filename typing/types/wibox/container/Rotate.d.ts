/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { CompassDirection } from 'gears';

  export namespace container {
    export interface Rotate extends Container {
      direction: CompassDirection;
    }

    export const rotate: Widget.Constructor<
      (this: void, widget?: Widget, direction?: CompassDirection) => Rotate
    >;
  }
}
