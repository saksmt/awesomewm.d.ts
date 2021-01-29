import { Widget } from '../../wibox/Widget';
import { Layout } from '../../wibox/layout';
import { Screen, ScreenRef } from '../screen';
import { Button } from '../button';
import { WidgetTemplate } from '../../../wibox';
import { PatternRef } from '../../gears/color';
import { AlignX, PositiveReal, RealNumber } from '../../common';
import { FontRef } from '../../pango/font';
import { SurfaceRef } from '../../gears/surface';
import { Client } from '../client';
import { ShapeRef } from '../../gears/shape';

type Args<T extends Layout> = {
  layout: T;
  spacing: RealNumber;
  buttons: Button<Client>[];
  source: (this: void, screen: Screen, args: Args<T>) => Client[];
  widget_template: WidgetTemplate<Widget>;
  style: Partial<{
    fg_normal: PatternRef;
    bg_normal: PatternRef;
    fg_focus: PatternRef;
    bg_focus: PatternRef;
    fg_urgent: PatternRef;
    bg_urgent: PatternRef;
    fg_minimize: PatternRef;
    bg_minimize: PatternRef;
    bg_image_normal: SurfaceRef;
    bg_image_focus: SurfaceRef;
    bg_image_urgent: SurfaceRef;
    bg_image_minimize: SurfaceRef;
    tasklist_disable_icon: boolean;
    disable_task_name: boolean;
    font: FontRef;
    align: AlignX;
    font_focus: FontRef;
    font_minimized: FontRef;
    font_urgent: FontRef;
    spacing: RealNumber;
    shape: ShapeRef;
    shape_border_width: PositiveReal;
    shape_border_color: PatternRef;
    shape_focus: ShapeRef;
    shape_border_width_focus: PositiveReal;
    shape_border_color_focus: PatternRef;
    shape_minimized: ShapeRef;
    shape_border_width_minimized: PositiveReal;
    shape_border_color_minimized: PatternRef;
    shape_urgent: ShapeRef;
    shape_border_width_urgent: PositiveReal;
    shape_border_color_urgent: PatternRef;
  }>;
};

export type TaskListModule = {
  <T extends Layout = Layout>(
    this: void,
    args: Partial<Args<T>> & {
      filter: (this: void, client: Client, screen: Screen) => boolean;
      screen: ScreenRef;
    },
  ): T;

  filter: {
    currenttags: (this: void, client: Client, screen: Screen) => boolean;
  };
};
