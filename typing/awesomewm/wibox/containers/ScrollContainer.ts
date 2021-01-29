import { Container } from './Container';
import { Widget } from '../Widget';
import { NaturalNumber, PositiveReal, RealNumber } from '../../common';

export interface ScrollContainer extends Container {
  pause(): void;
  continue(): void;
  reset_scrolling(): void;
  set_direction(direction: ScrollDirection): void;
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

export const enum ScrollDirection {
  Horizontal = 'h',
  Vertical = 'v',
}
