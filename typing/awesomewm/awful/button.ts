import { MouseButton, NaturalNumber, UntypedFunction, ModifierKey } from '../common';

export type Button<BoundTo> = {
  button: NaturalNumber;
  modifiers: ModifierKey[];
  on_press: (this: void, arg: BoundTo) => void;
  on_release: (this: void, arg: BoundTo) => void;

  connect_signal: {
    (name: 'press', cb: (this: void) => void): void;
    (name: 'press', cb: (this: void, arg: BoundTo) => void): void;
    (name: 'release', cb: (this: void) => void): void;
    (name: 'release', cb: (this: void, arg: BoundTo) => void): void;
  };
  disconnect_signal(name: string, cb: UntypedFunction): void;

  trigger(this: void): void;
};

export type ButtonModule = {
  <T>(
    this: void,
    modifiers: ModifierKey[],
    button: MouseButton,
    press: (this: void, target: T) => void,
    release?: (this: void, target: T) => void,
  ): Button<T>[];

  <T>(
    this: void,
    modifiers: ModifierKey[],
    button: MouseButton,
    press: (this: void) => void,
    release?: (this: void) => void,
  ): Button<T>[];
};
