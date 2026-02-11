/// <reference path="./widget.d.ts" />

// https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts

/** @noResolution */
declare module 'wibox' {
  import { Placement } from 'awful';
  import { Axis, Point } from 'gears';

  export type Layout = Widget & typeof layoutTypeGuard;

  export namespace Layout {
    export const enum RatioFillStrategy {
      Default = 'default',
      Justify = 'justify',
      Center = 'center',
      InnerSpacing = 'inner_spacing',
      Spacing = 'spacing',
      Left = 'left',
      Right = 'right',
    }

    export const enum AlignExpansionMode {
      Inside = 'inside',
      Outside = 'outside',
      None = 'none',
    }

    export namespace Internal {
      type AsLayout<T> = T & typeof layoutTypeGuard;

      /* eslint-disable @typescript-eslint/no-explicit-any */
      export type LayoutConstructor<F extends (...args: any) => any> =
        ReturnType<F> extends Widget
          ? ((this: void, ...args: Parameters<F>) => AsLayout<ReturnType<F>>) &
              ((
                this: void,
                args: Partial<ReturnType<F>> & { layout?: Layout },
              ) => AsLayout<ReturnType<F>>) &
              AsLayout<ReturnType<F>>
          : any;
      /* eslint-enable */

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
        orientation: Axis;
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

        get_dimension(): LuaMultiReturn<[NaturalNumber, NaturalNumber]>;
        get_next_empty(
          hint_row?: NaturalNumber,
          hint_column?: NaturalNumber,
        ): LuaMultiReturn<[NaturalNumber, NaturalNumber]>;
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
        get_widget_position(widget: Widget): {
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
    }
  }

  export const layout: {
    align: {
      horizontal: Layout.Internal.LayoutConstructor<
        (this: void, left?: Widget, middle?: Widget, right?: Widget) => Layout.Internal.LayoutAlign
      >;
      vertical: Layout.Internal.LayoutConstructor<
        (this: void, top?: Widget, middle?: Widget, bottom?: Widget) => Layout.Internal.LayoutAlign
      >;
    };
    fixed: {
      horizontal: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.FixedLayout
      >;
      vertical: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.FixedLayout
      >;
    };
    flex: {
      vertical: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.FlexLayout
      >;
      horizontal: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.FlexLayout
      >;
    };
    grid: {
      horizontal: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.GridLayout
      >;
      vertical: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.GridLayout
      >;
    };
    manual: Layout.Internal.LayoutConstructor<
      (this: void, ...widgets: Widget[]) => Layout.Internal.ManualLayout
    >;
    ratio: {
      horizontal: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.RatioLayout
      >;
      vertical: Layout.Internal.LayoutConstructor<
        (this: void, ...widgets: Widget[]) => Layout.Internal.RatioLayout
      >;
    };
    stack: Layout.Internal.LayoutConstructor<
      (this: void, ...widgets: Widget[]) => Layout.Internal.StackLayout
    >;
  };

  // all of those typehacks are to restrict usage of widgets where Layout expected
  const layoutTypeGuard: unique symbol;
}
