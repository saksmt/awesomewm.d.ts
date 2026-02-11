/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef } from 'gears';

  export namespace container {
    export interface Margin extends Container {
      margins: RealNumber;
      color: PatternRef;
      left: RealNumber;
      right: RealNumber;
      top: RealNumber;
      bottom: RealNumber;
    }

    export const margin: Widget.Constructor<
      (
        this: void,
        widget?: Widget,
        left?: RealNumber,
        right?: RealNumber,
        top?: RealNumber,
        bottom?: RealNumber,
        color?: PatternRef,
        drawEmpty?: boolean,
      ) => Margin
    >;
  }
}
