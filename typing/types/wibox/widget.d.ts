/// <reference path="./layout.d.ts" />

import { Button, Mouse } from 'awful';

/** @noResolution */
declare module 'wibox' {
  export interface Widget extends HasMouseSignals {
    id: string;
    visible: boolean;
    forced_height: PositiveReal;
    forced_width: PositiveReal;
    opacity: Opacity;
    children: Widget[];

    setup(args: { [k in string | Index]: Widget | Layout | unknown }): void;
    setup(config: Partial<this> & { layout?: Layout }): void;

    buttons(
      newButtons?: Button<WidgetMouseEvents.TargetedWidget>[],
    ): Button<WidgetMouseEvents.TargetedWidget>[];
    get_children_by_id<T extends Widget>(id: string): T[];
  }
  export namespace Widget {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    export type DeclarativeFactory<T extends Widget, A = ContravariantEmptyObject> = ((
      this: void,
      args: Partial<T> & { layout?: Layout } & A,
    ) => T) &
      T;

    export type Constructor<F extends (...args: any) => any, A = ContravariantEmptyObject> =
      ReturnType<F> extends Widget ? F & DeclarativeFactory<ReturnType<F>, A> : any;
    /* eslint-enable */
  }

  export interface HasMouseSignals {
    connect_signal(
      name: WidgetMouseEvents.Signal.ButtonPress,
      cb: WidgetMouseEvents.Callback,
    ): void;

    connect_signal(
      name: WidgetMouseEvents.Signal.ButtonRelease,
      cb: WidgetMouseEvents.Callback,
    ): void;

    connect_signal(name: WidgetMouseEvents.Signal.MouseEnter, cb: (this: void) => void): void;

    connect_signal(name: WidgetMouseEvents.Signal.MouseLeave, cb: (this: void) => void): void;
  }

  export namespace WidgetMouseEvents {
    export const enum Signal {
      ButtonPress = 'button::press',
      ButtonRelease = 'button::release',
      MouseEnter = 'mouse::enter',
      MouseLeave = 'mouse::leave',
    }

    export type TargetedWidget = {
      x: RealNumber;
      y: RealNumber;
      widget: Widget;
      width: PositiveReal;
      height: PositiveReal;
      widget_width: PositiveReal;
      widget_height: PositiveReal;
    };

    export type Callback = (
      this: void,
      relativeX: RealNumber,
      relativeY: RealNumber,
      button: Mouse.Button,
      modifiers: string[],
      target: TargetedWidget,
    ) => void;
  }
}
