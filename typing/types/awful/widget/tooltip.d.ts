/// <reference path="../common.d.ts" />

// INTENTIONALLY NOT INSIDE widget NAMESPACE
/** @noResolution */
declare module 'awful' {
  import { container } from 'wibox';
  import { AlignCross, AlignPerimeter, AlignZ, FontRef, PatternRef, ShapeRef } from 'gears';

  export const tooltip: (
    this: void,
    args?: Partial<{
      timer_function: (this: void) => string;
      timeout: PositiveReal;
      objects: DrawableLike[];
      delay_show: PositiveReal;
      shape: ShapeRef;
      margins_leftright: PositiveReal;
      margins_topbottom: PositiveReal;
      border_width: PositiveReal;
      border_color: PatternRef;
      bg: PatternRef;
      fg: PatternRef;
      align: AlignPerimeter;
      font: FontRef;
      opacity: Opacity;
    }>,
  ) => Tooltip;

  export type Tooltip = {
    wibox: container.Wibox;
    visible: boolean;
    align: AlignPerimeter;
    shape: ShapeRef;
    mode: 'mouse' | 'outside';
    preferred_positions: AlignCross[];
    preferred_alignments: AlignZ[];
    text: string;
    markup: string;
    timeout: PositiveReal;
    margins: PositiveReal;
    border_width: PositiveReal;
    border_color: PatternRef;
    margins_leftright: PositiveReal;
    margins_topbottom: PositiveReal;

    add_to_object(object: DrawableLike): void;
    remove_from_object(object: DrawableLike): void;
  };
}
