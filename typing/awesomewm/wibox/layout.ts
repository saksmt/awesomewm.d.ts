import { Widget } from './Widget';
import { Placement } from '../awful/placement';
import { Fraction, Index, NaturalNumber, Point, PositiveReal, RealNumber } from '../common';

// all of those typehacks are to restrict usage of widgets where Layout expected
const layoutTypeGuard: unique symbol = Symbol();
export type Layout = Widget & typeof layoutTypeGuard;
type AsLayout<T> = T & typeof layoutTypeGuard;
/* eslint-disable @typescript-eslint/no-explicit-any */
export type LayoutConstructor<F extends (...args: any) => any> = ReturnType<F> extends Widget
  ? ((this: void, ...args: Parameters<F>) => AsLayout<ReturnType<F>>) &
      ((
        this: void,
        args: Partial<ReturnType<F>> & { layout?: Layout },
      ) => AsLayout<ReturnType<F>>) &
      AsLayout<ReturnType<F>>
  : any;
/* eslint-enable */
export type Layouts = {
  align: {
    horizontal: LayoutConstructor<
      (this: void, left?: Widget, middle?: Widget, right?: Widget) => LayoutAlign
    >;
    vertical: LayoutConstructor<
      (this: void, top?: Widget, middle?: Widget, bottom?: Widget) => LayoutAlign
    >;
  };
  fixed: {
    horizontal: LayoutConstructor<(this: void, ...widgets: Widget[]) => FixedLayout>;
    vertical: LayoutConstructor<(this: void, ...widgets: Widget[]) => FixedLayout>;
  };
  flex: {
    vertical: LayoutConstructor<(this: void, ...widgets: Widget[]) => FlexLayout>;
    horizontal: LayoutConstructor<(this: void, ...widgets: Widget[]) => FlexLayout>;
  };
  grid: {
    horizontal: LayoutConstructor<(this: void, ...widgets: Widget[]) => GridLayout>;
    vertical: LayoutConstructor<(this: void, ...widgets: Widget[]) => GridLayout>;
  };
  manual: LayoutConstructor<(this: void, ...widgets: Widget[]) => ManualLayout>;
  ratio: {
    horizontal: LayoutConstructor<(this: void, ...widgets: Widget[]) => RatioLayout>;
    vertical: LayoutConstructor<(this: void, ...widgets: Widget[]) => RatioLayout>;
  };
  stack: LayoutConstructor<(this: void, ...widgets: Widget[]) => StackLayout>;
};

export type LayoutAlign = Widget & {
  first: Widget;
  second: Widget;
  third: Widget;
  expand: AlignExpansionMode;
  reset(): void;
};
export type FixedLayout = Widget & {
  spacing_widget: Widget;
  fill_space: boolean;
  spacing: number;
  reset(): void;
  insert(index: Index, widget: Widget): boolean;
  set(index: Index, widget: Widget): boolean;
  swap(first: Index, second: Index): boolean;
  swap_widgets(first: Widget, second: Widget, recursive?: boolean): boolean;
  replace_widget(search: Widget, replacement: Widget, recursive?: boolean): boolean;
  remove(index: Index): boolean;
  remove_widget(widget: Widget): boolean;
  add(...widgets: Widget[]): void;
};
export type FlexLayout = FixedLayout & {
  max_widget_size: PositiveReal;
};
export type GridLayout = Widget & {
  orientation: GridOrientation;
  superpose: boolean;
  forced_num_rows: NaturalNumber;
  forced_num_cols: NaturalNumber;
  min_cols_size: PositiveReal;
  min_rows_size: PositiveReal;
  horizontal_spacing: PositiveReal;
  vertical_spacing: PositiveReal;
  spacing: PositiveReal;
  horizontal_expand: boolean;
  vertical_expand: boolean;
  expand: boolean;
  horizontal_homogeneous: boolean;
  vertical_homogeneous: boolean;
  homogeneous: boolean;

  get_dimension(): MultiReturn<[NaturalNumber, NaturalNumber]>;
  get_next_empty(
    hint_row?: NaturalNumber,
    hint_column?: NaturalNumber,
  ): MultiReturn<[NaturalNumber, NaturalNumber]>;
  add(...widgets: Widget[]): void;
  add_widget_at(
    child: Widget,
    row: NaturalNumber,
    col: NaturalNumber,
    row_span?: NaturalNumber,
    col_span?: NaturalNumber,
  ): boolean;
  remove(...widgets: Widget[]): boolean;
  remove_widgets_at(
    row: NaturalNumber,
    col: NaturalNumber,
    row_span?: NaturalNumber,
    col_span?: NaturalNumber,
  ): boolean;
  get_widget_position(
    widget: Widget,
  ): {
    row: NaturalNumber;
    col: NaturalNumber;
    row_span: NaturalNumber;
    col_span: NaturalNumber;
  };
  get_widgets_at(
    row: NaturalNumber,
    col: NaturalNumber,
    row_span: NaturalNumber,
    col_span: NaturalNumber,
  ): Widget[] | null;
  replace_widget(old: Widget, replacement: Widget): boolean;
  insert_column(index: Index): void;
  extend_column(index: Index): void;
  remove_column(index: Index): void;
  insert_row(index: Index): void;
  extend_row(index: Index): void;
  remove_row(index: Index): void;
  reset(): void;
};
export type ManualLayout = Widget & {
  insert(index: Index, widget: Widget): void;
  add(...widgets: Widget[]): void;
  add_at(widget: Widget, location: Placement | Point): void;
  move(index: Index, new_location: Placement | Point): void;
  move_widget(widget: Widget, new_location: Placement | Point): void;
  reset(): void;
};
export type RatioLayout = FlexLayout & {
  inner_fill_strategy: RatioFillStrategy;

  inc_ratio(index: Index, increment: Fraction): void;
  inc_widget_ratio(widget: Widget, increment: Fraction): void;
  set_ratio(index: Index, ratio: Fraction): void;
  set_widget_ratio(widget: Widget, ratio: Fraction): void;
  get_ratio(index: Index): Fraction;
  ajust_ratio(index: Index, before: Index, itself: Index, after: Index): void;
  ajust_widget_ratio(widget: Widget, before: Index, itself: Index, after: Index): void;
};
export type StackLayout = FixedLayout & {
  top_only: boolean;
  horizontal_offset: RealNumber;
  vertical_offset: RealNumber;
  raise(index: Index): void;
  raise_widget(widget: Widget): void;
};

export const enum RatioFillStrategy {
  Default = 'default',
  Justify = 'justify',
  Center = 'center',
  InnerSpacing = 'inner_spacing',
  Spacing = 'spacing',
  Left = 'left',
  Right = 'right',
}

export const enum GridOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export const enum AlignExpansionMode {
  Inside = 'inside',
  Outside = 'outside',
  None = 'none',
}
