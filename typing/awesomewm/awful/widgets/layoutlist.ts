import { Widget } from '../../wibox/Widget';
import { Layout as WidgetLayout } from '../../wibox/layout';
import { WidgetConstructor, WidgetTemplate } from '../../../wibox';
import { Screen, ScreenRef } from '../screen';
import { Layout } from '../layout';
import { Button } from '../button';
import { PatternRef } from '../../gears/color';
import { FontRef } from '../../pango/font';
import { AlignX, PositiveReal, RealNumber } from '../../common';
import { ShapeRef } from '../../gears/shape';

export interface LayoutList extends Widget {
  base_layout: WidgetLayout;
  widget_template: WidgetTemplate<Widget>;
  screen: ScreenRef;
  source: (this: void, screen: Screen) => Layout[];
  // filter: ??? // not actually used in sources of awesome
  layouts: Layout[];
  current_layout: Layout | null;
}

type Args = Partial<{
  buttons: Button<LayoutList>[];
  style: Partial<{
    disable_icon: boolean;
    disable_name: boolean;
    bg_normal: PatternRef;
    fg_normal: PatternRef;
    bg_selected: PatternRef;
    fg_selected: PatternRef;
    font: FontRef;
    font_selected: FontRef;
    align: AlignX;
    spacing: RealNumber;
    shape: ShapeRef;
    shape_border_width: PositiveReal;
    shape_border_color: PatternRef;
    shape_selected: ShapeRef;
    shape_border_width_selected: PositiveReal;
    shape_border_color_selected: PatternRef;
  }>;
}>;
export type LayoutListModule = WidgetConstructor<(this: void) => LayoutList, Args>;
