import { UntypedFunction, ModifierKey } from '../common';
import { Table } from '../../gears';

export type KeyDescription = Partial<{
  description: string;
  group: string;
}> &
  Table;

export type Key<BoundTo> = {
  key: string;
  modifiers: ModifierKey[];

  connect_signal: {
    (name: 'press', cb: (this: void) => void): void;
    (name: 'press', cb: (this: void, arg: BoundTo) => void): void;
    (name: 'release', cb: (this: void) => void): void;
    (name: 'release', cb: (this: void, arg: BoundTo) => void): void;
  };
  disconnect_signal(name: string, cb: UntypedFunction): void;
};

export type KeyBinding<T> =
  | [ModifierKey[], string, (this: void, arg: T) => void]
  | [ModifierKey[], string, (this: void) => void]
  | [ModifierKey[], string, (this: void, arg: T) => void, (this: void, arg: T) => void]
  | [ModifierKey[], string, (this: void) => void, (this: void) => void]
  | [ModifierKey[], string, (this: void, arg: T) => void, KeyDescription]
  | [ModifierKey[], string, (this: void) => void, KeyDescription]
  | [
      ModifierKey[],
      string,
      (this: void, arg: T) => void,
      (this: void, arg: T) => void,
      KeyDescription,
    ]
  | [ModifierKey[], string, (this: void) => void, (this: void) => void, KeyDescription];

export type KeyModule = {
  execute(modifiers: ModifierKey[], key: string): void;
  match<T>(key: Key<T>, modifiers: ModifierKey[], pressed: string): boolean;
} & {
  <T>(
    this: void,
    modifiers: ModifierKey[],
    key: string,
    press: (this: void, arg: T) => void,
    release?: (this: void, arg: T) => void,
    description?: KeyDescription,
  ): Key<T>[];
  <T>(
    this: void,
    modifiers: ModifierKey[],
    key: string,
    press: (this: void) => void,
    release?: (this: void) => void,
    description?: KeyDescription,
  ): Key<T>[];

  <T>(
    this: void,
    modifiers: ModifierKey[],
    key: string,
    press: (this: void, arg: T) => void,
    description?: KeyDescription,
  ): Key<T>[];
  <T>(
    this: void,
    modifiers: ModifierKey[],
    key: string,
    press: (this: void) => void,
    description?: KeyDescription,
  ): Key<T>[];
};
