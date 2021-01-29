import { Widget } from '../Widget';
import { ScreenRef } from '../../awful/screen';
import { AlignX, AlignY, PositiveReal } from '../../common';

export interface TextboxWidget extends Widget {
  markup: string;
  text: string;
  ellipsize: EllipsizeMode;
  wrap: WrapMode;
  valing: AlignY;
  align: AlignX;
  font: string;

  get_preferred_size(screen: ScreenRef): MultiReturn<[PositiveReal, PositiveReal]>;
  get_height_for_width(width: PositiveReal, screen: ScreenRef): PositiveReal;
  get_preferred_size_at_dpi(dpi: PositiveReal): MultiReturn<[PositiveReal, PositiveReal]>;
  get_height_for_width_at_dpi(width: PositiveReal, dpi: PositiveReal): PositiveReal;
  set_markup_silently(markup: string): true | MultiReturn<[false, string]>;
}

export const enum WrapMode {
  Char = 'char',
  Word = 'word',
  WordChar = 'word_char',
}

export const enum EllipsizeMode {
  Start = 'start',
  Middle = 'middle',
  End = 'end',
}
