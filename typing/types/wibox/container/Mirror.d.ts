/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export namespace container {
    export interface Mirror extends Container {
      reflection: {
        horizontal: boolean;
        vertical: boolean;
      };
    }

    export const mirror: Widget.Constructor<
      (this: void, widget?: Widget, reflection?: { x?: boolean; y?: boolean }) => Mirror
    >;
  }
}
