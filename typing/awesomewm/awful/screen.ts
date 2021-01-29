import { DrawableLike } from './common';
import { Table } from '../../gears';
import { Client } from './client';
import { Tag } from './tag';
import {
  Index,
  PositiveReal,
  RealNumber,
  UntypedFunction,
  Direction,
  Geometry,
  Margins,
} from '../common';

export type ScreenRef = Screen | number;

export type Screen = {
  geometry: Geometry;
  readonly index: Index;
  readonly outputs?: Table<{
    mm_width: PositiveReal;
    mm_height: PositiveReal;
  }>;
  workarea: Geometry;
  padding: Margins;
  clients: Client[];
  hidden_clients: Client[];
  all_clients: Client[];
  tiled_clients: Client[];
  tags: Tag[];
  selected_tags: Tag[];
  selected_tag: Tag | null;
  dpi: number;
  fake_resize(x: RealNumber, y: RealNumber, width: PositiveReal, height: PositiveReal): void;
  fake_remove(): void;
  swap(other: ScreenRef): void;
  square_distance(x: RealNumber, y: RealNumber): number;
  get_next_in_direction(direction: Direction): Screen;
  get_bounding_geometry(args: {
    honor_padding?: boolean;
    honor_workarea?: boolean;
    margins?: Partial<Margins> | RealNumber;
    tag?: Tag;
    parent?: DrawableLike;
    bounding_rect?: Geometry;
  }): Geometry;
  set_auto_dpi_enabled(enabled: boolean): void;

  connect_signal: {
    (name: 'added', cb: (this: void) => void): void;
    (name: 'removed', cb: (this: void) => void): void;
    (name: 'list', cb: (this: void) => void): void;
    (name: 'primary_changed', cb: (this: void) => void): void;
    (name: 'swapped', cb: (this: void, other: Screen, isSource: boolean) => void): void;
  };
  disconnect_signal(name: string, cb: UntypedFunction): void;
} & Table;

export type ScreenModule = {
  getbycoord(this: void, x: RealNumber, y: RealNumber): Screen | null;
  focus(this: void, screen: ScreenRef): void;
  focus_bydirection(this: void, direction: Direction, screen: ScreenRef): void;
  focus_relative(this: void, offset: RealNumber): void;
  focused(
    this: void,
    args?: {
      client?: boolean;
      mouse?: boolean;
    },
  ): Screen | null;
  connect_for_each_screen(this: void, f: (this: void, screen: Screen) => void): void;
  disconnect_for_each_screen(this: void, f: (this: void, screen: Screen) => void): void;
  preferred(this: void, client: Client): Screen;
};
