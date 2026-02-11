/// <reference path="../widget.d.ts" />
/// <reference path="Calendar.d.ts" />
/// <reference path="Checkbox.d.ts" />
/// <reference path="Graph.d.ts" />
/// <reference path="Image.d.ts" />
/// <reference path="PieChart.d.ts" />
/// <reference path="Progressbar.d.ts" />
/// <reference path="Separator.d.ts" />
/// <reference path="Slider.d.ts" />
/// <reference path="Systray.d.ts" />
/// <reference path="Textbox.d.ts" />
/// <reference path="TextClock.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export namespace widget {}
  export function widget<T extends Widget>(
    construct: Partial<T> & { widget: Widget.DeclarativeFactory<T> },
  ): T;
}
