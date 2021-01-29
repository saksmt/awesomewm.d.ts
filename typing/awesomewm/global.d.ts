/** @noResolution */
import { Surface } from './cairo/surface';
import { Table } from '../gears';
import { Button } from './awful/button';
import { Key } from './awful/key';
import { Screen } from './awful/screen';
import { PositiveReal, RealNumber, UntypedFunction } from './common';
import { Tag } from './awful/tag';
import { Client } from './awful/client';

declare global {
  export type FileDescriptor = number;
  export type ProcessId = number;

  type AwesomeSignals = {
    connect_signal: {
      (this: void, signalName: 'debug::error', handler: (this: void, errors: Table) => void): void;
      (
        this: void,
        signalName: 'exit',
        handler: (this: void, becauseOfRestart: boolean) => void,
      ): void;
      (this: void, signalName: string, handler: UntypedFunction): void;
    };
    disconnect_signal: {
      (this: void, signalName: 'debug::error', handler: (this: void, errors: Table) => void): void;
      (this: void, signalName: string, handler: UntypedFunction): void;
    };
    emit_signal(this: void, name: string, ...signalArguments: unknown[]): void;
  };

  export const screen: {
    fake_add(
      this: void,
      x: RealNumber,
      y: RealNumber,
      width: PositiveReal,
      height: PositiveReal,
    ): void;
    primary: Screen;

    connect_signal: {
      (this: void, name: 'added', cb: (this: void, screen: Screen) => void): void;
      (this: void, name: 'removed', cb: (this: void, screen: Screen) => void): void;
      (this: void, name: 'list', cb: (this: void, screen: Screen) => void): void;
      (this: void, name: 'primary_changed', cb: (this: void, screen: Screen) => void): void;
      (this: void, name: 'property::geometry', cb: (this: void, screen: Screen) => void): void;
      (
        this: void,
        name: 'swapped',
        cb: (this: void, screen: Screen, other: Screen, isSource: boolean) => void,
      ): void;
    };
    disconnect_signal(name: string, cb: UntypedFunction): void;
  };

  export const client: {
    focus: Client | null;
    connect_signal: {
      (this: void, name: 'focus', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'unfocus', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'list', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'manage', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'unmanage', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'raised', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'lowered', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'mouse::enter', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'mouse::leave', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'request::tag', cb: (this: void, client: Client) => void): void;
      (
        this: void,
        name: 'request::titlebars',
        cb: (this: void, client: Client, context: string, hints: unknown) => void,
      ): void;
      (this: void, name: 'request::urgent', cb: (this: void, client: Client) => void): void;
      (this: void, name: 'tagged', cb: (this: void, client: Client, tag: Tag) => void): void;
      (this: void, name: 'untagged', cb: (this: void, client: Client, tag: Tag) => void): void;
      (
        this: void,
        name: 'request::activate',
        cb: (this: void, client: Client, context: string, hints: { raise: boolean }) => void,
      ): void;
      (
        this: void,
        name: 'swapped',
        cb: (this: void, client: Client, other: Client, is_source: boolean) => void,
      ): void;
    };
    disconnect_signal(name: string, cb: UntypedFunction): void;
  };

  export const root: {
    buttons(this: void, newButtons: Button<Screen>[]): Button<Screen>[];
    keys(this: void, newKeys: Key<Screen>[]): Key<Screen>[];
  };

  export const awesome: AwesomeSignals & {
    version: string;
    release: string;
    conffile: string;
    startup: boolean;
    startup_errors?: string;
    composite_manager_running: boolean;
    hostname: string;
    themes_path: string;
    icon_path: string;

    quit(this: void, code?: number): never;
    exec(this: void, cmd: string): never;
    restart(this: void): never;
    kill(this: void, pid: number, signal: number): boolean;
    load_image(this: void, path: string): Surface | string | null;
    set_preferred_icon_size(this: void, size: number): void;
    spawn: {
      (
        this: void,
        cmd: string | string[] | Table,
        use_sn: true,
        stdin: boolean,
        stdout: boolean,
        stderr: boolean,
        exit_callback: (this: void, exitType: 'exit' | 'signal', exitCodeOrSignal: number) => void,
        env: Table<string> | Table,
      ): string;

      (
        this: void,
        cmd: string | string[] | Table,
        use_sn: false,
        stdin: boolean,
        stdout: boolean,
        stderr: boolean,
        exit_callback: (this: void, exitType: 'exit' | 'signal', exitCodeOrSignal: number) => void,
        env: Table<string> | Table,
      ): string | FileDescriptor | ProcessId;
    };
    xkb_set_layout_group(id: number): void;
    xkb_get_layout_group(): number;
    xkb_get_group_names(): string;
  };
}
