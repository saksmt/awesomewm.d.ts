import { ScreenRef } from './screen';
import { PositiveReal, Geometry, Margins } from '../common';

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
