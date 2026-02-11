/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { ScreenRef } from 'awful';
  import { AlignX, AlignY } from 'gears';

  export namespace widget {
    export interface Textbox extends Widget {
      markup: string;
      text: string;
      ellipsize: Textbox.Ellipsize;
      wrap: Textbox.Wrap;
      valing: AlignY;
      align: AlignX;
      font: string;

      get_preferred_size(screen: ScreenRef): LuaMultiReturn<[PositiveReal, PositiveReal]>;

      get_height_for_width(width: PositiveReal, screen: ScreenRef): PositiveReal;

      get_preferred_size_at_dpi(dpi: PositiveReal): LuaMultiReturn<[PositiveReal, PositiveReal]>;

      get_height_for_width_at_dpi(width: PositiveReal, dpi: PositiveReal): PositiveReal;

      set_markup_silently(markup: string): true | LuaMultiReturn<[false, string]>;
    }
    export namespace Textbox {
      export const enum Wrap {
        Char = 'char',
        Word = 'word',
        WordChar = 'word_char',
      }

      export const enum Ellipsize {
        Start = 'start',
        Middle = 'middle',
        End = 'end',
      }
    }

    export const textbox: Widget.Constructor<
      (this: void, text?: string, ignore_markup?: boolean) => Textbox
    >;
  }
}
