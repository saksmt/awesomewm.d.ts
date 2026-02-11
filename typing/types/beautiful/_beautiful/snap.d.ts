/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, ShapeRef } from 'gears';

  export type SnapVariables = {
    snap_bg: PatternRef;
    snap_border_width: PositiveReal;
    snap_shape: ShapeRef;
    snapper_gap: PositiveReal;
  };
}
