/// <reference path="./common.d.ts" />
/// <reference path="./screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Table, Geometry, Margins, AlignCross, AlignZ, Axis, Direction } from 'gears';

  // todo: rewrite from generics to simple type unions
  export type Placement<Args = Table> = number & {
    (
      this: void,
      geometry: Geometry | { coords: Geometry } | { coords(this: void): Geometry } | DrawableLike,
      args?: PlacementInternals.PlacementArguments<Args>,
    ): Geometry;
  };

  export namespace PlacementInternals {
    export type PlacementArguments<Args = Table> = {
      pretend: boolean;
      bounding_rect?: Geometry;
      parent?: Geometry | DrawableLike;
      store_geometry?: boolean;
      offset?: Geometry | RealNumber;
      margins?: Margins;
      zap_border_width?: boolean;
      override_geometry?: boolean;
      ignore_border_width?: boolean;
      attach?: boolean;
      update_workarea?: boolean;
      honor_workarea?: boolean;
      honor_padding?: boolean;
      minimum_height?: PositiveReal;
      minimum_width?: PositiveReal;
    } & Args;

    export type ClosestCornerPlacement = Placement<{ include_sides?: boolean }>;
    export type NoOffscreenPlacement = Placement<{ screen?: ScreenRef }>;
    export type NoOverlapPlacement = Placement;
    export type UnderMousePlacement = Placement;
    export type NextToMousePlacement = Placement;
    export type ResizeToMousePlacement = Placement<{ axis?: Axis }>;
    export type AlignPlacement = Placement<{ position?: AlignPlacement }>;
    export type StretchPlacement = Placement<{ direction?: Direction | Direction[] }>;
    export type MaximizePlacement = Placement<{ axis?: Axis }>;
    export type ScalePlacement = Placement<{
      to_percent?: Fraction;
      by_percent?: Fraction;
      direction?: Direction;
    }>;
    export type NextToPlacement = Placement<{
      preferred_positions?: AlignCross | AlignCross[];
      preferred_anchors?: AlignZ | AlignZ[];
      mode: NextToTarget;
    }>;
    export type RestorePlacement = Placement;

    export const enum NextToTarget {
      Geometry = 'geometry',
      Cursor = 'cursor',
      InsideGeometry = 'geometry_inside',
      InsideCursor = 'cursor_inside',
    }
  }

  export const placement: {
    closest_corner: PlacementInternals.ClosestCornerPlacement;
    no_offscreen: PlacementInternals.NoOffscreenPlacement;
    no_overlap: PlacementInternals.NoOverlapPlacement;
    under_mouse: PlacementInternals.UnderMousePlacement;
    next_to_mouse: PlacementInternals.NextToMousePlacement;
    resize_to_mouse: PlacementInternals.ResizeToMousePlacement;
    align: PlacementInternals.AlignPlacement;
    top_left: PlacementInternals.AlignPlacement;
    top_right: PlacementInternals.AlignPlacement;
    bottom_left: PlacementInternals.AlignPlacement;
    bottom_right: PlacementInternals.AlignPlacement;
    left: PlacementInternals.AlignPlacement;
    right: PlacementInternals.AlignPlacement;
    top: PlacementInternals.AlignPlacement;
    bottom: PlacementInternals.AlignPlacement;
    centered: PlacementInternals.AlignPlacement;
    center_vertical: PlacementInternals.AlignPlacement;
    center_horizontal: PlacementInternals.AlignPlacement;
    stretch: PlacementInternals.StretchPlacement;
    stretch_left: PlacementInternals.StretchPlacement;
    stretch_right: PlacementInternals.StretchPlacement;
    stretch_up: PlacementInternals.StretchPlacement;
    stretch_down: PlacementInternals.StretchPlacement;
    maximize: PlacementInternals.MaximizePlacement;
    maximize_vertically: PlacementInternals.MaximizePlacement;
    maximize_horizontally: PlacementInternals.MaximizePlacement;
    scale: PlacementInternals.ScalePlacement;
    next_to: PlacementInternals.NextToPlacement;
    restore: PlacementInternals.RestorePlacement;
  };
}
