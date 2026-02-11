/// <reference path="../screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Widget } from 'wibox';

  export namespace widget {
    export const layoutbox: (this: void, screen?: ScreenRef) => Widget;
  }
}
