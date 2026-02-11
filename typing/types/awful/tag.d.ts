/// <reference path="./client.d.ts" />
/// <reference path="./screen.d.ts" />
/// <reference path="./layout.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { SurfaceRef } from 'gears';

  export namespace Tag {
    export const enum Signal {
      Tagged = 'tagged',
      Untagged = 'untagged',
    }
    export const enum RequestSignal {
      Select = 'request::select',
      Screen = 'request::screen',
    }
  }
  export type Tag = {
    name: string;
    selected: boolean;
    activated: boolean;
    index: Index;
    screen: ScreenRef;
    master_width_factor: Fraction;
    layout: Layout;
    layouts: Layout[];
    volatile: boolean;
    gap: PositiveReal;
    gap_single_client: boolean;
    master_fill_policy: Layout.MasterFillPolicy;
    master_count: NaturalNumber;
    icon: SurfaceRef;
    column_count: NaturalNumber;
    clients(clientsToTag?: Client[]): Client[];
    swap(other: Tag): void;
    delete(fallback?: Tag, force?: boolean): void;
    view_only(): void;

    connect_signal: {
      (name: Tag.RequestSignal.Select, cb: (this: void) => void): void;
      (name: Tag.Signal.Tagged, cb: (this: void, client: Client) => void): void;
      (name: Tag.Signal.Untagged, cb: (this: void, client: Client) => void): void;
      (name: Tag.RequestSignal.Screen, cb: (this: void) => void): void;
      (name: string, cb: UntypedFunction): void;
    };
    disconnect_signal(name: Tag.Signal | Tag.RequestSignal | string, cb: UntypedFunction): void;
  };

  export const tag: {
    (this: void, names: string[], screen: ScreenRef, layout: Layout): Tag[];
    add(this: void, name: string, props: Partial<Tag>): Tag;
    find_fallback(this: void, screen?: ScreenRef, invalids?: Tag[]): Tag;
    history: {
      update(this: void, screen: ScreenRef): void;
      restore(this: void, screen: ScreenRef, index?: Index): void;
      limit: number;
    };
    incmwfact(this: void, add: Fraction, tag?: Tag): void;
    incgap(this: void, add: RealNumber, tag?: Tag): void;
    togglemfpol(this: void, tag?: Tag): void;
    incnmaster(this: void, add: IntegralNumber, tag?: Tag | null, sensible?: boolean): void;
    incncol(this: void, add: IntegralNumber, tag?: Tag | null, sensible?: boolean): void;
    viewnone(this: void, screen?: ScreenRef): void;
    viewidx(this: void, index: Index, screen?: ScreenRef): void;
    viewnext(this: void, screen: ScreenRef): void;
    viewprev(this: void, screen: ScreenRef): void;
    viewmore(this: void, tags: Tag[], screen?: ScreenRef, maximum?: NaturalNumber): void;
    viewtoggle(this: void, tag: Tag): void;
    find_by_name(this: void, screen: ScreenRef, name: string): Tag | null;
    attached_connect_signal: {
      (
        this: void,
        screen: ScreenRef | null,
        name: Tag.RequestSignal.Select,
        cb: (this: void, tag: Tag) => void,
      ): void;
      (
        this: void,
        screen: ScreenRef | null,
        name: Tag.Signal.Tagged,
        cb: (this: void, tag: Tag) => void,
      ): void;
      (
        this: void,
        screen: ScreenRef | null,
        name: Tag.Signal.Untagged,
        cb: (this: void, tag: Tag) => void,
      ): void;
      (
        this: void,
        screen: ScreenRef | null,
        name: Tag.RequestSignal.Screen,
        cb: (this: void, tag: Tag) => void,
      ): void;
      (
        this: void,
        screen: ScreenRef | null,
        name: string,
        cb: (this: void, tag: Tag) => void,
      ): void;
    };
    layouts: Layout[];
  };
}
