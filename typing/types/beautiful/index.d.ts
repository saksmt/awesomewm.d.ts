/// <reference path="./_beautiful/index.d.ts" />

/** @noResolution */
declare module 'beautiful' {
  import * as b from '_beautiful';

  namespace _exports {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    export type Theme<R = Record<string, any>> = b.Theme<R>;
    export type ThemeRef<R = Record<string, any>> = b.ThemeRef<R>;
    /* eslint-enable */

    export type ThemeVariables = b.ThemeVariables;
    export type WidgetVariables = b.WidgetVariables;

    export type BaseVariables = b.BaseVariables;
    export type ClientVariables = b.ClientVariables;
    export type HotkeysVariables = b.HotkeysVariables;
    export type LayoutVariables = b.LayoutVariables;
    export type LayoutlistVariables = b.LayoutlistVariables;
    export type MenuVariables = b.MenuVariables;
    export type NotificationVariables = b.NotificationVariables;
    export type PromptVariables = b.PromptVariables;
    export type SnapVariables = b.SnapVariables;
    export type TaglistVariables = b.TaglistVariables;
    export type TasklistVariables = b.TasklistVariables;
    export type TitlebarVariables = b.TitlebarVariables;
    export type TooltipVariables = b.TooltipVariables;
    export type WibarVariables = b.WibarVariables;

    export type ArcchartVariables = b.ArcchartVariables;
    export type CalendarVariables = b.CalendarVariables;
    export type CheckboxVariables = b.CheckboxVariables;
    export type GraphVariables = b.GraphVariables;
    export type PiechartVariables = b.PiechartVariables;
    export type ProgressbarVariables = b.ProgressbarVariables;
    export type RadialprogressbarVariables = b.RadialprogressbarVariables;
    export type SeparatorVariables = b.SeparatorVariables;
    export type SliderVariables = b.SliderVariables;
  }

  const _exports: b.Theme & b.BeautifulFunctions;

  export = _exports;
}
