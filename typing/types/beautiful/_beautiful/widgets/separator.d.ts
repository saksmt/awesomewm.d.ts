/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, ShapeRef } from 'gears';

  export type SeparatorVariables = {
    separator_thickness: PositiveReal;
    separator_border_color: PatternRef;
    separator_border_width: PositiveReal;
    separator_span_ratio: Fraction;
    separator_color: PatternRef;
    separator_shape: ShapeRef;
  };
}
