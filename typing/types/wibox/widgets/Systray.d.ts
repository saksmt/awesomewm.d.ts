/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ScreenRef } from 'awful';

  export namespace widget {
    export interface Systray extends Widget {
      set_base_size(size: PositiveReal): void;

      set_horizontal(horizontal: boolean): void;

      set_reverse(reverse: boolean): void;

      set_screen(screen: ScreenRef): void;
    }

    export const systray: Widget.Constructor<(this: void, reverse?: boolean) => Systray>;
  }
}
