/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, Margins } from 'gears';

  export type ArcchartVariables = {
    arcchart_color: PatternRef;
    arcchart_border_color: PatternRef;
    arcchart_border_width: PositiveReal;
    arcchart_paddings: Margins | RealNumber;
    arcchart_thickness: PositiveReal;
  };
}
