/// <reference path="./tag.d.ts" />
/// <reference path="./screen.d.ts" />
/// <reference path="./key.d.ts" />
/// <reference path="./button.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Surface } from 'oocairo';
  import { PatternRef, ShapeRef, Geometry, Margins, Direction } from 'gears';

  export namespace Client {
    export const enum Signal {
      Focus = 'focus',
      Unfocus = 'unfocus',
      List = 'list',
      Manage = 'manage',
      Unmanage = 'unmanage',
      Raised = 'raised',
      Lowered = 'lowered',
      MouseEnter = 'mouse_enter',
      MouseLeave = 'mouse_leave',
      Tagged = 'tagged',
      Untagged = 'untagged',
      Swapped = 'swapped',
    }
    export const enum RequestSignal {
      Tag = 'request::tag',
      TitleBars = 'request::titlebars',
      Urgent = 'request::urgent',
      Activate = 'request::activate',
    }
  }

  export type Client = {
    window: string;
    name: string;
    skip_taskbar: boolean;
    type: WindowType | string;
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
    ): LuaMultiReturn<[PositiveReal, PositiveReal]>;
    get_icon(index: Index): Surface;
    jump_to(merge?: boolean): void;
    is_transient_for(other: Client): boolean;
    struts(newStruts?: Margins): Margins;
    geometry(newGeo?: Geometry): Geometry;
    keys(newKeys?: Key<Client>[]): Key<Client>[];
    buttons(newButtons?: Button<Client>[]): Button<Client>[];

    connect_signal: {
      (name: Client.Signal.Focus, cb: (this: void) => void): void;
      (name: Client.Signal.Unfocus, cb: (this: void) => void): void;
      (name: Client.Signal.List, cb: (this: void) => void): void;
      (name: Client.Signal.Manage, cb: (this: void) => void): void;
      (name: Client.Signal.Unmanage, cb: (this: void) => void): void;
      (name: Client.Signal.Raised, cb: (this: void) => void): void;
      (name: Client.Signal.Lowered, cb: (this: void) => void): void;
      (name: Client.Signal.Tagged, cb: (this: void, tag: Tag) => void): void;
      (name: Client.Signal.Untagged, cb: (this: void, tag: Tag) => void): void;
      (
        name: Client.Signal.Swapped,
        cb: (this: void, other: Client, is_source: boolean) => void,
      ): void;
      (name: Client.RequestSignal.Tag, cb: (this: void) => void): void;
      (
        name: Client.RequestSignal.TitleBars,
        cb: (this: void, context: string, hints: unknown) => void,
      ): void;
      (name: Client.RequestSignal.Urgent, cb: (this: void) => void): void;
      (
        name: Client.RequestSignal.Activate,
        cb: (this: void, context: string, hints: { raise: boolean }) => void,
      ): void;
      (name: string | Client.Signal | Client.RequestSignal, cb: UntypedFunction): void;
    };
    disconnect_signal(
      name: Client.Signal | Client.RequestSignal | string,
      cb: UntypedFunction,
    ): void;

    emit_signal(
      name: Client.Signal | Client.RequestSignal | string,
      source: string,
      args: unknown,
    ): void;
  };

  export const client: {
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
        is_enabled(this: void): LuaMultiReturn<[boolean, Index]>;
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
      get_transformed(this: void, client: Client, shapeType: ShapeType | string): unknown;
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
    DropdownMenu = 'dropdown_menu',
    PopupMenu = 'popup_menu',
    Notification = 'notification',
    Combo = 'combo',
    DND = 'dnd',
    Normal = 'normal',
  }

  export const enum ShapeType {
    Bounding = 'bounding',
    Clip = 'clip',
  }
}
