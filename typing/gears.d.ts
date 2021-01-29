/** @noResolution */

import * as colorM from './awesomewm/gears/color';
import * as debugM from './awesomewm/gears/debug';
import * as filesystemM from './awesomewm/gears/filesystem';
import * as geometryM from './awesomewm/gears/geometry';
import * as shapeM from './awesomewm/gears/shape';
import * as surfaceM from './awesomewm/gears/surface';
import { Point, PositiveReal } from './awesomewm/common';

import { ScreenRef } from './awful';

export type PatternRef = colorM.PatternRef;
declare const color: colorM.ColorModule;

declare const debug: debugM.DebugModule;

declare const filesystem: filesystemM.FilesystemModule;

declare const geometry: geometryM.GeometryModule;

declare const shape: shapeM.ShapeModule;
export type ShapeFunction = shapeM.ShapeFunction;
export type ShapeRef = shapeM.ShapeRef;

declare const surface: surfaceM.SurfaceModule;
export type SurfaceRef = surfaceM.SurfaceRef;

export type Table<V = any> = { [key: string]: V }; // eslint-disable-line @typescript-eslint/no-explicit-any

declare const table: {
  join<V>(this: void, ...tables: V[][]): V[];
  join<A, B>(this: void, a: A, b: B): A & B;
};

declare const wallpaper: {
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
  fit(this: void, wallpaper: SurfaceRef, screen?: ScreenRef | null, background?: PatternRef): void;
};

interface Timer {
  timeout: number;
  stop: () => void;
  start: () => void;
  again: () => void;
}

declare const timer: {
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
