/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, ShapeRef, Margins } from 'gears';

  export type CheckboxVariables = {
    checkbox_paddings: Margins | RealNumber;

    checkbox_color: PatternRef;
    checkbox_bg: PatternRef;
    checkbox_border_width: PositiveReal;
    checkbox_border_color: PatternRef;
    checkbox_shape: ShapeRef;

    checkbox_check_color: PatternRef;
    checkbox_check_bg: PatternRef;
    checkbox_check_border_width: PositiveReal;
    checkbox_check_border_color: PatternRef;
    checkbox_check_shape: ShapeRef;
  };
}
