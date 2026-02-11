/// <reference path="./button.d.ts" />
/// <reference path="../menu.d.ts" />

/** @noResolution */
declare module 'awful' {
  export namespace widget {
    export const launcher: (
      this: void,
      args?: Partial<widget.Button> & ({ command: string | string[] } | { menu: Menu }),
    ) => widget.Button;
  }
}
