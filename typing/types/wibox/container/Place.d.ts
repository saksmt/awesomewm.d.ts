/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { AlignX, AlignY } from 'gears';

  export namespace container {
    export interface Place extends Container {
      halign: AlignX;
      valign: AlignY;
      fill_vertical: boolean;
      fill_horizontal: boolean;
      content_fill_vertical: boolean;
      content_fill_horizontal: boolean;
    }

    export const place: Widget.Constructor<
      (this: void, widget?: Widget, halign?: AlignX, valign?: AlignY) => Place
    >;
  }
}
