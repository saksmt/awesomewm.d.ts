/// <reference path="./key.d.ts" />

/** @noResolution */
declare module 'awful' {
  export namespace Mouse {
    export const enum Button {
      Left = 1,
      Middle,
      Right,
      ScrollUp,
      ScrollDown,
    }

    export const enum Signal {
      Press = 'press',
      Release = 'release',
    }
  }

  export type Button<BoundTo> = {
    button: Mouse.Button;
    modifiers: Keyboard.ModifierKey[];
    on_press: (this: void, arg: BoundTo) => void;
    on_release: (this: void, arg: BoundTo) => void;

    connect_signal: {
      (name: Mouse.Signal.Press, cb: (this: void, arg: BoundTo) => void): void;
      (name: Mouse.Signal.Release, cb: (this: void, arg: BoundTo) => void): void;
      (name: string, cb: UntypedFunction): void;
    };
    disconnect_signal(name: Mouse.Signal | string, cb: UntypedFunction): void;

    trigger(this: void): void;
  };
  export const button: {
    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      button: Mouse.Button,
      press: (this: void, target: T) => void,
      release?: (this: void, target: T) => void,
    ): Button<T>[];

    <T>(
      this: void,
      modifiers: (Keyboard.ModifierKey | string)[],
      button: Mouse.Button,
      press: (this: void) => void,
      release?: (this: void) => void,
    ): Button<T>[];
  };
}
