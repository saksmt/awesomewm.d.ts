/// <reference path="./shape.d.ts" />
/// <reference path="./color.d.ts" />

/** @noResolution */
declare module 'gears' {
  import { Surface } from 'oocairo';
  import { DrawableLike } from 'awful';

  export const surface: {
    load_uncached_silently<T = never>(this: void, surface: SurfaceRef, fallback?: T): Surface | T;
    load_silently<T = never>(this: void, surface: SurfaceRef, fallback?: T): Surface | T;
    load_uncached(this: void, surface: SurfaceRef): Surface;
    load(this: void, surface: SurfaceRef): Surface;
    get_size(this: void, surface: Surface): LuaMultiReturn<[PositiveReal, PositiveReal]>;
    duplicate_surface(this: void, surface: Surface): Surface;
    load_from_shape(
      this: void,
      width: PositiveReal,
      height: PositiveReal,
      shape: ShapeRef,
      shapeColor?: PatternRef,
      backgroundColor?: PatternRef,
    ): Surface;
    apply_shape_bounding(this: void, drawable: DrawableLike, shape: ShapeRef): void;
  };
  export type SurfaceRef = Surface | string;
}
