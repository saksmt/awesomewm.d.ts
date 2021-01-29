import { Client } from './client';
import { Layout } from './layout';
import { ScreenRef } from './screen';
import { SurfaceRef } from '../gears/surface';
import {
  Fraction,
  Index,
  IntegralNumber,
  NaturalNumber,
  PositiveReal,
  RealNumber,
  UntypedFunction,
} from '../common';

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
  master_fill_policy: MasterFillPolicy;
  master_count: NaturalNumber;
  icon: SurfaceRef;
  column_count: NaturalNumber;
  clients(clientsToTag?: Client[]): Client[];
  swap(other: Tag): void;
  delete(fallback?: Tag, force?: boolean): void;
  view_only(): void;

  connect_signal: {
    (name: 'request::select', cb: (this: void) => void): void;
    (name: 'tagged', cb: (this: void, client: Client) => void): void;
    (name: 'untagged', cb: (this: void, client: Client) => void): void;
    (name: 'request::screen', cb: (this: void) => void): void;
  };
  disconnect_signal(name: string, cb: UntypedFunction): void;
};

export type TagModule = {
  (this: void, names: string[], screen: ScreenRef, layout: Layout): Tag[];
  add(this: void, name: string, props: Partial<Tag>): Tag;
  find_fallback(this: void, screen?: ScreenRef, invalids?: Tag[]): Tag;
  history: {
    update(this: void, screen: ScreenRef): void;
    restore(this: void, screen: ScreenRef, index?: Index): void;
    limit: number;
  };
  incwmfact(this: void, add: Fraction, tag?: Tag): void;
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
    (this: void, screen: ScreenRef, name: 'request::select', cb: (this: void) => void): void;
    (this: void, screen: ScreenRef, name: 'tagged', cb: (this: void, client: Client) => void): void;
    (
      this: void,
      screen: ScreenRef,
      name: 'untagged',
      cb: (this: void, client: Client) => void,
    ): void;
    (this: void, screen: ScreenRef, name: 'request::screen', cb: (this: void) => void): void;
  };
  layouts: Layout[];
};

export const enum MasterFillPolicy {
  Expand = 'expand',
  MasterWidthFactor = 'master_width_factor',
}
