/// <reference path="./screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Geometry, Margins } from 'gears';

  export type DrawableLike = {
    geometry?:
      | Geometry
      | {
          (newGeometry?: Geometry): Geometry;
        };
    get_bounding_geometry?: () => Geometry;
    border_width?: PositiveReal;
    screen?: ScreenRef;
    detach_callback?: (this: void) => void;
    connect_signal?: unknown;
    disconnect_signal?: unknown;
    visible?: boolean;
    struts?: (m: Margins) => void;
    apply_size_hints?: (width: PositiveReal, height: PositiveReal) => void;
  };
}
