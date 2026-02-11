/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  import { FontRef } from 'gears';

  export namespace widget {
    export interface Calendar extends Widget {
      date: Calendar.DateInfo | string;
      font: string;
      spacing: PositiveReal;
      week_numbers: boolean;
      start_sunday: boolean;
      long_weekdays: boolean;
      embed_fn: (
        this: void,
        widget: Calendar,
        whatRendering: Calendar.WhatRendering,
        date: Calendar.DateInfo,
      ) => Calendar;
    }
    export namespace Calendar {
      export interface DateInfo {
        day: NaturalNumber | null;
        month: NaturalNumber | null;
        year: NaturalNumber;
      }

      export const enum WhatRendering {
        Header = 'header',
        Weekdays = 'weekdays',
        WeekNumber = 'weeknumber',
        Normal = 'normal',
        Focus = 'focus',
        MonthHeader = 'monthheader',
        Month = 'month',
        Year = 'year',
      }
    }

    export const calendar: {
      month: Widget.Constructor<
        (this: void, date?: Calendar.DateInfo | string, font?: FontRef) => Calendar
      >;
      year: Widget.Constructor<
        (this: void, date?: Calendar.DateInfo | string, font?: FontRef) => Calendar
      >;
    };
  }
}
