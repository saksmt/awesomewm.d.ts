/// <reference path="./Container.d.ts" />
/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export namespace container {
    export interface Scroll extends Container {
      pause(): void;

      continue(): void;

      reset_scrolling(): void;

      set_direction(direction: Scroll.Direction): void;

      set_expand(expand: boolean): void;

      set_children(children: Widget[]): void;

      set_fps(fps: NaturalNumber): void;

      set_extra_space(amount: PositiveReal): void;

      set_speed(number: RealNumber): void;

      set_max_size(size: PositiveReal | null): void;

      set_step_function(
        f: (
          sinceLastCall: RealNumber,
          childSize: PositiveReal,
          visibleSize: PositiveReal,
          speed: RealNumber,
          extraSpace: PositiveReal,
        ) => RealNumber,
      ): void;

      set_space_for_scrolling(space: PositiveReal): void;
    }
    export namespace Scroll {
      export const enum Direction {
        Horizontal = 'h',
        Vertical = 'v',
      }

      /**
       * Set the step function that determines the exact behaviour of the scrolling animation. The step function is called with five arguments:
       *
       *     The time in seconds since the state of the animation
       *     The size of the child widget
       *     The size of the visible part of the widget
       *     The speed of the animation. This should have a linear effect on this function’s behaviour.
       *     The extra space configured by set_extra_space. This was not yet added to the size of the child widget, but should likely be added to it in most cases.
       *
       * The step function should return a single number. This number is the offset at which the widget is drawn and should be between 0 and size+extra_space.
       */
      export type StepFunction = (
        elapsedSeconds: number,
        widgetSize: number,
        visibleSize: number,
        speed: number,
        extra_space: number,
      ) => number;
    }

    export const scroll: {
      horizontal: Widget.Constructor<
        (
          this: void,
          widget?: Widget,
          fsp?: PositiveIntegral,
          speed?: PositiveReal,
          extraSpace?: PositiveReal,
          expand?: boolean,
          maxSize?: PositiveReal,
          stepFunction?: Scroll.StepFunction,
          spaceForScrolling?: PositiveReal,
        ) => Scroll
      >;
      vertical: Widget.Constructor<
        (
          this: void,
          widget?: Widget,
          fsp?: PositiveIntegral,
          speed?: PositiveReal,
          extraSpace?: PositiveReal,
          expand?: boolean,
          maxSize?: PositiveReal,
          stepFunction?: Scroll.StepFunction,
          spaceForScrolling?: PositiveReal,
        ) => Scroll
      >;
      step_functions: {
        linear_increase: Scroll.StepFunction;
        linear_decrease: Scroll.StepFunction;
        linear_back_and_forth: Scroll.StepFunction;
        nonlinear_back_and_forth: Scroll.StepFunction;
        waiting_nonlinear_back_and_forth: Scroll.StepFunction;
      };
    };
  }
}
