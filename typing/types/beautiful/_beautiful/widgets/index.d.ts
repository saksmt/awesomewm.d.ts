/// <reference path="./arcchart.d.ts" />
/// <reference path="./calendar.d.ts" />
/// <reference path="./checkbox.d.ts" />
/// <reference path="./graph.d.ts" />
/// <reference path="./piechart.d.ts" />
/// <reference path="./progressbar.d.ts" />
/// <reference path="./radialprogressbar.d.ts" />
/// <reference path="./separator.d.ts" />
/// <reference path="./slider.d.ts" />

/** @noResolution */
declare module '_beautiful' {
  export type WidgetVariables = ArcchartVariables &
    CalendarVariables &
    CheckboxVariables &
    GraphVariables &
    PiechartVariables &
    ProgressbarVariables &
    RadialprogressbarVariables &
    SeparatorVariables &
    SliderVariables;
}
