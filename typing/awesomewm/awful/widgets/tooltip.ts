import { Wibox } from '../../wibox/containers/Wibox';
import { AlignCross, AlignPerimeter, AlignZ, Opacity, PositiveReal } from '../../common';
import { ShapeRef } from '../../gears/shape';
import { PatternRef } from '../../gears/color';
import { DrawableLike } from '../common';
import { FontRef } from '../../pango/font';

export type Tooltip = {
  wibox: Wibox;
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

export type TooltipModule = (
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
