import { MouseButton, PositiveReal, RealNumber } from '../common';
import { Widget } from './Widget';

export type TargetedWidget = {
  x: RealNumber;
  y: RealNumber;
  widget: Widget;
  width: PositiveReal;
  height: PositiveReal;
  widget_width: PositiveReal;
  widget_height: PositiveReal;
};

export type WidgetMouseCallback = (
  this: void,
  relativeX: RealNumber,
  relativeY: RealNumber,
  button: MouseButton,
  modifiers: string[],
  target: TargetedWidget,
) => void;
export interface HasMouseSignals {
  connect_signal(name: 'button::press', cb: WidgetMouseCallback): void;
  connect_signal(name: 'button::release', cb: WidgetMouseCallback): void;
  connect_signal(name: 'mouse::enter', cb: (this: void) => void): void;
  connect_signal(name: 'mouse::leave', cb: (this: void) => void): void;
}
export const enum MouseSignals {
  ButtonPress = 'button::press',
  ButtonRelease = 'button::release',
  MouseEnter = 'mouse::enter',
  MouseLeave = 'mouse::leave',
}
