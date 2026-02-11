/// <reference path="./widget.d.ts" />
/// <reference path="../common.d.ts" />

// INTENTIONALLY NOT INSIDE widget NAMESPACE
/** @noResolution */
declare module 'awful' {
  import { AlignCross, Geometry, Margins, PatternRef, SurfaceRef } from 'gears';
  import { Widget } from 'wibox';

  export const wibar: Widget.Constructor<(this: void) => Wibar>;

  export interface Wibar extends widget.RootWidget {
    stretch: boolean;
    position: AlignCross;
    border_width: PositiveReal;
    border_color: PatternRef;
    cursor: string;
    input_passthrough: boolean;
    bg: PatternRef;
    fg: PatternRef;
    bgimage: SurfaceRef;

    remove(): void;

    geometry(newGeometry?: Geometry): Geometry;

    struts(newStruts?: Margins): Margins;
  }
}
