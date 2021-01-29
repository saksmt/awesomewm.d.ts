import { Widget } from '../Widget';
import { ScreenRef } from '../../awful/screen';
import { PositiveReal } from '../../common';

export interface SystrayWidget extends Widget {
  set_base_size(size: PositiveReal): void;
  set_horizontal(horizontal: boolean): void;
  set_reverse(reverse: boolean): void;
  set_screen(screen: ScreenRef): void;
}
