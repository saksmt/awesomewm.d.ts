/** @noResolution */

import { Font, FontRef } from './awesomewm/pango/font';
import { NaturalNumber, RealNumber } from './awesomewm/common';
import { PatternRef, Table } from './gears';
import { ThemeVariables } from './awesomewm/beautiful/variables';
import { ScreenRef } from './awful';

/* eslint-disable @typescript-eslint/no-explicit-any */
type _Theme<R = Record<string, any>> = R & ThemeVariables;
type _ThemeRef<R = Record<string, any>> = _Theme<R> | string;

declare namespace exports {
  type Theme<R = Record<string, any>> = _Theme<R>;
  type ThemeRef<R = Record<string, any>> = _ThemeRef<R>;
}
/* eslint-enable */

declare const exports: _Theme & {
  init(this: void, config: Partial<_ThemeRef>): void;

  get_font(this: void, name: FontRef): Font;
  get_merged_font(this: void, name: FontRef, attributes: string): Font;
  get_font_height(this: void, font: FontRef): NaturalNumber;
  get<R = Table>(this: void): _Theme<R>;

  xresources: {
    get_current_theme(
      this: void,
    ): {
      background: PatternRef;
      foreground: PatternRef;
      color0: PatternRef;
      color1: PatternRef;
      color2: PatternRef;
      color3: PatternRef;
      color4: PatternRef;
      color5: PatternRef;
      color6: PatternRef;
      color7: PatternRef;
      color8: PatternRef;
      color9: PatternRef;
      color10: PatternRef;
      color11: PatternRef;
      color12: PatternRef;
      color13: PatternRef;
      color14: PatternRef;
      color15: PatternRef;
    };
    set_dpi(this: void, dpi: NaturalNumber, screen?: ScreenRef): void;
    apply_dpi(this: void, size: RealNumber, screen?: ScreenRef): RealNumber;
  };
};
export = exports;
