/** @noResolution */

import {
  ArcChartContainer,
  BackgroundContainer,
  ConstraintContainer,
  ConstraintStrategy,
  MarginContainer,
  MirrorContainer,
  PlaceContainer,
  RadialProgressbarContainer,
  RotateContainer,
} from './awesomewm/wibox/containers';
import { Widget as WidgetDef } from './awesomewm/wibox/Widget';
import {
  CalendarWidget,
  CheckboxWidget,
  DateInfo,
  GraphWidget,
  ImageWidget,
  PieChartWidget,
  ProgressbarWidget,
  SeparatorWidget,
  SliderWidget,
  SystrayWidget,
  TextclockWidget,
} from './awesomewm/wibox/widgets';
import { TextboxWidget } from './awesomewm/wibox/widgets/TextboxWidget';
import { Layout as LayoutDef, Layouts } from './awesomewm/wibox/layout';
import { PatternRef, ShapeRef, SurfaceRef } from './gears';
import {
  AlignX,
  AlignY,
  ContravariantEmptyObject,
  Direction,
  PositiveReal,
  RealNumber,
} from './awesomewm/common';

export * as containers from './awesomewm/wibox/containers';

export declare const container: {
  arcchart: WidgetConstructor<(this: void, widget?: Widget) => ArcChartContainer>;
  background: WidgetConstructor<
    (this: void, widget?: Widget, bg?: PatternRef, shape?: ShapeRef) => BackgroundContainer
  >;
  constraint: WidgetConstructor<
    (
      this: void,
      widget?: Widget,
      strategy?: ConstraintStrategy,
      width?: PositiveReal,
      height?: PositiveReal,
    ) => ConstraintContainer
  >;
  margin: WidgetConstructor<
    (
      this: void,
      widget?: Widget,
      left?: RealNumber,
      right?: RealNumber,
      top?: RealNumber,
      bottom?: RealNumber,
      color?: PatternRef,
      drawEmpty?: boolean,
    ) => MarginContainer
  >;
  mirror: WidgetConstructor<
    (this: void, widget?: Widget, reflection?: { x?: boolean; y?: boolean }) => MirrorContainer
  >;
  place: WidgetConstructor<
    (this: void, widget?: Widget, halign?: AlignX, valign?: AlignY) => PlaceContainer
  >;
  radialprogressbar: WidgetConstructor<(this: void, widget?: Widget) => RadialProgressbarContainer>;
  rotate: WidgetConstructor<
    (this: void, widget?: Widget, direction?: Direction) => RotateContainer
  >;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type DeclarativeWidgetFactory<T extends Widget, A = ContravariantEmptyObject> = ((
  this: void,
  args: Partial<T> & { layout?: Layout } & A,
) => T) &
  T;
export type WidgetConstructor<
  F extends (...args: any) => any,
  A = ContravariantEmptyObject
> = ReturnType<F> extends Widget ? F & DeclarativeWidgetFactory<ReturnType<F>, A> : any;
/* eslint-enable */

export type WidgetTemplate<T extends Widget> = { widget: T } & Partial<Omit<T, 'children'>> & {
    layout?: Layout;
  };

export * as widgets from './awesomewm/wibox/widgets';
export declare const widget: {
  <T extends Widget>(construct: Partial<T> & { widget: DeclarativeWidgetFactory<T> }): T;

  calendar: {
    month: WidgetConstructor<
      (this: void, date?: DateInfo | string, font?: string) => CalendarWidget
    >;
    year: WidgetConstructor<
      (this: void, date?: DateInfo | string, font?: string) => CalendarWidget
    >;
  };
  checkbox: WidgetConstructor<(this: void) => CheckboxWidget>;
  graph: WidgetConstructor<(this: void) => GraphWidget>;
  imagebox: WidgetConstructor<
    (this: void, image?: SurfaceRef, resize_allowed?: boolean, clip_shape?: ShapeRef) => ImageWidget
  >;
  piechart: WidgetConstructor<(this: void) => PieChartWidget>;
  progressbar: WidgetConstructor<(this: void) => ProgressbarWidget>;
  separator: WidgetConstructor<(this: void) => SeparatorWidget>;
  slider: WidgetConstructor<(this: void) => SliderWidget>;
  systray: WidgetConstructor<(this: void, reverse?: boolean) => SystrayWidget>;
  textbox: WidgetConstructor<(this: void, text?: string, ignore_markup?: boolean) => TextboxWidget>;
  textclock: WidgetConstructor<
    (this: void, format?: string, refresh?: number, timezone?: string) => TextclockWidget
  >;
};

export declare const layout: Layouts;
export * as layouts from './awesomewm/wibox/layout';

export type Widget = WidgetDef;
export type Layout = LayoutDef;
