import { Surface } from '../cairo/surface';
import {
  Fraction,
  Index,
  IntegralNumber,
  NaturalNumber,
  Opacity,
  PositiveIntegral,
  PositiveReal,
  RealNumber,
  UntypedFunction,
  Direction,
  Margins,
  Geometry,
} from '../common';
import { Tag } from './tag';
import { ScreenRef } from './screen';
import { Key } from './key';
import { Button } from './button';
import { ShapeRef } from '../gears/shape';
import { PatternRef } from '../gears/color';

type ClientSignals =
  | 'focus'
  | 'unfocus'
  | 'list'
  | 'manage'
  | 'unmanage'
  | 'raised'
  | 'lowered'
  | 'mouse_enter'
  | 'mouse_leave'
  | 'request::tag'
  | 'request::titlebars'
  | 'request::urgent'
  | 'tagged'
  | 'untagged'
  | 'request::activate'
  | 'swapped';

export type Client = {
  window: string;
  name: string;
  skip_taskbar: boolean;
  type: WindowType;
  class: string;
  instance: string;
  pid?: NaturalNumber;
  role?: string;
  machine: string;
  icon_name: string;
  icon: Surface;
  screen: ScreenRef;
  hidden: boolean;
  minimized: boolean;
  size_hints_honor: boolean;
  border_width: PositiveReal;
  border_color: PatternRef;
  urgent: boolean;
  content: Surface;
  opacity: Opacity;
  ontop: boolean;
  above: boolean;
  below: boolean;
  fullscreen: boolean;
  maximized: boolean;
  maximized_horizontal: boolean;
  maximized_vertical: boolean;
  transient_for: Client;
  group_window: Client;
  leader_window: Client;
  size_hints: {
    user_position: IntegralNumber;
    user_size: IntegralNumber;
    program_position: IntegralNumber;
    program_size: IntegralNumber;
    max_width: PositiveIntegral;
    max_height: PositiveIntegral;
    min_width: PositiveIntegral;
    min_height: PositiveIntegral;
    width_inc: IntegralNumber;
    height_inc: IntegralNumber;
  };
  sticky: boolean;
  modal: boolean;
  focusable: boolean;
  shape_bounding: Surface;
  shape_clip: Surface;
  shape_input: Surface;
  client_shape_bounding: Surface;
  client_shape_clip: Surface;
  startup_id: string;
  valid: boolean;
  first_tag: Tag;
  marked: boolean;
  is_fixed: boolean;
  readonly immobilized_vertical: boolean;
  readonly immobilized_horizontal: boolean;
  floating: boolean;
  x: RealNumber;
  y: RealNumber;
  width: PositiveReal;
  height: PositiveReal;
  dockable: boolean;
  requests_no_titlebar: boolean;
  shape: ShapeRef;
  icon_sizes: { width: PositiveReal; height: PositiveReal }[];
  relative_move(x: RealNumber, y: RealNumber, w: PositiveReal, h: PositiveReal): void;
  move_to_tag(target: Tag): void;
  toggle_tag(tag: Tag): void;
  move_to_screen(screen?: ScreenRef): void;
  to_selected_tags(): void;
  get_transient_for_matching(filter: (parent: Client) => boolean): Client | null;
  kill(): void;
  swap(other: Client): void;
  tags(new_tags?: Tag[]): Tag[];
  raise(): void;
  lower(): void;
  unmanage(): void;
  apply_size_hints(
    width: PositiveReal,
    height: PositiveReal,
  ): MultiReturn<[PositiveReal, PositiveReal]>;
  get_icon(index: Index): Surface;
  jump_to(merge?: boolean): void;
  is_transient_for(other: Client): boolean;
  struts(newStruts?: Margins): Margins;
  geometry(newGeo?: Geometry): Geometry;
  keys(newKeys?: Key<Client>[]): Key<Client>[];
  buttons(newButtons?: Button<Client>[]): Button<Client>[];

  connect_signal: {
    (name: 'focus', cb: (this: void) => void): void;
    (name: 'unfocus', cb: (this: void) => void): void;
    (name: 'list', cb: (this: void) => void): void;
    (name: 'manage', cb: (this: void) => void): void;
    (name: 'unmanage', cb: (this: void) => void): void;
    (name: 'raised', cb: (this: void) => void): void;
    (name: 'lowered', cb: (this: void) => void): void;
    (name: 'request::tag', cb: (this: void) => void): void;
    (name: 'request::titlebars', cb: (this: void, context: string, hints: unknown) => void): void;
    (name: 'request::urgent', cb: (this: void) => void): void;
    (name: 'tagged', cb: (this: void, tag: Tag) => void): void;
    (name: 'untagged', cb: (this: void, tag: Tag) => void): void;
    (
      name: 'request::activate',
      cb: (this: void, context: string, hints: { raise: boolean }) => void,
    ): void;
    (name: 'swapped', cb: (this: void, other: Client, is_source: boolean) => void): void;
  };
  disconnect_signal(name: ClientSignals, cb: UntypedFunction): void;

  emit_signal(name: ClientSignals, source: string, args: unknown): void;
};

export type ClientModule = {
  next(this: void, index: Index, client?: Client, stacked?: boolean): Client;
  swap: {
    bydirection(this: void, direction: Direction, client?: Client, stacked?: boolean): void;
    global_bydirection(this: void, direction: Direction, client?: Client): void;
    byidx(this: void, i: Index, client?: Client): void;
  };
  cycle(this: void, clockwise: boolean, screen?: ScreenRef, stacked?: boolean): void;
  getmarked(this: void): Client[];
  restore(this: void, screen?: ScreenRef): Client | null;
  iterate(
    this: void,
    filter: (this: void, client: Client) => boolean,
    start?: Index | Client,
    screen?: ScreenRef,
  ): Client[];
  get(this: void, screen?: ScreenRef, stacked?: boolean): Client[];
  focus: {
    history: {
      enable_tracking(this: void): boolean;
      disable_tracking(this: void): number;
      is_enabled(this: void): MultiReturn<[boolean, Index]>;
      delete(this: void, client: Client): void;
      add(this: void, client: Client): void;
      get(
        this: void,
        screen: ScreenRef,
        idx: Index,
        filter?: (this: void, client: Client) => Client | null,
      ): Client | null;
      previous(this: void): void;
    };
    byidx(this: void, index: Index, client?: Client): void;
    filter(this: void, client: Client): Client | null;
    bydirection(this: void, direction: Direction, client?: Client, stacked?: boolean): void;
    global_bydirection(this: void, direction: Direction, client?: Client): void;
  };
  shape: {
    get_transformed(this: void, client: Client, shapeType: ShapeType): unknown;
    update: {
      all(this: void, client: Client): void;
      bounding(this: void, client: Client): void;
      clip(this: void, client: Client): void;
    };
  };
  getmaster(this: void, screen?: ScreenRef): Client;
  setmaster(this: void, client: Client): void;
  setslave(this: void, client: Client): void;
  setwfact(this: void, factor: Fraction, client: Client): void;
  incwfact(this: void, factor: Fraction, client: Client): void;
};

export const enum WindowType {
  Desktop = 'desktop',
  Dock = 'dock',
  Splash = 'splash',
  Dialog = 'dialog',
  Menu = 'menu',
  Toolbar = 'toolbar',
  Utility = 'utility',
  Dropdown_menu = 'dropdown_menu',
  Popup_menu = 'popup_menu',
  Notification = 'notification',
  Combo = 'combo',
  Dnd = 'dnd',
  Normal = 'normal',
}

export const enum ShapeType {
  Bounding = 'bounding',
  Clip = 'clip',
}
