/// <reference path="./base.d.ts" />
/// <reference path="./client.d.ts" />
/// <reference path="./hotkeys.d.ts" />
/// <reference path="./layout.d.ts" />
/// <reference path="./layoutlist.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./notification.d.ts" />
/// <reference path="./prompt.d.ts" />
/// <reference path="./snap.d.ts" />
/// <reference path="./taglist.d.ts" />
/// <reference path="./tasklist.d.ts" />
/// <reference path="./titlebar.d.ts" />
/// <reference path="./tooltip.d.ts" />
/// <reference path="./wibar.d.ts" />
/// <reference path="./widgets/index.d.ts" />

/** @noResolution */
declare module '_beautiful' {
  import { FontRef, Table, PatternRef } from 'gears';
  import { Font } from 'oocairo';
  import { ScreenRef } from 'awful';

  /* eslint-disable @typescript-eslint/no-explicit-any */
  export type Theme<R = Record<string, any>> = R & ThemeVariables;
  export type ThemeRef<R = Record<string, any>> = Theme<R> | string;
  /* eslint-enable */

  export type ThemeVariables = BaseVariables &
    CalendarVariables &
    ClientVariables &
    HotkeysVariables &
    LayoutVariables &
    LayoutlistVariables &
    MenuVariables &
    NotificationVariables &
    PromptVariables &
    SnapVariables &
    TaglistVariables &
    TasklistVariables &
    TitlebarVariables &
    TooltipVariables &
    WibarVariables &
    WidgetVariables;

  export type BeautifulFunctions = {
    init(
      this: void,
      config: Partial</*exports.ThemeVariables &*/ Record<string, unknown>> | string,
    ): void;

    get_font(this: void, name: FontRef): Font;
    get_merged_font(this: void, name: FontRef, attributes: string): Font;
    get_font_height(this: void, font: FontRef): NaturalNumber;
    get<R = Table>(this: void): R /*& exports.ThemeVariables*/;

    xresources: {
      get_current_theme(this: void): {
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
}
