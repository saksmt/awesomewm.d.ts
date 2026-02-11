/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export namespace container {
    export interface Constraint extends Container {
      strategy: Constraint.Strategy;
      height: PositiveReal;
      width: PositiveReal;
    }

    export namespace Constraint {
      export const enum Strategy {
        Min = 'min',
        Max = 'max',
        Exact = 'exact',
      }
    }

    export const constraint: Widget.Constructor<
      (
        this: void,
        widget?: Widget,
        strategy?: Constraint.Strategy,
        width?: PositiveReal,
        height?: PositiveReal,
      ) => Constraint
    >;
  }
}
