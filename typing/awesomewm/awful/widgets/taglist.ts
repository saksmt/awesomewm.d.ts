import { Widget } from '../../wibox/Widget';
import { Layout } from '../../wibox/layout';
import { Screen, ScreenRef } from '../screen';
import { Tag } from '../tag';
import { Button } from '../button';
import { WidgetTemplate } from '../../../wibox';
import { PatternRef } from '../../gears/color';
import { Index, RealNumber } from '../../common';
import { FontRef } from '../../pango/font';
import { SurfaceRef } from '../../gears/surface';

export type TagListModule = {
  <T extends Layout = Layout>(
    this: void,
    args: Partial<{
      layout: T;
      spacing: RealNumber;
      buttons: Button<Tag>[];
      source: (this: void, screen: Screen) => Tag[];
      widget_template: WidgetTemplate<Widget>;
      create_callback: (this: void, widget: T, tag: Tag, index: Index, tags: Tag[]) => void;
      update_callback: (this: void, widget: T, tag: Tag, index: Index, tags: Tag[]) => void;
      style: Partial<{
        fg_focus: PatternRef;
        bg_focus: PatternRef;
        fg_urgent: PatternRef;
        bg_urgent: PatternRef;
        bg_occupied: PatternRef;
        fg_occupied: PatternRef;
        bg_empty: PatternRef;
        fg_empty: PatternRef;
        bg_volatile: PatternRef;
        fg_volatile: PatternRef;
        squares_sel: SurfaceRef;
        squares_unsel: SurfaceRef;
        squares_sel_empty: SurfaceRef;
        squares_unsel_empty: SurfaceRef;
        squares_resize: boolean;
        disable_icon: boolean;
        font: FontRef;
        spacing: RealNumber;
      }>;
    }> & { filter: (this: void, tag: Tag) => boolean; screen: ScreenRef },
  ): T;

  filter: {
    all: (this: void, tag: Tag) => boolean;
  };
};
