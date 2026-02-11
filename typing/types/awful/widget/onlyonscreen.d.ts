/// <reference path="../screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Container, Widget } from 'wibox';

  export namespace widget {
    export interface OnlyOnScreen extends Container {
      screen: ScreenRef;
    }

    export const only_on_screen: (this: void, widget?: Widget, screen?: ScreenRef) => OnlyOnScreen;
  }
}
