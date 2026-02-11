/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export interface Container extends Widget {
    widget: Widget;
  }
}
