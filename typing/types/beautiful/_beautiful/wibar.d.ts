/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, SurfaceRef, ShapeRef } from 'gears';

  export type WibarVariables = {
    wibar_stretch: boolean;
    wibar_border_width: PositiveReal;
    wibar_border_color: PatternRef;
    wibar_ontop: boolean;
    wibar_cursor: string;
    wibar_opacity: Opacity;
    wibar_type: string;
    wibar_width: PositiveReal;
    wibar_height: PositiveReal;
    wibar_bg: PatternRef;
    wibar_fg: PatternRef;
    wibar_bgimage: SurfaceRef;
    wibar_shape: ShapeRef;
  };
}
