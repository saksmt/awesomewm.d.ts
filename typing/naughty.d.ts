/** @noResolution */

import { Timer, Table, ShapeRef, PatternRef, SurfaceRef } from './gears';
import { ScreenRef } from './awful';
import { AlignOnMargins, Fraction, Index } from './awesomewm/common';
import { TextboxWidget } from './awesomewm/wibox/widgets/TextboxWidget';
import { MarginContainer, Wibox } from './awesomewm/wibox/containers';

interface NotificationProps {
  text?: string;
  title?: string;
  timeout?: number;
  hover_timeout?: number;
  screen?: ScreenRef;
  position?: AlignOnMargins;
  on_top?: boolean;
  height?: number;
  width?: number;
  max_height?: number;
  max_width?: number;
  font?: string;
  icon?: SurfaceRef;
  icon_size?: number;
  fg?: PatternRef;
  bg?: PatternRef;
  border_width?: number;
  border_color?: PatternRef;
  shape?: ShapeRef;
  opacity?: Fraction;
  margin?: number;
  run?: (this: void, notification: Notification) => void;
  destroy?: (this: void, reason: NotificationClosedReason) => void;
  preset?: NotificationProps;
  replaced_id?: number;
  callback?: (notification: NotificationProps) => boolean;
  actions?: Table<(u: unknown) => void>;
  ignore_suspend?: boolean;
}

export const enum NotificationClosedReason {
  Silent = -1,
  Expired = 1,
  DismissedByUser,
  DismissedByCommand,
  Undefined,
}

export interface Notification {
  id: Index;
  screen: ScreenRef;
  destroy_cb: (this: void, reason: NotificationClosedReason) => void;
  timeout: number;
  position: AlignOnMargins;
  textbox: TextboxWidget;
  iconbox: MarginContainer;
  box: Wibox;

  die(this: void, reason: NotificationClosedReason): void;

  timer: Timer;
}

declare let notify: (this: void, args: NotificationProps) => Notification | undefined;

declare const config: {
  padding: number;
  spacing: number;
  icon_dirs: Table;
  icon_formats: Table;
  notify_callback: (this: void) => void;
  presets: {
    low: NotificationProps;
    normal: NotificationProps;
    critical: NotificationProps;
    ok: NotificationProps;
    info: NotificationProps;
    warn: NotificationProps;
  } & Table<NotificationProps>;
  defaults: Table<NotificationProps>;
};

declare const connect_signal: {
  (
    this: void,
    name: 'request::display_error',
    callback: (message: string, startup: boolean) => void,
  ): void;
  (
    this: void,
    name: 'request::icon',
    callback: (
      n: Notification,
      context: string,
      hits: { app_icon: string; path: string; image: string },
    ) => void,
  ): void;
  (
    this: void,
    name: 'request::display',
    callback: (notification: Table, context: string) => void,
  ): void;
};
