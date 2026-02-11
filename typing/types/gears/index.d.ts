/// <reference path="./color.d.ts" />
/// <reference path="./debug.d.ts" />
/// <reference path="./filesystem.d.ts" />
/// <reference path="./geometry.d.ts" />
/// <reference path="./shape.d.ts" />
/// <reference path="./surface.d.ts" />
/// <reference path="./positioning.d.ts" />

declare module 'gears' {
  import { ScreenRef } from 'awful';
  import { Font } from 'oocairo';

  export type FontRef = string | Font;

  export type Table<V = any> = { [key: string]: V }; // eslint-disable-line @typescript-eslint/no-explicit-any

  export const table: {
    join<V>(this: void, ...tables: V[][]): V[];
    join<A, B>(this: void, a: A, b: B): A & B;
  };

  export const wallpaper: {
    set(this: void, wallpaper: SurfaceRef | PatternRef): void;
    centered(
      this: void,
      wallpaper: SurfaceRef,
      screen?: ScreenRef | null,
      background?: PatternRef,
      scale?: PositiveReal,
    ): void;
    tiled(this: void, wallpaper: SurfaceRef, screen?: ScreenRef | null, offset?: Point): void;
    maximized(
      this: void,
      wallpaper: SurfaceRef,
      screen?: ScreenRef | null,
      ignoreAspect?: boolean,
      offset?: Point,
    ): void;
    fit(
      this: void,
      wallpaper: SurfaceRef,
      screen?: ScreenRef | null,
      background?: PatternRef,
    ): void;
  };

  export interface Timer {
    timeout: number;
    stop: () => void;
    start: () => void;
    again: () => void;
  }

  export const timer: {
    (
      this: void,
      args: {
        timeout: PositiveReal;
        autostart?: boolean;
        call_now?: boolean;
        callback?: (this: void) => void;
        single_shot?: boolean;
      },
    ): Timer;

    start_new: (this: void, timeout: PositiveReal, callback: (this: void) => void) => Timer;

    weak_start_new: (this: void, timeout: PositiveReal, callback: (this: void) => void) => Timer;
  };
}
