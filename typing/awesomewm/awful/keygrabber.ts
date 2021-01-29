import { PositiveReal, ModifierKey } from '../common';
import { KeyBinding } from './key';
import { Table } from '../../gears';

export type Keygrabber = {
  timeout: PositiveReal;
  stop_key: string | string[];
  stop_event: 'press' | 'release';
  mask_event_callback: boolean;
  mask_modkeys: boolean;
  export_keybindings: boolean;
  root_keybindings: KeyBinding<null>[];
  keybindings: KeyBinding<null>[];
  allowed_keys: string[] | null;
  sequence: string;

  start(): boolean;
  stop(): void;
  add_keybinding(
    modifiers: ModifierKey[],
    key: string,
    cb: (
      this: void,
      self: Keygrabber,
      modifiers: ModifierKey[],
      key: string,
      event: 'press' | 'release',
    ) => void,
    description?: Table,
  ): void;
};

const grabberSymbol: unique symbol = Symbol();
export type KeygrabberHandle = typeof grabberSymbol;

export type KeygrabberModule = {
  (
    args: Partial<Keygrabber> & {
      start_callback?: () => void;
      stop_callback?: () => void;
      timeout_callback?: () => void;
      keypressed_callback?: () => void;
      keyreleased_callback?: () => void;
      autostart?: boolean;
    },
  ): Keygrabber;
  run(
    this: void,
    cb: (
      this: void,
      modifiers: ModifierKey[],
      key: string,
      event: 'press' | 'release',
    ) => void | false,
  ): KeygrabberHandle;
  stop(this: void, handle: KeygrabberHandle): void;
};
