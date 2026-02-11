/** @noResolution */
declare module '_beautiful' {
  import { PatternRef } from 'gears';

  export type PiechartVariables = {
    piechart_border_color: PatternRef;
    piechart_border_width: PositiveReal;
    piechart_colors: PatternRef[];
  };
}
