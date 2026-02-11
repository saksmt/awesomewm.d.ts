/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, SurfaceRef, FontRef } from 'gears';
  import { Layout, Screen } from 'awful';

  export type BaseVariables = {
    cursor_mouse_move: string;
    cursor_mouse_resize: string;
    enable_spawn_cursor: boolean;
    master_width_factor: Fraction;
    useless_gap: PositiveReal;
    master_fill_policy: Layout.MasterFillPolicy;
    master_count: NaturalNumber;
    column_count: NaturalNumber;
    font: FontRef;
    wallpaper: SurfaceRef | ((this: void, screen: Screen) => SurfaceRef);
    icon_theme: string;
    awesome_icon: string;

    bg_systray: PatternRef;
    systray_icon_spacing: PositiveReal;

    bg_normal: PatternRef;
    fg_normal: PatternRef;
    border_normal: PatternRef;

    bg_urgent: PatternRef;
    fg_urgent: PatternRef;

    bg_focus: PatternRef;
    fg_focus: PatternRef;
    border_focus: PatternRef;

    bg_minimize: PatternRef;
    fg_minimize: PatternRef;

    border_marked: PatternRef;

    border_width: PositiveReal;
  };
}
