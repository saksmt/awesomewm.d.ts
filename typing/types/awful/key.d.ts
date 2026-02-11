/** @noResolution */
declare module 'awful' {
  import { Table } from 'gears';

  namespace Keyboard {
    export const enum ModifierKey {
      Any = 'Any',
      Mod1 = 'Mod1',
      Mod2 = 'Mod2',
      Mod3 = 'Mod3',
      Mod4 = 'Mod4',
      Mod5 = 'Mod5',
      Shift = 'Shift',
      Lock = 'Lock',
      Control = 'Control',
    }

    export const enum Signal {
      Press = 'press',
      Release = 'release',
    }
  }

  export type Key<BoundTo> = {
    key: string;
    modifiers: (Keyboard.ModifierKey | string)[];

    connect_signal: {
      (name: Keyboard.Signal.Press, cb: (this: void, arg: BoundTo) => void): void;
      (name: Keyboard.Signal.Release, cb: (this: void, arg: BoundTo) => void): void;
      (name: string, cb: UntypedFunction): void;
    };
    disconnect_signal(name: Keyboard.Signal | string, cb: UntypedFunction): void;
  };
  export const key: {
    execute(modifiers: (Keyboard.ModifierKey | string)[], key: string): void;
    match<T>(key: Key<T>, modifiers: (Keyboard.ModifierKey | string)[], pressed: string): boolean;
  } & {
    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      key: string,
      press: (this: void, arg: T) => void,
      release?: (this: void, arg: T) => void,
      description?: KeyDescription,
    ): Key<T>[];
    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      key: string,
      press: (this: void) => void,
      release?: (this: void) => void,
      description?: KeyDescription,
    ): Key<T>[];

    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      key: string,
      press: (this: void, arg: T) => void,
      description?: KeyDescription,
    ): Key<T>[];
    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      key: string,
      press: (this: void) => void,
      description?: KeyDescription,
    ): Key<T>[];
  };

  export type KeyBinding<T> =
    | [(Keyboard.ModifierKey | string)[], string, (this: void, arg: T) => void]
    | [(Keyboard.ModifierKey | string)[], string, (this: void) => void]
    | [
        (Keyboard.ModifierKey | string)[],
        string,
        (this: void, arg: T) => void,
        (this: void, arg: T) => void,
      ]
    | [(Keyboard.ModifierKey | string)[], string, (this: void) => void, (this: void) => void]
    | [(Keyboard.ModifierKey | string)[], string, (this: void, arg: T) => void, KeyDescription]
    | [(Keyboard.ModifierKey | string)[], string, (this: void) => void, KeyDescription]
    | [
        (Keyboard.ModifierKey | string)[],
        string,
        (this: void, arg: T) => void,
        (this: void, arg: T) => void,
        KeyDescription,
      ]
    | [
        (Keyboard.ModifierKey | string)[],
        string,
        (this: void) => void,
        (this: void) => void,
        KeyDescription,
      ];

  export type KeyDescription = Partial<{
    description: string;
    group: string;
  }> &
    Table;
}
