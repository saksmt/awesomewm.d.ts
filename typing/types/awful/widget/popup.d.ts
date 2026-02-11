/// <reference path="../mouse.d.ts" />
/// <reference path="../placement.d.ts" />
/// <reference path="../common.d.ts" />
/// <reference path="./widget.d.ts" />

// INTENTIONALLY NOT INSIDE widget NAMESPACE
/** @noResolution */
declare module 'awful' {
  import { AlignCross, AlignZ, Geometry, Margins, Point, PatternRef, SurfaceRef } from 'gears';
  import { Widget } from 'wibox';

  export const popup: Widget.Constructor<(this: void) => Popup>;

  export interface Popup extends widget.RootWidget {
    preferred_positions: AlignCross;
    preferred_anchors: AlignZ;
    current_position: AlignCross;
    current_anchor: AlignZ;
    hide_on_right_click: boolean;
    minimum_height: PositiveReal;
    minimum_width: PositiveReal;
    maximum_height: PositiveReal;
    maximum_width: PositiveReal;
    offset: Point;
    placement: Placement | false;
    border_width: PositiveReal;
    border_color: PatternRef;
    cursor: string;
    input_passthrough: boolean;
    bg: PatternRef;
    bgimage: SurfaceRef;
    fg: PatternRef;

    move_next_to(object: DrawableLike): void;

    bind_to_widget(widget: Widget, button?: Mouse.Button): void;

    unbind_to_widget(widget: Widget): void;

    geometry(newGeometry?: Geometry): Geometry;

    struts(newStruts: Margins): Margins;
  }
}
