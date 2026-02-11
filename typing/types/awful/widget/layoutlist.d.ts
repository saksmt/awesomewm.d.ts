/// <reference path="../screen.d.ts" />
/// <reference path="../layout.d.ts" />
/// <reference path="../button.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Widget, Layout as WidgetLayout, WidgetTemplate } from 'wibox';
  import { PatternRef, ShapeRef, FontRef, AlignX } from 'gears';

  type AwfulButton<T> = Button<T>;
  export namespace widget {
    export interface LayoutList extends Widget {
      base_layout: WidgetLayout;
      widget_template: WidgetTemplate<Widget>;
      screen: ScreenRef;
      source: (this: void, screen: Screen) => Layout[];
      // filter: ??? // not actually used in sources of awesome
      layouts: Layout[];
      current_layout: Layout | null;
    }
    namespace LayoutList {
      export type Args = Partial<{
        buttons: AwfulButton<LayoutList>[];
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
    }
    export const layoutlist: Widget.Constructor<(this: void) => LayoutList, LayoutList.Args>;
  }
}
