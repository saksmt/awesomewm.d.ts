import { Surface } from '../cairo/surface';
import { ShapeRef } from './shape';
import { PatternRef } from './color';
import { DrawableLike } from '../awful/common';
import { PositiveReal } from '../common';

export type SurfaceRef = Surface | string;

export type SurfaceModule = {
  load_uncached_silently<T = never>(this: void, surface: SurfaceRef, fallback?: T): Surface | T;
  load_silently<T = never>(this: void, surface: SurfaceRef, fallback?: T): Surface | T;
  load_uncached(this: void, surface: SurfaceRef): Surface;
  load(this: void, surface: SurfaceRef): Surface;
  get_size(this: void, surface: Surface): MultiReturn<[PositiveReal, PositiveReal]>;
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
