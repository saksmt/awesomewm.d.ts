import { DrawableLike } from './common';
import { Client } from './client';
import { Screen } from './screen';
import { Point, PositiveReal, RealNumber, Geometry } from '../common';

export type Mouse = {
  readonly is_left_mouse_button_pressed: boolean;
  readonly is_middle_mouse_button_pressed: boolean;
  readonly is_right_mouse_button_pressed: boolean;
  readonly current_widget_geometry: Geometry | null;
  readonly current_widget_geometries: Geometry[] | null;
  readonly screen: Screen;
  readonly current_client: Client | null;
  readonly current_wibox: DrawableLike | null;
  readonly current_widgets: DrawableLike[] | null;
  readonly current_widget: DrawableLike | null;

  coords(this: void, newCoords?: Point, silent?: boolean): Point;
};

export type MouseModule = {
  resize: {
    set_mode(mode: 'live' | 'after'): void;
  };
  snap: {
    (
      this: void,
      client: DrawableLike,
      distance?: PositiveReal,
      x?: RealNumber,
      y?: RealNumber,
      fixedX?: boolean,
      fixedY?: boolean,
    ): Geometry;
    default_distance: PositiveReal;
    drag_to_tag_enabled: boolean;
    edge_enabled: boolean;
    client_enabled: boolean;
  };
  client: {
    move(this: void, client?: DrawableLike, snap?: PositiveReal | unknown): void;
    resize(this: void, client?: DrawableLike, corner?: unknown, args?: unknown): void;
  };
  wibox: {
    move(this: void, wibox: DrawableLike): void;
  };
};
