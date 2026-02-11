/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { PatternRef } from 'gears';

  export namespace widget {
    export interface PieChart extends Widget {
      data_list: [string, RealNumber][];
      data: { [label: string]: RealNumber };
      border_color: PatternRef;
      border_width: PositiveReal;
      colors: PatternRef[];
      display_labels: boolean;
    }

    export const piechart: Widget.Constructor<(this: void) => PieChart>;
  }
}
