import { Table } from '../../gears';
import { DrawableLike } from './common';
import { ScreenRef } from './screen';
import {
  Fraction,
  PositiveReal,
  RealNumber,
  AlignCross,
  AlignZ,
  Direction,
  Geometry,
  Margins,
} from '../common';

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
export type Placement<Args = Table> = number & {
  (
    this: void,
    geometry: Geometry | { coords: Geometry } | { coords(this: void): Geometry } | DrawableLike,
    args?: PlacementArguments<Args>,
  ): Geometry;
};

export type PlacementModule = {
  closest_corner: ClosestCornerPlacement;
  no_offscreen: NoOffscreenPlacement;
  no_overlap: NoOverlapPlacement;
  under_mouse: UnderMousePlacement;
  next_to_mouse: NextToMousePlacement;
  resize_to_mouse: ResizeToMousePlacement;
  align: AlignPlacement;
  top_left: AlignPlacement;
  top_right: AlignPlacement;
  bottom_left: AlignPlacement;
  bottom_right: AlignPlacement;
  left: AlignPlacement;
  right: AlignPlacement;
  top: AlignPlacement;
  bottom: AlignPlacement;
  centered: AlignPlacement;
  center_vertical: AlignPlacement;
  center_horizontal: AlignPlacement;
  stretch: StretchPlacement;
  stretch_left: StretchPlacement;
  stretch_right: StretchPlacement;
  stretch_up: StretchPlacement;
  stretch_down: StretchPlacement;
  maximize: MaximizePlacement;
  maximize_vertically: MaximizePlacement;
  maximize_horizontally: MaximizePlacement;
  scale: ScalePlacement;
  next_to: NextToPlacement;
  restore: RestorePlacement;
};

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

export const enum Axis {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
