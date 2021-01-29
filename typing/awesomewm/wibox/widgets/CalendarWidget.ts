import { Widget } from '../Widget';
import { NaturalNumber, PositiveReal } from '../../common';

export interface CalendarWidget extends Widget {
  date: DateInfo | string;
  font: string;
  spacing: PositiveReal;
  week_numbers: boolean;
  start_sunday: boolean;
  long_weekdays: boolean;
  embed_fn: (
    this: void,
    widget: CalendarWidget,
    whatRendering: WhatRendering,
    date: DateInfo,
  ) => CalendarWidget;
}

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
